"""
合併 XML 機種資料與 data/csv/ 底下的人工資料，輸出網頁用的 data/hmi-data.js

用法:
    python tools/build.py            建置
    python tools/build.py --check    只檢查 CSV，有錯誤時結束碼為 1

CSV 一律存成 UTF-8（Excel「CSV UTF-8」格式）。規則由上往下套用，下面的列覆蓋上面的列。
"""
import csv
import json
import sys
from datetime import datetime, timedelta, timezone
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
DATA = ROOT / "data"
CSV_DIR = DATA / "csv"

FEATURES = {
    "remoteHmi": "Remote HMI", "gpViewer": "GP-Viewer EX", "proFaceConnect": "Pro-face Connect",
    "ftp": "FTP", "web": "Web Server", "email": "E-mail", "ipsec": "IPsec", "ezLan": "EZ LAN",
}
# 資料規則：以 XML 為主，再以原廠文件或現場確認做二次查核。
# CSV 有查核結論（支援、不支援、有條件、舊版）時以查核結論為準；
# 沒有結論（空白或待確認）時採用 XML：XML 標有為右邊的狀態，標無或沒有此欄位為不支援。
XML_FALLBACK = {
    "remoteHmi": ("remoteHmiMaxXml", "yes"),   # XML 有連線數即支援，連線數一併帶入
    "ftp": ("ftpXml", "yes"),
    "email": ("emailXml", "yes"),
    "ezLan": ("ezLanXml", "yes"),
    "web": ("webXml", "ended"),               # Web Server 只支援到 GP-Pro EX 4.09.450，XML 標有視為舊版才有
}

STATUS = {"支援": "yes", "不支援": "no", "有條件": "cond", "舊版": "ended", "待確認": "unknown",
          "✓": "yes", "✗": "no", "yes": "yes", "no": "no", "cond": "cond", "ended": "ended", "unknown": "unknown"}
MOUNT = {"方形": "rect", "圓孔": "round", "盒型": "box", "手持": "handheld", "IPC": "ipc"}
SAME_CUT = {"相同": True, "不同": False, "": None}
MODEL_STATUS = {"可新建": "full", "免費版": "free", "僅開啟": "open-only", "不支援": "absent", "": "full"}
# 傳輸線接頭代碼：USB A 指 USB A 對 USB A 專用傳輸線（CA3-USBCB-01），Tool 指 GP2000 等舊機的圓形 Tool 連接埠
CABLE_KINDS = {"USB A", "USB mini-B", "USB micro-B", "Tool"}
FORM = {"面板": "panel", "盒型": "box", "手持": "handheld", "IPC": "ipc", "": "panel"}

errors = []


def read_csv(name):
    path = CSV_DIR / name
    with open(path, encoding="utf-8-sig", newline="") as f:
        rows = []
        for i, r in enumerate(csv.DictReader(f), start=2):
            r = {k.strip(): (v or "").strip() for k, v in r.items() if k}
            if any(r.values()):
                r["_where"] = f"{name} 第 {i} 列"
                rows.append(r)
        return rows


def num(v, where, field):
    if v == "":
        return None
    try:
        x = float(v)
        return int(x) if x.is_integer() else x
    except ValueError:
        errors.append(f"{where}：{field} 不是數字（{v}）")
        return None


def make_matcher(r):
    kind, values = r.get("比對方式", "全部") or "全部", [x.strip() for x in r.get("比對值", "").split("|") if x.strip()]
    if kind not in ("全部", "完全相同", "開頭", "XML群組"):
        errors.append(f"{r['_where']}：比對方式只能是 全部／完全相同／開頭／XML群組（{kind}）")
    return {"series": r.get("系列", ""), "kind": kind, "values": values}


def matches(mt, m):
    if mt["series"] and mt["series"] != m["series"]:
        return False
    if mt["kind"] == "完全相同":
        return m["name"] in mt["values"]
    if mt["kind"] == "開頭":
        return any(m["name"].startswith(v) for v in mt["values"])
    if mt["kind"] == "XML群組":
        return m["group"] in mt["values"]
    return True


def split_src(v):
    return [x.strip() for x in v.split("|") if x.strip()]


def load_extra_models():
    out = []
    for r in read_csv("models_extra.csv"):
        w = r["_where"]
        st = r.get("最新版狀態", r.get("5x狀態", ""))
        if st not in MODEL_STATUS:
            errors.append(f"{w}：最新版狀態只能是 可新建／免費版／僅開啟／不支援")
        out.append({
            "key": f"extra|{r.get('XML群組', '')}|{r.get('機種名稱', '')}",
            "seriesXml": "", "series": r.get("系列", ""), "group": r.get("XML群組", ""),
            "name": r.get("機種名稱", ""), "offlineName": "", "form": FORM.get(r.get("型態", ""), "panel"),
            "inch": num(r.get("尺寸吋", ""), w, "尺寸吋"), "resolution": r.get("解析度代碼", ""),
            "resolutionPx": r.get("解析度像素", ""), "color": r.get("色彩", ""), "touch": r.get("觸控", ""),
            "ethernet": num(r.get("LAN埠數", ""), w, "LAN埠數"),
            "com": [{"port": c.split(" ", 1)[0], "type": c.split(" ", 1)[-1]} for c in split_src(r.get("COM埠", ""))],
            "usbA": num(r.get("USB_A", ""), w, "USB_A"), "usbMiniB": num(r.get("USB_miniB", ""), w, "USB_miniB"),
            "usbMicroB": num(r.get("USB_microB", ""), w, "USB_microB"),
            "cardSlot": {"有": True, "無": False}.get(r.get("記憶卡槽", "")),
            "ftpXml": None, "webXml": None, "emailXml": None, "ezLanXml": None,
            "remoteHmiMaxXml": num(r.get("RemoteHMI連線數", ""), w, "RemoteHMI連線數"),
            "appMemoryMB": num(r.get("畫面記憶體MB", ""), w, "畫面記憶體MB"), "appMemoryExpandedMB": None,
            "backupMemoryKB": None, "revisions": [], "firstSeen": r.get("首次版本", "") or "人工新增",
            "inVersions": [], "versions": {}, "statusLatest": MODEL_STATUS.get(st, "full"), "manualNote": r.get("備註", ""), "software": r.get("開發軟體", ""),
        })
    return out


def build(check_only=False):
    gen = json.loads((DATA / "models.generated.json").read_text(encoding="utf-8"))
    sources = {r["代號"]: {"title": r["名稱"], "url": r["網址"]} for r in read_csv("sources.csv")}
    series = {}
    for r in read_csv("series.csv"):
        series[r["系列代號"]] = {"order": num(r["排序"], r["_where"], "排序") or 99, "label": r["顯示名稱"],
                               "tier": r["等級"], "desc": r["說明"], "url": r["原廠網址"]}
    fdefs = {r["功能代號"]: {"label": r["顯示名稱"], "desc": r["說明"], "src": split_src(r["來源"])}
             for r in read_csv("feature_defs.csv")}

    frules = []
    for r in read_csv("features.csv"):
        f = {}
        for k, lab in FEATURES.items():
            s = r.get(lab, "")
            if not s:
                continue
            if s not in STATUS:
                errors.append(f"{r['_where']}：{lab} 狀態只能是 支援／不支援／有條件／舊版／待確認（{s}）")
                continue
            v = {"s": STATUS[s]}
            if r.get(f"{lab} 備註"):
                v["n"] = r[f"{lab} 備註"]
            if r.get(f"{lab} 連線數"):
                v["conn"] = num(r[f"{lab} 連線數"], r["_where"], f"{lab} 連線數")
            if r.get(f"{lab} 最低版本"):
                v["ver"] = r[f"{lab} 最低版本"]
            f[k] = v
        frules.append({"m": make_matcher(r), "f": f, "src": split_src(r.get("來源", "")), "where": r["_where"]})

    crules = []
    for r in read_csv("cutouts.csv"):
        w = r["_where"]
        mount = MOUNT.get(r.get("安裝方式", ""))
        if not mount:
            errors.append(f"{w}：安裝方式只能是 方形／圓孔／盒型／手持／IPC")
        c = {"mount": mount}
        for key, col in (("w", "寬W"), ("h", "高H"), ("d", "圓孔直徑")):
            v = num(r.get(col, ""), w, col)
            if v is not None:
                c[key] = v
        if r.get("面板厚"):
            c["t"] = r["面板厚"]
        if r.get("需再確認", "").upper() == "Y":
            c["verify"] = True
        if r.get("備註"):
            c["n"] = r["備註"]
        if r.get("來源"):
            c["src"] = r["來源"]
        crules.append({"m": make_matcher(r), "c": c, "where": w})

    # 特殊開關（選用檔案）：沒有指定系列的為通用開關，有指定的對應到機種
    switches, srules = [], []
    if (CSV_DIR / "special_switches.csv").exists():
        for r in read_csv("special_switches.csv"):
            sw = {"sw": r["開關"], "en": r.get("英文說明", ""), "zh": r.get("中文說明", ""),
                  "use": r.get("用途", ""), "n": r.get("補充說明", ""), "series": r.get("系列", ""),
                  "feature": r.get("相關功能", "")}
            if sw["feature"] and sw["feature"] not in FEATURES:
                errors.append(f"{r['_where']}：相關功能只能是 {'、'.join(FEATURES)}（{sw['feature']}）")
            switches.append(sw)
            if sw["series"]:
                srules.append({"m": make_matcher(r), "s": sw, "where": r["_where"]})

    # 傳輸線（選用檔案）：規則由上往下套用，下面覆蓋上面
    cbrules = []
    if (CSV_DIR / "cables.csv").exists():
        for r in read_csv("cables.csv"):
            kinds = split_src(r.get("接頭", ""))
            bad = [k for k in kinds if k not in CABLE_KINDS]
            if bad:
                errors.append(f"{r['_where']}：接頭只能是 {'、'.join(sorted(CABLE_KINDS))}（{'、'.join(bad)}）")
            cb = {"t": r.get("傳輸線", ""), "kinds": kinds, "src": r.get("來源", "")}
            if r.get("備註"):
                cb["n"] = r["備註"]
            cbrules.append({"m": make_matcher(r), "cb": cb, "where": r["_where"]})

    rrules = []
    for r in read_csv("replacements.csv"):
        if r.get("開口", "") not in SAME_CUT:
            errors.append(f"{r['_where']}：開口只能是 相同／不同／空白")
        rep = {"to": r["建議替換為"], "sameCutout": SAME_CUT.get(r.get("開口", "")), "src": r.get("來源", "")}
        if r.get("備註"):
            rep["n"] = r["備註"]
        rrules.append({"m": make_matcher(r), "r": rep, "where": r["_where"]})

    # 檢查來源代號與系列代號
    for group, items in (("功能", frules), ("開口", crules), ("替換", rrules), ("特殊開關", srules), ("傳輸線", cbrules)):
        for it in items:
            if it["m"]["series"] and it["m"]["series"] not in series:
                errors.append(f"{it['where']}：系列代號 {it['m']['series']} 不在 series.csv")
            srcs = it.get("src") or [x for x in [it.get("c", {}).get("src"), it.get("r", {}).get("src")] if x]
            srcs = [y for x in srcs for y in split_src(x)] + split_src(it.get("cb", {}).get("src", ""))
            for s in srcs:
                if s not in sources:
                    errors.append(f"{it['where']}：來源代號 {s} 不在 sources.csv")

    extra = load_extra_models()
    for m in extra:
        # 首次版本（例如 4.09）以後的各版都標為最新版狀態；沒填或填 XML 以外的版本時只標最新版
        vk = lambda v: tuple(int(x) for x in v.split(".") if x.isdigit())
        first = m["firstSeen"] if m["firstSeen"] in gen["versions"] else gen["sourceVersion"]
        m["versions"] = {v: (m["statusLatest"] if vk(v) >= vk(first) else "absent") for v in gen["versions"]}
        # 不支援：GP-Pro EX 任何版本都不能開發（例如 GP2000 系列）
    extra_names = {(m["series"], m["name"]) for m in extra}
    base = [m for m in gen["models"] if (m["series"], m["name"]) not in extra_names]

    models = []
    used = set()
    for m in base + extra:
        if m["series"] not in series:
            errors.append(f"機種 {m['name']}：系列代號 {m['series']} 不在 series.csv")
        feats, fsrc, cut, reps = {}, [], None, []
        for i, it in enumerate(frules):
            if matches(it["m"], m):
                used.add(("f", i))
                feats.update(it["f"])
                fsrc += [s for s in it["src"] if s not in fsrc]
        for i, it in enumerate(crules):
            if matches(it["m"], m):
                used.add(("c", i))
                cut = it["c"]
        for i, it in enumerate(rrules):
            if matches(it["m"], m):
                used.add(("r", i))
                reps.append(it["r"])
        # 沒有查核結論（未設定或待確認）時採用 XML
        for k, (field, when_yes) in XML_FALLBACK.items():
            if feats.get(k, {}).get("s", "unknown") != "unknown":
                continue
            v = m.get(field)
            feats[k] = {"s": when_yes if v else "no"}
            if k == "remoteHmi" and v:
                feats[k]["conn"] = v
            if "S_XML" in sources and "S_XML" not in fsrc:
                fsrc.append("S_XML")
        cable = None
        for i, it in enumerate(cbrules):
            if matches(it["m"], m):
                used.add(("cb", i))
                cable = it["cb"]
        sws = []
        for i, it in enumerate(srules):
            if matches(it["m"], m):
                used.add(("s", i))
                sws.append(it["s"])
        mm = dict(m, features=feats, featureSrc=fsrc, cutout=cut, replace=reps, switches=sws, cable=cable)
        models.append(mm)

    for tag, items in (("f", frules), ("c", crules), ("r", rrules), ("s", srules), ("cb", cbrules)):
        for i, it in enumerate(items):
            if (tag, i) not in used:
                print(f"提醒：{it['where']} 沒有對應到任何機種")

    if errors:
        print("發現錯誤：")
        for e in errors:
            print("  " + e)
        return False
    if check_only:
        print("檢查通過")
        return True

    models.sort(key=lambda x: (series.get(x["series"], {}).get("order", 99), x["group"], x["inch"] or 0, x["name"]))
    out = {
        "sourceVersion": gen["sourceVersion"],
        "series": series,
        "versions": gen["versions"],
        "status": {"full": "可新建專案", "free": "可新建專案（免費版可用）", "open-only": "僅可開啟舊專案，不可新建",
                   "absent": "該版本未收錄"},
        "featureDefs": fdefs,
        "sources": sources,
        "switches": switches,
        "models": models,
    }
    # 資料庫日期：台灣時間，只有資料內容真的改變時才更新，避免每次建置都產生新提交
    target = DATA / "hmi-data.js"
    stamp = datetime.now(timezone(timedelta(hours=8))).strftime("%Y-%m-%d %H:%M:%S")
    if target.exists():
        try:
            t = target.read_text(encoding="utf-8")
            old = json.loads(t[t.index("{"):t.rindex("}") + 1])
            if {k: v for k, v in old.items() if k != "updated"} == out and old.get("updated"):
                stamp = old["updated"]
        except ValueError:
            pass
    out = {"updated": stamp, **out}
    target.write_text("window.HMI_DATA = " + json.dumps(out, ensure_ascii=False, indent=1) + ";\n", encoding="utf-8")
    print(f"{len(models)} 筆機種 → data/hmi-data.js（資料庫日期 {stamp}）")
    return True


if __name__ == "__main__":
    ok = build(check_only="--check" in sys.argv)
    sys.exit(0 if ok else 1)

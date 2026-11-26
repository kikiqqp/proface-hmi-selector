"""
從 GP-Pro EX 的 HmiInfo.xml 產生機種基礎資料 (data/models.generated.json)

用法:
    python tools/xml2models.py
        自動讀取 xml/HmiInfo_<版本>.xml（例如 HmiInfo_5.02.xml），版本最新者為主資料
    python tools/xml2models.py 路徑:版本 路徑:版本 ...
        手動指定檔案與版本

規則:
    1. 同一台機種出現在多個版本時，規格以「最新收錄它的版本」為準。
    2. 舊版 XML 用來判斷各版本的支援狀態與首次出現版本。
    3. 輸出所有版本 XML 的聯集，每台機種記錄各版本的狀態（versions）：
       full 可新建、free 免費版可用、open-only 僅可開啟、absent 該版未收錄。
    4. 一個機種若有多個 Revision，第一個為完整資料，之後的只記錄差異，
       合併後放在 revisions 欄位說明。
    5. 這裡只放 XML 裡的事實，人工整理的資料 (開口、功能表、替換) 放在 data/csv/ 底下。
"""
import json
import re
import sys
import xml.etree.ElementTree as ET
from pathlib import Path

RES = {
    "QVGA": "320×240", "VGA": "640×480", "SVGA": "800×600", "XGA": "1024×768",
    "WVGA": "800×480", "WQVGA": "480×272", "NCPQVGA": "480×272", "WSVGA": "1024×600",
    "WXGA": "1280×800", "FWXGA": "1366×768", "FullHD": "1920×1080", "SXGA": "1280×1024",
    # GP-4104～4107 單色機，來源 https://proface.com/en/product/spec/GP4104G1D
    "MQVGA": "200×80",
    # GPH-6500WC 直式 10 吋，來源 https://www.proface.com/en/product/hmi/gph6000/lineup
    "WXGAV": "800×1280（直式）",
}

SERIES_KEY = {
    "GP3000 Series": "GP3000", "GP4000 Series": "GP4000", "SP5000 Series": "SP5000",
    "LT3000 Series": "LT3000", "LT4000 Series": "LT4000", "ST3000 Series": "ST3000",
    "ST3000W Series": "ST3000W", "GC4000 Series": "GC4000", "ST6000 Series": "ST6000",
    "STM6000 Series": "STM6000", "STC6000 Series": "STC6000", "ET6000 Series": "ET6000",
    "ET5000 Series": "ET5000", "GP6000 Series (Standard)": "GP6000S",
    "GP6000 Series (Advanced)": "GP6000A", "GPH6000 Series (Handheld)": "GPH6000",
    "HTK Series": "HTK", "ST6000 2nd Gen Series": "ST6000G2", "IPC Series (PC/AT)": "IPC", "IPC Series(PC/AT)": "IPC",
}


# 5.02 的 XML 有 5 台機種的名稱寫成 F5.7A、F10.4B 這類代稱，見 main() 的說明
PLACEHOLDER = re.compile(r"^F\d+(\.\d+)?[A-Z]$")


def idx_name(m):
    return m["name"].strip()


def prop_value(p):
    types = p.findall("Type")
    if types:
        return [t.attrib for t in types]
    v = (p.text or "").strip()
    if p.get("nums") is not None:
        return {"value": v, "nums": int(p.get("nums"))}
    return v


def read(path):
    root = ET.parse(path).getroot()
    out = []
    for s in root.findall("Series"):
        for m in s.findall("Model"):
            revs = []
            for rv in m.findall("Revision"):
                revs.append({
                    "id": rv.get("id"),
                    "name": rv.get("name") or "",
                    "props": {p.get("name"): prop_value(p) for p in rv.findall("Property")},
                })
            out.append({
                "series": s.get("name"),
                "xmlId": m.get("id"),
                "group": (m.get("size") or "").strip(),
                "name": m.get("name"),
                "offlineName": m.get("offline_name") or "",
                "supported": m.get("supported"),
                "revs": revs,
            })
    return out


def yes(v):
    if isinstance(v, dict):
        v = v.get("value")
    if v is None:
        return None
    return v == "yes"


def nums(v):
    if isinstance(v, dict):
        return v.get("nums") if v.get("value") == "yes" else 0
    if v == "yes":
        return 1
    if v == "no":
        return 0
    return None


def com_types(v):
    if not isinstance(v, list):
        return None
    out = []
    for t in v:
        n = t.get("name", "")
        if n == "RS232C/RS422/485":
            out.append("RS232C/RS422/485")
        else:
            out.append(n)
    return "/".join(out)


def to_float(v):
    try:
        return float(v)
    except (TypeError, ValueError):
        return None


def normalize(m, first_seen, in_versions, versions):
    p = dict(m["revs"][0]["props"])
    rev_notes = []
    for r in m["revs"][1:]:
        changed = ", ".join(f"{k}={v}" for k, v in r["props"].items())
        rev_notes.append(f"{r['name']}: {changed}")
    inch_raw = p.get("Inchi")
    inch = to_float(inch_raw)
    form = "panel"
    if inch_raw in ("fixedbox",):
        form = "box"
    elif inch_raw in ("free",):
        form = "ipc"
    if p.get("Handy") is not None and form == "panel" and SERIES_KEY.get(m["series"]) == "GPH6000":
        form = "handheld"
    res_code = p.get("Resolution")
    coms = []
    for i in range(1, 10):
        c = com_types(p.get(f"Com{i}"))
        if c:
            coms.append({"port": f"COM{i}", "type": c})
    status = status_of(m)
    return {
        "key": f"{m['xmlId']}|{m['group']}|{m['name']}",
        "seriesXml": m["series"],
        "series": SERIES_KEY.get(m["series"], m["series"]),
        "group": m["group"],
        "name": m["name"].strip(),
        "offlineName": m["offlineName"],
        "form": form,
        "inch": inch,
        "resolution": res_code,
        "resolutionPx": RES.get(res_code, ""),
        "color": p.get("Color"),
        "touch": p.get("TouchPanel"),
        "ethernet": nums(p.get("Ethernet")),
        "com": coms,
        "usbA": nums(p.get("Usb")),
        "usbMiniB": nums(p.get("Usb-miniB")),
        "usbMicroB": nums(p.get("Usb-microB")),
        "cardSlot": yes(p.get("Cf")),
        "ftpXml": yes(p.get("FtpServer")),
        "webXml": yes(p.get("WebServer")),
        "emailXml": yes(p.get("Email")),
        "ezLanXml": yes(p.get("EzLan")),
        "remoteHmiMaxXml": int(p["RemoteHMIMaxConnection"]) if p.get("RemoteHMIMaxConnection") else None,
        "appMemoryMB": to_float(p.get("GamenMemory")),
        "appMemoryExpandedMB": to_float(p.get("ExpandedGamenMemory")),
        "backupMemoryKB": to_float(p.get("BackupMemory")),
        "revisions": rev_notes,
        "firstSeen": first_seen,
        "inVersions": in_versions,
        "versions": versions,
        "statusLatest": status,
    }


def status_of(m):
    """XML 的 supported 屬性：空白 可新建、free 免費版可用、no 僅可開啟"""
    return {None: "full", "free": "free", "no": "open-only"}.get(m["supported"], m["supported"])


def version_key(v):
    return [int(x) for x in v.split(".")]


def main(args):
    if args:
        pairs = [a.rsplit(":", 1) for a in args]
    else:
        # 沒給參數時，自動讀 xml/HmiInfo_<版本>.xml，依版本由舊到新排序
        xml_dir = Path(__file__).resolve().parent.parent / "xml"
        pairs = [(str(p), p.stem.split("_", 1)[1]) for p in xml_dir.glob("HmiInfo_*.xml")]
        pairs.sort(key=lambda x: version_key(x[1]))
        if not pairs:
            sys.exit("xml/ 底下找不到 HmiInfo_<版本>.xml")
    data = [(ver, read(path)) for path, ver in pairs]
    all_vers = [v for v, _ in data]
    latest_ver = all_vers[-1]

    # 每個版本建立索引：先用 id+名稱，找不到再用 id（處理改名的機種）
    idx = {}
    for ver, models in data:
        by_name = {m["xmlId"] + "|" + m["name"]: m for m in models}
        by_id = {}
        for m in models:
            by_id.setdefault(m["xmlId"], m)
        idx[ver] = (by_name, by_id)

    def find(ver, m):
        by_name, by_id = idx[ver]
        return by_name.get(m["xmlId"] + "|" + m["name"]) or by_id.get(m["xmlId"])

    # 由新到舊取所有版本的聯集：機種資料以「最新收錄它的版本」為準
    picked, used_ids = [], {}
    for ver, models in reversed(data):
        for m in models:
            k = m["xmlId"] + "|" + m["name"]
            if k in used_ids:
                continue
            if any(find(v, m) is not None for v in all_vers[all_vers.index(ver) + 1:]):
                continue  # 較新版本已收錄（可能改名）
            used_ids[k] = ver
            picked.append(m)

    result = []
    for m in picked:
        versions = {}
        for v in all_vers:
            f = find(v, m)
            versions[v] = status_of(f) if f is not None else "absent"
        present = [v for v in all_vers if versions[v] != "absent"]
        # 代稱：5.02 的 XML 把部分機種的名稱寫成 F5.7A 這類代稱（同 id、同 offline_name、規格相同）。
        # 這時沿用舊版 XML 的正式名稱，寫代稱的版本狀態標為待確認，不直接採信。
        xml_alias = None
        if PLACEHOLDER.match(m["name"].strip()):
            for v in reversed(all_vers):
                f = find(v, m)
                if f is not None and not PLACEHOLDER.match(f["name"].strip()) and f["offlineName"] == m["offlineName"]:
                    xml_alias = m["name"].strip()
                    m = dict(m, name=f["name"])
                    break
            if xml_alias:
                for v in all_vers:
                    f = find(v, m)
                    if f is not None and PLACEHOLDER.match(f["name"].strip()):
                        versions[v] = "unknown"
        mm = normalize(m, present[0], present, versions)
        if xml_alias:
            mm["xmlAlias"] = {v: idx_name(find(v, m)) for v in all_vers if find(v, m) is not None and PLACEHOLDER.match(idx_name(find(v, m)))}
        # 新版 XML 新增的 COM 埠（例如 5.02 起 GP6000 Advanced 支援序列介面擴充單元）分開記錄，
        # 主要欄位保留前一版就有的 COM 埠，避免把選配擴充的埠算成本體內建
        prev = [v for v in present if v != latest_ver]
        if versions[latest_ver] != "absent" and prev:
            old = normalize(find(prev[-1], m), "", [], {})["com"]
            if len(mm["com"]) > len(old) and mm["com"][:len(old)] == old:
                mm["comAdded"] = {"since": latest_ver, "ports": mm["com"][len(old):]}
                mm["com"] = old
        if versions[latest_ver] == "absent":
            mm["statusLatest"] = "absent"
        elif versions[latest_ver] == "unknown":
            mm["statusLatest"] = "unknown"
        result.append(mm)
    out = Path(__file__).resolve().parent.parent / "data" / "models.generated.json"
    out.write_text(json.dumps({"sourceVersion": latest_ver, "versions": all_vers, "models": result}, ensure_ascii=False, indent=1), encoding="utf-8")
    print(f"{len(result)} models written to {out}")


if __name__ == "__main__":
    main(sys.argv[1:])

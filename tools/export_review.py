"""
把 data/hmi-data.js 匯出成核對用的 Excel (review/HMI_核對總表.xlsx)

用法:
    python tools/export_review.py
"""
import json
from pathlib import Path

from openpyxl import Workbook
from openpyxl.styles import Alignment, Font, PatternFill

ROOT = Path(__file__).resolve().parent.parent
raw = (ROOT / "data" / "hmi-data.js").read_text(encoding="utf-8")
D = json.loads(raw[raw.index("{"): raw.rindex("}") + 1])

MARK = {"yes": "✓", "no": "✗", "cond": "有條件", "ended": "舊版才有", "unknown": "待確認", None: ""}
TOUCH = {"analog": "類比電阻", "analog(multi-touch)": "類比電阻多點", "p-cap(multi-touch)": "投射電容多點",
         "matrix": "矩陣電阻", "none": "無", None: ""}
FORM = {"panel": "面板", "box": "盒型／模組", "ipc": "IPC", "handheld": "手持"}


def disp_name(m):
    n = m["name"]
    if m["series"] == "SP5000":
        box = m["group"].replace("/5B41*", "x")
        if n == "DC Power Supply Adapter":
            return f"{box}（DC 電源轉接，Box 單獨）"
        return f"{n[:2]}-{n[2:-1]} + {box}"
    return n


def cut_text(c):
    if not c:
        return ""
    if c.get("w"):
        return f"{c['w']:g} × {c['h']:g}"
    if c.get("d"):
        return f"φ{c['d']:g}"
    return {"box": "不適用（盒型）", "handheld": "不適用（手持）", "ipc": "不適用（IPC）",
            "round": "圓孔", "rect": ""}.get(c.get("mount"), "")


def f(m, k):
    v = m["features"].get(k) or {}
    return v


def src_title(sid):
    s = D["sources"].get(sid)
    return s["title"] if s else ""


wb = Workbook()
ws = wb.active
ws.title = "機種總表"
VS = {"full": "可新建", "free": "免費版可用", "open-only": "僅可開啟", "unknown": "待確認", "absent": "未收錄"}
VERS = D.get("versions", [D["sourceVersion"]])
HAS_SW = any(m.get("switches") for m in D["models"])
def mem_web(m):
    w = m.get("memWeb")
    if not w:
        return ""
    parts = [w["code"]]
    if "u" in w:
        parts.append(f"使用者資料記憶體 {w['u']} MB")
    if "b" in w:
        parts.append(f"備份記憶體 {w['b']} KB")
    if "v" in w:
        parts.append(f"變數區 {w['v']} KB")
    for k in ("o", "n"):
        if w.get(k):
            parts.append(w[k])
    return "；".join(parts)


head = ["系列", "機種", "尺寸 (吋)", "解析度"] + [f"GP-Pro EX {v}" for v in VERS] + ["首次出現 XML", "開口 W×H (mm)", "面板厚 (mm)", "開口備註",
        "Remote HMI", "Remote HMI 連線數", "Remote HMI 最低版本", "GP-Viewer EX", "Pro-face Connect", "FTP Server",
        "Web Server", "E-mail", "IPsec", "EZ LAN", "功能備註", "型態", "觸控", "LAN 埠", "COM 埠", "USB A",
        "USB mini/micro B", "記憶卡槽", "使用者資料記憶體 MB", "備份記憶體 KB", "原廠規格頁記憶體", "原廠建議替換"] + (["特殊開關切換"] if HAS_SW else []) + ["開口來源", "功能來源", "XML 群組", "XML 名稱",
        "修正意見（請填）"]
ws.append(head)
for m in D["models"]:
    c = m["cutout"] or {}
    notes = []
    for k in ("remoteHmi", "gpViewer", "proFaceConnect", "ftp", "web", "email", "ezLan"):
        n = f(m, k).get("n")
        if n:
            notes.append(f"{D['featureDefs'][k]['label']}：{n}")
    rh = f(m, "remoteHmi")
    conn = rh.get("conn") if rh.get("s") in ("yes", "cond") else None
    if conn is None and rh.get("s") in ("yes", "cond"):
        conn = m.get("remoteHmiMaxXml")
    fsrc = set(m.get("featureSrc") or [])
    for k in m["features"].values():
        fsrc.update(k.get("src", []))
    usbmb = " / ".join(x for x in [f"mini {m['usbMiniB']}" if m.get("usbMiniB") else "", f"micro {m['usbMicroB']}" if m.get("usbMicroB") else ""] if x)
    rep = "；".join((r["to"] + ("（開口相同）" if r.get("sameCutout") is True else "（開口不同）" if r.get("sameCutout") is False else "")) for r in m["replace"])
    cnote = c.get("n", "")
    if c.get("verify"):
        cnote = ("需再確認。" + cnote).strip()
    ws.append([
        D["series"][m["series"]]["label"], disp_name(m), m["inch"] if m["inch"] else "",
        f"{m['resolution']} {m['resolutionPx']}".strip(), *[VS[m.get("versions", {}).get(v, "absent")] for v in VERS], m["firstSeen"],
        cut_text(c), c.get("t", ""), cnote,
        MARK[rh.get("s")], conn or "", rh.get("ver", ""),
        MARK[f(m, "gpViewer").get("s")], MARK[f(m, "proFaceConnect").get("s")], MARK[f(m, "ftp").get("s")],
        MARK[f(m, "web").get("s")], MARK[f(m, "email").get("s")], MARK[f(m, "ipsec").get("s")], MARK[f(m, "ezLan").get("s")],
        "；".join(notes), FORM.get(m["form"], m["form"]), TOUCH.get(m["touch"], m["touch"] or ""),
        m["ethernet"] if m["ethernet"] is not None else "", "、".join(f"{x['port']} {x['type']}" for x in m["com"]),
        m["usbA"] if m["usbA"] is not None else "", usbmb, "有" if m["cardSlot"] else "無" if m["cardSlot"] is False else "",
        m["appMemoryMB"] or "", m.get("backupMemoryKB") if m.get("backupMemoryKB") is not None else "", mem_web(m), rep, *(["；".join(f"{x['sw']} {x['use'] or x['zh']}" for x in m.get("switches", []))] if HAS_SW else []), src_title(c.get("src", "")), "、".join(src_title(s) for s in sorted(fsrc)),
        m["group"], m["name"], None,
    ])
hdr_fill = PatternFill("solid", fgColor="EAF2FB")
for cell in ws[1]:
    cell.font = Font(bold=True)
    cell.fill = hdr_fill
    cell.alignment = Alignment(wrap_text=True, vertical="top")
ws.freeze_panes = "C2"
from openpyxl.utils import get_column_letter
wd = {"系列": 16, "機種": 30, "解析度": 16, "開口 W×H (mm)": 14, "開口備註": 26, "功能備註": 40, "COM 埠": 30,
      "原廠規格頁記憶體": 40, "原廠建議替換": 36, "特殊開關切換": 30, "開口來源": 28, "功能來源": 40, "XML 名稱": 26, "修正意見（請填）": 30}
widths = {get_column_letter(i + 1): wd.get(h, 11) for i, h in enumerate(head)}
for k, v in widths.items():
    ws.column_dimensions[k].width = v

# 待確認事項
w2 = wb.create_sheet("待確認事項")
w2.append(["#", "項目", "說明", "目前處理方式", "您的確認"])
issues = [
    ("GP6000 Advanced Remote HMI 連線數", "已確認：5.02 版本說明寫 5.02 起增加為 5 台，5.02 XML 也是 5 台（5.01 為 3 台）。", "採 5 台，最低版本 5.02 的說明寫在備註。"),
    ("5.02 XML 的代稱機種", "GP-4301TW、GP-4501TW、GP-4301TM 模組型、ST-6300TA、ST-6500TA 在 5.02 XML 名稱寫成 F5.7B 等代稱，規格不變。", "沿用原名，5.02 狀態標「待確認」，請在 GP-Pro EX 5.02 的機種選單確認。"),
    ("SP-5B40、SP-5B41 的 COM3～COM9", "5.02 XML 新增，原廠文件未說明來源。", "主欄只列 COM1、COM2，另列於「其他 COM 埠」。"),
    ("ST6000 2nd Gen 開口與功能", "原廠產品頁標示即將推出，尚無規格頁。", "開口留空；Remote HMI 依 Client for Win 頁 3 台，其餘依 XML。"),
    ("SP5000 Open Box 的 GP-Viewer EX", "手冊功能表列為支援，授權設定頁卻排除 Open Box。", "標示「有條件」。"),
    ("Web Server", "原廠手冊註明 4.09.450 以前版本才支援，5.x 各機種皆不可用；XML 仍標示 yes。", "現行機種一律標「舊版才有」或 ✗，不採 XML 值。"),
    ("GP6000 Standard 不支援 GP-Viewer EX、E-mail", "手冊 1.5 功能表如此標示，業務上影響大。", "照手冊標 ✗，請以實機或原廠窗口確認。"),
    ("ET6000 不支援 Pro-face Connect", "手冊 1.5 功能表如此標示。", "照手冊標 ✗。"),
    ("GP6000 Advanced、GPH6000、ET5000、STC6000 功能表", "沒找到這幾個系列的手冊 1.5 功能頁。", "依 XML 與零散原廠頁面填，其餘標「待確認」。"),
    ("GP-4G01、GP-4311HT、GP-4501TTF、GP-4601TTF", "功能與開口都沒找到原廠資料，TTF 的意義也待確認。", "標「待確認」。"),
    ("模組型開口 (GP-4201TM/4301TM、LT-4201TM/4301TM)", "應為圓孔安裝，孔徑尚未查到。", "標「圓孔，孔徑待查」。STM6000 已確認 φ22.5。"),
    ("GP-4104～4107 單色機開口 105×66", "由 GP-4114T 轉接框說明推定，非單色機本身手冊。", "標「需再確認」。"),
    ("GC4000 開口", "來源為第三方網站轉載的原廠安裝指南。", "標「需再確認」。"),
    ("SP5000X 戶外型 (SP5490WA/5690WA/5790WA)、ST3000W、HTK、LT-3201A 開口", "未查到。", "空白。"),
    ("5.x「僅可開啟」名單", "XML supported=no 的機種含 GC4000、ST3000W、HTK、GP4000M、GP-4402WW/4502WW、GP-4G01，但原廠停止支援公告未列這幾個。", "依您說明，視為可開啟舊專案、不可新建。"),
    ("ET5000 免費版", "XML 標 free，原廠 Free 版清單只列 ET6000 與 GP-4100 彩色機。", "照 XML 標示，備註待確認。"),
    ("GP3000 GP-Viewer EX", "GP-Viewer EX 型號頁列 GP3000 支援，但 GP3000 在 5.x 已停止支援。", "標「有條件」：需 LAN 埠且限 4.x。"),
]
for i, (a, b, c) in enumerate(issues, 1):
    w2.append([i, a, b, c, None])
for cell in w2[1]:
    cell.font = Font(bold=True)
    cell.fill = hdr_fill
for k, v in {"A": 4, "B": 36, "C": 60, "D": 40, "E": 30}.items():
    w2.column_dimensions[k].width = v
for row in w2.iter_rows(min_row=2):
    for cell in row:
        cell.alignment = Alignment(wrap_text=True, vertical="top")

# 功能說明
w3 = wb.create_sheet("功能說明")
w3.append(["功能", "說明", "來源"])
for k, v in D["featureDefs"].items():
    w3.append([v["label"], v["desc"], "、".join(src_title(s) for s in v["src"])])
w3.append([])
w3.append(["符號", "意義"])
for k, v in [("✓", "支援"), ("✗", "不支援"), ("有條件", "需特定條件，見功能備註"), ("舊版才有", "只有較舊的 GP-Pro EX 版本支援"), ("待確認", "尚未找到原廠明確資料")]:
    w3.append([k, v])
for cell in w3[1]:
    cell.font = Font(bold=True)
    cell.fill = hdr_fill
for k, v in {"A": 22, "B": 70, "C": 60}.items():
    w3.column_dimensions[k].width = v

# 來源
w4 = wb.create_sheet("資料來源")
w4.append(["代號", "名稱", "網址"])
for k, v in D["sources"].items():
    w4.append([k, v["title"], v["url"]])
    w4.cell(row=w4.max_row, column=3).hyperlink = v["url"]
for cell in w4[1]:
    cell.font = Font(bold=True)
    cell.fill = hdr_fill
for k, v in {"A": 22, "B": 50, "C": 90}.items():
    w4.column_dimensions[k].width = v

out = ROOT / "review" / "HMI_核對總表.xlsx"
out.parent.mkdir(exist_ok=True)
wb.save(out)
print(out, ws.max_row - 1, "rows")

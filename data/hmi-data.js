window.HMI_DATA = {
 "updated": "2026-11-25 13:21:21",
 "sourceVersion": "5.01",
 "series": {
  "GP6000A": {
   "order": 1,
   "label": "GP6000 Advanced",
   "tier": "advanced",
   "desc": "進階型，寬螢幕至 22 吋，可擴充介面，SP5000 P/S Box 的後繼。",
   "url": "https://www.proface.com/en-us/product/hmi/gp6000/top"
  },
  "GP6000S": {
   "order": 2,
   "label": "GP6000 Standard",
   "tier": "advanced",
   "desc": "4:3 標準型，GP3000／GP4000 同尺寸開口替換首選。",
   "url": "https://www.proface.com/en-us/product/hmi/gp6000/top"
  },
  "GPH6000": {
   "order": 3,
   "label": "GPH6000 手持型",
   "tier": "advanced",
   "desc": "手持式人機，GP4000H 後繼。",
   "url": "https://www.proface.com/en/product/hmi/gph6000/feature"
  },
  "SP5000": {
   "order": 4,
   "label": "SP5000 模組型",
   "tier": "advanced",
   "desc": "顯示器與 Box 分離組合。5B00 Standard、5B10 Power、5B40/5B41 Open (Windows)、5B90 戶外 SP5000X。",
   "url": "https://www.proface.com/en/product/hmi/sp5000/lineup"
  },
  "GP4000": {
   "order": 5,
   "label": "GP4000 標準型",
   "tier": "standard",
   "desc": "標準機種，含 GP4100 小型機、GP4000M 模組型、W 型。",
   "url": "https://www.proface.com/en/product/hmi/gp4000/top"
  },
  "ST6000": {
   "order": 6,
   "label": "ST6000 基本型",
   "tier": "basic",
   "desc": "寬螢幕基本型人機，鋁合金面板。",
   "url": "https://www.proface.com/en/product/hmi/top"
  },
  "STM6000": {
   "order": 7,
   "label": "STM6000 模組型",
   "tier": "basic",
   "desc": "φ22 圓孔安裝的小型模組人機。",
   "url": "https://www.proface.com/en/product/hmi/top"
  },
  "STC6000": {
   "order": 8,
   "label": "STC6000 控制型",
   "tier": "basic",
   "desc": "內建 DIO 的人機控制器。",
   "url": "https://www.proface.com/en/product/hmi/top"
  },
  "ET6000": {
   "order": 9,
   "label": "ET6000 入門型",
   "tier": "entry",
   "desc": "入門型寬螢幕，GP-Pro EX 5.x 免費版可開發。",
   "url": "https://www.proface.com/en/product/hmi/et6000/top"
  },
  "ET5000": {
   "order": 10,
   "label": "ET5000 入門型",
   "tier": "entry",
   "desc": "經濟型寬螢幕。",
   "url": "https://www.proface.com/en/product/hmi/top"
  },
  "LT4000": {
   "order": 11,
   "label": "LT4000M 控制型",
   "tier": "standard",
   "desc": "模組型人機加 PLC 控制（DIO／類比）。",
   "url": "https://www.proface.com/en/product/hmi/top"
  },
  "GC4000": {
   "order": 12,
   "label": "GC4000",
   "tier": "legacy",
   "desc": "寬螢幕經濟型，無 LAN。",
   "url": "https://www.proface.com/en/product/hmi/top"
  },
  "GP3000": {
   "order": 13,
   "label": "GP3000（舊）",
   "tier": "legacy",
   "desc": "GP-Pro EX 5.x 起停止支援。",
   "url": "https://www.proface.com/en/product/discon/top"
  },
  "LT3000": {
   "order": 14,
   "label": "LT3000（舊）",
   "tier": "legacy",
   "desc": "GP-Pro EX 5.x 起停止支援。",
   "url": "https://www.proface.com/en/product/discon/top"
  },
  "ST3000": {
   "order": 15,
   "label": "ST3000（舊）",
   "tier": "legacy",
   "desc": "GP-Pro EX 5.x 起停止支援。",
   "url": "https://www.proface.com/en/product/discon/top"
  },
  "ST3000W": {
   "order": 16,
   "label": "ST3000W（舊）",
   "tier": "legacy",
   "desc": "",
   "url": "https://www.proface.com/en/product/discon/top"
  },
  "HTK": {
   "order": 17,
   "label": "HTK",
   "tier": "legacy",
   "desc": "",
   "url": "https://www.proface.com/en/product/hmi/top"
  },
  "IPC": {
   "order": 18,
   "label": "IPC／WinGP",
   "tier": "ipc",
   "desc": "工業電腦執行 WinGP。",
   "url": "https://www.proface.com/en/product/hmi/top"
  }
 },
 "versions": [
  "4.08",
  "4.09",
  "5.01"
 ],
 "status": {
  "full": "可新建專案",
  "free": "可新建專案（免費版可用）",
  "open-only": "僅可開啟舊專案，不可新建",
  "absent": "該版本未收錄"
 },
 "featureDefs": {
  "remoteHmi": {
   "label": "Pro-face Remote HMI",
   "desc": "手機／平板 App（iOS、Android）與 Windows 版 Client 遠端監看操作。Windows 版需另購授權 PFXEXRHCLS。",
   "src": [
    "S_RHMI_APP",
    "S_RHMI_WIN"
   ]
  },
  "gpViewer": {
   "label": "GP-Viewer EX",
   "desc": "Windows 電腦端遠端監看操作。每台人機需一組授權 EX-VIEWER-LICENSE，一組授權最多 3 個 GP-Viewer EX 同時連線。",
   "src": [
    "S_GPV_LIC",
    "S_GPV_OV",
    "S_GPV_MODEL"
   ]
  },
  "proFaceConnect": {
   "label": "Pro-face Connect",
   "desc": "跨網路安全遠端連線（人機可登錄為 SiteManager）。",
   "src": [
    "S_PFC"
   ]
  },
  "ftp": {
   "label": "FTP Server",
   "desc": "人機內建 FTP，可遠端存取 SD／USB 檔案。",
   "src": []
  },
  "web": {
   "label": "Web Server",
   "desc": "瀏覽器存取人機。GP-Pro EX 4.09.450 以後版本已不支援。",
   "src": []
  },
  "email": {
   "label": "E-mail 通知",
   "desc": "",
   "src": []
  },
  "ipsec": {
   "label": "IPsec 加密",
   "desc": "",
   "src": []
  },
  "ezLan": {
   "label": "EZ LAN Adapter",
   "desc": "以轉接器增加一個 LAN 埠。",
   "src": []
  }
 },
 "sources": {
  "S_REL50": {
   "title": "GP-Pro EX Ver.5.0 Readme（停止支援機種與功能）",
   "url": "https://www.proface.com/media/59646"
  },
  "S_LIC50": {
   "title": "GP-Pro EX Ver.5.00 以後注意事項（授權種類、Free 版機種）",
   "url": "https://www.proface.com/data/manual/gpproex/new/refer/mergedProjects/welcome/welcome_rr_gpproex500.htm"
  },
  "S_REL501": {
   "title": "GP-Pro EX Ver.5.01.000 更新內容",
   "url": "https://www.proface.com/en/news/2025/1205a"
  },
  "S_RHMI_WIN": {
   "title": "Pro-face Remote HMI Client for Win 支援機種與連線數",
   "url": "https://www.proface.com/en/product/soft/remotehmi_client/spec/remotehmi_client"
  },
  "S_RHMI_APP": {
   "title": "Pro-face Remote HMI（手機／平板 App）版本資訊",
   "url": "https://www.proface.com/en-us/product/soft/remotehmi/top"
  },
  "S_GPV_LIC": {
   "title": "GP-Viewer EX 授權可設定機種",
   "url": "https://www.proface.com/data/manual/gpproex/new/refer/mergedProjects/maintenance/maintenance_pr_gp-viewer_ex_rpa_license.htm"
  },
  "S_GPV_OV": {
   "title": "GP-Viewer EX 授權與同時連線數",
   "url": "https://www.proface.com/data/manual/gpproex/new/refer/mergedProjects/remote/remote_ov_gpviewerrundisplayunit.htm"
  },
  "S_GPV_MODEL": {
   "title": "GP-Viewer EX 相關軟體與型號",
   "url": "https://www.proface.com/en/product/soft/gpviewerex/model"
  },
  "S_PFC": {
   "title": "Pro-face Connect 支援機種",
   "url": "https://www.proface.com/en/product/soft/proface_connect/environment"
  },
  "S_F_GP4100": {
   "title": "GP-Pro EX 手冊 1.5 支援功能：GP-4100",
   "url": "https://www.proface.com/data/manual/gpproex/new/refer/mergedProjects/welcome/welcome_mm_gp4100.htm"
  },
  "S_F_GP4200": {
   "title": "GP-Pro EX 手冊 1.5 支援功能：GP-4200",
   "url": "https://www.proface.com/data/manual/gpproex/new/refer/mergedProjects/welcome/welcome_mm_gp4200.htm"
  },
  "S_F_GP4300": {
   "title": "GP-Pro EX 手冊 1.5 支援功能：GP-4300",
   "url": "https://www.proface.com/data/manual/gpproex/new/refer/mergedProjects/welcome/welcome_mm_gp4300.htm"
  },
  "S_F_GP4400": {
   "title": "GP-Pro EX 手冊 1.5 支援功能：GP-4400",
   "url": "https://www.proface.com/data/manual/gpproex/new/refer/mergedProjects/welcome/welcome_mm_gp4400.htm"
  },
  "S_F_GP4500": {
   "title": "GP-Pro EX 手冊 1.5 支援功能：GP-4500",
   "url": "https://www.proface.com/data/manual/gpproex/new/refer/mergedProjects/welcome/welcome_mm_gp4500.htm"
  },
  "S_F_GP4600": {
   "title": "GP-Pro EX 手冊 1.5 支援功能：GP-4600",
   "url": "https://www.proface.com/data/manual/gpproex/new/refer/mergedProjects/welcome/welcome_mm_gp4600.htm"
  },
  "S_F_SP5000": {
   "title": "GP-Pro EX 手冊 1.5 支援功能：SP5000",
   "url": "https://www.proface.com/data/manual/gpproex/new/refer/mergedProjects/welcome/welcome_mm_sp5000.htm"
  },
  "S_F_ST6000": {
   "title": "GP-Pro EX 手冊 1.5 支援功能：ST6000",
   "url": "https://www.proface.com/data/manual/gpproex/new/refer/mergedProjects/welcome/welcome_mm_st6000.htm"
  },
  "S_F_STM6000": {
   "title": "GP-Pro EX 手冊 1.5 支援功能：STM6000",
   "url": "https://www.proface.com/data/manual/gpproex/new/refer/mergedProjects/welcome/welcome_mm_stm6000.htm"
  },
  "S_F_ET6000": {
   "title": "GP-Pro EX 手冊 1.5 支援功能：ET6000",
   "url": "https://www.proface.com/data/manual/gpproex/new/refer/mergedProjects/welcome/welcome_mm_et6000.htm"
  },
  "S_F_GP6000S": {
   "title": "GP-Pro EX 手冊 1.5 支援功能：GP6000 Standard",
   "url": "https://www.proface.com/data/manual/gpproex/new/refer/mergedProjects/welcome/welcome_mm_gp6000.htm"
  },
  "S_F_LT4000": {
   "title": "GP-Pro EX 手冊 1.5 支援功能：LT4000",
   "url": "https://www.proface.com/data/manual/gpproex/new/refer/mergedProjects/welcome/welcome_mm_lt4000.htm"
  },
  "S_C_GP4000": {
   "title": "GP4000 Series 硬體手冊",
   "url": "https://proface.com/media/48911"
  },
  "S_C_GP4100": {
   "title": "GP-4114T 原廠規格頁",
   "url": "https://www.proface.com/en/product/spec/PFXGP4114T2D"
  },
  "S_C_GP4402WW": {
   "title": "GP-4402WW 原廠規格頁",
   "url": "https://www.proface.com/en/product/spec/PFXGP4402WADW"
  },
  "S_C_GP4502WW": {
   "title": "GP-4502WW 原廠規格頁",
   "url": "https://proface.com/en/product/spec/PFXGP4502WADW"
  },
  "S_C_GP3000": {
   "title": "GP3000 Series 硬體手冊",
   "url": "https://www.proface.com/media/48933"
  },
  "S_C_ST3000": {
   "title": "ST3000 Series 納入仕樣書",
   "url": "https://www.proface.com/media/58640"
  },
  "S_C_LT3000": {
   "title": "LT Type A 換 LT3000 替換手冊",
   "url": "https://www.proface.com/media/43487"
  },
  "S_C_GP6000S": {
   "title": "GP6000 Standard 使用手冊：開口尺寸",
   "url": "https://www.proface.com/data/ql/GP6000-STD/GP6000%20Series%20Standard%20Model%20User%20Guide/English/BM_GP6000%20Series%20Standard%20User%20Guide_DD00627115_files/PanelCutDimensions-98714D9B.html"
  },
  "S_C_GP6000A": {
   "title": "GP6000 Advanced 使用手冊：開口尺寸",
   "url": "https://www.proface.com/data/ql/GP6000/GP6000%20Series%20Advanced%20Model%20User%20Guide/English/BM_GP6000%20Series%20Advanced%20Model%20User%20Guide_DD00729816_files/PanelCutDimensions-DC4AAF7E.html"
  },
  "S_C_SP5000": {
   "title": "SP5000 Series 型錄（日文）",
   "url": "https://www.proface.com/sites/default/files/2024-03/Catalog_SP5000_19_ja.pdf"
  },
  "S_C_ST6000": {
   "title": "ST6000 Series 規格書",
   "url": "https://proface.com/media/45029"
  },
  "S_C_ST6300": {
   "title": "ST-6300TA 原廠規格頁",
   "url": "https://proface.com/en/product/spec/PFXST6300TADE"
  },
  "S_C_ST6500TA": {
   "title": "ST-6500TA 原廠規格頁",
   "url": "https://proface.com/en/product/spec/PFXST6500TADE"
  },
  "S_C_STC6000": {
   "title": "STC6000 硬體手冊：結構規格",
   "url": "https://www.proface.com/data/ql/STC6000/STC6000%20Series%20Hardware%20Manual/English/BM_STC6000%20Series%20Hardware%20Manual_0001000644_files/D-SE-0087975.html"
  },
  "S_C_STM6000": {
   "title": "STM6000 硬體手冊：開口尺寸",
   "url": "https://www.proface.com/data/ql/STM6000/STM6000%20Series%20Hardware%20Manual/English/STM6000%20Series%20Hardware%20Manual_0000520148_files/PanelCutDimensionsREF_0000421122.html"
  },
  "S_C_ET6400": {
   "title": "ET-6400WA 原廠規格頁",
   "url": "https://proface.com/en/product/spec/pfxet6400wad"
  },
  "S_C_ET6600": {
   "title": "ET-6600WA 原廠規格頁",
   "url": "https://proface.com/en/product/spec/PFXET6600WAD"
  },
  "S_C_ET6000": {
   "title": "ET6000 Series 規格書",
   "url": "https://proface.com/media/44720"
  },
  "S_C_ET5400": {
   "title": "ET-5400WA 原廠規格頁",
   "url": "https://www.proface.com/en/product/spec/PFXET5400WAD"
  },
  "S_C_ET5500": {
   "title": "ET-5500WA 原廠規格頁",
   "url": "https://www.proface.com/en/product/spec/PFXET5500WAD"
  },
  "S_C_GC4000": {
   "title": "GC4000 系列硬體手冊（簡體中文）：面板開孔尺寸",
   "url": "https://www.proface.tech/otasuke/files/manual/gp_hard/GC4000_MM_CN-PDF.pdf"
  },
  "S_C_GPH6000": {
   "title": "GPH6000 使用手冊：安裝孔",
   "url": "https://www.proface.com/data/ql/GPH6000/GPH6000%20Series%20User%20Guide/English/BM_GPH6000%20Series%20User%20Guide_DD00720566_files/PanelCut-outDimensions-D655961A.html"
  },
  "S_R_DISCON": {
   "title": "原廠停產品替換查詢",
   "url": "https://www.proface.com/en/product/discon/top"
  },
  "S_R_GP3300_GP6300": {
   "title": "替換手冊 GP3000 5.7 吋 → GP6000 Standard",
   "url": "https://www.proface.com/media/59245"
  },
  "S_R_GP3400_GP6400": {
   "title": "替換手冊 GP3000 7 吋 → GP6000 Standard",
   "url": "https://www.proface.com/media/59240"
  },
  "S_R_GP3500_GP6500": {
   "title": "替換手冊 GP3000 10 吋 → GP6000 Standard",
   "url": "https://www.proface.com/media/59246"
  },
  "S_R_GP3300_ST6300": {
   "title": "替換手冊 GP-3300S/L → ST-6300TA",
   "url": "https://proface.com/media/57238"
  },
  "S_R_GP3300DIO_STC": {
   "title": "替換手冊 GP-3300 DIO 型 → STC-6300TA",
   "url": "https://proface.com/media/57216"
  },
  "S_R_LT3300_STC": {
   "title": "替換手冊 LT-3300T → STC-6300TA",
   "url": "https://proface.com/media/57215"
  },
  "S_R_GP4000M_STM": {
   "title": "替換手冊 GP4000M → STM6000",
   "url": "https://proface.com/media/57213"
  },
  "S_R_GP4000E_ET": {
   "title": "替換手冊 GP4000E (GP-4402WW/4502WW) → ET6000",
   "url": "https://www.proface.com/media/59323"
  },
  "S_R_GP4000H_GPH": {
   "title": "替換手冊 GP4000H → GPH6000",
   "url": "https://www.proface.com/media/60483"
  },
  "S_R_GP4500_GP6000A": {
   "title": "替換手冊 GP4000 10 吋 → GP6000 Advanced 12 吋寬",
   "url": "https://www.proface.com/media/60202"
  },
  "S_R_GP3000M_SP5000": {
   "title": "GP3000 M class 停產與建議替代",
   "url": "https://www.proface.com/en/news/2017/0512"
  },
  "S_R_GP4104": {
   "title": "GP-4104 原廠規格頁（建議替代）",
   "url": "https://proface.com/en/product/spec/GP4104G1D"
  },
  "S_R_SP5B41": {
   "title": "Pro-face HMI 產品總覽（SP5000 Open Box 建議替代）",
   "url": "https://www.proface.com/en/product/hmi/top"
  },
  "S_L_GP4000": {
   "title": "GP4000 產品線（含停產日期）",
   "url": "https://www.proface.com/en-us/product/hmi/gp4000/lineup"
  },
  "S_L_SP5000": {
   "title": "SP5000 產品線（含停產日期）",
   "url": "https://www.proface.com/en/product/hmi/sp5000/lineup"
  },
  "S_R_GP3000H_GP4000H": {
   "title": "替換手冊 GP3000H → GP4000H",
   "url": "https://proface.com/media/43718"
  },
  "S_FIELD": {
   "title": "現場工程師實機確認（2026-11）",
   "url": ""
  },
  "S_XML": {
   "title": "GP-Pro EX HmiInfo.xml 機種資料",
   "url": ""
  },
  "S_C_GP4000M": {
   "title": "GP4000M 系列產品頁（φ22 mm 圓孔安裝）",
   "url": "https://www.proface.com/en/product/hmi/gp4000m/top"
  },
  "S_C_GP4104": {
   "title": "GP-4104 至 4107 原廠規格頁（開孔 W105 × H66，面板厚 1～5 mm）",
   "url": "https://www.proface.com/zh-hant/product/hmi/gp4100/spec/GP4104G1D"
  },
  "S_C_SP5490X": {
   "title": "SP-5490WA 原廠規格頁",
   "url": "https://www.proface.com/en/product/spec/PFXSP5490WAD"
  },
  "S_C_SP5000X": {
   "title": "SP5000X 顯示模組規格書（datasheet_sp5000x_displaymodule_en）",
   "url": ""
  },
  "S_C_LT4000M": {
   "title": "LT-4201TM／4301TM 硬體手冊（LT4243TM-MM01-ENG，2021-08）：面板開孔",
   "url": ""
  },
  "S_R_LT3201A": {
   "title": "替換指南 LT-3201A → LT-4201TM",
   "url": "https://www.proface.com/en/replace/lt3201a_lt4201tm"
  },
  "S_C_ST3000CN": {
   "title": "ST3000 系列硬體手冊（簡體中文，2007）：面板開孔尺寸",
   "url": ""
  }
 },
 "switches": [],
 "models": [
  {
   "key": "01001500||PFXGP6B40*",
   "seriesXml": "GP6000 Series (Advanced)",
   "series": "GP6000A",
   "group": "",
   "name": "PFXGP6B40*",
   "offlineName": "PFXGP6B40*",
   "form": "box",
   "inch": null,
   "resolution": "WXGA",
   "resolutionPx": "1280×800",
   "color": "Color",
   "touch": "none",
   "ethernet": 2,
   "com": [
    {
     "port": "COM1",
     "type": "RS232C"
    },
    {
     "port": "COM2",
     "type": "RS422/485"
    }
   ],
   "usbA": 2,
   "usbMiniB": null,
   "usbMicroB": 1,
   "cardSlot": true,
   "ftpXml": true,
   "webXml": false,
   "emailXml": false,
   "ezLanXml": false,
   "remoteHmiMaxXml": 3,
   "appMemoryMB": 128.0,
   "appMemoryExpandedMB": null,
   "backupMemoryKB": 320.0,
   "revisions": [],
   "firstSeen": "5.01",
   "inVersions": [
    "5.01"
   ],
   "versions": {
    "4.08": "absent",
    "4.09": "absent",
    "5.01": "full"
   },
   "statusLatest": "full",
   "features": {
    "remoteHmi": {
     "s": "yes",
     "n": "原廠 Client for Win 頁寫 5 台，XML 寫 3 台，待確認",
     "conn": 5,
     "ver": "5.01"
    },
    "gpViewer": {
     "s": "no"
    },
    "proFaceConnect": {
     "s": "unknown"
    },
    "ftp": {
     "s": "yes"
    },
    "web": {
     "s": "no"
    },
    "email": {
     "s": "no"
    },
    "ipsec": {
     "s": "unknown"
    },
    "ezLan": {
     "s": "no"
    }
   },
   "featureSrc": [
    "S_RHMI_WIN",
    "S_FIELD",
    "S_XML"
   ],
   "cutout": {
    "mount": "box",
    "n": "DIN 盒型"
   },
   "replace": [],
   "switches": [],
   "cable": null
  },
  {
   "key": "00251500||PFXGP6540WC*",
   "seriesXml": "GP6000 Series (Advanced)",
   "series": "GP6000A",
   "group": "",
   "name": "PFXGP6540WC*",
   "offlineName": "PFXGP6540WC*",
   "form": "panel",
   "inch": 10.1,
   "resolution": "WXGA",
   "resolutionPx": "1280×800",
   "color": "Color",
   "touch": "p-cap(multi-touch)",
   "ethernet": 2,
   "com": [
    {
     "port": "COM1",
     "type": "RS232C"
    },
    {
     "port": "COM2",
     "type": "RS422/485"
    }
   ],
   "usbA": 2,
   "usbMiniB": null,
   "usbMicroB": 1,
   "cardSlot": true,
   "ftpXml": true,
   "webXml": false,
   "emailXml": false,
   "ezLanXml": false,
   "remoteHmiMaxXml": 3,
   "appMemoryMB": 128.0,
   "appMemoryExpandedMB": null,
   "backupMemoryKB": 320.0,
   "revisions": [],
   "firstSeen": "5.01",
   "inVersions": [
    "5.01"
   ],
   "versions": {
    "4.08": "absent",
    "4.09": "absent",
    "5.01": "full"
   },
   "statusLatest": "full",
   "features": {
    "remoteHmi": {
     "s": "yes",
     "n": "原廠 Client for Win 頁寫 5 台，XML 寫 3 台，待確認",
     "conn": 5,
     "ver": "5.01"
    },
    "gpViewer": {
     "s": "no"
    },
    "proFaceConnect": {
     "s": "unknown"
    },
    "ftp": {
     "s": "yes"
    },
    "web": {
     "s": "no"
    },
    "email": {
     "s": "no"
    },
    "ipsec": {
     "s": "unknown"
    },
    "ezLan": {
     "s": "no"
    }
   },
   "featureSrc": [
    "S_RHMI_WIN",
    "S_FIELD",
    "S_XML"
   ],
   "cutout": {
    "mount": "rect",
    "w": 255,
    "h": 185,
    "t": "1.6～3",
    "src": "S_C_GP6000A"
   },
   "replace": [],
   "switches": [],
   "cable": null
  },
  {
   "key": "00221500||PFXGP6540TM*",
   "seriesXml": "GP6000 Series (Advanced)",
   "series": "GP6000A",
   "group": "",
   "name": "PFXGP6540TM*",
   "offlineName": "PFXGP6540TM*",
   "form": "panel",
   "inch": 10.4,
   "resolution": "SVGA",
   "resolutionPx": "800×600",
   "color": "Color",
   "touch": "analog(multi-touch)",
   "ethernet": 2,
   "com": [
    {
     "port": "COM1",
     "type": "RS232C"
    },
    {
     "port": "COM2",
     "type": "RS422/485"
    }
   ],
   "usbA": 3,
   "usbMiniB": null,
   "usbMicroB": 2,
   "cardSlot": true,
   "ftpXml": true,
   "webXml": false,
   "emailXml": false,
   "ezLanXml": false,
   "remoteHmiMaxXml": 3,
   "appMemoryMB": 128.0,
   "appMemoryExpandedMB": null,
   "backupMemoryKB": 320.0,
   "revisions": [],
   "firstSeen": "5.01",
   "inVersions": [
    "5.01"
   ],
   "versions": {
    "4.08": "absent",
    "4.09": "absent",
    "5.01": "full"
   },
   "statusLatest": "full",
   "features": {
    "remoteHmi": {
     "s": "yes",
     "n": "原廠 Client for Win 頁寫 5 台，XML 寫 3 台，待確認",
     "conn": 5,
     "ver": "5.01"
    },
    "gpViewer": {
     "s": "no"
    },
    "proFaceConnect": {
     "s": "unknown"
    },
    "ftp": {
     "s": "yes"
    },
    "web": {
     "s": "no"
    },
    "email": {
     "s": "no"
    },
    "ipsec": {
     "s": "unknown"
    },
    "ezLan": {
     "s": "no"
    }
   },
   "featureSrc": [
    "S_RHMI_WIN",
    "S_FIELD",
    "S_XML"
   ],
   "cutout": {
    "mount": "rect",
    "w": 259,
    "h": 201,
    "t": "1.6～5",
    "src": "S_C_GP6000A"
   },
   "replace": [],
   "switches": [],
   "cable": null
  },
  {
   "key": "00231500||PFXGP6640TM*",
   "seriesXml": "GP6000 Series (Advanced)",
   "series": "GP6000A",
   "group": "",
   "name": "PFXGP6640TM*",
   "offlineName": "PFXGP6640TM*",
   "form": "panel",
   "inch": 12.1,
   "resolution": "XGA",
   "resolutionPx": "1024×768",
   "color": "Color",
   "touch": "analog(multi-touch)",
   "ethernet": 2,
   "com": [
    {
     "port": "COM1",
     "type": "RS232C"
    },
    {
     "port": "COM2",
     "type": "RS422/485"
    }
   ],
   "usbA": 3,
   "usbMiniB": null,
   "usbMicroB": 2,
   "cardSlot": true,
   "ftpXml": true,
   "webXml": false,
   "emailXml": false,
   "ezLanXml": false,
   "remoteHmiMaxXml": 3,
   "appMemoryMB": 128.0,
   "appMemoryExpandedMB": null,
   "backupMemoryKB": 320.0,
   "revisions": [],
   "firstSeen": "5.01",
   "inVersions": [
    "5.01"
   ],
   "versions": {
    "4.08": "absent",
    "4.09": "absent",
    "5.01": "full"
   },
   "statusLatest": "full",
   "features": {
    "remoteHmi": {
     "s": "yes",
     "n": "原廠 Client for Win 頁寫 5 台，XML 寫 3 台，待確認",
     "conn": 5,
     "ver": "5.01"
    },
    "gpViewer": {
     "s": "no"
    },
    "proFaceConnect": {
     "s": "unknown"
    },
    "ftp": {
     "s": "yes"
    },
    "web": {
     "s": "no"
    },
    "email": {
     "s": "no"
    },
    "ipsec": {
     "s": "unknown"
    },
    "ezLan": {
     "s": "no"
    }
   },
   "featureSrc": [
    "S_RHMI_WIN",
    "S_FIELD",
    "S_XML"
   ],
   "cutout": {
    "mount": "rect",
    "w": 301.5,
    "h": 227.5,
    "t": "1.6～5",
    "src": "S_C_GP6000A"
   },
   "replace": [],
   "switches": [],
   "cable": null
  },
  {
   "key": "00261500||PFXGP6640WC*",
   "seriesXml": "GP6000 Series (Advanced)",
   "series": "GP6000A",
   "group": "",
   "name": "PFXGP6640WC*",
   "offlineName": "PFXGP6640WC*",
   "form": "panel",
   "inch": 12.1,
   "resolution": "WXGA",
   "resolutionPx": "1280×800",
   "color": "Color",
   "touch": "p-cap(multi-touch)",
   "ethernet": 2,
   "com": [
    {
     "port": "COM1",
     "type": "RS232C"
    },
    {
     "port": "COM2",
     "type": "RS422/485"
    }
   ],
   "usbA": 2,
   "usbMiniB": null,
   "usbMicroB": 1,
   "cardSlot": true,
   "ftpXml": true,
   "webXml": false,
   "emailXml": false,
   "ezLanXml": false,
   "remoteHmiMaxXml": 3,
   "appMemoryMB": 128.0,
   "appMemoryExpandedMB": null,
   "backupMemoryKB": 320.0,
   "revisions": [],
   "firstSeen": "5.01",
   "inVersions": [
    "5.01"
   ],
   "versions": {
    "4.08": "absent",
    "4.09": "absent",
    "5.01": "full"
   },
   "statusLatest": "full",
   "features": {
    "remoteHmi": {
     "s": "yes",
     "n": "原廠 Client for Win 頁寫 5 台，XML 寫 3 台，待確認",
     "conn": 5,
     "ver": "5.01"
    },
    "gpViewer": {
     "s": "no"
    },
    "proFaceConnect": {
     "s": "unknown"
    },
    "ftp": {
     "s": "yes"
    },
    "web": {
     "s": "no"
    },
    "email": {
     "s": "no"
    },
    "ipsec": {
     "s": "unknown"
    },
    "ezLan": {
     "s": "no"
    }
   },
   "featureSrc": [
    "S_RHMI_WIN",
    "S_FIELD",
    "S_XML"
   ],
   "cutout": {
    "mount": "rect",
    "w": 295,
    "h": 217,
    "t": "1.6～5",
    "src": "S_C_GP6000A"
   },
   "replace": [],
   "switches": [],
   "cable": null
  },
  {
   "key": "00241500||PFXGP6740TM*",
   "seriesXml": "GP6000 Series (Advanced)",
   "series": "GP6000A",
   "group": "",
   "name": "PFXGP6740TM*",
   "offlineName": "PFXGP6740TM*",
   "form": "panel",
   "inch": 15.0,
   "resolution": "XGA",
   "resolutionPx": "1024×768",
   "color": "Color",
   "touch": "analog(multi-touch)",
   "ethernet": 2,
   "com": [
    {
     "port": "COM1",
     "type": "RS232C"
    },
    {
     "port": "COM2",
     "type": "RS422/485"
    }
   ],
   "usbA": 3,
   "usbMiniB": null,
   "usbMicroB": 2,
   "cardSlot": true,
   "ftpXml": true,
   "webXml": false,
   "emailXml": false,
   "ezLanXml": false,
   "remoteHmiMaxXml": 3,
   "appMemoryMB": 128.0,
   "appMemoryExpandedMB": null,
   "backupMemoryKB": 320.0,
   "revisions": [],
   "firstSeen": "5.01",
   "inVersions": [
    "5.01"
   ],
   "versions": {
    "4.08": "absent",
    "4.09": "absent",
    "5.01": "full"
   },
   "statusLatest": "full",
   "features": {
    "remoteHmi": {
     "s": "yes",
     "n": "原廠 Client for Win 頁寫 5 台，XML 寫 3 台，待確認",
     "conn": 5,
     "ver": "5.01"
    },
    "gpViewer": {
     "s": "no"
    },
    "proFaceConnect": {
     "s": "unknown"
    },
    "ftp": {
     "s": "yes"
    },
    "web": {
     "s": "no"
    },
    "email": {
     "s": "no"
    },
    "ipsec": {
     "s": "unknown"
    },
    "ezLan": {
     "s": "no"
    }
   },
   "featureSrc": [
    "S_RHMI_WIN",
    "S_FIELD",
    "S_XML"
   ],
   "cutout": {
    "mount": "rect",
    "w": 383.5,
    "h": 282.5,
    "t": "1.6～5",
    "src": "S_C_GP6000A"
   },
   "replace": [],
   "switches": [],
   "cable": null
  },
  {
   "key": "005B1500||PFXGP6740WC*",
   "seriesXml": "GP6000 Series (Advanced)",
   "series": "GP6000A",
   "group": "",
   "name": "PFXGP6740WC*",
   "offlineName": "PFXGP6740WC*",
   "form": "panel",
   "inch": 15.6,
   "resolution": "FullHD",
   "resolutionPx": "1920×1080",
   "color": "Color",
   "touch": "p-cap(multi-touch)",
   "ethernet": 2,
   "com": [
    {
     "port": "COM1",
     "type": "RS232C"
    },
    {
     "port": "COM2",
     "type": "RS422/485"
    }
   ],
   "usbA": 2,
   "usbMiniB": null,
   "usbMicroB": 1,
   "cardSlot": true,
   "ftpXml": true,
   "webXml": false,
   "emailXml": false,
   "ezLanXml": false,
   "remoteHmiMaxXml": 3,
   "appMemoryMB": 128.0,
   "appMemoryExpandedMB": null,
   "backupMemoryKB": 320.0,
   "revisions": [],
   "firstSeen": "5.01",
   "inVersions": [
    "5.01"
   ],
   "versions": {
    "4.08": "absent",
    "4.09": "absent",
    "5.01": "full"
   },
   "statusLatest": "full",
   "features": {
    "remoteHmi": {
     "s": "yes",
     "n": "原廠 Client for Win 頁寫 5 台，XML 寫 3 台，待確認",
     "conn": 5,
     "ver": "5.01"
    },
    "gpViewer": {
     "s": "no"
    },
    "proFaceConnect": {
     "s": "unknown"
    },
    "ftp": {
     "s": "yes"
    },
    "web": {
     "s": "no"
    },
    "email": {
     "s": "no"
    },
    "ipsec": {
     "s": "unknown"
    },
    "ezLan": {
     "s": "no"
    }
   },
   "featureSrc": [
    "S_RHMI_WIN",
    "S_FIELD",
    "S_XML"
   ],
   "cutout": {
    "mount": "rect",
    "w": 394,
    "h": 250,
    "t": "1.6～5",
    "src": "S_C_GP6000A"
   },
   "replace": [],
   "switches": [],
   "cable": null
  },
  {
   "key": "00281500||PFXGP6840WC*",
   "seriesXml": "GP6000 Series (Advanced)",
   "series": "GP6000A",
   "group": "",
   "name": "PFXGP6840WC*",
   "offlineName": "PFXGP6840WC*",
   "form": "panel",
   "inch": 18.5,
   "resolution": "FullHD",
   "resolutionPx": "1920×1080",
   "color": "Color",
   "touch": "p-cap(multi-touch)",
   "ethernet": 2,
   "com": [
    {
     "port": "COM1",
     "type": "RS232C"
    },
    {
     "port": "COM2",
     "type": "RS422/485"
    }
   ],
   "usbA": 2,
   "usbMiniB": null,
   "usbMicroB": 1,
   "cardSlot": true,
   "ftpXml": true,
   "webXml": false,
   "emailXml": false,
   "ezLanXml": false,
   "remoteHmiMaxXml": 3,
   "appMemoryMB": 128.0,
   "appMemoryExpandedMB": null,
   "backupMemoryKB": 320.0,
   "revisions": [],
   "firstSeen": "5.01",
   "inVersions": [
    "5.01"
   ],
   "versions": {
    "4.08": "absent",
    "4.09": "absent",
    "5.01": "full"
   },
   "statusLatest": "full",
   "features": {
    "remoteHmi": {
     "s": "yes",
     "n": "原廠 Client for Win 頁寫 5 台，XML 寫 3 台，待確認",
     "conn": 5,
     "ver": "5.01"
    },
    "gpViewer": {
     "s": "no"
    },
    "proFaceConnect": {
     "s": "unknown"
    },
    "ftp": {
     "s": "yes"
    },
    "web": {
     "s": "no"
    },
    "email": {
     "s": "no"
    },
    "ipsec": {
     "s": "unknown"
    },
    "ezLan": {
     "s": "no"
    }
   },
   "featureSrc": [
    "S_RHMI_WIN",
    "S_FIELD",
    "S_XML"
   ],
   "cutout": {
    "mount": "rect",
    "w": 449.5,
    "h": 279.5,
    "t": "1.6～5",
    "src": "S_C_GP6000A"
   },
   "replace": [],
   "switches": [],
   "cable": null
  },
  {
   "key": "00291500||PFXGP6940WC*",
   "seriesXml": "GP6000 Series (Advanced)",
   "series": "GP6000A",
   "group": "",
   "name": "PFXGP6940WC*",
   "offlineName": "PFXGP6940WC*",
   "form": "panel",
   "inch": 21.5,
   "resolution": "FullHD",
   "resolutionPx": "1920×1080",
   "color": "Color",
   "touch": "p-cap(multi-touch)",
   "ethernet": 2,
   "com": [
    {
     "port": "COM1",
     "type": "RS232C"
    },
    {
     "port": "COM2",
     "type": "RS422/485"
    }
   ],
   "usbA": 2,
   "usbMiniB": null,
   "usbMicroB": 1,
   "cardSlot": true,
   "ftpXml": true,
   "webXml": false,
   "emailXml": false,
   "ezLanXml": false,
   "remoteHmiMaxXml": 3,
   "appMemoryMB": 128.0,
   "appMemoryExpandedMB": null,
   "backupMemoryKB": 320.0,
   "revisions": [],
   "firstSeen": "5.01",
   "inVersions": [
    "5.01"
   ],
   "versions": {
    "4.08": "absent",
    "4.09": "absent",
    "5.01": "full"
   },
   "statusLatest": "full",
   "features": {
    "remoteHmi": {
     "s": "yes",
     "n": "原廠 Client for Win 頁寫 5 台，XML 寫 3 台，待確認",
     "conn": 5,
     "ver": "5.01"
    },
    "gpViewer": {
     "s": "no"
    },
    "proFaceConnect": {
     "s": "unknown"
    },
    "ftp": {
     "s": "yes"
    },
    "web": {
     "s": "no"
    },
    "email": {
     "s": "no"
    },
    "ipsec": {
     "s": "unknown"
    },
    "ezLan": {
     "s": "no"
    }
   },
   "featureSrc": [
    "S_RHMI_WIN",
    "S_FIELD",
    "S_XML"
   ],
   "cutout": {
    "mount": "rect",
    "w": 518.5,
    "h": 316.5,
    "t": "1.6～5",
    "src": "S_C_GP6000A"
   },
   "replace": [],
   "switches": [],
   "cable": null
  },
  {
   "key": "04491500||PFXGP6300TA*",
   "seriesXml": "GP6000 Series (Standard)",
   "series": "GP6000S",
   "group": "",
   "name": "PFXGP6300TA*",
   "offlineName": "PFXGP6300TA*",
   "form": "panel",
   "inch": 5.7,
   "resolution": "VGA",
   "resolutionPx": "640×480",
   "color": "Color",
   "touch": "analog",
   "ethernet": 2,
   "com": [
    {
     "port": "COM1",
     "type": "RS232C"
    },
    {
     "port": "COM2",
     "type": "RS422/485"
    }
   ],
   "usbA": 1,
   "usbMiniB": null,
   "usbMicroB": 1,
   "cardSlot": true,
   "ftpXml": true,
   "webXml": false,
   "emailXml": false,
   "ezLanXml": false,
   "remoteHmiMaxXml": 3,
   "appMemoryMB": 128.0,
   "appMemoryExpandedMB": null,
   "backupMemoryKB": 320.0,
   "revisions": [],
   "firstSeen": "5.01",
   "inVersions": [
    "5.01"
   ],
   "versions": {
    "4.08": "absent",
    "4.09": "absent",
    "5.01": "full"
   },
   "statusLatest": "full",
   "features": {
    "remoteHmi": {
     "s": "yes",
     "conn": 3,
     "ver": "5.01"
    },
    "gpViewer": {
     "s": "no"
    },
    "proFaceConnect": {
     "s": "yes",
     "n": "於人機系統設定"
    },
    "ftp": {
     "s": "yes",
     "n": "支援 FTPS"
    },
    "web": {
     "s": "no"
    },
    "email": {
     "s": "no"
    },
    "ipsec": {
     "s": "yes"
    },
    "ezLan": {
     "s": "no"
    }
   },
   "featureSrc": [
    "S_F_GP6000S"
   ],
   "cutout": {
    "mount": "rect",
    "w": 156,
    "h": 123.5,
    "t": "1.6～5",
    "src": "S_C_GP6000S"
   },
   "replace": [],
   "switches": [],
   "cable": null
  },
  {
   "key": "044A1500||PFXGP6400TA*",
   "seriesXml": "GP6000 Series (Standard)",
   "series": "GP6000S",
   "group": "",
   "name": "PFXGP6400TA*",
   "offlineName": "PFXGP6400TA*",
   "form": "panel",
   "inch": 7.5,
   "resolution": "VGA",
   "resolutionPx": "640×480",
   "color": "Color",
   "touch": "analog",
   "ethernet": 2,
   "com": [
    {
     "port": "COM1",
     "type": "RS232C"
    },
    {
     "port": "COM2",
     "type": "RS422/485"
    }
   ],
   "usbA": 1,
   "usbMiniB": null,
   "usbMicroB": 1,
   "cardSlot": true,
   "ftpXml": true,
   "webXml": false,
   "emailXml": false,
   "ezLanXml": false,
   "remoteHmiMaxXml": 3,
   "appMemoryMB": 128.0,
   "appMemoryExpandedMB": null,
   "backupMemoryKB": 320.0,
   "revisions": [],
   "firstSeen": "5.01",
   "inVersions": [
    "5.01"
   ],
   "versions": {
    "4.08": "absent",
    "4.09": "absent",
    "5.01": "full"
   },
   "statusLatest": "full",
   "features": {
    "remoteHmi": {
     "s": "yes",
     "conn": 3,
     "ver": "5.01"
    },
    "gpViewer": {
     "s": "no"
    },
    "proFaceConnect": {
     "s": "yes",
     "n": "於人機系統設定"
    },
    "ftp": {
     "s": "yes",
     "n": "支援 FTPS"
    },
    "web": {
     "s": "no"
    },
    "email": {
     "s": "no"
    },
    "ipsec": {
     "s": "yes"
    },
    "ezLan": {
     "s": "no"
    }
   },
   "featureSrc": [
    "S_F_GP6000S"
   ],
   "cutout": {
    "mount": "rect",
    "w": 204.5,
    "h": 159.5,
    "t": "1.6～5",
    "src": "S_C_GP6000S"
   },
   "replace": [],
   "switches": [],
   "cable": null
  },
  {
   "key": "044B1500||PFXGP6500TA*",
   "seriesXml": "GP6000 Series (Standard)",
   "series": "GP6000S",
   "group": "",
   "name": "PFXGP6500TA*",
   "offlineName": "PFXGP6500TA*",
   "form": "panel",
   "inch": 10.4,
   "resolution": "SVGA",
   "resolutionPx": "800×600",
   "color": "Color",
   "touch": "analog",
   "ethernet": 2,
   "com": [
    {
     "port": "COM1",
     "type": "RS232C"
    },
    {
     "port": "COM2",
     "type": "RS422/485"
    }
   ],
   "usbA": 1,
   "usbMiniB": null,
   "usbMicroB": 1,
   "cardSlot": true,
   "ftpXml": true,
   "webXml": false,
   "emailXml": false,
   "ezLanXml": false,
   "remoteHmiMaxXml": 3,
   "appMemoryMB": 128.0,
   "appMemoryExpandedMB": null,
   "backupMemoryKB": 320.0,
   "revisions": [],
   "firstSeen": "5.01",
   "inVersions": [
    "5.01"
   ],
   "versions": {
    "4.08": "absent",
    "4.09": "absent",
    "5.01": "full"
   },
   "statusLatest": "full",
   "features": {
    "remoteHmi": {
     "s": "yes",
     "conn": 3,
     "ver": "5.01"
    },
    "gpViewer": {
     "s": "no"
    },
    "proFaceConnect": {
     "s": "yes",
     "n": "於人機系統設定"
    },
    "ftp": {
     "s": "yes",
     "n": "支援 FTPS"
    },
    "web": {
     "s": "no"
    },
    "email": {
     "s": "no"
    },
    "ipsec": {
     "s": "yes"
    },
    "ezLan": {
     "s": "no"
    }
   },
   "featureSrc": [
    "S_F_GP6000S"
   ],
   "cutout": {
    "mount": "rect",
    "w": 259,
    "h": 201,
    "t": "1.6～5",
    "src": "S_C_GP6000S"
   },
   "replace": [],
   "switches": [],
   "cable": null
  },
  {
   "key": "044C1500||PFXGP6500TM*",
   "seriesXml": "GP6000 Series (Standard)",
   "series": "GP6000S",
   "group": "",
   "name": "PFXGP6500TM*",
   "offlineName": "PFXGP6500TM*",
   "form": "panel",
   "inch": 10.4,
   "resolution": "SVGA",
   "resolutionPx": "800×600",
   "color": "Color",
   "touch": "matrix",
   "ethernet": 2,
   "com": [
    {
     "port": "COM1",
     "type": "RS232C"
    },
    {
     "port": "COM2",
     "type": "RS422/485"
    }
   ],
   "usbA": 1,
   "usbMiniB": null,
   "usbMicroB": 1,
   "cardSlot": true,
   "ftpXml": true,
   "webXml": false,
   "emailXml": false,
   "ezLanXml": false,
   "remoteHmiMaxXml": 3,
   "appMemoryMB": 128.0,
   "appMemoryExpandedMB": null,
   "backupMemoryKB": 320.0,
   "revisions": [],
   "firstSeen": "5.01",
   "inVersions": [
    "5.01"
   ],
   "versions": {
    "4.08": "absent",
    "4.09": "absent",
    "5.01": "full"
   },
   "statusLatest": "full",
   "features": {
    "remoteHmi": {
     "s": "yes",
     "conn": 3,
     "ver": "5.01"
    },
    "gpViewer": {
     "s": "no"
    },
    "proFaceConnect": {
     "s": "yes",
     "n": "於人機系統設定"
    },
    "ftp": {
     "s": "yes",
     "n": "支援 FTPS"
    },
    "web": {
     "s": "no"
    },
    "email": {
     "s": "no"
    },
    "ipsec": {
     "s": "yes"
    },
    "ezLan": {
     "s": "no"
    }
   },
   "featureSrc": [
    "S_F_GP6000S"
   ],
   "cutout": {
    "mount": "rect",
    "w": 259,
    "h": 201,
    "t": "1.6～5",
    "src": "S_C_GP6000S"
   },
   "replace": [],
   "switches": [],
   "cable": null
  },
  {
   "key": "044D1500||PFXGP6600TA*",
   "seriesXml": "GP6000 Series (Standard)",
   "series": "GP6000S",
   "group": "",
   "name": "PFXGP6600TA*",
   "offlineName": "PFXGP6600TA*",
   "form": "panel",
   "inch": 12.1,
   "resolution": "XGA",
   "resolutionPx": "1024×768",
   "color": "Color",
   "touch": "analog",
   "ethernet": 2,
   "com": [
    {
     "port": "COM1",
     "type": "RS232C"
    },
    {
     "port": "COM2",
     "type": "RS422/485"
    }
   ],
   "usbA": 1,
   "usbMiniB": null,
   "usbMicroB": 1,
   "cardSlot": true,
   "ftpXml": true,
   "webXml": false,
   "emailXml": false,
   "ezLanXml": false,
   "remoteHmiMaxXml": 3,
   "appMemoryMB": 128.0,
   "appMemoryExpandedMB": null,
   "backupMemoryKB": 320.0,
   "revisions": [],
   "firstSeen": "5.01",
   "inVersions": [
    "5.01"
   ],
   "versions": {
    "4.08": "absent",
    "4.09": "absent",
    "5.01": "full"
   },
   "statusLatest": "full",
   "features": {
    "remoteHmi": {
     "s": "yes",
     "conn": 3,
     "ver": "5.01"
    },
    "gpViewer": {
     "s": "no"
    },
    "proFaceConnect": {
     "s": "yes",
     "n": "於人機系統設定"
    },
    "ftp": {
     "s": "yes",
     "n": "支援 FTPS"
    },
    "web": {
     "s": "no"
    },
    "email": {
     "s": "no"
    },
    "ipsec": {
     "s": "yes"
    },
    "ezLan": {
     "s": "no"
    }
   },
   "featureSrc": [
    "S_F_GP6000S"
   ],
   "cutout": {
    "mount": "rect",
    "w": 301.5,
    "h": 227.5,
    "t": "1.6～5",
    "src": "S_C_GP6000S"
   },
   "replace": [],
   "switches": [],
   "cable": null
  },
  {
   "key": "044E1500||PFXGP6600TM*",
   "seriesXml": "GP6000 Series (Standard)",
   "series": "GP6000S",
   "group": "",
   "name": "PFXGP6600TM*",
   "offlineName": "PFXGP6600TM*",
   "form": "panel",
   "inch": 12.1,
   "resolution": "XGA",
   "resolutionPx": "1024×768",
   "color": "Color",
   "touch": "matrix",
   "ethernet": 2,
   "com": [
    {
     "port": "COM1",
     "type": "RS232C"
    },
    {
     "port": "COM2",
     "type": "RS422/485"
    }
   ],
   "usbA": 1,
   "usbMiniB": null,
   "usbMicroB": 1,
   "cardSlot": true,
   "ftpXml": true,
   "webXml": false,
   "emailXml": false,
   "ezLanXml": false,
   "remoteHmiMaxXml": 3,
   "appMemoryMB": 128.0,
   "appMemoryExpandedMB": null,
   "backupMemoryKB": 320.0,
   "revisions": [],
   "firstSeen": "5.01",
   "inVersions": [
    "5.01"
   ],
   "versions": {
    "4.08": "absent",
    "4.09": "absent",
    "5.01": "full"
   },
   "statusLatest": "full",
   "features": {
    "remoteHmi": {
     "s": "yes",
     "conn": 3,
     "ver": "5.01"
    },
    "gpViewer": {
     "s": "no"
    },
    "proFaceConnect": {
     "s": "yes",
     "n": "於人機系統設定"
    },
    "ftp": {
     "s": "yes",
     "n": "支援 FTPS"
    },
    "web": {
     "s": "no"
    },
    "email": {
     "s": "no"
    },
    "ipsec": {
     "s": "yes"
    },
    "ezLan": {
     "s": "no"
    }
   },
   "featureSrc": [
    "S_F_GP6000S"
   ],
   "cutout": {
    "mount": "rect",
    "w": 301.5,
    "h": 227.5,
    "t": "1.6～5",
    "src": "S_C_GP6000S"
   },
   "replace": [],
   "switches": [],
   "cable": null
  },
  {
   "key": "00021600||PFXGPH6400WA*",
   "seriesXml": "GPH6000 Series (Handheld)",
   "series": "GPH6000",
   "group": "",
   "name": "PFXGPH6400WA*",
   "offlineName": "PFXGPH6400WA*",
   "form": "handheld",
   "inch": 7.0,
   "resolution": "WSVGA",
   "resolutionPx": "1024×600",
   "color": "Color",
   "touch": "analog",
   "ethernet": 1,
   "com": [
    {
     "port": "COM1",
     "type": "RS232C/RS422/485"
    }
   ],
   "usbA": 1,
   "usbMiniB": null,
   "usbMicroB": null,
   "cardSlot": true,
   "ftpXml": true,
   "webXml": false,
   "emailXml": false,
   "ezLanXml": false,
   "remoteHmiMaxXml": 3,
   "appMemoryMB": 128.0,
   "appMemoryExpandedMB": null,
   "backupMemoryKB": 320.0,
   "revisions": [],
   "firstSeen": "5.01",
   "inVersions": [
    "5.01"
   ],
   "versions": {
    "4.08": "absent",
    "4.09": "absent",
    "5.01": "full"
   },
   "statusLatest": "full",
   "features": {
    "remoteHmi": {
     "s": "no"
    },
    "gpViewer": {
     "s": "no"
    },
    "proFaceConnect": {
     "s": "unknown"
    },
    "ftp": {
     "s": "yes"
    },
    "web": {
     "s": "no"
    },
    "email": {
     "s": "no"
    },
    "ipsec": {
     "s": "unknown"
    },
    "ezLan": {
     "s": "no"
    }
   },
   "featureSrc": [
    "S_FIELD",
    "S_XML"
   ],
   "cutout": {
    "mount": "handheld",
    "n": "手持型；掛架安裝孔 φ39",
    "src": "S_C_GPH6000"
   },
   "replace": [],
   "switches": [],
   "cable": null
  },
  {
   "key": "00031600||PFXGPH6500WC*",
   "seriesXml": "GPH6000 Series (Handheld)",
   "series": "GPH6000",
   "group": "",
   "name": "PFXGPH6500WC*",
   "offlineName": "PFXGPH6500WC*",
   "form": "handheld",
   "inch": 10.0,
   "resolution": "WXGAV",
   "resolutionPx": "800×1280（直式）",
   "color": "Color",
   "touch": "p-cap(multi-touch)",
   "ethernet": 1,
   "com": [
    {
     "port": "COM1",
     "type": "RS232C/RS422/485"
    }
   ],
   "usbA": 1,
   "usbMiniB": null,
   "usbMicroB": null,
   "cardSlot": true,
   "ftpXml": true,
   "webXml": false,
   "emailXml": false,
   "ezLanXml": false,
   "remoteHmiMaxXml": 3,
   "appMemoryMB": 128.0,
   "appMemoryExpandedMB": null,
   "backupMemoryKB": 320.0,
   "revisions": [],
   "firstSeen": "5.01",
   "inVersions": [
    "5.01"
   ],
   "versions": {
    "4.08": "absent",
    "4.09": "absent",
    "5.01": "full"
   },
   "statusLatest": "full",
   "features": {
    "remoteHmi": {
     "s": "no"
    },
    "gpViewer": {
     "s": "no"
    },
    "proFaceConnect": {
     "s": "unknown"
    },
    "ftp": {
     "s": "yes"
    },
    "web": {
     "s": "no"
    },
    "email": {
     "s": "no"
    },
    "ipsec": {
     "s": "unknown"
    },
    "ezLan": {
     "s": "no"
    }
   },
   "featureSrc": [
    "S_FIELD",
    "S_XML"
   ],
   "cutout": {
    "mount": "handheld",
    "n": "手持型；掛架安裝孔 φ39",
    "src": "S_C_GPH6000"
   },
   "replace": [],
   "switches": [],
   "cable": null
  },
  {
   "key": "20400A00|SP-5B00|DC Power Supply Adapter",
   "seriesXml": "SP5000 Series",
   "series": "SP5000",
   "group": "SP-5B00",
   "name": "DC Power Supply Adapter",
   "offlineName": "DC Power+SP5B00",
   "form": "box",
   "inch": null,
   "resolution": "XGA",
   "resolutionPx": "1024×768",
   "color": "Color",
   "touch": "none",
   "ethernet": 2,
   "com": [
    {
     "port": "COM1",
     "type": "RS232C"
    },
    {
     "port": "COM2",
     "type": "RS422/485"
    }
   ],
   "usbA": 2,
   "usbMiniB": 1,
   "usbMicroB": null,
   "cardSlot": true,
   "ftpXml": true,
   "webXml": true,
   "emailXml": true,
   "ezLanXml": null,
   "remoteHmiMaxXml": 5,
   "appMemoryMB": 64.0,
   "appMemoryExpandedMB": null,
   "backupMemoryKB": 320.0,
   "revisions": [],
   "firstSeen": "4.09",
   "inVersions": [
    "4.09",
    "5.01"
   ],
   "versions": {
    "4.08": "absent",
    "4.09": "full",
    "5.01": "full"
   },
   "statusLatest": "full",
   "features": {
    "remoteHmi": {
     "s": "yes",
     "conn": 5,
     "ver": "4.08.200"
    },
    "gpViewer": {
     "s": "yes"
    },
    "proFaceConnect": {
     "s": "yes"
    },
    "ftp": {
     "s": "yes",
     "n": "支援 FTPS"
    },
    "web": {
     "s": "ended",
     "n": "4.09.450 以前版本才支援"
    },
    "email": {
     "s": "yes"
    },
    "ipsec": {
     "s": "yes"
    },
    "ezLan": {
     "s": "no"
    }
   },
   "featureSrc": [
    "S_F_SP5000"
   ],
   "cutout": {
    "mount": "box",
    "n": "Box 單獨使用"
   },
   "replace": [],
   "switches": [],
   "cable": null
  },
  {
   "key": "20200A00|SP-5B00|SP5400WAD",
   "seriesXml": "SP5000 Series",
   "series": "SP5000",
   "group": "SP-5B00",
   "name": "SP5400WAD",
   "offlineName": "SP5400WA+SP5B00",
   "form": "panel",
   "inch": 7.0,
   "resolution": "WVGA",
   "resolutionPx": "800×480",
   "color": "Color",
   "touch": "analog",
   "ethernet": 2,
   "com": [
    {
     "port": "COM1",
     "type": "RS232C"
    },
    {
     "port": "COM2",
     "type": "RS422/485"
    }
   ],
   "usbA": 2,
   "usbMiniB": 1,
   "usbMicroB": null,
   "cardSlot": true,
   "ftpXml": true,
   "webXml": true,
   "emailXml": true,
   "ezLanXml": null,
   "remoteHmiMaxXml": 5,
   "appMemoryMB": 64.0,
   "appMemoryExpandedMB": null,
   "backupMemoryKB": 320.0,
   "revisions": [],
   "firstSeen": "4.09",
   "inVersions": [
    "4.09",
    "5.01"
   ],
   "versions": {
    "4.08": "absent",
    "4.09": "full",
    "5.01": "full"
   },
   "statusLatest": "full",
   "features": {
    "remoteHmi": {
     "s": "yes",
     "conn": 5,
     "ver": "4.08.200"
    },
    "gpViewer": {
     "s": "yes"
    },
    "proFaceConnect": {
     "s": "yes"
    },
    "ftp": {
     "s": "yes",
     "n": "支援 FTPS"
    },
    "web": {
     "s": "ended",
     "n": "4.09.450 以前版本才支援"
    },
    "email": {
     "s": "yes"
    },
    "ipsec": {
     "s": "yes"
    },
    "ezLan": {
     "s": "no"
    }
   },
   "featureSrc": [
    "S_F_SP5000"
   ],
   "cutout": {
    "mount": "rect",
    "w": 190,
    "h": 135,
    "t": "1.6～5",
    "src": "S_C_SP5000"
   },
   "replace": [],
   "switches": [],
   "cable": null
  },
  {
   "key": "201C0A00|SP-5B00|SP5500WAD",
   "seriesXml": "SP5000 Series",
   "series": "SP5000",
   "group": "SP-5B00",
   "name": "SP5500WAD",
   "offlineName": "SP5500WA+SP5B00",
   "form": "panel",
   "inch": 10.1,
   "resolution": "WXGA",
   "resolutionPx": "1280×800",
   "color": "Color",
   "touch": "analog",
   "ethernet": 2,
   "com": [
    {
     "port": "COM1",
     "type": "RS232C"
    },
    {
     "port": "COM2",
     "type": "RS422/485"
    }
   ],
   "usbA": 2,
   "usbMiniB": 1,
   "usbMicroB": null,
   "cardSlot": true,
   "ftpXml": true,
   "webXml": true,
   "emailXml": true,
   "ezLanXml": null,
   "remoteHmiMaxXml": 5,
   "appMemoryMB": 64.0,
   "appMemoryExpandedMB": null,
   "backupMemoryKB": 320.0,
   "revisions": [],
   "firstSeen": "4.09",
   "inVersions": [
    "4.09",
    "5.01"
   ],
   "versions": {
    "4.08": "absent",
    "4.09": "full",
    "5.01": "full"
   },
   "statusLatest": "full",
   "features": {
    "remoteHmi": {
     "s": "yes",
     "conn": 5,
     "ver": "4.08.200"
    },
    "gpViewer": {
     "s": "yes"
    },
    "proFaceConnect": {
     "s": "yes"
    },
    "ftp": {
     "s": "yes",
     "n": "支援 FTPS"
    },
    "web": {
     "s": "ended",
     "n": "4.09.450 以前版本才支援"
    },
    "email": {
     "s": "yes"
    },
    "ipsec": {
     "s": "yes"
    },
    "ezLan": {
     "s": "no"
    }
   },
   "featureSrc": [
    "S_F_SP5000"
   ],
   "cutout": {
    "mount": "rect",
    "w": 255,
    "h": 185,
    "t": "1.6～5",
    "src": "S_C_SP5000"
   },
   "replace": [],
   "switches": [],
   "cable": null
  },
  {
   "key": "20000A00|SP-5B00|SP5500TPD",
   "seriesXml": "SP5000 Series",
   "series": "SP5000",
   "group": "SP-5B00",
   "name": "SP5500TPD",
   "offlineName": "SP5500TP+SP5B00",
   "form": "panel",
   "inch": 10.4,
   "resolution": "SVGA",
   "resolutionPx": "800×600",
   "color": "Color",
   "touch": "analog(multi-touch)",
   "ethernet": 2,
   "com": [
    {
     "port": "COM1",
     "type": "RS232C"
    },
    {
     "port": "COM2",
     "type": "RS422/485"
    }
   ],
   "usbA": 3,
   "usbMiniB": 2,
   "usbMicroB": null,
   "cardSlot": true,
   "ftpXml": true,
   "webXml": true,
   "emailXml": true,
   "ezLanXml": null,
   "remoteHmiMaxXml": 5,
   "appMemoryMB": 64.0,
   "appMemoryExpandedMB": null,
   "backupMemoryKB": 320.0,
   "revisions": [],
   "firstSeen": "4.09",
   "inVersions": [
    "4.09",
    "5.01"
   ],
   "versions": {
    "4.08": "absent",
    "4.09": "full",
    "5.01": "full"
   },
   "statusLatest": "full",
   "features": {
    "remoteHmi": {
     "s": "yes",
     "conn": 5,
     "ver": "4.08.200"
    },
    "gpViewer": {
     "s": "yes"
    },
    "proFaceConnect": {
     "s": "yes"
    },
    "ftp": {
     "s": "yes",
     "n": "支援 FTPS"
    },
    "web": {
     "s": "ended",
     "n": "4.09.450 以前版本才支援"
    },
    "email": {
     "s": "yes"
    },
    "ipsec": {
     "s": "yes"
    },
    "ezLan": {
     "s": "no"
    }
   },
   "featureSrc": [
    "S_F_SP5000"
   ],
   "cutout": {
    "mount": "rect",
    "w": 259,
    "h": 201,
    "t": "1.6～5",
    "src": "S_C_SP5000"
   },
   "replace": [],
   "switches": [],
   "cable": null
  },
  {
   "key": "20140A00|SP-5B00|SP5600TAD",
   "seriesXml": "SP5000 Series",
   "series": "SP5000",
   "group": "SP-5B00",
   "name": "SP5600TAD",
   "offlineName": "SP5600TA+SP5B00",
   "form": "panel",
   "inch": 12.1,
   "resolution": "XGA",
   "resolutionPx": "1024×768",
   "color": "Color",
   "touch": "analog",
   "ethernet": 2,
   "com": [
    {
     "port": "COM1",
     "type": "RS232C"
    },
    {
     "port": "COM2",
     "type": "RS422/485"
    }
   ],
   "usbA": 2,
   "usbMiniB": 1,
   "usbMicroB": null,
   "cardSlot": true,
   "ftpXml": true,
   "webXml": true,
   "emailXml": true,
   "ezLanXml": null,
   "remoteHmiMaxXml": 5,
   "appMemoryMB": 64.0,
   "appMemoryExpandedMB": 128.0,
   "backupMemoryKB": 320.0,
   "revisions": [],
   "firstSeen": "4.09",
   "inVersions": [
    "4.09",
    "5.01"
   ],
   "versions": {
    "4.08": "absent",
    "4.09": "full",
    "5.01": "full"
   },
   "statusLatest": "full",
   "features": {
    "remoteHmi": {
     "s": "yes",
     "conn": 5,
     "ver": "4.08.200"
    },
    "gpViewer": {
     "s": "yes"
    },
    "proFaceConnect": {
     "s": "yes"
    },
    "ftp": {
     "s": "yes",
     "n": "支援 FTPS"
    },
    "web": {
     "s": "ended",
     "n": "4.09.450 以前版本才支援"
    },
    "email": {
     "s": "yes"
    },
    "ipsec": {
     "s": "yes"
    },
    "ezLan": {
     "s": "no"
    }
   },
   "featureSrc": [
    "S_F_SP5000"
   ],
   "cutout": {
    "mount": "rect",
    "w": 301.5,
    "h": 227.5,
    "t": "1.6～5",
    "src": "S_C_SP5000"
   },
   "replace": [],
   "switches": [],
   "cable": null
  },
  {
   "key": "20040A00|SP-5B00|SP5600TPD",
   "seriesXml": "SP5000 Series",
   "series": "SP5000",
   "group": "SP-5B00",
   "name": "SP5600TPD",
   "offlineName": "SP5600TP+SP5B00",
   "form": "panel",
   "inch": 12.1,
   "resolution": "XGA",
   "resolutionPx": "1024×768",
   "color": "Color",
   "touch": "analog(multi-touch)",
   "ethernet": 2,
   "com": [
    {
     "port": "COM1",
     "type": "RS232C"
    },
    {
     "port": "COM2",
     "type": "RS422/485"
    }
   ],
   "usbA": 3,
   "usbMiniB": 2,
   "usbMicroB": null,
   "cardSlot": true,
   "ftpXml": true,
   "webXml": true,
   "emailXml": true,
   "ezLanXml": null,
   "remoteHmiMaxXml": 5,
   "appMemoryMB": 64.0,
   "appMemoryExpandedMB": null,
   "backupMemoryKB": 320.0,
   "revisions": [],
   "firstSeen": "4.09",
   "inVersions": [
    "4.09",
    "5.01"
   ],
   "versions": {
    "4.08": "absent",
    "4.09": "full",
    "5.01": "full"
   },
   "statusLatest": "full",
   "features": {
    "remoteHmi": {
     "s": "yes",
     "conn": 5,
     "ver": "4.08.200"
    },
    "gpViewer": {
     "s": "yes"
    },
    "proFaceConnect": {
     "s": "yes"
    },
    "ftp": {
     "s": "yes",
     "n": "支援 FTPS"
    },
    "web": {
     "s": "ended",
     "n": "4.09.450 以前版本才支援"
    },
    "email": {
     "s": "yes"
    },
    "ipsec": {
     "s": "yes"
    },
    "ezLan": {
     "s": "no"
    }
   },
   "featureSrc": [
    "S_F_SP5000"
   ],
   "cutout": {
    "mount": "rect",
    "w": 301.5,
    "h": 227.5,
    "t": "1.6～5",
    "src": "S_C_SP5000"
   },
   "replace": [],
   "switches": [],
   "cable": null
  },
  {
   "key": "20180A00|SP-5B00|SP5600WAD",
   "seriesXml": "SP5000 Series",
   "series": "SP5000",
   "group": "SP-5B00",
   "name": "SP5600WAD",
   "offlineName": "SP5600WA+SP5B00",
   "form": "panel",
   "inch": 12.1,
   "resolution": "WXGA",
   "resolutionPx": "1280×800",
   "color": "Color",
   "touch": "analog",
   "ethernet": 2,
   "com": [
    {
     "port": "COM1",
     "type": "RS232C"
    },
    {
     "port": "COM2",
     "type": "RS422/485"
    }
   ],
   "usbA": 2,
   "usbMiniB": 1,
   "usbMicroB": null,
   "cardSlot": true,
   "ftpXml": true,
   "webXml": true,
   "emailXml": true,
   "ezLanXml": null,
   "remoteHmiMaxXml": 5,
   "appMemoryMB": 64.0,
   "appMemoryExpandedMB": null,
   "backupMemoryKB": 320.0,
   "revisions": [],
   "firstSeen": "4.09",
   "inVersions": [
    "4.09",
    "5.01"
   ],
   "versions": {
    "4.08": "absent",
    "4.09": "full",
    "5.01": "full"
   },
   "statusLatest": "full",
   "features": {
    "remoteHmi": {
     "s": "yes",
     "conn": 5,
     "ver": "4.08.200"
    },
    "gpViewer": {
     "s": "yes"
    },
    "proFaceConnect": {
     "s": "yes"
    },
    "ftp": {
     "s": "yes",
     "n": "支援 FTPS"
    },
    "web": {
     "s": "ended",
     "n": "4.09.450 以前版本才支援"
    },
    "email": {
     "s": "yes"
    },
    "ipsec": {
     "s": "yes"
    },
    "ezLan": {
     "s": "no"
    }
   },
   "featureSrc": [
    "S_F_SP5000"
   ],
   "cutout": {
    "mount": "rect",
    "w": 295,
    "h": 217,
    "t": "1.6～5",
    "src": "S_C_SP5000"
   },
   "replace": [],
   "switches": [],
   "cable": null
  },
  {
   "key": "20080A00|SP-5B00|SP5660TPD",
   "seriesXml": "SP5000 Series",
   "series": "SP5000",
   "group": "SP-5B00",
   "name": "SP5660TPD",
   "offlineName": "SP5660TP+SP5B00",
   "form": "panel",
   "inch": 12.1,
   "resolution": "XGA",
   "resolutionPx": "1024×768",
   "color": "Color",
   "touch": "analog(multi-touch)",
   "ethernet": 2,
   "com": [
    {
     "port": "COM1",
     "type": "RS232C"
    },
    {
     "port": "COM2",
     "type": "RS422/485"
    }
   ],
   "usbA": 3,
   "usbMiniB": 2,
   "usbMicroB": null,
   "cardSlot": true,
   "ftpXml": true,
   "webXml": true,
   "emailXml": true,
   "ezLanXml": null,
   "remoteHmiMaxXml": 5,
   "appMemoryMB": 64.0,
   "appMemoryExpandedMB": null,
   "backupMemoryKB": 320.0,
   "revisions": [],
   "firstSeen": "4.09",
   "inVersions": [
    "4.09",
    "5.01"
   ],
   "versions": {
    "4.08": "absent",
    "4.09": "full",
    "5.01": "full"
   },
   "statusLatest": "full",
   "features": {
    "remoteHmi": {
     "s": "yes",
     "conn": 5,
     "ver": "4.08.200"
    },
    "gpViewer": {
     "s": "yes"
    },
    "proFaceConnect": {
     "s": "yes"
    },
    "ftp": {
     "s": "yes",
     "n": "支援 FTPS"
    },
    "web": {
     "s": "ended",
     "n": "4.09.450 以前版本才支援"
    },
    "email": {
     "s": "yes"
    },
    "ipsec": {
     "s": "yes"
    },
    "ezLan": {
     "s": "no"
    }
   },
   "featureSrc": [
    "S_F_SP5000"
   ],
   "cutout": {
    "mount": "rect",
    "w": 301.5,
    "h": 227.5,
    "t": "1.6～5",
    "src": "S_C_SP5000"
   },
   "replace": [],
   "switches": [],
   "cable": null
  },
  {
   "key": "200C0A00|SP-5B00|SP5700TPD",
   "seriesXml": "SP5000 Series",
   "series": "SP5000",
   "group": "SP-5B00",
   "name": "SP5700TPD",
   "offlineName": "SP5700TP+SP5B00",
   "form": "panel",
   "inch": 15.0,
   "resolution": "XGA",
   "resolutionPx": "1024×768",
   "color": "Color",
   "touch": "analog(multi-touch)",
   "ethernet": 2,
   "com": [
    {
     "port": "COM1",
     "type": "RS232C"
    },
    {
     "port": "COM2",
     "type": "RS422/485"
    }
   ],
   "usbA": 3,
   "usbMiniB": 2,
   "usbMicroB": null,
   "cardSlot": true,
   "ftpXml": true,
   "webXml": true,
   "emailXml": true,
   "ezLanXml": null,
   "remoteHmiMaxXml": 5,
   "appMemoryMB": 64.0,
   "appMemoryExpandedMB": null,
   "backupMemoryKB": 320.0,
   "revisions": [],
   "firstSeen": "4.09",
   "inVersions": [
    "4.09",
    "5.01"
   ],
   "versions": {
    "4.08": "absent",
    "4.09": "full",
    "5.01": "full"
   },
   "statusLatest": "full",
   "features": {
    "remoteHmi": {
     "s": "yes",
     "conn": 5,
     "ver": "4.08.200"
    },
    "gpViewer": {
     "s": "yes"
    },
    "proFaceConnect": {
     "s": "yes"
    },
    "ftp": {
     "s": "yes",
     "n": "支援 FTPS"
    },
    "web": {
     "s": "ended",
     "n": "4.09.450 以前版本才支援"
    },
    "email": {
     "s": "yes"
    },
    "ipsec": {
     "s": "yes"
    },
    "ezLan": {
     "s": "no"
    }
   },
   "featureSrc": [
    "S_F_SP5000"
   ],
   "cutout": {
    "mount": "rect",
    "w": 383.5,
    "h": 282.5,
    "t": "1.6～5",
    "src": "S_C_SP5000"
   },
   "replace": [],
   "switches": [],
   "cable": null
  },
  {
   "key": "202C0A00|SP-5B00|SP5700WCD",
   "seriesXml": "SP5000 Series",
   "series": "SP5000",
   "group": "SP-5B00",
   "name": "SP5700WCD",
   "offlineName": "SP5700WC+SP5B00",
   "form": "panel",
   "inch": 15.0,
   "resolution": "FWXGA",
   "resolutionPx": "1366×768",
   "color": "Color",
   "touch": "p-cap(multi-touch)",
   "ethernet": 2,
   "com": [
    {
     "port": "COM1",
     "type": "RS232C"
    },
    {
     "port": "COM2",
     "type": "RS422/485"
    }
   ],
   "usbA": 3,
   "usbMiniB": 2,
   "usbMicroB": null,
   "cardSlot": true,
   "ftpXml": true,
   "webXml": true,
   "emailXml": true,
   "ezLanXml": null,
   "remoteHmiMaxXml": 5,
   "appMemoryMB": 64.0,
   "appMemoryExpandedMB": null,
   "backupMemoryKB": 320.0,
   "revisions": [],
   "firstSeen": "4.09",
   "inVersions": [
    "4.09",
    "5.01"
   ],
   "versions": {
    "4.08": "absent",
    "4.09": "full",
    "5.01": "full"
   },
   "statusLatest": "full",
   "features": {
    "remoteHmi": {
     "s": "yes",
     "conn": 5,
     "ver": "4.08.200"
    },
    "gpViewer": {
     "s": "yes"
    },
    "proFaceConnect": {
     "s": "yes"
    },
    "ftp": {
     "s": "yes",
     "n": "支援 FTPS"
    },
    "web": {
     "s": "ended",
     "n": "4.09.450 以前版本才支援"
    },
    "email": {
     "s": "yes"
    },
    "ipsec": {
     "s": "yes"
    },
    "ezLan": {
     "s": "no"
    }
   },
   "featureSrc": [
    "S_F_SP5000"
   ],
   "cutout": {
    "mount": "rect",
    "w": 396,
    "h": 277,
    "t": "1.6～5",
    "src": "S_C_SP5000"
   },
   "replace": [],
   "switches": [],
   "cable": null
  },
  {
   "key": "20300A00|SP-5B00|SP5800WCD",
   "seriesXml": "SP5000 Series",
   "series": "SP5000",
   "group": "SP-5B00",
   "name": "SP5800WCD",
   "offlineName": "SP5800WC+SP5B00",
   "form": "panel",
   "inch": 19.0,
   "resolution": "FWXGA",
   "resolutionPx": "1366×768",
   "color": "Color",
   "touch": "p-cap(multi-touch)",
   "ethernet": 2,
   "com": [
    {
     "port": "COM1",
     "type": "RS232C"
    },
    {
     "port": "COM2",
     "type": "RS422/485"
    }
   ],
   "usbA": 3,
   "usbMiniB": 2,
   "usbMicroB": null,
   "cardSlot": true,
   "ftpXml": true,
   "webXml": true,
   "emailXml": true,
   "ezLanXml": null,
   "remoteHmiMaxXml": 5,
   "appMemoryMB": 64.0,
   "appMemoryExpandedMB": null,
   "backupMemoryKB": 320.0,
   "revisions": [],
   "firstSeen": "4.09",
   "inVersions": [
    "4.09",
    "5.01"
   ],
   "versions": {
    "4.08": "absent",
    "4.09": "full",
    "5.01": "full"
   },
   "statusLatest": "full",
   "features": {
    "remoteHmi": {
     "s": "yes",
     "conn": 5,
     "ver": "4.08.200"
    },
    "gpViewer": {
     "s": "yes"
    },
    "proFaceConnect": {
     "s": "yes"
    },
    "ftp": {
     "s": "yes",
     "n": "支援 FTPS"
    },
    "web": {
     "s": "ended",
     "n": "4.09.450 以前版本才支援"
    },
    "email": {
     "s": "yes"
    },
    "ipsec": {
     "s": "yes"
    },
    "ezLan": {
     "s": "no"
    }
   },
   "featureSrc": [
    "S_F_SP5000"
   ],
   "cutout": {
    "mount": "rect",
    "w": 465,
    "h": 319,
    "t": "1.6～5",
    "src": "S_C_SP5000"
   },
   "replace": [],
   "switches": [],
   "cable": null
  },
  {
   "key": "00400A00|SP-5B10|DC Power Supply Adapter",
   "seriesXml": "SP5000 Series",
   "series": "SP5000",
   "group": "SP-5B10",
   "name": "DC Power Supply Adapter",
   "offlineName": "DC Power+SP5B10",
   "form": "box",
   "inch": null,
   "resolution": "XGA",
   "resolutionPx": "1024×768",
   "color": "Color",
   "touch": "none",
   "ethernet": 2,
   "com": [
    {
     "port": "COM1",
     "type": "RS232C/RS422/485"
    },
    {
     "port": "COM2",
     "type": "RS232C/RS422/485"
    }
   ],
   "usbA": 2,
   "usbMiniB": 1,
   "usbMicroB": null,
   "cardSlot": true,
   "ftpXml": true,
   "webXml": true,
   "emailXml": true,
   "ezLanXml": null,
   "remoteHmiMaxXml": 5,
   "appMemoryMB": 64.0,
   "appMemoryExpandedMB": null,
   "backupMemoryKB": 320.0,
   "revisions": [],
   "firstSeen": "4.08",
   "inVersions": [
    "4.08",
    "4.09",
    "5.01"
   ],
   "versions": {
    "4.08": "full",
    "4.09": "full",
    "5.01": "full"
   },
   "statusLatest": "full",
   "features": {
    "remoteHmi": {
     "s": "yes",
     "conn": 5,
     "ver": "4.0"
    },
    "gpViewer": {
     "s": "yes"
    },
    "proFaceConnect": {
     "s": "yes"
    },
    "ftp": {
     "s": "yes",
     "n": "支援 FTPS"
    },
    "web": {
     "s": "ended",
     "n": "4.09.450 以前版本才支援"
    },
    "email": {
     "s": "yes"
    },
    "ipsec": {
     "s": "yes"
    },
    "ezLan": {
     "s": "no"
    }
   },
   "featureSrc": [
    "S_F_SP5000"
   ],
   "cutout": {
    "mount": "box",
    "n": "Box 單獨使用"
   },
   "replace": [],
   "switches": [],
   "cable": null
  },
  {
   "key": "00200A00|SP-5B10|SP5400WAD",
   "seriesXml": "SP5000 Series",
   "series": "SP5000",
   "group": "SP-5B10",
   "name": "SP5400WAD",
   "offlineName": "SP5400WA+SP5B10",
   "form": "panel",
   "inch": 7.0,
   "resolution": "WVGA",
   "resolutionPx": "800×480",
   "color": "Color",
   "touch": "analog",
   "ethernet": 2,
   "com": [
    {
     "port": "COM1",
     "type": "RS232C/RS422/485"
    },
    {
     "port": "COM2",
     "type": "RS232C/RS422/485"
    }
   ],
   "usbA": 2,
   "usbMiniB": 1,
   "usbMicroB": null,
   "cardSlot": true,
   "ftpXml": true,
   "webXml": true,
   "emailXml": true,
   "ezLanXml": null,
   "remoteHmiMaxXml": 5,
   "appMemoryMB": 64.0,
   "appMemoryExpandedMB": null,
   "backupMemoryKB": 320.0,
   "revisions": [],
   "firstSeen": "4.08",
   "inVersions": [
    "4.08",
    "4.09",
    "5.01"
   ],
   "versions": {
    "4.08": "full",
    "4.09": "full",
    "5.01": "full"
   },
   "statusLatest": "full",
   "features": {
    "remoteHmi": {
     "s": "yes",
     "conn": 5,
     "ver": "4.0"
    },
    "gpViewer": {
     "s": "yes"
    },
    "proFaceConnect": {
     "s": "yes"
    },
    "ftp": {
     "s": "yes",
     "n": "支援 FTPS"
    },
    "web": {
     "s": "ended",
     "n": "4.09.450 以前版本才支援"
    },
    "email": {
     "s": "yes"
    },
    "ipsec": {
     "s": "yes"
    },
    "ezLan": {
     "s": "no"
    }
   },
   "featureSrc": [
    "S_F_SP5000"
   ],
   "cutout": {
    "mount": "rect",
    "w": 190,
    "h": 135,
    "t": "1.6～5",
    "src": "S_C_SP5000"
   },
   "replace": [],
   "switches": [],
   "cable": null
  },
  {
   "key": "001C0A00|SP-5B10|SP5500WAD",
   "seriesXml": "SP5000 Series",
   "series": "SP5000",
   "group": "SP-5B10",
   "name": "SP5500WAD",
   "offlineName": "SP5500WA+SP5B10",
   "form": "panel",
   "inch": 10.1,
   "resolution": "WXGA",
   "resolutionPx": "1280×800",
   "color": "Color",
   "touch": "analog",
   "ethernet": 2,
   "com": [
    {
     "port": "COM1",
     "type": "RS232C/RS422/485"
    },
    {
     "port": "COM2",
     "type": "RS232C/RS422/485"
    }
   ],
   "usbA": 2,
   "usbMiniB": 1,
   "usbMicroB": null,
   "cardSlot": true,
   "ftpXml": true,
   "webXml": true,
   "emailXml": true,
   "ezLanXml": null,
   "remoteHmiMaxXml": 5,
   "appMemoryMB": 64.0,
   "appMemoryExpandedMB": null,
   "backupMemoryKB": 320.0,
   "revisions": [],
   "firstSeen": "4.08",
   "inVersions": [
    "4.08",
    "4.09",
    "5.01"
   ],
   "versions": {
    "4.08": "full",
    "4.09": "full",
    "5.01": "full"
   },
   "statusLatest": "full",
   "features": {
    "remoteHmi": {
     "s": "yes",
     "conn": 5,
     "ver": "4.0"
    },
    "gpViewer": {
     "s": "yes"
    },
    "proFaceConnect": {
     "s": "yes"
    },
    "ftp": {
     "s": "yes",
     "n": "支援 FTPS"
    },
    "web": {
     "s": "ended",
     "n": "4.09.450 以前版本才支援"
    },
    "email": {
     "s": "yes"
    },
    "ipsec": {
     "s": "yes"
    },
    "ezLan": {
     "s": "no"
    }
   },
   "featureSrc": [
    "S_F_SP5000"
   ],
   "cutout": {
    "mount": "rect",
    "w": 255,
    "h": 185,
    "t": "1.6～5",
    "src": "S_C_SP5000"
   },
   "replace": [],
   "switches": [],
   "cable": null
  },
  {
   "key": "00000A00|SP-5B10|SP5500TPD",
   "seriesXml": "SP5000 Series",
   "series": "SP5000",
   "group": "SP-5B10",
   "name": "SP5500TPD",
   "offlineName": "SP5500TP+SP5B10",
   "form": "panel",
   "inch": 10.4,
   "resolution": "SVGA",
   "resolutionPx": "800×600",
   "color": "Color",
   "touch": "analog(multi-touch)",
   "ethernet": 2,
   "com": [
    {
     "port": "COM1",
     "type": "RS232C/RS422/485"
    },
    {
     "port": "COM2",
     "type": "RS232C/RS422/485"
    }
   ],
   "usbA": 3,
   "usbMiniB": 2,
   "usbMicroB": null,
   "cardSlot": true,
   "ftpXml": true,
   "webXml": true,
   "emailXml": true,
   "ezLanXml": null,
   "remoteHmiMaxXml": 5,
   "appMemoryMB": 64.0,
   "appMemoryExpandedMB": null,
   "backupMemoryKB": 320.0,
   "revisions": [],
   "firstSeen": "4.08",
   "inVersions": [
    "4.08",
    "4.09",
    "5.01"
   ],
   "versions": {
    "4.08": "full",
    "4.09": "full",
    "5.01": "full"
   },
   "statusLatest": "full",
   "features": {
    "remoteHmi": {
     "s": "yes",
     "conn": 5,
     "ver": "4.0"
    },
    "gpViewer": {
     "s": "yes"
    },
    "proFaceConnect": {
     "s": "yes"
    },
    "ftp": {
     "s": "yes",
     "n": "支援 FTPS"
    },
    "web": {
     "s": "ended",
     "n": "4.09.450 以前版本才支援"
    },
    "email": {
     "s": "yes"
    },
    "ipsec": {
     "s": "yes"
    },
    "ezLan": {
     "s": "no"
    }
   },
   "featureSrc": [
    "S_F_SP5000"
   ],
   "cutout": {
    "mount": "rect",
    "w": 259,
    "h": 201,
    "t": "1.6～5",
    "src": "S_C_SP5000"
   },
   "replace": [],
   "switches": [],
   "cable": null
  },
  {
   "key": "00140A00|SP-5B10|SP5600TAD",
   "seriesXml": "SP5000 Series",
   "series": "SP5000",
   "group": "SP-5B10",
   "name": "SP5600TAD",
   "offlineName": "SP5600TA+SP5B10",
   "form": "panel",
   "inch": 12.1,
   "resolution": "XGA",
   "resolutionPx": "1024×768",
   "color": "Color",
   "touch": "analog",
   "ethernet": 2,
   "com": [
    {
     "port": "COM1",
     "type": "RS232C/RS422/485"
    },
    {
     "port": "COM2",
     "type": "RS232C/RS422/485"
    }
   ],
   "usbA": 2,
   "usbMiniB": 1,
   "usbMicroB": null,
   "cardSlot": true,
   "ftpXml": true,
   "webXml": true,
   "emailXml": true,
   "ezLanXml": null,
   "remoteHmiMaxXml": 5,
   "appMemoryMB": 64.0,
   "appMemoryExpandedMB": null,
   "backupMemoryKB": 320.0,
   "revisions": [],
   "firstSeen": "4.09",
   "inVersions": [
    "4.09",
    "5.01"
   ],
   "versions": {
    "4.08": "absent",
    "4.09": "full",
    "5.01": "full"
   },
   "statusLatest": "full",
   "features": {
    "remoteHmi": {
     "s": "yes",
     "conn": 5,
     "ver": "4.0"
    },
    "gpViewer": {
     "s": "yes"
    },
    "proFaceConnect": {
     "s": "yes"
    },
    "ftp": {
     "s": "yes",
     "n": "支援 FTPS"
    },
    "web": {
     "s": "ended",
     "n": "4.09.450 以前版本才支援"
    },
    "email": {
     "s": "yes"
    },
    "ipsec": {
     "s": "yes"
    },
    "ezLan": {
     "s": "no"
    }
   },
   "featureSrc": [
    "S_F_SP5000"
   ],
   "cutout": {
    "mount": "rect",
    "w": 301.5,
    "h": 227.5,
    "t": "1.6～5",
    "src": "S_C_SP5000"
   },
   "replace": [],
   "switches": [],
   "cable": null
  },
  {
   "key": "00040A00|SP-5B10|SP5600TPD",
   "seriesXml": "SP5000 Series",
   "series": "SP5000",
   "group": "SP-5B10",
   "name": "SP5600TPD",
   "offlineName": "SP5600TP+SP5B10",
   "form": "panel",
   "inch": 12.1,
   "resolution": "XGA",
   "resolutionPx": "1024×768",
   "color": "Color",
   "touch": "analog(multi-touch)",
   "ethernet": 2,
   "com": [
    {
     "port": "COM1",
     "type": "RS232C/RS422/485"
    },
    {
     "port": "COM2",
     "type": "RS232C/RS422/485"
    }
   ],
   "usbA": 3,
   "usbMiniB": 2,
   "usbMicroB": null,
   "cardSlot": true,
   "ftpXml": true,
   "webXml": true,
   "emailXml": true,
   "ezLanXml": null,
   "remoteHmiMaxXml": 5,
   "appMemoryMB": 64.0,
   "appMemoryExpandedMB": null,
   "backupMemoryKB": 320.0,
   "revisions": [],
   "firstSeen": "4.08",
   "inVersions": [
    "4.08",
    "4.09",
    "5.01"
   ],
   "versions": {
    "4.08": "full",
    "4.09": "full",
    "5.01": "full"
   },
   "statusLatest": "full",
   "features": {
    "remoteHmi": {
     "s": "yes",
     "conn": 5,
     "ver": "4.0"
    },
    "gpViewer": {
     "s": "yes"
    },
    "proFaceConnect": {
     "s": "yes"
    },
    "ftp": {
     "s": "yes",
     "n": "支援 FTPS"
    },
    "web": {
     "s": "ended",
     "n": "4.09.450 以前版本才支援"
    },
    "email": {
     "s": "yes"
    },
    "ipsec": {
     "s": "yes"
    },
    "ezLan": {
     "s": "no"
    }
   },
   "featureSrc": [
    "S_F_SP5000"
   ],
   "cutout": {
    "mount": "rect",
    "w": 301.5,
    "h": 227.5,
    "t": "1.6～5",
    "src": "S_C_SP5000"
   },
   "replace": [],
   "switches": [],
   "cable": null
  },
  {
   "key": "00180A00|SP-5B10|SP5600WAD",
   "seriesXml": "SP5000 Series",
   "series": "SP5000",
   "group": "SP-5B10",
   "name": "SP5600WAD",
   "offlineName": "SP5600WA+SP5B10",
   "form": "panel",
   "inch": 12.1,
   "resolution": "WXGA",
   "resolutionPx": "1280×800",
   "color": "Color",
   "touch": "analog",
   "ethernet": 2,
   "com": [
    {
     "port": "COM1",
     "type": "RS232C/RS422/485"
    },
    {
     "port": "COM2",
     "type": "RS232C/RS422/485"
    }
   ],
   "usbA": 2,
   "usbMiniB": 1,
   "usbMicroB": null,
   "cardSlot": true,
   "ftpXml": true,
   "webXml": true,
   "emailXml": true,
   "ezLanXml": null,
   "remoteHmiMaxXml": 5,
   "appMemoryMB": 64.0,
   "appMemoryExpandedMB": null,
   "backupMemoryKB": 320.0,
   "revisions": [],
   "firstSeen": "4.08",
   "inVersions": [
    "4.08",
    "4.09",
    "5.01"
   ],
   "versions": {
    "4.08": "full",
    "4.09": "full",
    "5.01": "full"
   },
   "statusLatest": "full",
   "features": {
    "remoteHmi": {
     "s": "yes",
     "conn": 5,
     "ver": "4.0"
    },
    "gpViewer": {
     "s": "yes"
    },
    "proFaceConnect": {
     "s": "yes"
    },
    "ftp": {
     "s": "yes",
     "n": "支援 FTPS"
    },
    "web": {
     "s": "ended",
     "n": "4.09.450 以前版本才支援"
    },
    "email": {
     "s": "yes"
    },
    "ipsec": {
     "s": "yes"
    },
    "ezLan": {
     "s": "no"
    }
   },
   "featureSrc": [
    "S_F_SP5000"
   ],
   "cutout": {
    "mount": "rect",
    "w": 295,
    "h": 217,
    "t": "1.6～5",
    "src": "S_C_SP5000"
   },
   "replace": [],
   "switches": [],
   "cable": null
  },
  {
   "key": "00080A00|SP-5B10|SP5660TPD",
   "seriesXml": "SP5000 Series",
   "series": "SP5000",
   "group": "SP-5B10",
   "name": "SP5660TPD",
   "offlineName": "SP5660TP+SP5B10",
   "form": "panel",
   "inch": 12.1,
   "resolution": "XGA",
   "resolutionPx": "1024×768",
   "color": "Color",
   "touch": "analog(multi-touch)",
   "ethernet": 2,
   "com": [
    {
     "port": "COM1",
     "type": "RS232C/RS422/485"
    },
    {
     "port": "COM2",
     "type": "RS232C/RS422/485"
    }
   ],
   "usbA": 3,
   "usbMiniB": 2,
   "usbMicroB": null,
   "cardSlot": true,
   "ftpXml": true,
   "webXml": true,
   "emailXml": true,
   "ezLanXml": null,
   "remoteHmiMaxXml": 5,
   "appMemoryMB": 64.0,
   "appMemoryExpandedMB": null,
   "backupMemoryKB": 320.0,
   "revisions": [],
   "firstSeen": "4.08",
   "inVersions": [
    "4.08",
    "4.09",
    "5.01"
   ],
   "versions": {
    "4.08": "full",
    "4.09": "full",
    "5.01": "full"
   },
   "statusLatest": "full",
   "features": {
    "remoteHmi": {
     "s": "yes",
     "conn": 5,
     "ver": "4.0"
    },
    "gpViewer": {
     "s": "yes"
    },
    "proFaceConnect": {
     "s": "yes"
    },
    "ftp": {
     "s": "yes",
     "n": "支援 FTPS"
    },
    "web": {
     "s": "ended",
     "n": "4.09.450 以前版本才支援"
    },
    "email": {
     "s": "yes"
    },
    "ipsec": {
     "s": "yes"
    },
    "ezLan": {
     "s": "no"
    }
   },
   "featureSrc": [
    "S_F_SP5000"
   ],
   "cutout": {
    "mount": "rect",
    "w": 301.5,
    "h": 227.5,
    "t": "1.6～5",
    "src": "S_C_SP5000"
   },
   "replace": [],
   "switches": [],
   "cable": null
  },
  {
   "key": "000C0A00|SP-5B10|SP5700TPD",
   "seriesXml": "SP5000 Series",
   "series": "SP5000",
   "group": "SP-5B10",
   "name": "SP5700TPD",
   "offlineName": "SP5700TP+SP5B10",
   "form": "panel",
   "inch": 15.0,
   "resolution": "XGA",
   "resolutionPx": "1024×768",
   "color": "Color",
   "touch": "analog(multi-touch)",
   "ethernet": 2,
   "com": [
    {
     "port": "COM1",
     "type": "RS232C/RS422/485"
    },
    {
     "port": "COM2",
     "type": "RS232C/RS422/485"
    }
   ],
   "usbA": 3,
   "usbMiniB": 2,
   "usbMicroB": null,
   "cardSlot": true,
   "ftpXml": true,
   "webXml": true,
   "emailXml": true,
   "ezLanXml": null,
   "remoteHmiMaxXml": 5,
   "appMemoryMB": 64.0,
   "appMemoryExpandedMB": null,
   "backupMemoryKB": 320.0,
   "revisions": [],
   "firstSeen": "4.08",
   "inVersions": [
    "4.08",
    "4.09",
    "5.01"
   ],
   "versions": {
    "4.08": "full",
    "4.09": "full",
    "5.01": "full"
   },
   "statusLatest": "full",
   "features": {
    "remoteHmi": {
     "s": "yes",
     "conn": 5,
     "ver": "4.0"
    },
    "gpViewer": {
     "s": "yes"
    },
    "proFaceConnect": {
     "s": "yes"
    },
    "ftp": {
     "s": "yes",
     "n": "支援 FTPS"
    },
    "web": {
     "s": "ended",
     "n": "4.09.450 以前版本才支援"
    },
    "email": {
     "s": "yes"
    },
    "ipsec": {
     "s": "yes"
    },
    "ezLan": {
     "s": "no"
    }
   },
   "featureSrc": [
    "S_F_SP5000"
   ],
   "cutout": {
    "mount": "rect",
    "w": 383.5,
    "h": 282.5,
    "t": "1.6～5",
    "src": "S_C_SP5000"
   },
   "replace": [],
   "switches": [],
   "cable": null
  },
  {
   "key": "002C0A00|SP-5B10|SP5700WCD",
   "seriesXml": "SP5000 Series",
   "series": "SP5000",
   "group": "SP-5B10",
   "name": "SP5700WCD",
   "offlineName": "SP5700WC+SP5B10",
   "form": "panel",
   "inch": 15.0,
   "resolution": "FWXGA",
   "resolutionPx": "1366×768",
   "color": "Color",
   "touch": "p-cap(multi-touch)",
   "ethernet": 2,
   "com": [
    {
     "port": "COM1",
     "type": "RS232C/RS422/485"
    },
    {
     "port": "COM2",
     "type": "RS232C/RS422/485"
    }
   ],
   "usbA": 3,
   "usbMiniB": 2,
   "usbMicroB": null,
   "cardSlot": true,
   "ftpXml": true,
   "webXml": true,
   "emailXml": true,
   "ezLanXml": null,
   "remoteHmiMaxXml": 5,
   "appMemoryMB": 64.0,
   "appMemoryExpandedMB": null,
   "backupMemoryKB": 320.0,
   "revisions": [],
   "firstSeen": "4.08",
   "inVersions": [
    "4.08",
    "4.09",
    "5.01"
   ],
   "versions": {
    "4.08": "full",
    "4.09": "full",
    "5.01": "full"
   },
   "statusLatest": "full",
   "features": {
    "remoteHmi": {
     "s": "yes",
     "conn": 5,
     "ver": "4.0"
    },
    "gpViewer": {
     "s": "yes"
    },
    "proFaceConnect": {
     "s": "yes"
    },
    "ftp": {
     "s": "yes",
     "n": "支援 FTPS"
    },
    "web": {
     "s": "ended",
     "n": "4.09.450 以前版本才支援"
    },
    "email": {
     "s": "yes"
    },
    "ipsec": {
     "s": "yes"
    },
    "ezLan": {
     "s": "no"
    }
   },
   "featureSrc": [
    "S_F_SP5000"
   ],
   "cutout": {
    "mount": "rect",
    "w": 396,
    "h": 277,
    "t": "1.6～5",
    "src": "S_C_SP5000"
   },
   "replace": [],
   "switches": [],
   "cable": null
  },
  {
   "key": "00300A00|SP-5B10|SP5800WCD",
   "seriesXml": "SP5000 Series",
   "series": "SP5000",
   "group": "SP-5B10",
   "name": "SP5800WCD",
   "offlineName": "SP5800WC+SP5B10",
   "form": "panel",
   "inch": 19.0,
   "resolution": "FWXGA",
   "resolutionPx": "1366×768",
   "color": "Color",
   "touch": "p-cap(multi-touch)",
   "ethernet": 2,
   "com": [
    {
     "port": "COM1",
     "type": "RS232C/RS422/485"
    },
    {
     "port": "COM2",
     "type": "RS232C/RS422/485"
    }
   ],
   "usbA": 3,
   "usbMiniB": 2,
   "usbMicroB": null,
   "cardSlot": true,
   "ftpXml": true,
   "webXml": true,
   "emailXml": true,
   "ezLanXml": null,
   "remoteHmiMaxXml": 5,
   "appMemoryMB": 64.0,
   "appMemoryExpandedMB": null,
   "backupMemoryKB": 320.0,
   "revisions": [],
   "firstSeen": "4.08",
   "inVersions": [
    "4.08",
    "4.09",
    "5.01"
   ],
   "versions": {
    "4.08": "full",
    "4.09": "full",
    "5.01": "full"
   },
   "statusLatest": "full",
   "features": {
    "remoteHmi": {
     "s": "yes",
     "conn": 5,
     "ver": "4.0"
    },
    "gpViewer": {
     "s": "yes"
    },
    "proFaceConnect": {
     "s": "yes"
    },
    "ftp": {
     "s": "yes",
     "n": "支援 FTPS"
    },
    "web": {
     "s": "ended",
     "n": "4.09.450 以前版本才支援"
    },
    "email": {
     "s": "yes"
    },
    "ipsec": {
     "s": "yes"
    },
    "ezLan": {
     "s": "no"
    }
   },
   "featureSrc": [
    "S_F_SP5000"
   ],
   "cutout": {
    "mount": "rect",
    "w": 465,
    "h": 319,
    "t": "1.6～5",
    "src": "S_C_SP5000"
   },
   "replace": [],
   "switches": [],
   "cable": null
  },
  {
   "key": "04400A00|SP-5B40|DC Power Supply Adapter",
   "seriesXml": "SP5000 Series",
   "series": "SP5000",
   "group": "SP-5B40",
   "name": "DC Power Supply Adapter",
   "offlineName": "DC Power+SP5B40",
   "form": "box",
   "inch": null,
   "resolution": "XGA",
   "resolutionPx": "1024×768",
   "color": "Color",
   "touch": "none",
   "ethernet": 3,
   "com": [
    {
     "port": "COM1",
     "type": "RS232C/RS422/485"
    },
    {
     "port": "COM2",
     "type": "RS232C/RS422/485"
    }
   ],
   "usbA": 3,
   "usbMiniB": 1,
   "usbMicroB": null,
   "cardSlot": true,
   "ftpXml": false,
   "webXml": false,
   "emailXml": true,
   "ezLanXml": null,
   "remoteHmiMaxXml": 5,
   "appMemoryMB": 64.0,
   "appMemoryExpandedMB": null,
   "backupMemoryKB": 320.0,
   "revisions": [],
   "firstSeen": "4.08",
   "inVersions": [
    "4.08",
    "4.09",
    "5.01"
   ],
   "versions": {
    "4.08": "full",
    "4.09": "full",
    "5.01": "full"
   },
   "statusLatest": "full",
   "features": {
    "remoteHmi": {
     "s": "yes",
     "n": "Open Box（Windows）亦可用 Remote HMI Server",
     "conn": 5,
     "ver": "4.0"
    },
    "gpViewer": {
     "s": "yes"
    },
    "proFaceConnect": {
     "s": "yes",
     "n": "SiteManager 需以瀏覽器設定"
    },
    "ftp": {
     "s": "no"
    },
    "web": {
     "s": "no"
    },
    "email": {
     "s": "yes"
    },
    "ipsec": {
     "s": "yes"
    },
    "ezLan": {
     "s": "no"
    }
   },
   "featureSrc": [
    "S_F_SP5000",
    "S_FIELD"
   ],
   "cutout": {
    "mount": "box",
    "n": "Box 單獨使用"
   },
   "replace": [
    {
     "to": "PS6000 Atom Box",
     "sameCutout": null,
     "src": "S_R_SP5B41"
    }
   ],
   "switches": [],
   "cable": null
  },
  {
   "key": "04200A00|SP-5B40|SP5400WAD",
   "seriesXml": "SP5000 Series",
   "series": "SP5000",
   "group": "SP-5B40",
   "name": "SP5400WAD",
   "offlineName": "SP5400WA+SP5B40",
   "form": "panel",
   "inch": 7.0,
   "resolution": "WVGA",
   "resolutionPx": "800×480",
   "color": "Color",
   "touch": "analog",
   "ethernet": 2,
   "com": [
    {
     "port": "COM1",
     "type": "RS232C/RS422/485"
    },
    {
     "port": "COM2",
     "type": "RS232C/RS422/485"
    }
   ],
   "usbA": 3,
   "usbMiniB": 1,
   "usbMicroB": null,
   "cardSlot": true,
   "ftpXml": false,
   "webXml": false,
   "emailXml": true,
   "ezLanXml": null,
   "remoteHmiMaxXml": 5,
   "appMemoryMB": 64.0,
   "appMemoryExpandedMB": null,
   "backupMemoryKB": 320.0,
   "revisions": [],
   "firstSeen": "4.08",
   "inVersions": [
    "4.08",
    "4.09",
    "5.01"
   ],
   "versions": {
    "4.08": "full",
    "4.09": "full",
    "5.01": "full"
   },
   "statusLatest": "full",
   "features": {
    "remoteHmi": {
     "s": "yes",
     "n": "Open Box（Windows）亦可用 Remote HMI Server",
     "conn": 5,
     "ver": "4.0"
    },
    "gpViewer": {
     "s": "yes"
    },
    "proFaceConnect": {
     "s": "yes",
     "n": "SiteManager 需以瀏覽器設定"
    },
    "ftp": {
     "s": "no"
    },
    "web": {
     "s": "no"
    },
    "email": {
     "s": "yes"
    },
    "ipsec": {
     "s": "yes"
    },
    "ezLan": {
     "s": "no"
    }
   },
   "featureSrc": [
    "S_F_SP5000",
    "S_FIELD"
   ],
   "cutout": {
    "mount": "rect",
    "w": 190,
    "h": 135,
    "t": "1.6～5",
    "src": "S_C_SP5000"
   },
   "replace": [
    {
     "to": "PS6000 Atom Box",
     "sameCutout": null,
     "src": "S_R_SP5B41"
    }
   ],
   "switches": [],
   "cable": null
  },
  {
   "key": "041C0A00|SP-5B40|SP5500WAD",
   "seriesXml": "SP5000 Series",
   "series": "SP5000",
   "group": "SP-5B40",
   "name": "SP5500WAD",
   "offlineName": "SP5500WA+SP5B40",
   "form": "panel",
   "inch": 10.1,
   "resolution": "WXGA",
   "resolutionPx": "1280×800",
   "color": "Color",
   "touch": "analog",
   "ethernet": 2,
   "com": [
    {
     "port": "COM1",
     "type": "RS232C/RS422/485"
    },
    {
     "port": "COM2",
     "type": "RS232C/RS422/485"
    }
   ],
   "usbA": 3,
   "usbMiniB": 1,
   "usbMicroB": null,
   "cardSlot": true,
   "ftpXml": false,
   "webXml": false,
   "emailXml": true,
   "ezLanXml": null,
   "remoteHmiMaxXml": 5,
   "appMemoryMB": 64.0,
   "appMemoryExpandedMB": null,
   "backupMemoryKB": 320.0,
   "revisions": [],
   "firstSeen": "4.08",
   "inVersions": [
    "4.08",
    "4.09",
    "5.01"
   ],
   "versions": {
    "4.08": "full",
    "4.09": "full",
    "5.01": "full"
   },
   "statusLatest": "full",
   "features": {
    "remoteHmi": {
     "s": "yes",
     "n": "Open Box（Windows）亦可用 Remote HMI Server",
     "conn": 5,
     "ver": "4.0"
    },
    "gpViewer": {
     "s": "yes"
    },
    "proFaceConnect": {
     "s": "yes",
     "n": "SiteManager 需以瀏覽器設定"
    },
    "ftp": {
     "s": "no"
    },
    "web": {
     "s": "no"
    },
    "email": {
     "s": "yes"
    },
    "ipsec": {
     "s": "yes"
    },
    "ezLan": {
     "s": "no"
    }
   },
   "featureSrc": [
    "S_F_SP5000",
    "S_FIELD"
   ],
   "cutout": {
    "mount": "rect",
    "w": 255,
    "h": 185,
    "t": "1.6～5",
    "src": "S_C_SP5000"
   },
   "replace": [
    {
     "to": "PS6000 Atom Box",
     "sameCutout": null,
     "src": "S_R_SP5B41"
    }
   ],
   "switches": [],
   "cable": null
  },
  {
   "key": "04000A00|SP-5B40|SP5500TPD",
   "seriesXml": "SP5000 Series",
   "series": "SP5000",
   "group": "SP-5B40",
   "name": "SP5500TPD",
   "offlineName": "SP5500TP+SP5B40",
   "form": "panel",
   "inch": 10.4,
   "resolution": "SVGA",
   "resolutionPx": "800×600",
   "color": "Color",
   "touch": "analog(multi-touch)",
   "ethernet": 2,
   "com": [
    {
     "port": "COM1",
     "type": "RS232C/RS422/485"
    },
    {
     "port": "COM2",
     "type": "RS232C/RS422/485"
    }
   ],
   "usbA": 4,
   "usbMiniB": 2,
   "usbMicroB": null,
   "cardSlot": true,
   "ftpXml": false,
   "webXml": false,
   "emailXml": true,
   "ezLanXml": null,
   "remoteHmiMaxXml": 5,
   "appMemoryMB": 64.0,
   "appMemoryExpandedMB": null,
   "backupMemoryKB": 320.0,
   "revisions": [],
   "firstSeen": "4.08",
   "inVersions": [
    "4.08",
    "4.09",
    "5.01"
   ],
   "versions": {
    "4.08": "full",
    "4.09": "full",
    "5.01": "full"
   },
   "statusLatest": "full",
   "features": {
    "remoteHmi": {
     "s": "yes",
     "n": "Open Box（Windows）亦可用 Remote HMI Server",
     "conn": 5,
     "ver": "4.0"
    },
    "gpViewer": {
     "s": "yes"
    },
    "proFaceConnect": {
     "s": "yes",
     "n": "SiteManager 需以瀏覽器設定"
    },
    "ftp": {
     "s": "no"
    },
    "web": {
     "s": "no"
    },
    "email": {
     "s": "yes"
    },
    "ipsec": {
     "s": "yes"
    },
    "ezLan": {
     "s": "no"
    }
   },
   "featureSrc": [
    "S_F_SP5000",
    "S_FIELD"
   ],
   "cutout": {
    "mount": "rect",
    "w": 259,
    "h": 201,
    "t": "1.6～5",
    "src": "S_C_SP5000"
   },
   "replace": [
    {
     "to": "PS6000 Atom Box",
     "sameCutout": null,
     "src": "S_R_SP5B41"
    }
   ],
   "switches": [],
   "cable": null
  },
  {
   "key": "04040A00|SP-5B40|SP5600TPD",
   "seriesXml": "SP5000 Series",
   "series": "SP5000",
   "group": "SP-5B40",
   "name": "SP5600TPD",
   "offlineName": "SP5600TP+SP5B40",
   "form": "panel",
   "inch": 12.1,
   "resolution": "XGA",
   "resolutionPx": "1024×768",
   "color": "Color",
   "touch": "analog(multi-touch)",
   "ethernet": 2,
   "com": [
    {
     "port": "COM1",
     "type": "RS232C/RS422/485"
    },
    {
     "port": "COM2",
     "type": "RS232C/RS422/485"
    }
   ],
   "usbA": 4,
   "usbMiniB": 2,
   "usbMicroB": null,
   "cardSlot": true,
   "ftpXml": false,
   "webXml": false,
   "emailXml": true,
   "ezLanXml": null,
   "remoteHmiMaxXml": 5,
   "appMemoryMB": 64.0,
   "appMemoryExpandedMB": null,
   "backupMemoryKB": 320.0,
   "revisions": [],
   "firstSeen": "4.08",
   "inVersions": [
    "4.08",
    "4.09",
    "5.01"
   ],
   "versions": {
    "4.08": "full",
    "4.09": "full",
    "5.01": "full"
   },
   "statusLatest": "full",
   "features": {
    "remoteHmi": {
     "s": "yes",
     "n": "Open Box（Windows）亦可用 Remote HMI Server",
     "conn": 5,
     "ver": "4.0"
    },
    "gpViewer": {
     "s": "yes"
    },
    "proFaceConnect": {
     "s": "yes",
     "n": "SiteManager 需以瀏覽器設定"
    },
    "ftp": {
     "s": "no"
    },
    "web": {
     "s": "no"
    },
    "email": {
     "s": "yes"
    },
    "ipsec": {
     "s": "yes"
    },
    "ezLan": {
     "s": "no"
    }
   },
   "featureSrc": [
    "S_F_SP5000",
    "S_FIELD"
   ],
   "cutout": {
    "mount": "rect",
    "w": 301.5,
    "h": 227.5,
    "t": "1.6～5",
    "src": "S_C_SP5000"
   },
   "replace": [
    {
     "to": "PS6000 Atom Box",
     "sameCutout": null,
     "src": "S_R_SP5B41"
    }
   ],
   "switches": [],
   "cable": null
  },
  {
   "key": "04180A00|SP-5B40|SP5600WAD",
   "seriesXml": "SP5000 Series",
   "series": "SP5000",
   "group": "SP-5B40",
   "name": "SP5600WAD",
   "offlineName": "SP5600WA+SP5B40",
   "form": "panel",
   "inch": 12.1,
   "resolution": "WXGA",
   "resolutionPx": "1280×800",
   "color": "Color",
   "touch": "analog",
   "ethernet": 2,
   "com": [
    {
     "port": "COM1",
     "type": "RS232C/RS422/485"
    },
    {
     "port": "COM2",
     "type": "RS232C/RS422/485"
    }
   ],
   "usbA": 3,
   "usbMiniB": 1,
   "usbMicroB": null,
   "cardSlot": true,
   "ftpXml": false,
   "webXml": false,
   "emailXml": true,
   "ezLanXml": null,
   "remoteHmiMaxXml": 5,
   "appMemoryMB": 64.0,
   "appMemoryExpandedMB": null,
   "backupMemoryKB": 320.0,
   "revisions": [],
   "firstSeen": "4.08",
   "inVersions": [
    "4.08",
    "4.09",
    "5.01"
   ],
   "versions": {
    "4.08": "full",
    "4.09": "full",
    "5.01": "full"
   },
   "statusLatest": "full",
   "features": {
    "remoteHmi": {
     "s": "yes",
     "n": "Open Box（Windows）亦可用 Remote HMI Server",
     "conn": 5,
     "ver": "4.0"
    },
    "gpViewer": {
     "s": "yes"
    },
    "proFaceConnect": {
     "s": "yes",
     "n": "SiteManager 需以瀏覽器設定"
    },
    "ftp": {
     "s": "no"
    },
    "web": {
     "s": "no"
    },
    "email": {
     "s": "yes"
    },
    "ipsec": {
     "s": "yes"
    },
    "ezLan": {
     "s": "no"
    }
   },
   "featureSrc": [
    "S_F_SP5000",
    "S_FIELD"
   ],
   "cutout": {
    "mount": "rect",
    "w": 295,
    "h": 217,
    "t": "1.6～5",
    "src": "S_C_SP5000"
   },
   "replace": [
    {
     "to": "PS6000 Atom Box",
     "sameCutout": null,
     "src": "S_R_SP5B41"
    }
   ],
   "switches": [],
   "cable": null
  },
  {
   "key": "04080A00|SP-5B40|SP5660TPD",
   "seriesXml": "SP5000 Series",
   "series": "SP5000",
   "group": "SP-5B40",
   "name": "SP5660TPD",
   "offlineName": "SP5660TP+SP5B40",
   "form": "panel",
   "inch": 12.1,
   "resolution": "XGA",
   "resolutionPx": "1024×768",
   "color": "Color",
   "touch": "analog(multi-touch)",
   "ethernet": 2,
   "com": [
    {
     "port": "COM1",
     "type": "RS232C/RS422/485"
    },
    {
     "port": "COM2",
     "type": "RS232C/RS422/485"
    }
   ],
   "usbA": 4,
   "usbMiniB": 2,
   "usbMicroB": null,
   "cardSlot": true,
   "ftpXml": false,
   "webXml": false,
   "emailXml": true,
   "ezLanXml": null,
   "remoteHmiMaxXml": 5,
   "appMemoryMB": 64.0,
   "appMemoryExpandedMB": null,
   "backupMemoryKB": 320.0,
   "revisions": [],
   "firstSeen": "4.08",
   "inVersions": [
    "4.08",
    "4.09",
    "5.01"
   ],
   "versions": {
    "4.08": "full",
    "4.09": "full",
    "5.01": "full"
   },
   "statusLatest": "full",
   "features": {
    "remoteHmi": {
     "s": "yes",
     "n": "Open Box（Windows）亦可用 Remote HMI Server",
     "conn": 5,
     "ver": "4.0"
    },
    "gpViewer": {
     "s": "yes"
    },
    "proFaceConnect": {
     "s": "yes",
     "n": "SiteManager 需以瀏覽器設定"
    },
    "ftp": {
     "s": "no"
    },
    "web": {
     "s": "no"
    },
    "email": {
     "s": "yes"
    },
    "ipsec": {
     "s": "yes"
    },
    "ezLan": {
     "s": "no"
    }
   },
   "featureSrc": [
    "S_F_SP5000",
    "S_FIELD"
   ],
   "cutout": {
    "mount": "rect",
    "w": 301.5,
    "h": 227.5,
    "t": "1.6～5",
    "src": "S_C_SP5000"
   },
   "replace": [
    {
     "to": "PS6000 Atom Box",
     "sameCutout": null,
     "src": "S_R_SP5B41"
    }
   ],
   "switches": [],
   "cable": null
  },
  {
   "key": "040C0A00|SP-5B40|SP5700TPD",
   "seriesXml": "SP5000 Series",
   "series": "SP5000",
   "group": "SP-5B40",
   "name": "SP5700TPD",
   "offlineName": "SP5700TP+SP5B40",
   "form": "panel",
   "inch": 15.0,
   "resolution": "XGA",
   "resolutionPx": "1024×768",
   "color": "Color",
   "touch": "analog(multi-touch)",
   "ethernet": 2,
   "com": [
    {
     "port": "COM1",
     "type": "RS232C/RS422/485"
    },
    {
     "port": "COM2",
     "type": "RS232C/RS422/485"
    }
   ],
   "usbA": 4,
   "usbMiniB": 2,
   "usbMicroB": null,
   "cardSlot": true,
   "ftpXml": false,
   "webXml": false,
   "emailXml": true,
   "ezLanXml": null,
   "remoteHmiMaxXml": 5,
   "appMemoryMB": 64.0,
   "appMemoryExpandedMB": null,
   "backupMemoryKB": 320.0,
   "revisions": [],
   "firstSeen": "4.08",
   "inVersions": [
    "4.08",
    "4.09",
    "5.01"
   ],
   "versions": {
    "4.08": "full",
    "4.09": "full",
    "5.01": "full"
   },
   "statusLatest": "full",
   "features": {
    "remoteHmi": {
     "s": "yes",
     "n": "Open Box（Windows）亦可用 Remote HMI Server",
     "conn": 5,
     "ver": "4.0"
    },
    "gpViewer": {
     "s": "yes"
    },
    "proFaceConnect": {
     "s": "yes",
     "n": "SiteManager 需以瀏覽器設定"
    },
    "ftp": {
     "s": "no"
    },
    "web": {
     "s": "no"
    },
    "email": {
     "s": "yes"
    },
    "ipsec": {
     "s": "yes"
    },
    "ezLan": {
     "s": "no"
    }
   },
   "featureSrc": [
    "S_F_SP5000",
    "S_FIELD"
   ],
   "cutout": {
    "mount": "rect",
    "w": 383.5,
    "h": 282.5,
    "t": "1.6～5",
    "src": "S_C_SP5000"
   },
   "replace": [
    {
     "to": "PS6000 Atom Box",
     "sameCutout": null,
     "src": "S_R_SP5B41"
    }
   ],
   "switches": [],
   "cable": null
  },
  {
   "key": "14400A00|SP-5B41/5B41*|DC Power Supply Adapter",
   "seriesXml": "SP5000 Series",
   "series": "SP5000",
   "group": "SP-5B41/5B41*",
   "name": "DC Power Supply Adapter",
   "offlineName": "DC Power+5B41x",
   "form": "box",
   "inch": null,
   "resolution": "FullHD",
   "resolutionPx": "1920×1080",
   "color": "Color",
   "touch": "none",
   "ethernet": 3,
   "com": [
    {
     "port": "COM1",
     "type": "RS232C/RS422/485"
    },
    {
     "port": "COM2",
     "type": "RS232C/RS422/485"
    }
   ],
   "usbA": 3,
   "usbMiniB": 1,
   "usbMicroB": null,
   "cardSlot": true,
   "ftpXml": false,
   "webXml": false,
   "emailXml": true,
   "ezLanXml": null,
   "remoteHmiMaxXml": 5,
   "appMemoryMB": 64.0,
   "appMemoryExpandedMB": null,
   "backupMemoryKB": 320.0,
   "revisions": [],
   "firstSeen": "4.08",
   "inVersions": [
    "4.08",
    "4.09",
    "5.01"
   ],
   "versions": {
    "4.08": "full",
    "4.09": "full",
    "5.01": "full"
   },
   "statusLatest": "full",
   "features": {
    "remoteHmi": {
     "s": "yes",
     "n": "Open Box（Windows）亦可用 Remote HMI Server",
     "conn": 5,
     "ver": "4.0"
    },
    "gpViewer": {
     "s": "yes"
    },
    "proFaceConnect": {
     "s": "yes",
     "n": "SiteManager 需以瀏覽器設定"
    },
    "ftp": {
     "s": "no"
    },
    "web": {
     "s": "no"
    },
    "email": {
     "s": "yes"
    },
    "ipsec": {
     "s": "yes"
    },
    "ezLan": {
     "s": "no"
    }
   },
   "featureSrc": [
    "S_F_SP5000",
    "S_FIELD"
   ],
   "cutout": {
    "mount": "box",
    "n": "Box 單獨使用"
   },
   "replace": [
    {
     "to": "PS6000 Atom Box",
     "sameCutout": null,
     "src": "S_R_SP5B41"
    }
   ],
   "switches": [],
   "cable": null
  },
  {
   "key": "14200A00|SP-5B41/5B41*|SP5400WAD",
   "seriesXml": "SP5000 Series",
   "series": "SP5000",
   "group": "SP-5B41/5B41*",
   "name": "SP5400WAD",
   "offlineName": "SP5400WA+5B41x",
   "form": "panel",
   "inch": 7.0,
   "resolution": "WVGA",
   "resolutionPx": "800×480",
   "color": "Color",
   "touch": "analog",
   "ethernet": 2,
   "com": [
    {
     "port": "COM1",
     "type": "RS232C/RS422/485"
    },
    {
     "port": "COM2",
     "type": "RS232C/RS422/485"
    }
   ],
   "usbA": 3,
   "usbMiniB": 1,
   "usbMicroB": null,
   "cardSlot": true,
   "ftpXml": false,
   "webXml": false,
   "emailXml": true,
   "ezLanXml": null,
   "remoteHmiMaxXml": 5,
   "appMemoryMB": 64.0,
   "appMemoryExpandedMB": null,
   "backupMemoryKB": 320.0,
   "revisions": [],
   "firstSeen": "4.08",
   "inVersions": [
    "4.08",
    "4.09",
    "5.01"
   ],
   "versions": {
    "4.08": "full",
    "4.09": "full",
    "5.01": "full"
   },
   "statusLatest": "full",
   "features": {
    "remoteHmi": {
     "s": "yes",
     "n": "Open Box（Windows）亦可用 Remote HMI Server",
     "conn": 5,
     "ver": "4.0"
    },
    "gpViewer": {
     "s": "yes"
    },
    "proFaceConnect": {
     "s": "yes",
     "n": "SiteManager 需以瀏覽器設定"
    },
    "ftp": {
     "s": "no"
    },
    "web": {
     "s": "no"
    },
    "email": {
     "s": "yes"
    },
    "ipsec": {
     "s": "yes"
    },
    "ezLan": {
     "s": "no"
    }
   },
   "featureSrc": [
    "S_F_SP5000",
    "S_FIELD"
   ],
   "cutout": {
    "mount": "rect",
    "w": 190,
    "h": 135,
    "t": "1.6～5",
    "src": "S_C_SP5000"
   },
   "replace": [
    {
     "to": "PS6000 Atom Box",
     "sameCutout": null,
     "src": "S_R_SP5B41"
    }
   ],
   "switches": [],
   "cable": null
  },
  {
   "key": "141C0A00|SP-5B41/5B41*|SP5500WAD",
   "seriesXml": "SP5000 Series",
   "series": "SP5000",
   "group": "SP-5B41/5B41*",
   "name": "SP5500WAD",
   "offlineName": "SP5500WA+5B41x",
   "form": "panel",
   "inch": 10.1,
   "resolution": "WXGA",
   "resolutionPx": "1280×800",
   "color": "Color",
   "touch": "analog",
   "ethernet": 2,
   "com": [
    {
     "port": "COM1",
     "type": "RS232C/RS422/485"
    },
    {
     "port": "COM2",
     "type": "RS232C/RS422/485"
    }
   ],
   "usbA": 3,
   "usbMiniB": 1,
   "usbMicroB": null,
   "cardSlot": true,
   "ftpXml": false,
   "webXml": false,
   "emailXml": true,
   "ezLanXml": null,
   "remoteHmiMaxXml": 5,
   "appMemoryMB": 64.0,
   "appMemoryExpandedMB": null,
   "backupMemoryKB": 320.0,
   "revisions": [],
   "firstSeen": "4.08",
   "inVersions": [
    "4.08",
    "4.09",
    "5.01"
   ],
   "versions": {
    "4.08": "full",
    "4.09": "full",
    "5.01": "full"
   },
   "statusLatest": "full",
   "features": {
    "remoteHmi": {
     "s": "yes",
     "n": "Open Box（Windows）亦可用 Remote HMI Server",
     "conn": 5,
     "ver": "4.0"
    },
    "gpViewer": {
     "s": "yes"
    },
    "proFaceConnect": {
     "s": "yes",
     "n": "SiteManager 需以瀏覽器設定"
    },
    "ftp": {
     "s": "no"
    },
    "web": {
     "s": "no"
    },
    "email": {
     "s": "yes"
    },
    "ipsec": {
     "s": "yes"
    },
    "ezLan": {
     "s": "no"
    }
   },
   "featureSrc": [
    "S_F_SP5000",
    "S_FIELD"
   ],
   "cutout": {
    "mount": "rect",
    "w": 255,
    "h": 185,
    "t": "1.6～5",
    "src": "S_C_SP5000"
   },
   "replace": [
    {
     "to": "PS6000 Atom Box",
     "sameCutout": null,
     "src": "S_R_SP5B41"
    }
   ],
   "switches": [],
   "cable": null
  },
  {
   "key": "14000A00|SP-5B41/5B41*|SP5500TPD",
   "seriesXml": "SP5000 Series",
   "series": "SP5000",
   "group": "SP-5B41/5B41*",
   "name": "SP5500TPD",
   "offlineName": "SP5500TP+5B41x",
   "form": "panel",
   "inch": 10.4,
   "resolution": "SVGA",
   "resolutionPx": "800×600",
   "color": "Color",
   "touch": "analog(multi-touch)",
   "ethernet": 2,
   "com": [
    {
     "port": "COM1",
     "type": "RS232C/RS422/485"
    },
    {
     "port": "COM2",
     "type": "RS232C/RS422/485"
    }
   ],
   "usbA": 4,
   "usbMiniB": 2,
   "usbMicroB": null,
   "cardSlot": true,
   "ftpXml": false,
   "webXml": false,
   "emailXml": true,
   "ezLanXml": null,
   "remoteHmiMaxXml": 5,
   "appMemoryMB": 64.0,
   "appMemoryExpandedMB": null,
   "backupMemoryKB": 320.0,
   "revisions": [],
   "firstSeen": "4.08",
   "inVersions": [
    "4.08",
    "4.09",
    "5.01"
   ],
   "versions": {
    "4.08": "full",
    "4.09": "full",
    "5.01": "full"
   },
   "statusLatest": "full",
   "features": {
    "remoteHmi": {
     "s": "yes",
     "n": "Open Box（Windows）亦可用 Remote HMI Server",
     "conn": 5,
     "ver": "4.0"
    },
    "gpViewer": {
     "s": "yes"
    },
    "proFaceConnect": {
     "s": "yes",
     "n": "SiteManager 需以瀏覽器設定"
    },
    "ftp": {
     "s": "no"
    },
    "web": {
     "s": "no"
    },
    "email": {
     "s": "yes"
    },
    "ipsec": {
     "s": "yes"
    },
    "ezLan": {
     "s": "no"
    }
   },
   "featureSrc": [
    "S_F_SP5000",
    "S_FIELD"
   ],
   "cutout": {
    "mount": "rect",
    "w": 259,
    "h": 201,
    "t": "1.6～5",
    "src": "S_C_SP5000"
   },
   "replace": [
    {
     "to": "PS6000 Atom Box",
     "sameCutout": null,
     "src": "S_R_SP5B41"
    }
   ],
   "switches": [],
   "cable": null
  },
  {
   "key": "14140A00|SP-5B41/5B41*|SP5600TAD",
   "seriesXml": "SP5000 Series",
   "series": "SP5000",
   "group": "SP-5B41/5B41*",
   "name": "SP5600TAD",
   "offlineName": "SP5600TA+5B41x",
   "form": "panel",
   "inch": 12.1,
   "resolution": "XGA",
   "resolutionPx": "1024×768",
   "color": "Color",
   "touch": "analog",
   "ethernet": 2,
   "com": [
    {
     "port": "COM1",
     "type": "RS232C/RS422/485"
    },
    {
     "port": "COM2",
     "type": "RS232C/RS422/485"
    }
   ],
   "usbA": 3,
   "usbMiniB": 1,
   "usbMicroB": null,
   "cardSlot": true,
   "ftpXml": false,
   "webXml": false,
   "emailXml": true,
   "ezLanXml": null,
   "remoteHmiMaxXml": 5,
   "appMemoryMB": 64.0,
   "appMemoryExpandedMB": null,
   "backupMemoryKB": 320.0,
   "revisions": [],
   "firstSeen": "4.09",
   "inVersions": [
    "4.09",
    "5.01"
   ],
   "versions": {
    "4.08": "absent",
    "4.09": "full",
    "5.01": "full"
   },
   "statusLatest": "full",
   "features": {
    "remoteHmi": {
     "s": "yes",
     "n": "Open Box（Windows）亦可用 Remote HMI Server",
     "conn": 5,
     "ver": "4.0"
    },
    "gpViewer": {
     "s": "yes"
    },
    "proFaceConnect": {
     "s": "yes",
     "n": "SiteManager 需以瀏覽器設定"
    },
    "ftp": {
     "s": "no"
    },
    "web": {
     "s": "no"
    },
    "email": {
     "s": "yes"
    },
    "ipsec": {
     "s": "yes"
    },
    "ezLan": {
     "s": "no"
    }
   },
   "featureSrc": [
    "S_F_SP5000",
    "S_FIELD"
   ],
   "cutout": {
    "mount": "rect",
    "w": 301.5,
    "h": 227.5,
    "t": "1.6～5",
    "src": "S_C_SP5000"
   },
   "replace": [
    {
     "to": "PS6000 Atom Box",
     "sameCutout": null,
     "src": "S_R_SP5B41"
    }
   ],
   "switches": [],
   "cable": null
  },
  {
   "key": "14040A00|SP-5B41/5B41*|SP5600TPD",
   "seriesXml": "SP5000 Series",
   "series": "SP5000",
   "group": "SP-5B41/5B41*",
   "name": "SP5600TPD",
   "offlineName": "SP5600TP+5B41x",
   "form": "panel",
   "inch": 12.1,
   "resolution": "XGA",
   "resolutionPx": "1024×768",
   "color": "Color",
   "touch": "analog(multi-touch)",
   "ethernet": 2,
   "com": [
    {
     "port": "COM1",
     "type": "RS232C/RS422/485"
    },
    {
     "port": "COM2",
     "type": "RS232C/RS422/485"
    }
   ],
   "usbA": 4,
   "usbMiniB": 2,
   "usbMicroB": null,
   "cardSlot": true,
   "ftpXml": false,
   "webXml": false,
   "emailXml": true,
   "ezLanXml": null,
   "remoteHmiMaxXml": 5,
   "appMemoryMB": 64.0,
   "appMemoryExpandedMB": null,
   "backupMemoryKB": 320.0,
   "revisions": [],
   "firstSeen": "4.08",
   "inVersions": [
    "4.08",
    "4.09",
    "5.01"
   ],
   "versions": {
    "4.08": "full",
    "4.09": "full",
    "5.01": "full"
   },
   "statusLatest": "full",
   "features": {
    "remoteHmi": {
     "s": "yes",
     "n": "Open Box（Windows）亦可用 Remote HMI Server",
     "conn": 5,
     "ver": "4.0"
    },
    "gpViewer": {
     "s": "yes"
    },
    "proFaceConnect": {
     "s": "yes",
     "n": "SiteManager 需以瀏覽器設定"
    },
    "ftp": {
     "s": "no"
    },
    "web": {
     "s": "no"
    },
    "email": {
     "s": "yes"
    },
    "ipsec": {
     "s": "yes"
    },
    "ezLan": {
     "s": "no"
    }
   },
   "featureSrc": [
    "S_F_SP5000",
    "S_FIELD"
   ],
   "cutout": {
    "mount": "rect",
    "w": 301.5,
    "h": 227.5,
    "t": "1.6～5",
    "src": "S_C_SP5000"
   },
   "replace": [
    {
     "to": "PS6000 Atom Box",
     "sameCutout": null,
     "src": "S_R_SP5B41"
    }
   ],
   "switches": [],
   "cable": null
  },
  {
   "key": "14180A00|SP-5B41/5B41*|SP5600WAD",
   "seriesXml": "SP5000 Series",
   "series": "SP5000",
   "group": "SP-5B41/5B41*",
   "name": "SP5600WAD",
   "offlineName": "SP5600WA+5B41x",
   "form": "panel",
   "inch": 12.1,
   "resolution": "WXGA",
   "resolutionPx": "1280×800",
   "color": "Color",
   "touch": "analog",
   "ethernet": 2,
   "com": [
    {
     "port": "COM1",
     "type": "RS232C/RS422/485"
    },
    {
     "port": "COM2",
     "type": "RS232C/RS422/485"
    }
   ],
   "usbA": 3,
   "usbMiniB": 1,
   "usbMicroB": null,
   "cardSlot": true,
   "ftpXml": false,
   "webXml": false,
   "emailXml": true,
   "ezLanXml": null,
   "remoteHmiMaxXml": 5,
   "appMemoryMB": 64.0,
   "appMemoryExpandedMB": null,
   "backupMemoryKB": 320.0,
   "revisions": [],
   "firstSeen": "4.08",
   "inVersions": [
    "4.08",
    "4.09",
    "5.01"
   ],
   "versions": {
    "4.08": "full",
    "4.09": "full",
    "5.01": "full"
   },
   "statusLatest": "full",
   "features": {
    "remoteHmi": {
     "s": "yes",
     "n": "Open Box（Windows）亦可用 Remote HMI Server",
     "conn": 5,
     "ver": "4.0"
    },
    "gpViewer": {
     "s": "yes"
    },
    "proFaceConnect": {
     "s": "yes",
     "n": "SiteManager 需以瀏覽器設定"
    },
    "ftp": {
     "s": "no"
    },
    "web": {
     "s": "no"
    },
    "email": {
     "s": "yes"
    },
    "ipsec": {
     "s": "yes"
    },
    "ezLan": {
     "s": "no"
    }
   },
   "featureSrc": [
    "S_F_SP5000",
    "S_FIELD"
   ],
   "cutout": {
    "mount": "rect",
    "w": 295,
    "h": 217,
    "t": "1.6～5",
    "src": "S_C_SP5000"
   },
   "replace": [
    {
     "to": "PS6000 Atom Box",
     "sameCutout": null,
     "src": "S_R_SP5B41"
    }
   ],
   "switches": [],
   "cable": null
  },
  {
   "key": "14080A00|SP-5B41/5B41*|SP5660TPD",
   "seriesXml": "SP5000 Series",
   "series": "SP5000",
   "group": "SP-5B41/5B41*",
   "name": "SP5660TPD",
   "offlineName": "SP5660TP+5B41x",
   "form": "panel",
   "inch": 12.1,
   "resolution": "XGA",
   "resolutionPx": "1024×768",
   "color": "Color",
   "touch": "analog(multi-touch)",
   "ethernet": 2,
   "com": [
    {
     "port": "COM1",
     "type": "RS232C/RS422/485"
    },
    {
     "port": "COM2",
     "type": "RS232C/RS422/485"
    }
   ],
   "usbA": 4,
   "usbMiniB": 2,
   "usbMicroB": null,
   "cardSlot": true,
   "ftpXml": false,
   "webXml": false,
   "emailXml": true,
   "ezLanXml": null,
   "remoteHmiMaxXml": 5,
   "appMemoryMB": 64.0,
   "appMemoryExpandedMB": null,
   "backupMemoryKB": 320.0,
   "revisions": [],
   "firstSeen": "4.08",
   "inVersions": [
    "4.08",
    "4.09",
    "5.01"
   ],
   "versions": {
    "4.08": "full",
    "4.09": "full",
    "5.01": "full"
   },
   "statusLatest": "full",
   "features": {
    "remoteHmi": {
     "s": "yes",
     "n": "Open Box（Windows）亦可用 Remote HMI Server",
     "conn": 5,
     "ver": "4.0"
    },
    "gpViewer": {
     "s": "yes"
    },
    "proFaceConnect": {
     "s": "yes",
     "n": "SiteManager 需以瀏覽器設定"
    },
    "ftp": {
     "s": "no"
    },
    "web": {
     "s": "no"
    },
    "email": {
     "s": "yes"
    },
    "ipsec": {
     "s": "yes"
    },
    "ezLan": {
     "s": "no"
    }
   },
   "featureSrc": [
    "S_F_SP5000",
    "S_FIELD"
   ],
   "cutout": {
    "mount": "rect",
    "w": 301.5,
    "h": 227.5,
    "t": "1.6～5",
    "src": "S_C_SP5000"
   },
   "replace": [
    {
     "to": "PS6000 Atom Box",
     "sameCutout": null,
     "src": "S_R_SP5B41"
    }
   ],
   "switches": [],
   "cable": null
  },
  {
   "key": "140C0A00|SP-5B41/5B41*|SP5700TPD",
   "seriesXml": "SP5000 Series",
   "series": "SP5000",
   "group": "SP-5B41/5B41*",
   "name": "SP5700TPD",
   "offlineName": "SP5700TP+5B41x",
   "form": "panel",
   "inch": 15.0,
   "resolution": "XGA",
   "resolutionPx": "1024×768",
   "color": "Color",
   "touch": "analog(multi-touch)",
   "ethernet": 2,
   "com": [
    {
     "port": "COM1",
     "type": "RS232C/RS422/485"
    },
    {
     "port": "COM2",
     "type": "RS232C/RS422/485"
    }
   ],
   "usbA": 4,
   "usbMiniB": 2,
   "usbMicroB": null,
   "cardSlot": true,
   "ftpXml": false,
   "webXml": false,
   "emailXml": true,
   "ezLanXml": null,
   "remoteHmiMaxXml": 5,
   "appMemoryMB": 64.0,
   "appMemoryExpandedMB": null,
   "backupMemoryKB": 320.0,
   "revisions": [],
   "firstSeen": "4.08",
   "inVersions": [
    "4.08",
    "4.09",
    "5.01"
   ],
   "versions": {
    "4.08": "full",
    "4.09": "full",
    "5.01": "full"
   },
   "statusLatest": "full",
   "features": {
    "remoteHmi": {
     "s": "yes",
     "n": "Open Box（Windows）亦可用 Remote HMI Server",
     "conn": 5,
     "ver": "4.0"
    },
    "gpViewer": {
     "s": "yes"
    },
    "proFaceConnect": {
     "s": "yes",
     "n": "SiteManager 需以瀏覽器設定"
    },
    "ftp": {
     "s": "no"
    },
    "web": {
     "s": "no"
    },
    "email": {
     "s": "yes"
    },
    "ipsec": {
     "s": "yes"
    },
    "ezLan": {
     "s": "no"
    }
   },
   "featureSrc": [
    "S_F_SP5000",
    "S_FIELD"
   ],
   "cutout": {
    "mount": "rect",
    "w": 383.5,
    "h": 282.5,
    "t": "1.6～5",
    "src": "S_C_SP5000"
   },
   "replace": [
    {
     "to": "PS6000 Atom Box",
     "sameCutout": null,
     "src": "S_R_SP5B41"
    }
   ],
   "switches": [],
   "cable": null
  },
  {
   "key": "142C0A00|SP-5B41/5B41*|SP5700WCD",
   "seriesXml": "SP5000 Series",
   "series": "SP5000",
   "group": "SP-5B41/5B41*",
   "name": "SP5700WCD",
   "offlineName": "SP5700WC+5B41x",
   "form": "panel",
   "inch": 15.0,
   "resolution": "FWXGA",
   "resolutionPx": "1366×768",
   "color": "Color",
   "touch": "p-cap(multi-touch)",
   "ethernet": 2,
   "com": [
    {
     "port": "COM1",
     "type": "RS232C/RS422/485"
    },
    {
     "port": "COM2",
     "type": "RS232C/RS422/485"
    }
   ],
   "usbA": 4,
   "usbMiniB": 2,
   "usbMicroB": null,
   "cardSlot": true,
   "ftpXml": false,
   "webXml": false,
   "emailXml": true,
   "ezLanXml": null,
   "remoteHmiMaxXml": 5,
   "appMemoryMB": 64.0,
   "appMemoryExpandedMB": null,
   "backupMemoryKB": 320.0,
   "revisions": [],
   "firstSeen": "4.08",
   "inVersions": [
    "4.08",
    "4.09",
    "5.01"
   ],
   "versions": {
    "4.08": "full",
    "4.09": "full",
    "5.01": "full"
   },
   "statusLatest": "full",
   "features": {
    "remoteHmi": {
     "s": "yes",
     "n": "Open Box（Windows）亦可用 Remote HMI Server",
     "conn": 5,
     "ver": "4.0"
    },
    "gpViewer": {
     "s": "yes"
    },
    "proFaceConnect": {
     "s": "yes",
     "n": "SiteManager 需以瀏覽器設定"
    },
    "ftp": {
     "s": "no"
    },
    "web": {
     "s": "no"
    },
    "email": {
     "s": "yes"
    },
    "ipsec": {
     "s": "yes"
    },
    "ezLan": {
     "s": "no"
    }
   },
   "featureSrc": [
    "S_F_SP5000",
    "S_FIELD"
   ],
   "cutout": {
    "mount": "rect",
    "w": 396,
    "h": 277,
    "t": "1.6～5",
    "src": "S_C_SP5000"
   },
   "replace": [
    {
     "to": "PS6000 Atom Box",
     "sameCutout": null,
     "src": "S_R_SP5B41"
    }
   ],
   "switches": [],
   "cable": null
  },
  {
   "key": "14300A00|SP-5B41/5B41*|SP5800WCD",
   "seriesXml": "SP5000 Series",
   "series": "SP5000",
   "group": "SP-5B41/5B41*",
   "name": "SP5800WCD",
   "offlineName": "SP5800WC+5B41x",
   "form": "panel",
   "inch": 19.0,
   "resolution": "FWXGA",
   "resolutionPx": "1366×768",
   "color": "Color",
   "touch": "p-cap(multi-touch)",
   "ethernet": 2,
   "com": [
    {
     "port": "COM1",
     "type": "RS232C/RS422/485"
    },
    {
     "port": "COM2",
     "type": "RS232C/RS422/485"
    }
   ],
   "usbA": 4,
   "usbMiniB": 2,
   "usbMicroB": null,
   "cardSlot": true,
   "ftpXml": false,
   "webXml": false,
   "emailXml": true,
   "ezLanXml": null,
   "remoteHmiMaxXml": 5,
   "appMemoryMB": 64.0,
   "appMemoryExpandedMB": null,
   "backupMemoryKB": 320.0,
   "revisions": [],
   "firstSeen": "4.08",
   "inVersions": [
    "4.08",
    "4.09",
    "5.01"
   ],
   "versions": {
    "4.08": "full",
    "4.09": "full",
    "5.01": "full"
   },
   "statusLatest": "full",
   "features": {
    "remoteHmi": {
     "s": "yes",
     "n": "Open Box（Windows）亦可用 Remote HMI Server",
     "conn": 5,
     "ver": "4.0"
    },
    "gpViewer": {
     "s": "yes"
    },
    "proFaceConnect": {
     "s": "yes",
     "n": "SiteManager 需以瀏覽器設定"
    },
    "ftp": {
     "s": "no"
    },
    "web": {
     "s": "no"
    },
    "email": {
     "s": "yes"
    },
    "ipsec": {
     "s": "yes"
    },
    "ezLan": {
     "s": "no"
    }
   },
   "featureSrc": [
    "S_F_SP5000",
    "S_FIELD"
   ],
   "cutout": {
    "mount": "rect",
    "w": 465,
    "h": 319,
    "t": "1.6～5",
    "src": "S_C_SP5000"
   },
   "replace": [
    {
     "to": "PS6000 Atom Box",
     "sameCutout": null,
     "src": "S_R_SP5B41"
    }
   ],
   "switches": [],
   "cable": null
  },
  {
   "key": "00340A02|SP-5B90|SP5490WAD",
   "seriesXml": "SP5000 Series",
   "series": "SP5000",
   "group": "SP-5B90",
   "name": "SP5490WAD",
   "offlineName": "SP5490WA+SP5B90",
   "form": "panel",
   "inch": 7.0,
   "resolution": "WVGA",
   "resolutionPx": "800×480",
   "color": "Color",
   "touch": "analog",
   "ethernet": 2,
   "com": [
    {
     "port": "COM1",
     "type": "RS232C/RS422/485"
    },
    {
     "port": "COM2",
     "type": "RS232C/RS422/485"
    }
   ],
   "usbA": 2,
   "usbMiniB": 1,
   "usbMicroB": null,
   "cardSlot": true,
   "ftpXml": true,
   "webXml": true,
   "emailXml": true,
   "ezLanXml": null,
   "remoteHmiMaxXml": 5,
   "appMemoryMB": 64.0,
   "appMemoryExpandedMB": null,
   "backupMemoryKB": 320.0,
   "revisions": [],
   "firstSeen": "4.09",
   "inVersions": [
    "4.09",
    "5.01"
   ],
   "versions": {
    "4.08": "absent",
    "4.09": "full",
    "5.01": "full"
   },
   "statusLatest": "full",
   "features": {
    "remoteHmi": {
     "s": "yes",
     "conn": 5,
     "ver": "4.08.200"
    },
    "gpViewer": {
     "s": "yes"
    },
    "proFaceConnect": {
     "s": "yes"
    },
    "ftp": {
     "s": "yes",
     "n": "支援 FTPS"
    },
    "web": {
     "s": "ended",
     "n": "4.09.450 以前版本才支援"
    },
    "email": {
     "s": "yes"
    },
    "ipsec": {
     "s": "yes"
    },
    "ezLan": {
     "s": "no"
    }
   },
   "featureSrc": [
    "S_F_SP5000"
   ],
   "cutout": {
    "mount": "rect",
    "w": 190,
    "h": 135,
    "t": "1.6～5",
    "n": "SP5000X 戶外型顯示器",
    "src": "S_C_SP5490X"
   },
   "replace": [],
   "switches": [],
   "cable": null
  },
  {
   "key": "00380A02|SP-5B90|SP5690WAD",
   "seriesXml": "SP5000 Series",
   "series": "SP5000",
   "group": "SP-5B90",
   "name": "SP5690WAD",
   "offlineName": "SP5690WA+SP5B90",
   "form": "panel",
   "inch": 12.1,
   "resolution": "WXGA",
   "resolutionPx": "1280×800",
   "color": "Color",
   "touch": "analog",
   "ethernet": 2,
   "com": [
    {
     "port": "COM1",
     "type": "RS232C/RS422/485"
    },
    {
     "port": "COM2",
     "type": "RS232C/RS422/485"
    }
   ],
   "usbA": 2,
   "usbMiniB": 1,
   "usbMicroB": null,
   "cardSlot": true,
   "ftpXml": true,
   "webXml": true,
   "emailXml": true,
   "ezLanXml": null,
   "remoteHmiMaxXml": 5,
   "appMemoryMB": 64.0,
   "appMemoryExpandedMB": null,
   "backupMemoryKB": 320.0,
   "revisions": [],
   "firstSeen": "4.09",
   "inVersions": [
    "4.09",
    "5.01"
   ],
   "versions": {
    "4.08": "absent",
    "4.09": "full",
    "5.01": "full"
   },
   "statusLatest": "full",
   "features": {
    "remoteHmi": {
     "s": "yes",
     "conn": 5,
     "ver": "4.08.200"
    },
    "gpViewer": {
     "s": "yes"
    },
    "proFaceConnect": {
     "s": "yes"
    },
    "ftp": {
     "s": "yes",
     "n": "支援 FTPS"
    },
    "web": {
     "s": "ended",
     "n": "4.09.450 以前版本才支援"
    },
    "email": {
     "s": "yes"
    },
    "ipsec": {
     "s": "yes"
    },
    "ezLan": {
     "s": "no"
    }
   },
   "featureSrc": [
    "S_F_SP5000"
   ],
   "cutout": {
    "mount": "rect",
    "w": 295,
    "h": 217,
    "t": "1.6～5",
    "n": "SP5000X 戶外型顯示器",
    "src": "S_C_SP5000X"
   },
   "replace": [],
   "switches": [],
   "cable": null
  },
  {
   "key": "003C0A02|SP-5B90|SP5790WAD",
   "seriesXml": "SP5000 Series",
   "series": "SP5000",
   "group": "SP-5B90",
   "name": "SP5790WAD",
   "offlineName": "SP5790WA+SP5B90",
   "form": "panel",
   "inch": 15.0,
   "resolution": "FWXGA",
   "resolutionPx": "1366×768",
   "color": "Color",
   "touch": "analog",
   "ethernet": 2,
   "com": [
    {
     "port": "COM1",
     "type": "RS232C/RS422/485"
    },
    {
     "port": "COM2",
     "type": "RS232C/RS422/485"
    }
   ],
   "usbA": 2,
   "usbMiniB": 1,
   "usbMicroB": null,
   "cardSlot": true,
   "ftpXml": true,
   "webXml": true,
   "emailXml": true,
   "ezLanXml": null,
   "remoteHmiMaxXml": 5,
   "appMemoryMB": 64.0,
   "appMemoryExpandedMB": null,
   "backupMemoryKB": 320.0,
   "revisions": [],
   "firstSeen": "4.09",
   "inVersions": [
    "4.09",
    "5.01"
   ],
   "versions": {
    "4.08": "absent",
    "4.09": "full",
    "5.01": "full"
   },
   "statusLatest": "full",
   "features": {
    "remoteHmi": {
     "s": "yes",
     "conn": 5,
     "ver": "4.08.200"
    },
    "gpViewer": {
     "s": "yes"
    },
    "proFaceConnect": {
     "s": "yes"
    },
    "ftp": {
     "s": "yes",
     "n": "支援 FTPS"
    },
    "web": {
     "s": "ended",
     "n": "4.09.450 以前版本才支援"
    },
    "email": {
     "s": "yes"
    },
    "ipsec": {
     "s": "yes"
    },
    "ezLan": {
     "s": "no"
    }
   },
   "featureSrc": [
    "S_F_SP5000"
   ],
   "cutout": {
    "mount": "rect",
    "w": 394,
    "h": 250,
    "t": "1.6～5",
    "n": "SP5000X 戶外型顯示器",
    "src": "S_C_SP5000X"
   },
   "replace": [],
   "switches": [],
   "cable": null
  },
  {
   "key": "50010400|GP-41** Series|GP-4104",
   "seriesXml": "GP4000 Series",
   "series": "GP4000",
   "group": "GP-41** Series",
   "name": "GP-4104",
   "offlineName": "",
   "form": "panel",
   "inch": 3.4,
   "resolution": "MQVGA",
   "resolutionPx": "200×80",
   "color": "Mono",
   "touch": null,
   "ethernet": 1,
   "com": [],
   "usbA": 1,
   "usbMiniB": 1,
   "usbMicroB": null,
   "cardSlot": false,
   "ftpXml": false,
   "webXml": false,
   "emailXml": null,
   "ezLanXml": null,
   "remoteHmiMaxXml": null,
   "appMemoryMB": 2.0,
   "appMemoryExpandedMB": null,
   "backupMemoryKB": 128.0,
   "revisions": [],
   "firstSeen": "4.08",
   "inVersions": [
    "4.08",
    "4.09",
    "5.01"
   ],
   "versions": {
    "4.08": "full",
    "4.09": "full",
    "5.01": "open-only"
   },
   "statusLatest": "open-only",
   "features": {
    "remoteHmi": {
     "s": "no",
     "n": "GP4100 單色機不支援"
    },
    "gpViewer": {
     "s": "no",
     "n": "授權頁排除 GP-410*"
    },
    "proFaceConnect": {
     "s": "no"
    },
    "ftp": {
     "s": "no"
    },
    "web": {
     "s": "no"
    },
    "email": {
     "s": "no"
    },
    "ipsec": {
     "s": "unknown"
    },
    "ezLan": {
     "s": "no"
    }
   },
   "featureSrc": [
    "S_RHMI_WIN",
    "S_GPV_LIC",
    "S_PFC",
    "S_XML"
   ],
   "cutout": {
    "mount": "rect",
    "w": 105,
    "h": 66,
    "t": "1～5",
    "src": "S_C_GP4104"
   },
   "replace": [
    {
     "to": "GP-4114T（GP4100 彩色機）",
     "sameCutout": false,
     "src": "S_R_GP4104",
     "n": "開口不同，可用轉接框"
    }
   ],
   "switches": [],
   "cable": null
  },
  {
   "key": "00010400|GP-41** Series|GP-4105",
   "seriesXml": "GP4000 Series",
   "series": "GP4000",
   "group": "GP-41** Series",
   "name": "GP-4105",
   "offlineName": "",
   "form": "panel",
   "inch": 3.4,
   "resolution": "MQVGA",
   "resolutionPx": "200×80",
   "color": "Mono",
   "touch": null,
   "ethernet": 0,
   "com": [
    {
     "port": "COM1",
     "type": "RS232C"
    }
   ],
   "usbA": 1,
   "usbMiniB": 1,
   "usbMicroB": null,
   "cardSlot": false,
   "ftpXml": false,
   "webXml": false,
   "emailXml": null,
   "ezLanXml": null,
   "remoteHmiMaxXml": null,
   "appMemoryMB": 2.0,
   "appMemoryExpandedMB": null,
   "backupMemoryKB": 128.0,
   "revisions": [],
   "firstSeen": "4.08",
   "inVersions": [
    "4.08",
    "4.09",
    "5.01"
   ],
   "versions": {
    "4.08": "full",
    "4.09": "full",
    "5.01": "open-only"
   },
   "statusLatest": "open-only",
   "features": {
    "remoteHmi": {
     "s": "no",
     "n": "GP4100 單色機不支援"
    },
    "gpViewer": {
     "s": "no",
     "n": "授權頁排除 GP-410*"
    },
    "proFaceConnect": {
     "s": "no"
    },
    "ftp": {
     "s": "no"
    },
    "web": {
     "s": "no"
    },
    "email": {
     "s": "no"
    },
    "ipsec": {
     "s": "unknown"
    },
    "ezLan": {
     "s": "no"
    }
   },
   "featureSrc": [
    "S_RHMI_WIN",
    "S_GPV_LIC",
    "S_PFC",
    "S_XML"
   ],
   "cutout": {
    "mount": "rect",
    "w": 105,
    "h": 66,
    "t": "1～5",
    "src": "S_C_GP4104"
   },
   "replace": [
    {
     "to": "GP-4114T（GP4100 彩色機）",
     "sameCutout": false,
     "src": "S_R_GP4104",
     "n": "開口不同，可用轉接框"
    }
   ],
   "switches": [],
   "cable": null
  },
  {
   "key": "10010400|GP-41** Series|GP-4106",
   "seriesXml": "GP4000 Series",
   "series": "GP4000",
   "group": "GP-41** Series",
   "name": "GP-4106",
   "offlineName": "",
   "form": "panel",
   "inch": 3.4,
   "resolution": "MQVGA",
   "resolutionPx": "200×80",
   "color": "Mono",
   "touch": null,
   "ethernet": 0,
   "com": [
    {
     "port": "COM1",
     "type": "RS422/485"
    }
   ],
   "usbA": 1,
   "usbMiniB": 1,
   "usbMicroB": null,
   "cardSlot": false,
   "ftpXml": false,
   "webXml": false,
   "emailXml": null,
   "ezLanXml": null,
   "remoteHmiMaxXml": null,
   "appMemoryMB": 2.0,
   "appMemoryExpandedMB": null,
   "backupMemoryKB": 128.0,
   "revisions": [],
   "firstSeen": "4.08",
   "inVersions": [
    "4.08",
    "4.09",
    "5.01"
   ],
   "versions": {
    "4.08": "full",
    "4.09": "full",
    "5.01": "open-only"
   },
   "statusLatest": "open-only",
   "features": {
    "remoteHmi": {
     "s": "no",
     "n": "GP4100 單色機不支援"
    },
    "gpViewer": {
     "s": "no",
     "n": "授權頁排除 GP-410*"
    },
    "proFaceConnect": {
     "s": "no"
    },
    "ftp": {
     "s": "no"
    },
    "web": {
     "s": "no"
    },
    "email": {
     "s": "no"
    },
    "ipsec": {
     "s": "unknown"
    },
    "ezLan": {
     "s": "no"
    }
   },
   "featureSrc": [
    "S_RHMI_WIN",
    "S_GPV_LIC",
    "S_PFC",
    "S_XML"
   ],
   "cutout": {
    "mount": "rect",
    "w": 105,
    "h": 66,
    "t": "1～5",
    "src": "S_C_GP4104"
   },
   "replace": [
    {
     "to": "GP-4114T（GP4100 彩色機）",
     "sameCutout": false,
     "src": "S_R_GP4104",
     "n": "開口不同，可用轉接框"
    }
   ],
   "switches": [],
   "cable": null
  },
  {
   "key": "20410400|GP-41** Series|GP-4107",
   "seriesXml": "GP4000 Series",
   "series": "GP4000",
   "group": "GP-41** Series",
   "name": "GP-4107",
   "offlineName": "",
   "form": "panel",
   "inch": 3.4,
   "resolution": "MQVGA",
   "resolutionPx": "200×80",
   "color": "Mono",
   "touch": null,
   "ethernet": 0,
   "com": [
    {
     "port": "COM1",
     "type": "RS422/485"
    }
   ],
   "usbA": 1,
   "usbMiniB": 1,
   "usbMicroB": null,
   "cardSlot": false,
   "ftpXml": false,
   "webXml": false,
   "emailXml": null,
   "ezLanXml": null,
   "remoteHmiMaxXml": null,
   "appMemoryMB": 2.0,
   "appMemoryExpandedMB": null,
   "backupMemoryKB": 128.0,
   "revisions": [],
   "firstSeen": "4.08",
   "inVersions": [
    "4.08",
    "4.09",
    "5.01"
   ],
   "versions": {
    "4.08": "full",
    "4.09": "full",
    "5.01": "open-only"
   },
   "statusLatest": "open-only",
   "features": {
    "remoteHmi": {
     "s": "no",
     "n": "GP4100 單色機不支援"
    },
    "gpViewer": {
     "s": "no",
     "n": "授權頁排除 GP-410*"
    },
    "proFaceConnect": {
     "s": "no"
    },
    "ftp": {
     "s": "no"
    },
    "web": {
     "s": "no"
    },
    "email": {
     "s": "no"
    },
    "ipsec": {
     "s": "unknown"
    },
    "ezLan": {
     "s": "no"
    }
   },
   "featureSrc": [
    "S_RHMI_WIN",
    "S_GPV_LIC",
    "S_PFC",
    "S_XML"
   ],
   "cutout": {
    "mount": "rect",
    "w": 105,
    "h": 66,
    "t": "1～5",
    "src": "S_C_GP4104"
   },
   "replace": [
    {
     "to": "GP-4114T（GP4100 彩色機）",
     "sameCutout": false,
     "src": "S_R_GP4104",
     "n": "開口不同，可用轉接框"
    }
   ],
   "switches": [],
   "cable": null
  },
  {
   "key": "00000B00|GP-41** Series|GP-4114T",
   "seriesXml": "GP4000 Series",
   "series": "GP4000",
   "group": "GP-41** Series",
   "name": "GP-4114T",
   "offlineName": "",
   "form": "panel",
   "inch": 4.3,
   "resolution": "NCPQVGA",
   "resolutionPx": "480×272",
   "color": "Color",
   "touch": "analog",
   "ethernet": 1,
   "com": [],
   "usbA": 1,
   "usbMiniB": 1,
   "usbMicroB": null,
   "cardSlot": false,
   "ftpXml": true,
   "webXml": true,
   "emailXml": null,
   "ezLanXml": null,
   "remoteHmiMaxXml": 3,
   "appMemoryMB": 8.0,
   "appMemoryExpandedMB": null,
   "backupMemoryKB": 128.0,
   "revisions": [],
   "firstSeen": "4.08",
   "inVersions": [
    "4.08",
    "4.09",
    "5.01"
   ],
   "versions": {
    "4.08": "full",
    "4.09": "full",
    "5.01": "free"
   },
   "statusLatest": "free",
   "features": {
    "remoteHmi": {
     "s": "yes",
     "conn": 3,
     "ver": "4.05"
    },
    "gpViewer": {
     "s": "yes"
    },
    "proFaceConnect": {
     "s": "no"
    },
    "ftp": {
     "s": "yes",
     "n": "不支援 FTPS"
    },
    "web": {
     "s": "ended",
     "n": "4.09.450 以前版本才支援"
    },
    "email": {
     "s": "no"
    },
    "ipsec": {
     "s": "no"
    },
    "ezLan": {
     "s": "no"
    }
   },
   "featureSrc": [
    "S_RHMI_WIN",
    "S_GPV_LIC",
    "S_PFC",
    "S_F_GP4100"
   ],
   "cutout": {
    "mount": "rect",
    "w": 112.5,
    "h": 77.5,
    "t": "1.5～6",
    "n": "加購轉接框 PFXZCFAD31 可裝入 105×66 開口",
    "src": "S_C_GP4100"
   },
   "replace": [],
   "switches": [],
   "cable": null
  },
  {
   "key": "04000B00|GP-41** Series|GP-4115T",
   "seriesXml": "GP4000 Series",
   "series": "GP4000",
   "group": "GP-41** Series",
   "name": "GP-4115T",
   "offlineName": "",
   "form": "panel",
   "inch": 4.3,
   "resolution": "NCPQVGA",
   "resolutionPx": "480×272",
   "color": "Color",
   "touch": "analog",
   "ethernet": 0,
   "com": [
    {
     "port": "COM1",
     "type": "RS232C"
    }
   ],
   "usbA": 1,
   "usbMiniB": 1,
   "usbMicroB": null,
   "cardSlot": false,
   "ftpXml": false,
   "webXml": false,
   "emailXml": null,
   "ezLanXml": null,
   "remoteHmiMaxXml": null,
   "appMemoryMB": 8.0,
   "appMemoryExpandedMB": null,
   "backupMemoryKB": 128.0,
   "revisions": [],
   "firstSeen": "4.08",
   "inVersions": [
    "4.08",
    "4.09",
    "5.01"
   ],
   "versions": {
    "4.08": "full",
    "4.09": "full",
    "5.01": "free"
   },
   "statusLatest": "free",
   "features": {
    "remoteHmi": {
     "s": "no",
     "n": "無 LAN 埠"
    },
    "gpViewer": {
     "s": "no"
    },
    "proFaceConnect": {
     "s": "no"
    },
    "ftp": {
     "s": "no"
    },
    "web": {
     "s": "no"
    },
    "email": {
     "s": "no"
    },
    "ipsec": {
     "s": "no"
    },
    "ezLan": {
     "s": "no"
    }
   },
   "featureSrc": [
    "S_RHMI_WIN",
    "S_GPV_LIC",
    "S_PFC",
    "S_F_GP4100"
   ],
   "cutout": {
    "mount": "rect",
    "w": 112.5,
    "h": 77.5,
    "t": "1.5～6",
    "n": "加購轉接框 PFXZCFAD31 可裝入 105×66 開口",
    "src": "S_C_GP4100"
   },
   "replace": [],
   "switches": [],
   "cable": null
  },
  {
   "key": "04010B00|GP-41** Series|GP-4115T3",
   "seriesXml": "GP4000 Series",
   "series": "GP4000",
   "group": "GP-41** Series",
   "name": "GP-4115T3",
   "offlineName": "",
   "form": "panel",
   "inch": 4.3,
   "resolution": "NCPQVGA",
   "resolutionPx": "480×272",
   "color": "Color",
   "touch": "analog",
   "ethernet": 0,
   "com": [
    {
     "port": "COM1",
     "type": "RS232C"
    }
   ],
   "usbA": 1,
   "usbMiniB": 1,
   "usbMicroB": null,
   "cardSlot": false,
   "ftpXml": false,
   "webXml": null,
   "emailXml": null,
   "ezLanXml": null,
   "remoteHmiMaxXml": null,
   "appMemoryMB": 8.0,
   "appMemoryExpandedMB": null,
   "backupMemoryKB": 320.0,
   "revisions": [],
   "firstSeen": "4.08",
   "inVersions": [
    "4.08",
    "4.09",
    "5.01"
   ],
   "versions": {
    "4.08": "full",
    "4.09": "full",
    "5.01": "free"
   },
   "statusLatest": "free",
   "features": {
    "remoteHmi": {
     "s": "no",
     "n": "無 LAN 埠"
    },
    "gpViewer": {
     "s": "no"
    },
    "proFaceConnect": {
     "s": "no"
    },
    "ftp": {
     "s": "no"
    },
    "web": {
     "s": "no"
    },
    "email": {
     "s": "no"
    },
    "ipsec": {
     "s": "no"
    },
    "ezLan": {
     "s": "no"
    }
   },
   "featureSrc": [
    "S_RHMI_WIN",
    "S_GPV_LIC",
    "S_PFC",
    "S_F_GP4100"
   ],
   "cutout": {
    "mount": "rect",
    "w": 112.5,
    "h": 77.5,
    "t": "1.5～6",
    "n": "加購轉接框 PFXZCFAD31 可裝入 105×66 開口",
    "src": "S_C_GP4100"
   },
   "replace": [],
   "switches": [],
   "cable": null
  },
  {
   "key": "08000B00|GP-41** Series|GP-4116T",
   "seriesXml": "GP4000 Series",
   "series": "GP4000",
   "group": "GP-41** Series",
   "name": "GP-4116T",
   "offlineName": "",
   "form": "panel",
   "inch": 4.3,
   "resolution": "NCPQVGA",
   "resolutionPx": "480×272",
   "color": "Color",
   "touch": "analog",
   "ethernet": 0,
   "com": [
    {
     "port": "COM1",
     "type": "RS422/485"
    }
   ],
   "usbA": 1,
   "usbMiniB": 1,
   "usbMicroB": null,
   "cardSlot": false,
   "ftpXml": false,
   "webXml": false,
   "emailXml": null,
   "ezLanXml": null,
   "remoteHmiMaxXml": null,
   "appMemoryMB": 8.0,
   "appMemoryExpandedMB": null,
   "backupMemoryKB": 128.0,
   "revisions": [],
   "firstSeen": "4.08",
   "inVersions": [
    "4.08",
    "4.09",
    "5.01"
   ],
   "versions": {
    "4.08": "full",
    "4.09": "full",
    "5.01": "free"
   },
   "statusLatest": "free",
   "features": {
    "remoteHmi": {
     "s": "no",
     "n": "無 LAN 埠"
    },
    "gpViewer": {
     "s": "no"
    },
    "proFaceConnect": {
     "s": "no"
    },
    "ftp": {
     "s": "no"
    },
    "web": {
     "s": "no"
    },
    "email": {
     "s": "no"
    },
    "ipsec": {
     "s": "no"
    },
    "ezLan": {
     "s": "no"
    }
   },
   "featureSrc": [
    "S_RHMI_WIN",
    "S_GPV_LIC",
    "S_PFC",
    "S_F_GP4100"
   ],
   "cutout": {
    "mount": "rect",
    "w": 112.5,
    "h": 77.5,
    "t": "1.5～6",
    "n": "加購轉接框 PFXZCFAD31 可裝入 105×66 開口",
    "src": "S_C_GP4100"
   },
   "replace": [],
   "switches": [],
   "cable": null
  },
  {
   "key": "00000600|GP-42** Series|GP-4201T",
   "seriesXml": "GP4000 Series",
   "series": "GP4000",
   "group": "GP-42** Series",
   "name": "GP-4201T",
   "offlineName": "GP4201TA",
   "form": "panel",
   "inch": 3.5,
   "resolution": "QVGA",
   "resolutionPx": "320×240",
   "color": "Color",
   "touch": "analog",
   "ethernet": 1,
   "com": [
    {
     "port": "COM1",
     "type": "RS232C/RS422/485"
    }
   ],
   "usbA": 1,
   "usbMiniB": 1,
   "usbMicroB": null,
   "cardSlot": false,
   "ftpXml": true,
   "webXml": true,
   "emailXml": true,
   "ezLanXml": null,
   "remoteHmiMaxXml": 3,
   "appMemoryMB": 16.0,
   "appMemoryExpandedMB": null,
   "backupMemoryKB": 320.0,
   "revisions": [],
   "firstSeen": "4.08",
   "inVersions": [
    "4.08",
    "4.09",
    "5.01"
   ],
   "versions": {
    "4.08": "full",
    "4.09": "full",
    "5.01": "full"
   },
   "statusLatest": "full",
   "features": {
    "remoteHmi": {
     "s": "yes",
     "conn": 3
    },
    "gpViewer": {
     "s": "yes"
    },
    "proFaceConnect": {
     "s": "yes"
    },
    "ftp": {
     "s": "yes",
     "n": "支援 FTPS"
    },
    "web": {
     "s": "ended",
     "n": "4.09.450 以前版本才支援"
    },
    "email": {
     "s": "yes"
    },
    "ipsec": {
     "s": "yes"
    },
    "ezLan": {
     "s": "yes"
    }
   },
   "featureSrc": [
    "S_RHMI_WIN",
    "S_GPV_LIC",
    "S_PFC",
    "S_F_GP4200"
   ],
   "cutout": {
    "mount": "rect",
    "w": 118.5,
    "h": 92.5,
    "t": "1.6～5",
    "src": "S_C_GP4000"
   },
   "replace": [],
   "switches": [],
   "cable": null
  },
  {
   "key": "300D0800|GP-42** Series|GP-4201TM (Modular Type)",
   "seriesXml": "GP4000 Series",
   "series": "GP4000",
   "group": "GP-42** Series",
   "name": "GP-4201TM (Modular Type)",
   "offlineName": "GM4*01TA",
   "form": "panel",
   "inch": 3.5,
   "resolution": "QVGA",
   "resolutionPx": "320×240",
   "color": "Color",
   "touch": "analog",
   "ethernet": 1,
   "com": [
    {
     "port": "COM1",
     "type": "RS232C/RS422/485"
    }
   ],
   "usbA": 1,
   "usbMiniB": 1,
   "usbMicroB": null,
   "cardSlot": false,
   "ftpXml": true,
   "webXml": true,
   "emailXml": null,
   "ezLanXml": null,
   "remoteHmiMaxXml": 2,
   "appMemoryMB": 8.0,
   "appMemoryExpandedMB": null,
   "backupMemoryKB": 128.0,
   "revisions": [],
   "firstSeen": "4.08",
   "inVersions": [
    "4.08",
    "4.09",
    "5.01"
   ],
   "versions": {
    "4.08": "full",
    "4.09": "full",
    "5.01": "open-only"
   },
   "statusLatest": "open-only",
   "features": {
    "remoteHmi": {
     "s": "yes",
     "conn": 2,
     "ver": "4.0"
    },
    "gpViewer": {
     "s": "yes",
     "ver": "3.1"
    },
    "proFaceConnect": {
     "s": "no",
     "n": "原廠清單排除 GP4000M"
    },
    "ftp": {
     "s": "yes"
    },
    "web": {
     "s": "ended"
    },
    "email": {
     "s": "no"
    },
    "ipsec": {
     "s": "unknown"
    },
    "ezLan": {
     "s": "no"
    }
   },
   "featureSrc": [
    "S_RHMI_WIN",
    "S_GPV_LIC",
    "S_PFC",
    "S_XML"
   ],
   "cutout": {
    "mount": "round",
    "d": 22,
    "n": "GP4000M 模組型，φ22 圓孔安裝",
    "src": "S_C_GP4000M"
   },
   "replace": [
    {
     "to": "STM6000（STM-6200WA 等）",
     "sameCutout": null,
     "src": "S_R_GP4000M_STM"
    }
   ],
   "switches": [],
   "cable": null
  },
  {
   "key": "08000600|GP-42** Series|GP-4201TW",
   "seriesXml": "GP4000 Series",
   "series": "GP4000",
   "group": "GP-42** Series",
   "name": "GP-4201TW",
   "offlineName": "GP4201TAW",
   "form": "panel",
   "inch": 3.5,
   "resolution": "QVGA",
   "resolutionPx": "320×240",
   "color": "Color",
   "touch": "analog",
   "ethernet": 0,
   "com": [
    {
     "port": "COM1",
     "type": "RS232C"
    },
    {
     "port": "COM2",
     "type": "RS422/485"
    }
   ],
   "usbA": 1,
   "usbMiniB": 1,
   "usbMicroB": null,
   "cardSlot": false,
   "ftpXml": false,
   "webXml": false,
   "emailXml": null,
   "ezLanXml": null,
   "remoteHmiMaxXml": null,
   "appMemoryMB": 8.0,
   "appMemoryExpandedMB": null,
   "backupMemoryKB": 128.0,
   "revisions": [],
   "firstSeen": "4.08",
   "inVersions": [
    "4.08",
    "4.09",
    "5.01"
   ],
   "versions": {
    "4.08": "full",
    "4.09": "full",
    "5.01": "full"
   },
   "statusLatest": "full",
   "features": {
    "remoteHmi": {
     "s": "no",
     "n": "無 LAN 埠"
    },
    "gpViewer": {
     "s": "no"
    },
    "proFaceConnect": {
     "s": "no"
    },
    "ftp": {
     "s": "no"
    },
    "web": {
     "s": "no"
    },
    "email": {
     "s": "no"
    },
    "ipsec": {
     "s": "no"
    },
    "ezLan": {
     "s": "no"
    }
   },
   "featureSrc": [
    "S_RHMI_WIN",
    "S_GPV_LIC",
    "S_PFC",
    "S_F_GP4200"
   ],
   "cutout": {
    "mount": "rect",
    "w": 118.5,
    "h": 92.5,
    "t": "1.6～5",
    "src": "S_C_GP4000"
   },
   "replace": [],
   "switches": [],
   "cable": null
  },
  {
   "key": "04000600|GP-42** Series|GP-4203T",
   "seriesXml": "GP4000 Series",
   "series": "GP4000",
   "group": "GP-42** Series",
   "name": "GP-4203T",
   "offlineName": "GP4203TA",
   "form": "panel",
   "inch": 3.5,
   "resolution": "QVGA",
   "resolutionPx": "320×240",
   "color": "Color",
   "touch": "analog",
   "ethernet": 1,
   "com": [
    {
     "port": "COM1",
     "type": "RS422/485"
    }
   ],
   "usbA": 1,
   "usbMiniB": 1,
   "usbMicroB": null,
   "cardSlot": false,
   "ftpXml": true,
   "webXml": true,
   "emailXml": true,
   "ezLanXml": null,
   "remoteHmiMaxXml": 3,
   "appMemoryMB": 16.0,
   "appMemoryExpandedMB": null,
   "backupMemoryKB": 320.0,
   "revisions": [],
   "firstSeen": "4.08",
   "inVersions": [
    "4.08",
    "4.09",
    "5.01"
   ],
   "versions": {
    "4.08": "full",
    "4.09": "full",
    "5.01": "full"
   },
   "statusLatest": "full",
   "features": {
    "remoteHmi": {
     "s": "yes",
     "conn": 3
    },
    "gpViewer": {
     "s": "yes"
    },
    "proFaceConnect": {
     "s": "yes"
    },
    "ftp": {
     "s": "yes",
     "n": "支援 FTPS"
    },
    "web": {
     "s": "ended",
     "n": "4.09.450 以前版本才支援"
    },
    "email": {
     "s": "yes"
    },
    "ipsec": {
     "s": "yes"
    },
    "ezLan": {
     "s": "yes"
    }
   },
   "featureSrc": [
    "S_RHMI_WIN",
    "S_GPV_LIC",
    "S_PFC",
    "S_F_GP4200"
   ],
   "cutout": {
    "mount": "rect",
    "w": 118.5,
    "h": 92.5,
    "t": "1.6～5",
    "src": "S_C_GP4000"
   },
   "replace": [],
   "switches": [],
   "cable": null
  },
  {
   "key": "0C000600|GP-43** Series|GP-4301T",
   "seriesXml": "GP4000 Series",
   "series": "GP4000",
   "group": "GP-43** Series",
   "name": "GP-4301T",
   "offlineName": "GP4301TA",
   "form": "panel",
   "inch": 5.7,
   "resolution": "QVGA",
   "resolutionPx": "320×240",
   "color": "Color",
   "touch": "analog",
   "ethernet": 1,
   "com": [
    {
     "port": "COM1",
     "type": "RS232C"
    },
    {
     "port": "COM2",
     "type": "RS422/485"
    }
   ],
   "usbA": 1,
   "usbMiniB": 1,
   "usbMicroB": null,
   "cardSlot": true,
   "ftpXml": true,
   "webXml": true,
   "emailXml": true,
   "ezLanXml": null,
   "remoteHmiMaxXml": 3,
   "appMemoryMB": 16.0,
   "appMemoryExpandedMB": null,
   "backupMemoryKB": 320.0,
   "revisions": [],
   "firstSeen": "4.08",
   "inVersions": [
    "4.08",
    "4.09",
    "5.01"
   ],
   "versions": {
    "4.08": "full",
    "4.09": "full",
    "5.01": "full"
   },
   "statusLatest": "full",
   "features": {
    "remoteHmi": {
     "s": "yes",
     "conn": 3
    },
    "gpViewer": {
     "s": "yes"
    },
    "proFaceConnect": {
     "s": "yes"
    },
    "ftp": {
     "s": "yes",
     "n": "支援 FTPS"
    },
    "web": {
     "s": "ended",
     "n": "4.09.450 以前版本才支援"
    },
    "email": {
     "s": "yes"
    },
    "ipsec": {
     "s": "yes"
    },
    "ezLan": {
     "s": "yes"
    }
   },
   "featureSrc": [
    "S_RHMI_WIN",
    "S_GPV_LIC",
    "S_PFC",
    "S_F_GP4300"
   ],
   "cutout": {
    "mount": "rect",
    "w": 156,
    "h": 123.5,
    "t": "1.6～5",
    "src": "S_C_GP4000"
   },
   "replace": [],
   "switches": [],
   "cable": null
  },
  {
   "key": "308D0800|GP-43** Series|GP-4301TM (Modular Type)",
   "seriesXml": "GP4000 Series",
   "series": "GP4000",
   "group": "GP-43** Series",
   "name": "GP-4301TM (Modular Type)",
   "offlineName": "GM4*01TA",
   "form": "panel",
   "inch": 5.7,
   "resolution": "QVGA",
   "resolutionPx": "320×240",
   "color": "Color",
   "touch": "analog",
   "ethernet": 1,
   "com": [
    {
     "port": "COM1",
     "type": "RS232C/RS422/485"
    }
   ],
   "usbA": 1,
   "usbMiniB": 1,
   "usbMicroB": null,
   "cardSlot": false,
   "ftpXml": true,
   "webXml": true,
   "emailXml": null,
   "ezLanXml": null,
   "remoteHmiMaxXml": 2,
   "appMemoryMB": 8.0,
   "appMemoryExpandedMB": null,
   "backupMemoryKB": 128.0,
   "revisions": [],
   "firstSeen": "4.08",
   "inVersions": [
    "4.08",
    "4.09",
    "5.01"
   ],
   "versions": {
    "4.08": "full",
    "4.09": "full",
    "5.01": "open-only"
   },
   "statusLatest": "open-only",
   "features": {
    "remoteHmi": {
     "s": "yes",
     "conn": 2,
     "ver": "4.0"
    },
    "gpViewer": {
     "s": "yes",
     "ver": "3.1"
    },
    "proFaceConnect": {
     "s": "no",
     "n": "原廠清單排除 GP4000M"
    },
    "ftp": {
     "s": "yes"
    },
    "web": {
     "s": "ended"
    },
    "email": {
     "s": "no"
    },
    "ipsec": {
     "s": "unknown"
    },
    "ezLan": {
     "s": "no"
    }
   },
   "featureSrc": [
    "S_RHMI_WIN",
    "S_GPV_LIC",
    "S_PFC",
    "S_XML"
   ],
   "cutout": {
    "mount": "round",
    "d": 22,
    "n": "GP4000M 模組型，φ22 圓孔安裝",
    "src": "S_C_GP4000M"
   },
   "replace": [
    {
     "to": "STM6000（STM-6200WA 等）",
     "sameCutout": null,
     "src": "S_R_GP4000M_STM"
    }
   ],
   "switches": [],
   "cable": null
  },
  {
   "key": "14000600|GP-43** Series|GP-4301TW",
   "seriesXml": "GP4000 Series",
   "series": "GP4000",
   "group": "GP-43** Series",
   "name": "GP-4301TW",
   "offlineName": "GP4301TAW",
   "form": "panel",
   "inch": 5.7,
   "resolution": "QVGA",
   "resolutionPx": "320×240",
   "color": "Color",
   "touch": "analog",
   "ethernet": 1,
   "com": [
    {
     "port": "COM1",
     "type": "RS232C"
    },
    {
     "port": "COM2",
     "type": "RS422/485"
    }
   ],
   "usbA": 1,
   "usbMiniB": 1,
   "usbMicroB": null,
   "cardSlot": false,
   "ftpXml": true,
   "webXml": true,
   "emailXml": true,
   "ezLanXml": null,
   "remoteHmiMaxXml": 3,
   "appMemoryMB": 8.0,
   "appMemoryExpandedMB": null,
   "backupMemoryKB": 128.0,
   "revisions": [],
   "firstSeen": "4.08",
   "inVersions": [
    "4.08",
    "4.09",
    "5.01"
   ],
   "versions": {
    "4.08": "full",
    "4.09": "full",
    "5.01": "full"
   },
   "statusLatest": "full",
   "features": {
    "remoteHmi": {
     "s": "yes",
     "conn": 3
    },
    "gpViewer": {
     "s": "yes"
    },
    "proFaceConnect": {
     "s": "yes"
    },
    "ftp": {
     "s": "yes",
     "n": "支援 FTPS"
    },
    "web": {
     "s": "ended",
     "n": "4.09.450 以前版本才支援"
    },
    "email": {
     "s": "yes"
    },
    "ipsec": {
     "s": "yes"
    },
    "ezLan": {
     "s": "yes"
    }
   },
   "featureSrc": [
    "S_RHMI_WIN",
    "S_GPV_LIC",
    "S_PFC",
    "S_F_GP4300"
   ],
   "cutout": {
    "mount": "rect",
    "w": 156,
    "h": 123.5,
    "t": "1.6～5",
    "src": "S_C_GP4000"
   },
   "replace": [],
   "switches": [],
   "cable": null
  },
  {
   "key": "10000600|GP-43** Series|GP-4303T",
   "seriesXml": "GP4000 Series",
   "series": "GP4000",
   "group": "GP-43** Series",
   "name": "GP-4303T",
   "offlineName": "GP4303TA",
   "form": "panel",
   "inch": 5.7,
   "resolution": "QVGA",
   "resolutionPx": "320×240",
   "color": "Color",
   "touch": "analog",
   "ethernet": 1,
   "com": [
    {
     "port": "COM1",
     "type": "RS232C"
    },
    {
     "port": "COM2",
     "type": "RS422/485"
    }
   ],
   "usbA": 1,
   "usbMiniB": 1,
   "usbMicroB": null,
   "cardSlot": true,
   "ftpXml": true,
   "webXml": true,
   "emailXml": true,
   "ezLanXml": null,
   "remoteHmiMaxXml": 3,
   "appMemoryMB": 16.0,
   "appMemoryExpandedMB": null,
   "backupMemoryKB": 320.0,
   "revisions": [],
   "firstSeen": "4.08",
   "inVersions": [
    "4.08",
    "4.09",
    "5.01"
   ],
   "versions": {
    "4.08": "full",
    "4.09": "full",
    "5.01": "full"
   },
   "statusLatest": "full",
   "features": {
    "remoteHmi": {
     "s": "yes",
     "conn": 3
    },
    "gpViewer": {
     "s": "yes"
    },
    "proFaceConnect": {
     "s": "yes"
    },
    "ftp": {
     "s": "yes",
     "n": "支援 FTPS"
    },
    "web": {
     "s": "ended",
     "n": "4.09.450 以前版本才支援"
    },
    "email": {
     "s": "yes"
    },
    "ipsec": {
     "s": "yes"
    },
    "ezLan": {
     "s": "yes"
    }
   },
   "featureSrc": [
    "S_RHMI_WIN",
    "S_GPV_LIC",
    "S_PFC",
    "S_F_GP4300"
   ],
   "cutout": {
    "mount": "rect",
    "w": 156,
    "h": 123.5,
    "t": "1.6～5",
    "src": "S_C_GP4000"
   },
   "replace": [],
   "switches": [],
   "cable": null
  },
  {
   "key": "54000600|GP-43** Series|GP-4311HT",
   "seriesXml": "GP4000 Series",
   "series": "GP4000",
   "group": "GP-43** Series",
   "name": "GP-4311HT",
   "offlineName": "GP4311HT",
   "form": "panel",
   "inch": 5.7,
   "resolution": "VGA",
   "resolutionPx": "640×480",
   "color": "Color",
   "touch": "analog",
   "ethernet": 1,
   "com": [
    {
     "port": "COM1",
     "type": "RS232C/RS422/485"
    }
   ],
   "usbA": 1,
   "usbMiniB": 1,
   "usbMicroB": null,
   "cardSlot": true,
   "ftpXml": true,
   "webXml": true,
   "emailXml": true,
   "ezLanXml": null,
   "remoteHmiMaxXml": 3,
   "appMemoryMB": 32.0,
   "appMemoryExpandedMB": null,
   "backupMemoryKB": 320.0,
   "revisions": [],
   "firstSeen": "4.08",
   "inVersions": [
    "4.08",
    "4.09",
    "5.01"
   ],
   "versions": {
    "4.08": "full",
    "4.09": "full",
    "5.01": "full"
   },
   "statusLatest": "full",
   "features": {
    "remoteHmi": {
     "s": "yes",
     "conn": 3
    },
    "gpViewer": {
     "s": "yes"
    },
    "proFaceConnect": {
     "s": "unknown"
    },
    "ftp": {
     "s": "yes"
    },
    "web": {
     "s": "ended"
    },
    "email": {
     "s": "yes"
    },
    "ipsec": {
     "s": "unknown"
    },
    "ezLan": {
     "s": "no"
    }
   },
   "featureSrc": [
    "S_RHMI_WIN",
    "S_GPV_LIC",
    "S_PFC",
    "S_FIELD",
    "S_XML"
   ],
   "cutout": {
    "mount": "handheld",
    "n": "手持型"
   },
   "replace": [
    {
     "to": "GPH6000",
     "sameCutout": null,
     "src": "S_R_GP4000H_GPH"
    }
   ],
   "switches": [],
   "cable": null
  },
  {
   "key": "1C000600|GP-44** Series|GP-4401WW",
   "seriesXml": "GP4000 Series",
   "series": "GP4000",
   "group": "GP-44** Series",
   "name": "GP-4401WW",
   "offlineName": "GP4401WAW",
   "form": "panel",
   "inch": 7.0,
   "resolution": "WVGA",
   "resolutionPx": "800×480",
   "color": "Color",
   "touch": "analog",
   "ethernet": 1,
   "com": [
    {
     "port": "COM1",
     "type": "RS232C"
    },
    {
     "port": "COM2",
     "type": "RS422/485"
    }
   ],
   "usbA": 1,
   "usbMiniB": 1,
   "usbMicroB": null,
   "cardSlot": true,
   "ftpXml": true,
   "webXml": true,
   "emailXml": true,
   "ezLanXml": null,
   "remoteHmiMaxXml": 3,
   "appMemoryMB": 16.0,
   "appMemoryExpandedMB": null,
   "backupMemoryKB": 128.0,
   "revisions": [],
   "firstSeen": "4.08",
   "inVersions": [
    "4.08",
    "4.09",
    "5.01"
   ],
   "versions": {
    "4.08": "full",
    "4.09": "full",
    "5.01": "full"
   },
   "statusLatest": "full",
   "features": {
    "remoteHmi": {
     "s": "yes",
     "conn": 3
    },
    "gpViewer": {
     "s": "yes"
    },
    "proFaceConnect": {
     "s": "yes"
    },
    "ftp": {
     "s": "yes",
     "n": "支援 FTPS"
    },
    "web": {
     "s": "ended",
     "n": "4.09.450 以前版本才支援"
    },
    "email": {
     "s": "yes"
    },
    "ipsec": {
     "s": "yes"
    },
    "ezLan": {
     "s": "yes"
    }
   },
   "featureSrc": [
    "S_RHMI_WIN",
    "S_GPV_LIC",
    "S_PFC",
    "S_F_GP4400"
   ],
   "cutout": {
    "mount": "rect",
    "w": 204.5,
    "h": 159.5,
    "t": "1.6～5",
    "src": "S_C_GP4000"
   },
   "replace": [],
   "switches": [],
   "cable": null
  },
  {
   "key": "007B0B00|GP-44** Series|GP-4402WW",
   "seriesXml": "GP4000 Series",
   "series": "GP4000",
   "group": "GP-44** Series",
   "name": "GP-4402WW",
   "offlineName": "GP4402WAW",
   "form": "panel",
   "inch": 7.0,
   "resolution": "WVGA",
   "resolutionPx": "800×480",
   "color": "Color",
   "touch": "analog",
   "ethernet": 1,
   "com": [
    {
     "port": "COM1",
     "type": "RS232C"
    },
    {
     "port": "COM2",
     "type": "RS422/485"
    }
   ],
   "usbA": 1,
   "usbMiniB": 1,
   "usbMicroB": null,
   "cardSlot": false,
   "ftpXml": true,
   "webXml": false,
   "emailXml": null,
   "ezLanXml": null,
   "remoteHmiMaxXml": null,
   "appMemoryMB": 32.0,
   "appMemoryExpandedMB": null,
   "backupMemoryKB": 128.0,
   "revisions": [],
   "firstSeen": "4.08",
   "inVersions": [
    "4.08",
    "4.09",
    "5.01"
   ],
   "versions": {
    "4.08": "full",
    "4.09": "full",
    "5.01": "open-only"
   },
   "statusLatest": "open-only",
   "features": {
    "remoteHmi": {
     "s": "cond",
     "n": "需開啟特殊開關切換"
    },
    "gpViewer": {
     "s": "yes"
    },
    "proFaceConnect": {
     "s": "unknown"
    },
    "ftp": {
     "s": "yes"
    },
    "web": {
     "s": "no"
    },
    "email": {
     "s": "no"
    },
    "ipsec": {
     "s": "unknown"
    },
    "ezLan": {
     "s": "no"
    }
   },
   "featureSrc": [
    "S_RHMI_WIN",
    "S_GPV_LIC",
    "S_PFC",
    "S_FIELD",
    "S_XML"
   ],
   "cutout": {
    "mount": "rect",
    "w": 190,
    "h": 135,
    "t": "1～5",
    "src": "S_C_GP4402WW"
   },
   "replace": [
    {
     "to": "ET-6400WA",
     "sameCutout": true,
     "src": "S_R_GP4000E_ET"
    }
   ],
   "switches": [],
   "cable": null
  },
  {
   "key": "18000600|GP-44** Series|GP-4401T",
   "seriesXml": "GP4000 Series",
   "series": "GP4000",
   "group": "GP-44** Series",
   "name": "GP-4401T",
   "offlineName": "GP4401TA",
   "form": "panel",
   "inch": 7.5,
   "resolution": "VGA",
   "resolutionPx": "640×480",
   "color": "Color",
   "touch": "analog",
   "ethernet": 1,
   "com": [
    {
     "port": "COM1",
     "type": "RS232C"
    },
    {
     "port": "COM2",
     "type": "RS422/485"
    }
   ],
   "usbA": 1,
   "usbMiniB": 1,
   "usbMicroB": null,
   "cardSlot": true,
   "ftpXml": true,
   "webXml": true,
   "emailXml": true,
   "ezLanXml": null,
   "remoteHmiMaxXml": 3,
   "appMemoryMB": 32.0,
   "appMemoryExpandedMB": null,
   "backupMemoryKB": 320.0,
   "revisions": [],
   "firstSeen": "4.08",
   "inVersions": [
    "4.08",
    "4.09",
    "5.01"
   ],
   "versions": {
    "4.08": "full",
    "4.09": "full",
    "5.01": "full"
   },
   "statusLatest": "full",
   "features": {
    "remoteHmi": {
     "s": "yes",
     "conn": 3
    },
    "gpViewer": {
     "s": "yes"
    },
    "proFaceConnect": {
     "s": "yes"
    },
    "ftp": {
     "s": "yes",
     "n": "支援 FTPS"
    },
    "web": {
     "s": "ended",
     "n": "4.09.450 以前版本才支援"
    },
    "email": {
     "s": "yes"
    },
    "ipsec": {
     "s": "yes"
    },
    "ezLan": {
     "s": "yes"
    }
   },
   "featureSrc": [
    "S_RHMI_WIN",
    "S_GPV_LIC",
    "S_PFC",
    "S_F_GP4400"
   ],
   "cutout": {
    "mount": "rect",
    "w": 204.5,
    "h": 159.5,
    "t": "1.6～5",
    "src": "S_C_GP4000"
   },
   "replace": [],
   "switches": [],
   "cable": null
  },
  {
   "key": "005B0B00|GP-45** Series|GP-4502WW",
   "seriesXml": "GP4000 Series",
   "series": "GP4000",
   "group": "GP-45** Series",
   "name": "GP-4502WW",
   "offlineName": "GP4502WAW",
   "form": "panel",
   "inch": 10.0,
   "resolution": "WVGA",
   "resolutionPx": "800×480",
   "color": "Color",
   "touch": "analog",
   "ethernet": 1,
   "com": [
    {
     "port": "COM1",
     "type": "RS232C"
    },
    {
     "port": "COM2",
     "type": "RS422/485"
    }
   ],
   "usbA": 1,
   "usbMiniB": 1,
   "usbMicroB": null,
   "cardSlot": false,
   "ftpXml": true,
   "webXml": false,
   "emailXml": null,
   "ezLanXml": null,
   "remoteHmiMaxXml": null,
   "appMemoryMB": 32.0,
   "appMemoryExpandedMB": null,
   "backupMemoryKB": 128.0,
   "revisions": [],
   "firstSeen": "4.08",
   "inVersions": [
    "4.08",
    "4.09",
    "5.01"
   ],
   "versions": {
    "4.08": "full",
    "4.09": "full",
    "5.01": "open-only"
   },
   "statusLatest": "open-only",
   "features": {
    "remoteHmi": {
     "s": "cond",
     "n": "需開啟特殊開關切換"
    },
    "gpViewer": {
     "s": "yes"
    },
    "proFaceConnect": {
     "s": "unknown"
    },
    "ftp": {
     "s": "yes"
    },
    "web": {
     "s": "no"
    },
    "email": {
     "s": "no"
    },
    "ipsec": {
     "s": "unknown"
    },
    "ezLan": {
     "s": "no"
    }
   },
   "featureSrc": [
    "S_RHMI_WIN",
    "S_GPV_LIC",
    "S_PFC",
    "S_FIELD",
    "S_XML"
   ],
   "cutout": {
    "mount": "rect",
    "w": 255,
    "h": 185,
    "t": "1～5",
    "src": "S_C_GP4502WW"
   },
   "replace": [
    {
     "to": "ET-6500WA；放大可選 ET-6600WA",
     "sameCutout": true,
     "src": "S_R_GP4000E_ET"
    }
   ],
   "switches": [],
   "cable": null
  },
  {
   "key": "20000600|GP-45** Series|GP-4501T (Analog Touch Panel)",
   "seriesXml": "GP4000 Series",
   "series": "GP4000",
   "group": "GP-45** Series",
   "name": "GP-4501T (Analog Touch Panel)",
   "offlineName": "GP4501TA",
   "form": "panel",
   "inch": 10.4,
   "resolution": "VGA",
   "resolutionPx": "640×480",
   "color": "Color",
   "touch": "analog",
   "ethernet": 1,
   "com": [
    {
     "port": "COM1",
     "type": "RS232C"
    },
    {
     "port": "COM2",
     "type": "RS422/485"
    }
   ],
   "usbA": 1,
   "usbMiniB": 1,
   "usbMicroB": null,
   "cardSlot": true,
   "ftpXml": true,
   "webXml": true,
   "emailXml": true,
   "ezLanXml": null,
   "remoteHmiMaxXml": 3,
   "appMemoryMB": 32.0,
   "appMemoryExpandedMB": null,
   "backupMemoryKB": 320.0,
   "revisions": [],
   "firstSeen": "4.08",
   "inVersions": [
    "4.08",
    "4.09",
    "5.01"
   ],
   "versions": {
    "4.08": "full",
    "4.09": "full",
    "5.01": "full"
   },
   "statusLatest": "full",
   "features": {
    "remoteHmi": {
     "s": "yes",
     "conn": 3
    },
    "gpViewer": {
     "s": "yes"
    },
    "proFaceConnect": {
     "s": "yes"
    },
    "ftp": {
     "s": "yes",
     "n": "支援 FTPS"
    },
    "web": {
     "s": "ended",
     "n": "4.09.450 以前版本才支援"
    },
    "email": {
     "s": "yes"
    },
    "ipsec": {
     "s": "yes"
    },
    "ezLan": {
     "s": "yes"
    }
   },
   "featureSrc": [
    "S_RHMI_WIN",
    "S_GPV_LIC",
    "S_PFC",
    "S_F_GP4500"
   ],
   "cutout": {
    "mount": "rect",
    "w": 259,
    "h": 201,
    "t": "1.6～5",
    "src": "S_C_GP4000"
   },
   "replace": [
    {
     "to": "GP6000 Advanced 12 吋寬",
     "sameCutout": false,
     "src": "S_R_GP4500_GP6000A"
    }
   ],
   "switches": [],
   "cable": null
  },
  {
   "key": "24000600|GP-45** Series|GP-4501T (Matrix Touch Panel)",
   "seriesXml": "GP4000 Series",
   "series": "GP4000",
   "group": "GP-45** Series",
   "name": "GP-4501T (Matrix Touch Panel)",
   "offlineName": "GP4501TM",
   "form": "panel",
   "inch": 10.4,
   "resolution": "VGA",
   "resolutionPx": "640×480",
   "color": "Color",
   "touch": "matrix",
   "ethernet": 1,
   "com": [
    {
     "port": "COM1",
     "type": "RS232C"
    },
    {
     "port": "COM2",
     "type": "RS422/485"
    }
   ],
   "usbA": 1,
   "usbMiniB": 1,
   "usbMicroB": null,
   "cardSlot": true,
   "ftpXml": true,
   "webXml": true,
   "emailXml": true,
   "ezLanXml": null,
   "remoteHmiMaxXml": 3,
   "appMemoryMB": 32.0,
   "appMemoryExpandedMB": null,
   "backupMemoryKB": 320.0,
   "revisions": [],
   "firstSeen": "4.08",
   "inVersions": [
    "4.08",
    "4.09",
    "5.01"
   ],
   "versions": {
    "4.08": "full",
    "4.09": "full",
    "5.01": "full"
   },
   "statusLatest": "full",
   "features": {
    "remoteHmi": {
     "s": "yes",
     "conn": 3
    },
    "gpViewer": {
     "s": "yes"
    },
    "proFaceConnect": {
     "s": "yes"
    },
    "ftp": {
     "s": "yes",
     "n": "支援 FTPS"
    },
    "web": {
     "s": "ended",
     "n": "4.09.450 以前版本才支援"
    },
    "email": {
     "s": "yes"
    },
    "ipsec": {
     "s": "yes"
    },
    "ezLan": {
     "s": "yes"
    }
   },
   "featureSrc": [
    "S_RHMI_WIN",
    "S_GPV_LIC",
    "S_PFC",
    "S_F_GP4500"
   ],
   "cutout": {
    "mount": "rect",
    "w": 259,
    "h": 201,
    "t": "1.6～5",
    "src": "S_C_GP4000"
   },
   "replace": [],
   "switches": [],
   "cable": null
  },
  {
   "key": "64000600|GP-45** Series|GP-4501TTF",
   "seriesXml": "GP4000 Series",
   "series": "GP4000",
   "group": "GP-45** Series",
   "name": "GP-4501TTF",
   "offlineName": "GP4501TTF",
   "form": "panel",
   "inch": 10.4,
   "resolution": "VGA",
   "resolutionPx": "640×480",
   "color": "Color",
   "touch": "analog",
   "ethernet": 1,
   "com": [
    {
     "port": "COM1",
     "type": "RS232C"
    },
    {
     "port": "COM2",
     "type": "RS422/485"
    }
   ],
   "usbA": 1,
   "usbMiniB": 1,
   "usbMicroB": null,
   "cardSlot": true,
   "ftpXml": true,
   "webXml": true,
   "emailXml": true,
   "ezLanXml": null,
   "remoteHmiMaxXml": 3,
   "appMemoryMB": 32.0,
   "appMemoryExpandedMB": null,
   "backupMemoryKB": 320.0,
   "revisions": [],
   "firstSeen": "5.01",
   "inVersions": [
    "5.01"
   ],
   "versions": {
    "4.08": "absent",
    "4.09": "absent",
    "5.01": "full"
   },
   "statusLatest": "full",
   "features": {
    "remoteHmi": {
     "s": "yes",
     "conn": 3
    },
    "gpViewer": {
     "s": "yes"
    },
    "proFaceConnect": {
     "s": "unknown"
    },
    "ftp": {
     "s": "yes"
    },
    "web": {
     "s": "ended"
    },
    "email": {
     "s": "yes"
    },
    "ipsec": {
     "s": "unknown"
    },
    "ezLan": {
     "s": "no"
    }
   },
   "featureSrc": [
    "S_RHMI_WIN",
    "S_GPV_LIC",
    "S_PFC",
    "S_FIELD",
    "S_XML"
   ],
   "cutout": {
    "mount": "rect",
    "w": 259,
    "h": 201,
    "t": "1.6～5",
    "n": "與 GP-4501T 相同",
    "src": "S_FIELD"
   },
   "replace": [],
   "switches": [],
   "cable": null
  },
  {
   "key": "2C000600|GP-45** Series|GP-4501TW",
   "seriesXml": "GP4000 Series",
   "series": "GP4000",
   "group": "GP-45** Series",
   "name": "GP-4501TW",
   "offlineName": "GP4501TAW",
   "form": "panel",
   "inch": 10.4,
   "resolution": "VGA",
   "resolutionPx": "640×480",
   "color": "Color",
   "touch": "analog",
   "ethernet": 1,
   "com": [
    {
     "port": "COM1",
     "type": "RS232C"
    },
    {
     "port": "COM2",
     "type": "RS422/485"
    }
   ],
   "usbA": 1,
   "usbMiniB": 1,
   "usbMicroB": null,
   "cardSlot": true,
   "ftpXml": true,
   "webXml": true,
   "emailXml": true,
   "ezLanXml": null,
   "remoteHmiMaxXml": 3,
   "appMemoryMB": 16.0,
   "appMemoryExpandedMB": null,
   "backupMemoryKB": 128.0,
   "revisions": [],
   "firstSeen": "4.08",
   "inVersions": [
    "4.08",
    "4.09",
    "5.01"
   ],
   "versions": {
    "4.08": "full",
    "4.09": "full",
    "5.01": "full"
   },
   "statusLatest": "full",
   "features": {
    "remoteHmi": {
     "s": "yes",
     "conn": 3
    },
    "gpViewer": {
     "s": "yes"
    },
    "proFaceConnect": {
     "s": "yes"
    },
    "ftp": {
     "s": "yes",
     "n": "支援 FTPS"
    },
    "web": {
     "s": "ended",
     "n": "4.09.450 以前版本才支援"
    },
    "email": {
     "s": "yes"
    },
    "ipsec": {
     "s": "yes"
    },
    "ezLan": {
     "s": "yes"
    }
   },
   "featureSrc": [
    "S_RHMI_WIN",
    "S_GPV_LIC",
    "S_PFC",
    "S_F_GP4500"
   ],
   "cutout": {
    "mount": "rect",
    "w": 301.5,
    "h": 227.5,
    "t": "1.6～5",
    "n": "W 型 10.4 吋使用 12.1 吋外框",
    "src": "S_C_GP4000"
   },
   "replace": [],
   "switches": [],
   "cable": null
  },
  {
   "key": "28000600|GP-45** Series|GP-4503T",
   "seriesXml": "GP4000 Series",
   "series": "GP4000",
   "group": "GP-45** Series",
   "name": "GP-4503T",
   "offlineName": "GP4503TA",
   "form": "panel",
   "inch": 10.4,
   "resolution": "VGA",
   "resolutionPx": "640×480",
   "color": "Color",
   "touch": "analog",
   "ethernet": 1,
   "com": [
    {
     "port": "COM1",
     "type": "RS232C"
    },
    {
     "port": "COM2",
     "type": "RS422/485"
    }
   ],
   "usbA": 1,
   "usbMiniB": 1,
   "usbMicroB": null,
   "cardSlot": true,
   "ftpXml": true,
   "webXml": true,
   "emailXml": true,
   "ezLanXml": null,
   "remoteHmiMaxXml": 3,
   "appMemoryMB": 32.0,
   "appMemoryExpandedMB": null,
   "backupMemoryKB": 320.0,
   "revisions": [],
   "firstSeen": "4.08",
   "inVersions": [
    "4.08",
    "4.09",
    "5.01"
   ],
   "versions": {
    "4.08": "full",
    "4.09": "full",
    "5.01": "full"
   },
   "statusLatest": "full",
   "features": {
    "remoteHmi": {
     "s": "yes",
     "conn": 3
    },
    "gpViewer": {
     "s": "yes"
    },
    "proFaceConnect": {
     "s": "yes"
    },
    "ftp": {
     "s": "yes",
     "n": "支援 FTPS"
    },
    "web": {
     "s": "ended",
     "n": "4.09.450 以前版本才支援"
    },
    "email": {
     "s": "yes"
    },
    "ipsec": {
     "s": "yes"
    },
    "ezLan": {
     "s": "yes"
    }
   },
   "featureSrc": [
    "S_RHMI_WIN",
    "S_GPV_LIC",
    "S_PFC",
    "S_F_GP4500"
   ],
   "cutout": {
    "mount": "rect",
    "w": 259,
    "h": 201,
    "t": "1.6～5",
    "src": "S_C_GP4000"
   },
   "replace": [],
   "switches": [],
   "cable": null
  },
  {
   "key": "5C000600|GP-45** Series|GP-4521T",
   "seriesXml": "GP4000 Series",
   "series": "GP4000",
   "group": "GP-45** Series",
   "name": "GP-4521T",
   "offlineName": "GP4521TA",
   "form": "panel",
   "inch": 10.4,
   "resolution": "VGA",
   "resolutionPx": "640×480",
   "color": "Color",
   "touch": "analog",
   "ethernet": 1,
   "com": [
    {
     "port": "COM1",
     "type": "RS232C"
    },
    {
     "port": "COM2",
     "type": "RS422/485"
    }
   ],
   "usbA": 1,
   "usbMiniB": 1,
   "usbMicroB": null,
   "cardSlot": true,
   "ftpXml": true,
   "webXml": true,
   "emailXml": true,
   "ezLanXml": null,
   "remoteHmiMaxXml": 3,
   "appMemoryMB": 32.0,
   "appMemoryExpandedMB": null,
   "backupMemoryKB": 320.0,
   "revisions": [],
   "firstSeen": "4.08",
   "inVersions": [
    "4.08",
    "4.09",
    "5.01"
   ],
   "versions": {
    "4.08": "full",
    "4.09": "full",
    "5.01": "full"
   },
   "statusLatest": "full",
   "features": {
    "remoteHmi": {
     "s": "yes",
     "conn": 3
    },
    "gpViewer": {
     "s": "yes"
    },
    "proFaceConnect": {
     "s": "yes"
    },
    "ftp": {
     "s": "yes",
     "n": "支援 FTPS"
    },
    "web": {
     "s": "ended",
     "n": "4.09.450 以前版本才支援"
    },
    "email": {
     "s": "yes"
    },
    "ipsec": {
     "s": "yes"
    },
    "ezLan": {
     "s": "yes"
    }
   },
   "featureSrc": [
    "S_RHMI_WIN",
    "S_GPV_LIC",
    "S_PFC",
    "S_F_GP4500"
   ],
   "cutout": {
    "mount": "rect",
    "w": 259,
    "h": 201,
    "t": "1.6～5",
    "src": "S_C_GP4000"
   },
   "replace": [],
   "switches": [],
   "cable": null
  },
  {
   "key": "30000600|GP-46** Series|GP-4601T (Analog Touch Panel)",
   "seriesXml": "GP4000 Series",
   "series": "GP4000",
   "group": "GP-46** Series",
   "name": "GP-4601T (Analog Touch Panel)",
   "offlineName": "GP4601TA",
   "form": "panel",
   "inch": 12.1,
   "resolution": "SVGA",
   "resolutionPx": "800×600",
   "color": "Color",
   "touch": "analog",
   "ethernet": 1,
   "com": [
    {
     "port": "COM1",
     "type": "RS232C"
    },
    {
     "port": "COM2",
     "type": "RS422/485"
    }
   ],
   "usbA": 1,
   "usbMiniB": 1,
   "usbMicroB": null,
   "cardSlot": true,
   "ftpXml": true,
   "webXml": true,
   "emailXml": true,
   "ezLanXml": null,
   "remoteHmiMaxXml": 3,
   "appMemoryMB": 32.0,
   "appMemoryExpandedMB": null,
   "backupMemoryKB": 320.0,
   "revisions": [],
   "firstSeen": "4.08",
   "inVersions": [
    "4.08",
    "4.09",
    "5.01"
   ],
   "versions": {
    "4.08": "full",
    "4.09": "full",
    "5.01": "full"
   },
   "statusLatest": "full",
   "features": {
    "remoteHmi": {
     "s": "yes",
     "conn": 3
    },
    "gpViewer": {
     "s": "yes"
    },
    "proFaceConnect": {
     "s": "yes"
    },
    "ftp": {
     "s": "yes",
     "n": "支援 FTPS"
    },
    "web": {
     "s": "ended",
     "n": "4.09.450 以前版本才支援"
    },
    "email": {
     "s": "yes"
    },
    "ipsec": {
     "s": "yes"
    },
    "ezLan": {
     "s": "yes"
    }
   },
   "featureSrc": [
    "S_RHMI_WIN",
    "S_GPV_LIC",
    "S_PFC",
    "S_F_GP4600"
   ],
   "cutout": {
    "mount": "rect",
    "w": 301.5,
    "h": 227.5,
    "t": "1.6～5",
    "src": "S_C_GP4000"
   },
   "replace": [],
   "switches": [],
   "cable": null
  },
  {
   "key": "34000600|GP-46** Series|GP-4601T (Matrix Touch Panel)",
   "seriesXml": "GP4000 Series",
   "series": "GP4000",
   "group": "GP-46** Series",
   "name": "GP-4601T (Matrix Touch Panel)",
   "offlineName": "GP4601TM",
   "form": "panel",
   "inch": 12.1,
   "resolution": "SVGA",
   "resolutionPx": "800×600",
   "color": "Color",
   "touch": "matrix",
   "ethernet": 1,
   "com": [
    {
     "port": "COM1",
     "type": "RS232C"
    },
    {
     "port": "COM2",
     "type": "RS422/485"
    }
   ],
   "usbA": 1,
   "usbMiniB": 1,
   "usbMicroB": null,
   "cardSlot": true,
   "ftpXml": true,
   "webXml": true,
   "emailXml": true,
   "ezLanXml": null,
   "remoteHmiMaxXml": 3,
   "appMemoryMB": 32.0,
   "appMemoryExpandedMB": null,
   "backupMemoryKB": 320.0,
   "revisions": [],
   "firstSeen": "4.08",
   "inVersions": [
    "4.08",
    "4.09",
    "5.01"
   ],
   "versions": {
    "4.08": "full",
    "4.09": "full",
    "5.01": "full"
   },
   "statusLatest": "full",
   "features": {
    "remoteHmi": {
     "s": "yes",
     "conn": 3
    },
    "gpViewer": {
     "s": "yes"
    },
    "proFaceConnect": {
     "s": "yes"
    },
    "ftp": {
     "s": "yes",
     "n": "支援 FTPS"
    },
    "web": {
     "s": "ended",
     "n": "4.09.450 以前版本才支援"
    },
    "email": {
     "s": "yes"
    },
    "ipsec": {
     "s": "yes"
    },
    "ezLan": {
     "s": "yes"
    }
   },
   "featureSrc": [
    "S_RHMI_WIN",
    "S_GPV_LIC",
    "S_PFC",
    "S_F_GP4600"
   ],
   "cutout": {
    "mount": "rect",
    "w": 301.5,
    "h": 227.5,
    "t": "1.6～5",
    "src": "S_C_GP4000"
   },
   "replace": [],
   "switches": [],
   "cable": null
  },
  {
   "key": "68000600|GP-46** Series|GP-4601TTF",
   "seriesXml": "GP4000 Series",
   "series": "GP4000",
   "group": "GP-46** Series",
   "name": "GP-4601TTF",
   "offlineName": "GP4601TTF",
   "form": "panel",
   "inch": 12.1,
   "resolution": "SVGA",
   "resolutionPx": "800×600",
   "color": "Color",
   "touch": "analog",
   "ethernet": 1,
   "com": [
    {
     "port": "COM1",
     "type": "RS232C"
    },
    {
     "port": "COM2",
     "type": "RS422/485"
    }
   ],
   "usbA": 1,
   "usbMiniB": 1,
   "usbMicroB": null,
   "cardSlot": true,
   "ftpXml": true,
   "webXml": true,
   "emailXml": true,
   "ezLanXml": null,
   "remoteHmiMaxXml": 3,
   "appMemoryMB": 32.0,
   "appMemoryExpandedMB": null,
   "backupMemoryKB": 320.0,
   "revisions": [],
   "firstSeen": "5.01",
   "inVersions": [
    "5.01"
   ],
   "versions": {
    "4.08": "absent",
    "4.09": "absent",
    "5.01": "full"
   },
   "statusLatest": "full",
   "features": {
    "remoteHmi": {
     "s": "yes",
     "conn": 3
    },
    "gpViewer": {
     "s": "yes"
    },
    "proFaceConnect": {
     "s": "unknown"
    },
    "ftp": {
     "s": "yes"
    },
    "web": {
     "s": "ended"
    },
    "email": {
     "s": "yes"
    },
    "ipsec": {
     "s": "unknown"
    },
    "ezLan": {
     "s": "no"
    }
   },
   "featureSrc": [
    "S_RHMI_WIN",
    "S_GPV_LIC",
    "S_PFC",
    "S_FIELD",
    "S_XML"
   ],
   "cutout": {
    "mount": "rect",
    "w": 301.5,
    "h": 227.5,
    "t": "1.6～5",
    "n": "與 GP-4601T 相同",
    "src": "S_FIELD"
   },
   "replace": [],
   "switches": [],
   "cable": null
  },
  {
   "key": "38000600|GP-46** Series|GP-4603T",
   "seriesXml": "GP4000 Series",
   "series": "GP4000",
   "group": "GP-46** Series",
   "name": "GP-4603T",
   "offlineName": "GP4603TA",
   "form": "panel",
   "inch": 12.1,
   "resolution": "SVGA",
   "resolutionPx": "800×600",
   "color": "Color",
   "touch": "analog",
   "ethernet": 1,
   "com": [
    {
     "port": "COM1",
     "type": "RS232C"
    },
    {
     "port": "COM2",
     "type": "RS422/485"
    }
   ],
   "usbA": 1,
   "usbMiniB": 1,
   "usbMicroB": null,
   "cardSlot": true,
   "ftpXml": true,
   "webXml": true,
   "emailXml": true,
   "ezLanXml": null,
   "remoteHmiMaxXml": 3,
   "appMemoryMB": 32.0,
   "appMemoryExpandedMB": null,
   "backupMemoryKB": 320.0,
   "revisions": [],
   "firstSeen": "4.08",
   "inVersions": [
    "4.08",
    "4.09",
    "5.01"
   ],
   "versions": {
    "4.08": "full",
    "4.09": "full",
    "5.01": "full"
   },
   "statusLatest": "full",
   "features": {
    "remoteHmi": {
     "s": "yes",
     "conn": 3
    },
    "gpViewer": {
     "s": "yes"
    },
    "proFaceConnect": {
     "s": "yes"
    },
    "ftp": {
     "s": "yes",
     "n": "支援 FTPS"
    },
    "web": {
     "s": "ended",
     "n": "4.09.450 以前版本才支援"
    },
    "email": {
     "s": "yes"
    },
    "ipsec": {
     "s": "yes"
    },
    "ezLan": {
     "s": "yes"
    }
   },
   "featureSrc": [
    "S_RHMI_WIN",
    "S_GPV_LIC",
    "S_PFC",
    "S_F_GP4600"
   ],
   "cutout": {
    "mount": "rect",
    "w": 301.5,
    "h": 227.5,
    "t": "1.6～5",
    "src": "S_C_GP4000"
   },
   "replace": [],
   "switches": [],
   "cable": null
  },
  {
   "key": "60000600|GP-46** Series|GP-4621T",
   "seriesXml": "GP4000 Series",
   "series": "GP4000",
   "group": "GP-46** Series",
   "name": "GP-4621T",
   "offlineName": "GP4621TA",
   "form": "panel",
   "inch": 12.1,
   "resolution": "SVGA",
   "resolutionPx": "800×600",
   "color": "Color",
   "touch": "analog",
   "ethernet": 1,
   "com": [
    {
     "port": "COM1",
     "type": "RS232C"
    },
    {
     "port": "COM2",
     "type": "RS422/485"
    }
   ],
   "usbA": 1,
   "usbMiniB": 1,
   "usbMicroB": null,
   "cardSlot": true,
   "ftpXml": true,
   "webXml": true,
   "emailXml": true,
   "ezLanXml": null,
   "remoteHmiMaxXml": 3,
   "appMemoryMB": 32.0,
   "appMemoryExpandedMB": null,
   "backupMemoryKB": 320.0,
   "revisions": [],
   "firstSeen": "4.08",
   "inVersions": [
    "4.08",
    "4.09",
    "5.01"
   ],
   "versions": {
    "4.08": "full",
    "4.09": "full",
    "5.01": "full"
   },
   "statusLatest": "full",
   "features": {
    "remoteHmi": {
     "s": "yes",
     "conn": 3
    },
    "gpViewer": {
     "s": "yes"
    },
    "proFaceConnect": {
     "s": "yes"
    },
    "ftp": {
     "s": "yes",
     "n": "支援 FTPS"
    },
    "web": {
     "s": "ended",
     "n": "4.09.450 以前版本才支援"
    },
    "email": {
     "s": "yes"
    },
    "ipsec": {
     "s": "yes"
    },
    "ezLan": {
     "s": "yes"
    }
   },
   "featureSrc": [
    "S_RHMI_WIN",
    "S_GPV_LIC",
    "S_PFC",
    "S_F_GP4600"
   ],
   "cutout": {
    "mount": "rect",
    "w": 301.5,
    "h": 227.5,
    "t": "1.6～5",
    "src": "S_C_GP4000"
   },
   "replace": [],
   "switches": [],
   "cable": null
  },
  {
   "key": "58000600|GP-4G** Series|GP-4G01",
   "seriesXml": "GP4000 Series",
   "series": "GP4000",
   "group": "GP-4G** Series",
   "name": "GP-4G01",
   "offlineName": "GP4G01",
   "form": "box",
   "inch": null,
   "resolution": "SVGA",
   "resolutionPx": "800×600",
   "color": "Color",
   "touch": "none",
   "ethernet": 1,
   "com": [
    {
     "port": "COM1",
     "type": "RS232C/RS422/485"
    }
   ],
   "usbA": 1,
   "usbMiniB": 1,
   "usbMicroB": null,
   "cardSlot": true,
   "ftpXml": true,
   "webXml": false,
   "emailXml": true,
   "ezLanXml": null,
   "remoteHmiMaxXml": 3,
   "appMemoryMB": 32.0,
   "appMemoryExpandedMB": null,
   "backupMemoryKB": 320.0,
   "revisions": [],
   "firstSeen": "4.08",
   "inVersions": [
    "4.08",
    "4.09",
    "5.01"
   ],
   "versions": {
    "4.08": "full",
    "4.09": "full",
    "5.01": "open-only"
   },
   "statusLatest": "open-only",
   "features": {
    "remoteHmi": {
     "s": "yes",
     "conn": 3
    },
    "gpViewer": {
     "s": "yes"
    },
    "proFaceConnect": {
     "s": "unknown"
    },
    "ftp": {
     "s": "yes"
    },
    "web": {
     "s": "no"
    },
    "email": {
     "s": "yes"
    },
    "ipsec": {
     "s": "unknown"
    },
    "ezLan": {
     "s": "no"
    }
   },
   "featureSrc": [
    "S_RHMI_WIN",
    "S_GPV_LIC",
    "S_PFC",
    "S_FIELD",
    "S_XML"
   ],
   "cutout": {
    "mount": "box",
    "n": "盒型，無顯示器"
   },
   "replace": [],
   "switches": [],
   "cable": null
  },
  {
   "key": "318D0800|GP-Rear Module Series|GP-4000M (Rear Modular Type)",
   "seriesXml": "GP4000 Series",
   "series": "GP4000",
   "group": "GP-Rear Module Series",
   "name": "GP-4000M (Rear Modular Type)",
   "offlineName": "GM4*01TA",
   "form": "box",
   "inch": null,
   "resolution": "QVGA",
   "resolutionPx": "320×240",
   "color": "Color",
   "touch": "none",
   "ethernet": 1,
   "com": [
    {
     "port": "COM1",
     "type": "RS232C/RS422/485"
    }
   ],
   "usbA": 1,
   "usbMiniB": 1,
   "usbMicroB": null,
   "cardSlot": false,
   "ftpXml": true,
   "webXml": true,
   "emailXml": null,
   "ezLanXml": null,
   "remoteHmiMaxXml": 2,
   "appMemoryMB": 8.0,
   "appMemoryExpandedMB": null,
   "backupMemoryKB": 128.0,
   "revisions": [],
   "firstSeen": "4.08",
   "inVersions": [
    "4.08",
    "4.09",
    "5.01"
   ],
   "versions": {
    "4.08": "full",
    "4.09": "full",
    "5.01": "open-only"
   },
   "statusLatest": "open-only",
   "features": {
    "remoteHmi": {
     "s": "yes",
     "conn": 2,
     "ver": "4.0"
    },
    "gpViewer": {
     "s": "yes",
     "ver": "3.1"
    },
    "proFaceConnect": {
     "s": "no",
     "n": "原廠清單排除 GP4000M"
    },
    "ftp": {
     "s": "yes"
    },
    "web": {
     "s": "ended"
    },
    "email": {
     "s": "no"
    },
    "ipsec": {
     "s": "unknown"
    },
    "ezLan": {
     "s": "no"
    }
   },
   "featureSrc": [
    "S_RHMI_WIN",
    "S_GPV_LIC",
    "S_PFC",
    "S_XML"
   ],
   "cutout": {
    "mount": "box",
    "n": "後模組"
   },
   "replace": [],
   "switches": [],
   "cable": null
  },
  {
   "key": "010B0F00|ST-62** Series|ST-6200WA WQVGA (480*272)",
   "seriesXml": "ST6000 Series",
   "series": "ST6000",
   "group": "ST-62** Series",
   "name": "ST-6200WA WQVGA (480*272)",
   "offlineName": "ST6200WA",
   "form": "panel",
   "inch": 4.3,
   "resolution": "WQVGA",
   "resolutionPx": "480×272",
   "color": "Color",
   "touch": "analog",
   "ethernet": 1,
   "com": [
    {
     "port": "COM1",
     "type": "RS232C/RS422/485"
    }
   ],
   "usbA": 1,
   "usbMiniB": null,
   "usbMicroB": 1,
   "cardSlot": false,
   "ftpXml": true,
   "webXml": false,
   "emailXml": true,
   "ezLanXml": null,
   "remoteHmiMaxXml": 3,
   "appMemoryMB": 64.0,
   "appMemoryExpandedMB": 128.0,
   "backupMemoryKB": 320.0,
   "revisions": [],
   "firstSeen": "4.09",
   "inVersions": [
    "4.09",
    "5.01"
   ],
   "versions": {
    "4.08": "absent",
    "4.09": "full",
    "5.01": "full"
   },
   "statusLatest": "full",
   "features": {
    "remoteHmi": {
     "s": "yes",
     "conn": 3,
     "ver": "4.09.350"
    },
    "gpViewer": {
     "s": "yes"
    },
    "proFaceConnect": {
     "s": "yes"
    },
    "ftp": {
     "s": "yes",
     "n": "支援 FTPS"
    },
    "web": {
     "s": "no"
    },
    "email": {
     "s": "yes"
    },
    "ipsec": {
     "s": "yes"
    },
    "ezLan": {
     "s": "no"
    }
   },
   "featureSrc": [
    "S_F_ST6000"
   ],
   "cutout": {
    "mount": "rect",
    "w": 118.5,
    "h": 92.5,
    "t": "1.6～5",
    "src": "S_C_ST6000"
   },
   "replace": [],
   "switches": [],
   "cable": null
  },
  {
   "key": "010B0F80|ST-63** Series|ST-6300TA VGA (640*480)",
   "seriesXml": "ST6000 Series",
   "series": "ST6000",
   "group": "ST-63** Series",
   "name": "ST-6300TA VGA (640*480)",
   "offlineName": "ST6300TA",
   "form": "panel",
   "inch": 5.7,
   "resolution": "VGA",
   "resolutionPx": "640×480",
   "color": "Color",
   "touch": "analog",
   "ethernet": 1,
   "com": [
    {
     "port": "COM1",
     "type": "RS232C"
    },
    {
     "port": "COM2",
     "type": "RS422/485"
    }
   ],
   "usbA": 1,
   "usbMiniB": null,
   "usbMicroB": 1,
   "cardSlot": false,
   "ftpXml": true,
   "webXml": false,
   "emailXml": true,
   "ezLanXml": true,
   "remoteHmiMaxXml": 3,
   "appMemoryMB": 64.0,
   "appMemoryExpandedMB": 128.0,
   "backupMemoryKB": 320.0,
   "revisions": [],
   "firstSeen": "4.09",
   "inVersions": [
    "4.09",
    "5.01"
   ],
   "versions": {
    "4.08": "absent",
    "4.09": "full",
    "5.01": "full"
   },
   "statusLatest": "full",
   "features": {
    "remoteHmi": {
     "s": "yes",
     "conn": 3,
     "ver": "4.09.350"
    },
    "gpViewer": {
     "s": "yes"
    },
    "proFaceConnect": {
     "s": "yes"
    },
    "ftp": {
     "s": "yes",
     "n": "支援 FTPS"
    },
    "web": {
     "s": "no"
    },
    "email": {
     "s": "yes"
    },
    "ipsec": {
     "s": "yes"
    },
    "ezLan": {
     "s": "yes"
    }
   },
   "featureSrc": [
    "S_F_ST6000"
   ],
   "cutout": {
    "mount": "rect",
    "w": 156,
    "h": 123.5,
    "t": "1.6～5",
    "src": "S_C_ST6300"
   },
   "replace": [],
   "switches": [],
   "cable": null
  },
  {
   "key": "010B0F10|ST-64** Series|ST-6400WA WVGA (800*480)",
   "seriesXml": "ST6000 Series",
   "series": "ST6000",
   "group": "ST-64** Series",
   "name": "ST-6400WA WVGA (800*480)",
   "offlineName": "ST6400WA",
   "form": "panel",
   "inch": 7.0,
   "resolution": "WVGA",
   "resolutionPx": "800×480",
   "color": "Color",
   "touch": "analog",
   "ethernet": 2,
   "com": [
    {
     "port": "COM1",
     "type": "RS232C"
    },
    {
     "port": "COM2",
     "type": "RS422/485"
    }
   ],
   "usbA": 1,
   "usbMiniB": null,
   "usbMicroB": 1,
   "cardSlot": false,
   "ftpXml": true,
   "webXml": false,
   "emailXml": true,
   "ezLanXml": null,
   "remoteHmiMaxXml": 3,
   "appMemoryMB": 64.0,
   "appMemoryExpandedMB": 128.0,
   "backupMemoryKB": 320.0,
   "revisions": [],
   "firstSeen": "4.09",
   "inVersions": [
    "4.09",
    "5.01"
   ],
   "versions": {
    "4.08": "absent",
    "4.09": "full",
    "5.01": "full"
   },
   "statusLatest": "full",
   "features": {
    "remoteHmi": {
     "s": "yes",
     "conn": 3,
     "ver": "4.09.350"
    },
    "gpViewer": {
     "s": "yes"
    },
    "proFaceConnect": {
     "s": "yes"
    },
    "ftp": {
     "s": "yes",
     "n": "支援 FTPS"
    },
    "web": {
     "s": "no"
    },
    "email": {
     "s": "yes"
    },
    "ipsec": {
     "s": "yes"
    },
    "ezLan": {
     "s": "no"
    }
   },
   "featureSrc": [
    "S_F_ST6000"
   ],
   "cutout": {
    "mount": "rect",
    "w": 190,
    "h": 135,
    "t": "1.6～5",
    "src": "S_C_ST6000"
   },
   "replace": [],
   "switches": [],
   "cable": null
  },
  {
   "key": "010B0F20|ST-65** Series|ST-6500WA WSVGA (1024*600)",
   "seriesXml": "ST6000 Series",
   "series": "ST6000",
   "group": "ST-65** Series",
   "name": "ST-6500WA WSVGA (1024*600)",
   "offlineName": "ST6500WA",
   "form": "panel",
   "inch": 10.1,
   "resolution": "WSVGA",
   "resolutionPx": "1024×600",
   "color": "Color",
   "touch": "analog",
   "ethernet": 2,
   "com": [
    {
     "port": "COM1",
     "type": "RS232C"
    },
    {
     "port": "COM2",
     "type": "RS422/485"
    }
   ],
   "usbA": 1,
   "usbMiniB": null,
   "usbMicroB": 1,
   "cardSlot": false,
   "ftpXml": true,
   "webXml": false,
   "emailXml": true,
   "ezLanXml": null,
   "remoteHmiMaxXml": 3,
   "appMemoryMB": 64.0,
   "appMemoryExpandedMB": 128.0,
   "backupMemoryKB": 320.0,
   "revisions": [],
   "firstSeen": "4.09",
   "inVersions": [
    "4.09",
    "5.01"
   ],
   "versions": {
    "4.08": "absent",
    "4.09": "full",
    "5.01": "full"
   },
   "statusLatest": "full",
   "features": {
    "remoteHmi": {
     "s": "yes",
     "conn": 3,
     "ver": "4.09.350"
    },
    "gpViewer": {
     "s": "yes"
    },
    "proFaceConnect": {
     "s": "yes"
    },
    "ftp": {
     "s": "yes",
     "n": "支援 FTPS"
    },
    "web": {
     "s": "no"
    },
    "email": {
     "s": "yes"
    },
    "ipsec": {
     "s": "yes"
    },
    "ezLan": {
     "s": "no"
    }
   },
   "featureSrc": [
    "S_F_ST6000"
   ],
   "cutout": {
    "mount": "rect",
    "w": 255,
    "h": 185,
    "t": "1.6～5",
    "src": "S_C_ST6000"
   },
   "replace": [],
   "switches": [],
   "cable": null
  },
  {
   "key": "010B0F90|ST-65** Series|ST-6500TA SVGA (800*600)",
   "seriesXml": "ST6000 Series",
   "series": "ST6000",
   "group": "ST-65** Series",
   "name": "ST-6500TA SVGA (800*600)",
   "offlineName": "ST6500TA",
   "form": "panel",
   "inch": 10.4,
   "resolution": "SVGA",
   "resolutionPx": "800×600",
   "color": "Color",
   "touch": "analog",
   "ethernet": 1,
   "com": [
    {
     "port": "COM1",
     "type": "RS232C"
    },
    {
     "port": "COM2",
     "type": "RS422/485"
    }
   ],
   "usbA": 1,
   "usbMiniB": null,
   "usbMicroB": 1,
   "cardSlot": true,
   "ftpXml": true,
   "webXml": false,
   "emailXml": true,
   "ezLanXml": true,
   "remoteHmiMaxXml": 3,
   "appMemoryMB": 64.0,
   "appMemoryExpandedMB": 128.0,
   "backupMemoryKB": 320.0,
   "revisions": [],
   "firstSeen": "4.09",
   "inVersions": [
    "4.09",
    "5.01"
   ],
   "versions": {
    "4.08": "absent",
    "4.09": "full",
    "5.01": "full"
   },
   "statusLatest": "full",
   "features": {
    "remoteHmi": {
     "s": "yes",
     "conn": 3,
     "ver": "4.09.350"
    },
    "gpViewer": {
     "s": "yes"
    },
    "proFaceConnect": {
     "s": "yes"
    },
    "ftp": {
     "s": "yes",
     "n": "支援 FTPS"
    },
    "web": {
     "s": "no"
    },
    "email": {
     "s": "yes"
    },
    "ipsec": {
     "s": "yes"
    },
    "ezLan": {
     "s": "yes"
    }
   },
   "featureSrc": [
    "S_F_ST6000"
   ],
   "cutout": {
    "mount": "rect",
    "w": 301.5,
    "h": 227.5,
    "t": "1.6～5",
    "n": "10.4 吋使用 12.1 吋外框",
    "src": "S_C_ST6500TA"
   },
   "replace": [],
   "switches": [],
   "cable": null
  },
  {
   "key": "010B0F30|ST-66** Series|ST-6600WA WXGA (1280*800)",
   "seriesXml": "ST6000 Series",
   "series": "ST6000",
   "group": "ST-66** Series",
   "name": "ST-6600WA WXGA (1280*800)",
   "offlineName": "ST6600WA",
   "form": "panel",
   "inch": 12.1,
   "resolution": "WXGA",
   "resolutionPx": "1280×800",
   "color": "Color",
   "touch": "analog",
   "ethernet": 2,
   "com": [
    {
     "port": "COM1",
     "type": "RS232C"
    },
    {
     "port": "COM2",
     "type": "RS422/485"
    }
   ],
   "usbA": 1,
   "usbMiniB": null,
   "usbMicroB": 1,
   "cardSlot": false,
   "ftpXml": true,
   "webXml": false,
   "emailXml": true,
   "ezLanXml": null,
   "remoteHmiMaxXml": 3,
   "appMemoryMB": 64.0,
   "appMemoryExpandedMB": 128.0,
   "backupMemoryKB": 320.0,
   "revisions": [],
   "firstSeen": "4.09",
   "inVersions": [
    "4.09",
    "5.01"
   ],
   "versions": {
    "4.08": "absent",
    "4.09": "full",
    "5.01": "full"
   },
   "statusLatest": "full",
   "features": {
    "remoteHmi": {
     "s": "yes",
     "conn": 3,
     "ver": "4.09.350"
    },
    "gpViewer": {
     "s": "yes"
    },
    "proFaceConnect": {
     "s": "yes"
    },
    "ftp": {
     "s": "yes",
     "n": "支援 FTPS"
    },
    "web": {
     "s": "no"
    },
    "email": {
     "s": "yes"
    },
    "ipsec": {
     "s": "yes"
    },
    "ezLan": {
     "s": "no"
    }
   },
   "featureSrc": [
    "S_F_ST6000"
   ],
   "cutout": {
    "mount": "rect",
    "w": 295,
    "h": 217,
    "t": "1.6～5",
    "src": "S_C_ST6000"
   },
   "replace": [],
   "switches": [],
   "cable": null
  },
  {
   "key": "010B0FF0|ST-66** Series|ST-6600WA01 WXGA (1280*800)",
   "seriesXml": "ST6000 Series",
   "series": "ST6000",
   "group": "ST-66** Series",
   "name": "ST-6600WA01 WXGA (1280*800)",
   "offlineName": "ST6600WA01",
   "form": "panel",
   "inch": 12.1,
   "resolution": "WXGA",
   "resolutionPx": "1280×800",
   "color": "Color",
   "touch": "analog",
   "ethernet": 2,
   "com": [
    {
     "port": "COM1",
     "type": "RS232C"
    },
    {
     "port": "COM2",
     "type": "RS422/485"
    }
   ],
   "usbA": 1,
   "usbMiniB": null,
   "usbMicroB": 1,
   "cardSlot": false,
   "ftpXml": true,
   "webXml": false,
   "emailXml": true,
   "ezLanXml": null,
   "remoteHmiMaxXml": 3,
   "appMemoryMB": 64.0,
   "appMemoryExpandedMB": 128.0,
   "backupMemoryKB": 320.0,
   "revisions": [],
   "firstSeen": "4.09",
   "inVersions": [
    "4.09",
    "5.01"
   ],
   "versions": {
    "4.08": "absent",
    "4.09": "full",
    "5.01": "full"
   },
   "statusLatest": "full",
   "features": {
    "remoteHmi": {
     "s": "yes",
     "conn": 3,
     "ver": "4.09.350"
    },
    "gpViewer": {
     "s": "yes"
    },
    "proFaceConnect": {
     "s": "yes"
    },
    "ftp": {
     "s": "yes",
     "n": "支援 FTPS"
    },
    "web": {
     "s": "no"
    },
    "email": {
     "s": "yes"
    },
    "ipsec": {
     "s": "yes"
    },
    "ezLan": {
     "s": "no"
    }
   },
   "featureSrc": [
    "S_F_ST6000"
   ],
   "cutout": {
    "mount": "rect",
    "w": 295,
    "h": 217,
    "t": "1.6～5",
    "src": "S_C_ST6000"
   },
   "replace": [],
   "switches": [],
   "cable": null
  },
  {
   "key": "010B0F40|ST-67** Series|ST-6700WA FWXGA (1366*768)",
   "seriesXml": "ST6000 Series",
   "series": "ST6000",
   "group": "ST-67** Series",
   "name": "ST-6700WA FWXGA (1366*768)",
   "offlineName": "ST6700WA",
   "form": "panel",
   "inch": 15.6,
   "resolution": "FWXGA",
   "resolutionPx": "1366×768",
   "color": "Color",
   "touch": "analog",
   "ethernet": 2,
   "com": [
    {
     "port": "COM1",
     "type": "RS232C"
    },
    {
     "port": "COM2",
     "type": "RS422/485"
    }
   ],
   "usbA": 1,
   "usbMiniB": null,
   "usbMicroB": 1,
   "cardSlot": false,
   "ftpXml": true,
   "webXml": false,
   "emailXml": true,
   "ezLanXml": null,
   "remoteHmiMaxXml": 3,
   "appMemoryMB": 64.0,
   "appMemoryExpandedMB": 128.0,
   "backupMemoryKB": 320.0,
   "revisions": [],
   "firstSeen": "4.09",
   "inVersions": [
    "4.09",
    "5.01"
   ],
   "versions": {
    "4.08": "absent",
    "4.09": "full",
    "5.01": "full"
   },
   "statusLatest": "full",
   "features": {
    "remoteHmi": {
     "s": "yes",
     "conn": 3,
     "ver": "4.09.350"
    },
    "gpViewer": {
     "s": "yes"
    },
    "proFaceConnect": {
     "s": "yes"
    },
    "ftp": {
     "s": "yes",
     "n": "支援 FTPS"
    },
    "web": {
     "s": "no"
    },
    "email": {
     "s": "yes"
    },
    "ipsec": {
     "s": "yes"
    },
    "ezLan": {
     "s": "no"
    }
   },
   "featureSrc": [
    "S_F_ST6000"
   ],
   "cutout": {
    "mount": "rect",
    "w": 394,
    "h": 250,
    "t": "1.6～5",
    "src": "S_C_ST6000"
   },
   "replace": [],
   "switches": [],
   "cable": null
  },
  {
   "key": "010B0F60|STM-62** Series|STM-6200WA WQVGA (480*272)",
   "seriesXml": "STM6000 Series",
   "series": "STM6000",
   "group": "STM-62** Series",
   "name": "STM-6200WA WQVGA (480*272)",
   "offlineName": "STM6200WA",
   "form": "panel",
   "inch": 4.3,
   "resolution": "WQVGA",
   "resolutionPx": "480×272",
   "color": "Color",
   "touch": "analog",
   "ethernet": 2,
   "com": [
    {
     "port": "COM1",
     "type": "RS232C/RS422/485"
    }
   ],
   "usbA": 1,
   "usbMiniB": null,
   "usbMicroB": 1,
   "cardSlot": false,
   "ftpXml": true,
   "webXml": false,
   "emailXml": true,
   "ezLanXml": null,
   "remoteHmiMaxXml": 3,
   "appMemoryMB": 64.0,
   "appMemoryExpandedMB": 128.0,
   "backupMemoryKB": 320.0,
   "revisions": [],
   "firstSeen": "4.09",
   "inVersions": [
    "4.09",
    "5.01"
   ],
   "versions": {
    "4.08": "absent",
    "4.09": "full",
    "5.01": "full"
   },
   "statusLatest": "full",
   "features": {
    "remoteHmi": {
     "s": "yes",
     "conn": 3,
     "ver": "4.09.350"
    },
    "gpViewer": {
     "s": "yes"
    },
    "proFaceConnect": {
     "s": "yes"
    },
    "ftp": {
     "s": "yes",
     "n": "支援 FTPS"
    },
    "web": {
     "s": "no"
    },
    "email": {
     "s": "yes"
    },
    "ipsec": {
     "s": "yes"
    },
    "ezLan": {
     "s": "no"
    }
   },
   "featureSrc": [
    "S_F_STM6000"
   ],
   "cutout": {
    "mount": "round",
    "d": 22.5,
    "n": "φ22.5 圓孔，需防轉缺口",
    "src": "S_C_STM6000"
   },
   "replace": [],
   "switches": [],
   "cable": null
  },
  {
   "key": "010B0F70|STM-64** Series|STM-6400WA WVGA (800*480)",
   "seriesXml": "STM6000 Series",
   "series": "STM6000",
   "group": "STM-64** Series",
   "name": "STM-6400WA WVGA (800*480)",
   "offlineName": "STM6400WA",
   "form": "panel",
   "inch": 7.0,
   "resolution": "WVGA",
   "resolutionPx": "800×480",
   "color": "Color",
   "touch": "analog",
   "ethernet": 2,
   "com": [
    {
     "port": "COM1",
     "type": "RS232C/RS422/485"
    }
   ],
   "usbA": 1,
   "usbMiniB": null,
   "usbMicroB": 1,
   "cardSlot": false,
   "ftpXml": true,
   "webXml": false,
   "emailXml": true,
   "ezLanXml": null,
   "remoteHmiMaxXml": 3,
   "appMemoryMB": 64.0,
   "appMemoryExpandedMB": 128.0,
   "backupMemoryKB": 320.0,
   "revisions": [],
   "firstSeen": "4.09",
   "inVersions": [
    "4.09",
    "5.01"
   ],
   "versions": {
    "4.08": "absent",
    "4.09": "full",
    "5.01": "full"
   },
   "statusLatest": "full",
   "features": {
    "remoteHmi": {
     "s": "yes",
     "conn": 3,
     "ver": "4.09.350"
    },
    "gpViewer": {
     "s": "yes"
    },
    "proFaceConnect": {
     "s": "yes"
    },
    "ftp": {
     "s": "yes",
     "n": "支援 FTPS"
    },
    "web": {
     "s": "no"
    },
    "email": {
     "s": "yes"
    },
    "ipsec": {
     "s": "yes"
    },
    "ezLan": {
     "s": "no"
    }
   },
   "featureSrc": [
    "S_F_STM6000"
   ],
   "cutout": {
    "mount": "round",
    "d": 22.5,
    "n": "φ22.5 圓孔，需防轉缺口",
    "src": "S_C_STM6000"
   },
   "replace": [],
   "switches": [],
   "cable": null
  },
  {
   "key": "010B0F50|STM-GatewaySeries|STM-6B00",
   "seriesXml": "STM6000 Series",
   "series": "STM6000",
   "group": "STM-GatewaySeries",
   "name": "STM-6B00",
   "offlineName": "STM6B00",
   "form": "ipc",
   "inch": null,
   "resolution": "WVGA",
   "resolutionPx": "800×480",
   "color": "Color",
   "touch": "none",
   "ethernet": 2,
   "com": [
    {
     "port": "COM1",
     "type": "RS232C/RS422/485"
    }
   ],
   "usbA": 1,
   "usbMiniB": null,
   "usbMicroB": 1,
   "cardSlot": false,
   "ftpXml": true,
   "webXml": false,
   "emailXml": true,
   "ezLanXml": null,
   "remoteHmiMaxXml": 3,
   "appMemoryMB": 64.0,
   "appMemoryExpandedMB": 128.0,
   "backupMemoryKB": 320.0,
   "revisions": [],
   "firstSeen": "4.09",
   "inVersions": [
    "4.09",
    "5.01"
   ],
   "versions": {
    "4.08": "absent",
    "4.09": "full",
    "5.01": "full"
   },
   "statusLatest": "full",
   "features": {
    "remoteHmi": {
     "s": "yes",
     "conn": 3,
     "ver": "4.09.350"
    },
    "gpViewer": {
     "s": "yes"
    },
    "proFaceConnect": {
     "s": "yes"
    },
    "ftp": {
     "s": "yes",
     "n": "支援 FTPS"
    },
    "web": {
     "s": "no"
    },
    "email": {
     "s": "yes"
    },
    "ipsec": {
     "s": "yes"
    },
    "ezLan": {
     "s": "no"
    }
   },
   "featureSrc": [
    "S_F_STM6000"
   ],
   "cutout": {
    "mount": "box",
    "n": "後模組／閘道"
   },
   "replace": [],
   "switches": [],
   "cable": null
  },
  {
   "key": "010B0FA0|STC-63** Series|STC-6300TA VGA (640*480)",
   "seriesXml": "STC6000 Series",
   "series": "STC6000",
   "group": "STC-63** Series",
   "name": "STC-6300TA VGA (640*480)",
   "offlineName": "STC6300TA",
   "form": "panel",
   "inch": 5.7,
   "resolution": "VGA",
   "resolutionPx": "640×480",
   "color": "Color",
   "touch": "analog",
   "ethernet": 1,
   "com": [
    {
     "port": "COM1",
     "type": "RS232C/RS422/485"
    }
   ],
   "usbA": 1,
   "usbMiniB": null,
   "usbMicroB": 1,
   "cardSlot": false,
   "ftpXml": true,
   "webXml": false,
   "emailXml": true,
   "ezLanXml": true,
   "remoteHmiMaxXml": 3,
   "appMemoryMB": 64.0,
   "appMemoryExpandedMB": 128.0,
   "backupMemoryKB": 320.0,
   "revisions": [],
   "firstSeen": "4.09",
   "inVersions": [
    "4.09",
    "5.01"
   ],
   "versions": {
    "4.08": "absent",
    "4.09": "full",
    "5.01": "full"
   },
   "statusLatest": "full",
   "features": {
    "remoteHmi": {
     "s": "yes",
     "conn": 3,
     "ver": "4.09.500"
    },
    "gpViewer": {
     "s": "yes"
    },
    "proFaceConnect": {
     "s": "unknown",
     "n": "Pro-face Connect 清單有 STC6000 標題，機種表待確認"
    },
    "ftp": {
     "s": "yes"
    },
    "web": {
     "s": "no"
    },
    "email": {
     "s": "yes"
    },
    "ipsec": {
     "s": "unknown"
    },
    "ezLan": {
     "s": "yes"
    }
   },
   "featureSrc": [
    "S_RHMI_WIN",
    "S_GPV_LIC",
    "S_XML"
   ],
   "cutout": {
    "mount": "rect",
    "w": 156,
    "h": 123.5,
    "t": "1.6～5",
    "src": "S_C_STC6000"
   },
   "replace": [],
   "switches": [],
   "cable": null
  },
  {
   "key": "000B0F40|ET-64** Series|ET-6400WA WVGA (800*480)",
   "seriesXml": "ET6000 Series",
   "series": "ET6000",
   "group": "ET-64** Series",
   "name": "ET-6400WA WVGA (800*480)",
   "offlineName": "ET6400WA",
   "form": "panel",
   "inch": 7.0,
   "resolution": "WVGA",
   "resolutionPx": "800×480",
   "color": "Color",
   "touch": "analog",
   "ethernet": 1,
   "com": [
    {
     "port": "COM1",
     "type": "RS232C"
    },
    {
     "port": "COM2",
     "type": "RS422/485"
    }
   ],
   "usbA": 1,
   "usbMiniB": null,
   "usbMicroB": 1,
   "cardSlot": false,
   "ftpXml": true,
   "webXml": false,
   "emailXml": true,
   "ezLanXml": null,
   "remoteHmiMaxXml": 3,
   "appMemoryMB": 32.0,
   "appMemoryExpandedMB": null,
   "backupMemoryKB": 128.0,
   "revisions": [],
   "firstSeen": "4.09",
   "inVersions": [
    "4.09",
    "5.01"
   ],
   "versions": {
    "4.08": "absent",
    "4.09": "full",
    "5.01": "free"
   },
   "statusLatest": "free",
   "features": {
    "remoteHmi": {
     "s": "yes",
     "conn": 3,
     "ver": "4.09.600"
    },
    "gpViewer": {
     "s": "yes"
    },
    "proFaceConnect": {
     "s": "no"
    },
    "ftp": {
     "s": "yes"
    },
    "web": {
     "s": "no"
    },
    "email": {
     "s": "yes"
    },
    "ipsec": {
     "s": "yes"
    },
    "ezLan": {
     "s": "no"
    }
   },
   "featureSrc": [
    "S_F_ET6000"
   ],
   "cutout": {
    "mount": "rect",
    "w": 190,
    "h": 135,
    "t": "1.6～5",
    "src": "S_C_ET6400"
   },
   "replace": [],
   "switches": [],
   "cable": null
  },
  {
   "key": "020B0F00|ET-64** Series|ET-6400WA01 WVGA (800*480)",
   "seriesXml": "ET6000 Series",
   "series": "ET6000",
   "group": "ET-64** Series",
   "name": "ET-6400WA01 WVGA (800*480)",
   "offlineName": "ET6400WA01",
   "form": "panel",
   "inch": 7.0,
   "resolution": "WVGA",
   "resolutionPx": "800×480",
   "color": "Color",
   "touch": "analog",
   "ethernet": 1,
   "com": [
    {
     "port": "COM1",
     "type": "RS232C"
    },
    {
     "port": "COM2",
     "type": "RS422/485"
    }
   ],
   "usbA": 1,
   "usbMiniB": null,
   "usbMicroB": 1,
   "cardSlot": false,
   "ftpXml": true,
   "webXml": false,
   "emailXml": true,
   "ezLanXml": null,
   "remoteHmiMaxXml": 3,
   "appMemoryMB": 32.0,
   "appMemoryExpandedMB": null,
   "backupMemoryKB": 128.0,
   "revisions": [],
   "firstSeen": "5.01",
   "inVersions": [
    "5.01"
   ],
   "versions": {
    "4.08": "absent",
    "4.09": "absent",
    "5.01": "free"
   },
   "statusLatest": "free",
   "features": {
    "remoteHmi": {
     "s": "yes",
     "conn": 3,
     "ver": "4.09.600"
    },
    "gpViewer": {
     "s": "yes"
    },
    "proFaceConnect": {
     "s": "no"
    },
    "ftp": {
     "s": "yes"
    },
    "web": {
     "s": "no"
    },
    "email": {
     "s": "yes"
    },
    "ipsec": {
     "s": "yes"
    },
    "ezLan": {
     "s": "no"
    }
   },
   "featureSrc": [
    "S_F_ET6000"
   ],
   "cutout": {
    "mount": "rect",
    "w": 190,
    "h": 135,
    "t": "1.6～5",
    "src": "S_C_ET6400"
   },
   "replace": [],
   "switches": [],
   "cable": null
  },
  {
   "key": "000B0F50|ET-65** Series|ET-6500WA WSVGA (1024*600)",
   "seriesXml": "ET6000 Series",
   "series": "ET6000",
   "group": "ET-65** Series",
   "name": "ET-6500WA WSVGA (1024*600)",
   "offlineName": "ET6500WA",
   "form": "panel",
   "inch": 10.1,
   "resolution": "WSVGA",
   "resolutionPx": "1024×600",
   "color": "Color",
   "touch": "analog",
   "ethernet": 1,
   "com": [
    {
     "port": "COM1",
     "type": "RS232C"
    },
    {
     "port": "COM2",
     "type": "RS422/485"
    }
   ],
   "usbA": 1,
   "usbMiniB": null,
   "usbMicroB": 1,
   "cardSlot": false,
   "ftpXml": true,
   "webXml": false,
   "emailXml": true,
   "ezLanXml": null,
   "remoteHmiMaxXml": 3,
   "appMemoryMB": 64.0,
   "appMemoryExpandedMB": 128.0,
   "backupMemoryKB": 128.0,
   "revisions": [],
   "firstSeen": "4.09",
   "inVersions": [
    "4.09",
    "5.01"
   ],
   "versions": {
    "4.08": "absent",
    "4.09": "full",
    "5.01": "free"
   },
   "statusLatest": "free",
   "features": {
    "remoteHmi": {
     "s": "yes",
     "conn": 3,
     "ver": "4.09.600"
    },
    "gpViewer": {
     "s": "yes"
    },
    "proFaceConnect": {
     "s": "no"
    },
    "ftp": {
     "s": "yes"
    },
    "web": {
     "s": "no"
    },
    "email": {
     "s": "yes"
    },
    "ipsec": {
     "s": "yes"
    },
    "ezLan": {
     "s": "no"
    }
   },
   "featureSrc": [
    "S_F_ET6000"
   ],
   "cutout": {
    "mount": "rect",
    "w": 255,
    "h": 185,
    "t": "1.6～5",
    "src": "S_C_ET6000"
   },
   "replace": [],
   "switches": [],
   "cable": null
  },
  {
   "key": "020B0F10|ET-65** Series|ET-6500WA01 WSVGA (1024*600)",
   "seriesXml": "ET6000 Series",
   "series": "ET6000",
   "group": "ET-65** Series",
   "name": "ET-6500WA01 WSVGA (1024*600)",
   "offlineName": "ET6500WA01",
   "form": "panel",
   "inch": 10.1,
   "resolution": "WSVGA",
   "resolutionPx": "1024×600",
   "color": "Color",
   "touch": "analog",
   "ethernet": 1,
   "com": [
    {
     "port": "COM1",
     "type": "RS232C"
    },
    {
     "port": "COM2",
     "type": "RS422/485"
    }
   ],
   "usbA": 1,
   "usbMiniB": null,
   "usbMicroB": 1,
   "cardSlot": false,
   "ftpXml": true,
   "webXml": false,
   "emailXml": true,
   "ezLanXml": null,
   "remoteHmiMaxXml": 3,
   "appMemoryMB": 64.0,
   "appMemoryExpandedMB": 128.0,
   "backupMemoryKB": 128.0,
   "revisions": [],
   "firstSeen": "5.01",
   "inVersions": [
    "5.01"
   ],
   "versions": {
    "4.08": "absent",
    "4.09": "absent",
    "5.01": "free"
   },
   "statusLatest": "free",
   "features": {
    "remoteHmi": {
     "s": "yes",
     "conn": 3,
     "ver": "4.09.600"
    },
    "gpViewer": {
     "s": "yes"
    },
    "proFaceConnect": {
     "s": "no"
    },
    "ftp": {
     "s": "yes"
    },
    "web": {
     "s": "no"
    },
    "email": {
     "s": "yes"
    },
    "ipsec": {
     "s": "yes"
    },
    "ezLan": {
     "s": "no"
    }
   },
   "featureSrc": [
    "S_F_ET6000"
   ],
   "cutout": {
    "mount": "rect",
    "w": 255,
    "h": 185,
    "t": "1.6～5",
    "src": "S_C_ET6000"
   },
   "replace": [],
   "switches": [],
   "cable": null
  },
  {
   "key": "000B0F60|ET-66** Series|ET-6600WA WXGA (1280*800)",
   "seriesXml": "ET6000 Series",
   "series": "ET6000",
   "group": "ET-66** Series",
   "name": "ET-6600WA WXGA (1280*800)",
   "offlineName": "ET6600WA",
   "form": "panel",
   "inch": 12.1,
   "resolution": "WXGA",
   "resolutionPx": "1280×800",
   "color": "Color",
   "touch": "analog",
   "ethernet": 1,
   "com": [
    {
     "port": "COM1",
     "type": "RS232C"
    },
    {
     "port": "COM2",
     "type": "RS422/485"
    }
   ],
   "usbA": 1,
   "usbMiniB": null,
   "usbMicroB": 1,
   "cardSlot": false,
   "ftpXml": true,
   "webXml": false,
   "emailXml": true,
   "ezLanXml": null,
   "remoteHmiMaxXml": 3,
   "appMemoryMB": 64.0,
   "appMemoryExpandedMB": 128.0,
   "backupMemoryKB": 128.0,
   "revisions": [],
   "firstSeen": "4.09",
   "inVersions": [
    "4.09",
    "5.01"
   ],
   "versions": {
    "4.08": "absent",
    "4.09": "full",
    "5.01": "free"
   },
   "statusLatest": "free",
   "features": {
    "remoteHmi": {
     "s": "yes",
     "conn": 3,
     "ver": "4.09.600"
    },
    "gpViewer": {
     "s": "yes"
    },
    "proFaceConnect": {
     "s": "no"
    },
    "ftp": {
     "s": "yes"
    },
    "web": {
     "s": "no"
    },
    "email": {
     "s": "yes"
    },
    "ipsec": {
     "s": "yes"
    },
    "ezLan": {
     "s": "no"
    }
   },
   "featureSrc": [
    "S_F_ET6000"
   ],
   "cutout": {
    "mount": "rect",
    "w": 295,
    "h": 217,
    "t": "1.6～5",
    "src": "S_C_ET6600"
   },
   "replace": [],
   "switches": [],
   "cable": null
  },
  {
   "key": "000B0FD0|ET-67** Series|ET-6700WA FWXGA (1366*768)",
   "seriesXml": "ET6000 Series",
   "series": "ET6000",
   "group": "ET-67** Series",
   "name": "ET-6700WA FWXGA (1366*768)",
   "offlineName": "ET6700WA",
   "form": "panel",
   "inch": 15.6,
   "resolution": "FWXGA",
   "resolutionPx": "1366×768",
   "color": "Color",
   "touch": "analog",
   "ethernet": 1,
   "com": [
    {
     "port": "COM1",
     "type": "RS232C"
    },
    {
     "port": "COM2",
     "type": "RS422/485"
    }
   ],
   "usbA": 1,
   "usbMiniB": null,
   "usbMicroB": 1,
   "cardSlot": false,
   "ftpXml": true,
   "webXml": false,
   "emailXml": true,
   "ezLanXml": null,
   "remoteHmiMaxXml": 3,
   "appMemoryMB": 64.0,
   "appMemoryExpandedMB": 128.0,
   "backupMemoryKB": 128.0,
   "revisions": [],
   "firstSeen": "4.09",
   "inVersions": [
    "4.09",
    "5.01"
   ],
   "versions": {
    "4.08": "absent",
    "4.09": "full",
    "5.01": "free"
   },
   "statusLatest": "free",
   "features": {
    "remoteHmi": {
     "s": "yes",
     "conn": 3,
     "ver": "4.09.600"
    },
    "gpViewer": {
     "s": "yes"
    },
    "proFaceConnect": {
     "s": "no"
    },
    "ftp": {
     "s": "yes"
    },
    "web": {
     "s": "no"
    },
    "email": {
     "s": "yes"
    },
    "ipsec": {
     "s": "yes"
    },
    "ezLan": {
     "s": "no"
    }
   },
   "featureSrc": [
    "S_F_ET6000"
   ],
   "cutout": {
    "mount": "rect",
    "w": 394,
    "h": 250,
    "t": "1.6～5",
    "src": "S_C_ET6000"
   },
   "replace": [],
   "switches": [],
   "cable": null
  },
  {
   "key": "000B0FE0|ET-54** Series|ET-5400WA WVGA (800*480)",
   "seriesXml": "ET5000 Series",
   "series": "ET5000",
   "group": "ET-54** Series",
   "name": "ET-5400WA WVGA (800*480)",
   "offlineName": "ET5400WA",
   "form": "panel",
   "inch": 7.0,
   "resolution": "WVGA",
   "resolutionPx": "800×480",
   "color": "Color",
   "touch": "analog",
   "ethernet": 1,
   "com": [
    {
     "port": "COM1",
     "type": "RS422/485"
    }
   ],
   "usbA": 1,
   "usbMiniB": null,
   "usbMicroB": 1,
   "cardSlot": false,
   "ftpXml": true,
   "webXml": false,
   "emailXml": true,
   "ezLanXml": null,
   "remoteHmiMaxXml": 3,
   "appMemoryMB": 32.0,
   "appMemoryExpandedMB": null,
   "backupMemoryKB": 128.0,
   "revisions": [],
   "firstSeen": "5.01",
   "inVersions": [
    "5.01"
   ],
   "versions": {
    "4.08": "absent",
    "4.09": "absent",
    "5.01": "free"
   },
   "statusLatest": "free",
   "features": {
    "remoteHmi": {
     "s": "yes",
     "conn": 3
    },
    "gpViewer": {
     "s": "yes"
    },
    "proFaceConnect": {
     "s": "no"
    },
    "ftp": {
     "s": "yes"
    },
    "web": {
     "s": "no"
    },
    "email": {
     "s": "yes"
    },
    "ipsec": {
     "s": "no"
    },
    "ezLan": {
     "s": "no"
    }
   },
   "featureSrc": [
    "S_XML",
    "S_FIELD"
   ],
   "cutout": {
    "mount": "rect",
    "w": 190,
    "h": 135,
    "t": "1.6～5",
    "src": "S_C_ET5400"
   },
   "replace": [],
   "switches": [],
   "cable": null
  },
  {
   "key": "000B0FF0|ET-55** Series|ET-5500WA WSVGA (1024*600)",
   "seriesXml": "ET5000 Series",
   "series": "ET5000",
   "group": "ET-55** Series",
   "name": "ET-5500WA WSVGA (1024*600)",
   "offlineName": "ET5500WA",
   "form": "panel",
   "inch": 10.1,
   "resolution": "WSVGA",
   "resolutionPx": "1024×600",
   "color": "Color",
   "touch": "analog",
   "ethernet": 1,
   "com": [
    {
     "port": "COM1",
     "type": "RS422/485"
    }
   ],
   "usbA": 1,
   "usbMiniB": null,
   "usbMicroB": 1,
   "cardSlot": false,
   "ftpXml": true,
   "webXml": false,
   "emailXml": true,
   "ezLanXml": null,
   "remoteHmiMaxXml": 3,
   "appMemoryMB": 64.0,
   "appMemoryExpandedMB": null,
   "backupMemoryKB": 128.0,
   "revisions": [],
   "firstSeen": "5.01",
   "inVersions": [
    "5.01"
   ],
   "versions": {
    "4.08": "absent",
    "4.09": "absent",
    "5.01": "free"
   },
   "statusLatest": "free",
   "features": {
    "remoteHmi": {
     "s": "yes",
     "conn": 3
    },
    "gpViewer": {
     "s": "yes"
    },
    "proFaceConnect": {
     "s": "no"
    },
    "ftp": {
     "s": "yes"
    },
    "web": {
     "s": "no"
    },
    "email": {
     "s": "yes"
    },
    "ipsec": {
     "s": "no"
    },
    "ezLan": {
     "s": "no"
    }
   },
   "featureSrc": [
    "S_XML",
    "S_FIELD"
   ],
   "cutout": {
    "mount": "rect",
    "w": 255,
    "h": 185,
    "src": "S_C_ET5500"
   },
   "replace": [],
   "switches": [],
   "cable": null
  },
  {
   "key": "00030900|LT-42** Series|LT-4201TM (Modular Type Analog)",
   "seriesXml": "LT4000 Series",
   "series": "LT4000",
   "group": "LT-42** Series",
   "name": "LT-4201TM (Modular Type Analog)",
   "offlineName": "LM4*01TAA",
   "form": "panel",
   "inch": 3.5,
   "resolution": "QVGA",
   "resolutionPx": "320×240",
   "color": "Color",
   "touch": "analog",
   "ethernet": 1,
   "com": [
    {
     "port": "COM1",
     "type": "RS232C/RS422/485"
    }
   ],
   "usbA": 1,
   "usbMiniB": 1,
   "usbMicroB": null,
   "cardSlot": false,
   "ftpXml": true,
   "webXml": true,
   "emailXml": null,
   "ezLanXml": null,
   "remoteHmiMaxXml": 3,
   "appMemoryMB": 16.0,
   "appMemoryExpandedMB": null,
   "backupMemoryKB": 128.0,
   "revisions": [],
   "firstSeen": "4.08",
   "inVersions": [
    "4.08",
    "4.09",
    "5.01"
   ],
   "versions": {
    "4.08": "full",
    "4.09": "full",
    "5.01": "full"
   },
   "statusLatest": "full",
   "features": {
    "remoteHmi": {
     "s": "yes",
     "conn": 3,
     "ver": "3.6"
    },
    "gpViewer": {
     "s": "yes",
     "ver": "3.12"
    },
    "proFaceConnect": {
     "s": "no"
    },
    "ftp": {
     "s": "yes",
     "n": "支援 FTPS"
    },
    "web": {
     "s": "ended",
     "n": "4.09.450 以前版本才支援"
    },
    "email": {
     "s": "no"
    },
    "ipsec": {
     "s": "yes"
    },
    "ezLan": {
     "s": "no"
    }
   },
   "featureSrc": [
    "S_F_LT4000"
   ],
   "cutout": {
    "mount": "round",
    "d": 22.5,
    "t": "1.5～6",
    "n": "孔徑 22.2 至 22.5 mm，鋼板 1.5～6 mm、玻纖強化塑膠 3～6 mm；可加防轉配件",
    "src": "S_C_LT4000M"
   },
   "replace": [],
   "switches": [],
   "cable": null
  },
  {
   "key": "00020900|LT-42** Series|LT-4201TM (Modular Type DIO)",
   "seriesXml": "LT4000 Series",
   "series": "LT4000",
   "group": "LT-42** Series",
   "name": "LT-4201TM (Modular Type DIO)",
   "offlineName": "LM4*01TAD",
   "form": "panel",
   "inch": 3.5,
   "resolution": "QVGA",
   "resolutionPx": "320×240",
   "color": "Color",
   "touch": "analog",
   "ethernet": 1,
   "com": [
    {
     "port": "COM1",
     "type": "RS232C/RS422/485"
    }
   ],
   "usbA": 1,
   "usbMiniB": 1,
   "usbMicroB": null,
   "cardSlot": false,
   "ftpXml": true,
   "webXml": true,
   "emailXml": null,
   "ezLanXml": null,
   "remoteHmiMaxXml": 3,
   "appMemoryMB": 16.0,
   "appMemoryExpandedMB": null,
   "backupMemoryKB": 128.0,
   "revisions": [],
   "firstSeen": "4.08",
   "inVersions": [
    "4.08",
    "4.09",
    "5.01"
   ],
   "versions": {
    "4.08": "full",
    "4.09": "full",
    "5.01": "full"
   },
   "statusLatest": "full",
   "features": {
    "remoteHmi": {
     "s": "yes",
     "conn": 3,
     "ver": "3.6"
    },
    "gpViewer": {
     "s": "yes",
     "ver": "3.12"
    },
    "proFaceConnect": {
     "s": "no"
    },
    "ftp": {
     "s": "yes",
     "n": "支援 FTPS"
    },
    "web": {
     "s": "ended",
     "n": "4.09.450 以前版本才支援"
    },
    "email": {
     "s": "no"
    },
    "ipsec": {
     "s": "yes"
    },
    "ezLan": {
     "s": "no"
    }
   },
   "featureSrc": [
    "S_F_LT4000"
   ],
   "cutout": {
    "mount": "round",
    "d": 22.5,
    "t": "1.5～6",
    "n": "孔徑 22.2 至 22.5 mm，鋼板 1.5～6 mm、玻纖強化塑膠 3～6 mm；可加防轉配件",
    "src": "S_C_LT4000M"
   },
   "replace": [],
   "switches": [],
   "cable": null
  },
  {
   "key": "04030900|LT-43** Series|LT-4301TM (Modular Type Analog)",
   "seriesXml": "LT4000 Series",
   "series": "LT4000",
   "group": "LT-43** Series",
   "name": "LT-4301TM (Modular Type Analog)",
   "offlineName": "LM4*01TAA",
   "form": "panel",
   "inch": 5.7,
   "resolution": "QVGA",
   "resolutionPx": "320×240",
   "color": "Color",
   "touch": "analog",
   "ethernet": 1,
   "com": [
    {
     "port": "COM1",
     "type": "RS232C/RS422/485"
    }
   ],
   "usbA": 1,
   "usbMiniB": 1,
   "usbMicroB": null,
   "cardSlot": false,
   "ftpXml": true,
   "webXml": true,
   "emailXml": null,
   "ezLanXml": null,
   "remoteHmiMaxXml": 3,
   "appMemoryMB": 16.0,
   "appMemoryExpandedMB": null,
   "backupMemoryKB": 128.0,
   "revisions": [],
   "firstSeen": "4.08",
   "inVersions": [
    "4.08",
    "4.09",
    "5.01"
   ],
   "versions": {
    "4.08": "full",
    "4.09": "full",
    "5.01": "full"
   },
   "statusLatest": "full",
   "features": {
    "remoteHmi": {
     "s": "yes",
     "conn": 3,
     "ver": "3.6"
    },
    "gpViewer": {
     "s": "yes",
     "ver": "3.12"
    },
    "proFaceConnect": {
     "s": "no"
    },
    "ftp": {
     "s": "yes",
     "n": "支援 FTPS"
    },
    "web": {
     "s": "ended",
     "n": "4.09.450 以前版本才支援"
    },
    "email": {
     "s": "no"
    },
    "ipsec": {
     "s": "yes"
    },
    "ezLan": {
     "s": "no"
    }
   },
   "featureSrc": [
    "S_F_LT4000"
   ],
   "cutout": {
    "mount": "round",
    "d": 22.5,
    "t": "1.5～6",
    "n": "孔徑 22.2 至 22.5 mm，鋼板 1.5～6 mm、玻纖強化塑膠 3～6 mm；可加防轉配件",
    "src": "S_C_LT4000M"
   },
   "replace": [],
   "switches": [],
   "cable": null
  },
  {
   "key": "04020900|LT-43** Series|LT-4301TM (Modular Type DIO)",
   "seriesXml": "LT4000 Series",
   "series": "LT4000",
   "group": "LT-43** Series",
   "name": "LT-4301TM (Modular Type DIO)",
   "offlineName": "LM4*01TAD",
   "form": "panel",
   "inch": 5.7,
   "resolution": "QVGA",
   "resolutionPx": "320×240",
   "color": "Color",
   "touch": "analog",
   "ethernet": 1,
   "com": [
    {
     "port": "COM1",
     "type": "RS232C/RS422/485"
    }
   ],
   "usbA": 1,
   "usbMiniB": 1,
   "usbMicroB": null,
   "cardSlot": false,
   "ftpXml": true,
   "webXml": true,
   "emailXml": null,
   "ezLanXml": null,
   "remoteHmiMaxXml": 3,
   "appMemoryMB": 16.0,
   "appMemoryExpandedMB": null,
   "backupMemoryKB": 128.0,
   "revisions": [],
   "firstSeen": "4.08",
   "inVersions": [
    "4.08",
    "4.09",
    "5.01"
   ],
   "versions": {
    "4.08": "full",
    "4.09": "full",
    "5.01": "full"
   },
   "statusLatest": "full",
   "features": {
    "remoteHmi": {
     "s": "yes",
     "conn": 3,
     "ver": "3.6"
    },
    "gpViewer": {
     "s": "yes",
     "ver": "3.12"
    },
    "proFaceConnect": {
     "s": "no"
    },
    "ftp": {
     "s": "yes",
     "n": "支援 FTPS"
    },
    "web": {
     "s": "ended",
     "n": "4.09.450 以前版本才支援"
    },
    "email": {
     "s": "no"
    },
    "ipsec": {
     "s": "yes"
    },
    "ezLan": {
     "s": "no"
    }
   },
   "featureSrc": [
    "S_F_LT4000"
   ],
   "cutout": {
    "mount": "round",
    "d": 22.5,
    "t": "1.5～6",
    "n": "孔徑 22.2 至 22.5 mm，鋼板 1.5～6 mm、玻纖強化塑膠 3～6 mm；可加防轉配件",
    "src": "S_C_LT4000M"
   },
   "replace": [],
   "switches": [],
   "cable": null
  },
  {
   "key": "0C030900|LT-Rear Module Series|LT-4000M (Rear Module Analog)",
   "seriesXml": "LT4000 Series",
   "series": "LT4000",
   "group": "LT-Rear Module Series",
   "name": "LT-4000M (Rear Module Analog)",
   "offlineName": "LM4*01TAA",
   "form": "box",
   "inch": null,
   "resolution": "QVGA",
   "resolutionPx": "320×240",
   "color": "Color",
   "touch": "none",
   "ethernet": 1,
   "com": [
    {
     "port": "COM1",
     "type": "RS232C/RS422/485"
    }
   ],
   "usbA": 1,
   "usbMiniB": 1,
   "usbMicroB": null,
   "cardSlot": false,
   "ftpXml": true,
   "webXml": true,
   "emailXml": null,
   "ezLanXml": null,
   "remoteHmiMaxXml": 3,
   "appMemoryMB": 16.0,
   "appMemoryExpandedMB": null,
   "backupMemoryKB": 128.0,
   "revisions": [],
   "firstSeen": "4.08",
   "inVersions": [
    "4.08",
    "4.09",
    "5.01"
   ],
   "versions": {
    "4.08": "full",
    "4.09": "full",
    "5.01": "full"
   },
   "statusLatest": "full",
   "features": {
    "remoteHmi": {
     "s": "yes",
     "conn": 3,
     "ver": "3.6"
    },
    "gpViewer": {
     "s": "yes",
     "ver": "3.12"
    },
    "proFaceConnect": {
     "s": "no"
    },
    "ftp": {
     "s": "yes",
     "n": "支援 FTPS"
    },
    "web": {
     "s": "ended",
     "n": "4.09.450 以前版本才支援"
    },
    "email": {
     "s": "no"
    },
    "ipsec": {
     "s": "yes"
    },
    "ezLan": {
     "s": "no"
    }
   },
   "featureSrc": [
    "S_F_LT4000"
   ],
   "cutout": {
    "mount": "box",
    "n": "後模組"
   },
   "replace": [],
   "switches": [],
   "cable": null
  },
  {
   "key": "0C020900|LT-Rear Module Series|LT-4000M (Rear Module DIO)",
   "seriesXml": "LT4000 Series",
   "series": "LT4000",
   "group": "LT-Rear Module Series",
   "name": "LT-4000M (Rear Module DIO)",
   "offlineName": "LM4*01TAD",
   "form": "box",
   "inch": null,
   "resolution": "QVGA",
   "resolutionPx": "320×240",
   "color": "Color",
   "touch": "none",
   "ethernet": 1,
   "com": [
    {
     "port": "COM1",
     "type": "RS232C/RS422/485"
    }
   ],
   "usbA": 1,
   "usbMiniB": 1,
   "usbMicroB": null,
   "cardSlot": false,
   "ftpXml": true,
   "webXml": true,
   "emailXml": null,
   "ezLanXml": null,
   "remoteHmiMaxXml": 3,
   "appMemoryMB": 16.0,
   "appMemoryExpandedMB": null,
   "backupMemoryKB": 128.0,
   "revisions": [],
   "firstSeen": "4.08",
   "inVersions": [
    "4.08",
    "4.09",
    "5.01"
   ],
   "versions": {
    "4.08": "full",
    "4.09": "full",
    "5.01": "full"
   },
   "statusLatest": "full",
   "features": {
    "remoteHmi": {
     "s": "yes",
     "conn": 3,
     "ver": "3.6"
    },
    "gpViewer": {
     "s": "yes",
     "ver": "3.12"
    },
    "proFaceConnect": {
     "s": "no"
    },
    "ftp": {
     "s": "yes",
     "n": "支援 FTPS"
    },
    "web": {
     "s": "ended",
     "n": "4.09.450 以前版本才支援"
    },
    "email": {
     "s": "no"
    },
    "ipsec": {
     "s": "yes"
    },
    "ezLan": {
     "s": "no"
    }
   },
   "featureSrc": [
    "S_F_LT4000"
   ],
   "cutout": {
    "mount": "box",
    "n": "後模組"
   },
   "replace": [],
   "switches": [],
   "cable": null
  },
  {
   "key": "70660700|GC-44** Series|GC-4401W",
   "seriesXml": "GC4000 Series",
   "series": "GC4000",
   "group": "GC-44** Series",
   "name": "GC-4401W",
   "offlineName": "",
   "form": "panel",
   "inch": 7.0,
   "resolution": "WVGA",
   "resolutionPx": "800×480",
   "color": "Color",
   "touch": "analog",
   "ethernet": 0,
   "com": [
    {
     "port": "COM1",
     "type": "RS232C"
    },
    {
     "port": "COM2",
     "type": "RS422/485"
    }
   ],
   "usbA": 1,
   "usbMiniB": 1,
   "usbMicroB": null,
   "cardSlot": false,
   "ftpXml": false,
   "webXml": false,
   "emailXml": null,
   "ezLanXml": null,
   "remoteHmiMaxXml": null,
   "appMemoryMB": 8.0,
   "appMemoryExpandedMB": null,
   "backupMemoryKB": 128.0,
   "revisions": [],
   "firstSeen": "4.08",
   "inVersions": [
    "4.08",
    "5.01"
   ],
   "versions": {
    "4.08": "full",
    "4.09": "absent",
    "5.01": "open-only"
   },
   "statusLatest": "open-only",
   "features": {
    "remoteHmi": {
     "s": "no",
     "n": "無 LAN 埠"
    },
    "gpViewer": {
     "s": "no"
    },
    "proFaceConnect": {
     "s": "no"
    },
    "ftp": {
     "s": "no"
    },
    "web": {
     "s": "no"
    },
    "email": {
     "s": "no"
    },
    "ipsec": {
     "s": "no"
    },
    "ezLan": {
     "s": "no"
    }
   },
   "featureSrc": [],
   "cutout": {
    "mount": "rect",
    "w": 190,
    "h": 135,
    "t": "1.5～10",
    "n": "公差 W ±1、H ±0.7 mm",
    "src": "S_C_GC4000"
   },
   "replace": [],
   "switches": [],
   "cable": null
  },
  {
   "key": "60660700|GC-44** Series|GC-4408W",
   "seriesXml": "GC4000 Series",
   "series": "GC4000",
   "group": "GC-44** Series",
   "name": "GC-4408W",
   "offlineName": "",
   "form": "panel",
   "inch": 7.0,
   "resolution": "WVGA",
   "resolutionPx": "800×480",
   "color": "Color",
   "touch": "analog",
   "ethernet": 0,
   "com": [
    {
     "port": "COM1",
     "type": "RS232C"
    },
    {
     "port": "COM2",
     "type": "RS422/485"
    }
   ],
   "usbA": 0,
   "usbMiniB": 1,
   "usbMicroB": null,
   "cardSlot": false,
   "ftpXml": false,
   "webXml": false,
   "emailXml": null,
   "ezLanXml": null,
   "remoteHmiMaxXml": null,
   "appMemoryMB": 8.0,
   "appMemoryExpandedMB": null,
   "backupMemoryKB": 128.0,
   "revisions": [],
   "firstSeen": "4.08",
   "inVersions": [
    "4.08",
    "5.01"
   ],
   "versions": {
    "4.08": "full",
    "4.09": "absent",
    "5.01": "open-only"
   },
   "statusLatest": "open-only",
   "features": {
    "remoteHmi": {
     "s": "no",
     "n": "無 LAN 埠"
    },
    "gpViewer": {
     "s": "no"
    },
    "proFaceConnect": {
     "s": "no"
    },
    "ftp": {
     "s": "no"
    },
    "web": {
     "s": "no"
    },
    "email": {
     "s": "no"
    },
    "ipsec": {
     "s": "no"
    },
    "ezLan": {
     "s": "no"
    }
   },
   "featureSrc": [],
   "cutout": {
    "mount": "rect",
    "w": 190,
    "h": 135,
    "t": "1.5～10",
    "n": "公差 W ±1、H ±0.7 mm",
    "src": "S_C_GC4000"
   },
   "replace": [],
   "switches": [],
   "cable": null
  },
  {
   "key": "80660700|GC-45** Series|GC-4501W",
   "seriesXml": "GC4000 Series",
   "series": "GC4000",
   "group": "GC-45** Series",
   "name": "GC-4501W",
   "offlineName": "",
   "form": "panel",
   "inch": 10.1,
   "resolution": "WVGA",
   "resolutionPx": "800×480",
   "color": "Color",
   "touch": "analog",
   "ethernet": 0,
   "com": [
    {
     "port": "COM1",
     "type": "RS232C"
    },
    {
     "port": "COM2",
     "type": "RS422/485"
    }
   ],
   "usbA": 1,
   "usbMiniB": 1,
   "usbMicroB": null,
   "cardSlot": false,
   "ftpXml": false,
   "webXml": false,
   "emailXml": null,
   "ezLanXml": null,
   "remoteHmiMaxXml": null,
   "appMemoryMB": 8.0,
   "appMemoryExpandedMB": null,
   "backupMemoryKB": 128.0,
   "revisions": [],
   "firstSeen": "4.08",
   "inVersions": [
    "4.08",
    "5.01"
   ],
   "versions": {
    "4.08": "full",
    "4.09": "absent",
    "5.01": "open-only"
   },
   "statusLatest": "open-only",
   "features": {
    "remoteHmi": {
     "s": "no",
     "n": "無 LAN 埠"
    },
    "gpViewer": {
     "s": "no"
    },
    "proFaceConnect": {
     "s": "no"
    },
    "ftp": {
     "s": "no"
    },
    "web": {
     "s": "no"
    },
    "email": {
     "s": "no"
    },
    "ipsec": {
     "s": "no"
    },
    "ezLan": {
     "s": "no"
    }
   },
   "featureSrc": [],
   "cutout": {
    "mount": "rect",
    "w": 255,
    "h": 185,
    "t": "1.5～10",
    "n": "公差 W ±1.8、H +1 mm",
    "src": "S_C_GC4000"
   },
   "replace": [],
   "switches": [],
   "cable": null
  },
  {
   "key": "03010200|GP-32** Series|AGP-3200A",
   "seriesXml": "GP3000 Series",
   "series": "GP3000",
   "group": "GP-32** Series",
   "name": "AGP-3200A",
   "offlineName": "",
   "form": "panel",
   "inch": 3.8,
   "resolution": "QVGA",
   "resolutionPx": "320×240",
   "color": "Mono",
   "touch": null,
   "ethernet": 1,
   "com": [
    {
     "port": "COM1",
     "type": "RS232C/RS422/485"
    }
   ],
   "usbA": 1,
   "usbMiniB": null,
   "usbMicroB": null,
   "cardSlot": false,
   "ftpXml": true,
   "webXml": true,
   "emailXml": null,
   "ezLanXml": null,
   "remoteHmiMaxXml": null,
   "appMemoryMB": 6.0,
   "appMemoryExpandedMB": null,
   "backupMemoryKB": 320.0,
   "revisions": [],
   "firstSeen": "4.08",
   "inVersions": [
    "4.08",
    "4.09",
    "5.01"
   ],
   "versions": {
    "4.08": "full",
    "4.09": "full",
    "5.01": "open-only"
   },
   "statusLatest": "open-only",
   "features": {
    "remoteHmi": {
     "s": "no"
    },
    "gpViewer": {
     "s": "cond",
     "n": "需有 LAN 埠"
    },
    "proFaceConnect": {
     "s": "no"
    },
    "ftp": {
     "s": "yes"
    },
    "web": {
     "s": "ended"
    },
    "email": {
     "s": "no"
    },
    "ipsec": {
     "s": "no"
    },
    "ezLan": {
     "s": "no"
    }
   },
   "featureSrc": [
    "S_GPV_MODEL",
    "S_XML"
   ],
   "cutout": {
    "mount": "rect",
    "w": 118.5,
    "h": 92.5,
    "src": "S_C_GP3000"
   },
   "replace": [],
   "switches": [],
   "cable": null
  },
  {
   "key": "03060200|GP-32** Series|AGP-3200T",
   "seriesXml": "GP3000 Series",
   "series": "GP3000",
   "group": "GP-32** Series",
   "name": "AGP-3200T",
   "offlineName": "",
   "form": "panel",
   "inch": 3.8,
   "resolution": "QVGA",
   "resolutionPx": "320×240",
   "color": "Color",
   "touch": null,
   "ethernet": 1,
   "com": [
    {
     "port": "COM1",
     "type": "RS232C/RS422/485"
    }
   ],
   "usbA": 1,
   "usbMiniB": null,
   "usbMicroB": null,
   "cardSlot": false,
   "ftpXml": true,
   "webXml": true,
   "emailXml": null,
   "ezLanXml": null,
   "remoteHmiMaxXml": null,
   "appMemoryMB": 6.0,
   "appMemoryExpandedMB": null,
   "backupMemoryKB": 320.0,
   "revisions": [],
   "firstSeen": "4.08",
   "inVersions": [
    "4.08",
    "4.09",
    "5.01"
   ],
   "versions": {
    "4.08": "full",
    "4.09": "full",
    "5.01": "open-only"
   },
   "statusLatest": "open-only",
   "features": {
    "remoteHmi": {
     "s": "no"
    },
    "gpViewer": {
     "s": "cond",
     "n": "需有 LAN 埠"
    },
    "proFaceConnect": {
     "s": "no"
    },
    "ftp": {
     "s": "yes"
    },
    "web": {
     "s": "ended"
    },
    "email": {
     "s": "no"
    },
    "ipsec": {
     "s": "no"
    },
    "ezLan": {
     "s": "no"
    }
   },
   "featureSrc": [
    "S_GPV_MODEL",
    "S_XML"
   ],
   "cutout": {
    "mount": "rect",
    "w": 118.5,
    "h": 92.5,
    "src": "S_C_GP3000"
   },
   "replace": [],
   "switches": [],
   "cable": null
  },
  {
   "key": "0F000100|GP-33** Series|AGP-3300E",
   "seriesXml": "GP3000 Series",
   "series": "GP3000",
   "group": "GP-33** Series",
   "name": "AGP-3300E",
   "offlineName": "",
   "form": "panel",
   "inch": 5.7,
   "resolution": "QVGA",
   "resolutionPx": "320×240",
   "color": "Mono",
   "touch": null,
   "ethernet": 1,
   "com": [
    {
     "port": "COM1",
     "type": "RS232C/RS422/485"
    },
    {
     "port": "COM2",
     "type": "RS422/485"
    }
   ],
   "usbA": 1,
   "usbMiniB": null,
   "usbMicroB": null,
   "cardSlot": true,
   "ftpXml": true,
   "webXml": true,
   "emailXml": null,
   "ezLanXml": null,
   "remoteHmiMaxXml": null,
   "appMemoryMB": 6.0,
   "appMemoryExpandedMB": null,
   "backupMemoryKB": 320.0,
   "revisions": [
    "Rev*-4>=: MemoryEnlargement=yes, SupportExtensions=yes, CsvDateFormat=yes, IndirectPlc=0"
   ],
   "firstSeen": "4.09",
   "inVersions": [
    "4.09",
    "5.01"
   ],
   "versions": {
    "4.08": "absent",
    "4.09": "full",
    "5.01": "open-only"
   },
   "statusLatest": "open-only",
   "features": {
    "remoteHmi": {
     "s": "no"
    },
    "gpViewer": {
     "s": "cond",
     "n": "需有 LAN 埠"
    },
    "proFaceConnect": {
     "s": "no"
    },
    "ftp": {
     "s": "yes"
    },
    "web": {
     "s": "ended"
    },
    "email": {
     "s": "no"
    },
    "ipsec": {
     "s": "no"
    },
    "ezLan": {
     "s": "no"
    }
   },
   "featureSrc": [
    "S_GPV_MODEL",
    "S_XML"
   ],
   "cutout": {
    "mount": "rect",
    "w": 156,
    "h": 123.5,
    "src": "S_C_GP3000"
   },
   "replace": [
    {
     "to": "GP6000 Standard 5.7 吋（PFXGP6300TA*）",
     "sameCutout": true,
     "src": "S_R_GP3300_GP6300"
    }
   ],
   "switches": [],
   "cable": null
  },
  {
   "key": "03010300|GP-33** Series|AGP-3300HL",
   "seriesXml": "GP3000 Series",
   "series": "GP3000",
   "group": "GP-33** Series",
   "name": "AGP-3300HL",
   "offlineName": "",
   "form": "panel",
   "inch": 5.7,
   "resolution": "QVGA",
   "resolutionPx": "320×240",
   "color": "Mono",
   "touch": null,
   "ethernet": 1,
   "com": [
    {
     "port": "COM1",
     "type": "RS232C/RS422/485"
    }
   ],
   "usbA": 1,
   "usbMiniB": null,
   "usbMicroB": null,
   "cardSlot": true,
   "ftpXml": true,
   "webXml": true,
   "emailXml": null,
   "ezLanXml": null,
   "remoteHmiMaxXml": null,
   "appMemoryMB": 6.0,
   "appMemoryExpandedMB": null,
   "backupMemoryKB": 320.0,
   "revisions": [],
   "firstSeen": "4.08",
   "inVersions": [
    "4.08",
    "4.09",
    "5.01"
   ],
   "versions": {
    "4.08": "full",
    "4.09": "full",
    "5.01": "open-only"
   },
   "statusLatest": "open-only",
   "features": {
    "remoteHmi": {
     "s": "no"
    },
    "gpViewer": {
     "s": "cond",
     "n": "需有 LAN 埠"
    },
    "proFaceConnect": {
     "s": "no"
    },
    "ftp": {
     "s": "yes"
    },
    "web": {
     "s": "ended"
    },
    "email": {
     "s": "no"
    },
    "ipsec": {
     "s": "no"
    },
    "ezLan": {
     "s": "no"
    }
   },
   "featureSrc": [
    "S_GPV_MODEL",
    "S_XML"
   ],
   "cutout": {
    "mount": "handheld",
    "n": "手持型"
   },
   "replace": [
    {
     "to": "GP-4311HT（GP4000H）；再下一代為 GPH6000",
     "sameCutout": null,
     "src": "S_R_GP3000H_GP4000H"
    }
   ],
   "switches": [],
   "cable": null
  },
  {
   "key": "07040300|GP-33** Series|AGP-3300HS",
   "seriesXml": "GP3000 Series",
   "series": "GP3000",
   "group": "GP-33** Series",
   "name": "AGP-3300HS",
   "offlineName": "",
   "form": "panel",
   "inch": 5.7,
   "resolution": "QVGA",
   "resolutionPx": "320×240",
   "color": "Color",
   "touch": null,
   "ethernet": 1,
   "com": [
    {
     "port": "COM1",
     "type": "RS232C/RS422/485"
    }
   ],
   "usbA": 1,
   "usbMiniB": null,
   "usbMicroB": null,
   "cardSlot": true,
   "ftpXml": true,
   "webXml": true,
   "emailXml": null,
   "ezLanXml": null,
   "remoteHmiMaxXml": null,
   "appMemoryMB": 6.0,
   "appMemoryExpandedMB": null,
   "backupMemoryKB": 320.0,
   "revisions": [],
   "firstSeen": "4.08",
   "inVersions": [
    "4.08",
    "4.09",
    "5.01"
   ],
   "versions": {
    "4.08": "full",
    "4.09": "full",
    "5.01": "open-only"
   },
   "statusLatest": "open-only",
   "features": {
    "remoteHmi": {
     "s": "no"
    },
    "gpViewer": {
     "s": "cond",
     "n": "需有 LAN 埠"
    },
    "proFaceConnect": {
     "s": "no"
    },
    "ftp": {
     "s": "yes"
    },
    "web": {
     "s": "ended"
    },
    "email": {
     "s": "no"
    },
    "ipsec": {
     "s": "no"
    },
    "ezLan": {
     "s": "no"
    }
   },
   "featureSrc": [
    "S_GPV_MODEL",
    "S_XML"
   ],
   "cutout": {
    "mount": "handheld",
    "n": "手持型"
   },
   "replace": [
    {
     "to": "GP-4311HT（GP4000H）；再下一代為 GPH6000",
     "sameCutout": null,
     "src": "S_R_GP3000H_GP4000H"
    }
   ],
   "switches": [],
   "cable": null
  },
  {
   "key": "0F010100|GP-33** Series|AGP-3300L",
   "seriesXml": "GP3000 Series",
   "series": "GP3000",
   "group": "GP-33** Series",
   "name": "AGP-3300L",
   "offlineName": "",
   "form": "panel",
   "inch": 5.7,
   "resolution": "QVGA",
   "resolutionPx": "320×240",
   "color": "Mono",
   "touch": null,
   "ethernet": 1,
   "com": [
    {
     "port": "COM1",
     "type": "RS232C/RS422/485"
    },
    {
     "port": "COM2",
     "type": "RS422/485"
    }
   ],
   "usbA": 1,
   "usbMiniB": null,
   "usbMicroB": null,
   "cardSlot": true,
   "ftpXml": true,
   "webXml": true,
   "emailXml": null,
   "ezLanXml": null,
   "remoteHmiMaxXml": null,
   "appMemoryMB": 6.0,
   "appMemoryExpandedMB": null,
   "backupMemoryKB": 320.0,
   "revisions": [
    "Rev*-4>=: MemoryEnlargement=yes, SupportExtensions=yes, CsvDateFormat=yes, IndirectPlc=0"
   ],
   "firstSeen": "4.08",
   "inVersions": [
    "4.08",
    "4.09",
    "5.01"
   ],
   "versions": {
    "4.08": "full",
    "4.09": "full",
    "5.01": "open-only"
   },
   "statusLatest": "open-only",
   "features": {
    "remoteHmi": {
     "s": "no"
    },
    "gpViewer": {
     "s": "cond",
     "n": "需有 LAN 埠"
    },
    "proFaceConnect": {
     "s": "no"
    },
    "ftp": {
     "s": "yes"
    },
    "web": {
     "s": "ended"
    },
    "email": {
     "s": "no"
    },
    "ipsec": {
     "s": "no"
    },
    "ezLan": {
     "s": "no"
    }
   },
   "featureSrc": [
    "S_GPV_MODEL",
    "S_XML"
   ],
   "cutout": {
    "mount": "rect",
    "w": 156,
    "h": 123.5,
    "src": "S_C_GP3000"
   },
   "replace": [
    {
     "to": "GP6000 Standard 5.7 吋（PFXGP6300TA*）",
     "sameCutout": true,
     "src": "S_R_GP3300_GP6300"
    },
    {
     "to": "ST-6300TA（PFXST6300TADE），另一選擇",
     "sameCutout": true,
     "src": "S_R_GP3300_ST6300"
    }
   ],
   "switches": [],
   "cable": null
  },
  {
   "key": "0F010100|GP-33** Series|AGP-3300L-CA1M",
   "seriesXml": "GP3000 Series",
   "series": "GP3000",
   "group": "GP-33** Series",
   "name": "AGP-3300L-CA1M",
   "offlineName": "",
   "form": "panel",
   "inch": 5.7,
   "resolution": "QVGA",
   "resolutionPx": "320×240",
   "color": "Mono",
   "touch": null,
   "ethernet": 1,
   "com": [
    {
     "port": "COM1",
     "type": "RS232C/RS422/485"
    },
    {
     "port": "COM2",
     "type": "RS422/485"
    }
   ],
   "usbA": 1,
   "usbMiniB": null,
   "usbMicroB": null,
   "cardSlot": true,
   "ftpXml": true,
   "webXml": true,
   "emailXml": null,
   "ezLanXml": null,
   "remoteHmiMaxXml": null,
   "appMemoryMB": 6.0,
   "appMemoryExpandedMB": null,
   "backupMemoryKB": 320.0,
   "revisions": [
    "Rev*-4>=: MemoryEnlargement=yes, SupportExtensions=yes, CsvDateFormat=yes, IndirectPlc=0"
   ],
   "firstSeen": "4.08",
   "inVersions": [
    "4.08",
    "4.09",
    "5.01"
   ],
   "versions": {
    "4.08": "full",
    "4.09": "full",
    "5.01": "open-only"
   },
   "statusLatest": "open-only",
   "features": {
    "remoteHmi": {
     "s": "no"
    },
    "gpViewer": {
     "s": "cond",
     "n": "需有 LAN 埠"
    },
    "proFaceConnect": {
     "s": "no"
    },
    "ftp": {
     "s": "yes"
    },
    "web": {
     "s": "ended"
    },
    "email": {
     "s": "no"
    },
    "ipsec": {
     "s": "no"
    },
    "ezLan": {
     "s": "no"
    }
   },
   "featureSrc": [
    "S_GPV_MODEL",
    "S_XML"
   ],
   "cutout": {
    "mount": "rect",
    "w": 156,
    "h": 123.5,
    "src": "S_C_GP3000"
   },
   "replace": [
    {
     "to": "GP6000 Standard 5.7 吋（PFXGP6300TA*）",
     "sameCutout": true,
     "src": "S_R_GP3300_GP6300"
    },
    {
     "to": "ST-6300TA（PFXST6300TADE），另一選擇",
     "sameCutout": true,
     "src": "S_R_GP3300_ST6300"
    }
   ],
   "switches": [],
   "cable": null
  },
  {
   "key": "0F010100|GP-33** Series|AGP-3300L-D81",
   "seriesXml": "GP3000 Series",
   "series": "GP3000",
   "group": "GP-33** Series",
   "name": "AGP-3300L-D81",
   "offlineName": "",
   "form": "panel",
   "inch": 5.7,
   "resolution": "QVGA",
   "resolutionPx": "320×240",
   "color": "Mono",
   "touch": null,
   "ethernet": 1,
   "com": [
    {
     "port": "COM1",
     "type": "RS232C/RS422/485"
    },
    {
     "port": "COM2",
     "type": "RS422/485"
    }
   ],
   "usbA": 1,
   "usbMiniB": null,
   "usbMicroB": null,
   "cardSlot": true,
   "ftpXml": true,
   "webXml": true,
   "emailXml": null,
   "ezLanXml": null,
   "remoteHmiMaxXml": null,
   "appMemoryMB": 6.0,
   "appMemoryExpandedMB": null,
   "backupMemoryKB": 320.0,
   "revisions": [
    "Rev*-4>=: MemoryEnlargement=yes, SupportExtensions=yes, CsvDateFormat=yes, IndirectPlc=0"
   ],
   "firstSeen": "4.08",
   "inVersions": [
    "4.08",
    "4.09",
    "5.01"
   ],
   "versions": {
    "4.08": "full",
    "4.09": "full",
    "5.01": "open-only"
   },
   "statusLatest": "open-only",
   "features": {
    "remoteHmi": {
     "s": "no"
    },
    "gpViewer": {
     "s": "cond",
     "n": "需有 LAN 埠"
    },
    "proFaceConnect": {
     "s": "no"
    },
    "ftp": {
     "s": "yes"
    },
    "web": {
     "s": "ended"
    },
    "email": {
     "s": "no"
    },
    "ipsec": {
     "s": "no"
    },
    "ezLan": {
     "s": "no"
    }
   },
   "featureSrc": [
    "S_GPV_MODEL",
    "S_XML"
   ],
   "cutout": {
    "mount": "rect",
    "w": 156,
    "h": 123.5,
    "src": "S_C_GP3000"
   },
   "replace": [
    {
     "to": "GP6000 Standard 5.7 吋（PFXGP6300TA*）",
     "sameCutout": true,
     "src": "S_R_GP3300_GP6300"
    },
    {
     "to": "ST-6300TA（PFXST6300TADE），另一選擇",
     "sameCutout": true,
     "src": "S_R_GP3300_ST6300"
    },
    {
     "to": "STC-6300TA（DIO 控制型）",
     "sameCutout": true,
     "src": "S_R_GP3300DIO_STC"
    }
   ],
   "switches": [],
   "cable": null
  },
  {
   "key": "0F010100|GP-33** Series|AGP-3300L-FN1M",
   "seriesXml": "GP3000 Series",
   "series": "GP3000",
   "group": "GP-33** Series",
   "name": "AGP-3300L-FN1M",
   "offlineName": "",
   "form": "panel",
   "inch": 5.7,
   "resolution": "QVGA",
   "resolutionPx": "320×240",
   "color": "Mono",
   "touch": null,
   "ethernet": 1,
   "com": [
    {
     "port": "COM1",
     "type": "RS232C/RS422/485"
    },
    {
     "port": "COM2",
     "type": "RS422/485"
    }
   ],
   "usbA": 1,
   "usbMiniB": null,
   "usbMicroB": null,
   "cardSlot": true,
   "ftpXml": true,
   "webXml": true,
   "emailXml": null,
   "ezLanXml": null,
   "remoteHmiMaxXml": null,
   "appMemoryMB": 6.0,
   "appMemoryExpandedMB": null,
   "backupMemoryKB": 320.0,
   "revisions": [
    "Rev*-4>=: MemoryEnlargement=yes, SupportExtensions=yes, CsvDateFormat=yes, IndirectPlc=0"
   ],
   "firstSeen": "4.08",
   "inVersions": [
    "4.08",
    "4.09",
    "5.01"
   ],
   "versions": {
    "4.08": "full",
    "4.09": "full",
    "5.01": "open-only"
   },
   "statusLatest": "open-only",
   "features": {
    "remoteHmi": {
     "s": "no"
    },
    "gpViewer": {
     "s": "cond",
     "n": "需有 LAN 埠"
    },
    "proFaceConnect": {
     "s": "no"
    },
    "ftp": {
     "s": "yes"
    },
    "web": {
     "s": "ended"
    },
    "email": {
     "s": "no"
    },
    "ipsec": {
     "s": "no"
    },
    "ezLan": {
     "s": "no"
    }
   },
   "featureSrc": [
    "S_GPV_MODEL",
    "S_XML"
   ],
   "cutout": {
    "mount": "rect",
    "w": 156,
    "h": 123.5,
    "src": "S_C_GP3000"
   },
   "replace": [
    {
     "to": "GP6000 Standard 5.7 吋（PFXGP6300TA*）",
     "sameCutout": true,
     "src": "S_R_GP3300_GP6300"
    },
    {
     "to": "ST-6300TA（PFXST6300TADE），另一選擇",
     "sameCutout": true,
     "src": "S_R_GP3300_ST6300"
    }
   ],
   "switches": [],
   "cable": null
  },
  {
   "key": "0F040100|GP-33** Series|AGP-3300S",
   "seriesXml": "GP3000 Series",
   "series": "GP3000",
   "group": "GP-33** Series",
   "name": "AGP-3300S",
   "offlineName": "",
   "form": "panel",
   "inch": 5.7,
   "resolution": "QVGA",
   "resolutionPx": "320×240",
   "color": "Color",
   "touch": null,
   "ethernet": 1,
   "com": [
    {
     "port": "COM1",
     "type": "RS232C/RS422/485"
    },
    {
     "port": "COM2",
     "type": "RS422/485"
    }
   ],
   "usbA": 1,
   "usbMiniB": null,
   "usbMicroB": null,
   "cardSlot": true,
   "ftpXml": true,
   "webXml": true,
   "emailXml": null,
   "ezLanXml": null,
   "remoteHmiMaxXml": null,
   "appMemoryMB": 6.0,
   "appMemoryExpandedMB": null,
   "backupMemoryKB": 320.0,
   "revisions": [
    "Rev*-4>=: MemoryEnlargement=yes, SupportExtensions=yes, CsvDateFormat=yes, IndirectPlc=0"
   ],
   "firstSeen": "4.08",
   "inVersions": [
    "4.08",
    "4.09",
    "5.01"
   ],
   "versions": {
    "4.08": "full",
    "4.09": "full",
    "5.01": "open-only"
   },
   "statusLatest": "open-only",
   "features": {
    "remoteHmi": {
     "s": "no"
    },
    "gpViewer": {
     "s": "cond",
     "n": "需有 LAN 埠"
    },
    "proFaceConnect": {
     "s": "no"
    },
    "ftp": {
     "s": "yes"
    },
    "web": {
     "s": "ended"
    },
    "email": {
     "s": "no"
    },
    "ipsec": {
     "s": "no"
    },
    "ezLan": {
     "s": "no"
    }
   },
   "featureSrc": [
    "S_GPV_MODEL",
    "S_XML"
   ],
   "cutout": {
    "mount": "rect",
    "w": 156,
    "h": 123.5,
    "src": "S_C_GP3000"
   },
   "replace": [
    {
     "to": "GP6000 Standard 5.7 吋（PFXGP6300TA*）",
     "sameCutout": true,
     "src": "S_R_GP3300_GP6300"
    },
    {
     "to": "ST-6300TA（PFXST6300TADE），另一選擇",
     "sameCutout": true,
     "src": "S_R_GP3300_ST6300"
    }
   ],
   "switches": [],
   "cable": null
  },
  {
   "key": "0F040100|GP-33** Series|AGP-3300S-CA1M",
   "seriesXml": "GP3000 Series",
   "series": "GP3000",
   "group": "GP-33** Series",
   "name": "AGP-3300S-CA1M",
   "offlineName": "",
   "form": "panel",
   "inch": 5.7,
   "resolution": "QVGA",
   "resolutionPx": "320×240",
   "color": "Color",
   "touch": null,
   "ethernet": 1,
   "com": [
    {
     "port": "COM1",
     "type": "RS232C/RS422/485"
    },
    {
     "port": "COM2",
     "type": "RS422/485"
    }
   ],
   "usbA": 1,
   "usbMiniB": null,
   "usbMicroB": null,
   "cardSlot": true,
   "ftpXml": true,
   "webXml": true,
   "emailXml": null,
   "ezLanXml": null,
   "remoteHmiMaxXml": null,
   "appMemoryMB": 6.0,
   "appMemoryExpandedMB": null,
   "backupMemoryKB": 320.0,
   "revisions": [
    "Rev*-4>=: MemoryEnlargement=yes, SupportExtensions=yes, CsvDateFormat=yes, IndirectPlc=0"
   ],
   "firstSeen": "4.08",
   "inVersions": [
    "4.08",
    "4.09",
    "5.01"
   ],
   "versions": {
    "4.08": "full",
    "4.09": "full",
    "5.01": "open-only"
   },
   "statusLatest": "open-only",
   "features": {
    "remoteHmi": {
     "s": "no"
    },
    "gpViewer": {
     "s": "cond",
     "n": "需有 LAN 埠"
    },
    "proFaceConnect": {
     "s": "no"
    },
    "ftp": {
     "s": "yes"
    },
    "web": {
     "s": "ended"
    },
    "email": {
     "s": "no"
    },
    "ipsec": {
     "s": "no"
    },
    "ezLan": {
     "s": "no"
    }
   },
   "featureSrc": [
    "S_GPV_MODEL",
    "S_XML"
   ],
   "cutout": {
    "mount": "rect",
    "w": 156,
    "h": 123.5,
    "src": "S_C_GP3000"
   },
   "replace": [
    {
     "to": "GP6000 Standard 5.7 吋（PFXGP6300TA*）",
     "sameCutout": true,
     "src": "S_R_GP3300_GP6300"
    },
    {
     "to": "ST-6300TA（PFXST6300TADE），另一選擇",
     "sameCutout": true,
     "src": "S_R_GP3300_ST6300"
    }
   ],
   "switches": [],
   "cable": null
  },
  {
   "key": "0F040100|GP-33** Series|AGP-3300S-D81",
   "seriesXml": "GP3000 Series",
   "series": "GP3000",
   "group": "GP-33** Series",
   "name": "AGP-3300S-D81",
   "offlineName": "",
   "form": "panel",
   "inch": 5.7,
   "resolution": "QVGA",
   "resolutionPx": "320×240",
   "color": "Color",
   "touch": null,
   "ethernet": 1,
   "com": [
    {
     "port": "COM1",
     "type": "RS232C/RS422/485"
    },
    {
     "port": "COM2",
     "type": "RS422/485"
    }
   ],
   "usbA": 1,
   "usbMiniB": null,
   "usbMicroB": null,
   "cardSlot": true,
   "ftpXml": true,
   "webXml": true,
   "emailXml": null,
   "ezLanXml": null,
   "remoteHmiMaxXml": null,
   "appMemoryMB": 6.0,
   "appMemoryExpandedMB": null,
   "backupMemoryKB": 320.0,
   "revisions": [
    "Rev*-4>=: MemoryEnlargement=yes, SupportExtensions=yes, CsvDateFormat=yes, IndirectPlc=0"
   ],
   "firstSeen": "4.08",
   "inVersions": [
    "4.08",
    "4.09",
    "5.01"
   ],
   "versions": {
    "4.08": "full",
    "4.09": "full",
    "5.01": "open-only"
   },
   "statusLatest": "open-only",
   "features": {
    "remoteHmi": {
     "s": "no"
    },
    "gpViewer": {
     "s": "cond",
     "n": "需有 LAN 埠"
    },
    "proFaceConnect": {
     "s": "no"
    },
    "ftp": {
     "s": "yes"
    },
    "web": {
     "s": "ended"
    },
    "email": {
     "s": "no"
    },
    "ipsec": {
     "s": "no"
    },
    "ezLan": {
     "s": "no"
    }
   },
   "featureSrc": [
    "S_GPV_MODEL",
    "S_XML"
   ],
   "cutout": {
    "mount": "rect",
    "w": 156,
    "h": 123.5,
    "src": "S_C_GP3000"
   },
   "replace": [
    {
     "to": "GP6000 Standard 5.7 吋（PFXGP6300TA*）",
     "sameCutout": true,
     "src": "S_R_GP3300_GP6300"
    },
    {
     "to": "ST-6300TA（PFXST6300TADE），另一選擇",
     "sameCutout": true,
     "src": "S_R_GP3300_ST6300"
    },
    {
     "to": "STC-6300TA（DIO 控制型）",
     "sameCutout": true,
     "src": "S_R_GP3300DIO_STC"
    }
   ],
   "switches": [],
   "cable": null
  },
  {
   "key": "0F060100|GP-33** Series|AGP-3300T-CA1M",
   "seriesXml": "GP3000 Series",
   "series": "GP3000",
   "group": "GP-33** Series",
   "name": "AGP-3300T-CA1M",
   "offlineName": "",
   "form": "panel",
   "inch": 5.7,
   "resolution": "QVGA",
   "resolutionPx": "320×240",
   "color": "Color",
   "touch": null,
   "ethernet": 1,
   "com": [
    {
     "port": "COM1",
     "type": "RS232C/RS422/485"
    },
    {
     "port": "COM2",
     "type": "RS422/485"
    }
   ],
   "usbA": 1,
   "usbMiniB": null,
   "usbMicroB": null,
   "cardSlot": true,
   "ftpXml": true,
   "webXml": true,
   "emailXml": null,
   "ezLanXml": null,
   "remoteHmiMaxXml": null,
   "appMemoryMB": 6.0,
   "appMemoryExpandedMB": null,
   "backupMemoryKB": 320.0,
   "revisions": [
    "Rev*-4>=: MemoryEnlargement=yes, SupportExtensions=yes, CsvDateFormat=yes, IndirectPlc=0"
   ],
   "firstSeen": "4.08",
   "inVersions": [
    "4.08",
    "4.09",
    "5.01"
   ],
   "versions": {
    "4.08": "full",
    "4.09": "full",
    "5.01": "open-only"
   },
   "statusLatest": "open-only",
   "features": {
    "remoteHmi": {
     "s": "no"
    },
    "gpViewer": {
     "s": "cond",
     "n": "需有 LAN 埠"
    },
    "proFaceConnect": {
     "s": "no"
    },
    "ftp": {
     "s": "yes"
    },
    "web": {
     "s": "ended"
    },
    "email": {
     "s": "no"
    },
    "ipsec": {
     "s": "no"
    },
    "ezLan": {
     "s": "no"
    }
   },
   "featureSrc": [
    "S_GPV_MODEL",
    "S_XML"
   ],
   "cutout": {
    "mount": "rect",
    "w": 156,
    "h": 123.5,
    "src": "S_C_GP3000"
   },
   "replace": [
    {
     "to": "GP6000 Standard 5.7 吋（PFXGP6300TA*）",
     "sameCutout": true,
     "src": "S_R_GP3300_GP6300"
    }
   ],
   "switches": [],
   "cable": null
  },
  {
   "key": "0F060100|GP-33** Series|AGP-3300T-D81",
   "seriesXml": "GP3000 Series",
   "series": "GP3000",
   "group": "GP-33** Series",
   "name": "AGP-3300T-D81",
   "offlineName": "",
   "form": "panel",
   "inch": 5.7,
   "resolution": "QVGA",
   "resolutionPx": "320×240",
   "color": "Color",
   "touch": null,
   "ethernet": 1,
   "com": [
    {
     "port": "COM1",
     "type": "RS232C/RS422/485"
    },
    {
     "port": "COM2",
     "type": "RS422/485"
    }
   ],
   "usbA": 1,
   "usbMiniB": null,
   "usbMicroB": null,
   "cardSlot": true,
   "ftpXml": true,
   "webXml": true,
   "emailXml": null,
   "ezLanXml": null,
   "remoteHmiMaxXml": null,
   "appMemoryMB": 6.0,
   "appMemoryExpandedMB": null,
   "backupMemoryKB": 320.0,
   "revisions": [
    "Rev*-4>=: MemoryEnlargement=yes, SupportExtensions=yes, CsvDateFormat=yes, IndirectPlc=0"
   ],
   "firstSeen": "4.08",
   "inVersions": [
    "4.08",
    "4.09",
    "5.01"
   ],
   "versions": {
    "4.08": "full",
    "4.09": "full",
    "5.01": "open-only"
   },
   "statusLatest": "open-only",
   "features": {
    "remoteHmi": {
     "s": "no"
    },
    "gpViewer": {
     "s": "cond",
     "n": "需有 LAN 埠"
    },
    "proFaceConnect": {
     "s": "no"
    },
    "ftp": {
     "s": "yes"
    },
    "web": {
     "s": "ended"
    },
    "email": {
     "s": "no"
    },
    "ipsec": {
     "s": "no"
    },
    "ezLan": {
     "s": "no"
    }
   },
   "featureSrc": [
    "S_GPV_MODEL",
    "S_XML"
   ],
   "cutout": {
    "mount": "rect",
    "w": 156,
    "h": 123.5,
    "src": "S_C_GP3000"
   },
   "replace": [
    {
     "to": "GP6000 Standard 5.7 吋（PFXGP6300TA*）",
     "sameCutout": true,
     "src": "S_R_GP3300_GP6300"
    },
    {
     "to": "STC-6300TA（DIO 控制型）",
     "sameCutout": true,
     "src": "S_R_GP3300DIO_STC"
    }
   ],
   "switches": [],
   "cable": null
  },
  {
   "key": "0F060100|GP-33** Series|AGP-3300T-FN1M",
   "seriesXml": "GP3000 Series",
   "series": "GP3000",
   "group": "GP-33** Series",
   "name": "AGP-3300T-FN1M",
   "offlineName": "",
   "form": "panel",
   "inch": 5.7,
   "resolution": "QVGA",
   "resolutionPx": "320×240",
   "color": "Color",
   "touch": null,
   "ethernet": 1,
   "com": [
    {
     "port": "COM1",
     "type": "RS232C/RS422/485"
    },
    {
     "port": "COM2",
     "type": "RS422/485"
    }
   ],
   "usbA": 1,
   "usbMiniB": null,
   "usbMicroB": null,
   "cardSlot": true,
   "ftpXml": true,
   "webXml": true,
   "emailXml": null,
   "ezLanXml": null,
   "remoteHmiMaxXml": null,
   "appMemoryMB": 6.0,
   "appMemoryExpandedMB": null,
   "backupMemoryKB": 320.0,
   "revisions": [
    "Rev*-4>=: MemoryEnlargement=yes, SupportExtensions=yes, CsvDateFormat=yes, IndirectPlc=0"
   ],
   "firstSeen": "4.08",
   "inVersions": [
    "4.08",
    "4.09",
    "5.01"
   ],
   "versions": {
    "4.08": "full",
    "4.09": "full",
    "5.01": "open-only"
   },
   "statusLatest": "open-only",
   "features": {
    "remoteHmi": {
     "s": "no"
    },
    "gpViewer": {
     "s": "cond",
     "n": "需有 LAN 埠"
    },
    "proFaceConnect": {
     "s": "no"
    },
    "ftp": {
     "s": "yes"
    },
    "web": {
     "s": "ended"
    },
    "email": {
     "s": "no"
    },
    "ipsec": {
     "s": "no"
    },
    "ezLan": {
     "s": "no"
    }
   },
   "featureSrc": [
    "S_GPV_MODEL",
    "S_XML"
   ],
   "cutout": {
    "mount": "rect",
    "w": 156,
    "h": 123.5,
    "src": "S_C_GP3000"
   },
   "replace": [
    {
     "to": "GP6000 Standard 5.7 吋（PFXGP6300TA*）",
     "sameCutout": true,
     "src": "S_R_GP3300_GP6300"
    }
   ],
   "switches": [],
   "cable": null
  },
  {
   "key": "0F060100|GP-33** Series|AGP-3300T/U",
   "seriesXml": "GP3000 Series",
   "series": "GP3000",
   "group": "GP-33** Series",
   "name": "AGP-3300T/U",
   "offlineName": "",
   "form": "panel",
   "inch": 5.7,
   "resolution": "QVGA",
   "resolutionPx": "320×240",
   "color": "Color",
   "touch": null,
   "ethernet": 1,
   "com": [
    {
     "port": "COM1",
     "type": "RS232C/RS422/485"
    },
    {
     "port": "COM2",
     "type": "RS422/485"
    }
   ],
   "usbA": 1,
   "usbMiniB": null,
   "usbMicroB": null,
   "cardSlot": true,
   "ftpXml": true,
   "webXml": true,
   "emailXml": null,
   "ezLanXml": null,
   "remoteHmiMaxXml": null,
   "appMemoryMB": 6.0,
   "appMemoryExpandedMB": null,
   "backupMemoryKB": 320.0,
   "revisions": [
    "Rev*-4>=: MemoryEnlargement=yes, SupportExtensions=yes, CsvDateFormat=yes, IndirectPlc=0"
   ],
   "firstSeen": "4.08",
   "inVersions": [
    "4.08",
    "4.09",
    "5.01"
   ],
   "versions": {
    "4.08": "full",
    "4.09": "full",
    "5.01": "open-only"
   },
   "statusLatest": "open-only",
   "features": {
    "remoteHmi": {
     "s": "no"
    },
    "gpViewer": {
     "s": "cond",
     "n": "需有 LAN 埠"
    },
    "proFaceConnect": {
     "s": "no"
    },
    "ftp": {
     "s": "yes"
    },
    "web": {
     "s": "ended"
    },
    "email": {
     "s": "no"
    },
    "ipsec": {
     "s": "no"
    },
    "ezLan": {
     "s": "no"
    }
   },
   "featureSrc": [
    "S_GPV_MODEL",
    "S_XML"
   ],
   "cutout": {
    "mount": "rect",
    "w": 156,
    "h": 123.5,
    "src": "S_C_GP3000"
   },
   "replace": [
    {
     "to": "GP6000 Standard 5.7 吋（PFXGP6300TA*）",
     "sameCutout": true,
     "src": "S_R_GP3300_GP6300"
    }
   ],
   "switches": [],
   "cable": null
  },
  {
   "key": "07010100|GP-33** Series|AGP-3301L",
   "seriesXml": "GP3000 Series",
   "series": "GP3000",
   "group": "GP-33** Series",
   "name": "AGP-3301L",
   "offlineName": "",
   "form": "panel",
   "inch": 5.7,
   "resolution": "QVGA",
   "resolutionPx": "320×240",
   "color": "Mono",
   "touch": null,
   "ethernet": 0,
   "com": [
    {
     "port": "COM1",
     "type": "RS232C/RS422/485"
    },
    {
     "port": "COM2",
     "type": "RS422/485"
    }
   ],
   "usbA": 1,
   "usbMiniB": null,
   "usbMicroB": null,
   "cardSlot": true,
   "ftpXml": false,
   "webXml": false,
   "emailXml": null,
   "ezLanXml": null,
   "remoteHmiMaxXml": null,
   "appMemoryMB": 6.0,
   "appMemoryExpandedMB": null,
   "backupMemoryKB": 320.0,
   "revisions": [
    "Rev*-4>=: MemoryEnlargement=yes, SupportExtensions=yes, CsvDateFormat=yes, IndirectPlc=0"
   ],
   "firstSeen": "4.08",
   "inVersions": [
    "4.08",
    "4.09",
    "5.01"
   ],
   "versions": {
    "4.08": "full",
    "4.09": "full",
    "5.01": "open-only"
   },
   "statusLatest": "open-only",
   "features": {
    "remoteHmi": {
     "s": "no"
    },
    "gpViewer": {
     "s": "cond",
     "n": "需有 LAN 埠"
    },
    "proFaceConnect": {
     "s": "no"
    },
    "ftp": {
     "s": "no"
    },
    "web": {
     "s": "no"
    },
    "email": {
     "s": "no"
    },
    "ipsec": {
     "s": "no"
    },
    "ezLan": {
     "s": "no"
    }
   },
   "featureSrc": [
    "S_GPV_MODEL",
    "S_XML"
   ],
   "cutout": {
    "mount": "rect",
    "w": 156,
    "h": 123.5,
    "src": "S_C_GP3000"
   },
   "replace": [],
   "switches": [],
   "cable": null
  },
  {
   "key": "07040100|GP-33** Series|AGP-3301S",
   "seriesXml": "GP3000 Series",
   "series": "GP3000",
   "group": "GP-33** Series",
   "name": "AGP-3301S",
   "offlineName": "",
   "form": "panel",
   "inch": 5.7,
   "resolution": "QVGA",
   "resolutionPx": "320×240",
   "color": "Color",
   "touch": null,
   "ethernet": 0,
   "com": [
    {
     "port": "COM1",
     "type": "RS232C/RS422/485"
    },
    {
     "port": "COM2",
     "type": "RS422/485"
    }
   ],
   "usbA": 1,
   "usbMiniB": null,
   "usbMicroB": null,
   "cardSlot": true,
   "ftpXml": false,
   "webXml": false,
   "emailXml": null,
   "ezLanXml": null,
   "remoteHmiMaxXml": null,
   "appMemoryMB": 6.0,
   "appMemoryExpandedMB": null,
   "backupMemoryKB": 320.0,
   "revisions": [
    "Rev*-4>=: MemoryEnlargement=yes, SupportExtensions=yes, CsvDateFormat=yes, IndirectPlc=0"
   ],
   "firstSeen": "4.08",
   "inVersions": [
    "4.08",
    "4.09",
    "5.01"
   ],
   "versions": {
    "4.08": "full",
    "4.09": "full",
    "5.01": "open-only"
   },
   "statusLatest": "open-only",
   "features": {
    "remoteHmi": {
     "s": "no"
    },
    "gpViewer": {
     "s": "cond",
     "n": "需有 LAN 埠"
    },
    "proFaceConnect": {
     "s": "no"
    },
    "ftp": {
     "s": "no"
    },
    "web": {
     "s": "no"
    },
    "email": {
     "s": "no"
    },
    "ipsec": {
     "s": "no"
    },
    "ezLan": {
     "s": "no"
    }
   },
   "featureSrc": [
    "S_GPV_MODEL",
    "S_XML"
   ],
   "cutout": {
    "mount": "rect",
    "w": 156,
    "h": 123.5,
    "src": "S_C_GP3000"
   },
   "replace": [],
   "switches": [],
   "cable": null
  },
  {
   "key": "02810100|GP-33** Series|AGP-3302B",
   "seriesXml": "GP3000 Series",
   "series": "GP3000",
   "group": "GP-33** Series",
   "name": "AGP-3302B",
   "offlineName": "",
   "form": "panel",
   "inch": 5.7,
   "resolution": "QVGA",
   "resolutionPx": "320×240",
   "color": "Mono",
   "touch": null,
   "ethernet": 0,
   "com": [
    {
     "port": "COM1",
     "type": "RS232C"
    },
    {
     "port": "COM2",
     "type": "RS422/485"
    }
   ],
   "usbA": 1,
   "usbMiniB": null,
   "usbMicroB": null,
   "cardSlot": false,
   "ftpXml": false,
   "webXml": false,
   "emailXml": null,
   "ezLanXml": null,
   "remoteHmiMaxXml": null,
   "appMemoryMB": 6.0,
   "appMemoryExpandedMB": null,
   "backupMemoryKB": 128.0,
   "revisions": [],
   "firstSeen": "4.08",
   "inVersions": [
    "4.08",
    "4.09",
    "5.01"
   ],
   "versions": {
    "4.08": "full",
    "4.09": "full",
    "5.01": "open-only"
   },
   "statusLatest": "open-only",
   "features": {
    "remoteHmi": {
     "s": "no"
    },
    "gpViewer": {
     "s": "cond",
     "n": "需有 LAN 埠"
    },
    "proFaceConnect": {
     "s": "no"
    },
    "ftp": {
     "s": "no"
    },
    "web": {
     "s": "no"
    },
    "email": {
     "s": "no"
    },
    "ipsec": {
     "s": "no"
    },
    "ezLan": {
     "s": "no"
    }
   },
   "featureSrc": [
    "S_GPV_MODEL",
    "S_XML"
   ],
   "cutout": {
    "mount": "rect",
    "w": 156,
    "h": 123.5,
    "src": "S_C_GP3000"
   },
   "replace": [],
   "switches": [],
   "cable": null
  },
  {
   "key": "0B160300|GP-33** Series|AGP-3310HT",
   "seriesXml": "GP3000 Series",
   "series": "GP3000",
   "group": "GP-33** Series",
   "name": "AGP-3310HT",
   "offlineName": "",
   "form": "panel",
   "inch": 5.7,
   "resolution": "VGA",
   "resolutionPx": "640×480",
   "color": "Color",
   "touch": null,
   "ethernet": 1,
   "com": [
    {
     "port": "COM1",
     "type": "RS232C/RS422/485"
    }
   ],
   "usbA": 1,
   "usbMiniB": null,
   "usbMicroB": null,
   "cardSlot": true,
   "ftpXml": true,
   "webXml": true,
   "emailXml": null,
   "ezLanXml": null,
   "remoteHmiMaxXml": null,
   "appMemoryMB": 8.0,
   "appMemoryExpandedMB": null,
   "backupMemoryKB": 320.0,
   "revisions": [],
   "firstSeen": "4.08",
   "inVersions": [
    "4.08",
    "4.09",
    "5.01"
   ],
   "versions": {
    "4.08": "full",
    "4.09": "full",
    "5.01": "open-only"
   },
   "statusLatest": "open-only",
   "features": {
    "remoteHmi": {
     "s": "no"
    },
    "gpViewer": {
     "s": "cond",
     "n": "需有 LAN 埠"
    },
    "proFaceConnect": {
     "s": "no"
    },
    "ftp": {
     "s": "yes"
    },
    "web": {
     "s": "ended"
    },
    "email": {
     "s": "no"
    },
    "ipsec": {
     "s": "no"
    },
    "ezLan": {
     "s": "no"
    }
   },
   "featureSrc": [
    "S_GPV_MODEL",
    "S_XML"
   ],
   "cutout": {
    "mount": "handheld",
    "n": "手持型"
   },
   "replace": [
    {
     "to": "GP-4311HT（GP4000H）；再下一代為 GPH6000",
     "sameCutout": null,
     "src": "S_R_GP3000H_GP4000H"
    }
   ],
   "switches": [],
   "cable": null
  },
  {
   "key": "93160000|GP-33** Series|AGP-3310T",
   "seriesXml": "GP3000 Series",
   "series": "GP3000",
   "group": "GP-33** Series",
   "name": "AGP-3310T",
   "offlineName": "",
   "form": "panel",
   "inch": 5.7,
   "resolution": "VGA",
   "resolutionPx": "640×480",
   "color": "Color",
   "touch": null,
   "ethernet": 1,
   "com": [
    {
     "port": "COM1",
     "type": "RS232C/RS422/485"
    },
    {
     "port": "COM2",
     "type": "RS422/485"
    }
   ],
   "usbA": 2,
   "usbMiniB": null,
   "usbMicroB": null,
   "cardSlot": true,
   "ftpXml": true,
   "webXml": true,
   "emailXml": null,
   "ezLanXml": null,
   "remoteHmiMaxXml": null,
   "appMemoryMB": 8.0,
   "appMemoryExpandedMB": null,
   "backupMemoryKB": 320.0,
   "revisions": [],
   "firstSeen": "4.08",
   "inVersions": [
    "4.08",
    "4.09",
    "5.01"
   ],
   "versions": {
    "4.08": "full",
    "4.09": "full",
    "5.01": "open-only"
   },
   "statusLatest": "open-only",
   "features": {
    "remoteHmi": {
     "s": "no"
    },
    "gpViewer": {
     "s": "cond",
     "n": "需有 LAN 埠"
    },
    "proFaceConnect": {
     "s": "no"
    },
    "ftp": {
     "s": "yes"
    },
    "web": {
     "s": "ended"
    },
    "email": {
     "s": "no"
    },
    "ipsec": {
     "s": "no"
    },
    "ezLan": {
     "s": "no"
    }
   },
   "featureSrc": [
    "S_GPV_MODEL",
    "S_XML"
   ],
   "cutout": {
    "mount": "rect",
    "w": 156,
    "h": 123.5,
    "src": "S_C_GP3000"
   },
   "replace": [
    {
     "to": "GP6000 Standard 5.7 吋（PFXGP6300TA*）",
     "sameCutout": true,
     "src": "S_R_GP3300_GP6300"
    }
   ],
   "switches": [],
   "cable": null
  },
  {
   "key": "83160000|GP-33** Series|AGP-3360T",
   "seriesXml": "GP3000 Series",
   "series": "GP3000",
   "group": "GP-33** Series",
   "name": "AGP-3360T",
   "offlineName": "",
   "form": "panel",
   "inch": 5.7,
   "resolution": "VGA",
   "resolutionPx": "640×480",
   "color": "Color",
   "touch": null,
   "ethernet": 1,
   "com": [
    {
     "port": "COM1",
     "type": "RS232C/RS422/485"
    },
    {
     "port": "COM2",
     "type": "RS422/485"
    }
   ],
   "usbA": 2,
   "usbMiniB": null,
   "usbMicroB": null,
   "cardSlot": true,
   "ftpXml": true,
   "webXml": true,
   "emailXml": null,
   "ezLanXml": null,
   "remoteHmiMaxXml": null,
   "appMemoryMB": 8.0,
   "appMemoryExpandedMB": null,
   "backupMemoryKB": 320.0,
   "revisions": [],
   "firstSeen": "4.08",
   "inVersions": [
    "4.08",
    "4.09",
    "5.01"
   ],
   "versions": {
    "4.08": "full",
    "4.09": "full",
    "5.01": "open-only"
   },
   "statusLatest": "open-only",
   "features": {
    "remoteHmi": {
     "s": "no"
    },
    "gpViewer": {
     "s": "cond",
     "n": "需有 LAN 埠"
    },
    "proFaceConnect": {
     "s": "no"
    },
    "ftp": {
     "s": "yes"
    },
    "web": {
     "s": "ended"
    },
    "email": {
     "s": "no"
    },
    "ipsec": {
     "s": "no"
    },
    "ezLan": {
     "s": "no"
    }
   },
   "featureSrc": [
    "S_GPV_MODEL",
    "S_XML"
   ],
   "cutout": {
    "mount": "rect",
    "w": 156,
    "h": 123.5,
    "src": "S_C_GP3000"
   },
   "replace": [
    {
     "to": "SP-5400WA + SP-5B10（M class 停產公告）",
     "sameCutout": false,
     "src": "S_R_GP3000M_SP5000"
    }
   ],
   "switches": [],
   "cable": null
  },
  {
   "key": "17140000|GP-34** Series|AGP-3400S",
   "seriesXml": "GP3000 Series",
   "series": "GP3000",
   "group": "GP-34** Series",
   "name": "AGP-3400S",
   "offlineName": "",
   "form": "panel",
   "inch": 7.5,
   "resolution": "VGA",
   "resolutionPx": "640×480",
   "color": "Color",
   "touch": null,
   "ethernet": 1,
   "com": [
    {
     "port": "COM1",
     "type": "RS232C/RS422/485"
    },
    {
     "port": "COM2",
     "type": "RS422/485"
    }
   ],
   "usbA": 1,
   "usbMiniB": null,
   "usbMicroB": null,
   "cardSlot": true,
   "ftpXml": true,
   "webXml": true,
   "emailXml": null,
   "ezLanXml": null,
   "remoteHmiMaxXml": null,
   "appMemoryMB": 8.0,
   "appMemoryExpandedMB": null,
   "backupMemoryKB": 320.0,
   "revisions": [
    "Rev*-4>=: MemoryEnlargement=yes, GamenMemory=16, CsvDateFormat=yes"
   ],
   "firstSeen": "4.08",
   "inVersions": [
    "4.08",
    "4.09",
    "5.01"
   ],
   "versions": {
    "4.08": "full",
    "4.09": "full",
    "5.01": "open-only"
   },
   "statusLatest": "open-only",
   "features": {
    "remoteHmi": {
     "s": "no"
    },
    "gpViewer": {
     "s": "cond",
     "n": "需有 LAN 埠"
    },
    "proFaceConnect": {
     "s": "no"
    },
    "ftp": {
     "s": "yes"
    },
    "web": {
     "s": "ended"
    },
    "email": {
     "s": "no"
    },
    "ipsec": {
     "s": "no"
    },
    "ezLan": {
     "s": "no"
    }
   },
   "featureSrc": [
    "S_GPV_MODEL",
    "S_XML"
   ],
   "cutout": {
    "mount": "rect",
    "w": 204.5,
    "h": 159.5,
    "src": "S_C_GP3000"
   },
   "replace": [
    {
     "to": "GP6000 Standard 7 吋（PFXGP6400TA*）",
     "sameCutout": true,
     "src": "S_R_GP3400_GP6400"
    }
   ],
   "switches": [],
   "cable": null
  },
  {
   "key": "17140000|GP-34** Series|AGP-3400S-CA1M",
   "seriesXml": "GP3000 Series",
   "series": "GP3000",
   "group": "GP-34** Series",
   "name": "AGP-3400S-CA1M",
   "offlineName": "",
   "form": "panel",
   "inch": 7.5,
   "resolution": "VGA",
   "resolutionPx": "640×480",
   "color": "Color",
   "touch": null,
   "ethernet": 1,
   "com": [
    {
     "port": "COM1",
     "type": "RS232C/RS422/485"
    },
    {
     "port": "COM2",
     "type": "RS422/485"
    }
   ],
   "usbA": 1,
   "usbMiniB": null,
   "usbMicroB": null,
   "cardSlot": true,
   "ftpXml": true,
   "webXml": true,
   "emailXml": null,
   "ezLanXml": null,
   "remoteHmiMaxXml": null,
   "appMemoryMB": 8.0,
   "appMemoryExpandedMB": null,
   "backupMemoryKB": 320.0,
   "revisions": [
    "Rev*-4>=: MemoryEnlargement=yes, GamenMemory=16, CsvDateFormat=yes"
   ],
   "firstSeen": "4.08",
   "inVersions": [
    "4.08",
    "4.09",
    "5.01"
   ],
   "versions": {
    "4.08": "full",
    "4.09": "full",
    "5.01": "open-only"
   },
   "statusLatest": "open-only",
   "features": {
    "remoteHmi": {
     "s": "no"
    },
    "gpViewer": {
     "s": "cond",
     "n": "需有 LAN 埠"
    },
    "proFaceConnect": {
     "s": "no"
    },
    "ftp": {
     "s": "yes"
    },
    "web": {
     "s": "ended"
    },
    "email": {
     "s": "no"
    },
    "ipsec": {
     "s": "no"
    },
    "ezLan": {
     "s": "no"
    }
   },
   "featureSrc": [
    "S_GPV_MODEL",
    "S_XML"
   ],
   "cutout": {
    "mount": "rect",
    "w": 204.5,
    "h": 159.5,
    "src": "S_C_GP3000"
   },
   "replace": [
    {
     "to": "GP6000 Standard 7 吋（PFXGP6400TA*）",
     "sameCutout": true,
     "src": "S_R_GP3400_GP6400"
    }
   ],
   "switches": [],
   "cable": null
  },
  {
   "key": "17140000|GP-34** Series|AGP-3400S-D81",
   "seriesXml": "GP3000 Series",
   "series": "GP3000",
   "group": "GP-34** Series",
   "name": "AGP-3400S-D81",
   "offlineName": "",
   "form": "panel",
   "inch": 7.5,
   "resolution": "VGA",
   "resolutionPx": "640×480",
   "color": "Color",
   "touch": null,
   "ethernet": 1,
   "com": [
    {
     "port": "COM1",
     "type": "RS232C/RS422/485"
    },
    {
     "port": "COM2",
     "type": "RS422/485"
    }
   ],
   "usbA": 1,
   "usbMiniB": null,
   "usbMicroB": null,
   "cardSlot": true,
   "ftpXml": true,
   "webXml": true,
   "emailXml": null,
   "ezLanXml": null,
   "remoteHmiMaxXml": null,
   "appMemoryMB": 8.0,
   "appMemoryExpandedMB": null,
   "backupMemoryKB": 320.0,
   "revisions": [
    "Rev*-4>=: MemoryEnlargement=yes, GamenMemory=16, CsvDateFormat=yes"
   ],
   "firstSeen": "4.08",
   "inVersions": [
    "4.08",
    "4.09",
    "5.01"
   ],
   "versions": {
    "4.08": "full",
    "4.09": "full",
    "5.01": "open-only"
   },
   "statusLatest": "open-only",
   "features": {
    "remoteHmi": {
     "s": "no"
    },
    "gpViewer": {
     "s": "cond",
     "n": "需有 LAN 埠"
    },
    "proFaceConnect": {
     "s": "no"
    },
    "ftp": {
     "s": "yes"
    },
    "web": {
     "s": "ended"
    },
    "email": {
     "s": "no"
    },
    "ipsec": {
     "s": "no"
    },
    "ezLan": {
     "s": "no"
    }
   },
   "featureSrc": [
    "S_GPV_MODEL",
    "S_XML"
   ],
   "cutout": {
    "mount": "rect",
    "w": 204.5,
    "h": 159.5,
    "src": "S_C_GP3000"
   },
   "replace": [
    {
     "to": "GP6000 Standard 7 吋（PFXGP6400TA*）",
     "sameCutout": true,
     "src": "S_R_GP3400_GP6400"
    }
   ],
   "switches": [],
   "cable": null
  },
  {
   "key": "1B160000|GP-34** Series|AGP-3400T",
   "seriesXml": "GP3000 Series",
   "series": "GP3000",
   "group": "GP-34** Series",
   "name": "AGP-3400T",
   "offlineName": "",
   "form": "panel",
   "inch": 7.5,
   "resolution": "VGA",
   "resolutionPx": "640×480",
   "color": "Color",
   "touch": null,
   "ethernet": 1,
   "com": [
    {
     "port": "COM1",
     "type": "RS232C/RS422/485"
    },
    {
     "port": "COM2",
     "type": "RS422/485"
    }
   ],
   "usbA": 1,
   "usbMiniB": null,
   "usbMicroB": null,
   "cardSlot": true,
   "ftpXml": true,
   "webXml": true,
   "emailXml": null,
   "ezLanXml": null,
   "remoteHmiMaxXml": null,
   "appMemoryMB": 8.0,
   "appMemoryExpandedMB": null,
   "backupMemoryKB": 320.0,
   "revisions": [
    "Rev*-4>=: MemoryEnlargement=yes, GamenMemory=16, CsvDateFormat=yes"
   ],
   "firstSeen": "4.08",
   "inVersions": [
    "4.08",
    "4.09",
    "5.01"
   ],
   "versions": {
    "4.08": "full",
    "4.09": "full",
    "5.01": "open-only"
   },
   "statusLatest": "open-only",
   "features": {
    "remoteHmi": {
     "s": "no"
    },
    "gpViewer": {
     "s": "cond",
     "n": "需有 LAN 埠"
    },
    "proFaceConnect": {
     "s": "no"
    },
    "ftp": {
     "s": "yes"
    },
    "web": {
     "s": "ended"
    },
    "email": {
     "s": "no"
    },
    "ipsec": {
     "s": "no"
    },
    "ezLan": {
     "s": "no"
    }
   },
   "featureSrc": [
    "S_GPV_MODEL",
    "S_XML"
   ],
   "cutout": {
    "mount": "rect",
    "w": 204.5,
    "h": 159.5,
    "src": "S_C_GP3000"
   },
   "replace": [
    {
     "to": "GP6000 Standard 7 吋（PFXGP6400TA*）",
     "sameCutout": true,
     "src": "S_R_GP3400_GP6400"
    }
   ],
   "switches": [],
   "cable": null
  },
  {
   "key": "1B160000|GP-34** Series|AGP-3400T-CA1M",
   "seriesXml": "GP3000 Series",
   "series": "GP3000",
   "group": "GP-34** Series",
   "name": "AGP-3400T-CA1M",
   "offlineName": "",
   "form": "panel",
   "inch": 7.5,
   "resolution": "VGA",
   "resolutionPx": "640×480",
   "color": "Color",
   "touch": null,
   "ethernet": 1,
   "com": [
    {
     "port": "COM1",
     "type": "RS232C/RS422/485"
    },
    {
     "port": "COM2",
     "type": "RS422/485"
    }
   ],
   "usbA": 1,
   "usbMiniB": null,
   "usbMicroB": null,
   "cardSlot": true,
   "ftpXml": true,
   "webXml": true,
   "emailXml": null,
   "ezLanXml": null,
   "remoteHmiMaxXml": null,
   "appMemoryMB": 8.0,
   "appMemoryExpandedMB": null,
   "backupMemoryKB": 320.0,
   "revisions": [
    "Rev*-4>=: MemoryEnlargement=yes, GamenMemory=16, CsvDateFormat=yes"
   ],
   "firstSeen": "4.08",
   "inVersions": [
    "4.08",
    "4.09",
    "5.01"
   ],
   "versions": {
    "4.08": "full",
    "4.09": "full",
    "5.01": "open-only"
   },
   "statusLatest": "open-only",
   "features": {
    "remoteHmi": {
     "s": "no"
    },
    "gpViewer": {
     "s": "cond",
     "n": "需有 LAN 埠"
    },
    "proFaceConnect": {
     "s": "no"
    },
    "ftp": {
     "s": "yes"
    },
    "web": {
     "s": "ended"
    },
    "email": {
     "s": "no"
    },
    "ipsec": {
     "s": "no"
    },
    "ezLan": {
     "s": "no"
    }
   },
   "featureSrc": [
    "S_GPV_MODEL",
    "S_XML"
   ],
   "cutout": {
    "mount": "rect",
    "w": 204.5,
    "h": 159.5,
    "src": "S_C_GP3000"
   },
   "replace": [
    {
     "to": "GP6000 Standard 7 吋（PFXGP6400TA*）",
     "sameCutout": true,
     "src": "S_R_GP3400_GP6400"
    }
   ],
   "switches": [],
   "cable": null
  },
  {
   "key": "1B160000|GP-34** Series|AGP-3400T-D81",
   "seriesXml": "GP3000 Series",
   "series": "GP3000",
   "group": "GP-34** Series",
   "name": "AGP-3400T-D81",
   "offlineName": "",
   "form": "panel",
   "inch": 7.5,
   "resolution": "VGA",
   "resolutionPx": "640×480",
   "color": "Color",
   "touch": null,
   "ethernet": 1,
   "com": [
    {
     "port": "COM1",
     "type": "RS232C/RS422/485"
    },
    {
     "port": "COM2",
     "type": "RS422/485"
    }
   ],
   "usbA": 1,
   "usbMiniB": null,
   "usbMicroB": null,
   "cardSlot": true,
   "ftpXml": true,
   "webXml": true,
   "emailXml": null,
   "ezLanXml": null,
   "remoteHmiMaxXml": null,
   "appMemoryMB": 8.0,
   "appMemoryExpandedMB": null,
   "backupMemoryKB": 320.0,
   "revisions": [
    "Rev*-4>=: MemoryEnlargement=yes, GamenMemory=16, CsvDateFormat=yes"
   ],
   "firstSeen": "4.08",
   "inVersions": [
    "4.08",
    "4.09",
    "5.01"
   ],
   "versions": {
    "4.08": "full",
    "4.09": "full",
    "5.01": "open-only"
   },
   "statusLatest": "open-only",
   "features": {
    "remoteHmi": {
     "s": "no"
    },
    "gpViewer": {
     "s": "cond",
     "n": "需有 LAN 埠"
    },
    "proFaceConnect": {
     "s": "no"
    },
    "ftp": {
     "s": "yes"
    },
    "web": {
     "s": "ended"
    },
    "email": {
     "s": "no"
    },
    "ipsec": {
     "s": "no"
    },
    "ezLan": {
     "s": "no"
    }
   },
   "featureSrc": [
    "S_GPV_MODEL",
    "S_XML"
   ],
   "cutout": {
    "mount": "rect",
    "w": 204.5,
    "h": 159.5,
    "src": "S_C_GP3000"
   },
   "replace": [
    {
     "to": "GP6000 Standard 7 吋（PFXGP6400TA*）",
     "sameCutout": true,
     "src": "S_R_GP3400_GP6400"
    }
   ],
   "switches": [],
   "cable": null
  },
  {
   "key": "1B160000|GP-34** Series|AGP-3400T-FN1M",
   "seriesXml": "GP3000 Series",
   "series": "GP3000",
   "group": "GP-34** Series",
   "name": "AGP-3400T-FN1M",
   "offlineName": "",
   "form": "panel",
   "inch": 7.5,
   "resolution": "VGA",
   "resolutionPx": "640×480",
   "color": "Color",
   "touch": null,
   "ethernet": 1,
   "com": [
    {
     "port": "COM1",
     "type": "RS232C/RS422/485"
    },
    {
     "port": "COM2",
     "type": "RS422/485"
    }
   ],
   "usbA": 1,
   "usbMiniB": null,
   "usbMicroB": null,
   "cardSlot": true,
   "ftpXml": true,
   "webXml": true,
   "emailXml": null,
   "ezLanXml": null,
   "remoteHmiMaxXml": null,
   "appMemoryMB": 8.0,
   "appMemoryExpandedMB": null,
   "backupMemoryKB": 320.0,
   "revisions": [
    "Rev*-4>=: MemoryEnlargement=yes, GamenMemory=16, CsvDateFormat=yes"
   ],
   "firstSeen": "4.08",
   "inVersions": [
    "4.08",
    "4.09",
    "5.01"
   ],
   "versions": {
    "4.08": "full",
    "4.09": "full",
    "5.01": "open-only"
   },
   "statusLatest": "open-only",
   "features": {
    "remoteHmi": {
     "s": "no"
    },
    "gpViewer": {
     "s": "cond",
     "n": "需有 LAN 埠"
    },
    "proFaceConnect": {
     "s": "no"
    },
    "ftp": {
     "s": "yes"
    },
    "web": {
     "s": "ended"
    },
    "email": {
     "s": "no"
    },
    "ipsec": {
     "s": "no"
    },
    "ezLan": {
     "s": "no"
    }
   },
   "featureSrc": [
    "S_GPV_MODEL",
    "S_XML"
   ],
   "cutout": {
    "mount": "rect",
    "w": 204.5,
    "h": 159.5,
    "src": "S_C_GP3000"
   },
   "replace": [
    {
     "to": "GP6000 Standard 7 吋（PFXGP6400TA*）",
     "sameCutout": true,
     "src": "S_R_GP3400_GP6400"
    }
   ],
   "switches": [],
   "cable": null
  },
  {
   "key": "13160000|GP-34** Series|AGP-3450T",
   "seriesXml": "GP3000 Series",
   "series": "GP3000",
   "group": "GP-34** Series",
   "name": "AGP-3450T",
   "offlineName": "",
   "form": "panel",
   "inch": 7.5,
   "resolution": "VGA",
   "resolutionPx": "640×480",
   "color": "Color",
   "touch": null,
   "ethernet": 1,
   "com": [
    {
     "port": "COM1",
     "type": "RS232C/RS422/485"
    },
    {
     "port": "COM2",
     "type": "RS422/485"
    }
   ],
   "usbA": 2,
   "usbMiniB": null,
   "usbMicroB": null,
   "cardSlot": true,
   "ftpXml": true,
   "webXml": true,
   "emailXml": null,
   "ezLanXml": null,
   "remoteHmiMaxXml": null,
   "appMemoryMB": 10.0,
   "appMemoryExpandedMB": null,
   "backupMemoryKB": 320.0,
   "revisions": [],
   "firstSeen": "4.08",
   "inVersions": [
    "4.08",
    "4.09",
    "5.01"
   ],
   "versions": {
    "4.08": "full",
    "4.09": "full",
    "5.01": "open-only"
   },
   "statusLatest": "open-only",
   "features": {
    "remoteHmi": {
     "s": "no"
    },
    "gpViewer": {
     "s": "cond",
     "n": "需有 LAN 埠"
    },
    "proFaceConnect": {
     "s": "no"
    },
    "ftp": {
     "s": "yes"
    },
    "web": {
     "s": "ended"
    },
    "email": {
     "s": "no"
    },
    "ipsec": {
     "s": "no"
    },
    "ezLan": {
     "s": "no"
    }
   },
   "featureSrc": [
    "S_GPV_MODEL",
    "S_XML"
   ],
   "cutout": {
    "mount": "rect",
    "w": 204.5,
    "h": 159.5,
    "src": "S_C_GP3000"
   },
   "replace": [
    {
     "to": "GP6000 Standard 7 吋（PFXGP6400TA*）",
     "sameCutout": true,
     "src": "S_R_GP3400_GP6400"
    }
   ],
   "switches": [],
   "cable": null
  },
  {
   "key": "23120000|GP-35** Series|AGP-3500L",
   "seriesXml": "GP3000 Series",
   "series": "GP3000",
   "group": "GP-35** Series",
   "name": "AGP-3500L",
   "offlineName": "",
   "form": "panel",
   "inch": 10.4,
   "resolution": "VGA",
   "resolutionPx": "640×480",
   "color": "Mono",
   "touch": null,
   "ethernet": 1,
   "com": [
    {
     "port": "COM1",
     "type": "RS232C/RS422/485"
    },
    {
     "port": "COM2",
     "type": "RS422/485"
    }
   ],
   "usbA": 2,
   "usbMiniB": null,
   "usbMicroB": null,
   "cardSlot": true,
   "ftpXml": true,
   "webXml": true,
   "emailXml": null,
   "ezLanXml": null,
   "remoteHmiMaxXml": null,
   "appMemoryMB": 8.0,
   "appMemoryExpandedMB": null,
   "backupMemoryKB": 320.0,
   "revisions": [
    "Rev*-4>=: MemoryEnlargement=yes, GamenMemory=16, CsvDateFormat=yes"
   ],
   "firstSeen": "4.08",
   "inVersions": [
    "4.08",
    "4.09",
    "5.01"
   ],
   "versions": {
    "4.08": "full",
    "4.09": "full",
    "5.01": "open-only"
   },
   "statusLatest": "open-only",
   "features": {
    "remoteHmi": {
     "s": "no"
    },
    "gpViewer": {
     "s": "cond",
     "n": "需有 LAN 埠"
    },
    "proFaceConnect": {
     "s": "no"
    },
    "ftp": {
     "s": "yes"
    },
    "web": {
     "s": "ended"
    },
    "email": {
     "s": "no"
    },
    "ipsec": {
     "s": "no"
    },
    "ezLan": {
     "s": "no"
    }
   },
   "featureSrc": [
    "S_GPV_MODEL",
    "S_XML"
   ],
   "cutout": {
    "mount": "rect",
    "w": 301.5,
    "h": 227.5,
    "src": "S_C_GP3000"
   },
   "replace": [],
   "switches": [],
   "cable": null
  },
  {
   "key": "23120000|GP-35** Series|AGP-3500L-D81",
   "seriesXml": "GP3000 Series",
   "series": "GP3000",
   "group": "GP-35** Series",
   "name": "AGP-3500L-D81",
   "offlineName": "",
   "form": "panel",
   "inch": 10.4,
   "resolution": "VGA",
   "resolutionPx": "640×480",
   "color": "Mono",
   "touch": null,
   "ethernet": 1,
   "com": [
    {
     "port": "COM1",
     "type": "RS232C/RS422/485"
    },
    {
     "port": "COM2",
     "type": "RS422/485"
    }
   ],
   "usbA": 2,
   "usbMiniB": null,
   "usbMicroB": null,
   "cardSlot": true,
   "ftpXml": true,
   "webXml": true,
   "emailXml": null,
   "ezLanXml": null,
   "remoteHmiMaxXml": null,
   "appMemoryMB": 8.0,
   "appMemoryExpandedMB": null,
   "backupMemoryKB": 320.0,
   "revisions": [
    "Rev*-4>=: MemoryEnlargement=yes, GamenMemory=16, CsvDateFormat=yes"
   ],
   "firstSeen": "4.08",
   "inVersions": [
    "4.08",
    "4.09",
    "5.01"
   ],
   "versions": {
    "4.08": "full",
    "4.09": "full",
    "5.01": "open-only"
   },
   "statusLatest": "open-only",
   "features": {
    "remoteHmi": {
     "s": "no"
    },
    "gpViewer": {
     "s": "cond",
     "n": "需有 LAN 埠"
    },
    "proFaceConnect": {
     "s": "no"
    },
    "ftp": {
     "s": "yes"
    },
    "web": {
     "s": "ended"
    },
    "email": {
     "s": "no"
    },
    "ipsec": {
     "s": "no"
    },
    "ezLan": {
     "s": "no"
    }
   },
   "featureSrc": [
    "S_GPV_MODEL",
    "S_XML"
   ],
   "cutout": {
    "mount": "rect",
    "w": 301.5,
    "h": 227.5,
    "src": "S_C_GP3000"
   },
   "replace": [],
   "switches": [],
   "cable": null
  },
  {
   "key": "23150000|GP-35** Series|AGP-3500S",
   "seriesXml": "GP3000 Series",
   "series": "GP3000",
   "group": "GP-35** Series",
   "name": "AGP-3500S",
   "offlineName": "",
   "form": "panel",
   "inch": 10.4,
   "resolution": "VGA",
   "resolutionPx": "640×480",
   "color": "Color",
   "touch": null,
   "ethernet": 1,
   "com": [
    {
     "port": "COM1",
     "type": "RS232C/RS422/485"
    },
    {
     "port": "COM2",
     "type": "RS422/485"
    }
   ],
   "usbA": 2,
   "usbMiniB": null,
   "usbMicroB": null,
   "cardSlot": true,
   "ftpXml": true,
   "webXml": true,
   "emailXml": null,
   "ezLanXml": null,
   "remoteHmiMaxXml": null,
   "appMemoryMB": 8.0,
   "appMemoryExpandedMB": null,
   "backupMemoryKB": 320.0,
   "revisions": [
    "Rev*-4>=: MemoryEnlargement=yes, GamenMemory=16, CsvDateFormat=yes"
   ],
   "firstSeen": "4.08",
   "inVersions": [
    "4.08",
    "4.09",
    "5.01"
   ],
   "versions": {
    "4.08": "full",
    "4.09": "full",
    "5.01": "open-only"
   },
   "statusLatest": "open-only",
   "features": {
    "remoteHmi": {
     "s": "no"
    },
    "gpViewer": {
     "s": "cond",
     "n": "需有 LAN 埠"
    },
    "proFaceConnect": {
     "s": "no"
    },
    "ftp": {
     "s": "yes"
    },
    "web": {
     "s": "ended"
    },
    "email": {
     "s": "no"
    },
    "ipsec": {
     "s": "no"
    },
    "ezLan": {
     "s": "no"
    }
   },
   "featureSrc": [
    "S_GPV_MODEL",
    "S_XML"
   ],
   "cutout": {
    "mount": "rect",
    "w": 301.5,
    "h": 227.5,
    "src": "S_C_GP3000"
   },
   "replace": [],
   "switches": [],
   "cable": null
  },
  {
   "key": "23150000|GP-35** Series|AGP-3500S-CA1M",
   "seriesXml": "GP3000 Series",
   "series": "GP3000",
   "group": "GP-35** Series",
   "name": "AGP-3500S-CA1M",
   "offlineName": "",
   "form": "panel",
   "inch": 10.4,
   "resolution": "VGA",
   "resolutionPx": "640×480",
   "color": "Color",
   "touch": null,
   "ethernet": 1,
   "com": [
    {
     "port": "COM1",
     "type": "RS232C/RS422/485"
    },
    {
     "port": "COM2",
     "type": "RS422/485"
    }
   ],
   "usbA": 2,
   "usbMiniB": null,
   "usbMicroB": null,
   "cardSlot": true,
   "ftpXml": true,
   "webXml": true,
   "emailXml": null,
   "ezLanXml": null,
   "remoteHmiMaxXml": null,
   "appMemoryMB": 8.0,
   "appMemoryExpandedMB": null,
   "backupMemoryKB": 320.0,
   "revisions": [
    "Rev*-4>=: MemoryEnlargement=yes, GamenMemory=16, CsvDateFormat=yes"
   ],
   "firstSeen": "4.08",
   "inVersions": [
    "4.08",
    "4.09",
    "5.01"
   ],
   "versions": {
    "4.08": "full",
    "4.09": "full",
    "5.01": "open-only"
   },
   "statusLatest": "open-only",
   "features": {
    "remoteHmi": {
     "s": "no"
    },
    "gpViewer": {
     "s": "cond",
     "n": "需有 LAN 埠"
    },
    "proFaceConnect": {
     "s": "no"
    },
    "ftp": {
     "s": "yes"
    },
    "web": {
     "s": "ended"
    },
    "email": {
     "s": "no"
    },
    "ipsec": {
     "s": "no"
    },
    "ezLan": {
     "s": "no"
    }
   },
   "featureSrc": [
    "S_GPV_MODEL",
    "S_XML"
   ],
   "cutout": {
    "mount": "rect",
    "w": 301.5,
    "h": 227.5,
    "src": "S_C_GP3000"
   },
   "replace": [],
   "switches": [],
   "cable": null
  },
  {
   "key": "23150000|GP-35** Series|AGP-3500S-D81",
   "seriesXml": "GP3000 Series",
   "series": "GP3000",
   "group": "GP-35** Series",
   "name": "AGP-3500S-D81",
   "offlineName": "",
   "form": "panel",
   "inch": 10.4,
   "resolution": "VGA",
   "resolutionPx": "640×480",
   "color": "Color",
   "touch": null,
   "ethernet": 1,
   "com": [
    {
     "port": "COM1",
     "type": "RS232C/RS422/485"
    },
    {
     "port": "COM2",
     "type": "RS422/485"
    }
   ],
   "usbA": 2,
   "usbMiniB": null,
   "usbMicroB": null,
   "cardSlot": true,
   "ftpXml": true,
   "webXml": true,
   "emailXml": null,
   "ezLanXml": null,
   "remoteHmiMaxXml": null,
   "appMemoryMB": 8.0,
   "appMemoryExpandedMB": null,
   "backupMemoryKB": 320.0,
   "revisions": [
    "Rev*-4>=: MemoryEnlargement=yes, GamenMemory=16, CsvDateFormat=yes"
   ],
   "firstSeen": "4.08",
   "inVersions": [
    "4.08",
    "4.09",
    "5.01"
   ],
   "versions": {
    "4.08": "full",
    "4.09": "full",
    "5.01": "open-only"
   },
   "statusLatest": "open-only",
   "features": {
    "remoteHmi": {
     "s": "no"
    },
    "gpViewer": {
     "s": "cond",
     "n": "需有 LAN 埠"
    },
    "proFaceConnect": {
     "s": "no"
    },
    "ftp": {
     "s": "yes"
    },
    "web": {
     "s": "ended"
    },
    "email": {
     "s": "no"
    },
    "ipsec": {
     "s": "no"
    },
    "ezLan": {
     "s": "no"
    }
   },
   "featureSrc": [
    "S_GPV_MODEL",
    "S_XML"
   ],
   "cutout": {
    "mount": "rect",
    "w": 301.5,
    "h": 227.5,
    "src": "S_C_GP3000"
   },
   "replace": [],
   "switches": [],
   "cable": null
  },
  {
   "key": "37160000|GP-35** Series|AGP-3500T",
   "seriesXml": "GP3000 Series",
   "series": "GP3000",
   "group": "GP-35** Series",
   "name": "AGP-3500T",
   "offlineName": "",
   "form": "panel",
   "inch": 10.4,
   "resolution": "VGA",
   "resolutionPx": "640×480",
   "color": "Color",
   "touch": null,
   "ethernet": 1,
   "com": [
    {
     "port": "COM1",
     "type": "RS232C/RS422/485"
    },
    {
     "port": "COM2",
     "type": "RS422/485"
    }
   ],
   "usbA": 2,
   "usbMiniB": null,
   "usbMicroB": null,
   "cardSlot": true,
   "ftpXml": true,
   "webXml": true,
   "emailXml": null,
   "ezLanXml": null,
   "remoteHmiMaxXml": null,
   "appMemoryMB": 8.0,
   "appMemoryExpandedMB": null,
   "backupMemoryKB": 320.0,
   "revisions": [
    "Rev*-4>=: MemoryEnlargement=yes, GamenMemory=16, CsvDateFormat=yes"
   ],
   "firstSeen": "4.08",
   "inVersions": [
    "4.08",
    "4.09",
    "5.01"
   ],
   "versions": {
    "4.08": "full",
    "4.09": "full",
    "5.01": "open-only"
   },
   "statusLatest": "open-only",
   "features": {
    "remoteHmi": {
     "s": "no"
    },
    "gpViewer": {
     "s": "cond",
     "n": "需有 LAN 埠"
    },
    "proFaceConnect": {
     "s": "no"
    },
    "ftp": {
     "s": "yes"
    },
    "web": {
     "s": "ended"
    },
    "email": {
     "s": "no"
    },
    "ipsec": {
     "s": "no"
    },
    "ezLan": {
     "s": "no"
    }
   },
   "featureSrc": [
    "S_GPV_MODEL",
    "S_XML"
   ],
   "cutout": {
    "mount": "rect",
    "w": 259,
    "h": 201,
    "src": "S_C_GP3000"
   },
   "replace": [
    {
     "to": "GP6000 Standard 10 吋（PFXGP6500TA*）",
     "sameCutout": true,
     "src": "S_R_GP3500_GP6500"
    }
   ],
   "switches": [],
   "cable": null
  },
  {
   "key": "37160000|GP-35** Series|AGP-3500T-CA1M",
   "seriesXml": "GP3000 Series",
   "series": "GP3000",
   "group": "GP-35** Series",
   "name": "AGP-3500T-CA1M",
   "offlineName": "",
   "form": "panel",
   "inch": 10.4,
   "resolution": "VGA",
   "resolutionPx": "640×480",
   "color": "Color",
   "touch": null,
   "ethernet": 1,
   "com": [
    {
     "port": "COM1",
     "type": "RS232C/RS422/485"
    },
    {
     "port": "COM2",
     "type": "RS422/485"
    }
   ],
   "usbA": 2,
   "usbMiniB": null,
   "usbMicroB": null,
   "cardSlot": true,
   "ftpXml": true,
   "webXml": true,
   "emailXml": null,
   "ezLanXml": null,
   "remoteHmiMaxXml": null,
   "appMemoryMB": 8.0,
   "appMemoryExpandedMB": null,
   "backupMemoryKB": 320.0,
   "revisions": [
    "Rev*-4>=: MemoryEnlargement=yes, GamenMemory=16, CsvDateFormat=yes"
   ],
   "firstSeen": "4.08",
   "inVersions": [
    "4.08",
    "4.09",
    "5.01"
   ],
   "versions": {
    "4.08": "full",
    "4.09": "full",
    "5.01": "open-only"
   },
   "statusLatest": "open-only",
   "features": {
    "remoteHmi": {
     "s": "no"
    },
    "gpViewer": {
     "s": "cond",
     "n": "需有 LAN 埠"
    },
    "proFaceConnect": {
     "s": "no"
    },
    "ftp": {
     "s": "yes"
    },
    "web": {
     "s": "ended"
    },
    "email": {
     "s": "no"
    },
    "ipsec": {
     "s": "no"
    },
    "ezLan": {
     "s": "no"
    }
   },
   "featureSrc": [
    "S_GPV_MODEL",
    "S_XML"
   ],
   "cutout": {
    "mount": "rect",
    "w": 259,
    "h": 201,
    "src": "S_C_GP3000"
   },
   "replace": [
    {
     "to": "GP6000 Standard 10 吋（PFXGP6500TA*）",
     "sameCutout": true,
     "src": "S_R_GP3500_GP6500"
    }
   ],
   "switches": [],
   "cable": null
  },
  {
   "key": "37160000|GP-35** Series|AGP-3500T-D81",
   "seriesXml": "GP3000 Series",
   "series": "GP3000",
   "group": "GP-35** Series",
   "name": "AGP-3500T-D81",
   "offlineName": "",
   "form": "panel",
   "inch": 10.4,
   "resolution": "VGA",
   "resolutionPx": "640×480",
   "color": "Color",
   "touch": null,
   "ethernet": 1,
   "com": [
    {
     "port": "COM1",
     "type": "RS232C/RS422/485"
    },
    {
     "port": "COM2",
     "type": "RS422/485"
    }
   ],
   "usbA": 2,
   "usbMiniB": null,
   "usbMicroB": null,
   "cardSlot": true,
   "ftpXml": true,
   "webXml": true,
   "emailXml": null,
   "ezLanXml": null,
   "remoteHmiMaxXml": null,
   "appMemoryMB": 8.0,
   "appMemoryExpandedMB": null,
   "backupMemoryKB": 320.0,
   "revisions": [
    "Rev*-4>=: MemoryEnlargement=yes, GamenMemory=16, CsvDateFormat=yes"
   ],
   "firstSeen": "4.08",
   "inVersions": [
    "4.08",
    "4.09",
    "5.01"
   ],
   "versions": {
    "4.08": "full",
    "4.09": "full",
    "5.01": "open-only"
   },
   "statusLatest": "open-only",
   "features": {
    "remoteHmi": {
     "s": "no"
    },
    "gpViewer": {
     "s": "cond",
     "n": "需有 LAN 埠"
    },
    "proFaceConnect": {
     "s": "no"
    },
    "ftp": {
     "s": "yes"
    },
    "web": {
     "s": "ended"
    },
    "email": {
     "s": "no"
    },
    "ipsec": {
     "s": "no"
    },
    "ezLan": {
     "s": "no"
    }
   },
   "featureSrc": [
    "S_GPV_MODEL",
    "S_XML"
   ],
   "cutout": {
    "mount": "rect",
    "w": 259,
    "h": 201,
    "src": "S_C_GP3000"
   },
   "replace": [
    {
     "to": "GP6000 Standard 10 吋（PFXGP6500TA*）",
     "sameCutout": true,
     "src": "S_R_GP3500_GP6500"
    }
   ],
   "switches": [],
   "cable": null
  },
  {
   "key": "37160000|GP-35** Series|AGP-3500T-FN1M",
   "seriesXml": "GP3000 Series",
   "series": "GP3000",
   "group": "GP-35** Series",
   "name": "AGP-3500T-FN1M",
   "offlineName": "",
   "form": "panel",
   "inch": 10.4,
   "resolution": "VGA",
   "resolutionPx": "640×480",
   "color": "Color",
   "touch": null,
   "ethernet": 1,
   "com": [
    {
     "port": "COM1",
     "type": "RS232C/RS422/485"
    },
    {
     "port": "COM2",
     "type": "RS422/485"
    }
   ],
   "usbA": 2,
   "usbMiniB": null,
   "usbMicroB": null,
   "cardSlot": true,
   "ftpXml": true,
   "webXml": true,
   "emailXml": null,
   "ezLanXml": null,
   "remoteHmiMaxXml": null,
   "appMemoryMB": 8.0,
   "appMemoryExpandedMB": null,
   "backupMemoryKB": 320.0,
   "revisions": [
    "Rev*-4>=: MemoryEnlargement=yes, GamenMemory=16, CsvDateFormat=yes"
   ],
   "firstSeen": "4.08",
   "inVersions": [
    "4.08",
    "4.09",
    "5.01"
   ],
   "versions": {
    "4.08": "full",
    "4.09": "full",
    "5.01": "open-only"
   },
   "statusLatest": "open-only",
   "features": {
    "remoteHmi": {
     "s": "no"
    },
    "gpViewer": {
     "s": "cond",
     "n": "需有 LAN 埠"
    },
    "proFaceConnect": {
     "s": "no"
    },
    "ftp": {
     "s": "yes"
    },
    "web": {
     "s": "ended"
    },
    "email": {
     "s": "no"
    },
    "ipsec": {
     "s": "no"
    },
    "ezLan": {
     "s": "no"
    }
   },
   "featureSrc": [
    "S_GPV_MODEL",
    "S_XML"
   ],
   "cutout": {
    "mount": "rect",
    "w": 259,
    "h": 201,
    "src": "S_C_GP3000"
   },
   "replace": [
    {
     "to": "GP6000 Standard 10 吋（PFXGP6500TA*）",
     "sameCutout": true,
     "src": "S_R_GP3500_GP6500"
    }
   ],
   "switches": [],
   "cable": null
  },
  {
   "key": "77260000|GP-35** Series|AGP-3510T",
   "seriesXml": "GP3000 Series",
   "series": "GP3000",
   "group": "GP-35** Series",
   "name": "AGP-3510T",
   "offlineName": "",
   "form": "panel",
   "inch": 10.4,
   "resolution": "SVGA",
   "resolutionPx": "800×600",
   "color": "Color",
   "touch": null,
   "ethernet": 1,
   "com": [
    {
     "port": "COM1",
     "type": "RS232C/RS422/485"
    },
    {
     "port": "COM2",
     "type": "RS422/485"
    }
   ],
   "usbA": 2,
   "usbMiniB": null,
   "usbMicroB": null,
   "cardSlot": true,
   "ftpXml": true,
   "webXml": true,
   "emailXml": null,
   "ezLanXml": null,
   "remoteHmiMaxXml": null,
   "appMemoryMB": 8.0,
   "appMemoryExpandedMB": null,
   "backupMemoryKB": 320.0,
   "revisions": [
    "Rev*-4>=: MemoryEnlargement=yes, GamenMemory=16, CsvDateFormat=yes"
   ],
   "firstSeen": "4.08",
   "inVersions": [
    "4.08",
    "4.09",
    "5.01"
   ],
   "versions": {
    "4.08": "full",
    "4.09": "full",
    "5.01": "open-only"
   },
   "statusLatest": "open-only",
   "features": {
    "remoteHmi": {
     "s": "no"
    },
    "gpViewer": {
     "s": "cond",
     "n": "需有 LAN 埠"
    },
    "proFaceConnect": {
     "s": "no"
    },
    "ftp": {
     "s": "yes"
    },
    "web": {
     "s": "ended"
    },
    "email": {
     "s": "no"
    },
    "ipsec": {
     "s": "no"
    },
    "ezLan": {
     "s": "no"
    }
   },
   "featureSrc": [
    "S_GPV_MODEL",
    "S_XML"
   ],
   "cutout": {
    "mount": "rect",
    "w": 259,
    "h": 201,
    "src": "S_C_GP3000"
   },
   "replace": [
    {
     "to": "GP6000 Standard 10 吋（PFXGP6500TA*）",
     "sameCutout": true,
     "src": "S_R_GP3500_GP6500"
    }
   ],
   "switches": [],
   "cable": null
  },
  {
   "key": "77260000|GP-35** Series|AGP-3510T-CA1M",
   "seriesXml": "GP3000 Series",
   "series": "GP3000",
   "group": "GP-35** Series",
   "name": "AGP-3510T-CA1M",
   "offlineName": "",
   "form": "panel",
   "inch": 10.4,
   "resolution": "SVGA",
   "resolutionPx": "800×600",
   "color": "Color",
   "touch": null,
   "ethernet": 1,
   "com": [
    {
     "port": "COM1",
     "type": "RS232C/RS422/485"
    },
    {
     "port": "COM2",
     "type": "RS422/485"
    }
   ],
   "usbA": 2,
   "usbMiniB": null,
   "usbMicroB": null,
   "cardSlot": true,
   "ftpXml": true,
   "webXml": true,
   "emailXml": null,
   "ezLanXml": null,
   "remoteHmiMaxXml": null,
   "appMemoryMB": 8.0,
   "appMemoryExpandedMB": null,
   "backupMemoryKB": 320.0,
   "revisions": [
    "Rev*-4>=: MemoryEnlargement=yes, GamenMemory=16, CsvDateFormat=yes"
   ],
   "firstSeen": "4.08",
   "inVersions": [
    "4.08",
    "4.09",
    "5.01"
   ],
   "versions": {
    "4.08": "full",
    "4.09": "full",
    "5.01": "open-only"
   },
   "statusLatest": "open-only",
   "features": {
    "remoteHmi": {
     "s": "no"
    },
    "gpViewer": {
     "s": "cond",
     "n": "需有 LAN 埠"
    },
    "proFaceConnect": {
     "s": "no"
    },
    "ftp": {
     "s": "yes"
    },
    "web": {
     "s": "ended"
    },
    "email": {
     "s": "no"
    },
    "ipsec": {
     "s": "no"
    },
    "ezLan": {
     "s": "no"
    }
   },
   "featureSrc": [
    "S_GPV_MODEL",
    "S_XML"
   ],
   "cutout": {
    "mount": "rect",
    "w": 259,
    "h": 201,
    "src": "S_C_GP3000"
   },
   "replace": [
    {
     "to": "GP6000 Standard 10 吋（PFXGP6500TA*）",
     "sameCutout": true,
     "src": "S_R_GP3500_GP6500"
    }
   ],
   "switches": [],
   "cable": null
  },
  {
   "key": "2B160000|GP-35** Series|AGP-3550T",
   "seriesXml": "GP3000 Series",
   "series": "GP3000",
   "group": "GP-35** Series",
   "name": "AGP-3550T",
   "offlineName": "",
   "form": "panel",
   "inch": 10.4,
   "resolution": "VGA",
   "resolutionPx": "640×480",
   "color": "Color",
   "touch": null,
   "ethernet": 1,
   "com": [
    {
     "port": "COM1",
     "type": "RS232C/RS422/485"
    },
    {
     "port": "COM2",
     "type": "RS422/485"
    }
   ],
   "usbA": 2,
   "usbMiniB": null,
   "usbMicroB": null,
   "cardSlot": true,
   "ftpXml": true,
   "webXml": true,
   "emailXml": null,
   "ezLanXml": null,
   "remoteHmiMaxXml": null,
   "appMemoryMB": 10.0,
   "appMemoryExpandedMB": null,
   "backupMemoryKB": 320.0,
   "revisions": [],
   "firstSeen": "4.08",
   "inVersions": [
    "4.08",
    "4.09",
    "5.01"
   ],
   "versions": {
    "4.08": "full",
    "4.09": "full",
    "5.01": "open-only"
   },
   "statusLatest": "open-only",
   "features": {
    "remoteHmi": {
     "s": "no"
    },
    "gpViewer": {
     "s": "cond",
     "n": "需有 LAN 埠"
    },
    "proFaceConnect": {
     "s": "no"
    },
    "ftp": {
     "s": "yes"
    },
    "web": {
     "s": "ended"
    },
    "email": {
     "s": "no"
    },
    "ipsec": {
     "s": "no"
    },
    "ezLan": {
     "s": "no"
    }
   },
   "featureSrc": [
    "S_GPV_MODEL",
    "S_XML"
   ],
   "cutout": {
    "mount": "rect",
    "w": 259,
    "h": 201,
    "src": "S_C_GP3000"
   },
   "replace": [],
   "switches": [],
   "cable": null
  },
  {
   "key": "6B260000|GP-35** Series|AGP-3560T",
   "seriesXml": "GP3000 Series",
   "series": "GP3000",
   "group": "GP-35** Series",
   "name": "AGP-3560T",
   "offlineName": "",
   "form": "panel",
   "inch": 10.4,
   "resolution": "SVGA",
   "resolutionPx": "800×600",
   "color": "Color",
   "touch": null,
   "ethernet": 1,
   "com": [
    {
     "port": "COM1",
     "type": "RS232C/RS422/485"
    },
    {
     "port": "COM2",
     "type": "RS422/485"
    }
   ],
   "usbA": 2,
   "usbMiniB": null,
   "usbMicroB": null,
   "cardSlot": true,
   "ftpXml": true,
   "webXml": true,
   "emailXml": null,
   "ezLanXml": null,
   "remoteHmiMaxXml": null,
   "appMemoryMB": 10.0,
   "appMemoryExpandedMB": null,
   "backupMemoryKB": 320.0,
   "revisions": [],
   "firstSeen": "4.08",
   "inVersions": [
    "4.08",
    "4.09",
    "5.01"
   ],
   "versions": {
    "4.08": "full",
    "4.09": "full",
    "5.01": "open-only"
   },
   "statusLatest": "open-only",
   "features": {
    "remoteHmi": {
     "s": "no"
    },
    "gpViewer": {
     "s": "cond",
     "n": "需有 LAN 埠"
    },
    "proFaceConnect": {
     "s": "no"
    },
    "ftp": {
     "s": "yes"
    },
    "web": {
     "s": "ended"
    },
    "email": {
     "s": "no"
    },
    "ipsec": {
     "s": "no"
    },
    "ezLan": {
     "s": "no"
    }
   },
   "featureSrc": [
    "S_GPV_MODEL",
    "S_XML"
   ],
   "cutout": {
    "mount": "rect",
    "w": 259,
    "h": 201,
    "src": "S_C_GP3000"
   },
   "replace": [],
   "switches": [],
   "cable": null
  },
  {
   "key": "27260000|GP-36** Series|AGP-3600T",
   "seriesXml": "GP3000 Series",
   "series": "GP3000",
   "group": "GP-36** Series",
   "name": "AGP-3600T",
   "offlineName": "",
   "form": "panel",
   "inch": 12.1,
   "resolution": "SVGA",
   "resolutionPx": "800×600",
   "color": "Color",
   "touch": null,
   "ethernet": 1,
   "com": [
    {
     "port": "COM1",
     "type": "RS232C/RS422/485"
    },
    {
     "port": "COM2",
     "type": "RS422/485"
    }
   ],
   "usbA": 2,
   "usbMiniB": null,
   "usbMicroB": null,
   "cardSlot": true,
   "ftpXml": true,
   "webXml": true,
   "emailXml": null,
   "ezLanXml": null,
   "remoteHmiMaxXml": null,
   "appMemoryMB": 8.0,
   "appMemoryExpandedMB": null,
   "backupMemoryKB": 320.0,
   "revisions": [
    "Rev*-4>=: MemoryEnlargement=yes, GamenMemory=16, CsvDateFormat=yes"
   ],
   "firstSeen": "4.08",
   "inVersions": [
    "4.08",
    "4.09",
    "5.01"
   ],
   "versions": {
    "4.08": "full",
    "4.09": "full",
    "5.01": "open-only"
   },
   "statusLatest": "open-only",
   "features": {
    "remoteHmi": {
     "s": "no"
    },
    "gpViewer": {
     "s": "cond",
     "n": "需有 LAN 埠"
    },
    "proFaceConnect": {
     "s": "no"
    },
    "ftp": {
     "s": "yes"
    },
    "web": {
     "s": "ended"
    },
    "email": {
     "s": "no"
    },
    "ipsec": {
     "s": "no"
    },
    "ezLan": {
     "s": "no"
    }
   },
   "featureSrc": [
    "S_GPV_MODEL",
    "S_XML"
   ],
   "cutout": {
    "mount": "rect",
    "w": 301.5,
    "h": 227.5,
    "src": "S_C_GP3000"
   },
   "replace": [],
   "switches": [],
   "cable": null
  },
  {
   "key": "27260000|GP-36** Series|AGP-3600T-D81",
   "seriesXml": "GP3000 Series",
   "series": "GP3000",
   "group": "GP-36** Series",
   "name": "AGP-3600T-D81",
   "offlineName": "",
   "form": "panel",
   "inch": 12.1,
   "resolution": "SVGA",
   "resolutionPx": "800×600",
   "color": "Color",
   "touch": null,
   "ethernet": 1,
   "com": [
    {
     "port": "COM1",
     "type": "RS232C/RS422/485"
    },
    {
     "port": "COM2",
     "type": "RS422/485"
    }
   ],
   "usbA": 2,
   "usbMiniB": null,
   "usbMicroB": null,
   "cardSlot": true,
   "ftpXml": true,
   "webXml": true,
   "emailXml": null,
   "ezLanXml": null,
   "remoteHmiMaxXml": null,
   "appMemoryMB": 8.0,
   "appMemoryExpandedMB": null,
   "backupMemoryKB": 320.0,
   "revisions": [
    "Rev*-4>=: MemoryEnlargement=yes, GamenMemory=16, CsvDateFormat=yes"
   ],
   "firstSeen": "4.08",
   "inVersions": [
    "4.08",
    "4.09",
    "5.01"
   ],
   "versions": {
    "4.08": "full",
    "4.09": "full",
    "5.01": "open-only"
   },
   "statusLatest": "open-only",
   "features": {
    "remoteHmi": {
     "s": "no"
    },
    "gpViewer": {
     "s": "cond",
     "n": "需有 LAN 埠"
    },
    "proFaceConnect": {
     "s": "no"
    },
    "ftp": {
     "s": "yes"
    },
    "web": {
     "s": "ended"
    },
    "email": {
     "s": "no"
    },
    "ipsec": {
     "s": "no"
    },
    "ezLan": {
     "s": "no"
    }
   },
   "featureSrc": [
    "S_GPV_MODEL",
    "S_XML"
   ],
   "cutout": {
    "mount": "rect",
    "w": 301.5,
    "h": 227.5,
    "src": "S_C_GP3000"
   },
   "replace": [],
   "switches": [],
   "cable": null
  },
  {
   "key": "27260000|GP-36** Series|AGP-3600T-FN1M",
   "seriesXml": "GP3000 Series",
   "series": "GP3000",
   "group": "GP-36** Series",
   "name": "AGP-3600T-FN1M",
   "offlineName": "",
   "form": "panel",
   "inch": 12.1,
   "resolution": "SVGA",
   "resolutionPx": "800×600",
   "color": "Color",
   "touch": null,
   "ethernet": 1,
   "com": [
    {
     "port": "COM1",
     "type": "RS232C/RS422/485"
    },
    {
     "port": "COM2",
     "type": "RS422/485"
    }
   ],
   "usbA": 2,
   "usbMiniB": null,
   "usbMicroB": null,
   "cardSlot": true,
   "ftpXml": true,
   "webXml": true,
   "emailXml": null,
   "ezLanXml": null,
   "remoteHmiMaxXml": null,
   "appMemoryMB": 8.0,
   "appMemoryExpandedMB": null,
   "backupMemoryKB": 320.0,
   "revisions": [
    "Rev*-4>=: MemoryEnlargement=yes, GamenMemory=16, CsvDateFormat=yes"
   ],
   "firstSeen": "4.08",
   "inVersions": [
    "4.08",
    "4.09",
    "5.01"
   ],
   "versions": {
    "4.08": "full",
    "4.09": "full",
    "5.01": "open-only"
   },
   "statusLatest": "open-only",
   "features": {
    "remoteHmi": {
     "s": "no"
    },
    "gpViewer": {
     "s": "cond",
     "n": "需有 LAN 埠"
    },
    "proFaceConnect": {
     "s": "no"
    },
    "ftp": {
     "s": "yes"
    },
    "web": {
     "s": "ended"
    },
    "email": {
     "s": "no"
    },
    "ipsec": {
     "s": "no"
    },
    "ezLan": {
     "s": "no"
    }
   },
   "featureSrc": [
    "S_GPV_MODEL",
    "S_XML"
   ],
   "cutout": {
    "mount": "rect",
    "w": 301.5,
    "h": 227.5,
    "src": "S_C_GP3000"
   },
   "replace": [],
   "switches": [],
   "cable": null
  },
  {
   "key": "27260000|GP-36** Series|AGP-3600T/U-CA1M",
   "seriesXml": "GP3000 Series",
   "series": "GP3000",
   "group": "GP-36** Series",
   "name": "AGP-3600T/U-CA1M",
   "offlineName": "",
   "form": "panel",
   "inch": 12.1,
   "resolution": "SVGA",
   "resolutionPx": "800×600",
   "color": "Color",
   "touch": null,
   "ethernet": 1,
   "com": [
    {
     "port": "COM1",
     "type": "RS232C/RS422/485"
    },
    {
     "port": "COM2",
     "type": "RS422/485"
    }
   ],
   "usbA": 2,
   "usbMiniB": null,
   "usbMicroB": null,
   "cardSlot": true,
   "ftpXml": true,
   "webXml": true,
   "emailXml": null,
   "ezLanXml": null,
   "remoteHmiMaxXml": null,
   "appMemoryMB": 8.0,
   "appMemoryExpandedMB": null,
   "backupMemoryKB": 320.0,
   "revisions": [
    "Rev*-4>=: MemoryEnlargement=yes, GamenMemory=16, CsvDateFormat=yes"
   ],
   "firstSeen": "4.08",
   "inVersions": [
    "4.08",
    "4.09",
    "5.01"
   ],
   "versions": {
    "4.08": "full",
    "4.09": "full",
    "5.01": "open-only"
   },
   "statusLatest": "open-only",
   "features": {
    "remoteHmi": {
     "s": "no"
    },
    "gpViewer": {
     "s": "cond",
     "n": "需有 LAN 埠"
    },
    "proFaceConnect": {
     "s": "no"
    },
    "ftp": {
     "s": "yes"
    },
    "web": {
     "s": "ended"
    },
    "email": {
     "s": "no"
    },
    "ipsec": {
     "s": "no"
    },
    "ezLan": {
     "s": "no"
    }
   },
   "featureSrc": [
    "S_GPV_MODEL",
    "S_XML"
   ],
   "cutout": {
    "mount": "rect",
    "w": 301.5,
    "h": 227.5,
    "src": "S_C_GP3000"
   },
   "replace": [],
   "switches": [],
   "cable": null
  },
  {
   "key": "2F260000|GP-36** Series|AGP-3650T/U",
   "seriesXml": "GP3000 Series",
   "series": "GP3000",
   "group": "GP-36** Series",
   "name": "AGP-3650T/U",
   "offlineName": "",
   "form": "panel",
   "inch": 12.1,
   "resolution": "SVGA",
   "resolutionPx": "800×600",
   "color": "Color",
   "touch": null,
   "ethernet": 1,
   "com": [
    {
     "port": "COM1",
     "type": "RS232C/RS422/485"
    },
    {
     "port": "COM2",
     "type": "RS422/485"
    }
   ],
   "usbA": 2,
   "usbMiniB": null,
   "usbMicroB": null,
   "cardSlot": true,
   "ftpXml": true,
   "webXml": true,
   "emailXml": null,
   "ezLanXml": null,
   "remoteHmiMaxXml": null,
   "appMemoryMB": 10.0,
   "appMemoryExpandedMB": null,
   "backupMemoryKB": 320.0,
   "revisions": [],
   "firstSeen": "4.08",
   "inVersions": [
    "4.08",
    "4.09",
    "5.01"
   ],
   "versions": {
    "4.08": "full",
    "4.09": "full",
    "5.01": "open-only"
   },
   "statusLatest": "open-only",
   "features": {
    "remoteHmi": {
     "s": "no"
    },
    "gpViewer": {
     "s": "cond",
     "n": "需有 LAN 埠"
    },
    "proFaceConnect": {
     "s": "no"
    },
    "ftp": {
     "s": "yes"
    },
    "web": {
     "s": "ended"
    },
    "email": {
     "s": "no"
    },
    "ipsec": {
     "s": "no"
    },
    "ezLan": {
     "s": "no"
    }
   },
   "featureSrc": [
    "S_GPV_MODEL",
    "S_XML"
   ],
   "cutout": {
    "mount": "rect",
    "w": 301.5,
    "h": 227.5,
    "src": "S_C_GP3000"
   },
   "replace": [],
   "switches": [],
   "cable": null
  },
  {
   "key": "332E0000|GP-37** Series|AGP-3750T",
   "seriesXml": "GP3000 Series",
   "series": "GP3000",
   "group": "GP-37** Series",
   "name": "AGP-3750T",
   "offlineName": "",
   "form": "panel",
   "inch": 15.0,
   "resolution": "XGA",
   "resolutionPx": "1024×768",
   "color": "Color",
   "touch": null,
   "ethernet": 1,
   "com": [
    {
     "port": "COM1",
     "type": "RS232C/RS422/485"
    },
    {
     "port": "COM2",
     "type": "RS422/485"
    }
   ],
   "usbA": 2,
   "usbMiniB": null,
   "usbMicroB": null,
   "cardSlot": true,
   "ftpXml": true,
   "webXml": true,
   "emailXml": null,
   "ezLanXml": null,
   "remoteHmiMaxXml": null,
   "appMemoryMB": 10.0,
   "appMemoryExpandedMB": null,
   "backupMemoryKB": 320.0,
   "revisions": [],
   "firstSeen": "4.08",
   "inVersions": [
    "4.08",
    "4.09",
    "5.01"
   ],
   "versions": {
    "4.08": "full",
    "4.09": "full",
    "5.01": "open-only"
   },
   "statusLatest": "open-only",
   "features": {
    "remoteHmi": {
     "s": "no"
    },
    "gpViewer": {
     "s": "cond",
     "n": "需有 LAN 埠"
    },
    "proFaceConnect": {
     "s": "no"
    },
    "ftp": {
     "s": "yes"
    },
    "web": {
     "s": "ended"
    },
    "email": {
     "s": "no"
    },
    "ipsec": {
     "s": "no"
    },
    "ezLan": {
     "s": "no"
    }
   },
   "featureSrc": [
    "S_GPV_MODEL",
    "S_XML"
   ],
   "cutout": {
    "mount": "rect",
    "w": 383.5,
    "h": 282.5,
    "src": "S_C_GP3000"
   },
   "replace": [
    {
     "to": "SP-5700TP + SP-5B10（M class 停產公告）",
     "sameCutout": true,
     "src": "S_R_GP3000M_SP5000"
    }
   ],
   "switches": [],
   "cable": null
  },
  {
   "key": "43010100|LT-32** Series|LT-3201A",
   "seriesXml": "LT3000 Series",
   "series": "LT3000",
   "group": "LT-32** Series",
   "name": "LT-3201A",
   "offlineName": "",
   "form": "panel",
   "inch": 3.8,
   "resolution": "QVGA",
   "resolutionPx": "320×240",
   "color": "Mono",
   "touch": null,
   "ethernet": 0,
   "com": [],
   "usbA": 1,
   "usbMiniB": null,
   "usbMicroB": null,
   "cardSlot": false,
   "ftpXml": false,
   "webXml": false,
   "emailXml": null,
   "ezLanXml": null,
   "remoteHmiMaxXml": null,
   "appMemoryMB": 6.0,
   "appMemoryExpandedMB": null,
   "backupMemoryKB": 128.0,
   "revisions": [],
   "firstSeen": "4.08",
   "inVersions": [
    "4.08",
    "4.09",
    "5.01"
   ],
   "versions": {
    "4.08": "full",
    "4.09": "full",
    "5.01": "open-only"
   },
   "statusLatest": "open-only",
   "features": {
    "remoteHmi": {
     "s": "no"
    },
    "gpViewer": {
     "s": "cond",
     "n": "限 Ethernet 機種"
    },
    "proFaceConnect": {
     "s": "no"
    },
    "ftp": {
     "s": "no"
    },
    "web": {
     "s": "no"
    },
    "email": {
     "s": "no"
    },
    "ipsec": {
     "s": "no"
    },
    "ezLan": {
     "s": "no"
    }
   },
   "featureSrc": [
    "S_GPV_MODEL"
   ],
   "cutout": {
    "mount": "rect",
    "w": 118.5,
    "h": 92.5,
    "src": "S_R_LT3201A"
   },
   "replace": [
    {
     "to": "LT-4201TM（LT4000M 模組型）",
     "sameCutout": false,
     "src": "S_R_LT3201A",
     "n": "開口由 118.5×92.5 方孔改為 φ22 圓孔"
    }
   ],
   "switches": [],
   "cable": null
  },
  {
   "key": "47010100|LT-33** Series|LT-3300L",
   "seriesXml": "LT3000 Series",
   "series": "LT3000",
   "group": "LT-33** Series",
   "name": "LT-3300L",
   "offlineName": "",
   "form": "panel",
   "inch": 5.7,
   "resolution": "QVGA",
   "resolutionPx": "320×240",
   "color": "Mono",
   "touch": null,
   "ethernet": 1,
   "com": [
    {
     "port": "COM1",
     "type": "RS232C/RS422/485"
    }
   ],
   "usbA": 1,
   "usbMiniB": null,
   "usbMicroB": null,
   "cardSlot": false,
   "ftpXml": false,
   "webXml": false,
   "emailXml": null,
   "ezLanXml": null,
   "remoteHmiMaxXml": null,
   "appMemoryMB": 6.0,
   "appMemoryExpandedMB": null,
   "backupMemoryKB": 128.0,
   "revisions": [],
   "firstSeen": "4.08",
   "inVersions": [
    "4.08",
    "4.09",
    "5.01"
   ],
   "versions": {
    "4.08": "full",
    "4.09": "full",
    "5.01": "open-only"
   },
   "statusLatest": "open-only",
   "features": {
    "remoteHmi": {
     "s": "no"
    },
    "gpViewer": {
     "s": "cond",
     "n": "限 Ethernet 機種"
    },
    "proFaceConnect": {
     "s": "no"
    },
    "ftp": {
     "s": "no"
    },
    "web": {
     "s": "no"
    },
    "email": {
     "s": "no"
    },
    "ipsec": {
     "s": "no"
    },
    "ezLan": {
     "s": "no"
    }
   },
   "featureSrc": [
    "S_GPV_MODEL"
   ],
   "cutout": {
    "mount": "rect",
    "w": 156,
    "h": 123.5,
    "t": "1.6～5",
    "src": "S_C_LT3000"
   },
   "replace": [],
   "switches": [],
   "cable": null
  },
  {
   "key": "47040100|LT-33** Series|LT-3300S",
   "seriesXml": "LT3000 Series",
   "series": "LT3000",
   "group": "LT-33** Series",
   "name": "LT-3300S",
   "offlineName": "",
   "form": "panel",
   "inch": 5.7,
   "resolution": "QVGA",
   "resolutionPx": "320×240",
   "color": "Color",
   "touch": null,
   "ethernet": 1,
   "com": [
    {
     "port": "COM1",
     "type": "RS232C/RS422/485"
    }
   ],
   "usbA": 1,
   "usbMiniB": null,
   "usbMicroB": null,
   "cardSlot": false,
   "ftpXml": false,
   "webXml": false,
   "emailXml": null,
   "ezLanXml": null,
   "remoteHmiMaxXml": null,
   "appMemoryMB": 6.0,
   "appMemoryExpandedMB": null,
   "backupMemoryKB": 128.0,
   "revisions": [],
   "firstSeen": "4.08",
   "inVersions": [
    "4.08",
    "4.09",
    "5.01"
   ],
   "versions": {
    "4.08": "full",
    "4.09": "full",
    "5.01": "open-only"
   },
   "statusLatest": "open-only",
   "features": {
    "remoteHmi": {
     "s": "no"
    },
    "gpViewer": {
     "s": "cond",
     "n": "限 Ethernet 機種"
    },
    "proFaceConnect": {
     "s": "no"
    },
    "ftp": {
     "s": "no"
    },
    "web": {
     "s": "no"
    },
    "email": {
     "s": "no"
    },
    "ipsec": {
     "s": "no"
    },
    "ezLan": {
     "s": "no"
    }
   },
   "featureSrc": [
    "S_GPV_MODEL"
   ],
   "cutout": {
    "mount": "rect",
    "w": 156,
    "h": 123.5,
    "t": "1.6～5",
    "src": "S_C_LT3000"
   },
   "replace": [],
   "switches": [],
   "cable": null
  },
  {
   "key": "47060100|LT-33** Series|LT-3300T",
   "seriesXml": "LT3000 Series",
   "series": "LT3000",
   "group": "LT-33** Series",
   "name": "LT-3300T",
   "offlineName": "",
   "form": "panel",
   "inch": 5.7,
   "resolution": "QVGA",
   "resolutionPx": "320×240",
   "color": "Color",
   "touch": null,
   "ethernet": 1,
   "com": [
    {
     "port": "COM1",
     "type": "RS232C/RS422/485"
    }
   ],
   "usbA": 1,
   "usbMiniB": null,
   "usbMicroB": null,
   "cardSlot": false,
   "ftpXml": false,
   "webXml": false,
   "emailXml": null,
   "ezLanXml": null,
   "remoteHmiMaxXml": null,
   "appMemoryMB": 6.0,
   "appMemoryExpandedMB": null,
   "backupMemoryKB": 128.0,
   "revisions": [],
   "firstSeen": "4.08",
   "inVersions": [
    "4.08",
    "4.09",
    "5.01"
   ],
   "versions": {
    "4.08": "full",
    "4.09": "full",
    "5.01": "open-only"
   },
   "statusLatest": "open-only",
   "features": {
    "remoteHmi": {
     "s": "no"
    },
    "gpViewer": {
     "s": "cond",
     "n": "限 Ethernet 機種"
    },
    "proFaceConnect": {
     "s": "no"
    },
    "ftp": {
     "s": "no"
    },
    "web": {
     "s": "no"
    },
    "email": {
     "s": "no"
    },
    "ipsec": {
     "s": "no"
    },
    "ezLan": {
     "s": "no"
    }
   },
   "featureSrc": [
    "S_GPV_MODEL"
   ],
   "cutout": {
    "mount": "rect",
    "w": 156,
    "h": 123.5,
    "t": "1.6～5",
    "src": "S_C_LT3000"
   },
   "replace": [
    {
     "to": "STC-6300TA",
     "sameCutout": true,
     "src": "S_R_LT3300_STC"
    }
   ],
   "switches": [],
   "cable": null
  },
  {
   "key": "4B010100|LT-33** Series|LT-3301L",
   "seriesXml": "LT3000 Series",
   "series": "LT3000",
   "group": "LT-33** Series",
   "name": "LT-3301L",
   "offlineName": "",
   "form": "panel",
   "inch": 5.7,
   "resolution": "QVGA",
   "resolutionPx": "320×240",
   "color": "Mono",
   "touch": null,
   "ethernet": 0,
   "com": [
    {
     "port": "COM1",
     "type": "RS232C/RS422/485"
    }
   ],
   "usbA": 1,
   "usbMiniB": null,
   "usbMicroB": null,
   "cardSlot": false,
   "ftpXml": false,
   "webXml": false,
   "emailXml": null,
   "ezLanXml": null,
   "remoteHmiMaxXml": null,
   "appMemoryMB": 6.0,
   "appMemoryExpandedMB": null,
   "backupMemoryKB": 128.0,
   "revisions": [],
   "firstSeen": "4.08",
   "inVersions": [
    "4.08",
    "4.09",
    "5.01"
   ],
   "versions": {
    "4.08": "full",
    "4.09": "full",
    "5.01": "open-only"
   },
   "statusLatest": "open-only",
   "features": {
    "remoteHmi": {
     "s": "no"
    },
    "gpViewer": {
     "s": "cond",
     "n": "限 Ethernet 機種"
    },
    "proFaceConnect": {
     "s": "no"
    },
    "ftp": {
     "s": "no"
    },
    "web": {
     "s": "no"
    },
    "email": {
     "s": "no"
    },
    "ipsec": {
     "s": "no"
    },
    "ezLan": {
     "s": "no"
    }
   },
   "featureSrc": [
    "S_GPV_MODEL"
   ],
   "cutout": {
    "mount": "rect",
    "w": 156,
    "h": 123.5,
    "t": "1.6～5",
    "src": "S_C_LT3000"
   },
   "replace": [],
   "switches": [],
   "cable": null
  },
  {
   "key": "07010200|ST-32** Series|AST-3201A(SIO)",
   "seriesXml": "ST3000 Series",
   "series": "ST3000",
   "group": "ST-32** Series",
   "name": "AST-3201A(SIO)",
   "offlineName": "",
   "form": "panel",
   "inch": 3.8,
   "resolution": "QVGA",
   "resolutionPx": "320×240",
   "color": "Mono",
   "touch": null,
   "ethernet": 0,
   "com": [
    {
     "port": "COM1",
     "type": "RS232C"
    },
    {
     "port": "COM2",
     "type": "RS422/485"
    }
   ],
   "usbA": 1,
   "usbMiniB": null,
   "usbMicroB": null,
   "cardSlot": false,
   "ftpXml": false,
   "webXml": false,
   "emailXml": null,
   "ezLanXml": null,
   "remoteHmiMaxXml": null,
   "appMemoryMB": 6.0,
   "appMemoryExpandedMB": null,
   "backupMemoryKB": 320.0,
   "revisions": [],
   "firstSeen": "4.08",
   "inVersions": [
    "4.08",
    "4.09",
    "5.01"
   ],
   "versions": {
    "4.08": "full",
    "4.09": "full",
    "5.01": "open-only"
   },
   "statusLatest": "open-only",
   "features": {
    "remoteHmi": {
     "s": "no",
     "n": "無 LAN 埠"
    },
    "gpViewer": {
     "s": "no"
    },
    "proFaceConnect": {
     "s": "no"
    },
    "ftp": {
     "s": "no"
    },
    "web": {
     "s": "no"
    },
    "email": {
     "s": "no"
    },
    "ipsec": {
     "s": "no"
    },
    "ezLan": {
     "s": "no"
    }
   },
   "featureSrc": [],
   "cutout": {
    "mount": "rect",
    "w": 118.5,
    "h": 92.5,
    "t": "1.6～5",
    "src": "S_C_ST3000"
   },
   "replace": [],
   "switches": [],
   "cable": null
  },
  {
   "key": "0B010200|ST-32** Series|AST-3211A(MPI)",
   "seriesXml": "ST3000 Series",
   "series": "ST3000",
   "group": "ST-32** Series",
   "name": "AST-3211A(MPI)",
   "offlineName": "",
   "form": "panel",
   "inch": 3.8,
   "resolution": "QVGA",
   "resolutionPx": "320×240",
   "color": "Mono",
   "touch": null,
   "ethernet": 0,
   "com": [
    {
     "port": "COM1",
     "type": "RS232C"
    },
    {
     "port": "COM2",
     "type": "RS422/485"
    }
   ],
   "usbA": 1,
   "usbMiniB": null,
   "usbMicroB": null,
   "cardSlot": false,
   "ftpXml": false,
   "webXml": false,
   "emailXml": null,
   "ezLanXml": null,
   "remoteHmiMaxXml": null,
   "appMemoryMB": 6.0,
   "appMemoryExpandedMB": null,
   "backupMemoryKB": 320.0,
   "revisions": [],
   "firstSeen": "4.08",
   "inVersions": [
    "4.08",
    "4.09",
    "5.01"
   ],
   "versions": {
    "4.08": "full",
    "4.09": "full",
    "5.01": "open-only"
   },
   "statusLatest": "open-only",
   "features": {
    "remoteHmi": {
     "s": "no",
     "n": "無 LAN 埠"
    },
    "gpViewer": {
     "s": "no"
    },
    "proFaceConnect": {
     "s": "no"
    },
    "ftp": {
     "s": "no"
    },
    "web": {
     "s": "no"
    },
    "email": {
     "s": "no"
    },
    "ipsec": {
     "s": "no"
    },
    "ezLan": {
     "s": "no"
    }
   },
   "featureSrc": [],
   "cutout": {
    "mount": "rect",
    "w": 118.5,
    "h": 92.5,
    "t": "1.6～5",
    "src": "S_C_ST3000"
   },
   "replace": [],
   "switches": [],
   "cable": null
  },
  {
   "key": "13010200|ST-33** Series|AST-3301B",
   "seriesXml": "ST3000 Series",
   "series": "ST3000",
   "group": "ST-33** Series",
   "name": "AST-3301B",
   "offlineName": "",
   "form": "panel",
   "inch": 5.7,
   "resolution": "QVGA",
   "resolutionPx": "320×240",
   "color": "Mono",
   "touch": null,
   "ethernet": 0,
   "com": [
    {
     "port": "COM1",
     "type": "RS232C"
    },
    {
     "port": "COM2",
     "type": "RS422/485"
    }
   ],
   "usbA": 1,
   "usbMiniB": null,
   "usbMicroB": null,
   "cardSlot": false,
   "ftpXml": false,
   "webXml": false,
   "emailXml": null,
   "ezLanXml": null,
   "remoteHmiMaxXml": null,
   "appMemoryMB": 6.0,
   "appMemoryExpandedMB": null,
   "backupMemoryKB": 320.0,
   "revisions": [],
   "firstSeen": "4.08",
   "inVersions": [
    "4.08",
    "4.09",
    "5.01"
   ],
   "versions": {
    "4.08": "full",
    "4.09": "full",
    "5.01": "open-only"
   },
   "statusLatest": "open-only",
   "features": {
    "remoteHmi": {
     "s": "no",
     "n": "無 LAN 埠"
    },
    "gpViewer": {
     "s": "no"
    },
    "proFaceConnect": {
     "s": "no"
    },
    "ftp": {
     "s": "no"
    },
    "web": {
     "s": "no"
    },
    "email": {
     "s": "no"
    },
    "ipsec": {
     "s": "no"
    },
    "ezLan": {
     "s": "no"
    }
   },
   "featureSrc": [],
   "cutout": {
    "mount": "rect",
    "w": 156,
    "h": 123.5,
    "t": "1.6～5",
    "src": "S_C_ST3000"
   },
   "replace": [],
   "switches": [],
   "cable": null
  },
  {
   "key": "13040200|ST-33** Series|AST-3301S",
   "seriesXml": "ST3000 Series",
   "series": "ST3000",
   "group": "ST-33** Series",
   "name": "AST-3301S",
   "offlineName": "",
   "form": "panel",
   "inch": 5.7,
   "resolution": "QVGA",
   "resolutionPx": "320×240",
   "color": "Color",
   "touch": null,
   "ethernet": 0,
   "com": [
    {
     "port": "COM1",
     "type": "RS232C"
    },
    {
     "port": "COM2",
     "type": "RS422/485"
    }
   ],
   "usbA": 1,
   "usbMiniB": null,
   "usbMicroB": null,
   "cardSlot": false,
   "ftpXml": false,
   "webXml": false,
   "emailXml": null,
   "ezLanXml": null,
   "remoteHmiMaxXml": null,
   "appMemoryMB": 6.0,
   "appMemoryExpandedMB": null,
   "backupMemoryKB": 320.0,
   "revisions": [],
   "firstSeen": "4.08",
   "inVersions": [
    "4.08",
    "4.09",
    "5.01"
   ],
   "versions": {
    "4.08": "full",
    "4.09": "full",
    "5.01": "open-only"
   },
   "statusLatest": "open-only",
   "features": {
    "remoteHmi": {
     "s": "no",
     "n": "無 LAN 埠"
    },
    "gpViewer": {
     "s": "no"
    },
    "proFaceConnect": {
     "s": "no"
    },
    "ftp": {
     "s": "no"
    },
    "web": {
     "s": "no"
    },
    "email": {
     "s": "no"
    },
    "ipsec": {
     "s": "no"
    },
    "ezLan": {
     "s": "no"
    }
   },
   "featureSrc": [],
   "cutout": {
    "mount": "rect",
    "w": 156,
    "h": 123.5,
    "t": "1.6～5",
    "src": "S_C_ST3000"
   },
   "replace": [],
   "switches": [],
   "cable": null
  },
  {
   "key": "13060200|ST-33** Series|AST-3301T",
   "seriesXml": "ST3000 Series",
   "series": "ST3000",
   "group": "ST-33** Series",
   "name": "AST-3301T",
   "offlineName": "",
   "form": "panel",
   "inch": 5.7,
   "resolution": "QVGA",
   "resolutionPx": "320×240",
   "color": "Color",
   "touch": null,
   "ethernet": 0,
   "com": [
    {
     "port": "COM1",
     "type": "RS232C"
    },
    {
     "port": "COM2",
     "type": "RS422/485"
    }
   ],
   "usbA": 1,
   "usbMiniB": null,
   "usbMicroB": null,
   "cardSlot": false,
   "ftpXml": false,
   "webXml": false,
   "emailXml": null,
   "ezLanXml": null,
   "remoteHmiMaxXml": null,
   "appMemoryMB": 6.0,
   "appMemoryExpandedMB": null,
   "backupMemoryKB": 320.0,
   "revisions": [],
   "firstSeen": "4.08",
   "inVersions": [
    "4.08",
    "4.09",
    "5.01"
   ],
   "versions": {
    "4.08": "full",
    "4.09": "full",
    "5.01": "open-only"
   },
   "statusLatest": "open-only",
   "features": {
    "remoteHmi": {
     "s": "no",
     "n": "無 LAN 埠"
    },
    "gpViewer": {
     "s": "no"
    },
    "proFaceConnect": {
     "s": "no"
    },
    "ftp": {
     "s": "no"
    },
    "web": {
     "s": "no"
    },
    "email": {
     "s": "no"
    },
    "ipsec": {
     "s": "no"
    },
    "ezLan": {
     "s": "no"
    }
   },
   "featureSrc": [],
   "cutout": {
    "mount": "rect",
    "w": 156,
    "h": 123.5,
    "t": "1.6～5",
    "src": "S_C_ST3000"
   },
   "replace": [],
   "switches": [],
   "cable": null
  },
  {
   "key": "33010200|ST-33** Series|AST-3302B(MPI)",
   "seriesXml": "ST3000 Series",
   "series": "ST3000",
   "group": "ST-33** Series",
   "name": "AST-3302B(MPI)",
   "offlineName": "",
   "form": "panel",
   "inch": 5.7,
   "resolution": "QVGA",
   "resolutionPx": "320×240",
   "color": "Mono",
   "touch": null,
   "ethernet": 0,
   "com": [
    {
     "port": "COM1",
     "type": "RS232C"
    },
    {
     "port": "COM2",
     "type": "RS422/485"
    }
   ],
   "usbA": 1,
   "usbMiniB": null,
   "usbMicroB": null,
   "cardSlot": false,
   "ftpXml": false,
   "webXml": false,
   "emailXml": null,
   "ezLanXml": null,
   "remoteHmiMaxXml": null,
   "appMemoryMB": 6.0,
   "appMemoryExpandedMB": null,
   "backupMemoryKB": 320.0,
   "revisions": [],
   "firstSeen": "4.08",
   "inVersions": [
    "4.08",
    "4.09",
    "5.01"
   ],
   "versions": {
    "4.08": "full",
    "4.09": "full",
    "5.01": "open-only"
   },
   "statusLatest": "open-only",
   "features": {
    "remoteHmi": {
     "s": "no",
     "n": "無 LAN 埠"
    },
    "gpViewer": {
     "s": "no"
    },
    "proFaceConnect": {
     "s": "no"
    },
    "ftp": {
     "s": "no"
    },
    "web": {
     "s": "no"
    },
    "email": {
     "s": "no"
    },
    "ipsec": {
     "s": "no"
    },
    "ezLan": {
     "s": "no"
    }
   },
   "featureSrc": [],
   "cutout": {
    "mount": "rect",
    "w": 156,
    "h": 123.5,
    "t": "1.6～5",
    "src": "S_C_ST3000"
   },
   "replace": [],
   "switches": [],
   "cable": null
  },
  {
   "key": "1B160200|ST-34** Series|AST-3401T",
   "seriesXml": "ST3000 Series",
   "series": "ST3000",
   "group": "ST-34** Series",
   "name": "AST-3401T",
   "offlineName": "",
   "form": "panel",
   "inch": 7.5,
   "resolution": "VGA",
   "resolutionPx": "640×480",
   "color": "Color",
   "touch": null,
   "ethernet": 0,
   "com": [
    {
     "port": "COM1",
     "type": "RS232C"
    },
    {
     "port": "COM2",
     "type": "RS422/485"
    }
   ],
   "usbA": 1,
   "usbMiniB": null,
   "usbMicroB": null,
   "cardSlot": true,
   "ftpXml": false,
   "webXml": false,
   "emailXml": null,
   "ezLanXml": null,
   "remoteHmiMaxXml": null,
   "appMemoryMB": 6.0,
   "appMemoryExpandedMB": null,
   "backupMemoryKB": 320.0,
   "revisions": [],
   "firstSeen": "4.08",
   "inVersions": [
    "4.08",
    "4.09",
    "5.01"
   ],
   "versions": {
    "4.08": "full",
    "4.09": "full",
    "5.01": "open-only"
   },
   "statusLatest": "open-only",
   "features": {
    "remoteHmi": {
     "s": "no",
     "n": "無 LAN 埠"
    },
    "gpViewer": {
     "s": "no"
    },
    "proFaceConnect": {
     "s": "no"
    },
    "ftp": {
     "s": "no"
    },
    "web": {
     "s": "no"
    },
    "email": {
     "s": "no"
    },
    "ipsec": {
     "s": "no"
    },
    "ezLan": {
     "s": "no"
    }
   },
   "featureSrc": [],
   "cutout": {
    "mount": "rect",
    "w": 204.5,
    "h": 159.5,
    "t": "1.6～10",
    "src": "S_C_ST3000"
   },
   "replace": [],
   "switches": [],
   "cable": null
  },
  {
   "key": "27160200|ST-35** Series|AST-3501C",
   "seriesXml": "ST3000 Series",
   "series": "ST3000",
   "group": "ST-35** Series",
   "name": "AST-3501C",
   "offlineName": "",
   "form": "panel",
   "inch": 10.4,
   "resolution": "VGA",
   "resolutionPx": "640×480",
   "color": "Color",
   "touch": null,
   "ethernet": 0,
   "com": [
    {
     "port": "COM1",
     "type": "RS232C"
    },
    {
     "port": "COM2",
     "type": "RS422/485"
    }
   ],
   "usbA": 1,
   "usbMiniB": null,
   "usbMicroB": null,
   "cardSlot": true,
   "ftpXml": false,
   "webXml": false,
   "emailXml": null,
   "ezLanXml": null,
   "remoteHmiMaxXml": null,
   "appMemoryMB": 6.0,
   "appMemoryExpandedMB": null,
   "backupMemoryKB": 320.0,
   "revisions": [],
   "firstSeen": "4.08",
   "inVersions": [
    "4.08",
    "4.09",
    "5.01"
   ],
   "versions": {
    "4.08": "full",
    "4.09": "full",
    "5.01": "open-only"
   },
   "statusLatest": "open-only",
   "features": {
    "remoteHmi": {
     "s": "no",
     "n": "無 LAN 埠"
    },
    "gpViewer": {
     "s": "no"
    },
    "proFaceConnect": {
     "s": "no"
    },
    "ftp": {
     "s": "no"
    },
    "web": {
     "s": "no"
    },
    "email": {
     "s": "no"
    },
    "ipsec": {
     "s": "no"
    },
    "ezLan": {
     "s": "no"
    }
   },
   "featureSrc": [],
   "cutout": {
    "mount": "rect",
    "w": 259,
    "h": 201,
    "t": "1.6～10",
    "src": "S_C_ST3000"
   },
   "replace": [],
   "switches": [],
   "cable": null
  },
  {
   "key": "23160200|ST-35** Series|AST-3501T",
   "seriesXml": "ST3000 Series",
   "series": "ST3000",
   "group": "ST-35** Series",
   "name": "AST-3501T",
   "offlineName": "",
   "form": "panel",
   "inch": 10.4,
   "resolution": "VGA",
   "resolutionPx": "640×480",
   "color": "Color",
   "touch": null,
   "ethernet": 0,
   "com": [
    {
     "port": "COM1",
     "type": "RS232C"
    },
    {
     "port": "COM2",
     "type": "RS422/485"
    }
   ],
   "usbA": 1,
   "usbMiniB": null,
   "usbMicroB": null,
   "cardSlot": true,
   "ftpXml": false,
   "webXml": false,
   "emailXml": null,
   "ezLanXml": null,
   "remoteHmiMaxXml": null,
   "appMemoryMB": 6.0,
   "appMemoryExpandedMB": null,
   "backupMemoryKB": 320.0,
   "revisions": [],
   "firstSeen": "4.08",
   "inVersions": [
    "4.08",
    "4.09",
    "5.01"
   ],
   "versions": {
    "4.08": "full",
    "4.09": "full",
    "5.01": "open-only"
   },
   "statusLatest": "open-only",
   "features": {
    "remoteHmi": {
     "s": "no",
     "n": "無 LAN 埠"
    },
    "gpViewer": {
     "s": "no"
    },
    "proFaceConnect": {
     "s": "no"
    },
    "ftp": {
     "s": "no"
    },
    "web": {
     "s": "no"
    },
    "email": {
     "s": "no"
    },
    "ipsec": {
     "s": "no"
    },
    "ezLan": {
     "s": "no"
    }
   },
   "featureSrc": [],
   "cutout": {
    "mount": "rect",
    "w": 259,
    "h": 201,
    "t": "1.6～10",
    "src": "S_C_ST3000"
   },
   "replace": [],
   "switches": [],
   "cable": null
  },
  {
   "key": "13010208|ST-33**W Series|AST-3301WB",
   "seriesXml": "ST3000W Series",
   "series": "ST3000W",
   "group": "ST-33**W Series",
   "name": "AST-3301WB",
   "offlineName": "",
   "form": "panel",
   "inch": 5.7,
   "resolution": "QVGA",
   "resolutionPx": "320×240",
   "color": "Mono",
   "touch": null,
   "ethernet": 0,
   "com": [
    {
     "port": "COM1",
     "type": "RS232C"
    },
    {
     "port": "COM2",
     "type": "RS422/485"
    }
   ],
   "usbA": 1,
   "usbMiniB": null,
   "usbMicroB": null,
   "cardSlot": false,
   "ftpXml": false,
   "webXml": false,
   "emailXml": null,
   "ezLanXml": null,
   "remoteHmiMaxXml": null,
   "appMemoryMB": 4.0,
   "appMemoryExpandedMB": null,
   "backupMemoryKB": 64.0,
   "revisions": [],
   "firstSeen": "4.08",
   "inVersions": [
    "4.08",
    "5.01"
   ],
   "versions": {
    "4.08": "full",
    "4.09": "absent",
    "5.01": "open-only"
   },
   "statusLatest": "open-only",
   "features": {
    "remoteHmi": {
     "s": "no",
     "n": "無 LAN 埠"
    },
    "gpViewer": {
     "s": "no"
    },
    "proFaceConnect": {
     "s": "no"
    },
    "ftp": {
     "s": "no"
    },
    "web": {
     "s": "no"
    },
    "email": {
     "s": "no"
    },
    "ipsec": {
     "s": "no"
    },
    "ezLan": {
     "s": "no"
    }
   },
   "featureSrc": [],
   "cutout": {
    "mount": "rect",
    "w": 156,
    "h": 123.5,
    "t": "1.6～5",
    "n": "與 ST-3300 系列相同",
    "src": "S_C_ST3000CN"
   },
   "replace": [],
   "switches": [],
   "cable": null
  },
  {
   "key": "13040208|ST-33**W Series|AST-3301WS",
   "seriesXml": "ST3000W Series",
   "series": "ST3000W",
   "group": "ST-33**W Series",
   "name": "AST-3301WS",
   "offlineName": "",
   "form": "panel",
   "inch": 5.7,
   "resolution": "QVGA",
   "resolutionPx": "320×240",
   "color": "Color",
   "touch": null,
   "ethernet": 0,
   "com": [
    {
     "port": "COM1",
     "type": "RS232C"
    },
    {
     "port": "COM2",
     "type": "RS422/485"
    }
   ],
   "usbA": 1,
   "usbMiniB": null,
   "usbMicroB": null,
   "cardSlot": false,
   "ftpXml": false,
   "webXml": false,
   "emailXml": null,
   "ezLanXml": null,
   "remoteHmiMaxXml": null,
   "appMemoryMB": 4.0,
   "appMemoryExpandedMB": null,
   "backupMemoryKB": 64.0,
   "revisions": [],
   "firstSeen": "4.08",
   "inVersions": [
    "4.08",
    "5.01"
   ],
   "versions": {
    "4.08": "full",
    "4.09": "absent",
    "5.01": "open-only"
   },
   "statusLatest": "open-only",
   "features": {
    "remoteHmi": {
     "s": "no",
     "n": "無 LAN 埠"
    },
    "gpViewer": {
     "s": "no"
    },
    "proFaceConnect": {
     "s": "no"
    },
    "ftp": {
     "s": "no"
    },
    "web": {
     "s": "no"
    },
    "email": {
     "s": "no"
    },
    "ipsec": {
     "s": "no"
    },
    "ezLan": {
     "s": "no"
    }
   },
   "featureSrc": [],
   "cutout": {
    "mount": "rect",
    "w": 156,
    "h": 123.5,
    "t": "1.6～5",
    "n": "與 ST-3300 系列相同",
    "src": "S_C_ST3000CN"
   },
   "replace": [],
   "switches": [],
   "cable": null
  },
  {
   "key": "23160208|ST-35**W Series|AST-3501WT",
   "seriesXml": "ST3000W Series",
   "series": "ST3000W",
   "group": "ST-35**W Series",
   "name": "AST-3501WT",
   "offlineName": "",
   "form": "panel",
   "inch": 10.4,
   "resolution": "VGA",
   "resolutionPx": "640×480",
   "color": "Color",
   "touch": null,
   "ethernet": 0,
   "com": [
    {
     "port": "COM1",
     "type": "RS232C"
    },
    {
     "port": "COM2",
     "type": "RS422/485"
    }
   ],
   "usbA": 1,
   "usbMiniB": null,
   "usbMicroB": null,
   "cardSlot": false,
   "ftpXml": false,
   "webXml": false,
   "emailXml": null,
   "ezLanXml": null,
   "remoteHmiMaxXml": null,
   "appMemoryMB": 5.0,
   "appMemoryExpandedMB": null,
   "backupMemoryKB": 128.0,
   "revisions": [],
   "firstSeen": "4.08",
   "inVersions": [
    "4.08",
    "5.01"
   ],
   "versions": {
    "4.08": "full",
    "4.09": "absent",
    "5.01": "open-only"
   },
   "statusLatest": "open-only",
   "features": {
    "remoteHmi": {
     "s": "no",
     "n": "無 LAN 埠"
    },
    "gpViewer": {
     "s": "no"
    },
    "proFaceConnect": {
     "s": "no"
    },
    "ftp": {
     "s": "no"
    },
    "web": {
     "s": "no"
    },
    "email": {
     "s": "no"
    },
    "ipsec": {
     "s": "no"
    },
    "ezLan": {
     "s": "no"
    }
   },
   "featureSrc": [],
   "cutout": {
    "mount": "rect",
    "w": 259,
    "h": 201,
    "t": "1.6～10",
    "n": "與 ST-3500 系列相同",
    "src": "S_C_ST3000CN"
   },
   "replace": [],
   "switches": [],
   "cable": null
  },
  {
   "key": "1306020A|ST-33** Series|HTK3300V",
   "seriesXml": "HTK Series",
   "series": "HTK",
   "group": "ST-33** Series",
   "name": "HTK3300V",
   "offlineName": "",
   "form": "panel",
   "inch": 5.7,
   "resolution": "QVGA",
   "resolutionPx": "320×240",
   "color": "Color",
   "touch": null,
   "ethernet": 0,
   "com": [
    {
     "port": "COM1",
     "type": "RS232C"
    },
    {
     "port": "COM2",
     "type": "RS422/485"
    }
   ],
   "usbA": 1,
   "usbMiniB": null,
   "usbMicroB": null,
   "cardSlot": false,
   "ftpXml": false,
   "webXml": false,
   "emailXml": null,
   "ezLanXml": null,
   "remoteHmiMaxXml": null,
   "appMemoryMB": 6.0,
   "appMemoryExpandedMB": null,
   "backupMemoryKB": 320.0,
   "revisions": [],
   "firstSeen": "5.01",
   "inVersions": [
    "5.01"
   ],
   "versions": {
    "4.08": "absent",
    "4.09": "absent",
    "5.01": "open-only"
   },
   "statusLatest": "open-only",
   "features": {
    "remoteHmi": {
     "s": "no",
     "n": "無 LAN 埠"
    },
    "gpViewer": {
     "s": "no"
    },
    "proFaceConnect": {
     "s": "no"
    },
    "ftp": {
     "s": "no"
    },
    "web": {
     "s": "no"
    },
    "email": {
     "s": "no"
    },
    "ipsec": {
     "s": "no"
    },
    "ezLan": {
     "s": "no"
    }
   },
   "featureSrc": [],
   "cutout": {
    "mount": "rect",
    "w": 156,
    "h": 123.5,
    "verify": true,
    "n": "依使用者提供：與 3300 系列 5.7 吋相同；未找到原廠文件",
    "src": "S_FIELD"
   },
   "replace": [],
   "switches": [],
   "cable": null
  },
  {
   "key": "F02F8400|OSP Series|OSP-P2W",
   "seriesXml": "IPC Series (PC/AT)",
   "series": "IPC",
   "group": "OSP Series",
   "name": "OSP-P2W",
   "offlineName": "",
   "form": "ipc",
   "inch": null,
   "resolution": "XGA",
   "resolutionPx": "1024×768",
   "color": "Color",
   "touch": null,
   "ethernet": 1,
   "com": [
    {
     "port": "COM1",
     "type": "RS232C/RS422/485"
    },
    {
     "port": "COM2",
     "type": "RS232C/RS422/485"
    },
    {
     "port": "COM3",
     "type": "RS232C/RS422/485"
    },
    {
     "port": "COM4",
     "type": "RS232C/RS422/485"
    },
    {
     "port": "COM5",
     "type": "RS232C/RS422/485"
    },
    {
     "port": "COM6",
     "type": "RS232C/RS422/485"
    },
    {
     "port": "COM7",
     "type": "RS232C/RS422/485"
    },
    {
     "port": "COM8",
     "type": "RS232C/RS422/485"
    },
    {
     "port": "COM9",
     "type": "RS232C/RS422/485"
    }
   ],
   "usbA": 4,
   "usbMiniB": null,
   "usbMicroB": null,
   "cardSlot": true,
   "ftpXml": false,
   "webXml": false,
   "emailXml": true,
   "ezLanXml": null,
   "remoteHmiMaxXml": 5,
   "appMemoryMB": 64.0,
   "appMemoryExpandedMB": null,
   "backupMemoryKB": 5120.0,
   "revisions": [],
   "firstSeen": "5.01",
   "inVersions": [
    "5.01"
   ],
   "versions": {
    "4.08": "absent",
    "4.09": "absent",
    "5.01": "open-only"
   },
   "statusLatest": "open-only",
   "features": {
    "remoteHmi": {
     "s": "yes",
     "n": "WinGP；非 WinGP 畫面需 Remote HMI Server 授權",
     "conn": 5
    },
    "gpViewer": {
     "s": "yes",
     "n": "IPC Series for WinGP"
    },
    "proFaceConnect": {
     "s": "unknown"
    },
    "ftp": {
     "s": "no"
    },
    "web": {
     "s": "no"
    },
    "email": {
     "s": "yes"
    },
    "ipsec": {
     "s": "unknown"
    },
    "ezLan": {
     "s": "no"
    }
   },
   "featureSrc": [
    "S_RHMI_WIN",
    "S_GPV_MODEL",
    "S_XML"
   ],
   "cutout": {
    "mount": "ipc",
    "n": "工業電腦／PC，依實際機型"
   },
   "replace": [],
   "switches": [],
   "cable": null
  },
  {
   "key": "F03F8400|OSP Series|PC/AT",
   "seriesXml": "IPC Series (PC/AT)",
   "series": "IPC",
   "group": "OSP Series",
   "name": "PC/AT",
   "offlineName": "",
   "form": "ipc",
   "inch": null,
   "resolution": "SXGA",
   "resolutionPx": "1280×1024",
   "color": "Color",
   "touch": null,
   "ethernet": 2,
   "com": [
    {
     "port": "COM1",
     "type": "RS232C/RS422/485"
    },
    {
     "port": "COM2",
     "type": "RS232C/RS422/485"
    },
    {
     "port": "COM3",
     "type": "RS232C/RS422/485"
    },
    {
     "port": "COM4",
     "type": "RS232C/RS422/485"
    },
    {
     "port": "COM5",
     "type": "RS232C/RS422/485"
    },
    {
     "port": "COM6",
     "type": "RS232C/RS422/485"
    },
    {
     "port": "COM7",
     "type": "RS232C/RS422/485"
    },
    {
     "port": "COM8",
     "type": "RS232C/RS422/485"
    },
    {
     "port": "COM9",
     "type": "RS232C/RS422/485"
    }
   ],
   "usbA": 4,
   "usbMiniB": null,
   "usbMicroB": null,
   "cardSlot": true,
   "ftpXml": false,
   "webXml": false,
   "emailXml": true,
   "ezLanXml": null,
   "remoteHmiMaxXml": 5,
   "appMemoryMB": 64.0,
   "appMemoryExpandedMB": null,
   "backupMemoryKB": 5120.0,
   "revisions": [],
   "firstSeen": "5.01",
   "inVersions": [
    "5.01"
   ],
   "versions": {
    "4.08": "absent",
    "4.09": "absent",
    "5.01": "open-only"
   },
   "statusLatest": "open-only",
   "features": {
    "remoteHmi": {
     "s": "yes",
     "n": "WinGP；非 WinGP 畫面需 Remote HMI Server 授權",
     "conn": 5
    },
    "gpViewer": {
     "s": "yes",
     "n": "IPC Series for WinGP"
    },
    "proFaceConnect": {
     "s": "unknown"
    },
    "ftp": {
     "s": "no"
    },
    "web": {
     "s": "no"
    },
    "email": {
     "s": "yes"
    },
    "ipsec": {
     "s": "unknown"
    },
    "ezLan": {
     "s": "no"
    }
   },
   "featureSrc": [
    "S_RHMI_WIN",
    "S_GPV_MODEL",
    "S_XML"
   ],
   "cutout": {
    "mount": "ipc",
    "n": "工業電腦／PC，依實際機型"
   },
   "replace": [],
   "switches": [],
   "cable": null
  },
  {
   "key": "F01F8400|PC/AT|PC/AT",
   "seriesXml": "IPC Series (PC/AT)",
   "series": "IPC",
   "group": "PC/AT",
   "name": "PC/AT",
   "offlineName": "",
   "form": "ipc",
   "inch": null,
   "resolution": "FullHD",
   "resolutionPx": "1920×1080",
   "color": "Color",
   "touch": null,
   "ethernet": 2,
   "com": [
    {
     "port": "COM1",
     "type": "RS232C/RS422/485"
    },
    {
     "port": "COM2",
     "type": "RS232C/RS422/485"
    },
    {
     "port": "COM3",
     "type": "RS232C/RS422/485"
    },
    {
     "port": "COM4",
     "type": "RS232C/RS422/485"
    },
    {
     "port": "COM5",
     "type": "RS232C/RS422/485"
    },
    {
     "port": "COM6",
     "type": "RS232C/RS422/485"
    },
    {
     "port": "COM7",
     "type": "RS232C/RS422/485"
    },
    {
     "port": "COM8",
     "type": "RS232C/RS422/485"
    },
    {
     "port": "COM9",
     "type": "RS232C/RS422/485"
    }
   ],
   "usbA": 4,
   "usbMiniB": null,
   "usbMicroB": null,
   "cardSlot": true,
   "ftpXml": false,
   "webXml": false,
   "emailXml": true,
   "ezLanXml": null,
   "remoteHmiMaxXml": 5,
   "appMemoryMB": 128.0,
   "appMemoryExpandedMB": null,
   "backupMemoryKB": 5120.0,
   "revisions": [],
   "firstSeen": "4.08",
   "inVersions": [
    "4.08",
    "4.09",
    "5.01"
   ],
   "versions": {
    "4.08": "full",
    "4.09": "full",
    "5.01": "full"
   },
   "statusLatest": "full",
   "features": {
    "remoteHmi": {
     "s": "yes",
     "n": "WinGP；非 WinGP 畫面需 Remote HMI Server 授權",
     "conn": 5
    },
    "gpViewer": {
     "s": "yes",
     "n": "IPC Series for WinGP"
    },
    "proFaceConnect": {
     "s": "unknown"
    },
    "ftp": {
     "s": "no"
    },
    "web": {
     "s": "no"
    },
    "email": {
     "s": "yes"
    },
    "ipsec": {
     "s": "unknown"
    },
    "ezLan": {
     "s": "no"
    }
   },
   "featureSrc": [
    "S_RHMI_WIN",
    "S_GPV_MODEL",
    "S_XML"
   ],
   "cutout": {
    "mount": "ipc",
    "n": "工業電腦／PC，依實際機型"
   },
   "replace": [],
   "switches": [],
   "cable": null
  },
  {
   "key": "20118400|PL Series|APL-3*00",
   "seriesXml": "IPC Series (PC/AT)",
   "series": "IPC",
   "group": "PL Series",
   "name": "APL-3*00",
   "offlineName": "",
   "form": "ipc",
   "inch": null,
   "resolution": "SXGA",
   "resolutionPx": "1280×1024",
   "color": "Color",
   "touch": null,
   "ethernet": 2,
   "com": [
    {
     "port": "COM1",
     "type": "RS232C/RS422/485"
    },
    {
     "port": "COM2",
     "type": "RS232C/RS422/485"
    },
    {
     "port": "COM3",
     "type": "RS232C/RS422/485"
    },
    {
     "port": "COM4",
     "type": "RS232C/RS422/485"
    },
    {
     "port": "COM5",
     "type": "RS232C/RS422/485"
    },
    {
     "port": "COM6",
     "type": "RS232C/RS422/485"
    },
    {
     "port": "COM7",
     "type": "RS232C/RS422/485"
    },
    {
     "port": "COM8",
     "type": "RS232C/RS422/485"
    },
    {
     "port": "COM9",
     "type": "RS232C/RS422/485"
    }
   ],
   "usbA": 4,
   "usbMiniB": null,
   "usbMicroB": null,
   "cardSlot": true,
   "ftpXml": false,
   "webXml": false,
   "emailXml": true,
   "ezLanXml": null,
   "remoteHmiMaxXml": 5,
   "appMemoryMB": 64.0,
   "appMemoryExpandedMB": null,
   "backupMemoryKB": 5120.0,
   "revisions": [],
   "firstSeen": "4.08",
   "inVersions": [
    "4.08",
    "4.09",
    "5.01"
   ],
   "versions": {
    "4.08": "full",
    "4.09": "full",
    "5.01": "open-only"
   },
   "statusLatest": "open-only",
   "features": {
    "remoteHmi": {
     "s": "yes",
     "n": "WinGP；非 WinGP 畫面需 Remote HMI Server 授權",
     "conn": 5
    },
    "gpViewer": {
     "s": "yes",
     "n": "IPC Series for WinGP"
    },
    "proFaceConnect": {
     "s": "unknown"
    },
    "ftp": {
     "s": "no"
    },
    "web": {
     "s": "no"
    },
    "email": {
     "s": "yes"
    },
    "ipsec": {
     "s": "unknown"
    },
    "ezLan": {
     "s": "no"
    }
   },
   "featureSrc": [
    "S_RHMI_WIN",
    "S_GPV_MODEL",
    "S_XML"
   ],
   "cutout": {
    "mount": "ipc",
    "n": "工業電腦／PC，依實際機型"
   },
   "replace": [],
   "switches": [],
   "cable": null
  },
  {
   "key": "10218400|PS Series|PS-2000B",
   "seriesXml": "IPC Series (PC/AT)",
   "series": "IPC",
   "group": "PS Series",
   "name": "PS-2000B",
   "offlineName": "",
   "form": "ipc",
   "inch": null,
   "resolution": "XGA",
   "resolutionPx": "1024×768",
   "color": "Color",
   "touch": null,
   "ethernet": 1,
   "com": [
    {
     "port": "COM1",
     "type": "RS232C/RS422/485"
    },
    {
     "port": "COM2",
     "type": "RS232C/RS422/485"
    },
    {
     "port": "COM3",
     "type": "RS232C/RS422/485"
    },
    {
     "port": "COM4",
     "type": "RS232C/RS422/485"
    },
    {
     "port": "COM5",
     "type": "RS232C/RS422/485"
    },
    {
     "port": "COM6",
     "type": "RS232C/RS422/485"
    },
    {
     "port": "COM7",
     "type": "RS232C/RS422/485"
    },
    {
     "port": "COM8",
     "type": "RS232C/RS422/485"
    },
    {
     "port": "COM9",
     "type": "RS232C/RS422/485"
    }
   ],
   "usbA": 4,
   "usbMiniB": null,
   "usbMicroB": null,
   "cardSlot": true,
   "ftpXml": false,
   "webXml": false,
   "emailXml": true,
   "ezLanXml": null,
   "remoteHmiMaxXml": 5,
   "appMemoryMB": 64.0,
   "appMemoryExpandedMB": null,
   "backupMemoryKB": 5120.0,
   "revisions": [],
   "firstSeen": "4.08",
   "inVersions": [
    "4.08",
    "4.09",
    "5.01"
   ],
   "versions": {
    "4.08": "full",
    "4.09": "full",
    "5.01": "open-only"
   },
   "statusLatest": "open-only",
   "features": {
    "remoteHmi": {
     "s": "yes",
     "n": "WinGP；非 WinGP 畫面需 Remote HMI Server 授權",
     "conn": 5
    },
    "gpViewer": {
     "s": "yes",
     "n": "IPC Series for WinGP"
    },
    "proFaceConnect": {
     "s": "unknown"
    },
    "ftp": {
     "s": "no"
    },
    "web": {
     "s": "no"
    },
    "email": {
     "s": "yes"
    },
    "ipsec": {
     "s": "unknown"
    },
    "ezLan": {
     "s": "no"
    }
   },
   "featureSrc": [
    "S_RHMI_WIN",
    "S_GPV_MODEL",
    "S_XML"
   ],
   "cutout": {
    "mount": "ipc",
    "n": "工業電腦／PC，依實際機型"
   },
   "replace": [],
   "switches": [],
   "cable": null
  },
  {
   "key": "10828400|PS Series|PS-3450A/3000B",
   "seriesXml": "IPC Series (PC/AT)",
   "series": "IPC",
   "group": "PS Series",
   "name": "PS-3450A/3000B",
   "offlineName": "",
   "form": "ipc",
   "inch": null,
   "resolution": "SXGA",
   "resolutionPx": "1280×1024",
   "color": "Color",
   "touch": null,
   "ethernet": 2,
   "com": [
    {
     "port": "COM1",
     "type": "RS232C/RS422/485"
    },
    {
     "port": "COM2",
     "type": "RS232C/RS422/485"
    },
    {
     "port": "COM3",
     "type": "RS232C/RS422/485"
    },
    {
     "port": "COM4",
     "type": "RS232C/RS422/485"
    },
    {
     "port": "COM5",
     "type": "RS232C/RS422/485"
    },
    {
     "port": "COM6",
     "type": "RS232C/RS422/485"
    },
    {
     "port": "COM7",
     "type": "RS232C/RS422/485"
    },
    {
     "port": "COM8",
     "type": "RS232C/RS422/485"
    },
    {
     "port": "COM9",
     "type": "RS232C/RS422/485"
    }
   ],
   "usbA": 4,
   "usbMiniB": null,
   "usbMicroB": null,
   "cardSlot": true,
   "ftpXml": false,
   "webXml": false,
   "emailXml": true,
   "ezLanXml": null,
   "remoteHmiMaxXml": 5,
   "appMemoryMB": 64.0,
   "appMemoryExpandedMB": null,
   "backupMemoryKB": 5120.0,
   "revisions": [],
   "firstSeen": "4.08",
   "inVersions": [
    "4.08",
    "4.09",
    "5.01"
   ],
   "versions": {
    "4.08": "full",
    "4.09": "full",
    "5.01": "open-only"
   },
   "statusLatest": "open-only",
   "features": {
    "remoteHmi": {
     "s": "yes",
     "n": "WinGP；非 WinGP 畫面需 Remote HMI Server 授權",
     "conn": 5
    },
    "gpViewer": {
     "s": "yes",
     "n": "IPC Series for WinGP"
    },
    "proFaceConnect": {
     "s": "unknown"
    },
    "ftp": {
     "s": "no"
    },
    "web": {
     "s": "no"
    },
    "email": {
     "s": "yes"
    },
    "ipsec": {
     "s": "unknown"
    },
    "ezLan": {
     "s": "no"
    }
   },
   "featureSrc": [
    "S_RHMI_WIN",
    "S_GPV_MODEL",
    "S_XML"
   ],
   "cutout": {
    "mount": "ipc",
    "n": "工業電腦／PC，依實際機型"
   },
   "replace": [],
   "switches": [],
   "cable": null
  },
  {
   "key": "10728400|PS Series|PS-3451A/3001B",
   "seriesXml": "IPC Series (PC/AT)",
   "series": "IPC",
   "group": "PS Series",
   "name": "PS-3451A/3001B",
   "offlineName": "",
   "form": "ipc",
   "inch": null,
   "resolution": "SXGA",
   "resolutionPx": "1280×1024",
   "color": "Color",
   "touch": null,
   "ethernet": 2,
   "com": [
    {
     "port": "COM1",
     "type": "RS232C/RS422/485"
    },
    {
     "port": "COM2",
     "type": "RS232C/RS422/485"
    },
    {
     "port": "COM3",
     "type": "RS232C/RS422/485"
    },
    {
     "port": "COM4",
     "type": "RS232C/RS422/485"
    },
    {
     "port": "COM5",
     "type": "RS232C/RS422/485"
    },
    {
     "port": "COM6",
     "type": "RS232C/RS422/485"
    },
    {
     "port": "COM7",
     "type": "RS232C/RS422/485"
    },
    {
     "port": "COM8",
     "type": "RS232C/RS422/485"
    },
    {
     "port": "COM9",
     "type": "RS232C/RS422/485"
    }
   ],
   "usbA": 4,
   "usbMiniB": null,
   "usbMicroB": null,
   "cardSlot": true,
   "ftpXml": false,
   "webXml": false,
   "emailXml": true,
   "ezLanXml": null,
   "remoteHmiMaxXml": 5,
   "appMemoryMB": 64.0,
   "appMemoryExpandedMB": null,
   "backupMemoryKB": 5120.0,
   "revisions": [],
   "firstSeen": "4.08",
   "inVersions": [
    "4.08",
    "4.09",
    "5.01"
   ],
   "versions": {
    "4.08": "full",
    "4.09": "full",
    "5.01": "open-only"
   },
   "statusLatest": "open-only",
   "features": {
    "remoteHmi": {
     "s": "yes",
     "n": "WinGP；非 WinGP 畫面需 Remote HMI Server 授權",
     "conn": 5
    },
    "gpViewer": {
     "s": "yes",
     "n": "IPC Series for WinGP"
    },
    "proFaceConnect": {
     "s": "unknown"
    },
    "ftp": {
     "s": "no"
    },
    "web": {
     "s": "no"
    },
    "email": {
     "s": "yes"
    },
    "ipsec": {
     "s": "unknown"
    },
    "ezLan": {
     "s": "no"
    }
   },
   "featureSrc": [
    "S_RHMI_WIN",
    "S_GPV_MODEL",
    "S_XML"
   ],
   "cutout": {
    "mount": "ipc",
    "n": "工業電腦／PC，依實際機型"
   },
   "replace": [],
   "switches": [],
   "cable": null
  },
  {
   "key": "10318400|PS Series|PS-5000,PS(A)-6000",
   "seriesXml": "IPC Series (PC/AT)",
   "series": "IPC",
   "group": "PS Series",
   "name": "PS-5000,PS(A)-6000",
   "offlineName": "Pro-face IPC",
   "form": "ipc",
   "inch": null,
   "resolution": "FullHD",
   "resolutionPx": "1920×1080",
   "color": "Color",
   "touch": null,
   "ethernet": 3,
   "com": [
    {
     "port": "COM1",
     "type": "RS232C/RS422/485"
    },
    {
     "port": "COM2",
     "type": "RS232C/RS422/485"
    },
    {
     "port": "COM3",
     "type": "RS232C/RS422/485"
    },
    {
     "port": "COM4",
     "type": "RS232C/RS422/485"
    },
    {
     "port": "COM5",
     "type": "RS232C/RS422/485"
    },
    {
     "port": "COM6",
     "type": "RS232C/RS422/485"
    },
    {
     "port": "COM7",
     "type": "RS232C/RS422/485"
    },
    {
     "port": "COM8",
     "type": "RS232C/RS422/485"
    },
    {
     "port": "COM9",
     "type": "RS232C/RS422/485"
    }
   ],
   "usbA": 5,
   "usbMiniB": null,
   "usbMicroB": null,
   "cardSlot": true,
   "ftpXml": false,
   "webXml": false,
   "emailXml": true,
   "ezLanXml": null,
   "remoteHmiMaxXml": 5,
   "appMemoryMB": 128.0,
   "appMemoryExpandedMB": null,
   "backupMemoryKB": 5120.0,
   "revisions": [],
   "firstSeen": "4.08",
   "inVersions": [
    "4.08",
    "4.09",
    "5.01"
   ],
   "versions": {
    "4.08": "full",
    "4.09": "full",
    "5.01": "full"
   },
   "statusLatest": "full",
   "features": {
    "remoteHmi": {
     "s": "yes",
     "n": "WinGP；非 WinGP 畫面需 Remote HMI Server 授權",
     "conn": 5
    },
    "gpViewer": {
     "s": "yes",
     "n": "IPC Series for WinGP"
    },
    "proFaceConnect": {
     "s": "unknown"
    },
    "ftp": {
     "s": "no"
    },
    "web": {
     "s": "no"
    },
    "email": {
     "s": "yes"
    },
    "ipsec": {
     "s": "unknown"
    },
    "ezLan": {
     "s": "no"
    }
   },
   "featureSrc": [
    "S_RHMI_WIN",
    "S_GPV_MODEL",
    "S_XML"
   ],
   "cutout": {
    "mount": "ipc",
    "n": "工業電腦／PC，依實際機型"
   },
   "replace": [],
   "switches": [],
   "cable": null
  },
  {
   "key": "10128400|PS Series|PS-3650A",
   "seriesXml": "IPC Series (PC/AT)",
   "series": "IPC",
   "group": "PS Series",
   "name": "PS-3650A",
   "offlineName": "",
   "form": "panel",
   "inch": 12.1,
   "resolution": "XGA",
   "resolutionPx": "1024×768",
   "color": "Color",
   "touch": null,
   "ethernet": 2,
   "com": [
    {
     "port": "COM1",
     "type": "RS232C/RS422/485"
    },
    {
     "port": "COM2",
     "type": "RS232C/RS422/485"
    },
    {
     "port": "COM3",
     "type": "RS232C/RS422/485"
    },
    {
     "port": "COM4",
     "type": "RS232C/RS422/485"
    },
    {
     "port": "COM5",
     "type": "RS232C/RS422/485"
    },
    {
     "port": "COM6",
     "type": "RS232C/RS422/485"
    },
    {
     "port": "COM7",
     "type": "RS232C/RS422/485"
    },
    {
     "port": "COM8",
     "type": "RS232C/RS422/485"
    },
    {
     "port": "COM9",
     "type": "RS232C/RS422/485"
    }
   ],
   "usbA": 5,
   "usbMiniB": null,
   "usbMicroB": null,
   "cardSlot": true,
   "ftpXml": false,
   "webXml": false,
   "emailXml": true,
   "ezLanXml": null,
   "remoteHmiMaxXml": 5,
   "appMemoryMB": 64.0,
   "appMemoryExpandedMB": null,
   "backupMemoryKB": 5120.0,
   "revisions": [],
   "firstSeen": "4.08",
   "inVersions": [
    "4.08",
    "4.09",
    "5.01"
   ],
   "versions": {
    "4.08": "full",
    "4.09": "full",
    "5.01": "open-only"
   },
   "statusLatest": "open-only",
   "features": {
    "remoteHmi": {
     "s": "yes",
     "n": "WinGP；非 WinGP 畫面需 Remote HMI Server 授權",
     "conn": 5
    },
    "gpViewer": {
     "s": "yes",
     "n": "IPC Series for WinGP"
    },
    "proFaceConnect": {
     "s": "unknown"
    },
    "ftp": {
     "s": "no"
    },
    "web": {
     "s": "no"
    },
    "email": {
     "s": "yes"
    },
    "ipsec": {
     "s": "unknown"
    },
    "ezLan": {
     "s": "no"
    }
   },
   "featureSrc": [
    "S_RHMI_WIN",
    "S_GPV_MODEL",
    "S_XML"
   ],
   "cutout": {
    "mount": "ipc",
    "n": "工業電腦／PC，依實際機型"
   },
   "replace": [],
   "switches": [],
   "cable": null
  },
  {
   "key": "10228400|PS Series|PS-3651A",
   "seriesXml": "IPC Series (PC/AT)",
   "series": "IPC",
   "group": "PS Series",
   "name": "PS-3651A",
   "offlineName": "",
   "form": "panel",
   "inch": 12.1,
   "resolution": "XGA",
   "resolutionPx": "1024×768",
   "color": "Color",
   "touch": null,
   "ethernet": 2,
   "com": [
    {
     "port": "COM1",
     "type": "RS232C/RS422/485"
    },
    {
     "port": "COM2",
     "type": "RS232C/RS422/485"
    },
    {
     "port": "COM3",
     "type": "RS232C/RS422/485"
    },
    {
     "port": "COM4",
     "type": "RS232C/RS422/485"
    },
    {
     "port": "COM5",
     "type": "RS232C/RS422/485"
    },
    {
     "port": "COM6",
     "type": "RS232C/RS422/485"
    },
    {
     "port": "COM7",
     "type": "RS232C/RS422/485"
    },
    {
     "port": "COM8",
     "type": "RS232C/RS422/485"
    },
    {
     "port": "COM9",
     "type": "RS232C/RS422/485"
    }
   ],
   "usbA": 5,
   "usbMiniB": null,
   "usbMicroB": null,
   "cardSlot": true,
   "ftpXml": false,
   "webXml": false,
   "emailXml": true,
   "ezLanXml": null,
   "remoteHmiMaxXml": 5,
   "appMemoryMB": 64.0,
   "appMemoryExpandedMB": null,
   "backupMemoryKB": 5120.0,
   "revisions": [],
   "firstSeen": "4.08",
   "inVersions": [
    "4.08",
    "4.09",
    "5.01"
   ],
   "versions": {
    "4.08": "full",
    "4.09": "full",
    "5.01": "open-only"
   },
   "statusLatest": "open-only",
   "features": {
    "remoteHmi": {
     "s": "yes",
     "n": "WinGP；非 WinGP 畫面需 Remote HMI Server 授權",
     "conn": 5
    },
    "gpViewer": {
     "s": "yes",
     "n": "IPC Series for WinGP"
    },
    "proFaceConnect": {
     "s": "unknown"
    },
    "ftp": {
     "s": "no"
    },
    "web": {
     "s": "no"
    },
    "email": {
     "s": "yes"
    },
    "ipsec": {
     "s": "unknown"
    },
    "ezLan": {
     "s": "no"
    }
   },
   "featureSrc": [
    "S_RHMI_WIN",
    "S_GPV_MODEL",
    "S_XML"
   ],
   "cutout": {
    "mount": "ipc",
    "n": "工業電腦／PC，依實際機型"
   },
   "replace": [],
   "switches": [],
   "cable": null
  },
  {
   "key": "10328400|PS Series|PS-3700A",
   "seriesXml": "IPC Series (PC/AT)",
   "series": "IPC",
   "group": "PS Series",
   "name": "PS-3700A",
   "offlineName": "",
   "form": "panel",
   "inch": 15.0,
   "resolution": "XGA",
   "resolutionPx": "1024×768",
   "color": "Color",
   "touch": null,
   "ethernet": 1,
   "com": [
    {
     "port": "COM1",
     "type": "RS232C/RS422/485"
    },
    {
     "port": "COM2",
     "type": "RS232C/RS422/485"
    },
    {
     "port": "COM3",
     "type": "RS232C/RS422/485"
    },
    {
     "port": "COM4",
     "type": "RS232C/RS422/485"
    },
    {
     "port": "COM5",
     "type": "RS232C/RS422/485"
    },
    {
     "port": "COM6",
     "type": "RS232C/RS422/485"
    },
    {
     "port": "COM7",
     "type": "RS232C/RS422/485"
    },
    {
     "port": "COM8",
     "type": "RS232C/RS422/485"
    },
    {
     "port": "COM9",
     "type": "RS232C/RS422/485"
    }
   ],
   "usbA": 3,
   "usbMiniB": null,
   "usbMicroB": null,
   "cardSlot": true,
   "ftpXml": false,
   "webXml": false,
   "emailXml": true,
   "ezLanXml": null,
   "remoteHmiMaxXml": 5,
   "appMemoryMB": 64.0,
   "appMemoryExpandedMB": null,
   "backupMemoryKB": 5120.0,
   "revisions": [],
   "firstSeen": "4.08",
   "inVersions": [
    "4.08",
    "4.09",
    "5.01"
   ],
   "versions": {
    "4.08": "full",
    "4.09": "full",
    "5.01": "open-only"
   },
   "statusLatest": "open-only",
   "features": {
    "remoteHmi": {
     "s": "yes",
     "n": "WinGP；非 WinGP 畫面需 Remote HMI Server 授權",
     "conn": 5
    },
    "gpViewer": {
     "s": "yes",
     "n": "IPC Series for WinGP"
    },
    "proFaceConnect": {
     "s": "unknown"
    },
    "ftp": {
     "s": "no"
    },
    "web": {
     "s": "no"
    },
    "email": {
     "s": "yes"
    },
    "ipsec": {
     "s": "unknown"
    },
    "ezLan": {
     "s": "no"
    }
   },
   "featureSrc": [
    "S_RHMI_WIN",
    "S_GPV_MODEL",
    "S_XML"
   ],
   "cutout": {
    "mount": "ipc",
    "n": "工業電腦／PC，依實際機型"
   },
   "replace": [],
   "switches": [],
   "cable": null
  },
  {
   "key": "10528400|PS Series|PS-3710A",
   "seriesXml": "IPC Series (PC/AT)",
   "series": "IPC",
   "group": "PS Series",
   "name": "PS-3710A",
   "offlineName": "",
   "form": "panel",
   "inch": 15.0,
   "resolution": "XGA",
   "resolutionPx": "1024×768",
   "color": "Color",
   "touch": null,
   "ethernet": 2,
   "com": [
    {
     "port": "COM1",
     "type": "RS232C/RS422/485"
    },
    {
     "port": "COM2",
     "type": "RS232C/RS422/485"
    },
    {
     "port": "COM3",
     "type": "RS232C/RS422/485"
    },
    {
     "port": "COM4",
     "type": "RS232C/RS422/485"
    },
    {
     "port": "COM5",
     "type": "RS232C/RS422/485"
    },
    {
     "port": "COM6",
     "type": "RS232C/RS422/485"
    },
    {
     "port": "COM7",
     "type": "RS232C/RS422/485"
    },
    {
     "port": "COM8",
     "type": "RS232C/RS422/485"
    },
    {
     "port": "COM9",
     "type": "RS232C/RS422/485"
    }
   ],
   "usbA": 5,
   "usbMiniB": null,
   "usbMicroB": null,
   "cardSlot": true,
   "ftpXml": false,
   "webXml": false,
   "emailXml": true,
   "ezLanXml": null,
   "remoteHmiMaxXml": 5,
   "appMemoryMB": 64.0,
   "appMemoryExpandedMB": null,
   "backupMemoryKB": 5120.0,
   "revisions": [],
   "firstSeen": "4.08",
   "inVersions": [
    "4.08",
    "4.09",
    "5.01"
   ],
   "versions": {
    "4.08": "full",
    "4.09": "full",
    "5.01": "open-only"
   },
   "statusLatest": "open-only",
   "features": {
    "remoteHmi": {
     "s": "yes",
     "n": "WinGP；非 WinGP 畫面需 Remote HMI Server 授權",
     "conn": 5
    },
    "gpViewer": {
     "s": "yes",
     "n": "IPC Series for WinGP"
    },
    "proFaceConnect": {
     "s": "unknown"
    },
    "ftp": {
     "s": "no"
    },
    "web": {
     "s": "no"
    },
    "email": {
     "s": "yes"
    },
    "ipsec": {
     "s": "unknown"
    },
    "ezLan": {
     "s": "no"
    }
   },
   "featureSrc": [
    "S_RHMI_WIN",
    "S_GPV_MODEL",
    "S_XML"
   ],
   "cutout": {
    "mount": "ipc",
    "n": "工業電腦／PC，依實際機型"
   },
   "replace": [],
   "switches": [],
   "cable": null
  },
  {
   "key": "10628400|PS Series|PS-3711A",
   "seriesXml": "IPC Series (PC/AT)",
   "series": "IPC",
   "group": "PS Series",
   "name": "PS-3711A",
   "offlineName": "",
   "form": "panel",
   "inch": 15.0,
   "resolution": "XGA",
   "resolutionPx": "1024×768",
   "color": "Color",
   "touch": null,
   "ethernet": 2,
   "com": [
    {
     "port": "COM1",
     "type": "RS232C/RS422/485"
    },
    {
     "port": "COM2",
     "type": "RS232C/RS422/485"
    },
    {
     "port": "COM3",
     "type": "RS232C/RS422/485"
    },
    {
     "port": "COM4",
     "type": "RS232C/RS422/485"
    },
    {
     "port": "COM5",
     "type": "RS232C/RS422/485"
    },
    {
     "port": "COM6",
     "type": "RS232C/RS422/485"
    },
    {
     "port": "COM7",
     "type": "RS232C/RS422/485"
    },
    {
     "port": "COM8",
     "type": "RS232C/RS422/485"
    },
    {
     "port": "COM9",
     "type": "RS232C/RS422/485"
    }
   ],
   "usbA": 5,
   "usbMiniB": null,
   "usbMicroB": null,
   "cardSlot": true,
   "ftpXml": false,
   "webXml": false,
   "emailXml": true,
   "ezLanXml": null,
   "remoteHmiMaxXml": 5,
   "appMemoryMB": 64.0,
   "appMemoryExpandedMB": null,
   "backupMemoryKB": 5120.0,
   "revisions": [],
   "firstSeen": "4.08",
   "inVersions": [
    "4.08",
    "4.09",
    "5.01"
   ],
   "versions": {
    "4.08": "full",
    "4.09": "full",
    "5.01": "open-only"
   },
   "statusLatest": "open-only",
   "features": {
    "remoteHmi": {
     "s": "yes",
     "n": "WinGP；非 WinGP 畫面需 Remote HMI Server 授權",
     "conn": 5
    },
    "gpViewer": {
     "s": "yes",
     "n": "IPC Series for WinGP"
    },
    "proFaceConnect": {
     "s": "unknown"
    },
    "ftp": {
     "s": "no"
    },
    "web": {
     "s": "no"
    },
    "email": {
     "s": "yes"
    },
    "ipsec": {
     "s": "unknown"
    },
    "ezLan": {
     "s": "no"
    }
   },
   "featureSrc": [
    "S_RHMI_WIN",
    "S_GPV_MODEL",
    "S_XML"
   ],
   "cutout": {
    "mount": "ipc",
    "n": "工業電腦／PC，依實際機型"
   },
   "replace": [],
   "switches": [],
   "cable": null
  }
 ]
};

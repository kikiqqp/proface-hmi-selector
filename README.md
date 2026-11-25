# Pro-face HMI 選型工具

以點選方式查詢 Pro-face 人機的規格、遠端功能（Pro-face Remote HMI、GP-Viewer EX、Pro-face Connect 等）、開口尺寸與原廠建議替換機種。

機種清單取自 GP-Pro EX 各版本（目前為 4.08、4.09、5.01）軟體內的 HmiInfo.xml，取聯集全部列出，每台機種分別標示各版本能否新建專案。功能支援、開口尺寸與替換資料依原廠手冊與網頁整理，每筆都附來源連結。

## 文件

| 文件 | 給誰看 |
|---|---|
| [網頁使用說明](docs/網頁使用說明.md) | 使用網站的業務與工程師 |
| [GitHub 使用說明](docs/GitHub使用說明.md) | 負責上架與維護資料的人：第一次上架、線上修改 CSV、更新 XML、多人協作、常見問題 |
| [資料整理紀錄](docs/資料整理紀錄.md) | 修改資料前必讀：資料來源、判斷原則、待確認事項 |
| [開發指引 SKILL](.claude/skills/proface-hmi-selector/SKILL.md) | 後續開發者與 AI 開發助手：架構、常見工作、必須遵守的原則、容易踩到的地方 |
| [版本紀錄](CHANGELOG.md) | 各版本的變更 |
| 本頁下方 | CSV 欄位規格速查 |

## 快速開始

1. **只是要用**：雙擊 `index.html`，或開啟 GitHub Pages 網址。
2. **要上架到 GitHub**：照 [GitHub 使用說明](docs/GitHub使用說明.md) 第一章操作，約 10 分鐘。
3. **要修改資料**：改 `data/csv/` 底下的 CSV，提交後自動檢查、重建與部署。

## 網站功能

| 分頁 | 用途 |
|---|---|
| 找機種 | 點選 GP-Pro EX 版本、尺寸、開口、遠端功能、介面、觸控等條件，列出符合與接近的機種，並標出差異 |
| 查機種 | 已知型號時，查看規格、遠端功能支援、開口與替換建議 |
| 舊機替換 | 選現場舊機，列出原廠建議替換與開口相同的現行機種，並標出功能差異 |
| 比較 | 最多 4 台並排比較，差異項目以底色標示 |
| 說明與來源 | 功能說明、狀態意義與所有原廠資料來源 |

## 資料夾說明

| 位置 | 內容 | 誰來改 |
|---|---|---|
| `index.html` | 網頁本體 | 要改介面時 |
| `data/csv/` | 人工整理的資料，可用 Excel 開啟編輯 | 一般維護都在這裡 |
| `xml/` | GP-Pro EX 的 HmiInfo.xml，檔名格式 `HmiInfo_<版本>.xml` | 新版軟體出來時放入 |
| `data/models.generated.json` | 由 XML 自動產生 | 不要手動改 |
| `data/hmi-data.js` | 網頁讀取的資料，自動產生 | 不要手動改 |
| `tools/` | 轉換、建置、匯出與測試程式 | |
| `.github/workflows/` | GitHub Actions 自動建置與部署設定 | |
| `docs/` | 使用說明與資料整理紀錄 | |
| `.claude/skills/` | 開發指引（SKILL） | 架構或規則改變時更新 |

## CSV 欄位規格速查

所有 CSV 以 UTF-8 儲存，Excel 存檔請選「CSV UTF-8（逗號分隔）」。

### 規則怎麼套用

`features.csv`、`cutouts.csv`、`replacements.csv` 都是「規則」：每一列指定一群機種，由上往下套用，**下面的列會覆蓋上面的列**（替換建議則是全部列出）。通常先寫一列「整個系列」，再在下面寫個別機種的例外。

| 比對方式 | 比對值寫法 | 範例 |
|---|---|---|
| 全部 | 留空 | 整個系列 |
| 完全相同 | 機種名稱，多個用 `\|` 分隔 | `GP-4201T\|GP-4203T` |
| 開頭 | 名稱開頭，多個用 `\|` 分隔 | `AGP-3500T` 會符合 `AGP-3500T-CA1M` |
| XML群組 | XML 的群組名稱 | `SP-5B00` |

機種名稱以 XML 名稱為準，可在網站「查機種」詳細頁的「XML 名稱」或 `data/models.generated.json` 的 `name` 查到。

### 各檔案

| 檔案 | 內容 | 允許的值 |
|---|---|---|
| `features.csv` | 遠端與網路功能 | 狀態：支援、不支援、有條件、舊版、待確認；空白代表這一列不改此功能。資料以 XML 為主並做二次查核：這裡填的是查核結論；留空或待確認時，Remote HMI、FTP、E-mail、EZ LAN、Web Server 會自動採用 XML。Remote HMI 另有連線數、最低版本，GP-Viewer EX 另有最低版本 |
| `cutouts.csv` | 開口尺寸 (mm) | 安裝方式：方形、圓孔、盒型、手持、IPC；需再確認：Y 或空白 |
| `replacements.csv` | 原廠建議替換 | 開口：相同、不同，或空白表示原廠未說明 |
| `sources.csv` | 資料來源 | 其他檔案的「來源」欄填這裡的代號，多個用 `\|` 分隔 |
| `series.csv` | 系列名稱、顯示順序、說明、原廠網址 | |
| `feature_defs.csv` | 功能名稱與說明 | |
| `special_switches.csv` | 特殊開關切換，**內部資料，不放進儲存庫**（已列入 `.gitignore`）。只在內部離線版放入 `data/csv/` 後自行建置 | 欄位：開關、英文說明、中文說明、用途、補充說明、系列、比對方式、比對值、相關功能。系列空白為通用開關；相關功能填功能代號（例如 gpViewer、ftp）時，會顯示在該功能的備註 |
| `models_extra.csv` | XML 尚未收錄的機種 | 最新版狀態：可新建、免費版、僅開啟（空白為可新建）；首次版本：從哪一版 GP-Pro EX 開始可用，例如 4.09，空白代表只有最新版；型態：面板、盒型、手持、IPC |

新增資料時請一併新增來源，並優先使用 proface.com 英文頁。

## 開發與測試

```
python tools/xml2models.py        # 由 XML 產生機種清單
python tools/build.py --check     # 檢查 CSV
python tools/build.py             # 重建 data/hmi-data.js
python tools/test_page.py         # 網頁自動測試（需 pip install playwright）
python tools/export_review.py     # 匯出核對用 Excel（需 pip install openpyxl）
```

詳細的開發規則請看 [開發指引 SKILL](.claude/skills/proface-hmi-selector/SKILL.md)。

## 注意

本工具為初步選型。正式採購、改孔或替換前，請依確切型號、硬體版本、GP-Pro EX 版本與原廠最新文件確認。

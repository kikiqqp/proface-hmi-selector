---
name: proface-hmi-selector
description: 維護與擴充 Pro-face HMI 選型網站（本儲存庫）。修改機種資料、遠端功能支援、開口尺寸、替換建議，匯入新版 GP-Pro EX 的 HmiInfo.xml，或修改 index.html 網頁功能時使用。
---

# Pro-face HMI 選型網站開發指引

本儲存庫是靜態網站：`index.html`（版面、樣式、程式都在這一個檔案）讀取 `data/hmi-data.js`，部署在 GitHub Pages。資料由 GP-Pro EX 的 HmiInfo.xml 加上人工整理的 CSV 合併而成。唯一的網路依賴是 Google Fonts，離線時改用系統字型，功能不受影響。

開始任何工作前，先讀：

1. `README.md`：專案總覽與 CSV 欄位規格。
2. `docs/資料整理紀錄.md`：資料來源、已做過的判斷、待確認事項。**改資料前一定要讀**，避免把查證過的值改錯。
3. `docs/GitHub使用說明.md`：上架、維護與新增機種的操作步驟。改了流程或 CSV 欄位，要同步更新這份文件。

## 資料流程

```
xml/HmiInfo_<版本>.xml
   │ tools/xml2models.py（自動讀取 xml/ 所有版本，取聯集並記錄各版本狀態）
   ▼
data/models.generated.json（不可手改）
   │
   │   data/csv/*.csv（人工資料，規則由上往下套用，下面覆蓋上面）
   │      │
   ▼      ▼
tools/build.py（--check 只檢查）
   ▼
data/hmi-data.js（window.HMI_DATA，不可手改；updated 為資料庫日期）
   ▼
index.html
```

**資料庫日期**：`build.py` 在 `hmi-data.js` 寫入 `updated`（台灣時間 UTC+8，格式 `yyyy-MM-dd hh:mm:ss`）。只有資料內容和現有檔案不同時才換新時間，避免每次 Actions 都產生新提交。網頁標題下方顯示「機種資料 N 筆，資料庫日期: …」，說明與來源分頁也會列出。

## 部署（GitHub Actions）

`.github/workflows/build-data.yml`：

1. 觸發：推送到 main、Pull Request（只檢查，不提交、不部署）、手動 Run workflow。
2. 步驟：檢查儲存庫沒有 `data/csv/special_switches.csv`（有就失敗）→ `xml2models.py` → `build.py --check` → `build.py` → 把 `hmi-data.js`、`models.generated.json` 提交回 main → 只複製 `index.html` 與 `data/hmi-data.js` 到 `_site/` → `upload-pages-artifact` → `deploy-pages`。
3. 公開網站只有 `_site/` 的兩個檔案。若網頁新增其他檔案（圖片、字型等），要一併加進「準備網站檔案」步驟，否則線上會 404。
4. Pages 的 Source 必須設為 GitHub Actions，Workflow permissions 必須是 Read and write。
5. 使用的 action 版本：`checkout@v6`、`setup-python@v6`、`upload-pages-artifact@v5`、`deploy-pages@v5`（皆支援 Node 24；GitHub 已於 2026-09-23 移除 Node 20）。出現 Node 版本警告時升級到最新主版本。
6. 不要改成 Deploy from a branch：由 Actions 以 GITHUB_TOKEN 推送的提交不會觸發分支部署。

## 常見工作

### 修改資料

1. 只改 `data/csv/`，不要改 `hmi-data.js` 或 `models.generated.json`。
2. 改完執行：
   ```
   python tools/xml2models.py
   python tools/build.py --check
   python tools/build.py
   ```
3. `--check` 的「提醒：沒有對應到任何機種」通常代表機種名稱打錯，要處理。
4. 每筆新資料都要有來源：先在 `sources.csv` 新增代號，再在資料列的「來源」欄引用。

### 匯入新版 XML

1. 檔名一定要是 `xml/HmiInfo_<版本>.xml`，版本為數字加點，例如 `5.02`。
2. 重建後比對新舊 `models.generated.json`：新增的機種、`versions` 中最新版狀態改變的機種、新出現的 Property 名稱。網頁的版本按鈕與版本標籤會依 `versions` 自動增加，不需要改網頁。
3. 新機種要在 `features.csv`、`cutouts.csv` 補規則，否則網頁顯示待確認或未建檔。子系列由 XML 的 group 自動產生，不用設定。
4. `models_extra.csv` 中已被新版 XML 收錄的機種，提醒使用者刪除那一列（同系列同名時 `models_extra.csv` 會取代 XML 資料）。
5. 新的解析度代碼要加進 `tools/xml2models.py` 的 `RES`，並註明原廠來源網址。
6. 新系列要加進 `tools/xml2models.py` 的 `SERIES_KEY` 與 `data/csv/series.csv`（等級欄決定在進階、標準、基本、入門、舊機種、工業電腦哪一組）。
7. 新版 XML 若把機種名稱改成 `F5.7A` 這類代稱（5.02 起出現），`xml2models.py` 的 `PLACEHOLDER` 會沿用舊名並把該版狀態標 `unknown`；出現新的代稱格式時要更新這個規則。
8. 新版 XML 多出的 COM 埠會進 `comAdded`，要查原廠文件確認是本體還是擴充單元，並在 `index.html` 的 `comMore()` 補說明。

### XML 還沒收錄的機種

寫在 `data/csv/models_extra.csv`。`build.py` 的 `load_extra_models()` 讀取：「最新版狀態」（可新建、免費版、僅開啟，空白為可新建；舊欄名「5x狀態」仍可讀）決定 `statusLatest`；「首次版本」是 `xml/` 中已有的版本時，該版以後各版都標為最新版狀態，之前標 `absent`，空白或不在 XML 版本內時只標最新版。

### 傳輸線

`data/csv/discon.csv` 由 `build.py` 讀成每台機種的 `discon = [{code, eos, eor, n, src}]`，網頁以 `isEOS()`（全部停售日已過）標示「已停售」，舊機替換時排在後面，`nearCut()` 不列已停售機種。`data/csv/memory.csv` 讀成 `memWeb = {code, u, b, v, o, n}`（原廠規格頁的使用者資料記憶體 MB、備份記憶體 KB、變數區 KB、其他記憶體、備註），規格表以 XML 為主並用 `memU()`、`memB()` 註明原廠容量，不同時標「與 XML 不同」。「畫面記憶體」一律改稱「使用者資料記憶體」（原廠 User data memory）。`data/csv/rtc.csv` 讀成 `rtc = {s, how, n, src}`（`s`：yes、no、cond 需選購電池、unknown），規格表與比較表以 `rtcTxt()` 顯示「時鐘（RTC）」，沒有符合的列顯示「未建檔」。`data/csv/software.csv` 讀成 `soft = {blue, bos}`（狀態代碼同功能），沒有符合的列預設為 `no` 並註明原廠清單未列。舊機替換的開口相同清單以 `isRec()` 比對原廠建議替換文字中的型號（`tok()`、`mkey()`，GP6000 以 PFX 型號前綴比對），原廠建議排最前並標 `b-rec`。

`data/csv/cables.csv` 由 `build.py` 讀成每台機種的 `cable = {t, kinds, n, src}`。`kinds` 只能是 `CABLE_KINDS`（`USB A`、`USB mini-B`、`USB micro-B`、`Tool`），網頁「找機種」的傳輸線篩選用它比對，說明頁的傳輸線表也由它自動產生。使用者要求：一般 USB 線只寫型式，不寫原廠型號；只有原廠專用線（USB A 對 USB A 的 CA3-USBCB-01、GP2000 的 GPW-CB02、GPW-CB03、GPW-CB-SET）寫型號，並註明支援機種。目前未建檔：GPH6000、ET5000、HTK。

### GP2000 與其他非 GP-Pro EX 機種

寫在 `models_extra.csv`，「最新版狀態」填「不支援」，所有版本標 `absent`；「開發軟體」欄寫實際軟體（例如 GP-PRO/PB III），網頁規格表顯示，空白時顯示 GP-Pro EX。

### 修改網頁

1. `index.html` 是單一檔案：CSS、HTML、JavaScript 都在裡面，不使用框架或建置工具。
2. 所有從資料來的文字都要經過 `esc()` 再放進 HTML。
3. **尺寸一律用 rem**，不要寫 px（SVG 內部座標除外）。字級切換是改 `html` 的 `font-size`（`data-fs` 屬性），用 px 會讓該元素不跟著縮放。
4. 版面斷點：900px 以下條件改為全螢幕面板（`.filters.open`），600px 以下表格改為堆疊顯示（`.stack`）。新增的條件區塊用 `grp()` 產生，才會有收合與已選數量。
5. 「找機種」條件區塊順序固定為：系列、開發軟體（GP-Pro EX 版本 `F.ver`、BLUE／BOS `F.sw`、PB III，同區塊任一符合即可）、螢幕尺寸（含畫面比例）、開口尺寸、遠端與網路功能、介面、記憶體（`F.umem`、`F.bmem`，「至少」，每組只能選一項，以 XML 的 `appMemoryMB`、`backupMemoryKB` 比對）、觸控、傳輸線、停售狀態。卡片的 `badge()` 會附 `swBadges()`（BLUE ✓、BLUE 舊版、BOS ✓）。預設展開狀態在 `GOPEN`，使用者的展開狀態存在瀏覽器（`gopen`）。
6. 「找機種」所有條件都是陣列、都可複選：同一區塊內符合任一項即可（OR），不同區塊要同時符合（AND）。不要再新增單選條件，否則使用者會困惑。舊版瀏覽器存的字串條件在 `F` 初始化時轉成陣列。條件面板內一律用 `chip()` 按鈕（會自然換行）；`seg()` 分段按鈕不會換行，只用在空間足夠、選項短的地方（目前只有結果排序）。
7. 「查機種」「舊機替換」的步驟是 系列 → 子系列 → 機種（SP5000 為 系列 → 顯示器 → Box）。右上角有「重新選擇」（`#mReset`、`#rReset`）。「找機種」的重新選擇在結果標題右側（`#fResetTop`，有條件或排序時才出現）、條件欄最上方（`#fReset`）與手機上方列（`#fResetBar`），會清除所有條件與排序。型號按鈕只顯示型號與尺寸，**不加註版本狀態**（例如「5.01 不可新建」），版本狀態只在詳細頁與找機種卡片顯示。
8. 比較頁的「列印／存成 PDF」呼叫 `window.print()`，`@media print` 只留比較表（A4 橫式），`.print-only` 區塊放列印日期與資料庫日期。新增比較欄位時確認列印版面不會超出頁寬。
9. 功能狀態代碼：`yes`、`no`、`cond`、`ended`、`unknown`。版本狀態代碼（每台機種的 `versions[版本]`）：`full` 可新建、`free` 免費版可用、`open-only` 僅可開啟、`unknown` 待確認（該版 XML 名稱寫成代稱，見 `xmlAlias`）、`absent` 該版未收錄。新版 XML 才多出的 COM 埠放在 `comAdded`（`com` 只留本體內建埠），規格表以「其他 COM 埠」列出。`statusLatest` 等於最新版的狀態。開發軟體（`software`）含「PB III」的機種，`badge()` 只顯示一個「PB III 舊硬體」標籤（`b-pb3`），不顯示各版本標籤；找機種版本條件的 `PB III` 選項以 `isPB()` 篩選。models_extra.csv 的「GP-Pro EX轉換」「轉換來源」欄成為 `m.convert`（PB III 專案可轉換到的 GP-Pro EX 機種，依 GP-Pro EX 手冊 4.1.1），顯示在規格表與舊機替換頁。規格與比較表的 LAN 埠、USB A 用 `portN()` 顯示：0 為「無」，空白為「未標示」。
10. 改完執行測試：
   ```
   pip install playwright
   python -m playwright install chromium
   python tools/test_page.py
   ```
   會跑電腦版與手機版，檢查各分頁、JavaScript 錯誤與手機橫向捲動，截圖在 `test-output/`。新增功能時請一併在測試中加上檢查。
11. 新增篩選條件：在 `FEAT_OPTS`、`IFACE_OPTS` 或新增一組選項，於 `renderFilters()` 用 `grp()` 產生區塊，於 `check()` 加判斷，於 `activeList()` 加上已選條件的顯示文字，並把預設值加進 `F` 的初始物件與 `RESET()`。

### 新增功能欄位（例如新的遠端功能）

1. `tools/build.py` 的 `FEATURES` 加上代號與 CSV 欄位標題。
2. `data/csv/features.csv` 加兩欄：`<標題>`、`<標題> 備註`。
3. `data/csv/feature_defs.csv` 加一列說明。
4. `index.html` 的 `FK` 陣列加上代號；要能篩選的話也加進 `FEAT_OPTS`。

## 必須遵守的原則

1. **所有版本的機種都要列出**。網頁預設不得依版本隱藏機種，版本只能當使用者主動選擇的篩選條件。業務常需要查舊版軟體支援、新版已不能新建的機種。
2. **以 XML 資料為主，但需要二次查核**：查核結果（原廠文件或現場確認）寫在 `features.csv`，有結論時以查核結論為準；查不到時採用 XML，標有為支援，標無或沒有欄位為不支援。對應規則在 `tools/build.py` 的 `XML_FALLBACK`（Remote HMI、FTP、E-mail、EZ LAN、Web Server）。備註不寫「XML 標示有」這類說明。發現 XML 與查核結果不一致時，記錄到 `docs/資料整理紀錄.md` 的不一致表格。
3. **不猜資料**。既查不到、XML 也沒有欄位的功能才標「待確認」，查不到的開口留空並在備註寫「待查」，不用螢幕吋數推算開口，不把 XML 的硬體旗標當成軟體實際支援。
4. **來源優先順序**：GP-Pro EX 線上手冊「1.5 支援功能」頁 > 原廠產品頁、規格頁（`proface.com/en/product/spec/<型號代碼>`）> 原廠型錄與替換手冊 > 第三方轉載（必須標「需再確認」）。
5. 原廠連結一律用 `proface.com` 英文頁。`pro-face.com/otasuke` 目前只顯示暫停服務公告。
6. 網頁介面與文件使用繁體中文，文字中不使用破折號類符號（型號本身的連字號除外）。
7. 保持簡單：不引入前端框架、不需要額外 Python 套件就能建置（`test_page.py` 與 `export_review.py` 例外）。

## 容易踩到的地方

1. **機種唯一鍵含有 `|`**（例如 `0F010100|GP-35** Series|AGP-3500T`），在網頁中需要組合多個鍵時不要用 `|` 分隔，目前用 `::`。
2. **XML 是各版本的聯集**：`xml2models.py` 由新到舊合併所有版本，規格以最新收錄的版本為準，用 `id + 名稱` 比對，比對不到再用 `id`（處理改名）。不要改成只讀最新版，否則新版移除的機種會消失。
3. **XML 的 Revision**：第一個是完整資料，之後只有差異欄位，不能直接拿最後一個當完整資料。
4. **SP5000** 每個「顯示器 × Box」是一筆資料。網頁「找機種」以顯示器合併成一張卡片，「查機種」先選顯示器再選 Box；「開口相同的現行機種」只用 SP-5B10 代表，避免重複。
5. 舊機替換沒有開口相同的機種時，`nearCut()` 列出開口相近的現行機種（`NEAR_MAX` 30 mm、`NEAR_N` 每類 3 款、同系列取最近一款），分「擴孔即可」與「需轉接板」兩類，並以 `.near-note` 明確標示「不是同規格、不是原廠建議」。這段不能改成看起來像相同規格或原廠建議。非面板安裝（`mount` 為 handheld、ipc、box）以 `NO_CUT` 說明不比對開口。
5. **子系列** 取 XML 的 `group`（例如 `GP-41** Series`），由 index.html 的 `subGroups()` 產生，依型號數字排序，沒有數字的（Rear Module、4G）排最後。系列內只有一組或 group 為空時不顯示；SP5000 不使用。型號按鈕不標版本狀態，版本只在詳細頁顯示。
6. **規則覆蓋順序**：`features.csv`、`cutouts.csv` 下面的列覆蓋上面；`replacements.csv` 則是所有符合的列都會列出。
7. **CSV 編碼**：讀取用 `utf-8-sig`。使用者以 Excel 編輯時必須存成「CSV UTF-8」。
8. **Markdown 表格**：儲存格中的 `|` 即使在反引號裡也要寫成 `\|`，否則 GitHub 會切斷欄位。
9. **GitHub Pages**：Pages 的 Source 必須設為 GitHub Actions。由 Actions 推送的 commit 不會觸發分支部署，所以 workflow 在同一個流程中直接部署。
10. **網頁的 hash 路由**只用 `#find`、`#model`、`#replace`、`#compare`、`#about` 這種簡單名稱。
11. **瀏覽器儲存**（篩選條件、比較清單）一律包在 try/catch，無法使用時網頁仍要正常運作。

## 檔案速查

| 檔案 | 用途 |
|---|---|
| `index.html` | 網頁本體 |
| `tools/xml2models.py` | XML 轉機種清單；`RES` 解析度對照、`SERIES_KEY` 系列代號 |
| `tools/build.py` | 合併 CSV、檢查、輸出 `hmi-data.js` |
| `tools/export_review.py` | 匯出核對用 Excel 到 `review/`（需 openpyxl） |
| `tools/test_page.py` | 網頁自動測試（需 playwright） |
| `data/csv/` | 人工資料。`special_switches.csv` 是內部機密資料，已列入 `.gitignore`，**絕對不可提交到儲存庫或放進公開網站**；不存在時建置、網頁與測試都要正常運作。workflow 偵測到這個檔案會直接失敗；用網頁拖曳上傳不受 `.gitignore` 保護，文件中要持續提醒 |
| `docs/網頁使用說明.md` | 給使用者 |
| `docs/GitHub使用說明.md` | 給維護資料的人：上架、修改 CSV、新增機種、排除錯誤 |
| `.github/workflows/build-data.yml` | 自動檢查、建置與部署 |
| `docs/資料整理紀錄.md` | 資料來源、判斷與待確認事項 |

# GitHub 使用說明

本頁說明怎麼把選型網站放上 GitHub、開放網址給業務使用，以及日後怎麼修改資料和新增機種。全部操作都可以在 GitHub 網頁上完成，不需要安裝任何程式。

## 零、先了解架構

### 儲存庫裡有什麼

| 位置 | 內容 | 誰來改 |
|---|---|---|
| `index.html` | 網頁本體（版面、樣式、程式都在這一個檔案） | 要改介面時 |
| `data/csv/` | 人工整理的資料：功能支援、開口、替換建議、系列、來源 | **日常維護都在這裡** |
| `xml/` | 各版 GP-Pro EX 的 HmiInfo.xml | 新版軟體出來時放入 |
| `data/models.generated.json` | 由 XML 自動產生的機種清單 | 不要手動改 |
| `data/hmi-data.js` | 網頁讀取的資料，由 XML 加 CSV 自動產生 | 不要手動改 |
| `tools/` | 轉換、檢查、建置、測試程式 | 開發者 |
| `.github/workflows/build-data.yml` | 自動建置與部署設定 | 開發者 |
| `docs/`、`README.md`、`CHANGELOG.md` | 說明文件 | |
| `.claude/skills/` | 給開發者與 AI 開發助手的開發指引 | 架構或規則改變時 |

### 自動化流程

```
在 GitHub 修改 data/csv/*.csv，或放入新的 xml/HmiInfo_<版本>.xml
        ↓ 提交（Commit）
GitHub Actions 自動執行
  1. 檢查有沒有誤傳內部機密檔
  2. 由所有版本的 XML 產生機種清單
  3. 檢查 CSV 有沒有填錯（有錯就停止，網站維持原樣）
  4. 重建 data/hmi-data.js 並提交回儲存庫
  5. 只把 index.html 和 data/hmi-data.js 部署到 GitHub Pages
        ↓ 約 1～3 分鐘
網站更新完成
```

公開網站上只有網頁和整理好的資料。XML、CSV 原始檔、文件只在儲存庫裡，不會出現在網站上。

### 內部機密資料

特殊開關切換表 `special_switches.csv` 是內部資料，**不可以上傳到 GitHub**。

1. 專案已在 `.gitignore` 排除這個檔案，但 `.gitignore` 只對 Git 指令與 GitHub Desktop 有效；**用網頁拖曳上傳時不會被擋下**。
2. 為了避免誤傳，自動流程第一步會檢查。儲存庫裡出現這個檔案時，流程會失敗，網站不會更新。
3. 萬一已經上傳：立刻刪除檔案。因為提交紀錄裡仍查得到，公開儲存庫要請熟悉 Git 的人清除紀錄，或直接刪除儲存庫重建。

## 一、第一次上架

### 1. 建立儲存庫

1. 登入 GitHub，右上角 **＋** → **New repository**。
2. Repository name 輸入名稱，例如 `proface-hmi-selector`。
3. 選 **Public**。GitHub 免費方案的個人帳號只有公開儲存庫能用 GitHub Pages；私人儲存庫需要付費方案。
4. 不要勾選 Add a README（專案裡已經有了）。
5. 按 **Create repository**。

### 2. 上傳檔案

**方法 A：網頁上傳（最簡單）**

1. 在新儲存庫頁面點 **uploading an existing file**（或 **Add file** → **Upload files**）。
2. 把解壓縮後資料夾「裡面」的所有檔案和資料夾一起拖進去，不是拖整個外層資料夾。
3. 按 **Commit changes**。
4. 檢查有沒有 `.github` 資料夾。Windows 和 macOS 預設隱藏以 `.` 開頭的資料夾，拖曳時可能漏掉。`.github` 一定要有，否則不會自動部署；`.claude` 和 `.gitignore` 缺少不影響網站。補上的方法：
   1. **Add file** → **Create new file**。
   2. 檔名欄輸入 `.github/workflows/build-data.yml`（輸入 `/` 會自動變成資料夾）。
   3. 打開專案裡的同名檔案，全部複製貼上，按 **Commit changes**。
   4. 其他隱藏資料夾也可以用同樣方式補上。
   5. 顯示隱藏檔案：Windows 檔案總管 **檢視** → 勾選 **隱藏的項目**；macOS Finder 按 Cmd＋Shift＋.。

**方法 B：GitHub Desktop（之後常改資料建議用這個）**

1. 安裝 GitHub Desktop 並登入。
2. **File** → **Clone repository**，選剛建立的儲存庫。
3. 把專案檔案全部複製到 clone 下來的資料夾（隱藏資料夾也會一起複製）。
4. 左下角輸入說明，按 **Commit to main**，再按 **Push origin**。

### 3. 開啟 GitHub Pages

1. 儲存庫上方 **Settings** → 左側 **Pages**。
2. **Build and deployment** 的 **Source** 選 **GitHub Actions**。
   不要選 Deploy from a branch。由 Actions 推送的提交不會觸發分支部署，選錯的話網站不會隨資料自動更新。

### 4. 確認 Actions 權限

1. **Settings** → 左側 **Actions** → **General**。
2. 最下方 **Workflow permissions** 選 **Read and write permissions**，按 **Save**。
3. 帳號屬於組織而這個選項是灰色的，請組織管理員開放。

### 5. 第一次部署

1. 儲存庫上方 **Actions** 分頁，左側點 **建置並部署選型網站**。
2. 右側 **Run workflow** → **Run workflow**。
3. 等待變成綠色勾勾，點進去，**deploy** 下方會顯示網址：
   `https://<帳號>.github.io/<儲存庫名稱>/`
4. 把這個網址給業務即可，電腦和手機都能開。之後每次修改資料都會自動部署。

## 二、修改資料的兩種方式

### 方法 A：直接在 GitHub 網頁修改（改幾格）

1. 進入 `data/csv/`，點要改的檔案。GitHub 會以表格顯示，方便查看。
2. 點右上角鉛筆圖示 **Edit this file**，會變成文字模式，每列以逗號分隔欄位。
3. 修改後按 **Commit changes**。跳出視窗時：
   1. 自己維護：選 **Commit directly to the main branch**。
   2. 多人維護、想先審核：選 **Create a new branch for this commit and start a pull request**，請見第五章。
4. 到 **Actions** 分頁看結果。

文字模式要注意：欄位內容有半形逗號時，整格要用雙引號包起來，例如 `"支援 FTPS,需另購授權"`。改用全形逗號「，」就不需要。

### 方法 B：用 Excel 修改（改很多）

1. 在 GitHub 點開 CSV 檔，右上角 **Download raw file** 下載。
2. 用 Excel 開啟並修改。
3. **另存新檔**，存檔類型選 **CSV UTF-8（逗號分隔）(*.csv)**，檔名不變。選一般的「CSV（逗號分隔）」中文會變亂碼。
4. 回到 GitHub 的 `data/csv/`，**Add file** → **Upload files**，拖入檔案會覆蓋同名檔案，按 **Commit changes**。

### 規則怎麼寫

`features.csv`、`cutouts.csv`、`replacements.csv` 每一列是一條「規則」：指定一群機種，填要設定的欄位。

1. 由上往下套用，**下面的列覆蓋上面的列**；`replacements.csv` 則是所有符合的列都會列出。
2. 習慣寫法：先寫一列整個系列，再在下面寫個別機種的例外，例外只填要改的欄位，其他留空。
3. 比對方式：

| 比對方式 | 比對值 | 範例 |
|---|---|---|
| 全部 | 留空 | 整個系列 |
| 完全相同 | 機種名稱，多個用 `\|` 分隔 | `GP-4201T\|GP-4203T` |
| 開頭 | 名稱開頭，多個用 `\|` 分隔 | `AGP-3500T` 會符合 `AGP-3500T-CA1M` |
| XML群組 | XML 的群組名稱，也就是網站上的子系列 | `GP-45** Series`、`SP-5B00` |

4. 機種名稱以 XML 名稱為準，可在網站「查機種」詳細頁規格表最下方的「XML 名稱」查到。
5. 每筆資料都要有來源：先在 `sources.csv` 新增一列（代號、名稱、網址），再在資料列的「來源」欄填代號，多個用 `|` 分隔。網址優先用 proface.com 英文頁。

### 功能狀態怎麼決定

功能資料以 XML 為主，但需要二次查核：

1. `features.csv` 填的是查核結論（原廠文件或現場確認），有填就以它為準。
2. 留空或填「待確認」時，Remote HMI、FTP、E-mail、EZ LAN、Web Server 會自動採用 XML 的值：XML 標有為支援，標無或沒有欄位為不支援。
3. 其他功能（GP-Viewer EX、Pro-face Connect、IPsec）XML 沒有資料，查不到就維持「待確認」，不要用猜的。
4. 可填的狀態：支援、不支援、有條件、舊版、待確認。

## 三、確認結果與排除錯誤

1. 儲存庫上方 **Actions** 分頁，最新一筆：
   1. 黃色圓圈：執行中。
   2. 綠色勾勾：成功，1～3 分鐘後網站更新。
   3. 紅色叉叉：檢查失敗，網站維持修改前的樣子。
2. 紅色叉叉時，點進去 → **build** → 展開失敗的步驟，會列出錯誤，例如：
   ```
   發現錯誤：
     features.csv 第 12 列：Remote HMI 狀態只能是 支援／不支援／有條件／舊版／待確認（OK）
     cutouts.csv 第 5 列：來源代號 S_ABC 不在 sources.csv
   ```
   依訊息改正後再提交一次即可。
3. 「提醒：某檔第幾列沒有對應到任何機種」不算錯誤，但通常代表機種名稱打錯。
4. 網站標題下方會顯示「機種資料 N 筆，資料庫日期: yyyy-MM-dd hh:mm:ss」（台灣時間）。日期是資料內容最後一次改變的時間，只改文件或重跑流程而資料沒變時，日期不會變。
5. 網站看起來沒更新時，先對照資料庫日期，再按 Ctrl＋F5（Mac 為 Cmd＋Shift＋R）強制重新整理。

## 四、新增機種與常見修改

先判斷是哪一種情況：

| 情況 | 做法 |
|---|---|
| 新版 GP-Pro EX 出來了，裡面有新機種 | 範例 1：放入新版 XML |
| 原廠已發表新機種，但手上的 GP-Pro EX 還沒收錄 | 範例 2：寫進 `models_extra.csv` |
| 新機種屬於全新系列 | 範例 3：先新增系列 |
| 機種已在網站上，只是功能、開口、替換資料要補或改 | 範例 4 到 6 |

### 範例 1：新版 GP-Pro EX（例如 5.02）

1. 從新版軟體安裝資料夾取出 `HmiInfo.xml`。
2. 改名為 `HmiInfo_<版本>.xml`，例如 `HmiInfo_5.02.xml`。版本只能是數字和點。
3. 上傳到儲存庫的 `xml/` 資料夾，提交。舊版 XML 不要刪，網站要靠它們列出舊機種。
4. 自動重建後：
   1. 所有版本的機種取聯集全部保留。
   2. 網站自動多出「5.02 可開發」篩選按鈕，每台機種多一個 5.02 狀態標籤，不用改網頁。
   3. 新機種依 XML 群組自動歸入子系列。
5. 到網站「查機種」找新機種，功能顯示「待確認」、開口顯示「未建檔」的，再到 `features.csv`、`cutouts.csv` 補規則。
6. 如果新機種屬於全新系列，或用了新的解析度代碼，網站會顯示原始代號，請開發者依 SKILL 在 `tools/xml2models.py` 補上對照（見範例 3）。
7. 之前寫在 `models_extra.csv` 的機種，若新版 XML 已收錄，建議刪除那一列，改用 XML 資料。

### 範例 2：XML 還沒有的新機種

在 `data/csv/models_extra.csv` 新增一列：

| 欄位 | 填法 | 範例 |
|---|---|---|
| 系列 | 系列代號，要和 `series.csv` 一致 | `GP4000` |
| XML群組 | 子系列名稱，沿用同系列既有寫法 | `GP-45** Series` |
| 機種名稱 | 型號，和 XML 已有的機種同名時會取代 XML 資料 | `GP-45X1TW` |
| 尺寸吋 | 數字 | `10.4` |
| 解析度代碼 | 可留空 | `SVGA` |
| 解析度像素 | | `800×600` |
| 色彩 | Color 或 Mono | `Color` |
| 觸控 | `analog`、`analog(multi-touch)`、`p-cap(multi-touch)`、`matrix`、`none`，可留空 | `analog` |
| LAN埠數、USB_A、USB_miniB、USB_microB | 數字 | `1` |
| COM埠 | 格式「埠號 種類」，種類為 RS232C、RS422/485、RS232C/RS422/485，多個用 `\|` 分隔 | `COM1 RS232C\|COM2 RS422/485` |
| 記憶卡槽 | 有、無 | `有` |
| RemoteHMI連線數、畫面記憶體MB | 數字 | `3`、`16` |
| 最新版狀態 | 可新建、免費版、僅開啟；空白為可新建 | `可新建` |
| 首次版本 | 從哪一版 GP-Pro EX 開始可用，例如 `4.09`；空白代表只有最新版 | `5.01` |
| 型態 | 面板、盒型、手持、IPC | `面板` |
| 備註 | 顯示在規格表 | `依原廠 2026 型錄` |

填好後，一樣要在 `features.csv`、`cutouts.csv` 補該機種的功能與開口規則。

### 範例 3：全新系列

1. 在 `data/csv/series.csv` 新增一列：

| 欄位 | 說明 | 範例 |
|---|---|---|
| 系列代號 | 英數代號，其他 CSV 都用這個 | `GP7000` |
| 排序 | 數字，越小越前面 | `3` |
| 顯示名稱 | 網站上顯示的名字 | `GP7000 標準型` |
| 等級 | advanced、standard、basic、entry、legacy、ipc，決定在「進階、標準、基本、入門、舊機種、工業電腦」哪一組 | `standard` |
| 說明 | 一句話定位 | `GP4000 後繼機種` |
| 原廠網址 | proface.com 英文系列頁 | |

2. 新系列來自新版 XML 時，還要請開發者在 `tools/xml2models.py` 的 `SERIES_KEY` 加上「XML 系列名稱 → 系列代號」的對照，否則網站會顯示 XML 原始名稱。
3. 在 `features.csv` 先寫一列「全部」作為整個系列的預設值，再補開口與替換資料。

### 範例 4：修正某機種的功能狀態

例如確認 GP6000 Standard 支援 GP-Viewer EX：

1. 開啟 `features.csv`，找到系列為 `GP6000S`、比對方式為「全部」的那一列。
2. 「GP-Viewer EX」欄改為「支援」，「GP-Viewer EX 備註」寫依據。
3. 「來源」欄加上來源代號。依據是新的網頁或手冊時，先在 `sources.csv` 新增。
4. 只改單一機種時，在系列那一列「下面」新增一列：比對方式填「完全相同」，比對值填機種名稱，只填要改的欄位。

### 範例 5：補開口尺寸

開啟 `cutouts.csv`，找到該機種的列，或新增一列，填寬W、高H、面板厚與來源。還沒確認的資料在「需再確認」填 `Y`，網頁會標示提醒。

### 範例 6：新增原廠替換建議

在 `replacements.csv` 新增一列：系列、比對方式、比對值（舊機名稱）、建議替換為、開口（相同、不同，或空白表示原廠未說明）、備註、來源。

## 五、多人協作

建議用 Pull Request，修改先經過檢查與審核再上線：

1. 修改時選 **Create a new branch for this commit and start a pull request**，填寫說明，按 **Create pull request**。
2. GitHub Actions 會自動「只檢查不部署」，頁面顯示綠色勾勾或紅色叉叉。
3. 審核者確認內容與來源，按 **Merge pull request**，合併後自動部署。

邀請協作者：**Settings** → **Collaborators** → **Add people**。想強制所有修改都經過 Pull Request，可在 **Settings** → **Branches** 設定分支保護規則。

## 六、本機使用與預覽

1. 儲存庫首頁 **Code** → **Download ZIP**，解壓縮後雙擊 `index.html` 即可離線使用。`index.html` 要和 `data/hmi-data.js` 保持相同的資料夾結構。
2. 在自己電腦重建資料（Python 3.9 以上，不需額外套件）：
   ```
   python tools/xml2models.py
   python tools/build.py --check
   python tools/build.py
   ```
3. `python tools/export_review.py` 匯出核對用的 Excel 到 `review/`（需要 openpyxl），方便請同事逐台核對。

## 七、常見問題

| 狀況 | 原因與處理 |
|---|---|
| Actions 分頁沒有任何紀錄 | `.github/workflows/build-data.yml` 沒有上傳成功，見第一章第 2 步 |
| 部署失敗，訊息提到 Pages 或 environment | Settings → Pages 的 Source 沒有選 GitHub Actions |
| 提交資料檔時失敗，訊息提到 permission 或 403 | Settings → Actions → General → Workflow permissions 沒有選 Read and write |
| 失敗訊息提到 special_switches.csv | 誤傳了內部機密檔，見第零章「內部機密資料」 |
| 中文變成亂碼 | Excel 存檔要選「CSV UTF-8」 |
| 修改後網站沒變 | 先看 Actions 是否綠色勾勾，再看標題下方的資料庫日期，最後按 Ctrl＋F5 強制重新整理 |
| 規則沒有作用 | 機種名稱要和「XML 名稱」完全一致；也可能被下面的列覆蓋了 |
| 網頁顯示「找不到資料檔」 | `data/hmi-data.js` 不存在，到 Actions 手動執行一次 |
| Actions 出現 Node.js 版本警告 | GitHub 會淘汰舊版執行環境，請開發者把 workflow 裡的 `actions/...@vN` 更新到最新版本 |

## 參考

1. GitHub 方案說明：<https://docs.github.com/en/get-started/learning-about-github/githubs-plans>
2. GitHub Actions 儲存庫設定：<https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository>
3. GITHUB_TOKEN 說明：<https://docs.github.com/en/actions/automating-your-workflow-with-github-actions/authenticating-with-the-github_token>
4. GitHub Actions 停用 Node 20：<https://github.blog/changelog/2026-09-23-node-20-is-no-longer-available-in-github-actions>

"""
網頁自動測試（冒煙測試）

用法:
    pip install playwright
    python -m playwright install chromium
    python tools/test_page.py

或指定已安裝的 Chrome:
    python tools/test_page.py --chrome /usr/bin/google-chrome

會以電腦版 (1360×900) 與手機版 (390×844) 各跑一次，檢查：
    1. 頁面載入、資料筆數顯示
    2. 找機種的條件點選與結果
    3. 查機種（含 SP5000 先選顯示器再選 Box）
    4. 舊機替換與「與舊機比較」
    5. 比較表差異標示
    6. 沒有 JavaScript 錯誤、手機版沒有橫向捲動
截圖存到 test-output/
"""
import argparse
import asyncio
import sys
from pathlib import Path

from playwright.async_api import async_playwright

ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / "test-output"


async def run(chrome):
    OUT.mkdir(exist_ok=True)
    url = (ROOT / "index.html").as_uri()
    failures, errors = [], []

    def ok(cond, msg):
        print(("  通過 " if cond else "  失敗 ") + msg)
        if not cond:
            failures.append(msg)

    async with async_playwright() as p:
        kw = {"args": ["--no-sandbox"]}
        if chrome:
            kw["executable_path"] = chrome
        browser = await p.chromium.launch(**kw)
        for w, h, tag in [(1360, 900, "電腦版"), (390, 844, "手機版")]:
            print(f"[{tag}]")
            pg = await browser.new_page(viewport={"width": w, "height": h})
            pg.on("pageerror", lambda e: errors.append(f"{tag}：{e}"))
            pg.on("console", lambda m: errors.append(f"{tag}：{m.text}") if m.type == "error" else None)
            await pg.goto(url + "#find")
            await pg.wait_for_timeout(600)
            ok("筆" in await pg.inner_text("#ver"), "資料載入")

            phone = w < 900
            if phone:
                await pg.click("#fOpen")
                ok(await pg.locator("#filters.open").count() == 1, "手機版：開啟篩選條件面板")

            async def open_group(g):
                d = pg.locator(f'details[data-g="{g}"]')
                if not await d.evaluate("e => e.open"):
                    await d.locator("summary").click()

            await pg.click('[data-f="size"][data-v="s5"]')
            await pg.click('[data-f="feats"][data-v="remoteHmi"]')
            await pg.click('[data-f="cut"][data-v="156×123.5"]')
            n = await pg.locator("#findRes .card:not(.near)").count()
            ok(n > 0, f"找機種：5.7 吋＋Remote HMI＋開口 156×123.5 有 {n} 款符合")
            await pg.screenshot(path=str(OUT / f"{tag}_找機種.png"))
            if phone:
                await pg.click("#fJump")
                ok(await pg.locator("#fResetBar").is_visible(), "手機版：有條件時上方顯示重新選擇")
                await pg.click("#fResetBar")
            else:
                await pg.click("#fResetTop")
            ok(await pg.locator("#findRes .active").count() == 0 and await pg.locator("#fResetTop").is_hidden(), "找機種：重新選擇會清除所有條件")
            if phone:
                await pg.click("#fOpen")

            await pg.click('[data-f="size"][data-v="s7"]')
            await pg.click('[data-f="cut"][data-v="190×135"]')
            names = await pg.locator("#findRes .card:not(.near) h3").all_inner_texts()
            ok("GP-4402WW" in names, "找機種：不限版本時列出 5.01 不可新建的 GP-4402WW")
            await open_group("ver")
            await pg.click('[data-f="ver"][data-v="5.01"]')
            names = await pg.locator("#findRes .card:not(.near) h3").all_inner_texts()
            ok("GP-4402WW" not in names and len(names) > 0, "找機種：選 5.01 可開發時排除 GP-4402WW")
            await pg.click('[data-f="ver"][data-v="4.09"]')
            names = await pg.locator("#findRes .card:not(.near) h3").all_inner_texts()
            ok("GP-4402WW" in names, "找機種：版本可複選，4.09 或 5.01 可開發時列出 GP-4402WW")
            await pg.click("#fReset")
            await open_group("ver")
            await pg.click('[data-f="ver"][data-v="PB III"]')
            n = await pg.locator("#findRes .card:not(.near)").count()
            npb = await pg.locator("#findRes .card:not(.near) .b-pb3").count()
            ok(n > 0 and n == npb, f"找機種：選 PB III 舊硬體只列舊機（{n} 張卡片）")
            ok(await pg.locator("#findRes .card:not(.near) .pills").count() == 0, "找機種：舊機沒有任何遠端功能時不顯示功能標籤")
            await pg.click("#fReset")
            if phone:
                await pg.click("#fJump")
                ok(await pg.locator("#filters.open").count() == 0, "手機版：按看結果關閉面板")

            await pg.click('[data-f="feats"][data-v="gpViewer"]') if not phone else None
            if not phone:
                n = await pg.locator("#findRes .active [data-rm]").count()
                ok(n >= 2, "已選條件顯示在結果上方")
                await pg.click('#findRes [data-rm="feats"]')
                ok(await pg.locator("#findRes .active").count() == 0, "點已選條件可移除")

            for fs in ("xl", ""):
                await pg.click(f'.fs [data-fs="{fs}"]')
            ok(True, "字級切換")

            await pg.click('nav [data-v="model"]')
            await pg.click('[data-ms="SP5000"]')
            await pg.click('[data-md="SP-5600WA"]')
            await pg.click("#mBoxes .chip >> nth=0")
            ok("SP-5600WA" in await pg.inner_text("#mDetail .title"), "查機種：SP5000 顯示器加 Box")
            await pg.screenshot(path=str(OUT / f"{tag}_查機種.png"), full_page=True)

            await pg.click('[data-ms="GP4000"]')
            await pg.click('#mGroups [data-mg="GP-44** Series"]')
            names = await pg.locator("#mModels [data-mk]").all_inner_texts()
            ok(any("GP-4402WW" in n for n in names) and len(names) == 3, "查機種：子系列 GP-44** 只列 3 台，含 GP-4402WW")
            ok("不可新建" not in await pg.inner_text("#mModels"), "查機種：型號按鈕不標版本狀態")
            await pg.click('[data-ms="GP6000A"]')
            ok(await pg.locator("#mGroupWrap").is_hidden(), "查機種：沒有子系列的系列不顯示子系列")

            await pg.click('[data-ms="GP2000"]')
            await pg.click('#mGroups [data-mg="GP-23** Series"]')
            await pg.click("#mModels .chip >> nth=0")
            txt = await pg.inner_text("#mDetail")
            ok("GPW-CB02" in txt and "GP-PRO/PB III" in txt, "查機種：GP2000 顯示傳輸線與開發軟體")

            await pg.click('[data-ms="ET6000"]')
            await pg.click("#mModels .chip >> nth=0")
            txt = await pg.inner_text("#mDetail")
            if (ROOT / "data" / "csv" / "special_switches.csv").exists():
                ok("特殊開關切換" in txt, "查機種：內部版顯示特殊開關切換")
            else:
                ok("特殊開關切換" not in txt, "查機種：公開版不顯示特殊開關切換")

            await pg.click("#mReset")
            ok(await pg.locator("#mDetail .empty").count() == 1, "查機種：重新選擇會清除")

            await pg.click('nav [data-v="replace"]')
            await pg.click('[data-rs="GP3000"]')
            await pg.click("#rModels .chip >> text=AGP-3500T")
            n = await pg.locator("#rDetail .card").count()
            ok(n > 0, f"舊機替換：AGP-3500T 有 {n} 款開口相同的現行機種")
            await pg.locator("#rDetail [data-pair]").first.click()
            await pg.wait_for_timeout(200)
            n = await pg.locator(".cmp tr.diff").count()
            ok(n > 0, f"比較：標出 {n} 項差異")
            ok(await pg.locator("#cmpPrint").count() == 1, "比較：有列印／存成 PDF 按鈕")
            await pg.emulate_media(media="print")
            ok(await pg.locator("header").is_hidden() and await pg.locator(".cmp").is_visible(), "比較：列印時只留比較表")
            await pg.emulate_media(media="screen")
            await pg.screenshot(path=str(OUT / f"{tag}_比較.png"))

            await pg.click('nav [data-v="replace"]')
            await pg.click('[data-rs="GP2000"]')
            await pg.click("#rModels .chip >> text=GP37W2")
            note = await pg.locator("#rDetail .near-note").inner_text()
            n = await pg.locator("#rDetail .card").count()
            ok("不是同規格" in note and n >= 2, f"舊機替換：GP37W2 無同開口，明確標示只是相近，列出 {n} 款")
            ok(await pg.locator("#rDetail h2 + .row .b-pb3").count() == 1 and await pg.locator("#rDetail h2 + .row .b-absent").count() == 0, "舊機替換：GP2000 只顯示 PB III 舊硬體標籤")
            await pg.screenshot(path=str(OUT / f"{tag}_相近開口.png"), full_page=True)
            await pg.click("#rReset")
            await pg.click('[data-rs="GP4000"]')
            await pg.click("#rModels .chip >> text=GP-4104")
            txt = await pg.locator("#rDetail").inner_text()
            ok("GP-4114T" in txt and "寬 +7.5、高 +11.5 mm" in txt, "舊機替換：GP-4104 相近開口為 GP-4114T（寬 +7.5、高 +11.5）")
            await pg.click("#rReset")
            await pg.click('[data-rs="GP3000"]')
            await pg.click("#rModels .chip >> text=AGP-3300HL")
            ok("手持型" in await pg.locator("#rDetail .empty").inner_text() and await pg.locator("#rDetail .near-note").count() == 0, "舊機替換：手持型說明不比對開口")
            await pg.click('nav [data-v="replace"]')
            await pg.click("#rReset")
            ok(await pg.locator("#rDetail .empty").count() == 1 and await pg.locator("#rReset").is_hidden(), "舊機替換：重新選擇會清除")

            sw = await pg.evaluate("document.documentElement.scrollWidth")
            ok(sw <= w, f"沒有橫向捲動（{sw} ≤ {w}）")
            await pg.evaluate("localStorage.clear()")
            await pg.close()
        await browser.close()

    ok(not errors, "沒有 JavaScript 錯誤" + ("：" + "；".join(errors) if errors else ""))
    print("全部通過" if not failures else f"{len(failures)} 項失敗")
    return not failures


if __name__ == "__main__":
    ap = argparse.ArgumentParser()
    ap.add_argument("--chrome", help="Chrome 執行檔路徑，不填則使用 playwright 安裝的 chromium")
    a = ap.parse_args()
    sys.exit(0 if asyncio.run(run(a.chrome)) else 1)

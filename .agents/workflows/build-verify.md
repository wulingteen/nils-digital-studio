---
description: 發布前建置驗證 (Build Verify Before Commit)
---

# 發布前建置驗證 (Build Verify)

在 `git commit` 或 `git push` 之前，執行此 Workflow 確保 Astro 專案沒有 TypeScript 錯誤或 Content Schema 解析失敗。

## 觸發時機

以下情況**強制**在 commit 前執行建置驗證：
- 新增或修改了 `.md` / `.mdx` 文章（Frontmatter 欄位錯誤只在 build 時才會爆）
- 新增或修改了 `.tsx` / `.astro` 元件
- 修改了 `src/pages/llm.astro` 的 articles 陣列

## 執行步驟

### Step 1：快速型別檢查（可選，快）
```bash
npx tsc --noEmit
```
如果回傳 0 錯誤就跳到 Step 2，有錯誤先修完再繼續。

### Step 2：完整建置（必做）
```bash
npm run build 2>&1 | tail -30
```
- 成功標誌：看到 `✓ Completed in X.Xs` 或 `dist/` 目錄有輸出
- 失敗標誌：看到 `[error]`、`ZodError`、`Cannot find module`

### Step 3：常見錯誤與修法

| 錯誤訊息 | 原因 | 修法 |
|----------|------|------|
| `ZodError: Required` | Frontmatter 缺少必填欄位 | 補上 `title`/`excerpt`/`date`/`author`/`coverImage` |
| `Cannot find module` | import 路徑錯誤 | 確認路徑和 `@/` alias |
| `Type error: Property X does not exist` | TSX 型別不符 | 修正 props interface |
| `[getStaticPaths] slug not found` | llm.astro 裡的 slug 找不到對應 .md 檔 | 確認文章檔名和 slug 一致 |

### Step 4：驗證 RSS（發文章時）
```bash
ls -la dist/rss.xml
```
存在且大小 > 0 則表示 RSS 正常，Substack 爬蟲可以抓取。

## 注意事項
- `npm run build` 在本機大約需要 15-40 秒，請給它足夠時間
- 如果 build 失敗，**不要繼續 commit**，先修好再跑一次
- build 產生的 `dist/` 目錄已在 `.gitignore` 中，不會被 commit

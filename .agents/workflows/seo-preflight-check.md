---
description: 發布前 SEO 審查與最佳化 (SEO Pre-Flight Check)
---

# 發布前 SEO 審查與圖片最佳化 (SEO Pre-Flight Check)

當使用者準備發布新文章，或要求「檢查 SEO」、「優化網站」時，請執行這套完整的自動化起飛前檢查 (Pre-Flight Check)。

## Phase 1: 圖片極致壓縮 (Assets Optimization)
1. 使用 `find public/images/blog -type f -size +500k` 指令找出超過 500KB 的過大圖片檔案。
2. 針對大型圖片，若為 `.png` 或 `.jpg`，請建議使用者將其轉換為 WebP（或如果系統允許使用 ImageMagick `convert` 指令，請主動幫忙將其轉換為 `quality 80` 的 `.webp`，並隨後使用 `multi_replace_file_content` 更新對應 Markdown 的 `coverImage` 路徑）。
3. 確保圖片沒有中文檔名，且使用小寫英文與連字號 (`-`) 命名。

## Phase 2: Markdown Meta Data (Frontmatter) 驗證
讀取目標文章的 Frontmatter，並檢查以下事項：
1. **Title Length:** `title`，`titleEn` 是否介於 15 到 60 個字元之間。
2. **Excerpt Length:** `excerpt` 是否介於 100 到 160 個字元之間（對搜尋引擎最佳）。
3. **Tags Check:** 是否有至少 2 個，最多 5 個核心 Tag。
4. **Keywords Injection:** 前兩段內文是否包含最重要的 2-3 個 SEO 關鍵字（例如 AI PM, Generative AI 等）。

## Phase 3: 連結與架構檢查 (Structure Review)
1. 確認文章內部是否有加入至少一個「內部連結」(Internal Link)，引導至其他相關文章（例如 `[這篇文章](/zh/insights/other-post)`）。
2. H2 (`##`) 與 H3 (`###`) 的層級是否符合語意邏輯，中間沒有跳層（如 H2 直接跳 H4）。

## Phase 4: Build & Deploy
1. 執行 `npm run build`，確保沒有 Typescript 或 Astro Content Schema 的解析錯誤。
2. 確認 `dist/rss.xml` 已正確生成並包含該篇新文章（這會觸發 Substack 抓取）。
3. 執行 `git add .`, `git commit -m "chore: SEO pre-flight fix and content polish"`, 與 `git push`。
4. 通知使用者大功告成，等待 GitHub Actions 部署。

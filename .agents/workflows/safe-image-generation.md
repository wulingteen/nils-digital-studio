---
description: 自動化無版權爭議首圖生成指南 (Safe Image Generation)
---

# 自動化無版權爭議首圖生成指南 (Safe Image Generation)

當使用者要求「新增一篇文章並尋找相關首圖」，或明確指示「上網找圖片但不能侵權」時，請啟動此 Workflow。

身為 AI Agent，隨意從網路上抓取或爬取圖片往往會面臨嚴格的版權爭議（Copyright Infringement）。為確保所有為使用者部落格或專案產生的視覺素材都是 100% 安全、獨特且可商用的，請一律優先使用內建的 AI 圖像生成工具。

## 執行步驟：

### 1. 概念萃取與 Prompt 設計
根據文章的核心主題，構思一個具象化或抽象化的視覺概念。
*   **Prompt 撰寫要訣**：必須使用英文撰寫 Prompt。加入風格關鍵字以確保高質感（例如："stunning abstract digital art", "premium professional aesthetic", "minimalist isometric 3D", "dark mode glassmorphism"）。
*   **避免**：避免要求生成特定真人臉孔、含有商標 (例如 Google, Apple 的實體 Logo) 的圖像，可改用代表性的顏色或概念替代。

### 2. 使用 `generate_image` 工具
使用內建的 `generate_image` 工具生成圖片：
*   **Prompt**: 填入剛剛設計好的英文咒語。
*   **ImageName**: 命名一個簡潔且帶底線的檔案名，例如 `[topic]_cover_image`。

### 3. 將圖片移至專案目錄
`generate_image` 工具預設會將圖片儲存在 Artifact 資料夾（例如 `/Users/user/.gemini/antigravity/brain/{id}/`）。
你必須使用 `run_command` (bash) 將圖片從 Artifact 資料夾搬移或複製到使用者的專案靜態資源資料夾。
*   例如：`cp /Users/.../brain/.../XXX.webp public/images/blog/XXX.webp`
*   如有需要，可使用 CLI 工具（如 `sips` 轉檔、壓縮）進行輕量化處理（參考 Image Optimization Workflow）。

### 4. 更新 Frontmatter
在生成的 Markdown 文章中，將 `coverImage` 正確指向剛才放入 `public/images/blog/` 的路徑。

## 為什麼這是最佳實踐？
*   **零侵權風險**：AI 生成的圖片不存在特定攝影師或畫家的版權保護問題，可自由作為部落格首圖。
*   **視覺一致性**：能確保每次生成的圖片風格都符合網站整體的 Premium 質感，不需要依賴圖庫搜尋結果的運氣。

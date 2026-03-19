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

### 3. 將圖片轉換為最佳化 WebP 格式並移至專案目錄
預設情況下，`generate_image` 產生的是大型的 `.webp`、`.png` 或 `.jpg` 原圖並存於 Artifact 資料夾（例如 `/Users/user/.gemini/antigravity/brain/{id}/`）。
基於效能最佳化理由，**你必須強制作為 WebP 格式輸出**，並移除舊圖。

**⚠️ 沙盒警告：切勿使用原生的 `sips`，會觸發 Exit Code 13。** 
請一律查閱或引用 `/image-optimization` 技能內的「Pillow 核彈級解法」，建立 /tmp 虛擬環境將原圖轉換、壓縮並匯出到終端網站靜態目錄。
*   例如匯出到：`public/images/blog/[topic]_cover_image.webp`

### 4. 更新 Frontmatter
在生成的 Markdown 文章中，將 `coverImage` 正確指向剛才轉換好的 WebP 路徑。

## 為什麼這是最佳實踐？
*   **零侵權風險**：AI 生成的圖片不存在特定攝影師或畫家的版權保護問題，可自由作為部落格首圖。
*   **視覺一致性**：能確保每次生成的圖片風格都符合網站整體的 Premium 質感，不需要依賴圖庫搜尋結果的運氣。

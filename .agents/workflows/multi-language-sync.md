---
description: 自動多語系翻譯與同步引擎 (Multi-Language Auto-Sync)
---

# 自動多語系翻譯引擎 (Multi-Language Auto-Sync)

當使用者要求「翻譯文章」、「同步多語系」或執行此 Workflow 時，請嚴格遵守以下操作步驟，以確保 Astro 靜態網站架構能正確無縫接軌各國語系：

## 1. 讀取並分析目標文章
- 使用 `view_file` 讀取使用者指定的 Markdown 文章（位於 `src/content/posts/`）。
- 提取目前的 YAML Frontmatter，特別注意 `title`, `excerpt`, `tags`, `seriesInfo` 等欄位。

## 2. Frontmatter 多語系擴充
- 將原始的 `title` (繁體中文) 翻譯為專業且符合當地語境的英文與德文。
- 將原始的 `excerpt` (繁體中文) 翻譯為英文與德文。
- 在 YAML 中無縫插入或更新以下欄位（保留所有既有欄位如 `coverImage`, `date`, `tags`）：
  ```yaml
  titleEn: "[英文標題]"
  titleDe: "[德文標題]"
  excerptEn: "[英文摘要]"
  excerptDe: "[德文摘要]"
  ```

## 3. i18n 字典同步檢查 (Bonus)
- 若文章內有使用到特定的新名詞或特殊 Tag（例如新的 `seriesInfo.name`），請自動檢查並更新 `src/locales/zh.json`, `en.json`, `de.json` 中的翻譯映射表，確保前端 UI 在切換語系時不會出現 Key 名稱。

## 4. 寫入與驗證
- 使用 `replace_file_content` 更新該檔案。
- 提醒使用者：目前 Astro `[id].astro` 架構會根據網址 `/en/` 或 `/zh/` 自動讀取 YAML 中的 `titleEn` / `title` 動態替換 Meta 及 H1 標題。若未來需要連同「文章內文 (Body)」都實作完全獨立的翻譯渲染，需啟動進階的 Astro Collection 拆分計畫。
- 執行 `npm run build` 測試解析是否正常，最後進行 `git commit` 與推播。

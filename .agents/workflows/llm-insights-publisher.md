---
description: 自動化多語系技術洞察文章發布流程 (LLM Insights Publisher)
---

# 自動化多語系技術洞察文章發布流程 (LLM Insights Publisher)

當使用者要求「發布一篇關於 XXX 的文章」、「寫一篇這週最紅的 AI 主題」，或是明確指示依照稍早的發布流程立項時，請啟動此 Workflow。

此 Workflow 整合了 SEO 文章寫作、多語系翻譯、配圖獲取、索引更新以及 Git 提交的標準作業程序，確保每一篇文章都能無縫上線至 `nilsliu.dev/zh/insights`。

## 第一階段：主題確認與內容生成 (Drafting & Translation)
1. **主題探索**：如果使用者未指定主題，請先使用 `search_web` 尋找最近一週最具討論度的 AI/Tech 趨勢。
2. **撰寫主文 (繁體中文)**：
   - 根據 `/seo-article-writing` 規範撰寫 SEO 最佳化的 Markdown 文章（長度通常約 1000~1500 字）。
   - 必需包含適當的 Frontmatter：`title`, `titleEn`, `titleDe`, `excerpt`, `excerptEn`, `excerptDe`, `date`, `author`, `tags`, `coverImage`。
   - 檔案路徑格式：`src/content/posts/<slug>.md`。
3. **衍生外文版 (英文與德文)**：
   - 在相同目錄下，以外文重寫內文，並保留相同的 Frontmatter。
   - 英文版檔案路徑：`src/content/posts/<slug>-en.md`
   - 德文版檔案路徑：`src/content/posts/<slug>-de.md`

## 第二階段：首圖取得與處理 (Web Image Sourcing)
1. **觸發配圖子流程**：依照 `/web-image-sourcing` 規範，使用 Unsplash 下載一張符合主題的高品質無版權圖片。
2. **轉檔與儲存**：
   - 將圖片利用 Python/Pillow 轉換為 WEBP 格式（最大寬度 1200px）。
   - 儲存至 `public/images/blog/<slug>.webp`。
   - 確認上述 Markdown 檔案的 `coverImage` 欄位已正確指向 `/images/blog/<slug>.webp`。

## 第三階段：更新網站索引 (Update Router/Index)
為了讓網站能抓取到這篇文章，必須在索引檔中註冊 slug。

1. **讀取設定檔**：查看 `src/pages/llm.astro` 中 `const articles` 陣列的結構。
2. **按字母順序插入 Slug**：
   - 陣列是**嚴格字母升序排列**。例如 `"graphrag..."` 後面接 `"harness..."` 再接 `"hermes..."` 再接 `"hiring..."`。
   - 插入前先找到新 slug 的前後鄰居（逐字母比較），用 Edit 工具精確插入，**勿使用 append**。
   - 確認不重複：先 `grep` 確認 slug 不在陣列中才插入。
3. **⚠️ 本步驟是必做項目**，不是可選的。漏掉這步文章會在 `/llm` 路徑消失，LLM 爬蟲也找不到。

## 第四階段：版控與部署 (Commit & Push)
完成所有檔案修改後，執行自動化的 Git 提交：
1. **Stage 檔案**：執行 `git add -A` 或準確 add 涉及的 Markdown 檔案、WebP 圖片檔案及 `llm.astro`。
2. **Commit**：執行 `git commit -m "feat: add <topic> article (zh/en/de) - <short_description>"`。
3. **Push**：執行 `git push`（若遇到憑證掛起，則通知使用者手動執行 push）。

## 第五階段：社群推廣 (Social Media Broadcast) 準備
文章部署完成後，主動詢問使用者：**「文章已發布完成！是否需要啟動 `/social-media-broadcaster` 流程，幫你把這篇文章生成並發布到 LinkedIn、X (Twitter) 跟 Facebook 呢？」** 待使用者同意後再進行下一步。

---

*備註：在執行過程中，如果遇到工具使用上的限制或 Sandbox 阻擋，請適時向使用者回報狀態。*

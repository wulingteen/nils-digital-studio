---
description: 自動化跨社群發文與文案生成流程 (Social Media Broadcaster)
---

# 自動化跨社群發文與文案生成流程 (Social Media Broadcaster)

當使用者發布新文章後，要求「幫我發到社群」、「把這篇分享出去」時，請啟動此 Workflow。

此 Workflow 允許我 (AI Agent) 扮演社群小編，直接幫你撰寫各平台的文案，最後運用 `browser_subagent` (瀏覽器子代理解決方案) 在你的本機瀏覽器中全自動完成貼文的發布。

## 第一階段：萃取文章重點與社群連結
1. **讀取文章內容**：先要求使用者提供欲發布的 `.md` 或 `.mdx` 檔案路徑（如果在對話中已經知道就不必問）。
2. **抓取 Frontmatter**：提取 `title` (標題)、`excerpt` (摘要)、`tags` (標籤)、以及透過 slug 推導出即將上線的新網址，例如 `https://nilsliu.dev/zh/insights/openclaw-ecosystem`。
3. **萃取亮點**：除了摘要，必須閱讀文章中的 2~3 個重點段落，作為貼文的鉤子 (Hook)。

## 第二階段：生成客製化跨平台文案
根據上述素材，生成出三種語氣不同的社群貼文文案，並在底部附上 `#Hashtags` 與文章網址。

🛑 **重要排版規範**：所有的社群貼文必須是「流暢完整的短文」，嚴禁使用「標題：內容」的破折條列式結構（例如「1. 某某概念：這個概念是...」）。請用自然的敘事手法把文章重點融入在段落之中，不要像寫大綱一樣列出重點。

*   **🟦 LinkedIn (專業社群)**
    *   **Tone of voice**：專業、趨勢觀察、產業洞察、啟發性。
    *   **結構**：切入痛點、給出專業見解或方法論、CTA 號召專業人士討論。嚴禁使用任何 Emoji，注意分段留白。
*   **🐦 X / Twitter (短打社群)**
    *   **Tone of voice**：簡潔、有力、快節奏、帶點主觀的辛辣或趣味。
    *   **結構**：字數必須在 280 字以內，第一句話就要吸引眼球，附上精練的一句話總結文章核心，適合使用一兩個關鍵 Hashtag。如果是深度的文章，可以提議將文案做成「Thread (推文串)」。嚴禁使用任何 Emoji。
*   **🟦 Facebook (大眾社群 / 粉絲專頁)**
    *   **Tone of voice**：親切、說故事感、多互動、帶有生活感。
    *   **結構**：可以長文，多講兩句撰寫這篇文章時的「心路歷程」或「為什麼想寫」的背景。嚴禁使用任何 Emoji。

## 第三階段：取得授權與人工審核 (User Approval)
請使用 `notify_user`，將這三組生成的文案以 Markdown 排版顯示給使用者看，並且加上 `BlockedOnUser: true`，確認使用者是否有想修改的地方。
**千萬不要在沒有獲得使用者同意（OK / 發布吧）前就擅自操作瀏覽器發文。**

## 第四階段：執行自動化發文 (Browser Subagent Execution)
當使用者核准文案後，針對使用者要求發布的平台，啟動對應的 `browser_subagent` (請分階段或是用多個 Subagent 處理)：

1. **LinkedIn 發布**
   *   URL: `https://www.linkedin.com/feed/`
   *   Task 指令：要求 Subagent 點擊「Start a post (建立貼文)」，在對話框中貼上上述已經審核過的 LinkedIn 專屬文案，最後點擊「Post (發布)」。

2. **X / Twitter 發布**
   *   URL: `https://x.com/compose/post`
   *   Task 指令：要求 Subagent 在推文框中輸入已審核過的推文文案，並點擊「Post (發布)」。

3. **Facebook 發布**
   *   URL: `https://www.facebook.com/`
   *   Task 指令：要求 Subagent 點擊「在想些什麼呢 (What's on your mind?)」，貼上已審核過的 FB 專屬文案，並點擊「Post (發布)」。

⚠️ **前置條件注意事項**：使用 `browser_subagent` 前提是使用者的 Chrome (或預設瀏覽器) 在這些社群網站**必須已經是登入狀態**。否則遇到登入牆，Subagent 將會卡住並返回失敗。若發生失敗，請友善請使用者登入後再重試。

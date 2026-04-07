---
title: "Karpathy 提出 LLM Wiki：為什麼你的 RAG 可能搞錯方向了？"
titleEn: "Karpathy's LLM Wiki: Why Your RAG Might Be Doing It Wrong"
titleDe: "Karpathys LLM Wiki: Warum Ihr RAG-Ansatz möglicherweise falsch liegt"
excerpt: "前 Tesla AI 主管 Andrej Karpathy 提出用 LLM 維護一座個人 Wiki，取代傳統 RAG 的「每次重新搜尋」模式。這套三層架構如何讓知識像複利一樣累積？本文完整解析。"
excerptEn: "Former Tesla AI Director Andrej Karpathy proposes replacing traditional RAG with an LLM-maintained personal Wiki. How does this three-layer architecture compound knowledge like interest? A complete breakdown."
excerptDe: "Der ehemalige Tesla-KI-Direktor Andrej Karpathy schlägt vor, traditionelles RAG durch ein LLM-gepflegtes persönliches Wiki zu ersetzen. Wie sammelt diese Drei-Schichten-Architektur Wissen wie Zinseszins an?"
date: "2026-04-07"
author: "Nils Liu"
tags: ["GenAI", "Architecture"]
coverImage: "/images/blog/karpathy-llm-wiki.webp"
pinned: false
---

## 前言：你的 AI 助手是否每天都在「失憶」？

想像一下這個場景：你花了一整個下午跟 ChatGPT 討論一篇論文，得到了精彩的分析和見解。隔天你開了一個新對話，想繼續延伸昨天的討論——結果 AI 助手完全不記得你是誰、你們聊過什麼。

這就是 Andrej Karpathy 所說的「數位失憶症」。

2026 年 4 月，這位前 Tesla AI 總監、OpenAI 創始成員在社群上分享了一個讓 AI 圈為之震動的想法：**別再用 RAG 了，改用 LLM 來維護一座個人 Wiki。**

## 傳統 RAG 到底出了什麼問題？

在深入 Karpathy 的方案之前，讓我們先理解為什麼他要「革 RAG 的命」。

**RAG（Retrieval-Augmented Generation）** 是目前最主流的知識增強方案。它的工作方式是：

1. 把你的文件切成小段落
2. 轉換成向量存進資料庫
3. 每次提問時，搜尋最相關的段落
4. 把這些段落塞進 LLM 的 prompt 裡

聽起來很合理，但 Karpathy 指出了一個根本性的問題：**RAG 是「無狀態」的。**

每一次查詢都是從零開始。系統不會記得上次幫你找過什麼、不會把兩次查詢之間的關聯拉在一起、更不會隨著使用時間變得越來越聰明。它永遠只是一個搜尋引擎加一個回答機器。

> 用 Karpathy 的比喻來說，傳統 RAG 就像電影《乘客》(Memento) 裡的主角——每天早上醒來都忘記昨天發生的事。

## LLM Wiki：知識的「複利效應」

Karpathy 的替代方案既優雅又大膽：**讓 LLM 扮演一位研究型圖書館員，主動維護一座你的個人百科全書。**

### 三層架構

這套系統的核心是一個簡潔的三層結構：

**第一層：原始資料（Raw Layer）**

一個唯讀的 `raw/` 資料夾，存放你所有的原始素材——PDF、文章剪報、會議記錄、研究論文。LLM 可以讀取但永遠不會修改這些檔案，確保它們作為「唯一真相來源」。

**第二層：Wiki 層**

這是整套系統的核心。LLM 會根據原始資料，主動建立和維護一系列互相連結的 Markdown 檔案。它會：

- 為每個主題撰寫百科全書式的條目
- 提取關鍵概念並建立反向連結
- 發現不同文件之間的隱藏關聯
- 定期「健檢」，修復斷裂的連結和補充缺漏的資訊

**第三層：指令層**

一組小型指令檔案，定義 LLM 應該如何維護這座 Wiki——連結的格式規範、條目的結構模板、以及知識分類的規則。

### 為什麼是「複利」？

傳統 RAG 每次查詢都是「一次性消費」。你問一個問題，得到一個答案，然後一切消失。

但 LLM Wiki 不一樣。每一次互動都可能產生新的洞見，而這些洞見會被歸檔回 Wiki 中，讓知識庫越來越豐富。就像銀行的複利一樣，**知識會隨著時間指數性成長。**

## 為什麼不直接用 Notion 或 Obsidian？

你可能會問：「這跟手動維護一個 Obsidian vault 有什麼不同？」

答案在於：**維護的主體不同。**

傳統的筆記系統（Zettelkasten、Notion、Obsidian）要求你親自做所有的苦工——分類、標籤、連結、整理。大多數人在最初的熱情消退後，筆記系統就會變成一座荒廢的知識墳場。

Karpathy 的方案把這些苦工全部交給 LLM。他用了一個精妙的比喻：

> **Obsidian 是 IDE，LLM 是程式設計師，Wiki 就是程式碼庫。**

你只需要不斷餵入原始資料，LLM 會負責所有的整理、連結和維護工作。這不是自動化筆記，這是讓 AI 成為你的專屬研究助理。

## 實作啟示：開發者可以怎麼做？

Karpathy 的這套理念對開發者有幾個直接的啟示：

### 1. 重新思考知識管理的架構

如果你正在開發企業級知識管理系統，值得重新審視「向量搜尋 + 即時檢索」的預設範式。對於規模可控的知識庫（個人到中小團隊），結構化的 Markdown 文件可能比向量資料庫更有效率。

### 2. Token 消耗的最佳化

預先消化過的 Wiki 條目比原始文件更精煉，能讓 LLM 在更少的 token 消耗下得到更好的答案。這在 API 成本日益重要的今天，是一個不容忽視的優勢。

### 3. 可審計性和透明度

因為最終產物就是一堆 Markdown 文件，這套系統天生具有透明度——你隨時可以打開任何一個條目確認 LLM 寫了什麼、引用了什麼來源。在企業合規的場景中，這比黑盒子式的 RAG 系統有說服力得多。

## 結語：從「消費 Token 寫程式」到「消費 Token 管知識」

Karpathy 的 LLM Wiki 概念代表了一個重要的思維轉變：**LLM 不只是一個聊天機器人或程式碼生成器，它可以是一個主動管理和累積知識的 Agent。**

他自己也坦言，現在「花在操作知識上的 token 比花在寫程式上的還多」。這聽起來或許反直覺，但想想看：如果 AI 能幫你建立一座隨時間不斷增值的知識庫，那這些 token 的「投資報酬率」可能遠高於讓它寫一段程式碼。

對於所有正在思考「如何善用 AI」的開發者和知識工作者來說，這或許是 2026 年最值得嘗試的一個新範式。

---

*Andrej Karpathy 通過 GitHub Gist 分享了他的「Idea File」概念藍圖。如果你對實作細節有興趣，推薦從 Obsidian + Claude Code 的組合開始嘗試。*

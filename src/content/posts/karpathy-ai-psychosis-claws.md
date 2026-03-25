---
title: "Andrej Karpathy 的「AI 精神病」與下一個十年：從手寫程式碼到指揮 Agent"
titleEn: "Andrej Karpathy's 'AI Psychosis' and the Next Decade: From Hand-Coding to Directing Agents"
titleDe: "Andrej Karpathys „KI-Psychose“ und das nächste Jahrzehnt: Vom Hand-Coding zur Steuerung von Agenten"
excerpt: "前 OpenAI 與 Tesla AI 總監 Andrej Karpathy 在最新《No Priors》訪談中分享「AI 精神病」經歷：數月未寫程式碼。本文解析其核心觀點，探討 Claws 背景 Agent 概念、Token 焦慮，以及 Software 3.0 時代軟體開發範式的轉變。"
excerptEn: "In his latest interview, Andrej Karpathy described experiencing 'AI Psychosis'—he hasn't written code himself in months. This article summarizes his core insights from the 'No Priors' podcast, including the concept of 'Claws' and the paradigm shift in software development."
excerptDe: "In seinem neuesten Interview beschrieb Andrej Karpathy eine „KI-Psychose“ – er hat seit Monaten keinen Code mehr selbst geschrieben. Dieser Artikel fasst seine zentralen Erkenntnisse aus dem „No Priors“-Podcast zusammen, einschließlich des Konzepts der „Claws“."
date: "2026-03-24"
author: "Nils Liu"
tags:
  - "GenAI 實戰"
  - "Blog"
  - "Agent"
  - "Industry Trends"
coverImage: "/images/blog/karpathy-interview.png"
---

前 Tesla AI 總監、OpenAI 創始成員 Andrej Karpathy 一直是 AI 領域最具影響力的聲音之一。在 2026 年 3 月最新的《No Priors》Podcast 訪談中，他分享了自己工作模式的劇烈轉變，甚至開玩笑地說自己彷彿得了「AI 精神病」（AI Psychosis）。

如果你是一位工程師、PM，或是正在探索如何將 GenAI 落地的主管，他的觀察將會徹底打破你對「寫軟體」這件事的既有認知。

## 軟體開發的轉移：從寫語法到表達意圖 (Software 3.0)

Karpathy 在訪談中提到一個驚人的事實：**自從 2025 年 12 月以來，他再也沒有親自打過一行程式碼。**

他現在每天的日常，是花費數小時坐在螢幕前，純粹「向 AI Agents 表達意圖（expressing intent）」。他把絕大部分的任務委派給 AI 系統去執行、生成、除錯，他自己則退居幕後，扮演一個「指揮官」或「產品經理」的角色。

這正是他之前提到的 "Software 3.0" 願景的具體實踐。軟體工程正在經歷一場根本性的轉移——我們不再透過 Python 或 C++ 來指示電腦「怎麼做（How）」，而是透過自然語言（Prompting）告訴 AI「我想要什麼（What）」。

## AI 賦能的副作用：「AI 精神病」與 Token 焦慮症候群

當所有的重勞力都可以外包給 AI 時，人類的焦慮來源也改變了。

Karpathy 提到，當他發現自己沒有把配額內的 AI Tokens 用光時，他會感到一陣難以言喻的「緊張或焦慮」。這就像是你手下有一群 24 小時不休息、速度極快且不用付薪水的超級實習生，而你卻讓他們閒置在旁邊發呆一樣。

現階段 AI 發展的瓶頸，**已經不再是算術運算能力或算力，而是「人類無法有效地指揮這些系統」**。他直言，沒辦法好好指揮 AI、沒辦法把腦袋裡的意圖清晰地轉化為 Prompt 讓 AI 去執行，其實是我們人類自己的 "Skill Issue" (技能問題)。

## Claws (爪子)：超越對話視窗的背景 AI Agent

在訪談中，Karpathy 提出了一個比一般 Agent 更進階的概念，他稱之為 **"Claws"（爪子）**。

目前的 LLM 對話就像是 "Session-based"——你輸入一段話，它回覆一段話，一旦視窗關閉，對話就結束了。但 "Claws" 是一種**「持續存在、可以在背景不斷運行」**的 AI 系統。

想像一下：你在睡覺的時候，你的 "Claws" 正在幫你爬取代碼庫的最新 PR、運行測試、自動修復 linting error，甚至幫你回覆非緊急的 email。它們不需要依賴使用者不斷地透過對話視窗下指令互動，它們是真正在背後默默為你工作的數位代理人。

這正是我們在企業環境中導入 AI Agent 時最需要的特質。企業不需要更多「很會聊天的機器人」，企業需要的是「能在背景完成流程自動化」的數位勞動力。

## 迎向 AI Agent 的超級十年 (Decade of Agents)

回顧 Karpathy 在 2025 年底的幾次發言，我們可以看出他對 AI 發展路徑的清晰判斷：

1. **能力的躍升**：在 2025 年終的 LLM 回顧中，他指出得益於強化學習（RLVR）的成熟，LLM 已經正式從「機率性模仿（Probabilistic imitation）」進化到了「邏輯推理（Logical reasoning）」。
2. **長期的發展**：他曾說過，這不會是「Agent 的一年」，而是「Agent 的十年」。從單點功能的 Copilot，到能夠自主規劃與執行的 Agentic Workflow，這需要時間與基礎設施的迭代。

## 對我們的啟發

Karpathy 的經歷給了我們一個極好的反思：身為技術人員或產品經理，我們每天到底花了多少時間在「親自搬磚」？

如果連世界頂尖的 AI 專家都已經全面轉向「意圖表達」，把實作細節外包給 AI，我們是不是也該重新審視自己的工作流？

在接下來的幾年裡，企業競爭的焦點將從單純的「算力軍備競賽」轉移到「探討如何讓 AI 更有效率地思考」。而對於個人來說，**「提出好問題」與「清晰表達意圖」的能力，將比手寫任何演算法都來得有價值。**

---
*想了解更多關於 AI Agent 的實戰落地經驗？歡迎閱讀我的 [AI Agent 產品設計陷阱](/zh/insights/ai-agent-product-design-traps) 或 [2025 年度回顧](/zh/insights/2025-year-in-review)。*

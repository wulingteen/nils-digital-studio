---
title: "Google Stitch 震撼更新：從自然語言到 UI 的「AI 原生設計畫布」如何顛覆 Figma？"
titleEn: "Google Stitch's Massive Update: How the AI-Native Design Canvas is Disrupting Figma"
titleDe: "Das große Google Stitch Update: Wie die KI-native Design-Canvas Figma herausfordert"
excerpt: "2026 年 3 月 Google 推出了 Stitch 更新。這款由 Gemini 驅動的 AI 原生設計畫布不僅能透過自然語言生成 UI，更新增 Voice Canvas 語音編輯。它將如何徹底顛覆 Figma 與設計師的未來工作流？"
date: "2026-03-19"
author: "Nils Liu"
tags: ["AI", "Architecture", "Design"]
coverImage: "/images/blog/google-stitch.webp"
---

今年 3 月一看到 Google 釋出 **Google Stitch** 的大更新，我腦中第一個閃過的念頭是：Figma 這次真的遇到麻煩了。

果不其然，當天 [Figma](https://www.figma.com/) 的股價掉了快 9%。這幾乎驗證了我之前寫 [OpenClaw](/zh/insights/openclaw-ecosystem) 時提到的現象——當一個平台掌握了強勢的底層模型，回頭吞噬既有軟體的工作流程往往快得嚇人。

去年的 Stitch 本質上還是個技術展示。給它一行提示詞，它湊合著配幾張按鈕給你。但這次不一樣。換上最新的 [Gemini 模型族群](https://deepmind.google/technologies/gemini/) 幫手後，它變成了一個真正意義上的「AI 原生設計畫布」。你可以單純用嘴巴講，把想法直接「生」成代碼和介面。

我這幾天都在瘋狂試玩。坦白說，有兩個地方滿讓我驚豔的。

### 懂你說的「感覺」：Vibe Design

我寫 prompt 的時候超討厭去規定「側邊欄要幾 pixel、留白要多少」。那些是機器的邏輯。這次的 Vibe Design 讓我可以直接對它說：「我在弄一個幫新手冥想的 App，我想要介面看起來有點清晨微光那種寧靜感，按鈕要有溫潤的毛玻璃反光。」

Stitch 就真的生出一套完整的色彩系統、甚至包含微小過場動畫的**互動原型 (Interactive Prototype)**。它竟然聽得懂什麼叫做「寧靜感」。這解決了以前 AI 生成 UI 總是冷冰冰、像 Bootstrap 預設面板的問題。

### 省下拖拉滑鼠的廢時間：Voice Canvas

這個功能很直接——開著麥克風對畫布說話。

在客戶會議上被抱怨「上面這排選單實在太擠了」怎麼辦？以前只能唯唯諾諾記在 Jira 裡回去再調。現在？我直接當著客戶的面對著電腦說：「把頂部選單清空，換成一個大一點的 Google 單一登入按鈕。」畫面即時更新。這完全把**設計迭代 (Design Iteration)** 的痛苦降到最低。

做完後，它也能轉成乾淨的 React 程式碼或者直接丟回 Figma，並沒有強迫你完全放棄現有習慣。

### 設計的門檻真的不見了

業界又在吵這會不會取代工程師跟設計師。我覺得大家放錯了討論重點。

最恐怖的是，未來證明一個點子很爛的成本趨近於零。以前做個新功能展示，你好歹得請設計師畫個十張 mockups 才能唬住老闆；現在這套工具連滿肚子草稿的一人開發者都能隨手捏出高級介面。這當然也代表，那些只會拉線框圖的 PM 大概很快就混不下去了。因為在下半年的跨部門會議上，當老闆直接叫你開 [Google Cloud](https://cloud.google.com/) 跑一次 Stitch 實做給他看時，你連說「規格書還在寫」的逃避藉口都沒了。

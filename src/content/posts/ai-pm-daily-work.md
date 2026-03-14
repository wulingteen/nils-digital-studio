---
title: "揭秘 AI PM 工作內容：一窺生成式 AI 產品開發流程的一天"
titleEn: "What Does an AI PM Actually Do All Day? The Daily Grind of GenAI Development"
titleDe: "Was macht ein AI PM eigentlich den ganzen Tag? Der Alltag der GenAI-Entwicklung"
excerpt: "不只是開票寫規格，真實的 AI PM 工作內容究竟長怎樣？從單純的 PM 轉向全端 Builder，帶你走一遍銀行生成式 AI 產品開發流程的殘酷日常。"
excerptEn: "No coding? Think again. The daily routine of an AI PM involves shifting from a traditional PM to a holistic 'Builder', testing prompts, and battling risk."
excerptDe: "Kein Code? Von wegen. Der Arbeitsalltag eines AI PM beinhaltet den Wechsel vom traditionellen PM zum ganzheitlichen 'Builder'."
date: "2026-03-01"
author: "Nils Liu"
tags:
  - "AI PM 系列"
  - "GenAI"
  - "Career"
coverImage: "/images/blog/ai-pm-daily-work.jpg"
---

很多人聽到「AI 產品經理」，第一反應往往是：「所以你整天都在用 Python 寫模型嗎？」

**其實不是。我花最多時間在『建造』。**

誠如 OpenAI 產品副總裁 Peter Deng 所預言的未來人才趨勢：**單純的『軟體工程師』或『產品經理』職稱，最快在 2026 年就會模糊化，取而代之的身份是『Builder (建造者)』。** 

在執行**生成式 AI 應用**專案時，**AI PM 工作內容**已經不再是傳統那套「寫 PRD 開票交給工程師」的瀑布流。你必須親自下去測試 Prompt、感受 Token 消耗的速度，並深入理解 RAG 架構的資料盲區。

以下，是我在金融圈主導**AI 產品開發流程**時，身為一個「Builder」最真實的一天節奏：

## 09:00 — 站會與底層結構除錯（平台 Builder 視角）

Daily Standup 不再只是聽進度報告，而是在抓取系統底層的黑箱風險。如果後端工程師回報「模型回覆差不多可以了」，身為 Builder 我必須立刻追問：

> 「差不多是指 80% 問題都能過，還是 99% 的法遵敏感題不會暴走？」

在金融領域的**生成式 AI 應用**落地，系統上線的 Delay 代價極高（背後緊接著資安、法務、UAT 的連鎖關卡）。要在從 1 推向 100 規模化的道路上穩住陣腳，你必須能聽懂架構師語言，精準辨識潛在的系統相依性。

## 10:00 — 需求拆解與人機協作（業務與增長視角）

業務單位帶著一個夢幻需求來：「我們想做一個 AI 全能語音理專。」

這句話看似誘人，但身為 Builder 必須立刻擋下不切實際的幻想，並引導出能立刻迭代的 MVP 規格。推動真正的**AI 產品開發流程**，你必須問對以下問題：

* 這個 AI 語音理專，要回答的問題範疇界線畫在哪裡？

* 如果 AI 對投資市場產生幻覺 (Hallucination) 導致錯誤推薦，客戶因此虧損，Fallback 退場機制與免責條款是什麼？

* 權限控管邏輯是否與銀行的身分驗證核心系統強耦合？

我的**AI PM 工作內容**，就是把這些充滿變數的商務需求，收斂成人工與 AI 互相補位的「人機協作 (Human-in-the-loop)」動線。

## 13:30 — Prompt 深潛與架構取捨（極致通才視角）

下午是「極致通才」發揮價值的時刻——直接進入沙盒測試模型。

今天的核心爭點是：「RAG（檢索增強生成）的 Chunk Size 應該設為 512 還是 1024？」這不是單純的程式參數，這是一個高度關乎使用者體驗的商業抉擇。

* **Chunk 太大 (1024)**：容易混入雜訊，AI 的回答會變得發散。

* **Chunk 太小 (512)**：語意被腰斬，AI 看不懂法規長句的前因後果。

在 Builder 模式下，我不等工程師寫完測試碼。我會親自打開 LangChain 介面或 Python 腳本，輸入 50 筆客戶最常問的刁鑽 Benchmark 問題，人工比對不同 Chunk Size 產出的精準度，最後給出果斷的產品決策。

## 15:00 — 把關無感智能化（風險守門員）

導入**生成式 AI 應用**時，「法遵與資安」擁有絕對的一票否決權。

為了確保 AI 在生成過程中絕不吐出客戶的 PII（個人可識別性資訊），我在產品設計階段就親自畫出了一套「防暴走替換機制」。如 Peter Deng 強調的，最好的 AI 是隱形的，它將所有的安全防護網埋在水面下，這正是「無感智能」最艱難的技術工藝。

## 17:00 — 六個月原則的實踐（未來規劃）

一天中最安靜的時段，用來反思與撰寫產品需求規劃。

我時常拿 Peter Deng 提到的「六個月原則」來警惕團隊：**不要針對『現在』的模型能力開發產品。如果在程式碼裡花了一個月硬幹出來的解析邏輯，六個月後只要用 GPT-5 加上一行語句就能解決，那現在寫的就全都是技術債。**

未來的**AI PM 工作內容**不再受限於畫 Wireframe。只要具備「提出正確問題」的核心能力，加上敢於第一線試錯的 Builder 精神，就算不具備資深軟體工程背景，依然能站在浪尖引領 AI 產品的爆發。

> *這是「AI PM 的真實工作」系列文章。下一篇我們將討論，如果心血來潮想幫你的 AI 產品註冊專利，該注意什麼。*

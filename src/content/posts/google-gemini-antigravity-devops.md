---
title: "Google Gemini 3 Pro 與 Antigravity：開發者角色的升級"
titleEn: "Google Gemini 3 Pro & Antigravity"
titleDe: "Google Gemini 3 Pro und Antigravity"
excerpt: "AI 不再只是 demo 的玩具，而是變成雲端基礎設施的一環。工具在變，角色就有機會跟著變。 Google 把 Gemini 3 Pro 和 Antigravity 推上來之後 我開始重新思考「開發者跟 AI 的關係」這件事 這一波更新，很直白地釋出一個訊號： AI 不再只是 demo 或 si..."
excerptEn: "After Google pushed Gemini 3 Pro and Antigravity, I started rethinking the relationship between developers and AI infrastructure — and what 'role elevation'..."
excerptDe: "KI ist nicht mehr nur ein Spielzeug für Demos, sondern wird Teil der Cloud-Infrastruktur. Wenn sich Werkzeuge ändern, ändern sich auch die dazugehörigen Rollen."
date: "2025-12-06"
author: "Nils Liu"
tags:
  - "GenAI"
  - "Blog"
  - "Architecture"
  - "Career"
coverImage: "/images/blog/google-gemini-antigravity.jpg"
---

Google 把 Gemini 3 Pro 和 Antigravity 推上來之後
我開始重新思考「開發者跟 AI 的關係」這件事

這一波更新，很直白地釋出一個訊號：
AI 不再只是 demo 或 side project 的玩具，而是變成雲端基礎設施的一環，從模型，到 API，到像 Antigravity 這種幫你處理配額與資源調度的服務，其實都在幫開發者把「心力」往上拉一層，少煩惱一點底層細節，多花時間在產品和使用者上

對在企業裡做 AI 的團隊來說，我自己會把這類更新拆成三個角度來看：

一是「角色的升級」，
以前工程師要自己顧 infra、自建工具鏈，很多時間卡在環境、佈署、調整參數
現在雲端廠商把這些越包越好，我們反而有空間重新定義團隊角色
例如，把一部分精力轉向 AI Product、AI Governance、Data Contract 等等，
讓人真的站在「決策與價值」那一層，而不是永遠困在 pipeline 的 troubleshooting 裡

二是「實驗的速度」，
像 Antigravity 這類服務，把使用限制放寬、讓你可以更安心地做大量試驗
對內部團隊來說，就比較有機會做系統化的 ab test、prompt 版本管理、不同模型的對比
而不是每次實驗都在擔心配額、速度跟穩定性
當實驗變便宜、變快，很多以前覺得不值得試的想法，其實可以被搬上檯面，變成真實的產品選項

三是「平台思維」，
當 Google、OpenAI、其他雲端廠商都在往「AI 平台」靠攏，企業內部如果還是只用「單一 chatbot 專案」來思考 AI 就會很難接住這些新能力，我反而會傾向往「AI 能力層」去設計，把檢索、推理、工具使用、審計、金鑰管理都抽成共用模組
前面這些雲端服務，剛好可以接在這一層下面，讓我們少造一點輪子，多專注在自己獨特的 domain know how 上

對我自己來說，看到這些更新，心裡浮現的關鍵字是「選擇權」，我們多了一些不用從零開始的選擇權，也多了一些把時間留給團隊、留給使用者、留給產品路線圖的選擇權

工具在變，角色就有機會跟著變，接下來幾年，誰能把「工具進化」跟「組織能力進化」綁在一起，誰就會在這一波 AI 浪潮裡走得比較穩


💬 **延伸閱讀：** [2025 年度回顧與未來展望](/zh/insights/2025-year-in-review)

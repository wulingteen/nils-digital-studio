---
title: "Anthropic 官方回應 Claude Code 洩漏事件：純屬人為打包錯誤，無客戶資料外流"
titleEn: "Anthropic's Official Statement on Claude Code Leak: Purely Human Error, No Customer Data Exposed"
titleDe: "Anthropic's offizielle Stellungnahme zum Claude Code Leak: Reiner menschlicher Fehler, keine Kundendaten exponiert"
excerpt: "針對日前 npm Source Map 外洩事件，Anthropic 發言人正式給出回應：這是一場人為疏失造成的打包錯誤，並非駭客入侵。官方強調沒有任何敏感資料或客戶憑證遭到外洩，並已祭出預防措施與程式碼下架行動。"
excerptEn: "In response to the recent npm Source Map leak, an Anthropic spokesperson confirmed it was a human packaging error, not a hack. The company emphasized that no sensitive customer data or credentials were compromised and has initiated preventive measures and code takedowns."
excerptDe: "Als Reaktion auf das kuerzlich aufgetretene npm-Source-Map-Leak bestatigte ein Anthropic-Sprecher, dass es sich um einen menschlichen Paketierungsfehler und nicht um einen Hack handelte. Das Unternehmen betonte, dass keine sensiblen Kundendaten oder Anmeldeinformationen kompromittiert wurden."
date: "2026-04-02"
author: "Nils Liu"
tags:
  - "News"
  - "GenAI"
  - "Security"
  - "Tech"
coverImage: "/images/blog/anthropic-statement-claude-code-leak.webp"
---

在 2026 年 3 月 31 日，社群爆出 Anthropic 的旗艦級命令列工具 **Claude Code** 的底層原始碼意外在網路上流傳。這起涉及超過 50 萬行 TypeScript 程式碼的洩露事件震驚了 AI 開發者圈。許多人都在猜測，這究竟是遭遇了複雜的供應鏈攻擊，還是內部員工的蓄意外流？

就在稍早，Anthropic 官方終於給出了正面回應，定調了這次事件的性質。

## 不是資安漏洞，而是「人為打包錯誤」

根據 Anthropic 發言人的官方聲明，這次事件**純粹是一場開發上的「人為疏失」**。

> "Earlier today, a Claude Code release included some internal source code. No sensitive customer data or credentials were involved or exposed. This was a release packaging issue caused by human error, not a security breach. We're rolling out measures to prevent this from happening again." 
> *(今天稍早，一個 Claude Code 發布版本中包含了部分內部原始碼。沒有任何敏感的客戶資料或憑證受到牽連或被外洩。這是由人為錯誤造成的發佈打包問題，並非安全漏洞。我們正在推出防範措施，以防此類情況再次發生。)*

簡單來說，在 `@anthropic-ai/claude-code` v2.1.88 版本的發佈過程中，工程團隊不慎將高達 59.8 MB 的 JavaScript `Source Map (.map)` 檔案一併打包上傳至公開的 npm 登錄檔。Source Map 是現代前端工程中用來將壓縮、混淆過後的程式碼「還原」回原始開發狀態的除錯工具。而這個意外夾帶的檔案，就這樣成為了完整原始碼曝光的關鍵。

## 敏感資料安全與下架行動

Anthropic 在聲明中最著重強調的，是**「沒有任何客戶資料或平台憑證受到波及」**。這點對於那些在企業內部深度依賴 Claude API 的客戶來說，無疑是打了一劑強心針。

雖然這起洩漏揭開了 Claude Code 的系統提示詞 (System Prompts)、工具定義以及隱藏功能 (Feature Flags) 的神祕面紗，但其中並不包含能夠直接訪問使用者環境或第三方服務的密鑰。這證明了 Anthropic 在環境變數與安全憑證的隔離上，依然具備良好的防禦架構。

事情爆發後，Anthropic 迅速採取了補救措施：
1. **立即撤下問題版本**：從 npm 登錄檔中移除了含有 Source Map 的 v2.1.88 版本。
2. **DMCA 下架通知**：針對網路上（特別是 GitHub）迅速出現的原始碼鏡像專案與備份，發出侵權下架要求。
3. **流程改善**：承諾導入更嚴格的 CI/CD 發布前檢查機制，確保內部除錯檔案絕對不會再進入 Production Build。

## 這次事件帶給開發者的警惕

儘管 Anthropic 將其歸因為單純的「人為錯誤」，但這起事件點出了 AI Agent 時代一個不可忽視的隱患：**即使是世界頂級的 AI 公司，也難逃傳統軟體供應鏈安全（Supply Chain Security）的陷阱。**

無獨有偶，在這起事件發生的同時，開源社群也正經歷 `axios` npm 套件的供應鏈攻擊問題。當開發者越來越依賴這類「高自律性 (High-Agency)、能讀取本機大量權限」的命令列 AI 工具時，我們安裝的 npm 套件裡究竟包了什麼東西？這將成為所有資安長（CISO）與開發團隊未來必須嚴肅面對的課題。

這場由 59MB 檔案引發的風暴雖然暫告一段落，但它為 AI 業界敲響的一記警鐘，現在才正要響起。

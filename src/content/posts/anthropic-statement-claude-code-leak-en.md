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

On March 31, 2026, the underlying source code of Anthropic's flagship command-line tool, **Claude Code**, was unexpectedly circulated online. This leak, involving over 500,000 lines of TypeScript code, shocked the AI developer community. Many speculated whether this was a sophisticated supply chain attack or an intentional leak by internal staff.

Anthropic has officially responded, setting the record straight on the nature of the incident.

## Not a Security Breach, but a "Human Packaging Error"

According to an official statement from an Anthropic spokesperson, the incident was **purely a human error during development**.

> "Earlier today, a Claude Code release included some internal source code. No sensitive customer data or credentials were involved or exposed. This was a release packaging issue caused by human error, not a security breach. We're rolling out measures to prevent this from happening again."

In short, during the release process of the `@anthropic-ai/claude-code` v2.1.88 package, the engineering team inadvertently bundled a massive 59.8 MB JavaScript `Source Map (.map)` file and uploaded it to the public npm registry. Source Maps are debugging tools used in modern frontend engineering to "restore" minified and obfuscated code back to its original development state. This accidentally included file became the key to exposing the entire source code.

## Sensitive Data Security and Takedown Actions

In their statement, Anthropic strongly emphasized that **"no sensitive customer data or credentials were involved or exposed."** This assurance provides significant relief to enterprise customers who deeply rely on Claude APIs internally.

Although the leak unveiled Claude Code's system prompts, tool definitions, and hidden feature flags, it did not contain keys that could directly access user environments or third-party services. This demonstrates that Anthropic maintains a robust defensive architecture regarding the isolation of environment variables and security credentials.

Following the outbreak, Anthropic swiftly implemented remedial measures:
1. **Immediate Removal of the Problematic Version**: The v2.1.88 version containing the Source Map was removed from the npm registry.
2. **DMCA Takedown Notices**: They issued copyright infringement takedown requests targeting source code mirror projects and backups that rapidly appeared online, particularly on GitHub.
3. **Process Improvements**: Anthropic committed to introducing stricter pre-release CI/CD checks to ensure internal debugging files never enter production builds again.

## A Warning for Developers

Although Anthropic attributes this to a simple "human error," the incident highlights a risk in the AI Agent era that cannot be ignored: **Even top-tier AI companies are not immune to traditional software supply chain security pitfalls.**

Coincidentally, as this event unfolded, the open-source community was also dealing with a supply chain attack involving the `axios` npm package. As developers increasingly rely on these "high-agency" command-line AI tools capable of reading extensive local permissions, the question of what exactly is inside the npm packages we install becomes critical. This is a challenge that all Chief Information Security Officers (CISOs) and development teams must face seriously in the future.

The storm triggered by a 59MB file may have subsided temporarily, but the warning bell it rang for the AI industry is just beginning to echo.

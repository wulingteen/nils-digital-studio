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

Am 31. Maerz 2026 kursierte unerwartet der zugrunde liegende Quellcode von Anthropics wichtigstem Kommandozeilen-Tool, **Claude Code**, online. Dieses Datenleck, das ueber 500.000 Zeilen TypeScript-Code umfasste, schockierte die KI-Entwickler-Community. Viele spekulierten, ob es sich um einen ausgekluegelten Supply-Chain-Angriff oder ein absichtliches Leck von internen Mitarbeitern handelte.

Anthropic hat nun offiziell reagiert und die Art des Vorfalls klargestellt.

## Kein Sicherheitsverstoss, sondern ein "menschlicher Paketierungsfehler"

Laut einer offiziellen Erklaerung eines Anthropic-Sprechers war der Vorfall **rein ein menschlicher Fehler waehrend der Entwicklung**.

> "Earlier today, a Claude Code release included some internal source code. No sensitive customer data or credentials were involved or exposed. This was a release packaging issue caused by human error, not a security breach. We're rolling out measures to prevent this from happening again."
> *(Heute frueh enthielt ein Claude-Code-Release versehentlich internen Quellcode. Es waren keine sensiblen Kundendaten oder Zugangsdaten betroffen oder wurden offengelegt. Dies war ein Fehler bei der Paketerstellung durch eine menschliche Unachtsamkeit, keine Sicherheitsverletzung. Wir leiten Massnahmen ein, um zu verhindern, dass dies noch einmal passiert.)*

Kurz gesagt, waehrend des Veroeffentlichungsprozesses des Pakets `@anthropic-ai/claude-code` v2.1.88 hat das Entwicklerteam versehentlich eine gewaltige 59,8 MB grosse JavaScript `Source Map (.map)` Datei gebuendelt und in die oeffentliche npm-Registry hochgeladen. Source Maps sind Debugging-Tools, die in der modernen Frontend-Entwicklung verwendet werden, um minifizierten und obfuskierten Code in seinen urspruenglichen Entwicklungszustand "wiederherzustellen". Diese versehentlich eingefuegte Datei wurde zum Schluessel zur Aufdeckung des gesamten Quellcodes.

## Sicherheit sensibler Daten und Takedown-Aktionen

In ihrer Erklaerung betonte Anthropic nachdruecklich, dass **„keine sensiblen Kundendaten oder Anmeldeinformationen betroffen oder offengelegt wurden.“** Diese Zusicherung ist eine erhebliche Erleichterung fuer Unternehmenskunden, die intern stark auf Claude-APIs angewiesen sind.

Obwohl das Leck die System-Prompts, Tool-Definitionen und versteckten Feature-Flags von Claude Code enthuellte, enthielt es keine Schluessel, die direkt auf Benutzerumgebungen oder Dienste von Drittanbietern zugreifen koennten. Dies zeigt, dass Anthropic eine robuste Verteidigungsarchitektur in Bezug auf die Isolierung von Umgebungsvariablen und Sicherheitsanmeldeinformationen aufrechterhaelt.

Nach dem Ausbruch setzte Anthropic schnell Abhilfemassnahmen um:
1. **Sofortige Entfernung der problematischen Version**: Die Version v2.1.88, die die Source Map enthielt, wurde aus der npm-Registry entfernt.
2. **DMCA-Takedown-Hinweise**: Sie stellten Takedown-Forderungen wegen Urheberrechtsverletzungen gegen Quellcode-Mirror-Projekte und Backups, die schnell online auftauchten, insbesondere auf GitHub.
3. **Prozessverbesserungen**: Anthropic verpflichtete sich zur Einfuehrung strengerer CI/CD-Pruefungen vor der Veroeffentlichung, um sicherzustellen, dass interne Debugging-Dateien nie wieder in Produktions-Builds gelangen.

## Eine Warnung fuer Entwickler

Obwohl Anthropic dies auf einen einfachen "menschlichen Fehler" zurueckfuehrt, hebt der Vorfall ein Risiko in der KI-Agenten-Aera hervor, das nicht ignoriert werden kann: **Selbst hochkaratige KI-Unternehmen sind nicht immun gegen Fallstricke in der traditionellen Software-Lieferkettensicherheit.**

Zufaellig befasste sich die Open-Source-Community, als sich dieses Ereignis entfaltete, auch mit einem Supply-Chain-Angriff im Zusammenhang mit dem `axios`-npm-Paket. Da sich Entwickler zunehmend auf diese "High-Agency"-Kommandozeilen-KI-Tools verlassen, die in der Lage sind, umfangreiche lokale Berechtigungen zu lesen, wird die Frage, was sich genau in den von uns installierten npm-Paketen befindet, entscheidend. Dies ist eine Herausforderung, der sich alle Chief Information Security Officers (CISOs) und Entwicklungsteams in Zukunft ernsthaft stellen muessen.

Der Sturm, der durch eine 59-MB-Datei ausgeloest wurde, mag sich voruebergehend gelegt haben, aber die Alarmglocke, die fuer die KI-Branche gelaeutet hat, faengt gerade erst an zu hallen.

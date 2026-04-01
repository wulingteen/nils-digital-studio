---
title: "Claude Code 洩漏事件解析：一窺 Anthropic 的 AI Agent 核心藍圖"
titleEn: "Claude Code Harness Leak: Decoding Anthropic's Core AI Agent Blueprint"
titleDe: "Claude Code Harness Leak: Dematerialisierung der Anthropic AI-Agent-Architektur"
excerpt: "2026年3月底，Anthropic 在 npm 發布更新時意外夾帶 59.8MB 的 Source Map，導致 Claude Code 的底層程式碼全面洩漏。這不僅是一次工程失誤，更是企業級 Agent 架構、多層提示詞與臥底模式等設計細節的首次大解密。"
excerptEn: "In late March 2026, an accidental 59.8MB Source Map in Anthropic's npm release led to a full leak of Claude Code's underlying architecture. Beyond an engineering flaw, this is the first unboxing of enterprise-grade Agent frameworks, multi-layer prompting, and Undercover modes."
excerptDe: "Ende Maerz 2026 fuehrte eine versehentliche 59.8MB Source Map in Analytics' npm-Release zu einem vollstaendigen Leak der zugrunde liegenden Claude Code Architektur. Neben einem technischen Fehler ist dies die erste Dematerialisierung von Enterprise-Grade Agent-Frameworks, mehrschichtigen Prompts und Undercover-Modi."
date: "2026-04-01"
author: "Nils Liu"
tags:
  - "GenAI"
  - "News"
  - "Agent"
  - "Tech"
coverImage: "/images/blog/claude-code-leak.webp"
---

Am 31. Maerz 2026 erlebte die KI-Entwickler-Community ein bedeutendes Ereignis: Bei der Veroeffentlichung des `@anthropic-ai/claude-code` v2.1.88-Pakets auf npm fuegte Anthropic versehentlich eine gewaltige 59,8 MB grosse JavaScript `Source Map (.map)`-Datei hinzu. Dieser scheinbar kleine Fehler bei der Veroeffentlichung ermoeglichte es Aussenstehenden, ueber 500.000 Zeilen proprietaeren TypeScript-Quellcode zu rekonstruieren.

Dies war keine von Hackern verursachte Sicherheitsverletzung, sondern ein reiner „menschlicher Paketierungsfehler“. Fuer Ingenieure, die die Entwicklung von KI-Anwendungen genau verfolgen, **war dies jedoch im Wesentlichen eine kostenlose oeffentliche Vorfuehrung des architektonischen Bauplans fuer die heutigen hochrangigen High-Agency-KI-Agenten.**

Claude Code war noch nie nur ein einfacher API-Wrapper in einem CLI-Tool. Dieser Code-Leak ermoeglichte uns einen Blick in sein zugrunde liegendes Framework, das oft als „Harness“ bezeichnet wird. Welche Geheimnisse birgt es?

## Geheimnis 1: Das Ende des monolithischen Prompts, Willkommen dynamische Matrix

Beim Erstellen von KI-Agenten verfallen viele Entwickler in die Gewohnheit, einen massiven, monolithischen „System-Prompt“ fest zu codieren. Claude Code gibt diesen Ansatz vollstaendig auf.

Der durchgesickerte Code zeigt, dass Claude Code **dynamisch Dutzende von Mikro-Prompt-Fragmenten zusammensetzt**, basierend auf dem aktuellen Aufgabenstatus und dem ausgewaehlten Modus (z.B. Planen, Erkunden, Delegieren).

Wenn Sie Claude Code bitten, ein komplexes Refactoring durchzufuehren, fuettert es das Modell nicht mit allen Regeln auf einmal. Stattdessen behandelt es Prompts als „Bausteine“ und generiert vor jedem einzelnen Inferenzschritt spontan die am besten geeignete Kombination. Dies reduziert die Wahrscheinlichkeit eines LLM-"Attention Span Drops" drastisch.

## Geheimnis 2: Der rigorose 6-Schichten-Kontext-Stack

Das beeindruckendste Design, das der Industrie offenbart wurde, ist der „Six-Layer Prompt Stack“, der den Betrieb von Claude Code diktiert:

1. **System-Prompt (Kerndefinition):** Definiert die grundlegende Identitaet des Agenten und Schutzmassnahmen gegen destruktives Verhalten.
2. **Tool-Definitionen:** Bietet strikte JSON-Schemas fuer Befehle wie Bash, Write und TodoWrite.
3. **Laufzeitanweisungen:** Spezifiziert die Berechtigungsgrenzen und Umgebungsvariablen der aktuellen Maschine.
4. **Projektkontext:** Liest aus `CLAUDE.md` oder langfristigen Anweisungen des Entwicklers.
5. **Konversationsverlauf:** Komprimierte und gefilterte Aufzeichnungen von Tool-Aufrufen und -Ausgaben.
6. **Benutzereingabe:** Die unmittelbarste und aktuellste Anfrage des Benutzers.

Noch ueberraschender ist, dass **Anthropic sich dafuer entschieden hat, diese Prompt-Assembly-Engine clientseitig (im Terminal des Benutzers) und nicht serverseitig zu erstellen.** Diese Entscheidung logisch beim Client zu belassen, ist genau der Grund, warum die Promptstrukturen in diesem Leak so sichtbar waren.

## Geheimnis 3: "Undercover-Modus" und Hintergrund-Daemon-Agenten

Entwickler gruben auch mehrere hochinspirierende und fortgeschrittene Mechanismen im Quellcode aus:

*   **Undercover-Modus:** Ein cleveres Design, das verhindert, dass die KI „ihre Identitaet preisgibt“. Es zwingt Claude, KI-typische Phrasen (wie „Als KI...“) oder interne Anthropic-Codenamen beim Schreiben von Git-Commits oder oeffentlicher technischer Dokumentation zu entfernen. Es stellt sicher, dass die Ausgabe vollstaendig so aussieht, als waere sie von einem menschlichen Ingenieur geschrieben worden.
*   **Vielschichtiges Gedaechtnis:** Claude Code besitzt die Faehigkeit, kurz- und langfristige Erfahrungen in einer `MEMORY.md`-Datei zu speichern. Es gibt sogar eine teilweise implementierte `autoDream`-Logik, die auf zukuenftige Funktionen hindeutet, bei denen der KI-Agent sein Gedaechtnis im Hintergrund neu organisiert und optimiert, waehrend das Terminal inaktiv ist.
*   **Delegator & Worker:** Die Codebasis zeigt eine ausgereifte Logik fuer Multi-Agenten-Workflows – ein primarerer „Orchestrator-Agent“ kann kleinere „Worker-Agenten“ mit eingeschraenkten Toolsets hervorbringen, um muehsame, lokalisierte Codeaenderungen zu erledigen und die Ergebnisse spaeter zu konsolidieren.

## Die Erkenntnis fuer Entwickler

Waehrend das Claude Code Leak fuer Anthropic unzweifelhaft zu einem Verlust von Geschaeftsgeheimnissen fuehrte, lieferte es versehentlich eine Meisterklasse in „Enterprise-Grade Agent System Design“ fuer KI-Entwickler weltweit.

Dieser Vorfall beweist, dass es beim Bau von High-Agency-KI-Produkten nicht mehr nur darum geht, wie schlau das Modell ist. Es geht darum, **wie man ein robustes „Harness-Kontroll-Framework“ entwickelt, das fuer praezise Prompt-Zusammensetzung, Berechtigungssteuerung und Fehlerbehebung verantwortlich ist.**

Wenn Sie das naechste Mal frustriert sind, weil Ihr KI-Agent keine Anweisungen befolgt, denken Sie darueber nach, sich den Sechs-Schichten-Prompt-Stack von Claude Code anzusehen, um Ihr Framework neu zu gestalten. Dies ist der naechste Standard fuer KI-getriebene Software-Engineering.

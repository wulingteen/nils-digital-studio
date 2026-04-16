---
title: "Hermes Agent: Das Open-Source-KI-Agenten-Framework, das mit der Zeit klüger wird"
titleEn: "Hermes Agent: The Open-Source AI Agent Framework That Gets Smarter Over Time"
titleDe: "Hermes Agent: Das Open-Source-KI-Agenten-Framework, das mit der Zeit klüger wird"
excerpt: "Die meisten KI-Agenten vergessen alles nach jeder Sitzung. Hermes Agent ist anders — er merkt sich, was Sie ihm beibringen, und wird mit der Zeit besser. Was dieses Open-Source-Framework von NousResearch auszeichnet."
excerptEn: "Most AI Agents forget everything after each session. Hermes Agent is different — it remembers what you teach it and gets better over time. Here's what makes this open-source framework from NousResearch stand out."
excerptDe: "Die meisten KI-Agenten vergessen alles nach jeder Sitzung. Hermes Agent ist anders — er merkt sich, was Sie ihm beibringen, und wird mit der Zeit besser. Was dieses Open-Source-Framework von NousResearch auszeichnet."
date: "2026-04-16"
author: "Nils Liu"
tags:
  - "GenAI in der Praxis"
  - "Blog"
  - "Agent"
  - "Open Source"
coverImage: "/images/blog/hermes-agent-self-improving-framework.webp"
lang: "de"
---

**Hermes Agent** ist ein Open-Source-KI-Agenten-Framework, das NousResearch am 25. Februar 2026 veröffentlicht hat. Innerhalb weniger Wochen nach der Veröffentlichung sammelte es 57.000 GitHub-Sterne — eines der am schnellsten wachsenden Open-Source-Agent-Projekte des Jahres.

Was hat es richtig gemacht? Ich denke, die Antwort liegt in einem Problem, das die meisten Agent-Frameworks nicht ernsthaft angegangen sind: **Gedächtnis**.

## Der blinde Fleck der meisten Agent-Frameworks

Die typische Designlogik aktueller Agent-Frameworks läuft so ab: Anfrage empfangen → planen → ausführen → Ergebnis zurückgeben. Dann endet die Konversation und nichts bleibt erhalten.

Sie verbringen heute Zeit damit, einem Agenten Ihr bevorzugtes Berichtsformat beizubringen. Morgen ist es zurück auf Werkseinstellungen. Letzten Monat haben Sie drei Stunden damit verbracht, ihn durch einen Analyse-Workflow zu führen. Nächstes Mal fangen Sie von vorne an.

Genau das will Hermes Agent lösen.

## Die Drei-Schichten-Gedächtnisarchitektur

Hermes Agent strukturiert das Gedächtnis in drei Schichten:

**Schicht 1: Session Memory (Arbeitsgedächtnis)**

Aktueller Konversationskontext — wie bei den meisten Agenten.

**Schicht 2: Persistent Memory (Dauerhaftes Gedächtnis)**

Benutzerpräferenzen, Verhaltensmuster und Hintergrundwissen, die über Sitzungen hinweg gespeichert werden. Statt den gesamten Konversationsverlauf in den Context zu laden (was den Token-Verbrauch explodieren lassen würde), verwendet es SQLite mit FTS5-Volltextsuchindizierung — der Agent durchsucht seinen eigenen Gedächtnisspeicher proaktiv, wenn nötig.

**Schicht 3: Skill Memory (Fähigkeitsgedächtnis)**

Das ist die interessanteste Schicht. Wenn ein Agent eine komplexe Aufgabe abschließt, abstrahiert er den Arbeitsablauf automatisch in ein Skill-Dokument, das bei ähnlichen zukünftigen Aufgaben direkt aufgerufen werden kann. Skills verbessern sich durch Nutzung selbst.

Zusammen lassen diese drei Schichten Hermes Agent eher wie einen Mitarbeiter wirken, der jeden Tag wächst — statt wie einen Auftragnehmer, der jedes Mal ohne Kontext frisch anfängt.

## Das Fundament: Hermes 4

Hermes Agent basiert auf **Hermes 4**, der Modellfamilie von NousResearch vom August 2025. Aufgebaut auf Metas Llama-3.1-Architektur, ist es in drei Größen erhältlich: 14B, 70B und 405B.

Wichtige technische Details:

- **131K Token Context Window**: Verarbeitung ganzer Codebasen oder sehr langer Dokumente in einem Durchgang
- **Hybrid Reasoning Mode**: `<think>...</think>`-Tags ermöglichen das Wechseln zwischen schnellen Antworten und tiefem Denken
- **35B MoE-Variante**: Mixture-of-Experts-Architektur, nur 3B aktive Parameter pro Token — Balance zwischen Geschwindigkeit und Leistung
- **Trainingsumfang**: Rejection Sampling mit 1.000 aufgabenspezifischen Verifiern; Trainingsdaten von 1M auf ~5M Samples erweitert

## Modellunabhängig und plattformübergreifend

Hermes Agent ist **modellunabhängig** — es unterstützt 200+ LLM-Anbieter, darunter OpenAI, Anthropic Claude, Nous Portal, OpenRouter, HuggingFace und lokale Modelle. Keine Bindung an eine einzelne API.

Bemerkenswerter ist die plattformübergreifende Strategie: **ein Gateway, läuft gleichzeitig auf 15+ Plattformen.**

CLI, Telegram, Discord, Slack, WhatsApp, Signal, Matrix, E-Mail, SMS, DingTalk, Feishu, WeCom, Home Assistant — einmal deployen und jeder Kanal teilt dieselbe Agent-Instanz, dasselbe Gedächtnis und dieselbe Skill-Bibliothek. Kein Bedarf, separate Agent-Instanzen pro Plattform zu pflegen.

Dieses Design ist besonders attraktiv für Anwendungsfälle, die Benutzer über mehrere Kanäle bedienen müssen.

## Praktische Anwendungsfälle

Basierend auf bisherigem Community-Feedback funktioniert Hermes Agent gut bei:

**Repetitiven Forschungsaufgaben.** Wöchentliche Entwicklungen zu einem bestimmten Thema verfolgen, regelmäßige Wettbewerbsinformationen zusammenstellen. Der Agent akkumuliert im Laufe der Zeit Hintergrundwissen zum Bereich, und die Ausgabequalität in späteren Durchläufen übertrifft die frühen Durchläufe merklich.

**Persönliche Assistenten.** Hermes Agent über Telegram oder WhatsApp laufen lassen und ihn Terminpräferenzen, Arbeitsgewohnheiten und häufige Formate merken lassen. Der Kommunikationsaufwand für die Delegation von Routineaufgaben nimmt mit der Zeit ab.

**Trainingsdaten-Generierung für Modelle.** Hermes integriert sich mit NousResearchs Atropos-RL-Framework zur Generierung von Fine-Tuning-Trajektorien. Diese Nische sprechen die meisten allgemeinen Agent-Frameworks nicht an.

Es wird außerdem mit 47 integrierten Tools geliefert, die Browser-Automatisierung, Websuche, Cron-Scheduling, Batch-Verarbeitung und mehr abdecken.

## Für wen ist es geeignet

Hermes Agent ist MIT-lizenziert und Open Source. Es passt gut, wenn Sie:

- Einen einzelnen persönlichen Agenten koordiniert über mehrere Messaging-Plattformen möchten
- Erkunden, wie man Agenten echtes Langzeitgedächtnis geben kann
- Agenten in privaten Umgebungen deployen müssen, ohne von spezifischen Cloud-APIs abhängig zu sein
- LLM-Forschung betreiben und hochwertige Trainingsdaten-Generierung benötigen

Wenn Ihr Anwendungsfall einmalige Aufgaben oder kurze Demos sind, wirkt Hermes' Drei-Schichten-Gedächtnisarchitektur möglicherweise schwerer als nötig. Aber wenn Ihr Agent langfristig laufen, Wissen akkumulieren und konsistente Benutzer bedienen muss — lohnt sich ein ernsthafter Blick auf dieses Framework.

In meinem [Harness Engineering-Artikel](/de/insights/harness-engineering-ai-agent) habe ich argumentiert, dass zuverlässige Agent-Systeme eine Ausführungsschicht benötigen, die Observierbarkeit, Circuit Breaking und Zustandsverwaltung übernimmt. Hermes Agents Skill Memory und persistentes Zustandsdesign integrieren im Wesentlichen einen Teil dieser Harness-Verantwortlichkeiten direkt ins Framework — ein interessanter architektonischer Kompromiss.

---

*Teil der Serie „GenAI in der Praxis".*

💬 **Weiterführende Lektüre:**
- [Harness Engineering: Die Ausführungsschicht für Ihren KI-Agenten aufbauen](/de/insights/harness-engineering-ai-agent)
- [5 Produktdesign-Fallen beim Bau von KI-Agenten](/de/insights/ai-agent-product-design-traps)

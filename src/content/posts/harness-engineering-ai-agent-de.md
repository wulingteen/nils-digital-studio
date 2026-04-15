---
title: "Harness Engineering: Die Ausführungsschicht für Ihren KI-Agenten aufbauen"
titleEn: "Harness Engineering: Building the Execution Layer for Your AI Agent"
titleDe: "Harness Engineering: Die Ausführungsschicht für Ihren KI-Agenten aufbauen"
excerpt: "Harness Engineering ist die Ausführungsschicht in der KI-Agenten-Architektur. Dieser Beitrag stellt das Kerndesign eines Harness vor: Ausführungskontrolle, Observierbarkeit, Hooks, Tool-Sandbox und Zustandsverwaltung."
excerptEn: "Harness Engineering is the execution layer in AI Agent architecture. This post introduces the core design of a Harness: execution control, observability, hooks, tool sandboxing, and state management."
excerptDe: "Harness Engineering ist die Ausführungsschicht in der KI-Agenten-Architektur. Dieser Beitrag stellt das Kerndesign eines Harness vor: Ausführungskontrolle, Observierbarkeit, Hooks, Tool-Sandbox und Zustandsverwaltung."
date: "2026-04-15"
author: "Nils Liu"
tags:
  - "GenAI in der Praxis"
  - "Blog"
  - "Agent"
  - "Architecture"
coverImage: "/images/blog/harness-engineering.webp"
lang: "de"
---

**Harness Engineering** beschreibt das Systemdesign hinter der Ausführungsschicht in der KI-Agenten-Architektur.

Die meisten Diskussionen rund um KI-Agenten konzentrieren sich auf Prompt-Design, Agent-Abläufe und Modellauswahl. Harness adressiert eine andere Dimension — nicht die Geschäftslogik, sondern die Zuverlässigkeit, Observierbarkeit und Sicherheitsgrenzen der Laufzeitumgebung. Dieser Beitrag erläutert das Kerndesign von Harness Engineering: welche Komponenten es enthält und wofür jede einzelne verantwortlich ist.

## Was ist Harness Engineering

Harness — das Geschirr, das ein Pferd unter Kontrolle bringt und seine Kraft lenkt.

Im KI-Agenten-Kontext ist **ein Harness das Ausführungs-Framework zwischen Ihrer Agent-Logik und den darunterliegenden LLMs und Tools**. Es besitzt keine Geschäftslogik. Es besitzt die Zuverlässigkeit, Observierbarkeit und Sicherheitsgrenzen der Laufzeitumgebung.

Anders ausgedrückt: Ihr Agent ist der Motor. Das Harness ist das Fahrwerk. Ohne Fahrwerk ist kein fahrtaugliches Fahrzeug möglich — egal wie stark der Motor ist.

Das Konzept ist in der Software nicht neu — **Test-Harnesses** gibt es seit Jahrzehnten. Aber im LLM-Agent-Kontext muss ein Harness ein schwierigeres Problem lösen: LLM-Verhalten ist grundlegend nicht-deterministisch.

## Kerndesign: Was ein Harness kontrolliert

### 1. Ausführungskontrolle (Execution Control)

Sie benötigen harte Grenzen für die Agent-Ausführung:

- **Maximale Schrittanzahl (Max Steps)**: Erzwungener Stopp nach N Schritten. Wir setzen typischerweise 15–20 Schritte, je nach Aufgabenkomplexität. Bei Überschreitung wird „Ausführung hat erwarteten Rahmen überschritten" zurückgegeben — keine Einladung zum Weiterlaufen.
- **Timeouts**: Jeder LLM-Call und Tool-Call benötigt seinen eigenen Timeout. Verlassen Sie sich nicht auf den Frontend-Verbindungs-Timeout, um unkontrollierte Agenten aufzuhalten.
- **Circuit Breaker**: Wenn dasselbe Tool N-mal hintereinander fehlschlägt, sollte das Harness diesen Pfad pausieren, auf Fallback wechseln oder vollständig abbrechen.

Sinnvolle Schrittobergrenzen halten die Agent-Ausführung in vorhersehbaren Grenzen, was Debugging und Kostenkontrolle deutlich erleichtert.

### 2. Observierbarkeit (Observability)

**Ohne Traces ist Ihr Agent eine Black Box.**

Eine minimal-lebensfähige Harness-Observierbarkeitsschicht sollte erfassen:

- Jeden LLM-Call: Input, Output, Modell, Token-Anzahl, Latenz
- Jeden Tool-Call: Parameter und Rückgabewerte
- Den vollständigen Ausführungspfad des Agenten — welcher Schritt welches Tool aufrief, mit welchem Ergebnis
- Alle Ausnahmen oder unerwarteten Verzweigungen

Ich empfehle **OpenTelemetry** als Basis-Tracing-Standard, dann weiterleiten an das bevorzugte Backend (Langfuse, Jaeger, Grafana). Kein eigenes Trace-Format entwickeln — Standardisierung ist wichtiger als erwartet.

### 3. Hooks (Einhängepunkte)

Der flexibelste Teil eines Harness-Designs sind Injektionspunkte an wichtigen Ausführungsmomenten:

- **Pre-tool-Hook**: Läuft vor jedem Tool-Call. Für Sicherheitsprüfungen, Parametervalidierung, Logging.
- **Post-tool-Hook**: Läuft nach Tool-Rückgabe. Für Output-Bereinigung, Format-Normalisierung, Seiteneffekt-Trigger.
- **Pre-LLM-Call-Hook**: Vor dem LLM-Call. Für Prompt-Injection-Abwehr, PII-Filterung.
- **Post-LLM-Call-Hook**: Nach LLM-Rückgabe. Für Output-Guards, Filterung schädlicher Inhalte.

Dieses Design hält Sicherheits-, Monitoring- und Geschäftslogik getrennt. **Eine Sicherheitsregel zu aktualisieren berührt den Agenten selbst nicht.**

Dies ist genau das Modell, das der [Hooks-Mechanismus von Claude Code](https://docs.anthropic.com/de/docs/claude-code/hooks) implementiert — definieren Sie in `settings.json`, welcher Shell-Befehl bei welchem Ereignis ausgelöst wird, das Harness übernimmt die Ausführung. Agent-Logik und Ausführungskontrolle sind vollständig entkoppelt.

### 4. Tool-Sandbox

Welche Tools ein Agent aufrufen darf, sollte die Entscheidung des Harness sein, nicht des Agenten.

- **Statische Whitelist**: Erlaubte Tools auf Harness-Ebene definieren. Der Agent-Prompt kann sagen „benutze jedes Tool, das du brauchst", aber das Harness führt nur Tools auf der Whitelist aus.
- **Dynamische Autorisierung**: Manche Tools nur unter bestimmten Bedingungen erlaubt (z.B. Transaktionen über einem Schwellenwert erfordern einen manuellen Überprüfungs-Trigger).
- **Sandbox-Isolation**: Hochrisiko-Tools (alles, das in Datenbanken schreibt oder externe Anfragen sendet) laufen in einer isolierten Umgebung, um Seiteneffekte einzudämmen.

In [5 Produktdesign-Fallen beim Bau von KI-Agenten](/de/insights/ai-agent-product-design-traps) gehe ich auf die Problematik des „übermäßigen Vertrauens in das Reasoning des Agenten" ein. Tool-Sandboxing adressiert dies auf Architekturebene — nicht durch Prompt-basierte Selbstdisziplin.

### 5. Zustandsverwaltung (State Management)

Das schwierigste Problem in Multi-Turn-Agent-Workflows ist **Zustandskonsistenz**.

Das Harness ist verantwortlich für:

- **Kontext-Injektion**: Mit welchem Kontext beginnt jeder Turn? Wie wird historisches Gedächtnis komprimiert, bevor es injiziert wird?
- **Zustandsserialisierung**: Wenn der Agent mitten in der Ausführung fehlschlägt, sollte der Zustand über Checkpoints wiederherstellbar sein — kein Neustart von Grund auf.
- **Session-Isolation**: Die Agent-Ausführungen verschiedener Nutzer dürfen gegenseitig keine Zustandsverschmutzung verursachen.

Wir verwenden aktuell Redis für kurzfristigen Zustand und PostgreSQL für Langzeitgedächtnis. Designprinzip: **Zustand von Logik trennen. Der Agent selbst hält keinen Zustand.**

## Wann brauchen Sie wirklich ein Harness

Wenn Ihr Agent für persönlichen Gebrauch oder interne Demos gedacht ist, überspringen Sie es vorerst.

Aber sobald eines der folgenden zutrifft, sollte Harness auf der Roadmap stehen:

1. Der Agent dient echten Nutzern
2. Irgendein Tool-Call hat Seiteneffekte (Schreiben, Senden, externe Systemauslöser)
3. Sie müssen erklären können: „Warum hat der Agent diese Entscheidung getroffen?"
4. Es gibt Compliance- oder Sicherheitsanforderungen (Finanzen, Gesundheit, Recht — fast alle haben sie)

Wann in ein Harness investiert werden sollte, hängt von der Phase und dem Kontext des Agenten ab. Eine frühzeitige Planung der Ausführungsschicht zahlt sich aus, wenn es darum geht, den Agenten zu betreiben und zu skalieren.

---

*Teil der Serie „GenAI in der Praxis".*

💬 **Weiterführende Lektüre:**
- [5 Produktdesign-Fallen beim Bau von KI-Agenten](/de/insights/ai-agent-product-design-traps)
- [Prompt Engineering Patterns für Unternehmensszenarien](/de/insights/enterprise-prompt-engineering)

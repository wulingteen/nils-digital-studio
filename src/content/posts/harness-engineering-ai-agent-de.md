---
title: "Harness Engineering: Die Ausführungsschicht für Ihren KI-Agenten aufbauen"
titleEn: "Harness Engineering: Building the Execution Layer for Your AI Agent"
titleDe: "Harness Engineering: Die Ausführungsschicht für Ihren KI-Agenten aufbauen"
excerpt: "Egal wie elegant Ihre Agent-Logik ist — ohne ein solides Harness ist das Live-Gehen ein Glücksspiel. Dieser Beitrag erläutert das Kerndesign von Harness Engineering."
excerptEn: "No matter how elegant your Agent logic is, without a solid Harness, going live is gambling. This post breaks down the core design of Harness Engineering."
excerptDe: "Egal wie elegant Ihre Agent-Logik ist — ohne ein solides Harness ist das Live-Gehen ein Glücksspiel. Dieser Beitrag erläutert das Kerndesign von Harness Engineering."
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

**Harness Engineering** ist das Konzept, das ich in Gesprächen mit Entwicklungsteams am häufigsten ausgelassen sehe.

Teams verbringen Monate damit, Prompts zu optimieren, Agent-Abläufe zu entwerfen und Embedding-Modelle auszuwählen — dann wird alles zusammengesteckt, man sagt „unser Agent läuft" und deployed. Was folgt, ist vorhersehbar: Der Agent fällt sporadisch durch Timeouts, ohne jegliche Logs. Ein Tool-Call schlägt still fehl, der Agent läuft weiter und produziert eine Ausgabe, die korrekt aussieht, aber komplett falsch ist. Nutzer melden, dass „die KI sich manchmal komisch verhält", und man weiß nicht, wo man anfangen soll zu debuggen.

Das sind die Symptome eines fehlenden Harness.

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

Das sind keine optionalen Features. Ich habe erlebt, wie ein Agent ohne Max-Steps-Limit in der Produktionsumgebung 200 Schritte lief, sein Token-Budget verbrauchte und nie stoppte.

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

In [5 Produktdesign-Fallen beim Bau von KI-Agenten](/de/insights/ai-agent-product-design-traps) habe ich „übermäßiges Vertrauen in das Reasoning des Agenten" als einen der häufigsten Fehler bezeichnet. Tool-Sandboxing verhindert dies auf Architekturebene — nicht durch Prompt-basierte Selbstdisziplin.

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

Das Harness zu überspringen bedeutet nicht, dass es keine Probleme gibt. Es bedeutet, dass Sie sie noch nicht gesehen haben.

---

*Teil der Serie „GenAI in der Praxis".*

💬 **Weiterführende Lektüre:**
- [5 Produktdesign-Fallen beim Bau von KI-Agenten](/de/insights/ai-agent-product-design-traps)
- [Prompt Engineering Patterns für Unternehmensszenarien](/de/insights/enterprise-prompt-engineering)

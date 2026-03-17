---
title: "[Patent 6] Aufbau eines Knowledge Graphs aus der Perspektive eines GenAI Product Owners: Mein erstes KI-Patent"
titleEn: "[Patent 6] Building a Knowledge Graph from a GenAI Product Owner's Perspective: My First AI Patent"
titleDe: "[Patent 6] Aufbau eines Knowledge Graphs aus der Perspektive eines GenAI Product Owners: Mein erstes KI-Patent"
excerpt: "Wie konzipiert ein Bank-GenAI-Produktmanager ein LLM-System, das als Antwort auf Geschäftsprobleme automatisch einen Knowledge Graph aufbaut, und erhält daf..."
excerptEn: "How does a bank GenAI Product Manager design an LLM system that automatically builds a knowledge graph from business pain points, and successfully obtain a..."
excerptDe: "Wie konzipiert ein Bank-GenAI-Produktmanager ein LLM-System, das als Antwort auf Geschäftsprobleme automatisch einen Knowledge Graph aufbaut, und erhält daf..."
date: "2025-11-01"
author: "Nils Liu"
tags:
  - "Patent"
  - "Blog"
  - "GenAI"
  - "Architecture"
coverImage: "/images/blog/patent-knowledge-graph.webp"
---

## Warum benötigen Banken einen "selbstlernenden" Knowledge Graph?

Die meisten Menschen assoziieren Wissensgraphen (Knowledge Graphs) mit massiver manueller Kennzeichnung, vordefinierten Ontologien und einem Team von Fachexperten, die kontinuierlich für Instandhaltung sorgen müssen.

Im Finanzsektor ist das ein riesiges Problem.

Das Bankwissen ändert sich extrem schnell: Gesetzesaktualisierungen, Produktüberarbeitungen, Anpassungen an neue Kundensegmente... Die Kosten für den Aufbau eines traditionellen Knowledge Graphs sind hoch und die Aktualisierungszyklen langsam. Es kann mit dem Tempo des Geschäfts einfach nicht mithalten.

Als **GenAI Product Owner** stellte ich mir daher eine Frage:

> **"Wenn wir das LLM während jeder Kundeninteraktion automatisch Entitäten und Beziehungen extrahieren und den Knowledge Graph kontinuierlich aktualisieren lassen — wäre ein solches System machbar?"**

Die Antwort lautet ja, und diese Idee wurde später zu meinem Patent **M676680 "System zur Konstruktion von Knowledge Graphs"**.

---

## Wie funktioniert das System?

Die Kernarchitektur dieses Systems ist sehr intuitiv gestaltet und in vier Module unterteilt:

1. **Verarbeitungsmodul**: Gibt das Kundenverhalten und Anfragen in das LLM ein und wandelt sie in strukturierte "verarbeitete Texte" um.
2. **Entitätserkennungsmodul**: Identifiziert die Schlüsseleinheiten aus dem Text (Personen, Produkte, Ereignisse, Risikotypen etc.).
3. **Beziehungsextraktionsmodul**: Analysiert die potenziellen Verbindungen zwischen Entitäten (z.B. "Kunde A → Besitzt → Fonds B").
4. **Speichermodul**: Nutzt eine Graphdatenbank, um den Knowledge Graph zu speichern und fortlaufend zu aktualisieren.

Wichtiger noch: Das System kann diesen Knowledge Graph in Kombination mit Nutzerporträts nutzen, um **personalisierte Informationsantworten** zu liefern.

---

## Das Mindset eines GenAI PMs: Innovation durch Problem-Pain-Points

Viele Leute fragen mich: **Wie meldet ein PM/PO eigentlich ein Patent an?**

Meine Antwort ist: **Weil ein Patent im Grunde die Aufzeichnung einer Problemlösung ist.**

Beim Bau von GenAI-Produkten lösen Sie jeden Tag ein Problem: wie man KI-Systeme in einer Unternehmensumgebung zuverlässig zum Laufen bringt. Wissensmanagement ist das schwächste Glied in einer RAG-Architektur — Garbage in, Garbage out (GIGO). Wenn sich die Wissensbasis nicht von selbst entwickeln kann, verschlechtert sich die Wirksamkeit von RAG sehr schnell.

Der Kernwert dieses Patents ist keine technische Angeberei, sondern **die Nutzung einer systematischen Architektur zur Lösung des Wartungskostenproblems von Wissensdatenbanken.**

---

## Erkenntnisse für GenAI Product Manager

Wenn Sie ein Unternehmens-GenAI-Produkt planen, lohnt es sich, folgende Fragen zu prüfen:

- Wie oft wird Ihre Wissensbasis aktualisiert? Wer ist dafür verantwortlich?
- Gibt es eine Möglichkeit für das System, aus Nutzerinteraktionen **automatisch zu lernen**?
- Kann das Design Ihres Knowledge Graphs Personalisierung unterstützen?

**Ein Knowledge Graph ist nicht nur eine technologische Entscheidung; es ist das "Gedächtnisdesign" eines GenAI-Produkts.**

---

*M676680 System zur Konstruktion von Knowledge Graphs | Erteilt: 2025/11/01 | Alleiniger Erfinder: Nils Liu*

💬 **Lese mehr:** [2025 Jahresrückblick (Auf Deutsch)](/de/insights/2025-year-in-review-de)

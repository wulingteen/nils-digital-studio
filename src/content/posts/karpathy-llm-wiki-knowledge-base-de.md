---
title: "Karpathys LLM Wiki: Warum Ihr RAG-Ansatz möglicherweise falsch liegt"
titleEn: "Karpathy's LLM Wiki: Why Your RAG Might Be Doing It Wrong"
titleDe: "Karpathys LLM Wiki: Warum Ihr RAG-Ansatz möglicherweise falsch liegt"
excerpt: "Der ehemalige Tesla-KI-Direktor Andrej Karpathy schlägt vor, traditionelles RAG durch ein LLM-gepflegtes persönliches Wiki zu ersetzen. Wie sammelt diese Drei-Schichten-Architektur Wissen wie Zinseszins an? Eine vollständige Analyse."
excerptEn: "Former Tesla AI Director Andrej Karpathy proposes replacing traditional RAG with an LLM-maintained personal Wiki. How does this three-layer architecture compound knowledge like interest? A complete breakdown."
excerptDe: "Der ehemalige Tesla-KI-Direktor Andrej Karpathy schlägt vor, traditionelles RAG durch ein LLM-gepflegtes persönliches Wiki zu ersetzen. Wie sammelt diese Drei-Schichten-Architektur Wissen wie Zinseszins an? Eine vollständige Analyse."
date: "2026-04-07"
author: "Nils Liu"
tags: ["GenAI", "Architecture"]
coverImage: "/images/blog/karpathy-llm-wiki.webp"
pinned: false
---

## Einleitung: Leidet Ihr KI-Assistent unter digitaler Amnesie?

Stellen Sie sich folgendes Szenario vor: Sie verbringen einen ganzen Nachmittag damit, mit ChatGPT eine Forschungsarbeit zu diskutieren und kommen zu brillanten Analysen und Erkenntnissen. Am nächsten Tag öffnen Sie eine neue Unterhaltung, um die Diskussion fortzusetzen — und die KI hat absolut keine Ahnung, wer Sie sind oder worüber Sie gesprochen haben.

Das ist, was Andrej Karpathy als „digitale Amnesie" bezeichnet.

Im April 2026 teilte der ehemalige Tesla-KI-Direktor und OpenAI-Gründungsmitglied eine Idee, die die KI-Community erschütterte: **Hören Sie auf, RAG zu verwenden. Lassen Sie stattdessen ein LLM ein persönliches Wiki pflegen.**

## Was stimmt eigentlich nicht mit traditionellem RAG?

Bevor wir in Karpathys Lösung eintauchen, wollen wir verstehen, warum er eine „RAG-Revolution" fordert.

**RAG (Retrieval-Augmented Generation)** ist das vorherrschende Paradigma zur Wissensanreicherung. So funktioniert es:

1. Dokumente in kleine Abschnitte aufteilen
2. In Vektoren umwandeln und in einer Datenbank speichern
3. Bei jeder Abfrage nach den relevantesten Abschnitten suchen
4. Diese Abschnitte in den Prompt des LLM einfügen

Klingt vernünftig, aber Karpathy identifiziert einen fundamentalen Fehler: **RAG ist zustandslos.**

Jede Abfrage beginnt bei Null. Das System erinnert sich nicht an vorherige Suchen, verknüpft keine Erkenntnisse sitzungsübergreifend und wird mit der Nutzung nie klüger.

> In Karpathys Analogie ist traditionelles RAG wie der Protagonist in *Memento* — jeden Morgen aufwachend, ohne sich an gestern erinnern zu können.

## Das LLM Wiki: Zinseszins für Wissen

Karpathys Alternative ist elegant und mutig zugleich: **Das LLM fungiert als Forschungsbibliothekar, der aktiv eine persönliche Enzyklopädie pflegt.**

### Die Drei-Schichten-Architektur

Der Kern des Systems ist eine klare dreischichtige Struktur:

**Schicht 1: Rohdaten**

Ein schreibgeschütztes `raw/`-Verzeichnis mit allen Quellmaterialien — PDFs, Artikelausschnitte, Besprechungsprotokolle, Forschungsarbeiten. Das LLM kann diese Dateien lesen, aber nie modifizieren.

**Schicht 2: Die Wiki-Schicht**

Dies ist das Herzstück des Systems. Das LLM erstellt und pflegt aktiv eine Sammlung verlinkter Markdown-Dateien:

- Verfasst enzyklopädieartige Einträge für jedes Thema
- Extrahiert Schlüsselkonzepte und erstellt Rückverweise
- Entdeckt verborgene Zusammenhänge zwischen Dokumenten
- Führt regelmäßige „Gesundheitschecks" durch — repariert defekte Links und ergänzt fehlende Informationen

**Schicht 3: Die Anweisungen**

Kleine Anweisungsdateien, die definieren, wie das LLM das Wiki pflegen soll — Formatierungskonventionen, Strukturvorlagen und Kategorisierungsregeln.

### Warum „Zinseszins"?

Traditionelle RAG-Abfragen sind „Einmalkonsum". Sie stellen eine Frage, erhalten eine Antwort, und alles verschwindet.

Das LLM Wiki ist anders. Jede Interaktion kann neue Erkenntnisse generieren, die zurück ins Wiki fließen. Wie Zinseszins bei der Bank: **Wissen wächst exponentiell.**

## Warum nicht einfach Notion oder Obsidian verwenden?

Sie fragen sich vielleicht: „Wie unterscheidet sich das von einem manuell gepflegten Obsidian-Vault?"

Die Antwort: **Es geht darum, wer die Wartung übernimmt.**

Traditionelle Notizsysteme erfordern, dass Sie alle Routinearbeit selbst erledigen — Kategorisieren, Taggen, Verlinken, Organisieren. Die meisten Menschen geben ihre Systeme auf, sobald die anfängliche Begeisterung nachlässt.

Karpathys Ansatz delegiert diese Arbeit vollständig an das LLM:

> **Obsidian ist die IDE, das LLM ist der Programmierer, das Wiki ist die Codebasis.**

## Praktische Erkenntnisse für Entwickler

### 1. Wissensarchitektur überdenken

Für überschaubare Wissensbasen können strukturierte Markdown-Dateien effektiver sein als Vektordatenbanken.

### 2. Token-Verbrauch optimieren

Vorverdaute Wiki-Einträge sind kompakter als Rohdokumente und ermöglichen bessere Antworten mit weniger Tokens.

### 3. Prüfbarkeit und Transparenz

Da das Endprodukt eine Sammlung von Markdown-Dateien ist, bleibt das System vollständig transparent und überprüfbar.

## Fazit: Von „Tokens für Code ausgeben" zu „Tokens für Wissen ausgeben"

Karpathys LLM-Wiki-Konzept steht für einen entscheidenden Paradigmenwechsel: **LLMs sind nicht nur Chatbots oder Code-Generatoren — sie können Agenten sein, die aktiv Wissen verwalten und akkumulieren.**

Für jeden Entwickler und Wissensarbeiter, der darüber nachdenkt, wie man KI effektiv nutzen kann, ist dies möglicherweise das lohnendste neue Paradigma des Jahres 2026.

---

*Andrej Karpathy hat seinen konzeptuellen Bauplan über einen GitHub Gist geteilt. Für Implementierungsdetails empfehlen wir die Kombination aus Obsidian und Claude Code.*

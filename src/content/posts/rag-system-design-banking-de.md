---
title: "RAG-Systemdesign"
excerpt: "Der Aufbau eines RAG-Systems im Bankwesen: So wählen Sie Ihre Chunking-Strategie, Ihr Einbettungsmodell und Ihre Abrufpipeline."
author: "Nils Liu"
date: 2024-09-02
coverImage: "/images/blog/ai-roi-metrics-cover.png"
tags: ["Architecture", "GenAI", "Finance"]
---

## Die Realität von RAG

RAG (Retrieval-Augmented Generation) klingt in einem Tutorial einfach: Betten Sie Ihre PDFs ein, werfen Sie sie in eine Vektordatenbank und führen Sie eine Kosinusähnlichkeitssuche durch. In der Produktion – insbesondere im Bankwesen – scheitert dieser naive Ansatz sofort.

Finanzdokumente sind komplex. Sie enthalten Tabellen, Fußnoten und Querverweise. Eine einfache Vektorsuche ruft in 50 % der Fälle die falsche Klausel ab.

## 3 Wichtige Architekturentscheidungen

1. **Semantisches Chunking statt festes Chunking:** Zerlegen Sie Texte niemals pauschal in „alle 500 Token“. Finanzdokumente müssen nach semantischen Grenzen getrennt werden.
2. **Hybrid Retrieval (Vektor + Schlüsselwort):** Vektorsuche ist schlecht darin, spezifische alphanumerische Codes zu finden. Sie müssen eine hybride Pipeline implementieren, die BM25 (Schlüsselwortsuche) mit dichten Vektoreinbettungen kombiniert.
3. **Re-Ranking ist Pflicht:** Das Abrufen der Top 20 Kandidaten-Chunks führt zu viel Rauschen. Sie benötigen ein Cross-Encoder-Re-Ranking-Modell, um die Relevanz der gefundenen Chunks zu bewerten, bevor sie an das LLM übergeben werden.

Wenn Ihr RAG-System halluziniert, liegt das Problem in 9 von 10 Fällen in der Retrieval-Pipeline, nicht im Sprachmodell.


💬 **Lese mehr:** [2025 Jahresrückblick (Auf Deutsch)](/de/insights/2025-year-in-review-de)

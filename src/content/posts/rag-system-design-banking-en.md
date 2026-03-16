---
title: "RAG System Design: 3 Key Decisions for Financial Knowledge Bases"
excerpt: "Building a RAG system in banking: how to choose your chunk strategy, embedding model, and retrieval pipeline. Lessons from real production experience."
author: "Nils Liu"
date: 2024-09-02
coverImage: "/images/blog/ai-roi-metrics-cover.png"
tags: ["Architecture", "GenAI", "Finance"]
---

## The Reality of RAG

Retrieval-Augmented Generation (RAG) sounds simple in a tutorial: embed your PDFs, throw them in a vector database, and perform cosine similarity search. In production—especially in banking—this naive approach fails immediately. 

Financial documents are dense. They contain tables, footnotes, hierarchical clauses, and cross-references. A simple vector search will retrieve the wrong clause 50% of the time.

## 3 Key Architectural Decisions

1. **Semantic Chunking over Fixed Chunking:** Never chunk by "every 500 tokens." Financial documents must be chunked by semantic boundaries (e.g., stopping at the end of a regulatory clause). If you split a paragraph describing interest rate conditions down the middle, the embedding loses all meaning.
2. **Hybrid Retrieval (Vector + Keyword):** Vector search is terrible at finding specific alphanumeric codes (like SEC filing numbers or specific policy IDs). You must implement a hybrid pipeline combining BM25 (keyword search) with dense vector embeddings.
3. **Re-ranking is Mandatory:** Retrieving top 20 candidate chunks introduces too much noise. You need a dedicated Cross-Encoder re-ranking model to score the relevance of the retrieved chunks against the original user query before passing the top 5 to the LLM.

If your RAG system is hallucinating, 9 times out of 10, the problem is in the retrieval pipeline, not the language model.

---
title: "[Patent 6] Building a Knowledge Graph from a GenAI Product Owner's Perspective: My First AI Patent"
titleEn: "[Patent 6] Building a Knowledge Graph from a GenAI Product Owner's Perspective: My First AI Patent"
titleDe: "[Patent 6] Aufbau eines Knowledge Graphs aus der Perspektive eines GenAI Product Owners: Mein erstes KI-Patent"
excerpt: "How does a bank GenAI Product Manager design an LLM system that automatically builds a knowledge graph from business pain points, and successfully obtain a..."
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

## Why Do Banks Need a "Self-Learning" Knowledge Graph?

Most people think of knowledge graphs as requiring massive manual labeling, predefined ontologies, and a team of domain experts for continuous maintenance.

This is a huge problem in the financial sector.

Banking knowledge changes rapidly: regulatory updates, product revisions, new customer segment demands... The cost of building traditional knowledge graphs is high, and the update cycle is slow. It simply cannot keep up with the pace of the business.

As a **GenAI Product Owner**, I asked myself a question:

> **"If we let the LLM automatically extract entities and relationships during every customer interaction and continuously update the knowledge graph—is such a system feasible?"**

The answer is yes, and this idea later became my patent **M676680 "Knowledge Graph Construction System"**.

---

## How Does the System Work?

The core architecture of this system is very intuitive and is divided into four modules:

1. **Processing Module**: Inputs customer behavioral data and queries into the LLM, parsing them into structured "processed text".
2. **Entity Recognition Module**: Identifies key entities from the text (people, products, events, risk types, etc.).
3. **Relationship Extraction Module**: Analyzes the potential relationships between entities (e.g., "Customer A → Holds → Fund B").
4. **Storage Module**: Uses a Graph Database to store and continuously update the knowledge graph.

More importantly, the system can use this knowledge graph combined with user personas to provide **personalized information responses**.

---

## The GenAI PM's Mindset: Finding Innovation in Process Pain Points

Many people ask me, **how does a PM/PO end up applying for a patent?**

My answer is: **Because a patent is inherently a record of solving a problem.**

When building GenAI products, you are solving a problem every day: how to make AI systems run reliably in an enterprise environment. Knowledge management is the most fragile link in a RAG architecture—garbage in, garbage out (GIGO). If the knowledge base cannot evolve on its own, the effectiveness of RAG will quickly degrade.

The core value of this patent is not a technical flex, but rather **using a systematic architecture to solve the maintenance cost problem of knowledge bases.**

---

## Insights for GenAI Product Managers

If you are planning an enterprise GenAI product, these questions are worth careful consideration:

- How often is your knowledge base updated? Who is responsible?
- Is there a way for the system to **learn automatically** from user interactions?
- Can your knowledge graph design support personalization?

**A knowledge graph is not just a technology choice; it's the "memory design" of a GenAI product.**

---

*M676680 Knowledge Graph Construction System | Grant Date: 2025/11/01 | Sole Inventor: Nils Liu*

💬 **Read more:** [2025 Year in Review (English)](/en/insights/2025-year-in-review-en)

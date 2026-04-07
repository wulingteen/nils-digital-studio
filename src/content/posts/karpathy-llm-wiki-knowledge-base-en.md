---
title: "Karpathy's LLM Wiki: Why Your RAG Might Be Doing It Wrong"
titleEn: "Karpathy's LLM Wiki: Why Your RAG Might Be Doing It Wrong"
titleDe: "Karpathys LLM Wiki: Warum Ihr RAG-Ansatz möglicherweise falsch liegt"
excerpt: "Former Tesla AI Director Andrej Karpathy proposes replacing traditional RAG with an LLM-maintained personal Wiki. How does this three-layer architecture compound knowledge like interest? A complete breakdown."
excerptEn: "Former Tesla AI Director Andrej Karpathy proposes replacing traditional RAG with an LLM-maintained personal Wiki. How does this three-layer architecture compound knowledge like interest? A complete breakdown."
excerptDe: "Der ehemalige Tesla-KI-Direktor Andrej Karpathy schlägt vor, traditionelles RAG durch ein LLM-gepflegtes persönliches Wiki zu ersetzen. Wie sammelt diese Drei-Schichten-Architektur Wissen wie Zinseszins an?"
date: "2026-04-07"
author: "Nils Liu"
tags: ["GenAI", "Architecture"]
coverImage: "/images/blog/karpathy-llm-wiki.webp"
pinned: false
---

## Introduction: Is Your AI Assistant Suffering from Digital Amnesia?

Picture this: you spend an entire afternoon discussing a research paper with ChatGPT, arriving at brilliant analyses and insights. The next day, you open a new conversation to continue the discussion — and the AI has absolutely no idea who you are or what you talked about.

This is what Andrej Karpathy calls "digital amnesia."

In April 2026, the former Tesla AI Director and OpenAI founding member shared an idea that sent shockwaves through the AI community: **Stop using RAG. Instead, let an LLM maintain a personal Wiki.**

## What's Actually Wrong with Traditional RAG?

Before diving into Karpathy's solution, let's understand why he's calling for a "RAG revolution."

**RAG (Retrieval-Augmented Generation)** is the dominant knowledge-enhancement paradigm today. Here's how it works:

1. Split your documents into small chunks
2. Convert them into vectors and store in a database
3. For each query, search for the most relevant chunks
4. Stuff those chunks into the LLM's prompt

Sounds reasonable, but Karpathy identifies a fundamental flaw: **RAG is stateless.**

Every query starts from zero. The system doesn't remember what it found last time, doesn't connect insights across sessions, and never gets smarter with use. It's a search engine plus a response generator — nothing more.

> In Karpathy's analogy, traditional RAG is like the protagonist in *Memento* — waking up every morning having forgotten everything that happened yesterday.

## The LLM Wiki: Compound Interest for Knowledge

Karpathy's alternative is both elegant and audacious: **Let the LLM act as a research librarian that actively maintains a personal encyclopedia.**

### The Three-Layer Architecture

The system's core is a clean three-layer structure:

**Layer 1: Raw Sources**

A read-only `raw/` directory containing all your source materials — PDFs, article clippings, meeting transcripts, research papers. The LLM can read but never modify these files, ensuring they remain the "single source of truth."

**Layer 2: The Wiki Layer**

This is the system's heart. The LLM actively builds and maintains a collection of interlinked Markdown files. It:

- Authors encyclopedia-style entries for each topic
- Extracts key concepts and creates backlinks
- Discovers hidden connections between documents
- Periodically "lints" the wiki — fixing broken links and filling knowledge gaps

**Layer 3: The Instructions**

Small instruction files defining how the LLM should maintain the Wiki — formatting conventions for links, structural templates for entries, and rules for knowledge categorization.

### Why "Compound Interest"?

Traditional RAG queries are "one-time consumption." You ask a question, get an answer, and everything vanishes.

The LLM Wiki is different. Every interaction can generate new insights, and those insights get filed back into the Wiki, making the knowledge base richer over time. Like compound interest at a bank, **knowledge grows exponentially.**

## Why Not Just Use Notion or Obsidian?

You might ask: "How is this different from manually maintaining an Obsidian vault?"

The answer: **It's about who does the maintenance.**

Traditional note-taking systems (Zettelkasten, Notion, Obsidian) require you to do all the grunt work — categorizing, tagging, linking, organizing. Most people abandon their systems once the initial enthusiasm fades, leaving behind a graveyard of disconnected notes.

Karpathy's approach delegates all that labor to the LLM. He offers an elegant metaphor:

> **Obsidian is the IDE, the LLM is the programmer, the Wiki is the codebase.**

You just keep feeding in raw materials. The LLM handles all the organizing, linking, and maintenance. This isn't automated note-taking — it's having AI serve as your dedicated research assistant.

## Practical Takeaways for Developers

Karpathy's framework offers several actionable insights for developers:

### 1. Rethink Your Knowledge Architecture

If you're building enterprise knowledge management systems, it's worth re-examining the default "vector search + real-time retrieval" paradigm. For manageable-scale knowledge bases (personal to small teams), structured Markdown files might be more effective than vector databases.

### 2. Optimize Token Consumption

Pre-digested Wiki entries are more concise than raw documents, enabling better answers with fewer tokens. In an era of rising API costs, this advantage shouldn't be overlooked.

### 3. Auditability and Transparency

Because the final product is a collection of Markdown files, the system is inherently transparent — you can open any entry to verify what the LLM wrote and what sources it cited. In enterprise compliance scenarios, this is far more convincing than black-box RAG systems.

## Conclusion: From "Spending Tokens on Code" to "Spending Tokens on Knowledge"

Karpathy's LLM Wiki concept represents a crucial mindset shift: **LLMs aren't just chatbots or code generators — they can be agents that actively manage and compound knowledge.**

He openly admits that he now "spends more tokens on managing knowledge than on writing code." This might sound counterintuitive, but consider: if AI can build a knowledge base that appreciates over time, the "ROI" on those tokens might far exceed writing a snippet of code.

For every developer and knowledge worker pondering how to harness AI effectively, this might be 2026's most worthwhile paradigm to explore.

---

*Andrej Karpathy shared his "Idea File" conceptual blueprint via a GitHub Gist. If you're interested in implementation details, we recommend starting with the Obsidian + Claude Code combination.*

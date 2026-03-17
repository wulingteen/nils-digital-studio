---
title: "Why Deploying LLMs in Banking Is 10x Harder Than You Think"
excerpt: "Deploying AI in a bank isn't just picking a model. Compliance, security, data governance, organizational culture — each hurdle is harder than the last."
author: "Nils Liu"
date: 2025-05-18
coverImage: "/images/blog/ai-pm-base.webp"
tags: ["AI PM", "GenAI", "Finance", "Career"]
seriesInfo:
  part: 2
  name: "GenAI Product Manager Evolution"
---

## Human Needs + Existing Tech Combination

Everyone outside the banking industry assumes that big banks simply refuse to adopt LLMs out of sheer stubbornness or technical incompetence. The truth is much more complicated. Deploying an LLM in a heavily regulated financial institution is 10x harder than deploying an email client.

Why? Because in finance, a "hallucination" isn't an amusing quirk—it's a regulatory violation, a lawsuit, and a potential loss of millions of dollars.

To succeed as a GenAI PM in banking, you must master the art of combining human needs with existing, defensible technology. You cannot rely on the LLM to be perfectly accurate 100% of the time. Instead, you build guardrails:
- **RAG (Retrieval-Augmented Generation)** to anchor the model to approved internal documents.
- **Data Masking Pipelines** to ensure PII (Personally Identifiable Information) never hits the prompt.
- **Audit Trails** that record exactly which version of a model produced which advice on which day.

In this environment, "prompt engineering" is just 5% of the work. The remaining 95% is building an infrastructure of trust around the AI.


💬 **Read more:** [2025 Year in Review (English)](/en/insights/2025-year-in-review-en)

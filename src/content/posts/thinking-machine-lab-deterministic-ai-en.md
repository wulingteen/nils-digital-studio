---
title: "Mira Murati's Thinking Machine Lab"
titleEn: "Mira Murati's Thinking Machine Lab"
titleDe: "Mira Muratis Thinking Machine Lab"
excerpt: "Does setting temperature to 0 give perfectly consistent AI outputs? No — and Thinking Machine Lab found out why. Batch processing is the culprit, and they b..."
excerptEn: "Does setting temperature to 0 give perfectly consistent AI outputs? No — and Thinking Machine Lab found out why. Batch processing is the culprit, and they b..."
excerptDe: "Erhält man absolut konsistente Ergebnisse, wenn man die Temperatur des KI-Modells auf 0 setzt? Die Antwort ist nein, und eine Studie von Thinking Machine La..."
date: "2025-09-13"
author: "Nils Liu"
tags:
  - "News"
  - "Blog"
  - "GenAI"
  - "Architecture"
coverImage: "/images/blog/thinking-machine-lab.jpg"
---

Here's a question most people assume is trivial: if you set an AI model's temperature to 0, do you get perfectly consistent outputs every time? Intuition says yes. Reality says no — and the reason is more fundamental than most people realize.

Thinking Machine Lab (Mira Murati's startup — which raised $2B and hit a $10B valuation before shipping a single product, purely on the team's credibility) published a deep-dive on this on September 10th.

When you run 1,000 identical prompts against a "deterministic" model, you get dozens of different outputs. The source isn't model randomness — it's **batch processing on the server side**. How the server groups incoming requests changes the numerical outcomes of normalization, matrix multiplication, and attention operations in ways that cascade into different outputs.

The implications are serious:
- Benchmark scores can vary by up to 5% depending on server load
- Developers often can't reproduce specific failure cases because batch configuration has changed
- For regulated industries, you can't guarantee consistent auditable behavior

The fix Thinking Machine Lab developed: batch-invariant versions of the core operations — ensuring identical inputs produce identical outputs regardless of how requests are grouped. In testing, it works. The tradeoff: roughly **60% slower**.

For most use cases, the speed cost isn't worth it. For regulated financial, healthcare, or legal applications where consistency is a compliance requirement, it might be.

A practical diagnostic: run the same prompt 100 times and count how many distinct outputs you get. If you're building anything mission-critical with AI, you should know that number.

The encouraging part: this is a *solvable* technical problem, not an inherent property of AI systems. Expect the performance cost to come down as the approach matures.

💬 **Read more:** [2025 Year in Review (English)](/en/insights/2025-year-in-review-en)

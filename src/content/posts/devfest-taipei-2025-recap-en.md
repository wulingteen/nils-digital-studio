---
title: "DevFest Taipei 2025: Building a Real AI Coaching Platform"
titleEn: "DevFest Taipei 2025: Building a Real AI Coaching Platform"
titleDe: "DevFest Taipei 2025: Aufbau einer echten KI-Coaching-Plattform"
excerpt: "At DevFest Taipei 2025 I shared a real production AI coaching platform — multi-agent collaboration, Persona World, Ontology + GraphRAG, delivering 24/7 personalized sales training."
excerptEn: "At DevFest Taipei 2025 I shared a real production AI coaching platform — multi-agent collaboration, Persona World, Ontology + GraphRAG, delivering 24/7 personalized sales training."
excerptDe: "Beim DevFest Taipei 2025 habe ich eine produktive KI-Vertriebs-Coaching-Plattform vorgestellt—mit Multi-Agenten-Kollaboration, Persona World und Ontology + GraphRAG."
date: "2025-12-02"
author: "Nils Liu"
tags:
  - "Event"
  - "Agent"
  - "Architecture"
coverImage: "/images/blog/AI_Coach.png"
pinned: true
---

Late last year I took the stage at DevFest Taipei 2025 to share something we've actually shipped — a 24/7 AI coaching platform for overseas sales agents. Not a demo. A real system running in production.

The first question people always ask is: "Is it just another chatbot?" Short answer: no. What I built is a **multi-agent coaching team** — three specialized AI agents working in concert to simulate sales conversations with uncanny realism. The customer AI can get frustrated and hang up on you. That's by design.

#DevFestTaipei #AIAgent #Ontology #GraphRAG

## Why Build This?

We had a chronic problem: **45% of our overseas sales agents quit within their first year**, and all that hard-won experience walked out the door with them. New agents took too long to ramp up, product knowledge was inconsistent, and training ROI was essentially unmeasurable.

My answer: give every agent a sparring partner that never gets tired, never judges them, and remembers every session.

## How the System Works

Three agents, three roles:

- **Persona Generation Agent** — draws from 15 social trait dimensions (age, personality, financial situation...) to compose ~500 million unique customer profiles, each with a full backstory
- **Customer Agent** — embodies that persona in conversation; has real emotions, real hesitations, and will end the call if you handle it poorly
- **Coach Agent** — post-session debrief: not just a score, but a demonstration of a better approach

## What I Care About Most: Persona World

The soul of the whole system is **Persona World**. Most AI customers are just demographic data — age, location, job. Mine carry psychological traits, core values, relationship dynamics, financial anxieties. The AI doesn't just *sound* like a real person; it *thinks* like one.

That's the difference between a training session that feels real and one that obviously doesn't.

## Context Engineering

The system runs on a four-layer context stack — global situation, scene settings, character state, live dialogue — keeping all three agents coherent within the same world.

Funny thing: I was doing Context Engineering before the term became trendy. I think engineering intuition matters more than following the hype cycle.

## Making AI Actually Understand Rules: Ontology + GraphRAG

Plain RAG isn't enough when you need the system to reason about relationships — which products suit which client profiles, what compliance risks apply in which contexts. I built a knowledge graph (inspired by Palantir's Ontology concept), and GraphRAG lets agents traverse it upstream and downstream.

Results: **86% accuracy on RobustQA** vs. 33-76% for traditional RAG.

## What's Next: Graph-R1

I'm excited about Graph-R1 — using reinforcement learning so the agent improves its own search strategy over time, without constant prompt tuning. Every training session becomes data that makes the system smarter. That's the flywheel I'm building toward.

## Current Results

118 users in testing. Not a prototype — a live product.

<div class="my-10 grid grid-cols-1 md:grid-cols-3 gap-6 bg-primary/5 rounded-3xl p-8 border border-primary/10">
  <div class="flex flex-col items-center text-center">
    <div class="text-5xl font-extrabold text-[#0B7A38] dark:text-[#18A04E] mb-2 flex items-baseline">118<span class="text-2xl ml-1"></span></div>
    <div class="font-bold text-foreground">Active Users</div>
    <div class="text-sm text-muted-foreground">Sales Agents</div>
  </div>
  <div class="flex flex-col items-center text-center">
    <div class="text-5xl font-extrabold text-[#0B7A38] dark:text-[#18A04E] mb-2 flex items-baseline">96<span class="text-2xl ml-1">%</span></div>
    <div class="font-bold text-foreground">Satisfaction</div>
    <div class="text-sm text-muted-foreground">System-measured</div>
  </div>
  <div class="flex flex-col items-center text-center">
    <div class="text-5xl font-extrabold text-[#0B7A38] dark:text-[#18A04E] mb-2 flex items-baseline">86<span class="text-2xl ml-1">%</span></div>
    <div class="font-bold text-foreground">Usefulness</div>
    <div class="text-sm text-muted-foreground">Survey results</div>
  </div>
</div>

## Want the Full Slide Deck?

Happy to share more. Drop me a line.

[📩 Request the slides](mailto:wulingteen@gmail.com?subject=DevFest%20Taipei%202025%20AI%20Coach%20Slides)
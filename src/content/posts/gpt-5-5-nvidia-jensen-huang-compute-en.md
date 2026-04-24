---
title: "GPT-5.5 Is Here: Tops 14 Benchmarks, and Jensen Huang Is Betting $100B on the Infrastructure"
titleEn: "GPT-5.5 Is Here: Tops 14 Benchmarks, and Jensen Huang Is Betting $100B on the Infrastructure"
titleDe: "GPT-5.5 offiziell veröffentlicht: 14 Benchmark-Siege und Jensen Huangs 100-Milliarden-Dollar-Wette"
excerpt: "GPT-5.5 launched April 23, topping 14 benchmarks and cutting token usage 40%. Behind the scenes, Jensen Huang and NVIDIA are betting up to $100B on the compute infrastructure that makes it run."
excerptEn: "GPT-5.5 launched April 23, topping 14 benchmarks and cutting token usage 40%. Behind the scenes, Jensen Huang and NVIDIA are betting up to $100B on the compute infrastructure that makes it run."
excerptDe: "GPT-5.5 erschien am 23. April und führt 14 Benchmarks an. Dahinter steckt Jensen Huangs NVIDIA-Wette: 10 Gigawatt Infrastruktur, bis zu 100 Milliarden Dollar Investition."
date: "2026-04-24"
author: "Nils Liu"
tags:
  - "GenAI in Practice"
  - "Blog"
  - "OpenAI"
  - "NVIDIA"
coverImage: "/images/blog/gpt-5-5-nvidia-compute.webp"
lang: "en"
---

**GPT-5.5** rolled out yesterday (April 23) to ChatGPT Plus, Pro, Business, and Enterprise users.

The technical numbers are compelling: 73.1% on the Expert-SWE benchmark (GPT-5.4 scored 68.5%), and it leads across 14 benchmarks simultaneously when compared to other frontier models — Claude Opus 4.7 led 4, Google Gemini 3.1 Pro led 2.

But what's equally worth tracking is the compute bet Jensen Huang and NVIDIA are placing behind it.

## What GPT-5.5 Actually Improves

**Efficiency is the most significant change in this release.**

Compared to GPT-5.4, GPT-5.5 uses approximately 40% fewer output tokens for equivalent tasks, while maintaining the same per-token latency. Same compute, more output.

On the capability side, the improvements are focused on engineering and research workflows:

- Code changes propagate more effectively through surrounding codebases
- Stronger reasoning through ambiguous failures
- Better context maintenance across large systems
- Improved performance on data analysis and research tasks

This direction aligns closely with where enterprise AI Agent usage is heading — long-running, multi-step automated workflows rather than single-turn queries.

One detail worth noting: on April 22, GPT-5.5 accidentally surfaced for about 47 minutes due to a routing error. Screenshots from that window showed an 18% inference speed improvement and a 40% reduction in hallucination rates. OpenAI's official release came a day earlier than expected — widely interpreted as a response to information already being out in the open.

## Jensen Huang's Compute Bet

Behind GPT-5.5 is a much larger infrastructure wager.

In 2016, Jensen Huang personally delivered NVIDIA's first DGX-1 AI supercomputer to OpenAI's San Francisco office. Ten years later, the scale of the relationship has changed entirely.

NVIDIA and OpenAI announced a strategic partnership with a letter of intent to deploy **at least 10 gigawatts of NVIDIA systems**, with NVIDIA committing up to **$100 billion**, released progressively as each gigawatt comes online. The first gigawatt is targeted for the second half of 2026 on NVIDIA's Vera Rubin platform.

Huang's words at the announcement: "This investment and infrastructure partnership mark the next leap forward — deploying 10 gigawatts to power the next era of intelligence."

**GPT-5.5 currently runs on NVIDIA GB200 NVL72 rack-scale systems**, with the following efficiency gains over prior-generation infrastructure:

- **35x lower** cost per million tokens
- **50x higher** token output per second per megawatt

For a service running inference at the scale OpenAI does, that efficiency gap translates directly into margin.

## Compute, Models, Business

NVIDIA's role in this partnership goes beyond hardware supply.

Over **10,000 NVIDIA employees** across departments are using GPT-5.5-powered Codex. From Huang's perspective, this is both an endorsement of OpenAI's technology and a practical engineering productivity tool for NVIDIA internally.

Worth noting: in March 2026, Huang also stated that NVIDIA is pulling back from exclusive arrangements with OpenAI and Anthropic. This isn't a relationship breakdown — it's a signal that AI compute infrastructure is maturing toward a more neutral, platform-oriented model. NVIDIA's business logic has never been about picking which model wins; it's about ensuring the GPUs running those models are NVIDIA's.

On the training side, GPT-5 and GPT-5.4 were primarily trained on H100 and H200 chips. GPT-5.5's inference environment has moved to GB200 NVL72, but large-scale Blackwell training is still maturing — H100 and H200 remain the primary GPUs for frontier-scale training runs. The next inflection point will come when the Vera Rubin platform fully launches and reshapes both training and inference compute dynamics.

## The AI Agent Infrastructure Angle

From an enterprise AI perspective, GPT-5.5's improvement direction is clear: this is a model designed for Agent workflows.

A 40% token efficiency gain compounds across multi-step Agent tasks — a task requiring 20 LLM calls, each 40% more efficient, sees multiplicative reductions in both cost and latency. This makes Agent use cases that previously struggled to achieve commercial viability suddenly more feasible.

This connects directly to what I've covered in [Harness Engineering](/en/insights/harness-engineering-ai-agent) and [Hermes Agent](/en/insights/hermes-agent-self-improving-framework): improvements in underlying model efficiency directly expand the design space for the execution layer. When each LLM call gets cheaper, you can afford more Agent steps, more robust error handling, and more thorough verification.

---

*Part of the "GenAI in Practice" series.*

💬 **Further reading:**
- [Harness Engineering: Building the Execution Layer for Your AI Agent](/en/insights/harness-engineering-ai-agent)
- [Hermes Agent: The Open-Source AI Agent Framework That Gets Smarter Over Time](/en/insights/hermes-agent-self-improving-framework)

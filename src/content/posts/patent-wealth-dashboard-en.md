---
title: "[Patent 1] How GenAI Transforms Wealth Management: From Needs to Dashboards—A Bank AI PM's Product Design Journey"
titleEn: "[Patent 1] How GenAI Transforms Wealth Management: From Needs to Dashboards—A Bank AI PM's Product Design Journey"
titleDe: "[Patent 1] Wie GenAI die Vermögensverwaltung verändert: Von Bedürfnissen zu Dashboards—Die Reise eines Bank-PMs"
excerpt: "What are the true pain points of Relationship Managers? How does GenAI help them generate real-time personalized investment advice in conversations? This article shares the journey and patent thinking of a Bank GenAI Product Manager."
excerptEn: "What are the true pain points of Relationship Managers? How does GenAI help them generate real-time personalized investment advice in conversations? This article shares the journey and patent thinking of a Bank GenAI Product Manager."
excerptDe: "Was sind die wahren Schmerzpunkte von Kundenberatern? Wie hilft GenAI ihnen, in Echtzeit personalisierte Anlageempfehlungen zu generieren? Dieser Artikel teilt die Reise und das patentierte Denken eines Bank-GenAI-Produktmanagers."
date: "2025-05-11"
author: "Nils Liu"
tags:
  - "Patent"
  - "GenAI"
coverImage: "/images/blog/patent-wealth-dashboard.png"
---

## The True Pain Point of Relationship Managers

While building AI products at the bank, I spent a lot of time chatting with Relationship Managers (RMs).

They don't lack effort, nor do they lack an understanding of their clients.

What they lack is: **the capability to rapidly synthesize all relevant information and provide persuasive advice right in front of the client.**

The reality looks like this: A client says, "I have 5 million to adjust my portfolio." The RM needs to accomplish the following in just a few minutes:

- Query the client's current asset allocation.
- Understand the client's risk appetite and history.
- Check current market trends and interest rate curves.
- Compare deliverable internal wealth products.
- Make personalized recommendations.

This is a multi-source information synthesis + personalized recommendation task, which is **the perfect scenario for GenAI.**

This insight was the origin of **M670472 "Financial Investment Recommendation Generation System"**.

---

## System Architecture: An AI Assistant That "Knows the Business"

The system design revolves around the daily workflow of the RM:

**Information Input Layer**
- **External Servers**: Real-time market info, trends, product quotes.
- **Internal Servers**: Client profiles, risk assessment reports, client assets, available products.

**AI Processing Layer**
1. **NLU Module**: Parses the client's financial investment needs (which can be unstructured natural language).
2. **Multi-Source Synthesis Module**: Synchronously pulls external market data and internal client data.
3. **Generative AI Model (LLM)**: Integrates all inputs to generate an initial customized investment proposal.

**Visual Output Layer**
4. **Interactive Asset Dashboard Generation Module**: Displays multi-dimensional analysis of the client's current allocation.
5. **Investment Proposal Dashboard Generation Module**: Provides custom recommendations with multi-scenario simulations.
6. **Dynamic Visualization Module**: Combines the above into a single cohesive functional financial dashboard.

Finally, the **Continuous Learning Module** optimizes the AI models based on user interaction feedback over time.

---

## As a GenAI Product Manager: What Did This Project Teach Me?

**1. "Personalization" requires foundational data architecture.**

Many GenAI products claim to be personalized, but in reality, they just stuff a couple of user fields into the prompt.

True personalization requires a complete client data model: risk preferences, asset structures, historical behavior, interaction feedback... Designing this data architecture is more important than the AI model itself.

**2. "Multi-scenario simulation" is a killer feature for AI.**

Traditional RMs can usually only provide one recommendation at a time. This system can simultaneously output "Conservative," "Balanced," and "Aggressive" scenario recommendations, letting the client choose.

This is extremely hard for a human mind to do on the fly, but effortless for an LLM. **Finding an asymmetrical advantage of AI is the core job of a GenAI PM.**

**3. The continuous learning loop is the source of long-term competitiveness.**

Launching the product is just the beginning. The system learns from every RM interaction and client reaction, making the model more accurate over time. **This learning flywheel is the hardest moat to replicate.**

---

## Product Design Advice for GenAI POs

If you're designing financial AI products, my advice is:

**Don't start from the technology; start from the workflow of the RM (or any frontline staff).**

Find where they spend the most time, make the most mistakes, and most require info-synthesis support—that is where GenAI can create the most value.

**The best positioning for AI isn't "replacing the RM"; it's "equipping every RM with an omniscient assistant standing right beside them."**

---

*M670472 Financial Investment Recommendation Generation System (Customized GenAI Financial Dashboard) | Grant Date: 2025/05/11 | Sole Inventor: Nils Liu*
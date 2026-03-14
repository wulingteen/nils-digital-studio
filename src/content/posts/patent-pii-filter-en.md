---
title: "[Patent 3] GenAI Compliance Design Key Tech: How a Bank AI PM Used 'Sensitive Info Substitution' to Balance Performance & Compliance"
titleEn: "[Patent 3] GenAI Compliance Design Key Tech: How a Bank AI PM Used 'Sensitive Info Substitution' to Balance Performance & Compliance"
titleDe: "[Patent 3] GenAI Compliance-Design: Wie ein Bank-AI-PM 'sensible Informationssubstitution' nutzte, um Leistung & Compliance zu vereinen"
excerpt: "When introducing an AI knowledge base query system in a bank, how do you prevent PII leaks without sacrificing response quality? This article introduces a GenAI Product Owner's patent architecture for sensitive info filtering and substitution."
excerptEn: "When introducing an AI knowledge base query system in a bank, how do you prevent PII leaks without sacrificing response quality? This article introduces a GenAI Product Owner's patent architecture for sensitive info filtering and substitution."
excerptDe: "Wie verhindert man bei der Einführung eines KI-Wissensdatenbanksystems in einer Bank Datenlecks, ohne die Antwortqualität zu beeinträchtigen? Dieser Artikel stellt die Patentarchitektur für das Filtern und Ersetzen sensibler Informationen vor."
date: "2025-06-01"
author: "Nils Liu"
tags:
  - "Patent"
  - "GenAI"
  - "Architecture"
coverImage: "/images/blog/patent-pii-filter.png"
---

### The Compliance Nightmare Every GenAI PM Will Face

Imagine this scenario:

You finally get the RAG system online. Customer service reps are using it to query customer data, business rules, internal SOPs... It works great, and everyone is happy.

Then the compliance department walks in.

"This system's reply includes the customer's name and account info. Does this comply with privacy laws?"

"Internal business data is shown in the response. What if someone leaks a screenshot?"

"Are the times and locations mentioned in this response hinting at sensitive business operations?"

This is not a hypothetical scenario; these are conversations I have personally experienced.

**As a GenAI Product Owner, you have to ensure the AI system is "useful AND compliant"—these two things are not mutually exclusive.**

My solution is the sensitive information filtering and substitution technology in patent **M671223 "Information Query System"**.

---

### Core Mechanism: Substitution, Not Masking

When many people hear "sensitive info handling," their first thought is to "delete it" or "mask it with asterisks."

But doing so makes the response lose its semantic completeness. The user simply won't understand it.

The design of this system is more elegant: **it replaces sensitive content with "alternative messages of the same type but different content," preserving the structural semantics.**

Specifically, the system will:

1. Receive an information query, retrieving relevant financial operations data from the knowledge base.
2. Generate an "initial response" using the LLM, which may contain sensitive info.
3. Pass it to the Information Processing Module, which identifies **pending substitutions** in the response, categorizing them into:
   - Personal Data (Names, IDs, Accounts)
   - Business Content (Specific product details, rates)
   - Temporal Info (Sensitive transaction times)
   - Spatial Info (Specific branches, addresses)
4. According to predefined rules, replace the sensitive content with alternative messages of **the same category but different content**.
5. Output the final, compliant response.

---

### Why Is This a Core Capability in GenAI Product Design?

Banking, healthcare, law... these highly regulated industries are where GenAI has the most value, yet are the hardest markets to crack.

The bottleneck is almost never the technology; it's **compliance**.

As a **GenAI Product Manager**, if you can solve compliance concerns at the product architecture level, you will leave your competitors far behind. While most are still handling compliance with "post-mortem reviews," you have already built compliance natively into the system.

---

### Three Tiers of GenAI Compliance Architecture Implementation

**Layer 1: Input Filtering**
Before a user's prompt enters the system, filter out categories of sensitive data that shouldn't be queried.

**Layer 2: Output Substitution (Core of this patent)**
Before sending the response, automatically identify and replace sensitive content, ensuring the explicit outgoing information is compliant.

**Layer 3: Audit Trails**
Record every single query and substitution to support post-event auditing and compliance reviews.

**Implementing just one layer is not enough. All three combined constitute a true GenAI compliance architecture.**

---

*M671223 Information Query System (Sensitive Information Filtering and Substitution) | Grant Date: 2025/06/01 | Sole Inventor: Nils Liu*
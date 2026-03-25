---
title: "Andrej Karpathy's 'AI Psychosis' and the Next Decade: From Hand-Coding to Directing Agents"
titleEn: "Andrej Karpathy's 'AI Psychosis' and the Next Decade: From Hand-Coding to Directing Agents"
titleDe: "Andrej Karpathys „KI-Psychose“ und das nächste Jahrzehnt: Vom Hand-Coding zur Steuerung von Agenten"
excerpt: "Andrej Karpathy 在最新的访谈中提到自己彷彿得了「AI 精神病」——他已經幾個月沒親自寫過程式碼了。這篇文章整理了他在《No Priors》Podcast 分享的核心觀點，包括 Claws 的概念以及未來軟體開發範式的轉變。"
excerptEn: "Former OpenAI and Tesla AI Director Andrej Karpathy details his 'AI Psychosis' on the No Priors podcast. Discover how Claws, Token Anxiety, and Software 3.0 are reshaping AI Agents and software engineering."
excerptDe: "In seinem neuesten Interview beschrieb Andrej Karpathy eine „KI-Psychose“ – er hat seit Monaten keinen Code mehr selbst geschrieben. Dieser Artikel fasst seine zentralen Erkenntnisse aus dem „No Priors“-Podcast zusammen, einschließlich des Konzepts der „Claws“."
date: "2026-03-24"
author: "Nils Liu"
tags:
  - "GenAI 실전"
  - "Blog"
  - "Agent"
  - "Industry Trends"
coverImage: "/images/blog/karpathy-interview.png"
---

Former Tesla Director of AI and OpenAI founding member Andrej Karpathy has long been one of the most influential voices in the field. In his latest March 2026 interview on the *"No Priors"* podcast, he shared a drastic shift in his working model, even half-jokingly stating that he feels like he has contracted "AI Psychosis".

If you are an engineer, PM, or a leader exploring how to deploy GenAI in production, his observations will completely shatter your preconceived notions about "writing software."

## The Software 3.0 Shift: From Writing Syntax to Expressing Intent

Karpathy revealed a stunning fact during the interview: **he hasn't typed a single line of code himself since December 2025.**

His daily routine now consists of spending hours sitting in front of a screen, purely "expressing intent to AI Agents." He delegates the vast majority of tasks to AI systems to execute, generate, and debug. He has retreated behind the scenes, playing the role of a "commander" or a "product manager."

This is the concrete realization of the "Software 3.0" vision he mentioned previously. Software engineering is going through a fundamental shift—we are no longer giving computers "How" instructions via Python or C++. Instead, we are telling AI "What" we want using natural language (Prompting).

## AI Empowerment Side Effects: "AI Psychosis" and Token Anxiety Syndrome

When all heavy lifting can be outsourced to AI, the source of human anxiety changes.

Karpathy mentioned that when he finds he hasn't exhausted his allocated AI Tokens, he feels an indescribable "nervousness or anxiety." It's akin to having a team of ultra-fast super-interns who work 24/7 without pay, and yet you let them sit idle.

The bottleneck in AI development right now is **no longer arithmetic computing power, but the human inability to effectively direct these systems.** He bluntly stated that the inability to command AI well, to clearly translate the intent in our heads into Prompts for AI to execute, is actually a "Skill Issue" for us humans.

## Claws: Persistent Background AI Agents Beyond the Chat Window

During the interview, Karpathy introduced a concept more advanced than a standard Agent, which he calls **"Claws."**

Current LLM dialogues are like "Session-based" interactions—you input text, it replies, and once the window is closed, the conversation ends. But a "Claw" is a **"persistent, continuously running background"** AI system.

Imagine this: while you are sleeping, your "Claws" are crawling the repository for the latest PRs, running tests, automatically fixing linting errors, and even replying to non-urgent emails for you. They don't rely on the user constantly issuing commands through a chat window; they are true digital proxies working silently in the background.

This is exactly the trait we need most when introducing AI Agents into enterprise environments. Enterprises don't need more "chatty bots"; enterprises need digital labor capable of "background process automation."

## Embracing the Super Decade of Intelligent Agents

Looking back at Karpathy's remarks in late 2025, we can see his clear judgment on the developmental path of AI:

1. **The Leap in Capability**: In his 2025 year-end LLM review, he pointed out that, thanks to the maturation of Reinforcement Learning with Verifiable Rewards (RLVR), LLMs have officially evolved from "probabilistic imitation" to "logical reasoning."
2. **Long-term Development**: He once said that this won't be the "Year of Agents," but rather the "Decade of Agents." Moving from point-functional Copilots to Agentic Workflows that can autonomously plan and execute requires time and iterative infrastructure.

## Takeaways for Us

Karpathy's experience provides an excellent opportunity for reflection: as tech professionals or product managers, how much time do we actually spend "moving bricks manually" every day?

If even top-tier AI experts in the world have fully pivoted to "expressing intent" and outsourced implementation details to AI, shouldn't we also re-examine our own workflows?

In the coming years, the focus of enterprise competition will shift from a mere "compute arms race" to exploring "how to make AI think more efficiently." And for individuals, **the ability to "ask good questions" and "clearly express intent" will be far more valuable than writing any algorithm by hand.**

---
*Interested in learning more about practical enterprise Agent deployments? Read my pieces on [GenAI Tech Interview Revolution](/en/insights/genai-tech-interview-revolution) or [2025 Year in Review](/en/insights/2025-year-in-review).*

---
title: "Claude Code 洩漏事件解析：一窺 Anthropic 的 AI Agent 核心藍圖"
titleEn: "Claude Code Harness Leak: Decoding Anthropic's Core AI Agent Blueprint"
titleDe: "Claude Code Harness Leak: Dematerialisierung der Anthropic AI-Agent-Architektur"
excerpt: "2026年3月底，Anthropic 在 npm 發布更新時意外夾帶 59.8MB 的 Source Map，導致 Claude Code 的底層程式碼全面洩漏。這不僅是一次工程失誤，更是企業級 Agent 架構、多層提示詞與臥底模式等設計細節的首次大解密。"
excerptEn: "In late March 2026, an accidental 59.8MB Source Map in Anthropic's npm release led to a full leak of Claude Code's underlying architecture. Beyond an engineering flaw, this is the first unboxing of enterprise-grade Agent frameworks, multi-layer prompting, and Undercover modes."
excerptDe: "Ende Maerz 2026 fuehrte eine versehentliche 59.8MB Source Map in Analytics' npm-Release zu einem vollstaendigen Leak der zugrunde liegenden Claude Code Architektur. Neben einem technischen Fehler ist dies die erste Dematerialisierung von Enterprise-Grade Agent-Frameworks, mehrschichtigen Prompts und Undercover-Modi."
date: "2026-04-01"
author: "Nils Liu"
tags:
  - "GenAI"
  - "News"
  - "Agent"
  - "Tech"
coverImage: "/images/blog/claude-code-leak.webp"
---

On March 31, 2026, the AI developer community witnessed a significant event: when publishing the `@anthropic-ai/claude-code` v2.1.88 package on npm, Anthropic accidentally included a massive 59.8 MB JavaScript `Source Map (.map)` file. This seemingly minor release error allowed outsiders to reconstruct over 500,000 lines of proprietary TypeScript source code.

This was not a security breach caused by hackers, but purely a "human packaging error." However, for engineers closely monitoring AI application development, **this essentially offered a free public viewing of the architectural blueprint for today's top-tier, high-agency AI Agents.**

Claude Code has never been just a simple API wrapper in a CLI tool. This code leak allowed us to peer into its underlying framework, commonly referred to as the "Harness." What secrets does it hold?

## Secret 1: The End of the Monolithic Prompt, Welcome the Dynamic Matrix

When building AI Agents, many developers fall into the habit of hardcoding a massive, monolithic "System Prompt." Claude Code completely abandons this approach.

The leaked code reveals that Claude Code **dynamically assembles dozens of micro-prompt fragments** based on the current task state and selected mode (e.g., Plan, Explore, Delegate).

When you ask Claude Code to execute a complex refactor, it doesn't feed all the rules to the model at once. Instead, it treats prompts as "building blocks," generating the most suitable combination on the fly before every single inference step. This drastically reduces the probability of LLM "attention span drop."

## Secret 2: The Rigorous 6-Layer Context Stack

The most impressive design revealed to the industry is the "Six-Layer Prompt Stack" that dictates Claude Code's operations:

1. **System Prompt (Core Definition):** Defines the Agent's foundational identity and destructive behavior guardrails.
2. **Tool Definitions:** Provides strict JSON Schemas for commands like Bash, Write, and TodoWrite.
3. **Runtime Instructions:** Specifies the current machine's permission boundaries and environmental variables.
4. **Project Context:** Reads from `CLAUDE.md` or long-term guidance provided by the developer.
5. **Conversation History:** Compressed and filtered records of tool invocations and outputs.
6. **User Input:** The user's most immediate and current request.

Even more surprising is that **Anthropic chose to build this prompt assembly engine on the Client side (inside the user's terminal), rather than on the Server side.** This decision to keep the assembly logic on the client is exactly why the prompt structures were so visible in this leak.

## Secret 3: "Undercover Mode" and Background Daemon Agents

Developers also dug up several highly inspiring and advanced mechanisms within the source code:

*   **Undercover Mode:** A clever design preventing the AI from "exposing its identity." It forces Claude to strip away AI-characteristic phrases (like "As an AI...") or internal Anthropic codenames when writing Git Commits or public technical documentation. It ensures the output looks entirely like it was written by a human engineer.
*   **Multi-layered Memory:** Claude Code possesses the ability to store short-term and long-term experiences in a `MEMORY.md` file. There's even partially implemented `autoDream` logic, hinting at future capabilities where the AI agent reorganizes and optimizes its memory in the background while the terminal is idle.
*   **Delegator & Worker:** The codebase showcases mature multi-agent workflow logic—a primary "Orchestrator Agent" can spawn smaller "Worker Agents" with restricted tool sets to handle tedious localized code modifications, later consolidating the results.

## The Takeaway for Developers

While the Claude Code leak undoubtedly caused a loss of commercial secrets for Anthropic, it inadvertently provided a masterclass in "Enterprise-Grade Agent System Design" for AI developers worldwide.

This incident proves that building high-agency AI products is no longer just about how smart the model is. It's about **how you design a robust "Harness control framework" responsible for precise prompt assembly, permission gating, and error recovery.**

The next time you're frustrated because your AI Agent won't follow instructions, consider looking at Claude Code's six-layer prompt stack to redesign your framework. This is the next standard posture for AI-driven software engineering.

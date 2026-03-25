---
title: "Andrej Karpathys „KI-Psychose“ und das nächste Jahrzehnt: Vom Hand-Coding zur Steuerung von Agenten"
titleEn: "Andrej Karpathy's 'AI Psychosis' and the Next Decade: From Hand-Coding to Directing Agents"
titleDe: "Andrej Karpathys „KI-Psychose“ und das nächste Jahrzehnt: Vom Hand-Coding zur Steuerung von Agenten"
excerpt: "Andrej Karpathy 在最新的访谈中提到自己彷彿得了「AI 精神病」——他已經幾個月沒親自寫過程式碼了。這篇文章整理了他在《No Priors》Podcast 分享的核心觀點，包括 Claws 的概念以及未來軟體開發範式的轉變。"
excerptEn: "In his latest interview, Andrej Karpathy described experiencing 'AI Psychosis'—he hasn't written code himself in months. This article summarizes his core insights from the 'No Priors' podcast, including the concept of 'Claws' and the paradigm shift in software development."
excerptDe: "Der ehemalige OpenAI- und Tesla-KI-Direktor Andrej Karpathy spricht im No Priors-Podcast über seine 'KI-Psychose'. Erfahren Sie, wie Claws, Token-Angst und Software 3.0 KI-Agenten und die Softwareentwicklung verändern."
date: "2026-03-24"
author: "Nils Liu"
tags:
  - "GenAI Praxis"
  - "Blog"
  - "Agent"
  - "Branchentrends"
coverImage: "/images/blog/karpathy-interview.png"
---

Der ehemalige Tesla Director of AI und OpenAI-Mitgründer Andrej Karpathy ist seit langem eine der einflussreichsten Stimmen in diesem Bereich. In seinem neuesten Interview im *"No Priors"*-Podcast im März 2026 teilte er eine drastische Veränderung seines Arbeitsmodells mit und erklärte sogar halbscherzhaft, er habe das Gefühl, an einer „KI-Psychose“ zu leiden.

Wenn Sie ein Ingenieur, PM oder eine Führungskraft sind, die erforscht, wie GenAI in der Produktion eingesetzt werden kann, werden seine Beobachtungen Ihre vorgefassten Meinungen über das „Schreiben von Software“ völlig zerstören.

## Der Software 3.0 Wandel: Von der Syntax-Schreibung zum Ausdruck von Absichten

Karpathy enthüllte während des Interviews eine erstaunliche Tatsache: Er hat seit Dezember 2025 keine einzige Zeile Code mehr selbst getippt.

Sein Tagesablauf besteht jetzt darin, stundenlang vor einem Bildschirm zu sitzen und reinen „Willen gegenüber KI-Agenten auszudrücken“. Er delegiert die überwiegende Mehrheit der Aufgaben an KI-Systeme, um sie auszuführen, zu generieren und zu debuggen. Er hat sich in den Hintergrund zurückgezogen und spielt die Rolle eines „Kommandanten“ oder „Produktmanagers“.

Dies ist die konkrete Umsetzung der von ihm zuvor erwähnten „Software 3.0“-Vision. Die Softwareentwicklung durchläuft einen grundlegenden Wandel – wir geben Computern keine „Wie“-Anweisungen mehr über Python oder C++. Stattdessen sagen wir der KI „Was“ wir wollen, indem wir natürliche Sprache (Prompting) verwenden.

## Nebenwirkungen der KI-Integration: „KI-Psychose“ und das Token-Angst-Syndrom

Wenn all das schwere Heben an die KI ausgelagert werden kann, ändert sich die Quelle der menschlichen Angst.

Karpathy erwähnte, dass er eine unbeschreibliche „Nervosität oder Angst“ verspürt, wenn er feststellt, dass er seine zugewiesenen KI-Tokens nicht aufgebraucht hat. Es ist so, als hätte man ein Team ultraschneller Super-Praktikanten, die rund um die Uhr ohne Bezahlung arbeiten, und doch lässt man sie untätig herumsitzen.

Der Engpass in der KI-Entwicklung ist derzeit nicht mehr die arithmetische Rechenleistung, sondern die menschliche Unfähigkeit, diese Systeme effektiv zu steuern. Er sprach offen aus, dass die Unfähigkeit, KI gut zu kommandieren, die Absicht in unseren Köpfen klar in Prompts für die KI zu übersetzen, eigentlich ein „Skill-Problem“ für uns Menschen ist.

## Claws: Persistente Hintergrund-KI-Agenten jenseits des Chat-Fensters

Während des Interviews stellte Karpathy ein Konzept vor, das fortschrittlicher ist als ein Standard-Agent und das er „Claws“ (Krallen) nennt.

Aktuelle LLM-Dialoge sind wie „Session-basierte“ Interaktionen – man gibt Text ein, sie antworten, und sobald das Fenster geschlossen ist, endet das Gespräch. Aber eine „Kralle“ ist ein „persistentes, kontinuierlich laufendes Hintergrund“-KI-System.

Stellen Sie sich das vor: Während Sie schlafen, durchsuchen Ihre „Claws“ das Repository nach den neuesten PRs, führen Tests aus, beheben automatisch Linting-Fehler und beantworten sogar nicht dringende E-Mails für Sie. Sie sind nicht darauf angewiesen, dass der Benutzer ständig Befehle über ein Chat-Fenster ausgibt; sie sind wahre digitale Stellvertreter, die lautlos im Hintergrund arbeiten.

Dies ist genau die Eigenschaft, die wir am meisten brauchen, wenn wir KI-Agenten in Unternehmensumgebungen einführen. Unternehmen brauchen nicht mehr „geschwätzige Bots“; Unternehmen brauchen digitale Arbeitskraft, die zur „Hintergrundprozessautomatisierung“ fähig ist.

## Das Super-Jahrzehnt der intelligenten Agenten

Wenn wir auf Karpathys Äußerungen Ende 2025 zurückblicken, können wir sein klares Urteil über den Entwicklungspfad der KI erkennen:

1. Der Leistungssprung: In seinem LLM-Rückblick zum Jahresende 2025 wies er darauf hin, dass sich LLMs dank der Reifung des Reinforcement Learning with Verifiable Rewards (RLVR) offiziell von der „probabilistischen Nachahmung“ zum „logischen Denken“ entwickelt haben.
2. Langfristige Entwicklung: Er sagte einmal, dies werde nicht das „Jahr der Agenten“, sondern das „Jahrzehnt der Agenten“. Der Übergang von punktuellen Copilots zu Agentic Workflows, die autonom planen und ausführen können, erfordert Zeit und iterative Infrastruktur.

## Erkenntnisse für Uns

Karpathys Erfahrung bietet eine hervorragende Gelegenheit zur Selbstreflexion: Wie viel Zeit verbringen wir als Technologieexperten oder Produktmanager eigentlich jeden Tag damit, „Steine manuell zu bewegen“?

Wenn selbst die weltbesten KI-Experten vollständig auf den „Ausdruck von Absichten“ umgestellt haben und Implementierungsdetails an KI auslagern, sollten wir dann nicht auch unsere eigenen Workflows überdenken?

In den kommenden Jahren wird sich der Fokus des Unternehmenswettbewerbs von einem bloßen „Rechenleistungs-Wettrüsten“ auf die Erforschung verlagern, „wie man KI effizienter denken lässt“. Und für den Einzelnen wird die Fähigkeit, „gute Fragen zu stellen“ und „Absichten klar auszudrücken“, weitaus wertvoller sein, als jeden Algorithmus von Hand zu schreiben.

---
*Möchten Sie mehr über praktische Agenten-Implementierungen in Unternehmen erfahren? Lesen Sie meine Artikel über [GenAI Technologie-Interview-Revolution](/de/insights/genai-tech-interview-revolution) oder [Jahresrückblick 2025](/de/insights/2025-year-in-review).*

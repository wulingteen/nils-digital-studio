---
title: "GPT-5.5 offiziell veröffentlicht: 14 Benchmark-Siege und Jensen Huangs 100-Milliarden-Dollar-Wette"
titleEn: "GPT-5.5 Is Here: Tops 14 Benchmarks, and Jensen Huang Is Betting $100B on the Infrastructure"
titleDe: "GPT-5.5 offiziell veröffentlicht: 14 Benchmark-Siege und Jensen Huangs 100-Milliarden-Dollar-Wette"
excerpt: "GPT-5.5 erschien am 23. April und führt 14 Benchmarks an. Dahinter steckt Jensen Huangs NVIDIA-Wette: 10 Gigawatt Infrastruktur, bis zu 100 Milliarden Dollar Investition."
excerptEn: "GPT-5.5 launched April 23, topping 14 benchmarks and cutting token usage 40%. Behind the scenes, Jensen Huang and NVIDIA are betting up to $100B on the compute infrastructure that makes it run."
excerptDe: "GPT-5.5 erschien am 23. April und führt 14 Benchmarks an. Dahinter steckt Jensen Huangs NVIDIA-Wette: 10 Gigawatt Infrastruktur, bis zu 100 Milliarden Dollar Investition."
date: "2026-04-24"
author: "Nils Liu"
tags:
  - "GenAI in der Praxis"
  - "Blog"
  - "OpenAI"
  - "NVIDIA"
coverImage: "/images/blog/gpt-5-5-nvidia-compute.webp"
lang: "de"
---

**GPT-5.5** wurde gestern (23. April) für ChatGPT Plus-, Pro-, Business- und Enterprise-Nutzer ausgerollt.

Die technischen Zahlen sind überzeugend: 73,1 % auf dem Expert-SWE-Benchmark (GPT-5.4: 68,5 %), und es führt gleichzeitig 14 Benchmarks an — Claude Opus 4.7 führte 4, Google Gemini 3.1 Pro 2.

Mindestens ebenso interessant ist die Infrastrukturwette, die Jensen Huang und NVIDIA dahinter platzieren.

## Was GPT-5.5 tatsächlich verbessert

**Effizienz ist die bedeutendste Veränderung in dieser Version.**

Im Vergleich zu GPT-5.4 verwendet GPT-5.5 bei vergleichbaren Aufgaben etwa 40 % weniger Output-Tokens bei gleicher Token-Latenz. Gleicher Rechenaufwand, mehr Leistung.

Auf der Fähigkeitsseite konzentrieren sich die Verbesserungen auf Engineering- und Forschungsworkflows:

- Codeänderungen werden effektiver durch die umgebende Codebasis propagiert
- Stärkeres Reasoning bei mehrdeutigen Fehlern
- Bessere Kontextverwaltung über große Systeme
- Verbesserte Leistung bei Datenanalyse und Forschungsaufgaben

Diese Richtung deckt sich mit der Entwicklung der Enterprise-KI-Agent-Nutzung — langfristige, mehrstufige automatisierte Workflows statt einzelner Abfragen.

Ein Detail ist erwähnenswert: Am 22. April tauchte GPT-5.5 durch einen Routing-Fehler für etwa 47 Minuten öffentlich auf. Screenshots aus diesem Zeitfenster zeigten eine 18 % schnellere Inferenz und 40 % weniger Halluzinationen. Die offizielle Veröffentlichung von OpenAI kam einen Tag früher als erwartet — allgemein als Reaktion auf bereits verbreitete Informationen interpretiert.

## Jensen Huangs Infrastrukturwette

Hinter GPT-5.5 steckt eine weitaus größere Infrastrukturwette.

2016 lieferte Jensen Huang persönlich NVIDIAs ersten DGX-1-KI-Supercomputer an OpenAIs Büro in San Francisco. Zehn Jahre später hat sich das Ausmaß der Beziehung grundlegend verändert.

NVIDIA und OpenAI kündigten eine strategische Partnerschaft mit einer Absichtserklärung an, **mindestens 10 Gigawatt NVIDIA-Systeme** zu deployen, wobei NVIDIA bis zu **100 Milliarden Dollar** verpflichtet, die progressiv mit jedem deploierten Gigawatt freigegeben werden. Das erste Gigawatt ist für die zweite Hälfte 2026 auf NVIDIAs Vera-Rubin-Plattform geplant.

Huangs Worte bei der Ankündigung: „Diese Investition und Infrastrukturpartnerschaft markieren den nächsten Sprung — 10 Gigawatt zu deployen, um die nächste Ära der Intelligenz anzutreiben."

**GPT-5.5 läuft derzeit auf NVIDIA GB200 NVL72 Rack-Scale-Systemen**, mit folgenden Effizienzgewinnen gegenüber Vorgängersystemen:

- **35-fach niedrigere** Kosten pro Million Tokens
- **50-fach höherer** Token-Output pro Sekunde pro Megawatt

Für einen Dienst, der Inferenz in OpenAIs Größenordnung betreibt, schlägt sich dieser Effizienzunterschied direkt in der Marge nieder.

## Rechenleistung, Modelle, Geschäft

NVIDIAs Rolle in dieser Partnerschaft geht über Hardwarelieferung hinaus.

Über **10.000 NVIDIA-Mitarbeiter** in allen Abteilungen nutzen bereits das von GPT-5.5 betriebene Codex. Aus Huangs Perspektive ist das sowohl eine Vertrauensbekundung für OpenAIs Technologie als auch ein praktisches Engineering-Produktivitätswerkzeug für NVIDIA intern.

Beachtenswert: Im März 2026 erklärte Huang auch, dass NVIDIA von exklusiven Arrangements mit OpenAI und Anthropic abrückt. Das ist kein Beziehungsbruch — es signalisiert, dass KI-Compute-Infrastruktur in Richtung eines neutraleren, plattformorientierten Modells reift. NVIDIAs Geschäftslogik war nie darauf ausgerichtet, welches Modell gewinnt; es geht darum, dass die GPUs, auf denen diese Modelle laufen, NVIDIAs sind.

Auf der Trainingsseite wurden GPT-5 und GPT-5.4 hauptsächlich auf H100- und H200-Chips trainiert. GPT-5.5s Inferenzumgebung ist bereits auf GB200 NVL72 umgezogen, aber Blackwell-Training in großem Maßstab reift noch — H100 und H200 bleiben die primären GPUs für Frontier-Scale-Training. Der nächste Wendepunkt kommt, wenn die Vera-Rubin-Plattform vollständig auf den Markt kommt.

## Die KI-Agent-Infrastrukturperspektive

Aus Enterprise-KI-Sicht ist die Verbesserungsrichtung von GPT-5.5 klar: Dies ist ein für Agent-Workflows konzipiertes Modell.

Ein 40%iger Token-Effizienzgewinn verstärkt sich über mehrstufige Agent-Aufgaben — eine Aufgabe, die 20 LLM-Aufrufe erfordert, mit jeweils 40 % Effizienzgewinn, sieht multiplikative Reduzierungen in Kosten und Latenz. Das macht Agent-Anwendungsfälle, die bisher wirtschaftlich schwierig waren, plötzlich realisierbar.

Das verbindet sich direkt mit dem, was ich in [Harness Engineering](/de/insights/harness-engineering-ai-agent) und [Hermes Agent](/de/insights/hermes-agent-self-improving-framework) behandelt habe: Verbesserungen der Effizienz des Basismodells erweitern direkt den Designraum für die Ausführungsschicht. Wenn jeder LLM-Aufruf günstiger wird, kann man sich mehr Agent-Schritte, robusteres Error-Handling und gründlichere Verifizierung leisten.

---

*Teil der Serie „GenAI in der Praxis".*

💬 **Weiterführende Lektüre:**
- [Harness Engineering: Die Ausführungsschicht für Ihren KI-Agenten aufbauen](/de/insights/harness-engineering-ai-agent)
- [Hermes Agent: Das Open-Source-KI-Agenten-Framework, das mit der Zeit klüger wird](/de/insights/hermes-agent-self-improving-framework)

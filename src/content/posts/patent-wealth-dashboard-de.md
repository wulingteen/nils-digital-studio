---
title: "[Patent 1] Wie GenAI die Vermögensverwaltung verändert"
titleEn: "[Patent 1] How GenAI Transforms Wealth Management"
titleDe: "[Patent 1] Wie GenAI die Vermögensverwaltung verändert"
excerpt: "Was sind die wahren Schmerzpunkte von Kundenberatern? Wie hilft GenAI ihnen, in Echtzeit personalisierte Anlageempfehlungen zu generieren? Dieser Artikel te..."
excerptEn: "What are the true pain points of Relationship Managers? How does GenAI help them generate real-time personalized investment advice in conversations? This ar..."
excerptDe: "Was sind die wahren Schmerzpunkte von Kundenberatern? Wie hilft GenAI ihnen, in Echtzeit personalisierte Anlageempfehlungen zu generieren? Dieser Artikel te..."
date: "2025-05-11"
author: "Nils Liu"
tags:
  - "Patent"
  - "Blog"
  - "GenAI"
coverImage: "/images/blog/patent-wealth-dashboard.webp"
---

## Der wahre Schmerzpunkt von Kundenberatern

Während des Baus von KI-Produkten in der Bank habe ich viel Zeit damit verbracht, mich mit Kundenberatern (RMs) auszutauschen.

Es mangelt ihnen nicht an Engagement und auch nicht an Verständnis für ihre Kunden.

Was ihnen fehlt, ist: **Die Fähigkeit, alle relevanten Informationen schnell zu synthetisieren und direkt vor dem Kunden überzeugende Ratschläge zu geben.**

Die Realität sieht so aus: Ein Kunde sagt, "Ich habe 5 Millionen, um mein Portfolio anzupassen." Der Berater muss in wenigen Minuten folgendes erreichen:

- Abfrage der aktuellen Asset Allocation des Kunden.
- Verständnis der Risikobereitschaft und Historie des Kunden.
- Prüfung aktueller Markttrends und Zinskurven.
- Vergleich lieferbarer interner Vermögensprodukte.
- Abgabe personalisierter Empfehlungen.

Dies ist eine Informationssynthese aus mehreren Quellen kombiniert mit einer personalisierten Empfehlungsaufgabe, was **das perfekte Szenario für GenAI** darstellt.

Diese Einsicht war der Ursprung von **M670472 "System zur Generierung von Finanzinvestitionsempfehlungen"**.

---

## Systemarchitektur: Ein KI-Assistent, der "das Geschäft kennt"

Das Systemdesign dreht sich um den täglichen Arbeitsablauf des RMs:

**Informations-Eingabeschicht**
- **Externe Server**: Echtzeit-Marktinformationen, Trends, Produktangebote.
- **Interne Server**: Kundenprofile, Risikobewertungsberichte, Kundenvermögen, verfügbare Produkte.

**KI-Verarbeitungsschicht**
1. **NLU-Modul**: Analysiert die Finanzinvestitionsbedürfnisse des Kunden (die unstrukturierte natürliche Sprache sein können).
2. **Multi-Source-Synthese-Modul**: Zieht synchron externe Marktdaten und interne Kundendaten heran.
3. **Generatives KI-Modell (LLM)**: Integriert alle Eingänge, um einen initialen, maßgeschneiderten Anlagevorschlag zu generieren.

**Visuelle Ausgabeschicht**
4. **Modul zur Generierung interaktiver Asset-Dashboards**: Zeigt eine mehrdimensionale Analyse der aktuellen Kundenallokation.
5. **Modul zur Generierung von Investitionsvorschlags-Dashboards**: Liefert benutzerdefinierte Empfehlungen mit Multi-Szenario-Simulationen.
6. **Dynamisches Visualisierungsmodul**: Vereint das Obige zu einem kohärenten, funktionalen Finanz-Dashboard.

Schließlich optimiert das **Kontinuierliche Lernmodul** die KI-Modelle im Laufe der Zeit basierend auf Feedback aus Nutzerinteraktionen.

---

## Als GenAI Product Manager: Was habe ich aus diesem Projekt gelernt?

**1. "Personalisierung" erfordert fundamentale Datenarchitektur.**

Viele GenAI-Produkte behaupten, personalisiert zu sein, aber in Wirklichkeit fügen sie nur ein paar Nutzerfelder in den Prompt ein.

Wahre Personalisierung erfordert ein vollständiges Kundendatenmodell: Risikopräferenzen, Vermögensstrukturen, historisches Verhalten, Interaktionsfeedback... Das Entwerfen dieser Datenarchitektur ist wichtiger als das KI-Modell selbst.

**2. Die "Multi-Szenario-Simulation" ist eine Killer-Funktion für KI.**

Traditionelle Berater können normalerweise nur eine Empfehlung auf einmal abgeben. Dieses System kann gleichzeitig "konservative", "ausgewogene" und "aggressive" Szenario-Empfehlungen ausgeben und dem Kunden die Wahl lassen.

Für den menschlichen Verstand ist das aus dem Stegreif extrem schwer, für ein LLM jedoch mühelos. **Das Finden eines asymmetrischen Vorteils von KI ist die Kernaufgabe eines GenAI PMs.**

**3. Der kontinuierliche Lern-Loop ist der Ursprung langfristiger Wettbewerbsfähigkeit.**

Der Launch des Produkts ist nur der Anfang. Das System lernt aus jeder Interaktion mit dem RM und jeder Reaktion des Kunden und macht das Modell im Laufe der Zeit präziser. **Dieses Lern-Flywheel ist der am schwersten zu replizierende Burggraben.**

---

## Ratschläge zum Produktdesign für GenAI POs

Wenn Sie KI-Finanzprodukte entwerfen, lautet mein Rat:

**Beginnen Sie nicht bei der Technologie; beginnen Sie beim Arbeitsablauf des Beraters (oder jeglichen Frontline-Personals).**

Finden Sie heraus, wo sie die meiste Zeit verbringen, die meisten Fehler machen und am meisten Unterstützung bei der Informationssynthese benötigen — dort kann GenAI den größten Wert schaffen.

**Die beste Positionierung für KI ist nicht "den RM ersetzen", sondern "jeden RM mit einem allwissenden Assistenten ausstatten, der ihm direkt zur Seite steht".**

---

*M670472 System zur Generierung von Finanzinvestitionsempfehlungen (Kundenspezifisches GenAI Finanz-Dashboard) | Erteilt: 2025/05/11 | Alleiniger Erfinder: Nils Liu*

💬 **Lese mehr:** [2025 Jahresrückblick (Auf Deutsch)](/de/insights/2025-year-in-review-de)

---
title: "[Patent 5] Sicherheitslücken in GenAI: Wie ein Product Owner adaptive Sicherheit mit KI entwickelte"
titleEn: "[Patent 5] GenAI Security Blind Spots: How a Product Owner Built Adaptive Security with AI"
titleDe: "[Patent 5] Sicherheitslücken in GenAI: Wie ein Product Owner adaptive Sicherheit mit KI entwickelte"
excerpt: "Wenn ein GenAI-System sensible Daten abfragt, wie verhindert man, dass böswillige Nutzer die Sicherheit umgehen? Dieser Artikel beschreibt detailliert, wie..."
excerptEn: "When a GenAI system queries sensitive data, how do you prevent malicious users from bypassing security? This article details how a bank AI Product Manager d..."
excerptDe: "Wenn ein GenAI-System sensible Daten abfragt, wie verhindert man, dass böswillige Nutzer die Sicherheit umgehen? Dieser Artikel beschreibt detailliert, wie..."
date: "2025-09-11"
author: "Nils Liu"
tags:
  - "Patent"
  - "Blog"
  - "GenAI"
  - "Architecture"
coverImage: "/images/blog/patent-adaptive-security.webp"
---

## "KI nutzen, um KI zu bewachen" — Kein Slogan, sondern Architektur-Design

Während des Prozesses, Generative KI in der Bank einzuführen, war das Thema, das mich nachts wach hielt, nicht die Modellleistung, sondern **Sicherheit**.

Wenn ein KI-Chatbot, der Kundendaten abfragen kann, durch maßgeschneiderte Prompts böswilliger Akteure manipuliert wird, sind die Konsequenzen unvorstellbar.

Was noch problematischer ist: Statische Cybersicherheitsregeln können mit der Kreativität von Prompt Injections schlicht nicht mithalten. Angreifer ändern ihre Formulierungen, und die Regeln versagen komplett.

Das brachte mich dazu, eine **generative adaptive Sicherheitsstrategie** zu entwerfen, was schließlich zum Patent **M674713 "Datenabfragesystem"** führte.

---

## Systemarchitektur: Der KI "Böswilligkeit verstehen" beibringen

Das System ist in zwei Kernebenen unterteilt:

**Ebene 1: Nutzverhaltens- und Intentionsanalyse-Modell**
- **Verhaltensanalyse-Modul**: Untersucht Abfragehäufigkeit, Zeit, IP-Standort und historische Abfragemuster des Nutzers.
- **Echtzeit-Intentionsanalyse-Modul**: Nutzt NLP, um die zugrunde liegende Absicht jeder Abfrage zu interpretieren.
- **Detektionsmodul für anomale Vorgänge**: Identifiziert Abläufe, die von normalen Mustern abweichen.
- **Beurteilungsmodul für Angriffsverhalten**: Fasst die obigen Signale zusammen, um eine Risikobewertung auszugeben.

**Ebene 2: Modell zur Generierung von Sicherheitsstrategien**
- **Dynamisches Zugriffskontroll-Modul**: Passt die Datenbank-Zugriffsberechtigungen des Nutzers sofort an dessen Abfragemuster an.
- **Smart-Blocking-Modul**: Entscheidet anhand des Risikoniveaus, ob die Abfrage abgefangen wird.
- **Striktes Antwortkontroll-Modul**: Generiert "strategische Antworten" auf hochriskante Abfragen (anstelle direkter Fehlermeldungen, um das Durchsickern von Systeminformationen zu vermeiden).

Es gibt noch ein entscheidendes Designmerkmal: das **Kontinuierliche Optimierungs-Modul**. Wenn das System einen Angriff erkennt, greift es auf GANs (Generative Adversarial Networks) zurück, um simulierte Angriffsszenarien zu erzeugen und das Modell so fortlaufend zu trainieren. Je öfter es angegriffen wird, desto smarter wird es.

---

## Warum ist dies ein Kernthema im GenAI Produktdesign?

Als **GenAI Product Manager** ist Sicherheit nicht etwas, das man "der Infosec-Abteilung übergibt"; es muss Teil der Produktarchitektur sein.

Bei der Konstruktion dieses Systems habe ich mehrere wichtige Erkenntnisse gewonnen:

**1. Statische Regeln können dynamische Angriffe niemals einholen**
Jede Sicherheitsplanke, die Sie setzen, kann von einem kreativen Nutzer umgangen werden. Das System selbst benötigt die "Fähigkeit zu lernen".

**2. Sicherheit und Nutzererfahrung sind kein Nullsummenspiel**
Gutes Sicherheitsdesign sollte für normale Benutzer unsichtbar sein und nur bei abnormalem Verhalten ausgelöst werden. Dies erfordert eine extrem präzise Risikoeinstufung.

**3. KI-Zugriffskontrolle sollte dynamisch sein**
Es ist kein binäres Urteil von "hast du die Erlaubnis", sondern eher "welche Informationsebene ist in diesem Kontext für diese Anfrage gerade angemessen?".

---

## Eine Checkliste für GenAI POs: Ist Ihr KI-System sicher genug?

- [ ] Kann das System anomale Abfragemuster erkennen?
- [ ] Gibt es einen Echtzeit-Mechanismus zur Intentionsanalyse?
- [ ] Basiert die Zugriffskontrolle auf statischen Rollen oder auf dynamischer Kontextwahrnehmung?
- [ ] Wird das System nach einem Angriff intelligenter oder bleibt es genau gleich?

**Sicherheit ist das letzte Tor, bevor ein GenAI-Produkt live geht, und sie ist die erste Mauer des Nutzervertrauens.**

---

*M674713 Datenabfragesystem (Generative adaptive Sicherheitsstrategie) | Erteilt: 2025/09/11 | Alleiniger Erfinder: Nils Liu*

💬 **Lese mehr:** [2025 Jahresrückblick (Auf Deutsch)](/de/insights/2025-year-in-review-de)

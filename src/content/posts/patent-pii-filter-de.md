---
title: "[Patent 3] GenAI Compliance-Design"
titleEn: "[Patent 3] GenAI Compliance Design Key Tech"
titleDe: "[Patent 3] GenAI Compliance-Design"
excerpt: "Wie verhindert man bei der Einführung eines KI-Wissensdatenbanksystems in einer Bank Datenlecks, ohne die Antwortqualität zu beeinträchtigen? Dieser Artikel..."
excerptEn: "When introducing an AI knowledge base query system in a bank, how do you prevent PII leaks without sacrificing response quality? This article introduces a G..."
excerptDe: "Wie verhindert man bei der Einführung eines KI-Wissensdatenbanksystems in einer Bank Datenlecks, ohne die Antwortqualität zu beeinträchtigen? Dieser Artikel..."
date: "2025-06-01"
author: "Nils Liu"
tags:
  - "Patent"
  - "Blog"
  - "GenAI"
  - "Architecture"
coverImage: "/images/blog/patent-pii-filter.webp"
---

## Der Compliance-Albtraum jedes GenAI PMs

Stellen Sie sich folgendes Szenario vor:

Sie bringen das RAG-System endlich live. Kundenbetreuer nutzen es, um Kundendaten, Geschäftsregeln, interne SOPs abzufragen... Es funktioniert hervorragend, alle sind glücklich.

Dann kommt die Compliance-Abteilung herein.

"Die Antwort dieses Systems enthält den Namen und die Kontoinformationen des Kunden. Entspricht das den Datenschutzgesetzen?"

"Interne Geschäftsdaten werden in der Antwort angezeigt. Was ist, wenn jemand einen Screenshot veröffentlicht?"

"Deuten die Zeiten und Orte in dieser Antwort auf sensible Geschäftsvorgänge hin?"

Das ist kein hypothetisches Szenario; das sind Gespräche, die ich persönlich geführt habe.

**Als GenAI Product Owner müssen Sie sicherstellen, dass das KI-System "nützlich UND regelkonform" ist — diese beiden Aspekte schließen sich nicht gegenseitig aus.**

Meine Lösung dafür ist die Technologie zur Filterung und Ersetzung sensibler Informationen aus dem Patent **M671223 "Informationsabfragesystem"**.

---

## Der Kernmechanismus: Ersetzen, nicht Maskieren

Wenn viele Menschen "Umgang mit sensiblen Informationen" hören, denken sie zuerst an "Löschen" oder "Maskieren mit Sternchen".

Das führt jedoch dazu, dass die Antwort ihre semantische Vollständigkeit verliert. Der Nutzer wird sie schlichtweg nicht verstehen.

Das Design dieses Systems ist eleganter: **Es ersetzt sensible Inhalte durch "alternative Nachrichten desselben Typs, aber mit anderem Inhalt" und bewahrt so die strukturelle Semantik.**

Im Detail geht das System so vor:

1. Empfang einer Informationsanfrage und Abruf relevanter operativer Finanzdaten aus der Wissensbasis.
2. Generierung einer "initialen Antwort" durch das LLM, die sensible Informationen enthalten kann.
3. Weiterleitung an das Informationsverarbeitungsmodul, welches **ausstehende Ersetzungen** in der Antwort identifiziert und kategorisiert in:
   - Persönliche Daten (Namen, IDs, Konten)
   - Geschäftsinhalte (Spezifische Produktdetails, Raten)
   - Zeitliche Informationen (Sensible Transaktionszeiten)
   - Räumliche Informationen (Spezifische Filialen, Adressen)
4. Gemäß vordefinierter Regeln werden die sensiblen Inhalte durch alternative Nachrichten **derselben Kategorie, aber anderen Inhalts** ersetzt.
5. Ausgabe der finalen, konformen Antwort.

---

## Warum ist dies eine Kernkompetenz im GenAI-Produktdesign?

Bankwesen, Gesundheitswesen, Recht... diese stark regulierten Branchen sind die Bereiche, in denen GenAI den größten Mehrwert bietet, aber sie sind auch die am schwersten zu knackenden Märkte.

Der Flaschenhals ist fast nie die Technologie; es ist **Compliance**.

Wenn Sie als **GenAI Product Manager** Compliance-Bedenken auf der Architekturebene lösen können, werden Sie Ihre Mitbewerber weit hinter sich lassen. Während die meisten Compliance noch durch "post-mortem Analysen" handhaben, haben Sie Compliance bereits nativ in das System integriert.

---

## Drei Ebenen der GenAI Compliance-Architektur-Implementierung

**Ebene 1: Eingabefilterung**
Bevor ein Nutzer-Prompt in das System gelangt, werden Kategorien sensibler Daten herausgefiltert, die gar nicht erst abgefragt werden sollten.

**Ebene 2: Ausgabeersetzung (Kern dieses Patents)**
Bevor die Antwort gesendet wird, werden sensible Inhalte automatisch identifiziert und ersetzt, um sicherzustellen, dass die ausgehenden Informationen konform sind.

**Ebene 3: Audit-Trails**
Jede einzelne Abfrage und Ersetzung wird protokolliert, um nachträgliche Audits und Compliance-Prüfungen zu unterstützen.

**Eine einzige Ebene zu implementieren, reicht nicht aus. Nur alle drei zusammen bilden eine echte GenAI Compliance-Architektur.**

---

*M671223 Informationsabfragesystem (Filterung und Ersetzung sensibler Informationen) | Erteilt: 2025/06/01 | Alleiniger Erfinder: Nils Liu*

💬 **Lese mehr:** [2025 Jahresrückblick (Auf Deutsch)](/de/insights/2025-year-in-review-de)

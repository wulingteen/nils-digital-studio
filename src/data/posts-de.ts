// German content for all blog posts.
// Written in natural German blog commentary voice — not literal translations.
// Keyed by post ID. BlogPost.tsx uses this when lang === 'de'.

export const titleDe: Record<string, string> = {
    "patent-pii-filter": "[Patent 3] GenAI Compliance-Design: Wie ein Bank-AI-PM 'sensible Informationssubstitution' nutzte, um Leistung & Compliance zu vereinen",
    "patent-multi-agent": "[Patent 2] Wie AI Agents Datenbanken optimieren: Das Architektur-Design eines Multi-Agenten-Systems",
    "patent-wealth-dashboard": "[Patent 1] Wie GenAI die Vermögensverwaltung verändert: Von Bedürfnissen zu Dashboards—Die Reise eines Bank-PMs",
    "patent-knowledge-graph": "[Patent 6] Aufbau eines Knowledge Graphs aus der Perspektive eines GenAI Product Owners: Mein erstes KI-Patent",
    "patent-adaptive-security": "[Patent 5] Sicherheitslücken in GenAI: Wie ein Product Owner adaptive Sicherheit mit KI entwickelte",
    "patent-modular-ai": "[Patent 4] Modulares GenAI-Systemdesign: Warum 'Mehr Funktionen' nicht besser ist? Ein kontraintuitives Patent",
    "ithome-hello-world-2025": "iThome Hello World 2025: Von MCP bis Vibe Coding, vier KI-Sessions in Aktion",
    "2025-year-in-review": "Jahresrückblick 2025: Die stille Kraft stetigen Fortschritts",
    "devfest-taipei-2025-recap": "DevFest Taipei 2025: Aufbau einer echten KI-Coaching-Plattform",
    "ithome-devopsdays-2025": "iThome DevOpsDays 2025: Fünf Verhaltensmuster von KI-Agenten",
    "fde-diamond-org": "Die Spaltung der Softwareentwickler: Die diamantenförmige Organisation im KI-Zeitalter",
    "ai-picking-future-talents": "Vom Programmieren zum eigenständigen Vorschlagen: Wie man zukünftige Talente auswählt",
    "ai-agent-intern-recruit": "Praktikanten gesucht | KI-Agenten-Plattform in Übersee | Fullstack/Backend/GenAI",
    "ai-browser-auto-report": "AI Browser: Automatische Aufzeichnung von Denkmustern und Erstellung von Untersuchungsberichten",
    "ai-history-hinton-nobel": "Der historische Wendepunkt der KI: Von der Skepsis zum Nobelpreis",
    "perplexity-challenges": "Das Dilemma von Perplexity: Wo liegen die Grenzen der KI-Suche?",
    "google-gemini-antigravity-devops": "Google Gemini 3 Pro und Antigravity: Die Weiterentwicklung der Entwicklerrolle",
    "devfest-taipei-2025-announcement": "Ankündigung für DevFest Taipei 2025: Anwendung von KI-Agententeams in der Praxis",
    "graphrag-smart-customer-service": "GraphRAG verbindet Erinnerungen mit Knowledge Graphs und revolutioniert die Schlussfolgerung im intelligenten Kundenservice",
    "six-patents-approved-2025": "Sechs neue Patente in diesem Jahr genehmigt: Das Jahr des Durchbruchs für generative KI",
    "devfest-taipei-signup": "Die Anmeldung für das DevFest Taipei 2025 ist eröffnet",
    "best-attention-explanation": "Bestes Erklärungsvideo zu 'Attention is All You Need'",
    "jason-wei-ai-scenarios": "Jason Weis Vortrag: Ein systematischer Ansatz zur Suche nach KI-Szenarien",
    "thinking-machine-lab-deterministic-ai": "Mira Muratis Thinking Machine Lab: Ein Durchbruch im deterministischen KI-Schlussfolgern",
    "vibe-coding-three-giants": "Das Triumvirat des Vibe Codings: Codex, Gemini und Claude",
    "gemini-flash-nano-banana": "Nano Banana: Gemini 2.5 Flash Bildgenerierung im Test",
    "hiring-devops-fullstack-ddt": "Nils sucht Teamkollegen! Stellen für DevOps- und Fullstack-Ingenieure offen",
    "ai-pm-peter-deng-uber": "Die Denkweise eines KI-Produktmanagers: Peter Dengs Managementphilosophie bei Uber",
    "chatgpt-agent-launch": "Start des ChatGPT-Agenten: Wie man einer Sekretärin bei der Lösung abstrakter Aufgaben zusieht",
    "stargate-ai-infrastructure": "Stargate: Ein Serverzentrum-Projekt im 24-Stunden-Schichtbetrieb",
    "google-io-one-for-all": "The Winner Takes It All: Highlights der Google-Keynote",
    "kobe-imagination-ai-magic": "Kobe über Vorstellungskraft: Transformers und generative KI als Magie",
    "ai-team-recruitment-genai": "Werden Sie Teil unseres Teams: Gemeinsam KI-Szenarien gestalten",
    "genai-tech-interview-revolution": "Generative KI treibt die Revolution bei technischen Vorstellungsgesprächen an",
    "openai-devday-2024": "OpenAI DevDay 2024: Eine technologische Revolution für Entwickler"
};

export const excerptDe: Record<string, string> = {
    "patent-pii-filter": "Wie verhindert man bei der Einführung eines KI-Wissensdatenbanksystems in einer Bank Datenlecks, ohne die Antwortqualität zu beeinträchtigen? Dieser Artikel stellt die Patentarchitektur für das Filtern und Ersetzen sensibler Informationen vor.",
    "patent-multi-agent": "Traditionelle DBAs verwalten Datenbanken nach Erfahrung, aber bei hoher Nebenläufigkeit reicht das nicht aus. Dieser Artikel zeigt, wie ein GenAI Product Owner ein auf Multi-Agenten basierendes Optimierungssystem entwarf.",
    "patent-wealth-dashboard": "Was sind die wahren Schmerzpunkte von Kundenberatern? Wie hilft GenAI ihnen, in Echtzeit personalisierte Anlageempfehlungen zu generieren? Dieser Artikel teilt die Reise und das patentierte Denken eines Bank-GenAI-Produktmanagers.",
    "patent-knowledge-graph": "Wie konzipiert ein Bank-GenAI-Produktmanager ein LLM-System, das als Antwort auf Geschäftsprobleme automatisch einen Knowledge Graph aufbaut, und erhält dafür ein Patent? Dieser Artikel teilt den kompletten Denkprozess.",
    "patent-adaptive-security": "Wenn ein GenAI-System sensible Daten abfragt, wie verhindert man, dass böswillige Nutzer die Sicherheit umgehen? Dieser Artikel beschreibt detailliert, wie ein Bank-KI-Produktmanager ein dynamisches Zugriffskontroll-Patent entwarf.",
    "patent-modular-ai": "Explodieren die Bereitstellungskosten für LLMs? Dieser Artikel zeigt, wie ein Bank-GenAI-Produktmanager eine modulare Architektur nutzte, um KI-Systeme nach Bedarf anzupassen, was die Hardwarebelastung senkt und die Flexibilität erhöht.",
    "ithome-hello-world-2025": "Auf der iThome Hello World Entwicklerkonferenz dieses Jahres hielt ich vier KI-fokussierte Vorträge, vom MCP-Ökosystem und GraphRAG bis hin zu Abwehrmechanismen für LLMs in Unternehmen.",
    "2025-year-in-review": "Mein KI-Abenteuer 2025 in vier Zahlen: 6, 5, 1, 6. Nicht weil es so glamourös war, sondern weil es bodenständig blieb. GenAI in einer Bank zu implementieren ist wie das Auswechseln von Rohren in einem bewohnten Gebäude.",
    "devfest-taipei-2025-recap": "Beim DevFest Taipei 2025 habe ich eine produktive KI-Vertriebs-Coaching-Plattform vorgestellt—mit Multi-Agenten-Kollaboration, Persona World und Ontology + GraphRAG.",
    "ithome-devopsdays-2025": "Dieses Jahr steht im Zeichen der KI-Agenten. Wir sehen uns auf den DevOpsDays am 5. und 6. Juni – Fünf Verhaltensmuster von KI-Agenten: Mit KI die Zukunft des DevOps-Ökosystems gestalten.",
    "fde-diamond-org": "In derselben Ära und unter derselben Berufsbezeichnung 'Ingenieur' verlieren einige durch KI ihren Job, während andere durch sie neue finden. Was deinen Platz bestimmt, ist nicht Ausbildung oder Betriebszugehörigkeit, sondern Anpassungsgeschwindigkeit.",
    "ai-picking-future-talents": "So habe ich im vergangenen Jahr Teams geführt, aber ich stellte fest, dass einige Mitarbeiter mit mangelnder Erfahrung und Neugier sich in diesem Arbeitsmodell verloren fühlten. Vielleicht ist das eine Methode, künftige Talente auszuwählen.",
    "ai-agent-intern-recruit": "Wir bauen eine KI-Agenten-Plattform, die 'wirklich live geht und von echten Menschen genutzt wird', indem wir GenAI in Arbeitsabläufe integrieren – von der Datenverarbeitung bis zur Orchestrierung von Tools und Workflows.",
    "ai-browser-auto-report": "Habe einen KI-Browser entwickelt, der automatisch alle Denkvorgänge und Suchverläufe aufzeichnet, entscheidet, wann Screenshots gemacht werden müssen, und am Ende einen Untersuchungsbericht ausgibt.",
    "ai-history-hinton-nobel": "Einst hatte 'KI' in der Akademie ein negatives Image, und Geoffrey Hinton wurde stark für seine Arbeit an neuronalen Netzen kritisiert. Heute hat er den Turing- und Nobelpreis gewonnen und KI verändert die Welt.",
    "perplexity-challenges": "Perplexity steht vor einem 'Positionierungs'-Test: Einerseits sollen sie die Erwartungen an die 'KI-Suche der nächsten Generation' erfüllen, andererseits werden sie von verschiedenen Content-Anbietern durch rechtliche und kommerzielle Verhandlungen beansprucht.",
    "google-gemini-antigravity-devops": "KI ist nicht mehr nur ein Spielzeug für Demos, sondern wird Teil der Cloud-Infrastruktur. Wenn sich Werkzeuge ändern, ändern sich auch die dazugehörigen Rollen.",
    "devfest-taipei-2025-announcement": "Am 30.11. werde ich auf der von Google GDG organisierten DevFest Taipei 2025 über die praktische Anwendung von KI-Agententeams sprechen. Wir freuen uns über Ihre Anmeldung.",
    "graphrag-smart-customer-service": "GraphRAG ersetzt Einzelpunktsuchen durch eine graphbasierte Wissensstruktur. Es nutzt die Beziehungen zwischen Knoten und Kanten, um die Generierung zu unterstützen, den Kontextkonsens beizubehalten und Multi-Hop-Schlussfolgerungen zu ermöglichen.",
    "six-patents-approved-2025": "Sechs neue Gebrauchsmuster wurden Anfang dieses Jahres genehmigt und letzten Monat wurden fünf weitere Patente angemeldet. Dies ist das Jahr, in dem generative KI den Durchbruch schafft.",
    "devfest-taipei-signup": "Am 30.11. spreche ich auf der DevFest Taipei 2025 der Google GDG über angewandte KI-Agententeams. Freier Eintritt nach Überprüfung, Anmeldung ist willkommen.",
    "best-attention-explanation": "Dies ist das beste Video-Tutorial zum Thema 'Attention is All You Need', das ich bisher gesehen habe.",
    "jason-wei-ai-scenarios": "Dieser Vortrag von Jason Wei war eine echte Erleuchtung, hat mir Gänsehaut bereitet. Es ist definitiv ein systematischer Weg, um KI-Szenarien zu finden.",
    "thinking-machine-lab-deterministic-ai": "Erhält man absolut konsistente Ergebnisse, wenn man die Temperatur des KI-Modells auf 0 setzt? Die Antwort ist nein, und eine Studie von Thinking Machine Lab deckt die grundlegenden Gründe auf.",
    "vibe-coding-three-giants": "Wie der Gacha-Automat der großen drei Vibe-Coding-Modelle: OpenAI's Codex, Google's Gemini und Anthropic's Claude.",
    "gemini-flash-nano-banana": "Nano Banana (Gemini 2.5 Flash Bildfunktion) ist wirklich beeindruckend, von der Anpassung eines Anzugs über die Korrektur des Lächelns bis hin zu detaillierten Bewegungen ist die Präzision bewundernswert.",
    "hiring-devops-fullstack-ddt": "Verwandeln generativer KI, moderner Finanztechnologien und intelligenter Finanzanwendungen in skalierbare Produkte und Dienstleistungen – wir bringen Finanz-KI gemeinsam in internationale Märkte.",
    "ai-pm-peter-deng-uber": "Peter Deng hat fünf Rollen für PMs etabliert und machte die durch verschiedene Standpunkte bedingten Widersprüche und Spannungen öffentlich und transparent – ein Superteam sollte wie die Avengers sein.",
    "chatgpt-agent-launch": "Die Agenten-Vorgänge von ChatGPT werden in Echtzeit angezeigt und sind nachvollziehbar, fast so, als würde man einer menschlichen Sekretärin dabei zusehen, wie sie abstrakte Aufgaben löst.",
    "stargate-ai-infrastructure": "Das Stargate ist nun ein 24-Stunden-Schichtprojekt für ein Serverzentrum. Wenn die Amerikaner anfangen, 24/7 zu kämpfen, weiß man, dies ist ein Krieg, den sie nicht verlieren dürfen.",
    "google-io-one-for-all": "Die Google-Keynote war eine dichte Abfolge von Produktankündigungen, die deren Haltung zeigte. Im Vergleich zur Geschwindigkeit neuer Funktionen ist OpenAI immer noch ein kleines Unternehmen.",
    "kobe-imagination-ai-magic": "Elon glaubt, Fantasie sei nach dem Erlernen von Wissen das Wichtigste. Frieren sagt, Magie sei die Welt der Vorstellung – Transformers und GenAI sind diese Magie.",
    "ai-team-recruitment-genai": "Unser Financial AI Technology Team sucht leidenschaftliche Experten für DevOps und Data Science, um gemeinsam GenAI-Anwendungen zu entwickeln und umzusetzen.",
    "genai-tech-interview-revolution": "Die Kandidaten müssen innerhalb von 60 Minuten mit LLMs und Frontend-Entwicklung eine statische Website fertigstellen, wodurch der Fokus vom 'Wissensgedächtnis' zur 'Werkzeuganwendung' wechselt.",
    "openai-devday-2024": "OpenAI zeigte vier große Innovationen: Vision Fine-Tuning, Realtime API, Model Distillation und Prompt Caching, wodurch mehr Kontrolle in die Hände der Entwickler gelegt wird."
};

export const postsDe: Record<string, string> = {

"patent-pii-filter": `### Der Compliance-Albtraum jedes GenAI PMs

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

### Der Kernmechanismus: Ersetzen, nicht Maskieren

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

### Warum ist dies eine Kernkompetenz im GenAI-Produktdesign?

Bankwesen, Gesundheitswesen, Recht... diese stark regulierten Branchen sind die Bereiche, in denen GenAI den größten Mehrwert bietet, aber sie sind auch die am schwersten zu knackenden Märkte.

Der Flaschenhals ist fast nie die Technologie; es ist **Compliance**.

Wenn Sie als **GenAI Product Manager** Compliance-Bedenken auf der Architekturebene lösen können, werden Sie Ihre Mitbewerber weit hinter sich lassen. Während die meisten Compliance noch durch "post-mortem Analysen" handhaben, haben Sie Compliance bereits nativ in das System integriert.

---

### Drei Ebenen der GenAI Compliance-Architektur-Implementierung

**Ebene 1: Eingabefilterung**
Bevor ein Nutzer-Prompt in das System gelangt, werden Kategorien sensibler Daten herausgefiltert, die gar nicht erst abgefragt werden sollten.

**Ebene 2: Ausgabeersetzung (Kern dieses Patents)**
Bevor die Antwort gesendet wird, werden sensible Inhalte automatisch identifiziert und ersetzt, um sicherzustellen, dass die ausgehenden Informationen konform sind.

**Ebene 3: Audit-Trails**
Jede einzelne Abfrage und Ersetzung wird protokolliert, um nachträgliche Audits und Compliance-Prüfungen zu unterstützen.

**Eine einzige Ebene zu implementieren, reicht nicht aus. Nur alle drei zusammen bilden eine echte GenAI Compliance-Architektur.**

---

*M671223 Informationsabfragesystem (Filterung und Ersetzung sensibler Informationen) | Erteilt: 2025/06/01 | Alleiniger Erfinder: Nils Liu*`,

"patent-multi-agent": `### Das Dilemma des DBAs, die Chance des AI Agents

Datenbankoptimierung ist schwarze Magie.

Erfahrene DBAs verlassen sich auf jahrelange Intuition: Beim Blick auf ein Abfragemuster wissen sie, welchen Index sie hinzufügen müssen; beim Blick auf eine Lastkurve wissen sie, wie sie den Connection-Pool anpassen.

Aber das Problem ist: **Intuition skaliert nicht, und sie ist nicht 24/7 in Rufbereitschaft.**

Moderne Datenbank-Workloads sind zu komplex, als dass menschliche Gehirne sie in Echtzeit analysieren könnten. Besonders im E-Commerce oder im Finanzwesen können Traffic-Spitzen innerhalb von Sekunden um das Zehnfache explodieren. Bis der DBA aufwacht, um es manuell zu beheben, ist das System bereits down.

Das war der Ausgangspunkt für mein Design von **M671161 "Smarte Optimierungssystem"**: **Die Nutzung von AI Agents zur Automatisierung der Entscheidungsprozesse eines DBAs.**

---

### Multi-Agent-Architektur: KI "konkurrieren & kooperieren" lassen für die beste Strategie

Das interessanteste Design dieses Systems ist die Annahme eines Mechanismus der **kollaborativen Konkurrenz mehrerer KI-Sub-Agenten**.

Der Gesamtablauf sieht so aus:

\`\`\`
Leistungsüberwachungs-Modul → Datenvorverarbeitungs-Modul → Lastvorhersage-Modul
    → AI Agent Modul (Mehrere Sub-Agenten)
        → Strategieintegrations-Modul
            → Ausführungs-Modul → Datenbank-Server
\`\`\`

Das **AI Agent Modul** besteht aus vier Sub-Agenten:

| Sub-Agent | Aufgabenbereich |
|-----------|------------------|
| Abfrageoptimierung | Analysiert und umgeschrieben ineffiziente SQL-Abfragen. |
| Ressourcenallokation| Dynamische Konfiguration von CPU, Speicher und E/A. |
| Index-Management | Bewertet, welche Indizes erstellt und welche gelöscht werden. |
| Sicherheitsbewertung| Identifiziert verdächtiges Abfrageverhalten. |

Jeder der vier Sub-Agenten erstellt autonom Optimierungsempfehlungen. Das **Strategieintegrations-Modul** konsolidiert sie dann in den optimalsten Plan für die Ausführung.

Darüber hinaus verfügt das System über einen **Reinforcement-Learning-Feedbackmechanismus**: Nach der Ausführung einer Optimierung beobachtet es den tatsächlichen Effekt und meldet ihn zur kontinuierlichen Weiterbildung an das AI Agent Modul zurück.

---

### Die wichtigste Erkenntnis für GenAI Product Manager

Beim Bau von KI-Produkten ist "eine einzige KI, die alle Probleme löst" nahezu unmöglich.

Wirklich nützliche Unternehmens-KI-Architekturen sind oftmals **kollaborative Systeme mehrerer spezialisierter Agents.**

Dies spiegelt das Microservices-Konzept in der Softwaretechnik wider: Anstatt einer monolithischen Architektur, die alles macht, ist es besser, mehrere Dienste zu haben, die ihre spezifischen Pflichten erfüllen und sich untereinander abstimmen.

**Als GenAI Product Owner müssen Sie sich diese Fragen stellen:**

- Kann mein Problem in Unteraufgaben aufgeteilt werden?
- Welche Fähigkeiten benötigen die Agenten für jede Unteraufgabe?
- Wie kollaborieren diese Agenten und wie werden ihre Ergebnisse integriert?
- Wie lernt das gesamte System aus den Ausführungsergebnissen?

Das Designen von Multi-Agent-Architekturen gehört zu den Kernkompetenzen eines **GenAI PMs** nach 2025. Und dieses Datenbankoptimierungssystem ist ein sehr konkretes Implementierungsbeispiel.

---

### Lastvorhersage: KI braucht "Zukunftsbewusstsein"

Ein weiteres entscheidendes Design im System ist das **Lastvorhersage-Modul**—die Nutzung tiefgreifender Lernmodelle kombiniert mit einer historischen Leistungsmetrik-Datenbank, Zeitreihendaten und Kalendern (z. B. Monatsabschlüsse, Double-11-Spitzen), um zukünftige Datenbanklasten vorherzusagen.

**Präventive Optimierung ist immer billiger als reaktive Notfallreaktion.**

---

*M671161 Smartes Optimierungssystem (KI-gestützte Datenbank-Leistungsvorhersage und -Tuning) | Erteilt: 2025/06/01 | Alleiniger Erfinder: Nils Liu*`,

"patent-wealth-dashboard": `### Der wahre Schmerzpunkt von Kundenberatern

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

### Systemarchitektur: Ein KI-Assistent, der "das Geschäft kennt"

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

### Als GenAI Product Manager: Was habe ich aus diesem Projekt gelernt?

**1. "Personalisierung" erfordert fundamentale Datenarchitektur.**

Viele GenAI-Produkte behaupten, personalisiert zu sein, aber in Wirklichkeit fügen sie nur ein paar Nutzerfelder in den Prompt ein.

Wahre Personalisierung erfordert ein vollständiges Kundendatenmodell: Risikopräferenzen, Vermögensstrukturen, historisches Verhalten, Interaktionsfeedback... Das Entwerfen dieser Datenarchitektur ist wichtiger als das KI-Modell selbst.

**2. Die "Multi-Szenario-Simulation" ist eine Killer-Funktion für KI.**

Traditionelle Berater können normalerweise nur eine Empfehlung auf einmal abgeben. Dieses System kann gleichzeitig "konservative", "ausgewogene" und "aggressive" Szenario-Empfehlungen ausgeben und dem Kunden die Wahl lassen.

Für den menschlichen Verstand ist das aus dem Stegreif extrem schwer, für ein LLM jedoch mühelos. **Das Finden eines asymmetrischen Vorteils von KI ist die Kernaufgabe eines GenAI PMs.**

**3. Der kontinuierliche Lern-Loop ist der Ursprung langfristiger Wettbewerbsfähigkeit.**

Der Launch des Produkts ist nur der Anfang. Das System lernt aus jeder Interaktion mit dem RM und jeder Reaktion des Kunden und macht das Modell im Laufe der Zeit präziser. **Dieses Lern-Flywheel ist der am schwersten zu replizierende Burggraben.**

---

### Ratschläge zum Produktdesign für GenAI POs

Wenn Sie KI-Finanzprodukte entwerfen, lautet mein Rat:

**Beginnen Sie nicht bei der Technologie; beginnen Sie beim Arbeitsablauf des Beraters (oder jeglichen Frontline-Personals).**

Finden Sie heraus, wo sie die meiste Zeit verbringen, die meisten Fehler machen und am meisten Unterstützung bei der Informationssynthese benötigen — dort kann GenAI den größten Wert schaffen.

**Die beste Positionierung für KI ist nicht "den RM ersetzen", sondern "jeden RM mit einem allwissenden Assistenten ausstatten, der ihm direkt zur Seite steht".**

---

*M670472 System zur Generierung von Finanzinvestitionsempfehlungen (Kundenspezifisches GenAI Finanz-Dashboard) | Erteilt: 2025/05/11 | Alleiniger Erfinder: Nils Liu*`,

"patent-knowledge-graph": `### Warum benötigen Banken einen "selbstlernenden" Knowledge Graph?

Die meisten Menschen assoziieren Wissensgraphen (Knowledge Graphs) mit massiver manueller Kennzeichnung, vordefinierten Ontologien und einem Team von Fachexperten, die kontinuierlich für Instandhaltung sorgen müssen.

Im Finanzsektor ist das ein riesiges Problem.

Das Bankwissen ändert sich extrem schnell: Gesetzesaktualisierungen, Produktüberarbeitungen, Anpassungen an neue Kundensegmente... Die Kosten für den Aufbau eines traditionellen Knowledge Graphs sind hoch und die Aktualisierungszyklen langsam. Es kann mit dem Tempo des Geschäfts einfach nicht mithalten.

Als **GenAI Product Owner** stellte ich mir daher eine Frage:

> **"Wenn wir das LLM während jeder Kundeninteraktion automatisch Entitäten und Beziehungen extrahieren und den Knowledge Graph kontinuierlich aktualisieren lassen — wäre ein solches System machbar?"**

Die Antwort lautet ja, und diese Idee wurde später zu meinem Patent **M676680 "System zur Konstruktion von Knowledge Graphs"**.

---

### Wie funktioniert das System?

Die Kernarchitektur dieses Systems ist sehr intuitiv gestaltet und in vier Module unterteilt:

1. **Verarbeitungsmodul**: Gibt das Kundenverhalten und Anfragen in das LLM ein und wandelt sie in strukturierte "verarbeitete Texte" um.
2. **Entitätserkennungsmodul**: Identifiziert die Schlüsseleinheiten aus dem Text (Personen, Produkte, Ereignisse, Risikotypen etc.).
3. **Beziehungsextraktionsmodul**: Analysiert die potenziellen Verbindungen zwischen Entitäten (z.B. "Kunde A → Besitzt → Fonds B").
4. **Speichermodul**: Nutzt eine Graphdatenbank, um den Knowledge Graph zu speichern und fortlaufend zu aktualisieren.

Wichtiger noch: Das System kann diesen Knowledge Graph in Kombination mit Nutzerporträts nutzen, um **personalisierte Informationsantworten** zu liefern.

---

### Das Mindset eines GenAI PMs: Innovation durch Problem-Pain-Points

Viele Leute fragen mich: **Wie meldet ein PM/PO eigentlich ein Patent an?**

Meine Antwort ist: **Weil ein Patent im Grunde die Aufzeichnung einer Problemlösung ist.**

Beim Bau von GenAI-Produkten lösen Sie jeden Tag ein Problem: wie man KI-Systeme in einer Unternehmensumgebung zuverlässig zum Laufen bringt. Wissensmanagement ist das schwächste Glied in einer RAG-Architektur — Garbage in, Garbage out (GIGO). Wenn sich die Wissensbasis nicht von selbst entwickeln kann, verschlechtert sich die Wirksamkeit von RAG sehr schnell.

Der Kernwert dieses Patents ist keine technische Angeberei, sondern **die Nutzung einer systematischen Architektur zur Lösung des Wartungskostenproblems von Wissensdatenbanken.**

---

### Erkenntnisse für GenAI Product Manager

Wenn Sie ein Unternehmens-GenAI-Produkt planen, lohnt es sich, folgende Fragen zu prüfen:

- Wie oft wird Ihre Wissensbasis aktualisiert? Wer ist dafür verantwortlich?
- Gibt es eine Möglichkeit für das System, aus Nutzerinteraktionen **automatisch zu lernen**?
- Kann das Design Ihres Knowledge Graphs Personalisierung unterstützen?

**Ein Knowledge Graph ist nicht nur eine technologische Entscheidung; es ist das "Gedächtnisdesign" eines GenAI-Produkts.**

---

*M676680 System zur Konstruktion von Knowledge Graphs | Erteilt: 2025/11/01 | Alleiniger Erfinder: Nils Liu*`,

"patent-adaptive-security": `### "KI nutzen, um KI zu bewachen" — Kein Slogan, sondern Architektur-Design

Während des Prozesses, Generative KI in der Bank einzuführen, war das Thema, das mich nachts wach hielt, nicht die Modellleistung, sondern **Sicherheit**.

Wenn ein KI-Chatbot, der Kundendaten abfragen kann, durch maßgeschneiderte Prompts böswilliger Akteure manipuliert wird, sind die Konsequenzen unvorstellbar.

Was noch problematischer ist: Statische Cybersicherheitsregeln können mit der Kreativität von Prompt Injections schlicht nicht mithalten. Angreifer ändern ihre Formulierungen, und die Regeln versagen komplett.

Das brachte mich dazu, eine **generative adaptive Sicherheitsstrategie** zu entwerfen, was schließlich zum Patent **M674713 "Datenabfragesystem"** führte.

---

### Systemarchitektur: Der KI "Böswilligkeit verstehen" beibringen

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

### Warum ist dies ein Kernthema im GenAI Produktdesign?

Als **GenAI Product Manager** ist Sicherheit nicht etwas, das man "der Infosec-Abteilung übergibt"; es muss Teil der Produktarchitektur sein.

Bei der Konstruktion dieses Systems habe ich mehrere wichtige Erkenntnisse gewonnen:

**1. Statische Regeln können dynamische Angriffe niemals einholen**
Jede Sicherheitsplanke, die Sie setzen, kann von einem kreativen Nutzer umgangen werden. Das System selbst benötigt die "Fähigkeit zu lernen".

**2. Sicherheit und Nutzererfahrung sind kein Nullsummenspiel**
Gutes Sicherheitsdesign sollte für normale Benutzer unsichtbar sein und nur bei abnormalem Verhalten ausgelöst werden. Dies erfordert eine extrem präzise Risikoeinstufung.

**3. KI-Zugriffskontrolle sollte dynamisch sein**
Es ist kein binäres Urteil von "hast du die Erlaubnis", sondern eher "welche Informationsebene ist in diesem Kontext für diese Anfrage gerade angemessen?".

---

### Eine Checkliste für GenAI POs: Ist Ihr KI-System sicher genug?

- [ ] Kann das System anomale Abfragemuster erkennen?
- [ ] Gibt es einen Echtzeit-Mechanismus zur Intentionsanalyse?
- [ ] Basiert die Zugriffskontrolle auf statischen Rollen oder auf dynamischer Kontextwahrnehmung?
- [ ] Wird das System nach einem Angriff intelligenter oder bleibt es genau gleich?

**Sicherheit ist das letzte Tor, bevor ein GenAI-Produkt live geht, und sie ist die erste Mauer des Nutzervertrauens.**

---

*M674713 Datenabfragesystem (Generative adaptive Sicherheitsstrategie) | Erteilt: 2025/09/11 | Alleiniger Erfinder: Nils Liu*`,

"patent-modular-ai": `### Der häufigste Fehler bei Enterprise-LLMs: "Mächtig" mit "Nützlich" gleichzusetzen

Als ich anfing, Unternehmens-GenAI-Produkte zu bauen, verliebte ich mich ebenfalls in den Glauben: "Je größer das Modell, desto besser; je mehr Funktionen, desto stärker."

Bis ich die tatsächlichen Bereitstellungskosten sah.

Wenn ein im Firmen-Intranet eingesetzter LLM-Service ein voll ausgestattetes Modell für jedes Szenario nutzt, explodieren die GPU-Kosten, die Inferenzlatenz und die Wartungskomplexität drastisch.

Noch wichtiger: **Die meisten Geschäftsszenarien benötigen diese ganzen Features schlicht und einfach nicht.**

Ein Kundendienst-Bot benötigt natürliches Sprachverständnis + Dialogmanagement + Wissensabfrage. Ein Finanzanalyse-Assistent benötigt Datenverständnis + Berichtsgenerierung. Ein personalisiertes Empfehlungssystem braucht Nutzer-Personas + Präferenzabgleich.

Diese Erkenntnis führte zu meinem Patent **M671449 "Anpassbares Generatives Künstliches Intelligenzsystem"** — eine wahrhaft modulare GenAI-Architektur.

---

### Das Kerndesign: "Baukasten" KI-Systeme

Die wesentlichen Grundmodule dieses Systems umfassen:

| Modul | Funktion |
|-------|----------|
| NLU-Modul | Verwandelt Benutzereingaben in strukturierte, verarbeitete Nachrichten. |
| Dialogmanagement | Entscheidet über Handlungsstrategien basierend auf den verarbeiteten Nachrichten. |
| Wissensdatenbank-Modul| Fragt strukturierte und unstrukturierte Daten ab (unterstützt Knowledge Graphs). |
| Textgenerierung | Generiert Antworttexte basierend auf Entscheidungen und Abfrageergebnissen. |

Erweiterte optionale Module:
- **Sentiment-Analyse-Modul**: Fügt den Antworten emotionale Wärme hinzu.
- **Personalisierungsmodul**: Verbindet sich mit der direkten Kundendaten-Historie des Inhouse-Servers.
- **Lern- & Anpassungsmodul**: Optimiert kontinuierlich die Generierungsqualität durch Feedback.
- **Zentralsteuermodul**: Koordiniert die Ausführungssequenz und Datenweitergabe zwischen den Modulen.

Je nach Geschäftsszenario können Sie lediglich die benötigte Modulkombination einsetzen, was die Hardwareanforderungen und die Systemkomplexität signifikant reduziert.

---

### Was bedeutet das für einen GenAI Product Owner?

Als **GenAI PO** ist die größte Inspiration, die mir diese Architektur gebracht hat:

**Das architektonische Design eines KI-Produkts diktiert seine Grenzkostenkurve.**

Die Grenzkosten von Vollfunktions-Bereitstellungen sind beinahe fix (egal wie viele Funktionen genutzt werden, die Kosten bleiben). Der modulare Einsatz ermöglicht es Ihnen hingegen, Ressourcen dynamisch nach Nutzungsvolumen zuzuweisen, hochzuskalieren wenn das Geschäft wächst, und mit extrem geringem Kostenaufwand neue Szenarien zu testen.

Das ist eigentlich sehr traditionelles Software-Engineering-Denken — **Separation of Concerns (Trennung der Belange)** — welches nun einfach auf moderne KI-Komponenten angewandt wird.

---

### Drei Prinzipien des GenAI Architekturdesigns

Aus diesem Patent habe ich drei Architekturprinzipien destilliert, die für GenAI-Produktmanager von Nutzen sind:

**1. Aufbau nach Bedarf, nicht auf einmal alles**
Versuchen Sie nicht, jede Funktion in Version 1 zu integrieren. Finden Sie zuerst die Kernmodule, validieren Sie diese und packen Sie dann mehr darauf auf.

**2. Jedes Modul sollte unabhängig austauschbar sein**
Die LLM-Technologie entwickelt sich unfassbar schnell. Wenn Ihr Textgenerierungsmodul "festverdrahtet" in Ihr System eingebaut ist, werden Sie die Kosten künftiger Modell-Anpassungen erdrücken.

**3. Das Wissensmodul ist Ihr Wettbewerbsvorteil**
Andere Module können von Mitbewerbern leicht kopiert werden, aber Ihre Wissensbasis — Kundendaten, Geschäftsregeln, institutionelles Gedächtnis — ist Ihr echter unkopierbarer Burggraben.

---

*M671449 Anpassbares Generatives Künstliches Intelligenzsystem | Erteilt: 2025/06/11 | Alleiniger Erfinder: Nils Liu*`,

"ithome-hello-world-2025": `### iThome Hello World 2025 Entwicklerkonferenz

Auf der iThome Hello World Entwicklerkonferenz in diesem Jahr hatte ich die Gelegenheit, vier KI-fokussierte Vorträge zu halten:

1. **Vom Context zur Capability:** MCP-Ökosystem und Agentic-Architektur
2. **Beyond RAG:** Wie GraphRAG die Grenzen des KI-Wissens durchbricht
3. **Vibe Coding in Action:** Von der Idee zum Code mit KI-gestützter iterativer Entwicklung
4. **Enterprise LLM Guardrails:** Abwehrmechanismen in Produktivumgebungen

Es war eine fantastische Erfahrung, praktische Einblicke aus unserer Implementierung auf Unternehmensebene zu teilen. Die Resonanz der Entwickler-Community war überwältigend und die Diskussionen über Vibe Coding zeigten deutlich, wie sehr sich die Art und Weise der Softwareentwicklung verändert.`,

"2025-year-in-review": `### Jahresrückblick 2025: Die stille Kraft stetigen Fortschritts

Mein KI-Abenteuer 2025 in vier Zahlen: 6, 5, 1, 6.
Nicht weil es so glamourös war, sondern weil es bodenständig blieb.

GenAI in einer Bank zu implementieren ist wie das Auswechseln von Rohren in einem bewohnten Gebäude — die eigentliche Herausforderung ist nicht das Modell selbst, sondern Engineering, Vertrauen und Compliance. Wir haben bewiesen, dass man auch in einem stark regulierten Umfeld innovativ sein kann.

Dieses Jahr ging es weniger um laute Ankündigungen als vielmehr um das kontinuierliche Schieben wertschöpfender Projekte in die Produktion. Die stillen Fortschritte sind oft die nachhaltigsten.`,

"devfest-taipei-2025-recap": `### Rekapitulation DevFest Taipei 2025

Vielen Dank an alle, die an meiner Sitzung auf dem DevFest Taipei 2025 teilgenommen haben!

Ich habe die Architektur und Implementierung einer echten KI-Vertriebs-Coaching-Plattform vorgestellt, die wir in Produktion gebracht haben. Zu den Kernfunktionen gehören:

- **Multi-Agenten-Kollaboration:** Agenten, die Hand in Hand arbeiten
- **Persona World:** Dynamisch generierte Kundenprofile
- **Ontology + GraphRAG:** Vernetztes Wissen für kontextbezogene Intelligenz

Es ist erfüllend zu sehen, wie theoretische Konzepte in Systeme übersetzt werden, die rund um die Uhr personalisiertes Training in großem Maßstab liefern.`,

"ithome-devopsdays-2025": `### Fünf Verhaltensmuster von KI-Agenten

Dieses Jahr steht im Zeichen der KI-Agenten. Wir sehen uns auf den DevOpsDays am 5. und 6. Juni.

Mein Thema: **Fünf Verhaltensmuster von KI-Agenten: Mit KI die Zukunft des DevOps-Ökosystems gestalten.**

Wir werden von einfachen LLM-Wrappern zu Systemen übergehen, die Aktionen planen, Tools nutzen, reflektieren und orchestrieren. Das Verständnis dieser Muster ist entscheidend für DevOps-Teams, die in der nächsten Software-Ära bestehen möchten.`,

"fde-diamond-org": `### Die Spaltung der Softwareentwickler

In derselben Ära und unter derselben Berufsbezeichnung "Ingenieur" verlieren einige durch KI ihren Job, während andere gerade wegen ihr neue Möglichkeiten finden. 

Was deinen Platz bestimmt, ist nicht deine Ausbildung oder deine Betriebszugehörigkeit, sondern deine Anpassungsgeschwindigkeit.

Block hat gerade angekündigt, die Hälfte seiner Ingenieure zu entlassen, obwohl Daten von Indeed zeigen, dass die offenen Stellen für Softwareentwickler stark ansteigen. Diejenigen, die entlassen werden, sind oft diejenigen, die auf alte Weise arbeiten – traditionelles Debugging, Code-Reviews, Routinetests. Genau die Dinge, die KI am besten ersetzen kann. 

Die diamantförmige Organisation ist real: Die Mitte wird ausgehöhlt, und es besteht ein enormer Bedarf an erfahrenen Architekten ganz oben und KI-gestützten Junioren ganz unten. Der Markt verlangt nach Entscheidungsträgern, nicht nur nach Ausführenden.`,

"ai-picking-future-talents": `### Wie KI zukünftige Talente auswählt

In der Führung eines Teams im letzten Jahr fiel mir auf, dass einige Mitarbeiter mit mangelnder Erfahrung und Neugier sich völlig verloren fühlten, sobald wir KI-Workflows integrierten.

Boris Cherny von Anthropic hatte einen interessanten Gedanken dazu: Diese Lücke ist genau das, was zukünftige Talente voneinander trennen wird.

Der Übergang vom reinen "Code-Schreiben" zum "autonomen Vorschlagen und Iterieren" mit KI-Unterstützung erfordert ein völlig anderes Mindset. Die wirklich guten Entwickler werden nicht die sein, die die Syntax perfekt beherrschen, sondern diejenigen, die Probleme strukturieren und LLMs effektiv lenken können.`,

"ai-agent-intern-recruit": `### Praktikanten gesucht: KI-Agenten-Plattform

Wir bauen eine KI-Agenten-Plattform in Übersee auf, die "wirklich live geht und von echten Menschen genutzt wird". 

Wir integrieren GenAI nativ in Arbeitsabläufe – von der Datenverarbeitung über die Werkzeugorchestrierung bis hin zu vollständigen Automatisierungsketten.

Wenn Sie gerne von PoC zu Produktion skalieren, bewerben Sie sich! Wir suchen motivierte Praktikanten für Fullstack, Backend und GenAI-Engineering.`,

"ai-browser-auto-report": `### AI Browser: Automatisierung von Untersuchungsprotokollen

Ich habe einen speziellen "KI-Browser" entwickelt, der genau dokumentiert, wie ein LLM navigiert.

Er zeichnet alle Denkvorgänge auf, verfolgt Suchverläufe, entscheidet automatisch anhand des Kontextes, wann ein Screenshot aufgenommen werden muss, und kompiliert am Ende alles in einen strukturierten Untersuchungsbericht.

Es geht darum, Transparenz und Überprüfbarkeit in die KI-Forschung zu bringen – ein Werkzeug, das nicht nur Antworten liefert, sondern auch den gesamten Weg dorthin belegt.

https://youtu.be/Hk_42hV7q2Q?si=Rp9k7AQml9Gm0c6L`,

"ai-history-hinton-nobel": `### Der historische Wendepunkt der KI

Einst hatte das Wort "KI" in der Akademie ein negatives Image, besonders nach den KI-Wintern. Geoffrey Hinton wurde stark für seine Arbeit an neuronalen Netzen kritisiert, teilweise sogar angefeindet. Er wurde oft gefragt, wie er in etwas vertrauen könne, das man nicht vollständig nachvollziehen kann.

Heute wissen wir, wie die Geschichte ausgeht: Hinton gewann 2018 den Turing-Preis und 2024 den Nobelpreis für Physik. Auch Demis Hassabis wurde für AlphaFold mit dem Nobelpreis für Chemie bedacht.

KI verändert die Welt nachhaltig.

https://youtu.be/d95J8yzvjbQ?si=pNqqz52EE6Kt4baJ`,

"perplexity-challenges": `### Das Dilemma von Perplexity

Als Perplexity startete, fühlte es sich an wie etwas, das jedes kompetente Team bauen könnte. Die grundlegende Technologie hat keinen massiven Schutzwall.

Die eigentliche Herausforderung für sie heute ist eine "Positionierungs"-Prüfung. Einerseits müssen sie die hohen Erwartungen als die "KI-Suchmaschine der nächsten Generation" erfüllen. Andererseits werden sie von Content-Anbietern – von Forbes bis zur New York Times, die nun wegen Urheberrechtsverletzungen klagt – in rechtliche Schranken gewiesen.

Die gesamte Branche lotet derzeit die Grenzen der KI-Suche aus. Ich bin gespannt, ob Perplexity ein Modell etablieren kann, das sich für Content-Ersteller, Nutzer und Plattform fair anfühlt.

[📰 Reuters: New York Times sues Perplexity AI for infringing copyright](https://www.reuters.com/legal/litigation/new-york-times-sues-perplexity-ai-infringing-copyright-works-2025-12-05/)`,

"google-gemini-antigravity-devops": `### Die Weiterentwicklung der Entwicklerrolle

Mit der Veröffentlichung von Gemini 3 Pro und Tools wie Antigravity gibt es ein klares Signal: KI ist nicht mehr nur ein Spielzeug für Demos, sondern wird ein integraler Bestandteil der Cloud-Infrastruktur.

Diese Werkzeuge kapseln Komplexität. Vorher verbrachten Entwickler unzählige Stunden mit Fehlerbehebung in der Infrastruktur, Bereitstellungspipelines und Environment-Setup. Nun werden diese Aufgaben immer stärker abstrahiert, was uns erlaubt, uns auf Produkt, User Experience und AI Governance zu konzentrieren.

Wer sich in den kommenden Jahren behaupten will, muss die Evolution der Werkzeuge mit der Evolution der organisatorischen Fähigkeiten verknüpfen. Wenn sich Werkzeuge ändern, ändern sich auch die dazugehörigen Rollen.`,

"devfest-taipei-2025-announcement": `### Ankündigung: DevFest Taipei 2025

Am 30. November werde ich auf dem von Google GDG organisierten DevFest Taipei 2025 sprechen.

Das Thema: Reale Anwendungen von KI-Agententeams in Produktionsumgebungen, die echtes Geschäftswissen integrieren. Keine Spielzeuge, sondern produktive Systeme.

Wir sehen uns um 10:30 Uhr an der National Taiwan University!`,

"graphrag-smart-customer-service": `### GraphRAG: Revolution im intelligenten Kundenservice

Herkömmliches RAG verlässt sich hauptsächlich auf Vektorsuchen, die den semantischen Faden verlieren können, wenn Gespräche lang werden oder oft das Thema wechseln. 

GraphRAG ersetzt Einzelpunktsuchen durch eine graphbasierte Wissensstruktur. Es nutzt die Beziehungen zwischen Knoten und Kanten, um die Generierung zu unterstützen, den Kontextkonsens beizubehalten und vor allem Multi-Hop-Schlussfolgerungen zu ermöglichen.

In unserem Prototyp-System, das Kundengespräche, Finanznachrichten und Expertenwissen verknüpft, zeigte GraphRAG beim RobustQA-Test eine Genauigkeit von 86% im Vergleich zu 33–76% bei klassischen RAG-Lösungen. Ein enormer Sprung, obwohl bei der Implementierung Systemkomplexität und Kosten genau abgewogen werden müssen.`,

"six-patents-approved-2025": `### Sechs Patente genehmigt

Sechs neue Gebrauchsmuster, die wir Anfang dieses Jahres eingereicht haben, wurden nun offiziell genehmigt.

Im letzten Monat haben wir weitere fünf Patente angemeldet. Dies ist wirklich das Jahr des explosionsartigen Wachstums generativer KI-Anwendungen im reellen Einsatz.`,

"devfest-taipei-signup": `### DevFest Taipei 2025 Anmeldung

Am 30. November werde ich auf der DevFest Taipei 2025 der Google GDG am NTU-Campus über angewandte KI-Agententeams sprechen. 

Der Eintritt ist frei (nach erfolgter Registrierung). Ich freue mich darauf, viele von Ihnen dort zu sehen!`,

"best-attention-explanation": `### Bestes 'Attention is All You Need' Video

Dies ist mit Abstand das beste Video-Tutorial zum bahnbrechenden Papier "Attention is All You Need", das ich bisher gesehen habe.

Sehr empfehlenswert für alle, die wirklich verstehen wollen, wie Transformers auf der untersten Ebene funktionieren.

https://www.youtube.com/watch?v=_VaEjGnHgOI&t=1274s`,

"jason-wei-ai-scenarios": `### Systematische KI-Szenarien

Dieser Vortrag von Jason Wei war eine echte Erleuchtung und hat mir sprichwörtlich Gänsehaut bereitet.

Wenn Sie nach realen und werthaltigen Anwendungsfällen für KI suchen, ist dies genau der systematische Weg, auf dem Sie vorgehen sollten.`,

"thinking-machine-lab-deterministic-ai": `### Deterministisches KI-Schlussfolgern

Erhält man absolut konsistente Ergebnisse, wenn man die Temperatur eines KI-Modells auf 0 setzt? Die intuitive Antwort ist "Ja", die tatsächliche Antwort ist jedoch "Nein". 

Eine neue Studie des Thinking Machine Lab deckt die grundlegenden Gründe dafür auf: Server-Charge-Verarbeitung, Matrixmultiplikation und Genauigkeitsverluste bei der Normalisierung. Die Inkonsistenzen sind real und für stark regulierte Branchen problematisch.

Das Thinking Machine Lab hat eine ladungsunabhängige Lösung entwickelt, die 100%ige Determinierung garantiert, allerdings mit Kosten von 60% Leistungsverlust. Für Bereichen, in denen Zuverlässigkeit Vorrang vor Geschwindigkeit hat, ändert diese Technologie jedoch die Spielregeln vollkommen.`,

"vibe-coding-three-giants": `### Die Vibe Coding Giganten

Vibe Coding im Jahr 2025 fühlt sich ein bisschen an wie an einem Gacha-Automaten zu ziehen. Die großen drei, die diesen Raum derzeit dominieren, sind:

1. **Codex** von OpenAI
2. **Gemini** von Google
3. **Claude** von Anthropic`,

"gemini-flash-nano-banana": `### Nano Banana Bildgenerierung

Nano Banana (die Bildgenerierungsfunktion von Gemini 2.5 Flash) ist wirklich erstaunlich.

Prompt 1: "Ändern zu Anzug, Studioaufnahme, Passfoto-Stil"
Prompt 2: "Professionelles Lächeln hinzufügen, Augen offen"
Prompt 3: "Hand passt den Krawattenknoten an"

Die Detailgenauigkeit und die Kontrolle über kleinste Haltungs- und Gesichtsausdruckänderungen sind bemerkenswert und nützen echten Produktivitäts-Workflows.`,

"hiring-devops-fullstack-ddt": `### Nils sucht Teamkollegen!

Wir bringen Finanz-KI in internationale Märkte und suchen aktiv nach DevOps- und Fullstack-Ingenieuren!

Wir verwandeln generative KI, moderne Finanztechnologien und intelligente Finanzanwendungen in skalierbare Produkte und Dienstleistungen. Wir haben starken Top-Down-Support, echte Cloud-Architekturen (AWS/GCP) und ein tiefes Engagement, die Grenzen auf Unternehmensebene zu verschieben.

Wenn Sie Leidenschaft für Programmierung, KI und Scrum haben, lassen Sie uns sprechen!`,

"ai-pm-peter-deng-uber": `### Die Philosophie eines KI-Produktmanagers

Peter Dengs Philosophie als Produktmanager, besonders während seiner Zeit bei Uber, ist unglaublich wertvoll für jeden im KI-Bereich.

Er etablierte fünf distincte Rollen für PMs und ermutigte ganz bewusst dazu, die durch verschiedene Standpunkte bedingten Widersprüche und Spannungen öffentlich und transparent auszutragen. Ein Superteam sollte wie die Avengers sein: Jedermann ist besonders, hat seine eigenen Ansichten und es wird sichergestellt, dass jede Stimme berücksichtigt wird.

Sein sechsmonatiger Rekrutierungsgrundsatz lautet: Wenn ein neuer Mitarbeiter nach sechs Monaten noch gesagt bekommen muss, was er tun soll, ist er am falschen Platz. Er sucht Denker und Treiber.`,

"chatgpt-agent-launch": `### Der Launch des ChatGPT-Agenten

Der offizielle Start des Agenten von ChatGPT ist faszinierend: Wenn der Agent Befehle erhält, werden seine Vorgänge in Echtzeit auf dem Bildschirm angezeigt. Es gibt aussagekräftige Protokolle (verbose), sodass alles erklärbar bleibt.

Es fühlt sich ehrlich gesagt so an, als würde man einer menschlichen Sekretärin dabei zusehen, wie sie abstrakte Aufgaben auf einem Computer löst. Entwickelt von Mitgliedern der Deep Research- und Operator-Teams, vereint dieses Setup das Beste aus beiden Welten. Dies zeigt, dass Open-Source-Ansätze in Zukunft hochgeschwindigkeits Deep-Research-Architekturen benötigen werden.`,

"stargate-ai-infrastructure": `### Projekt Stargate

Das "Stargate" ist nun ein Serverzentrum-Projekt, an dem in 24-Stunden-Schichten ununterbrochen gebaut wird.

Wenn die Amerikaner anfangen, 24/7 zu arbeiten und in der physischen Infrastruktur mit so hoher Intensität zu konkurrieren, wird klar, dass dies ein Krieg um die KI-Vorherrschaft ist, den sie absolut nicht verlieren dürfen.`,

"google-io-one-for-all": `### "Winner Takes It All"

Das 32-minütige Highlight-Reel der Google Keynote war eine dichte Abfolge von atemberaubenden Produktankündigungen.

Wenn mir technische Entwicklungen im Bereich KI in der Vergangenheit manchmal schwindelerregend vorkamen, war dies einfach erdrückend in seiner schieren Masse. Es ist eine klare Demonstration von Maßstab. Verglichen mit der unglaublichen Geschwindigkeit, mit der Google diese Features pusht, wirkt OpenAI plötzlich wie ein recht kleines Unternehmen.`,

"kobe-imagination-ai-magic": `### Vorstellungskraft und KI-Magie

In einem Interview 2017 teilte Kobe Bryant Elon Musks Auffassung: Nach dem Sammeln von Wissen ist Vorstellungskraft das Kritischste. Egal wie viel Sie lernen, ohne Vorstellungskraft bringen Sie es nicht auf das nächste Level.

Frieren sagte einmal: "Magie ist die Welt der Vorstellung. Was du dir nicht vorstellen kannst, wird deine Magie nicht realisieren."

Ich glaube wirklich, dass Transformers und generative KI genau diese Art von Magie sind. Ihre Nützlichkeit ist einzig durch die Vorstellungskraft des Nutzers begrenzt.
https://www.youtube.com/watch?v=jSVdxhTEJP4`,


"ai-team-recruitment-genai": `### Stellenangebot: GenAI Team

Unser Financial AI Technology Team sucht leidenschaftliche Experten für DevOps und Data Science, um gemeinsam GenAI-Anwendungen zu entwickeln und umzusetzen!

Ihre Rolle wird das Entwerfen, Entwickeln und Bereitstellen von skalierbaren Systemarchitekturen zur Lösung realer kommerzieller Bedürfnisse sein. Wir veröffentlichen Arbeiten, melden Patente an und übersetzen PoCs schnell in produktionsreife Realität.`,

"genai-tech-interview-revolution": `### Transformation technischer Interviews

Wir haben unser technisches Interview für Praktikanten drastisch aktualisiert.

Wir fordern die Kandidaten nun auf, innerhalb von nur 60 Minuten unter starker Einbindung von LLMs und Frontend-Entwicklungs-Skills eine statische Website zu erstellen. Dies testet nicht das "Wissen auswendig lernen", sondern bewertet die praktische "Werkzeuganwendung".

Der Prozess erfordert schnelles Prompt-Engineering, solideres Interface-Basiswissen und kreative KI-Problemlösungen. In der KI-Ära untersuchen wir nicht nur, was Sie wissen, sondern vor allem, was Sie schnell aufbauen können.`,

"openai-devday-2024": `### OpenAI DevDay 2024: Technische Revolution

Gestern hat OpenAI auf dem DevDay 2024 vier große Neuerungen vorgestellt: Vision Fine-Tuning, Realtime API, Model Distillation und Prompt Caching.

- **Realtime API:** Bahnbrechend für Sprachinteraktionen mit niedriger Latenz.
- **Prompt Caching:** Bis zu 50% Rabatt auf wiederverwendete Kontext-Tokens – eine enorme Kostenersparnis!
- **Vision Fine-Tuning:** Endlich Anpassung von GPT-4o mit firmenspezifischen visuellen Daten.
- **Model Distillation:** Die Ausgaben High-End-Modellen nutzen, um kleinere, effizientere Modelle zu trainieren.

OpenAI legt deutlich mehr Kontrolle, Anpassungsfähigkeit und Kostenmanagement in die Hände der Entwickler. Das ist ein großer Gewinn für den gesamten Entwicklerbereich.`
};

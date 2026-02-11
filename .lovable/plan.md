

# Nils — Premium Personal Brand Website

A "quiet luxury" personal brand website that converts visitors into consulting/prototyping leads. Built with React + Vite + Tailwind + Framer Motion.

---

## Design Direction
- **Palette:** Black, white, neutral grays. Subtle gradients, glass-blur effects, soft shadows, high contrast.
- **Typography:** Clean sans-serif (Inter or similar), large hero type, generous whitespace.
- **Motion:** Cinematic hero animation on load, smooth page transitions via Framer Motion, parallax effects, micro-interactions on hover.
- **Dark mode default** with elegant light mode toggle.
- **"Enter and wow" within 3 seconds** — staggered text reveal, subtle background motion, polished CTAs.

---

## Pages & Features

### 1. Home (`/`)
- **Cinematic hero** with staggered text animation: "I make GenAI / AI Agents operational."
- Subheadline about regulated environments, governance, observability, cost
- Three CTAs: "Book a Call", "Email", "LinkedIn"
- **Proof strip** — horizontal scroll of anonymized credibility items (award, patents, talks, certifications)
- **Prototype Demos** section with responsive YouTube embeds (lazy-loaded, lightbox modal option) using placeholder VIDEO_IDs
- Brief services teaser linking to /services

### 2. Services (`/services`)
- Three service cards with hover reveal animations:
  - **Consulting** (1–3 weeks) — deliverables, best for, timeline
  - **Rapid Prototyping** (2–6 weeks) — deliverables, best for, timeline
  - **Enablement/Training** (0.5–2 days) — deliverables, best for, timeline
- Each card with subtle glass effect and micro-interactions
- CTA to contact page

### 3. Work (`/work`)
- 3–5 anonymized case studies in card format
- Each with: Problem → Approach → Outcome, tags, "What I owned" section
- Hover reveal for details, click to expand
- Anonymized client references ("top-tier bank", "leading SG bank", etc.)

### 4. About (`/about`)
- First-person bio with low-key authority tone
- Principles section (Bitter Lesson, platform-first, evaluation-driven)
- Skills/tech stack visual
- Credibility blocks (patents, talks, award) — all anonymized

### 5. Insights (`/insights`)
- Scaffolded page with "Coming soon" state
- Prepared layout for future blog/article cards

### 6. Contact (`/contact`)
- Clean form: name, email, message with client-side validation
- Success animation on submit (stubbed, no backend)
- Social links (LinkedIn, Email, YouTube)
- Timezone display: Asia/Taipei

---

## Global Components
- **Sticky header** — minimal nav + language switcher (中文 / EN / DE) + dark mode toggle
- **Smooth scrolling** for same-page anchors
- **Page transitions** via Framer Motion AnimatePresence
- **Footer** with social links and copyright

---

## i18n (3 Languages)
- URL-based routing: `/en/*`, `/zh/*`, `/de/*`
- react-i18next with full translation JSON files for all pages (real copy, not lorem ipsum)
- Language switcher in header
- Browser locale detection for default redirect
- Proper `<html lang>` attribute per locale

---

## SEO & Meta
- Per-page title, description, OG tags per locale
- Canonical URLs per locale
- robots.txt and sitemap scaffolding
- Semantic HTML throughout

---

## Performance Targets
- No heavy images — SVG icons, CSS gradients, minimal assets
- Lazy-loaded YouTube embeds (thumbnail click-to-play)
- Code-split pages via React lazy/Suspense
- Lighthouse 90+ target


---
description: Start a new project using Vercel, PostgreSQL, and Auth.js (Gmail OAuth)
---

# Vercel + PostgreSQL + Gmail OAuth Boilerplate Workflow

This workflow provides a standardized, step-by-step procedure to bootstrap a new CRUD web application using the modern "Vercel Stack" with a relational database and Google OAuth authentication.

## 1. Stack Prerequisites Initialization
Whenever the user requests to start a new Vercel CRUD project, execute the following commands to initialize the Next.js foundation:
```bash
npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"
npm install next-auth@beta @auth/core @vercel/postgres drizzle-orm
npm install -D drizzle-kit tsx
```

## 2. Authentication Setup (Auth.js)
1.  **Configure Environment Variables:** Ensure `.env.local` contains `AUTH_SECRET`, `AUTH_GOOGLE_ID`, and `AUTH_GOOGLE_SECRET`.
2.  **Create Auth Config:** Setup `src/auth.ts` exporting handlers from `NextAuth` configured with `GoogleProvider`.
3.  **API Route:** Implement the Catch-all API route at `src/app/api/auth/[...nextauth]/route.ts`.

## 3. Database ORM Setup (Drizzle + Vercel Postgres)
1.  **Schema Definition:** Create `src/db/schema.ts`. Define the users table required by Auth.js and any custom business logic tables (e.g., `todos` or `articles`).
2.  **Drizzle Configuration:** Create `drizzle.config.ts` mapping to Vercel's `POSTGRES_URL`.
3.  **Database Connection Instance:** Create `src/db/index.ts` initializing the `sql` connection from `@vercel/postgres` wrapped in Drizzle.

## 4. CRUD Operations Structure
1.  **Server Actions (Next.js 14+):** Create reusable async functions inside `src/actions/` module, marked with `"use server"`.
2.  **Protected Routes:** Validate the user session `await auth()` at the top of every Server Action mutating the database.
3.  **Client/Server Boundaries:** Ensure data reading happens in Server Components (`async function Page()`) passing down to Client Components (`"use client"`) merely for interactive UI forms.

## 5. Deployment Preflight Check
Before deploying to Vercel:
1.  Verify the local database migrations ran successfully: `npx drizzle-kit push:pg`
2.  Ensure Vercel project is linked: `vercel link`
3.  Pull environment variables: `vercel env pull .env.local`
4.  Run a production build locally: `npm run build`

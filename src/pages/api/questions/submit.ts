import type { APIRoute } from 'astro';
import { sql } from '@vercel/postgres';
import { getSession } from 'auth-astro/server';

export const POST: APIRoute = async ({ request }) => {
  try {
    const session = await getSession(request);
    const body = await request.json();
    const { score, gaps, email } = body;

    let userId = null;
    let identifier = email;

    // Check if user is authenticated via OAuth
    if (session?.user?.email) {
      identifier = session.user.email;
      const { rows } = await sql`SELECT id FROM users WHERE email = ${identifier} LIMIT 1`;
      if (rows.length > 0) {
        userId = rows[0].id;
      } else {
        // Auto-create user record from OAuth info
        const insertUser = await sql`
          INSERT INTO users (email, name, image) 
          VALUES (${session.user.email}, ${session.user.name}, ${session.user.image}) 
          RETURNING id;
        `;
        userId = insertUser.rows[0].id;
      }
    } else if (email) {
      // FormSubmit fallback identifying by email
      const { rows } = await sql`SELECT id FROM users WHERE email = ${email} LIMIT 1`;
      if (rows.length > 0) {
        userId = rows[0].id;
      } else {
        const insertUser = await sql`
          INSERT INTO users (email) VALUES (${email}) RETURNING id;
        `;
        userId = insertUser.rows[0].id;
      }
    }

    // Save assessment record
    if (userId) {
      await sql`
        INSERT INTO user_assessments (user_id, score, capability_gaps)
        VALUES (${userId}, ${score}, ${JSON.stringify(gaps)}::jsonb);
      `;

      // Update basic preferences (e.g. newsletter) if submitted via email form
      if (email) {
        await sql`
          INSERT INTO user_preferences (user_id, newsletter_subscribed) 
          VALUES (${userId}, true)
          ON CONFLICT (user_id) 
          DO UPDATE SET newsletter_subscribed = true, updated_at = CURRENT_TIMESTAMP;
        `;
      }
    }

    return new Response(JSON.stringify({ success: true, userId }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error: any) {
    console.error('Failed to submit assessment:', error);
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};

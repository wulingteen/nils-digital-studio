import type { APIRoute } from 'astro';
import { sql } from '@vercel/postgres';
import { getSession } from 'auth-astro/server';

export const POST: APIRoute = async ({ request }) => {
  try {
    const session = await getSession(request);
    
    // User must be logged in via Google OAuth
    if (!session || !session.user?.email) {
      return new Response(JSON.stringify({ error: 'Unauthorized' }), { status: 401 });
    }

    const { preferences } = await request.json();
    if (!preferences) {
      return new Response(JSON.stringify({ error: 'Preferences payload required' }), { status: 400 });
    }

    const userEmail = session.user.email;

    // First ensure the user exists in our DB (Auth.js session callback handles this normally, 
    // but we ensure it here just in case they haven't re-logged in after table creation)
    const userRes = await sql`
      SELECT id FROM users WHERE email = ${userEmail} LIMIT 1;
    `;
    
    let userId;
    if (userRes.rowCount === 0) {
      const newId = crypto.randomUUID();
      await sql`
        INSERT INTO users (id, email, name, image, oauth_provider)
        VALUES (${newId}, ${userEmail}, ${session.user.name || null}, ${session.user.image || null}, 'google')
      `;
      userId = newId;
    } else {
      userId = userRes.rows[0].id;
    }

    // Upsert the preferences into user_preferences table
    // JSONB allows us to directly snapshot the Zustand state objects
    await sql`
      INSERT INTO user_preferences (user_id, viewed_articles, newsletter_subscribed)
      VALUES (
        ${userId}, 
        ${JSON.stringify({ 
           read: preferences.readArticles || [],
           bookmarked: preferences.bookmarkedArticles || [],
           badges: preferences.unlockedBadges || []
        })}::jsonb, 
        ${preferences.isSubscribed || false}
      )
      ON CONFLICT (user_id) DO UPDATE SET 
        viewed_articles = EXCLUDED.viewed_articles,
        newsletter_subscribed = EXCLUDED.newsletter_subscribed;
    `;

    return new Response(JSON.stringify({ success: true, message: 'Progress synced to cloud' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (error) {
    console.error('Failed to sync user preferences:', error);
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), { status: 500 });
  }
};

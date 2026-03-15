import type { APIRoute } from 'astro';
import { sql } from '@vercel/postgres';

export const prerender = false;

export const GET: APIRoute = async ({ request }) => {
  const url = new URL(request.url);
  const articleId = url.searchParams.get('id');

  if (!articleId) {
    return new Response(JSON.stringify({ error: 'Missing article ID' }), { status: 400 });
  }

  try {
    // Ensure table exists on first run
    await sql`
      CREATE TABLE IF NOT EXISTS article_views (
        article_id VARCHAR(255) PRIMARY KEY,
        view_count INTEGER DEFAULT 1,
        last_viewed_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      );
    `;

    // Fetch view count
    const { rows } = await sql`
      SELECT view_count FROM article_views WHERE article_id = ${articleId} LIMIT 1;
    `;

    return new Response(JSON.stringify({ views: rows.length > 0 ? rows[0].view_count : 1 }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    console.error('Failed to GET article views:', error);
    return new Response(JSON.stringify({ views: 0 }), { status: 500 });
  }
};

export const POST: APIRoute = async ({ request }) => {
  try {
    const { articleId } = await request.json();

    if (!articleId) {
       return new Response(JSON.stringify({ error: 'Missing article ID' }), { status: 400 });
    }

    // Upsert view count
    const { rows } = await sql`
      INSERT INTO article_views (article_id, view_count) 
      VALUES (${articleId}, 1)
      ON CONFLICT (article_id) 
      DO UPDATE SET view_count = article_views.view_count + 1, last_viewed_at = CURRENT_TIMESTAMP
      RETURNING view_count;
    `;

    return new Response(JSON.stringify({ views: rows[0].view_count }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    console.error('Failed to POST article views:', error);
    return new Response(JSON.stringify({ error: 'Server Error' }), { status: 500 });
  }
};

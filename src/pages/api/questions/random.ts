import type { APIRoute } from 'astro';
import { sql } from '@vercel/postgres';

export const prerender = false;

export const GET: APIRoute = async () => {
  try {
    // Select 5 random questions from the database for the assessment
    const { rows } = await sql`
      SELECT id, topic, difficulty, text, options 
      FROM questions 
      ORDER BY RANDOM() 
      LIMIT 5;
    `;
    
    return new Response(JSON.stringify(rows), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } catch (error: any) {
    console.error('Failed to fetch randomized questions:', error);
    
    // Provide fallback questions if the database is not provisioned or crashes
    const fallback = [
      {
        id: -1,
        topic: "Fallback Mode",
        difficulty: "Medium",
        text: "資料庫尚未連接。當客戶提出『我要一個能寫公文的 AI』時，你的第一步是？",
        options: [
          { text: "立刻挑選開源 LLM 並開始微調", score: 0 },
          { text: "尋找現成的 SaaS 服務", score: 3 },
          { text: "拆解『寫公文』的流程，釐清退件率最高的情境", score: 10 }
        ]
      }
    ];

    return new Response(JSON.stringify(fallback), {
      status: 200, // Returning 200 with fallback so the UI handles it gracefully
      headers: { 'Content-Type': 'application/json' }
    });
  }
};

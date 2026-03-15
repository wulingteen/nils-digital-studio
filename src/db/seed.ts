import { sql } from '@vercel/postgres';
import fs from 'fs';
import path from 'path';

export async function seedQuestions() {
  try {
    const filePath = path.join(process.cwd(), 'src', 'db', 'questions.json');
    const data = fs.readFileSync(filePath, 'utf8');
    const questions = JSON.parse(data);

    console.log(`Seeding ${questions.length} questions...`);

    // Clear existing questions to avoid duplicates on re-run
    await sql`TRUNCATE TABLE questions RESTART IDENTITY CASCADE;`;

    for (const q of questions) {
      await sql`
        INSERT INTO questions (topic, difficulty, text, options)
        VALUES (${q.topic}, ${q.difficulty}, ${q.text}, ${JSON.stringify(q.options)}::jsonb);
      `;
    }

    console.log("Questions seeded successfully!");
  } catch (error) {
    console.error("Error seeding setup:", error);
    process.exit(1);
  }
}

if (import.meta.url === `file://${process.argv[1]}`) {
  seedQuestions().then(() => process.exit(0)).catch(() => process.exit(1));
}

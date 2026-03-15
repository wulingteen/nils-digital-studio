import { sql } from '@vercel/postgres';

export async function createTables() {
  try {
    console.log("Creating Users table...");
    await sql`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        email VARCHAR(255) UNIQUE NOT NULL,
        name VARCHAR(255),
        image VARCHAR(255),
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      );
    `;

    console.log("Creating User Preferences table...");
    await sql`
      CREATE TABLE IF NOT EXISTS user_preferences (
        user_id INTEGER PRIMARY KEY REFERENCES users(id) ON DELETE CASCADE,
        newsletter_subscribed BOOLEAN DEFAULT false,
        viewed_articles JSONB DEFAULT '[]'::jsonb,
        updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      );
    `;

    console.log("Creating Questions table...");
    await sql`
      CREATE TABLE IF NOT EXISTS questions (
        id SERIAL PRIMARY KEY,
        topic VARCHAR(100),
        difficulty VARCHAR(50),
        text TEXT NOT NULL,
        options JSONB NOT NULL
      );
    `;

    console.log("Creating Assessment Records table...");
    await sql`
      CREATE TABLE IF NOT EXISTS user_assessments (
        id SERIAL PRIMARY KEY,
        user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
        score INTEGER NOT NULL,
        capability_gaps JSONB,
        completed_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      );
    `;

    console.log("All tables created successfully!");
  } catch (error) {
    console.error("Error creating tables:", error);
    throw error;
  }
}

// Execute if run directly
if (import.meta.url === `file://${process.argv[1]}`) {
  createTables().then(() => process.exit(0)).catch(() => process.exit(1));
}

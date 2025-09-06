import { readFileSync } from 'fs';
import pg from 'pg';
const { Client } = pg;

async function main() {
  const conn = process.env.POSTGRES_URL;
  if (!conn) {
    console.error('POSTGRES_URL not set');
    process.exit(1);
  }

  const sql = readFileSync('./scripts/create_supabase_contacts_table.sql', 'utf8');

  const client = new Client({ connectionString: conn });
  try {
    await client.connect();
    console.log('Connected to Postgres, running SQL...');
    await client.query(sql);
    console.log('SQL executed successfully');
    await client.end();
    process.exit(0);
  } catch (err) {
    console.error('Error executing SQL:', err);
    try { await client.end(); } catch(e) {}
    process.exit(1);
  }
}

main();

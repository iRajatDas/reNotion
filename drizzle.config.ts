import type { Config } from "drizzle-kit";
import * as dotenv from "dotenv";
dotenv.config({ path: __dirname + "/.env" });

if (!process.env.DATABASE_URL) {
  throw new Error("🔴 ABORTING: Missing DATABASE_URL");
}

export default {
  schema: "./src/lib/supabase/schema.ts",
  out: "./migrations",
  driver: "pg",
  dbCredentials: {
    connectionString: process.env.DATABASE_URL,
  },
} satisfies Config;

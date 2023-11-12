import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "./schema";
import { migrate } from "drizzle-orm/postgres-js/migrator";

if (!process.env.DATABASE_URL) {
  throw new Error("🔴 ABORTING: Missing DATABASE_URL");
}

const client = postgres(process.env.DATABASE_URL);
const db = drizzle(client, { schema });

const migrateDB = async () => {
  console.log("🟠 Migrating client");
  try {
    await migrate(db, {
      migrationsFolder: "migrations",
    });
    console.log("🟢 Migrated client");
  } catch (error) {
    console.log("🔴 Error Migration ", error);
  }
};

migrateDB();

export default db;

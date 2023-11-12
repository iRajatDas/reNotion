import * as dotenv from "dotenv";
dotenv.config({ path: __dirname + "/.env" });

import * as zod from "zod";

const envSchema = zod.object({
  DATABASE_URL: zod.string(),
  NEXT_PUBLIC_SUPABASE_URL: zod.string(),
  NEXT_PUBLIC_SUPABASE_ANON_KEY: zod.string(),
  SERVICE_ROLE_KEY: zod.string(),
  SUPABASE_DB_PASSWORD: zod.string(),
  NEXT_PUBLIC_SITE_URL: zod.string(),
  NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY: zod.string(),
  STRIPE_SECRET_KEY: zod.string(),
  STRIPE_WEBHOOK_SECRET: zod.string(),
});

export const env = envSchema.parse(process.env);

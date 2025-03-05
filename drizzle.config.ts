import type { Config } from "drizzle-kit";

export default {
  schema: "./db/schema.ts", // ✅ Path to your schema file
  out: "./drizzle",         // ✅ Output directory for migrations
  driver: "pg",             // ✅ Use PostgreSQL driver
  dbCredentials: {
    connectionString: process.env.DATABASE_URL!, // ✅ Use environment variable
  },
} satisfies Config;

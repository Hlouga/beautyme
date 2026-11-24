import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "./schema";

// Fetch the database URL from environment variables
const connectionString = process.env.DATABASE_URL!;

// Disable prefetch as it is not supported for "Transaction" pool mode
const client = postgres(connectionString, { prepare: false });

// Initialize Drizzle with the schema so we get full TypeScript autocomplete
export const db = drizzle(client, { schema });
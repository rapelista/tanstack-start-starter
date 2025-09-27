import { drizzle } from 'drizzle-orm/neon-http';

import { schema } from './schema';

export const db = drizzle(import.meta.env.DATABASE_URL!, {
  schema,
});

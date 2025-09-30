import { betterAuth } from 'better-auth';
import { drizzleAdapter } from 'better-auth/adapters/drizzle';
import { organization } from 'better-auth/plugins';
import { reactStartCookies } from 'better-auth/react-start';
import { eq } from 'drizzle-orm';

import { db } from '~/db';
import { member } from '~/db/schema';

async function getMemberRelation(userId: string) {
  return db.query.member.findFirst({
    where: eq(member.userId, userId),
  });
}

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: 'pg',
  }),

  databaseHooks: {
    session: {
      create: {
        before: async (session) => {
          const member = await getMemberRelation(session.userId);

          return {
            data: {
              ...session,
              activeOrganizationId: member?.organizationId,
            },
          };
        },
      },
    },
  },

  emailAndPassword: {
    enabled: true,
  },

  plugins: [organization(), reactStartCookies()],
});

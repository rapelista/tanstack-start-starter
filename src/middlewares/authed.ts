import { redirect } from '@tanstack/react-router';
import { createMiddleware } from '@tanstack/react-start';

import { auth } from '~/lib/auth/server';

export const authedMiddleware = createMiddleware().server(
  async ({ next, request }) => {
    const session = await auth.api.getSession({
      headers: request.headers,
    });

    if (session === null) {
      throw redirect({ to: '/sign-in' });
    }

    return next({
      context: {
        ...session,
      },
    });
  },
);

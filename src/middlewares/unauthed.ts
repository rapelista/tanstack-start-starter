import { redirect } from '@tanstack/react-router';
import { createMiddleware } from '@tanstack/react-start';

import { auth } from '~/lib/auth/server';

export const unauthedMiddleware = createMiddleware().server(
  async ({ next, request }) => {
    const session = await auth.api.getSession({
      headers: request.headers,
    });

    if (session !== null) {
      throw redirect({ to: '/products' });
    }

    return next();
  },
);

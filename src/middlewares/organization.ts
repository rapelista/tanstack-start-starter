import { redirect } from '@tanstack/react-router';
import { createMiddleware } from '@tanstack/react-start';

import { auth } from '~/lib/auth/server';

export const organizationMiddleware = createMiddleware().server(
  async ({ next, request, pathname }) => {
    const organizations = await auth.api.listOrganizations({
      headers: request.headers,
    });

    if (organizations.length === 0 && pathname !== '/setup') {
      throw redirect({ to: '/setup' });
    }

    return next();
  },
);

export const mustHaveNotOrganizationMiddleware = createMiddleware().server(
  async ({ next, request }) => {
    const organizations = await auth.api.listOrganizations({
      headers: request.headers,
    });

    if (organizations.length > 0) {
      throw redirect({ to: '/dashboard' });
    }

    return next();
  },
);

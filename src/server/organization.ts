import { createServerFn } from '@tanstack/react-start';
import { getRequestHeaders } from '@tanstack/react-start/server';

import { auth } from '~/lib/auth/server';

export const getOrganizationsServerFn = createServerFn({
  method: 'GET',
}).handler(async () => {
  const headers = getRequestHeaders();

  const organizations = await auth.api.listOrganizations({
    headers,
  });

  return organizations;
});

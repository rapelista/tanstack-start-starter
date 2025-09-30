import { queryOptions } from '@tanstack/react-query';

import { authClient } from '~/lib/auth/client';

export const organizationMemberQueries = {
  list: queryOptions({
    queryKey: [['organization', 'members']],
    queryFn: () => authClient.organization.listMembers(),
  }),
};

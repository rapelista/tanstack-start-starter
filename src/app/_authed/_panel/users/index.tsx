import { useQuery } from '@tanstack/react-query';
import { createFileRoute } from '@tanstack/react-router';

import { organizationMemberQueries } from '~/utils/queries/organization-member';

export const Route = createFileRoute('/_authed/_panel/users/')({
  component: RouteComponent,
});

function RouteComponent() {
  const { data } = useQuery(organizationMemberQueries.list);

  return (
    <div className="space-y-4">
      <h1>Manage Users</h1>
      <hr />
      <ul className="list-decimal list-inside">
        {data?.data?.members.map((member) => (
          <li key={member.id}>{member.user.name}</li>
        ))}
      </ul>
    </div>
  );
}

import { authClient } from '~/lib/auth/client';

export function NavOrganization() {
  const { data } = authClient.useListOrganizations();

  return data?.slice(0, 1).map((organization) => (
    <div
      key={organization.id}
      className="grid flex-1 text-left text-sm leading-tight gap-0.5"
    >
      <span className="truncate font-medium">{organization.name}</span>
      <span className="truncate text-xs font-light">Standard Plan</span>
    </div>
  ));
}

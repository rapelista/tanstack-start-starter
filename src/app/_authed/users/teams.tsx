import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_authed/users/teams')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <p>Groups/Teams</p>
    </div>
  );
}

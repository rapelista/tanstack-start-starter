import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_authed/users/bulk')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <h1>Import & Export</h1>
    </div>
  );
}

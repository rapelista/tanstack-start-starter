import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_authed/_panel/users/bulk')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <h1>Import & Export</h1>
    </div>
  );
}

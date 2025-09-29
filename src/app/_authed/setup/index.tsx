import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_authed/setup/')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <p>Setup Organization</p>
    </div>
  );
}

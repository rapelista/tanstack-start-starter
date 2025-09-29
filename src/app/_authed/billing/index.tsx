import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_authed/billing/')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <p>Billing</p>
    </div>
  );
}

import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_authed/notifications/')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <p>Notifications</p>
    </div>
  );
}

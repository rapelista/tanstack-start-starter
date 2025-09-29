import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_authed/account/')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <p>Account Settings</p>
    </div>
  );
}

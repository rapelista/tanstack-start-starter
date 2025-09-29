import { createFileRoute, Outlet } from '@tanstack/react-router';

import { SignOutButton } from '~/components/sign-out/button';
import { authedMiddleware } from '~/middlewares/authed';

export const Route = createFileRoute('/_authed')({
  component: RouteComponent,
  server: {
    middleware: [authedMiddleware],
  },
});

function RouteComponent() {
  return (
    <div>
      <SignOutButton />

      <Outlet />
    </div>
  );
}

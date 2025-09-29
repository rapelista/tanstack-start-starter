import { Outlet, createFileRoute } from '@tanstack/react-router';

import { authedMiddleware } from '~/middlewares/authed';

export const Route = createFileRoute('/_authed')({
  component: RouteComponent,
  server: {
    middleware: [authedMiddleware],
  },
});

function RouteComponent() {
  return <Outlet />;
}

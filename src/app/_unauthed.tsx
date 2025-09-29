import { createFileRoute, Outlet } from '@tanstack/react-router';

import { unauthedMiddleware } from '~/middlewares/unauthed';

export const Route = createFileRoute('/_unauthed')({
  component: RouteComponent,
  server: {
    middleware: [unauthedMiddleware],
  },
});

function RouteComponent() {
  return <Outlet />;
}

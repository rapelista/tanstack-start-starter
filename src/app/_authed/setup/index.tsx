import { createFileRoute } from '@tanstack/react-router';

import { SetupForm } from '~/components/_authed/setup/form';
import { mustHaveNotOrganizationMiddleware } from '~/middlewares/organization';

export const Route = createFileRoute('/_authed/setup/')({
  component: RouteComponent,
  server: {
    middleware: [mustHaveNotOrganizationMiddleware],
  },
});

function RouteComponent() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex flex-1 flex-col justify-center px-4 py-10 lg:px-6">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <div className="flex items-center space-x-1.5">
            <p className="font-medium text-lg text-foreground dark:text-foreground">
              Gvstang
            </p>
          </div>
          <h3 className="mt-6 text-lg font-semibold text-foreground dark:text-foreground">
            Setup your organization
          </h3>

          <p className="mt-2 text-sm text-muted-foreground dark:text-muted-foreground">
            Please provide your organization details to get started
          </p>

          <SetupForm />
        </div>
      </div>
    </div>
  );
}

import { createFileRoute, Link } from '@tanstack/react-router';

import { Button } from '~/components/ui/button';
import { Input } from '~/components/ui/input';
import { Label } from '~/components/ui/label';

export const Route = createFileRoute('/reset-password')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex flex-1 flex-col justify-center px-4 py-10 lg:px-6">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <div className="flex items-center space-x-1.5">
            <p className="font-medium text-lg text-foreground dark:text-foreground">
              Acme
            </p>
          </div>
          <h3 className="mt-6 text-lg font-semibold text-foreground dark:text-foreground">
            Reset your password
          </h3>
          <p className="mt-2 text-sm text-muted-foreground dark:text-muted-foreground">
            Don&apos;t have an account?{' '}
            <Link
              className="font-medium text-primary hover:text-primary/90 dark:text-primary hover:dark:text-primary/90"
              to="/sign-up"
            >
              Sign up
            </Link>
          </p>

          <form action="#" className="mt-6 space-y-4" method="post">
            <div>
              <Label
                className="text-sm font-medium text-foreground dark:text-foreground"
                htmlFor="email-login-04"
              >
                Email
              </Label>
              <Input
                autoComplete="email"
                className="mt-2"
                id="email-login-04"
                name="email-login-04"
                placeholder="ephraim@blocks.so"
                type="email"
              />
            </div>

            <Button className="mt-4 w-full py-2 font-medium" type="submit">
              Send reset link
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}

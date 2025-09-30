import { createFileRoute, Link } from '@tanstack/react-router';
import { zodValidator } from '@tanstack/zod-adapter';
import { z } from 'zod';

import { SignInForm } from '~/components/_unauthed/sign-in/form';
import { Button } from '~/components/ui/button';
import { Separator } from '~/components/ui/separator';
import { Facebook } from '~/components/ui/svgs/facebook';
import { Google } from '~/components/ui/svgs/google';

const SignInSearchSchema = z
  .object({
    error_code: z.string().optional(),
    redirect_to: z.string().optional(),
  })
  .optional();

export const Route = createFileRoute('/_unauthed/sign-in/')({
  component: RouteComponent,
  validateSearch: zodValidator(SignInSearchSchema),
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
            Sign in to your account
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
          <div className="mt-8 flex flex-row items-center gap-4 @container">
            <Button
              asChild
              className="flex-1 items-center justify-center space-x-2 py-2"
              variant="outline"
            >
              <a href="#">
                <Facebook />
                <span className="text-sm font-medium">
                  <span className="@max-md:hidden">Sign in with </span>
                  Facebook
                </span>
              </a>
            </Button>
            <Button
              asChild
              className="flex-1 items-center justify-center space-x-2 py-2"
              variant="outline"
            >
              <a href="#">
                <Google className="w-4 h-4 [&>path]:fill-current" />
                <span className="text-sm font-medium">
                  <span className="@max-md:hidden">Sign in with </span>Google
                </span>
              </a>
            </Button>
          </div>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <Separator className="w-full" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                or
              </span>
            </div>
          </div>

          <SignInForm />

          <p className="mt-6 text-sm text-muted-foreground dark:text-muted-foreground">
            Forgot your password?{' '}
            <Link
              className="font-medium text-primary hover:text-primary/90 dark:text-primary hover:dark:text-primary/90"
              to="/reset-password"
            >
              Reset password
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

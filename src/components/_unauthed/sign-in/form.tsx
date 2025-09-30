import { revalidateLogic, useForm } from '@tanstack/react-form';
import { useRouter, useSearch } from '@tanstack/react-router';

import { FieldInfo } from '~/components/field-info';
import { Button } from '~/components/ui/button';
import { Input } from '~/components/ui/input';
import { Label } from '~/components/ui/label';
import { authClient, signIn } from '~/lib/auth/client';
import { SignInPayload, SignInSchema } from '~/utils/schemas/sign-in';

import { SignInError } from './error';

export function SignInForm() {
  const router = useRouter();
  const search = useSearch({ from: '/_unauthed/sign-in/' });

  const form = useForm({
    defaultValues: {
      email: '',
      password: '',
    } satisfies SignInPayload,

    validationLogic: revalidateLogic(),

    validators: {
      onDynamic: SignInSchema,
    },

    onSubmit: async ({ value }) => {
      const { error } = await signIn.email(value);

      if (error) {
        router.navigate({
          to: '/sign-in',
          search: (old) => ({
            ...old,
            error_code: error.code,
          }),
        });
      } else {
        const { data } = await authClient.organization.list();
        const hasOrganizations = data && data.length > 0;

        if (hasOrganizations) {
          router.navigate({ to: '/setup' });
        }

        const redirectTo = search?.redirect_to;

        router.navigate({
          to:
            redirectTo === '/setup' && hasOrganizations
              ? '/dashboard'
              : (redirectTo ?? '/dashboard'),
        });
      }
    },
  });

  return (
    <form
      className="mt-6 space-y-4"
      onSubmit={(e) => {
        e.preventDefault();
        form.handleSubmit();
      }}
    >
      <div>
        <form.Field name="email">
          {(field) => (
            <div>
              <Label
                className="text-sm font-medium text-foreground dark:text-foreground"
                htmlFor={field.name}
              >
                Email
              </Label>

              <Input
                className="mt-2"
                id={field.name}
                name={field.name}
                placeholder="your-email@example.com"
                type="email"
                onBlur={field.handleBlur}
                onChange={(e) => field.handleChange(e.target.value)}
              />

              <FieldInfo field={field} />
            </div>
          )}
        </form.Field>
      </div>

      <form.Field name="password">
        {(field) => (
          <div>
            <Label
              className="text-sm font-medium text-foreground dark:text-foreground"
              htmlFor={field.name}
            >
              Password
            </Label>

            <Input
              className="mt-2"
              defaultValue={field.state.value}
              id={field.name}
              name={field.name}
              placeholder="********"
              type="password"
              onBlur={field.handleBlur}
              onChange={(e) => field.handleChange(e.target.value)}
            />

            <FieldInfo field={field} />
          </div>
        )}
      </form.Field>

      {search?.error_code !== undefined && (
        <SignInError code={search.error_code} />
      )}

      <form.Subscribe>
        {({ isSubmitting }) => (
          <Button
            className="mt-4 w-full py-2 font-medium"
            disabled={isSubmitting}
            type="submit"
          >
            Sign in
          </Button>
        )}
      </form.Subscribe>
    </form>
  );
}

import { revalidateLogic, useForm } from '@tanstack/react-form';
import { useRouter, useSearch } from '@tanstack/react-router';

import { FieldInfo } from '~/components/field-info';
import { Button } from '~/components/ui/button';
import { Input } from '~/components/ui/input';
import { Label } from '~/components/ui/label';
import { signUp } from '~/lib/auth/client';
import { SignUpPayload, SignUpSchema } from '~/utils/schemas/sign-up';

import { SignUpError } from './error';

export function SignUpForm() {
  const router = useRouter();
  const search = useSearch({ from: '/_unauthed/sign-up/' });

  const form = useForm({
    defaultValues: {
      email: '',
      password: '',
      name: '',
    } satisfies SignUpPayload,

    validationLogic: revalidateLogic(),

    validators: {
      onDynamic: SignUpSchema,
    },

    onSubmit: async ({ value }) => {
      const { error } = await signUp.email(value);

      if (error) {
        router.navigate({
          to: '/sign-up',
          search: (old) => ({
            ...old,
            error_code: error.code,
          }),
        });
      } else {
        router.navigate({ to: '/products' });
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
        <form.Field name="name">
          {(field) => (
            <div>
              <Label
                className="text-sm font-medium text-foreground dark:text-foreground"
                htmlFor={field.name}
              >
                Name
              </Label>

              <Input
                className="mt-2"
                id={field.name}
                name={field.name}
                placeholder="John Doe"
                type="text"
                onBlur={field.handleBlur}
                onChange={(e) => field.handleChange(e.target.value)}
              />

              <FieldInfo field={field} />
            </div>
          )}
        </form.Field>
      </div>

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

      <div>
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
      </div>

      {search?.error_code !== undefined && (
        <SignUpError code={search.error_code} />
      )}

      <form.Subscribe>
        {({ isSubmitting }) => (
          <Button
            className="mt-4 w-full py-2 font-medium"
            disabled={isSubmitting}
            type="submit"
          >
            Sign up
          </Button>
        )}
      </form.Subscribe>
    </form>
  );
}

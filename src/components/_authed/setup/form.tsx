import { revalidateLogic, useForm } from '@tanstack/react-form';
import { useNavigate } from '@tanstack/react-router';

import { FieldInfo } from '~/components/field-info';
import { Button } from '~/components/ui/button';
import { Input } from '~/components/ui/input';
import { Label } from '~/components/ui/label';
import { authClient } from '~/lib/auth/client';
import {
  type CreateOrganizationPayload,
  CreateOrganizationSchema,
} from '~/utils/schemas/organization';

export function SetupForm() {
  const navigate = useNavigate();

  const form = useForm({
    defaultValues: {
      name: '',
    } satisfies CreateOrganizationPayload,

    validationLogic: revalidateLogic(),

    validators: {
      onDynamic: CreateOrganizationSchema,
    },

    onSubmit: async () => {
      const { data } = await authClient.organization.list();

      if (typeof data?.length === 'number' && data.length > 0) {
        navigate({ to: '/dashboard' });
      } else {
        await authClient.organization.create({
          name: 'My Organization',
          slug: new Date().getTime().toString(),
          fetchOptions: {
            onSuccess: () => navigate({ to: '/dashboard' }),
          },
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

      <form.Subscribe>
        {({ isSubmitting }) => (
          <Button
            className="mt-4 w-full py-2 font-medium"
            disabled={isSubmitting}
            type="submit"
          >
            Create Organization
          </Button>
        )}
      </form.Subscribe>
    </form>
  );
}

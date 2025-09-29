import { useRouter } from '@tanstack/react-router';

import { Button } from '~/components/ui/button';
import { authClient } from '~/lib/auth/client';

export function SignOutButton() {
  const router = useRouter();

  return (
    <Button
      onClick={async () => {
        authClient.signOut({
          fetchOptions: {
            onSuccess: () => router.navigate({ to: '/sign-in' }),
          },
        });
      }}
    >
      Sign out
    </Button>
  );
}

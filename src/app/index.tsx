import { createFileRoute, Link } from '@tanstack/react-router';

import { Button } from '~/components/ui/button';

export const Route = createFileRoute('/')({
  component: RouteComponent,
  head: () => ({
    meta: [
      {
        title: 'Home - Gvstang',
      },
    ],
  }),
});

function RouteComponent() {
  return (
    <div>
      <div>Hello &ldquo;/&rdquo;!</div>
      <Button asChild>
        <Link to="/about">Click Me</Link>
      </Button>
    </div>
  );
}

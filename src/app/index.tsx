import { createFileRoute } from '@tanstack/react-router';

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
  return <div>Hello &ldquo;/&rdquo;!</div>;
}

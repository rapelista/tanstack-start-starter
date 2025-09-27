import { createFileRoute, Link } from '@tanstack/react-router';

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
      <hr />
      <p>
        You can sign in{' '}
        <Link className="text-[var(--chart-1)]" to="/sign-in">
          here
        </Link>
      </p>
    </div>
  );
}

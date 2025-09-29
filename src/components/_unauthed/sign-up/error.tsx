interface SignUpErrorProps {
  code: string;
}

export function SignUpError({ code }: SignUpErrorProps) {
  const getMessage = (code: string) => {
    switch (code) {
      case 'INVALID_EMAIL_OR_PASSWORD':
        return 'Invalid email or password.';

      default:
        return 'Something went wrong. Please try again.';
    }
  };

  return <p className="text-sm text-destructive">{getMessage(code)}</p>;
}

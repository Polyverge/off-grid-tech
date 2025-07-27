import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { redirect } from 'next/navigation';

export default function Page() {
  const redirectUrl = 'app/[type]/location';
  redirect(redirectUrl);
  return (
    <section className="flex flex-col text-center">
      <h1 className="mb-6">You'll be redirected shortly</h1>
      <Link href={redirectUrl}>
        <Button>Start here</Button>
      </Link>
    </section>
  );
}

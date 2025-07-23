import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <section
      id="main"
      className="flex flex-col h-[100vh] items-center justify-center"
    >
      <h1 className="text-2xl mb-8 font-bold uppercase">Ready to be free?</h1>
      <Link href={'app'}>
        <Button className="cursor-pointer">Start here</Button>
      </Link>
    </section>
  );
}

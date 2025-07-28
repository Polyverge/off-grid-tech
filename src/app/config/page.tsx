import { Button } from '@/components/ui/button';
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { steps } from '@/features/prodcut/configurator/constants/navigation';
import { Waves, Home, Car, House } from 'lucide-react';
import Link from 'next/link';

const cards = [
  {
    title: 'House',
    description: (
      <>
        Don't want to be dependend on the grid or planning to just lower your
        bill? <span className="font-semibold">Get started!</span>
      </>
    ),
    href: steps[1].children[0].href,
    Icon: House,
  },
  {
    title: 'RV, Van or mobile home',
    description: (
      <>
        Planning on being on the road and need some juice to run your devices?{' '}
        <span className="font-semibold">Start here!</span>
      </>
    ),
    href: steps[2].children[0].href,
    Icon: Car,
  },
  {
    title: 'Boat',
    description: (
      <>
        Dreaming of sailing the world amd survive the deep blue?{' '}
        <span className="font-semibold">Start now!</span>
      </>
    ),
    href: steps[3].children[0].href,
    Icon: Waves,
  },
];

function Page() {
  const iconSize = '30';
  return (
    <div className="flex justify-center gap-20 items-center">
      <section id="headline" className="mb-6">
        <h2 className="font-bold text-3xl mb-4">
          What kind of electrical setup do you need?
        </h2>
        <h3 className="font-normal text-lg text-muted-foreground">
          Choose a system to get started. Whether you're building a full
          off-grid power solution or customizing a small setup, we'll walk you
          through everything step by step.
        </h3>
      </section>
      <section id="selection" className="grid grid-cols-2 grid-rows-2 gap-4">
        {cards.map((card, index) => (
          <Card key={index} className="w-full max-w-sm">
            <CardHeader>
              <CardTitle>{card.title}</CardTitle>
              <CardDescription>{card.description}</CardDescription>
            </CardHeader>
            <CardFooter>
              <Link className="w-full" href={card.href}>
                <Button type="submit" className="w-full">
                  Configure
                  <card.Icon className="ml-3" size={iconSize} />
                </Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </section>
    </div>
  );
}

export default Page;

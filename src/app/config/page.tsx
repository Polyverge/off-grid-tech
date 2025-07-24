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
    <>
      <section id="headline" className="mb-6 text-center">
        <h2 className="font-bold text-2xl mb-2">
          What would you like to configure?
        </h2>
        <h3 className="font-normal mb-10">
          Tell us what you would like to configure and we can get started
        </h3>
      </section>
      <section id="selection" className="flex gap-4">
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
    </>
  );
}

export default Page;

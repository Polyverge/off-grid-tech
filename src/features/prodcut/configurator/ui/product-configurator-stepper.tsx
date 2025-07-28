import Link from 'next/link';
import { Fragment } from 'react';
import { steps } from '../constants/navigation';
import { House } from 'lucide-react';

interface ProductConfiguratorStepperParams {
  pathname: string;
}

const line = (iActivePath: boolean) => (
  <>
    <span
      className={`border-t border-white grow last:hidden ${iActivePath ? 'border-black' : 'border-gray-300'}`}
    >
      &nbsp;
    </span>
  </>
);

function ProductConfiguratorStepper({
  pathname,
}: ProductConfiguratorStepperParams) {
  const iActivePath = (href: string) => pathname === href;
  const matchParentPath = /\/config\/[house|boat|rv]*/g;
  const parentPath = pathname.match(matchParentPath)?.[0] || '';
  const activePath =
    steps[steps.findIndex(({ href }) => href === parentPath)]?.children;

  return (
    <section
      id="stepper"
      className="flex mb-20 mt-10 gap-4 justify-between items-center"
    >
      {activePath?.map(({ href, name, Icon }, index) => (
        <Fragment key={href}>
          <Link
            className={`flex flex-col items-center cursor-pointer`}
            href={href}
          >
            <Icon />
            <p className="font-mb mt-2">{name}</p>
          </Link>
          {line(iActivePath(href))}
          <p
            className={`flex p-4 mb-6 items-center justify-center font-mb w-5 h-5 rounded-full hover:bg-blue-400 hover:text-white ${iActivePath(href) ? 'bg-blue-600 text-white' : 'bg-gray-500'}`}
          >
            {index + 1}
          </p>
          {line(iActivePath(href))}
        </Fragment>
      ))}
    </section>
  );
}

export { ProductConfiguratorStepper };

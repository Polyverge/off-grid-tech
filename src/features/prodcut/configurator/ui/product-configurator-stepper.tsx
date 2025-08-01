import Link from 'next/link';
import { Fragment } from 'react';
import { steps } from '../constants/navigation';
import { House } from 'lucide-react';
import { findActivePath } from '../utils/navigation';

interface ProductConfiguratorStepperParams {
  pathname: string;
}

const line = (active: boolean) => (
  <div className={`h-0.5 flex-1 ${active ? 'bg-white' : 'bg-gray-600'}`}></div>
);

function ProductConfiguratorStepper({
  pathname,
}: ProductConfiguratorStepperParams) {
  const iActivePath = (href: string) => pathname === href;

  return (
    <section
      id="stepper"
      className="flex mb-10 lg:mb-20 mt-5 gap-4 justify-between items-center w-full"
    >
      {findActivePath(pathname, steps)?.map(({ href, name, Icon }, index) => (
        <Fragment key={href}>
          <Link
            className="flex flex-col items-center cursor-pointer"
            href={href}
          >
            <Icon
              className={
                iActivePath(href) ? 'stroke-blue-600' : 'stroke-primary'
              }
            />
            <p className="font-mb mt-2 hidden md:block  ">{name}</p>
          </Link>

          <div className="flex items-center flex-1 last:hidden">
            {line(iActivePath(href))}
            <p
              className={`p-4 mx-5 hidden lg:flex cursor-pointer items-center justify-center font-mb w-5 h-5 rounded-full z-10 hover:bg-blue-400 hover:text-white ${
                iActivePath(href)
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-500 text-white'
              }`}
            >
              {index + 1}
            </p>
            {line(iActivePath(href))}
          </div>
        </Fragment>
      ))}
    </section>
  );
}

export { ProductConfiguratorStepper };

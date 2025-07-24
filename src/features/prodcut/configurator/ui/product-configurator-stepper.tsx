import Link from 'next/link';
import { Fragment } from 'react';
import {steps} from '../constants/navigation'

interface ProductConfiguratorStepperParams {
  pathname: string;
}

function ProductConfiguratorStepper({
  pathname,
}: ProductConfiguratorStepperParams) {
  const iActivePath = (href: string) => pathname === href;
  return (
    <section
      id="stepper"
      className="flex ml-mb gap-4 justify-between items-center"
    >
      {steps.map(({ href, name }, index) => (
        <Fragment key={href}>
          <Link
            className={`flex flex-col items-center cursor-pointer`}
            href={href}
          >
            <p
              className={`flex p-4 items-center justify-center font-mb text-black w-5 h-5 rounded-full hover:bg-blue-400 hover:text-white ${iActivePath(href) ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
            >
              {index + 1}
            </p>
            <p className="font-mb text-black">{name}</p>
          </Link>
          <span
            className={`border-t border-black grow last:hidden ${iActivePath(href) ? 'border-black' : 'border-gray-300'}`}
          >
            &nbsp;
          </span>
        </Fragment>
      ))}
    </section>
  );
}

export { ProductConfiguratorStepper };

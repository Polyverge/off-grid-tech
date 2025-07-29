'use client';
import { Button } from '@/components/ui/button';
import { steps } from '@/features/prodcut/configurator/constants/navigation';
import { ProductConfiguratorStepper } from '@/features/prodcut/configurator/ui/product-configurator-stepper';
import { findActivePath } from '@/features/prodcut/configurator/utils/navigation';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const activePath = findActivePath(pathname, steps);
  const acitveIndex = activePath.findIndex(({ href }) => href === pathname);
  const nextLink = activePath[acitveIndex + 1]?.href || '';
  const backLink = activePath[acitveIndex - 1]?.href || '';

  return (
    <div className="md:mx-50 p-6 ">
      {pathname !== '/cofig' && (
        <ProductConfiguratorStepper {...{ pathname }} />
      )}
      <section className="flex flex-col gap-5 md:flex-row justify-center md:gap-50 items-center">
        {children}
      </section>
      <nav className="flex justify-between mt-15">
        <Link href={backLink}>
          <Button disabled={!nextLink} variant={'secondary'}>
            Back
          </Button>
        </Link>
        <Link href={nextLink}>
          <Button disabled={!nextLink}>Next</Button>
        </Link>
      </nav>
    </div>
  );
}

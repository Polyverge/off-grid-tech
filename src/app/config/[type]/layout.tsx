'use client';
import { Button } from '@/components/ui/button';
import { steps } from '@/features/prodcut/configurator/constants/navigation';
import { ProductConfiguratorStepper } from '@/features/prodcut/configurator/ui/product-configurator-stepper';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const activeStepIndex = steps.findIndex(({ href }) => pathname === href);
  const backLink = steps[activeStepIndex - 1]?.children[0]?.href || '';
  const nextLink = steps[activeStepIndex + 1]?.children[0]?.href || '';

  return (
    <div className="mx-50 p-6 ">
      {pathname !== '/cofig' && (
        <ProductConfiguratorStepper {...{ pathname }} />
      )}
      <section className="flex justify-center gap-50 items-center">
        {children}
      </section>
      <nav className="flex justify-between mt-15">
        <Link href={backLink}>
          <Button disabled={!!nextLink} variant={'secondary'}>
            Back
          </Button>
        </Link>
        <Link href={nextLink}>
          <Button disabled={!!nextLink}>Next</Button>
        </Link>
      </nav>
    </div>
  );
}

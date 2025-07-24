'use client'
import { Button } from "@/components/ui/button";
import { steps } from "@/features/prodcut/configurator/constants/navigation";
import { ProductConfiguratorStepper } from "@/features/prodcut/configurator/ui/product-configurator-stepper";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const activeStepIndex = steps.findIndex(({ href }) => pathname === href);
  const backLink = steps[activeStepIndex - 1]?.children[0]?.href || '';
  const nextLink = steps[activeStepIndex + 1]?.children[0]?.href || '';

  return (
    <div className="max-w-6xl mx-auto p-6">
      {pathname !== '/cofig' && (
        <ProductConfiguratorStepper
          {...{ pathname }}
        />
      )}
      <main className="mt-6">{children}</main>
      <nav className="flex justify-between mt-6">
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

export default Layout;
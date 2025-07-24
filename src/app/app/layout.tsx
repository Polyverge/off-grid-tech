'use client'
import { Button } from "@/components/ui/button";
import { steps } from "@/features/prodcut/configurator/constants/navigation";
import { ProductConfiguratorStepper } from "@/features/prodcut/configurator/ui/product-configurator-stepper";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const activeStepIndex = steps.findIndex(({ href }) => pathname === href);
  const backLink = steps[activeStepIndex - 1]?.href || '';
  const nextLink = steps[activeStepIndex + 1]?.href || '';
  
  return (
    <div className="max-w-2xl mx-auto p-6">
      <ProductConfiguratorStepper {...{ pathname }} />
      <main className="mt-6">{children}</main>
      <h1></h1>
      <nav className="flex justify-between mt-5">
        <Link href={backLink}>
          <Button disabled={!!nextLink} variant={'secondary'}>
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

export default Layout;
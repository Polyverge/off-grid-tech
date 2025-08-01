import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { Zap } from "lucide-react";
import Link from "next/link";

export default function Header() {
    return (
      <header className="sticky justify-items-center top-0 z-50 border-white border-b-1 w-full shadow-gray-900 bg-background/30 backdrop-blur">
        <div className="container flex h-16 items-center justify-between px-6 lg:px-6">
          <Link href="/" className="flex -center space-x-2">
            <Zap className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold hidden md:block">
              Off Grid Tech
            </span>
          </Link>
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="#home"
                  className={navigationMenuTriggerStyle()}
                >
                  Set Up
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="#about"
                  className={navigationMenuTriggerStyle()}
                >
                  FAQ
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="#contact"
                  className={navigationMenuTriggerStyle()}
                >
                  Contact
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Button>Login</Button>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Button variant={'secondary'}>Sign up</Button>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Mobile menu button */}
          <Button variant="ghost" size="sm" className="lg:hidden"></Button>
        </div>
      </header>
    );
}
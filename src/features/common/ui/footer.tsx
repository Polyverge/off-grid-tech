import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";

export default function Footer() {
    return (
      <footer className="fixed bottom-0 w-full">
        <NavigationMenu className="hidden lg:flex px-10 py-5">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink
                href="#home"
                className={navigationMenuTriggerStyle()}
              >
                Terms & Services
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </footer>
    );
}
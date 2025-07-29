import type { Metadata } from 'next';
import './globals.css';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Zap } from 'lucide-react';
import { ThemeProvider } from 'next-themes';

export const metadata: Metadata = {
  title: 'Simply Off Grid',
  description: 'Make electric set ups simple',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <header className="sticky justify-items-center top-0 z-50 border-white border-b-1 w-full shadow-gray-900 bg-background/30 backdrop-blur">
            <div className="container flex h-16 items-center justify-between px-6 md:px-6">
              <Link href="/" className="flex -center space-x-2">
                <Zap className="h-8 w-8 text-primary" />
                <span className="text-xl font-bold">Off Grid Tech</span>
              </Link>
              <NavigationMenu className="hidden md:flex">
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
              <Button variant="ghost" size="sm" className="md:hidden"></Button>
            </div>
          </header>
          <main>{children}</main>
          <footer className="absolute bottom-0 w-full">
            <NavigationMenu className="hidden md:flex px-10 py-5">
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
        </ThemeProvider>
      </body>
    </html>
  );
}

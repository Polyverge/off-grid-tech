import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from 'next-themes';
import Header from '@/features/common/ui/header';
import Footer from '@/features/common/ui/footer';

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
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

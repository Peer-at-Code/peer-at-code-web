import '@/styles/globals.css';

import { cn } from '@/lib/utils';
import { type ReactNode } from 'react';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr" dir="ltr" className={cn('[color-scheme:dark] scroll-smooth bg-light-dark')}>
      <head />
      <body className="relative min-h-screen">
        <main>{children}</main>
      </body>
    </html>
  );
}

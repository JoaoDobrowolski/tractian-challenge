'use client';

import type { Metadata } from 'next';
import { ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import '@styles/settings.scss';

export const meta: Metadata = {
  title: 'Tractian Frontend',
  description: 'Tractian Challenge for Frontend Role',
};

const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
      </body>
    </html>
  );
}

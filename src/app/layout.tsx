import type React from 'react';
import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/common/Header';

export const metadata: Metadata = {
  title: 'zPass | decentralized reputation',
  description: 'Decentralized reputation system for the blockchain ecosystem.',
  keywords: ['blockchain', 'reputation', 'onchain', 'AI', 'KYC', 'zPass'],
  authors: [{ name: 'zPass Team' }],
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    title: 'zPass | decentralized reputation',
    description: 'Decentralized reputation system for the blockchain ecosystem.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link
          href="https://api.fontshare.com/v2/css?f[]=clash-display@300,400,500,600,700,800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased font-clash-display">
        <Header />
        {children}
      </body>
    </html>
  );
}

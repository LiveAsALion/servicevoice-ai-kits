import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'PHX Pool Pro | Trusted Pool Service in Phoenix, AZ',
  description:
    'Connect with reliable, vetted pool service pros across the Phoenix Valley. Fast quotes, no ghosting, local experts who actually show up.',
  openGraph: {
    title: 'PHX Pool Pro | Trusted Pool Service in Phoenix, AZ',
    description:
      'Connect with reliable, vetted pool service pros across the Phoenix Valley.',
    url: 'https://phxpoolpro.com',
    siteName: 'PHX Pool Pro',
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

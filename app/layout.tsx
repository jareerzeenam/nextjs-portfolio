import type { Metadata, Viewport } from 'next';
import { Archivo } from 'next/font/google';
import './globals.css';

const archivo = Archivo({
  subsets: ['latin'],
  axes: ['wdth'],
  variable: '--font-archivo',
  display: 'swap',
});

const title = 'Jareer Zeenam, full-stack software engineer';
const description =
  'Full-stack software engineer in London with 6+ years in Laravel, Node.js, GraphQL and Next.js. Open to work and available now.';

export const metadata: Metadata = {
  metadataBase: new URL('https://jareerzeenam.me'),
  title,
  description,
  openGraph: {
    title,
    description,
    url: 'https://jareerzeenam.me',
    siteName: 'Jareer Zeenam',
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title, description },
};

export const viewport: Viewport = {
  themeColor: '#141C2B',
  colorScheme: 'dark',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-GB" className={archivo.variable}>
      <body>{children}</body>
    </html>
  );
}

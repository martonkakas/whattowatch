import type { Metadata } from 'next';
import { Space_Grotesk } from 'next/font/google';
import { Analytics } from "@vercel/analytics/next"
import './globals.css';
import BMCWidget from './bmc-widget';
import Script from 'next/script';

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "What to Watch",
  description: "If you're out of ideas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <meta name="google-adsense-account" content="ca-pub-3344265124550217" />
        <meta name="fo-verify" content="121e2b1d-ecbc-4558-a5d6-998f241a0d17" />
        <Script
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3344265124550217"
          strategy="afterInteractive"
          crossOrigin="anonymous"
        />
      </head>
      <body
        className={`${spaceGrotesk.variable} antialiased`}
      >
        {children}
        <BMCWidget />
        <Analytics />
      </body>
    </html>
  );
}

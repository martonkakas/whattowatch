import type { Metadata } from 'next';
import { Space_Grotesk } from 'next/font/google';
import { Analytics } from "@vercel/analytics/next"
import './globals.css';

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
      </head>
      <body
        className={`${spaceGrotesk.variable} antialiased`}
      >
        {children}
        <Analytics />
        <script async data-name="BMC-Widget" data-cfasync="false" src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js" data-id="martonkakas" data-description="Support me on Buy me a coffee!" data-message="Thank you for using this app. If you like it please consider donating me, to buy some AI tokens. Thanks" data-color="#FF813F" data-position="Right" data-x_margin="18" data-y_margin="18"></script>
      </body>
    </html>
  );
}

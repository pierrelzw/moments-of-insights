import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "A Little Inspiration",
  description: "Daily inspiration and motivational quotes to brighten your day",
  keywords: "inspiration, quotes, motivation, daily inspiration",
  authors: [{ name: "Your Name" }],
  creator: "Your Name",
  metadataBase: new URL('https://yourdomain.com'),
  openGraph: {
    title: "A Little Inspiration",
    description: "Daily inspiration and motivational quotes to brighten your day",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "A Little Inspiration",
    description: "Daily inspiration and motivational quotes to brighten your day",
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
  viewport: 'width=device-width, initial-scale=1',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

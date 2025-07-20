import type { Metadata } from "next";
import "./globals.css";

// 使用系统字体，避免Google Fonts CDN
const fontFamily = 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif';

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
        className="font-sans antialiased"
        style={{ fontFamily }}
      >
        {children}
      </body>
    </html>
  );
}

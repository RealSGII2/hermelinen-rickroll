import type { Metadata, Viewport } from 'next';
import { Public_Sans } from 'next/font/google';
import "./globals.css";

const fontSans = Public_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Hermelinen Logistics",
    description: "Trust Hermelinen for safe and efficient delivery."
}

export const viewport: Viewport = {
    themeColor: '#fe9001'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={fontSans.variable}>
        {children}
      </body>
    </html>
  );
}

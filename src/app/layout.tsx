import type { Metadata } from "next";
import React from 'react';
import { Inter } from "next/font/google";
import "./globals.css";
import Layout from "@/components/layout";
import { Provider as JotaiProvider } from "jotai";
import Providers from "@/utils/Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Turbo Trades",
  description: "Crypto platform using Maya",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/favicon.svg",
        href: "/favicon.svg",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/favicon.svg",
        href: "/favicon.svg",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head></head>
      <body className={inter.className} suppressHydrationWarning={true}>
        <JotaiProvider>
          <Providers>
            <Layout>
              {children}
            </Layout>
          </Providers>
        </JotaiProvider>
      </body>
    </html>
  );
}

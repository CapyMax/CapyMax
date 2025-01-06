import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { Navbar } from "@/components/NavBar";
import Provider from "@/components/Provider";

import "./globals.css";

const defaultFont = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CapyMax",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${defaultFont.className} antialiased`}
      >
        <Provider>
          <Navbar />
          {children}
        </Provider>
      </body>
    </html>
  );
}

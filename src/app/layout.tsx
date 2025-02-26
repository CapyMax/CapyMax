import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";

import { Navbar } from "@/components/NavBar";
import Provider from "@/components/Provider";
import Footer from "@/components/Footer";

import "./globals.css";

const defaultFont = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CapyMax"
};

export const viewport: Viewport = {
  interactiveWidget: 'resizes-content'
}

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
          <Footer />
        </Provider>
      </body>
    </html>
  );
}

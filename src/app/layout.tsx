"use client";
import type { Metadata, Viewport } from "next";
import React, { useState, createContext } from "react";
import { Inter } from "next/font/google";
import { Navbar } from "@/components/NavBar";
import Provider from "@/components/Provider";
import Footer from "@/components/Footer";
import "./globals.css";

const defaultFont = Inter({
  subsets: ["latin"],
});

// export const metadata: Metadata = {
//   title: "CapyMax",
// };

// export const viewport: Viewport = {
//   interactiveWidget: "resizes-content",
// };
type BackgroundContextType =
  | React.Dispatch<React.SetStateAction<string | null>>
  | undefined;
export const BackgroundContext =
  createContext<BackgroundContextType>(undefined);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [backgroundImage, setBackgroundImage] = useState<string | null>("");
  return (
    <html lang="en">
      <body className={`${defaultFont.className} antialiased`}>
        <Provider>
          <BackgroundContext.Provider value={setBackgroundImage}>
            <Navbar bgColor={backgroundImage} />
            {children}
            <Footer />
          </BackgroundContext.Provider>
        </Provider>
      </body>
    </html>
  );
}

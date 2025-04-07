// "use client";
import type { Metadata, Viewport } from "next";
import React from "react";
import { Inter } from "next/font/google";
import ClientLayout from "./ClientLayout";
import "./globals.css";

const defaultFont = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CapyMax",
};

export const viewport: Viewport = {
  interactiveWidget: "resizes-content",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${defaultFont.className} antialiased`}>
        {/* 服务端组件保留metadata和viewport */}
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}

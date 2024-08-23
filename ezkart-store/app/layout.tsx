import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";

import { cn } from "@/lib/utils";

const font = Urbanist({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "EzKart",
  description: "Your all in one E-commerce store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          font.className
        )}
      >
        {children}
      </body>
    </html>
  );
}

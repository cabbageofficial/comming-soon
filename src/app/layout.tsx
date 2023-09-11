import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ['latin'],
  variable: "--font-inter"
});

export const metadata: Metadata = {
  title: "Cabbage | The fearless programming platform"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} font-sans text-main`}>
      <body>{children}</body>
    </html>
  )
}

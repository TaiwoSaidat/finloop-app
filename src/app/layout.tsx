import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Roboto } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const roboto = Roboto({
  weight: '400',
  variable: '--font-roboto-sans',
  subsets:['latin']
})

export const metadata: Metadata = {
  title: "Finloop",
  description:
    "Is a loan management platform designed for lenders, such as microfinance institutions, banks, and digital lenders.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      className={`${geistSans.variable} ${geistMono.variable} ${roboto.variable} antialiased`}
      // className={`${roboto.variable} antialised` }
      >
        {children}
      </body>
    </html>
  );
}

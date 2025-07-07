import type { Metadata } from "next";
import { Work_Sans, Poppins, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const workSans = Work_Sans({
  subsets: ['latin'],
  variable: '--font-work-sans',
})

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

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
        // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        className={workSans.variable}
      >
        {children}
      </body>
    </html>
  );
}

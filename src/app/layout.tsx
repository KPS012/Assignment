import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/header/navbar";
import Footer from "@/components/footer/footer";

import { IBM_Plex_Sans } from 'next/font/google'

const sans = IBM_Plex_Sans({
  weight: ['400', '500', '600', '700'], 
  subsets: ['latin']
});


export const metadata: Metadata = {
  title: "Assignment App",
  description: "Assignment App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={sans.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

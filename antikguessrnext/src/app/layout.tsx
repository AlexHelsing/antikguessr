import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import { Lora } from "next/font/google";
import "./globals.css";

const inter = Lora({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Antik Guessr",
  description: "Gissa antika och vintage föremåls värde",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        {children}
      </body>
    </html>
  );
}

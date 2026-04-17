import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Thinuka Vinjaya Wickramanayaka",
  description: "personal portfolio website.",
};

import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased dark scroll-smooth`}>
      <body className="min-h-screen bg-background text-foreground bg-[#121212] overflow-x-hidden w-full relative flex flex-col cursor-none">
        <CustomCursor />
        <div className="flex-grow flex flex-col w-full relative">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}

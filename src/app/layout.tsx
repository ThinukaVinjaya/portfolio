import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Creative Developer | Portfolio",
  description: "High-end scrollytelling personal portfolio website.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased dark scroll-smooth`}>
      <body className="min-h-screen bg-background text-foreground bg-[#121212] overflow-x-hidden w-full relative">
        {children}
      </body>
    </html>
  );
}

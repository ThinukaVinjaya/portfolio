import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Thinuka Vinjaya Wickramanayaka | Full-Stack Developer",
    template: "%s | Thinuka Vinjaya Wickramanayaka",
  },
  description: "Portfolio of Thinuka Vinjaya Wickramanayaka, a passionate Java Full-Stack Developer and AI/ML Enthusiast. Explore my open-source projects, articles, and achievements.",
  keywords: ["Thinuka Vinjaya Wickramanayaka", "Full-Stack Developer", "Java Developer", "Next.js", "React", "AI/ML Enthusiast", "Portfolio", "Software Engineer"],
  authors: [{ name: "Thinuka Vinjaya Wickramanayaka" }],
  creator: "Thinuka Vinjaya Wickramanayaka",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://thinuka.dev", // Using a placeholder domain assuming it's thinuka.dev or similar, can be updated later  
    title: "Thinuka Vinjaya Wickramanayaka | Full-Stack Developer",
    description: "Portfolio of Thinuka Vinjaya Wickramanayaka, a passionate Java Full-Stack Developer and AI/ML Enthusiast. Explore my open-source projects, articles, and achievements.",
    siteName: "Thinuka Vinjaya Wickramanayaka Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Thinuka Vinjaya Wickramanayaka | Full-Stack Developer",
    description: "Portfolio of Thinuka Vinjaya Wickramanayaka, a passionate Java Full-Stack Developer and AI/ML Enthusiast.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import ScrollIndicator from "@/components/ScrollIndicator";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased dark scroll-smooth`}>
      <body className="min-h-screen bg-background text-foreground bg-[#121212] overflow-x-hidden w-full relative flex flex-col cursor-none">
        <CustomCursor />
        <ScrollIndicator />
        <div className="flex-grow flex flex-col w-full relative">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}

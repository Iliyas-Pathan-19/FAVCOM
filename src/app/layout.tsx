import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChatbotWidget from "@/components/ChatbotWidget";
import PerformanceMonitor from "@/components/PerformanceMonitor";
import { StoreProvider } from "@/context/StoreContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "FAVCOM - Your Favorite E-commerce Platform",
  description: "Discover amazing products with exceptional quality and service. Shop from 40,000+ products with AI-powered recommendations.",
  keywords: "ecommerce, shopping, products, deals, discounts, AI recommendations",
  authors: [{ name: "FAVCOM Team" }],
  creator: "FAVCOM",
  publisher: "FAVCOM",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://favcom.com",
    title: "FAVCOM - Your Favorite E-commerce Platform",
    description: "Discover amazing products with exceptional quality and service.",
    siteName: "FAVCOM",
  },
  twitter: {
    card: "summary_large_image",
    title: "FAVCOM - Your Favorite E-commerce Platform",
    description: "Discover amazing products with exceptional quality and service.",
    creator: "@favcom",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <StoreProvider>
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
            <ChatbotWidget />
            <PerformanceMonitor />
          </div>
        </StoreProvider>
      </body>
    </html>
  );
}

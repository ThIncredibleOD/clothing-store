import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import ScrollToTop from "@/components/ui/ScrollToTop";
import Footer from "@/components/layout/Footer";
import { StoreProvider } from "@/context/StoreContext";
import { products } from "@/data/products";
import { categories } from "@/data/categories";
import { reviews } from "@/data/reviews";
import { favourites } from "@/data/favourites";
import { completeTheFit } from "@/data/completeTheFit";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "HuCollectives",
  description: "A Clothing Store",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <StoreProvider
          value={{ products, categories, reviews, favourites, completeTheFit }}
        >
          <Header />
          {children}
          <ScrollToTop />
          <Footer />
        </StoreProvider>
      </body>
    </html>
  );
}

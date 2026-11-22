import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import WebMCPProvider from "../components/WebMCPProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.amrsalm.com"),
  title: {
    default: "استوديو م. عمرو سالم الرقمي | تصميم مواقع وتصدر محركات البحث SEO",
    template: "%s | م. عمرو سالم",
  },
  description:
    "تطوير مواقع Next.js سريعة، مواقع ووردبريس، متاجر شوبيفاي، وتحسين محركات البحث (SEO & GEO) لتصدر نتائج جوجل والذكاء الاصطناعي.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white">
        <WebMCPProvider />
        <Header />
        <main className="flex-1 w-full">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
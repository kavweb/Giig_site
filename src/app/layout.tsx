import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./PageComponent/Header/Header";
import Footer from "./PageComponent/Footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Giig Invest | فروش آهن‌آلات در مشهد",
  description: "فروش تیرآهن، میلگرد و ورق‌های فلزی با بهترین قیمت - گروه صنعتی و سرمایه‌گذاری قاسمی",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header/>
        {children}
        <SpeedInsights />
        <Footer/>
      </body>
    </html>
  );
}

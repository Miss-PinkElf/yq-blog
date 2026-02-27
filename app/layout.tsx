import type { Metadata } from "next";
import { Manrope, Merriweather } from "next/font/google";
import "antd/dist/reset.css";
import { AppProviders } from "@/components/AppProviders";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { siteInfo } from "@/data/mockData";
import "./globals.scss";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans"
});

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-serif"
});

export const metadata: Metadata = {
  title: {
    default: siteInfo.title,
    template: `%s | ${siteInfo.title}`
  },
  description: siteInfo.description
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="zh-CN">
      <body className={`${manrope.variable} ${merriweather.variable}`}>
        <div className="siteBackdrop" />
        <AppProviders>
          <div className="siteApp">
            <SiteHeader />
            <main className="siteMain">{children}</main>
            <SiteFooter />
          </div>
        </AppProviders>
      </body>
    </html>
  );
}

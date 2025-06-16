import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { Toaster } from "react-hot-toast";
import { GoogleAnalytics } from "@next/third-parties/google";

import "./globals.css";

import { ThemeProvider } from "@/components/ThemeProvider";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { siteConfig } from "@/config";
import ThemeSwitcher from "@/components/ThemeSwitcher";

export const metadata: Metadata = {
  applicationName: siteConfig.name,
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Software Engineer",
    "Web Developer",
    "Frontend Development",
    "Open Source",
    "Portfolio",
    "Blogs",
  ],
  authors: [
    {
      name: siteConfig.name,
      url: "https://github.com/AnmolSaini16",
    },
  ],
  creator: siteConfig.name,
  openGraph: siteConfig.openGraph,
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "bg-background antialiased scroll-smooth min-h-screen",
          GeistSans.className
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex flex-col min-h-screen">
            <Navbar />

            <main className="flex-grow max-w-[700px] mx-auto container pt-12 sm:pt-16 pb-20">
              {children}
            </main>

            <Footer />
          </div>
          <ThemeSwitcher />
        </ThemeProvider>
        <Toaster />
        <GoogleAnalytics gaId={process.env.GOOGLE_ANALYTICS_ID ?? ""} />
      </body>
    </html>
  );
}

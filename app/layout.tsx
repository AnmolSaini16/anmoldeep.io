import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { Toaster } from "react-hot-toast";
import { Analytics } from "@vercel/analytics/react";

import "./globals.css";

import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { siteConfig } from "@/config";
import ScrollToTop from "@/components/ScrollToTop";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "nextjs",
    "react",
    "react server components",
    "framer motion",
    "tailwind",
    "shadcn",
    "resend",
  ],
  authors: [
    {
      name: "anmol",
      url: "https://github.com/AnmolSaini16",
    },
  ],
  creator: "anmol",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  icons: {
    icon: "/icon.tsx",
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
          <div className="flex flex-col max-w-[700px] min-h-screen mx-auto px-6 space-y-16 md:space-y-20">
            <Navbar />

            <main className="flex-grow">{children}</main>

            <Footer />
          </div>
          <ScrollToTop />
        </ThemeProvider>
        <Toaster />
        <Analytics />
      </body>
    </html>
  );
}

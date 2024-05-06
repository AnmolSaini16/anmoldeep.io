import type { Metadata } from "next";
import { Permanent_Marker, Roboto } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { siteConfig } from "@/config";

const roboto = Roboto({ subsets: ["latin"], weight: "400" });
const permanent_marker = Permanent_Marker({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-permanent-marker",
});

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
          "min-h-screen bg-background antialiased",
          roboto.className,
          permanent_marker.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="max-w-[750px] mx-auto px-6 space-y-20">
            <Navbar />

            <div className="flex-grow min-h-[calc(100vh-320px)]">
              {children}
            </div>

            <Footer />

            <Toaster />
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}

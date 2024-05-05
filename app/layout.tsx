import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Fooer";
import { Toaster } from "react-hot-toast";

const inter = Roboto({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Anmoldeep Singh",
  description: "I am Software Engineer",
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
          inter.className
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <main className="min-h-screen max-w-[750px] mx-auto px-6 space-y-20">
            <Navbar />

            <div className="flex-grow min-h-[calc(100vh-320px)]">
              {children}
              <Toaster />
            </div>

            <Footer />
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}

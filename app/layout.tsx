import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const outfit = Outfit({ subsets: ["latin"], variable: '--font-outfit' });

export const metadata: Metadata = {
  title: "Nadhem Soumri | Senior Full Stack Developer & Tech Lead",
  description: "Portfolio of Nadhem Soumri, Senior Full Stack Developer & Tech Lead. Architecting high-performance Web3 & AI-integrated ecosystems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${inter.variable} ${outfit.variable} font-sans antialiased text-text-primary bg-bg-dark selection:bg-neon-orange/30 selection:text-neon-orange`}
      >
        <ThemeProvider>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

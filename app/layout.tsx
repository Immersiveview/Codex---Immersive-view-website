import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Immersive View – Räume erleben",
  description:
    "Professionelle 360°-Panoramen und virtuelle Touren für Hotels, Immobilien und Unternehmen.",
  icons: {
    icon: "/images/Favicon.png",
    shortcut: "/images/Favicon.png",
    apple: "/images/Favicon.png"
  },
  metadataBase: new URL("https://immersive-view.net")
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" className="scroll-smooth">
      <body className={`${inter.variable} bg-white text-black antialiased`}>
        {children}
      </body>
    </html>
  );
}

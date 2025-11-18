import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Immersive View – 360°-Touren für Immobilien, Hotels & Studios",
  description:
    "Immersive View erstellt professionelle 360°-Panoramen und virtuelle Rundgänge für Immobilien, Hotels, Fitnessstudios und Eventlocations im Raum Trier und Luxemburg.",
  icons: {
    icon: "/images/Favicon.png",
    shortcut: "/images/Favicon.png",
    apple: "/images/Favicon.png"
  },
  openGraph: {
    type: "website",
    title: "Immersive View – 360°-Touren für Immobilien, Hotels & Studios",
    description:
      "Immersive View erstellt professionelle 360°-Panoramen und virtuelle Rundgänge für Immobilien, Hotels, Fitnessstudios und Eventlocations im Raum Trier und Luxemburg.",
    url: "https://immersive-view.net",
    siteName: "Immersive View",
    images: [
      {
        url: "/images/Favicon.png",
        width: 512,
        height: 512,
        alt: "Immersive View – 360°-Touren Vorschau"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Immersive View – 360°-Touren für Immobilien, Hotels & Studios",
    description:
      "Immersive View erstellt professionelle 360°-Panoramen und virtuelle Rundgänge für Immobilien, Hotels, Fitnessstudios und Eventlocations im Raum Trier und Luxemburg.",
    images: ["/images/Favicon.png"]
  },
  robots: {
    index: true,
    follow: true
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
        <Navbar />
        {children}
      </body>
    </html>
  );
}

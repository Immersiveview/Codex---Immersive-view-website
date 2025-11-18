"use client";
import Image from "next/image";
import Link from "next/link";
import { Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white mt-24">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-3">
          {/* Branding */}
          <div className="space-y-4">
            <Image
              src="/logo-white.svg"
              alt="Immersive View Logo – virtuelle Touren"
              width={320}
              height={120}
              className="h-28 w-auto sm:h-36 md:h-40"
            />
          </div>

          {/* Contact */}
          <div>
            <p className="text-sm tracking-wide text-gray-400 uppercase mb-4">Kontakt</p>
            <div className="space-y-2 text-sm">
              <a href="mailto:jesse.rohdenburg@immersive-view.net" className="block hover:text-gray-300">
                jesse.rohdenburg@immersive-view.net
              </a>
              <a href="mailto:maurice.kraewer@immersive-view.net" className="block hover:text-gray-300">
                maurice.kraewer@immersive-view.net
              </a>
              <a href="tel:+491733212572" className="block hover:text-gray-300">
                +49 173 3212572
              </a>
              <a href="tel:+4915252360488" className="block hover:text-gray-300">
                +49 1525 2360488
              </a>
            </div>
          </div>

          {/* Social & Legal */}
          <div>
            <p className="text-sm tracking-wide text-gray-400 uppercase mb-4">Social &amp; Rechtliches</p>
            <a
              href="https://www.instagram.com/immersive.view/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 text-sm text-white hover:text-gray-300"
            >
              <Instagram className="h-6 w-6" />
              <span>Instagram</span>
            </a>
            <div className="mt-4 space-y-2 text-sm">
              <Link href="/impressum" className="block hover:text-gray-300">
                Impressum
              </Link>
              <Link href="/datenschutz" className="block hover:text-gray-300">
                Datenschutz
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-6 text-center text-xs text-gray-400">
          © 2025 Immersive View GbR – Alle Rechte vorbehalten.
        </div>
      </div>
    </footer>
  );
}

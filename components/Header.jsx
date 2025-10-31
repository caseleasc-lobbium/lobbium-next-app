import { useState } from "react";
import Image from "next/image";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-200">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">

        {/* Logo-Bereich */}
        <a href="/" className="flex items-center">
          <div className="flex items-center justify-center w-[90px] h-[90px]">
            <Image
              src="/logo.png"
              alt="Lobbium Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-700">
          <a className="hover:text-blue-600 transition" href="/finanzen-spartipps">
            Finanzen
          </a>
          <a className="hover:text-blue-600 transition" href="/familienleben-alltag">
            Familienleben
          </a>
          <a className="hover:text-blue-600 transition" href="/kinder-bildung">
            Kinder & Bildung
          </a>
          <a className="hover:text-blue-600 transition" href="/blog">
            Blog
          </a>
          <a className="hover:text-blue-600 transition" href="/kontakt">
            Kontakt
          </a>
        </nav>

        {/* Newsletter Button (Desktop) */}
        <a
          href="/newsletter"
          className="hidden md:inline-flex items-center rounded-lg bg-blue-600 px-4 py-2 text-white font-semibold shadow hover:bg-blue-700 transition"
        >
          Newsletter
        </a>

        {/* Mobile Menü Button */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-gray-100"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menü öffnen oder schließen"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menü */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 flex flex-col p-4 space-y-2 text-sm">
          <a href="/finanzen-spartipps" className="hover:text-blue-600">
            Finanzen
          </a>
          <a href="/familienleben-alltag" className="hover:text-blue-600">
            Familienleben
          </a>
          <a href="/kinder-bildung" className="hover:text-blue-600">
            Kinder & Bildung
          </a>
          <a href="/blog" className="hover:text-blue-600">
            Blog
          </a>
          <a href="/kontakt" className="hover:text-blue-600">
            Kontakt
          </a>
          <a
            href="/newsletter"
            className="rounded-lg bg-blue-600 px-4 py-2 text-white font-semibold text-center shadow hover:bg-blue-700 transition"
          >
            Newsletter
          </a>
        </div>
      )}
    </header>
  );
}
export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/80 border-b">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-lblue" />
          <span className="text-xl font-bold tracking-tight text-ldark">Lobbium</span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <a className="hover:text-lblue" href="/finanzen-spartipps">Finanzen</a>
          <a className="hover:text-lblue" href="/familienleben-alltag">Familienleben</a>
          <a className="hover:text-lblue" href="/kinder-bildung">Kinder & Bildung</a>
          <a className="hover:text-lblue" href="/blog">Blog</a>
          <a className="hover:text-lblue" href="/kontakt">Kontakt</a>
        </nav>
        <a href="/newsletter" className="hidden md:inline-flex items-center rounded-lg bg-lblue px-4 py-2 text-white font-semibold shadow hover:bg-[#244F8E] transition">
          Newsletter
        </a>
      </div>
    </header>
  );
}

export default function Footer() {
  return (
    <footer className="bg-ldark text-white">
      <div className="mx-auto max-w-6xl px-4 py-10 grid gap-8 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2">
            <div className="h-7 w-7 rounded-md bg-white/20" />
            <span className="font-bold">Lobbium</span>
          </div>
          <p className="mt-3 text-white/80 text-sm">
            Smart Family Life – Spartipps, Alltag & Bildungsideen für Familien.
          </p>
        </div>
        <nav className="text-sm">
          <h4 className="font-semibold">Themen</h4>
          <ul className="mt-3 space-y-2 text-white/80">
            <li><a className="hover:text-white" href="/finanzen-spartipps">Finanzen & Spartipps</a></li>
            <li><a className="hover:text-white" href="/familienleben-alltag">Familienleben & Alltag</a></li>
            <li><a className="hover:text-white" href="/kinder-bildung">Kinder & Bildung</a></li>
          </ul>
        </nav>
        <nav className="text-sm">
          <h4 className="font-semibold">Rechtliches</h4>
          <ul className="mt-3 space-y-2 text-white/80">
            <li><a className="hover:text-white" href="/impressum">Impressum</a></li>
            <li><a className="hover:text-white" href="/datenschutz">Datenschutz</a></li>
            <li><a className="hover:text-white" href="/kontakt">Kontakt</a></li>
          </ul>
        </nav>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-4 text-center text-white/70 text-sm">
          © {new Date().getFullYear()} Smart Family Life by Lobbium
        </div>
      </div>
    </footer>
  );
}

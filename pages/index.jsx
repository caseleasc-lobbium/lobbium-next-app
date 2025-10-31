export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-sky-50 via-white to-white" />
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-24 text-center">
          <span className="inline-flex items-center rounded-full bg-sky-100 text-sky-700 px-3 py-1 text-xs font-semibold">
            Familien-Lifestyle & Finanzen
          </span>
          <h1 className="mt-4 text-4xl md:text-6xl font-extrabold tracking-tight text-ldark">
            Smart Family Life by Lobbium
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            Clever sparen, Alltag organisieren und Kinder spielerisch fördern – kompakt, praxiserprobt und schön aufbereitet.
          </p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <a href="/blog" className="inline-flex items-center rounded-lg bg-lblue px-5 py-3 text-white font-semibold shadow hover:-translate-y-0.5 hover:bg-[#244F8E] transition">
              Jetzt entdecken
            </a>
            <a href="/finanzen-spartipps" className="inline-flex items-center rounded-lg border border-slate-200 px-5 py-3 font-semibold hover:bg-slate-50 transition">
              Spartipps ansehen
            </a>
          </div>
        </div>
      </section>

      {/* 3 Feature Cards */}
      <section className="mx-auto max-w-6xl px-4 py-12 md:py-16" id="grid">
        <div className="grid gap-6 md:grid-cols-3">
          <a className="group rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-lg transition" href="/finanzen-spartipps">
            <div className="h-10 w-10 rounded-lg bg-lblue/10 flex items-center justify-center">💰</div>
            <h3 className="mt-4 text-xl font-semibold text-ldark">Finanzen & Spartipps</h3>
            <p className="mt-2 text-slate-600">Budget, Familienkonto & smarte Routinen – so bleibt jeden Monat mehr übrig.</p>
            <span className="mt-4 inline-flex items-center gap-1 text-lblue font-semibold">Mehr erfahren →</span>
          </a>
          <a className="group rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-lg transition" href="/familienleben-alltag">
            <div className="h-10 w-10 rounded-lg bg-lblue/10 flex items-center justify-center">🏡</div>
            <h3 className="mt-4 text-xl font-semibold text-ldark">Familienleben & Alltag</h3>
            <p className="mt-2 text-slate-600">Struktur, Routinen & Zeitmanagement für entspannte Tage mit Kindern.</p>
            <span className="mt-4 inline-flex items-center gap-1 text-lblue font-semibold">Mehr erfahren →</span>
          </a>
          <a className="group rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-lg transition" href="/kinder-bildung">
            <div className="h-10 w-10 rounded-lg bg-lblue/10 flex items-center justify-center">🎓</div>
            <h3 className="mt-4 text-xl font-semibold text-ldark">Kinder & Bildung</h3>
            <p className="mt-2 text-slate-600">Lernideen, Spiele & Medienkompetenz – modern & kindgerecht.</p>
            <span className="mt-4 inline-flex items-center gap-1 text-lblue font-semibold">Mehr erfahren →</span>
          </a>
        </div>
      </section>

      {/* Blog Teaser (static) */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div className="flex items-end justify-between">
            <h2 className="text-2xl md:text-3xl font-bold text-ldark">Neu im Blog</h2>
            <a className="text-lblue font-semibold hover:underline" href="/blog">Alle Beiträge →</a>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[1,2,3].map((i) => (
              <article key={i} className="overflow-hidden rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-lg transition">
                <div className="h-44 w-full bg-gradient-to-br from-sky-200 to-sky-100" />
                <div className="p-5">
                  <span className="text-xs font-semibold text-sky-700 bg-sky-100 px-2 py-1 rounded">Spartipps</span>
                  <h3 className="mt-3 text-lg font-semibold text-ldark">10 einfache Wege, monatlich 150€ zu sparen</h3>
                  <p className="mt-2 text-sm text-slate-600">Praktische Schritte für den Familienalltag – mit Einkaufsplanung, Energietricks und Mini‑Automationen.</p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-xs text-slate-500">5 Min Lesezeit</span>
                    <a className="text-lblue font-semibold hover:underline" href="/blog">Lesen →</a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-lblue to-ldark" />
        <div className="mx-auto max-w-6xl px-4 py-16 text-white">
          <div className="grid gap-8 md:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold">Hol dir die besten Familientipps per E‑Mail</h2>
              <p className="mt-3 text-white/90">Spartipps, Routinen & Lernideen – 1–2× pro Woche, jederzeit abmeldbar.</p>
            </div>
            <form className="bg-white/10 backdrop-blur rounded-xl p-3 flex gap-2" onSubmit={(e)=>e.preventDefault()}>
              <input className="flex-1 rounded-lg bg-white px-3 py-3 text-slate-800 placeholder-slate-400 outline-none" placeholder="E‑Mail-Adresse" />
              <button className="rounded-lg bg-white px-5 py-3 font-semibold text-lblue hover:bg-slate-100 transition">Anmelden</button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

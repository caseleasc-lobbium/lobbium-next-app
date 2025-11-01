import Head from "next/head";

export default function Maintenance() {
  return (
    <>
      <Head>
        <title>Lobbium Smart Family Life – Wartungsmodus</title>
        <meta name="robots" content="noindex" />
      </Head>

      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-50 to-white text-center px-6">
        {/* Logo */}
        <img
          src="/logo.png"
          alt="Smart Family Life Logo"
          className="w-32 h-auto md:w-40 mb-6 drop-shadow-sm"
        />

        {/* Titel */}
        <h1 className="text-2xl md:text-3xl font-bold text-blue-800 mb-3">
          🛠️ Lobbium Smart Family Life
        </h1>

        {/* Beschreibung */}
        <p className="text-gray-600 max-w-md text-base md:text-lg leading-relaxed mb-8">
          Unsere Website wird gerade liebevoll überarbeitet, um dir bald noch mehr
          smarte Ideen rund um Familie, Alltag und Finanzen zu bieten.
        </p>

        {/* Fortschrittsanzeige */}
        <div className="relative w-56 md:w-64 h-2 bg-blue-100 rounded-full overflow-hidden mb-10">
          <div className="absolute left-0 top-0 h-full bg-blue-500 animate-pulse"></div>
        </div>

        <p className="text-sm text-gray-500 italic">
          Schau bald wieder vorbei – wir sind in Kürze zurück!
        </p>

        <footer className="text-gray-400 text-xs mt-10">
          © 2025 Lobbium Smart Family Life. Alle Rechte vorbehalten.
        </footer>
      </div>
    </>
  );
}
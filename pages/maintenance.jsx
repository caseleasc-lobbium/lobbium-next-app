import Head from "next/head";

export default function Maintenance() {
  return (
    <>
      <Head>
        <title>Lobbium Smart Family Life – Wartungsmodus</title>
        <meta name="robots" content="noindex" />
      </Head>

      <div className="flex flex-col items-center justify-center min-h-screen bg-white text-center px-6">
        <img
          src="/logo.png"
          alt="Smart Family Life Logo"
          className="w-28 h-28 mb-4"
        />

        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
          🛠️ Lobbium Smart Family Life
        </h1>

        <p className="text-gray-600 max-w-md mb-8">
          Unsere Website wird gerade liebevoll überarbeitet, um dir bald noch mehr smarte Ideen rund um Familie, Alltag & Finanzen zu bieten.
        </p>

        <footer className="text-gray-400 text-sm mt-8">
          © 2025 Lobbium Smart Family Life. Alle Rechte vorbehalten.
        </footer>
      </div>
    </>
  );
}
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Maintenance() {
  // Countdown Ziel-Datum (z. B. Launch am 15. December)
  const launchDate = new Date("2025-12-15T00:00:00");

  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, mins: 0, secs: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const diff = launchDate - now;

      if (diff <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, mins: 0, secs: 0 });
      } else {
        setTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
          mins: Math.floor((diff / (1000 * 60)) % 60),
          secs: Math.floor((diff / 1000) % 60),
        });
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#f7f9fc] text-center px-4">
      {/* Logo */}
      <div className="mb-6 animate-pulse">
        <Image
          src="/logo.png"
          alt="Lobbium Logo"
          width={130}
          height={130}
          className="object-contain"
          priority
        />
      </div>

      {/* Titel */}
      <h1 className="text-3xl md:text-4xl font-bold text-[#1c3d6c] mb-3">
        🚧 Lobbium Smart Family Life
      </h1>

      {/* Beschreibung */}
      <p className="text-gray-600 text-base md:text-lg max-w-md mb-8 leading-relaxed">
        Unsere Website wird gerade liebevoll überarbeitet, um dir bald noch mehr
        smarte Ideen rund um Familie, Alltag & Finanzen zu bieten.
      </p>

      {/* Countdown */}
      <div className="flex gap-4 text-blue-700 font-semibold text-lg md:text-xl mb-8">
        <div>
          <span className="block text-3xl md:text-4xl text-blue-600">{timeLeft.days}</span>
          <span className="text-sm">Tage</span>
        </div>
        <div>
          <span className="block text-3xl md:text-4xl text-blue-600">{timeLeft.hours}</span>
          <span className="text-sm">Stunden</span>
        </div>
        <div>
          <span className="block text-3xl md:text-4xl text-blue-600">{timeLeft.mins}</span>
          <span className="text-sm">Minuten</span>
        </div>
        <div>
          <span className="block text-3xl md:text-4xl text-blue-600">{timeLeft.secs}</span>
          <span className="text-sm">Sekunden</span>
        </div>
      </div>

      {/* Newsletter Feld */}
      <div className="w-full max-w-md bg-white shadow-md rounded-lg p-4 border border-gray-100">
        <p className="text-gray-700 font-medium mb-3">
          Sei dabei, wenn wir live gehen – trage dich hier ein:
        </p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert("Danke! Wir benachrichtigen dich zum Launch 💙");
          }}
          className="flex flex-col sm:flex-row gap-3"
        >
          <input
            type="email"
            placeholder="Deine E-Mail-Adresse"
            className="flex-1 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-md font-semibold transition"
          >
            Benachrichtigen
          </button>
        </form>
      </div>

      {/* Footer */}
      <footer className="mt-10 text-gray-400 text-xs">
        © {new Date().getFullYear()} Lobbium Smart Family Life. Alle Rechte vorbehalten.
      </footer>
    </div>
  );
}

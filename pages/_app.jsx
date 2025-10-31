import Head from "next/head";
import "../styles/globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Lobbium – Smart Family Life</title>
        <meta
          name="description"
          content="Clever sparen, Alltag organisieren und Kinder spielerisch fördern."
        />
        <link rel="icon" href="/logo.png" />
      </Head>

      <Header />
      <main className="min-h-screen bg-white text-slate-800">
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}
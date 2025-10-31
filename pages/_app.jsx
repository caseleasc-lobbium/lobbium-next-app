import '../styles/globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white text-slate-800">
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  )
}

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Sources from "./components/Sources";
import Features from "./components/Features";
import LiveChangelog from "./components/LiveChangelog";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <Sources />
      <Features />
      <LiveChangelog />
      <FAQ />
      <Footer />
    </main>
  );
}

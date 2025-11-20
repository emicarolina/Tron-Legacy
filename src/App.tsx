import About from "./components/About";
import Characters from "./components/Characters";
import Curiosities from "./components/Curiosities";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Legacy from "./components/Legacy";
import MusicPlayer from "./components/MusicPlayer";
import Soundtrack from "./components/Soundtrack";
import Scanlines from "./components/Scanlines";
import Loader from "./components/Loader";

import AOS from "aos";
import "aos/dist/aos.css";

import Lenis from "lenis";
import "lenis/dist/lenis.css";

import { useEffect } from "react";

function App() {
  // AOS
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  const handleLoaderComplete = () => {};

  return (
    <div className="selection:bg-cyan-500 selection:text-black">
      <Scanlines />
      <Loader onComplete={handleLoaderComplete} />
      <Header />
      <Hero />
      <About />
      <Soundtrack />
      <Characters />
      <Gallery />
      <Curiosities />
      <Legacy />
      <Footer />
      <MusicPlayer />
    </div>
  );
}

export default App;

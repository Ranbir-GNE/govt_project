import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Collection from './pages/Collection';
import Motifs from './pages/Motifs';
import ReetiRivaz from './pages/ReetiRivaz';
import Activities from './pages/Activities';
import Stories from './pages/Stories';
import Artisans from './pages/Artisans';
import Regions from './pages/Regions';
import About from './pages/About';
import NotFound from './pages/NotFound';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    if (window.location.hash) return;
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function BootLoaderCleanup() {
  useEffect(() => {
    const el = document.getElementById('boot-loader');
    if (!el) return undefined;
    const t = setTimeout(() => {
      el.classList.add('boot-done');
      setTimeout(() => el.remove(), 600);
    }, 350);
    return () => clearTimeout(t);
  }, []);
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <BootLoaderCleanup />
      <div className="flex min-h-screen flex-col bg-paper font-sans text-ink">
        <Header />
        <main id="main-content" className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/collection" element={<Collection />} />
            <Route path="/motifs" element={<Motifs />} />
            <Route path="/activities" element={<Activities />} />
            <Route path="/reeti-rivaz" element={<ReetiRivaz />} />
            <Route path="/stories" element={<Stories />} />
            <Route path="/artisans" element={<Artisans />} />
            <Route path="/regions" element={<Regions />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

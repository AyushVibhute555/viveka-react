import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import StickyBar from './components/StickyBar';

import Home from './pages/Home';
import VivekaChethana from './pages/VivekaChethana';
import VivekaSparsha from './pages/VivekaSparsha';
import VivekaChaitanya from './pages/VivekaChaitanya';
import VivekaSpoorthi from './pages/VivekaSpoorthi';
import Careers from './pages/Careers';
import Contact from './pages/Contact';

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1));
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 0);
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/viveka-chethana" element={<VivekaChethana />} />
          <Route path="/viveka-sparsha" element={<VivekaSparsha />} />
          <Route path="/viveka-hospital" element={<Navigate to="/viveka-chethana" replace />} />
          <Route path="/viveka-clinic" element={<Navigate to="/viveka-sparsha" replace />} />
          <Route path="/viveka-chaitanya" element={<VivekaChaitanya />} />
          <Route path="/viveka-spoorthi" element={<VivekaSpoorthi />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
      <StickyBar />
    </>
  );
}
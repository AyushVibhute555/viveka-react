import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatPhone from './components/FloatPhone';

import Home from './pages/Home';
import VivekaHospital from './pages/VivekaHospital';
import VivekaClinic from './pages/VivekaClinic';
import VivekaChaitanya from './pages/VivekaChaitanya';
import VivekaShurthi from './pages/VivekaShurthi';
import HealthPackages from './pages/HealthPackages';
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
  const { pathname } = useLocation();
  const isHome = pathname === '/';

  return (
    <>
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/viveka-hospital" element={<VivekaHospital />} />
          <Route path="/viveka-clinic" element={<VivekaClinic />} />
          <Route path="/viveka-chaitanya" element={<VivekaChaitanya />} />
          <Route path="/viveka-shurthi" element={<VivekaShurthi />} />
          <Route path="/health-packages" element={<HealthPackages />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      {!isHome && <Footer />}
      {!isHome && <FloatPhone />}
    </>
  );
}
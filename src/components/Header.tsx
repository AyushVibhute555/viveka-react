import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import hospitalLogo from '../assets/viveka hospital logo.png';
import clinicLogo from '../assets/viveka clinic logo.png';
import chaitanyaLogo from '../assets/viveka chitanya logo.png';
import spoorthiLogo from '../assets/viveka spoorthi.png';

const PAGE_LOGOS: Record<string, { src: string; alt: string }> = {
  '/viveka-chethana': { src: hospitalLogo, alt: 'Viveka Chethana' },
  '/viveka-sparsha': { src: clinicLogo, alt: 'Viveka Sparsha' },
  '/viveka-chaitanya': { src: chaitanyaLogo, alt: 'Viveka Chaitanya' },
  '/viveka-spoorthi': { src: spoorthiLogo, alt: 'Viveka Spoorthi' },
};

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { pathname } = useLocation();
  const pageLogo = PAGE_LOGOS[pathname];
  const logo = pageLogo ?? { src: '/logo.png', alt: 'Viveka' };

  const is = (path: string) => pathname === path;
  const close = () => setMobileOpen(false);

  return (
    <header className="site-header">
      <nav>
        <div className="nav-logo">
          <Link to="/" onClick={close}>
            <img
              src={logo.src}
              alt={logo.alt}
              className={`nav-logo-img${pageLogo ? '' : ' nav-logo-img--brand'}`}
            />
          </Link>
        </div>

        <ul className="nav-links">
          <li className={is('/') ? 'active' : ''}>
            <Link to="/">Home</Link>
          </li>

          <li className={is('/viveka-chethana') ? 'active' : ''}>
            <Link to="/viveka-chethana">Viveka Chethana</Link>
          </li>

          <li className={is('/viveka-sparsha') ? 'active' : ''}>
            <Link to="/viveka-sparsha">Viveka Sparsha</Link>
          </li>

          <li className={is('/viveka-chaitanya') ? 'active' : ''}>
            <Link to="/viveka-chaitanya">Viveka Chaitanya</Link>
          </li>

          <li className={is('/viveka-spoorthi') ? 'active' : ''}>
            <Link to="/viveka-spoorthi">Viveka Spoorthi</Link>
          </li>

          <li className={is('/careers') ? 'active' : ''}>
            <Link to="/careers">Careers</Link>
          </li>

          <li className={is('/contact') ? 'active' : ''}>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>

        <div className="nav-cta">
          <a href="tel:+916364111001" className="btn-outline">Emergency</a>
          <Link to="/contact" className="btn-primary">
            <i className="fas fa-calendar-alt" style={{ fontSize: '0.75rem' }} /> Book Appointment
          </Link>
        </div>

        <button
          className="nav-hamburger"
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
        >
          <i className={mobileOpen ? 'fas fa-times' : 'fas fa-bars'} />
        </button>
      </nav>

      {/* <div className="emergency-strip">
        <span><strong>Psychiatric Emergency?</strong> &nbsp;Our hospital is open 24 hours a day, 7 days a week.</span>
        <a href="tel:+916364111001">
          <i className="fas fa-phone" style={{ fontSize: '0.65rem' }} /> &nbsp;Call +91 63641 11001
        </a>
        <a href="https://wa.me/916364111001">WhatsApp Us</a>
      </div> */}

      {mobileOpen && (
        <div id="mobile-menu" className="mobile-menu open" aria-label="Mobile navigation">
          <Link to="/" onClick={close}>Home</Link>
          <Link to="/viveka-chethana" onClick={close}>Viveka Chethana</Link>
          <Link to="/viveka-sparsha" onClick={close}>Viveka Sparsha</Link>
          <Link to="/viveka-chaitanya" onClick={close}>Viveka Chaitanya</Link>
          <Link to="/viveka-spoorthi" onClick={close}>Viveka Spoorthi</Link>
          <Link to="/careers" onClick={close}>Careers</Link>
          <Link to="/contact" onClick={close}>Contact</Link>
          <a href="tel:+916364111001" className="mobile-cta" onClick={close}>Emergency</a>
        </div>
      )}
    </header>
  );
}
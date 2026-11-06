import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { pathname } = useLocation();

  const is = (path: string) => pathname === path;
  const close = () => setMobileOpen(false);

  return (
    <header className="site-header">
      <nav>
        <div className="nav-logo">
          <Link to="/" onClick={close}>
            <img src="/logo.png" alt="Viveka Logo" className="nav-logo-img" />
          </Link>
        </div>

        <ul className="nav-links">
          <li className={is('/') ? 'active' : ''}>
            <Link to="/">Home</Link>
          </li>

          <li className={is('/viveka-hospital') ? 'active' : ''}>
            <Link to="/viveka-hospital">Viveka Hospital</Link>
          </li>

          <li className={is('/viveka-clinic') ? 'active' : ''}>
            <Link to="/viveka-clinic">Viveka Clinic</Link>
          </li>

          <li className={is('/viveka-haitanya') ? 'active' : ''}>
            <Link to="/viveka-haitanya">Viveka Chaitanya</Link>
          </li>

          <li className={is('/health-packages') ? 'active' : ''}>
            <Link to="/health-packages">Health Packages</Link>
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
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          <i className={mobileOpen ? 'fas fa-times' : 'fas fa-bars'} />
        </button>
      </nav>

      <div className="emergency-strip">
        <span><strong>Psychiatric Emergency?</strong> &nbsp;Our hospital is open 24 hours a day, 7 days a week.</span>
        <a href="tel:+916364111001">
          <i className="fas fa-phone" style={{ fontSize: '0.65rem' }} /> &nbsp;Call +91 63641 11001
        </a>
        <a href="https://wa.me/916364111001">WhatsApp Us</a>
      </div>

      {mobileOpen && (
        <div className="mobile-menu open">
          <Link to="/" onClick={close}>Home</Link>
          <Link to="/viveka-hospital" onClick={close}>Viveka Hospital</Link>
          <Link to="/viveka-clinic" onClick={close}>Viveka Clinic</Link>
          <Link to="/viveka-haitanya" onClick={close}>Viveka Chaitanya</Link>
          <Link to="/health-packages" onClick={close}>Health Packages</Link>
          <Link to="/careers" onClick={close}>Careers</Link>
          <Link to="/contact" onClick={close}>Contact</Link>
          <a href="tel:+916364111001" className="mobile-cta" onClick={close}>Emergency</a>
        </div>
      )}
    </header>
  );
}
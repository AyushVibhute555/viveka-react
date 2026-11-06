import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-cols">
          <div className="footer-brand">
            <img src="/logo.png" alt="Viveka" />
            <p>
              healing hands, caring minds.
              <br />
              Mysore's most trusted neuropsychiatric centre.
            </p>
            <div className="footer-social">
              <a href="tel:+916364111001"><i className="fas fa-phone-alt" /></a>
              <a href="https://wa.me/916364111001"><i className="fab fa-whatsapp" /></a>
              <a href="mailto:info@vivekamysore.com"><i className="fas fa-envelope" /></a>
            </div>
          </div>

          <div>
            <h4>Explore</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/viveka-hospital">Viveka Hospital</Link></li>
              <li><Link to="/viveka-clinic">Viveka Clinic</Link></li>
              <li><Link to="/viveka-haitanya">Viveka Chaitanya</Link></li>
              <li><Link to="/health-packages">Health Packages</Link></li>
            </ul>
          </div>

          <div>
            <h4>Company</h4>
            <ul>
              <li><Link to="/careers">Careers</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4>Contact</h4>
            <ul>
              <li><a href="tel:+916364111001">+91 63641 11001</a></li>
              <li><a href="mailto:info@vivekamysore.com">info@vivekamysore.com</a></li>
              <li>#4 Ganga Nagar,<br />Off Mysore Bannur Road,<br />Mysore – 570028</li>
              <li><Link to="/contact" className="footer-cta">Book an Appointment →</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 Viveka Mysore — 24×7 emergency &amp; admission</p>
        </div>
      </div>
    </footer>
  );
}
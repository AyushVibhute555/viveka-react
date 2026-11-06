import { Link } from 'react-router-dom';

export default function CTAStrip() {
  return (
    <section className="cta-strip">
      <div className="container cta-inner">
        <div>
          <h2 className="serif">Need Help Right Now?</h2>
          <p>Our team is available 24×7. If you or a loved one is in crisis, do not wait.</p>
        </div>
        <div className="cta-actions">
          <Link to="/admissions" className="btn-white">
            <i className="fas fa-calendar-check" /> Book an Appointment
          </Link>
          <a href="tel:+916364111001" className="btn-outline-white">
            <i className="fas fa-phone" /> +91 63641 11001
          </a>
        </div>
      </div>
    </section>
  );
}
export default function StickyBar() {
  return (
    <div className="site-sticky-bar">
      <span>Need help? Call us 24×7</span>
      <button
        type="button"
        className="btn-primary"
        aria-label="Call Viveka now"
        style={{ fontSize: '0.75rem', padding: '7px 16px' }}
        onClick={() => window.location.assign('tel:+916364111001')}
      >
        <i className="fas fa-phone" style={{ fontSize: '0.65rem' }} /> Call Now
      </button>
      <a href="https://wa.me/916364111001" className="whatsapp" aria-label="WhatsApp Viveka">
        <i className="fab fa-whatsapp" />
      </a>
    </div>
  );
}
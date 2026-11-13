import { Link } from 'react-router-dom';

const FOOTER_LOCATIONS = [
  {
    name: 'Viveka Hospital',
    address: '#4, Ganga Nagar, Off Mysore Bannur Road, Vajamangala, Mysuru – 570028',
    phone: '+91 63641 11001',
    mapLink: 'https://share.google/4V4qraBl4WrLulDub',
    mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31185.570618666028!2d76.70656527910155!3d12.302561700000007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baf7354fd6f1259%3A0x2788a8e0ff317ee3!2sViveka%20Hospital!5e0!3m2!1sen!2sin!4v1779097106859!5m2!1sen!2sin',
  },
  {
    name: 'Viveka Clinic',
    address: '#511, Kalidasa Road, Vijayanagar 1st Stage, Mysuru – 570017',
    phone: '+91 63641 11003',
    mapLink: 'https://share.google/sIHyYA3vcoe4O2NU6',
    mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3897.8490365329085!2d76.61329947482993!3d12.325946087933193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baf7b797d09a9d9%3A0x4e3a7d211e06c9ec!2sViveka%20Clinic!5e0!3m2!1sen!2sin!4v1779095963647!5m2!1sen!2sin',
  },
  {
    name: 'Viveka Chaitanya',
    address: 'KC Layout, Nadanahalli, Mysuru – 570011',
    phone: '+91 63641 11002',
    mapLink: 'https://share.google/4CkFI5Gie5bfc0yY3',
    mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124742.28869770598!2d76.6447628087369!3d12.302548593344532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baf7165149542db%3A0x2cf2c25f452e7ed9!2sViveka%20Geriatric%20%26%20Neuro%20Rehabilitation%20Centre!5e0!3m2!1sen!2sin!4v1779097158295!5m2!1sen!2sin',
  },
  {
    name: 'Viveka Spurthi',
    address: 'Mysuru, Karnataka  (address to be updated)',
    phone: '+91 63641 11001',
    mapLink: undefined,
    mapSrc: undefined,
  },
];

export default function Footer() {
  return (
    <footer className="site-footer" id="contact">
      <div className="footer-top">
        <div>
          <div className="footer-brand-name">Visit Us</div>
          <div className="footer-locations">
            {FOOTER_LOCATIONS.map((loc) => (
              <div key={loc.name} className="footer-location">
                <div className="footer-loc-map">
                  {loc.mapSrc ? (
                    <a href={loc.mapLink} target="_blank" rel="noopener noreferrer" title={`View ${loc.name} on Google Maps`}>
                      <iframe src={loc.mapSrc} title={loc.name} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                    </a>
                  ) : (
                    <div className="footer-loc-map-placeholder">
                      <i className="fas fa-map-marker-alt" />
                      <span>Map coming soon</span>
                    </div>
                  )}
                </div>
                <div>
                  <div className="footer-location-name">{loc.name}</div>
                  <div className="footer-location-address">{loc.address}</div>
                  <div className="footer-location-phone">
                    <a href={`tel:${loc.phone.replace(/\s/g, '')}`}>{loc.phone}</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="footer-col">
          <h5 style={{ marginTop: 28 }}>Quick Links</h5>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/viveka-hospital">Hospital</Link></li>
            <li><Link to="/viveka-clinic">Clinic</Link></li>
            <li><Link to="/viveka-chaitanya">Chaitanya</Link></li>
            <li><Link to="/viveka-spurthi">Spurthi</Link></li>
            <li><Link to="/health-packages">Health Packages</Link></li>
            <li><Link to="/careers">Careers</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
          <div className="footer-email">
            <i className="fas fa-envelope" />
            <span><a href="mailto:info@vivekamysore.com">info@vivekamysore.com</a></span>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <span className="footer-copy">
          © 2026 Viveka Group. All Rights Reserved.{' '}
          <span className="footer-madeby">
            Made with 🤍 by{' '}
            <a href="https://peoplecomtechnologies.com" target="_blank" rel="noreferrer">
              Peoplecom Technologies
            </a>
          </span>
        </span>
      </div>
    </footer>
  );
}
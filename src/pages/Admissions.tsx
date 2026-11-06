import PageHero from '../components/PageHero';

export default function Admissions() {
  return (
    <>
      <PageHero
        eyebrow="Admissions & Appointments"
        title={<>We've Made It <em>Easy to Reach Us.</em></>}
        description="Whether you need emergency support right now or want to book a routine outpatient consultation, we have made it as easy as possible to reach us."
      />

      {/* EMERGENCY BANNER */}
      <section className="emergency-banner">
        <div className="container">
          <div className="emergency-inner">
            <div className="emergency-left">
              <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', display: 'block', marginBottom: 12 }}>Emergency Contact</span>
              <h2>Are You in Crisis? Call Us Now.</h2>
              <p>Our hospital is open 24 hours a day, 7 days a week. If you or someone you love is experiencing a psychiatric emergency, please do not wait.</p>
              <p style={{ marginTop: 16, fontSize: '0.85rem', color: 'rgba(255,255,255,0.7)', fontStyle: 'italic' }}>You do not need an appointment for a psychiatric emergency. Walk in, and our team will be there.</p>
            </div>
            <div className="emergency-right">
              <div className="emerg-phone">
                <div className="emerg-phone-icon"><i className="fas fa-phone-alt" /></div>
                <div className="emerg-phone-text">
                  <strong>+91 63641 11001</strong>
                  <span>Available 24×7</span>
                </div>
              </div>
              <div className="emerg-address">
                <i className="fas fa-map-marker-alt" />
                <div>
                  <p>#4, Ganga Nagar, Off Mysore Bannur Road, Vajamangala, Mysore – 570028</p>
                  <p className="emerg-walkin">Walk-in address — hospital open 24×7</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FORMS */}
      <section className="forms-section">
        <div className="container">
          <div className="forms-grid">

            {/* Inpatient Admission Form */}
            <div className="form-card">
              <div className="form-card-header">
                <span className="eyebrow">Inpatient Admission</span>
                <h2>Start the Admission Process</h2>
                <p>If you would like to enquire about or initiate inpatient admission for a family member, please fill in the form below and our admissions team will contact you within a few hours.</p>
              </div>
              <div className="form-body">
                <div className="form-group">
                  <label>Patient Name</label>
                  <input type="text" placeholder="Full name" />
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>Age</label>
                    <input type="text" placeholder="Age" />
                  </div>
                  <div className="form-group">
                    <label>Gender</label>
                    <select defaultValue="">
                      <option value="">Select</option>
                      <option>Male</option>
                      <option>Female</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>
                <div className="form-group">
                  <label>Nature of Concern</label>
                  <textarea placeholder="Brief description of the concern" />
                </div>
                <div className="form-group">
                  <label>Family Contact Name</label>
                  <input type="text" placeholder="Your name" />
                </div>
                <div className="form-group">
                  <label>Contact Number</label>
                  <input type="tel" placeholder="+91" />
                </div>
                <div className="form-group">
                  <label>Preferred Time to Call</label>
                  <input type="text" placeholder="e.g. Morning, Afternoon, Evening" />
                </div>
                <div className="form-group">
                  <label>Existing Medical / Psychiatric History <span style={{ fontWeight: 400, textTransform: 'none' }}>(optional)</span></label>
                  <textarea placeholder="Any relevant history" />
                </div>
                <button className="form-submit terracotta">Submit Admission Enquiry</button>
              </div>
            </div>

            {/* Outpatient + Home Visit */}
            <div className="forms-col">

              {/* Outpatient */}
              <div className="form-card">
                <div className="form-card-header">
                  <span className="eyebrow">Outpatient Appointment</span>
                  <h2>Book a Consultation</h2>
                  <p>Our outpatient clinic at Kalidasa Road, Vijayanagar, Mysore is open from 10 AM to 8 PM. To book an appointment with one of our specialists, please call us at +91 63641 11001, send us a WhatsApp message, or use the form below.</p>
                </div>
                <div className="form-body">
                  <div className="form-group">
                    <label>Name</label>
                    <input type="text" placeholder="Full name" />
                  </div>
                  <div className="form-group">
                    <label>Contact Number</label>
                    <input type="tel" placeholder="+91" />
                  </div>
                  <div className="form-group">
                    <label>Preferred Specialist <span style={{ fontWeight: 400, textTransform: 'none' }}>(optional)</span></label>
                    <input type="text" placeholder="e.g. Dr. Murali Krishna" />
                  </div>
                  <div className="form-group">
                    <label>Preferred Date &amp; Time</label>
                    <input type="text" placeholder="e.g. Monday morning" />
                  </div>
                  <div className="form-group">
                    <label>Brief Reason for Appointment</label>
                    <textarea placeholder="Briefly describe your concern" />
                  </div>
                  <button className="form-submit">Book Appointment</button>
                </div>
              </div>

              {/* Home Visit */}
              <div className="form-card">
                <div className="form-card-header">
                  <span className="eyebrow">Home Visit Request</span>
                  <h2>Request a Home Visit</h2>
                  <p>If your family member is unable to visit our clinic, our home care team can come to you. Please fill in the form below and we will arrange a visit at a time that suits your family.</p>
                </div>
                <div className="form-body">
                  <div className="form-row">
                    <div className="form-group">
                      <label>Patient Name</label>
                      <input type="text" placeholder="Full name" />
                    </div>
                    <div className="form-group">
                      <label>Patient Age</label>
                      <input type="text" placeholder="Age" />
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Address</label>
                    <input type="text" placeholder="Address (Mysore area)" />
                  </div>
                  <div className="form-group">
                    <label>Nature of Concern</label>
                    <textarea placeholder="Brief description" />
                  </div>
                  <div className="form-group">
                    <label>Contact Name &amp; Number</label>
                    <input type="text" placeholder="Your name and phone number" />
                  </div>
                  <div className="form-group">
                    <label>Preferred Time for Visit</label>
                    <input type="text" placeholder="e.g. Weekday morning" />
                  </div>
                  <button className="form-submit">Request Home Visit</button>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* WHATSAPP + CONTACT DETAILS */}
      <section className="contact-section">
        <div className="container">
          <div className="contact-grid">

            <div className="whatsapp-card">
              <span className="eyebrow">WhatsApp Enquiry</span>
              <h2>Message Us on WhatsApp</h2>
              <p>Prefer to chat? Send us a message on WhatsApp and our team will respond as soon as possible.</p>
              <div className="wa-placeholder">
                <i className="fab fa-whatsapp" />
                <p>whatsapp business link</p>
              </div>
            </div>

            <div className="contact-details">
              <div className="contact-details-header">
                <span className="eyebrow">Contact Details</span>
                <h2>Location Map &amp; Contact</h2>
              </div>
              <div className="contact-row">
                <div className="contact-icon" style={{ background: '#EEF6F7', color: 'var(--deep)' }}><i className="fas fa-hospital" /></div>
                <div className="contact-row-body">
                  <strong>Hospital (24×7)</strong>
                  <span>#4, Ganga Nagar, Off Mysore Bannur Road, Vajamangala, Mysore – 570028</span>
                </div>
              </div>
              <div className="contact-row">
                <div className="contact-icon" style={{ background: '#F5F0E8', color: 'var(--primary)' }}><i className="fas fa-clinic-medical" /></div>
                <div className="contact-row-body">
                  <strong>Clinic (10 AM – 8 PM)</strong>
                  <span>511, Kalidasa Road, Vijayanagar 1st Stage, Mysuru – 570017</span>
                </div>
              </div>
              <div className="contact-row">
                <div className="contact-icon" style={{ background: '#EEF6F7', color: 'var(--teal)' }}><i className="fas fa-phone-alt" /></div>
                <div className="contact-row-body">
                  <strong>Phone</strong>
                  <span><a href="tel:+916364111001">+91 63641 11001</a></span>
                </div>
              </div>
              <div className="contact-row">
                <div className="contact-icon" style={{ background: '#F2F5EF', color: '#5a7850' }}><i className="fas fa-envelope" /></div>
                <div className="contact-row-body">
                  <strong>Email</strong>
                  <span><a href="mailto:info@vivekamysore.com">info@vivekamysore.com</a></span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* MAPS */}
      <section className="maps-section">
        <div className="container">
          <div className="maps-header">
            <span className="eyebrow">Find Us</span>
            <h2>Our Locations</h2>
          </div>
          <div className="maps-grid">

            <div className="map-card">
              <div className="map-placeholder">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3898.224295596289!2d76.73637357482944!3d12.300676587956456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baf7354fd6f1259%3A0x2788a8e0ff317ee3!2sViveka%20Hospital!5e0!3m2!1sen!2sin!4v1773991818096!5m2!1sen!2sin"
                  allowFullScreen loading="lazy" title="Viveka Hospital"
                />
              </div>
              <div className="map-info">
                <span className="map-type">Hospital</span>
                <h3>Viveka Hospital</h3>
                <p>#4, Ganga Nagar, Off Mysore Bannur Road, Vajamangala, Mysore – 570028</p>
                <span className="map-hours"><i className="fas fa-clock" /> Open 24×7 — including emergencies &amp; admissions</span>
              </div>
            </div>

            <div className="map-card">
              <div className="map-placeholder">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3897.8490369954166!2d76.61100347786095!3d12.325946056819895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baf7b797d09a9d9%3A0x4e3a7d211e06c9ec!2sViveka%20Clinic!5e0!3m2!1sen!2sin!4v1773992173132!5m2!1sen!2sin"
                  allowFullScreen loading="lazy" title="Viveka Clinic"
                />
              </div>
              <div className="map-info">
                <span className="map-type">Outpatient Clinic</span>
                <h3>Viveka Outpatient Clinic</h3>
                <p>511, Kalidasa Road, Vijayanagar 1st Stage, Mysuru – 570017</p>
                <span className="map-hours"><i className="fas fa-clock" /> Mon – Sat, 10:00 AM – 8:00 PM</span>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
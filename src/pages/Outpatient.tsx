import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import CTAStrip from '../components/CTAStrip';

const SERVICES = [
  {
    icon: 'fa-user-md',
    bg: '#EEF6F7',
    fg: 'var(--deep)',
    title: 'Psychiatric Consultations',
    text: 'Our consultant psychiatrists offer thorough, unhurried consultations for new patients and ongoing reviews for established ones. We take time to understand your full picture before making any recommendations.',
  },
  {
    icon: 'fa-pills',
    bg: '#F5F0E8',
    fg: 'var(--primary)',
    title: 'Medical Management',
    text: 'For patients on psychiatric medications, careful monitoring and management is essential. Our physicians and psychiatrists work together to ensure that medications are effective, well-tolerated, and regularly reviewed.',
  },
  {
    icon: 'fa-calendar-check',
    bg: '#EEF6F7',
    fg: 'var(--teal)',
    title: 'Follow-Up Care',
    text: 'Continuity matters. Regular follow-up appointments keep your recovery on track, catch early warning signs, and give you a space to reflect on how things are going.',
  },
  {
    icon: 'fa-comments',
    bg: '#F2F5EF',
    fg: '#5a7850',
    title: 'Psychological Counselling & Psychotherapy',
    text: 'Individual therapy is available for adults, adolescents, and children across a wide range of concerns — from everyday stress to complex trauma. Our psychologists are trained in evidence-based approaches and offer sessions in Kannada, Hindi, and English.',
  },
  {
    icon: 'fa-clipboard-list',
    bg: '#FBF0ED',
    fg: 'var(--terracotta)',
    title: 'Psychological Assessments',
    text: 'We offer formal psychological testing for a range of purposes — including IQ and cognitive assessments, personality evaluations, neurodevelopmental assessments (ADHD, autism), and medico-legal or academic reports.',
  },
  {
    icon: 'fa-brain',
    bg: '#EEF6F7',
    fg: 'var(--deep)',
    title: 'Dementia Clinic',
    text: 'Our specialist dementia clinic offers dedicated memory assessments, diagnosis consultations, management planning, and caregiver support. Led by Dr. Murali Krishna, this is one of the most specialised dementia services available in Karnataka.',
  },
];

export default function Outpatient() {
  return (
    <>
      <PageHero
        eyebrow="Outpatient Services"
        title={
          <>
            Expert Care, <em>On Your Terms.</em>
          </>
        }
        description="Not everyone needs to be admitted. Many people with mental health conditions benefit enormously from regular, expert outpatient care — on their terms, in their lives. Our outpatient clinic on Kalidasa Road, Vijayanagar, Mysore, offers the full breadth of psychiatric, psychological, and medical care in a welcoming, private environment."
      />

      <section className="services-section">
        <div className="container">
          <div className="section-intro-grid">
            <div>
              <span className="eyebrow">Our Services</span>
              <h2>What We Offer at Our Outpatient Clinic</h2>
            </div>
            <div>
              <p>
                From psychiatric consultations to specialist dementia assessments, psychological
                therapy to teleconsultation — our outpatient clinic brings world-class
                neuropsychiatric expertise directly to you, without the need for admission.
              </p>
            </div>
          </div>
          <div className="service-cards">
            {SERVICES.map((s) => (
              <div key={s.title} className="svc-card">
                <div className="svc-icon" style={{ background: s.bg, color: s.fg }}>
                  <i className={`fas ${s.icon}`} />
                </div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            ))}
            <div className="svc-card svc-card-full">
              <div
                className="svc-icon"
                style={{ background: '#F5F0E8', color: 'var(--secondary)' }}
              >
                <i className="fas fa-video" />
              </div>
              <h3>Teleconsultation</h3>
              <p>
                For patients in Mysore, Bangalore, or elsewhere in Karnataka who cannot attend in
                person, we offer teleconsultation for appropriate outpatient needs. Please contact
                us to check eligibility and book.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="booking-section">
        <div className="container">
          <div className="booking-inner">
            <div className="booking-left">
              <span className="eyebrow">Appointment Booking</span>
              <h2>Booking Is Easy</h2>
              <p>
                Call us at +91 63641 11001, send us a WhatsApp message, or use our online
                appointment form. Our team will match you with the right specialist and find a time
                that works for you. Walk-in consultations are also welcome at our Kalidasa Road
                clinic during working hours.
              </p>
            </div>
            <div className="booking-methods">
              <a href="tel:+916364111001" className="book-row">
                <div className="book-icon" style={{ background: '#EEF6F7', color: 'var(--deep)' }}>
                  <i className="fas fa-phone-alt" />
                </div>
                <div className="book-row-text">
                  <strong>Call Us</strong>
                  <span>+91 63641 11001 — available 24×7</span>
                </div>
              </a>
              <a href="https://wa.me/916364111001" className="book-row">
                <div className="book-icon" style={{ background: '#F2F5EF', color: '#25D366' }}>
                  <i className="fab fa-whatsapp" />
                </div>
                <div className="book-row-text">
                  <strong>WhatsApp</strong>
                  <span>Message us and we'll respond promptly</span>
                </div>
              </a>
              <Link to="/admissions" className="book-row">
                <div
                  className="book-icon"
                  style={{ background: '#FBF0ED', color: 'var(--terracotta)' }}
                >
                  <i className="fas fa-calendar-check" />
                </div>
                <div className="book-row-text">
                  <strong>Online Appointment Form</strong>
                  <span>Book at a time that suits you</span>
                </div>
              </Link>
              <div className="book-row" style={{ cursor: 'default' }}>
                <div
                  className="book-icon"
                  style={{ background: '#F5F0E8', color: 'var(--primary)' }}
                >
                  <i className="fas fa-walking" />
                </div>
                <div className="book-row-text">
                  <strong>Walk-In Welcome</strong>
                  <span>
                    511, Kalidasa Road, Vijayanagar 1st Stage, Mysuru — 10 AM to 8 PM
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTAStrip />
    </>
  );
}
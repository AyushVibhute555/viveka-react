import { useEffect, useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

type Testimonial = {
  avatar: string;
  name: string;
  short: string;
  full: string;
};

type FooterLocation = {
  name: string;
  address: string;
  phone: string;
  mapLink?: string;
  mapSrc?: string;
};

const TESTIMONIALS: Testimonial[] = [
  {
    avatar: 'HG',
    name: 'Hemalatha Gangadhar',
    short:
      'We are immensely grateful for the centre for their help during the most stressful period of our life. The emotional stress involved in getting a relative hospitalized for mental health issues are indescribable.',
    full:
      "The decision to hospitalize a close relative is itself an agony and huge stressful factor. The fear that we are giving the care of a very dear person in the hands of people unknown to us is painful. The belief that all is going to get better makes us take this step.<br><br>Viveka centre made us very comfortable from the beginning. The supportive words and the way the staff encourage the patient as well as the family members is utterly commendable. They give us a feeling that they are with us in every step of management.<br><br>The Psychiatrist Dr Vasu has been immense strength in handling the mental health issues and very supportive of the prognosis.<br><br>Therapist Rajani ma'am is a very warm person who understands the nuances of interpersonal relationships. Her family therapy sessions were a wonderful experience. The way she discusses the importance of modification in behaviour is amazing.<br><br>The supportive staff have been great in their work. Their dedication and handling of day-to-day affairs has been exemplary.<br><br>The patient and their family are provided a comfortable space to explore the possibilities and the positive response received in the way of future hopes of their restored health. Thank you so much.<br><br>",
  },
  {
    avatar: 'SM',
    name: 'Shiv Mysuru',
    short:
      'During my first visit, I was initially skeptical that the hospital could provide a cure. However, after two days, I realized it is a top-notch facility for psychiatric care in Mysore.',
    full:
      "The environment is exceptional, featuring two kilometres of natural surroundings. The canteen facilities are excellent and unique — they cultivate their own vegetables on-site to prepare homely, high-quality meals. The hospitality is so warm that it truly feels like home.<br><br>The staff are outstanding:<br><br><strong>Security:</strong> Basavanna is a very kind person who provides helpful guidance to parents during every visit. <br><br><strong>Nursing:</strong> The team is very professional, including a friendly female nurse who responds calmly to all needs, as well as kind and dedicated male and female nursing staff from Kerala and Mysore.<br><br><strong>Medical Team:</strong> Doctors Vasu, Narendra, Preetham, and their female colleague are all highly skilled professionals whom I greatly appreciate.<br><br><strong>Front Desk:</strong> Shekar is a helpful and good-natured staff member.<br><br><strong>Security Dog:</strong> Even Shiva the dog does an excellent job, staying alert and barking whenever necessary.<br><br>Overall, this is an excellent Medicare facility that I highly recommend. Elders care very nicely.",
  },
  {
    avatar: 'CG',
    name: 'Chandana G',
    short:
      'We are extremely satisfied with the care and treatment our father is receiving during his stay at Viveka Hospital, Vajamangala.',
    full:
      'The medical team is professional and attentive. The facilities are clean and comfortable. Special thanks to the staff for their kindness and dedication. We appreciate the excellent service and would highly recommend this hospital.',
  },
  {
    avatar: 'FZ',
    name: 'Fathima Zahra',
    short:
      'We recently had our mother admitted for Dementia and other issues at Viveka Hospital Mysuru, and we are very grateful for the kindness and professionalism shown throughout her stay.',
    full:
      'The doctors, nurses, and supporting staff were patient, compassionate, and always took time to explain every step of her treatment.<br><br>We sincerely thank <strong>Dr. Vasu and Shekhar</strong>. The team made sure she was comfortable and treated with dignity. It made a difficult time much easier for us. Highly recommend Viveka Hospital for their exceptional care and support for patients and their families.',
  },
  {
    avatar: 'SK',
    name: 'Sandhya K G',
    short:
      "I'm very grateful for the care provided here. The doctors are professional and the nurses and staff are very kind and attentive.",
    full:
      'Excellent hospital with very caring doctors and nurses. The treatment and service were outstanding. Thank you to the entire team for your support.',
  },
  {
    avatar: 'RB',
    name: 'Rajashekhar Bhat',
    short:
      'The team of Viveka is reassuring. Felt very safe for my mother. She was in this facility for the last 4 years and well taken care of.',
    full:
      'They took care of her every need, right from medical to regular tests to entertainment and softer requirements. They were also very communicative and kept me updated at all times and answered all my queries.<br><br>I am truly grateful to the entire Viveka team — doctors, care staff — for their outstanding support.',
  },
];

const TIMELINE = [
  { year: '20XX', title: 'The Beginning', sub: 'A vision to create heart-led mental healthcare that prioritises dignity and accessibility.' },
  { year: '20xx', title: 'Strengthening Clinical Care', sub: 'Expansion of outpatient psychiatric consultations, counselling, and emotional well-being services.' },
  { year: '20xx', title: 'Viveka Hospital Established', sub: 'Launching specialised inpatient psychiatric and rehabilitation care.' },
  { year: '20xx', title: 'Integrated Mental Healthcare Model', sub: 'Building multidisciplinary care through psychiatry, psychology, rehabilitation, and comprehensive family support.' },
  { year: '2026', title: 'Viveka Shurthi Established', sub: 'Launching Viveka Shurthi — our fourth institution — while expanding geriatric, dementia, and neuro rehabilitation services across Karnataka.' },
  { year: 'Looking Ahead', title: 'Looking Ahead', sub: 'Continuing to improve mental healthcare access and wellbeing for individuals and families across Karnataka.' },
];

const LEADERS = [
  {
    name: 'Dr. Murali Krishna T N',
    role: 'Founder & Clinical Director',
    img: 'images/team/murali.jpg',
    bio: 'Dr. Murali Krishna T N is a UK-trained psychiatrist, global mental health leader, and geriatric care expert with over 20 years of experience. With deep expertise in psychiatry, dementia care, and brain health, he brings international clinical experience and research-led approaches to mental healthcare at Viveka. His work focuses on improving mental healthcare accessibility, dementia care systems, and equitable models of care for communities.',
  },
  {
    name: 'Mr. Arun Kumar',
    role: 'Non-Clinical Director & Head of Management Services',
    img: 'images/team/arun.jpg',
    bio: 'With over 25 years of experience, Mr. Arun Kumar is a seasoned social entrepreneur and impact-driven leader committed to strengthening systems in mental health, education, housing, and community development. At Viveka, he leads strategic and operational initiatives focused on building humane, scalable, and sustainable mental healthcare ecosystems.',
  },
  {
    name: 'Mrs. Soumya Rajagopal',
    role: 'Director',
    img: 'images/team/soumya.jpg',
    bio: 'Mrs. Soumya Rajagopal brings over 15 years of experience in psychiatric clinic management and patient support systems. Passionate about heartfelt care and social impact, she plays a vital role in strengthening patient experiences and care environments at Viveka.',
  },
  {
    name: 'Dr. Deepa B V',
    role: 'Director',
    img: 'images/team/deepa.jpg',
    bio: 'An Oral and Maxillofacial Surgeon with a special interest in mental health and patient wellbeing, Dr. Deepa B V contributes to strengthening care delivery through organisational excellence and empathetic leadership.',
  },
];

const EXPERTISE = [
  ['fa-brain', 'Psychiatry & Mental Health Care'],
  ['fa-hand-holding-heart', 'De-Addiction & Recovery Support'],
  ['fa-user-friends', 'Geriatric Psychiatry'],
  ['fa-child', 'Child & Adolescent Mental Health'],
  ['fa-comments', 'Psychological Therapy & Counselling'],
  ['fa-running', 'Physiotherapy & Occupational Therapy'],
  ['fa-ambulance', 'Emergency Psychiatric Care'],
  ['fa-sync-alt', 'Day Care for Specially abled kids'],
];

const VALUES = [
  ['01', 'Compassion', 'Care that starts with listening — truly listening.'],
  ['02', 'Dignity', 'Respectful care for every individual, regardless of circumstance.'],
  ['05', 'Integrity', 'Transparent, ethical, and responsible healthcare practices.'],
];

const WHY = [
  ['01', 'Experienced Specialists', 'Led by psychiatrists and multidisciplinary professionals with extensive clinical expertise.'],
  ['02', 'Ethical Practice', 'Transparent, wholehearted, and responsible healthcare rooted in dignity and trust.'],
  ['03', 'Patient-Centred Care', 'Personalised treatment plans designed around individual needs and recovery goals.'],
  ['04', 'Integrated Ecosystem', 'Hospital, clinic, Child Development center and Geriatric neuro rehabilitation centers services connected through one care journey.'],
  ['05', 'Family-Focused Support', 'Helping caregivers and families understand and support recovery.'],
  ['06', 'Modern Infrastructure', 'Healing environments designed to support comfort, safety, and well-being.'],
];

const FOOTER_LOCATIONS: FooterLocation[] = [
  {
    name: 'Viveka Hospital',
    address: '#4, Ganga Nagar, Off Mysore Bannur Road, Vajamangala, Mysuru – 570028',
    phone: '+91 63641 11001',
    mapLink: 'https://share.google/4V4qraBl4WrLulDub',
    mapSrc:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31185.570618666028!2d76.70656527910155!3d12.302561700000007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baf7354fd6f1259%3A0x2788a8e0ff317ee3!2sViveka%20Hospital!5e0!3m2!1sen!2sin!4v1779097106859!5m2!1sen!2sin',
  },
  {
    name: 'Viveka Clinic',
    address: '#511, Kalidasa Road, Vijayanagar 1st Stage, Mysuru – 570017',
    phone: '+91 63641 11003',
    mapLink: 'https://share.google/sIHyYA3vcoe4O2NU6',
    mapSrc:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3897.8490365329085!2d76.61329947482993!3d12.325946087933193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baf7b797d09a9d9%3A0x4e3a7d211e06c9ec!2sViveka%20Clinic!5e0!3m2!1sen!2sin!4v1779095963647!5m2!1sen!2sin',
  },
  {
    name: 'Viveka Chaitanya',
    address: 'KC Layout, Nadanahalli, Mysuru – 570011',
    phone: '+91 63641 11002',
    mapLink: 'https://share.google/4CkFI5Gie5bfc0yY3',
    mapSrc:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124742.28869770598!2d76.6447628087369!3d12.302548593344532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baf7165149542db%3A0x2cf2c25f452e7ed9!2sViveka%20Geriatric%20%26%20Neuro%20Rehabilitation%20Centre!5e0!3m2!1sen!2sin!4v1779097158295!5m2!1sen!2sin',
  },
  {
    name: 'Viveka Shurthi',
    address: 'Mysuru, Karnataka — established 2026 (address to be updated)',
    phone: '+91 63641 11001',
    mapLink: undefined,
    mapSrc: undefined,
  },
];

export default function Home() {
  /* ── TIMELINE SCROLL ANIMATION ── */
  useEffect(() => {
    const items = document.querySelectorAll<HTMLElement>('.home-page .tl-item');
    if (!items.length) return;
    const isInView = (el: Element) => {
      const r = el.getBoundingClientRect();
      return r.top < window.innerHeight - 80 && r.bottom > 60;
    };
    const isAboveView = (el: Element) => el.getBoundingClientRect().bottom < 40;
    const reveal = () => {
      items.forEach((el) => {
        if (isInView(el)) {
          if (!el.classList.contains('tl-visible')) {
            const delay = parseInt(el.getAttribute('data-delay') || '0', 10);
            window.setTimeout(() => {
              el.classList.add('tl-visible');
              el.classList.remove('tl-exit');
            }, delay);
          }
        } else if (isAboveView(el)) {
          el.classList.remove('tl-visible');
          el.classList.add('tl-exit');
        } else {
          el.classList.remove('tl-visible');
          el.classList.remove('tl-exit');
        }
      });
    };
    window.addEventListener('scroll', reveal, { passive: true });
    reveal();
    return () => window.removeEventListener('scroll', reveal);
  }, []);

  /* ── TESTIMONIAL CAROUSEL ── */
  const outerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const autoTimerRef = useRef<number | null>(null);
  const [current, setCurrent] = useState(0);
  const [perView, setPerView] = useState(3);
  const [expanded, setExpanded] = useState<Set<number>>(new Set());

  const total = TESTIMONIALS.length;
  const maxIndex = useMemo(() => Math.max(0, total - perView), [total, perView]);
  const dots = useMemo(() => Array.from({ length: maxIndex + 1 }, (_, i) => i), [maxIndex]);

  const stopAuto = () => {
    if (autoTimerRef.current) {
      window.clearInterval(autoTimerRef.current);
      autoTimerRef.current = null;
    }
  };

  const startAuto = () => {
    stopAuto();
    if (expanded.size > 0) return;
    autoTimerRef.current = window.setInterval(() => {
      setCurrent((c) => (c >= maxIndex ? 0 : c + 1));
    }, 4500);
  };

  useEffect(() => {
    const update = () => {
      const w = outerRef.current?.offsetWidth ?? 1200;
      const pv = w < 640 ? 1 : w < 960 ? 2 : 3;
      setPerView(pv);
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  useEffect(() => {
    setCurrent((c) => Math.min(c, maxIndex));
  }, [maxIndex]);

  useEffect(() => {
    if (!outerRef.current || !trackRef.current) return;
    const outer = outerRef.current;
    const track = trackRef.current;
    const gap = 20;
    const w = outer.offsetWidth;
    const slideW = (w - gap * (perView - 1)) / perView;
    const slides = track.querySelectorAll<HTMLElement>('.testi-slide');
    slides.forEach((s) => {
      s.style.flex = `0 0 ${slideW}px`;
      s.style.marginRight = `${gap}px`;
    });
    track.style.transform = `translateX(-${current * (slideW + gap)}px)`;
    track.style.transition = 'transform 0.55s cubic-bezier(0.4,0,0.2,1)';
  }, [current, perView]);

  useEffect(() => {
    startAuto();
    return () => stopAuto();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [maxIndex, expanded.size]);

  const next = () => setCurrent((c) => (c >= maxIndex ? 0 : c + 1));
  const prev = () => setCurrent((c) => (c <= 0 ? maxIndex : c - 1));

  const toggleReadMore = (idx: number) => {
    setExpanded((s) => {
      const n = new Set(s);
      if (n.has(idx)) n.delete(idx);
      else n.add(idx);
      return n;
    });
  };

  return (
    <div className="home-page">
      {/* ── HERO ── */}
      <div className="hero" id="home">
        <div className="hero-panel panel-1">
          <div className="hero-panel-bg" />
          <div className="hero-panel-overlay" />
          <div className="hero-panel-content">
            <div className="hero-panel-icon"><i className="fas fa-hospital-alt" /></div>
            <div className="hero-panel-eyebrow">Viveka Hospital</div>
            <h2>Mental Healthcare &amp; Rehabilitation</h2>
            <div className="hero-panel-sub">Comprehensive inpatient and outpatient psychiatric care, emergency mental health support, de-addiction services, and structured rehabilitation designed to support long-term recovery.</div>
            <Link to="/viveka-hospital" className="hero-panel-cta">Explore Viveka Hospital <i className="fas fa-arrow-right" style={{ fontSize: '0.75rem' }} /></Link>
          </div>
        </div>
        <div className="hero-panel panel-2">
          <div className="hero-panel-bg" />
          <div className="hero-panel-overlay" />
          <div className="hero-panel-content">
            <div className="hero-panel-icon"><i className="fas fa-clinic-medical" /></div>
            <div className="hero-panel-eyebrow">Viveka Clinic</div>
            <h2>Consultations, Therapy &amp; Emotional Wellbeing</h2>
            <div className="hero-panel-sub">Expert psychiatric consultations, therapy, counselling, assessments, and follow-up care for individuals, children, older adults, and families.</div>
            <Link to="/viveka-clinic" className="hero-panel-cta">Explore Viveka Clinic <i className="fas fa-arrow-right" style={{ fontSize: '0.75rem' }} /></Link>
          </div>
        </div>
        <div className="hero-panel panel-3">
          <div className="hero-panel-bg" />
          <div className="hero-panel-overlay" />
          <div className="hero-panel-content">
            <div className="hero-panel-icon"><i className="fas fa-brain" /></div>
            <div className="hero-panel-eyebrow">Viveka Chaitanya</div>
            <h2>Specialised Recovery for Mind, Body &amp; Mobility</h2>
            <div className="hero-panel-sub">Specialised rehabilitation and supportive care for older adults and individuals recovering from neurological and psychiatric conditions.</div>
            <Link to="/viveka-chaitanya" className="hero-panel-cta">Explore Viveka Chaitanya <i className="fas fa-arrow-right" style={{ fontSize: '0.75rem' }} /></Link>
          </div>
        </div>
        <div className="hero-panel panel-4">
          <div className="hero-panel-bg" />
          <div className="hero-panel-overlay" />
          <div className="hero-panel-content">
            <div className="hero-panel-icon"><i className="fas fa-spa" /></div>
            <div className="hero-panel-eyebrow">Viveka Shurthi · Est. 2026</div>
            <h2>New Horizons in Mental Wellness</h2>
            <div className="hero-panel-sub">Our newest institution, established in 2026 — expanding the Viveka ecosystem with specialised programmes designed to bring healing and wellness to more individuals and families across Karnataka.</div>
            <Link to="/viveka-shurthi" className="hero-panel-cta">Explore Viveka Shurthi <i className="fas fa-arrow-right" style={{ fontSize: '0.75rem' }} /></Link>
          </div>
        </div>
      </div>

      {/* ── INTRO SPLIT ── */}
      <div className="intro-split">
        <div className="intro-split-image" />
        <div className="intro-split-text">
          <h2 className="headline">Thoughtful Mental Healthcare, Designed Around <em>Every Stage of Life</em></h2>
          <p className="subline">An integrated ecosystem of mental healthcare, rehabilitation, emotional wellbeing, and geriatric support.</p>
          <p className="body-text">Mental health journeys are deeply personal, and no two paths look the same. At Viveka, we provide specialised care through dedicated institutions designed to support individuals at every stage — from outpatient consultations and therapy to inpatient recovery, rehabilitation, and geriatric care.</p>
          <Link to="/contact" className="btn-primary"><i className="fas fa-calendar-alt" style={{ fontSize: '0.75rem' }} /> Book Appointment</Link>
        </div>
      </div>

      {/* ── ABOUT ── */}
      <section className="about" id="about">
        <div className="about-grid">
          <div className="about-text">
            <h2 className="section-title">About Viveka Group</h2>
            <div className="section-label">Caring for Minds. Supporting Families. Building Hope.</div>
            <p>At Viveka, we believe mental healthcare should be warm, accessible, and deeply human. We are committed to supporting for individuals, children, older adults, and families.</p>
            <p>Our integrated ecosystem brings together <strong>Viveka Hospital, Viveka Clinic, Viveka Chaitanya, and Viveka Shurthi</strong> — our newest institution, established in 2026 — to provide personalised support for every stage of mental health and recovery.</p>
            <p>Whether someone requires immediate psychiatric care, therapy, long-term rehabilitation, dementia support, or emotional guidance, we strive to ensure that every person feels seen, heard, and supported.</p>
          </div>
          <div className="about-institutions">
            <Link to="/viveka-hospital" className="inst-feature-card hosp" style={{ textDecoration: 'none', color: 'inherit' }}>
              <div className="inst-feature-icon"><i className="fas fa-hospital-alt" /></div>
              <div>
                <h4>Viveka Hospital</h4>
                <p>Comprehensive inpatient and outpatient psychiatric care, emergency mental health support, de-addiction services, and structured rehabilitation designed to support long-term recovery.</p>
              </div>
            </Link>
            <Link to="/viveka-clinic" className="inst-feature-card clinic" style={{ textDecoration: 'none', color: 'inherit' }}>
              <div className="inst-feature-icon"><i className="fas fa-clinic-medical" /></div>
              <div>
                <h4>Viveka Clinic</h4>
                <p>Expert psychiatric consultations, therapy, counselling, assessments, and follow-up care for individuals, children, older adults, and families.</p>
              </div>
            </Link>
            <Link to="/viveka-chaitanya" className="inst-feature-card gnrc" style={{ textDecoration: 'none', color: 'inherit' }}>
              <div className="inst-feature-icon"><i className="fas fa-brain" /></div>
              <div>
                <h4>Viveka Chaitanya</h4>
                <p>Specialised rehabilitation and supportive care for older adults and individuals recovering from neurological and psychiatric conditions.</p>
              </div>
            </Link>
            <Link to="/viveka-shurthi" className="inst-feature-card shurthi" style={{ textDecoration: 'none', color: 'inherit' }}>
              <div className="inst-feature-icon"><i className="fas fa-spa" /></div>
              <div>
                <h4>Viveka Shurthi <span style={{ fontSize: '0.68rem', color: 'var(--muted-teal)', fontWeight: 600, letterSpacing: '0.06em', marginLeft: 6 }}>· EST. 2026</span></h4>
                <p>Our newest institution, established in 2026 — expanding the Viveka ecosystem to bring specialised mental wellness care to more individuals and families.</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ── VISION & MISSION ── */}
      <section className="vision-mission" id="values">
        <h2 className="section-title">What Drives us</h2>
        <div className="section-label">Care Rooted in Empathy, Guided by Purpose</div>
        <div className="vm-grid">
          <div className="vm-card vision">
            <div className="vm-card-label">Our Vision</div>
            <h3>A Future Where Mental Healthcare is Accessible, Heart-Centred, and Free from Stigma</h3>
            <p>We envision a future where every individual facing emotional, psychological, or mental health challenges receives timely, attentive, and evidence-based care without fear, stigma, or judgment.</p>
            <div className="vm-card-deco"><i className="fas fa-eye" /></div>
          </div>
          <div className="vm-card mission">
            <div className="vm-card-label">Our Mission</div>
            <h3>Supporting Healing Through Personalised and Ethical Care</h3>
            <p>Our mission is to deliver high-quality psychiatric, psychological, rehabilitation, and geriatric care through a multidisciplinary, patient-centred approach that prioritises dignity, understanding, and long-term wellbeing.</p>
            <div className="vm-card-deco"><i className="fas fa-heart" /></div>
          </div>
        </div>
      </section>

      {/* ── CORE VALUES ── */}
      <section className="core-values">
        <h2 className="section-title">Our Core Values</h2>
        <div className="values-grid">
          {VALUES.map(([n, name, desc]) => (
            <div key={n} className="value-card">
              <div className="value-num">{n}</div>
              <div className="value-name">{name}</div>
              <div className="value-desc">{desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── FOUNDER ── */}
      <section className="founders" id="founders">
        <h2 className="section-title">Founder's Message</h2>
        <div className="founders-inner">
          <div className="founder-portrait">
            <div className="founder-img-wrap"><i className="fas fa-user-md" /></div>
            <div className="founder-name">Dr. Murali Krishna T N</div>
            <div className="founder-title">Clinical Director, Viveka Group</div>
          </div>
          <div className="founders-message">
            <h3>Creating a More Human Future for Mental Healthcare</h3>
            <p>Viveka was born out of a belief that world-class mental health care should not be a privilege of geography or circumstance. Every person, in Mysore, in rural Karnataka, anywhere, deserves to be seen, heard, and cared for with genuine kindness and clinical excellence. That belief drives everything we do.</p>
            <p>We started small. But our ambition was always large: to build something that would genuinely change how mental health is understood, accessed, and delivered in Karnataka. We are still building. And we are grateful for every family that has trusted us with something as precious as the well-being of someone they love.</p>
            <div className="signature">— Dr. Murali Krishna T N</div>
          </div>
        </div>
      </section>

      {/* ── JOURNEY / TIMELINE ── */}
      <section className="journey" id="journey">
        <h2 className="section-title">Our Journey</h2>
        <div className="section-label">A Journey of Care, Growth, and Commitment</div>
        <p className="section-intro">Every milestone at Viveka reflects our continued dedication to building warm, accessible, and specialised mental healthcare services.</p>
        <div className="timeline-wrapper">
          <div className="timeline-track" />
          <div className="timeline-items">
            {TIMELINE.map((t, i) => (
              <div key={i} className="tl-item" data-delay={String(i * 130)}>
                <div className="tl-dot-wrap">
                  <div className="tl-dot-ring" />
                  <div className="tl-dot" />
                </div>
                <div className="tl-year">{t.year}</div>
                <div className="tl-card">
                  <div className="tl-card-title">{t.title}</div>
                  <div className="tl-card-sub">{t.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LEADERSHIP ── */}
      <section className="leadership" id="team">
        <h2 className="section-title">Leadership Team</h2>
        <div className="section-label">Guided by Experience. Driven by Kindness.</div>
        <p className="section-intro">Our leadership team combines medical expertise, wholehearted care, operational excellence, and a shared commitment to improving mental healthcare for individuals and families.</p>
        <div className="leadership-grid">
          {LEADERS.map((l) => (
            <div key={l.name} className="leader-card">
              <div className="leader-content">
                <div className="leader-info">
                  <div className="leader-name">{l.name}</div>
                  <div className="leader-role">{l.role}</div>
                  <div className="leader-divider" />
                  <div className="leader-bio">{l.bio}</div>
                </div>
                <div className="leader-image-wrap">
                  <img
                    src={`/${l.img}`}
                    alt={l.name}
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).style.display = 'none';
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── EXPERTISE ── */}
      <section className="expertise" id="expertise">
        <h2 className="section-title">Our Expertise</h2>
        <div className="section-label">Comprehensive Mental Healthcare for Every Stage of Life</div>
        <div className="expertise-grid">
          {EXPERTISE.map(([icon, name]) => (
            <div key={name} className="exp-card">
              <div className="exp-icon"><i className={`fas ${icon}`} /></div>
              <div className="exp-name">{name}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── WHY VIVEKA ── */}
      <section className="why" id="why">
        <h2 className="section-title">Why Choose Viveka?</h2>
        <div className="section-label">Compassionate Care. Trusted Mental Health Support.</div>
        <div className="why-grid">
          {WHY.map(([n, title, text]) => (
            <div key={n} className="why-card">
              <div className="why-num">{n}</div>
              <h4>{title}</h4>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="testimonials" id="testimonials">
        <h2 className="section-title">Patient Experiences</h2>
        <div className="section-label">Stories of Hope, Recovery, and Care</div>
        <p className="section-intro">Every journey towards healing is unique. We are privileged to support individuals and families through moments of uncertainty, helping them rediscover stability, confidence, and hope.</p>

        <div className="testi-controls">
          <div className="testi-dots" role="tablist">
            {dots.map((i) => (
              <div
                key={i}
                className={`testi-dot${i === current ? ' active' : ''}`}
                onClick={() => setCurrent(i)}
                role="button"
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>
          <div className="testi-arrows">
            <button className="testi-arrow" aria-label="Previous" onClick={prev}>
              <i className="fas fa-chevron-left" />
            </button>
            <button className="testi-arrow" aria-label="Next" onClick={next}>
              <i className="fas fa-chevron-right" />
            </button>
          </div>
        </div>

        <div
          className="testi-carousel-outer"
          ref={outerRef}
          onMouseEnter={stopAuto}
          onMouseLeave={startAuto}
        >
          <div className="testi-carousel-track" ref={trackRef}>
            {TESTIMONIALS.map((t, i) => {
              const isOpen = expanded.has(i);
              return (
                <div key={i} className="testi-slide">
                  <div className="testimonial-card">
                    <div className="stars">★★★★★</div>
                    <p className="testi-text">
                      {t.short}
                      {isOpen && (
                        <span
                          className="testi-more-inline"
                          dangerouslySetInnerHTML={{ __html: t.full }}
                        />
                      )}
                    </p>
                    <button className="testi-readmore" onClick={() => toggleReadMore(i)}>
                      {isOpen ? 'Read Less' : 'Read More'}
                    </button>
                    <div className="testi-author">
                      <div className="testi-avatar">{t.avatar}</div>
                      <div>
                        <h4 className="testi-name">{t.name}</h4>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer id="contact">
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
              <li><a href="#about">About Us</a></li>
              <li><Link to="/viveka-hospital">Hospital</Link></li>
              <li><Link to="/viveka-clinic">Clinic</Link></li>
              <li><Link to="/viveka-chaitanya">Chaitanya</Link></li>
              <li><Link to="/viveka-shurthi">Shurthi</Link></li>
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

      {/* ── STICKY BAR ── */}
      <div className="sticky-bar">
        <span>Need help? Call us 24×7</span>
        <button
          className="btn-primary"
          style={{ fontSize: '0.75rem', padding: '7px 16px' }}
          onClick={() => window.location.assign('tel:+916364111001')}
        >
          <i className="fas fa-phone" style={{ fontSize: '0.65rem' }} /> Call Now
        </button>
        <a href="https://wa.me/916364111001" className="whatsapp" aria-label="WhatsApp">
          <i className="fab fa-whatsapp" />
        </a>
      </div>
    </div>
  );
}
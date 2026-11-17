import { useEffect, useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import vivekaHospital from '../assets/viveka-hospital.png';
import vivekaClinic from '../assets/viveka-clinic.png';
import vivekaChaitanya from '../assets/viveka-chaitanya.png';
import vivekaSpoorthi from '../assets/viveka-spoorthi.png';

type Testimonial = {
  avatar: string;
  name: string;
  short: string;
  full: string;
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
  {
    year: '2019',
    title: 'The Beginning',
    summary: '',
    sub: 'A vision to create heart-led mental healthcare that prioritises dignity and accessibility.'
  },
  {
    year: '2019',
    title: 'Viveka Hospital',
    summary: 'Integrated Mental Healthcare Model',
    sub: 'Building multidisciplinary care through psychiatry, psychology, acute care, rehabilitation, and family support.'
  },
  {
    year: '2020',
    title: 'Viveka Clinic',
    summary: 'Mental Healthcare and Rehabilitation Center',
    sub: 'Expansion of outpatient psychiatric consultations, counselling, and emotional well-being services.'
  },
  {
    year: '2026',
    title: 'Viveka Chaitanya',
    summary: 'Geriatric and Neurological Rehabilitation Centre',
    sub: 'Strengthening services focused on ageing, dementia care, rehabilitation, and neuro support.'
  },
  {
    year: '2026',
    title: 'Viveka Spoorthi',
    summary: 'Early Intervention and Child Development Centre',
    sub: 'Expanding geriatric, dementia, and neuro rehabilitation services across Karnataka.'
  },
  {
    year: 'Looking Ahead',
    title: 'Looking Ahead',
    summary: '',
    sub: 'Continuing to improve mental healthcare access and wellbeing for individuals and families across Karnataka.'
  },
];

const LEADERS = [
  {
    name: 'Mr. Arun Kumar',
    role: 'Founder & Operations Head',
    img: 'images/team/arun.jpg',
    bio: 'Mr. Arun Kumar is a Social Entrepreneur and impact-driven leader with over 25 years of experience in community development, education, housing, and mental healthcare initiatives. At Viveka Hospital, he leads strategic and operational initiatives focused on creating compassionate, scalable, and sustainable mental healthcare ecosystems. Driven by a deep commitment to social impact, he envisions integrated models of care that combine ethics, accessibility, rehabilitation, and holistic well-being, with the goal of transforming the way mental health and community care are delivered.',
  },
  {
    name: 'Dr. Murali Krishna T N',
    role: 'Co-Founder & Clinical Head',
    img: 'images/team/murali.jpg',
    bio: 'Dr. Murali Krishna T N is a UK-trained psychiatrist and expert in geriatric psychiatry, dementia care, and brain health, with over 20 years of experience. He is the Clinical Head at Viveka and brings extensive expertise from nearly 15 years in the NHS, United Kingdom, where he helped establish memory clinics and specialised dementia services, A Member of the Royal College of Psychiatrists, UK, and holder of a PhD from the University of Southampton, Dr. Murali is internationally recognised for his work in dementia care, geriatric mental health, and global brain health research.',
  },
];

const EXPERTISE = [
  ['fa-brain', 'Psychiatry & Mental Health Care'],
  ['fa-hand-holding-heart', 'De-Addiction & Rehabilitation Centre'],
  ['fa-user-friends', 'Geriatric and Neurological Rehabilitation Centre'],
  ['fa-child', 'Child & Adolescent Mental Health'],
  ['fa-comments', 'Psychological Therapy & Counselling'],
  ['fa-running', 'Physiotherapy & Occupational Therapy'],
  ['fa-ambulance', 'Emergency Psychiatric Care'],
  ['fa-sync-alt', 'Day Care for Specially abled kids'],
];

const VALUES = [
  ['01', 'Compassion', 'Care that begins with empathy and understanding.'],
  ['02', 'Dignity', 'Respectful care for every individual, regardless of circumstance.'],
  ['03', 'Integrity', 'Transparent, ethical, and responsible healthcare practices.'],
];

const WHY = [
  ['01', 'Experienced Specialists', 'Led by psychiatrists and multidisciplinary professionals with extensive clinical expertise.'],
  ['02', 'Ethical Practice', 'Transparent, wholehearted, and responsible healthcare rooted in dignity and trust.'],
  ['03', 'Patient-Centred Care', 'Personalised treatment plans designed around individual needs and recovery goals.'],
  ['04', 'Integrated Ecosystem', 'Hospital, clinic, Child Development center and Geriatric neuro rehabilitation centers services connected through one care journey.'],
  ['05', 'Family-Focused Support', 'Helping caregivers and families understand and support recovery.'],
  ['06', 'Modern Infrastructure', 'Healing environments designed to support comfort, safety, and well-being.'],
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
      <h1 className="sr-only">Viveka Mental Healthcare and Rehabilitation</h1>
      {/* ── HERO ── */}
      <div className="hero" id="home">
        <div className="hero-panel panel-1">
          <div className="hero-panel-bg" style={{ backgroundImage: `url(${vivekaHospital})` }} />
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
          <div className="hero-panel-bg" style={{ backgroundImage: `url(${vivekaClinic})` }} />
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
          <div className="hero-panel-bg" style={{ backgroundImage: `url(${vivekaChaitanya})` }} />
          <div className="hero-panel-overlay" />
          <div className="hero-panel-content">
            <div className="hero-panel-icon"><i className="fas fa-brain" /></div>
            <div className="hero-panel-eyebrow">Viveka Chaitanya</div>
            <h2>Geriatric and Neurological Rehabilitation Centre</h2>
            <div className="hero-panel-sub">Specialised rehabilitation and supportive care for older adults and individuals recovering from neurological and psychiatric conditions.</div>
            <Link to="/viveka-chaitanya" className="hero-panel-cta">Explore Viveka Chaitanya <i className="fas fa-arrow-right" style={{ fontSize: '0.75rem' }} /></Link>
          </div>
        </div>
        <div className="hero-panel panel-4">
          <div className="hero-panel-bg" style={{ backgroundImage: `url(${vivekaSpoorthi})` }} />
          <div className="hero-panel-overlay" />
          <div className="hero-panel-content">
            <div className="hero-panel-icon"><i className="fas fa-spa" /></div>
            <div className="hero-panel-eyebrow">Viveka Spoorthi</div>
            <h2>Early Intervention and Child Development Centre</h2>
            <div className="hero-panel-sub">Our newest institution, in 2026 — expanding the Viveka ecosystem with specialised programmes designed to bring healing and wellness to more individuals and families across Karnataka.</div>
            <Link to="/viveka-spoorthi" className="hero-panel-cta">Explore Viveka Spoorthi <i className="fas fa-arrow-right" style={{ fontSize: '0.75rem' }} /></Link>
          </div>
        </div>
      </div>

      {/* ── ABOUT ── */}
      <section className="about" id="about">
        <div className="about-header">
          <h2 className="about-title">
            Thoughtful Mental Healthcare, Designed Around <em>Every Stage of Life</em>
          </h2>
          <p className="about-lead">
            An integrated ecosystem of mental healthcare, rehabilitation, emotional wellbeing, and geriatric support.
          </p>
        </div>

        <div className="about-split">
          <div className="about-left">
            <h3 className="about-subheading">About Viveka</h3>
            <div className="about-body">
              <p>Mental health journeys are deeply personal, and no two paths look the same. At Viveka, we provide specialised care through dedicated institutions designed to support individuals at every stage — from outpatient consultations and therapy to inpatient recovery, rehabilitation, and geriatric care.</p>
              <p>At Viveka, we believe mental healthcare should be warm, accessible, and deeply human. We are committed to supporting individuals, children, older adults, and families.</p>
              <p>Our integrated ecosystem brings together <strong>Viveka Hospital, Viveka Clinic, Viveka Chaitanya, and Viveka Spoorthi</strong> — our newest institution, to provide personalised support for every stage of mental health and recovery.</p>
              <p>Whether someone requires immediate psychiatric care, therapy, long-term rehabilitation, dementia support, or emotional guidance, we strive to ensure that every person feels seen, heard, and supported.</p>
            </div>
          </div>

          <div className="about-right">
            <div className="about-institutions-grid">
              <Link to="/viveka-hospital" className="inst-feature-card hosp">
                <div className="inst-feature-icon"><i className="fas fa-hospital-alt" /></div>
                <div>
                  <h4>Viveka Hospital</h4>
                  <p>Comprehensive inpatient and outpatient psychiatric care, emergency mental health support, de-addiction services, and structured rehabilitation designed to support long-term recovery.</p>
                </div>
              </Link>
              <Link to="/viveka-clinic" className="inst-feature-card clinic">
                <div className="inst-feature-icon"><i className="fas fa-clinic-medical" /></div>
                <div>
                  <h4>Viveka Clinic</h4>
                  <p>Expert psychiatric consultations, therapy, counselling, assessments, and follow-up care for individuals, children, older adults, and families.</p>
                </div>
              </Link>
              <Link to="/viveka-chaitanya" className="inst-feature-card gnrc">
                <div className="inst-feature-icon"><i className="fas fa-brain" /></div>
                <div>
                  <h4>Viveka Chaitanya</h4>
                  <p>Specialised rehabilitation and supportive care for older adults and individuals recovering from neurological and psychiatric conditions.</p>
                </div>
              </Link>
              <Link to="/viveka-spoorthi" className="inst-feature-card spoorthi">
                <div className="inst-feature-icon"><i className="fas fa-spa" /></div>
                <div>
                  <h4>Viveka Spoorthi</h4>
                  <p>Our institution, expanding the Viveka ecosystem to bring specialised mental wellness care to more individuals and families.</p>
                </div>
              </Link>
            </div>
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
            <div className="founder-name">Mr. Arun Kumar</div>
            <div className="founder-title">Founder, Viveka Group</div>
          </div>
          <div className="founders-message">
            <h3>Creating a More Human Future for Mental Healthcare</h3>
            <p>Viveka was founded on a simple yet profound belief — that mental healthcare is not a privilege, but a fundamental human need. No matter where a person comes from, every individual deserves to be seen, heard, and cared for with compassion, dignity, and clinical excellence.</p>
            <p>What began as a humble initiative was inspired by a larger vision: to transform the way mental health is understood, accessed, and experienced across communities. In a world where emotional struggles often remain unseen, we aspire to create a safe, inclusive, and healing environment where people feel supported, respected, and empowered.</p>
            <p>At Viveka, we believe true care goes beyond treatment. It is about building trust, restoring hope, reducing stigma, and making quality mental healthcare accessible and affordable to all. Every step of our journey has been guided by empathy, ethical practice, and a deep commitment to human well-being.</p>
            <p>We are grateful to the families, professionals, and well-wishers who have placed their trust in us with something as precious as the well-being of their loved ones. As we continue to grow, our mission remains unchanged — to build a future where mental wellness is embraced with openness, understanding, and hope.</p>
            <div className="signature">— Mr. Arun Kumar, Founder, Viveka Group</div>
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

                  {/* NEW: The summary text after the comma */}
                  {t.summary && <div className="tl-card-summary">{t.summary}</div>}

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
              <button
                key={i}
                type="button"
                className={`testi-dot${i === current ? ' active' : ''}`}
                onClick={() => setCurrent(i)}
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
                    <div className="stars" aria-label="5 out of 5 stars" role="img">★★★★★</div>
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

    </div>
  );
}
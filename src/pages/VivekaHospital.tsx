import { useEffect, useState } from 'react';

// --- TEAM DATA ---
const TEAM_MEMBERS = [
  {
    name: 'Dr. Rajagopal R',
    role: 'Lead Consultant – de addiction and rehabilitation services',
    initials: 'RR',
    bio: "Dr. Rajagopal R leads Acute Care Services at Viveka and is a senior psychiatrist with an MD in Psychiatry from the Post Graduate Institute of Medical Education and Research (PGI-MER), Chandigarh.<br><br>With over a decade of experience in mental healthcare in Mysuru, he has specialised expertise in psychiatric emergencies, acute mental health management, and addiction care. His compassionate and evidence-based approach has helped numerous individuals and families navigate mental health crises with confidence and support.<br><br>Dr. Rajagopal also leads research on suicide epidemiology and prevention in Mysuru and collaborates with leading institutions including the University of Manchester and University of Chester, UK. His work has been published in several national and international journals.",
  },
  {
    name: 'Dr. Narendra Kumar MS',
    role: 'Lead Consultant – child and adolescent psychiatry',
    initials: 'NK',
    bio: "Dr. Narendra Kumar MS is the Lead Consultant for De-Addiction and Rehabilitation Services at Viveka.<br><br>Trained at the National Institute of Mental Health and Neurosciences (NIMHANS), he brings over 15 years of experience in psychiatric rehabilitation and addiction recovery across inpatient and community settings.<br><br>With a special interest in maternal mental health, Dr. Narendra combines clinical expertise with compassionate care to support long-term recovery and rehabilitation. He is also an accomplished mental health educator and regularly conducts training programmes focused on mental health awareness and rehabilitation practices.<br><br>",
  },
  {
    name: 'Dr. Vasu Papaiah',
    role: 'Consultant acute and adolescent psychiatry care services',
    initials: 'VP',
    bio: "Dr. Vasu Papaiah is a dedicated psychiatrist committed to providing compassionate, personalised mental healthcare for individuals seeking emotional wellbeing and recovery.<br><br>He completed his MBBS from S N Medical College, Bagalkot, and MD in Psychiatry from Kempegowda Institute of Medical Sciences, Bengaluru. Known for his empathetic and patient-centred approach, Dr. Vasu creates safe spaces where individuals feel supported in sharing their experiences and working towards meaningful healing.<br><br>His services include comprehensive psychiatric evaluations, medication management, psychotherapy, and counselling tailored to each individual’s unique needs.",
  },
  {
    name: 'Chitralekha ',
    role: 'Consultant ',
    initials: '-----',
    bio: "---",
  },
];

// --- FAQ DATA ---
const FAQS = [
  // --- Existing FAQs ---
  {
    q: 'When should someone consider psychiatric hospital care?',
    a: 'When emotional, behavioural, or mental health challenges begin affecting safety, daily functioning, or quality of life, professional support may be beneficial. Our team is available to assess and guide you to the right level of care — whether outpatient or inpatient.'
  },
  {
    q: 'Do you provide emergency psychiatric support?',
    a: 'Yes. Our emergency mental healthcare services are available 24×7. Our team provides compassionate crisis management, psychiatric stabilisation, and immediate support for both individuals and families during difficult moments.'
  },
  {
    q: 'Can families be involved in the care process?',
    a: 'Absolutely. We believe families play an important role in recovery and encourage collaborative care. Family involvement is built into many of our treatment programmes, including de-addiction, rehabilitation, and long-term recovery planning.'
  },
  {
    q: 'Do you offer both OPD and admission services?',
    a: 'Yes. Viveka Hospital offers both outpatient consultations and inpatient psychiatric care. Our care pathways are personalised to ensure continuity of care at every stage of recovery, whether you need a single consultation or long-term residential support.'
  },

  // --- New Additions ---
  {
    q: 'What conditions do you treat at Viveka Hospital?',
    a: 'We treat a wide range of mental health conditions including depression, anxiety disorders, bipolar disorder, schizophrenia, obsessive-compulsive disorder (OCD), post-traumatic stress disorder (PTSD), and substance use disorders (de-addiction). We also provide geriatric and child/adolescent psychiatric care.'
  },
  {
    q: 'How do I book a first appointment or consultation?',
    a: 'You can book an appointment by calling our front desk directly or by filling out the contact form on our website. During your first visit, you will meet with a psychiatrist who will conduct a comprehensive assessment and discuss a personalised treatment plan with you.'
  },
  {
    q: 'How do you ensure patient privacy and confidentiality?',
    a: 'Confidentiality is a cornerstone of psychiatric care. All medical records, therapy sessions, and treatment details are kept strictly confidential. Information is only shared with family members or other healthcare providers with the patient\'s explicit consent, except in life-threatening emergencies.'
  },
  {
    q: 'Do you accept health insurance for psychiatric care?',
    a: 'Yes, we work with major health insurance providers that cover mental health treatments. We recommend contacting our billing department before admission to verify your specific policy and understand the coverage for psychiatric and de-addiction services.'
  },
  {
    q: 'What types of therapies and treatments do you offer?',
    a: 'Our treatment approach combines medication management with evidence-based psychotherapies such as Cognitive Behavioural Therapy (CBT), Dialectical Behaviour Therapy (DBT), family therapy, and group therapy. For specific conditions, we also offer specialised interventions like ECT (Electroconvulsive Therapy) when clinically indicated.'
  },
  {
    q: 'How long does a typical inpatient stay last?',
    a: 'The duration of an inpatient stay depends entirely on the individual\'s condition and response to treatment. While some acute stabilisations may take a few days, comprehensive psychiatric and de-addiction programmes typically range from 2 to 4 weeks, followed by structured outpatient follow-ups.'
  },
  {
    q: 'What happens after I am discharged?',
    a: 'Recovery doesn\'t end at discharge. We provide a clear aftercare plan that includes scheduled follow-up appointments, continued medication management, and guidance on support groups. We also work with families to create a safe and supportive home environment to prevent relapse.'
  },
  {
    q: 'Can a patient be admitted voluntarily, or is it involuntary?',
    a: 'The vast majority of our admissions are voluntary, where the patient recognizes the need for help. In certain critical situations where a patient poses a risk to themselves or others, admission may be facilitated by family members in accordance with the Mental Healthcare Act, 2017, ensuring the highest standard of legal and ethical care.'
  }
];

export default function VivekaHospital() {
  const [selectedMember, setSelectedMember] = useState<typeof TEAM_MEMBERS[0] | null>(null);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  // Scroll Reveal Animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('vhp-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -32px 0px' }
    );

    const reveals = document.querySelectorAll('.vhp-reveal');
    reveals.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedMember) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedMember]);

  return (
    <div className="vhp-wrap">
      <style>{`
        /* ═══════════════════════════════════════════════════════════
           VIVEKA HOSPITAL PAGE SCOPED CSS
        ═══════════════════════════════════════════════════════════ */
        .vhp-wrap {
          --vhp-primary: #7A3010;
          --vhp-secondary: #C8885C;
          --vhp-teal: #7A3010;
          --vhp-teal-light: #F5E6DA;
          --vhp-teal-dark: #5C2208;
          --vhp-amber: #A16928;
          --vhp-amber-light: #f5ead8;
          --vhp-muted-teal: #C8885C;
          --vhp-terracotta: #B85A3C;
          --vhp-cream: #FCFAF5;
          --vhp-sand: #FCF8F1;
          --vhp-text-dark: #2a3b3f;
          --vhp-text-mid: #4d676f;
          --vhp-text-soft: #7e9fa5;
          --vhp-border: #E8D5C4;
          --vhp-sage: #CBD5BC;
          --vhp-sage-light: #eef2e8;
          
          background: var(--vhp-cream);
          color: var(--vhp-text-dark);
          line-height: 1.6;
          overflow-x: hidden;
          font-family: 'Google Sans Flex', sans-serif;
        }

        /* --- HERO --- */
        .vhp-hero {
          display: grid;
          grid-template-columns: 1fr 1fr;
          min-height: calc(100vh - 108px);
          overflow: hidden;
          margin-top: 108px; /* offset for fixed global header */
        }
        .vhp-hero-left {
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 72px 56px 72px 72px;
          background: var(--vhp-sand);
          position: relative;
        }
        .vhp-hero-eyebrow {
          display: flex; align-items: center; gap: 10px;
          font-size: 1.6rem; font-weight: 700; text-transform: uppercase;
          letter-spacing: 0.16em; color: var(--vhp-terracotta); margin-bottom: 20px;
          opacity: 0; animation: vhpFadeUp 0.7s 0.2s forwards;
        }
        .vhp-hero-h1 {
          font-size: clamp(0.8rem, 2vw, 1.8rem); font-weight: 430; line-height: 1.12;
          color: var(--vhp-text-dark); margin-bottom: 8px;
          opacity: 0; animation: vhpFadeUp 0.7s 0.35s forwards;
        }
        .vhp-hero-h1 em { font-style: italic; color: var(--vhp-teal); }
        .vhp-hero-sub {
          font-size: 0.95rem; color: var(--vhp-text-mid); max-width: 460px;
          line-height: 1.85; margin: 20px 0 36px;
          opacity: 0; animation: vhpFadeUp 0.7s 0.5s forwards;
        }
        .vhp-hero-btns {
          display: flex; gap: 12px; flex-wrap: wrap;
          opacity: 0; animation: vhpFadeUp 0.7s 0.65s forwards;
        }
        .vhp-btn-primary {
          background: var(--vhp-teal); color: white; padding: 12px 28px; border-radius: 40px;
          font-size: 0.9rem; font-weight: 500; border: none; cursor: pointer;
          transition: background 0.15s, transform 0.15s;
          display: inline-flex; align-items: center; gap: 8px; text-decoration: none;
        }
        .vhp-btn-primary:hover { background: var(--vhp-teal-dark); transform: translateY(-1px); color: white; }
        .vhp-btn-outline {
          background: transparent; color: var(--vhp-teal); padding: 11px 26px; border-radius: 40px;
          font-size: 0.9rem; font-weight: 500; border: 1px solid var(--vhp-teal); cursor: pointer;
          transition: background 0.15s; display: inline-flex; align-items: center; gap: 8px; text-decoration: none;
        }
        .vhp-btn-outline:hover { background: var(--vhp-teal-light); }
        
        .vhp-hero-right {
          position: relative; overflow: hidden;
          background: linear-gradient(160deg, var(--vhp-teal-light) 0%, #eddccc 60%, #f5e6da 100%);
          display: flex; align-items: flex-end; padding: 48px;
        }
        .vhp-hero-right-pattern {
          position: absolute; inset: 0; opacity: 0.06;
          background-image: radial-gradient(circle, var(--vhp-primary) 1px, transparent 1px);
          background-size: 28px 28px;
        }
        .vhp-hero-right-badge {
          position: relative; z-index: 2; background: white;
          border: 1px solid var(--vhp-border); border-radius: 20px; padding: 22px 26px;
          max-width: 240px; box-shadow: 0 12px 40px rgba(122,48,16,0.12);
          opacity: 0; animation: vhpFadeUp 0.7s 1s forwards;
        }
        .vhp-hero-badge-icon {
          width: 42px; height: 42px; border-radius: 12px;
          background: var(--vhp-teal-light); color: var(--vhp-teal);
          display: flex; align-items: center; justify-content: center;
          font-size: 1rem; margin-bottom: 14px;
        }
        .vhp-hero-badge-num { font-size: 1.5rem; font-weight: 550; color: var(--vhp-primary); line-height: 1; }
        .vhp-hero-badge-txt { font-size: 0.78rem; color: var(--vhp-text-mid); margin-top: 6px; line-height: 1.5; }

        /* --- SHARED SECTION --- */
        .vhp-section { padding: 96px 72px; }
        .vhp-title { font-size: 2.3rem; line-height: 1.15; font-weight: 450; color: var(--vhp-text-dark); margin-bottom: 16px; }
        .vhp-title em { font-style: italic; color: var(--vhp-teal); }
        .vhp-label {
          font-size: 0.85rem; font-weight: 700; text-transform: uppercase;
          letter-spacing: 0.16em; color: var(--vhp-terracotta);
          margin-bottom: 12px; display: flex; align-items: center; gap: 10px;
        }
        .vhp-intro { font-size: 0.95rem; color: var(--vhp-text-mid); line-height: 1.85; max-width: 580px; margin-bottom: 56px; }

        /* --- REVEAL ANIMATION --- */
        .vhp-reveal { opacity: 0; transform: translateY(28px); transition: opacity 0.65s ease, transform 0.65s ease; }
        .vhp-reveal.vhp-visible { opacity: 1; transform: none; }
        .vhp-rd1 { transition-delay: 0.08s; } .vhp-rd2 { transition-delay: 0.16s; }
        .vhp-rd3 { transition-delay: 0.24s; }

        /* --- CARE SECTION --- */
        .vhp-care-section {
          background: radial-gradient(circle at top right, rgba(12,115,110,0.06), transparent 28%),
                      radial-gradient(circle at bottom left, rgba(188,138,77,0.08), transparent 24%),
                      var(--vhp-sand);
          position: relative; overflow: hidden;
        }
        .vhp-care-wrapper { max-width: 1280px; margin: 0 auto; }
        .vhp-care-heading { max-width: 760px; margin-bottom: 56px; }
        .vhp-care-layout { display: grid; grid-template-columns: 1.2fr 0.8fr; gap: 30px; align-items: stretch; }
        
        .vhp-care-main {
          background: rgba(255,255,255,0.7); backdrop-filter: blur(10px);
          border: 1px solid rgba(255,255,255,0.8); border-radius: 34px; padding: 34px;
          position: relative; box-shadow: 0 24px 60px rgba(0,0,0,0.04);
        }
        .vhp-care-panel { position: relative; transition: transform 0.35s ease; }
        .vhp-care-panel:hover { transform: translateX(6px); }
        .vhp-care-top { display: flex; gap: 18px; align-items: center; margin-bottom: 18px; }
        .vhp-care-icon {
          width: 72px; height: 72px; border-radius: 24px;
          display: flex; align-items: center; justify-content: center;
          font-size: 1.45rem; position: relative; overflow: hidden;
        }
        .vhp-outpatient .vhp-care-icon { background: linear-gradient(135deg, var(--vhp-teal-light), rgba(12,115,110,0.14)); color: var(--vhp-teal); }
        .vhp-inpatient .vhp-care-icon { background: linear-gradient(135deg, var(--vhp-amber-light), rgba(188,138,77,0.16)); color: var(--vhp-amber); }
        .vhp-care-small { display: inline-block; font-size: 0.7rem; letter-spacing: 0.18em; font-weight: 700; color: var(--vhp-teal-dark); margin-bottom: 6px; }
        .vhp-care-panel h3 { font-size: 1.2rem; line-height: 1.2; font-weight: 500; color: var(--vhp-text-dark); }
        .vhp-care-panel p { font-size: 0.93rem; line-height: 1.95; color: var(--vhp-text-mid); padding-left: 90px; }
        .vhp-care-divider { display: flex; justify-content: center; margin: 34px 0; }
        .vhp-care-divider span { width: 100%; height: 1px; background: linear-gradient(to right, transparent, rgba(0,0,0,0.08), transparent); }
        
        .vhp-care-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 18px; }
        .vhp-care-feature-card {
          background: white; border-radius: 26px; padding: 28px 24px; border: 1px solid var(--vhp-border);
          position: relative; overflow: hidden; transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
        }
        .vhp-care-feature-card:hover { transform: translateY(-6px); border-color: rgba(12,115,110,0.16); box-shadow: 0 18px 45px rgba(0,0,0,0.06); }
        .vhp-feature-number { font-size: 0.82rem; font-weight: 700; letter-spacing: 0.12em; color: var(--vhp-muted-teal); margin-bottom: 18px; }
        .vhp-care-feature-card h4 { font-size: 1rem; font-weight: 600; color: var(--vhp-text-dark); margin-bottom: 10px; line-height: 1.4; }

        /* --- SERVICES SECTION --- */
        .vhp-services-section { background: #f8f6f2; position: relative; overflow: hidden; padding: 90px 0; }
        .vhp-services-container { max-width: 1180px; margin: 0 auto; position: relative; z-index: 2; }
        
        .vhp-services-stack { display: flex; flex-direction: column; gap: 18px; }
        .vhp-service-showcase { display: block; }
        .vhp-service-side {
          background: rgba(255,255,255,0.92); border: 1px solid rgba(0,0,0,0.06);
          border-radius: 22px; padding: 30px 32px; position: relative; overflow: hidden;
          transition: transform 0.28s ease, border-color 0.28s ease, box-shadow 0.28s ease;
          box-shadow: 0 8px 24px rgba(0,0,0,0.03);
        }
        .vhp-service-side:hover { transform: translateY(-3px); border-color: rgba(12,115,110,0.12); box-shadow: 0 18px 40px rgba(0,0,0,0.05); }
        .vhp-service-side::before { content:''; position:absolute; top:0; left:0; width:100%; height:2px; background: linear-gradient(to right, var(--vhp-teal), transparent); }
        .vhp-service-side h3 { font-size:1.38rem; line-height:1.3; font-weight:500; color: var(--vhp-text-dark); margin-bottom:14px; max-width:700px; }
        .vhp-service-side p { font-size:0.81rem; line-height:1.9; color: var(--vhp-text-mid); margin-bottom:12px; max-width:96%; }
        .vhp-italic-txt { font-style: italic; font-weight:700; margin-top:3px; }
        
        /* Creative Inline Highlight */
        .vhp-hl { 
          font-weight: 600; 
          color: var(--vhp-terracotta); 
          background: linear-gradient(120deg, rgba(184, 90, 60, 0.08) 0%, rgba(184, 90, 60, 0.08) 100%);
          padding: 1px 6px;
          border-radius: 4px;
          display: inline;
          box-decoration-break: clone;
          -webkit-box-decoration-break: clone;
        }

        .vhp-services-mini-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:14px; margin-top:4px; }
        .vhp-mini-service {
          background:white; border:1px solid rgba(0,0,0,0.06); border-radius:18px; padding:22px;
          transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
        }
        .vhp-mini-service:hover { transform: translateY(-3px); border-color: rgba(12,115,110,0.12); box-shadow: 0 12px 30px rgba(0,0,0,0.04); }
        .vhp-mini-service i { width:40px; height:40px; border-radius:12px; display:flex; align-items:center; justify-content:center; background: var(--vhp-teal-light); color: var(--vhp-teal); font-size:0.82rem; margin-bottom:14px; }
        .vhp-mini-service h4 { font-size:0.88rem; line-height:1.4; margin-bottom: 6px; color: var(--vhp-text-dark); }
        .vhp-mini-service p { font-size:0.75rem; line-height:1.75; margin-bottom: 8px; color: var(--vhp-text-mid); }

        /* --- TEAM SECTION --- */
        .vhp-team-section { background: var(--vhp-cream); }
        .vhp-team-header { display: grid; grid-template-columns: 1fr 1fr; gap: 56px; align-items: end; margin-bottom: 56px; }
        .vhp-team-row1 { display: grid; grid-template-columns: repeat(4, 1fr); gap: 18px; margin-bottom: 18px; }
        .vhp-team-row2 { display: flex; justify-content: center; gap: 18px; }
        .vhp-team-row2 .vhp-team-card { width: calc((100% - 54px) / 4); }
        
        .vhp-team-card {
          background: white; border: 1px solid var(--vhp-border); border-radius: 20px; overflow: hidden;
          transition: transform 0.3s, box-shadow 0.3s; cursor: pointer;
        }
        .vhp-team-card:hover { transform: translateY(-5px); box-shadow: 0 20px 48px rgba(122,48,16,0.12); }
        .vhp-team-photo { width: 100%; aspect-ratio: 3 / 4; background: linear-gradient(160deg, var(--vhp-teal-light) 0%, var(--vhp-sage-light) 100%); display: flex; align-items: center; justify-content: center; position: relative; overflow: hidden; }
        .vhp-team-photo-initials { font-size: 2.4rem; font-weight: 300; color: var(--vhp-teal); opacity: 0.35; user-select: none; }
        .vhp-team-photo-overlay { position: absolute; inset: 0; background: linear-gradient(to top, rgba(122,48,16,0.72) 0%, transparent 55%); opacity: 0; transition: opacity 0.3s; display: flex; align-items: flex-end; padding: 16px; }
        .vhp-team-card:hover .vhp-team-photo-overlay { opacity: 1; }
        .vhp-team-photo-cta { background: white; color: var(--vhp-primary); border: none; cursor: pointer; font-size: 0.72rem; font-weight: 600; padding: 6px 14px; border-radius: 20px; display: flex; align-items: center; gap: 6px; }
        .vhp-team-info { padding: 16px 18px; }
        .vhp-team-name { font-size: 0.9rem; font-weight: 600; color: var(--vhp-text-dark); line-height: 1.3; margin-bottom: 4px; }
        .vhp-team-title { font-size: 0.7rem; color: var(--vhp-teal); font-weight: 600; text-transform: uppercase; letter-spacing: 0.08em; }

        /* --- TEAM MODAL --- */
        .vhp-overlay {
          position: fixed; inset: 0; z-index: 999; background: rgba(42,59,63,0.82); backdrop-filter: blur(8px);
          display: flex; align-items: center; justify-content: center; padding: 24px;
          opacity: 0; transition: opacity 0.3s; pointer-events: none;
        }
        .vhp-overlay.vhp-open { opacity: 1; pointer-events: all; }
        .vhp-modal {
          background: white; border-radius: 24px; max-width: 660px; width: 100%; overflow: hidden; position: relative;
          transform: translateY(24px); transition: transform 0.3s;
        }
        .vhp-overlay.vhp-open .vhp-modal { transform: none; }
        .vhp-modal-header { background: linear-gradient(135deg, var(--vhp-teal-light), var(--vhp-sage-light)); padding: 36px 36px 28px; display: flex; gap: 22px; align-items: flex-start; position: relative; }
        .vhp-modal-close { position: absolute; top: 16px; right: 16px; width: 34px; height: 34px; border-radius: 50%; background: white; border: 1px solid var(--vhp-border); cursor: pointer; color: var(--vhp-text-mid); display: flex; align-items: center; justify-content: center; font-size: 0.85rem; transition: background 0.2s; }
        .vhp-modal-close:hover { background: var(--vhp-teal-light); color: var(--vhp-teal); }
        .vhp-modal-photo { width: 88px; height: 88px; border-radius: 16px; flex-shrink: 0; background: linear-gradient(160deg, var(--vhp-muted-teal), var(--vhp-teal)); display: flex; align-items: center; justify-content: center; font-size: 1.8rem; font-weight: 300; color: rgba(255,255,255,0.6); border: 3px solid white; }
        .vhp-modal-name { font-size: 1.35rem; font-weight: 600; color: var(--vhp-text-dark); margin-bottom: 4px; }
        .vhp-modal-role { font-size: 0.7rem; text-transform: uppercase; letter-spacing: 0.1em; color: var(--vhp-teal); font-weight: 700; margin-bottom: 8px; }
        .vhp-modal-body { padding: 28px 36px 36px; max-height: 50vh; overflow-y: auto; }
        .vhp-modal-body p { font-size: 0.88rem; color: var(--vhp-text-mid); line-height: 1.9; }

        /* --- FAQ SECTION --- */
        .vhp-faq-section { background: var(--vhp-cream); padding: 96px 72px; }
        .vhp-faq-section .vhp-label { color: var(--vhp-muted-teal); }
        .vhp-faq-section .vhp-title { color: var(--vhp-primary); margin-bottom: 48px; }
        .vhp-faq-section .vhp-title em { color: var(--vhp-muted-teal); }
        .vhp-faq-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1px; background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.08); border-radius: 20px; overflow: hidden; }
        .vhp-faq-item { padding: 28px 30px; background: #1e2c30; cursor: pointer; transition: background 0.25s; border-bottom: 1px solid rgba(255,255,255,0.05); }
        .vhp-faq-q { font-size: 0.9rem; font-weight: 500; color: white; display: flex; align-items: flex-start; justify-content: space-between; gap: 16px; line-height: 1.5; }
        .vhp-faq-toggle { width: 28px; height: 28px; border-radius: 50%; background: rgba(255,255,255,0.07); border: 1px solid rgba(255,255,255,0.12); display: flex; align-items: center; justify-content: center; flex-shrink: 0; color: var(--vhp-muted-teal); font-size: 0.8rem; transition: transform 0.3s, background 0.3s; }
        .vhp-faq-item.vhp-active .vhp-faq-toggle { transform: rotate(45deg); background: var(--vhp-teal); border-color: var(--vhp-teal); color: white; }
        .vhp-faq-a { font-size: 0.84rem; color: rgba(255,255,255,0.7); max-height: 0; overflow: hidden; transition: max-height 0.4s, margin-top 0.3s; line-height: 1.85; }
        .vhp-faq-item.vhp-active .vhp-faq-a { max-height: 300px; margin-top: 14px; }

        /* --- ANIMATIONS & RESPONSIVE --- */
        @keyframes vhpFadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: none; }
        }

        @media (max-width: 1024px) {
          .vhp-section, .vhp-faq-section { padding: 72px 36px; }
          .vhp-hero { grid-template-columns: 1fr; margin-top: 100px; }
          .vhp-hero-right { min-height: 360px; }
          .vhp-care-layout { grid-template-columns: 1fr; }
          .vhp-care-grid { grid-template-columns: 1fr 1fr; }
          .vhp-team-header, .vhp-faq-grid { grid-template-columns: 1fr; }
          .vhp-team-row1 { grid-template-columns: 1fr 1fr; }
          .vhp-team-row2 { grid-template-columns: 1fr 1fr; flex-wrap: wrap; }
          .vhp-team-row2 .vhp-team-card { width: calc(50% - 9px); }
          .vhp-services-mini-grid { grid-template-columns: 1fr 1fr; }
        }

        @media (max-width: 640px) {
          .vhp-section, .vhp-faq-section { padding: 56px 20px; }
          .vhp-hero-left { padding: 48px 24px; }
          .vhp-services-mini-grid, .vhp-team-row1, .vhp-team-row2, .vhp-care-grid { grid-template-columns: 1fr; }
          .vhp-team-row2 .vhp-team-card { width: 100%; }
          .vhp-care-main { padding: 26px; }
          .vhp-care-panel p { padding-left: 0; }
          .vhp-care-panel h3 { font-size: 1.35rem; }
        }
      `}</style>

      {/* HERO */}
      <section className="vhp-hero" id="hero">
        <div className="vhp-hero-left">
          <div className="vhp-hero-eyebrow">Viveka Hospital</div>
          <h1 className="vhp-hero-h1">
            Comprehensive <br />
            <em>Mental Healthcare, Critical Care, De-Addiction, Rehabilitation</em> <br />
            and <em>Recovery</em>
          </h1>
          <p className="vhp-hero-sub">
            Specialised inpatient care designed to support individuals and families through every stage of emotional wellbeing, recovery, and rehabilitation.
            <br /><br />
            Mental health challenges can feel overwhelming, not only for individuals, but for families too. At Viveka Hospital, we provide compassionate, evidence-based mental healthcare through personalised treatment pathways designed around every individual’s needs.
            <br /><br />
            From acute psychiatric care and de-addiction support to rehabilitation, therapy, and long-term recovery, our multidisciplinary team works together to ensure holistic, respectful, and meaningful care.
          </p>
          <div className="vhp-hero-btns">
            <a href="#contact" className="vhp-btn-primary">
              <i className="fas fa-calendar-plus"></i> Book Appointment
            </a>
            <a href="tel:+916364111001" className="vhp-btn-outline">
              <i className="fas fa-phone"></i> Emergency Support
            </a>
          </div>
        </div>
        <div className="vhp-hero-right">
          <div className="vhp-hero-right-pattern"></div>
          <div className="vhp-hero-right-badge">
            <div className="vhp-hero-badge-icon"><i className="fas fa-hospital-user"></i></div>
            <div className="vhp-hero-badge-num">Address</div>
            <div className="vhp-hero-badge-txt"> Vajamangala, Mysuru – 570028 </div>
          </div>
        </div>
      </section>

      {/* CARE TYPES */}
      <section className="vhp-section vhp-care-section" id="care">
        <div className="vhp-care-wrapper">
          <div className="vhp-care-heading vhp-reveal">
            <h2 className="vhp-title">Outpatient &amp; Inpatient Care</h2>
            <span className="vhp-label">Care Designed Around Individual Needs</span>
            <p className="vhp-intro">
              At Viveka Hospital, we provide both outpatient (OP) and inpatient (IP) psychiatric services to ensure continuity of care at every stage of recovery.
            </p>
          </div>

          <div className="vhp-care-layout">
            <div className="vhp-care-main vhp-reveal vhp-rd1">
              <div className="vhp-care-panel vhp-outpatient">
                <div className="vhp-care-top">
                  <div className="vhp-care-icon"><i className="fas fa-user-check"></i></div>
                  <div>
                    <span className="vhp-care-small">OUTPATIENT CARE</span>
                    <h3>Flexible & Independent Support</h3>
                  </div>
                </div>
                <p>
                  Outpatient services are ideal for individuals seeking consultations, therapy, counselling, medication management, assessments, and regular follow-up support while continuing with everyday life.
                </p>
              </div>

              <div className="vhp-care-divider"><span></span></div>

              <div className="vhp-care-panel vhp-inpatient">
                <div className="vhp-care-top">
                  <div className="vhp-care-icon"><i className="fas fa-bed"></i></div>
                  <div>
                    <span className="vhp-care-small">INPATIENT CARE</span>
                    <h3>Intensive Care & Stabilisation</h3>
                  </div>
                </div>
                <p>
                  For individuals requiring more intensive support, our inpatient care offers round-the-clock monitoring, structured treatment plans, rehabilitation, and a safe environment focused on stabilisation and recovery.
                </p>
              </div>
            </div>

            <div className="vhp-care-grid vhp-reveal vhp-rd2">
              <div className="vhp-care-feature-card">
                <div className="vhp-feature-number">01</div>
                <h4>Comprehensive psychiatric evaluation</h4>
              </div>
              <div className="vhp-care-feature-card">
                <div className="vhp-feature-number">02</div>
                <h4>Medication management and follow-up care</h4>
              </div>
              <div className="vhp-care-feature-card">
                <div className="vhp-feature-number">03</div>
                <h4>Structured inpatient treatment</h4>
              </div>
              <div className="vhp-care-feature-card">
                <div className="vhp-feature-number">04</div>
                <h4>Long-term recovery support</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="vhp-services-section" id="services">
        <div className="vhp-services-container">
          <div className="vhp-services-stack">
            {/* 01 */}
            <article className="vhp-service-showcase vhp-reveal vhp-rd2">
              <div className="vhp-service-side">
                <h3>Emergency Mental Healthcare</h3>
                <p className="vhp-italic-txt">Immediate Support, When It Matters Most</p>
                <p>Mental health emergencies can happen unexpectedly and often require immediate professional intervention.</p>
                <p>Our emergency psychiatric services are available <span className="vhp-hl">24×7</span> to support individuals experiencing severe emotional distress, <span className="vhp-hl">psychiatric crises</span>, behavioural emergencies, or situations requiring urgent intervention.</p>
                <p>Our team provides compassionate crisis management, immediate inpatient admission and family guidance during emergencies <span className="vhp-hl">immediate support</span> for both individuals and <span className="vhp-hl">families</span> during difficult moments.</p>
              </div>
            </article>

            {/* 02 */}

            <article className="vhp-service-showcase vhp-reveal vhp-rd1">
              <div className="vhp-service-side">
                <h3>Psychiatric Intensive Care Unit</h3>
                <p className="vhp-italic-txt">Acute Care for Critical Mental Health Needs</p>
                <p>For individuals experiencing <span className="vhp-hl">severe psychiatric distress</span> or <span className="vhp-hl">acute mental health conditions</span> requiring <span className="vhp-hl">close supervision</span>, our Psychiatric Intensive Care Unit (PICU) provides, acute care in a safe environment.</p>
                <h3>A High Dependency Unit (HDU)</h3>
                <p className="vhp-italic-txt">Stepdown Intensive care unit</p>
                <p>The focus is on <span className="vhp-hl">stabilisation, safety, continuous monitoring</span>, and compassionate support to help individuals move towards <span className="vhp-hl">recovery</span> and clinical care.</p>
              </div>
            </article>

            {/* 03 */}
            <article className="vhp-service-showcase vhp-reveal">
              <div className="vhp-service-side">
                <h3>General Adult Psychiatry</h3>
                <p className="vhp-italic-txt">Supporting Mental Wellbeing Through Every Stage of Adulthood</p>
                <p>Adulthood often brings emotional, professional, and personal challenges that can significantly impact mental wellbeing.</p>
                <p>Our General Adult Psychiatry services support individuals experiencing <span className="vhp-hl">emotional distress</span>, <span className="vhp-hl">anxiety, depression, mood disorders</span>, <span className="vhp-hl">psychosis</span>, behavioural changes, relationship challenges, and other psychiatric conditions.</p>
                <p>At Viveka Hospital, treatment plans are <span className="vhp-hl">personalised</span> and designed around the individual’s unique emotional, social, and clinical needs — ensuring meaningful and <span className="vhp-hl">sustainable progress</span>.</p>
              </div>
            </article>

            {/* 04 */}
            <article className="vhp-service-showcase vhp-reveal vhp-rd1">
              <div className="vhp-service-side">
                <h3>De-Addiction & Recovery</h3>
                <p className="vhp-italic-txt">Compassionate Support for Lasting Recovery</p>
                <p>Addiction affects not only individuals but also families and communities. Recovery requires patience, understanding, structured care, and long-term support.</p>
                <p>Our de-addiction programme provides <span className="vhp-hl">medically supervised withdrawal management</span> for alcohol and substance dependence while addressing the emotional, behavioural, psychological, and social aspects of recovery.</p>
                <p>We combine therapy, psychiatric care, <span className="vhp-hl">motivation enhancement</span>, <span className="vhp-hl">relapse prevention</span> and <span className="vhp-hl">family support and guidance</span> to support sustainable healing and healthier futures.</p>
              </div>
            </article>

            {/* 04 */}


            {/* GRID SERVICES */}
            <div className="vhp-services-mini-grid">

              <div className="vhp-mini-service vhp-reveal vhp-rd2">
                <i className="fas fa-bolt"></i>
                <h4>Electroconvulsive Therapy</h4>
                <p className="vhp-italic-txt">Evidence-Based Treatment for Complex Conditions</p>
                <p>ECT may be recommended for severe or treatment-resistant psychiatric conditions when clinically appropriate. Delivered under supervised medical protocols, it can support recovery in severe depression, psychosis, and complex mental health concerns, with clear guidance and compassionate support for families.</p>
              </div>

              <div className="vhp-mini-service vhp-reveal">
                <i className="fas fa-brain"></i>
                <h4>Ketamine Therapy</h4>
                <p className="vhp-italic-txt">Rapid Relief for Treatment-Resistant Depression</p>
                <p>Low-dose ketamine is administered under close medical supervision to provide rapid relief for treatment-resistant depression and related conditions. Unlike traditional antidepressants, it can improve mood within hours to days by targeting NMDA receptors and supporting neuroplasticity; treatment is delivered via IV infusion or nasal spray with personalised safety protocols.</p>
              </div>

              <div className="vhp-mini-service vhp-reveal vhp-rd3">
                <i className="fas fa-heartbeat"></i>
                <h4>Biofeedback Therapy</h4>
                <p className="vhp-italic-txt">Supporting Mental Wellness Through Awareness</p>
                <p>Biofeedback helps individuals understand the link between emotional well-being and physical responses. Evidence-based techniques support emotional regulation, stress management, and relaxation through awareness of breathing, muscle tension, and stress levels.</p>
              </div>

              <div className="vhp-mini-service vhp-reveal vhp-rd1">
                <i className="fas fa-walking"></i>
                <h4>Physiotherapy & Occupational therapy</h4>
                <p className="vhp-italic-txt">Helping Individuals Regain Independence</p>
                <p>Our physiotherapy and occupational therapy services help individuals rebuild strength, confidence, mobility, and independence after neurological, psychiatric, or physical challenges. Tailored rehabilitation programmes improve everyday functioning and well-being.</p>
              </div>

              <div className="vhp-mini-service vhp-reveal vhp-rd2">
                <i className="fas fa-comments"></i>
                <h4>Psychotherapy & Counselling</h4>
                <p className="vhp-italic-txt">Healing Through Conversation, Understanding, and Support</p>
                <p>Our psychotherapy and counselling services offer safe, confidential spaces to explore emotions, process challenges, and develop healthier coping strategies. We support anxiety, trauma, grief, relationship concerns, stress, and behavioural challenges through personalised care.</p>
              </div>

              <div className="vhp-mini-service vhp-reveal vhp-rd3">
                <i className="fas fa-heart"></i>
                <h4>Recovery & Rehabilitation</h4>
                <p className="vhp-italic-txt">Supporting Recovery Beyond Treatment</p>
                <p>Our rehabilitation services support dementia, chronic psychiatric conditions, addiction, neurological challenges, and post-treatment recovery. Personalised plans combine physiotherapy, speech and occupational therapy, counselling, and psychiatric support to rebuild confidence, independence, and quality of life.</p>
              </div>

            </div>

            {/* FINAL BLOCK */}
            <article className="vhp-service-showcase vhp-reveal vhp-rd1">
              <div className="vhp-service-side">
                <h3>Healing Environment</h3>
                <p className="vhp-italic-txt">Designed for Comfort, Safety, and Recovery</p>
                <p>Our facilities are thoughtfully designed to provide safe, structured, and calming environments that support healing and emotional well-being.</p>
                <p>From counselling and therapy rooms and inpatient facilities to rehabilitation spaces and consultation areas, every aspect of Viveka Hospital is designed to support comfort, dignity, and meaningful recovery.</p>
                <p>This extends to an on-site pharmacy, a canteen serving nutritious and well-prepared food, high standards of cleanliness and hygiene, attentive nursing care, and dedicated activity areas for yoga, prayer, and meditation—so daily needs and holistic well-being are supported alongside clinical care.</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="vhp-section vhp-team-section" id="team">
        <div className="vhp-team-header">
          <div>
            <h2 className="vhp-title vhp-reveal vhp-rd1">Our Team</h2>
            <div className="vhp-label vhp-reveal">Meet Our Experienced <em>Clinical Team</em></div>
          </div>
          <p className="vhp-intro vhp-reveal vhp-rd2" style={{ marginBottom: 0 }}>
            Compassionate care begins with experienced professionals. Our multidisciplinary team combines clinical expertise, research, and a deeply patient-centred approach to support individuals and families through every stage of recovery.
          </p>
        </div>

        <div className="vhp-team-row1">
          {TEAM_MEMBERS.slice(0, 4).map((m, i) => (
            <div key={m.name} className={`vhp-team-card vhp-reveal vhp-rd${(i % 3) + 1}`} onClick={() => setSelectedMember(m)}>
              <div className="vhp-team-photo">
                <div className="vhp-team-photo-initials">{m.initials}</div>
                <div className="vhp-team-photo-overlay">
                  <button className="vhp-team-photo-cta"><i className="fas fa-user"></i> View Profile</button>
                </div>
              </div>
              <div className="vhp-team-info">
                <div className="vhp-team-name">{m.name}</div>
                <div className="vhp-team-title">{m.role}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="vhp-team-row2">
          {TEAM_MEMBERS.slice(4).map((m, i) => (
            <div key={m.name} className={`vhp-team-card vhp-reveal vhp-rd${(i % 3) + 1}`} onClick={() => setSelectedMember(m)}>
              <div className="vhp-team-photo">
                <div className="vhp-team-photo-initials">{m.initials}</div>
                <div className="vhp-team-photo-overlay">
                  <button className="vhp-team-photo-cta"><i className="fas fa-user"></i> View Profile</button>
                </div>
              </div>
              <div className="vhp-team-info">
                <div className="vhp-team-name">{m.name}</div>
                <div className="vhp-team-title">{m.role}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TEAM MODAL */}
      {selectedMember && (
        <div className="vhp-overlay vhp-open" onClick={(e) => { if (e.target === e.currentTarget) setSelectedMember(null); }}>
          <div className="vhp-modal">
            <div className="vhp-modal-header">
              <button className="vhp-modal-close" onClick={() => setSelectedMember(null)}><i className="fas fa-times"></i></button>
              <div className="vhp-modal-photo">{selectedMember.initials}</div>
              <div>
                <div className="vhp-modal-name">{selectedMember.name}</div>
                <div className="vhp-modal-role">{selectedMember.role}</div>
              </div>
            </div>
            <div className="vhp-modal-body" dangerouslySetInnerHTML={{ __html: `<p>${selectedMember.bio}</p>` }} />
          </div>
        </div>
      )}

      {/* FAQS */}
      <section className="vhp-faq-section" id="faq">
        <h2 className="vhp-title vhp-reveal vhp-rd1">Frequently Asked <em>Questions</em></h2>
        <div className="vhp-faq-grid">
          {FAQS.map((faq, i) => (
            <div
              key={i}
              className={`vhp-faq-item vhp-reveal vhp-rd${(i % 2) + 1} ${openFaqIndex === i ? 'vhp-active' : ''}`}
              onClick={() => setOpenFaqIndex(openFaqIndex === i ? null : i)}
            >
              <div className="vhp-faq-q">
                {faq.q}
                <div className="vhp-faq-toggle"><i className="fas fa-plus"></i></div>
              </div>
              <div className="vhp-faq-a">{faq.a}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
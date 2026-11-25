import { useEffect, useState } from 'react';

// --- TEAM DATA ---
const TEAM_MEMBERS = [
  {
    name: 'DR. VASU PAPAIAH',
    role: 'Consultant Psychiatrist',
    initials: 'VP',
    bio: "Dr. Vasu Papaiah is a compassionate psychiatrist dedicated to providing personalised and supportive mental healthcare for individuals seeking guidance, healing, and emotional wellbeing.<br><br>He completed his MBBS from S N Medical College, Bagalkot, and MD in Psychiatry from Kempegowda Institute of Medical Sciences, Bengaluru.<br><br>Known for his empathetic and approachable nature, Dr. Vasu creates a safe, supportive, and non-judgmental environment where individuals feel comfortable expressing concerns and working towards recovery. His expertise includes psychiatric evaluations, medication management, psychotherapy, and counselling tailored to individual needs."
  },
  {
    name: 'RAJANI RAGHUNANDANA',
    role: 'Consultant Psychologist',
    initials: 'RR',
    bio: "Rajani Raghunandana is a Clinical Psychologist with over 12 years of experience in mental healthcare across both healthcare and corporate settings.<br><br>Her areas of expertise include Cognitive Behavioural Therapy (CBT), family and couple counselling, child psychotherapy, neuropsychology, de-addiction therapies, behavioural interventions, conflict resolution, career counselling, and employee wellbeing programmes.<br><br>Professionally trained through the National Institute of Mental Health and Neurosciences (NIMHANS), Rajani is deeply committed to helping individuals, families, and students navigate emotional and behavioural challenges through evidence-based therapeutic care and compassionate support."
  },
  {
    name: 'CHITRALEKHA GUPTA',
    role: 'Counselling Psychologist',
    initials: 'CG',
    bio: "Chitralekha Gupta is a Counselling Psychologist with an MSc in Psychology from Karnataka University and over 8 years of experience. She specializes in CBT, REBT, Gestalt, Person-Centered Therapy, behaviour management, and psychometrics. She is dedicated to providing a warm and empathetic space for her clients to explore their mental health journey."
  }
];

export default function VivekaClinic() {
  const [selectedMember, setSelectedMember] = useState<typeof TEAM_MEMBERS[0] | null>(null);

  // Scroll Reveal Animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('vcl-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -32px 0px' }
    );

    const reveals = document.querySelectorAll('.vcl-reveal');
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
    <div className="vcl-wrap">
      <style>{`
        /* ═══════════════════════════════════════════════════════════
           VIVEKA CLINIC PAGE SCOPED CSS
           (Layout, gutters, hero & section padding inherit from index.css)
        ═══════════════════════════════════════════════════════════ */
        .vcl-wrap {
          --vcl-primary: #7A3010;
          --vcl-secondary: #C8885C;
          --vcl-light: #F5E6DA;
          --vcl-teal: #7A3010;
          --vcl-teal-light: #F5E6DA;
          --vcl-teal-dark: #5C2208;
          --vcl-amber: #A16928;
          --vcl-muted-teal: #C8885C;
          --vcl-terracotta: #B85A3C;
          --vcl-cream: #FCFAF5;
          --vcl-sand: #FCF8F1;
          --vcl-text-dark: #2a3b3f;
          --vcl-text-mid: #4d676f;
          --vcl-text-soft: #7e9fa5;
          --vcl-border: #E8D5C4;
          --vcl-white: #ffffff;
          --vcl-sage: #CBD5BC;
          --vcl-sage-light: #eef2e8;
        }

        .vcl-wrap .vcl-hero-left { justify-content: flex-start; }

        /* ── REVEAL ANIMATION ── */
        .vcl-wrap .vcl-reveal { opacity: 0; transform: translateY(28px); transition: opacity 0.65s ease, transform 0.65s ease; }
        .vcl-wrap .vcl-reveal.vcl-visible { opacity: 1; transform: none; }
        .vcl-wrap .vcl-rd1 { transition-delay: 0.08s; } .vcl-wrap .vcl-rd2 { transition-delay: 0.16s; }
        .vcl-wrap .vcl-rd3 { transition-delay: 0.24s; } .vcl-wrap .vcl-rd4 { transition-delay: 0.32s; } .vcl-wrap .vcl-rd5 { transition-delay: 0.40s; }

        /* ── HERO ANIMATIONS & RIGHT PANEL ── */
        .vcl-wrap .vcl-hero-eyebrow {
          opacity: 0;
          animation: vclFadeUp 0.7s 0.2s forwards;
        }
        .vcl-wrap .vcl-hero-h1 {
          opacity: 0;
          animation: vclFadeUp 0.7s 0.35s forwards;
        }
        .vcl-wrap .vcl-hero-sub {
          opacity: 0;
          animation: vclFadeUp 0.7s 0.5s forwards;
        }
        .vcl-wrap .vcl-hero-sub strong { color: var(--vcl-text-dark); font-weight: 600; }
        .vcl-wrap .vcl-hero-btns {
          opacity: 0;
          animation: vclFadeUp 0.7s 0.65s forwards;
        }

        .vcl-wrap .vcl-hero-right {
          background: linear-gradient(150deg, #eddccc 0%, var(--vcl-teal-light) 50%, #f0e2d2 100%);
          align-items: center;
          justify-content: center;
        }
        .vcl-wrap .vcl-hero-right-pattern {
          position: absolute; inset: 0; opacity: 0.05;
          background-image: radial-gradient(circle, var(--vcl-primary) 1.5px, transparent 1.5px);
          background-size: 30px 30px;
        }
        .vcl-wrap .vcl-hero-right-inner { position: relative; z-index: 2; width: 100%; display: flex; flex-direction: column; gap: 18px; }
        .vcl-wrap .vcl-hero-card {
          background: white; border-radius: 20px; padding: 24px 26px;
          box-shadow: 0 8px 36px rgba(122,48,16,0.1);
          border: 1px solid rgba(232,213,196,0.5);
        }
        .vcl-wrap .vcl-hero-card-icon {
          width: 44px; height: 44px; border-radius: 12px;
          background: var(--vcl-teal-light); color: var(--vcl-teal);
          display: flex; align-items: center; justify-content: center;
          font-size: 1.1rem; margin-bottom: 12px;
        }
        .vcl-wrap .vcl-hero-card h4 { font-size: 1.05rem; color: var(--vcl-text-dark); margin-bottom: 6px; }
        .vcl-wrap .vcl-hero-card p { font-size: 0.82rem; color: var(--vcl-text-mid); line-height: 1.6; }
        
        .vcl-wrap .vcl-hero-card-dark {
          background: var(--vcl-primary); color: white; border-radius: 20px; padding: 24px 26px;
          box-shadow: 0 8px 36px rgba(122,48,16,0.2);
        }
        .vcl-wrap .vcl-hero-card-dark h4 { font-size: 1.05rem; color: white; margin-bottom: 6px; }
        .vcl-wrap .vcl-hero-card-dark p { font-size: 0.82rem; color: rgba(255,255,255,0.75); line-height: 1.6; }
        .vcl-wrap .vcl-hero-card-dark .card-icon { font-size: 1.1rem; color: rgba(255,255,255,0.6); margin-bottom: 12px; }

        /* ── SCROLL 3: PSYCHIATRIC CONSULTATION & COUNSELLING ── */
        .vcl-wrap .consult-section { background: var(--vcl-white); }
        .vcl-wrap .consult-section + .consult-section { border-top: 1px solid var(--vcl-border); }
        .vcl-wrap .consult-inner { display: grid; grid-template-columns: minmax(0, 1fr) minmax(0, 1fr); gap: clamp(32px, 5vw, 80px); align-items: center; }
        .vcl-wrap .consult-visual { position: relative; }
        .vcl-wrap .consult-big-label { font-size: clamp(1.5rem, 3vw, 3.2rem); font-style: italic; color: var(--vcl-teal-light); line-height: 1.12; letter-spacing: -0.02em; user-select: none; position: relative; }
        .vcl-wrap .consult-big-label span { color: var(--vcl-primary); }
        .vcl-wrap .consult-tags { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 28px; }
        .vcl-wrap .consult-tag {
          background: var(--vcl-sand); border: 1px solid var(--vcl-border);
          border-radius: 40px; padding: 10px 18px; font-size: 0.82rem; color: var(--vcl-text-mid);
          display: flex; align-items: center; gap: 8px;
        }
        .vcl-wrap .consult-tag i { color: var(--vcl-terracotta); font-size: 0.7rem; }
        .vcl-wrap .consult-content .vcl-intro { max-width: 100%; margin-bottom: 0; }
        .vcl-wrap .consult-desc { font-size: 0.93rem; color: var(--vcl-text-mid); line-height: 1.85; margin-top: 16px; }

        /* ── SCROLL 4: CHILD GUIDANCE ── */
        .vcl-wrap .child-section { background: var(--vcl-sand); }
        .vcl-wrap .child-inner { display: grid; grid-template-columns: minmax(0, 1fr) minmax(0, 1fr); gap: clamp(32px, 5vw, 80px); align-items: start; }
        .vcl-wrap .child-content { order: 2; }
        .vcl-wrap .child-content .vcl-intro { max-width: 100%; }
        .vcl-wrap .child-visual { order: 1; }
        .vcl-wrap .child-support-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-top: 28px; }
        .vcl-wrap .child-support-item { background: white; border: 1px solid var(--vcl-border); border-radius: 14px; padding: 18px 20px; display: flex; align-items: center; gap: 12px; }
        .vcl-wrap .child-support-item.vcl-span-2,
        .vcl-wrap .cst-activity.vcl-span-2 { grid-column: span 2; }
        .vcl-wrap .child-support-dot { width: 8px; height: 8px; border-radius: 50%; background: var(--vcl-terracotta); flex-shrink: 0; }
        .vcl-wrap .child-support-item span { font-size: 0.82rem; color: var(--vcl-text-mid); }
        .vcl-wrap .child-banner { background: var(--vcl-primary); border-radius: 24px; padding: clamp(28px, 3.5vw, 40px); color: white; position: sticky; top: calc(var(--header-h) + 24px); }
        .vcl-wrap .child-banner-icon { font-size: 2.5rem; margin-bottom: 20px; }
        .vcl-wrap .child-banner h3 { font-size: 1.6rem; font-weight: 400; color: white; margin-bottom: 14px; line-height: 1.2; }
        .vcl-wrap .child-banner p { font-size: 0.85rem; line-height: 1.75; color: rgba(255,255,255,0.75); }

        /* ── SCROLL 5: PRENATAL ── */
        .vcl-wrap .prenatal-section { background: var(--vcl-white); position: relative; overflow: hidden; }
        .vcl-wrap .prenatal-bg-text { position: absolute; bottom: -20px; right: -20px; font-size: 16rem; font-style: italic; color: var(--vcl-teal-light); opacity: 0.4; user-select: none; line-height: 1; pointer-events: none; }
        .vcl-wrap .prenatal-inner { display: grid; grid-template-columns: 5fr 4fr; gap: clamp(32px, 5vw, 80px); align-items: center; position: relative; z-index: 2; }
        .vcl-wrap .prenatal-content .vcl-intro { max-width: 100%; }

        /* ── SCROLL 6: THERAPY ── */
        .vcl-wrap .therapy-section { background: var(--vcl-sand); }
        .vcl-wrap .therapy-header { text-align: center; max-width: 640px; margin: 0 auto clamp(36px, 4.5vw, 56px); }
        .vcl-wrap .therapy-header .vcl-section-label { justify-content: center; }
        .vcl-wrap .therapy-header .vcl-section-label::before { display: none; }
        .vcl-wrap .therapy-header .vcl-intro { margin: 0 auto; }
        .vcl-wrap .therapy-main-desc { font-size: 0.95rem; color: var(--vcl-text-mid); line-height: 1.85; margin-top: 12px; }
        .vcl-wrap .therapy-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 20px; }
        .vcl-wrap .therapy-card { background: white; border: 1px solid var(--vcl-border); border-radius: 20px; padding: clamp(24px, 3vw, 32px) clamp(22px, 2.5vw, 28px); position: relative; overflow: hidden; transition: box-shadow 0.2s, transform 0.2s; }
        .vcl-wrap .therapy-card:hover { box-shadow: 0 12px 40px rgba(122,48,16,0.1); transform: translateY(-3px); }
        .vcl-wrap .therapy-card-num { position: absolute; top: 20px; right: 24px; font-size: 3rem; font-style: italic; color: var(--vcl-teal-light); line-height: 1; user-select: none; }
        .vcl-wrap .therapy-card-icon { width: 46px; height: 46px; border-radius: 14px; background: var(--vcl-teal-light); color: var(--vcl-teal); display: flex; align-items: center; justify-content: center; font-size: 1.1rem; margin-bottom: 20px; }
        .vcl-wrap .therapy-card h4 { font-size: 1.1rem; font-weight: 500; color: var(--vcl-text-dark); margin-bottom: 12px; }
        .vcl-wrap .therapy-card p { font-size: 0.84rem; color: var(--vcl-text-mid); line-height: 1.75; }
        .vcl-wrap .therapy-card:nth-child(1) .therapy-card-icon { background: #f5e6da; color: var(--vcl-primary); }
        .vcl-wrap .therapy-card:nth-child(2) .therapy-card-icon { background: #eef2e8; color: #5a7048; }
        .vcl-wrap .therapy-card:nth-child(3) .therapy-card-icon { background: #fef3e2; color: #a16928; }
        .vcl-wrap .therapy-card:nth-child(4) .therapy-card-icon { background: #f0e8f5; color: #7a4090; }
        .vcl-wrap .therapy-card:nth-child(5) .therapy-card-icon { background: #e8f4f5; color: #1a7a80; }
        .vcl-wrap .therapy-card:nth-child(6) .therapy-card-icon { background: #fce8e8; color: #b03030; }

        /* ── SCROLL 7: MEDICATION ── */
        .vcl-wrap .medication-section { background: var(--vcl-primary); position: relative; overflow: hidden; }
        .vcl-wrap .med-bg { position: absolute; inset: 0; opacity: 0.04; background-image: radial-gradient(circle, white 1.5px, transparent 1.5px); background-size: 28px 28px; }
        .vcl-wrap .medication-inner { display: grid; grid-template-columns: minmax(0, 1fr) minmax(0, 1fr); gap: clamp(32px, 5vw, 80px); align-items: center; position: relative; z-index: 2; }
        .vcl-wrap .medication-content .vcl-section-label { color: var(--vcl-secondary); }
        .vcl-wrap .medication-content .vcl-section-label::before { background: var(--vcl-secondary); }
        .vcl-wrap .medication-content .vcl-title { color: white; }
        .vcl-wrap .medication-content .vcl-intro { color: rgba(255,255,255,0.75); max-width: 100%; }
        .vcl-wrap .medication-content p.med-body { font-size: 0.93rem; color: rgba(255,255,255,0.75); line-height: 1.85; margin-top: 16px; }

        /* ── SCROLL 8: DEMENTIA & CST (MERGED) ── */
        .vcl-wrap .dementia-section { background: var(--vcl-white); }
        .vcl-wrap .dementia-inner { display: grid; grid-template-columns: minmax(0, 1fr) minmax(0, 1fr); gap: clamp(32px, 5vw, 80px); align-items: start; }
        .vcl-wrap .dementia-inner .vcl-intro { max-width: 100%; }
        
        .vcl-wrap .dementia-services { display: flex; flex-direction: column; gap: 12px; margin-bottom: 28px; }
        .vcl-wrap .dementia-service { display: flex; align-items: center; gap: 14px; background: var(--vcl-sand); border: 1px solid var(--vcl-border); border-radius: 12px; padding: 16px 20px; }
        .vcl-wrap .dementia-service-num { width: 32px; height: 32px; border-radius: 8px; background: var(--vcl-teal-light); color: var(--vcl-primary); display: flex; align-items: center; justify-content: center; font-size: 0.75rem; font-weight: 700; flex-shrink: 0; }
        .vcl-wrap .dementia-service span { font-size: 0.85rem; color: var(--vcl-text-mid); }
        
        .vcl-wrap .cst-activities { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
        .vcl-wrap .cst-activity { background: var(--vcl-sand); border: 1px solid var(--vcl-border); border-radius: 16px; padding: 22px 20px; text-align: center; transition: box-shadow 0.2s; }
        .vcl-wrap .cst-activity:hover { box-shadow: 0 6px 24px rgba(122,48,16,0.08); }
        .vcl-wrap .cst-activity-icon { font-size: 1.5rem; margin-bottom: 10px; color: var(--vcl-primary); }
        .vcl-wrap .cst-activity span { font-size: 0.82rem; color: var(--vcl-text-mid); display: block; line-height: 1.4; }

        /* ── SCROLL 11: VIRTUAL ── */
        .vcl-wrap .virtual-section { background: var(--vcl-primary); position: relative; overflow: hidden; }
        .vcl-wrap .virtual-bg { position: absolute; inset: 0; opacity: 0.04; background-image: radial-gradient(circle, white 1.5px, transparent 1.5px); background-size: 28px 28px; }
        .vcl-wrap .virtual-inner { display: grid; grid-template-columns: minmax(0, 1fr) minmax(0, 1fr); gap: clamp(32px, 5vw, 80px); align-items: center; position: relative; z-index: 2; }
        .vcl-wrap .virtual-content .vcl-section-label { color: var(--vcl-secondary); }
        .vcl-wrap .virtual-content .vcl-section-label::before { background: var(--vcl-secondary); }
        .vcl-wrap .virtual-content .vcl-title { color: white; }
        .vcl-wrap .virtual-content p { font-size: 0.93rem; color: rgba(255,255,255,0.75); line-height: 1.85; margin-top: 16px; }
        .vcl-wrap .virtual-card { background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.15); border-radius: 24px; padding: clamp(28px, 4vw, 40px); text-align: center; }
        .vcl-wrap .virtual-card-icon { font-size: 3rem; margin-bottom: 24px; }
        .vcl-wrap .virtual-card h3 { font-size: 1.5rem; color: white; margin-bottom: 0; }

        /* ── SCROLL 12: CONTINUITY ── */
        .vcl-wrap .continuity-section { background: var(--vcl-sand); }
        .vcl-wrap .continuity-inner { display: grid; grid-template-columns: minmax(0, 1fr) minmax(0, 1fr); gap: clamp(32px, 5vw, 80px); align-items: center; }
        .vcl-wrap .continuity-inner .vcl-intro { max-width: 100%; }

        /* ── SCROLL 13: TEAM ── */
        .vcl-wrap .team-section { background: var(--vcl-white); }
        .vcl-wrap .team-row1 { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 18px; }
        .vcl-wrap .team-card { background: white; border: 1px solid var(--vcl-border); border-radius: 20px; overflow: hidden; transition: transform 0.3s, box-shadow 0.3s; cursor: pointer; }
        .vcl-wrap .team-card:hover { transform: translateY(-5px); box-shadow: 0 20px 48px rgba(122,48,16,0.12); }
        .vcl-wrap .team-photo { width: 100%; aspect-ratio: 3 / 4; background: linear-gradient(160deg, var(--vcl-teal-light) 0%, var(--vcl-sage-light) 100%); display: flex; align-items: center; justify-content: center; position: relative; overflow: hidden; }
        .vcl-wrap .team-photo-initials { font-size: 2.4rem; font-weight: 300; color: var(--vcl-teal); opacity: 0.35; user-select: none; }
        .vcl-wrap .team-photo-overlay { position: absolute; inset: 0; background: linear-gradient(to top, rgba(122,48,16,0.72) 0%, transparent 55%); opacity: 0; transition: opacity 0.3s; display: flex; align-items: flex-end; padding: 16px; }
        .vcl-wrap .team-card:hover .team-photo-overlay { opacity: 1; }
        .vcl-wrap .team-photo-cta { background: white; color: var(--vcl-primary); border: none; cursor: pointer; font-size: 0.72rem; font-weight: 600; padding: 6px 14px; border-radius: 20px; display: flex; align-items: center; gap: 6px; }
        .vcl-wrap .team-info { padding: 16px 18px; }
        .vcl-wrap .team-name { font-size: 0.9rem; font-weight: 600; color: var(--vcl-text-dark); line-height: 1.3; margin-bottom: 4px; }
        .vcl-wrap .team-title { font-size: 0.7rem; color: var(--vcl-teal); font-weight: 600; text-transform: uppercase; letter-spacing: 0.08em; }

        /* ── TEAM MODAL ── */
        .vcl-wrap .vcl-overlay { position: fixed; inset: 0; z-index: 999; background: rgba(42,59,63,0.82); backdrop-filter: blur(8px); display: flex; align-items: center; justify-content: center; padding: 24px; opacity: 0; transition: opacity 0.3s; pointer-events: none; }
        .vcl-wrap .vcl-overlay.vcl-open { opacity: 1; pointer-events: all; }
        .vcl-wrap .vcl-modal { background: white; border-radius: 24px; max-width: 660px; width: 100%; overflow: hidden; position: relative; transform: translateY(24px); transition: transform 0.3s; }
        .vcl-wrap .vcl-overlay.vcl-open .vcl-modal { transform: none; }
        .vcl-wrap .vcl-modal-header { background: linear-gradient(135deg, var(--vcl-teal-light), var(--vcl-sage-light)); padding: 36px 36px 28px; display: flex; gap: 22px; align-items: flex-start; position: relative; }
        .vcl-wrap .vcl-modal-close { position: absolute; top: 16px; right: 16px; width: 34px; height: 34px; border-radius: 50%; background: white; border: 1px solid var(--vcl-border); cursor: pointer; color: var(--vcl-text-mid); display: flex; align-items: center; justify-content: center; font-size: 0.85rem; transition: background 0.2s; }
        .vcl-wrap .vcl-modal-close:hover { background: var(--vcl-teal-light); color: var(--vcl-teal); }
        .vcl-wrap .vcl-modal-photo { width: 88px; height: 88px; border-radius: 16px; flex-shrink: 0; background: linear-gradient(160deg, var(--vcl-muted-teal), var(--vcl-teal)); display: flex; align-items: center; justify-content: center; font-size: 1.8rem; font-weight: 300; color: rgba(255,255,255,0.6); border: 3px solid white; }
        .vcl-wrap .vcl-modal-name { font-size: 1.35rem; font-weight: 600; color: var(--vcl-text-dark); margin-bottom: 4px; }
        .vcl-wrap .vcl-modal-role { font-size: 0.7rem; text-transform: uppercase; letter-spacing: 0.1em; color: var(--vcl-teal); font-weight: 700; margin-bottom: 8px; }
        .vcl-wrap .vcl-modal-body { padding: 28px 36px 36px; max-height: 50vh; overflow-y: auto; }
        .vcl-wrap .vcl-modal-body p { font-size: 0.88rem; color: var(--vcl-text-mid); line-height: 1.9; }

        @keyframes vclFadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: none; }
        }

        /* ── RESPONSIVE ── */
        @media (max-width: 1024px) {
          .vcl-wrap .consult-inner, .vcl-wrap .child-inner, .vcl-wrap .prenatal-inner, 
          .vcl-wrap .medication-inner, .vcl-wrap .dementia-inner, 
          .vcl-wrap .virtual-inner, .vcl-wrap .continuity-inner { grid-template-columns: 1fr; gap: 36px; }
          .vcl-wrap .child-visual { order: 1; }
          .vcl-wrap .child-content { order: 2; }
          .vcl-wrap .child-banner { position: static; }
          .vcl-wrap .therapy-grid { grid-template-columns: 1fr 1fr; }
          .vcl-wrap .team-row1 { grid-template-columns: 1fr 1fr; }
          .vcl-wrap .prenatal-bg-text { display: none; }
        }
        @media (max-width: 640px) {
          .vcl-wrap .therapy-grid, .vcl-wrap .team-row1 { grid-template-columns: 1fr; }
          .vcl-wrap .child-support-grid, .vcl-wrap .cst-activities { grid-template-columns: 1fr; }
          .vcl-wrap .child-support-item.vcl-span-2,
          .vcl-wrap .cst-activity.vcl-span-2 { grid-column: span 1; }
          .vcl-wrap .vcl-modal-header { padding: 28px 20px 20px; flex-direction: column; }
          .vcl-wrap .vcl-modal-body { padding: 20px; }
        }
      `}</style>

      {/* HERO */}
      <section className="vcl-hero" id="hero">
        <div className="vcl-hero-left">
          <div className="vcl-hero-eyebrow">Viveka Sparsha</div>
          <h1 className="vcl-hero-h1">
            Expert Mental Healthcare,<br />Closer to <em>Everyday Life</em>
          </h1>
          <p className="vcl-hero-sub">
            <strong>Compassionate outpatient psychiatric consultations, therapy, counselling, emotional wellbeing support, and specialised care for individuals, children, older adults, and families.</strong><br /><br />
            Seeking mental healthcare does not always require hospital admission. Sometimes, healing begins with understanding, guidance, and the reassurance that you do not have to navigate things alone.<br /><br />
            At Viveka Sparsha, we provide personalised outpatient mental healthcare through psychiatric consultations, psychological assessment, counselling, therapy, dementia care and emotional wellbeing support, helping individuals and families move forward with greater confidence, clarity, and care.
          </p>
          <div className="vcl-hero-btns">
            <button className="vcl-btn-primary"><i className="fas fa-calendar-alt" style={{ fontSize: '0.75rem' }}></i> Book Appointment</button>
            <button className="vcl-btn-outline">Learn More</button>
          </div>
        </div>
        <div className="vcl-hero-right">
          <div className="vcl-hero-right-pattern"></div>
          <div className="vcl-hero-right-inner">
            <div className="vcl-hero-card">
              <div className="vcl-hero-card-icon"><i className="fas fa-brain"></i></div>
              <h4>Psychiatric Consultations</h4>
              <p>Expert, unhurried assessments for adults, children & families</p>
            </div>
            <div className="vcl-hero-card">
              <div className="vcl-hero-card-icon"><i className="fas fa-comments"></i></div>
              <h4>Psychotherapy</h4>
              <p>Evidence-based therapy tailored to your unique needs</p>
            </div>
            <div className="vcl-hero-card-dark">
              <div className="card-icon"><i className="fas fa-spa"></i></div>
              <h4>Perinatal Care</h4>
              <p>Specialised mental wellness support through pregnancy & postpartum</p>
            </div>
            <div className="vcl-hero-card">
              <div className="vcl-hero-card-icon"><i className="fas fa-laptop-medical"></i></div>
              <h4>Online Consultations</h4>
              <p>Access care from wherever you are in Karnataka</p>
            </div>
          </div>
        </div>
      </section>

      {/* CONSULTATION */}
        <section className="vcl-section consult-section" id="consultation">
          <div className="consult-inner">
            <div className="consult-visual vcl-reveal">
              <div className="consult-big-label"><span>We support individuals experiencing:</span></div>
              <div className="consult-tags">
                <div className="consult-tag"><i className="fas fa-circle"></i> Anxiety &amp; Emotional Distress</div>
                <div className="consult-tag"><i className="fas fa-circle"></i> Depression &amp; Mood Concerns</div>
                <div className="consult-tag"><i className="fas fa-circle"></i> Sleep Difficulties</div>
                <div className="consult-tag"><i className="fas fa-circle"></i> Behavioural Changes</div>
                <div className="consult-tag"><i className="fas fa-circle"></i> Relationship Conflicts</div>
                <div className="consult-tag"><i className="fas fa-circle"></i> Stress &amp; Burnout</div>
                <div className="consult-tag"><i className="fas fa-circle"></i> Memory Concerns</div>
                <div className="consult-tag"><i className="fas fa-circle"></i> Obsessive-Compulsive Disorder (OCD) </div>
                <div className="consult-tag"><i className="fas fa-circle"></i> digital addiction</div>
              </div>
            </div>
            <div className="consult-content vcl-reveal vcl-rd2">
              <div className="vcl-section-label">Psychiatric Consultation</div>
              <h2 className="vcl-title">Understanding the Full Picture<br />Before <em>Treatment Begins</em></h2>
              <p className="vcl-intro">Our psychiatric consultations are designed to help individuals better understand emotional, psychological, behavioural, and mental health concerns through detailed assessments and professional guidance.</p>
              <p className="consult-desc">We take the time to understand emotional experiences, symptoms, lifestyle factors, personal history, and family concerns before recommending personalised care pathways.</p>
            </div>
          </div>
        </section>

          <section className="vcl-section consult-section" id="counselling">
            <div className="consult-inner">
              <div className="consult-visual vcl-reveal">
                <div className="consult-big-label"><span>We support individuals experiencing:</span></div>
                <div className="consult-tags">
                  <div className="consult-tag"><i className="fas fa-circle"></i> Individual Counselling</div>
                  <div className="consult-tag"><i className="fas fa-circle"></i> Family Counselling</div>
                  <div className="consult-tag"><i className="fas fa-circle"></i> Child Counselling</div>
                  <div className="consult-tag"><i className="fas fa-circle"></i> Adolescent Counselling</div>
                  <div className="consult-tag"><i className="fas fa-circle"></i> Marital &amp; Couple Counselling</div>
                  <div className="consult-tag"><i className="fas fa-circle"></i> Midlife Counselling</div>

                </div>
              </div>
              <div className="consult-content vcl-reveal vcl-rd2">
                <div className="vcl-section-label">Counseling Center</div>
                <h2 className="vcl-title">A Safe Space to Heal,<br /><em>Understand, and Grow</em></h2>
                <p className="vcl-intro">Healing often begins with conversation. Our psychotherapy and counselling services provide confidential, compassionate, and supportive spaces where individuals and families can better understand emotions, navigate challenges, and develop healthier coping strategies.</p>

              </div>
            </div>
          </section>

          {/* CHILD GUIDANCE */}
            <section className="vcl-section child-section" id="child-guidance">
              <div className="child-inner">
                <div className="child-visual vcl-reveal">
                  <div className="child-banner">
                    <div className="child-banner-icon"><i className="fas fa-seedling" style={{ fontSize: '2rem', color: 'rgba(255,255,255,0.7)' }}></i></div>
                    <h3>Supporting Young Minds Through Every Stage of Growth</h3>
                    <p>We work closely with children, parents, caregivers, and schools to better understand concerns and create personalised care plans focused on long-term emotional wellbeing.</p>
                  </div>
                </div>
                <div className="child-content vcl-reveal vcl-rd2">
                  <div className="vcl-section-label">Child Guidance Clinic</div>
                  <p className="vcl-intro">Children and adolescents experience emotional, behavioural, developmental, and academic challenges differently. Early support can play a meaningful role in helping young individuals develop confidence, emotional resilience, and healthy coping mechanisms.</p>
                  <p className="consult-desc">At Viveka's Child Guidance Clinic (CGU), we provide specialised emotional, behavioural, and psychological support in a safe, compassionate, and understanding environment.</p>
                    <div className="child-support-grid">
                      <div className="child-support-item"><div className="child-support-dot"></div><span>Behavioural concerns</span></div>
                      <div className="child-support-item"><div className="child-support-dot"></div><span>Anxiety &amp; emotional distress</span></div>
                      <div className="child-support-item"><div className="child-support-dot"></div><span>Academic stress</span></div>
                      <div className="child-support-item"><div className="child-support-dot"></div><span>ADHD &amp; developmental concerns</span></div>
                      <div className="child-support-item"><div className="child-support-dot"></div><span>Emotional regulation difficulties</span></div>
                      <div className="child-support-item"><div className="child-support-dot"></div><span>Social adjustment challenges</span></div>
                      <div className="child-support-item vcl-span-2"><div className="child-support-dot"></div><span>Parent guidance and counselling</span></div>
                    </div>
                  </div>
                </div>
            </section>

            {/* PRENATAL */}
              <section className="vcl-section prenatal-section" id="prenatal">
                <div className="prenatal-bg-text">Care</div>
                <div className="prenatal-inner">
                  <div className="prenatal-content vcl-reveal">
                    <div className="vcl-section-label">Pre and postnatal Psychiatry Care</div>
                    <h2 className="vcl-title">Supporting Mental Wellbeing During<br /><em>Pregnancy &amp; Parenthood</em></h2>
                    <p className="vcl-intro">Pregnancy and the transition into parenthood can bring emotional and psychological changes that sometimes feel overwhelming.</p>
                    <p className="consult-desc">Our Perinatal Psychiatry Care services support individuals experiencing anxiety, depression, emotional stress, adjustment difficulties, and other mental health concerns during pregnancy and the postpartum period. Through compassionate psychiatric care, counselling, and emotional support, we help individuals navigate this important phase with greater confidence and well-being.</p>
                  </div>
                </div>
              </section>

              {/* THERAPY */}
                <section className="vcl-section therapy-section" id="therapy">
                  <div className="therapy-header vcl-reveal">
                    <div className="vcl-section-label">Therapy &amp; Emotional Wellbeing</div>
                    <h2 className="vcl-title">A Safe Space to Heal,<br /><em>Understand, and Grow</em></h2>
                    <p className="therapy-main-desc">Healing often begins with conversation. Our psychotherapy and counselling services provide confidential, compassionate, and supportive spaces where individuals and families can better understand emotions, navigate challenges, and develop healthier coping strategies.</p>
                  </div>
                  <div className="therapy-grid">
                    <div className="therapy-card vcl-reveal vcl-rd1">
                      <div className="therapy-card-num">1</div>
                      <div className="therapy-card-icon"><i className="fas fa-user"></i></div>
                      <h4>Individual Counselling</h4>
                      <p>Individual counselling offers a safe and confidential environment where individuals can explore emotional concerns, behavioural patterns, life transitions, stress, and personal challenges. Our therapists support emotional awareness, resilience, confidence, and meaningful growth.</p>
                    </div>
                    <div className="therapy-card vcl-reveal vcl-rd2">
                      <div className="therapy-card-num">2</div>
                      <div className="therapy-card-icon"><i className="fas fa-home"></i></div>
                      <h4>Family Counselling</h4>
                      <p>Family counselling supports healthier communication, conflict resolution, emotional understanding, and stronger relationships between family members. We help families navigate caregiving challenges, behavioural concerns, emotional stress, and relationship dynamics more constructively.</p>
                    </div>
                    <div className="therapy-card vcl-reveal vcl-rd3">
                      <div className="therapy-card-num">3</div>
                      <div className="therapy-card-icon"><i className="fas fa-child"></i></div>
                      <h4>Child Counselling</h4>
                      <p>Children often experience and express emotions differently from adults. Child counselling provides supportive environments where children can safely process feelings, improve emotional understanding, and develop healthy coping skills.</p>
                    </div>
                    <div className="therapy-card vcl-reveal vcl-rd1">
                      <div className="therapy-card-num">4</div>
                      <div className="therapy-card-icon"><i className="fas fa-seedling"></i></div>
                      <h4>Adolescent Counselling</h4>
                      <p>Adolescence can bring emotional, academic, social, and identity-related challenges. Our adolescent counselling services provide supportive, judgement-free spaces where young individuals can openly express concerns and strengthen emotional resilience.</p>
                    </div>
                    <div className="therapy-card vcl-reveal vcl-rd2">
                      <div className="therapy-card-num">5</div>
                      <div className="therapy-card-icon"><i className="fas fa-heart"></i></div>
                      <h4>Marital &amp; Couple Counselling</h4>
                      <p>Healthy relationships thrive on communication, trust, and emotional understanding. Our couples counselling services support partners in resolving conflict, improving communication, rebuilding emotional connection, and strengthening relationships.</p>
                    </div>
                    <div className="therapy-card vcl-reveal vcl-rd3">
                      <div className="therapy-card-num">6</div>
                      <div className="therapy-card-icon"><i className="fas fa-compass"></i></div>
                      <h4>Midlife Counselling</h4>
                      <p>Life transitions during midlife may bring emotional, professional, personal, and relationship-related challenges. Midlife counselling helps individuals navigate uncertainty, rediscover purpose, and adapt to change with greater confidence and clarity.</p>
                    </div>
                  </div>
                </section>

                {/* MEDICATION */}
                  <section className="vcl-section medication-section" id="medication">
                    <div className="med-bg"></div>
                    <div className="medication-inner">
                      <div className="medication-content vcl-reveal">
                        <div className="vcl-section-label">Medication Management &amp; Clinical Support</div>
                        <h2 className="vcl-title">Safe, Personalised,<br />and <em style={{ color: 'var(--vcl-secondary)' }}>Carefully Monitored</em></h2>
                        <p className="vcl-intro">Medication may play an important role in supporting mental well-being when clinically appropriate.</p>
                        <p className="med-body">Our psychiatrists provide careful medication management through dosage monitoring, treatment review, side-effect management, and personalised care planning to ensure safe and effective outcomes.<br /><br />We believe medication decisions should always be collaborative, transparent, and tailored to individual needs.</p>
                      </div>
                    </div>
                  </section>

                  {/* DEMENTIA & CST (MERGED) */}
                    <section className="vcl-section dementia-section" id="dementia">
                      <div className="dementia-inner">
                        <div className="vcl-reveal">
                          <div className="vcl-section-label">Dementia &amp; Memory Clinic</div>
                          <h2 className="vcl-title">Compassionate Care<br />for <em>Ageing Minds</em></h2>
                          <p className="vcl-intro">Changes in memory, cognition, and behaviour can deeply affect both individuals and families.</p>
                          <p className="consult-desc" style={{ marginTop: '14px' }}>Our Dementia and Memory Clinic provides specialised assessment, diagnosis, treatment, and emotional support for individuals experiencing dementia, Alzheimer's disease, cognitive decline, and age-related behavioural changes. Led by experienced specialists, our care combines medical expertise with caregiver guidance, emotional support, and long-term planning.</p>

                          <div className="vcl-section-label" style={{ marginTop: '32px' }}>Cognitive Stimulation Therapy for Elders</div>
                          <h2 className="vcl-title" style={{ fontSize: '1.6rem' }}>Keeping Minds Active,<br /><em>Engaged, and Connected</em></h2>
                          <p className="vcl-intro">Our Cognitive Stimulation Therapy programme is designed to support cognitive health, memory, emotional well-being, and meaningful social engagement in older adults.</p>
                          <p className="consult-desc" style={{ marginTop: '14px' }}>Every programme is personalised around individual preferences and abilities to encourage participation, mental agility, and emotional well-being.</p>
                        </div>

                        <div className="vcl-reveal vcl-rd2">
                          <div className="dementia-services">
                            <div className="dementia-service"><div className="dementia-service-num">01</div><span>Memory assessments</span></div>
                            <div className="dementia-service"><div className="dementia-service-num">02</div><span>Dementia evaluation</span></div>
                            <div className="dementia-service"><div className="dementia-service-num">03</div><span>Cognitive health consultations</span></div>
                            <div className="dementia-service"><div className="dementia-service-num">04</div><span>Behavioural support</span></div>
                            <div className="dementia-service"><div className="dementia-service-num">05</div><span>Caregiver counselling and guidance</span></div>
                          </div>

                          <div className="cst-activities">
                            <div className="cst-activity"><div className="cst-activity-icon"><i className="fas fa-brain"></i></div><span>Memory exercises</span></div>
                            <div className="cst-activity"><div className="cst-activity-icon"><i className="fas fa-puzzle-piece"></i></div><span>Word and puzzle games</span></div>
                            <div className="cst-activity"><div className="cst-activity-icon"><i className="fas fa-music"></i></div><span>Music and artistic activities</span></div>
                            <div className="cst-activity"><div className="cst-activity-icon"><i className="fas fa-hands-helping"></i></div><span>Social interaction</span></div>
                            <div className="cst-activity vcl-span-2"><div className="cst-activity-icon"><i className="fas fa-leaf"></i></div><span>Gentle movement and engagement exercises</span></div>
                          </div>
                        </div>
                      </div>
                    </section>

                    {/* VIRTUAL */}
                      <section className="vcl-section virtual-section" id="virtual">
                        <div className="virtual-bg"></div>
                        <div className="virtual-inner">
                          <div className="virtual-content vcl-reveal">
                            <div className="vcl-section-label">Virtual Consulting for Mental Healthcare</div>
                            <h2 className="vcl-title">Mental Healthcare,<br /><em style={{ color: 'var(--vcl-secondary)' }}>Wherever You Are</em></h2>
                            <p>For individuals unable to visit the clinic in person, Viveka offers online consultation and therapy services designed to make expert mental healthcare more accessible.</p>
                            <p>Whether for follow-up care, therapy, counselling, or emotional wellbeing support, our virtual consultations provide professional guidance from the comfort and privacy of your own environment.</p>
                          </div>
                          <div className="virtual-card vcl-reveal vcl-rd2">
                            <div className="virtual-card-icon"><i className="fas fa-laptop" style={{ fontSize: '3rem', color: 'rgba(255,255,255,0.7)' }}></i></div>
                            <h3>Online Consultations &amp; Therapy</h3>
                          </div>
                        </div>
                      </section>

                      {/* CONTINUITY */}
                        <section className="vcl-section continuity-section" id="continuity">
                          <div className="continuity-inner">
                            <div className="vcl-reveal">
                              <div className="vcl-section-label">Continuity of Care</div>
                              <h2 className="vcl-title">Supporting Recovery<br /><em>Beyond the First Visit</em></h2>
                              <p className="vcl-intro">Mental healthcare is often an ongoing journey rather than a single appointment.</p>
                              <p style={{ fontSize: '0.93rem', color: 'var(--vcl-text-mid)', lineHeight: 1.85, marginTop: '14px' }}>Our follow-up care focuses on continuity, progress monitoring, emotional support, medication review, and long-term wellbeing, helping individuals feel supported every step of the way.</p>
                            </div>
                          </div>
                        </section>

                        {/* TEAM */}
                          <section className="vcl-section team-section" id="team">
                            <div className="team-header">
                              <div>
                                <h2 className="vcl-title vcl-reveal vcl-rd1">Meet Our Specialists</h2>
                                <div className="vcl-section-label vcl-reveal">Experienced Professionals, Compassionate Care</div>
                              </div>
                              <p className="vcl-intro vcl-reveal vcl-rd2" style={{ marginBottom: 0 }}>Our psychiatrists, psychologists, and therapists work collaboratively to provide thoughtful, evidence-based, and personalised mental healthcare.</p>
                            </div>
                            <div className="team-row1">
                              {TEAM_MEMBERS.map((m, i) => (
                                <div key={m.name} className={`team-card vcl-reveal vcl-rd${(i % 3) + 1}`} onClick={() => setSelectedMember(m)}>
                                  <div className="team-photo">
                                    <div className="team-photo-initials">{m.initials}</div>
                                    <div className="team-photo-overlay">
                                      <button className="team-photo-cta"><i className="fas fa-user"></i> View Profile</button>
                                    </div>
                                  </div>
                                  <div className="team-info">
                                    <div className="team-name">{m.name}</div>
                                    <div className="team-title">{m.role}</div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </section>

                          {/* TEAM MODAL */}
                          {selectedMember && (
                            <div className="vcl-overlay vcl-open" onClick={(e) => { if (e.target === e.currentTarget) setSelectedMember(null); }}>
                              <div className="vcl-modal">
                                <div className="vcl-modal-header">
                                  <button className="vcl-modal-close" onClick={() => setSelectedMember(null)}><i className="fas fa-times"></i></button>
                                  <div className="vcl-modal-photo">{selectedMember.initials}</div>
                                  <div>
                                    <div className="vcl-modal-name">{selectedMember.name}</div>
                                    <div className="vcl-modal-role">{selectedMember.role}</div>
                                  </div>
                                </div>
                                <div className="vcl-modal-body" dangerouslySetInnerHTML={{ __html: `<p>${selectedMember.bio}</p>` }} />
                              </div>
                            </div>
                          )}
                        </div>
                        );
}
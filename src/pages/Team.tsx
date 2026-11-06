import PageHero from '../components/PageHero';
import CTAStrip from '../components/CTAStrip';

const PSYCHIATRISTS = [
  {
    name: 'Dr. Murali Krishna',
    role: 'Clinical Director',
    img: 'team-murali.jpg',
    bio: "Dr. Murali Krishna is a UK-trained psychiatrist with a special interest in older persons' brain and mental health. He is a member of the Royal College of Psychiatrists, UK, and holds a PhD from the University of Southampton, where his research focused on late-life mental illness. He spent nearly 15 years working within the National Health Service (NHS) before returning to Mysore to establish Viveka. He serves as a scientific advisor to ARDSI (Alzheimer's and Related Disorders Society of India) and brings international standards of geriatric psychiatric care to Karnataka.",
  },
  {
    name: 'Dr. Rajagopal R',
    role: 'Lead Consultant, Acute Care',
    img: 'team-rajagopal.jpg',
    bio: 'Dr. Rajagopal completed his MD in Psychiatry from PGI-MER Chandigarh and has practised in Mysore for over a decade. He leads our acute care service and has a particular interest in suicide prevention and epidemiology. He is actively involved in international research collaborations with the University of Manchester and University of Chester, ensuring that our acute care practice reflects the latest global evidence.',
  },
  {
    name: 'Dr. Narendra Kumar',
    role: 'Lead Consultant, De-Addiction & Rehabilitation',
    img: 'team-narendra.jpg',
    bio: "Trained at NIMHANS — one of Asia's leading neuropsychiatric institutions — Dr. Narendra Kumar brings over 15 years of specialist experience in addiction psychiatry and rehabilitation. He leads our de-addiction programme and residential rehabilitation service, combining deep clinical expertise with a compassionate, patient-centred approach.",
  },
];

const SUPPORT = [
  {
    role: 'Physicians',
    img: 'team-physicians.jpg',
    icon: 'fa-stethoscope',
    bio: 'Our physicians work alongside the psychiatric team to manage the physical health needs of our patients — an often-overlooked but critically important part of holistic mental health care. They provide medical management, monitor for medication side effects, and ensure that co-existing physical health conditions are identified and treated.',
  },
  {
    role: 'Clinical Psychologists',
    img: 'team-clin-psychologists.jpg',
    icon: 'fa-brain',
    bio: 'Our clinical psychologists hold advanced postgraduate qualifications in clinical psychology and are trained in a range of evidence-based therapeutic approaches. They conduct formal psychological assessments, provide individual and group therapy, and are integral to rehabilitation planning.',
  },
  {
    role: 'Psychologists',
    img: 'team-psychologists.jpg',
    icon: 'fa-comments',
    bio: 'Our team of psychologists supports patients across the full spectrum of our services — from one-to-one counselling and psychoeducation to group therapeutic activities and family sessions.',
  },
  {
    role: 'Physiotherapists',
    img: 'team-physio.jpg',
    icon: 'fa-walking',
    bio: 'Specialised in neurological and psychiatric rehabilitation, our physiotherapists help patients rebuild physical strength, mobility, and independence — a vital part of recovery particularly for post-stroke patients and those in long-term inpatient care.',
  },
  {
    role: 'Social Workers',
    img: 'team-social.jpg',
    icon: 'fa-hands-helping',
    bio: "Our psychiatric social workers bridge the gap between clinical care and real life. They support families, manage discharge planning, liaise with community resources, and advocate for patients' social and welfare needs.",
  },
  {
    role: 'Speech & Language Therapists',
    img: 'team-speech.jpg',
    icon: 'fa-assistive-listening-systems',
    bio: 'Our speech and language therapists assess and treat communication and swallowing difficulties in patients of all ages — from children with developmental concerns to older adults recovering from stroke or living with dementia.',
  },
];

function PhotoCircle({ src, alt, icon, size }: { src: string; alt: string; icon: string; size: 'doc' | 'sup' }) {
  return (
    <div className={size === 'doc' ? 'doc-photo-circle' : 'support-photo-circle'}>
      <img
        src={`/${src}`}
        alt={alt}
        onError={(e) => {
          (e.currentTarget as HTMLImageElement).style.display = 'none';
          const next = (e.currentTarget.nextElementSibling as HTMLElement | null);
          if (next) next.style.display = 'flex';
        }}
      />
      <span className="placeholder-icon" style={{ display: 'none' }}><i className={`fas ${icon}`} /></span>
    </div>
  );
}

export default function Team() {
  return (
    <>
      <PageHero
        eyebrow="Our Specialists"
        title={<>The People Who Will <em>Care for You.</em></>}
        description="At Viveka, care is personal. Our specialists are not just highly qualified — they are deeply committed to the people they serve. Here is the team you will be working with."
      />

      {/* PSYCHIATRISTS */}
      <section className="psychiatrists-section">
        <div className="container">
          <span className="section-label">Consultant Psychiatrists</span>
          {PSYCHIATRISTS.map(p => (
            <div key={p.name} className="psychiatrist-card">
              <div className="doc-photo">
                <PhotoCircle src={p.img} alt={p.name} icon="fa-user-md" size="doc" />
                <p className="photo-note">photo</p>
              </div>
              <div className="doc-info">
                <span className="doc-role-badge"><i className="fas fa-star" /> {p.role}</span>
                <h2>{p.name}</h2>
                <p>{p.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SUPPORT TEAM */}
      <section className="support-section">
        <div className="container">
          <span className="section-label">Our Multidisciplinary Team</span>
          <div className="support-grid">
            {SUPPORT.map(s => (
              <div key={s.role} className="support-card">
                <div className="support-photo">
                  <PhotoCircle src={s.img} alt={s.role} icon={s.icon} size="sup" />
                  <p className="photo-note">photo</p>
                </div>
                <div className="support-body">
                  <span className="support-role">{s.role}</span>
                  <p>{s.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTAStrip />
    </>
  );
}
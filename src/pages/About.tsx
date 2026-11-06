import PageHero from '../components/PageHero';
import CTAStrip from '../components/CTAStrip';

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About Viveka"
        title={
          <>
            Our Vision, Mission
            <br />&amp; <em>Care Philosophy</em>
          </>
        }
        description="A Mysore where no one faces a mental health crisis without expert care, compassion, and community."
      />

      {/* VISION & MISSION */}
      <section className="vm-section">
        <div className="container">
          <div className="vm-grid">
            <div className="vm-col">
              <span className="vm-tag">Vision</span>
              <h2 className="serif">
                A Mysore where no one faces a mental health crisis without expert care, compassion,
                and community.
              </h2>
            </div>
            <div className="vm-col">
              <span className="vm-tag">Mission</span>
              <h2 className="serif" style={{ fontSize: '1.6rem' }}>
                To deliver the highest standard of neuropsychiatric, de-addiction, and
                rehabilitation care in Karnataka
              </h2>
              <p style={{ marginTop: 16 }}>
                — through a transdisciplinary team, a purpose-built facility, and a philosophy that
                treats every person as a whole human being, not just a diagnosis.
              </p>
            </div>
          </div>
        </div>
      </section>

      <hr className="divider" />

      {/* PHILOSOPHY */}
      <section className="philosophy">
        <div className="container">
          <div className="phil-inner">
            <div className="phil-left">
              <span className="phil-eyebrow">Our Care Philosophy</span>
              <h2 className="serif">We Treat People, Not Just Conditions.</h2>
              <p>
                At the heart of everything we do at Viveka is a simple but powerful belief: that
                every person who walks through our doors — or whose family calls us in desperation —
                deserves to be seen, heard, and cared for with genuine compassion.
              </p>
              <p style={{ marginTop: 16 }}>
                We do not believe in reducing people to their diagnoses. We take time to understand
                your life, your relationships, your history, and your hopes. Only then do we build a
                care plan that is truly yours.
              </p>
              <p style={{ marginTop: 16 }}>Our philosophy is rooted in three principles:</p>
            </div>
            <div className="principles">
              {[
                {
                  num: '01',
                  title: 'Dignity',
                  text: 'Every person, regardless of diagnosis or history, deserves respectful, compassionate care.',
                },
                {
                  num: '02',
                  title: 'Partnership',
                  text: 'We work with patients and families, not around them. Your voice matters in every decision.',
                },
                {
                  num: '03',
                  title: 'Recovery',
                  text: 'We believe recovery is possible for everyone, in some form. Our goal is always to help you live the fullest life possible.',
                },
              ].map((p) => (
                <div key={p.num} className="principle">
                  <div className="principle-num">{p.num}</div>
                  <div className="principle-body">
                    <h3>{p.title}</h3>
                    <p>{p.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* INTEGRATED CARE MODEL */}
      <section className="care-model">
        <div className="container">
          <div className="care-header">
            <span className="eyebrow">The Viveka Integrated Care Model</span>
            <h2 className="serif">Better Outcomes Through Integration.</h2>
            <p>
              Mental health conditions are rarely simple. They affect how you think, feel, move,
              communicate, and relate to others. That is why we have built a model of care that
              brings together every discipline needed to support recovery — under one roof, in one
              coordinated plan.
            </p>
          </div>
          <div className="care-features">
            {[
              {
                icon: 'fa-users',
                bg: '#EEF6F7',
                fg: 'var(--deep)',
                title: 'Connected Team',
                text: 'Your psychiatrist, psychologist, physiotherapist, and social worker all communicate with each other about your progress.',
              },
              {
                icon: 'fa-sync-alt',
                bg: '#F5F0E8',
                fg: 'var(--primary)',
                title: 'Evolving Care Plans',
                text: 'Your care plan evolves as you do — we review and adapt regularly.',
              },
              {
                icon: 'fa-home',
                bg: '#F2F5EF',
                fg: '#5a7850',
                title: 'Family Included',
                text: 'Your family is included, educated, and supported throughout the process.',
              },
              {
                icon: 'fa-route',
                bg: '#FBF0ED',
                fg: 'var(--terracotta)',
                title: 'Seamless Transitions',
                text: 'Transitions between inpatient, outpatient, and home-based care are smooth and planned — not abrupt or disjointed.',
              },
            ].map((f) => (
              <div key={f.title} className="care-feat">
                <div className="feat-icon" style={{ background: f.bg, color: f.fg }}>
                  <i className={`fas ${f.icon}`} />
                </div>
                <div>
                  <h3>{f.title}</h3>
                  <p>{f.text}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="care-footnote">
            This is the Viveka difference: care that is genuinely connected.
          </p>
        </div>
      </section>

      {/* FACILITY */}
      <section className="facility">
        <div className="container">
          <div className="facility-grid">
            <div className="facility-left">
              <span className="eyebrow">Our 50-Bed Purpose-Built Facility</span>
              <h2 className="serif">Designed for Healing.</h2>
              <p>
                Viveka is proud to be the first hospital in Mysore to offer a dedicated,
                purpose-built 50-bed residential psychiatric rehabilitation facility. This is not a
                repurposed general ward — it is a space designed from the ground up to support
                mental health recovery.
              </p>
              <p style={{ marginTop: 16 }}>
                Whether someone is in acute crisis or in the longer process of rehabilitation, our
                facility is built to hold them safely and help them move forward.
              </p>
            </div>
            <div className="facility-list">
              {[
                ['fa-bed', 'Safe, structured residential wards for men and women'],
                ['fa-comments', 'Dedicated spaces for individual and group therapy'],
                ['fa-walking', 'Physiotherapy and neuro-rehabilitation suites'],
                ['fa-hands', 'Activity and life skills training areas'],
                ['fa-user-friends', 'Family consultation rooms'],
                ['fa-shield-alt', '24×7 nursing supervision and clinical oversight'],
                ['fa-leaf', 'Calm, therapeutic outdoor spaces'],
              ].map(([i, t]) => (
                <div key={t} className="fac-item">
                  <div className="fac-dot">
                    <i className={`fas ${i}`} />
                  </div>
                  <span>{t}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHAT SETS US APART */}
      <section className="differentiators">
        <div className="container">
          <div className="diff-header">
            <span className="eyebrow">Why Viveka is Different</span>
            <h2 className="serif">What Sets Us Apart in Karnataka.</h2>
            <p>
              There are many clinics and hospitals in Mysore. Here is what makes Viveka different.
            </p>
          </div>
          <div className="diff-list">
            {[
              [
                'Specialisation',
                'We are a dedicated neuropsychiatric and rehabilitation centre — this is all we do, and we do it with depth and focus.',
              ],
              [
                'Team Credentials',
                'Our clinical director is a UK-trained psychiatrist and member of the Royal College of Psychiatrists, UK, with a PhD from the University of Southampton. Our team includes specialists trained at NIMHANS and PGI-MER Chandigarh.',
              ],
              [
                'Research-Driven Practice',
                'We actively collaborate on international research — including work on suicide prevention with the University of Manchester and University of Chester — meaning our clinical practice is informed by current global evidence.',
              ],
              [
                'Family-Centred Approach',
                'We treat families as partners in care, not as visitors. Education, counselling, and guidance for families is built into every programme.',
              ],
              [
                'Continuum of Care',
                'From crisis admission to rehabilitation, outpatient follow-up, and home-based support — we offer a complete continuum so that patients never fall through the cracks.',
              ],
            ].map(([label, body]) => (
              <div key={label} className="diff-item">
                <div className="diff-label">
                  <span>{label}</span>
                </div>
                <div className="diff-body">
                  <p>{body}</p>
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
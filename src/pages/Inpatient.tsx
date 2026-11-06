import PageHero from '../components/PageHero';
import CTAStrip from '../components/CTAStrip';

const SECTIONS: [string, string][] = [
  ['admission', 'Admission Process'],
  ['daily', 'Daily Structure'],
  ['family', 'Family Involvement'],
  ['safety', 'Safety & Supervision'],
  ['discharge', 'Discharge & Reintegration'],
];

export default function Inpatient() {
  return (
    <>
      <PageHero
        eyebrow="Inpatient Services"
        title={
          <>
            Care That Holds You <em>Every Step</em> of the Way.
          </>
        }
        description="From the moment of admission to the day you leave — and beyond — our inpatient programme is built around safety, structure, and genuine human care."
      />

      <nav className="section-index">
        <div className="section-index-inner">
          {SECTIONS.map(([id, label]) => (
            <a key={id} href={`#${id}`} className="si-item">
              {label}
            </a>
          ))}
        </div>
      </nav>

      {/* 4.1 ADMISSION */}
      <section className="inpatient-section" id="admission">
        <div className="container">
          <div className="steps-layout">
            <div className="steps-left">
              <span className="eyebrow">Admission Process</span>
              <h2>Taking the First Step — We Make It Simple</h2>
              <p>
                We understand that deciding to seek inpatient psychiatric care — for yourself or a
                family member — can feel overwhelming. At Viveka, we have designed our admission
                process to be as clear, supportive, and stress-free as possible.
              </p>
              <div className="bring-box" style={{ marginTop: 32 }}>
                <span className="list-label">What to Bring</span>
                <ul className="plain-list">
                  {[
                    'Any previous medical or psychiatric records',
                    'Current medications',
                    'Comfortable clothing and personal hygiene items',
                    'An emergency contact number for the family',
                  ].map((t) => (
                    <li key={t}>
                      <i className="fas fa-check" /> {t}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <span className="list-label">How Admission Works</span>
              <div className="steps-list">
                {[
                  [
                    '01',
                    'Contact Us',
                    'By phone, WhatsApp, or by walking in. Our team is available 24×7.',
                  ],
                  [
                    '02',
                    'Initial Assessment',
                    'A qualified clinician speaks with you or your family to understand the situation and recommend the appropriate level of care.',
                  ],
                  [
                    '03',
                    'Admission Decision',
                    'If inpatient admission is recommended, our team will guide you through what to bring, what to expect, and how the first few days will look.',
                  ],
                  [
                    '04',
                    'Welcome and Orientation',
                    'On arrival, the patient and family are oriented to the ward, introduced to key team members, and given a clear picture of the care plan.',
                  ],
                ].map(([n, title, text]) => (
                  <div key={n} className="step-item">
                    <div className="step-num">{n}</div>
                    <div className="step-body">
                      <h4>{title}</h4>
                      <p>{text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr className="divider" />

      {/* 4.2 DAILY STRUCTURE */}
      <section className="inpatient-section alt" id="daily">
        <div className="container">
          <div className="day-layout">
            <div className="day-left">
              <span className="eyebrow">Daily Rehabilitation Structure</span>
              <h2>A Day With Purpose</h2>
              <p>
                Structure is a powerful part of recovery. Our inpatient programme is built around a
                daily routine that balances clinical care with therapeutic activity, rest, and
                meaningful engagement.
              </p>
              <p>
                Every patient's schedule is personalised to their needs, stage of recovery, and care
                plan.
              </p>
            </div>
            <div>
              <span className="list-label" style={{ marginBottom: 16 }}>
                A Typical Day Includes
              </span>
              <div className="schedule">
                {[
                  ['fa-sun', '#EEF6F7', 'var(--deep)', 'Morning clinical review with nursing team'],
                  ['fa-comments', '#F5F0E8', 'var(--primary)', 'Individual or group therapy session'],
                  ['fa-walking', '#EEF6F7', 'var(--teal)', 'Physiotherapy or occupational activity'],
                  [
                    'fa-utensils',
                    '#F2F5EF',
                    '#5a7850',
                    'Meals in a structured, communal environment',
                  ],
                  [
                    'fa-hands',
                    '#FBF0ED',
                    'var(--terracotta)',
                    'Recreational and life skills activities',
                  ],
                  [
                    'fa-user-md',
                    '#EEF6F7',
                    'var(--deep)',
                    'Psychiatrist/psychologist review (scheduled regularly)',
                  ],
                  [
                    'fa-moon',
                    '#F5F0E8',
                    'var(--secondary)',
                    'Evening reflection and wind-down',
                  ],
                ].map(([icon, bg, fg, text]) => (
                  <div key={text} className="schedule-item">
                    <div className="sched-icon" style={{ background: bg, color: fg }}>
                      <i className={`fas ${icon}`} />
                    </div>
                    <span className="sched-text">{text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr className="divider" />

      {/* 4.3 FAMILY */}
      <section className="inpatient-section" id="family">
        <div className="container">
          <div className="family-header">
            <span className="eyebrow">Family Involvement</span>
            <h2>You Are Part of the Team</h2>
            <p>
              At Viveka, families are not kept at arm's length. We believe that family involvement
              — done thoughtfully — is one of the most important contributors to successful
              recovery. From the moment of admission to the day of discharge and beyond, we keep
              families informed, supported, and actively engaged.
            </p>
          </div>
          <div className="family-grid">
            {[
              [
                'fa-bell',
                '#EEF6F7',
                'var(--deep)',
                'Regular Updates',
                'Regular updates from the care team (with patient consent).',
              ],
              [
                'fa-calendar-alt',
                '#F5F0E8',
                'var(--primary)',
                'Family Meetings',
                'Scheduled family meetings to discuss progress and care plans.',
              ],
              [
                'fa-book-open',
                '#EEF6F7',
                'var(--teal)',
                'Psychoeducation Sessions',
                'Understanding the condition, the treatment, and how to help.',
              ],
              [
                'fa-comments',
                '#F2F5EF',
                '#5a7850',
                'Communication Guidance',
                'Guidance on how to communicate with and support your loved one.',
              ],
              [
                'fa-clipboard-check',
                '#FBF0ED',
                'var(--terracotta)',
                'Discharge Planning',
                'Involvement in discharge planning and aftercare.',
              ],
              [
                'fa-heart',
                '#EEF6F7',
                'var(--deep)',
                'Caregiver Support',
                'Because looking after a loved one with a mental illness can be exhausting, and you deserve support too.',
              ],
            ].map(([icon, bg, fg, title, text]) => (
              <div key={title} className="fam-cell">
                <div className="fam-icon" style={{ background: bg, color: fg }}>
                  <i className={`fas ${icon}`} />
                </div>
                <h4>{title}</h4>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="divider" />

      {/* 4.4 SAFETY */}
      <section className="inpatient-section cool" id="safety">
        <div className="container">
          <div className="safety-layout">
            <div className="safety-left">
              <span className="eyebrow">Safety & Clinical Supervision</span>
              <h2>Safe Every Hour of Every Day</h2>
              <p>
                The safety of every patient in our care is our highest priority. Our inpatient
                wards are staffed by trained nurses and clinical staff around the clock. Our
                psychiatrists conduct regular ward rounds, and our escalation protocols ensure that
                any change in a patient's condition is responded to swiftly.
              </p>
            </div>
            <div>
              <span className="list-label">Safety Measures Include</span>
              <div className="safety-list">
                {[
                  ['fa-shield-alt', '24×7 trained nursing supervision'],
                  ['fa-user-md', 'Regular clinical reviews by consultant psychiatrists'],
                  [
                    'fa-clipboard-list',
                    'Structured risk assessment at admission and throughout the stay',
                  ],
                  ['fa-home', 'Safe, therapeutic ward environments designed to minimise risk'],
                  [
                    'fa-exclamation-triangle',
                    'Clear escalation protocols for medical or psychiatric emergencies',
                  ],
                ].map(([icon, text]) => (
                  <div key={text} className="safety-item">
                    <div className="safety-dot">
                      <i className={`fas ${icon}`} />
                    </div>
                    <span>{text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr className="divider" />

      {/* 4.5 DISCHARGE */}
      <section className="inpatient-section alt" id="discharge">
        <div className="container">
          <div className="discharge-layout">
            <div className="discharge-left">
              <span className="eyebrow">Discharge & Reintegration Planning</span>
              <h2>Leaving Well Is Part of Getting Better</h2>
              <p>
                Discharge from inpatient care is not the end of treatment — it is a transition. At
                Viveka, we plan every discharge carefully, ensuring that patients and families are
                ready, resourced, and supported for the next phase.
              </p>
            </div>
            <div>
              <span className="list-label" style={{ marginBottom: 24 }}>
                Our Discharge Process Includes
              </span>
              <div className="timeline">
                {[
                  [
                    'Discharge Planning Meeting',
                    'A structured meeting with patient, family, and care team.',
                  ],
                  [
                    'Medication Plan',
                    'Clear medication plan and prescription for the transition period.',
                  ],
                  ['Outpatient Follow-Up', 'Scheduled outpatient follow-up appointments.'],
                  [
                    'Written Care Summary',
                    'Shared with the family and any relevant community care providers.',
                  ],
                  [
                    'Home-Care Referral',
                    'If needed, a referral to our home-care team is arranged.',
                  ],
                  [
                    'Open-Door Policy',
                    'If concerns arise after discharge, we are always reachable.',
                  ],
                ].map(([title, text]) => (
                  <div key={title} className="tl-item">
                    <div className="tl-dot" />
                    <h4>{title}</h4>
                    <p>{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTAStrip />
    </>
  );
}
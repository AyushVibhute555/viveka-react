import PageHero from '../components/PageHero';
import CTAStrip from '../components/CTAStrip';

const PATHWAYS: [string, string][] = [
  ['acute', 'Acute & Crisis'],
  ['deaddiction', 'De-Addiction'],
  ['rehab', 'Rehabilitation'],
  ['dementia', 'Dementia & Geriatric'],
  ['therapy', 'Psychology & Therapy'],
  ['physio', 'Physiotherapy'],
  ['speech', 'Speech & Language'],
  ['social', 'Social Work'],
  ['homebased', 'Home-Based Care'],
];

export default function Care() {
  return (
    <>
      <PageHero
        eyebrow="Care Pathways"
        title={
          <>
            Expert Care for Every Stage of <em>Your Journey.</em>
          </>
        }
        description="From acute crisis to long-term rehabilitation, home-based support to specialist therapy — our complete range of care pathways is designed to meet you wherever you are."
      />

      <nav className="pathway-index">
        <div className="pathway-index-inner">
          {PATHWAYS.map(([id, label]) => (
            <a key={id} href={`#${id}`} className="pi-item">
              {label}
            </a>
          ))}
        </div>
      </nav>

      {/* 3.1 ACUTE */}
      <section className="pathway" id="acute">
        <div className="container">
          <div className="layout-a">
            <div className="layout-a-left">
              <span className="eyebrow">Acute & Crisis Psychiatric Care</span>
              <h2>When Every Minute Matters — We Are Ready</h2>
              <p>
                A psychiatric crisis can arrive without warning — a sudden break from reality, a
                suicide attempt, severe agitation, or a complete inability to function. In these
                moments, what a person and their family needs most is immediate, expert,
                compassionate care.
              </p>
              <p>
                Our acute psychiatric care service is available 24 hours a day, 7 days a week. Our
                experienced team is trained to assess, stabilise, and create a safe environment for
                people in crisis — quickly and with care for both the patient and the family.
              </p>
              <div className="inline-cta">
                <strong>If you are in crisis right now, call us at +91 63641 11001. We are here.</strong>
              </div>
            </div>
            <div>
              <span className="list-label">What We Provide</span>
              <ul className="feature-list">
                {[
                  '24×7 emergency psychiatric assessment',
                  'Safe and supervised inpatient admission for crisis stabilisation',
                  'Medication management and monitoring',
                  'Round-the-clock nursing supervision',
                  'Early psychological support and family communication',
                  'Structured transition from acute care to rehabilitation',
                ].map((t) => (
                  <li key={t}>
                    <i className="fas fa-check" /> {t}
                  </li>
                ))}
              </ul>
              <div className="who-box">
                <span className="list-label">Who This Is For</span>
                <p>
                  Acute care is appropriate when someone is experiencing a first psychiatric
                  episode, a relapse of a known condition, a mental health emergency involving risk
                  to self or others, or a situation where outpatient management is no longer safe.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr className="path-divider" />

      {/* 3.2 DE-ADDICTION */}
      <section className="pathway pathway-alt" id="deaddiction">
        <div className="container">
          <div className="layout-b-intro">
            <div>
              <span className="eyebrow">De-Addiction & Detox Programmes</span>
              <h2>Recovery is Possible. It Starts Here.</h2>
            </div>
            <div>
              <p>
                Addiction is not a moral failing. It is a medical condition — complex, deeply
                personal, and entirely treatable with the right support. At Viveka, we offer a
                comprehensive de-addiction and detoxification programme that combines medical
                safety, psychiatric expertise, and psychological care.
              </p>
              <p>
                Whether the substance is alcohol, opioids, cannabis, prescription medications, or
                any other, our team has the experience and the compassion to help.
              </p>
            </div>
          </div>
          <span className="list-label">Our Programme Includes</span>
          <div className="feat-grid">
            {[
              ['fa-shield-alt', 'Medical detoxification under 24×7 supervision'],
              ['fa-brain', 'Psychiatric assessment and dual-diagnosis management'],
              ['fa-comments', 'Individual and group psychotherapy'],
              ['fa-users', 'Family counselling and education'],
              ['fa-route', 'Relapse prevention planning'],
              ['fa-calendar-check', 'Long-term aftercare and outpatient follow-up'],
            ].map(([i, t]) => (
              <div key={t} className="feat-cell">
                <i className={`fas ${i}`} /> {t}
              </div>
            ))}
          </div>
          <div className="who-box" style={{ marginTop: 32 }}>
            <span className="list-label">Why Mysore Families Trust Viveka for De-Addiction</span>
            <p>
              Our de-addiction programme is led by Dr. Narendra Kumar, trained at NIMHANS with over
              15 years of experience. We do not just detox — we help patients and families
              understand addiction, address its roots, and build a life beyond it.
            </p>
          </div>
        </div>
      </section>

      <hr className="path-divider" />

      {/* 3.3 REHAB */}
      <section className="pathway" id="rehab">
        <div className="container">
          <div className="layout-a">
            <div className="layout-a-left">
              <span className="eyebrow">Residential Psychiatric Rehabilitation</span>
              <h2>More Than a Hospital. A Place to Rebuild.</h2>
              <p>
                For many people with serious mental illness, a short hospital stay is not enough.
                Long-term rehabilitation — structured, supported, and progressive — is what
                transforms a stabilised patient into someone ready to return to family, community,
                and life.
              </p>
              <p>
                Viveka's 50-bed residential rehabilitation programme is the first of its kind in
                Mysore. It is designed for people who need extended care — beyond the acute phase —
                to truly rebuild their functioning, confidence, and independence.
              </p>
              <div className="who-box" style={{ marginTop: 28 }}>
                <span className="list-label">Length of Stay</span>
                <p>
                  Rehabilitation stays are tailored to individual need. Some patients benefit from a
                  few weeks; others may require several months of residential support. Our team
                  reviews progress regularly and involves families in every stage of the discharge
                  and reintegration plan.
                </p>
              </div>
            </div>
            <div>
              <span className="list-label">What the Programme Covers</span>
              <ul className="feature-list">
                {[
                  'Daily structured therapeutic activities',
                  'Life skills training — cooking, hygiene, communication, community navigation',
                  'Individual and group psychotherapy',
                  'Occupational and vocational rehabilitation',
                  'Physiotherapy and neuro-rehabilitation',
                  'Family reintegration planning',
                  'Gradual, supported transition back into the community',
                ].map((t) => (
                  <li key={t}>
                    <i className="fas fa-check" /> {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <hr className="path-divider" />

      {/* 3.4 DEMENTIA */}
      <section className="pathway pathway-alt" id="dementia">
        <div className="container">
          <div className="layout-b-intro">
            <div>
              <span className="eyebrow">Dementia & Geriatric Mental Health</span>
              <h2>Specialised Care for Older Minds — and the Families Who Love Them</h2>
            </div>
            <div>
              <p>
                As we age, the brain changes — and sometimes, those changes bring profound
                challenges. Dementia, late-life depression, psychosis in older adults, and delirium
                are all conditions that require specialist knowledge, patience, and a particular
                sensitivity.
              </p>
              <p>
                Our Dementia and Geriatric Mental Health service is led by Dr. Murali Krishna, a
                UK-trained psychiatrist who has specialised in older persons' brain and mental
                health for nearly two decades. His expertise, combined with our transdisciplinary
                team, means that older adults in Mysore and Karnataka have access to truly
                world-class geriatric psychiatric care.
              </p>
            </div>
          </div>
          <span className="list-label">Services Include</span>
          <div className="feat-grid">
            {[
              ['fa-search', 'Specialist dementia assessment and diagnosis'],
              ['fa-brain', 'Memory clinic consultations'],
              ['fa-pills', 'Pharmacological and non-pharmacological management of dementia'],
              [
                'fa-heartbeat',
                'Assessment and management of behavioural and psychological symptoms of dementia (BPSD)',
              ],
              ['fa-smile', 'Late-life depression and anxiety management'],
              ['fa-users', 'Caregiver counselling and support'],
              ['fa-home', 'Home-based assessments for those unable to travel'],
              [
                'fa-hands-helping',
                "Coordination with ARDSI (Alzheimer's and Related Disorders Society of India)",
              ],
            ].map(([i, t]) => (
              <div key={t} className="feat-cell">
                <i className={`fas ${i}`} /> {t}
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="path-divider" />

      {/* 3.5 THERAPY */}
      <section className="pathway pathway-cool" id="therapy">
        <div className="container">
          <div className="layout-a">
            <div className="layout-a-left">
              <span className="eyebrow">Psychological & Therapy Services</span>
              <h2>Talking Can Change Everything</h2>
              <p>
                Medication is often an important part of mental health treatment — but it is rarely
                the whole story. Psychological therapies help people understand themselves, change
                unhelpful patterns, process difficult experiences, and build resilience for the
                future.
              </p>
              <p>
                At Viveka, our clinical psychologists and psychotherapists offer a wide range of
                evidence-based therapies, available both as part of inpatient care and as standalone
                outpatient services.
              </p>
              <div className="who-box" style={{ marginTop: 28 }}>
                <span className="list-label">Psychological Assessments</span>
                <p>
                  We also offer formal psychological assessments for intelligence, personality,
                  cognitive functioning, neurodevelopmental conditions, and fitness-for-work or
                  medico-legal purposes.
                </p>
              </div>
            </div>
            <div>
              <span className="list-label">Therapies We Offer</span>
              <div className="therapy-tags">
                {[
                  'Cognitive Behavioural Therapy (CBT)',
                  'Dialectical Behaviour Therapy (DBT)',
                  'Trauma-Focused Therapies',
                  'Family Therapy',
                  'Marital and Couples Counselling',
                  'Child and Adolescent Counselling',
                  'Grief and Loss Counselling',
                  'Perinatal Mental Health Support',
                  'Midlife Counselling',
                  'Psychoeducation — for patients and families',
                ].map((t) => (
                  <span key={t} className="therapy-tag">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr className="path-divider" />

      {/* 3.6 PHYSIO */}
      <section className="pathway" id="physio">
        <div className="container">
          <div className="layout-b-intro">
            <div>
              <span className="eyebrow">Physiotherapy & Neuro-Rehabilitation</span>
              <h2>Rebuilding Strength, Movement, and Independence</h2>
            </div>
            <div>
              <p>
                The mind and body are deeply connected. Many psychiatric and neurological conditions
                affect physical functioning — movement, balance, coordination, strength, and
                stamina. Our physiotherapy and neuro-rehabilitation service bridges this gap.
              </p>
              <p>
                Whether you are recovering from a stroke, managing the physical effects of long-term
                psychiatric medication, or rebuilding physical confidence after an extended
                inpatient stay, our physiotherapists work alongside the clinical team to support
                your whole recovery.
              </p>
            </div>
          </div>
          <span className="list-label">What We Address</span>
          <div className="feat-grid">
            {[
              'Post-stroke motor rehabilitation',
              'Movement and gait disorders associated with neuropsychiatric conditions',
              'Deconditioning after extended inpatient stays',
              'Physical health management for patients on long-term psychiatric medication',
              'Pain management and body awareness',
              'Functional mobility and independence training',
            ].map((t) => (
              <div key={t} className="feat-cell">
                <i className="fas fa-check" /> {t}
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="path-divider" />

      {/* 3.7 SPEECH */}
      <section className="pathway pathway-alt" id="speech">
        <div className="container">
          <div className="layout-a">
            <div className="layout-a-left">
              <span className="eyebrow">Speech & Language Therapy</span>
              <h2>Finding Your Voice Again</h2>
              <p>
                Communication is at the heart of human connection. When a neurological condition, a
                psychiatric illness, or a developmental challenge affects someone's ability to
                speak, understand, or express themselves, it can feel profoundly isolating.
              </p>
              <p>
                Our speech and language therapists work with patients across all age groups to
                assess and treat communication and swallowing difficulties — with skill, patience,
                and warmth.
              </p>
            </div>
            <div>
              <span className="list-label">We Support Patients With</span>
              <ul className="feature-list">
                {[
                  'Aphasia (language difficulty following stroke or brain injury)',
                  'Dysarthria (speech motor difficulties)',
                  'Cognitive-communication disorders',
                  'Swallowing difficulties (dysphagia)',
                  'Communication challenges associated with dementia',
                  'Speech and language difficulties in children and adolescents',
                ].map((t) => (
                  <li key={t}>
                    <i className="fas fa-check" /> {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <hr className="path-divider" />

      {/* 3.8 SOCIAL WORK */}
      <section className="pathway" id="social">
        <div className="container">
          <div className="layout-b-intro">
            <div>
              <span className="eyebrow">Social Work & Community Reintegration</span>
              <h2>Helping You Return to the Life You Deserve</h2>
            </div>
            <div>
              <p>
                Recovery does not end at the hospital gate. Returning to family, community, and
                daily life after a psychiatric admission or a period of rehabilitation is one of the
                most important — and often most challenging — parts of the journey.
              </p>
              <p>
                Our psychiatric social workers are the bridge between clinical care and real life.
                They work with patients, families, and communities to make that transition as smooth
                and supported as possible.
              </p>
            </div>
          </div>
          <span className="list-label">What Our Social Workers Do</span>
          <div className="feat-grid">
            {[
              ['fa-users', 'Family counselling and psychoeducation'],
              ['fa-map-marker-alt', 'Assessment of social support networks and living situation'],
              ['fa-clipboard-list', 'Discharge planning and community resource mapping'],
              [
                'fa-balance-scale',
                'Support with legal and welfare matters (where applicable)',
              ],
              [
                'fa-building',
                'Liaison with employers, schools, and community organisations',
              ],
              ['fa-heart', 'Caregiver burden assessment and support'],
            ].map(([i, t]) => (
              <div key={t} className="feat-cell">
                <i className={`fas ${i}`} /> {t}
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="path-divider" />

      {/* 3.9 HOMEBASED */}
      <section className="pathway pathway-cool" id="homebased">
        <div className="container">
          <div className="layout-a">
            <div className="layout-a-left">
              <span className="eyebrow">Home-Based Mental Health Care</span>
              <h2>Expert Care, Delivered to Your Doorstep</h2>
              <p>
                For some families in Mysore and Karnataka, bringing a loved one to a clinic or
                hospital is not straightforward — whether because of mobility difficulties,
                cognitive impairment, caregiver constraints, or the distress that travel can cause.
              </p>
              <p>
                Our home-based mental health care team brings the expertise of Viveka directly to
                your home. With sensitivity and discretion, we conduct assessments, provide
                treatment, and support ongoing care — all in the familiar comfort of your own
                environment.
              </p>
              <div className="who-box" style={{ marginTop: 28 }}>
                <span className="list-label">Who This Service Is For</span>
                <p>
                  Our home care programme is particularly suited to older adults with dementia or
                  physical frailty, patients who are unable to travel due to severe psychiatric
                  symptoms, post-discharge patients in the early phase of community reintegration,
                  and caregivers who need support and guidance at home.
                </p>
              </div>
            </div>
            <div>
              <span className="list-label">Home-Based Services Include</span>
              <ul className="feature-list">
                {[
                  'Geriatric and dementia assessments at home',
                  'Psychiatric evaluation and medication review',
                  'Nursing support and monitoring',
                  'Physiotherapy home visits',
                  'Caregiver training and guidance',
                  'Psychological support for housebound patients',
                ].map((t) => (
                  <li key={t}>
                    <i className="fas fa-check" /> {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CTAStrip />
    </>
  );
}
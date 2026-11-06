import PageHero from '../components/PageHero';
import CTAStrip from '../components/CTAStrip';

const SECTIONS = [
  ['admission-guide', 'Admission Guide'],
  ['psychoeducation', 'Family Psychoeducation'],
  ['visiting', 'Visiting Guidelines'],
  ['insurance', 'Insurance & Billing'],
  ['post-rehab', 'Post-Rehabilitation Support'],
];

export default function Families() {
  return (
    <>
      <PageHero
        eyebrow="For Families & Caregivers"
        title={<>You Are <em>Partners</em> in Care.</>}
        description="When someone you love is struggling with their mental health, it affects the whole family. At Viveka, we believe families are partners in care — not bystanders. This section is for you."
      />

      <nav className="section-index">
        <div className="section-index-inner">
          {SECTIONS.map(([id, label]) => <a key={id} href={`#${id}`} className="si-item">{label}</a>)}
        </div>
      </nav>

      {/* ADMISSION GUIDE */}
      <section className="fam-section" id="admission-guide">
        <div className="container">
          <div className="two-col">
            <div className="col-left">
              <span className="eyebrow">Admission Guide</span>
              <h2>How to Get Your Loved One the Help They Need</h2>
              <p>Navigating the admission process for a family member can feel daunting — especially when emotions are running high. Here is a simple guide to how admission at Viveka works, and what you can do to help.</p>
            </div>
            <div>
              <ul className="bullet-list">
                <li>
                  <div className="b-icon" style={{ background: '#EEF6F7', color: 'var(--deep)' }}><i className="fas fa-phone-alt" /></div>
                  <span><strong>Call us first</strong> — our team will talk you through the situation and advise the most appropriate next step. You do not need to figure this out alone.</span>
                </li>
                <li>
                  <div className="b-icon" style={{ background: '#F5F0E8', color: 'var(--primary)' }}><i className="fas fa-clipboard-list" /></div>
                  <span><strong>Provide relevant background</strong> — any medical history, previous psychiatric treatment, current medications, and a description of recent behaviour will help our team assess quickly and accurately.</span>
                </li>
                <li>
                  <div className="b-icon" style={{ background: '#EEF6F7', color: 'var(--teal)' }}><i className="fas fa-comment-dots" /></div>
                  <span><strong>Be honest</strong> — the more our team knows, the better we can help. There is no judgment here.</span>
                </li>
                <li>
                  <div className="b-icon" style={{ background: '#F2F5EF', color: '#5a7850' }}><i className="fas fa-hands-helping" /></div>
                  <span><strong>Support the process</strong> — once admission is recommended, supporting your loved one to accept help (calmly and caringly) is one of the most important things you can do.</span>
                </li>
                <li>
                  <div className="b-icon" style={{ background: '#FBF0ED', color: 'var(--terracotta)' }}><i className="fas fa-heart" /></div>
                  <span><strong>Take care of yourself too</strong> — admitting a family member to psychiatric care is emotionally exhausting. Our team can point you towards support resources for caregivers.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* PSYCHOEDUCATION */}
      <section className="fam-section alt" id="psychoeducation">
        <div className="container">
          <div className="psycho-intro">
            <div>
              <span className="eyebrow">Family Psychoeducation</span>
              <h2>Understanding What Your Loved One Is Going Through</h2>
            </div>
            <p>One of the most powerful things a family can do is understand the condition their loved one is living with. Stigma, misunderstanding, and fear are replaced with knowledge, compassion, and the ability to genuinely help. Our family psychoeducation sessions cover:</p>
          </div>
          <div className="psycho-grid">
            {[
              ['fa-info-circle', '#EEF6F7', 'var(--deep)', 'What the diagnosis means — in plain language'],
              ['fa-brain', '#F5F0E8', 'var(--primary)', 'How the condition affects thinking, feeling, and behaviour'],
              ['fa-pills', '#EEF6F7', 'var(--teal)', 'What treatment involves and what to expect'],
              ['fa-comments', '#F2F5EF', '#5a7850', 'How to communicate with your loved one during difficult periods'],
              ['fa-exclamation-circle', '#FBF0ED', 'var(--terracotta)', 'Warning signs of relapse — and what to do if you notice them'],
              ['fa-heart', '#EEF6F7', 'var(--deep)', 'How to look after your own mental health as a caregiver'],
            ].map(([icon, bg, fg, text]) => (
              <div key={text} className="psycho-cell">
                <div className="p-icon" style={{ background: bg, color: fg }}><i className={`fas ${icon}`} /></div>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VISITING */}
      <section className="fam-section cool" id="visiting">
        <div className="container">
          <div className="two-col">
            <div className="col-left">
              <span className="eyebrow">Visiting Guidelines</span>
              <h2>Visits That Help — Not Hinder — Recovery</h2>
              <p>Family visits are an important part of recovery. At the same time, structure and appropriate boundaries during the early phase of treatment are important for stability. Our ward team will advise you on:</p>
            </div>
            <div>
              <ul className="bullet-list">
                <li>
                  <div className="b-icon" style={{ background: '#EEF6F7', color: 'var(--deep)' }}><i className="fas fa-calendar-alt" /></div>
                  <span>When visiting is appropriate (usually after an initial settling-in period)</span>
                </li>
                <li>
                  <div className="b-icon" style={{ background: '#F5F0E8', color: 'var(--primary)' }}><i className="fas fa-clock" /></div>
                  <span>Visiting hours and how to arrange a visit</span>
                </li>
                <li>
                  <div className="b-icon" style={{ background: '#EEF6F7', color: 'var(--teal)' }}><i className="fas fa-shopping-bag" /></div>
                  <span>What to bring and what to leave at home</span>
                </li>
                <li>
                  <div className="b-icon" style={{ background: '#F2F5EF', color: '#5a7850' }}><i className="fas fa-thumbs-up" /></div>
                  <span>How to make your visit as supportive and positive as possible</span>
                </li>
                <li>
                  <div className="b-icon" style={{ background: '#FBF0ED', color: 'var(--terracotta)' }}><i className="fas fa-spa" /></div>
                  <span>How to manage your own emotions before and after a visit</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* INSURANCE */}
      <section className="fam-section" id="insurance">
        <div className="container">
          <div className="two-col">
            <div className="col-left">
              <span className="eyebrow">Insurance &amp; Billing Information</span>
              <h2>Transparent, Supportive, and Straightforward</h2>
              <p>We understand that the financial aspect of care is an important consideration for families. Our team is committed to transparency in all billing matters. Please contact us directly to discuss:</p>
            </div>
            <div>
              <ul className="bullet-list">
                <li>
                  <div className="b-icon" style={{ background: '#EEF6F7', color: 'var(--deep)' }}><i className="fas fa-file-invoice" /></div>
                  <span>Current fee structures for inpatient and outpatient services</span>
                </li>
                <li>
                  <div className="b-icon" style={{ background: '#F5F0E8', color: 'var(--primary)' }}><i className="fas fa-shield-alt" /></div>
                  <span>Insurance empanelment and claims support</span>
                </li>
                <li>
                  <div className="b-icon" style={{ background: '#EEF6F7', color: 'var(--teal)' }}><i className="fas fa-calendar-check" /></div>
                  <span>Payment plans where applicable</span>
                </li>
                <li>
                  <div className="b-icon" style={{ background: '#F2F5EF', color: '#5a7850' }}><i className="fas fa-question-circle" /></div>
                  <span>Any other billing queries</span>
                </li>
              </ul>
              <div className="note-box">Insert specific insurance panel information</div>
            </div>
          </div>
        </div>
      </section>

      {/* POST-REHAB */}
      <section className="fam-section alt" id="post-rehab">
        <div className="container">
          <div className="two-col">
            <div className="col-left">
              <span className="eyebrow">Post-Rehabilitation Support</span>
              <h2>The Journey Doesn't End at Discharge</h2>
              <p>Coming home after a period of inpatient care is a significant transition — full of hope, and sometimes full of anxiety. At Viveka, we stay with you through this phase too.</p>
              <p>Our post-rehabilitation support includes:</p>
            </div>
            <div>
              <div className="timeline">
                {[
                  'Structured outpatient follow-up — scheduled before discharge',
                  'Open helpline for families with post-discharge concerns',
                  'Family check-ins — especially in the first few weeks at home',
                  'Community reintegration support through our social work team',
                  'Group support programmes where available',
                  'Guidance on how to maintain recovery and recognise early warning signs',
                ].map(text => (
                  <div key={text} className="tl-item">
                    <div className="tl-dot" />
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
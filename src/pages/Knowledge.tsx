import PageHero from '../components/PageHero';
import CTAStrip from '../components/CTAStrip';

export default function Knowledge() {
  const articles = [
    ['Dr. Rajagopal R', 'Is It Stress or Depression? How to Tell the Difference'],
    ['Viveka Clinical Team', 'What Families Need to Know When a Loved One Has Schizophrenia'],
    ['Clinical Psychology Team', '5 Signs It May Be Time to Seek Professional Help for Anxiety'],
    ['Dr. Murali Krishna', 'Breaking the Stigma: Mental Illness Is Not a Character Flaw'],
    ['Viveka Psychologists', 'How to Talk to Your Child About Mental Health'],
    ['Viveka Clinical Team', 'The Role of Sleep in Mental Health Recovery'],
  ];

  const dementia = [
    ['fa-search', '#EEF6F7', 'var(--deep)', 'The Early Signs of Dementia — What to Look Out For'],
    ['fa-brain', '#F5F0E8', 'var(--primary)', "Alzheimer's vs. Other Dementias — What's the Difference?"],
    ['fa-comments', '#EEF6F7', 'var(--teal)', 'How to Talk to a Parent with Dementia'],
    ['fa-heart', '#F2F5EF', '#5a7850', 'Caregiver Burnout — Recognising It and Finding Help'],
    ['fa-file-alt', '#FBF0ED', 'var(--terracotta)', 'Planning Ahead — Legal and Financial Decisions in Dementia'],
  ];

  const addiction = [
    ['fa-question-circle', '#EEF6F7', 'var(--deep)', 'Alcohol Use Disorder — Is It Just Heavy Drinking, or Something More?'],
    ['fa-users', '#F5F0E8', 'var(--primary)', "What to Do When Someone You Love Won't Seek Help for Addiction"],
    ['fa-sync-alt', '#EEF6F7', 'var(--teal)', "Understanding Relapse — It's Not Failure, It's Part of Recovery"],
    ['fa-home', '#F2F5EF', '#5a7850', "The Family's Role in Recovery from Addiction"],
  ];

  const recovery = [
    ['fa-hospital', '#EEF6F7', 'var(--deep)', 'What Does Psychiatric Rehabilitation Actually Mean?'],
    ['fa-clock', '#F5F0E8', 'var(--primary)', 'How Long Does Recovery Take? What Families Should Know'],
    ['fa-calendar-check', '#EEF6F7', 'var(--teal)', 'The Importance of Routine in Mental Health Recovery'],
    ['fa-door-open', '#FBF0ED', 'var(--terracotta)', 'From Hospital to Home — Managing the Transition'],
  ];

  return (
    <>
      <PageHero
        eyebrow="Knowledge Centre"
        title={<>Information You Can <em>Trust.</em></>}
        description="Reliable, compassionate, and clinically accurate mental health information — written to help you understand, recognise, and respond to mental health challenges in yourself and those you love."
      />

      {/* ARTICLES */}
      <section className="articles-section">
        <div className="container">
          <div className="section-header">
            <div>
              <span className="eyebrow">Mental Health Awareness Articles</span>
              <h2>Articles by Our Clinical Team</h2>
            </div>
            <p>Our Knowledge Centre features articles written by our clinical team — psychiatrists, psychologists, and social workers — covering a wide range of mental health topics relevant to families in Mysore and Karnataka.</p>
          </div>
          <div className="articles-grid">
            {articles.map(([author, title]) => (
              <div key={title} className="article-card">
                <span className="article-author">{author}</span>
                <h3>{title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DEMENTIA EDUCATION */}
      <section className="topic-section alt">
        <div className="container">
          <div className="topic-layout">
            <div className="topic-left">
              <span className="eyebrow">Dementia Education</span>
              <h2>Understanding Dementia</h2>
              <p>Dementia affects thousands of families across Karnataka — and yet remains poorly understood. Our dementia education resources help families recognise the signs, understand what to expect, and find the support they need.</p>
            </div>
            <div>
              <div className="topic-list">
                {dementia.map(([icon, bg, fg, text]) => (
                  <div key={text} className="topic-item">
                    <div className="topic-icon" style={{ background: bg, color: fg }}><i className={`fas ${icon}`} /></div>
                    <span>{text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ADDICTION AWARENESS */}
      <section className="topic-section">
        <div className="container">
          <div className="topic-layout">
            <div className="topic-left">
              <span className="eyebrow">Addiction Awareness</span>
              <h2>Replacing Stigma with Understanding</h2>
              <p>Addiction is still heavily stigmatised in India. Our addiction awareness content aims to replace stigma with understanding — and help families find the courage to seek help.</p>
            </div>
            <div>
              <div className="topic-list">
                {addiction.map(([icon, bg, fg, text]) => (
                  <div key={text} className="topic-item">
                    <div className="topic-icon" style={{ background: bg, color: fg }}><i className={`fas ${icon}`} /></div>
                    <span>{text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RECOVERY INSIGHTS */}
      <section className="topic-section cool">
        <div className="container">
          <div className="topic-layout">
            <div className="topic-left">
              <span className="eyebrow">Recovery &amp; Rehabilitation Insights</span>
              <h2>What Recovery Really Looks Like</h2>
              <p>Recovery is a journey — not a destination. Our rehabilitation insights series shares honest, hopeful perspectives on what recovery really looks like.</p>
            </div>
            <div>
              <div className="topic-list">
                {recovery.map(([icon, bg, fg, text]) => (
                  <div key={text} className="topic-item">
                    <div className="topic-icon" style={{ background: bg, color: fg }}><i className={`fas ${icon}`} /></div>
                    <span>{text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EVENTS */}
      <section className="events-section">
        <div className="container">
          <div className="events-layout">
            <div className="events-left">
              <span className="eyebrow">Events &amp; Workshops</span>
              <h2>Awareness Events &amp; Workshops</h2>
              <p>We regularly host awareness events, workshops for families, and educational sessions for healthcare professionals in Mysore and Bangalore. Watch this space for upcoming events.</p>
            </div>
            <div className="events-placeholder">
              <i className="fas fa-calendar-alt" />
              <p>Events calendar coming soon. Connect with the Viveka team to populate with confirmed upcoming events.</p>
            </div>
          </div>
        </div>
      </section>

      <CTAStrip />
    </>
  );
}
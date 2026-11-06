import PageHero from '../components/PageHero';
import CTAStrip from '../components/CTAStrip';

type Section = {
  id: string;
  eyebrow: string;
  title: string;
  intro: string;
  label: string;
  items: [string, string, string, string][];
};

const SECTIONS: Section[] = [
  {
    id: 'therapeutic',
    eyebrow: 'Therapeutic Activities',
    title: 'Healing Through Doing',
    intro:
      'Our therapeutic activities are designed and guided by our clinical team to support recovery goals. They are not just ways to pass time — each activity has a purpose, whether it is building emotional regulation, developing concentration, or processing difficult feelings in a creative way.',
    label: 'Therapeutic Activities Include',
    items: [
      ['fa-palette', '#EEF6F7', 'var(--deep)', 'Art and creative expression therapy'],
      ['fa-music', '#F5F0E8', 'var(--primary)', 'Music and movement sessions'],
      ['fa-spa', '#EEF6F7', 'var(--teal)', 'Mindfulness and relaxation practices'],
      ['fa-users', '#F2F5EF', '#5a7850', 'Group therapy and peer support circles'],
      ['fa-pen', '#FBF0ED', 'var(--terracotta)', 'Journaling and narrative therapy activities'],
    ],
  },
  {
    id: 'lifeskills',
    eyebrow: 'Life Skills & Occupational Activities',
    title: 'Building the Foundations for Independent Living',
    intro:
      'For many patients — particularly those in long-term rehabilitation — rebuilding the skills of daily life is a core goal. Our occupational activities programme is structured to progressively build confidence and competence in everyday tasks.',
    label: 'Activities Include',
    items: [
      ['fa-utensils', '#EEF6F7', 'var(--deep)', 'Cooking and meal preparation'],
      ['fa-pump-soap', '#F5F0E8', 'var(--primary)', 'Personal hygiene and grooming routines'],
      ['fa-wallet', '#EEF6F7', 'var(--teal)', 'Managing money and budgeting'],
      ['fa-clock', '#F2F5EF', '#5a7850', 'Time management and daily planning'],
      [
        'fa-bus',
        '#FBF0ED',
        'var(--terracotta)',
        'Using public transport and navigating the community',
      ],
      ['fa-comments', '#EEF6F7', 'var(--deep)', 'Communication and social skills practice'],
    ],
  },
  {
    id: 'recreation',
    eyebrow: 'Recreational Activities',
    title: 'Joy Is Part of Recovery',
    intro:
      'We believe that enjoyment, play, and recreation are not luxuries in rehabilitation — they are necessities. Our recreational programme gives patients the chance to relax, have fun, and remember what they enjoy about life.',
    label: 'Recreational Activities Include',
    items: [
      [
        'fa-leaf',
        '#F2F5EF',
        '#5a7850',
        'Outdoor walks and time in our therapeutic garden',
      ],
      ['fa-chess', '#EEF6F7', 'var(--teal)', 'Indoor games and leisure activities'],
      ['fa-pray', '#F5F0E8', 'var(--primary)', 'Yoga and gentle movement'],
      [
        'fa-star-and-crescent',
        '#FBF0ED',
        'var(--terracotta)',
        'Festive and cultural celebrations',
      ],
      ['fa-film', '#EEF6F7', 'var(--deep)', 'Movies, reading, and creative projects'],
    ],
  },
  {
    id: 'social',
    eyebrow: 'Social Engagement Activities',
    title: 'Rebuilding Connection, One Interaction at a Time',
    intro:
      'Social isolation is both a symptom and a consequence of many mental health conditions. Our social engagement programme gently and progressively supports patients to rebuild their confidence in social settings — starting small and building towards community reintegration.',
    label: 'Social Activities Include',
    items: [
      ['fa-utensils', '#EEF6F7', 'var(--deep)', 'Group meals and communal dining'],
      [
        'fa-birthday-cake',
        '#F5F0E8',
        'var(--primary)',
        'Celebration of birthdays and personal milestones',
      ],
      ['fa-users', '#EEF6F7', 'var(--teal)', 'Peer support and social skills groups'],
      [
        'fa-map-marker-alt',
        '#F2F5EF',
        '#5a7850',
        'Community outings (for appropriate-stage patients)',
      ],
      [
        'fa-heart',
        '#FBF0ED',
        'var(--terracotta)',
        'Family engagement events and open visits',
      ],
    ],
  },
];

export default function Activities() {
  return (
    <>
      <PageHero
        eyebrow="Activities at the Centre"
        title={
          <>
            Recovery Is Also About <em>Living.</em>
          </>
        }
        description="Recovery is not just about what happens in the therapy room or the doctor's consultation. It is also about living — engaging, creating, moving, laughing, and connecting. At Viveka, our activity programme is a meaningful part of every patient's rehabilitation journey."
      />

      {SECTIONS.map((s, i) => {
        const cls = `act-section${i === 1 ? ' alt' : ''}${i === 2 ? ' cool' : ''}`;
        return (
          <section key={s.id} className={cls}>
            <div className="container">
              <div className="act-layout">
                <div className="act-left">
                  <span className="eyebrow">{s.eyebrow}</span>
                  <h2>{s.title}</h2>
                  <p>{s.intro}</p>
                </div>
                <div>
                  <span className="act-list-label">{s.label}</span>
                  <div className="act-list">
                    {s.items.map(([icon, bg, fg, text]) => (
                      <div key={text} className="act-item">
                        <div className="act-dot" style={{ background: bg, color: fg }}>
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
        );
      })}

      <CTAStrip />
    </>
  );
}
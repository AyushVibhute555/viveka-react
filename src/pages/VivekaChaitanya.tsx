import PageHero from '../components/PageHero';
import CTAStrip from '../components/CTAStrip';

export default function VivekaChaitanya() {
  return (
    <>
      <PageHero
        eyebrow="Viveka Chaitanya"
        title={<>Specialised Recovery for Mind, Body &amp; <em>Mobility</em></>}
        description="Content for this page will be added shortly."
      />
      <section style={{ padding: '80px 0', textAlign: 'center' }}>
        <div className="container">
          <p style={{ color: 'var(--text-mid)', fontSize: '1.05rem' }}>🚧 Content coming soon.</p>
        </div>
      </section>
      <CTAStrip />
    </>
  );
}
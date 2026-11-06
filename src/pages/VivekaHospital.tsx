import PageHero from '../components/PageHero';
import CTAStrip from '../components/CTAStrip';

export default function VivekaHospital() {
  return (
    <>
      <PageHero
        eyebrow="Viveka Hospital"
        title={<>Comprehensive Mental Healthcare &amp; <em>Rehabilitation</em></>}
        description="Content for this page will be added shortly. This page is a placeholder ready for the full Viveka Hospital content."
      />
      <section style={{ padding: '80px 0', textAlign: 'center' }}>
        <div className="container">
          <p style={{ color: 'var(--text-mid)', fontSize: '1.05rem' }}>
            🚧 Content for Viveka Hospital coming soon.
          </p>
        </div>
      </section>
      <CTAStrip />
    </>
  );
}
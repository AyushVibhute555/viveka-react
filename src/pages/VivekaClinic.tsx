import PageHero from '../components/PageHero';
import CTAStrip from '../components/CTAStrip';

export default function VivekaClinic() {
  return (
    <>
      <PageHero
        eyebrow="Viveka Clinic"
        title={<>Consultations, Therapy &amp; <em>Emotional Wellbeing</em></>}
        description="Content for this page will be added shortly. This page is a placeholder ready for the full Viveka Clinic content."
      />
      <section style={{ padding: '80px 0', textAlign: 'center' }}>
        <div className="container">
          <p style={{ color: 'var(--text-mid)', fontSize: '1.05rem' }}>
            🚧 Content for Viveka Clinic coming soon.
          </p>
        </div>
      </section>
      <CTAStrip />
    </>
  );
}
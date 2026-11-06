import PageHero from '../components/PageHero';
import CTAStrip from '../components/CTAStrip';

export default function HealthPackages() {
  return (
    <>
      <PageHero
        eyebrow="Health Packages"
        title={<>Preventive &amp; <em>Wellness Packages</em></>}
        description="Content for this page will be added shortly. This page is a placeholder ready for the full Health Packages content."
      />
      <section style={{ padding: '80px 0', textAlign: 'center' }}>
        <div className="container">
          <p style={{ color: 'var(--text-mid)', fontSize: '1.05rem' }}>
            🚧 Content for Health Packages coming soon.
          </p>
        </div>
      </section>
      <CTAStrip />
    </>
  );
}
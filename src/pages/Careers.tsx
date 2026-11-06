import PageHero from '../components/PageHero';
import CTAStrip from '../components/CTAStrip';

export default function Careers() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title={<>Join the <em>Viveka Team</em></>}
        description="Content for this page will be added shortly. This page is a placeholder ready for the full Careers content."
      />
      <section style={{ padding: '80px 0', textAlign: 'center' }}>
        <div className="container">
          <p style={{ color: 'var(--text-mid)', fontSize: '1.05rem' }}>
            🚧 Content for Careers coming soon.
          </p>
        </div>
      </section>
      <CTAStrip />
    </>
  );
}
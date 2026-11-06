import PageHero from '../components/PageHero';
import CTAStrip from '../components/CTAStrip';

export default function VivekaShurthi() {
  return (
    <>
      <PageHero
        eyebrow="Viveka Shurthi · Est. 2026"
        title={<>New Horizons in <em>Mental Wellness</em></>}
        description="Our newest institution, established in 2026 — content coming soon."
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
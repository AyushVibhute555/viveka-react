import PageHero from '../components/PageHero';
import CTAStrip from '../components/CTAStrip';

export default function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={<>We're Here <em>When You Need Us</em></>}
        description="Content for this page will be added shortly. This page is a placeholder ready for the full Contact content."
      />
      <section style={{ padding: '80px 0', textAlign: 'center' }}>
        <div className="container">
          <p style={{ color: 'var(--text-mid)', fontSize: '1.05rem' }}>
            🚧 Content for Contact coming soon.
          </p>
        </div>
      </section>
      <CTAStrip />
    </>
  );
}
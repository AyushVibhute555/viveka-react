import React from 'react';

export default function PageHero({
  eyebrow, title, description,
}: { eyebrow: string; title: React.ReactNode; description: string }) {
  return (
    <section className="page-hero">
      <div className="container">
        <div className="hero-eyebrow">{eyebrow}</div>
        <h1 className="serif">{title}</h1>
        <p>{description}</p>
      </div>
    </section>
  );
}
import React from 'react';
export default function About() {
  return (
    <main className="page-shell">
      <section className="page-hero container">
        <span className="eyebrow">ABOUT NOVATECH</span>
        <h1>Technology should make<br /><span>life feel simpler.</span></h1>
        <p>NOVATECH is a student-created technology retail concept built around useful devices, clear information and friendly customer service.</p>
      </section>
      <section className="container about-layout section">
        <img className="about-image" src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1400&q=85" alt="Team collaborating around computers" />
        <div className="about-copy">
          <span className="eyebrow">OUR BACKGROUND</span>
          <h2>Built around everyday needs.</h2>
          <p>NOVATECH began as a project idea: create one welcoming place where people can discover technology for school, work, creativity and entertainment.</p>
          <p>As a concept store, our focus is on presenting products in a clear way and helping customers make informed choices. The business details and contact information on this demonstration website are sample content.</p>
          <div className="values-grid">
            <div><strong>Our mission</strong><p>Make technology easier to understand and access.</p></div>
            <div><strong>Our vision</strong><p>Become a trusted name for simple, helpful tech shopping.</p></div>
          </div>
        </div>
      </section>
      <section className="container values-strip">
        <div><span>01</span><h3>Clarity</h3><p>Useful product details without unnecessary jargon.</p></div>
        <div><span>02</span><h3>Reliability</h3><p>A focus on dependable products and helpful service.</p></div>
        <div><span>03</span><h3>Curiosity</h3><p>Encouraging people to explore what technology can do.</p></div>
      </section>
    </main>
  );
}

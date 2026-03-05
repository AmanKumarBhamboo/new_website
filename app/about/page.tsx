import Link from "next/link";

export default function About() {
  return (
    <div className="page-about">
      <div className="about-hero">
        <div className="about-hero-inner">
                    <div className="about-hero-img">
            <img src="/founder.png" alt="Vaishnavi Chella" style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "16px" }} />
          </div>
          <div>
            <span className="section-label">About the Founder</span>
            <h1 className="about-name">Vaishnavi<br />Chella</h1>
            <span className="about-rtag">Principal Consultant & Founder</span>
            <div className="accent-bar"></div>
            <p className="about-bio">Vaishnavi Chella is a seasoned consultant and trusted advisor to promoters and senior leadership teams of growth-stage organisations. She partners directly with founders and leadership teams to help businesses navigate critical talent and leadership inflexion points — particularly during phases of rapid growth, professionalisation, succession transition, or cultural realignment.</p>
            <p className="about-bio">Her work focuses on strengthening organisational capability so that ambition is supported by structure, leadership depth, and aligned culture. She works closely with promoters to surface unarticulated leadership challenges — bench strength gaps, cultural misalignment, performance ambiguity, succession risk — and translate them into structured, scalable talent systems.</p>
            <p className="about-bio">Her advisory approach is diagnostic-led, outcome-oriented, and deeply contextual. Beyond consulting, Vaishnavi publishes regularly on emerging workforce themes and leadership maturity in India.</p>
            <a href="https://linkedin.com" className="about-link" target="_blank" rel="noopener noreferrer">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" /><circle cx="4" cy="4" r="2" /></svg>
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </div>

      <section className="sec" style={{ background: "var(--white)" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <span className="section-label">Our Philosophy</span>
          <h2 className="section-title">How We Think</h2>
          <div className="accent-bar"></div>
          <div className="values-grid">
            <div className="val-card"><div className="val-icon">🔍</div><div className="val-title">Diagnostic-Led</div><p className="val-text">We never prescribe before we understand. Every engagement begins with a rigorous diagnostic that surfaces real challenges — not just presenting symptoms.</p></div>
            <div className="val-card"><div className="val-icon">🎯</div><div className="val-title">Outcome-Oriented</div><p className="val-text">Every intervention is anchored in tangible business results and talent milestones. Good intentions don't move organisations forward — measurable outcomes do.</p></div>
            <div className="val-card"><div className="val-icon">🌿</div><div className="val-title">Deeply Contextual</div><p className="val-text">We adapt proven models to the organisation's unique stage, industry, and leadership realities. There are no one-size-fits-all frameworks here.</p></div>
          </div>
        </div>
      </section>

      <div className="book-band">
        <div className="book-inner">
          <div className="book-cover">Book Cover<br /><br /><em style={{ fontSize: "0.7rem" }}>(Upcoming)</em></div>
          <div>
            <span className="book-label">Upcoming Book</span>
            <h2 className="book-title">The Journey of Indian Working Mothers</h2>
            <p className="book-text">Vaishnavi is currently authoring a book that explores the journeys of Indian working mothers — examining how ambition, caregiving, and identity intersect in contemporary professional life. A deeply personal and research-grounded work on one of India's most urgent conversations.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

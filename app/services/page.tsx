import Link from "next/link";

export default function Services() {
  return (
    <div className="page-services">
      <div className="services-hero">
        <span className="section-label">What We Do</span>
        <h1 className="section-title" style={{ fontSize: "clamp(2.2rem, 4vw, 3.5rem)" }}>Our Services</h1>
        <div className="accent-bar center"></div>
        <p className="services-hero-sub">Three interconnected areas that form the foundation of any scalable, high-performing organisation.</p>
      </div>

      <div className="sec" style={{ background: "var(--white)" }}>
        <div className="svc-block">
          <div className="svc-inner">
            <div className="svc-info">
              <div className="svc-num">01</div>
              <div className="svc-name">Building Organisational Systems</div>
              <p className="svc-desc">Designing the structural foundations that enable clarity, accountability, and performance at scale. The bedrock — without it, everything becomes fragile as you grow.</p>
              <span className="svc-q-lbl">Questions We Help Answer</span>
              <ul className="svc-qs">
                <li>How should our organisation be structured for the next phase of growth?</li>
                <li>What job architecture and levels will enable scale without bureaucracy?</li>
                <li>What critical capabilities must we build?</li>
                <li>How should performance and rewards be aligned to business outcomes?</li>
                <li>How do we design roles that drive ownership and accountability?</li>
              </ul>
            </div>
            <div className="svc-sol">
              <div className="sol-box">
                <span className="sol-box-lbl">Solutions</span>
                <ul className="sol-list">
                  <li>Job Banding & Role Evaluation</li><li>Organisation Structure Design</li>
                  <li>Workforce Capability Mapping</li><li>Performance Management Architecture</li>
                  <li>Competency Framework Design</li><li>Talent Acquisition Strategy Effectiveness</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr className="svc-divider" />
        <div className="svc-block">
          <div className="svc-inner flip">
            <div className="svc-info">
              <div className="svc-num">02</div>
              <div className="svc-name">Strengthening the Talent & Leadership Pipeline</div>
              <p className="svc-desc">Building structured processes to identify, develop, and retain high-impact talent — ensuring leadership continuity and bench strength for whatever comes next.</p>
              <span className="svc-q-lbl">Questions We Help Answer</span>
              <ul className="svc-qs">
                <li>How do we identify and differentiate high-potential talent?</li>
                <li>How do we retain and accelerate our top performers?</li>
                <li>How do we strengthen manager effectiveness?</li>
                <li>How do we build a credible succession pipeline?</li>
                <li>How do we institutionalise talent reviews and calibration?</li>
              </ul>
            </div>
            <div className="svc-sol">
              <div className="sol-box">
                <span className="sol-box-lbl">Solutions</span>
                <ul className="sol-list">
                  <li>High Potential Identification Frameworks</li><li>Succession Planning Architecture</li>
                  <li>Assessment & Development Centres</li><li>Leadership Development Journeys</li>
                  <li>Manager Effectiveness Programs</li><li>Talent Reviews & Calibration Facilitation</li>
                  <li>Individual Development Planning</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr className="svc-divider" />
        <div className="svc-block">
          <div className="svc-inner">
            <div className="svc-info">
              <div className="svc-num">03</div>
              <div className="svc-name">Reinforcing Values & Culture</div>
              <p className="svc-desc">Helping organisations articulate and activate the cultural foundations required for sustainable growth. Culture is either designed intentionally — or it drifts.</p>
              <span className="svc-q-lbl">What This Includes</span>
              <ul className="svc-qs">
                <li>Defining non-negotiable values and behaviours</li>
                <li>Anchoring culture through leadership modelling</li>
                <li>Designing EVP and employer positioning</li>
                <li>Strengthening employee engagement</li>
                <li>Building inclusive, psychologically safe workplaces</li>
              </ul>
            </div>
            <div className="svc-sol">
              <div className="sol-box">
                <span className="sol-box-lbl">Solutions</span>
                <ul className="sol-list">
                  <li>Employee Engagement Diagnostics</li><li>EVP Articulation & Activation</li>
                  <li>Culture & Values Workshops</li><li>Behavioural Anchoring of Values</li>
                  <li>Change & Culture Alignment Interventions</li><li>DEI Strategy & Inclusion Frameworks</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="cta-band">
        <h2 className="cta-band-title">Not sure which service is right for you?</h2>
        <p className="cta-band-sub">Start with a conversation. We'll help you identify where to focus first.</p>
        <div className="cta-row"><Link href="/contact" className="btn-primary">Get in Touch</Link></div>
      </div>
    </div>
  );
}

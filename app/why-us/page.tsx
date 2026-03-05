export default function WhyUs() {
  return (
    <div className="page-whyus">
      <div className="why-hero">
        <div className="why-hero-inner">
          <span className="section-label">Why Choose Us</span>
          <h1 className="section-title">Why Value Talent Advisory</h1>
          <div className="accent-bar center"></div>
          <p className="why-hero-sub">A diagnostic-led, outcome-oriented advisory that goes beyond frameworks — partnering with you to build systems that last.</p>
        </div>
      </div>

      <section className="sec" style={{ background: "var(--white)" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <span className="section-label">Our Differentiation</span>
          <h2 className="section-title">What Sets Us Apart</h2>
          <div className="accent-bar"></div>
          <div className="why-cards">
            <div className="why-card"><div className="why-icon">🔬</div><div className="why-title">Structured & Research-Driven</div><p className="why-text">We bring rigour to every engagement. Grounded in organisational science and adapted to your specific context — not copied from a generic playbook.</p></div>
            <div className="why-card"><div className="why-icon">🤝</div><div className="why-title">Direct Promoter Partnership</div><p className="why-text">We work directly with founders and promoters — not just HR teams. Recommendations are aligned to the real priorities and constraints at the top.</p></div>
            <div className="why-card"><div className="why-icon">🌱</div><div className="why-title">Long-Term Growth Mindset</div><p className="why-text">We are not interested in quick fixes. Every system we design is built to scale, evolve, and compound in value as your organisation grows.</p></div>
            <div className="why-card"><div className="why-icon">🎯</div><div className="why-title">Business-Aligned Frameworks</div><p className="why-text">Talent strategy that doesn't connect to business strategy is theatre. Everything we build is anchored to your specific growth goals.</p></div>
            <div className="why-card"><div className="why-icon">🧭</div><div className="why-title">Contextual, Not Generic</div><p className="why-text">We adapt proven models to your organisation's unique stage, industry, and leadership realities. Deep contextual understanding of India's growth-stage businesses.</p></div>
            <div className="why-card"><div className="why-icon">💡</div><div className="why-title">Senior-Led Advisory</div><p className="why-text">You work directly with Vaishnavi — not a junior consultant. Senior advisory expertise on every engagement, from diagnosis through implementation.</p></div>
          </div>
        </div>
      </section>

      <section className="process-sec">
        <div className="process-inner">
          <span className="section-label">How We Work</span>
          <h2 className="section-title">Our Process</h2>
          <div className="accent-bar"></div>
          <div className="ptimeline">
            <div className="pstep">
              <div className="pdot">🔍</div>
              <div>
                <span className="pnum">Step 01</span>
                <div className="ptitle">Understand & Assess</div>
                <p className="pdesc">We begin with a deep diagnostic of your organisation's current talent systems, gaps, and growth ambitions. This involves structured conversations with leadership, data review, and our proprietary assessment framework. We surface what's unarticulated as much as what's visible.</p>
              </div>
            </div>
            <div className="pstep">
              <div className="pdot">✦</div>
              <div>
                <span className="pnum">Step 02</span>
                <div className="ptitle">Design & Strategize</div>
                <p className="pdesc">We co-create contextual, practical talent frameworks tailored to your industry, stage, and leadership realities. No templates, no copy-paste — everything is designed with your specific constraints and ambitions in mind. We present options, not mandates.</p>
              </div>
            </div>
            <div className="pstep">
              <div className="pdot">🚀</div>
              <div>
                <span className="pnum">Step 03</span>
                <div className="ptitle">Implement & Anchor</div>
                <p className="pdesc">We partner during the critical "last mile" of implementation. Whether it's facilitating talent reviews, model modelling cultural anchors, or sensitising managers — we ensure the designed systems actually take root and deliver impact.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

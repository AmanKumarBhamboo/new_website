import Link from "next/link";
import Reveal from "@/components/Reveal";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <div className="home-hero">
        <div className="hero-left">
          <span className="hero-eyebrow">Strategic Talent Consulting</span>
          <h1 className="hero-h1">Build Talent Systems That<br /><em>Scale With Your Business</em></h1>
          <p className="hero-sub">Helping growth-stage organisations align people strategy with performance and long-term ambition. Partnering directly with promoters and leadership teams.</p>
          <div className="hero-ctas">
            <Link href="/contact" className="btn-primary">Book a Consultation</Link>
            <Link href="/services" className="btn-outline">Explore Services</Link>
          </div>
        </div>
        <div className="hero-right">

          <div className="hero-img-box">
            <img src="/founder.png" alt="Vaishnavi Chella" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            <div className="hero-badge">
              <div className="badge-num">10+</div>
              <div className="badge-lbl">Years Advisory Experience</div>
            </div>
          </div>
        </div>
      </div>

      {/* Logo bar */}
      <Reveal direction="up" delay={200}>
        <div className="logo-bar">
          <div className="logo-bar-label">Trusted by growth-stage organisations across sectors</div>
          <div className="logo-row">
            <span className="logo-pill">Manufacturing</span>
            <span className="logo-pill">Financial Services</span>
            <span className="logo-pill">Technology</span>
            <span className="logo-pill">Consumer Goods</span>
            <span className="logo-pill">Healthcare</span>
            <span className="logo-pill">Professional Services</span>
          </div>
        </div>
      </Reveal>

      {/* Founder Snapshot */}
      <div className="founder-snapshot">
        <div className="founder-img-col">
          <Reveal direction="up">
            <img src="/founder.png" alt="Vaishnavi Chella" style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "12px" }} />
          </Reveal>
        </div>
        <div className="founder-text-col">
          <Reveal direction="up">
            <span className="section-label">Meet the Founder</span>
            <h2 className="section-title" style={{ fontSize: "2.4rem" }}>Vaishnavi Chella</h2>
            <div className="accent-bar"></div>
            <blockquote className="founder-quote">"Talent is not a support function — it is a strategic lever for competitive advantage and long-term sustainability."</blockquote>
            <p className="founder-bio-short">A seasoned consultant and trusted advisor to promoters and senior leadership teams of growth-stage organisations. Vaishnavi partners directly with founders to help businesses navigate critical talent and leadership inflexion points — growth, professionalisation, succession, and cultural realignment.</p>
            <Link href="/about" className="btn-primary" style={{ alignSelf: "flex-start", marginTop: "0.5rem" }}>Read Full Story →</Link>
          </Reveal>
        </div>
      </div>

      {/* Client Voices */}
      <section className="sec" style={{ background: "var(--white)" }}>
        <div className="max-w">
          <Reveal direction="up">
            <span className="section-label">What People Are Saying</span>
            <h2 className="section-title">Client Voices</h2>
            <div className="accent-bar"></div>
          </Reveal>
          <div className="posts-grid">
            <Reveal direction="up" delay={100}>
              <div className="post-card">
                <div className="post-header">
                  <div className="post-avatar">R</div>
                  <div>
                    <div className="post-author">Rohit Mehta</div>
                    <div className="post-role">CEO, Series B Technology Company</div>
                  </div>
                  <div className="post-li">in</div>
                </div>
                <p className="post-text">"Vaishnavi helped us move from chaos to clarity. We now have a role architecture and performance framework that actually matches how we want to grow. The diagnostic approach surfaced issues we didn't even know were holding us back."</p>
                <span className="post-tag">Organisational Systems</span>
              </div>
            </Reveal>
            <Reveal direction="up" delay={200}>
              <div className="post-card">
                <div className="post-header">
                  <div className="post-avatar">P</div>
                  <div>
                    <div className="post-author">Priya Nair</div>
                    <div className="post-role">Managing Director, Family Business Group</div>
                  </div>
                  <div className="post-li">in</div>
                </div>
                <p className="post-text">"The succession planning work Vaishnavi facilitated was genuinely transformative. For the first time, our family business has a structured conversation around leadership continuity. She brought rigour without losing the human element."</p>
                <span className="post-tag">Leadership Pipeline</span>
              </div>
            </Reveal>
            <Reveal direction="up" delay={300}>
              <div className="post-card">
                <div className="post-header">
                  <div className="post-avatar">A</div>
                  <div>
                    <div className="post-author">Arjun Kapoor</div>
                    <div className="post-role">Founder & Promoter, Consumer Brand</div>
                  </div>
                  <div className="post-li">in</div>
                </div>
                <p className="post-text">"As a founder, I was always the one driving culture informally. Vaishnavi helped us codify what we stood for and anchor it in actual behaviours. Our engagement scores improved — but more importantly, the team just 'feels' different now."</p>
                <span className="post-tag">Culture & Values</span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="sec" style={{ background: "var(--cream)" }}>
        <div className="max-w">
          <Reveal direction="up">
            <span className="section-label">Case Studies</span>
            <h2 className="section-title">Work in Action</h2>
            <div className="accent-bar"></div>
          </Reveal>
          <div className="cases-grid">
            <Reveal direction="up" delay={100} className="w-full">
              <div className="case-card">
                <div className="case-img ci1">🏗️</div>
                <div className="case-body">
                  <span className="case-tag">Org Design · Manufacturing</span>
                  <div className="case-title">Restructuring a 500-Person Organisation for Scale</div>
                  <p className="case-desc">A fast-growing manufacturing group needed clarity across business units. Designed a new org structure, job architecture, and accountability framework — enabling them to double headcount without doubling confusion.</p>
                  <Link href="#" className="case-link">Coming Soon →</Link>
                </div>
              </div>
            </Reveal>
            <Reveal direction="up" delay={200} className="w-full">
              <div className="case-card">
                <div className="case-img ci2">🌱</div>
                <div className="case-body">
                  <span className="case-tag">Succession · Family Business</span>
                  <div className="case-title">Building a Leadership Pipeline for Generational Transition</div>
                  <p className="case-desc">A second-generation family business sought to professionalise leadership before a major ownership transition. Facilitated high-potential identification, succession mapping, and development journeys for 12 senior leaders.</p>
                  <Link href="#" className="case-link">Coming Soon →</Link>
                </div>
              </div>
            </Reveal>
            <Reveal direction="up" delay={300} className="w-full">
              <div className="case-card">
                <div className="case-img ci3">🧭</div>
                <div className="case-body">
                  <span className="case-tag">Culture · Technology</span>
                  <div className="case-title">Anchoring Values During Rapid Headcount Growth</div>
                  <p className="case-desc">A VC-backed startup tripling headcount in 18 months needed to preserve its culture as it scaled. Developed EVP, articulated core values with behavioural anchors, and designed a culture onboarding journey.</p>
                  <Link href="#" className="case-link">Coming Soon →</Link>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Thought Leadership */}
      <section className="tl-strip">
        <div className="max-w">
          <Reveal direction="up">
            <div className="tl-header">
              <div>
                <span className="section-label">Thought Leadership</span>
                <h2 className="section-title">Latest Insights</h2>
              </div>
              <Link href="/blog" className="tl-more">View All Articles →</Link>
            </div>
          </Reveal>
          <div className="tl-grid">
            <Reveal direction="up" delay={100}><div className="tl-card"><div className="tl-cat">Culture & Bias</div><div className="tl-title">The Sorting Hat of Life: How Affinity Bias Shapes How We Think</div></div></Reveal>
            <Reveal direction="up" delay={200}><div className="tl-card"><div className="tl-cat">Workplace Policy</div><div className="tl-title">From Women-friendly to Family-friendly Organizations</div></div></Reveal>
            <Reveal direction="up" delay={300}><div className="tl-card"><div className="tl-cat">Engagement</div><div className="tl-title">The Truth Behind Employee Engagement: A First Principles Lens</div></div></Reveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <Reveal direction="up">
        <div className="cta-band">
          <h2 className="cta-band-title">Ready to build talent systems<br />that scale with your ambition?</h2>
          <p className="cta-band-sub">Let's start with a conversation. No obligation, just clarity.</p>
          <div className="cta-row">
            <Link href="/contact" className="btn-primary">Book a Consultation</Link>
            <Link href="/services" className="btn-outline">Explore Our Services</Link>
          </div>
        </div>
      </Reveal>
    </>
  );
}

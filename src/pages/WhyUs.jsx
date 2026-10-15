import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero.jsx'
import Reveal from '../components/Reveal.jsx'
import CtaBand from '../components/CtaBand.jsx'

const REASONS = [
  {
    title: 'Reliable Sourcing',
    text: 'Strong relationships with local and international suppliers help us maintain dependable supply channels.',
    icon: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l7 3v5c0 4.6-3 8.4-7 10-4-1.6-7-5.4-7-10V6z" /><path d="M9 12l2 2 4-4" /></svg>
  },
  {
    title: 'Quality Focused',
    text: 'Every supply is managed with careful attention to agreed coal specifications and quality requirements.',
    icon: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19h16" /><path d="M6 19V9m6 10V5m6 14v-7" /></svg>
  },
  {
    title: 'Competitive Pricing',
    text: 'Our market knowledge and sourcing network enable us to develop commercially competitive supply solutions.',
    icon: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 6.5c0-1.9-2.2-3-5-3s-5 1.1-5 3 2.2 3 5 3 5 1.1 5 3-2.2 3-5 3-5-1.1-5-3" /></svg>
  },
  {
    title: 'End-to-End Logistics',
    text: "From mine and port to the customer's facility, we coordinate the complete supply chain.",
    icon: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="6" width="13" height="9" rx="1" /><path d="M14 9h4l3 3v3h-7z" /><circle cx="6" cy="18" r="1.8" /><circle cx="17" cy="18" r="1.8" /></svg>
  },
  {
    title: 'Industry Experience',
    text: 'Our team combines market knowledge, field experience, procurement expertise, and operational coordination.',
    icon: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 17h2l1-6h9l3 6h3v3H3z" /><circle cx="7" cy="19" r="1.6" /><circle cx="17" cy="19" r="1.6" /><path d="M12 3l4 8H8z" /></svg>
  },
  {
    title: 'Customer Centric Approach',
    text: 'We focus on building long-term relationships through transparency, responsiveness, and consistent service.',
    icon: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-8 0v2" /><circle cx="12" cy="7" r="4" /></svg>
  }
]

export default function WhyUs() {
  return (
    <>
      <PageHero
        image="/images/rail-transport.jpg"
        breadcrumb="Why Choose Us"
        title={<>Why industries choose <em>FENIX</em></>}
        lead="Because coal supply is not just about the commodity — it's about consistency, control and partnership."
      />

      <section className="section">
        <div className="container">
          <Reveal className="section-head center">
            <span className="kicker">Our Advantages</span>
            <h2 className="section-title">Six reasons to <em>partner</em> with us</h2>
            <p className="section-sub">
              What sets FENIX ENERGY RESOURCES apart as an end-to-end coal supply partner.
            </p>
          </Reveal>
          <div className="cards-grid">
            {REASONS.map((r, i) => (
              <Reveal key={r.title} delay={0.1 * (i + 1)} className="card card-plain" data-tilt>
                <div className="card-icon">{r.icon}</div>
                <h3>{r.title}</h3>
                <p>{r.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* COMMITMENT */}
      <section className="section section-alt">
        <div className="container">
          <div className="split">
            <Reveal direction="left" className="split-media">
              <img src="/images/crane-barge.jpg" alt="Gantry crane unloading coal from a barge at a terminal" />
              <span className="media-frame" />
            </Reveal>
            <Reveal direction="right">
              <span className="kicker">Our Commitment</span>
              <h2 className="section-title">
                Beyond supplying coal — a long-term <em>energy partner.</em>
              </h2>
              <p className="section-sub">
                We strive to become a long-term energy partner for our customers by understanding
                their operational requirements, maintaining consistent supply, and developing
                commercially viable solutions.
              </p>
              <p className="section-sub" style={{ marginTop: 16 }}>
                We are committed to conducting our business with integrity, transparency, operational
                excellence, and long-term value creation for our clients and partners.
              </p>
              <div className="promise-box">
                <div className="promise-text">
                  Our promise is simple:<br />
                  The right quality. The right quantity. The right time.
                </div>
              </div>
              <div style={{ marginTop: 30 }}>
                <Link to="/contact" className="btn btn-primary">
                  Start a Conversation
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <CtaBand
        title="Experience the FENIX difference"
        text="Reliable sourcing, rigorous quality control and coordinated logistics — under one roof."
        primaryLabel="Contact Us"
        secondaryLabel="Explore Services"
        secondaryHref={null}
        secondaryTo="/services"
      />
    </>
  )
}

import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero.jsx'
import Reveal from '../components/Reveal.jsx'
import CtaBand from '../components/CtaBand.jsx'

const GRADES = [
  {
    title: 'Steam Coal',
    text: 'Thermal coal grades suited to boiler and steam-generation applications across industry.',
    icon: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3c3 4 5 6.5 5 9a5 5 0 0 1-10 0c0-2.5 2-5 5-9z" /></svg>
  },
  {
    title: 'Lignite Coal',
    text: 'Lower-rank coal sourced from regional mines for suitable industrial fuel applications.',
    icon: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 18h16l-2-6H6z" /><path d="M8 12V7l4-3 4 3v5" /></svg>
  },
  {
    title: 'Bituminous Coal',
    text: 'Higher-carbon coal grades for demanding heat and process requirements.',
    icon: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M6 3h12l-2 18H8z" /><path d="M9 8h6M9 12h6" /></svg>
  },
  {
    title: 'Crushed & Sized Coal',
    text: 'Processed to consistent size and gradation for controlled combustion performance.',
    icon: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="7" cy="8" r="2.4" /><circle cx="17" cy="8" r="2.4" /><circle cx="12" cy="16" r="2.4" /></svg>
  },
  {
    title: 'Industrial Fuel Coal',
    text: 'Practical fuel grades matched to the operating profile of your facility.',
    icon: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 17h2l1-6h9l3 6h3v3H3z" /><circle cx="7" cy="19" r="1.6" /><circle cx="17" cy="19" r="1.6" /></svg>
  },
  {
    title: 'Client-Specific Specs',
    text: 'Tailored supply built around your exact quality, quantity and operational requirements.',
    icon: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l7 3v5c0 4.6-3 8.4-7 10-4-1.6-7-5.4-7-10V6z" /><path d="M9 12l2 2 4-4" /></svg>
  }
]

export default function Sourcing() {
  return (
    <>
      <PageHero
        image="/images/ships-loading.jpg"
        breadcrumb="What We Do"
        title={<>Local expertise.<br /><em>Global</em> sourcing.</>}
        lead="Sourcing capabilities across Pakistan and international markets — one reliable supply network for a wide range of industrial applications."
      />

      {/* INTRO */}
      <section className="section">
        <div className="container">
          <div className="split">
            <Reveal direction="left" className="split-media">
              <img src="/images/coal-stockpile.jpg" alt="Excavators managing coal stockpiles at a storage yard" />
              <span className="media-frame" />
            </Reveal>
            <Reveal direction="right">
              <span className="kicker">What We Do</span>
              <h2 className="section-title">Coal solutions for every <em>industrial</em> application</h2>
              <p className="section-sub">
                FENIX ENERGY RESOURCES maintains sourcing capabilities across Pakistan and
                international markets, enabling us to provide coal solutions for a wide range of
                industrial applications.
              </p>
              <p className="section-sub" style={{ marginTop: 16 }}>
                Our local sourcing operations are supported by field-level procurement, supplier
                coordination, quality verification, and transportation management — while our global
                capabilities allow us to explore suitable origins and grades based on quality,
                availability, pricing, port logistics, and end-user requirements.
              </p>
              <div className="chips">
                <span className="chip">Field-Level Procurement</span>
                <span className="chip">Supplier Coordination</span>
                <span className="chip">Quality Verification</span>
                <span className="chip">Transport Management</span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* LOCAL & GLOBAL */}
      <section className="section section-alt">
        <div className="container">
          <div className="panels-grid">
            <Reveal delay={0.1} className="panel">
              <div className="panel-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 12-9 12S3 17 3 10a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
              </div>
              <h3>Local Sourcing</h3>
              <p>Our local sourcing network covers major coal-producing regions including:</p>
              <div className="chips">
                <span className="chip">Balochistan</span>
                <span className="chip">Sindh</span>
                <span className="chip">Khyber Pakhtunkhwa</span>
              </div>
              <p style={{ marginTop: 18 }}>We facilitate the procurement and supply of various coal grades, including:</p>
              <ul className="check-list">
                <li><span className="ic">✓</span><span>Steam Coal</span></li>
                <li><span className="ic">✓</span><span>Lignite Coal</span></li>
                <li><span className="ic">✓</span><span>Bituminous Coal</span></li>
                <li><span className="ic">✓</span><span>Crushed &amp; Sized Coal</span></li>
                <li><span className="ic">✓</span><span>Industrial Fuel Coal</span></li>
              </ul>
            </Reveal>
            <Reveal delay={0.2} className="panel">
              <div className="panel-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c2.5 2.6 3.8 5.7 3.8 9S14.5 18.4 12 21c-2.5-2.6-3.8-5.7-3.8-9S9.5 5.6 12 3z" /></svg>
              </div>
              <h3>Global Sourcing</h3>
              <p>
                We also facilitate the sourcing of international coal according to client
                specifications and commercial requirements.
              </p>
              <p style={{ marginTop: 14 }}>Our global sourcing capabilities allow us to explore suitable origins and grades based on:</p>
              <div className="chips">
                <span className="chip gold">Quality</span>
                <span className="chip gold">Availability</span>
                <span className="chip gold">Pricing</span>
                <span className="chip gold">Port Logistics</span>
                <span className="chip gold">End-User Requirements</span>
              </div>
              <p style={{ marginTop: 18 }}>
                This enables us to provide clients with both local and imported coal solutions under
                one reliable supply network.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* GRADES */}
      <section className="section">
        <div className="container">
          <Reveal className="section-head center">
            <span className="kicker">Coal Grades</span>
            <h2 className="section-title">The right grade for your <em>operation</em></h2>
            <p className="section-sub">
              Every grade is matched to your calorific, size and ash requirements before dispatch.
            </p>
          </Reveal>
          <div className="cards-grid">
            {GRADES.map((g, i) => (
              <Reveal key={g.title} delay={0.08 * (i + 1)} className="card card-plain" data-tilt>
                <div className="card-icon">{g.icon}</div>
                <h3>{g.title}</h3>
                <p>{g.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="One supply network — local & imported"
        text="Tell us the origin, grade and volume you need; we'll source, verify and deliver it."
        primaryLabel="Discuss Your Needs"
        secondaryLabel="Industries We Serve"
        secondaryHref={null}
        secondaryTo="/industries"
      />
    </>
  )
}

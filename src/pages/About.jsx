import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero.jsx'
import Reveal from '../components/Reveal.jsx'
import CtaBand from '../components/CtaBand.jsx'

const STEPS = [
  {
    title: 'Understand the Requirement',
    text: 'We begin with your operational needs — quality parameters, volumes, delivery schedule and facility specifications.'
  },
  {
    title: 'Responsible Sourcing',
    text: 'Coal is matched from reliable local mines, established suppliers and international producers against agreed specifications.'
  },
  {
    title: 'Quality Verification',
    text: 'Systematic sampling, inspection and testing — including laboratory analysis and third-party inspection where required.'
  },
  {
    title: 'Logistics & Delivery',
    text: 'Coordinated transportation, safe handling and reliable dispatch planning deliver the right quality, in the right quantity, at the right time.'
  }
]

export default function About() {
  return (
    <>
      <PageHero
        image="/images/loader.jpg"
        breadcrumb="About Us"
        title={<>Built on trust.<br />Driven by <em>performance.</em></>}
        lead="A professionally managed energy and coal supply company with deep roots in Pakistan's industrial fuel market — and a sourcing network that reaches far beyond it."
      />

      {/* STORY */}
      <section className="section">
        <div className="container">
          <div className="split">
            <Reveal direction="left">
              <span className="kicker">Who We Are</span>
              <h2 className="section-title">
                Premium Coal.<br />Reliable Supply.<br /><em>Proven Performance.</em>
              </h2>
              <p className="section-sub">
                FENIX ENERGY RESOURCES, established in 2021, is a professionally managed energy and
                coal trading company specializing in coal sourcing, procurement, trading, mining,
                quality management, logistics, and supply-chain solutions.
              </p>
              <p className="section-sub" style={{ marginTop: 16 }}>
                With a strong understanding of Pakistan's energy and industrial fuel market, we provide
                reliable coal solutions to industries across the country. Our sourcing network extends
                across Pakistan's major coal-producing regions as well as international markets,
                enabling us to offer coal tailored to our clients' specific quality, quantity, and
                operational requirements.
              </p>
              <p className="section-sub" style={{ marginTop: 16 }}>
                Our experienced field teams and industry partners operate across key mining areas,
                stockyards, transportation hubs, and port locations — allowing us to maintain effective
                control over procurement, quality, logistics, and delivery.
              </p>
            </Reveal>
            <Reveal direction="right" className="split-media">
              <img src="/images/open-pit-terraces.jpg" alt="Aerial view of terraced open-pit mining operations" />
              <span className="media-frame" />
              <div className="media-float">
                <strong>3</strong>
                <span>Coal Regions</span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* VISION & MISSION */}
      <section className="section section-alt">
        <div className="container">
          <Reveal className="section-head center">
            <span className="kicker">Our Direction</span>
            <h2 className="section-title">Vision &amp; <em>Mission</em></h2>
            <p className="section-sub">
              We believe successful coal supply is not simply about delivering a commodity — it is about
              delivering consistent quality, dependable service, competitive value, and long-term
              business solutions.
            </p>
          </Reveal>
          <div className="panels-grid">
            <Reveal delay={0.1} className="panel">
              <span className="ghost-num">01</span>
              <div className="panel-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z" /><circle cx="12" cy="12" r="3" /></svg>
              </div>
              <h3>Our Vision</h3>
              <p>
                To become one of Pakistan's most trusted and professionally recognized energy and coal
                supply companies — setting new standards in quality, reliability, sustainability, and
                customer service while supporting the energy requirements of Pakistan's growing
                industrial sector.
              </p>
            </Reveal>
            <Reveal delay={0.2} className="panel">
              <span className="ghost-num">02</span>
              <div className="panel-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="4.5" /><circle cx="12" cy="12" r="1" fill="currentColor" /></svg>
              </div>
              <h3>Our Mission</h3>
              <p>
                To deliver high-quality coal and integrated energy supply solutions through responsible
                sourcing, strong supplier relationships, rigorous quality control, efficient logistics,
                and customer-focused service.
              </p>
              <p style={{ marginTop: 14 }}>
                We are committed to conducting our business with integrity, transparency, operational
                excellence, and long-term value creation for our clients and partners.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* APPROACH */}
      <section className="section">
        <div className="container">
          <Reveal className="section-head">
            <span className="kicker">How We Work</span>
            <h2 className="section-title">Our <em>approach</em> to every supply</h2>
            <p className="section-sub">
              Disciplined, field-driven and quality-obsessed — from the first requirement discussion to
              the final delivery.
            </p>
          </Reveal>
          <div className="timeline">
            {STEPS.map((s, i) => (
              <Reveal key={s.title} delay={0.1 * (i + 1)} className="tl-item">
                <span className="tl-dot">{i + 1}</span>
                <h4>{s.title}</h4>
                <p>{s.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Let's build a long-term energy partnership"
        text="Talk to our team about your coal requirements — local or imported, standard or client-specific."
        primaryLabel="Get in Touch"
        secondaryLabel="Our Services"
        secondaryHref={null}
        secondaryTo="/services"
      />
    </>
  )
}

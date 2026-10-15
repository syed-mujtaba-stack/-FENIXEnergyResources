import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero.jsx'
import Reveal from '../components/Reveal.jsx'
import Counter from '../components/Counter.jsx'
import CtaBand from '../components/CtaBand.jsx'

const INDUSTRIES = [
  {
    tag: 'Manufacturing',
    title: 'Textile & Spinning',
    text: 'Reliable fuel solutions for textile manufacturing and processing facilities.',
    image: '/images/textile-loom.jpg',
    alt: 'Spinning and weaving machinery in a textile mill'
  },
  {
    tag: 'Heating & Boilers',
    title: 'Towel & Hosiery',
    text: 'Coal supply solutions for industrial heating and boiler operations.',
    image: '/images/knitting-worker.jpg',
    alt: 'Worker operating knitting and winding machines in a textile factory'
  },
  {
    tag: 'Continuous Heat',
    title: 'Dyeing & Processing',
    text: 'Fuel supply tailored to continuous industrial heat requirements.',
    image: '/images/dyeing-machines.jpg',
    alt: 'Industrial textile dyeing and processing machinery'
  },
  {
    tag: 'Energy Intensive',
    title: 'Cement & Building Materials',
    text: 'Coal solutions for energy-intensive manufacturing operations.',
    image: '/images/cement-plant.jpg',
    alt: 'Cement manufacturing plant with production towers'
  },
  {
    tag: 'High Temperature',
    title: 'Brick & Ceramic Industries',
    text: 'Suitable coal grades for kilns and high-temperature applications.',
    image: '/images/brick-kiln.jpg',
    alt: 'Clay bricks stacked at a traditional brick kiln'
  },
  {
    tag: 'Power Generation',
    title: 'Power & Energy',
    text: 'Fuel sourcing and supply solutions for power-generation requirements.',
    image: '/images/power-plant.jpg',
    alt: 'Cooling towers at a coal-fired power generation plant'
  }
]

const STATS = [
  { value: 6, label: 'Industrial Sectors' },
  { value: 5, label: 'Coal Grades Supplied' },
  { value: 3, label: 'Sourcing Regions' },
  { value: 100, suffix: '%', label: 'Spec Compliance Focus' }
]

export default function Industries() {
  return (
    <>
      <PageHero
        image="/images/cement-aerial.jpg"
        breadcrumb="Industries"
        title={<>Fueling Pakistan's <em>industrial</em> engine</>}
        lead="Our coal supply solutions are designed to support a diverse range of industrial sectors — with fuel matched to every process."
      />

      <section className="section">
        <div className="container">
          <Reveal className="section-head center">
            <span className="kicker">Industries We Serve</span>
            <h2 className="section-title">Sectors that <em>rely</em> on us</h2>
            <p className="section-sub">
              From textile manufacturing and processing facilities to energy-intensive production and
              power generation.
            </p>
          </Reveal>

          <div className="cards-grid">
            {INDUSTRIES.map((ind, i) => (
              <Reveal key={ind.title} delay={0.08 * (i + 1)} direction="zoom" className="ind-card">
                <img src={ind.image} alt={ind.alt} />
                <div className="ind-content">
                  <span className="ind-tag">{ind.tag}</span>
                  <h3>{ind.title}</h3>
                  <p>{ind.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* NOTE + STATS */}
      <section className="section section-alt">
        <div className="container">
          <div className="split">
            <Reveal direction="left">
              <span className="kicker">Beyond the Big Plants</span>
              <h2 className="section-title">
                Supporting brick kilns &amp; <em>industrial</em> consumers nationwide
              </h2>
              <p className="section-sub">
                We also supply coal to numerous brick kilns and industrial consumers across Pakistan,
                supporting their ongoing fuel requirements with consistent grades, dependable volumes
                and scheduled delivery.
              </p>
              <p className="section-sub" style={{ marginTop: 16 }}>
                Whatever the scale — a single kiln or a multi-site industrial group — our sourcing,
                quality and logistics framework adapts to your operation.
              </p>
              <div style={{ marginTop: 30 }}>
                <Link to="/contact" className="btn btn-primary">
                  Become a Customer
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
                </Link>
              </div>
            </Reveal>
            <Reveal direction="right">
              <div className="stats-grid two-col">
                {STATS.map((s) => (
                  <div className="stat" key={s.label}>
                    <div className="num">
                      <Counter value={s.value} suffix={s.suffix || ''} />
                    </div>
                    <div className="label">{s.label}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <CtaBand
        title="Fuel requirements for your industry?"
        text="Share your process heat or boiler needs and we'll recommend the right grade and supply plan."
        primaryLabel="Contact Our Team"
        secondaryLabel="Call +92 331 3638543"
        secondaryHref="tel:+923313638543"
        gold
      />
    </>
  )
}

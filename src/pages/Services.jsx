import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero.jsx'
import Reveal from '../components/Reveal.jsx'
import CtaBand from '../components/CtaBand.jsx'

const ICONS = {
  trade: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 17h2l1-6h9l3 6h3v3H3z" /><circle cx="7" cy="19" r="1.6" /><circle cx="17" cy="19" r="1.6" /><path d="M12 3l4 8H8z" /></svg>,
  globe: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c2.5 2.6 3.8 5.7 3.8 9S14.5 18.4 12 21c-2.5-2.6-3.8-5.7-3.8-9S9.5 5.6 12 3z" /></svg>,
  bolt: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M14 3l-1.5 6h4L10 21l1-7H7z" /></svg>,
  flask: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M9 3h6v3l3 3v9a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V9l3-3z" /><path d="M9 3v3M15 3v3" /><path d="M7 13h10" /></svg>,
  warehouse: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21V9l9-6 9 6v12" /><path d="M9 21v-7h6v7" /><path d="M3 13h4M17 13h4" /></svg>,
  truck: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="6" width="13" height="9" rx="1" /><path d="M14 9h4l3 3v3h-7z" /><circle cx="6" cy="18" r="1.8" /><circle cx="17" cy="18" r="1.8" /></svg>
}

const SERVICES = [
  {
    num: '01',
    image: '/images/port-terminal.jpg',
    alt: 'Coal being loaded at a marine terminal',
    icon: ICONS.trade,
    title: 'Coal Trading',
    body: (
      <p>
        We provide comprehensive coal trading solutions for industrial and commercial consumers. Our
        extensive network of suppliers and buyers enables us to offer competitive pricing, flexible
        supply arrangements, and dependable volumes according to market requirements.
      </p>
    ),
    chips: ['Competitive Pricing', 'Flexible Volumes', 'Dependable Supply']
  },
  {
    num: '02',
    image: '/images/trucks-mine.jpg',
    alt: 'Trucks being loaded with coal at a mining site',
    icon: ICONS.globe,
    title: 'Procurement & Sourcing',
    body: (
      <>
        <p>
          We source coal from reliable local mines, established suppliers, and international producers,
          carefully matching coal specifications with our clients' requirements. Our procurement
          process considers key parameters including:
        </p>
        <div className="chips">
          <span className="chip">Gross Calorific Value (GCV)</span>
          <span className="chip">Ash Content</span>
          <span className="chip">Moisture</span>
          <span className="chip">Volatile Matter</span>
          <span className="chip">Sulphur</span>
          <span className="chip">Size &amp; Gradation</span>
          <span className="chip gold">Client-Specific Specs</span>
        </div>
      </>
    )
  },
  {
    num: '03',
    image: '/images/mining-shovel.jpg',
    alt: 'Heavy mining machinery loading haul trucks at the coal face',
    icon: ICONS.bolt,
    title: 'Coal Mining',
    body: (
      <>
        <p>
          Through our network and operational presence in key mining regions of Balochistan and Sindh,
          we facilitate the procurement and supply of locally produced coal.
        </p>
        <p style={{ marginTop: 14 }}>
          Our approach focuses on responsible sourcing, operational efficiency, quality consistency,
          and supply reliability.
        </p>
        <div className="chips">
          <span className="chip">Balochistan</span>
          <span className="chip">Sindh</span>
          <span className="chip">Supply Reliability</span>
        </div>
      </>
    )
  },
  {
    num: '04',
    image: '/images/quality-hands.jpg',
    alt: 'Hands holding freshly produced coal for quality inspection',
    icon: ICONS.flask,
    title: 'Quality Assurance & Inspection',
    body: (
      <>
        <p>
          Quality is at the core of our operations. We implement systematic sampling, inspection,
          testing, and quality verification procedures to ensure that supplied coal meets agreed
          specifications and client requirements.
        </p>
        <p style={{ marginTop: 14 }}>
          Where required, coal can be subjected to laboratory analysis and third-party inspection to
          provide greater transparency and confidence to our customers.
        </p>
        <div className="chips">
          <span className="chip">Systematic Sampling</span>
          <span className="chip">Lab Analysis</span>
          <span className="chip">Third-Party Inspection</span>
        </div>
      </>
    )
  },
  {
    num: '05',
    image: '/images/stockyard-cranes.jpg',
    alt: 'Stacker reclaimers working large coal stockpiles in a stockyard',
    icon: ICONS.warehouse,
    title: 'Storage & Stock Management',
    body: (
      <>
        <p>
          Our strategically positioned stockyards and storage arrangements enable us to maintain coal
          inventories and support uninterrupted supply.
        </p>
        <p style={{ marginTop: 14 }}>
          Our stock management capabilities allow us to respond efficiently to planned requirements,
          seasonal demand, and urgent supply needs.
        </p>
        <div className="chips">
          <span className="chip">Strategic Stockyards</span>
          <span className="chip">Seasonal Demand</span>
          <span className="chip">Urgent Supply</span>
        </div>
      </>
    )
  },
  {
    num: '06',
    image: '/images/truck-coal.jpg',
    alt: 'Truck transporting coal along a haul road',
    icon: ICONS.truck,
    title: 'Transportation & Logistics',
    body: (
      <>
        <p>
          We provide end-to-end coal transportation solutions from mines, stockyards, and ports to
          customer facilities. Our logistics network is designed to ensure:
        </p>
        <ul className="check-list">
          <li><span className="ic">✓</span><span>Timely deliveries</span></li>
          <li><span className="ic">✓</span><span>Efficient transportation &amp; safe handling</span></li>
          <li><span className="ic">✓</span><span>Reliable dispatch planning</span></li>
          <li><span className="ic">✓</span><span>Supply-chain coordination</span></li>
        </ul>
        <p style={{ marginTop: 14 }}>
          From source to destination, we manage the movement of coal with a focus on efficiency,
          reliability, and cost optimization.
        </p>
      </>
    )
  }
]

export default function Services() {
  return (
    <>
      <PageHero
        image="/images/open-pit-trucks.jpg"
        breadcrumb="Services"
        title={<>Integrated coal supply, <em>end to end.</em></>}
        lead="Six core service lines covering every stage of the supply chain — trading, sourcing, mining, quality, storage and delivery."
      />

      <section className="section">
        <div className="container">
          <Reveal className="section-head center">
            <span className="kicker">Our Services</span>
            <h2 className="section-title">One partner for the <em>complete</em> supply chain</h2>
            <p className="section-sub">
              From the mine face to your boiler house — with quality control and logistics managed at
              every step.
            </p>
          </Reveal>

          {SERVICES.map((s, i) => (
            <div className="service-row" key={s.num}>
              <Reveal direction={i % 2 === 0 ? 'left' : 'right'} className="sr-media">
                <img src={s.image} alt={s.alt} />
                <span className="sr-badge">{s.num}</span>
              </Reveal>
              <Reveal direction={i % 2 === 0 ? 'right' : 'left'} className="sr-body">
                <div className="sr-icon">{s.icon}</div>
                <h3>{s.title}</h3>
                {s.body}
                {s.chips && (
                  <div className="chips">
                    {s.chips.map((c) => (
                      <span className="chip" key={c}>{c}</span>
                    ))}
                  </div>
                )}
              </Reveal>
            </div>
          ))}
        </div>
      </section>

      <CtaBand
        title="Specify your requirements — we'll handle the rest"
        text="Share your GCV range, monthly volume and delivery location, and our team will design a supply plan around them."
        primaryLabel="Request a Quote"
        secondaryLabel="Local & Global Sourcing"
        secondaryHref={null}
        secondaryTo="/sourcing"
      />
    </>
  )
}

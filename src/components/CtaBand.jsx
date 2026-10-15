import { Link } from 'react-router-dom'
import Reveal from './Reveal.jsx'

/** Green/gold call-to-action band used at the bottom of every page. */
export default function CtaBand({
  title = 'Need a reliable coal supply partner?',
  text = "Tell us your specifications — GCV, volume and delivery point — and our team will build a supply solution around them.",
  primaryLabel = 'Contact Us',
  primaryTo = '/contact',
  secondaryLabel = 'Call Now',
  secondaryHref = 'tel:+923313638543',
  secondaryTo,
  gold = false
}) {
  return (
    <section className="cta-band">
      <div className="container cta-inner">
        <Reveal direction="left">
          <h2>{title}</h2>
          <p>{text}</p>
        </Reveal>
        <Reveal direction="right" className="cta-actions">
          <Link to={primaryTo} className="btn btn-primary">
            {primaryLabel}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
          </Link>
          {secondaryHref ? (
            <a href={secondaryHref} className={gold ? 'btn btn-gold' : 'btn btn-ghost'}>
              {secondaryLabel}
            </a>
          ) : (
            <Link to={secondaryTo || '/contact'} className="btn btn-ghost">
              {secondaryLabel}
            </Link>
          )}
        </Reveal>
      </div>
    </section>
  )
}

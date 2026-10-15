import { useState } from 'react'
import PageHero from '../components/PageHero.jsx'
import Reveal from '../components/Reveal.jsx'
import CtaBand from '../components/CtaBand.jsx'

const REQUIREMENTS = [
  'Coal Trading',
  'Procurement & Sourcing',
  'Coal Mining',
  'Quality Assurance & Inspection',
  'Storage & Stock Management',
  'Transportation & Logistics',
  'Other'
]

const INFO_CARDS = [
  {
    title: 'Phone',
    content: (
      <p>
        <a href="tel:+923313638543">+92 331 3638543</a>
        <br />
        <a href="tel:+923352057418">+92 335 2057418</a>
      </p>
    ),
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z" /></svg>
  },
  {
    title: 'Head Office — Karachi',
    content: (
      <p>
        Suit No 06, 1st Floor, Al Syed Arcade, Opposite Dacca Sweet, Adjacent to Akhtar Eye
        Hospital, Gulshan-e-Iqbal Block, Karachi, Pakistan
      </p>
    ),
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 12-9 12S3 17 3 10a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
  },
  {
    title: 'Email',
    content: <p><a href="mailto:info@fenixsevener.com">info@fenixsevener.com</a></p>,
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="5" width="20" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></svg>
  },
  {
    title: 'Website',
    content: (
      <p>
        <a href="https://www.fenixsevener.com" target="_blank" rel="noopener noreferrer">
          www.fenixsevener.com
        </a>
      </p>
    ),
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c2.5 2.6 3.8 5.7 3.8 9S14.5 18.4 12 21c-2.5-2.6-3.8-5.7-3.8-9S9.5 5.6 12 3z" /></svg>
  }
]

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

export default function Contact() {
  const [form, setForm] = useState({
    name: '', company: '', email: '', phone: '', requirement: '', message: ''
  })
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)

  const update = (field) => (e) => {
    setForm((f) => ({ ...f, [field]: e.target.value }))
    if (errors[field]) setErrors((er) => ({ ...er, [field]: false }))
  }

  const validate = () => {
    const er = {}
    if (!form.name.trim()) er.name = true
    if (!form.email.trim() || !EMAIL_RE.test(form.email.trim())) er.email = true
    if (form.phone.replace(/\D/g, '').length < 10) er.phone = true
    if (!form.message.trim()) er.message = true
    setErrors(er)
    return Object.keys(er).length === 0
  }

  const onSubmit = (e) => {
    e.preventDefault()
    if (!validate()) {
      const firstBad = e.target.querySelector('.form-group.invalid input, .form-group.invalid textarea')
      if (firstBad) firstBad.focus()
      return
    }
    // NOTE: front-end only — connect to a form service / backend to receive emails.
    setSent(true)
    setForm({ name: '', company: '', email: '', phone: '', requirement: '', message: '' })
    setTimeout(() => setSent(false), 6000)
  }

  return (
    <>
      <PageHero
        image="/images/ship-unloading.jpg"
        breadcrumb="Contact"
        title={<>Let's talk <em>coal supply.</em></>}
        lead="Reach our team for quotes, specifications, scheduling and supply-chain coordination — we're ready when you are."
      />

      <section className="section">
        <div className="container">
          <Reveal className="section-head">
            <span className="kicker">Contact Us</span>
            <h2 className="section-title">Get in <em>touch</em></h2>
            <p className="section-sub">
              Call, email or send us your requirements — our team will respond with a supply solution.
            </p>
          </Reveal>

          <div className="contact-grid">
            {/* INFO */}
            <Reveal direction="left">
              {INFO_CARDS.map((c) => (
                <div className="info-card" key={c.title}>
                  <span className="ic">{c.icon}</span>
                  <div>
                    <h4>{c.title}</h4>
                    {c.content}
                  </div>
                </div>
              ))}
            </Reveal>

            {/* FORM */}
            <Reveal direction="right" className="contact-form">
              <h3>Request a Quote</h3>
              <p className="form-sub">Share your requirements and our team will get back to you.</p>

              {sent && (
                <div className="form-success show">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>
                  Thank you! Your request has been received — our team will contact you shortly.
                </div>
              )}

              <form id="contactForm" onSubmit={onSubmit} noValidate>
                <div className="form-row">
                  <div className={`form-group${errors.name ? ' invalid' : ''}`}>
                    <label htmlFor="name">Full Name *</label>
                    <input id="name" type="text" placeholder="Your name" value={form.name} onChange={update('name')} />
                    <span className="form-error">Please enter your name.</span>
                  </div>
                  <div className="form-group">
                    <label htmlFor="company">Company</label>
                    <input id="company" type="text" placeholder="Company name" value={form.company} onChange={update('company')} />
                  </div>
                </div>
                <div className="form-row">
                  <div className={`form-group${errors.email ? ' invalid' : ''}`}>
                    <label htmlFor="email">Email Address *</label>
                    <input id="email" type="email" placeholder="you@company.com" value={form.email} onChange={update('email')} />
                    <span className="form-error">Please enter a valid email address.</span>
                  </div>
                  <div className={`form-group${errors.phone ? ' invalid' : ''}`}>
                    <label htmlFor="phone">Phone *</label>
                    <input id="phone" type="tel" placeholder="+92 3XX XXXXXXX" value={form.phone} onChange={update('phone')} />
                    <span className="form-error">Please enter a valid phone number.</span>
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="requirement">Requirement Type</label>
                  <select id="requirement" value={form.requirement} onChange={update('requirement')}>
                    <option value="">Select a service</option>
                    {REQUIREMENTS.map((r) => (
                      <option key={r} value={r}>{r}</option>
                    ))}
                  </select>
                </div>
                <div className={`form-group${errors.message ? ' invalid' : ''}`}>
                  <label htmlFor="message">Your Message *</label>
                  <textarea id="message" placeholder="Tell us about your coal specifications, volumes and delivery location..." value={form.message} onChange={update('message')} />
                  <span className="form-error">Please enter your message.</span>
                </div>
                <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                  Send Request
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
                </button>
              </form>
            </Reveal>
          </div>

          {/* LOCATION */}
          <Reveal className="map-block">
            <div>
              <h4>Visit Our Karachi Office</h4>
              <p>
                Gulshan-e-Iqbal Block, Karachi — Suit No 06, 1st Floor, Al Syed Arcade, Opposite
                Dacca Sweet, Adjacent to Akhtar Eye Hospital.
              </p>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Gulshan-e-Iqbal+Block+13+Karachi"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-gold"
              >
                Open in Google Maps
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7M9 7h8v8" /></svg>
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand
        title="Prefer to talk directly?"
        text="Our lines are open for quotes, scheduling and urgent supply requirements."
        primaryLabel="Call Now"
        primaryTo="/contact"
        secondaryLabel="Email Us"
        secondaryHref="mailto:info@fenixsevener.com"
      />
    </>
  )
}

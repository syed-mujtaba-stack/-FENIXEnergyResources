import { Link } from 'react-router-dom'

const QUICK_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/services', label: 'Services' },
  { to: '/sourcing', label: 'Sourcing' },
  { to: '/industries', label: 'Industries' },
  { to: '/why-us', label: 'Why Choose Us' },
  { to: '/contact', label: 'Contact' }
]

const SERVICE_LINKS = [
  { to: '/services', label: 'Coal Trading' },
  { to: '/services', label: 'Procurement & Sourcing' },
  { to: '/services', label: 'Coal Mining' },
  { to: '/services', label: 'Quality Assurance' },
  { to: '/services', label: 'Storage & Stock' },
  { to: '/services', label: 'Transportation & Logistics' }
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link className="brand" to="/">
              <span className="brand-badge">
                <img src="/images/logo.png" alt="Fenix Energy Resources logo" />
              </span>
              <span className="brand-text">
                <span className="brand-name">FENIX</span>
                <span className="brand-sub">Energy Resources</span>
              </span>
            </Link>
            <p>
              Premium Coal. Reliable Supply. Proven Performance. A professionally managed
              energy and coal supply company serving Pakistan's industrial sector since 2021.
            </p>
            <span className="footer-tag">Local Expertise. Global Sourcing.</span>
          </div>

          <div className="footer-col">
            <h4>Quick Links</h4>
            <div className="footer-links">
              {QUICK_LINKS.map((l) => (
                <Link key={l.label} to={l.to}>{l.label}</Link>
              ))}
            </div>
          </div>

          <div className="footer-col">
            <h4>Services</h4>
            <div className="footer-links">
              {SERVICE_LINKS.map((l) => (
                <Link key={l.label} to={l.to}>{l.label}</Link>
              ))}
            </div>
          </div>

          <div className="footer-col">
            <h4>Get in Touch</h4>
            <ul className="footer-contact">
              <li>
                <span className="ic">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z" /></svg>
                </span>
                <span>
                  Tel: <a href="tel:+923313638543">+92 331 3638543</a>
                  <br />
                  Tel: <a href="tel:+923352057418">+92 335 2057418</a>
                </span>
              </li>
              <li>
                <span className="ic">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 12-9 12S3 17 3 10a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                </span>
                <span>
                  Suit No 06, 1st Floor, Al Syed Arcade, Opposite Dacca Sweet, Adjacent to
                  Akhtar Eye Hospital, Gulshan-e-Iqbal Block, Karachi, Pakistan
                </span>
              </li>
              <li>
                <span className="ic">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c2.5 2.6 3.8 5.7 3.8 9S14.5 18.4 12 21c-2.5-2.6-3.8-5.7-3.8-9S9.5 5.6 12 3z" /></svg>
                </span>
                <span>
                  <a href="https://www.fenixsevener.com" target="_blank" rel="noopener noreferrer">
                    www.fenixsevener.com
                  </a>
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {year} FENIX ENERGY RESOURCES. All rights reserved.</span>
          <span className="made">
            Premium Coal · Reliable Supply · <b>Proven Performance</b>
          </span>
        </div>
      </div>
    </footer>
  )
}

import { useEffect, useState } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'

const NAV = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/sourcing', label: 'Sourcing' },
  { to: '/industries', label: 'Industries' },
  { to: '/why-us', label: 'Why Us' }
]

export default function Header({ scrolled }) {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  // Close the mobile drawer on route change
  useEffect(() => setOpen(false), [pathname])

  // Lock body scroll while the drawer is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <>
      <header className={`site-header${scrolled ? ' scrolled' : ''}`}>
        <div className="header-inner">
          <Link className="brand" to="/" aria-label="Fenix Energy Resources home">
            <span className="brand-badge">
              <img src="/images/logo.png" alt="Fenix Energy Resources logo" />
            </span>
            <span className="brand-text">
              <span className="brand-name">FENIX</span>
              <span className="brand-sub">Energy Resources</span>
            </span>
          </Link>

          <nav className="main-nav" aria-label="Primary">
            {NAV.map((item) => (
              <NavLink key={item.to} to={item.to} end={item.to === '/'}>
                {item.label}
              </NavLink>
            ))}
            <NavLink to="/contact" className="nav-cta">
              Contact Us
            </NavLink>
          </nav>

          <button
            className={`hamburger${open ? ' open' : ''}`}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span /><span /><span />
          </button>
        </div>
      </header>

      <nav className={`mobile-nav${open ? ' open' : ''}`} aria-label="Mobile">
        {[...NAV, { to: '/contact', label: 'Contact Us' }].map((item) => (
          <NavLink key={item.to} to={item.to} end={item.to === '/'}>
            {item.label}
          </NavLink>
        ))}
      </nav>
    </>
  )
}

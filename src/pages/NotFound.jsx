import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <main className="nf">
      <div className="nf-inner">
        <Link className="brand" to="/">
          <span className="brand-badge">
            <img src="/images/logo.png" alt="Fenix Energy Resources logo" />
          </span>
          <span className="brand-text">
            <span className="brand-name">FENIX</span>
            <span className="brand-sub">Energy Resources</span>
          </span>
        </Link>
        <div className="nf-code">404</div>
        <h1>This seam runs dry</h1>
        <p>
          The page you're looking for doesn't exist or has been moved. Let's get you back to solid
          ground.
        </p>
        <div className="nf-actions">
          <Link to="/" className="btn btn-primary">
            Back to Home
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
          </Link>
          <Link to="/contact" className="btn btn-ghost">Contact Us</Link>
        </div>
      </div>
    </main>
  )
}

import { Link } from 'react-router-dom'

/** Shared hero for sub-pages (bg image + breadcrumb + title). */
export default function PageHero({ image, title, lead, breadcrumb = 'Page' }) {
  return (
    <section className="page-hero">
      <div
        className="page-hero-bg"
        style={{ backgroundImage: `url('${image}')` }}
        aria-hidden="true"
      />
      <div className="page-hero-content">
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <span className="sep">/</span>
          <span>{breadcrumb}</span>
        </nav>
        <h1>{title}</h1>
        <p>{lead}</p>
      </div>
    </section>
  )
}

import React from 'react'
import { renderToString } from 'react-dom/server'
import { MemoryRouter } from 'react-router-dom'
import App from '../src/App.jsx'

const routes = ['/', '/about', '/services', '/sourcing', '/industries', '/why-us', '/contact', '/no-such-page']
const expect = {
  '/': ['Powering Industries', 'marquee-track', 'stats-grid', 'cta-band'],
  '/about': ['Built on trust', 'Vision', 'Mission', 'timeline'],
  '/services': ['end to end', 'Coal Trading', 'Quality Assurance', 'service-row'],
  '/sourcing': ['Global', 'Balochistan', 'Khyber Pakhtunkhwa', 'Lignite Coal'],
  '/industries': ['industrial', 'Textile &amp; Spinning', 'Brick &amp; Ceramic', 'ind-card'],
  '/why-us': ['FENIX', 'Competitive Pricing', 'right time', 'cards-grid'],
  '/contact': ['coal supply', 'Request a Quote', 'contactForm', 'map-block', 'form-group'],
  '/no-such-page': ['404', 'This seam runs dry']
}

let failed = 0
for (const route of routes) {
  try {
    const html = renderToString(
      React.createElement(MemoryRouter, { initialEntries: [route] }, React.createElement(App))
    )
    const missing = expect[route].filter((m) => !html.includes(m))
    const imgs = (html.match(/<img /g) || []).length
    if (missing.length) {
      failed++
      console.log(`✗ ${route.padEnd(14)} MISSING: ${missing.join(', ')}`)
    } else {
      console.log(`✓ ${route.padEnd(14)} renders (${(html.length / 1024).toFixed(1)} KB, ${imgs} imgs, all markers found)`)
    }
  } catch (err) {
    failed++
    console.log(`✗ ${route.padEnd(14)} THREW: ${err.message}`)
  }
}
console.log(failed ? `\n${failed} ROUTE(S) FAILED` : '\nALL ROUTES RENDER CLEANLY ✓ — no import/prop/JSX errors')
process.exit(failed ? 1 : 0)

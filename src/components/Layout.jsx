import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Preloader from './Preloader.jsx'

/**
 * App shell: handles header scroll state, scroll-progress bar,
 * back-to-top button and scroll reset on route change.
 */
export default function Layout({ children }) {
  const [scrolled, setScrolled] = useState(false)
  const [showTop, setShowTop] = useState(false)
  const [progress, setProgress] = useState(0)
  const { pathname } = useLocation()

  // Reset scroll on navigation
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' })
  }, [pathname])

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      setScrolled(y > 40)
      setShowTop(y > 500)
      const h = document.documentElement.scrollHeight - window.innerHeight
      setProgress(h > 0 ? (y / h) * 100 : 0)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <Preloader />
      <div id="scrollProgress" style={{ width: `${progress}%` }} />
      <Header scrolled={scrolled} />

      <main>{children}</main>

      <Footer />

      <button
        id="toTop"
        className={showTop ? 'show' : ''}
        aria-label="Back to top"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 19V5M6 11l6-6 6 6" />
        </svg>
      </button>
    </>
  )
}

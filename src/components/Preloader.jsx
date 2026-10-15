import { useEffect, useState } from 'react'

/** Logo preloader with progress bar — fades out once the app is ready. */
export default function Preloader() {
  const [done, setDone] = useState(false)

  useEffect(() => {
    const hide = () => setTimeout(() => setDone(true), 700)
    if (document.readyState === 'complete') hide()
    else window.addEventListener('load', hide)
    const safety = setTimeout(() => setDone(true), 4000)
    return () => {
      window.removeEventListener('load', hide)
      clearTimeout(safety)
    }
  }, [])

  if (done) return null

  return (
    <div id="preloader" className="done">
      <div className="preloader-logo">
        <img src="/images/logo.png" alt="Fenix Energy Resources" />
      </div>
      <div className="preloader-bar">
        <span />
      </div>
      <div className="preloader-text">Loading Energy</div>
    </div>
  )
}

import { useEffect, useRef, useState } from 'react'
import { useInView } from '../hooks/useInView.js'

/** Animated number that counts up when scrolled into view. */
export default function Counter({ value, suffix = '', duration = 1800 }) {
  const [ref, inView] = useInView(0.5)
  const [display, setDisplay] = useState(0)
  const started = useRef(false)

  useEffect(() => {
    if (!inView || started.current) return
    started.current = true
    const start = performance.now()
    let raf
    const step = (now) => {
      const p = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - p, 4) // easeOutQuart
      setDisplay(Math.round(value * eased))
      if (p < 1) raf = requestAnimationFrame(step)
    }
    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [inView, value, duration])

  return (
    <span ref={ref}>
      {display.toLocaleString()}
      {suffix && <span className="suffix">{suffix}</span>}
    </span>
  )
}

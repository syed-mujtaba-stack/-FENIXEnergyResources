import { useEffect, useRef } from 'react'

/** Floating coal-dust / ember particle field for the hero section. */
export default function HeroParticles() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    const hero = canvas.parentElement
    let w, h, particles = [], raf
    const COLORS = ['rgba(62,224,143,', 'rgba(212,175,55,', 'rgba(255,255,255,']

    const resize = () => {
      w = canvas.width = hero.offsetWidth
      h = canvas.height = hero.offsetHeight
    }
    const spawn = () => ({
      x: Math.random() * w,
      y: h + Math.random() * h * 0.4,
      r: Math.random() * 2.4 + 0.6,
      vy: -(Math.random() * 0.55 + 0.18),
      vx: (Math.random() - 0.5) * 0.35,
      a: Math.random() * 0.5 + 0.12,
      c: COLORS[(Math.random() * COLORS.length) | 0],
      ph: Math.random() * Math.PI * 2
    })
    const init = () => {
      resize()
      const count = Math.min(90, Math.floor(w / 14))
      particles = Array.from({ length: count }, () => {
        const p = spawn()
        p.y = Math.random() * h
        return p
      })
    }
    const tick = () => {
      ctx.clearRect(0, 0, w, h)
      particles.forEach((p) => {
        p.y += p.vy
        p.x += p.vx + Math.sin(p.y * 0.008 + p.ph) * 0.22
        if (p.y < -12 || p.x < -12 || p.x > w + 12) Object.assign(p, spawn())
        const alpha = p.a * (0.6 + 0.4 * Math.sin(p.y * 0.02 + p.ph))
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = p.c + Math.max(0, Math.min(alpha, 0.7)) + ')'
        ctx.fill()
      })
      raf = requestAnimationFrame(tick)
    }

    init()
    tick()
    let rt
    const onResize = () => {
      clearTimeout(rt)
      rt = setTimeout(init, 200)
    }
    window.addEventListener('resize', onResize)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return <canvas id="hero-particles" ref={canvasRef} aria-hidden="true" />
}

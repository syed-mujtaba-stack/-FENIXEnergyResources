import { useInView } from '../hooks/useInView.js'

/**
 * Scroll-reveal wrapper. direction: 'up' | 'left' | 'right' | 'zoom'
 */
export default function Reveal({
  children,
  delay = 0,
  direction = 'up',
  as: Tag = 'div',
  className = '',
  ...rest
}) {
  const [ref, inView] = useInView()
  const dirClass =
    direction === 'left' ? ' left' : direction === 'right' ? ' right' : direction === 'zoom' ? ' zoom' : ''
  const delayClass = delay ? ` d${Math.min(Math.round(delay * 10), 6)}` : ''

  return (
    <Tag
      ref={ref}
      className={`reveal${dirClass}${delayClass}${inView ? ' visible' : ''} ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  )
}

const ITEMS = [
  'Steam Coal',
  'Lignite Coal',
  'Bituminous Coal',
  'Crushed & Sized Coal',
  'Industrial Fuel Coal',
  'GCV Tested Supply',
  'Mine to Facility Logistics'
]

/** Infinite scrolling coal-grade marquee band. */
export default function Marquee() {
  const loop = [...ITEMS, ...ITEMS]
  return (
    <div className="marquee-band" aria-hidden="true">
      <div className="marquee-track">
        {loop.map((item, i) => (
          <span className="marquee-item" key={`${item}-${i}`}>
            <i />
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}

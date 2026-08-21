import { motion } from 'framer-motion';

export function Eyebrow({ children, light = false, className = '' }) {
  return <p className={`${light ? 'eyebrow text-zari-gold' : 'eyebrow'} ${className}`}>{children}</p>;
}

export function DiamondDivider({ light = false, className = '' }) {
  const line = light ? 'bg-gold-70' : 'bg-maroon-60';
  const gem = light ? 'bg-zari-gold' : 'bg-maroon';
  return (
    <div className={`flex items-center gap-3 ${className}`} aria-hidden="true">
      <span className={`h-px w-14 ${line}`} />
      <span className={`${gem} h-2 w-2 rotate-45`} />
      <span className={`h-px w-14 ${line}`} />
    </div>
  );
}

export function SectionHeader({ eyebrow, title, intro, light = false, align = 'left' }) {
  const centered = align === 'center';
  return (
    <div className={centered ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
      {eyebrow && <Eyebrow light={light}>{eyebrow}</Eyebrow>}
      <h2
        className={`mt-3 font-serif text-3xl font-semibold uppercase leading-tight tracking-wide md:text-4xl ${
          light ? 'text-paper' : 'text-maroon'
        }`}
      >
        {title}
      </h2>
      <DiamondDivider light={light} className={`mt-4 ${centered ? 'justify-center' : ''}`} />
      {intro && <p className={`mt-5 leading-relaxed ${light ? 'text-paper' : 'text-ink-soft'}`}>{intro}</p>}
    </div>
  );
}

export function LinkArrow({ children, onClick, type = 'button', light = false, className = '' }) {
  return (
    <button type={type} onClick={onClick} className={`${light ? 'link-arrow-light' : 'link-arrow'} ${className}`}>
      {children}
      <span aria-hidden="true">→</span>
    </button>
  );
}

export function MetadataList({ items }) {
  return (
    <dl className="grid grid-cols-1 gap-x-10 gap-y-3 sm:grid-cols-2">
      {items.map(([label, value]) => (
        <div key={label} className="flex items-baseline justify-between gap-4 border-b border-hairline pb-2">
          <dt className="text-[0.66rem] font-semibold uppercase tracking-[0.2em] text-ink-soft">{label}</dt>
          <dd className="text-right font-medium">{value}</dd>
        </div>
      ))}
    </dl>
  );
}

export function Reveal({ children, delay = 0, className = '' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function CarouselArrow({ direction = 'right', onClick, label = 'Scroll', disabled = false }) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={label}
      className="flex h-11 w-11 items-center justify-center rounded-xs border border-hairline bg-paper text-ink transition-colors duration-200 ease-out-expo hover:bg-ink hover:text-paper disabled:opacity-40 disabled:hover:bg-paper disabled:hover:text-ink"
    >
      {direction === 'right' ? (
        <span aria-hidden="true">›</span>
      ) : (
        <span aria-hidden="true">‹</span>
      )}
    </button>
  );
}

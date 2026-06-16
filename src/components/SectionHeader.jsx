import { m } from 'framer-motion';

export function SectionHeader({ kicker, title, copy, centered = false }) {
  return (
    <m.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6 }}
      className={centered ? 'mx-auto max-w-3xl text-center' : ''}
    >
      <p className="section-kicker">{kicker}</p>
      <h2 className="section-title">{title}</h2>
      {copy && <p className="section-copy">{copy}</p>}
    </m.div>
  );
}

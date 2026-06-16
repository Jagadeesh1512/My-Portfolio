import { m, useMotionTemplate, useMotionValue } from 'framer-motion';

export function MagneticCard({ children, className = '' }) {
  const x = useMotionValue(50);
  const y = useMotionValue(50);
  const background = useMotionTemplate`radial-gradient(circle at ${x}% ${y}%, rgba(37,99,235,0.18), transparent 34%)`;

  const handleMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set(((event.clientX - rect.left) / rect.width) * 100);
    y.set(((event.clientY - rect.top) / rect.height) * 100);
  };

  return (
    <m.div
      onMouseMove={handleMove}
      whileHover={{ y: -8, rotateX: 1.5, rotateY: -1.5 }}
      transition={{ type: 'spring', stiffness: 260, damping: 22 }}
      className={`glass-panel group relative overflow-hidden rounded-[2rem] ${className}`}
    >
      <m.div style={{ background }} className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100" />
      <div className="relative z-10">{children}</div>
    </m.div>
  );
}

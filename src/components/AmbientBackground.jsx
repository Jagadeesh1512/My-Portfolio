import { memo } from 'react';

const particles = Array.from({ length: 26 }, (_, index) => ({
  id: index,
  left: `${(index * 37) % 100}%`,
  delay: `${(index % 9) * 1.2}s`,
  duration: `${14 + (index % 7) * 2}s`,
  size: `${3 + (index % 4)}px`,
}));

export const AmbientBackground = memo(function AmbientBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(96,165,250,0.18),transparent_34%),linear-gradient(180deg,#ffffff_0%,#f8fbff_46%,#ffffff_100%)]" />
      <div className="absolute inset-0 opacity-[0.36] [background-image:linear-gradient(rgba(37,99,235,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(37,99,235,0.12)_1px,transparent_1px)] [background-size:64px_64px] animate-grid" />
      <div className="absolute -left-32 top-16 h-96 w-96 rounded-full bg-brand-400/25 blur-3xl animate-blob" />
      <div className="absolute right-[-9rem] top-52 h-[30rem] w-[30rem] rounded-full bg-brand-600/20 blur-3xl animate-blob [animation-delay:-5s]" />
      <div className="absolute bottom-[-12rem] left-1/4 h-[34rem] w-[34rem] rounded-full bg-brand-300/20 blur-3xl animate-blob [animation-delay:-9s]" />
      <div className="absolute left-[-20%] top-24 h-28 w-[150%] rotate-12 bg-gradient-to-r from-transparent via-brand-300/20 to-transparent blur-2xl animate-ray" />
      <div className="absolute inset-x-0 top-0 h-64 bg-[radial-gradient(ellipse_at_top,rgba(37,99,235,0.22),transparent_62%)]" />
      <div className="hidden sm:block">
        {particles.map((particle) => (
          <span
            key={particle.id}
            className="absolute bottom-[-12vh] rounded-full bg-brand-500/45 shadow-[0_0_18px_rgba(37,99,235,0.55)] will-change-transform"
            style={{
              left: particle.left,
              width: particle.size,
              height: particle.size,
              animation: `particle ${particle.duration} linear infinite`,
              animationDelay: particle.delay,
            }}
          />
        ))}
      </div>
    </div>
  );
});

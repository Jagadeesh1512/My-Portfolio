import { m } from 'framer-motion';
import { Trophy } from 'lucide-react';
import { SectionHeader } from '../components/SectionHeader.jsx';

export default function Achievement() {
  return (
    <section id="achievement" className="container-shell py-16">
      <div className="grid items-center gap-6 rounded-[2rem] border border-brand-100 bg-gradient-to-br from-white/90 via-brand-50/80 to-white/70 p-5 shadow-glow backdrop-blur-2xl sm:p-7 lg:grid-cols-[0.6fr_1fr]">
        <m.div
          animate={{ y: [0, -12, 0], rotate: [-2, 2, -2] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          className="relative mx-auto flex aspect-square w-full max-w-xs items-center justify-center rounded-full bg-white shadow-card"
        >
          <div className="absolute inset-8 rounded-full bg-brand-500/20 blur-2xl" />
          <Trophy className="relative text-brand-600 drop-shadow-xl" size={80} strokeWidth={1.5} />
        </m.div>

        <div>
          <SectionHeader
            kicker="Achievement"
            title="Runner-Up - HackDrift 2026"
            copy="Secured Runner-Up position at HackDrift 2026 for developing a real-time Driver Drowsiness Detection System using computer vision and intelligent monitoring."
          />
          <div className="mt-6 inline-flex rounded-full border border-brand-200 bg-white/80 px-4 py-2 text-xs font-black text-brand-700 shadow-sm">
            Computer Vision • Real-Time Alerts • Safety Dashboard
          </div>
        </div>
      </div>
    </section>
  );
}

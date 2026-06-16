import { m } from 'framer-motion';
import { CloudCog } from 'lucide-react';
import { SectionHeader } from '../components/SectionHeader.jsx';
import { journeyNodes } from '../data/portfolio.js';

export default function AwsJourney() {
  return (
    <section className="container-shell py-24">
      <SectionHeader
        centered
        kicker="AWS Learning Journey"
        title="A clear roadmap from fundamentals to deployable cloud systems."
      />

      <div className="relative mt-14 overflow-hidden rounded-[2rem] border border-brand-100 bg-white/72 p-6 shadow-card backdrop-blur-2xl sm:p-8">
        <m.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.1 }}
          className="absolute left-8 right-8 top-1/2 hidden h-1 origin-left rounded-full bg-gradient-to-r from-brand-600 via-brand-300 to-brand-600 lg:block"
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-9">
          {journeyNodes.map((node, index) => (
            <m.div
              key={node}
              initial={{ opacity: 0, y: 20, scale: 0.92 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="relative flex min-h-32 flex-col items-center justify-center rounded-3xl border border-brand-100 bg-white/82 p-4 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-glow"
            >
              <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-600 text-white shadow-glow">
                <CloudCog size={20} />
              </div>
              <p className="text-sm font-black text-slate-800">{node}</p>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
}

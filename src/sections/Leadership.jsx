import { m } from 'framer-motion';
import { SectionHeader } from '../components/SectionHeader.jsx';
import { leadershipItems } from '../data/portfolio.js';

export default function Leadership() {
  return (
    <section id="leadership" className="container-shell py-24">
      <SectionHeader
        centered
        kicker="Leadership & Activities"
        title="Learning in public, building with people."
        copy="Technical growth becomes stronger when it is shared through workshops, peer learning, and community initiatives."
      />

      <div className="relative mx-auto mt-14 max-w-4xl">
        <div className="space-y-8">
          {leadershipItems.map((item) => {
            const Icon = item.icon;
            return (
              <m.div
                key={item.role}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative flex w-full"
              >
                <div className="glass-panel w-full rounded-[2rem] p-6 sm:p-8">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-600 text-white shadow-glow">
                      <Icon size={22} />
                    </div>
                    <h3 className="text-lg font-black text-slate-950">{item.role}</h3>
                  </div>
                  <p className="mt-4 text-sm leading-7 text-slate-600">{item.description}</p>
                </div>
              </m.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

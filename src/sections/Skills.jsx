import { m } from 'framer-motion';
import { MagneticCard } from '../components/MagneticCard.jsx';
import { SectionHeader } from '../components/SectionHeader.jsx';
import { skillGroups } from '../data/portfolio.js';

export default function Skills() {
  return (
    <section id="skills" className="container-shell py-24">
      <SectionHeader
        centered
        kicker="Skills"
        title="A practical stack for software, cloud, and intelligent systems."
        copy="Focused fundamentals, hands-on tools, and cloud concepts that support real project execution."
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {skillGroups.map((group, groupIndex) => {
          const Icon = group.icon;
          return (
            <m.div
              key={group.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: groupIndex * 0.08 }}
            >
              <MagneticCard className="h-full p-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-13 w-13 items-center justify-center rounded-2xl bg-brand-600 text-white shadow-glow">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-xl font-black text-slate-950">{group.title}</h3>
                </div>

                <div className="mt-7 space-y-5">
                  {group.skills.map((skill, index) => (
                    <div key={skill.name}>
                      <div className="mb-2 flex items-center justify-between text-sm font-bold">
                        <span className="text-slate-700">{skill.name}</span>
                        <span className="text-brand-600">{skill.level}%</span>
                      </div>
                      <div className="h-2.5 overflow-hidden rounded-full bg-brand-100">
                        <m.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: index * 0.06 }}
                          className="h-full rounded-full bg-gradient-to-r from-brand-600 to-brand-300 shadow-[0_0_18px_rgba(37,99,235,0.45)]"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </MagneticCard>
            </m.div>
          );
        })}
      </div>
    </section>
  );
}

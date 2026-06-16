import { ArrowUpRight } from 'lucide-react';
import { m } from 'framer-motion';
import { MagneticCard } from '../components/MagneticCard.jsx';
import { SectionHeader } from '../components/SectionHeader.jsx';
import { projects } from '../data/portfolio.js';

export default function Projects() {
  return (
    <section id="projects" className="container-shell py-24">
      <SectionHeader
        kicker="Projects"
        title="Project work with product thinking and engineering depth."
        copy="Each build focuses on an actual problem: safer roads, practical automation, smarter recycling, and better real-time visibility."
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {projects.map((project, index) => {
          const Icon = project.icon;
          return (
            <m.div
              key={project.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <MagneticCard className="h-full p-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-600 text-white shadow-glow">
                    <Icon size={26} />
                  </div>
                  <ArrowUpRight className="text-slate-400 transition group-hover:text-brand-600" size={22} />
                </div>
                <h3 className="mt-7 text-2xl font-black tracking-tight text-slate-950">{project.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-600">{project.description}</p>
                <p className="mt-5 rounded-2xl bg-brand-50 p-4 text-sm font-semibold leading-6 text-brand-800">{project.goal}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="rounded-full border border-brand-100 bg-white/70 px-3 py-1.5 text-xs font-bold text-slate-600">
                      {tech}
                    </span>
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

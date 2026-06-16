import { m } from 'framer-motion';
import { SectionHeader } from '../components/SectionHeader.jsx';
import { stats } from '../data/portfolio.js';
import { useCountUp } from '../utils/useCountUp.js';

function StatCard({ stat }) {
  const [ref, value] = useCountUp(stat.value);

  return (
    <div ref={ref} className="rounded-3xl border border-brand-100 bg-white/75 p-5 shadow-sm backdrop-blur">
      <div className="text-4xl font-black text-brand-600">
        {value}
        {stat.suffix}
      </div>
      <p className="mt-2 text-sm font-semibold text-slate-600">{stat.label}</p>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="container-shell py-24">
      <SectionHeader
        kicker="About Me"
        title="Engineering curiosity into useful products."
        copy="I am a fourth-year B.Tech student in Electronics and Communication Engineering with a strong interest in Software Development, Cloud Computing, Artificial Intelligence."
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_0.82fr]">
        <m.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-panel rounded-[2rem] p-7 sm:p-9"
        >
          <div className="space-y-5 text-base leading-8 text-slate-600">
            <p>
              I enjoy building practical solutions that combine hardware and software to solve real-world problems. My work sits at the intersection of code, cloud infrastructure, intelligent systems, and embedded hardware.
            </p>
            <p>
              Currently, I am strengthening my skills in AWS Cloud, Python, Data Structures & Algorithms while actively participating in technical communities and hackathons.
            </p>
            <p>
              My goal is to grow into a software and cloud engineer who can design reliable systems, ship polished products, and turn technical learning into measurable impact.
            </p>
          </div>
        </m.div>

        <m.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
          className="grid grid-cols-2 gap-4"
        >
          {stats.map((stat) => (
            <m.div key={stat.label} variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}>
              <StatCard stat={stat} />
            </m.div>
          ))}
        </m.div>
      </div>
    </section>
  );
}

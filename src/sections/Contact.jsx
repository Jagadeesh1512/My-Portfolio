import { m } from 'framer-motion';
import { Send } from 'lucide-react';
import { SectionHeader } from '../components/SectionHeader.jsx';
import { contactLinks } from '../data/portfolio.js';

export default function Contact() {
  return (
    <section id="contact" className="container-shell py-24">
      <SectionHeader
        kicker="Let's Connect"
        title="Ready to build, learn, and contribute."
        copy="Open to internships, technical communities, hackathons, cloud projects, and software engineering opportunities."
      />

      <div className="mt-12 grid gap-8 lg:grid-cols-[0.85fr_1fr]">
        <div className="grid gap-3">
          {contactLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-2xl border border-brand-100 bg-white/72 p-4 font-semibold text-slate-700 shadow-sm backdrop-blur transition hover:border-brand-300 hover:text-brand-700 hover:shadow-glow"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                  <Icon size={20} />
                </span>
                {link.label}
              </a>
            );
          })}
        </div>

        <m.form
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onSubmit={(event) => event.preventDefault()}
          className="glass-panel rounded-[2rem] p-6 sm:p-8"
        >
          <div className="grid gap-5">
            <label className="grid gap-2 text-sm font-bold text-slate-700">
              Name
              <input className="rounded-2xl border border-slate-200 bg-white/80 px-4 py-3 outline-none transition focus:border-brand-400 focus:shadow-[0_0_0_4px_rgba(37,99,235,0.12)]" placeholder="Your name" />
            </label>
            <label className="grid gap-2 text-sm font-bold text-slate-700">
              Email
              <input type="email" className="rounded-2xl border border-slate-200 bg-white/80 px-4 py-3 outline-none transition focus:border-brand-400 focus:shadow-[0_0_0_4px_rgba(37,99,235,0.12)]" placeholder="you@example.com" />
            </label>
            <label className="grid gap-2 text-sm font-bold text-slate-700">
              Message
              <textarea rows="6" className="resize-none rounded-2xl border border-slate-200 bg-white/80 px-4 py-3 outline-none transition focus:border-brand-400 focus:shadow-[0_0_0_4px_rgba(37,99,235,0.12)]" placeholder="Tell me about the opportunity or project." />
            </label>
            <button className="premium-button w-full" type="submit">
              <Send size={18} />
              Send Message
            </button>
          </div>
        </m.form>
      </div>

      <footer className="mt-20 py-8 text-center text-sm font-semibold text-slate-500">
        © 2026 Jagadeesh. Built with React, Tailwind CSS, and a passion for technology 1.
      </footer>
    </section>
  );
}

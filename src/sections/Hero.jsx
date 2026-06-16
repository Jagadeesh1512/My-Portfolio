import { m } from 'framer-motion';
import { Cloud, Brain, Wifi, Github, Cpu, Code2, Monitor } from 'lucide-react';
import { rotatingTitles } from '../data/portfolio.js';
import { useRotatingText } from '../utils/useRotatingText.js';

export function Hero() {
  const title = useRotatingText(rotatingTitles, 1800);

  return (
    <section id="home" className="container-shell flex min-h-screen items-center">
      <div className="grid w-full items-center gap-12 py-16 lg:grid-cols-[1.02fr_0.98fr] lg:py-20">
        <m.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white/70 px-4 py-2 text-sm font-bold text-brand-700 shadow-sm backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-brand-600 shadow-[0_0_18px_rgba(37,99,235,0.8)]" />
            Future Software Engineer + Cloud Builder
          </div>

          <h1 className="mt-7 max-w-4xl text-5xl font-black tracking-tight text-slate-950 sm:text-6xl lg:text-7xl">
            Hi, I'm <span className="text-brand-600"><span className="whitespace-nowrap">Ippagunta Venkata</span>{' '}Jagadeesh</span>
          </h1>

          <div className="mt-5 flex min-h-12 items-center text-2xl font-extrabold text-slate-900 sm:text-3xl">
            <span className="mr-3 text-slate-500">I build as a</span>
            <m.span key={title} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="text-brand-600">
              {title}
            </m.span>
          </div>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Passionate about software development, cloud computing, AI-powered systems, and building real-world solutions that create impact.
          </p>
        </m.div>

        <m.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.75, delay: 0.1 }}
          className="relative mx-auto aspect-square w-full max-w-[560px] -translate-x-28 -translate-y-16"
        >
          {/* Background Grid and Glow */}
          <div className="absolute inset-0 rounded-full">
            <div className="absolute inset-0 rounded-full bg-gradient-radial from-brand-500/15 via-transparent to-transparent" />
            <svg className="absolute inset-0 h-full w-full opacity-5" viewBox="0 0 100 100">
              <defs>
                <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                  <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" />
                </pattern>
              </defs>
              <circle cx="50" cy="50" r="50" fill="url(#grid)" />
            </svg>
          </div>

          {/* Center Glowing Sphere */}
          <m.div
            animate={{
              y: [0, -12, 0],
              scale: [1, 1.02, 1],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          >
            {/* Outer Glow */}
            <div className="absolute inset-0 rounded-full bg-brand-500/20 blur-3xl" />
            <div className="absolute inset-0 rounded-full bg-brand-500/15 blur-2xl animate-pulse" />

            {/* Sphere Container */}
            <div className="relative h-48 w-48 rounded-full border-2 border-brand-300/50 bg-gradient-to-br from-white/90 via-brand-50/50 to-white/60 shadow-[0_0_60px_rgba(37,99,235,0.3),inset_0_0_60px_rgba(37,99,235,0.1)] backdrop-blur-xl flex items-center justify-center">
              {/* Inner Glow Lines */}
              <div className="absolute inset-8 rounded-full border border-brand-200/30 shadow-inner" />

              {/* Center Letter J */}
              <m.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="text-6xl font-black bg-gradient-to-br from-brand-600 to-brand-500 bg-clip-text text-transparent"
              >
                J
              </m.div>
            </div>
          </m.div>

          {/* Floating Technology Tags */}
          {[
            { label: 'AWS', icon: Cloud, x: -160, y: -110, duration: 5.5, delay: 0.1 },
            { label: 'AI', icon: Brain, x: 140, y: -40, duration: 4.8, delay: 0.22 },
            { label: 'Software', icon: Code2, x: -170, y: 100, duration: 5.2, delay: 0.18 },
            { label: 'AI Vision', icon: Brain, x: 110, y: -150, duration: 5.7, delay: 0.08 },
            { label: 'Web-Development', icon: Monitor, x: 180, y: 25, duration: 4.6, delay: 0.3 },
            { label: 'IoT', icon: Wifi, x: -80, y: 180, duration: 5.4, delay: 0.14 },
            { label: 'GitHub', icon: Github, x: 120, y: 200, duration: 4.9, delay: 0.25 },
          ].map((item) => {
            const Icon = item.icon;

            return (
              <m.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{
                  y: [item.y, item.y - 10, item.y + 4, item.y],
                  x: [item.x, item.x + 6, item.x - 4, item.x],
                  opacity: [0.7, 1, 0.85, 0.7],
                }}
                transition={{
                  duration: item.duration,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: item.delay,
                }}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
              >
                {/* Connecting Line */}
                <svg
                  className="absolute h-48 w-48 pointer-events-none"
                  viewBox="0 0 200 200"
                  style={{ left: '-100px', top: '-100px' }}
                >
                  <line
                    x1="100"
                    y1="100"
                    x2={100 + item.x / 2}
                    y2={100 + item.y / 2}
                    stroke="rgba(37,99,235,0.16)"
                    strokeWidth="1.25"
                    strokeDasharray="4,4"
                    opacity="0.55"
                  />
                </svg>

                <div className="relative">
                  <div className="absolute inset-0 rounded-full bg-brand-500/20 blur-md" />
                  <m.div
                    whileHover={{ scale: 1.05 }}
                    className="relative flex items-center gap-1.5 rounded-full border border-brand-300/45 bg-white/90 px-3 py-1.5 shadow-[0_0_18px_rgba(37,99,235,0.16)] backdrop-blur-xl transition cursor-pointer"
                  >
                    <Icon size={14} className="text-brand-600" />
                    <span className="text-xs font-bold text-slate-900">{item.label}</span>
                  </m.div>
                </div>
              </m.div>
            );
          })}
        </m.div>
      </div>
    </section>
  );
}

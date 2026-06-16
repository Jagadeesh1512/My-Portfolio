import { Menu, Send, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { navItems } from '../data/portfolio.js';

export function Navbar({ activeSection }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navigate = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5">
      <nav
        className={`container-shell flex h-16 items-center justify-between rounded-full border transition-all duration-300 ${
          scrolled ? 'border-blue-200 bg-gradient-to-r from-blue-100 via-blue-50 to-blue-100 shadow-card' : 'border-blue-200 bg-gradient-to-r from-blue-100 via-blue-50 to-blue-100'
        }`}
      >
        <button onClick={() => navigate('home')} className="text-lg font-black tracking-tight -ml-3 text-brand-600">
          Ippaguta Venkata Jagadeesh
        </button>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => navigate(item.id)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                activeSection === item.id ? 'bg-brand-600 text-white shadow-glow' : 'text-slate-600 hover:bg-brand-50 hover:text-brand-700'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button onClick={() => navigate('contact')} className="premium-button hidden px-5 py-2.5 sm:inline-flex">
            <Send size={16} />
            Contact Me
          </button>
          <button
            onClick={() => setOpen((value) => !value)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-900 shadow-sm lg:hidden"
            aria-label="Toggle navigation"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="container-shell mt-2 lg:hidden">
          <div className="glass-panel grid gap-1 rounded-3xl p-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => navigate(item.id)}
                className={`rounded-2xl px-4 py-3 text-left text-sm font-semibold ${
                  activeSection === item.id ? 'bg-brand-600 text-white' : 'text-slate-700 hover:bg-brand-50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

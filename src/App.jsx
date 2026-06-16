import { Suspense, lazy, useEffect, useState } from 'react';
import { Navbar } from './components/Navbar.jsx';
import { Hero } from './sections/Hero.jsx';
import { AmbientBackground } from './components/AmbientBackground.jsx';
import { SectionFallback } from './components/SectionFallback.jsx';

const About = lazy(() => import('./sections/About.jsx'));
const Skills = lazy(() => import('./sections/Skills.jsx'));
const Projects = lazy(() => import('./sections/Projects.jsx'));
const Achievement = lazy(() => import('./sections/Achievement.jsx'));
const Leadership = lazy(() => import('./sections/Leadership.jsx'));
const Contact = lazy(() => import('./sections/Contact.jsx'));

const sections = ['home', 'about', 'skills', 'projects', 'achievement', 'leadership', 'contact'];

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      for (const id of sections) {
        const element = document.getElementById(id);
        if (!element) continue;
        const rect = element.getBoundingClientRect();
        // Highlight section if it's in the middle half of viewport
        if (rect.top < window.innerHeight * 0.5 && rect.bottom > window.innerHeight * 0.5) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Call once on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-white text-slate-950">
      <AmbientBackground />
      <Navbar activeSection={activeSection} />
      <main className="relative z-10">
        <Hero />
        <Suspense fallback={<SectionFallback />}>
          <About />
          <Skills />
          <Projects />
          <Achievement />
          <Leadership />
          <Contact />
        </Suspense>
      </main>
    </div>
  );
}

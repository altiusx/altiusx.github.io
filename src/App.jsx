import { useState, useEffect } from 'react';
import useEasterEgg from './hooks/useEasterEgg';
import TerminalModal from './modals/TerminalModal';
import TravelModal from './modals/TravelModal';
import ProjectsModal from './modals/ProjectsModal';
import ArtModal from './modals/ArtModal';
import HeroCard from './components/cards/HeroCard';
import EduCard from './components/cards/EduCard';
import TechCard from './components/cards/TechCard';
import TravelCard from './components/cards/TravelCard';
import ArtCard from './components/cards/ArtCard';
import SocialLinkCard from './components/cards/SocialLinkCard';
import LofiCard from './components/cards/LofiCard';
import ThemeToggle from './components/ThemeToggle';
import Typewriter from './components/Typewriter';
import Toast from './components/Toast';
import { monoLabelCaps } from './styles/stylingPatterns';

const App = () => {
  const [showTerminal, setShowTerminal] = useState(false);
  const easterEggActive = useEasterEgg();
  const [showToast, setShowToast] = useState(false);
  const [showTravelModal, setShowTravelModal] = useState(false);
  const [showProjectsModal, setShowProjectsModal] = useState(false);
  const [showArtModal, setShowArtModal] = useState(false);

  useEffect(() => {
    if (easterEggActive) {
      const timer = setTimeout(() => {
        setShowToast(true);
      }, 0);
      return () => clearTimeout(timer);
    }
  }, [easterEggActive]);
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-hideout-bg text-slate-900 dark:text-hideout-text p-4 md:p-8 font-sans selection:bg-hideout-accent selection:text-white">
      <Toast
        message="ACHIEVEMENT UNLOCKED: Stargazer ✨"
        show={showToast}
        onClose={() => setShowToast(false)}
      />
      <div
        className={`fixed inset-0 bg-constellations z-0 pointer-events-none
          ${easterEggActive ? 'opacity-30' : 'opacity-0'}
        `}
      />
      <div className="max-w-6xl mx-auto relative z-10">
        {/* HEADER */}
        <header className="mb-12 flex justify-between items-end">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white transition-colors">
              Chris Choong
            </h1>
            <div className="text-hideout-accent font-mono mt-1 h-6 flex items-center">
              <span className="mr-2">&gt;</span>
              <Typewriter
                words={[
                  'software_engineer',
                  'wannabe_artist',
                  'coffee_enthusiast',
                  'aspiring_student',
                  'night_owl',
                ]}
                typeSpeed={80}
                deleteSpeed={40}
                pauseTime={2000}
              />
            </div>
          </div>
          <div className="flex gap-4 items-center">
            <ThemeToggle />
          </div>
        </header>

        {/* BENTO GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[180px] ">
          {/* 1. HERO BLOCK */}
          <HeroCard />

          {/* 2. EDUCATION / STATUS */}
          <EduCard onClick={() => setShowTerminal(true)} />

          {/* 3. TECH STACK */}
          <TechCard onClick={() => setShowProjectsModal(true)} />

          {/* 4. TRAVEL LOG */}
          <TravelCard onClick={() => setShowTravelModal(true)} />

          {/* 5. ART & CREATIVE */}
          <ArtCard onClick={() => setShowArtModal(true)} />

          {/* 6. MUSIC PLAYER */}
          <LofiCard />

          {/* 7. SOCIALS */}
          <SocialLinkCard />

          {/* RENDER THE MODALS AT THE BOTTOM */}
          <TerminalModal isOpen={showTerminal} onClose={() => setShowTerminal(false)} />
          <ProjectsModal isOpen={showProjectsModal} onClose={() => setShowProjectsModal(false)} />
          <TravelModal isOpen={showTravelModal} onClose={() => setShowTravelModal(false)} />
          <ArtModal isOpen={showArtModal} onClose={() => setShowArtModal(false)} />
        </div>

        <footer className="mt-20 text-center text-slate-400 dark:text-hideout-muted text-sm font-mono">
          <span className={monoLabelCaps}>© 2026 Christopher Choong. Built with React & Vite.</span>
        </footer>
      </div>
    </div>
  );
};

export default App;

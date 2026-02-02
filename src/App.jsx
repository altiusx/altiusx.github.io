import React, { useState } from 'react';
import {
  Github,
  Linkedin,
  Instagram,
  MapPin,
  Palette,
  Terminal,
  LaptopMinimal,
  Camera,
  Compass,
  Database,
  Server,
} from 'lucide-react';
import MusicPlayerWidget from './components/MusicPlayer';
import ThemeToggle from './components/ThemeToggle';
import Card from './components/Card';
import Typewriter from './components/Typewriter';
import useEasterEgg from './hooks/useEasterEgg';
import TerminalModal from './modals/TerminalModal';
import Toast from './components/Toast';
import SocialButton from './components/SocialButton';
import TravelModal from './modals/TravelModal';
import ProjectsModal from './modals/ProjectsModal';

const App = () => {
  const [showTerminal, setShowTerminal] = useState(false);
  const easterEggActive = useEasterEgg();
  const [showToast, setShowToast] = useState(false);
  const [showTravelModal, setShowTravelModal] = useState(false);
  const [showProjectsModal, setShowProjectsModal] = useState(false);

  // label styles
  const modalButton =
    'absolute bottom-5 right-5 w-12 h-12 rounded-full bg-orange-100 dark:bg-hideout-accent/20 flex items-center justify-center mb-4 transition-all hover:scale-110 hover:bg-orange-200 dark:hover:bg-hideout-accent/30 cursor-pointer';
  const cardLabelPosition =
    'lg:col-span-1 flex flex-col justify-between group hover:ring-2 hover:ring-hideout-accent/50 transition-all bg-gradient-to-b dark:from-hideout-card dark:to-[#162032]';
  const monoLabelPosition = 'flex items-center gap-2 mb-1';
  const monoLabel =
    'text-xs font-mono text-hideout-accent group-hover:text-hideout-accent transition-colors';
  const monoLabelCaps = 'text-[10px] font-mono text-hideout-accent uppercase tracking-widest';
  const statusLabel =
    'bg-green-100 text-green-700 border-green-200 dark:bg-green-500/10 dark:text-green-400 dark:border-green-500/20 text-xs font-mono py-1 px-2 rounded-full border';

  React.useEffect(() => {
    if (easterEggActive) {
      setShowToast(true);
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
                  'budding_artist',
                  'pc_builder',
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
          <Card className="lg:col-span-2 lg:row-span-2 flex flex-col justify-between group bg-gradient-to-b dark:from-hideout-card dark:to-[#162032]">
            <div className="z-10">
              <h2 className="text-3xl font-bold mb-2 text-slate-900 dark:text-white">About Me</h2>
              <p className="text-slate-600 dark:text-hideout-muted leading-relaxed">
                Currently a Senior Software Engineer at{' '}
                <span className="text-slate-900 dark:text-white font-semibold">DSTA</span>. Focusing
                on full-stack architecture and national defence solutions.
              </p>
            </div>
            {/* Decoration */}
            <div className="absolute right-0 bottom-0 w-32 h-32 bg-gradient-to-tl from-orange-100/50 dark:from-hideout-accent/20 to-transparent rounded-tl-full transition-colors" />
          </Card>

          {/* 2. EDUCATION / STATUS */}
          <Card className="lg:col-span-1 lg:row-span-2 flex flex-col justify-between bg-gradient-to-b from-white to-zinc-50 dark:from-hideout-card dark:to-[#162032]">
            <div>
              <span className={statusLabel}>ACTIVE STATUS</span>
              <h3 className="text-xl font-bold mt-4 text-slate-900 dark:text-white">
                M.Tech Software Engineering
              </h3>
              <p className={'text-sm text-slate-500 dark:text-hideout-muted mt-2'}>
                NUS-ISS (2026-current)
              </p>

              {/* Hidden on Mobile */}
              <ul className=" hidden md:block mt-6 space-y-3 text-sm text-slate-600 dark:text-hideout-muted">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-hideout-accent" /> Architecting
                  Software Solutions
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-hideout-accent" /> Advanced DevOps
                  Practices
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-hideout-accent" /> Agile Methodology
                </li>
              </ul>
            </div>

            <button
              onClick={() => setShowTerminal(true)}
              className={modalButton}
              title="View System Logs (Education & History)"
            >
              <Terminal className="text-hideout-accent" size={24} />
            </button>
          </Card>

          {/* 3. TECH STACK */}
          <Card className={cardLabelPosition}>
            <div className={monoLabelPosition}>
              <Database size={16} className="text-hideout-accent" />
              <span className={monoLabelCaps}>Tech_Arsenal</span>
            </div>
            <div className="absolute -top-12 -right-12 text-slate-100 dark:text-white/5 z-0 pointer-events-none">
              <Server
                size={140}
                strokeWidth={0.5}
                className="transition-transform duration-[3s] ease-in-out"
              />
            </div>
            <div className="flex flex-wrap gap-2 pr-14">
              {['React', 'Angular', 'Python', 'TypeScript', 'Java', 'MongoDB', 'Spring Boot'].map(
                (tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 text-[10px] rounded border transition-colors
                  bg-zinc-100 border-zinc-200 text-slate-700 
                  dark:bg-white/5 dark:border-white/5 dark:text-hideout-text"
                  >
                    {tech}
                  </span>
                )
              )}
            </div>
            <button
              onClick={() => setShowProjectsModal(true)}
              className={modalButton}
              title="Open Past Projects Gallery"
            >
              <LaptopMinimal className="text-hideout-accent" size={24} />
            </button>
          </Card>

          {/* 4. HOBBY/PHOTOS PLACEHOLDER */}
          <Card className={cardLabelPosition}>
            {/* Wrap the content in a div that triggers the click */}
            <div
              className="h-full flex flex-col justify-between"
              // onClick={() => setShowTravelModal(true)}
            >
              <div className={monoLabelPosition}>
                <MapPin size={16} className="text-hideout-accent" />
                <span className={monoLabelCaps}>Travel_Log</span>
              </div>
              <div className="absolute -top-12 -right-12 text-slate-100 dark:text-white/5 z-0 pointer-events-none">
                <Compass
                  size={140}
                  strokeWidth={0.5}
                  className="transition-transform duration-[3s] ease-in-out group-hover:rotate-45"
                />
              </div>

              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">Singapore</h3>
                <p className={monoLabel}>base_of_ops</p>
              </div>
            </div>
            <button
              onClick={() => setShowTravelModal(true)}
              className={modalButton}
              title="Open Travel Gallery"
            >
              <Camera className="text-hideout-accent" size={24} />
            </button>
          </Card>

          {/* 5. ART & CREATIVE */}
          <Card className="lg:col-span-2 relative group cursor-pointer overflow-hidden !p-0">
            {/* Replace this bg-slate-800 with actual image path later */}
            <div className="absolute inset-0 bg-slate-800 dark:bg-hideout-card opacity-90 group-hover:scale-105 transition-transform duration-700"></div>

            <div className="relative z-10 flex flex-col justify-end h-full p-6 bg-gradient-to-t from-black/80 to-transparent">
              <div className={monoLabelPosition}>
                <Palette size={16} className="text-hideout-accent" />
                <span className={monoLabelCaps}>Creative_Side</span>
              </div>
              <h3 className="text-xl font-bold text-white">Digital Illustration</h3>
              <p className="text-sm text-gray-300">
                Sketches, remastered works done with Sketchbook and Procreate.
              </p>
            </div>
          </Card>

          {/* 6. MUSIC PLAYER */}
          <Card className="lg:col-span-1 !p-0 group hover:ring-2 hover:ring-hideout-accent/50 transition-all">
            <MusicPlayerWidget />
          </Card>

          {/* 7. SOCIALS */}
          <Card className="lg:col-span-1 flex flex-col justify-center items-center gap-4 bg-gradient-to-b dark:from-hideout-card dark:to-[#162032]">
            <div className="flex gap-4">
              {/* GitHub Button */}
              <SocialButton href="https://github.com/altiusx" icon={Github} label="GitHub" />
              {/* LinkedIn Button */}
              <SocialButton
                href="https://linkedin.com/in/christopher-qing-yi-choong-739709203/"
                icon={Linkedin}
                label="LinkedIn"
              />
              <SocialButton
                href="https://instagram.com/altiusx"
                icon={Instagram}
                label="Instagram"
              />
            </div>
            <p className={monoLabel}>@altiusx</p>
          </Card>

          {/* RENDER THE MODAL AT THE BOTTOM */}
          <TerminalModal isOpen={showTerminal} onClose={() => setShowTerminal(false)} />
          <ProjectsModal isOpen={showProjectsModal} onClose={() => setShowProjectsModal(false)} />
          <TravelModal isOpen={showTravelModal} onClose={() => setShowTravelModal(false)} />
        </div>

        <footer className="mt-20 text-center text-slate-400 dark:text-hideout-muted text-sm font-mono">
          <span className={monoLabelCaps}>© 2026 Christopher Choong. Built with React & Vite.</span>
        </footer>
      </div>
    </div>
  );
};

export default App;

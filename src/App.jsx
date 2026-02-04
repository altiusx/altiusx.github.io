import { useState, useEffect } from 'react';
import {
  Github,
  Linkedin,
  Instagram,
  MapPin,
  Palette,
  Terminal,
  LaptopMinimal,
  Pencil,
  Compass,
  Brush,
  Server,
  Database,
  Eye,
  Image as ImageIcon,
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

  // common styles (to move to a separate file)
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
  const smallCardHeaderText = 'text-lg font-bold text-slate-900 dark:text-white';

  useEffect(() => {
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
          <Card className="lg:col-span-1 lg:row-span-2 relative overflow-hidden flex flex-col justify-between h-full">
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
            <div className="flex-grow font-mono text-[10px] leading-relaxed text-slate-500 dark:text-zinc-500 overflow-hidden">
              {/* Command Line (Visible on All) */}
              <div className="flex gap-2 mb-3">
                <span className="text-green-500 font-bold">➜</span>
                <span className="text-slate-700 dark:text-zinc-300">
                  detect_stack.sh <span className="text-slate-400">--verbose</span>
                </span>
              </div>

              {/* Log Output */}
              <div className="pl-4 border-l border-zinc-200 dark:border-white/10 ml-1.5 space-y-1.5">
                <p>
                  Target: <span className="text-hideout-accent">what_i_do_at_work</span>
                </p>
                <p className="opacity-50">Scanning environment...</p>

                {/* Hide these details on Mobile (hidden), Show on Desktop (md:block) --- */}
                <div className="hidden md:block">
                  {/* Group 1 */}
                  <div className="mt-3">
                    <p className="text-slate-400 dark:text-zinc-600 font-bold mb-0.5">
                      # Core_Frameworks
                    </p>
                    <p>[✓] React SSPA</p>
                    <p>[✓] Java Spring Boot</p>
                  </div>

                  {/* Group 2 */}
                  <div className="mt-3">
                    <p className="text-slate-400 dark:text-zinc-600 font-bold mb-0.5">
                      # Services_&_Tools
                    </p>
                    <p>[✓] MongoDB</p>
                    <p>[✓] Openshift</p>
                    <p>[✓] GitLab Runner (CI/CD)</p>
                  </div>
                </div>
                {/* ------------------------------------------------------------------------------- */}

                {/* Success Message (Visible on All) */}
                {/* On mobile, this will appear right after "Scanning environment..." */}
                <p className="mt-2 md:mt-4 animate-pulse text-hideout-accent">
                  &gt; Analysis complete. Awaiting input_
                </p>
              </div>
            </div>
            <button
              onClick={() => setShowProjectsModal(true)}
              className={modalButton}
              title="Open Past Projects Gallery"
            >
              <LaptopMinimal className="text-hideout-accent" size={24} />
            </button>
          </Card>

          {/* 4. TRAVEL LOG */}
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
                <h3 className={smallCardHeaderText}>Singapore</h3>
                <p className={monoLabel}>base_of_ops</p>
              </div>
            </div>
            <button
              onClick={() => setShowTravelModal(true)}
              className={modalButton}
              title="Open Travel Gallery"
            >
              <ImageIcon className="text-hideout-accent" size={24} />
            </button>
          </Card>

          {/* 5. ART & CREATIVE */}
          <Card className={cardLabelPosition}>
            <div className="h-full flex flex-col justify-between">
              <div className={monoLabelPosition}>
                <Pencil size={16} className="text-hideout-accent" />
                <span className={monoLabelCaps}>Creative_Side</span>
              </div>
              <div className="absolute -top-8 -right-8 text-slate-100 dark:text-white/5 z-0 pointer-events-none">
                <Palette
                  size={120}
                  strokeWidth={0.5}
                  className="transition-transform duration-[3s] ease-in-out group-hover:rotate-45"
                />
              </div>
              <div>
                <div>
                  <h3 className={smallCardHeaderText}>Digital Art</h3>
                  <p className={monoLabel}>Procreate • Sketchbook</p>
                </div>
              </div>
              <button
                onClick={() => {
                  /* Open Art Gallery Modal if you have one */
                }}
                className={modalButton}
                title="Open Art Gallery"
              >
                <Brush className="text-hideout-accent" size={24} />
              </button>
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

          {/* RENDER THE MODALS AT THE BOTTOM */}
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

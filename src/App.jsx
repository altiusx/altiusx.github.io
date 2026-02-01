import React from 'react';
import { Github, Linkedin, MapPin, Palette, Terminal } from 'lucide-react';
import MusicPlayerWidget from './components/MusicPlayer';
import ThemeToggle from './components/ThemeToggle';
import Card from './components/Card';
import Typewriter from './components/Typewriter';

const App = () => {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-hideout-bg text-slate-900 dark:text-hideout-text p-4 md:p-8 font-sans selection:bg-hideout-accent selection:text-white">
      <div className="max-w-6xl mx-auto">
        {/* HEADER */}
        <header className="mb-12 flex justify-between items-end">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white transition-colors">
              Christopher Choong
            </h1>
            {/* <p className="text-hideout-accent font-mono mt-1">software_engineer • artist</p> */}
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[180px]">
          {/* 1. HERO BLOCK (DSTA) */}
          <Card className="lg:col-span-2 lg:row-span-2 flex flex-col justify-between group">
            <div className="z-10">
              <div className="w-12 h-12 rounded-full bg-orange-100 dark:bg-hideout-accent/20 flex items-center justify-center mb-4 transition-colors">
                <Terminal className="text-hideout-accent" size={24} />
              </div>
              <h2 className="text-3xl font-bold mb-2 text-slate-900 dark:text-white">
                Building Resilient Systems
              </h2>
              <p className="text-slate-600 dark:text-hideout-muted leading-relaxed">
                Currently Engineering at{' '}
                <span className="text-slate-900 dark:text-white font-semibold">DSTA</span>. Focusing
                on full-stack architecture and national defense solutions.
              </p>
            </div>
            {/* Decoration */}
            <div className="absolute right-0 bottom-0 w-32 h-32 bg-gradient-to-tl from-orange-100/50 dark:from-hideout-accent/20 to-transparent rounded-tl-full transition-colors" />
          </Card>

          {/* 2. EDUCATION / STATUS (MTech) */}
          <Card className="lg:col-span-1 lg:row-span-2 flex flex-col justify-between bg-gradient-to-b from-white to-zinc-50 dark:from-hideout-card dark:to-[#162032]">
            <div>
              <span className="bg-green-100 text-green-700 border-green-200 dark:bg-green-500/10 dark:text-green-400 dark:border-green-500/20 text-xs font-mono py-1 px-2 rounded-full border">
                ACTIVE STATUS
              </span>
              <h3 className="text-xl font-bold mt-4 text-slate-900 dark:text-white">
                MTech Software Engineering
              </h3>
              <p className="text-sm text-slate-500 dark:text-hideout-muted mt-2">
                NUS-ISS (2026-current)
              </p>

              <ul className="mt-6 space-y-3 text-sm text-slate-600 dark:text-hideout-muted">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-hideout-accent" /> System Architecting
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-hideout-accent" /> Cloud Native Comp.
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-hideout-accent" /> Agile Methodology
                </li>
              </ul>
            </div>
          </Card>

          {/* 3. SOCIALS */}
          <Card className="lg:col-span-1 flex flex-col justify-center items-center gap-4 hover:bg-zinc-50 dark:hover:bg-hideout-card/80 cursor-pointer group">
            <div className="flex gap-4">
              {/* GitHub Button */}
              <a
                href="https://github.com/altiusx"
                target="_blank"
                className="p-3 bg-zinc-100 dark:bg-white/5 rounded-full hover:scale-110 text-slate-700 dark:text-white transition-all"
              >
                <Github size={24} />
              </a>
              {/* LinkedIn Button */}
              <a
                href="https://linkedin.com"
                target="_blank"
                className="p-3 bg-zinc-100 dark:bg-white/5 rounded-full hover:text-blue-600 dark:hover:text-blue-400 hover:scale-110 text-slate-700 dark:text-white transition-all"
              >
                <Linkedin size={24} />
              </a>
            </div>
            <p className="text-xs font-mono text-slate-400 dark:text-hideout-muted group-hover:text-hideout-accent transition-colors">
              @altiusx
            </p>
          </Card>

          {/* 4. MAP */}
          <Card className="lg:col-span-1 flex flex-col justify-between">
            <MapPin className="text-slate-400 dark:text-hideout-muted" />
            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">Singapore</h3>
              <p className="text-xs text-slate-500 dark:text-hideout-muted">based in Serangoon</p>
            </div>
          </Card>

          {/* 5. ART & CREATIVE */}
          <Card className="lg:col-span-2 relative group cursor-pointer overflow-hidden !p-0">
            {/* Replace this bg-slate-800 with your actual image path later */}
            <div className="absolute inset-0 bg-slate-800 dark:bg-hideout-card opacity-90 group-hover:scale-105 transition-transform duration-700">
              {/* Use an <img /> tag here for your art */}
            </div>

            <div className="relative z-10 flex flex-col justify-end h-full p-6 bg-gradient-to-t from-black/80 to-transparent">
              <div className="flex items-center gap-2 mb-1">
                <Palette size={16} className="text-hideout-accent" />
                <span className="text-xs font-mono text-hideout-accent">CREATIVE</span>
              </div>
              <h3 className="text-xl font-bold text-white">Digital Illustration</h3>
              <p className="text-sm text-gray-300">Sketches, remastered works & Procreate.</p>
            </div>
          </Card>

          {/* 6. TECH STACK */}
          <Card className="lg:col-span-1 flex flex-col justify-center">
            <h3 className="text-[10px] font-mono text-slate-400 dark:text-hideout-muted mb-4 uppercase tracking-wider">
              Tech Arsenal
            </h3>
            <div className="flex flex-wrap gap-2">
              {['React', 'Angular', 'Python', 'Tailwind', 'Node.js', 'Bazzite', 'SQL'].map(
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
          </Card>

          {/* 7. MUSIC PLAYER */}
          <Card className="lg:col-span-1 !p-0">
            <MusicPlayerWidget />
          </Card>
        </div>

        <footer className="mt-20 text-center text-slate-400 dark:text-hideout-muted text-sm font-mono">
          <p>© 2026 Christopher Choong. Built with React & Vite.</p>
        </footer>
      </div>
    </div>
  );
};

export default App;

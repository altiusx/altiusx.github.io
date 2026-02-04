import React from 'react';
import Card from '../Card';
import { Code, Plane, Palette, Headphones } from 'lucide-react';

const HeroCard = () => {
  return (
    <Card className="lg:col-span-2 lg:row-span-2 flex flex-col justify-between group bg-gradient-to-b dark:from-hideout-card dark:to-[#162032] overflow-hidden relative">
      {/* 1. TOP SECTION: Bio */}
      <div className="z-10 relative">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl md:text-4xl font-bold text-slate-900 dark:text-white tracking-tight flex items-center gap-3">
            About Me
            {/* Status Dot: h-2 (8px) on Mobile, h-3 (12px) on Desktop */}
            <span className="flex h-2 w-2 md:h-3 md:w-3 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-full w-full bg-green-500"></span>
            </span>
          </h2>
        </div>

        <p className="text-slate-600 dark:text-hideout-muted leading-relaxed text-sm md:text-base max-w-xl">
          Currently a Senior Software Engineer at{' '}
          <span className="text-slate-900 dark:text-white font-semibold">DSTA</span>. Focusing on
          full-stack architecture, C2 integration, and building scalable systems.
        </p>
      </div>

      {/* 2. DESKTOP ONLY: Static Summary Grid */}
      <div className="hidden lg:block pt-8 mt-auto z-10">
        <p className="text-[10px] font-mono uppercase tracking-widest text-slate-400 dark:text-zinc-600 mb-3 ml-1">
          Core_Modules_Hobbies_Loaded:
        </p>

        <div className="grid grid-cols-4 gap-3">
          {/* Tech */}
          <div className="p-3 rounded-lg bg-zinc-100 dark:bg-black/20 border border-zinc-200 dark:border-white/5 backdrop-blur-sm flex flex-col items-center justify-center gap-2 text-center">
            <Code size={20} className="text-slate-400 dark:text-zinc-500" />
            <span className="text-xs font-bold text-slate-700 dark:text-zinc-300">Tech</span>
          </div>

          {/* Travel */}
          <div className="p-3 rounded-lg bg-zinc-100 dark:bg-black/20 border border-zinc-200 dark:border-white/5 backdrop-blur-sm flex flex-col items-center justify-center gap-2 text-center">
            <Plane size={20} className="text-slate-400 dark:text-zinc-500" />
            <span className="text-xs font-bold text-slate-700 dark:text-zinc-300">Travel</span>
          </div>

          {/* Art */}
          <div className="p-3 rounded-lg bg-zinc-100 dark:bg-black/20 border border-zinc-200 dark:border-white/5 backdrop-blur-sm flex flex-col items-center justify-center gap-2 text-center">
            <Palette size={20} className="text-slate-400 dark:text-zinc-500" />
            <span className="text-xs font-bold text-slate-700 dark:text-zinc-300">Art</span>
          </div>

          {/* Lofi */}
          <div className="p-3 rounded-lg bg-zinc-100 dark:bg-black/20 border border-zinc-200 dark:border-white/5 backdrop-blur-sm flex flex-col items-center justify-center gap-2 text-center">
            <Headphones size={20} className="text-slate-400 dark:text-zinc-500" />
            <span className="text-xs font-bold text-slate-700 dark:text-zinc-300">Lofi</span>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default HeroCard;

import React from 'react';
import { motion } from 'framer-motion';

const ThemeToggle = () => {
  const [theme, setTheme] = React.useState(localStorage.getItem('theme') || 'dark');

  React.useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const isDark = theme === 'dark';

  // ANIMATION CONFIG
  // We use a spring transition to match the "physics" feel of the original article
  const springConfig = { type: 'spring', stiffness: 70, damping: 15 };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors group relative"
      aria-label="Toggle Theme"
    >
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="stroke-slate-900 dark:stroke-white fill-slate-900 dark:fill-white"
        animate={{
          rotate: isDark ? 30 : 90, // Rotates slightly when changing
        }}
        transition={springConfig}
      >
        <mask id="moon-mask">
          <rect x="0" y="0" width="100%" height="100%" fill="white" />
          {/* The "Eclipse" Circle: Moves over the sun to create the crescent */}
          <motion.circle
            cx="12"
            cy="4"
            r="9"
            fill="black"
            animate={{
              cx: isDark ? 12 : 30, // 12 = center (eclipse), 30 = far away (sun)
              cy: isDark ? 4 : 0,
            }}
            transition={springConfig}
          />
        </mask>

        {/* The Main Body (Sun/Moon) */}
        <motion.circle
          cx="12"
          cy="12"
          fill="currentColor"
          mask="url(#moon-mask)"
          animate={{
            r: isDark ? 9 : 5, // Sun is small (5), Moon is large (9)
          }}
          transition={springConfig}
        />

        {/* The Sun Rays */}
        <motion.g
          stroke="currentColor"
          animate={{
            opacity: isDark ? 0 : 1, // Hide rays in dark mode
            scale: isDark ? 0 : 1, // Shrink rays in dark mode
          }}
          transition={springConfig}
        >
          <line x1="12" y1="1" x2="12" y2="3" />
          <line x1="12" y1="21" x2="12" y2="23" />
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
          <line x1="1" y1="12" x2="3" y2="12" />
          <line x1="21" y1="12" x2="23" y2="12" />
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
        </motion.g>
      </motion.svg>
    </button>
  );
};

export default ThemeToggle;

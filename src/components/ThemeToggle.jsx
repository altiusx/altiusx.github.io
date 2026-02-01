import React from 'react';
import { flushSync } from 'react-dom';
import { motion } from 'framer-motion';

const ThemeToggle = () => {
  const [theme, setTheme] = React.useState(localStorage.getItem('theme') || 'dark');
  const isDark = theme === 'dark';

  React.useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme, isDark]);

  const toggleTheme = async (e) => {
    // 1. Check if the browser supports the API (Chrome/Edge/Arc)
    if (!document.startViewTransition) {
      setTheme(isDark ? 'light' : 'dark');
      return;
    }

    // 2. Calculate distance to furthest corner from the click
    // This ensures the circle grows enough to cover the whole screen
    const x = e.clientX;
    const y = e.clientY;
    const endRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    );

    // 3. Take the snapshot
    const transition = document.startViewTransition(() => {
      // Force React to update the DOM *now* so the "New" snapshot is correct
      flushSync(() => {
        setTheme(isDark ? 'light' : 'dark');
      });
    });

    // 4. Run the animation logic once the snapshot is ready
    await transition.ready;

    // Animate the "New" view clipping in a circle
    const clipPath = [`circle(0px at ${x}px ${y}px)`, `circle(${endRadius}px at ${x}px ${y}px)`];

    document.documentElement.animate(
      {
        clipPath: clipPath,
      },
      {
        duration: 700,
        easing: 'ease-in',
        // This targets the "New" snapshot (the incoming theme)
        pseudoElement: '::view-transition-new(root)',
      }
    );
  };

  // ANIMATION CONFIG (Icon Physics)
  const springConfig = { type: 'spring', stiffness: 75, damping: 15 };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors group relative z-50"
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
          rotate: isDark ? 40 : 90,
        }}
        transition={springConfig}
      >
        <mask id="moon-mask">
          <rect x="0" y="0" width="100%" height="100%" fill="white" />
          <motion.circle
            cx="12"
            cy="4"
            r="9"
            fill="black"
            animate={{
              cx: isDark ? 12 : 30,
              cy: isDark ? 4 : 0,
            }}
            transition={springConfig}
          />
        </mask>
        <motion.circle
          cx="12"
          cy="12"
          fill="currentColor"
          mask="url(#moon-mask)"
          animate={{
            r: isDark ? 9 : 5,
          }}
          transition={springConfig}
        />
        <motion.g
          stroke="currentColor"
          animate={{
            opacity: isDark ? 0 : 1,
            scale: isDark ? 0 : 1,
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

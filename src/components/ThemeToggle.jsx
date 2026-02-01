import React, { useRef, useState } from 'react';
import { flushSync } from 'react-dom';
import { motion } from 'framer-motion';

const ThemeToggle = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');
  const isDark = theme === 'dark';

  // STATE
  const timerRef = useRef(null);
  const ignoreClickRef = useRef(false); // <--- NEW: The "Don't Toggle" Flag
  const [isHolding, setIsHolding] = useState(false);

  React.useEffect(() => {
    if (isDark) document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
    localStorage.setItem('theme', theme);
  }, [theme, isDark]);

  // --- LONG PRESS HANDLERS ---
  const startPress = () => {
    ignoreClickRef.current = false; // Reset flag on fresh press
    setIsHolding(true);

    timerRef.current = setTimeout(() => {
      // 1. FIRE THE EVENT
      window.dispatchEvent(new Event('unlock-constellations'));

      // 2. SET THE FLAG: Tell MouseUp to ignore the next click
      ignoreClickRef.current = true;

      // 3. KILL THE GLOW: Immediately stop the visual effect
      setIsHolding(false);
    }, 2000);
  };

  const cancelPress = () => {
    setIsHolding(false);
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
  };

  // --- TOGGLE LOGIC (Short Click) ---
  const toggleTheme = async (e) => {
    cancelPress(); // Ensure timer is dead

    // THE FIX: If this was a long press, STOP here.
    if (ignoreClickRef.current) {
      ignoreClickRef.current = false; // Reset for next time
      return;
    }

    // ... Standard View Transition Logic ...
    if (!document.startViewTransition) {
      setTheme(isDark ? 'light' : 'dark');
      return;
    }

    const x = e.clientX;
    const y = e.clientY;
    const endRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    );

    const transition = document.startViewTransition(() => {
      flushSync(() => {
        setTheme(isDark ? 'light' : 'dark');
      });
    });

    await transition.ready;
    const clipPath = [`circle(0px at ${x}px ${y}px)`, `circle(${endRadius}px at ${x}px ${y}px)`];
    document.documentElement.animate(
      { clipPath: clipPath },
      { duration: 500, easing: 'ease-in', pseudoElement: '::view-transition-new(root)' }
    );
  };

  // ANIMATION CONFIG
  const springConfig = { type: 'spring', stiffness: 100, damping: 15 };

  return (
    <button
      onMouseDown={startPress}
      onMouseUp={toggleTheme} // <--- Cleaned up: logic is inside the function
      onMouseLeave={cancelPress}
      onTouchStart={startPress}
      onTouchEnd={(e) => {
        e.preventDefault(); // Stop mobile ghost clicks
        toggleTheme(e);
      }}
      className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors group relative z-50 overflow-hidden"
      aria-label="Toggle Theme"
      // Remove default tap highlight on mobile
      style={{ WebkitTapHighlightColor: 'transparent' }}
    >
      {/* GLOW EFFECT (Only shows while holding) */}
      {isHolding && (
        <motion.div
          initial={{ scale: 0, opacity: 0.2 }}
          animate={{ scale: 2 }}
          transition={{ duration: 2 }} // Match the timer duration (2s)
          className="absolute inset-0 bg-hideout-accent rounded-full pointer-events-none"
        />
      )}

      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="stroke-slate-900 dark:stroke-white fill-slate-900 dark:fill-white relative z-10"
        animate={{ rotate: isDark ? 40 : 90 }}
        transition={springConfig}
      >
        <mask id="moon-mask">
          <rect x="0" y="0" width="100%" height="100%" fill="white" />
          <motion.circle
            cx="12"
            cy="4"
            r="9"
            fill="black"
            animate={{ cx: isDark ? 12 : 30, cy: isDark ? 4 : 0 }}
            transition={springConfig}
          />
        </mask>
        <motion.circle
          cx="12"
          cy="12"
          fill="currentColor"
          mask="url(#moon-mask)"
          animate={{ r: isDark ? 9 : 5 }}
          transition={springConfig}
        />
        <motion.g
          stroke="currentColor"
          animate={{ opacity: isDark ? 0 : 1, scale: isDark ? 0 : 1 }}
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

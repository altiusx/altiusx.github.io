import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const Toast = ({ message, show, onClose }) => {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000); // Disappear after 3 seconds
      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          className="fixed bottom-8 -translate-x-1/2 z-[100] flex items-center gap-3 px-6 py-3 rounded-full shadow-2xl border border-white/10 backdrop-blur-md"
          // Dynamic Colors: Dark grey in Light Mode, Deep Blue in Dark Mode
          style={{
            backgroundColor: 'var(--toast-bg)',
            color: 'var(--toast-text)',
          }}
        >
          {/* use a style block here for precise color mapping if not using Tailwind classes directly */}
          <div className="bg-zinc-900/90 dark:bg-hideout-card/90 text-white flex items-center gap-3 px-5 py-2.5 rounded-full border border-zinc-700 dark:border-hideout-accent/20 shadow-xl">
            <Sparkles
              size={18}
              className="text-yellow-400 dark:text-hideout-accent animate-pulse"
            />
            <span className="font-mono text-sm font-medium tracking-wide">{message}</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Toast;

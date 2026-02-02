import { motion, AnimatePresence } from 'framer-motion';

const CommonHeader = ({ isOpen, onClose, title, children, className = '' }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* 1. BACKDROP (Blurry & Dark) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* 2. THE WINDOW FRAME */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className={`fixed inset-0 m-auto z-50 w-full max-w-3xl h-[80vh] bg-white dark:bg-zinc-900 rounded-xl overflow-hidden shadow-2xl flex flex-col border border-zinc-800 ${className}`}
          >
            {/* 3. MAC-STYLE TITLE BAR (Standardized) */}
            <div className="p-2 flex items-center justify-between border-b border-zinc-800 shrink-0 select-none bg-inherit">
              <div className="flex gap-2 ml-2">
                {/* Red Button = Close */}
                <div
                  className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-400 cursor-pointer transition-colors"
                  onClick={onClose}
                />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              {/* Dynamic Title */}
              <div className="text-zinc-500 text-xs font-mono">{title}</div>
              <div className="w-10" /> {/* Spacer for centering */}
            </div>

            {/* 4. CONTENT AREA */}
            <div className="flex-1 overflow-hidden flex flex-col relative bg-inherit">
              {children}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CommonHeader;

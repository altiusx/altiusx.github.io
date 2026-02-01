import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
// import { X, Minus, Square } from 'lucide-react';

const TerminalModal = ({ isOpen, onClose }) => {
  const [lines, setLines] = useState([]);
  const contentRef = useRef(null);

  useEffect(() => {
    let isMounted = true;

    // THE DATA: Your career history as a raw JSON object
    const careerData = {
      current_status: {
        role: 'Senior Software Engineer',
        org: 'DSTA',
        focus: ['System Architecture', 'Nat. Defense'],
      },
      education: [
        {
          degree: 'MTech Software Engineering',
          school: 'NUS-ISS',
          year: '2026-Present',
          notes: 'Started Courses. Part Time Pending',
        },
        {
          degree: 'B.Eng Electrical & Electronic Eng',
          school: 'NTU',
          year: 'Class of 2021',
          specialization: 'Computer Engineering',
        },
      ],
      previous_logs: ['Systems Engineer', 'Business Analyst'],
    };

    const runSequence = async () => {
      // Reset lines at the start of sequence
      setLines([]);

      // Helper to add lines with delay
      const addLine = (text, delay = 100) =>
        new Promise((resolve) =>
          setTimeout(() => {
            setLines((prev) => [...prev, text]);
            resolve();
          }, delay)
        );

      await addLine('> initiatizing_handshake...', 300);
      await addLine('> connecting to host: ALTIUS_MAIN...', 400);
      await addLine('> access granted.', 200);
      await addLine('> fetch --history --verbose', 300);
      await addLine('----------------------------------------', 100);

      // Pretty print the JSON line by line so it looks like data streaming in
      const jsonString = JSON.stringify(careerData, null, 2);
      const jsonLines = jsonString.split('\n');

      for (let line of jsonLines) {
        await addLine(line, 30); // Fast typing for data
      }

      await addLine('----------------------------------------', 100);
      await addLine('> end of transmission_', 100);
    };

    if (isOpen) {
      runSequence().then(() => {
        if (!isMounted) return;
      });
    }

    return () => {
      isMounted = false;
    };
  }, [isOpen]);

  // SCROLL TO BOTTOM auto-scroll
  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.scrollTop = contentRef.current.scrollHeight;
    }
  }, [lines]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
          {/* BACKDROP (Blurry) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* WINDOW */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="w-full max-w-2xl bg-[#0c0c0c] border border-zinc-800 rounded-lg shadow-2xl overflow-hidden relative z-10 font-mono text-sm md:text-base"
          >
            {/* TITLE BAR */}
            <div className="bg-zinc-900 p-2 flex items-center justify-between border-b border-zinc-800">
              <div className="flex gap-2 ml-2">
                <div
                  className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-400 cursor-pointer"
                  onClick={onClose}
                />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <div className="text-zinc-500 text-xs select-none">user@altiusx:~</div>
              <div className="w-10" /> {/* Spacer for balance */}
            </div>

            {/* TERMINAL BODY */}
            <div
              ref={contentRef}
              className="p-6 h-[60vh] overflow-y-auto text-green-400 selection:bg-green-900 selection:text-white"
              onClick={onClose} // Clicking content also closes it for better UX
            >
              {lines.map((line, i) => (
                <div key={i} className="whitespace-pre-wrap font-mono leading-relaxed">
                  {/* Simple Syntax Highlighting Logic */}
                  {line.includes(':') && !line.startsWith('>') ? (
                    <span>
                      <span className="text-blue-400">{line.split(':')[0]}:</span>
                      <span className="text-orange-300">{line.split(':').slice(1).join(':')}</span>
                    </span>
                  ) : (
                    line
                  )}
                </div>
              ))}
              {/* Blinking Cursor at the end */}
              <div className="mt-2 animate-pulse">_</div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default TerminalModal;

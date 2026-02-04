import React, { useEffect, useState, useRef } from 'react';
import CommonWrapper from './CommonWrapper';

const TerminalModal = ({ isOpen, onClose }) => {
  const [lines, setLines] = useState([]);
  const contentRef = useRef(null);

  useEffect(() => {
    let isMounted = true;

    // Data to display
    const careerData = {
      current_status: {
        role: 'Senior Software Engineer',
        org: 'DSTA',
        focus: ['System Architecture', 'C2 Integration', 'User Satisfaction'],
      },
      education: [
        {
          degree: 'M.Tech Software Engineering',
          school: 'NUS-ISS',
          year: '2026-Present',
          notes: 'Started Courses',
        },
        {
          degree: 'B.Eng Electrical & Electronic Engineering',
          school: 'NTU',
          year: 'Class of 2021',
          specialization: 'Computer Engineering',
        },
      ],
      previous_logs: ['Systems Engineer at DSTA', 'Business Analyst at Accenture'],
    };

    const runSequence = async () => {
      setLines([]);

      const addLine = (text, delay = 100) =>
        new Promise((resolve) =>
          setTimeout(() => {
            setLines((prev) => [...prev, text]);
            resolve();
          }, delay)
        );

      await addLine('> initiating_handshake...', 300);
      await addLine('> connecting to host: ALTIUSX_MAIN...', 400);
      await addLine('> access granted.', 200);
      await addLine('> fetch --history --verbose', 300);
      await addLine('----------------------------------------', 100);

      const jsonString = JSON.stringify(careerData, null, 2);
      const jsonLines = jsonString.split('\n');

      for (let line of jsonLines) {
        await addLine(line, 30);
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

  // SCROLL TO BOTTOM
  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.scrollTop = contentRef.current.scrollHeight;
    }
  }, [lines]);

  return (
    <CommonWrapper
      isOpen={isOpen}
      onClose={onClose}
      title="user@altiusx:~/career_edu_log"
      className="!bg-[#0c0c0c] border-zinc-800" // Black Background override
    >
      {/* 4. CONTENT BODY */}
      <div
        ref={contentRef}
        className="p-6 h-full overflow-y-auto text-green-400 font-mono text-sm md:text-base selection:bg-green-900 selection:text-white"
        onClick={onClose}
      >
        {lines.map((line, i) => (
          <div key={i} className="whitespace-pre-wrap leading-relaxed">
            {/* Syntax Highlighting */}
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
        {/* Blinking Cursor */}
        <div className="mt-2 animate-pulse">_</div>
      </div>
    </CommonWrapper>
  );
};

export default TerminalModal;

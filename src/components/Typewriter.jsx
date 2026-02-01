import React, { useState, useEffect } from 'react';

const Typewriter = ({
  words = [],
  typeSpeed = 80,
  deleteSpeed = 50,
  pauseTime = 1500, // How long to wait before deleting
}) => {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0); // Which word in the array are we on?
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[index % words.length];

    // DETERMINING THE SPEED
    // If deleting, go fast. If typing, go normal.
    let speed = isDeleting ? deleteSpeed : typeSpeed;

    const handleTyping = () => {
      if (isDeleting) {
        // DELETE LOGIC
        setText((prev) => prev.substring(0, prev.length - 1));
      } else {
        // TYPE LOGIC
        setText((prev) => currentWord.substring(0, prev.length + 1));
      }

      // STATE TRANSITIONS
      if (!isDeleting && text === currentWord) {
        // Finished typing the word -> Pause, then start deleting
        setTimeout(() => setIsDeleting(true), pauseTime);
      } else if (isDeleting && text === '') {
        // Finished deleting -> Move to next word, switch to typing mode
        setIsDeleting(false);
        setIndex((prev) => prev + 1);
      }
    };

    // The "Game Loop"
    // We only set the timeout if we aren't currently pausing at the end of a word
    // (The pause is handled by the setTimeout inside the 'if' block above)
    const timer = setTimeout(handleTyping, speed);

    // Cleanup to prevent memory leaks or weird overlaps
    return () => clearTimeout(timer);
  }, [text, isDeleting, index, words, typeSpeed, deleteSpeed, pauseTime]);

  return (
    <span className="font-mono">
      {text}
      <span className="animate-pulse text-hideout-accent">_</span>
    </span>
  );
};

export default Typewriter;

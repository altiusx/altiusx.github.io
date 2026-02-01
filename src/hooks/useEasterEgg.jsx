import { useEffect, useState, useCallback } from 'react';

const KONAMI_CODE = [
  'ArrowUp',
  'ArrowUp',
  'ArrowDown',
  'ArrowDown',
  'ArrowLeft',
  'ArrowRight',
  'ArrowLeft',
  'ArrowRight',
  'b',
  'a',
];

const useEasterEgg = () => {
  const [isActivated, setIsActivated] = useState(false);
  const [input, setInput] = useState([]);

  const activateEgg = useCallback(() => {
    setIsActivated(true);
    if (navigator.vibrate) navigator.vibrate([50, 50, 50]); // Triple buzz
    console.log('🌟 Constellation Mode Unlocked 🌟');
  }, []);

  useEffect(() => {
    // 1. Keyboard Listener (Keep Konami for desktop users)
    const handleKeyDown = (e) => {
      const newInput = [...input, e.key];
      if (newInput.length > KONAMI_CODE.length) newInput.shift();
      setInput(newInput);
      if (JSON.stringify(newInput) === JSON.stringify(KONAMI_CODE)) activateEgg();
    };

    // 2. Custom Event Listener (For the Long Press)
    const handleCustomEvent = () => activateEgg();

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('unlock-constellations', handleCustomEvent); // <--- LISTENS HERE

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('unlock-constellations', handleCustomEvent);
    };
  }, [input, activateEgg]);

  return isActivated;
};

export default useEasterEgg;

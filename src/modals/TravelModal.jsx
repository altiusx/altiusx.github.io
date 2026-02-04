import React, { useState, useRef, useEffect } from 'react';
import { MapPin, Camera } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { travelData } from '../data/travelData';
import CommonWrapper from './CommonWrapper';

const TravelModal = ({ isOpen, onClose }) => {
  const cities = Object.keys(travelData);
  const [activeCity, setActiveCity] = useState(cities[0]);

  // refs for auto-scrolling
  const mobileContainerRef = useRef(null);
  const cityRefs = useRef({});

  // updates the 'Active City' pill as you swipe on mobile
  const handleMobileScroll = () => {
    if (!mobileContainerRef.current) return;

    const container = mobileContainerRef.current;
    const scrollPosition = container.scrollLeft + container.clientWidth / 2; // centre

    // check which city section we are currently inside
    for (const city of cities) {
      const element = cityRefs.current[city];
      if (element) {
        const { offsetLeft, offsetWidth } = element;
        if (scrollPosition >= offsetLeft && scrollPosition < offsetLeft + offsetWidth) {
          if (activeCity !== city) setActiveCity(city);
          break;
        }
      }
    }
  };

  // clicking a tab jumps to that section on mobile
  const scrollToCity = (city) => {
    setActiveCity(city);
    // Mobile: Scroll to section
    if (window.innerWidth < 768 && cityRefs.current[city]) {
      cityRefs.current[city].scrollIntoView({ behavior: 'smooth', inline: 'start' });
    }
  };

  return (
    <CommonWrapper
      isOpen={isOpen}
      onClose={onClose}
      title="user@altiusx:~/travel_log"
      className="md:!max-w-5xl !bg-zinc-50 dark:!bg-[#0c0c0c] border-zinc-200 dark:border-zinc-800"
    >
      <div className="flex-1 overflow-hidden flex flex-col bg-inherit h-full">
        {/* HEADER */}
        <div className="p-4 md:p-6 pb-2 shrink-0 bg-inherit z-10 relative">
          <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <MapPin className="text-hideout-accent" /> Travel Gallery
          </h2>
          <p className="text-xs md:text-sm text-slate-500 dark:text-hideout-muted font-mono mt-1">
            git commit -m "Add new travel photos"
          </p>
        </div>

        {/* CITY TABS */}
        <div className="flex gap-2 md:gap-4 px-4 md:px-6 py-2 md:py-4 overflow-x-auto shrink-0 custom-scrollbar z-10 bg-inherit">
          {cities.map((city) => (
            <button
              key={city}
              onClick={() => scrollToCity(city)}
              className={`px-4 py-1.5 md:py-2 rounded-full text-xs font-mono transition-all whitespace-nowrap ${
                activeCity === city
                  ? 'bg-hideout-accent text-white shadow-lg shadow-orange-500/20'
                  : 'bg-zinc-100 dark:bg-white/5 text-slate-600 dark:text-slate-400 hover:bg-zinc-200 dark:hover:bg-white/10'
              }`}
            >
              {city}
            </button>
          ))}
        </div>

        {/* ===========================================================================
            MOBILE VIEW: Continuous Feed (Render All)
           =========================================================================== */}
        <div
          ref={mobileContainerRef}
          onScroll={handleMobileScroll}
          className="md:hidden flex-1 overflow-x-auto snap-x snap-mandatory flex items-center custom-scrollbar"
        >
          {cities.map((city) => (
            <div
              key={city}
              ref={(el) => (cityRefs.current[city] = el)}
              className="flex h-full shrink-0"
            >
              {travelData[city].map((photo) => (
                <div
                  key={photo.src}
                  className="w-[85vw] h-full shrink-0 snap-center p-4 flex items-center justify-center relative"
                >
                  <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-sm border border-white/5 bg-zinc-900">
                    <img
                      src={photo.src}
                      alt={photo.caption}
                      className="w-full h-full object-cover"
                    />
                    {/* Caption Overlay */}
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 pt-12">
                      <p className="text-white font-bold text-lg leading-tight">{photo.caption}</p>
                      <p className="text-zinc-400 text-xs font-mono mt-1 flex items-center gap-1">
                        <Camera size={12} /> {city}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* ===========================================================================
            DESKTOP VIEW: Grid Layout (Filtered by Active City)
           =========================================================================== */}
        <div className="hidden md:block flex-1 overflow-y-auto p-6 pt-0 custom-scrollbar">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pb-10">
            <AnimatePresence mode="popLayout">
              {travelData[activeCity].map((photo, index) => (
                <motion.div
                  key={photo.src}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.2, delay: index * 0.05 }}
                  className="group relative aspect-square rounded-lg overflow-hidden cursor-pointer bg-zinc-100 dark:bg-white/5"
                >
                  <img
                    src={photo.src}
                    alt={photo.caption}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-end p-4">
                    <p className="text-white text-sm font-mono font-bold opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                      {photo.caption}
                    </p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </CommonWrapper>
  );
};

export default TravelModal;

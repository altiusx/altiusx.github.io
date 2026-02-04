import React, { useState } from 'react';
import { Palette, Calendar, ZoomIn, Info, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { artData } from '../data/artData';
import CommonWrapper from './CommonWrapper';

// Helper for Cloudinary optimization
const getOptimizedUrl = (url, width = 'auto') => {
  if (!url.includes('cloudinary')) return url;
  return url.replace('/upload/', `/upload/f_auto,q_auto,w_${width}/`);
};

const ArtModal = ({ isOpen, onClose }) => {
  // Desktop State
  const [selectedArt, setSelectedArt] = useState(artData[0]);

  // Mobile State: Tracks which artwork has its details panel open (by ID)
  const [mobileDetailId, setMobileDetailId] = useState(null);

  // Toggle function for mobile tap
  const toggleMobileDetails = (id) => {
    if (mobileDetailId === id) {
      setMobileDetailId(null); // Close if already open
    } else {
      setMobileDetailId(id); // Open this one
    }
  };

  return (
    <CommonWrapper
      isOpen={isOpen}
      onClose={onClose}
      title="user@altiusx:~/art_gallery$"
      className="md:!max-w-5xl"
    >
      {/* =====================================================================================
          MOBILE VIEW: Horizontal Swipe Carousel
          Visible only on small screens (md:hidden)
      ===================================================================================== */}
      <div className="md:hidden w-full h-full overflow-x-auto snap-x snap-mandatory flex custom-scrollbar hide-scrollbar">
        {artData.map((art) => (
          <div
            key={art.id}
            className="min-w-full h-full snap-center relative flex items-center justify-center bg-[#0c0c0c] overflow-hidden"
            onClick={() => toggleMobileDetails(art.id)}
          >
            <img
              src={getOptimizedUrl(art.src, 'auto')}
              alt={art.title}
              className="max-w-full max-h-full object-contain p-2"
            />

            {/* Hint for interaction (only visible when details are closed) */}
            {mobileDetailId !== art.id && (
              <div className="absolute bottom-6 px-4 py-2 bg-black/50 backdrop-blur-md rounded-full text-xs font-mono text-zinc-400 flex items-center gap-2 pointer-events-none animate-pulse">
                <Info size={14} />
                <span>Tap for details</span>
              </div>
            )}

            {/* Slide Up Overlay */}
            <AnimatePresence>
              {mobileDetailId === art.id && (
                <motion.div
                  drag="y"
                  dragConstraints={{ top: 0, bottom: 0 }} // just stretch
                  dragElastic={{ top: 0, bottom: 0.5 }} // rubberband effect when pulling down
                  onDragEnd={(_, info) => {
                    // If dragged down more than 100px, close it
                    if (info.offset.y > 100) {
                      setMobileDetailId(null);
                    }
                  }}
                  initial={{ y: '100%' }}
                  animate={{ y: 0 }}
                  exit={{ y: '100%' }}
                  transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                  className="absolute bottom-0 left-0 right-0 bg-black/80 backdrop-blur-xl border-t border-white/10 p-6 rounded-t-2xl z-20"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="w-full flex justify-center mb-2 cursor-grab active:cursor-grabbing">
                    <div className="w-12 h-1 bg-white/20 rounded-full" />
                  </div>

                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-lg font-bold text-white">{art.title}</h3>
                      <p className="text-[10px] font-mono text-zinc-500">ID: ART_{art.id}</p>
                    </div>
                    <button
                      onClick={() => setMobileDetailId(null)}
                      className="p-1 bg-white/10 rounded-full text-zinc-400"
                    >
                      <X size={16} />
                    </button>
                  </div>

                  <p className="text-sm text-zinc-300 leading-relaxed mb-4">"{art.desc}"</p>

                  <div className="flex gap-4 text-xs text-zinc-400 font-mono">
                    <span className="flex items-center gap-1.5">
                      <Palette size={12} className="text-hideout-accent" /> {art.tool}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Calendar size={12} className="text-hideout-accent" /> {art.year}
                    </span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>

      {/* =====================================================================================
          DESKTOP VIEW: Split Inspector Panel
          Visible only on medium screens and up (hidden md:flex)
      ===================================================================================== */}
      <div className="hidden md:flex flex-row h-full overflow-hidden relative bg-[#0c0c0c]">
        {/* LEFT: Main Image View */}
        <div className="flex-1 h-full bg-zinc-900/50 relative flex items-center justify-center p-8">
          <motion.img
            key={selectedArt.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
            src={getOptimizedUrl(selectedArt.src, 'auto')}
            alt={selectedArt.title}
            className="w-auto h-full max-w-full object-contain shadow-2xl rounded-lg"
          />
        </div>

        {/* RIGHT: Inspector Panel */}
        <div className="w-80 h-full overflow-y-auto bg-[#111] border-l border-white/10 flex flex-col z-20 shrink-0">
          {/* Header */}
          <div className="p-5 border-b border-white/10">
            <h2 className="text-xl font-bold text-white leading-tight">{selectedArt.title}</h2>
            <p className="text-xs font-mono text-zinc-500 mt-2">
              ID: ART_{selectedArt.id.toString().padStart(3, '0')}
            </p>
          </div>

          {/* Content Body */}
          <div className="p-5 space-y-6">
            <div className="p-4 bg-white/5 rounded-lg border border-white/5 text-sm text-zinc-300 leading-relaxed">
              "{selectedArt.desc}"
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-3 text-zinc-400 text-sm">
                <Palette size={16} className="text-hideout-accent" />
                <span>
                  Software: <strong className="text-zinc-200">{selectedArt.tool}</strong>
                </span>
              </div>
              <div className="flex items-center gap-3 text-zinc-400 text-sm">
                <Calendar size={16} className="text-hideout-accent" />
                <span>
                  Year: <strong className="text-zinc-200">{selectedArt.year}</strong>
                </span>
              </div>
            </div>

            {/* Thumbnails */}
            <div>
              <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider mb-3">
                Gallery Index
              </p>
              <div className="grid grid-cols-3 gap-2">
                {artData.map((art) => (
                  <button
                    key={art.id}
                    onClick={() => setSelectedArt(art)}
                    className={`relative aspect-square rounded overflow-hidden border transition-all ${
                      selectedArt.id === art.id
                        ? 'border-hideout-accent ring-1 ring-hideout-accent/50 opacity-100'
                        : 'border-transparent opacity-50 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={getOptimizedUrl(art.src, 200)}
                      className="w-full h-full object-cover"
                      alt=""
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* <div className="pt-2">
              <a
                href={getOptimizedUrl(selectedArt.src, 'auto')}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 w-full py-2 bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs font-mono rounded transition-colors"
              >
                <ZoomIn size={14} />
                View Full Resolution
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </CommonWrapper>
  );
};

export default ArtModal;

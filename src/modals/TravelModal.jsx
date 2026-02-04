import { motion, AnimatePresence } from 'framer-motion';
import { MapPin } from 'lucide-react';
import { useState } from 'react';
import CommonHeader from './CommonHeader';
import { travelData } from '../data/travelData';

const TravelModal = ({ isOpen, onClose }) => {
  const [activeCity, setActiveCity] = useState(Object.keys(travelData)[0]);

  return (
    <CommonHeader
      isOpen={isOpen}
      onClose={onClose}
      title="user@altiusx:~/travel_log"
      className="!bg-zinc-50 dark:!bg-[#0c0c0c] border-zinc-200 dark:border-zinc-800"
    >
      {/* --- BODY CONTENT --- */}
      {/* <div className="flex-1 overflow-hidden flex flex-col bg-inherit"> */}
      <div className="p-6 pb-2 shrink-0 bg-inherit">
        {/* Internal Header (Keeps the context clear) */}
        {/* <div className="p-6 pb-2"> */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <MapPin className="text-hideout-accent" /> Travel Gallery
        </h2>
        <p className="text-sm text-slate-500 dark:text-hideout-muted font-mono">
          git commit -m "Add new travel photos"
        </p>
        {/* </div> */}

        {/* City Tabs */}
        <div className="flex gap-4 px-6 py-4 overflow-x-auto shrink-0">
          {Object.keys(travelData).map((city) => (
            <button
              key={city}
              onClick={() => setActiveCity(city)}
              className={`px-4 py-2 rounded-full text-xs font-mono transition-all ${
                activeCity === city
                  ? 'bg-hideout-accent text-white shadow-lg shadow-orange-500/20'
                  : 'bg-zinc-100 dark:bg-white/5 text-slate-600 dark:text-slate-400 hover:bg-zinc-200 dark:hover:bg-white/10'
              }`}
            >
              {city}
            </button>
          ))}
        </div>

        {/* Photo Grid */}
        <div className="flex-1 overflow-y-auto p-6 pt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pb-10">
            {travelData[activeCity].map((photo, index) => (
              <motion.div
                key={photo.src}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group relative aspect-square rounded-lg overflow-hidden cursor-pointer bg-zinc-100 dark:bg-white/5"
              >
                <img
                  src={photo.src}
                  alt={photo.caption}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-end p-4">
                  <p className="text-white text-xs font-mono opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all">
                    {photo.caption}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </CommonHeader>
  );
};

export default TravelModal;

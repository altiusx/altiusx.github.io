import { motion, AnimatePresence } from 'framer-motion';
import { X, MapPin } from 'lucide-react';
import { useState } from 'react';
import CommonHeader from './CommonHeader';

// Placeholder Data
const travelData = {
  'Hong Kong': [
    {
      src: 'https://images.unsplash.com/photo-1506318137071-a8bcbf6d919d?auto=format&fit=crop&w=800&q=80',
      caption: 'Neon Nights',
    },
    {
      src: 'https://images.unsplash.com/photo-1536599018102-9f803361e194?auto=format&fit=crop&w=800&q=80',
      caption: 'Peak View',
    },
    {
      src: 'https://images.unsplash.com/photo-1558276566-731383823793?auto=format&fit=crop&w=800&q=80',
      caption: 'Old Streets',
    },
  ],
  Tokyo: [
    {
      src: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=800&q=80',
      caption: 'Shinjuku',
    },
    {
      src: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=800&q=80',
      caption: 'Tokyo Tower',
    },
    {
      src: 'https://images.unsplash.com/photo-1528360983277-13d9b152c6d4?auto=format&fit=crop&w=800&q=80',
      caption: 'Shibuya Crossing',
    },
  ],
  Taipei: [
    {
      src: 'https://images.unsplash.com/photo-1470004914212-05527e49370b?auto=format&fit=crop&w=800&q=80',
      caption: 'Taipei 101',
    },
    {
      src: 'https://images.unsplash.com/photo-1552993873-0dd1110e025f?auto=format&fit=crop&w=800&q=80',
      caption: 'Night Markets',
    },
    {
      src: 'https://images.unsplash.com/photo-1596425985834-31da4c052528?auto=format&fit=crop&w=800&q=80',
      caption: 'Jiufen',
    },
  ],
};

const TravelModal = ({ isOpen, onClose }) => {
  const [activeCity, setActiveCity] = useState('Hong Kong');

  return (
    <CommonHeader isOpen={isOpen} onClose={onClose} title="user@altiusx:~/travel_log">
      {/* --- BODY CONTENT --- */}
      <div className="flex-1 overflow-hidden flex flex-col bg-white dark:bg-zinc-900">
        {/* Internal Header (Keeps the context clear) */}
        <div className="p-6 pb-2">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <MapPin className="text-hideout-accent" /> Travel Gallery (Placeholder WIP)
          </h2>
          <p className="text-sm text-slate-500 dark:text-hideout-muted">
            /home/altiusx/photos/{activeCity.toLowerCase().replace(' ', '_')}
          </p>
        </div>

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

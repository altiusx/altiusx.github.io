import { useState } from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { Music, Disc3 } from 'lucide-react';

const MusicPlayerWidget = () => {
  const Playlist = [
    {
      title: 'Philanthrope x Yasper - Slopes',
      src: '/music/slopes.m4a',
    },
    {
      title: 'sad toï - Love Affair in Kyoto',
      src: '/music/sadtoi-love-affair.m4a',
    },
    {
      title: 'Birocratic - Lovely Rita',
      src: '/music/lovely-rita.m4a',
    },
  ];

  const [currentTrack, setTrack] = useState(0);

  const handleClickNext = () => {
    setTrack((currentTrack + 1) % Playlist.length);
  };

  return (
    <div className="flex flex-col h-full justify-between relative overflow-hidden bg-white dark:bg-hideout-card transition-colors">
      {/* Styles are mostly neutral (Orange), so they work on White or Dark Blue */}
      <style>{`
        .rhap_container { background: transparent !important; box-shadow: none !important; padding: 10px 20px !important; }
        .rhap_main-controls-button { color: #fb923c !important; font-size: 2rem !important; }
        .rhap_progress-filled { background-color: #fb923c !important; }
        .rhap_time, .rhap_volume-controls { display: none !important; }
      `}</style>

      {/* TOP SECTION */}
      <div className="p-5 pb-0 z-10 relative">
        <div className="flex items-center gap-2 mb-1">
          <Music size={14} className="text-hideout-accent" />
          <span className="text-[10px] font-mono text-hideout-accent uppercase tracking-widest">
            Lofi_Station
          </span>
        </div>

        {/* TEXT: Dark Slate in Light Mode, White in Dark Mode */}
        <h3 className="text-sm font-bold text-slate-900 dark:text-white truncate transition-colors">
          {Playlist[currentTrack].title}
        </h3>
      </div>

      {/* DECORATION */}
      <div className="absolute -top-12 -right-12 text-slate-100 dark:text-white/5 z-0 pointer-events-none">
        {/* Icon color needs to switch too */}
        <Disc3
          size={140}
          strokeWidth={0.5}
          className="transition-transform duration-[3s] ease-in-out group-hover:rotate-90"
        />
      </div>

      {/* PLAYER */}
      <div className="mt-auto w-full">
        <AudioPlayer
          autoPlay={false}
          src={Playlist[currentTrack].src}
          showJumpControls={true}
          showSkipControls={true}
          layout="stacked-reverse"
          showDownloadProgress={false}
          onClickNext={handleClickNext}
          onEnded={handleClickNext}
          preload="none"
        />
      </div>
    </div>
  );
};

export default MusicPlayerWidget;

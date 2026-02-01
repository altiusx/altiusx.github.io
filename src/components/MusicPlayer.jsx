import React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { Music, Disc } from 'lucide-react';

const MusicPlayerWidget = () => {
  const Playlist = [
    { title: 'Lofi Beats', src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3' },
    { title: 'Night Walk', src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3' },
  ];

  const [currentTrack, setTrack] = React.useState(0);

  const handleClickNext = () => {
    setTrack((currentTrack + 1) % Playlist.length);
  };

  return (
    <div className="flex flex-col h-full justify-between relative overflow-hidden bg-white dark:bg-hideout-card transition-colors">
      {/* Styles are mostly neutral (Orange), so they work on White or Dark Blue */}
      <style>{`
        .rhap_container { background: transparent !important; box-shadow: none !important; padding: 10px 20px !important; }
        .rhap_main-controls-button { color: #fb923c !important; font-size: 24px !important; }
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
      <div className="absolute -right-4 top-4 opacity-10 animate-spin-slow pointer-events-none">
        {/* Icon color needs to switch too */}
        <Disc size={90} className="text-slate-900 dark:text-white" />
      </div>

      {/* PLAYER */}
      <div className="mt-auto w-full">
        <AudioPlayer
          autoPlay={false}
          src={Playlist[currentTrack].src}
          showJumpControls={false}
          showSkipControls={true}
          layout="stacked-reverse"
          showDownloadProgress={false}
          onClickNext={handleClickNext}
          onEnded={handleClickNext}
        />
      </div>
    </div>
  );
};

export default MusicPlayerWidget;

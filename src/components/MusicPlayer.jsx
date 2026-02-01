import React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { Music, Disc } from 'lucide-react';

const MusicPlayerWidget = () => {
  // 1. Define your playlist here (Local files or direct URLs)
  const Playlist = [
    { title: 'Lofi Beats', src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3' },
    { title: 'Night Walk', src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3' },
  ];

  const [currentTrack, setTrack] = React.useState(0);

  const handleClickNext = () => {
    setTrack((currentTrack + 1) % Playlist.length);
  };

  return (
    <div className="flex flex-col h-full justify-between relative overflow-hidden">
      {/* 2. COMPACT STYLES (Scoped to this player) */}
      <style>{`
        .rhap_container { 
          background: transparent !important; 
          box-shadow: none !important; 
          padding: 10px 20px !important; 
        }
        .rhap_main-controls-button { color: #fb923c !important; font-size: 24px !important; }
        .rhap_progress-filled { background-color: #fb923c !important; }
        .rhap_time { display: none !important; } 
        .rhap_volume-controls { display: none !important; }
      `}</style>

      {/* 3. TOP SECTION: Info */}
      <div className="p-5 pb-0 z-10 relative">
        <div className="flex items-center gap-2 mb-1">
          <Music size={14} className="text-hideout-accent" />
          <span className="text-[10px] font-mono text-hideout-accent uppercase tracking-widest">
            Lofi_Station
          </span>
        </div>
        <h3 className="text-sm font-bold text-white truncate">{Playlist[currentTrack].title}</h3>
      </div>

      {/* 4. DECORATION: Spinning Disc */}
      <div className="absolute -right-4 top-4 opacity-10 animate-spin-slow pointer-events-none">
        <Disc size={90} />
      </div>

      {/* 5. PLAYER CONTROLS */}
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

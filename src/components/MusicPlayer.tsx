import React, { useState, useEffect, useRef } from 'react';
import { Music, Volume2, VolumeX, AlertCircle } from 'lucide-react';
import { contentData } from '../data/content';

interface MusicPlayerProps {
  autoPlayTrigger?: boolean;
}

export const MusicPlayer: React.FC<MusicPlayerProps> = ({ autoPlayTrigger = false }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasError, setHasError] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Instantiate audio object safely
    const audio = new Audio(contentData.audioPath);
    audio.loop = true;
    audioRef.current = audio;

    const handleError = () => {
      setHasError(true);
      setIsPlaying(false);
    };

    audio.addEventListener('error', handleError);

    return () => {
      audio.removeEventListener('error', handleError);
      audio.pause();
    };
  }, []);

  useEffect(() => {
    if (autoPlayTrigger && audioRef.current && !hasError) {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch(() => {
        // Autoplay may be restricted by browser until direct click
        setIsPlaying(false);
      });
    }
  }, [autoPlayTrigger, hasError]);

  const toggleMusic = () => {
    if (!audioRef.current || hasError) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch((e) => {
        console.warn("Audio play blocked or file not found", e);
        setHasError(true);
      });
    }
  };

  // If audio fails or audioPath is missing, don't show button or show disabled state
  if (hasError) return null;

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <button
        onClick={toggleMusic}
        aria-label={isPlaying ? "Mute Background Music" : "Play Background Music"}
        className={`group flex items-center gap-2 px-4 py-3 rounded-full border shadow-xl backdrop-blur-md transition-all duration-300 ${
          isPlaying
            ? 'bg-gold-500 text-navy-950 border-gold-400 animate-pulse'
            : 'bg-navy-900/90 text-cream-100 border-gold-500/30 hover:border-gold-500'
        }`}
      >
        {isPlaying ? (
          <>
            <Volume2 className="w-5 h-5 animate-bounce text-navy-950" />
            <span className="text-xs font-mono font-bold tracking-wider">MUSIC ON</span>
          </>
        ) : (
          <>
            <VolumeX className="w-5 h-5 text-gold-400 group-hover:scale-110 transition-transform" />
            <span className="text-xs font-mono font-medium tracking-wider">MUSIC OFF</span>
          </>
        )}
      </button>
    </div>
  );
};

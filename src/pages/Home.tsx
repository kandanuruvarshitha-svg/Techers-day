import React, { useState } from 'react';
import { Navbar } from '../components/Navbar';
import { OpeningScreen } from '../components/OpeningScreen';
import { Hero } from '../components/Hero';
import { StorySection } from '../components/StorySection';
import { LessonsSection } from '../components/LessonsSection';
import { VideoSection } from '../components/VideoSection';
import { LetterSection } from '../components/LetterSection';
import { AwardSection } from '../components/AwardSection';
import { FinalSurpriseModal } from '../components/FinalSurpriseModal';
import { MusicPlayer } from '../components/MusicPlayer';
import { Footer } from '../components/Footer';

export const Home: React.FC = () => {
  const [showOpening, setShowOpening] = useState(true);
  const [musicStarted, setMusicStarted] = useState(false);

  const handleStartSurprise = () => {
    setShowOpening(false);
    setMusicStarted(true);
  };

  return (
    <div className="min-h-screen bg-cream-100 text-navy-900 selection:bg-gold-500 selection:text-navy-950 font-sans">
      
      {/* Opening Screen Splash */}
      {showOpening && (
        <OpeningScreen onStart={handleStartSurprise} />
      )}

      {/* Main Experience */}
      <Navbar />

      <main className="space-y-12">
        <Hero />
        <StorySection />
        <LessonsSection />
        <VideoSection />
        <LetterSection />
        <AwardSection />
        <FinalSurpriseModal />
      </main>

      <Footer />

      {/* Floating Music Control Widget */}
      <MusicPlayer autoPlayTrigger={musicStarted} />
    </div>
  );
};

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Heart, Sparkles, ArrowRight } from 'lucide-react';
import { contentData } from '../data/content';

interface OpeningScreenProps {
  onStart: () => void;
}

export const OpeningScreen: React.FC<OpeningScreenProps> = ({ onStart }) => {
  const [step, setStep] = useState(1);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setStep(2);
    }, 2200);
    return () => clearTimeout(timer);
  }, []);

  const handleStart = () => {
    // Fire elegant gold & cream confetti burst
    confetti({
      particleCount: 75,
      spread: 80,
      origin: { y: 0.6 },
      colors: ['#D4AF37', '#F5E6AD', '#1E293B', '#FAF7F2']
    });

    setIsExiting(true);
    setTimeout(() => {
      onStart();
    }, 800);
  };

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950 text-cream-100 p-6 overflow-hidden select-none"
        >
          {/* Subtle Ambient Background Orbs */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl pointer-events-none animate-pulse-slow" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cream-100/5 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-2xl text-center space-y-8 relative z-10">
            {/* Step 1 Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-300 text-xs sm:text-sm tracking-widest uppercase font-mono"
            >
              <Sparkles className="w-3.5 h-3.5 text-gold-400" />
              <span>A Personal Teacher's Day Gift</span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.3 }}
              className="text-lg sm:text-xl md:text-2xl font-serif text-cream-200/90 leading-relaxed font-light italic px-4"
            >
              "{contentData.tagline}"
            </motion.p>

            {/* Step 2 Reveal Titles */}
            {step >= 2 && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="space-y-4 pt-4"
              >
                <div className="space-y-2">
                  <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif font-bold text-cream-50 tracking-tight">
                    MY FIRST TEACHER
                  </h1>
                  <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif font-semibold gold-gradient-text flex items-center justify-center gap-3">
                    DAD <Heart className="w-8 h-8 sm:w-10 sm:h-10 text-red-500 fill-red-500 inline animate-bounce" />
                  </h2>
                </div>

                <p className="text-gold-300/80 text-sm sm:text-base font-sans tracking-wider uppercase font-medium">
                  Happy Teacher’s Day
                </p>

                {/* Start Button */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="pt-8"
                >
                  <button
                    onClick={handleStart}
                    className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-gold-500 to-gold-600 text-navy-950 font-semibold text-base sm:text-lg shadow-xl shadow-gold-500/20 hover:shadow-gold-500/40 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
                  >
                    <span>START THE SURPRISE</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </motion.div>
              </motion.div>
            )}
          </div>

          <div className="absolute bottom-6 text-xs text-cream-300/40 font-light">
            Crafted with love for the best teacher in the world
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

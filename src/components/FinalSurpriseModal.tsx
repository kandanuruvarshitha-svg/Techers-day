import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Sparkles, Heart, X, Gift } from 'lucide-react';
import { contentData } from '../data/content';

export const FinalSurpriseModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [phase, setPhase] = useState(1);

  const handleOpen = () => {
    setIsOpen(true);
    setPhase(1);

    // Sequence timing
    setTimeout(() => {
      setPhase(2);
      // Fire confetti burst
      confetti({
        particleCount: 100,
        spread: 90,
        origin: { y: 0.5 },
        colors: ['#D4AF37', '#F5E6AD', '#FFFFFF', '#E4C465']
      });
    }, 2000);
  };

  const { finalSurprise } = contentData;

  return (
    <section id="final-surprise" className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center">
      
      {/* Trigger Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="space-y-4"
      >
        <button
          onClick={handleOpen}
          className="group relative inline-flex items-center gap-3 px-10 py-5 rounded-full bg-gradient-to-r from-gold-500 via-gold-400 to-gold-600 text-navy-950 font-serif font-bold text-lg sm:text-xl shadow-2xl shadow-gold-500/30 hover:scale-105 hover:shadow-gold-500/50 active:scale-95 transition-all duration-300 cursor-pointer"
        >
          <Sparkles className="w-6 h-6 text-navy-950 animate-spin" />
          <span>✨ ONE LAST SURPRISE</span>
          <Gift className="w-6 h-6 text-navy-950 group-hover:rotate-12 transition-transform" />
        </button>
        <p className="text-xs text-navy-900/60 font-mono">
          Click for your final Teacher's Day message
        </p>
      </motion.div>

      {/* Cinematic Modal Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-navy-950/95 backdrop-blur-xl flex items-center justify-center p-6 text-cream-100 select-none overflow-hidden"
          >
            {/* Ambient Lighting Orbs */}
            <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl pointer-events-none animate-pulse-slow" />

            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 w-10 h-10 rounded-full bg-cream-100/10 hover:bg-cream-100/20 text-cream-100 flex items-center justify-center transition-colors z-20"
              aria-label="Close Surprise"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="max-w-2xl w-full text-center space-y-8 relative z-10 px-4">
              
              {/* Phase 1: Timed Pause */}
              {phase === 1 && (
                <motion.h2
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 1.2 }}
                  className="text-5xl sm:text-7xl font-serif font-bold text-cream-50 italic"
                >
                  {finalSurprise.pauseText}
                </motion.h2>
              )}

              {/* Phase 2: Full Cinematic Text Reveal */}
              {phase === 2 && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                  className="space-y-6"
                >
                  <div className="w-16 h-16 rounded-full bg-gold-500/20 border border-gold-500/40 flex items-center justify-center mx-auto text-gold-400">
                    <Heart className="w-8 h-8 fill-gold-400/30" />
                  </div>

                  <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif font-bold text-cream-50 leading-tight">
                    "{finalSurprise.mainHeading}{' '}
                    <span className="gold-gradient-text block mt-2">
                      {finalSurprise.subHeading}
                    </span>"
                  </h2>

                  <p className="text-gold-300/80 font-serif text-lg sm:text-xl italic max-w-lg mx-auto pt-4">
                    {finalSurprise.messageText}
                  </p>

                  <div className="pt-8">
                    <button
                      onClick={() => setIsOpen(false)}
                      className="px-8 py-3 rounded-full bg-cream-100 text-navy-950 font-serif font-bold text-sm hover:bg-cream-200 transition-colors shadow-lg"
                    >
                      Close Surprise
                    </button>
                  </div>
                </motion.div>
              )}

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

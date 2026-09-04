import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, X, ChevronLeft, ChevronRight, MapPin, Calendar } from 'lucide-react';
import { ImageWithFallback } from './ImageWithFallback';
import { contentData } from '../data/content';
import { Memory } from '../types';

export const MemoriesGallery: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handlePrev = () => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) => (prev === 0 ? contentData.memories.length - 1 : (prev as number) - 1));
  };

  const handleNext = () => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) => (prev === contentData.memories.length - 1 ? 0 : (prev as number) + 1));
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'Escape') setSelectedIndex(null);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex]);

  return (
    <section id="memories" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      
      {/* Section Header */}
      <div className="text-center space-y-4 mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 text-gold-600 text-xs font-mono uppercase tracking-widest">
          <Camera className="w-3.5 h-3.5" />
          <span>Chapter III — Memory Archive</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-serif font-bold text-navy-900">
          A Few Memories With My Favorite Teacher
        </h2>
        <p className="text-navy-900/60 max-w-xl mx-auto text-sm sm:text-base font-light">
          Moments captured in time that remind me of how lucky I am to learn from you.
        </p>
      </div>

      {/* Masonry-Style Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {contentData.memories.map((mem, idx) => (
          <motion.div
            key={mem.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            onClick={() => setSelectedIndex(idx)}
            className="group cursor-pointer rounded-2xl glass-card overflow-hidden shadow-lg hover:shadow-2xl border border-gold-500/20 transition-all duration-300 flex flex-col"
          >
            <div className="relative overflow-hidden aspect-4/3 bg-cream-200">
              <ImageWithFallback
                src={mem.image}
                alt={mem.title}
                fallbackText={mem.title}
                aspectRatio="aspect-4/3"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="text-cream-100 text-xs font-mono tracking-wider bg-gold-500/80 px-2.5 py-1 rounded-full backdrop-blur-sm">
                  Click to View
                </span>
              </div>
            </div>

            <div className="p-5 space-y-2 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-serif font-bold text-lg text-navy-900 group-hover:text-gold-600 transition-colors">
                  {mem.title}
                </h3>
                <p className="text-navy-900/70 text-xs sm:text-sm italic font-serif leading-relaxed mt-1">
                  "{mem.caption}"
                </p>
              </div>

              {(mem.date || mem.location) && (
                <div className="flex items-center gap-4 text-[11px] text-navy-900/50 pt-3 border-t border-navy-900/10 font-mono">
                  {mem.date && (
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-gold-600" />
                      {mem.date}
                    </span>
                  )}
                  {mem.location && (
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-gold-600" />
                      {mem.location}
                    </span>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedIndex(null)}
            className="fixed inset-0 z-50 bg-navy-950/95 backdrop-blur-md flex items-center justify-center p-4 select-none"
          >
            {/* Top Toolbar */}
            <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10 text-cream-100">
              <span className="text-xs font-mono tracking-widest text-gold-300">
                {selectedIndex + 1} / {contentData.memories.length}
              </span>
              <button
                onClick={() => setSelectedIndex(null)}
                className="w-10 h-10 rounded-full bg-cream-100/10 hover:bg-cream-100/20 text-cream-100 flex items-center justify-center transition-colors"
                aria-label="Close Lightbox"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={(e) => { e.stopPropagation(); handlePrev(); }}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-cream-100/10 hover:bg-cream-100/20 text-cream-100 flex items-center justify-center transition-colors z-10"
              aria-label="Previous Memory"
            >
              <ChevronLeft className="w-7 h-7" />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); handleNext(); }}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-cream-100/10 hover:bg-cream-100/20 text-cream-100 flex items-center justify-center transition-colors z-10"
              aria-label="Next Memory"
            >
              <ChevronRight className="w-7 h-7" />
            </button>

            {/* Main Lightbox Content Card */}
            <motion.div
              key={selectedIndex}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-4xl w-full bg-navy-900 border border-gold-500/30 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[85vh]"
            >
              <div className="w-full md:w-3/5 bg-navy-950 flex items-center justify-center relative min-h-[300px]">
                <ImageWithFallback
                  src={contentData.memories[selectedIndex].image}
                  alt={contentData.memories[selectedIndex].title}
                  fallbackText={contentData.memories[selectedIndex].title}
                  aspectRatio="aspect-auto"
                  className="max-h-[60vh] object-contain w-full"
                />
              </div>

              <div className="w-full md:w-2/5 p-6 sm:p-8 flex flex-col justify-between text-cream-100 space-y-4 overflow-y-auto">
                <div className="space-y-4">
                  <div className="inline-block px-3 py-1 rounded-full bg-gold-500/20 text-gold-300 text-xs font-mono">
                    Memory #{selectedIndex + 1}
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-cream-50">
                    {contentData.memories[selectedIndex].title}
                  </h3>
                  <p className="text-cream-200/80 font-serif italic text-base sm:text-lg leading-relaxed">
                    "{contentData.memories[selectedIndex].caption}"
                  </p>
                </div>

                <div className="space-y-3 pt-6 border-t border-cream-100/10 text-xs text-cream-300/60 font-mono">
                  {contentData.memories[selectedIndex].date && (
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-gold-400" />
                      <span>{contentData.memories[selectedIndex].date}</span>
                    </div>
                  )}
                  {contentData.memories[selectedIndex].location && (
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-gold-400" />
                      <span>{contentData.memories[selectedIndex].location}</span>
                    </div>
                  )}
                  <p className="text-[11px] pt-2 text-cream-300/40">
                    Use &larr; &rarr; arrow keys to navigate memories
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

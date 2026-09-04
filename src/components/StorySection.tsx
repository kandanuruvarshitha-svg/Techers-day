import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Compass, Heart } from 'lucide-react';
import { contentData } from '../data/content';

export const StorySection: React.FC = () => {
  return (
    <section id="story" className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      <div className="glass-card rounded-3xl p-8 sm:p-12 md:p-16 relative overflow-hidden shadow-xl border border-gold-500/20">
        
        {/* Subtle Decorative Background Seal */}
        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-gold-500/5 pointer-events-none" />
        
        <div className="max-w-3xl mx-auto space-y-8 relative z-10">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-3"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 text-gold-600 text-xs font-mono uppercase tracking-widest">
              <Compass className="w-3.5 h-3.5" />
              <span>Chapter I — The Foundation</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-navy-900 leading-tight">
              "{contentData.storyHeading}
            </h2>
            <p className="text-xl sm:text-2xl font-serif text-gold-600 italic">
              {contentData.storySubheading}"
            </p>
          </motion.div>

          {/* Paragraphs with Scroll Reveal */}
          <div className="space-y-6 text-navy-900/80 font-sans text-base sm:text-lg leading-relaxed font-light">
            {contentData.storyParagraphs.map((para, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="relative pl-4 border-l-2 border-gold-500/40"
              >
                {para}
              </motion.p>
            ))}
          </div>

          {/* Emotional Quote Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-navy-900 text-cream-100 rounded-2xl p-6 sm:p-8 mt-10 shadow-lg text-center space-y-3 relative overflow-hidden"
          >
            <BookOpen className="w-8 h-8 text-gold-400 mx-auto opacity-80" />
            <blockquote className="font-serif italic text-lg sm:text-xl text-cream-200">
              "The lessons of a true teacher are not written in chalk to be erased tomorrow, but etched onto the heart to last a lifetime."
            </blockquote>
            <p className="text-xs text-gold-300 uppercase tracking-widest font-mono">
              — Forever Grateful
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

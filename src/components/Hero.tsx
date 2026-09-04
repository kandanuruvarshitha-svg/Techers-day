import React from 'react';
import { motion } from 'framer-motion';
import { Heart, ChevronDown, Award } from 'lucide-react';
import { ImageWithFallback } from './ImageWithFallback';
import { contentData } from '../data/content';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-[90vh] flex flex-col items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto overflow-hidden">
      <div className="text-center space-y-6 max-w-3xl mx-auto z-10">
        
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cream-200 border border-gold-500/30 text-gold-600 text-xs sm:text-sm font-medium tracking-wide"
        >
          <Award className="w-4 h-4 text-gold-600" />
          <span>A Dedicated Tribute</span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-6xl md:text-7xl font-serif font-bold text-navy-900 leading-tight"
        >
          Happy Teacher’s Day, <span className="text-gold-600">Daddy</span> <Heart className="w-8 h-8 sm:w-12 sm:h-12 text-red-500 fill-red-500 inline-block align-middle" />
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg sm:text-2xl font-serif text-navy-800/80 italic font-light max-w-2xl mx-auto"
        >
          "{contentData.heroSubtitle}"
        </motion.p>
      </div>

      {/* Hero Image Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        className="w-full max-w-xl mt-10 mb-8 rounded-3xl p-3 sm:p-4 glass-card shadow-2xl relative"
      >
        <div className="relative rounded-2xl overflow-hidden shadow-lg border border-gold-500/20 bg-cream-50">
          <ImageWithFallback
            src={contentData.heroImage}
            alt="Daddy - My First Teacher"
            fallbackText="Daddy — My First Teacher & Hero"
            aspectRatio="aspect-4/5"
            className="rounded-2xl"
          />
        </div>
      </motion.div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="flex flex-col items-center gap-2 mt-4 text-navy-900/60 text-xs sm:text-sm font-medium tracking-wider cursor-pointer"
        onClick={() => {
          document.getElementById('story')?.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <span>Scroll to discover your surprise</span>
        <ChevronDown className="w-5 h-5 animate-bounce text-gold-600" />
      </motion.div>
    </section>
  );
};

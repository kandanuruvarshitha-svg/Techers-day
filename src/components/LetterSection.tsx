import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Heart, Stamp } from 'lucide-react';
import { contentData } from '../data/content';

export const LetterSection: React.FC = () => {
  const { letter } = contentData;

  return (
    <section id="letter" className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      
      {/* Section Header */}
      <div className="text-center space-y-4 mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 text-gold-600 text-xs font-mono uppercase tracking-widest">
          <Mail className="w-3.5 h-3.5" />
          <span>Chapter III — From The Heart</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-serif font-bold text-navy-900">
          {letter.heading}
        </h2>
      </div>

      {/* Realistic Paper Card UI */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="relative bg-[#FFFDF9] border border-gold-500/30 rounded-3xl p-8 sm:p-14 md:p-16 shadow-2xl overflow-hidden"
      >
        {/* Subtle Paper Texture Lines */}
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#1E293B_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

        {/* Gold Stamp Emblem Top Right */}
        <div className="absolute top-6 right-6 sm:top-8 sm:right-8 w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-dashed border-gold-500/40 flex flex-col items-center justify-center p-2 text-gold-600 rotate-12 opacity-80 pointer-events-none">
          <Stamp className="w-6 h-6 mb-0.5" />
          <span className="text-[9px] font-mono uppercase tracking-tighter">Sept 5</span>
        </div>

        {/* Letter Salutation */}
        <div className="space-y-6 relative z-10">
          <h3 className="text-2xl sm:text-3xl font-serif font-bold text-navy-900 border-b border-gold-500/20 pb-4">
            {letter.salutation}
          </h3>

          {/* Letter Body */}
          <div className="space-y-5 text-navy-900/85 font-serif text-lg sm:text-xl leading-relaxed">
            {letter.paragraphs.map((paragraph, idx) => (
              <motion.p
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
              >
                {paragraph}
              </motion.p>
            ))}
          </div>

          {/* Closing & Signature */}
          <div className="pt-8 mt-8 border-t border-gold-500/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <p className="text-sm font-sans uppercase tracking-widest text-gold-600 font-medium">
                {letter.closing}
              </p>
              <h4 className="text-4xl sm:text-5xl font-signature text-navy-900 mt-2 text-gold-600 transform -rotate-2">
                {letter.signature}
              </h4>
            </div>

            <div className="w-14 h-14 rounded-full bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-red-500 shadow-sm">
              <Heart className="w-7 h-7 fill-red-500 animate-pulse" />
            </div>
          </div>

        </div>
      </motion.div>
    </section>
  );
};

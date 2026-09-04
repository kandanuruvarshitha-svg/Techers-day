import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Award, Download, Trophy, Star, CheckCircle, Sparkles } from 'lucide-react';
import html2canvas from 'html2canvas';
import { contentData } from '../data/content';

export const AwardSection: React.FC = () => {
  const certificateRef = useRef<HTMLDivElement>(null);
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = async () => {
    if (!certificateRef.current) return;
    try {
      setIsDownloading(true);
      const canvas = await html2canvas(certificateRef.current, {
        scale: 2, // High resolution output
        useCORS: true,
        backgroundColor: '#FFFDF9'
      });

      const image = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.href = image;
      link.download = `Best-Teacher-Award-Dad.png`;
      link.click();
    } catch (err) {
      console.error("Certificate download failed", err);
    } finally {
      setIsDownloading(false);
    }
  };

  const { award } = contentData;

  return (
    <section id="award" className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      
      {/* Section Header */}
      <div className="text-center space-y-4 mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 text-gold-600 text-xs font-mono uppercase tracking-widest">
          <Trophy className="w-3.5 h-3.5" />
          <span>Chapter IV — Official Recognition</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-serif font-bold text-navy-900">
          {award.sectionHeading}
        </h2>
      </div>

      {/* Printable Certificate Box */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8 }}
        className="space-y-8"
      >
        <div
          ref={certificateRef}
          className="bg-[#FFFDF9] rounded-3xl p-6 sm:p-12 md:p-16 shadow-2xl border-8 border-[#D4AF37] relative text-center space-y-6 overflow-hidden"
        >
          {/* Inner Decorative Corner Borders */}
          <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-gold-600 pointer-events-none" />
          <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-gold-600 pointer-events-none" />
          <div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-gold-600 pointer-events-none" />
          <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-gold-600 pointer-events-none" />

          {/* Certificate Header */}
          <div className="space-y-3">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold-500/10 border-2 border-gold-500/40 text-gold-600 mx-auto shadow-sm">
              <Trophy className="w-9 h-9" />
            </div>
            <p className="text-xs font-mono tracking-widest uppercase text-gold-600 font-semibold">
              Official Honor & Recognition
            </p>
            <h3 className="text-3xl sm:text-5xl font-serif font-bold text-navy-900 tracking-tight">
              {award.title}
            </h3>
          </div>

          <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto" />

          {/* Recipient */}
          <div className="space-y-2">
            <p className="text-sm font-sans uppercase tracking-widest text-navy-900/60 font-light">
              This Certificate is proudly presented to
            </p>
            <h4 className="text-4xl sm:text-6xl font-serif font-bold text-gold-600 tracking-wider">
              {award.presentedTo}
            </h4>
          </div>

          {/* Citation / Reason */}
          <p className="text-navy-900/85 font-serif text-base sm:text-xl max-w-2xl mx-auto leading-relaxed italic font-light">
            "{award.reason}"
          </p>

          {/* Badge */}
          <div className="py-3">
            <span className="inline-inline flex items-center gap-2 px-6 py-2 rounded-full bg-navy-900 text-gold-300 font-serif font-bold text-sm sm:text-base border border-gold-500/40 shadow-lg">
              <Star className="w-4 h-4 fill-gold-400 text-gold-400" />
              {award.badgeText}
              <Star className="w-4 h-4 fill-gold-400 text-gold-400" />
            </span>
          </div>

          {/* Certificate Footer Signatures */}
          <div className="pt-8 border-t border-gold-500/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-navy-900/60 max-w-xl mx-auto">
            <div>
              <p className="font-semibold text-navy-900">{award.dateText}</p>
              <p>Official Date</p>
            </div>
            <div className="flex items-center gap-1 text-gold-600">
              <Sparkles className="w-4 h-4" />
              <span className="font-serif font-bold text-sm text-navy-900">Highest Distinction</span>
            </div>
            <div>
              <p className="font-signature text-2xl text-navy-900">{award.signoffText}</p>
              <p>Presented with Love</p>
            </div>
          </div>
        </div>

        {/* Download Button */}
        <div className="text-center pt-4">
          <button
            onClick={handleDownload}
            disabled={isDownloading}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-navy-900 hover:bg-navy-800 text-cream-100 font-semibold text-base shadow-xl border border-gold-500/30 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer disabled:opacity-50"
          >
            {isDownloading ? (
              <>
                <Sparkles className="w-5 h-5 animate-spin text-gold-400" />
                <span>Generating Certificate...</span>
              </>
            ) : (
              <>
                <Download className="w-5 h-5 text-gold-400" />
                <span>DOWNLOAD CERTIFICATE</span>
              </>
            )}
          </button>
        </div>
      </motion.div>
    </section>
  );
};

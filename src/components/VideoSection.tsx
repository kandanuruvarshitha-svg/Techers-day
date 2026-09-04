import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Video, Play, Volume2 } from 'lucide-react';
import { contentData } from '../data/content';

export const VideoSection: React.FC = () => {
  const [videoError, setVideoError] = useState(false);

  // If video is explicitly disabled in config or errored out, don't render section
  if (!contentData.hasVideo || videoError) {
    return null;
  }

  return (
    <section id="video-message" className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="glass-card rounded-3xl p-6 sm:p-10 shadow-xl border border-gold-500/30 text-center space-y-6"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 text-gold-600 text-xs font-mono uppercase tracking-widest">
          <Video className="w-3.5 h-3.5" />
          <span>Personal Video Greeting</span>
        </div>

        <h2 className="text-3xl sm:text-4xl font-serif font-bold text-navy-900">
          A Special Video Message For You
        </h2>

        <p className="text-navy-900/70 text-sm sm:text-base font-light max-w-lg mx-auto">
          A small heartfelt video recorded especially for Teacher's Day.
        </p>

        <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-navy-950 aspect-video max-w-3xl mx-auto border border-gold-500/20">
          <video
            controls
            playsInline
            preload="metadata"
            src={contentData.videoPath}
            onError={() => setVideoError(true)}
            className="w-full h-full object-contain"
          >
            Your browser does not support HTML video playback.
          </video>
        </div>
      </motion.div>
    </section>
  );
};

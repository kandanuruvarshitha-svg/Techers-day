import React from 'react';
import { Heart, QrCode } from 'lucide-react';
import { Link } from 'react-router-dom';
import { contentData } from '../data/content';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-navy-950 text-cream-200 py-12 px-4 border-t border-gold-500/20">
      <div className="max-w-5xl mx-auto flex flex-col items-center justify-center text-center space-y-6">
        
        <div className="flex items-center justify-center gap-2">
          <span className="font-serif font-bold text-xl text-cream-50">MY FIRST TEACHER</span>
          <Heart className="w-5 h-5 text-red-500 fill-red-500" />
          <span className="font-serif font-bold text-xl text-gold-400">DAD</span>
        </div>

        <p className="text-xs sm:text-sm text-cream-300/70 font-light max-w-md italic">
          "A son's heartfelt tribute to the greatest teacher, mentor, and hero."
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-mono pt-2">
          <Link to="/card" className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-cream-100/10 hover:bg-gold-500 hover:text-navy-950 text-cream-200 transition-colors">
            <QrCode className="w-3.5 h-3.5" />
            <span>Digital & Printable Card</span>
          </Link>
        </div>

        <div className="pt-6 border-t border-cream-100/10 text-[11px] text-cream-300/40 font-mono">
          Happy Teacher's Day • Made with love for Dad
        </div>
      </div>
    </footer>
  );
};

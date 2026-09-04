import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShieldAlert, 
  Flame, 
  HeartHandshake, 
  BookOpenCheck, 
  Users, 
  Sparkles,
  LucideIcon,
  X,
  Lightbulb
} from 'lucide-react';
import { contentData } from '../data/content';
import { Lesson } from '../types';

const iconMap: Record<string, LucideIcon> = {
  ShieldAlert,
  Flame,
  HeartHandshake,
  BookOpenCheck,
  Users,
  Sparkles,
};

export const LessonsSection: React.FC = () => {
  const [selectedLesson, setSelectedLesson] = useState<Lesson | null>(null);

  return (
    <section id="lessons" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      
      {/* Section Header */}
      <div className="text-center space-y-4 mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 text-gold-600 text-xs font-mono uppercase tracking-widest">
          <Lightbulb className="w-3.5 h-3.5" />
          <span>Chapter II — Life Lessons</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-serif font-bold text-navy-900">
          Lessons You Gave Me
        </h2>
        <p className="text-navy-900/60 max-w-xl mx-auto text-sm sm:text-base font-light">
          Tap or hover on any card to discover the timeless values you instilled in me.
        </p>
      </div>

      {/* 6 Interactive Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {contentData.lessons.map((lesson, idx) => {
          const IconComponent = iconMap[lesson.iconName] || Sparkles;
          
          return (
            <motion.div
              key={lesson.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              onClick={() => setSelectedLesson(lesson)}
              className="glass-card rounded-2xl p-6 sm:p-8 cursor-pointer relative overflow-hidden group shadow-lg hover:shadow-2xl border border-gold-500/20 flex flex-col justify-between"
            >
              {/* Background Glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold-500/10 rounded-full blur-2xl group-hover:bg-gold-500/20 transition-all duration-500 pointer-events-none" />

              <div>
                {/* Header Row: Number + Icon */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-3xl sm:text-4xl font-serif font-bold text-gold-600/40 group-hover:text-gold-600 transition-colors">
                    {lesson.number}
                  </span>
                  <div className="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-600 group-hover:bg-gold-500 group-hover:text-navy-950 transition-all duration-300 shadow-sm">
                    <IconComponent className="w-6 h-6" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-serif font-bold text-navy-900 mb-2 group-hover:text-gold-600 transition-colors">
                  {lesson.title}
                </h3>
                <p className="text-xs uppercase tracking-wider text-gold-600 font-mono mb-3">
                  {lesson.subtitle}
                </p>
                <p className="text-navy-900/80 text-sm font-light leading-relaxed">
                  "{lesson.description}"
                </p>
              </div>

              {/* Tap to expand hint */}
              <div className="mt-6 pt-4 border-t border-navy-900/10 flex items-center justify-between text-xs text-navy-900/50 group-hover:text-gold-600 transition-colors">
                <span>Tap for full story</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Expanded Modal for Mobile & Desktop */}
      <AnimatePresence>
        {selectedLesson && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedLesson(null)}
            className="fixed inset-0 z-50 bg-navy-950/80 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-cream-100 border border-gold-500/40 rounded-3xl p-6 sm:p-8 max-w-lg w-full relative shadow-2xl space-y-6"
            >
              <button
                onClick={() => setSelectedLesson(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-cream-200 hover:bg-cream-300 text-navy-900 flex items-center justify-center transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-4">
                <span className="text-4xl font-serif font-bold text-gold-600">
                  {selectedLesson.number}
                </span>
                <div>
                  <h3 className="text-2xl font-serif font-bold text-navy-900">
                    {selectedLesson.title}
                  </h3>
                  <p className="text-xs uppercase tracking-wider text-gold-600 font-mono">
                    {selectedLesson.subtitle}
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-gold-500/10 border border-gold-500/20 italic font-serif text-navy-900">
                "{selectedLesson.quote}"
              </div>

              <div className="space-y-2">
                <h4 className="text-xs font-mono uppercase tracking-widest text-navy-900/60">
                  Personal Reflection
                </h4>
                <p className="text-navy-900/80 text-sm sm:text-base leading-relaxed font-light">
                  {selectedLesson.detailedReflection}
                </p>
              </div>

              <button
                onClick={() => setSelectedLesson(null)}
                className="w-full py-3 rounded-xl bg-navy-900 text-cream-100 font-medium text-sm hover:bg-navy-800 transition-colors shadow-md"
              >
                Close Lesson
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

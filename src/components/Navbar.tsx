import React, { useState } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Heart, QrCode, LayoutDashboard } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const navLinks = [
    { name: 'LESSONS', href: '#lessons' },
    { name: 'LETTER', href: '#letter' },
    { name: 'AWARD', href: '#award' },
  ];

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    if (!isHomePage) {
      window.location.href = `/${id}`;
      return;
    }
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 px-4 py-3 sm:px-6">
      <nav className="max-w-6xl mx-auto glass-card rounded-full px-5 py-3 shadow-lg border border-gold-500/20 flex items-center justify-between">
        
        {/* Brand Link */}
        <RouterLink to="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-full bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-red-500 group-hover:scale-105 transition-transform">
            <Heart className="w-4 h-4 fill-red-500" />
          </div>
          <span className="font-serif font-bold text-sm sm:text-base text-navy-900 tracking-tight">
            MY FIRST TEACHER
          </span>
        </RouterLink>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6 text-xs font-mono tracking-wider font-semibold text-navy-900/80">
          {isHomePage && navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.href)}
              className="hover:text-gold-600 transition-colors uppercase cursor-pointer"
            >
              {link.name}
            </button>
          ))}

          <RouterLink
            to="/card"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gold-500/10 text-gold-700 hover:bg-gold-500 hover:text-navy-950 transition-all duration-300"
          >
            <QrCode className="w-3.5 h-3.5" />
            <span>QR CARD</span>
          </RouterLink>

          <RouterLink
            to="/dad-dashboard"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-navy-900 text-cream-100 hover:bg-navy-800 transition-all duration-300 shadow-sm"
          >
            <LayoutDashboard className="w-3.5 h-3.5 text-gold-400" />
            <span>DAD'S SPACE</span>
          </RouterLink>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden w-9 h-9 rounded-full bg-cream-200 text-navy-900 flex items-center justify-center"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile Slideout Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden max-w-6xl mx-auto mt-2 glass-card rounded-2xl p-6 shadow-2xl border border-gold-500/30 space-y-4 text-center font-mono text-sm"
          >
            {isHomePage && navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="block w-full py-2 text-navy-900 font-semibold hover:text-gold-600 border-b border-navy-900/5 uppercase"
              >
                {link.name}
              </button>
            ))}

            <div className="pt-2 flex flex-col gap-2">
              <RouterLink
                to="/card"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-gold-500/20 text-gold-800 font-bold"
              >
                <QrCode className="w-4 h-4" />
                <span>Physical Greeting Card & QR</span>
              </RouterLink>

              <RouterLink
                to="/dad-dashboard"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-navy-900 text-cream-100 font-bold"
              >
                <LayoutDashboard className="w-4 h-4 text-gold-400" />
                <span>Dad's Personal Space</span>
              </RouterLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

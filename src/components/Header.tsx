import React, { useState, useEffect } from 'react';
import { Menu as MenuIcon, X, Phone, CalendarRange } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { BRAND_RELIABLE_IMGS } from '../data';

interface HeaderProps {
  onBookClick: () => void;
  activeNavItem: string;
  currentPath?: string;
  onNavigate?: (path: string) => void;
}

export default function Header({ onBookClick, activeNavItem, currentPath = '/', onNavigate }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Menu', href: '#menu' },
    { label: 'Heritage', href: '#heritage' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Location', href: '#location' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.replace('#', '');
    if (currentPath !== '/' && onNavigate) {
      onNavigate('/');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 200);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleMobileNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const id = href.replace('#', '');
    if (currentPath !== '/' && onNavigate) {
      onNavigate('/');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 250);
    } else {
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 150);
    }
  };

  return (
    <header className={`sticky top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-[#0A0A0Ac0] backdrop-blur-md border-b border-white/10 shadow-lg py-1' : 'bg-transparent py-3'
    }`}>
      <nav id="navbar" className="flex justify-between items-center px-6 md:px-12 max-w-7xl mx-auto h-20">
        {/* Brand Logo */}
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault();
            if (currentPath !== '/' && onNavigate) {
              onNavigate('/');
            } else {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }
          }}
          className="flex items-center gap-2 group"
        >
          <img
            src={BRAND_RELIABLE_IMGS.logo}
            alt="Karnataka Cafe & La Pizzato Logo"
            className="h-16 md:h-18 w-auto object-contain drop-shadow-[0_0_15px_rgba(242,202,80,0.6)] brightness-110 group-hover:scale-105 transition-transform"
            referrerPolicy="no-referrer"
          />
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = activeNavItem === link.href.substring(1);
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`font-medium tracking-wide text-sm transition-all duration-300 relative py-1 ${
                  isActive ? 'textColor text-primary' : 'text-gray-300 hover:text-white'
                }`}
              >
                {link.label}
                {isActive && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </div>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center gap-6">
          <a
            href="https://wa.me/919881115030"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-secondary hover:text-white transition-colors text-sm font-semibold tracking-wide"
          >
            <Phone className="w-4 h-4 fill-secondary/20" />
            WhatsApp
          </a>
          <button
            id="header-book-table-btn"
            onClick={onBookClick}
            className="bg-primary hover:bg-primary/95 text-on-primary font-bold px-6 py-2.5 rounded-full text-xs uppercase tracking-wider hover:scale-105 hover:shadow-[0_0_20px_rgba(242,202,80,0.3)] active:scale-95 transition-all"
          >
            Book Table
          </button>
        </div>

        {/* Mobile Hamburger toggle */}
        <div className="flex md:hidden items-center gap-4">
          <button
            id="mobile-menu-toggle"
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-300 hover:text-white focus:outline-none p-1.5 rounded-lg border border-white/10 glass"
          >
            {isOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0F0F0Fd9] backdrop-blur-lg border-b border-white/10"
          >
            <div className="px-6 py-6 flex flex-col gap-5">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleMobileNavClick(e, link.href)}
                  className={`text-lg font-medium py-1 transition-colors ${
                    activeNavItem === link.href.substring(1) ? 'text-primary' : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {link.label}
                </a>
              ))}
              <hr className="border-white/10 my-1" />
              <div className="flex flex-col gap-4">
                <a
                  href="https://wa.me/919881115030"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 border border-secondary/30 text-secondary hover:bg-secondary/10 py-3 rounded-full text-sm font-semibold transition"
                >
                  <Phone className="w-4 h-4" />
                  Chat on WhatsApp
                </a>
                <button
                  id="mobile-book-table-btn"
                  onClick={() => {
                    setIsOpen(false);
                    onBookClick();
                  }}
                  className="bg-primary text-black hover:bg-primary/95 text-center font-bold py-3.5 rounded-full text-sm uppercase tracking-wider transition"
                >
                  Book A Table
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

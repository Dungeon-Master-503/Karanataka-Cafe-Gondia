import React from 'react';
import { motion } from 'motion/react';
import { BRAND_RELIABLE_IMGS } from '../data';
import { Star, Heart, ClipboardCheck } from 'lucide-react';

interface HeroProps {
  onBookClick: () => void;
}

export default function Hero({ onBookClick }: HeroProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center justify-center overflow-hidden">
      {/* Cinematic Background Image Layer */}
      <div className="absolute inset-0 z-0 select-none">
        <img
          src={BRAND_RELIABLE_IMGS.heroBg}
          alt="Delicious food spread featuring Masala Dosa, Pizza and Pasta at Karnataka Cafe &amp; La Pizzato Gondia"
          className="w-full h-full object-cover brightness-[0.25] scale-105"
          referrerPolicy="no-referrer"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-[#0A0A0A]/80"></div>
        {/* Subtle decorative color orb */}
        <div className="absolute top-1/3 left-1/4 w-[40vw] h-[40vw] bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[35vw] h-[35vw] bg-secondary/5 rounded-full blur-[120px] pointer-events-none"></div>
      </div>

      <div className="relative z-10 text-center px-6 md:px-12 max-w-5xl mx-auto py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          {/* Tagline Badge */}
          <motion.span
            variants={itemVariants}
            className="px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs uppercase font-semibold tracking-widest mb-6 inline-flex items-center gap-1.5"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
            A Premium Fusion Lounge
          </motion.span>

          {/* Large Title */}
          <motion.h1
            variants={itemVariants}
            className="font-serif text-4xl sm:text-5xl md:text-7xl text-primary font-bold tracking-tight mb-6 leading-tight max-w-4xl"
          >
            Best Cafe &amp; Restaurant <span className="gold-glow text-white">in Gondia</span>
          </motion.h1>

          {/* Under-title description */}
          <motion.p
            variants={itemVariants}
            className="font-sans text-base sm:text-lg md:text-xl text-gray-300 font-medium tracking-wide max-w-3xl mb-12"
          >
            Authentic South Indian &bull; North Indian &bull; Chinese &bull; Pizza &bull; Pasta
          </motion.p>

          {/* Calls to Action */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-5 mb-20 w-full sm:w-auto"
          >
            <button
              onClick={onBookClick}
              className="bg-primary hover:bg-primary/95 text-black font-semibold px-10 py-4 rounded-full text-sm uppercase tracking-wider hover:scale-105 hover:shadow-[0_0_30px_rgba(242,202,80,0.4)] active:scale-95 transition-all w-full sm:w-auto"
            >
              Book A Table
            </button>
            <a
              href="https://wa.me/919881115030"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-secondary/80 text-secondary hover:bg-secondary/10 font-semibold px-10 py-3.5 rounded-full text-sm uppercase tracking-wider hover:scale-105 active:scale-95 transition-all w-full sm:w-auto inline-flex items-center justify-center gap-2"
            >
              WhatsApp Now
            </a>
          </motion.div>

          {/* Bottom Stats cards */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-4xl"
          >
            <div className="glass p-6 rounded-2xl flex flex-col items-center justify-center transform transition-transform hover:scale-102">
              <Heart className="w-5 h-5 text-primary mb-2 animate-pulse" />
              <div className="text-primary text-3xl font-serif font-bold">5000+</div>
              <div className="text-gray-400 text-xs uppercase tracking-widest font-semibold mt-1">
                Happy Customers
              </div>
            </div>

            <div className="glass p-6 rounded-2xl flex flex-col items-center justify-center transform transition-transform hover:scale-102">
              <ClipboardCheck className="w-5 h-5 text-primary mb-2" />
              <div className="text-primary text-3xl font-serif font-bold">100+</div>
              <div className="text-gray-400 text-xs uppercase tracking-widest font-semibold mt-1">
                Menu Items
              </div>
            </div>

            <div className="glass p-6 rounded-2xl flex flex-col items-center justify-center transform transition-transform hover:scale-102">
              <Star className="w-5 h-5 text-primary mb-2 fill-primary/20" />
              <div className="text-primary text-3xl font-serif font-bold">4.1★</div>
              <div className="text-gray-400 text-xs uppercase tracking-widest font-semibold mt-1">
                Customer Rating
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

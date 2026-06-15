import React from 'react';
import { motion } from 'motion/react';
import { Leaf, Award, Coffee } from 'lucide-react';
import { BRAND_RELIABLE_IMGS } from '../data';

export default function AboutHeritage() {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="heritage" className="py-24 px-6 md:px-12 max-w-7xl mx-auto scroll-mt-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        {/* Left Side: Content & Pillars */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          transition={{ staggerChildren: 0.12 }}
          className="flex flex-col"
        >
          <motion.span
            variants={itemVariants}
            className="text-primary text-xs uppercase tracking-widest font-bold mb-3"
          >
            Since Inception
          </motion.span>
          <motion.h2
            variants={itemVariants}
            className="font-serif text-3xl sm:text-4xl md:text-5xl text-primary font-bold mb-6 leading-tight"
          >
            Where South Indian Tradition <span className="gold-glow text-white">Meets Modern Cafe Culture</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-gray-300 text-base sm:text-lg leading-relaxed mb-8 font-normal"
          >
            Since our inception, Karnataka Cafe & La Pizzato has been the heart of Gondia’s culinary landscape. We bridge the gap between traditional South Indian flavors and the fast-paced expectations of modern cafe goers. From crispy gold-brown dosas to artisanal wood-fired pizzas, every dish is a testament to our passion for absolute quality.
          </motion.p>

          <motion.div variants={itemVariants} className="space-y-5">
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-2.5 rounded-xl border border-primary/20 text-primary">
                <Leaf className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-white font-bold text-sm tracking-wide uppercase mb-1">
                  Farm-Fresh Ingredients Daily
                </h4>
                <p className="text-gray-400 text-xs sm:text-sm">
                  We source organic greens, pesticide-free rice, and hand-pick aromatic local spices to cook our signature recipes.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-2.5 rounded-xl border border-primary/20 text-primary">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-white font-bold text-sm tracking-wide uppercase mb-1">
                  Chef-Crafted Fusion Menu
                </h4>
                <p className="text-gray-400 text-xs sm:text-sm">
                  Bridging pure taste notes with gorgeous presentations created by seasoned chefs with massive culinary expertise.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-2.5 rounded-xl border border-primary/20 text-primary">
                <Coffee className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-white font-bold text-sm tracking-wide uppercase mb-1">
                  Artisanal Coffee Blends
                </h4>
                <p className="text-gray-400 text-xs sm:text-sm">
                  Rich chicory-fused organic filters sourced directly from premium coffee plantations of Chikkamagaluru & Coorg.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Side: Image with elegant gold halo glow background */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="relative lg:pl-10"
        >
          {/* Glowing backdrops */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-primary/10 rounded-full blur-[80px] pointer-events-none -z-10"></div>
          
          <div className="aspect-square glass rounded-3xl overflow-hidden p-2.5 shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10 relative group">
            <img
              src={BRAND_RELIABLE_IMGS.heritageArch}
              alt="Luxurious high-end restaurant family dining interior at Karnataka Cafe & La Pizzato Gondia near Collector Office"
              className="w-full h-full object-cover rounded-2xl group-hover:scale-103 transition-transform duration-500"
              referrerPolicy="no-referrer"
            />
            {/* Soft inner overlay on group hover */}
            <div className="absolute inset-2.5 rounded-2xl bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
            
            <div className="absolute bottom-6 left-6 right-6 z-10">
              <span className="text-[10px] uppercase font-bold tracking-widest text-primary-fixed bg-black/60 px-2.5 py-1 rounded-md border border-white/10 backdrop-blur-md">
                Cozy Sanctuary
              </span>
              <h3 className="font-serif text-lg md:text-xl text-white font-bold mt-2">
                Designed for luxury family gatherings
              </h3>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

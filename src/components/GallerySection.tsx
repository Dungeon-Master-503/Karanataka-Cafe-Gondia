import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { GALLERY_IMAGES } from '../data';
import { Maximize2, X, ChevronLeft, ChevronRight, Image as ImageIcon } from 'lucide-react';

export default function GallerySection() {
  const [activePhotoIdx, setActivePhotoIdx] = useState<number | null>(null);

  const openLightbox = (idx: number) => {
    setActivePhotoIdx(idx);
  };

  const closeLightbox = () => {
    setActivePhotoIdx(null);
  };

  const nextPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activePhotoIdx !== null && GALLERY_IMAGES.length > 0) {
      setActivePhotoIdx((activePhotoIdx + 1) % GALLERY_IMAGES.length);
    }
  };

  const prevPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activePhotoIdx !== null && GALLERY_IMAGES.length > 0) {
      setActivePhotoIdx(
        (activePhotoIdx - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length
      );
    }
  };

  return (
    <section id="gallery" className="py-24 bg-black/60 relative scroll-mt-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Title Block */}
        <div className="text-center mb-16">
          <span className="text-primary text-xs uppercase tracking-widest font-bold inline-flex items-center gap-1">
            <ImageIcon className="w-3.5 h-3.5" /> Visual Tour
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-primary font-bold mt-2 mb-3 leading-tight">
            Atmosphere & Artistry
          </h2>
          <p className="text-gray-400 font-sans text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
            A glimpse into the soul of Karnataka Cafe & La Pizzato
          </p>
          <div className="h-0.5 w-24 bg-primary mx-auto rounded-full mt-6"></div>
        </div>

        {/* Infinite Scrolling Right-To-Left Marquee of gorgeous food images */}
        {GALLERY_IMAGES.length > 0 ? (
          <div className="relative w-full overflow-hidden py-6 rounded-3xl glass border border-white/5 bg-black/30">
            {/* Ambient vignette layers to seamlessly fade out edges */}
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-black via-black/40 to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-black via-black/40 to-transparent z-10 pointer-events-none"></div>

            <div className="flex w-max animate-marquee hover:[animation-play-state:paused] gap-6 px-6">
              {/* Duplicate the GALLERY_IMAGES array twice to fulfill perfect seamless looping with CSS translate(-50%) */}
              {[...GALLERY_IMAGES, ...GALLERY_IMAGES].map((img, idx) => {
                const originalIdx = idx % GALLERY_IMAGES.length;
                return (
                  <div
                    key={`${img.id || img.title}-${idx}`}
                    onClick={() => openLightbox(originalIdx)}
                    className="w-80 h-96 flex-shrink-0 overflow-hidden rounded-2xl glass cursor-pointer relative group transition-all duration-300 hover:border-primary/40"
                  >
                    <img
                      alt={img.title}
                      className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105 group-hover:brightness-110"
                      src={img.url}
                      onError={(e) => {
                        const fallback = (img as any).fallbackUrl;
                        if (fallback && e.currentTarget.src !== fallback) {
                          e.currentTarget.src = fallback;
                        }
                      }}
                      referrerPolicy="no-referrer"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-6">
                      <span className="text-primary text-xs uppercase font-extrabold tracking-widest">Premium Cuisine</span>
                      <h4 className="text-white font-serif text-lg font-bold mt-1">{img.title}</h4>
                      <p className="text-gray-300 text-xs mt-1 leading-relaxed line-clamp-2">{img.caption}</p>
                    </div>
                    <div className="absolute top-4 right-4 bg-black/45 p-2 rounded-full border border-white/10 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <Maximize2 className="w-4 h-4 text-white" />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Micro Interaction tip centered nicely */}
            <div className="text-center mt-6 text-xs text-gray-500 font-sans tracking-widest uppercase font-medium">
              * Hover cursor to pause • Click any dish to expand in immersive detail *
            </div>
          </div>
        ) : (
          <div className="text-center py-20 px-8 glass rounded-3xl max-w-lg mx-auto border border-white/5 relative overflow-hidden group">
            {/* Ambient Background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-primary/5 rounded-full blur-[60px] pointer-events-none"></div>
            
            <div className="relative z-10">
              <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center border border-primary/20 text-primary mx-auto mb-6">
                <ImageIcon className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-2xl text-primary font-bold mb-3">Moments in the Making</h3>
              <p className="text-gray-400 font-sans text-sm leading-relaxed max-w-sm mx-auto">
                We are currently re-curating our visual experience gallery. Check back soon for beautiful snapshots of our cozy spaces and custom culinary creations!
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Full Screen Cinematic Lightbox Modal Overlay */}
      <AnimatePresence>
        {activePhotoIdx !== null && GALLERY_IMAGES.length > 0 && GALLERY_IMAGES[activePhotoIdx] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 backdrop-blur-md z-[100] flex flex-col items-center justify-between py-10"
            onClick={closeLightbox}
          >
            {/* Top Close Bar */}
            <div className="w-full max-w-7xl px-6 flex justify-between items-center z-10">
              <div className="text-left">
                <p className="text-primary text-xs uppercase tracking-widest font-semibold">Gallery Highlight</p>
                <h4 className="text-white text-lg font-serif font-bold mt-0.5">
                  {GALLERY_IMAGES[activePhotoIdx].title}
                </h4>
              </div>
              <button
                onClick={closeLightbox}
                className="bg-white/10 hover:bg-white/20 p-2.5 rounded-full text-white hover:text-primary transition-all flex items-center justify-center border border-white/10"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Middle Slider View */}
            <div className="relative w-full max-w-5xl h-3/5 flex items-center justify-center px-4">
              <button
                onClick={prevPhoto}
                className="absolute left-4 bg-white/5 hover:bg-white/10 border border-white/10 p-3 rounded-full text-white hover:text-primary transition-all flex items-center justify-center z-20 hover:scale-105 active:scale-95"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <motion.img
                key={activePhotoIdx}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                src={GALLERY_IMAGES[activePhotoIdx].url}
                onError={(e) => {
                  const fallback = (GALLERY_IMAGES[activePhotoIdx] as any).fallbackUrl;
                  if (fallback && e.currentTarget.src !== fallback) {
                    e.currentTarget.src = fallback;
                  }
                }}
                alt={GALLERY_IMAGES[activePhotoIdx].title}
                className="max-w-full max-h-full object-contain rounded-2xl border border-white/10"
                onClick={(e) => e.stopPropagation()}
                referrerPolicy="no-referrer"
              />

              <button
                onClick={nextPhoto}
                className="absolute right-4 bg-white/5 hover:bg-white/10 border border-white/10 p-3 rounded-full text-white hover:text-primary transition-all flex items-center justify-center z-20 hover:scale-105 active:scale-95"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Bottom Caption Bar */}
            <div className="text-center px-6 max-w-xl">
              <p className="text-gray-300 text-sm italic">
                "{GALLERY_IMAGES[activePhotoIdx].caption}"
              </p>
              <div className="mt-4 flex justify-center gap-1.5">
                {GALLERY_IMAGES.map((_, i) => (
                  <button
                    key={i}
                    onClick={(e) => {
                      e.stopPropagation();
                      setActivePhotoIdx(i);
                    }}
                    className={`w-2.5 h-2.5 rounded-full transition-all ${
                      activePhotoIdx === i ? 'bg-primary w-6' : 'bg-white/20 hover:bg-white/40'
                    }`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

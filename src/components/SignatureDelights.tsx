import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Utensils, X, Star } from 'lucide-react';
import { MenuItem } from '../types';

interface SignatureItem {
  id: string;
  name: string;
  image: string;
  tag?: string;
  tagColor?: string;
  description: string;
  price: number;
  alt: string;
}

const SIGNATURES: SignatureItem[] = [
  {
    id: 'sig-1',
    name: 'Karnataka Masala Dosa',
    image: 'https://lh3.googleusercontent.com/aida/AP1WRLvSCWlEs6ZES81yNmmvOcQoBVZVKZlF4iBSn0jALxEKM2TvCxwvXM-Ab6jljszJv1uLafHM136YKQRgZDWpUhuxMyArRoeJWR1RIIXszrXnZLalfq84_EI17BX0uyM5GQFOSoVRhjoam917bCWBd1tudPk31L5F5n9tQyXz-bG6nIjgCZK0UFXRY9xFjyEE6BkyL_VY6j61SoOgDHOOew2-yo4Gus-edcH3R_YdxeUfFnjovVvnjctKgbBw',
    tag: 'Signature',
    tagColor: 'bg-primary/20 text-primary',
    description: 'Authentic spiced potato filling in a crispy, golden brown, pure ghee-brushed crepe. Served with piping hot sambar, creamy coconut chutney, and tangy tomato chutney.',
    price: 140,
    alt: 'Karnataka Special Masala Dosa served at Karnataka Cafe Gondia'
  },
  {
    id: 'sig-2',
    name: 'Paneer Dosa',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAzerwlz3b_wvRSj2Bg3gtqrTAcz0WWOI2TmnJ-_Ys-FBooPU1mvRn9tmuoTQjCcUWKdsdCP4JKmTImY-BE48PeHqx2wr5i5vhyvcFOYRCFTIwNwypwcIte94VpEjSvI6k_JkruOMTvlOv5iOpietD0zTx1CdrfbFx8qQOlUb1xBpGEUSFNuT8tC7B8AYlGvm9zicnWhXB4yQtLh9b4Ac3OA8LInNqh-j5K6FijZzFXxSJ8eo1zqG4sseIL2X4Ul82PTEHhEf_7k8z3',
    tag: 'Best Seller',
    tagColor: 'bg-emerald-500/20 text-emerald-400',
    description: 'Freshly crumbled tender cottage cheese seasoned with our secret South Indian spices & garden herbs, toasted to a delightful crisp.',
    price: 150,
    alt: 'Freshly roasted Paneer Dosa filled with cottage cheese at Karnataka Cafe Gondia'
  },
  {
    id: 'sig-3',
    name: 'Veg Extravaganza Pizza',
    image: 'https://lh3.googleusercontent.com/aida/AP1WRLvunW5D_trivbmY8HpqW6S4owXFhWse1qQXnKRdRmH-Vj2G0AcDwQsU5gV0w4N7Zm7YEKzjGjCQ_GgE0P1CbxCS3u-Vp8-QKys_H2tMk3dyRLQMFQBPvI1y6MwSqC-OUAUtLS1xg-BG3LxGmwrWZtAY6GK-zjF89V-1ig2DMycgxbO5di8yr7oUbTBCkJSkqR-C4-8pC4y8IA4WfgBOM_-aAI-P_ztpSRgJIWkSbIGSrF1dEAM1_yl7gh3Q',
    tag: "Chef's Choice",
    tagColor: 'bg-orange-500/20 text-orange-400',
    description: 'Hand tossed wood fired pizza crust layered with fresh marinara sauce, loaded with bell peppers, sweet corn, black olives, red onions, mushrooms, and rich bubbling mozzarella cheese.',
    price: 320,
    alt: 'Veg Extravaganza Pizza at La Pizzato Gondia'
  },
  {
    id: 'sig-4',
    name: 'White Sauce Pasta',
    image: 'https://lh3.googleusercontent.com/aida/AP1WRLvunW5D_trivbmY8HpqW6S4owXFhWse1qQXnKRdRmH-Vj2G0AcDwQsU5gV0w4N7Zm7YEKzjGjCQ_GgE0P1CbxCS3u-Vp8-QKys_H2tMk3dyRLQMFQBPvI1y6MwSqC-OUAUtLS1xg-BG3LxGmwrWZtAY6GK-zjF89V-1ig2DMycgxbO5di8yr7oUbTBCkJSkqR-C4-8pC4y8IA4WfgBOM_-aAI-P_ztpSRgJIWkSbIGSrF1dEAM1_yl7gh3Q',
    tag: 'Trending',
    tagColor: 'bg-purple-500/20 text-purple-400',
    description: 'Creamy, velvety penne pasta tossed in a rich, buttery white sauce and seasoned generously with premium fresh herbs, sautéed button mushrooms, and sweet corn.',
    price: 240,
    alt: 'Creamy White Sauce Pasta at La Pizzato Gondia'
  },
  {
    id: 'sig-5',
    name: 'Paneer Tikka Burger',
    image: 'https://lh3.googleusercontent.com/aida/AP1WRLvSCWlEs6ZES81yNmmvOcQoBVZVKZlF4iBSn0jALxEKM2TvCxwvXM-Ab6jljszJv1uLafHM136YKQRgZDWpUhuxMyArRoeJWR1RIIXszrXnZLalfq84_EI17BX0uyM5GQFOSoVRhjoam917bCWBd1tudPk31L5F5n9tQyXz-bG6nIjgCZK0UFXRY9xFjyEE6BkyL_VY6j61SoOgDHOOew2-yo4Gus-edcH3R_YdxeUfFnjovVvnjctKgbBw',
    tag: 'Local Favorite',
    tagColor: 'bg-amber-500/20 text-amber-400',
    description: 'Crisp layered tandoori-marinated paneer steak topped with house-made spicy sauce, fresh iceberg lettuce, ripe tomatoes, onion slices, served in sesame toasted artisan brioche buns.',
    price: 180,
    alt: 'Premium Paneer Tikka Burger served in Gondia Cafe'
  }
];

interface SignatureDelightsProps {
  onAddToCart: (item: { id: string; name: string; price: number }) => void;
}

export default function SignatureDelights({ onAddToCart }: SignatureDelightsProps) {
  const [selectedItem, setSelectedItem] = useState<SignatureItem | null>(null);

  return (
    <section className="py-24 overflow-hidden bg-[#0C0F0F] border-y border-white/5">
      <div className="mb-14 px-6 text-center">
        <span className="text-primary text-xs uppercase tracking-widest font-semibold inline-flex items-center gap-1">
          <Sparkles className="w-3.5 h-3.5" /> Spotlight Specials
        </span>
        <h2 className="font-serif text-3xl md:text-5xl text-primary font-bold mt-2 mb-4 leading-tight">
          Customer Favorite Dishes
        </h2>
        <div className="h-0.5 w-24 bg-primary mx-auto rounded-full"></div>
      </div>

      {/* Infinite Horizontal Marquee Roller */}
      <div className="relative w-full overflow-hidden py-4">
        {/* Shadow Overlays to blend edges */}
        <div className="absolute top-0 bottom-0 left-0 w-16 md:w-40 bg-gradient-to-r from-[#0C0F0F] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute top-0 bottom-0 right-0 w-16 md:w-40 bg-gradient-to-l from-[#0C0F0F] to-transparent z-10 pointer-events-none"></div>

        <div className="flex w-max gap-6 animate-marquee hover:[animation-play-state:paused]">
          {/* First Complete Pass */}
          {SIGNATURES.map((item) => (
            <div
              key={`pass1-${item.id}`}
              onClick={() => setSelectedItem(item)}
              className="glass glass-hover min-w-[280px] sm:min-w-[340px] max-w-[340px] rounded-2xl overflow-hidden cursor-pointer inline-block whitespace-normal group"
            >
              <div className="h-48 sm:h-56 relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                {item.tag && (
                  <span className={`absolute top-4 left-4 px-3 py-1 rounded-full text-[10px] uppercase font-bold tracking-wider ${item.tagColor}`}>
                    {item.tag}
                  </span>
                )}
                <span className="absolute bottom-4 right-4 text-primary font-bold text-lg font-mono tracking-wide bg-black/60 backdrop-blur-md px-3 py-1 rounded-lg">
                  ₹{item.price}
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-serif text-lg sm:text-xl text-white font-bold group-hover:text-primary transition-colors line-clamp-1">
                  {item.name}
                </h3>
                <p className="text-gray-400 text-xs sm:text-sm mt-2 line-clamp-2 leading-relaxed">
                  {item.description}
                </p>
                <div className="mt-4 flex items-center justify-between text-xs text-primary font-semibold">
                  <span className="inline-flex items-center gap-1 text-gray-500 group-hover:text-primary transition-colors font-sans">
                    <Utensils className="w-3.5 h-3.5" /> View Info
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="text-xs bg-white/5 px-2 py-1 rounded-md text-gray-300">
                      4.9 ★
                    </span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onAddToCart({ id: item.id, name: item.name, price: item.price });
                      }}
                      className="bg-primary hover:bg-[#dfba45] text-black font-extrabold px-3 py-1.5 rounded-full text-[10px] uppercase tracking-wider transition-all scale-95 active:scale-90"
                    >
                      + Add
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Second Duplicate Pass for Infinite Seam */}
          {SIGNATURES.map((item) => (
            <div
              key={`pass2-${item.id}`}
              onClick={() => setSelectedItem(item)}
              className="glass glass-hover min-w-[280px] sm:min-w-[340px] max-w-[340px] rounded-2xl overflow-hidden cursor-pointer inline-block whitespace-normal group"
            >
              <div className="h-48 sm:h-56 relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                {item.tag && (
                  <span className={`absolute top-4 left-4 px-3 py-1 rounded-full text-[10px] uppercase font-bold tracking-wider ${item.tagColor}`}>
                    {item.tag}
                  </span>
                )}
                <span className="absolute bottom-4 right-4 text-primary font-bold text-lg font-mono tracking-wide bg-black/60 backdrop-blur-md px-3 py-1 rounded-lg">
                  ₹{item.price}
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-serif text-lg sm:text-xl text-white font-bold group-hover:text-primary transition-colors line-clamp-1">
                  {item.name}
                </h3>
                <p className="text-gray-400 text-xs sm:text-sm mt-2 line-clamp-2 leading-relaxed">
                  {item.description}
                </p>
                <div className="mt-4 flex items-center justify-between text-xs text-primary font-semibold">
                  <span className="inline-flex items-center gap-1 text-gray-500 group-hover:text-primary transition-colors font-sans">
                    <Utensils className="w-3.5 h-3.5" /> View Info
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="text-xs bg-white/5 px-2 py-1 rounded-md text-gray-300">
                      4.9 ★
                    </span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onAddToCart({ id: item.id, name: item.name, price: item.price });
                      }}
                      className="bg-primary hover:bg-[#dfba45] text-black font-extrabold px-3 py-1.5 rounded-full text-[10px] uppercase tracking-wider transition-all scale-95 active:scale-90"
                    >
                      + Add
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox / Item Detail Modal Overlay */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 20, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="bg-[#121414] border border-white/10 rounded-2xl overflow-hidden max-w-lg w-full shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 bg-black/60 p-2 rounded-full text-white hover:text-primary backdrop-blur-md border border-white/10 z-10 hover:scale-105 active:scale-95 transition"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="h-64 relative">
                <img
                  src={selectedItem.image}
                  alt={selectedItem.alt}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121414] via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-6">
                  {selectedItem.tag && (
                    <span className={`px-3 py-1 rounded-full text-[10px] uppercase font-bold tracking-wider ${selectedItem.tagColor}`}>
                      {selectedItem.tag}
                    </span>
                  )}
                  <h3 className="font-serif text-2xl text-white font-bold mt-2">
                    {selectedItem.name}
                  </h3>
                </div>
              </div>

              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center gap-1 text-primary text-sm font-semibold">
                    <Star className="w-4 h-4 fill-primary" />
                    <Star className="w-4 h-4 fill-primary" />
                    <Star className="w-4 h-4 fill-primary" />
                    <Star className="w-4 h-4 fill-primary" />
                    <Star className="w-4 h-4 fill-primary" />
                    <span className="text-xs text-gray-400 ml-2">(48 reviews)</span>
                  </div>
                  <span className="text-2xl font-serif text-primary font-bold">
                    ₹{selectedItem.price}
                  </span>
                </div>

                <p className="text-gray-300 text-sm leading-relaxed mb-6">
                  {selectedItem.description}
                </p>

                <div className="p-4 bg-white/5 rounded-xl flex items-center justify-between">
                  <div className="text-xs text-gray-400">
                    <span className="block text-white font-bold uppercase tracking-wider mb-0.5">Ingredients</span>
                    Fresh, Pure Vegetarian & Handcrafted Daily
                  </div>
                  <div className="text-xs text-right text-gray-400">
                    <span className="block text-white font-bold uppercase tracking-wider mb-0.5">Prep Time</span>
                    10 - 15 Mins
                  </div>
                </div>

                <div className="mt-6 flex gap-3">
                  <button
                    onClick={() => {
                      onAddToCart({ id: selectedItem.id, name: selectedItem.name, price: selectedItem.price });
                      setSelectedItem(null);
                    }}
                    className="flex-1 bg-primary hover:bg-[#dfba45] text-black font-extrabold py-3.5 rounded-full text-xs uppercase tracking-wider hover:scale-103 active:scale-95 transition-all text-center flex items-center justify-center gap-2 shadow-[0_4px_15px_rgba(242,202,80,0.3)]"
                  >
                    Add to order • ₹{selectedItem.price}
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

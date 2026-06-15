import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { INITIAL_MENU_ITEMS } from '../data';
import { MenuItem, CartItem } from '../types';
import { Search, Heart, Soup, Pizza, Flame, Sparkles, Coffee, ThumbsUp, AlertCircle, FileText } from 'lucide-react';

interface MenuSectionProps {
  onAddToCart: (item: { id: string; name: string; price: number }) => void;
  cart: CartItem[];
}

export default function MenuSection({ onAddToCart, cart }: MenuSectionProps) {
  const [items, setItems] = useState<MenuItem[]>(INITIAL_MENU_ITEMS);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'south-indian' | 'pizza-italian' | 'north-indian' | 'beverages-desserts'>('all');
  const [favorites, setFavorites] = useState<string[]>([]);
  const [showFullMenuModal, setShowFullMenuModal] = useState(false);
  const [printSuccess, setPrintSuccess] = useState(false);

  const triggerPrint = () => {
    setPrintSuccess(true);
    setTimeout(() => {
      setPrintSuccess(false);
    }, 4000);
    try {
      window.print();
    } catch (e) {
      console.warn("Printing might be restricted in this sandboxed preview iframe.", e);
    }
  };

  // Toggle favorite dish
  const toggleFavorite = (id: string) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((fid) => fid !== id) : [...prev, id]
    );
  };

  // Filter items based on selected category and text search
  const filteredItems = items.filter((item) => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // South Indian items
  const southIndian = items.filter((i) => i.category === 'south-indian');
  // Pizza & Italian items
  const pizzaItalian = items.filter((i) => i.category === 'pizza-italian');
  // North Indian items
  const northIndian = items.filter((i) => i.category === 'north-indian');

  return (
    <section id="menu" className="py-24 bg-[#141617] px-6 md:px-12 scroll-mt-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-primary text-xs uppercase tracking-widest font-bold inline-flex items-center gap-1">
            <Soup className="w-3.5 h-3.5" /> Culinary Masterpiece
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-primary font-bold mt-2 mb-3 leading-tight">
            Our Curated Menu
          </h2>
          <p className="text-gray-400 font-sans text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
            Traditional secret recipes curated meticulously for local gourmands
          </p>
          <div className="h-0.5 w-24 bg-primary mx-auto rounded-full mt-6"></div>
        </div>

        {/* Traditional Structured View (Column Grid) matching the exact screenshot layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {/* Column 1: South Indian */}
          <div className="glass p-8 rounded-3xl relative group border border-white/5 bg-white/[0.02]">
            <div className="flex items-center gap-3.5 mb-8 pb-3 border-b border-white/5">
              <div className="bg-primary/15 p-2 rounded-xl text-primary">
                <Soup className="w-6 h-6" />
              </div>
              <div>
                <h2 className="font-serif text-xl text-white font-bold">Authentic South Indian Food in Gondia</h2>
                <p className="text-gray-500 text-[10px] uppercase font-bold tracking-wider mt-0.5">Steamed &amp; Crisped</p>
              </div>
            </div>
            <ul className="space-y-6">
              {southIndian.slice(0, 4).map((item) => {
                const cartItem = cart.find((c) => c.id === item.id);
                return (
                  <li
                    key={item.id}
                    onClick={() => onAddToCart({ id: item.id, name: item.name, price: item.price })}
                    className="group/item flex flex-col gap-1 cursor-pointer hover:bg-white/[0.03] p-3 -m-2 rounded-2xl transition-all duration-300 relative"
                  >
                    <div className="flex justify-between items-baseline">
                      <span className="text-white group-hover/item:text-primary transition-colors font-medium flex items-center gap-1.5 truncate">
                        {item.name}
                        {cartItem && (
                          <span className="bg-primary text-black text-[9px] font-bold px-1.5 py-0.5 rounded font-mono shrink-0">
                            {cartItem.quantity}x
                          </span>
                        )}
                      </span>
                      <div className="flex-grow mx-3 border-b border-dashed border-white/10"></div>
                      <div className="flex items-center gap-2 shrink-0">
                        <span className="font-bold text-primary font-mono whitespace-nowrap">₹{item.price}</span>
                        <span className="bg-white/5 group-hover/item:bg-primary group-hover/item:text-black text-gray-400 text-[10px] font-bold px-2 py-0.5 rounded-lg transition-all uppercase tracking-wider font-sans">
                          + Add
                        </span>
                      </div>
                    </div>
                    <p className="text-xs text-gray-500 leading-normal line-clamp-1">{item.description}</p>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Column 2: Pizza & Italian */}
          <div className="glass p-8 rounded-3xl relative group border border-white/5 bg-white/[0.02]">
            <div className="flex items-center gap-3.5 mb-8 pb-3 border-b border-b-white/5">
              <div className="bg-primary/15 p-2 rounded-xl text-primary">
                <Pizza className="w-6 h-6" />
              </div>
              <div>
                <h2 className="font-serif text-xl text-white font-bold">Premium Pizza &amp; Pasta Experience</h2>
                <p className="text-gray-500 text-[10px] uppercase font-bold tracking-wider mt-0.5">Wood-Fired &amp; Creamy</p>
              </div>
            </div>
            <ul className="space-y-6">
              {pizzaItalian.slice(0, 4).map((item) => {
                const cartItem = cart.find((c) => c.id === item.id);
                return (
                  <li
                    key={item.id}
                    onClick={() => onAddToCart({ id: item.id, name: item.name, price: item.price })}
                    className="group/item flex flex-col gap-1 cursor-pointer hover:bg-white/[0.03] p-3 -m-2 rounded-2xl transition-all duration-300 relative"
                  >
                    <div className="flex justify-between items-baseline">
                      <span className="text-white group-hover/item:text-primary transition-colors font-medium flex items-center gap-1.5 truncate">
                        {item.name}
                        {cartItem && (
                          <span className="bg-primary text-black text-[9px] font-bold px-1.5 py-0.5 rounded font-mono shrink-0">
                            {cartItem.quantity}x
                          </span>
                        )}
                      </span>
                      <div className="flex-grow mx-3 border-b border-dashed border-white/10"></div>
                      <div className="flex items-center gap-2 shrink-0">
                        <span className="font-bold text-primary font-mono whitespace-nowrap">₹{item.price}</span>
                        <span className="bg-white/5 group-hover/item:bg-primary group-hover/item:text-black text-gray-400 text-[10px] font-bold px-2 py-0.5 rounded-lg transition-all uppercase tracking-wider font-sans">
                          + Add
                        </span>
                      </div>
                    </div>
                    <p className="text-xs text-gray-500 leading-normal line-clamp-1">{item.description}</p>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Column 3: North Indian */}
          <div className="glass p-8 rounded-3xl relative group border border-white/5 bg-white/[0.02]">
            <div className="flex items-center gap-3.5 mb-8 pb-3 border-b border-white/5">
              <div className="bg-primary/15 p-2 rounded-xl text-primary">
                <Flame className="w-6 h-6" />
              </div>
              <div>
                <h2 className="font-serif text-xl text-white font-bold">Family Restaurant Flavors in Gondia</h2>
                <p className="text-gray-500 text-[10px] uppercase font-bold tracking-wider mt-0.5">Smoky &amp; Butter Filled</p>
              </div>
            </div>
            <ul className="space-y-6">
              {northIndian.slice(0, 4).map((item) => {
                const cartItem = cart.find((c) => c.id === item.id);
                return (
                  <li
                    key={item.id}
                    onClick={() => onAddToCart({ id: item.id, name: item.name, price: item.price })}
                    className="group/item flex flex-col gap-1 cursor-pointer hover:bg-white/[0.03] p-3 -m-2 rounded-2xl transition-all duration-300 relative"
                  >
                    <div className="flex justify-between items-baseline">
                      <span className="text-white group-hover/item:text-primary transition-colors font-medium flex items-center gap-1.5 truncate">
                        {item.name}
                        {cartItem && (
                          <span className="bg-primary text-black text-[9px] font-bold px-1.5 py-0.5 rounded font-mono shrink-0">
                            {cartItem.quantity}x
                          </span>
                        )}
                      </span>
                      <div className="flex-grow mx-3 border-b border-dashed border-white/10"></div>
                      <div className="flex items-center gap-2 shrink-0">
                        <span className="font-bold text-primary font-mono whitespace-nowrap">₹{item.price}</span>
                        <span className="bg-white/5 group-hover/item:bg-primary group-hover/item:text-black text-gray-400 text-[10px] font-bold px-2 py-0.5 rounded-lg transition-all uppercase tracking-wider font-sans">
                          + Add
                        </span>
                      </div>
                    </div>
                    <p className="text-xs text-gray-500 leading-normal line-clamp-1">{item.description}</p>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Dynamic Interactive Filterable Menu Section */}
        <div id="interactive-menu-explorer" className="glass p-6 md:p-8 rounded-3xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.4)]">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8 border-b border-white/5 pb-6">
            <div>
              <h3 className="text-white text-lg font-bold font-serif flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-primary" /> Interactive Menu Explorer
              </h3>
              <p className="text-gray-400 text-xs mt-0.5">Filter, search, find popular dishes, and bookmark favorites</p>
            </div>

            {/* Live Search input */}
            <div className="relative w-full md:w-72">
              <input
                type="text"
                value={searchQuery}
                aria-label="Search special dishes"
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search special dishes..."
                className="w-full bg-black/45 text-white placeholder-gray-500 border border-white/10 focus:border-primary rounded-full px-5 py-2.5 pl-11 text-xs outline-none focus:ring-1 focus:ring-primary transition"
              />
              <Search className="absolute left-4 top-3 w-4 h-4 text-gray-500" />
            </div>
          </div>

          {/* Interactive Categories Tabs */}
          <div className="flex gap-2 flex-wrap mb-10 overflow-x-auto pb-1 no-scrollbar">
            {(
              [
                { id: 'all', label: 'All Specials', icon: Soup },
                { id: 'south-indian', label: 'South Indian Dosa/Idli', icon: Soup },
                { id: 'pizza-italian', label: 'Woodfired Pizza/Italian', icon: Pizza },
                { id: 'north-indian', label: 'Clay-oven Tandoor', icon: Flame },
                { id: 'beverages-desserts', label: 'Artisanal Drinks/Sweets', icon: Coffee }
              ] as const
            ).map((cat) => {
              const Icon = cat.icon;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4.5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider flex items-center gap-2 transition-all ${
                    selectedCategory === cat.id
                      ? 'bg-primary text-black font-bold shadow-[0_0_15px_rgba(242,202,80,0.3)]'
                      : 'bg-white/5 text-gray-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Menu Items Grid with animation */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item) => {
                const cartItem = cart.find((c) => c.id === item.id);
                return (
                  <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    key={item.id}
                    onClick={() => onAddToCart({ id: item.id, name: item.name, price: item.price })}
                    className="bg-black/30 border border-white/10 p-5.5 rounded-2xl relative flex flex-col justify-between group hover:border-[#F2CA50]/30 hover:bg-[#F2CA50]/5 transition-all cursor-pointer"
                  >
                    <div>
                      <div className="flex justify-between items-start gap-4">
                        <div className="flex flex-col">
                          <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                            {item.isPopular && (
                              <span className="text-[9px] uppercase font-bold tracking-widest px-2 py-0.5 rounded bg-primary/20 text-primary">
                                Popular Selection
                              </span>
                            )}
                            {item.isVegetarian && (
                              <span className="text-[9px] uppercase font-bold tracking-widest px-2 py-0.5 rounded bg-green-500/10 text-green-400 border border-green-500/20">
                                Veg
                              </span>
                            )}
                          </div>
                          <h4 className="text-white font-serif text-base font-bold group-hover:text-primary transition-colors">
                            {item.name}
                          </h4>
                        </div>
                        <span className="font-bold text-primary font-mono text-base bg-white/5 px-2.5 py-1 rounded shrink-0">
                          ₹{item.price}
                        </span>
                      </div>

                      <p className="text-gray-400 text-xs mt-3 leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-white/5 flex justify-between items-center">
                      <span className="text-[10px] text-black font-extrabold capitalize bg-primary px-3 py-1 rounded-full flex items-center gap-1">
                        + Add to order
                        {cartItem && (
                          <span className="bg-black text-white text-[9px] font-bold px-1.5 py-0.5 rounded-full font-mono">
                            {cartItem.quantity}
                          </span>
                        )}
                      </span>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleFavorite(item.id);
                        }}
                        className="p-1.5 rounded-full hover:bg-white/10 transition-colors"
                        title={favorites.includes(item.id) ? 'Remove Favorite' : 'Save Favorite'}
                      >
                        <Heart
                          className={`w-4 h-4 transition-colors ${
                            favorites.includes(item.id) ? 'text-rose-500 fill-rose-500' : 'text-gray-500 hover:text-rose-500'
                          }`}
                        />
                      </button>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>

            {filteredItems.length === 0 && (
              <div className="col-span-full py-12 flex flex-col items-center justify-center text-center">
                <AlertCircle className="w-8 h-8 text-gray-400 mb-2" />
                <p className="text-gray-300 font-bold">No dishes found matching your query</p>
                <p className="text-gray-500 text-xs mt-1">Try resetting your category tab filter or typing something else</p>
              </div>
            )}
          </motion.div>
        </div>

        {/* View Full Menu Action Block */}
        <div className="mt-14 text-center">
          <button
            onClick={() => setShowFullMenuModal(true)}
            className="bg-secondary/15 text-secondary border border-secondary hover:bg-secondary hover:text-black font-bold px-10 py-3.5 rounded-full text-xs uppercase tracking-wider transition-all inline-flex items-center gap-2"
          >
            <FileText className="w-4 h-4" /> View Full Digital Menu (PDF)
          </button>
        </div>
      </div>

      {/* Cinematic Full Menu printable modal */}
      <AnimatePresence>
        {showFullMenuModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/85 backdrop-blur-md z-50 flex items-center justify-center p-4"
            onClick={() => setShowFullMenuModal(false)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              className="bg-[#121414] border border-white/10 rounded-2xl max-w-4xl w-full h-[85vh] flex flex-col overflow-hidden relative shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="p-6 border-b border-white/10 flex justify-between items-center">
                <div>
                  <h3 className="font-serif text-xl text-primary font-bold">Karnataka Cafe &amp; La Pizzato</h3>
                  <p className="text-gray-400 text-xs">Authentic &amp; Fusion Menu &bull; Pure Vegetarian</p>
                </div>
                <button
                  onClick={() => setShowFullMenuModal(false)}
                  className="bg-white/10 hover:bg-white/20 p-2 rounded-full text-white hover:text-primary transition-all"
                >
                  Close Menu
                </button>
              </div>

              {/* Scrollable Printable list */}
              <div className="p-8 overflow-y-auto flex-1 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                {/* Section South Indian */}
                <div>
                  <h4 className="font-serif text-primary text-base font-bold uppercase tracking-wider mb-4 pb-1 border-b border-white/10 flex items-center gap-2">
                    <Soup className="w-4 h-4" /> South Indian Selection
                  </h4>
                  <div className="space-y-4">
                    {southIndian.map((i) => {
                      const cartItem = cart.find((c) => c.id === i.id);
                      return (
                        <div
                          key={i.id}
                          onClick={() => onAddToCart({ id: i.id, name: i.name, price: i.price })}
                          className="flex flex-col font-sans cursor-pointer hover:bg-white/5 p-2 rounded-xl -mx-2 transition"
                        >
                          <div className="flex justify-between items-baseline font-medium text-sm">
                            <span className="text-white flex items-center gap-2">
                              {i.name}
                              {cartItem && (
                                <span className="bg-primary text-black text-[9px] font-bold px-1.5 py-0.5 rounded font-mono">
                                  {cartItem.quantity}x
                                </span>
                              )}
                            </span>
                            <div className="flex items-center gap-2">
                              <span className="text-primary tracking-wide font-mono">₹{i.price}</span>
                              <span className="text-3xs bg-white/10 text-gray-400 font-bold px-1.5 py-0.5 rounded uppercase tracking-wider">
                                + ADD
                              </span>
                            </div>
                          </div>
                          <p className="text-xxs text-gray-400 mt-1">{i.description}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Section Pizza & Italian */}
                <div>
                  <h4 className="font-serif text-primary text-base font-bold uppercase tracking-wider mb-4 pb-1 border-b border-white/10 flex items-center gap-2">
                    <Pizza className="w-4 h-4" /> Pizza &amp; Italian Specialities
                  </h4>
                  <div className="space-y-4">
                    {pizzaItalian.map((i) => {
                      const cartItem = cart.find((c) => c.id === i.id);
                      return (
                        <div
                          key={i.id}
                          onClick={() => onAddToCart({ id: i.id, name: i.name, price: i.price })}
                          className="flex flex-col font-sans cursor-pointer hover:bg-white/5 p-2 rounded-xl -mx-2 transition"
                        >
                          <div className="flex justify-between items-baseline font-medium text-sm">
                            <span className="text-white flex items-center gap-2">
                              {i.name}
                              {cartItem && (
                                <span className="bg-primary text-black text-[9px] font-bold px-1.5 py-0.5 rounded font-mono">
                                  {cartItem.quantity}x
                                </span>
                              )}
                            </span>
                            <div className="flex items-center gap-2">
                              <span className="text-primary tracking-wide font-mono">₹{i.price}</span>
                              <span className="text-3xs bg-white/10 text-gray-400 font-bold px-1.5 py-0.5 rounded uppercase tracking-wider">
                                + ADD
                              </span>
                            </div>
                          </div>
                          <p className="text-xxs text-gray-400 mt-1">{i.description}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Section North Indian */}
                <div className="md:mt-4">
                  <h4 className="font-serif text-primary text-base font-bold uppercase tracking-wider mb-4 pb-1 border-b border-white/10 flex items-center gap-2">
                    <Flame className="w-4 h-4" /> Clay oven North Indian
                  </h4>
                  <div className="space-y-4">
                    {northIndian.map((i) => {
                      const cartItem = cart.find((c) => c.id === i.id);
                      return (
                        <div
                          key={i.id}
                          onClick={() => onAddToCart({ id: i.id, name: i.name, price: i.price })}
                          className="flex flex-col font-sans cursor-pointer hover:bg-white/5 p-2 rounded-xl -mx-2 transition"
                        >
                          <div className="flex justify-between items-baseline font-medium text-sm">
                            <span className="text-white flex items-center gap-2">
                              {i.name}
                              {cartItem && (
                                <span className="bg-primary text-black text-[9px] font-bold px-1.5 py-0.5 rounded font-mono">
                                  {cartItem.quantity}x
                                </span>
                              )}
                            </span>
                            <div className="flex items-center gap-2">
                              <span className="text-primary tracking-wide font-mono">₹{i.price}</span>
                              <span className="text-3xs bg-white/10 text-gray-400 font-bold px-1.5 py-0.5 rounded uppercase tracking-wider">
                                + ADD
                              </span>
                            </div>
                          </div>
                          <p className="text-xxs text-gray-400 mt-1">{i.description}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Section Beverages & Desserts */}
                <div className="md:mt-4">
                  <h4 className="font-serif text-primary text-base font-bold uppercase tracking-wider mb-4 pb-1 border-b border-white/10 flex items-center gap-2">
                    <Coffee className="w-4 h-4" /> Drinks &amp; Dessert treats
                  </h4>
                  <div className="space-y-4">
                    {items
                      .filter((i) => i.category === 'beverages-desserts')
                      .map((i) => {
                        const cartItem = cart.find((c) => c.id === i.id);
                        return (
                          <div
                            key={i.id}
                            onClick={() => onAddToCart({ id: i.id, name: i.name, price: i.price })}
                            className="flex flex-col font-sans cursor-pointer hover:bg-white/5 p-2 rounded-xl -mx-2 transition"
                          >
                            <div className="flex justify-between items-baseline font-medium text-sm">
                              <span className="text-white flex items-center gap-2">
                                {i.name}
                                {cartItem && (
                                  <span className="bg-primary text-black text-[9px] font-bold px-1.5 py-0.5 rounded font-mono">
                                    {cartItem.quantity}x
                                  </span>
                                )}
                              </span>
                              <div className="flex items-center gap-2">
                                <span className="text-primary tracking-wide font-mono">₹{i.price}</span>
                                <span className="text-3xs bg-white/10 text-gray-300 font-bold px-1.5 py-0.5 rounded uppercase tracking-wider">
                                  + ADD
                                </span>
                              </div>
                            </div>
                            <p className="text-xxs text-gray-400 mt-1">{i.description}</p>
                          </div>
                        );
                      })}
                  </div>
                </div>
              </div>

              {/* Footer Actions */}
              <div className="p-6 border-t border-white/10 bg-black/40 relative">
                <AnimatePresence>
                  {printSuccess && (
                     <motion.div
                       initial={{ opacity: 0, y: 10 }}
                       animate={{ opacity: 1, y: 0 }}
                       exit={{ opacity: 0, y: 10 }}
                       className="absolute bottom-22 left-6 right-6 p-4.5 rounded-xl bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs flex items-center gap-2.5 shadow-lg backdrop-blur-md"
                     >
                       <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                       <span>Print request sent! Choose <strong>"Save as PDF"</strong> in your browser print destination menu to download.</span>
                     </motion.div>
                  )}
                </AnimatePresence>

                <div className="flex justify-between items-center flex-wrap gap-4 w-full">
                  <span className="text-xs text-gray-400">
                    Prices subject to standard packaging &amp; service charges. GST extra.
                  </span>
                  <button
                    onClick={triggerPrint}
                    className="bg-primary text-black font-bold text-xs py-2.5 px-6 rounded-full uppercase tracking-wider hover:scale-105 active:scale-95 transition-all shadow-[0_0_15px_rgba(242,202,80,0.2)]"
                  >
                    Print / Download Menu (PDF)
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

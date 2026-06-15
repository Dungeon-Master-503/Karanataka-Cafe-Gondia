import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingCart, X, Plus, Minus, Send, Check, Trash2, ArrowRight } from 'lucide-react';
import { CartItem } from '../types';

interface CartDrawerProps {
  cart: CartItem[];
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: (item: { id: string; name: string; price: number }) => void;
  onRemoveFromCart: (id: string) => void;
  onClearCart: () => void;
}

export default function CartDrawer({
  cart,
  isOpen,
  onClose,
  onAddToCart,
  onRemoveFromCart,
  onClearCart
}: CartDrawerProps) {
  const [specialNote, setSpecialNote] = useState('');
  const [isOrdering, setIsOrdering] = useState(false);

  const totalItems = cart.reduce((acc, i) => acc + i.quantity, 0);
  const totalPrice = cart.reduce((acc, i) => acc + i.price * i.quantity, 0);

  const handleWhatsAppOrder = () => {
    setIsOrdering(true);
    
    // Construct a beautiful, readable WhatsApp order message
    let message = `*🍽️ Karnataka Cafe & La Pizzato - WhatsApp Order* \n`;
    message += `===================================\n`;
    message += `📍 *Delivery / Pickup Request*\n`;
    message += `Gupta Tower, Saras Chowk, Gondia\n\n`;
    message += `📋 *ORDER SUMMARY:*\n`;

    cart.forEach((item, index) => {
      const itemSubtotal = item.price * item.quantity;
      message += `${index + 1}. *${item.name}* \n`;
      message += `   Quantity: _${item.quantity}_ x ₹${item.price} = *₹${itemSubtotal}*\n`;
    });

    message += `===================================\n`;
    message += `💰 *TOTAL AMOUNT:* *₹${totalPrice}*\n`;
    
    if (specialNote.trim()) {
      message += `✍️ *SPECIAL INSTRUCTIONS:* _"${specialNote.trim()}"_\n`;
    }
    
    message += `===================================\n`;
    message += `⚡ _Please confirm this order, provide prep time and billing details._`;

    const encodedText = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/919881115030?text=${encodedText}`;

    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
      setIsOrdering(false);
    }, 800);
  };

  return (
    <>
      {/* Floating cart quick trigger button that appears when items exist in cart */}
      <AnimatePresence>
        {totalItems > 0 && !isOpen && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 50 }}
            onClick={onClose} // Toggle open
            className="fixed bottom-24 right-6 z-50 bg-[#F2CA50] hover:bg-[#dfba45] text-black font-bold p-4 rounded-full shadow-[0_10px_30px_rgba(242,202,80,0.4)] flex items-center gap-2 group transform active:scale-95 transition"
            title="Open cart and checkout"
          >
            <div className="relative">
              <ShoppingCart className="w-6 h-6" />
              <span className="absolute -top-3.5 -right-3.5 bg-rose-600 text-white text-3xs font-bold w-5.5 h-5.5 rounded-full flex items-center justify-center border border-[#141617] animate-bounce">
                {totalItems}
              </span>
            </div>
            <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 ease-in-out font-mono text-xs uppercase tracking-wider font-extrabold pr-1">
              View Order (₹{totalPrice})
            </span>
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop cover overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={onClose}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 transition-opacity"
            />

            {/* Cart Panel Slide out wrapper */}
            <motion.aside
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 bottom-0 w-full sm:max-w-md bg-[#111314] border-l border-white/10 z-50 flex flex-col shadow-2xl overflow-hidden"
            >
              {/* Header block */}
              <div className="p-6 border-b border-white/10 flex justify-between items-center bg-black/30">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary">
                    <ShoppingCart className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg text-white font-bold">Your Order Cart</h3>
                    <p className="text-gray-400 text-xs">{totalItems} food items currently selected</p>
                  </div>
                </div>
                <button
                  onClick={onClose}
                  className="bg-white/5 hover:bg-white/10 p-2 rounded-full text-gray-400 hover:text-white transition cursor-pointer"
                  aria-label="Close cart drawer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Items List block */}
              <div className="flex-1 overflow-y-auto p-6 space-y-4 no-scrollbar">
                {cart.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-center p-6">
                    <div className="p-4 bg-white/5 rounded-full mb-4 border border-white/5">
                      <ShoppingCart className="w-8 h-8 text-gray-500" />
                    </div>
                    <p className="text-gray-300 font-bold">Your cart is empty</p>
                    <p className="text-gray-500 text-xs mt-1 max-w-xs leading-relaxed">
                      Explore our delicious dishes downstairs in the menu explorer and click any item to add it here.
                    </p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="flex justify-between items-center text-xs text-gray-500 uppercase tracking-widest font-mono pb-2 border-b border-white/5">
                      <span>Selected Specialities</span>
                      <button
                        onClick={onClearCart}
                        className="text-rose-500 hover:text-rose-400 flex items-center gap-1 transition cursor-pointer"
                        title="Clear all ordered items"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                        <span>Clear All</span>
                      </button>
                    </div>

                    {cart.map((item) => {
                      const subtotal = item.price * item.quantity;
                      return (
                        <motion.div
                          layout
                          key={item.id}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, scale: 0.95 }}
                          className="bg-white/5 border border-white/5 p-4 rounded-xl flex items-center justify-between gap-4 group"
                        >
                          <div className="flex-1 min-w-0">
                            <h4 className="text-white text-sm font-medium truncate group-hover:text-primary transition-colors">
                              {item.name}
                            </h4>
                            <p className="text-xs text-primary font-bold mt-1 font-mono">
                              ₹{item.price} <span className="text-gray-500 text-3xs font-sans font-normal uppercase tracking-wider mx-1">each</span>
                            </p>
                          </div>

                          <div className="flex items-center gap-3">
                            {/* Quantity Controls */}
                            <div className="flex items-center bg-black/40 border border-white/10 rounded-full p-1 self-center scale-90">
                              <button
                                onClick={() => onRemoveFromCart(item.id)}
                                className="p-1 rounded-full text-gray-400 hover:text-white hover:bg-white/10 transition cursor-pointer"
                                aria-label="Decrease quantity"
                              >
                                <Minus className="w-3.5 h-3.5" />
                              </button>
                              <span className="w-7 text-center font-mono text-sm font-bold text-white">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() => onAddToCart({ id: item.id, name: item.name, price: item.price })}
                                className="p-1 rounded-full text-gray-400 hover:text-white hover:bg-white/10 transition cursor-pointer"
                                aria-label="Increase quantity"
                              >
                                <Plus className="w-3.5 h-3.5" />
                              </button>
                            </div>

                            {/* Subtotal */}
                            <div className="text-right w-16">
                              <span className="font-mono text-xs font-extrabold text-white">
                                ₹{subtotal}
                              </span>
                            </div>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* Checkout / Summary segment */}
              {cart.length > 0 && (
                <div className="p-6 border-t border-white/10 bg-black/40 space-y-4">
                  {/* Special Note Input field */}
                  <div className="space-y-1.5">
                    <label htmlFor="special-notes" className="text-xs text-gray-400 font-mono uppercase tracking-wider block">
                      Special Order Instructions (Optional)
                    </label>
                    <input
                      id="special-notes"
                      type="text"
                      value={specialNote}
                      onChange={(e) => setSpecialNote(e.target.value)}
                      placeholder="e.g. Extra spicy, No onion, Make it crispy..."
                      className="w-full bg-black/40 text-xs text-white placeholder-gray-500 border border-white/10 rounded-xl px-4 py-3 focus:border-primary outline-none focus:ring-1 focus:ring-primary transition"
                    />
                  </div>

                  {/* Pricing Tally list */}
                  <div className="space-y-2 border-t border-white/5 pt-4 text-xs">
                    <div className="flex justify-between text-gray-400">
                      <span>Items Subtotal</span>
                      <span className="font-mono">₹{totalPrice}</span>
                    </div>
                    <div className="flex justify-between text-gray-400">
                      <span>Delivery / Packaging</span>
                      <span className="text-emerald-500 bg-emerald-500/10 px-1.5 py-0.5 rounded text-3xs uppercase tracking-widest font-bold">FREE</span>
                    </div>
                    <div className="flex justify-between text-white text-sm font-bold pt-2 border-t border-dashed border-white/10">
                      <span className="font-serif">Grand Estimated Total</span>
                      <span className="font-mono text-primary text-base">₹{totalPrice}</span>
                    </div>
                  </div>

                  {/* Primary WhatsApp Direct CTA */}
                  <button
                    onClick={handleWhatsAppOrder}
                    disabled={isOrdering}
                    className="w-full bg-[#25D366] hover:bg-[#20ba59] text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2.5 shadow-[0_4px_15px_rgba(37,211,102,0.3)] hover:shadow-[0_4px_25px_rgba(37,211,102,0.5)] transform active:scale-98 transition disabled:opacity-50 text-xs sm:text-sm uppercase tracking-wider font-extrabold cursor-pointer"
                  >
                    {isOrdering ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                        <span>Compiling Order...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 fill-white" />
                        <span>Place Order via WhatsApp Now</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <p className="text-xxs text-gray-500 text-center leading-normal">
                    Clicking will redirect to our verified WhatsApp business number <strong>+91 9881115030</strong> to finalize cooking prep and dispatch.
                  </p>
                </div>
              )}
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

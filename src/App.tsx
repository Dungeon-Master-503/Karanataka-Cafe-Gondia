import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import SignatureDelights from './components/SignatureDelights';
import AboutHeritage from './components/AboutHeritage';
import GallerySection from './components/GallerySection';
import MenuSection from './components/MenuSection';
import ReviewsSection from './components/ReviewsSection';
import BookingForm from './components/BookingForm';
import Footer from './components/Footer';
import { Reservation, CartItem } from './types';
import { MessageSquare, ArrowUp, CalendarCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import SEOLandings from './components/SEOLandings';
import { SEO_PAGES } from './seoData';
import CartDrawer from './components/CartDrawer';

export default function App() {
  const [activeReservations, setActiveReservations] = useState<Reservation[]>([]);
  const [activeNavItem, setActiveNavItem] = useState('hero');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  
  // Cart state
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Cart operations
  const handleAddToCart = (item: { id: string; name: string; price: number }) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.id === item.id);
      if (existing) {
        return prev.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, { id: item.id, name: item.name, price: item.price, quantity: 1 }];
    });
    // Open the cart automatically so the customer gets a visual response
    setIsCartOpen(true);
  };

  const handleRemoveFromCart = (id: string) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.id === id);
      if (existing && existing.quantity > 1) {
        return prev.map((i) =>
          i.id === id ? { ...i, quantity: i.quantity - 1 } : i
        );
      }
      return prev.filter((i) => i.id !== id);
    });
  };

  const handleClearCart = () => {
    setCart([]);
  };

  // Monitor location changes for SPA hydration
  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', handleLocationChange);
    return () => window.removeEventListener('popstate', handleLocationChange);
  }, []);

  const navigateTo = (path: string) => {
    window.history.pushState({}, '', path);
    setCurrentPath(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isSeoPage = currentPath in SEO_PAGES;

  // Monitor active scroll section for navbar indicators
  useEffect(() => {
    const handleScroll = () => {
      // Show/hide scroll to top button
      setShowScrollTop(window.scrollY > 800);

      const sections = ['hero', 'menu', 'heritage', 'gallery', 'reviews', 'location'];
      const scrollPosition = window.scrollY + 250; // offset for detection

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveNavItem(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle new confirmed tabletop bookings
  const handleBookingAdded = (newBooking: Reservation) => {
    setActiveReservations((prev) => [newBooking, ...prev]);
  };

  // Cancel reservation
  const handleCancelReservation = (id: string) => {
    setActiveReservations((prev) => prev.filter((r) => r.id !== id));
  };

  // Scroll to reserve block
  const scrollToReserveTable = () => {
    const el = document.getElementById('book-table');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-[#0A0A0A] text-gray-200 transition-colors duration-500 overflow-x-hidden relative selection:bg-primary selection:text-black">
      {/* Decorative Top subtle gold ambient glow line */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/10 via-primary to-primary/10 z-50"></div>

      {/* Persistent Floating Widget showing confirmation if a table is reserved */}
      <AnimatePresence>
        {activeReservations.length > 0 && (
          <motion.button
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            onClick={scrollToReserveTable}
            title="Track my reserved tables"
            className="fixed bottom-24 left-6 z-40 bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-4 py-3 rounded-full text-xs shadow-2xl border border-white/10 flex items-center gap-2 hover:scale-105 active:scale-95 transition"
          >
            <CalendarCheck className="w-4 h-4" />
            <span>VIP Booking Active ({activeReservations.length})</span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Floating Corner Actions */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
        {/* Scroll back to top */}
        <AnimatePresence>
          {showScrollTop && (
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="bg-black/60 backdrop-blur-md border border-white/10 text-white hover:text-primary p-3 rounded-full hover:scale-110 active:scale-95 transition-all shadow-xl"
              title="Scroll back to top"
            >
              <ArrowUp className="w-5 h-5" />
            </motion.button>
          )}
        </AnimatePresence>

        {/* WhatsApp Chat Corner Bubbler */}
        <a
          href="https://wa.me/919881115030"
          target="_blank"
          rel="noopener noreferrer"
          title="Direct message on WhatsApp"
          className="bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all flex items-center justify-center hover:shadow-[0_0_20px_rgba(37,211,102,0.5)] cursor-pointer"
        >
          <MessageSquare className="w-6 h-6 fill-white" />
        </a>
      </div>

      {/* Navigation Header */}
      <Header
        onBookClick={scrollToReserveTable}
        activeNavItem={activeNavItem}
        currentPath={currentPath}
        onNavigate={navigateTo}
      />

      {isSeoPage ? (
        <SEOLandings
          currentPath={currentPath}
          onNavigate={navigateTo}
          onBookClick={scrollToReserveTable}
        />
      ) : (
        <>
          {/* Landing Showcase */}
          <Hero onBookClick={scrollToReserveTable} />

          {/* Spotlight Slider Speciality */}
          <SignatureDelights onAddToCart={handleAddToCart} />

          {/* Traditional curated Menu lists */}
          <MenuSection onAddToCart={handleAddToCart} cart={cart} />

          {/* History, Story, and restaurant details */}
          <AboutHeritage />

          {/* Photo Gallery lightboxes */}
          <GallerySection />

          {/* Dynamic Testimonials */}
          <ReviewsSection />

          {/* Table Booking Form and coordination */}
          <BookingForm
            onSuccess={handleBookingAdded}
            activeReservations={activeReservations}
            onCancelReservation={handleCancelReservation}
          />
        </>
      )}

      {/* Cart Drawer Overlay */}
      <CartDrawer
        cart={cart}
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(!isCartOpen)}
        onAddToCart={handleAddToCart}
        onRemoveFromCart={handleRemoveFromCart}
        onClearCart={handleClearCart}
      />

      {/* Location specifics & interactive map blocks */}
      <Footer onNavigate={navigateTo} />
    </div>
  );
}

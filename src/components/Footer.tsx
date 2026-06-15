import React from 'react';
import { BRAND_RELIABLE_IMGS } from '../data';
import { MapPin, Phone, Clock, Mail, CircleHelp, Heart, Share2 } from 'lucide-react';

interface FooterProps {
  onNavigate?: (path: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const quickLinks = [
    { label: 'Menu Specials', href: '#menu' },
    { label: 'Our Heritage', href: '#heritage' },
    { label: 'Visual Gallery', href: '#gallery' },
    { label: 'Book Table', href: '#book-table' },
    { label: 'Guest Reviews', href: '#reviews' },
  ];

  const seoGondiaLinks = [
    { label: 'Best Cafe in Gondia', path: '/best-cafe-in-gondia' },
    { label: 'Best Dosa in Gondia', path: '/best-dosa-in-gondia' },
    { label: 'Best Pizza in Gondia', path: '/pizza-in-gondia' },
    { label: 'South Indian Restaurant', path: '/south-indian-restaurant-in-gondia' },
    { label: 'Veg Family Restaurant', path: '/family-restaurant-in-gondia' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(path);
    } else {
      window.history.pushState({}, '', path);
      window.dispatchEvent(new PopStateEvent('popstate'));
    }
  };

  return (
    <footer className="bg-[#070909] text-gray-400 font-sans border-t border-white/5 pt-20">
      {/* Map display & Location Section embedded here for perfect design block workflow */}
      <section id="location" className="max-w-7xl mx-auto px-6 md:px-12 mb-20 scroll-mt-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Text details Column */}
          <div className="lg:col-span-4 space-y-6">
            <div>
              <span className="text-primary text-xs uppercase tracking-widest font-bold">Contact Center</span>
              <h3 className="font-serif text-3xl text-white font-bold mt-2">Find Us in Gondia</h3>
              <div className="h-0.5 w-16 bg-primary rounded-full mt-3"></div>
            </div>

            <div className="space-y-5 text-sm">
              <div className="flex gap-4">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <span className="block text-white font-bold uppercase tracking-wider text-[10px] mb-0.5">Address</span>
                  <a
                    href="https://maps.google.com/?q=Karnataka+Cafe,+Gupta+Tower,+Collectorate+Office,+Saras+Chowk,+Fulchur,+Maharashtra+441601"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors leading-relaxed"
                  >
                    Gupta Tower, Collectorate Office, Saras Chowk, Fulchur, Maharashtra 441601
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <Phone className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <span className="block text-white font-bold uppercase tracking-wider text-[10px] mb-0.5">Reservations Hotline</span>
                  <a href="tel:+919881115030" className="hover:text-primary transition-colors">
                    +91 98811 15030
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <Clock className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <span className="block text-white font-bold uppercase tracking-wider text-[10px] mb-0.5">Operating Hours</span>
                  <span className="text-gray-300">Mon - Sun: 09:00 AM - 11:00 PM</span>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <a
                href="https://maps.google.com/?q=Karnataka+Cafe,+Gupta+Tower,+Collectorate+Office,+Saras+Chowk,+Fulchur,+Maharashtra+441601"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary/10 border border-primary/20 text-primary hover:bg-primary hover:text-black font-semibold text-xs py-3.5 px-6 rounded-full uppercase tracking-wider transition-all inline-flex items-center gap-2"
              >
                Get Directions on Google Maps
              </a>
            </div>
          </div>

          {/* Interactive Map card Column */}
          <div className="lg:col-span-8">
            <div className="aspect-[16/9] rounded-3xl overflow-hidden shadow-2xl border border-white/10 relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3713.8030420064115!2d80.21265307526791!3d21.436985280316446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a2bafcbe92e8907%3A0x5d9e76737b47d8c4!2sKarnataka%20Cafe%20%26%20La%20Pizzato%20%7C%20Sarvottam%20Foods!5e0!3m2!1sen!2sin!4v1781083790037!5m2!1sen!2sin"
                title="Karnataka Cafe &amp; La Pizzato Google Map Location"
                className="w-full h-full border-0 min-h-[300px]"
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Main Footer bottom grid */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-12 pb-16 border-b border-white/5">
        {/* Brand Column */}
        <div className="space-y-6">
          <img
            src={BRAND_RELIABLE_IMGS.footerLogo}
            alt="Karnataka Cafe footer Logo"
            className="h-16 w-auto object-contain brightness-110 drop-shadow-[0_0_15px_rgba(242,202,80,0.5)]"
            referrerPolicy="no-referrer"
          />
          <p className="text-xs leading-relaxed text-gray-500">
            Pioneering the fusion of authentic South Indian heritage and high-end Italian café experience in Gondia. Indulge in culinary perfection!
          </p>
        </div>

        {/* Quick Links Column */}
        <div className="space-y-4">
          <h4 className="text-white font-bold text-xs uppercase tracking-widest">Navigation</h4>
          <ul className="space-y-2 text-xs">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="hover:text-primary transition-colors text-gray-400">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Local SEO Directories Column */}
        <div className="space-y-4">
          <h4 className="text-white font-bold text-xs uppercase tracking-widest">Gondia Food Guide</h4>
          <ul className="space-y-2 text-xs">
            {seoGondiaLinks.map((link) => (
              <li key={link.path}>
                <a
                  href={link.path}
                  onClick={(e) => handleLinkClick(e, link.path)}
                  className="text-gray-400 hover:text-primary transition-colors block"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Legal / Social Columns */}
        <div className="space-y-4">
          <h4 className="text-white font-bold text-xs uppercase tracking-widest">Connect with us</h4>
          <p className="text-xs text-gray-500 leading-normal">
            For major catering events, birthday setups, or private reservations, email us directly:
          </p>
          <a
            href="mailto:connect@karnatakacafe.in"
            className="text-xs text-primary hover:underline flex items-center gap-1.5"
          >
            <Mail className="w-3.5 h-3.5" /> connect@karnatakacafe.in
          </a>
          <div className="pt-2 flex gap-4 text-gray-500 text-xs">
            <span className="hover:text-primary transition-colors cursor-pointer">Facebook</span>
            <span className="hover:text-primary transition-colors cursor-pointer">Instagram</span>
            <span className="hover:text-primary transition-colors cursor-pointer font-bold">X</span>
          </div>
        </div>
      </div>

      {/* Copyright row */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-8 flex flex-col sm:flex-row justify-between items-center text-gray-600 text-xxs tracking-wider uppercase font-semibold gap-4">
        <span>&copy; {new Date().getFullYear()} Karnataka Cafe &amp; La Pizzato. All rights reserved.</span>
        <span className="flex items-center gap-1">
          Made with <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" /> for the Foodies of Gondia
        </span>
      </div>
    </footer>
  );
}

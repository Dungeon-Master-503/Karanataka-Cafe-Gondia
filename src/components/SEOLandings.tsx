import React, { useEffect, useState } from 'react';
import { SEO_PAGES, SEOLandingPage } from '../seoData';
import { ChevronRight, ArrowLeft, Calendar, HelpCircle, Phone, MessageSquare, MapPin, CheckCircle } from 'lucide-react';
import { motion } from 'motion/react';

interface SEOLandingsProps {
  currentPath: string;
  onNavigate: (path: string) => void;
  onBookClick: () => void;
}

export default function SEOLandings({ currentPath, onNavigate, onBookClick }: SEOLandingsProps) {
  const pageData = SEO_PAGES[currentPath];
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  useEffect(() => {
    if (!pageData) return;

    // Update Head Title & Meta tags dynamically for robust crawler indexing
    document.title = pageData.title;

    // Find or create meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', pageData.description);

    // Find or create canonical rel link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', `https://karnatakacafe.in${pageData.path}`);

    // Inject JSON-LD Schema on Head
    const schemaKey = 'dynamic-seo-schema';
    let scriptTag = document.getElementById(schemaKey) as HTMLScriptElement | null;
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = schemaKey;
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }

    // Build the consolidated multi-schema structure (LocalBusiness + FAQPage + BreadcrumbList)
    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://karnatakacafe.in/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": pageData.heading,
          "item": `https://karnatakacafe.in${pageData.path}`
        }
      ]
    };

    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": pageData.faqs.map(f => ({
        "@type": "Question",
        "name": f.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": f.answer
        }
      }))
    };

    const restaurantSchema = {
      "@context": "https://schema.org",
      "@type": "Restaurant",
      "@id": `https://karnatakacafe.in${pageData.path}#restaurant`,
      "name": "Karnataka Cafe & La Pizzato",
      "image": `https://karnatakacafe.in${pageData.heroImage}`,
      "url": `https://karnatakacafe.in${pageData.path}`,
      "telephone": "+919881115030",
      "priceRange": "FF",
      "servesCuisine": ["South Indian", "North Indian", "Chinese", "Pizza", "Pasta", "Burgers"],
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Gupta Tower, Collectorate Office, Saras Chowk, Fulchur",
        "addressLocality": "Gondia",
        "addressRegion": "Maharashtra",
        "postalCode": "441601",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 21.436985,
        "longitude": 80.212653
      }
    };

    scriptTag.text = JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [breadcrumbSchema, faqSchema, restaurantSchema]
    });

    // Scroll to top upon landing change smoothly
    window.scrollTo({ top: 0, behavior: 'smooth' });

    return () => {
      // Revert page title back
      document.title = 'Karnataka Cafe & La Pizzato | Best Cafe & Restaurant in Gondia';
    };
  }, [pageData]);

  if (!pageData) return null;

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const handleBookingRedirect = () => {
    onNavigate('/');
    setTimeout(() => {
      onBookClick();
    }, 150);
  };

  const handleMenuRedirect = () => {
    onNavigate('/');
    setTimeout(() => {
      const el = document.getElementById('menu');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 150);
  };

  return (
    <article className="min-h-screen bg-[#0A0A0A] text-gray-200">
      {/* Dynamic SEO Landing Header Hero space matching original structure styling */}
      <div className="relative h-[450px] md:h-[500px] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={pageData.heroImage}
            alt={`${pageData.heading} at Karnataka Cafe & La Pizzato Gondia`}
            className="w-full h-full object-cover opacity-35 filter brightness-90 saturate-75 transform scale-105"
            referrerPolicy="no-referrer"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/70 to-[#0A0A0A]/55"></div>
          {/* Subtle gold grid wallpaper overlay matching hero background */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(242,202,80,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(242,202,80,0.02)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center mt-12 md:mt-16">
          {/* Breadcrumb List in visual markup */}
          <nav aria-label="Breadcrumb" className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full text-xs font-mono text-gray-400 mb-6 backdrop-blur-md">
            <button onClick={() => onNavigate('/')} className="hover:text-primary transition cursor-pointer">Home</button>
            <ChevronRight className="w-3 h-3 text-white/30" />
            <span aria-current="page" className="text-primary truncate max-w-[180px] md:max-w-xs">{pageData.heading}</span>
          </nav>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-white tracking-tight leading-tight gold-glow">
            {pageData.heading}
          </h1>
          <p className="mt-4 text-base sm:text-lg text-gray-350 max-w-3xl mx-auto leading-relaxed">
            {pageData.subheading}
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={handleBookingRedirect}
              className="bg-primary hover:bg-primary/95 text-black font-semibold px-6 py-3 rounded-full text-sm shadow-xl flex items-center gap-2 transform active:scale-95 transition cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>Book VIP Table</span>
            </button>
            <button
              onClick={handleMenuRedirect}
              className="bg-white/5 hover:bg-white/10 text-white border border-white/10 font-medium px-6 py-3 rounded-full text-sm backdrop-blur-sm transform active:scale-95 transition cursor-pointer"
            >
              View Menu Specialties
            </button>
          </div>
        </div>
      </div>

      {/* Main local article space */}
      <section className="py-16 max-w-4xl mx-auto px-6">
        <div className="glass rounded-3xl p-8 md:p-12 border border-white/10 relative overflow-hidden shadow-2xl">
          {/* Accent decoration gold light bulb decoration corner */}
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/5 rounded-full blur-3xl"></div>

          {/* Business Meta Fast Panel */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 pb-8 mb-8 border-b border-white/10 text-sm">
            <div className="flex items-start gap-3">
              <div className="p-2 bg-primary/10 rounded-lg text-primary mt-1">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-semibold text-white">Our Address</h4>
                <p className="text-xs text-gray-400 mt-1">Gupta Tower, Saras Chowk, Collectorate Office, Fulchur, Gondia</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-2 bg-primary/10 rounded-lg text-primary mt-1">
                <Phone className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-semibold text-white">Call To Inquire</h4>
                <a href="tel:+919881115030" className="text-xs text-primary hover:underline mt-1 block font-mono">+91 9881115030</a>
              </div>
            </div>

            <div className="flex items-start gap-3 sm:col-span-2 md:col-span-1">
              <div className="p-2 bg-primary/10 rounded-lg text-primary mt-1">
                <CheckCircle className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-semibold text-white">Business Type</h4>
                <p className="text-xs text-gray-400 mt-1">Premium pure-vegetarian dining & cafe bar lounge</p>
              </div>
            </div>
          </div>

          {/* Hyperlocal rich prose */}
          <div 
            className="prose prose-invert max-w-none text-gray-300 leading-relaxed text-sm sm:text-base space-y-6"
            dangerouslySetInnerHTML={{ __html: pageData.contentHtml }}
          />

          {/* SEO Hyperlocal contextual linking cloud strictly natural */}
          <div className="mt-12 pt-8 border-t border-white/10">
            <h4 className="text-xs font-mono uppercase tracking-wider text-primary mb-4">Local Directory Quick Guides</h4>
            <div className="flex flex-wrap gap-2 text-xs">
              <button onClick={() => onNavigate('/best-cafe-in-gondia')} className={`px-3 py-1.5 rounded-full border transition cursor-pointer ${currentPath === '/best-cafe-in-gondia' ? 'bg-primary/10 border-primary text-primary' : 'bg-white/5 border-white/10 text-gray-400 hover:text-white'}`}>Best Cafe</button>
              <button onClick={() => onNavigate('/best-dosa-in-gondia')} className={`px-3 py-1.5 rounded-full border transition cursor-pointer ${currentPath === '/best-dosa-in-gondia' ? 'bg-primary/10 border-primary text-primary' : 'bg-white/5 border-white/10 text-gray-400 hover:text-white'}`}>Best Dosa delicacies</button>
              <button onClick={() => onNavigate('/pizza-in-gondia')} className={`px-3 py-1.5 rounded-full border transition cursor-pointer ${currentPath === '/pizza-in-gondia' ? 'bg-primary/10 border-primary text-primary' : 'bg-white/5 border-white/10 text-gray-400 hover:text-white'}`}>Gourmet Wood-Fired Pizza</button>
              <button onClick={() => onNavigate('/south-indian-restaurant-in-gondia')} className={`px-3 py-1.5 rounded-full border transition cursor-pointer ${currentPath === '/south-indian-restaurant-in-gondia' ? 'bg-primary/10 border-primary text-primary' : 'bg-white/5 border-white/10 text-gray-400 hover:text-white'}`}>South Indian Restaurant</button>
              <button onClick={() => onNavigate('/family-restaurant-in-gondia')} className={`px-3 py-1.5 rounded-full border transition cursor-pointer ${currentPath === '/family-restaurant-in-gondia' ? 'bg-primary/10 border-primary text-primary' : 'bg-white/5 border-white/10 text-gray-400 hover:text-white'}`}>Family Pure Veg Feasts</button>
            </div>
          </div>
        </div>
      </section>

      {/* Dynamic Accordion FAQ Section */}
      <section className="py-12 bg-white/[0.01] border-y border-white/5">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-10">
            <HelpCircle className="w-8 h-8 text-primary mx-auto mb-3 opacity-80" />
            <h2 className="text-2xl sm:text-3xl font-serif text-white tracking-tight">Frequently Asked Questions</h2>
            <p className="text-xs sm:text-sm text-gray-400 mt-2">Answers to common queries regarding Karnataka Cafe & La Pizzato near Collectorate Office, Gondia.</p>
          </div>

          <div className="space-y-4">
            {pageData.faqs.map((faq, idx) => (
              <div 
                key={idx} 
                className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden transition-all duration-300"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex items-center justify-between p-5 text-left text-white hover:bg-white/5 font-medium transition cursor-pointer"
                >
                  <span className="pr-4 text-sm sm:text-base">{faq.question}</span>
                  <span className={`text-primary text-xl font-bold transition-transform duration-300 transform ${openFaqIndex === idx ? 'rotate-45' : ''}`}>+</span>
                </button>
                
                {openFaqIndex === idx && (
                  <div className="p-5 pt-0 border-t border-white/5 text-gray-350 text-xs sm:text-sm leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Location & Direct Action Guide */}
      <section className="py-16 text-center max-w-4xl mx-auto px-6">
        <h3 className="text-2xl font-serif text-white tracking-tight">Plan Your Visit Near Saras Chowk</h3>
        <p className="mt-3 text-sm text-gray-400 max-w-xl mx-auto leading-relaxed">
          We are directly and conveniently located in Gupta Tower, Collectorate Office road, Saras Chowk, Fulchur, Gondia. Open from 11:00 AM to 11:00 PM.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={() => onNavigate('/')}
            className="border border-white/20 bg-white/5 hover:bg-white/10 text-white font-medium px-6 py-3 rounded-full text-xs sm:text-sm flex items-center gap-2 transform active:scale-95 transition cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </button>
          <a
            href="https://wa.me/919881115030"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#25D366] text-white font-semibold px-6 py-3 rounded-full text-xs sm:text-sm flex items-center gap-2 transform active:scale-95 transition hover:shadow-[0_0_15px_rgba(37,211,102,0.4)] cursor-pointer"
          >
            <MessageSquare className="w-4 h-4 fill-white" />
            <span>WhatsApp Fast Booking</span>
          </a>
          <a
            href="tel:+919881115030"
            className="bg-primary hover:bg-primary/95 text-black font-semibold px-6 py-3 rounded-full text-xs sm:text-sm flex items-center gap-2 transform active:scale-95 transition cursor-pointer"
          >
            <Phone className="w-4 h-4" />
            <span>Call +91 9881115030</span>
          </a>
        </div>
      </section>
    </article>
  );
}

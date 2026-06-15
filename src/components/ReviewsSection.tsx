import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { INITIAL_REVIEWS } from '../data';
import { Review } from '../types';
import { Star, MessageSquarePlus, MessageSquare, X, CheckCircle } from 'lucide-react';

export default function ReviewsSection() {
  const [reviewsList, setReviewsList] = useState<Review[]>(INITIAL_REVIEWS);
  const [showAddReview, setShowAddReview] = useState(false);
  const [newReview, setNewReview] = useState({
    name: '',
    role: 'Gondia Foodie',
    rating: 5,
    comment: ''
  });
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReview.name.trim() || !newReview.comment.trim()) return;

    const submittedReview: Review = {
      id: `rev-${Date.now()}`,
      name: newReview.name,
      role: newReview.role,
      rating: newReview.rating,
      comment: newReview.comment,
      date: new Date().toISOString().split('T')[0],
      avatar: newReview.name
        .split(' ')
        .map((n) => n[0])
        .join('')
        .toUpperCase()
        .substring(0, 2) || 'G'
    };

    setReviewsList([submittedReview, ...reviewsList]);
    setHasSubmitted(true);
    setTimeout(() => {
      setShowAddReview(false);
      setHasSubmitted(false);
      setNewReview({ name: '', role: 'Gondia Foodie', rating: 5, comment: '' });
    }, 1200);
  };

  const getInitialsAvatar = (text: string) => {
    return text
      .split(' ')
      .map((w) => w[0])
      .join('')
      .toUpperCase()
      .substring(0, 2) || 'RK';
  };

  return (
    <section id="reviews" className="py-24 px-6 md:px-12 max-w-7xl mx-auto scroll-mt-10">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
        <div>
          <span className="text-primary text-xs uppercase tracking-widest font-bold inline-flex items-center gap-1.5">
            <Star className="w-3.5 h-3.5 fill-primary" /> Testimonials
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-primary font-bold mt-2">
            Why People Love Karnataka Cafe &amp; La Pizzato
          </h2>
          <div className="h-0.5 w-24 bg-primary rounded-full mt-4"></div>
        </div>

        {/* Trigger to write a review */}
        <button
          onClick={() => setShowAddReview(true)}
          className="bg-primary hover:bg-primary/95 text-black font-semibold text-xs py-3 px-6 rounded-full uppercase tracking-wider transition hover:scale-105 active:scale-95 inline-flex items-center gap-2"
        >
          <MessageSquarePlus className="w-4 h-4" /> Share Your Experience
        </button>
      </div>

      {/* Grid List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence mode="popLayout">
          {reviewsList.map((rev) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -15 }}
              transition={{ duration: 0.4 }}
              key={rev.id}
              className="glass glass-hover p-8 rounded-3xl flex flex-col justify-between border border-white/5 shadow-lg bg-white/[0.015]"
            >
              <div>
                {/* Stars */}
                <div className="flex text-primary mb-5 gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < rev.rating ? 'fill-primary text-primary' : 'text-gray-600'
                      }`}
                    />
                  ))}
                </div>

                <p className="italic text-gray-300 text-sm leading-relaxed mb-6">
                  "{rev.comment}"
                </p>
              </div>

              <div className="flex items-center gap-4 mt-4 pt-4 border-t border-white/5">
                {/* Initials Avatar */}
                <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center font-bold text-primary font-serif tracking-normal">
                  {rev.avatar || getInitialsAvatar(rev.name)}
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm tracking-wide">{rev.name}</h4>
                  <div className="flex items-center gap-2 mt-0.5">
                    <span className="text-[10px] uppercase font-bold text-gray-500 tracking-wider">
                      {rev.role}
                    </span>
                    <span className="w-1 h-1 rounded-full bg-white/20"></span>
                    <span className="text-[10px] text-gray-500">{rev.date}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Add Review Overlay Dialog Popup */}
      <AnimatePresence>
        {showAddReview && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/85 backdrop-blur-md z-50 flex items-center justify-center p-4"
            onClick={() => setShowAddReview(false)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              className="bg-[#121414] border border-white/10 rounded-2xl max-w-md w-full p-6 sm:p-8 relative shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowAddReview(false)}
                className="absolute top-4 right-4 bg-white/5 p-2 rounded-full text-white hover:text-primary backdrop-blur-md border border-white/10"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="text-center mb-6">
                <div className="bg-primary/10 inline-flex p-3 rounded-full border border-primary/20 text-primary mb-3">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-xl font-bold text-white">Share Your Cafe Experience</h3>
                <p className="text-gray-400 text-xs mt-1">We value honest thoughts from local connoisseurs</p>
              </div>

              {hasSubmitted ? (
                <div className="py-10 text-center flex flex-col items-center justify-center">
                  <CheckCircle className="w-10 h-10 text-emerald-400 mb-3 animate-bounce" />
                  <p className="text-white font-bold">Review Added Successfully!</p>
                  <p className="text-gray-400 text-xs mt-1">Thank you for sharing your feedback with the community.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmitReview} className="space-y-4">
                  <div className="space-y-1">
                    <label className="text-[10px] uppercase font-bold tracking-wider text-gray-400">Your Full Name</label>
                    <input
                      type="text"
                      required
                      value={newReview.name}
                      onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                      placeholder="e.g., Rajesh Patel"
                      className="w-full bg-black/45 text-white placeholder-gray-500 border border-white/10 focus:border-primary rounded-xl px-4 py-3 text-xs outline-none focus:ring-1 focus:ring-primary transition"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] uppercase font-bold tracking-wider text-gray-400">Designation / Subtitle</label>
                    <select
                      value={newReview.role}
                      onChange={(e) => setNewReview({ ...newReview, role: e.target.value })}
                      className="w-full bg-black/45 text-white border border-white/10 focus:border-primary rounded-xl px-4 py-3 text-xs outline-none focus:ring-1 focus:ring-primary transition"
                    >
                      <option value="Local Guide">Local Guide</option>
                      <option value="Food Blogger">Food Blogger</option>
                      <option value="Gondia Resident">Gondia Resident</option>
                      <option value="Regular Visitor">Regular Visitor</option>
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] uppercase font-bold tracking-wider text-gray-400 block">Rating Stars</label>
                    <div className="flex gap-2 py-1">
                      {[1, 2, 3, 4, 5].map((stars) => (
                        <button
                          key={stars}
                          type="button"
                          onClick={() => setNewReview({ ...newReview, rating: stars })}
                          className="hover:scale-110 active:scale-95 transition"
                        >
                          <Star
                            className={`w-6 h-6 ${
                              stars <= newReview.rating
                                ? 'fill-primary text-primary'
                                : 'text-gray-600 hover:text-primary'
                            }`}
                          />
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] uppercase font-bold tracking-wider text-gray-400">Your Honest Review</label>
                    <textarea
                      required
                      rows={4}
                      value={newReview.comment}
                      onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                      placeholder="Write your experience with the food, taste, service, or atmosphere here..."
                      className="w-full bg-black/45 text-white placeholder-gray-500 border border-white/10 focus:border-primary rounded-xl px-4 py-3 text-xs outline-none focus:ring-1 focus:ring-primary transition resize-none"
                    />
                  </div>

                  <div className="pt-4">
                    <button
                      type="submit"
                      className="w-full bg-primary hover:bg-primary/95 text-black font-semibold py-3.5 rounded-full text-xs uppercase tracking-wider transition hover:scale-102"
                    >
                      Submit Review
                    </button>
                  </div>
                </form>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

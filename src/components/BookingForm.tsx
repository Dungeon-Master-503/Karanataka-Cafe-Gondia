import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Reservation } from '../types';
import { Calendar, Users, Clock, Flame, Smile, CheckCircle, Smartphone, Send, Clipboard } from 'lucide-react';

interface BookingFormProps {
  onSuccess: (booking: Reservation) => void;
  activeReservations: Reservation[];
  onCancelReservation: (id: string) => void;
}

export default function BookingForm({
  onSuccess,
  activeReservations,
  onCancelReservation
}: BookingFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    guests: 2,
    date: new Date().toISOString().split('T')[0],
    timeSlot: '19:30',
    specialRequest: ''
  });

  const [lastConfirmed, setLastConfirmed] = useState<Reservation | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) return;

    const booking: Reservation = {
      id: `res-${Date.now()}`,
      name: formData.name,
      phone: formData.phone,
      guests: formData.guests,
      date: formData.date,
      timeSlot: formData.timeSlot,
      specialRequest: formData.specialRequest,
      status: 'confirmed',
      timestamp: new Date().toLocaleString()
    };

    onSuccess(booking);
    setLastConfirmed(booking);

    // Reset some of the form
    setFormData({
      name: '',
      phone: '',
      guests: 2,
      date: new Date().toISOString().split('T')[0],
      timeSlot: '19:30',
      specialRequest: ''
    });
  };

  const getWhatsAppLink = (booking: Reservation) => {
    const text = `Hello Karnataka Cafe & La Pizzato! I'd like to confirm my table reservation.
Name: ${booking.name}
Phone: ${booking.phone}
Guests: ${booking.guests}
Date: ${booking.date}
Time Slot: ${booking.timeSlot}
Remarks: ${booking.specialRequest || 'None'}`;
    return `https://wa.me/919881115030?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="book-table" className="py-24 bg-[#0A0C0D] px-6 md:px-12 scroll-mt-24">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Block: Traditional Booking info info */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-primary text-xs uppercase tracking-widest font-bold inline-flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" /> Direct Booking Engine
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-primary font-bold">
              Book Your Table Today
            </h2>
            <p className="text-gray-300 text-sm leading-relaxed max-w-md">
              Secure an elegant family lounge or comfy dining booth table. Booking takes less than 30 seconds. Your confirmed reservation code is saved dynamically inside your session!
            </p>

            <div className="space-y-4 pt-4 border-t border-white/5">
              <div className="flex gap-4">
                <div className="text-primary bg-primary/10 p-2.5 rounded-xl border border-primary/20 h-fit">
                  <Flame className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm uppercase tracking-wide">Instant Confirmation</h4>
                  <p className="text-gray-400 text-xs mt-0.5">No long waiting lines or uncertain queues. Instantly booked in current session.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="text-primary bg-primary/10 p-2.5 rounded-xl border border-primary/20 h-fit">
                  <Smile className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm uppercase tracking-wide">Special Requests Treated Kindly</h4>
                  <p className="text-gray-400 text-xs mt-0.5">Have birthday celebrations, anniversary decors, or spice preferences? Note it on the form!</p>
                </div>
              </div>
            </div>

            {/* Active Bookings Tracker inside this session */}
            {activeReservations.length > 0 && (
              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 mt-8 space-y-4">
                <h4 className="text-primary text-xs font-bold uppercase tracking-widest flex items-center justify-between">
                  <span>Your Current Session Bookings ({activeReservations.length})</span>
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                </h4>
                <div className="space-y-3 max-h-56 overflow-y-auto no-scrollbar pr-2">
                  {activeReservations.map((res) => (
                    <div key={res.id} className="p-4 rounded-xl bg-black/40 border border-white/5 space-y-2 relative group text-xs">
                      <button
                        onClick={() => onCancelReservation(res.id)}
                        className="absolute top-3 right-3 text-red-400 hover:text-red-300 font-semibold"
                        title="Cancel Reservation"
                      >
                        Cancel
                      </button>
                      <div className="flex justify-between items-center text-white font-bold">
                        <span>{res.name} ({res.guests} Guests)</span>
                        <span className="text-[10px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2 py-0.5 rounded">
                          CONFIRMED
                        </span>
                      </div>
                      <div className="text-gray-400 mt-1 flex gap-4">
                        <span>Date: {res.date}</span>
                        <span>Time: {res.timeSlot}</span>
                      </div>
                      <a
                        href={getWhatsAppLink(res)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 text-primary font-bold inline-flex items-center gap-1.5 hover:underline"
                      >
                        <Send className="w-3 h-3" /> Buzz on WhatsApp
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Block: Booking Form Container */}
          <div className="lg:col-span-7">
            <div className="glass p-8 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden bg-white/[0.01]">
              <AnimatePresence mode="wait">
                {lastConfirmed ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="py-12 px-2 text-center flex flex-col items-center justify-center space-y-6"
                  >
                    <div className="bg-emerald-500/10 p-4 rounded-full border border-emerald-500/20 text-emerald-400 animate-bounce">
                      <CheckCircle className="w-12 h-12" />
                    </div>
                    <div>
                      <h3 className="font-serif text-2xl text-white font-bold">Table Reserved Successfully!</h3>
                      <p className="text-gray-400 text-xs mt-2 max-w-sm mx-auto">
                        Your VIP booking code has been generated. We highly recommend notifying our restaurant reception desk on WhatsApp for immediate priority seating layout setup!
                      </p>
                    </div>

                    {/* Summary card */}
                    <div className="w-full max-w-md bg-black/40 border border-white/5 rounded-xl p-5 text-left text-xs space-y-3">
                      <div className="border-b border-white/10 pb-2.5 flex justify-between items-center">
                        <span className="text-gray-400">Order ID: <code className="text-white font-mono font-bold uppercase">{lastConfirmed.id}</code></span>
                        <span className="text-primary font-bold uppercase tracking-wider text-[10px]">Session OK</span>
                      </div>
                      <div className="grid grid-cols-2 gap-4 text-gray-300">
                        <div>
                          <span className="block text-gray-500 font-bold uppercase tracking-wider mb-0.5 text-[9px]">Guest Name</span>
                          {lastConfirmed.name}
                        </div>
                        <div>
                          <span className="block text-gray-500 font-bold uppercase tracking-wider mb-0.5 text-[9px]">Mobile Phone</span>
                          {lastConfirmed.phone}
                        </div>
                        <div>
                          <span className="block text-gray-500 font-bold uppercase tracking-wider mb-0.5 text-[9px]">Total Guests</span>
                          {lastConfirmed.guests} Persons
                        </div>
                        <div>
                          <span className="block text-gray-500 font-bold uppercase tracking-wider mb-0.5 text-[9px]">Date &amp; Time</span>
                          {lastConfirmed.date} ({lastConfirmed.timeSlot})
                        </div>
                      </div>
                      {lastConfirmed.specialRequest && (
                        <div className="pt-2.5 border-t border-white/5">
                          <span className="block text-gray-500 font-bold uppercase tracking-wider mb-0.5 text-[9px]">Requirements</span>
                          <span className="italic">"{lastConfirmed.specialRequest}"</span>
                        </div>
                      )}
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 w-full max-w-md">
                      <a
                        href={getWhatsAppLink(lastConfirmed)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-[#25D366] hover:bg-[#20ba56] text-white font-bold px-6 py-4 rounded-full text-xs uppercase tracking-wider transition hover:scale-103 inline-flex items-center justify-center gap-2"
                      >
                        <Smartphone className="w-4 h-4" /> Intimate on WhatsApp
                      </a>
                      <button
                        onClick={() => setLastConfirmed(null)}
                        className="flex-1 bg-white/5 border border-white/10 hover:bg-white/10 text-white font-semibold py-4 rounded-full text-xs uppercase tracking-wider transition"
                      >
                        Book Another Table
                      </button>
                    </div>
                  </motion.div>
                ) : (
                  <form key="form" onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {/* Name */}
                      <div className="space-y-1">
                        <label htmlFor="booking-name" className="text-[10px] uppercase font-bold tracking-widest text-gray-400 flex items-center gap-1.5">
                          <Users className="w-3 h-3 text-primary" /> Full Name
                        </label>
                        <input
                          id="booking-name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g., Rajesh Patel"
                          className="w-full bg-black/45 text-white placeholder-gray-500 border border-white/10 focus:border-primary rounded-xl px-4 py-3 text-xs outline-none focus:ring-1 focus:ring-primary transition"
                        />
                      </div>

                      {/* Phone */}
                      <div className="space-y-1">
                        <label htmlFor="booking-phone" className="text-[10px] uppercase font-bold tracking-widest text-gray-400 flex items-center gap-1.5">
                          <Smartphone className="w-3 h-3 text-primary" /> Phone Number
                        </label>
                        <input
                          id="booking-phone"
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="e.g., +91 988xx xxxxx"
                          className="w-full bg-black/45 text-white placeholder-gray-500 border border-white/10 focus:border-primary rounded-xl px-4 py-3 text-xs outline-none focus:ring-1 focus:ring-primary transition"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                      {/* Total Guests */}
                      <div className="space-y-1">
                        <label htmlFor="booking-guests" className="text-[10px] uppercase font-bold tracking-widest text-gray-400 flex items-center gap-1.5">
                          <Users className="w-3 h-3 text-primary" /> Guests count
                        </label>
                        <select
                          id="booking-guests"
                          value={formData.guests}
                          onChange={(e) => setFormData({ ...formData, guests: parseInt(e.target.value) })}
                          className="w-full bg-black/45 text-white border border-white/10 focus:border-primary rounded-xl px-4 py-3.5 text-xs outline-none focus:ring-1 focus:ring-primary transition"
                        >
                          <option value={1}>1 Person</option>
                          <option value={2}>2 Persons</option>
                          <option value={3}>3 Persons</option>
                          <option value={4}>4 Persons</option>
                          <option value={5}>5 Persons</option>
                          <option value={6}>6+ Persons (Family Lounge)</option>
                        </select>
                      </div>

                      {/* Booking Date */}
                      <div className="space-y-1">
                        <label htmlFor="booking-date" className="text-[10px] uppercase font-bold tracking-widest text-gray-400 flex items-center gap-1.5">
                          <Calendar className="w-3 h-3 text-primary" /> Select Date
                        </label>
                        <input
                          id="booking-date"
                          type="date"
                          required
                          value={formData.date}
                          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                          className="w-full bg-black/45 text-white border border-white/10 focus:border-primary rounded-xl px-4 py-3 text-xs outline-none focus:ring-1 focus:ring-primary transition"
                        />
                      </div>

                      {/* Time Slot */}
                      <div className="space-y-1">
                        <label htmlFor="booking-time" className="text-[10px] uppercase font-bold tracking-widest text-gray-400 flex items-center gap-1.5">
                          <Clock className="w-3 h-3 text-primary" /> Select Time
                        </label>
                        <select
                          id="booking-time"
                          value={formData.timeSlot}
                          onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                          className="w-full bg-black/45 text-white border border-white/10 focus:border-primary rounded-xl px-4 py-3.5 text-xs outline-none focus:ring-1 focus:ring-primary transition"
                        >
                          <optgroup label="Breakfast &amp; Lunch">
                            <option value="09:00">09:00 AM</option>
                            <option value="11:00">11:00 AM</option>
                            <option value="13:00">01:00 PM</option>
                            <option value="15:00">03:00 PM</option>
                          </optgroup>
                          <optgroup label="Evening &amp; Dinner">
                            <option value="17:30">05:30 PM</option>
                            <option value="19:00">07:00 PM</option>
                            <option value="19:30">07:30 PM (Peak)</option>
                            <option value="20:30">08:30 PM (Peak)</option>
                            <option value="22:00">10:00 PM</option>
                          </optgroup>
                        </select>
                      </div>
                    </div>

                    {/* Special request notes */}
                    <div className="space-y-1">
                      <label htmlFor="booking-remarks" className="text-[10px] uppercase font-bold tracking-widest text-gray-400">Special Instructions / Requirements (Optional)</label>
                      <textarea
                        id="booking-remarks"
                        rows={3}
                        value={formData.specialRequest}
                        onChange={(e) => setFormData({ ...formData, specialRequest: e.target.value })}
                        placeholder="e.g., High-chair for modern baby comfort, vegetarian spicy level, table layout setting, soft birthday surprises decoration..."
                        className="w-full bg-black/45 text-white placeholder-gray-500 border border-white/10 focus:border-primary rounded-xl px-4 py-3 text-xs outline-none focus:ring-1 focus:ring-primary transition resize-none"
                      />
                    </div>

                    <div className="pt-4">
                      <button
                        type="submit"
                        className="w-full bg-primary hover:bg-primary/95 text-black font-semibold py-4 rounded-full text-xs uppercase tracking-wider hover:scale-102 hover:shadow-[0_0_25px_rgba(242,202,80,0.3)] active:scale-95 transition-all text-center"
                      >
                        Confirm Table Reservation
                      </button>
                    </div>
                  </form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

'use client';
import React, { useState } from 'react';
import { Calendar, Clock, DollarSign } from 'lucide-react'; // DollarSign 
import BookingCard from './BookingCard';

const BookingForm = ({ facility }) => {
  const [bookingInfo, setBookingInfo] = useState({
    date: '',
    slot: '',
    hours: 1
  });

 
  const totalPrice = facility.price_per_hour * bookingInfo.hours;

  return (
    <form className="space-y-4">
      {/* Facility Name */}
      <input type="text" value={facility.name} disabled className="w-full bg-neutral-950 border border-neutral-800 p-3 rounded-xl cursor-not-allowed" />
      
      {/* Date */}
      <input type="date" onChange={(e) => setBookingInfo({...bookingInfo, date: e.target.value})} className="w-full bg-neutral-950 border border-neutral-800 p-3 rounded-xl text-white" />
      
      {/* Slot */}
      <select onChange={(e) => setBookingInfo({...bookingInfo, slot: e.target.value})} className="w-full bg-neutral-950 border border-neutral-800 p-3 rounded-xl text-white">
        <option value="">Select a slot</option>
        {facility.available_slots?.map((s, i) => <option key={i} value={s}>{s}</option>)}
      </select>

      {/* Hours */}
      <div className="space-y-1">
        <label className="text-xs text-neutral-400">Reservation Hours</label>
        <input type="number" min="1" defaultValue={1} onChange={(e) => setBookingInfo({...bookingInfo, hours: Number(e.target.value)})} className="w-full bg-neutral-950 border border-neutral-800 p-3 rounded-xl text-white" />
      </div>

     
      <div className="space-y-1">
        <label className="text-xs text-neutral-400">Total Price</label>
        <div className="flex items-center w-full bg-neutral-950 border border-emerald-500/30 p-3 rounded-xl text-emerald-400 font-bold">
          <DollarSign size={18} className="mr-1" />
          <span>{totalPrice.toFixed(2)}</span>
        </div>
      </div>

      <BookingCard facility={facility} bookingInfo={bookingInfo} />
    </form>
  );
};

export default BookingForm;
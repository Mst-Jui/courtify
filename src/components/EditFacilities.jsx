"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FaEdit } from 'react-icons/fa';
import { authClient } from '@/lib/auth-client';
import toast from 'react-hot-toast';

function EditFacilities({ facility }) {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);

  // সেফটি ফলব্যাক: ডাটা না থাকলে বাটন ডিজেবল থাকবে যেন এরর টোস্ট না আসে
  if (!facility) {
    return (
      <button disabled className="p-2 opacity-40 bg-slate-800 text-slate-500 rounded-xl cursor-not-allowed">
        <FaEdit size={14} />
      </button>
    );
  }

  const { _id, name, facility_type, capacity, price_per_hour, image, available_slots, location } = facility;

  const onSubmit = async (e) => {
    e.preventDefault();
    setIsUpdating(true);

    const formData = new FormData(e.currentTarget);
    
    // প্রতিটি ইনপুট ফিল্ড থেকে জেনুইন ভ্যালু আলাদা করা হচ্ছে
    const nameValue = formData.get('name');
    const facilityTypeValue = formData.get('facility_type');
    const capacityValue = formData.get('capacity');
    const pricePerHourValue = formData.get('price_per_hour');
    const imageValue = formData.get('image');
    const locationValue = formData.get('location');
    const availableSlotsRaw = formData.get('available_slots');

    // টাইম স্লট স্ট্রিং-কে প্রপার অ্যারেতে রূপান্তর
    const slotsArray = availableSlotsRaw && typeof availableSlotsRaw === 'string'
      ? availableSlotsRaw.split(',').map(slot => slot.trim()).filter(Boolean)
      : [];

    // ডাটাবেজের স্কিমা অনুযায়ী স্ট্রিং থেকে নাম্বারে কনভার্ট নিশ্চিত করা হলো
    const submissionData = {
      name: nameValue,
      facility_type: facilityTypeValue,
      capacity: capacityValue ? Number(capacityValue) : 0,
      price_per_hour: pricePerHourValue ? Number(pricePerHourValue) : 0,
      image: imageValue,
      location: locationValue,
      available_slots: slotsArray
    };

    try {
      const { data: tokenData } = await authClient.token();

      const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/facilities/${_id}`, {
        method: 'PATCH',
        headers: {
          'content-type': 'application/json',
          'authorization': `Bearer ${tokenData?.token}`
        },
        body: JSON.stringify(submissionData)
      });

      if (res.ok) {
        toast.success("Facility updated successfully!");
        setIsOpen(false);
        router.refresh();
      } else {
        // ব্যাকএন্ড থেকে আসা আসল এরর মেসেজ কনসোলে প্রিন্ট করার ব্যবস্থা
        const errorData = await res.json().catch(() => ({}));
        console.error("Backend Error Details:", errorData);
        toast.error(errorData?.message || "Failed to update facility.");
      }
    } catch (error) {
      console.error("Error updating facility:", error);
      toast.error("Something went wrong!");
    } finally {
      setIsUpdating(false);
    }
  };

  const defaultSlots = Array.isArray(available_slots) 
    ? available_slots.join(', ') 
    : available_slots || '';

  return (
    <>
      {/* এডিট বাটন */}
      <button 
        type="button"
        onClick={() => setIsOpen(true)}
        className="p-2 bg-blue-600/20 hover:bg-blue-600 text-blue-400 hover:text-white rounded-xl transition-all border border-blue-500/20 flex items-center justify-center"
      >
        <FaEdit size={14} />
      </button>

      {/* কাস্টম পিওর CSS মডাল */}
      {isOpen && (
        <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4">
          
          {/* ব্যাকড্রপ ব্লার লেয়ার */}
          <div 
            className="fixed inset-0 bg-black/70 backdrop-blur-md transition-opacity"
            onClick={() => !isUpdating && setIsOpen(false)}
          />

          {/* মডাল কন্টেইনার বক্স */}
          <div className="relative w-full max-w-xl transform overflow-hidden rounded-2xl border border-white/10 bg-slate-900 p-6 text-left shadow-2xl transition-all z-[100000] max-h-[90vh] overflow-y-auto">
            
            {/* ক্লোজ বাটন */}
            <button 
              type="button"
              onClick={() => setIsOpen(false)}
              className="absolute right-4 top-4 text-slate-400 hover:text-slate-100 p-1 rounded-full hover:bg-white/5 transition-colors"
            >
              ✕
            </button>

            <h3 className="font-bold text-xl text-slate-100 border-b border-white/5 pb-4 mb-6">
              Edit Facility Details
            </h3>
            
            <form onSubmit={onSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                
                {/* Facility Name */}
                <div className="md:col-span-2 flex flex-col gap-1.5">
                  <label className="text-slate-300 text-xs font-medium">Facility Name <span className="text-rose-500">*</span></label>
                  <input type="text" name="name" defaultValue={name} required placeholder="Football Turf" className="w-full bg-slate-950 border border-white/10 text-slate-100 rounded-xl px-4 py-2.5 text-sm focus:border-emerald-500 focus:outline-none transition-colors" />
                </div>

                {/* Facility Type */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-slate-300 text-xs font-medium">Facility Type <span className="text-rose-500">*</span></label>
                  <input type="text" name="facility_type" defaultValue={facility_type} required placeholder="Indoor / Outdoor" className="w-full bg-slate-950 border border-white/10 text-slate-100 rounded-xl px-4 py-2.5 text-sm focus:border-emerald-500 focus:outline-none transition-colors" />
                </div>

                {/* Capacity */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-slate-300 text-xs font-medium">Capacity (Players) <span className="text-rose-500">*</span></label>
                  <input type="number" name="capacity" defaultValue={capacity} required placeholder="22" className="w-full bg-slate-950 border border-white/10 text-slate-100 rounded-xl px-4 py-2.5 text-sm focus:border-emerald-500 focus:outline-none transition-colors" />
                </div>

                {/* Price Per Hour */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-slate-300 text-xs font-medium">Price Per Hour (USD) <span className="text-rose-500">*</span></label>
                  <input type="number" name="price_per_hour" defaultValue={price_per_hour} required placeholder="50" className="w-full bg-slate-950 border border-white/10 text-slate-100 rounded-xl px-4 py-2.5 text-sm focus:border-emerald-500 focus:outline-none transition-colors" />
                </div>

                {/* Image URL */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-slate-300 text-xs font-medium">Image URL</label>
                  <input type="url" name="image" defaultValue={image} placeholder="https://example.com/image.jpg" className="w-full bg-slate-950 border border-white/10 text-slate-100 rounded-xl px-4 py-2.5 text-sm focus:border-emerald-500 focus:outline-none transition-colors" />
                </div>

                {/* Available Time Slots */}
                <div className="md:col-span-2 flex flex-col gap-1.5">
                  <label className="text-slate-300 text-xs font-medium">Available Time Slots</label>
                  <input type="text" name="available_slots" defaultValue={defaultSlots} placeholder="08:00 AM - 09:00 AM, 10:00 AM - 11:00 AM" className="w-full bg-slate-950 border border-white/10 text-slate-100 rounded-xl px-4 py-2.5 text-sm focus:border-emerald-500 focus:outline-none transition-colors" />
                  <span className="text-[10px] text-slate-400 mt-0.5 px-1">Separate multiple slots with commas ( , )</span>
                </div>

                {/* Location */}
                <div className="md:col-span-2 flex flex-col gap-1.5">
                  <label className="text-slate-300 text-xs font-medium">Location Address <span className="text-rose-500">*</span></label>
                  <input type="text" name="location" defaultValue={location} required placeholder="Dhaka, Bangladesh" className="w-full bg-slate-950 border border-white/10 text-slate-100 rounded-xl px-4 py-2.5 text-sm focus:border-emerald-500 focus:outline-none transition-colors" />
                </div>

              </div>

              {/* অ্যাকশন বাটনসমূহ */}
              <div className="border-t border-white/5 pt-4 flex justify-end gap-3 mt-6">
                <button 
                  type="button" 
                  onClick={() => setIsOpen(false)}
                  className="px-5 py-2.5 bg-white/5 hover:bg-white/10 text-slate-300 font-medium text-sm rounded-xl transition-all border border-white/10"
                >
                  Cancel
                </button>
                <button 
                  type="submit" 
                  disabled={isUpdating}
                  className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-500 disabled:bg-emerald-800 text-white font-medium text-sm rounded-xl transition-all flex items-center gap-2 shadow-lg shadow-emerald-950/40"
                >
                  {isUpdating ? "Saving..." : "Save Changes"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default EditFacilities;
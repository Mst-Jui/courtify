'use client'
import React, { useEffect, useState } from 'react';
import { authClient } from '@/lib/auth-client';
import { Card } from '@heroui/react';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import {
  FaFutbol,
  FaMapMarkerAlt,
  FaDollarSign,
  FaUsers,
  FaClock,
  FaFileAlt,
  FaCloudUploadAlt,
  FaEnvelope
} from 'react-icons/fa';

const AddFacility = () => {
  const [tokenData, setTokenData] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { data: session } = authClient.useSession();
  const user = session?.user;
  const router = useRouter();

  useEffect(() => {
    const getToken = async () => {
      try {
        const { data } = await authClient.token();
        setTokenData(data);
      } catch (err) {
        console.error("Error fetching token:", err);
      }
    };
    getToken();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const facilities = Object.fromEntries(formData.entries());
    
    // ডাটা ফরম্যাটিং এবং ওনার ইমেইল লোয়ারকেস নিশ্চিত করা
    const formatted = {
      ...facilities,
      price_per_hour: facilities.price_per_hour ? Number(facilities.price_per_hour) : 0,
      capacity: facilities.capacity ? Number(facilities.capacity) : 0,
      owner_email: user?.email ? user.email.toLowerCase() : '',
      available_slots: facilities.available_slots
        ? facilities.available_slots.split(",").map((s) => s.trim()).filter(Boolean)
        : [],
    };

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/facilities`,
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
            authorization: `Bearer ${tokenData?.token}`,
          },
          body: JSON.stringify(formatted),
        }
      );

      if (!res.ok) {
        toast.error("Failed to add facility");
        return;
      }

      const data = await res.json();
      if (data) {
        toast.success("Facility added successfully!");
        router.push("/all-facilities");
      }
    } catch (error) {
      console.error("Error adding facility:", error);
      toast.error("Something went wrong!");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 py-6 sm:py-12 px-4 sm:px-6 lg:px-8 font-sans relative overflow-hidden flex items-center justify-center">

      {/* Background Glowing Orbs for Glassmorphism */}
      <div className="absolute top-20 right-10 w-72 h-72 sm:w-96 sm:h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-20 left-10 w-72 h-72 sm:w-96 sm:h-96 bg-teal-600/10 rounded-full blur-3xl pointer-events-none"></div>

      {/* Main Glass Container */}
      <div className="max-w-3xl w-full bg-slate-900/40 backdrop-blur-md p-5 sm:p-8 rounded-2xl shadow-2xl border border-white/10 relative z-10">

        {/* Header */}
        <div className="mb-6 sm:mb-8 border-b border-white/10 pb-4">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-100 flex items-center gap-2">
            <span className="text-emerald-400">Add New Facility</span>
          </h2>
          <p className="mt-1.5 text-xs sm:text-sm text-slate-400">
            List a new sports facility, turf, or court for users to book.
          </p>
        </div>

        {/* Form Wrap inside HeroUI Card */}
        <Card className="bg-transparent border-0 shadow-none overflow-visible">
          <form className="space-y-5 sm:space-y-6" onSubmit={onSubmit}>

            {/* Grid Layout for Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">

              {/* Facility Name */}
              <div className="flex flex-col gap-1.5">
                <label className="block text-xs sm:text-sm font-medium text-slate-300">
                  Facility Name <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-500">
                    <FaFutbol size={14} />
                  </div>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="e.g., Premium Football Turf"
                    className="w-full pl-10 pr-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-slate-100 placeholder-slate-500 focus:outline-none focus:border-emerald-500 focus:bg-white/10 transition-all text-xs sm:text-sm"
                  />
                </div>
              </div>

              {/* Facility Type - Fixed Dropdown Mobile CSS */}
              <div className="flex flex-col gap-1.5 w-full max-w-full overflow-hidden">
                <label className="block text-xs sm:text-sm font-medium text-slate-300">
                  Facility Type <span className="text-rose-500">*</span>
                </label>
                <div className="relative w-full max-w-full">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-500 z-10">
                    <FaFutbol size={14} />
                  </div>
                  <select
                    name="facility_type"
                    required
                    defaultValue=""
                    className="w-full max-w-full pl-10 pr-10 py-2.5 bg-slate-900 border border-white/10 rounded-xl text-slate-100 focus:outline-none focus:border-emerald-500 focus:bg-slate-800 transition-all text-xs sm:text-sm appearance-none relative z-0 block overflow-hidden truncate"
                  >
                    <option value="" disabled className="text-slate-500 bg-slate-900">Select sport type</option>
                    <option value="football" className="text-slate-200 bg-slate-900">Football Turf</option>
                    <option value="badminton" className="text-slate-200 bg-slate-900">Badminton Court</option>
                    <option value="cricket" className="text-slate-200 bg-slate-900">Cricket Net</option>
                    <option value="swimming" className="text-slate-200 bg-slate-900">Swimming Lane</option>
                    <option value="tennis" className="text-slate-200 bg-slate-900">Tennis Court</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-slate-500 text-[10px] z-10">
                    ▼
                  </div>
                </div>
              </div>

              {/* Image Upload Link */}
              <div className="flex flex-col gap-1.5">
                <label className="block text-xs sm:text-sm font-medium text-slate-300">
                  Image URL <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-500">
                    <FaCloudUploadAlt size={14} />
                  </div>
                  <input
                    type="url"
                    name="image"
                    required
                    placeholder="Enter image URL"
                    className="w-full pl-10 pr-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-slate-100 placeholder-slate-500 focus:outline-none focus:border-emerald-500 focus:bg-white/10 transition-all text-xs sm:text-sm"
                  />
                </div>
              </div>

              {/* Location */}
              <div className="flex flex-col gap-1.5">
                <label className="block text-xs sm:text-sm font-medium text-slate-300">
                  Location <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-500">
                    <FaMapMarkerAlt size={14} />
                  </div>
                  <input
                    type="text"
                    name="location"
                    required
                    placeholder="e.g., Sector 11, Uttara, Dhaka"
                    className="w-full pl-10 pr-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-slate-100 placeholder-slate-500 focus:outline-none focus:border-emerald-500 focus:bg-white/10 transition-all text-xs sm:text-sm"
                  />
                </div>
              </div>

              {/* Price Per Hour */}
              <div className="flex flex-col gap-1.5">
                <label className="block text-xs sm:text-sm font-medium text-slate-300">
                  Price Per Hour ($) <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-500">
                    <FaDollarSign size={14} />
                  </div>
                  <input
                    type="number"
                    name="price_per_hour"
                    required
                    min="1"
                    placeholder="e.g., 50"
                    className="w-full pl-10 pr-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-slate-100 placeholder-slate-500 focus:outline-none focus:border-emerald-500 focus:bg-white/10 transition-all text-xs sm:text-sm"
                  />
                </div>
              </div>

              {/* Capacity */}
              <div className="flex flex-col gap-1.5">
                <label className="block text-xs sm:text-sm font-medium text-slate-300">
                  Capacity (Max Players) <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-500">
                    <FaUsers size={14} />
                  </div>
                  <input
                    type="number"
                    name="capacity"
                    required
                    min="1"
                    placeholder="e.g., 14"
                    className="w-full pl-10 pr-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-slate-100 placeholder-slate-500 focus:outline-none focus:border-emerald-500 focus:bg-white/10 transition-all text-xs sm:text-sm"
                  />
                </div>
              </div>

              {/* Available Time Slots */}
              <div className="flex flex-col gap-1.5 md:col-span-1">
                <label className="block text-xs sm:text-sm font-medium text-slate-300">
                  Available Time Slots <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-500">
                    <FaClock size={14} />
                  </div>
                  <input
                    type="text"
                    name="available_slots"
                    required
                    placeholder="06:00 AM, 07:00 AM, 08:00 AM"
                    className="w-full pl-10 pr-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-slate-100 placeholder-slate-500 focus:outline-none focus:border-emerald-500 focus:bg-white/10 transition-all text-xs sm:text-sm"
                  />
                </div>
                <span className="text-[10px] text-slate-400 px-1 mt-0.5">Separate multiple slots with commas ( , )</span>
              </div>

              {/* Owner Email (Auto-filled / Read-Only Field) */}
              <div className="flex flex-col gap-1.5">
                <label className="block text-xs sm:text-sm font-medium text-slate-400">
                  Owner Email (Auto-filled)
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-600">
                    <FaEnvelope size={14} />
                  </div>
                  <input
                    type="email"
                    name="owner_email"
                    readOnly
                    value={user?.email || ""}
                    className="w-full pl-10 pr-4 py-2.5 bg-white/5 border border-white/5 rounded-xl text-slate-500 cursor-not-allowed text-xs sm:text-sm focus:outline-none"
                  />
                </div>
              </div>

            </div>

            {/* Description (Full Width) */}
            <div className="flex flex-col gap-1.5">
              <label className="block text-xs sm:text-sm font-medium text-slate-300">
                Description <span className="text-rose-500">*</span>
              </label>
              <div className="relative">
                <div className="absolute top-3 left-0 pl-3 pointer-events-none text-slate-500">
                  <FaFileAlt size={14} />
                </div>
                <textarea
                  name="description"
                  required
                  rows="4"
                  placeholder="Describe the turf, standard rules, lighting conditions, footwear recommendations, etc..."
                  className="w-full pl-10 pr-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-slate-100 placeholder-slate-500 focus:outline-none focus:border-emerald-500 focus:bg-white/10 transition-all text-xs sm:text-sm resize-none"
                ></textarea>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-2 flex justify-end">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto px-8 py-3 bg-emerald-600 hover:bg-emerald-500 disabled:bg-emerald-800 text-white font-medium rounded-xl transition-all shadow-lg shadow-emerald-900/30 active:scale-[0.98] text-xs sm:text-sm flex items-center justify-center"
              >
                {isSubmitting ? "Creating..." : "Create Facility"}
              </button>
            </div>

          </form>
        </Card>
      </div>
    </div>
  );
};

export default AddFacility;
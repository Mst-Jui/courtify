'use client'
import { authClient } from '@/lib/auth-client';
import { Card } from '@heroui/react';
import { useRouter } from 'next/navigation';
import React from 'react';
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
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  if (isPending) {
    // return <p>Loading...</p>;
    toast('Ops!')
  }


  const router = useRouter();
  const onSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const facilities = Object.fromEntries(formData.entries())

    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/facilities`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(facilities)
    });

    const data = await res.json()

    if (data) {
      toast.success('Facility added successfully!');
      router.push('/all-facilities')
    }
    if (!data) {
      toast.error('Failed to add facility!');
    }

  }
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 py-12 px-4 sm:px-6 lg:px-8 font-sans relative overflow-hidden flex items-center justify-center">

      {/* Background Glowing Orbs for Glassmorphism */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-teal-600/10 rounded-full blur-3xl pointer-events-none"></div>

      {/* Main Glass Container */}
      <div className="max-w-3xl w-full bg-slate-900/40 backdrop-blur-md p-8 rounded-2xl shadow-2xl border border-white/10 relative z-10">

        {/* Header */}
        <div className="mb-8 border-b border-white/10 pb-4">
          <h2 className="text-3xl font-bold tracking-tight text-slate-100 flex items-center gap-2">
            <span className="text-emerald-400">Add New Facility</span>
          </h2>
          <p className="mt-2 text-sm text-slate-400">
            List a new sports facility, turf, or court for users to book.
          </p>
        </div>

        {/* Form Wrap inside HeroUI Card */}
        <Card className="bg-transparent border-0 shadow-none">
          <form className="space-y-6"
            onSubmit={onSubmit}
          >

            {/* Grid Layout for Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              {/* Facility Name */}
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Facility Name
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-500">
                    <FaFutbol size={16} />
                  </div>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="e.g., Premium Football Turf"
                    className="w-full pl-10 pr-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-slate-100 placeholder-slate-500 focus:outline-none focus:border-emerald-500 focus:bg-white/10 transition-all text-sm"
                  />
                </div>
              </div>

              {/* Facility Type */}
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Facility Type
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-500">
                    <FaFutbol size={16} />
                  </div>
                  <select
                    name="facility_type"
                    required
                    className="w-full pl-10 pr-4 py-2.5 bg-slate-900 border border-white/10 rounded-xl text-slate-100 focus:outline-none focus:border-emerald-500 focus:bg-slate-800 transition-all text-sm appearance-none"
                  >
                    <option value="" disabled selected className="text-slate-500">Select sport type</option>
                    <option value="football">Football Turf</option>
                    <option value="badminton">Badminton Court</option>
                    <option value="cricket">Cricket Net</option>
                    <option value="swimming">Swimming Lane</option>
                    <option value="tennis">Tennis Court</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-slate-500">
                    ▼
                  </div>
                </div>
              </div>

              {/* Image Upload Link */}
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Image URL (postimage)
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-500">
                    <FaCloudUploadAlt size={16} />
                  </div>
                  <input
                    type="url"
                    name="image"
                    required
                    placeholder="Enter image URL"
                    className="w-full pl-10 pr-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-slate-100 placeholder-slate-500 focus:outline-none focus:border-emerald-500 focus:bg-white/10 transition-all text-sm"
                  />
                </div>
              </div>

              {/* Location */}
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Location
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-500">
                    <FaMapMarkerAlt size={16} />
                  </div>
                  <input
                    type="text"
                    name="location"
                    required
                    placeholder="e.g., Sector 11, Uttara, Dhaka"
                    className="w-full pl-10 pr-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-slate-100 placeholder-slate-500 focus:outline-none focus:border-emerald-500 focus:bg-white/10 transition-all text-sm"
                  />
                </div>
              </div>

              {/* Price Per Hour */}
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Price Per Hour ($)
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-500">
                    <FaDollarSign size={16} />
                  </div>
                  <input
                    type="number"
                    name="price_per_hour"
                    required
                    min="1"
                    placeholder="e.g., 50"
                    className="w-full pl-10 pr-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-slate-100 placeholder-slate-500 focus:outline-none focus:border-emerald-500 focus:bg-white/10 transition-all text-sm"
                  />
                </div>
              </div>

              {/* Capacity */}
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Capacity (Max Players)
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-500">
                    <FaUsers size={16} />
                  </div>
                  <input
                    type="number"
                    name="capacity"
                    required
                    min="1"
                    placeholder="e.g., 14"
                    className="w-full pl-10 pr-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-slate-100 placeholder-slate-500 focus:outline-none focus:border-emerald-500 focus:bg-white/10 transition-all text-sm"
                  />
                </div>
              </div>

              {/* Available Time Slots */}
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Available Time Slots
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-500">
                    <FaClock size={16} />
                  </div>
                  <input
                    type="text"
                    name="available_slots"
                    required
                    placeholder="e.g., 06:00 AM - 11:00 PM"
                    className="w-full pl-10 pr-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-slate-100 placeholder-slate-500 focus:outline-none focus:border-emerald-500 focus:bg-white/10 transition-all text-sm"
                  />
                </div>
              </div>

              {/* Owner Email (Auto-filled / Read-Only Field) */}
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">
                  Owner Email (Auto-filled)
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-600">
                    <FaEnvelope size={16} />
                  </div>
                  <input
                    type="email"
                    name="owner_email"
                    readOnly
                    // value="current-user@example.com"
                    value={user?.email || ""}
                    className="w-full pl-10 pr-4 py-2.5 bg-white/5 border border-white/5 rounded-xl text-slate-500 cursor-not-allowed text-sm focus:outline-none"
                  />
                </div>
              </div>

            </div>

            {/* Description (Full Width) */}
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Description
              </label>
              <div className="relative">
                <div className="absolute top-3 left-0 pl-3 pointer-events-none text-slate-500">
                  <FaFileAlt size={16} />
                </div>
                <textarea
                  name="description"
                  required
                  rows="4"
                  placeholder="Describe the turf, standard rules, lighting conditions, footwear recommendations, etc..."
                  className="w-full pl-10 pr-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-slate-100 placeholder-slate-500 focus:outline-none focus:border-emerald-500 focus:bg-white/10 transition-all text-sm resize-none"
                ></textarea>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-4 flex justify-end">
              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-medium rounded-xl transition-all shadow-lg shadow-emerald-900/30 active:scale-[0.98] text-sm"
              >
                Create Facility
              </button>
            </div>

          </form>
        </Card>
      </div>
    </div>
  );
};

export default AddFacility;
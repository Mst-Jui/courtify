
import React from 'react';
import { MapPin, Users, Calendar, Clock, DollarSign, Shield, Activity, ArrowRight } from 'lucide-react';
import Image from 'next/image';

const FacilitiesDetailsPage = async ({ params }) => {

  const { id } = await params
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/facilities/${id}`)
  const facility = await res.json()

  const { _id, name, facility_type, image, location, price_per_hour, capacity, description, booking_count, available_slots } = facility



  return (
    <div>

      <div className="bg-neutral-800 text-white min-h-screen py-11 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-8">

          {/* Top Header Section */}
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider mt-6">
              {facility_type} Arena
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              {name}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-sm text-neutral-400 mb-3">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-emerald-500" />
                <span>{location}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Users className="w-4 h-4 text-emerald-500" />
                <span>Max {capacity} Players</span>
              </div>
            </div>
          </div>

          {/* Main Content Layout Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start  mb-5">

            {/* Left Column: Image & Venue Specifications */}
            <div className="lg:col-span-7 space-y-6">
              {/* Main Feature Image */}
              <div className="aspect-video w-full rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-800 relative">
                <Image
                  src={image}
                  alt={name}
                  width={300}
                  height={300}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-neutral-950/90 backdrop-blur-md px-4 py-2 rounded-xl border border-neutral-800">
                  <span className="text-2xl font-black text-emerald-400">${price_per_hour}</span>
                  <span className="text-xs text-neutral-500"> / hour</span>
                </div>
              </div>

              {/* About / Description */}
              <div className="bg-neutral-900 border border-neutral-800/60 rounded-2xl p-6 space-y-4">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <Activity className="w-5 h-5 text-emerald-500" /> Venue Profile
                </h3>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  {description}
                </p>
              </div>

              {/* Amenities Info Cards (Extra Aesthetic Section) */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-neutral-900/40 border border-neutral-800/40 p-4 rounded-xl space-y-1">
                  <p className="text-xs text-neutral-500 uppercase font-bold">Total Matches</p>
                  <p className="text-lg font-bold text-white">{booking_count}</p>
                </div>
                <div className="bg-neutral-900/40 border border-neutral-800/40 p-4 rounded-xl space-y-1">
                  <p className="text-xs text-neutral-500 uppercase font-bold">Safety Level</p>
                  <p className="text-lg font-bold text-white flex items-center gap-1">
                    <Shield className="w-4 h-4 text-emerald-500" /> Certified
                  </p>
                </div>
                <div className='bg-neutral-900/40 border border-neutral-800/40 p-4 rounded-xl space-y-1'>
                  <p className="text-xs text-neutral-500 uppercase font-bold">Available Time Slot</p>
                  {available_slots.map((slot, index) => (
                    <option key={index} value={slot}>{slot}</option>
                  ))}
                </div>
                {/* <div className="bg-neutral-900/40 border border-neutral-800/40 p-4 rounded-xl space-y-1">
                  <p className="text-xs text-neutral-500 uppercase font-bold">Host Email</p>
                  <p className="text-sm font-semibold text-neutral-300 truncate">{facility.owner_email}</p>
                </div> */}
              </div>
            </div>





            {/* Right Column: Premium Booking Form Area */}
            <div className="lg:col-span-5 bg-neutral-900 border border-neutral-800 rounded-2xl p-6 shadow-xl space-y-6">
              <div>
                <h2 className="text-xl font-bold text-white">Secure Your Slot</h2>
                <p className="text-xs text-neutral-400 mt-1">Fill out the reservation card to finalize booking parameters.</p>
              </div>

              <form
                // onSubmit={(e) => e.preventDefault()}
                className="space-y-4">
                {/* Facility Name (Read-Only Field) */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-neutral-400">Target Facility</label>
                  <input
                    type="text"
                    value={name}
                    disabled
                    className="w-full bg-neutral-950 border border-neutral-800 text-neutral-400 px-4 py-3 rounded-xl text-sm font-medium cursor-not-allowed"
                  />
                </div>

                {/* Booking Date Selector */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-neutral-300 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-emerald-500" /> Select Date
                  </label>
                  <input
                    type="date"
                    className="w-full bg-neutral-950 border border-neutral-800 text-white px-4 py-3 rounded-xl text-sm focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors"
                  />
                </div>

                {/* Time Slot Custom Dropdown */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-neutral-300 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-emerald-500" /> Available Time Slot
                  </label>
                  <select
                    className="w-full bg-neutral-950 border border-neutral-800 text-white px-4 py-3 rounded-xl text-sm focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors cursor-pointer"
                  >
                    <option value="" className="text-neutral-500">Choose an available slot</option>
                    {available_slots.map((slot, index) => (
                      <option key={index} value={slot}>{slot}</option>
                    ))}
                  </select>
                </div>

                {/* Duration Hours Input */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-neutral-300 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-emerald-500" /> Reservation Hours
                  </label>
                  <input
                    type="number"
                    min="1"
                    placeholder="e.g. 2"
                    className="w-full bg-neutral-950 border border-neutral-800 text-white px-4 py-3 rounded-xl text-sm focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors"
                  />
                </div>

                {/* Cost Summary Box */}
                <div className="bg-neutral-950 border border-neutral-800/80 rounded-xl p-4 space-y-2.5">
                  <div className="flex justify-between items-center text-xs text-neutral-400">
                    <span>Base Rate</span>
                    <span>${price_per_hour} / hr</span>
                  </div>
                  <div className="h-px bg-neutral-800/60" />
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-semibold text-neutral-300">Total Price</span>
                    <span className="text-lg font-bold text-emerald-400 flex items-center">
                      <DollarSign className="w-4 h-4 shrink-0" />90.00
                    </span>
                  </div>
                </div>

                {/* Form Action Submit Button */}
                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-neutral-950 font-bold rounded-xl shadow-lg shadow-emerald-500/10 transform hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2 group"
                >
                  <span>Confirm Reservation</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </button>

              </form>
            </div>

          </div>

        </div>
      </div>


    </div>
  );
};

export default FacilitiesDetailsPage;

import React from 'react';
import { MapPin, Users, Calendar, Clock, DollarSign, Shield, Activity, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import BookingCard from '@/components/BookingCard';
import BookingForm from '@/components/BookingForm';

const FacilitiesDetailsPage = async ({ params }) => {

  const { id } = await params;
  const { token } = await auth.api.getToken({
    headers: await headers()
  })
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/facilities/${id}`, {
    headers: {
      authorization: `Bearer ${token}`
    }
  });
  const facility = await res.json();

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
                  {Array.isArray(available_slots) &&
                    available_slots.map((slot, index) => (
                      <span key={index} className="px-2 py-1 text-xs bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-md">
                        {slot}
                      </span>
                    ))}
                </div>
                {/* <div className="bg-neutral-900/40 border border-neutral-800/40 p-4 rounded-xl space-y-1">
                  <p className="text-xs text-neutral-500 uppercase font-bold">Host Email</p>
                  <p className="text-sm font-semibold text-neutral-300 truncate">{facility.owner_email}</p>
                </div> */}
              </div>
            </div>





            {/* Right Column: Premium Booking Form Area */}
            <div className="lg:col-span-5 w-full max-w-full min-w-0 bg-neutral-900 border border-neutral-800 rounded-2xl p-4 sm:p-6 shadow-xl space-y-6 box-border overflow-hidden">
              <div>
                <h2 className="text-xl font-bold text-white">Secure Your Slot</h2>
                <p className="text-xs text-neutral-400 mt-1">Fill out the reservation card to finalize booking parameters.</p>
              </div>

              <BookingForm facility={facility} />

            </div>

          </div>

        </div>
      </div>


    </div>
  );
};

export default FacilitiesDetailsPage;
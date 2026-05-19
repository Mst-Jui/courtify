import { auth } from '@/lib/auth';
import { authClient } from '@/lib/auth-client';
import { headers } from 'next/headers';
import Image from 'next/image';
import React from 'react';
import {
  FaMapMarkerAlt,
  FaDollarSign,
  FaUsers,
  FaClock,
  FaFutbol,
  FaPlus
} from 'react-icons/fa';
import DeleteFacilities from './DeleteFacilities';
import EditFacilities from './EditFacilities';

const ManageMyFacilities = async () => {
  const { data: tokenData } = await authClient.token();
  const session = await auth.api.getSession({
    headers: await headers()
  });
  const user = session?.user;

  const userEmail = user?.email ? user.email.toLowerCase() : '';
  
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/facilities?email=${userEmail}`, {
    method: "GET",
    headers: {
      'content-type': 'application/json',
      'authorization': `Bearer ${tokenData?.token}`
    },
    next: { revalidate: 0 }  
  });

  let data = [];
  try {
    data = await res.json();
  } catch (err) {
    console.error("Error parsing JSON:", err);
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 py-6 sm:py-12 px-4 sm:px-6 lg:px-8 font-sans relative overflow-hidden">
      {/* গ্লোয়িং ব্যাকগ্রাউন্ড ইফেক্টস */}
      <div className="absolute top-20 left-10 w-72 h-72 sm:w-96 sm:h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 sm:w-96 sm:h-96 bg-teal-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* হেডার সেকশন */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b border-white/10 pb-6 mb-6 sm:mb-8 gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-100">
              Manage My <span className="text-emerald-400">Facilities</span>
            </h2>
            <p className="mt-1.5 text-xs sm:text-sm text-slate-400 max-w-xl">
              View, update, or remove the sports facilities you have listed on Courtify.
            </p>
          </div>
          <div className="w-full sm:w-auto">
            <a
              href="/add-facility"
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2 px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-medium rounded-xl transition-all shadow-lg shadow-emerald-900/30 text-sm active:scale-[0.98]"
            >
              <FaPlus size={12} /> Add New Facility
            </a>
          </div>
        </div>

        {/* এম্পটি স্টেট */}
        {(!data || data.length === 0) ? (
          <div className="text-center py-16 bg-slate-900/20 backdrop-blur-md rounded-2xl border border-white/10 px-4">
            <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center mx-auto mb-3 text-slate-500">
              <FaFutbol size={20} />
            </div>
            <p className="text-slate-400 text-sm sm:text-base">You haven't added any facilities yet.</p>
          </div>
        ) : (
          <>
            {/* ডেক্সটপ ভিউ: টেবিল লেআউট (শুধুমাত্র lg স্ক্রিনের জন্য ভিজিবল) */}
            <div className="hidden lg:block overflow-visible rounded-2xl border border-white/10 bg-slate-900/40 backdrop-blur-md shadow-2xl">
              <table className="w-full border-collapse text-left text-sm table-auto">
                <thead>
                  <tr className="border-b border-white/10 bg-white/5 text-slate-300 font-semibold">
                    <th className="px-6 py-4">Facility Details</th>
                    <th className="px-6 py-4">Type</th>
                    <th className="px-6 py-4">Location</th>
                    <th className="px-6 py-4">Price / Hour</th>
                    <th className="px-6 py-4">Capacity</th>
                    <th className="px-6 py-4">Timing Slots</th>
                    <th className="px-6 py-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {data.map((d) => (
                    <tr key={d._id} className="hover:bg-white/5 transition-colors group">
                      <td className="px-6 py-4 font-medium flex items-center gap-3">
                        {d.image ? (
                          <Image
                            width={80}
                            height={80}
                            src={d.image}
                            alt={d.name || "facility"}
                            className="w-12 h-12 rounded-xl object-cover border border-white/10 transition-transform group-hover:scale-105"
                          />
                        ) : (
                          <div className="w-12 h-12 rounded-xl bg-slate-800 border border-white/10 flex items-center justify-center text-slate-500">
                            <FaFutbol size={16} />
                          </div>
                        )}
                        <span className="text-slate-100 font-semibold tracking-wide">{d.name}</span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                          <FaFutbol size={10} /> {d.facility_type}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-slate-400">
                        <span className="truncate max-w-[180px] block" title={d.location}>{d.location}</span>
                      </td>
                      <td className="px-6 py-4 text-emerald-400 font-medium">${d.price_per_hour}/hr</td>
                      <td className="px-6 py-4 text-slate-300">{d.capacity} Players</td>
                      <td className="px-6 py-4 text-slate-400 text-xs max-w-[200px]">
                        <div className="flex flex-wrap gap-1">
                          {Array.isArray(d.available_slots) 
                            ? d.available_slots.map((slot, index) => (
                                <span key={index} className="bg-slate-950 px-1.5 py-0.5 rounded border border-white/5 whitespace-nowrap">{slot}</span>
                              ))
                            : <span className="bg-slate-950 px-1.5 py-0.5 rounded border border-white/5 whitespace-nowrap">{d.available_slots}</span>
                          }
                        </div>
                      </td>
                      <td className="px-6 py-4 text-right overflow-visible">
                        <div className="flex items-center justify-end gap-2">
                          <EditFacilities facility={d} />
                          <DeleteFacilities id={d._id} />
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* মোবাইল এবং ট্যাবলেট ভিউ (sm & md) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:hidden gap-4 sm:gap-6">
              {data.map((d) => (
                <div key={d._id} className="bg-slate-900/40 backdrop-blur-md border border-white/10 rounded-2xl p-4 sm:p-5 flex flex-col justify-between hover:border-white/20 transition-all shadow-xl">
                  <div className="space-y-4">
                    
                    {/* কার্ড টপ */}
                    <div className="flex gap-3 sm:gap-4 items-center">
                      {d.image ? (
                        <Image
                          width={100}
                          height={100}
                          src={d.image}
                          alt={d.name || "facility"}
                          className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl object-cover border border-white/10 flex-shrink-0"
                        />
                      ) : (
                        <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-slate-800 border border-white/10 flex items-center justify-center text-slate-500 flex-shrink-0">
                          <FaFutbol size={20} />
                        </div>
                      )}
                      <div className="flex-1 min-w-0">
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-1">
                          {d.facility_type}
                        </span>
                        <h3 className="text-base sm:text-lg font-bold text-slate-100 leading-tight truncate">{d.name}</h3>
                      </div>
                    </div>

                    {/* কার্ড ডিটেইলস */}
                    <div className="space-y-2.5 text-xs sm:text-sm text-slate-300 border-t border-b border-white/5 py-3">
                      <div className="flex items-center gap-2 text-slate-400">
                        <FaMapMarkerAlt className="text-emerald-400 flex-shrink-0" size={13} />
                        <span className="truncate" title={d.location}>{d.location}</span>
                      </div>
                      
                      <div className="flex justify-between items-center pt-0.5">
                        <div className="flex items-center gap-1">
                          <FaDollarSign className="text-emerald-400" size={13} />
                          <span className="font-semibold text-emerald-400">{d.price_per_hour}/hr</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-slate-400">
                          <FaUsers size={13} />
                          <span>{d.capacity} Max Players</span>
                        </div>
                      </div>

                      {/* টাইম স্লটস */}
                      <div className="flex items-start gap-2 text-slate-400 pt-0.5">
                        <FaClock className="text-slate-400 mt-0.5 flex-shrink-0" size={13} />
                        <div className="flex flex-wrap gap-1 max-h-20 overflow-y-auto pr-1">
                          {Array.isArray(d.available_slots) ? (
                            d.available_slots.map((slot, i) => (
                              <span key={i} className="bg-slate-950 text-[10px] sm:text-xs px-2 py-0.5 rounded border border-white/5 whitespace-nowrap">
                                {slot}
                              </span>
                            ))
                          ) : (
                            <span className="bg-slate-950 text-[10px] sm:text-xs px-2 py-0.5 rounded border border-white/5 whitespace-nowrap">
                              {d.available_slots}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* কার্ড অ্যাকশন বাটনসমূহ */}
                  <div className="flex items-center justify-end gap-2 pt-3 mt-auto">
                    <EditFacilities facility={d} />
                    <DeleteFacilities id={d._id} />
                  </div>

                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ManageMyFacilities;
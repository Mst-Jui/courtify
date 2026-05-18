import { Card } from '@heroui/react';
import React from 'react';
import { 
  FaEdit, 
  FaTrashAlt, 
  FaMapMarkerAlt, 
  FaDollarSign, 
  FaUsers, 
  FaClock, 
  FaFutbol 
} from 'react-icons/fa';

const ManageMyFacilities = () => {

  const myFacilities = [
    {
      id: "1",
      name: "Old Trafford Turf",
      facility_type: "Football",
      location: "Sector 11, Uttara, Dhaka",
      price_per_hour: 40,
      capacity: 14,
      available_slots: "06:00 AM - 11:00 PM",
      image: "https://images.unsplash.com/photo-1577223625856-758c13f8c702?q=80&w=400&auto=format&fit=crop"
    },
    {
      id: "2",
      name: "Smash Arena",
      facility_type: "Badminton",
      location: "Dhanmondi, Dhaka",
      price_per_hour: 25,
      capacity: 4,
      available_slots: "07:00 AM - 10:00 PM",
      image: "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?q=80&w=400&auto=format&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 py-12 px-4 sm:px-6 lg:px-8 font-sans relative overflow-hidden">
      
      {/* Background Glowing Orbs for Glassmorphism */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b border-white/10 pb-6 mb-8 gap-4">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-100">
              Manage My <span className="text-emerald-400">Facilities</span>
            </h2>
            <p className="mt-2 text-sm text-slate-400">
              View, updates, or remove the sports facilities you have listed on SportNest.
            </p>
          </div>
          <div>
            <a 
              href="/add-facility" 
              className="inline-flex items-center justify-center px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-medium rounded-xl transition-all shadow-lg shadow-emerald-900/30 text-sm active:scale-[0.98]"
            >
              + Add New Facility
            </a>
          </div>
        </div>

        {/* Desktop Table View (hidden on mobile) */}
        <div className="hidden lg:block overflow-hidden rounded-2xl border border-white/10 bg-slate-900/40 backdrop-blur-md shadow-2xl">
          <table className="w-full border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-white/10 bg-white/5 text-slate-300 font-semibold">
                <th className="px-6 py-4">Facility Details</th>
                <th className="px-6 py-4">Type</th>
                <th className="px-6 py-4">Location</th>
                <th className="px-6 py-4">Price / Hour</th>
                <th className="px-6 py-4">Capacity</th>
                <th className="px-6 py-4">Timing</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {myFacilities.map((facility) => (
                <tr key={facility.id} className="hover:bg-white/5 transition-colors">
                  <td className="px-6 py-4 font-medium flex items-center gap-3">
                    <img 
                      src={facility.image} 
                      alt={facility.name} 
                      className="w-12 h-12 rounded-xl object-cover border border-white/10"
                    />
                    <span className="text-slate-100 font-semibold">{facility.name}</span>
                  </td>
                  <td className="px-6 py-4 text-slate-300">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      <FaFutbol size={10} /> {facility.facility_type}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-slate-400">
                    <span className="truncate max-w-[180px] block">{facility.location}</span>
                  </td>
                  <td className="px-6 py-4 text-emerald-400 font-medium">${facility.price_per_hour}/hr</td>
                  <td className="px-6 py-4 text-slate-300">{facility.capacity} Players</td>
                  <td className="px-6 py-4 text-slate-400 text-xs">{facility.available_slots}</td>
                  <td className="px-6 py-4 text-right space-x-2 whitespace-nowrap">
                    <button className="p-2 bg-blue-600/20 hover:bg-blue-600 text-blue-400 hover:text-white rounded-xl transition-all border border-blue-500/20">
                      <FaEdit size={14} />
                    </button>
                    <button className="p-2 bg-rose-600/20 hover:bg-rose-600 text-rose-400 hover:text-white rounded-xl transition-all border border-rose-500/20">
                      <FaTrashAlt size={14} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile & Tablet Card Grid View (hidden on desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:hidden gap-6">
          {myFacilities.map((facility) => (
            <Card key={facility.id} className="bg-slate-900/40 backdrop-blur-md border border-white/10 rounded-2xl p-5 shadow-xl space-y-4">
              <div className="flex gap-4 items-center">
                <img 
                  src={facility.image} 
                  alt={facility.name} 
                  className="w-16 h-16 rounded-xl object-cover border border-white/10"
                />
                <div>
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-1">
                    {facility.facility_type}
                  </span>
                  <h3 className="text-lg font-bold text-slate-100 leading-tight">{facility.name}</h3>
                </div>
              </div>

              <div className="space-y-2 text-sm text-slate-300 border-t border-b border-white/5 py-3">
                <div className="flex items-center gap-2 text-slate-400">
                  <FaMapMarkerAlt className="text-emerald-400 flex-shrink-0" size={14} />
                  <span className="truncate">{facility.location}</span>
                </div>
                <div className="flex justify-between items-center pt-1">
                  <div className="flex items-center gap-1">
                    <FaDollarSign className="text-emerald-400" size={14} />
                    <span className="font-semibold text-emerald-400">{facility.price_per_hour}/hr</span>
                  </div>
                  <div className="flex items-center gap-1 text-slate-400 text-xs">
                    <FaUsers size={14} />
                    <span>{facility.capacity} Max</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-slate-400 text-xs pt-1">
                  <FaClock size={14} />
                  <span>{facility.available_slots}</span>
                </div>
              </div>

              {/* Mobile Actions Button */}
              <div className="flex gap-3 pt-1">
                <button className="flex-1 py-2.5 bg-blue-600/20 hover:bg-blue-600 text-blue-400 hover:text-white rounded-xl transition-all border border-blue-500/20 flex items-center justify-center gap-2 text-sm font-medium">
                  <FaEdit size={14} /> Edit
                </button>
                <button className="flex-1 py-2.5 bg-rose-600/20 hover:bg-rose-600 text-rose-400 hover:text-white rounded-xl transition-all border border-rose-500/20 flex items-center justify-center gap-2 text-sm font-medium">
                  <FaTrashAlt size={14} /> Delete
                </button>
              </div>
            </Card>
          ))}
        </div>

      </div>
    </div>
  );
};

export default ManageMyFacilities;
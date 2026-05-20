import React from 'react';
import { Calendar, Clock } from 'lucide-react';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import CancelBooking from './CancelBooking';

const MyBookings = async () => {
  const session = await auth.api.getSession({ headers: await headers() });
  const { token } = await auth.api.getToken({ headers: await headers() });
  const user = session?.user;

  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/booking/${user?.id}`, {
    headers: { authorization: `Bearer ${token}` },
    cache: 'no-store'
  });
  const bookings = await res.json();

  return (
    <div className="min-h-screen bg-neutral-950 py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-white">My Bookings</h2>

        {bookings.length === 0 ? (
          <div className="text-center py-20 bg-neutral-900 rounded-2xl border border-neutral-800">
            <p className="text-neutral-400">No bookings found.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {/* Desktop Table View */}
            <div className="hidden lg:block overflow-hidden bg-neutral-900 rounded-2xl border border-neutral-800 shadow-xl">
              <table className="w-full text-white text-sm">
                <thead className="bg-black/20">
                  <tr className="text-neutral-400 border-b border-neutral-800">
                    <th className="p-5 text-left">Facility Name</th>
                    <th className="p-5 text-left">Date</th>
                    <th className="p-5 text-left">Time</th>
                    <th className="p-5 text-left">Price</th>
                    <th className="p-5 text-left">Status</th>
                    <th className="p-5 text-center">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-800">
                  {bookings.map((b) => (
                    <tr key={b._id} className="hover:bg-neutral-800/50 transition-colors">
                      <td className="p-5 font-semibold text-neutral-100">{b.name}</td>
                      <td className="p-5 text-neutral-400">{b.bookingDate || b.departureDate}</td>
                      <td className="p-5 text-neutral-400">{b.timeSlot}</td>
                      <td className="p-5 font-bold text-emerald-400">${b.totalPrice}</td>
                      <td className="p-5">
                        <span className="bg-neutral-950 text-neutral-300 text-xs px-3 py-1 rounded-full border border-neutral-700 capitalize">
                          {b.status}
                        </span>
                      </td>
                      <td className="p-5 text-center">
                        <CancelBooking bookingId={b._id} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile/Tablet Card View */}
            <div className="lg:hidden grid grid-cols-1 gap-4">
              {bookings.map((b) => (
                <div key={b._id} className="bg-neutral-900 p-5 rounded-2xl border border-neutral-800 space-y-4 shadow-lg">
                  <div className="flex justify-between items-start">
                    <h3 className="font-bold text-lg text-neutral-100">{b.name}</h3>
                    <span className="bg-neutral-950 text-[10px] px-2 py-1 rounded border border-neutral-800 uppercase text-neutral-400">
                      {b.status}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-sm text-neutral-500">
                    <div className="flex items-center gap-2">
                      <Calendar size={14} className="text-emerald-500" />
                      {b.bookingDate || b.departureDate}
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock size={14} className="text-emerald-500" />
                      {b.timeSlot}
                    </div>
                  </div>

                  <div className="flex justify-between items-center pt-4 border-t border-neutral-800">
                    <span className="font-bold text-emerald-400">${b.totalPrice}</span>
                    <CancelBooking bookingId={b._id} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyBookings;
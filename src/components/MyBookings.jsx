import React from 'react';
import { Calendar, Clock, DollarSign, Trash2 } from 'lucide-react';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
// import CancelButton from '@/components/CancelButton'; // আপনার তৈরি করা বাটন কম্পোনেন্ট

const MyBookings = async () => {
  const session = await auth.api.getSession({ headers: await headers() });
  const { token } = await auth.api.getToken({ headers: await headers() });
  const user = session?.user;

  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/booking/${user?.id}`, {
    headers: { authorization: `Bearer ${token}` }
  });
  const bookings = await res.json();

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold mb-8">My Bookings</h2>
      {bookings.length === 0 ? <p>No bookings found.</p> : (
        <>
          <div className="hidden md:block overflow-x-auto bg-[#0f172a] rounded-xl p-4">
            <table className="w-full text-white">
              <thead><tr className="border-b border-gray-700 text-left text-gray-400">
                <th className="p-4">Facility</th><th className="p-4">Date</th><th className="p-4">Time</th><th className="p-4">Price</th><th className="p-4">Status</th><th className="p-4">Action</th>
              </tr></thead>
              <tbody>
                {bookings.map((b) => (
                  <tr key={b._id} className="border-b border-gray-800">
                    <td className="p-4">{b.name}</td>
                    <td className="p-4">{b.bookingDate || b.departureDate}</td>
                    <td className="p-4">{b.timeSlot}</td>
                    <td className="p-4 text-green-400">${b.totalPrice}</td>
                    <td className="p-4"><span className="bg-yellow-900 px-2 py-1 rounded text-xs">{b.status}</span></td>
                    {/* <td className="p-4"><CancelButton bookingId={b._id} /></td> */}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="md:hidden grid gap-4">
            {bookings.map((b) => (
              <div key={b._id} className="bg-[#0f172a] p-4 rounded-xl border border-gray-700 text-white">
                <h3 className="font-bold">{b.name}</h3>
                <p>Date: {b.bookingDate || b.departureDate}</p>
                <p>Status: {b.status}</p>
                {/* <CancelButton bookingId={b._id} /> */}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default MyBookings;
'use client'
import { authClient } from '@/lib/auth-client';
import { ArrowRight } from 'lucide-react';
import React from 'react';
import toast from 'react-hot-toast';

const BookingCard = ({ facility, bookingInfo }) => {
  const { data: session } = authClient.useSession();
  const user = session?.user;

  const handleBooking = async () => {
    if (!bookingInfo.date || !bookingInfo.slot) return toast.error("Please fill all fields");

    const bookingData = {
      facilityId: facility._id,
      userId: user?.id,
      userName: user?.name,
      status: "pending",
      name: facility.name,
      price_per_hour: facility.price_per_hour,
      bookingDate: bookingInfo.date,
      timeSlot: bookingInfo.slot,
      hours: bookingInfo.hours,
      totalPrice: facility.price_per_hour * bookingInfo.hours
    };

    const { data: tokenData } = await authClient.token();
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/booking`, {
      method: 'POST',
      headers: { 
        'content-type': 'application/json',
        authorization: `Bearer ${tokenData?.token}` 
      },
      body: JSON.stringify(bookingData)
    });
    
    if (res.ok) toast.success("You Booked Successfully");
  };

  return (
    <button onClick={handleBooking} className="w-full py-4 bg-emerald-500 rounded-xl font-bold text-neutral-950 flex items-center justify-center gap-2">
      Book Now <ArrowRight size={16} />
    </button>
  );
};
export default BookingCard;
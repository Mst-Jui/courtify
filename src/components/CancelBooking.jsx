'use client'
import { authClient } from '@/lib/auth-client';
import { Trash2, AlertTriangle, X } from 'lucide-react';
import React, { useState } from 'react';
import toast from 'react-hot-toast';

const CancelBooking = ({ bookingId }) => {
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleCancelBooking = async () => {
    setLoading(true);
    try {
      const { data: tokenData } = await authClient.token();
      const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/booking/${bookingId}`, {
        method: "DELETE",
        headers: {
          'content-type': 'application/json',
          authorization: `Bearer ${tokenData?.token}`
        }
      });

      if (res.ok) {
        toast.success("Booking cancelled successfully!");
        window.location.reload();
      } else {
        toast.error("Failed to delete booking.");
      }
    } catch (error) {
      toast.error("Something went wrong.");
    } finally {
      setLoading(false);
      setShowModal(false);
    }
  };

  return (
    <>
      <button
        onClick={() => setShowModal(true)}
        className="flex items-center gap-2 bg-neutral-800 px-4 py-2 rounded-lg text-xs font-semibold hover:bg-red-500/20 text-red-400 transition-all border border-neutral-700"
      >
        <Trash2 size={14} /> Cancel
      </button>

      {/* Confirmation Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
          <div className="bg-neutral-900 border border-neutral-800 p-6 rounded-2xl max-w-sm w-full shadow-2xl">
            <div className="flex justify-between items-center mb-4">
              <div className="bg-red-500/10 p-2 rounded-full text-red-500">
                <AlertTriangle size={24} />
              </div>
              <button onClick={() => setShowModal(false)} className="text-neutral-500 hover:text-white">
                <X size={20} />
              </button>
            </div>
            
            <h3 className="text-lg font-bold text-white mb-2">Cancel Booking?</h3>
            <p className="text-neutral-400 text-sm mb-6">
              Are you sure you want to cancel this booking? This action cannot be undone.
            </p>

            <div className="flex gap-3">
              <button
                onClick={() => setShowModal(false)}
                className="flex-1 px-4 py-2 bg-neutral-800 hover:bg-neutral-700 text-white rounded-lg text-sm font-semibold transition-all"
              >
                Keep it
              </button>
              <button
                onClick={handleCancelBooking}
                disabled={loading}
                className="flex-1 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg text-sm font-semibold transition-all disabled:opacity-50"
              >
                {loading ? "Deleting..." : "Yes, Delete"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CancelBooking;
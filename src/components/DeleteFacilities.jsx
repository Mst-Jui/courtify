'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FaTrashAlt, FaExclamationTriangle } from 'react-icons/fa';
import { authClient } from '@/lib/auth-client';
import toast from 'react-hot-toast';

const DeleteFacilities = ({ id }) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async () => {
    setIsDeleting(true);
    try {
      const { data: tokenData } = await authClient.token();

      const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/facilities/${id}`, {
        method: "DELETE",
        headers: {
          'content-type': 'application/json',
          'authorization': `Bearer ${tokenData?.token}`
        }
      });

      if (res.ok) {
        toast.success("Facility deleted successfully!");
        setIsOpen(false);
        router.refresh();
      } else {
        toast.error("Failed to delete the facility.");
      }
    } catch (error) {
      console.error("Error deleting facility:", error);
      toast.error("Something went wrong!");
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="p-2 bg-rose-600/20 hover:bg-rose-600 text-rose-400 hover:text-white rounded-xl transition-all border border-rose-500/20 flex items-center justify-center"
      >
        <FaTrashAlt size={14} />
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4">
          <div
            className="fixed inset-0 bg-slate-950/80 backdrop-blur-md transition-opacity"
            onClick={() => !isDeleting && setIsOpen(false)}
          />

          <div className="relative w-full max-w-md transform overflow-hidden rounded-2xl border border-white/10 bg-slate-900 p-6 text-left align-middle shadow-2xl transition-all z-[100000]">
            <div className="flex items-center gap-3 border-b border-white/5 pb-4 mb-4">
              <div className="p-3 bg-rose-500/10 text-rose-400 rounded-xl border border-rose-500/20 flex-shrink-0">
                <FaExclamationTriangle size={20} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-100">
                  Delete Facility permanently?
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">
                  This action cannot be undone.
                </p>
              </div>
            </div>

            <div className="mb-6">
              <p className="text-sm text-slate-300 leading-relaxed">
                Are you absolutely sure you want to delete this facility? All bookings and records associated with this court will be permanently deleted.
              </p>
            </div>

            <div className="flex items-center justify-end space-x-3 border-t border-white/5 pt-4">
              <button
                type="button"
                disabled={isDeleting}
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 bg-white/5 hover:bg-white/10 text-slate-300 text-sm font-medium rounded-xl transition-all border border-white/10 disabled:opacity-50"
              >
                Cancel
              </button>

              <button
                type="button"
                disabled={isDeleting}
                onClick={handleDelete}
                className="px-5 py-2 bg-rose-600 hover:bg-rose-500 disabled:bg-rose-800 text-white text-sm font-medium rounded-xl transition-all shadow-lg shadow-rose-950/40 disabled:opacity-70 flex items-center gap-2"
              >
                {isDeleting ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                    Deleting...
                  </>
                ) : (
                  "Delete Permanently"
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DeleteFacilities;
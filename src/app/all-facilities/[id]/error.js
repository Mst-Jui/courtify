'use client'
import Link from "next/link";
import { ArrowLeft, AlertTriangle, ArrowRight } from "lucide-react";

export default function Error({ error }) {
  return (
    <div className="min-h-screen bg-black text-white p-6 md:p-12">
      {/* Header & Back Button */}
      <div className="max-w-7xl mx-auto mb-10 flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
            All Facilities
          </h1>
          <p className="text-slate-400 mt-2">Explore our premium sports courts</p>
        </div>


      </div>

      {/* Error Display State */}
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center py-20 border border-white/10 rounded-3xl bg-white/5">
        <AlertTriangle className="text-red-400 w-16 h-16 mb-4" />
        <h2 className="text-2xl font-semibold mb-2">Something went wrong</h2>
        <p className="text-slate-400 mb-6 text-center max-w-md">
          {error?.message || "An unexpected error occurred while loading the facilities."}
        </p>

        <Link
          href="/"
          className="flex items-center gap-2 px-6 py-3 rounded-full bg-[#00C882] text-black font-semibold hover:bg-[#00A86F] transition-all"
        >
          <ArrowLeft size={18} /> Back Home
          
        </Link>
      </div>
    </div>
  );
}
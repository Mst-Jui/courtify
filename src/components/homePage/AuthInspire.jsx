'use client';

import React from 'react';
import { Button } from "@heroui/react";
import Link from "next/link";
import { FaFutbol, FaArrowRight } from "react-icons/fa6";

const AuthInspire = () => {
  return (
    <section className="py-20 px-4 bg-neutral-950 border-y border-neutral-900  font-sans">
      <div className="max-w-4xl mx-auto text-center">
        {/* Icon */}
        <div className="inline-flex items-center justify-center p-4 bg-emerald-500/10 rounded-full mb-6">
          <FaFutbol className="text-emerald-500 text-4xl animate-spin" style={{ animationDuration: '3s' }} />
        </div>
        
        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-bold text-slate-100 mb-6">
          Ready to Elevate Your Game?
        </h2>
        
        {/* Description */}
        <p className="text-slate-400 text-lg mb-8 max-w-2xl mx-auto">
          Join Courtify today to unlock premium facilities, manage your bookings, 
          and find the perfect spot for your next match. Your sports journey begins here.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/register">
            <Button
              className="bg-emerald-600 hover:bg-emerald-500 text-black font-bold py-4 px-8 rounded-xl text-lg transition-all shadow-lg shadow-emerald-900/20 w-full sm:w-auto"
              endContent={<FaArrowRight />}
            >
              Get Started Now
            </Button>
          </Link>
          
          <Link href="/signin">
            <Button
              variant="bordered"
              className="border-slate-700 text-slate-300 font-bold py-6 px-8 rounded-xl text-lg hover:bg-slate-800 w-full sm:w-auto"
            >
              Already have an account?
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AuthInspire;
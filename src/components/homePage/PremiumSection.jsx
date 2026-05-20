"use client";

import { motion } from "framer-motion";
import { Trophy, ArrowRight } from "lucide-react";
import Link from "next/link";

const PremiumSection = () => {
  return (
    <section className="relative overflow-hidden bg-[#071212] py-20 sm:py-24 md:py-28 lg:py-32 px-4 sm:px-6 text-white">
      
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-60 sm:w-72 md:w-96 h-60 sm:h-72 md:h-96 bg-emerald-500/20 blur-[120px] md:blur-[140px]" />
      <div className="absolute bottom-0 right-0 w-60 sm:w-72 md:w-96 h-60 sm:h-72 md:h-96 bg-cyan-500/20 blur-[120px] md:blur-[140px]" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* TOP CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 border border-emerald-500/20 bg-emerald-500/10 px-3 sm:px-4 md:px-5 py-2 rounded-full text-emerald-400 text-xs sm:text-sm mb-6 sm:mb-8">
            <Trophy size={16} />
            Premium Sports Experience
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black leading-tight">
            The Future Of{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
              Sports Booking
            </span>
          </h2>

          <p className="text-gray-400 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed mt-6 sm:mt-8 max-w-3xl mx-auto px-2 sm:px-0">
            Experience a next-generation platform where athletes,
            teams, and sports lovers connect through seamless
            facility booking and premium arena access.
          </p>
        </motion.div>

        {/* CENTER VISUAL */}
        <div className="relative mt-16 sm:mt-20 md:mt-24 lg:mt-28 flex items-center justify-center">

          {/* OUTER RING */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute w-[220px] h-[220px] sm:w-[320px] sm:h-[320px] md:w-[500px] md:h-[500px] lg:w-[620px] lg:h-[620px] border border-white/10 rounded-full"
          />

          {/* INNER RING */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute w-[160px] h-[160px] sm:w-[240px] sm:h-[240px] md:w-[360px] md:h-[360px] lg:w-[480px] lg:h-[480px] border border-emerald-500/20 rounded-full"
          />

          {/* FLOATING BALLS (hidden on very small screens) */}
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="hidden sm:block absolute top-0 left-6 sm:left-10 w-12 sm:w-16 md:w-20 h-12 sm:h-16 md:h-20 rounded-full bg-emerald-400/30 blur-2xl"
          />

          <motion.div
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 6, repeat: Infinity }}
            className="hidden sm:block absolute bottom-0 right-6 sm:right-10 w-16 sm:w-20 md:w-28 h-16 sm:h-20 md:h-28 rounded-full bg-cyan-400/30 blur-2xl"
          />

          {/* CENTER CORE */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="w-40 h-40 sm:w-52 sm:h-52 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full bg-gradient-to-br from-emerald-500 to-cyan-500 blur-3xl opacity-30 absolute inset-0" />

            <div className="relative w-40 h-40 sm:w-52 sm:h-52 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full border border-white/10 bg-white/5 backdrop-blur-2xl flex flex-col items-center justify-center shadow-[0_0_80px_rgba(16,185,129,0.4)]">
              <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black">
                SPORT
              </h2>

              <p className="text-sm sm:text-base md:text-xl lg:text-2xl tracking-[4px] sm:tracking-[6px] md:tracking-[8px] text-emerald-400 mt-2">
                NEST
              </p>
            </div>
          </motion.div>
        </div>

        {/* BUTTON */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="flex justify-center mt-16 sm:mt-20 md:mt-24 lg:mt-28"
        >
          <Link href="/all-facilities">
            <button className="group bg-emerald-500 hover:bg-emerald-400 transition-all duration-300 text-black font-bold px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 rounded-2xl flex items-center gap-2 sm:gap-3 text-sm sm:text-base md:text-lg shadow-[0_0_40px_rgba(16,185,129,0.4)]">
              Explore Facilities

              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-all duration-300"
              />
            </button>
          </Link>
        </motion.div>

      </div>
    </section>
  );
};

export default PremiumSection;
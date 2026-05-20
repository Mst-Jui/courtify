"use client";

import { motion } from "framer-motion";
import { Sparkles, MapPin, Zap, ArrowRight } from "lucide-react";
import Link from "next/link";

const SpotlightSection = () => {
  return (
    <section className="relative overflow-hidden bg-[#071212] py-28 px-4 text-white">

      {/* Background Glow */}
      <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-emerald-500/20 blur-[140px]" />
      <div className="absolute bottom-[-120px] right-[-120px] w-[450px] h-[450px] bg-cyan-500/20 blur-[160px]" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-emerald-400 text-sm">
            <Sparkles size={16} />
            Weekly Spotlight
          </div>

          <h2 className="text-4xl md:text-6xl font-black mt-6">
            Featured{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
              Arena Highlights
            </span>
          </h2>

          <p className="text-gray-400 mt-6 text-base md:text-lg">
            Discover the most active sports arenas, trending locations,
            and high-demand booking zones this week.
          </p>
        </motion.div>

        {/* MAIN SPOTLIGHT FLOW */}
        <div className="mt-20 grid lg:grid-cols-3 gap-8">

          {/* LEFT BIG SPOTLIGHT */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2 relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-10"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-cyan-500/10" />

            <div className="relative z-10">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3 text-emerald-400">
                  <Zap size={18} />
                  Hot Spotlight
                </div>

                <span className="px-3 py-1 text-xs bg-emerald-500 text-black font-bold rounded-full">
                  Trending
                </span>
              </div>

              <h3 className="text-3xl md:text-4xl font-black mt-8">
                SkyLine Football Arena
              </h3>

              <p className="text-gray-400 mt-4 leading-relaxed">
                Most booked football turf this week with premium lighting,
                night matches, and professional grade pitch quality.
              </p>

              <div className="flex items-center gap-4 mt-8 text-sm text-gray-300">
                <span className="flex items-center gap-2">
                  <MapPin size={16} className="text-emerald-400" />
                  Dhaka, Bangladesh
                </span>

                <span className="px-3 py-1 rounded-full bg-white/10 border border-white/10">
                  98% Occupied
                </span>
              </div>

              <Link href={'/all-facilities'}>
                <button className="mt-10 group flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-black font-bold px-6 py-3 rounded-2xl transition-all">
                  Book Now
                  <ArrowRight className="group-hover:translate-x-1 transition" size={18} />
                </button>
              </Link>
            </div>
          </motion.div>

          {/* RIGHT SIDE MINI HIGHLIGHTS */}
          <div className="space-y-6">

            {/* ITEM 1 */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="p-6 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl"
            >
              <h4 className="font-bold text-lg">Elite Badminton Club</h4>
              <p className="text-gray-400 text-sm mt-2">
                High demand indoor courts
              </p>
              <div className="mt-4 h-2 bg-white/10 rounded-full overflow-hidden">
                <div className="w-[75%] h-full bg-gradient-to-r from-cyan-400 to-blue-500"></div>
              </div>
            </motion.div>

            {/* ITEM 2 */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="p-6 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl"
            >
              <h4 className="font-bold text-lg">Royal Tennis Zone</h4>
              <p className="text-gray-400 text-sm mt-2">
                Weekend slots filling fast
              </p>
              <div className="mt-4 h-2 bg-white/10 rounded-full overflow-hidden">
                <div className="w-[60%] h-full bg-gradient-to-r from-orange-400 to-yellow-400"></div>
              </div>
            </motion.div>

            {/* ITEM 3 */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="p-6 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl"
            >
              <h4 className="font-bold text-lg">Aqua Swimming Arena</h4>
              <p className="text-gray-400 text-sm mt-2">
                Morning slots available
              </p>
              <div className="mt-4 h-2 bg-white/10 rounded-full overflow-hidden">
                <div className="w-[40%] h-full bg-gradient-to-r from-emerald-400 to-cyan-400"></div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default SpotlightSection;
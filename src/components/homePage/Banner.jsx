import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Banner = () => {
  const handleScrollToFacilities = () => {
    const facilitiesSection = document.getElementById('featured-facilities');
    if (facilitiesSection) {
      facilitiesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative bg-neutral-800 text-white min-h-[85vh] flex items-center overflow-hidden">
      {/* Background Image Overlay with Gradients */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40 mix-blend-overlay"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1541252260730-0412e8e2108e?q=80&w=1920&auto=format&fit=crop')`
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-neutral-950 via-neutral-900/80 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-neutral-950 to-transparent" />

      {/* Main Content */}
      <div className="container mx-auto px-6 sm:px-12 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center py-20">

        {/* Left Column: Text & CTA */}
        <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide uppercase dynamic-heading">
            ⚡ Premium Sports Venues
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-white">
            Find Your Court. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-emerald-400">
              Book Your Game.
            </span>
          </h1>

          <p className="text-neutral-400 text-base sm:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed">
            Discover and reserve premium football turfs, badminton courts, swimming lanes, and tennis courts near you. Seamless scheduling for athletes and casual players alike.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Link href={'/all-facilities'}>
              <button
                // onClick={handleScrollToFacilities}
                className="py-2 px-3 bg-gradient-to-r from-emerald-600 to-emerald-400 hover:from-emerald-800 hover:to-emerald-500 text-neutral-950 font-bold rounded-xl shadow-lg shadow-emerald-500/20 transform hover:-translate-y-0.5 transition-all duration-200 focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-neutral-900"
              >
                Explore Facilities
              </button>
            </Link>

          </div>

          {/* Mini Stats (Adds premium UI/Recruiter appeal) */}
          <div className="grid grid-cols-3 gap-6 pt-10 border-t border-neutral-800/60 max-w-md mx-auto lg:mx-0">
            <div>
              <p className="text-2xl sm:text-3xl font-bold text-white">50+</p>
              <p className="text-xs sm:text-sm text-neutral-500 font-medium">Premium Venues</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-bold text-white">10k+</p>
              <p className="text-xs sm:text-sm text-neutral-500 font-medium">Active Players</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-bold text-white">4.9★</p>
              <p className="text-xs sm:text-sm text-neutral-500 font-medium">User Rating</p>
            </div>
          </div>
        </div>

        {/* Right Column: Visual Element / Feature Grid Showcase */}
        <div className="lg:col-span-5 hidden lg:grid grid-cols-2 gap-4 relative">
          <div className="absolute -inset-4 bg-emerald-500/10 rounded-3xl blur-3xl -z-10" />

          <div className="space-y-4">
            <div className="h-48 bg-neutral-800/50 rounded-2xl border border-neutral-700/50 overflow-hidden relative group">
              <Image
                width={200}
                height={200}
                src="https://images.unsplash.com/photo-1529900748604-07564a03e7a6?q=80&w=400&auto=format&fit=crop"
                alt="Football Turf"
                className="object-cover w-full h-full filter grayscale group-hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-neutral-950/40 p-4 flex items-end">
                <span className="text-sm font-bold text-white">Football Turfs</span>
              </div>
            </div>
            <div className="h-64 bg-neutral-800/50 rounded-2xl border border-neutral-700/50 overflow-hidden relative group">
              <Image
                width={200}
                height={200}
                src="https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?q=80&w=400&auto=format&fit=crop"
                alt="Badminton Court"
                className="object-cover w-full h-full filter grayscale group-hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-neutral-950/40 p-4 flex items-end">
                <span className="text-sm font-bold text-white">Badminton</span>
              </div>
            </div>
          </div>

          <div className="space-y-4 pt-8">
            <div className="h-64 bg-neutral-800/50 rounded-2xl border border-neutral-700/50 overflow-hidden relative group">
              <Image
                width={200}
                height={200}
                src="https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&w=400&auto=format&fit=crop"
                alt="Swimming Pool"
                className="object-cover w-full h-full filter grayscale group-hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-neutral-950/40 p-4 flex items-end">
                <span className="text-sm font-bold text-white">Aquatic Lanes</span>
              </div>
            </div>
            <div className="h-48 bg-neutral-800/50 rounded-2xl border border-neutral-700/50 overflow-hidden relative group">
              <Image
                width={200}
                height={200}
                src="https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?q=80&w=400&auto=format&fit=crop"
                alt="Tennis Court"
                className="object-cover w-full h-full filter grayscale group-hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-neutral-950/40 p-4 flex items-end">
                <span className="text-sm font-bold text-white">Tennis Courts</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
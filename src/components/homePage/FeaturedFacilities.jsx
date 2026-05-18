import React from 'react';
import { MapPin, Users, Clock, ArrowRight } from 'lucide-react';

const FeaturedFacilities = () => {
  
  const dummyFacilities = [
    {
      id: 1,
      name: "Camp Nou Premium Turf",
      type: "Football",
      image: "https://images.unsplash.com/photo-1529900748604-07564a03e7a6?q=80&w=600&auto=format&fit=crop",
      location: "Mirpur 11, Dhaka",
      price: 45,
      capacity: 14,
      slots: "6:00 AM - 8:00 AM, 4:00 PM - 6:00 PM"
    },
    {
      id: 2,
      name: "Grand Slam Indoor Court",
      type: "Badminton",
      image: "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?q=80&w=600&auto=format&fit=crop",
      location: "Gulshan 2, Dhaka",
      price: 25,
      capacity: 4,
      slots: "10:00 AM - 12:00 PM, 7:00 PM - 9:00 PM"
    },
    {
      id: 3,
      name: "Olympic Size Blue Lanes",
      type: "Swimming",
      image: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&w=600&auto=format&fit=crop",
      location: "Dhanmondi, Dhaka",
      price: 35,
      capacity: 8,
      slots: "7:00 AM - 9:00 AM, 5:00 PM - 7:00 PM"
    },
    {
      id: 4,
      name: "Wimbledon Clay Arena",
      type: "Tennis",
      image: "https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?q=80&w=600&auto=format&fit=crop",
      location: "Uttara Sector 4, Dhaka",
      price: 40,
      capacity: 4,
      slots: "8:00 AM - 10:00 AM, 4:00 PM - 6:00 PM"
    },
    {
      id: 5,
      name: "Old Trafford Multi-Turf",
      type: "Football",
      image: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=600&auto=format&fit=crop",
      location: "Banani, Dhaka",
      price: 50,
      capacity: 16,
      slots: "2:00 PM - 4:00 PM, 8:00 PM - 10:00 PM"
    },
    {
      id: 6,
      name: "Smashers Badminton Dome",
      type: "Badminton",
      image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=600&auto=format&fit=crop",
      location: "Khilgaon, Dhaka",
      price: 20,
      capacity: 4,
      slots: "9:00 AM - 11:00 AM, 6:00 PM - 8:00 PM"
    }
  ];

  return (
    <section id="featured-facilities" className="bg-neutral-950 py-24 border-t border-neutral-900">
      <div className="container mx-auto px-6 sm:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-sm font-bold tracking-widest text-emerald-400 uppercase">
            Top Rated Arenas
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Explore Featured Facilities
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto rounded-full" />
        </div>

        {/* Facilities Responsive Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dummyFacilities.map((facility) => (
            <div 
              key={facility.id} 
              className="group bg-neutral-900 border border-neutral-800/80 rounded-2xl overflow-hidden flex flex-col h-full hover:border-neutral-700 transition-all duration-300 transform hover:-translate-y-1"
            >
              {/* Card Image Area */}
              <div className="relative h-56 overflow-hidden bg-neutral-800">
                <img 
                  src={facility.image} 
                  alt={facility.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 right-4 bg-neutral-950/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-neutral-700/50">
                  <span className="text-emerald-400 font-bold text-sm">
                    ${facility.price}
                  </span>
                  <span className="text-neutral-400 text-xs font-normal"> / hr</span>
                </div>
                <div className="absolute bottom-4 left-4 bg-emerald-500 text-neutral-950 text-xs font-bold px-2.5 py-1 rounded-md uppercase tracking-wider">
                  {facility.type}
                </div>
              </div>

              {/* Card Body Details */}
              <div className="p-6 flex flex-col flex-grow space-y-4">
                <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors duration-200 line-clamp-1">
                  {facility.name}
                </h3>
                
                <p className="text-neutral-400 text-sm line-clamp-2 leading-relaxed">
                  Experience world-class sporting infrastructure with top-tier amenities, professional lighting, and a premium playing surface designed for enthusiasts.
                </p>

                {/* Metadata Grid */}
                <div className="grid grid-cols-2 gap-y-3 gap-x-2 pt-2 text-xs text-neutral-400 font-medium">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span className="truncate">{facility.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Cap: {facility.capacity} Players</span>
                  </div>
                  <div className="flex items-center gap-2 col-span-2">
                    <Clock className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span className="truncate text-neutral-400">
                      Slots: <span className="text-neutral-500">{facility.slots}</span>
                    </span>
                  </div>
                </div>

                {/* Flex Spacer - Ensures buttons align perfectly at the bottom */}
                <div className="flex-grow" />

                {/* CTA Action Button */}
                <button
                  className="w-full mt-4 py-3 bg-neutral-800 hover:bg-gradient-to-r hover:from-emerald-500 hover:to-teal-500 text-white hover:text-neutral-950 font-bold rounded-xl transition-all duration-300 flex items-center justify-center gap-2 group/btn border border-neutral-700/60 hover:border-transparent"
                >
                  <span>Book Now</span>
                  <ArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FeaturedFacilities;
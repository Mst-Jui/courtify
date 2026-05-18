import FacilitiesCard from "./FacilitiesCard";

const AllFacilities = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/facilities`);
  const facilities = await res.json();

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
          {


            facilities.map((facility) => (
              <FacilitiesCard key={facility._id} facility={facility} />
            ))


          }
        </div>

      </div>
    </section>
  );
};

export default AllFacilities;
import FacilitySearch from "./FacilitySearch";

const AllFacilities = () => {
  return (
    <section className="bg-neutral-950 py-24 border-t border-neutral-900">
      <div className="container mx-auto px-6 sm:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-sm font-bold tracking-widest text-emerald-400 uppercase">
            Top Rated Arenas
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Explore Featured Facilities
          </h2>
        </div>

        
        <FacilitySearch />
        
      </div>
    </section>
  );
};

export default AllFacilities;
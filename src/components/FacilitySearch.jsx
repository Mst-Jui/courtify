"use client";
import { useState, useEffect } from "react";
import FacilitiesCard from "./FacilitiesCard";

const FacilitySearch = () => {
  const [facilities, setFacilities] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [loading, setLoading] = useState(true);

  const sportsOptions = ["Football", "Badminton", "Tennis", "Swimming"];

  useEffect(() => {
    setLoading(true);
    // ব্যাকএন্ডে টাইপগুলো অ্যারে হিসেবে পাঠানোর জন্য URLSearchParams ব্যবহার করা ভালো
    const params = new URLSearchParams();
    if (search) params.append("search", search);
    selectedTypes.forEach((type) => params.append("type", type));

    fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/facilities?${params.toString()}`)
      .then((res) => res.json())
      .then((data) => {
        setFacilities(data);
        setLoading(false);
      });
  }, [search, selectedTypes]);

  const handleCheckboxChange = (sport) => {
    setSelectedTypes((prev) =>
      prev.includes(sport) ? prev.filter((t) => t !== sport) : [...prev, sport]
    );
  };

  return (
    <div className="space-y-8">
      {/* Search & Filter UI */}
      <div className="bg-neutral-900 p-6 rounded-2xl border border-neutral-800 shadow-xl">
        <div className="flex flex-col md:flex-row gap-6 items-center">
          {/* Search Input */}
          <input
            type="text"
            placeholder="Search facilities by name..."
            className="w-full md:w-1/3 p-4 rounded-xl bg-neutral-950 text-white border border-neutral-700 focus:border-emerald-500 outline-none transition"
            onChange={(e) => setSearch(e.target.value)}
          />

          {/* Checkbox Filters */}
          <div className="flex flex-wrap gap-4 justify-center">
            {sportsOptions.map((sport) => (
              <label
                key={sport}
                className={`cursor-pointer px-4 py-2 rounded-full border transition ${
                  selectedTypes.includes(sport)
                    ? "bg-emerald-600 border-emerald-500 text-white"
                    : "bg-neutral-800 border-neutral-700 text-neutral-400 hover:border-neutral-500"
                }`}
              >
                <input
                  type="checkbox"
                  className="hidden"
                  onChange={() => handleCheckboxChange(sport)}
                />
                {sport}
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* Results Grid */}
      {loading ? (
        <div className="text-center text-emerald-400 font-semibold py-10">Loading Arenas <span className="loading loading-dots loading-sm"></span></div>
      ) : facilities.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((facility) => (
            <FacilitiesCard key={facility._id} facility={facility} />
          ))}
        </div>
      ) : (
        <div className="text-center text-neutral-500 py-10">No facilities found.</div>
      )}
    </div>
  );
};

export default FacilitySearch;
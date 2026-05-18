import { Button } from '@heroui/react';
import { MapPin, Users, Clock, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const FacilitiesCard = ({ facility }) => {
  const { _id, name, facility_type, image, location, price_per_hour, capacity, description, booking_count, available_slots } = facility
  return (
    <div>
      <div
        key={facility.id}
        className="group bg-neutral-900 border border-neutral-600/80 rounded-2xl overflow-hidden flex flex-col h-full hover:border-neutral-700 transition-all duration-300 transform hover:-translate-y-1"
      >
        {/* Card Image Area */}
        <div className="relative h-56 overflow-hidden bg-neutral-800">
          <Image
            src={image}
            alt={name}
            width={200}
            height={200}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute top-4 right-4 bg-neutral-950/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-neutral-700/50">
            <span className="text-emerald-400 font-bold text-sm">
              ${price_per_hour}
            </span>
            <span className="text-neutral-400 text-xs font-normal"> / hr</span>
          </div>
          <div className="absolute bottom-4 left-4 bg-emerald-500 text-neutral-950 text-xs font-bold px-2.5 py-1 rounded-md uppercase tracking-wider">
            {facility_type}
          </div>
        </div>

        {/* Card Body Details */}
        <div className="p-6 flex flex-col flex-grow space-y-4">
          <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors duration-200 line-clamp-1">
            {name}
          </h3>

          <p className="text-neutral-400 text-sm line-clamp-1 leading-relaxed">
            {description}
          </p>

          {/* Metadata Grid */}
          <div className="grid grid-cols-2 gap-y-3 gap-x-2 pt-2 text-xs text-neutral-400 font-medium">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-emerald-500 shrink-0" />
              <span className="truncate">{location}</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>Cap: {capacity} Players</span>
            </div>
            {/* <div className="flex items-center gap-2 col-span-2">
              <Clock className="w-4 h-4 text-emerald-500 shrink-0" />
              <span className="truncate text-neutral-400">
                Slots: <span className="text-neutral-500">
                  {
                  available_slots
                  }
                  </span>
              </span>
            </div> */}
          </div>

          {/* Flex Spacer - Ensures buttons align perfectly at the bottom */}
          <div className="flex-grow" />

          {/* CTA Action Button */}
          <Link href={`/all-facilities/${_id}`}>
            <Button
              className="w-full mt-4 py-3 bg-neutral-800 hover:bg-gradient-to-r hover:from-emerald-500 hover:to-teal-500 text-white hover:text-neutral-950 font-bold rounded-xl transition-all duration-300 flex items-center justify-center gap-2 group/btn border border-neutral-700/60 hover:border-transparent"
            >
              <span>Book Now</span>
              <ArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FacilitiesCard;
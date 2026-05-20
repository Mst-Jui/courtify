import Banner from "@/components/homePage/Banner";
import FeaturedFacilities from "@/components/homePage/FeaturedFacilities";
import PremiumSection from "@/components/homePage/PremiumSection";
import SpotlightSection from "@/components/homePage/SpotlightSection";
import NavbarSection from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div>
     <Banner />
     <FeaturedFacilities />
     <SpotlightSection />
     <PremiumSection />
     
     
    </div>
  );
}

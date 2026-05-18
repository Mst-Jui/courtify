import Banner from "@/components/homePage/Banner";
import FeaturedFacilities from "@/components/homePage/FeaturedFacilities";
import NavbarSection from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div>
     <Banner />
     <FeaturedFacilities />
    </div>
  );
}

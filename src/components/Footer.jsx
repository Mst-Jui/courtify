import Link from "next/link";
import Image from "next/image";
import { IoLogoInstagram, IoPaperPlaneOutline } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineMail } from "react-icons/md";
import { FaFacebook, FaLinkedinIn, FaQuoteLeft, FaTwitter } from "react-icons/fa";
import { IoIosFootball } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="relative bg-[#050505] text-gray-400 border-t border-white/10 pt-20 pb-10 overflow-hidden">
      {/* Background Glow Effect */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-50%] right-[-10%] w-[500px] h-[500px] bg-emerald-500/10 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Newsletter Section */}
        <div className="bg-white/5 border border-white/10 p-8 md:p-10 rounded-3xl mb-16 flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h3 className="text-2xl font-bold text-white mb-2">Join our sports community</h3>
            <p className="text-sm">Get the latest updates on new facilities and special offers.</p>
          </div>
          <div className="flex w-full md:w-auto bg-black/40 p-2 rounded-2xl border border-white/10">
            <input type="email" placeholder="Enter your email" className="bg-transparent px-4 py-2 outline-none w-full text-sm" />
            <button className="bg-emerald-600 hover:bg-emerald-500 text-white px-6 py-2 rounded-xl transition-all font-medium flex items-center gap-2">
              <IoPaperPlaneOutline /> Subscribe
            </button>
          </div>
        </div>

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-4">
            <Link href={'/'} className="flex flex-col items-center justify-center">
            <span className='text-emerald-500 text-7xl'>
              <IoIosFootball />
            </span>
            <span>
              <span className='font-bold text-emerald-500'>COUR</span>
              <span className='text-white'>TIFY</span>
            </span>
          </Link>
            <p className="text-sm leading-relaxed">Connecting sports lovers with the best courts. Your game, your time, your way.</p>
            {/* Live Indicator */}
            <div className="flex items-center gap-2 text-xs text-emerald-500 font-mono">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              SYSTEM OPERATIONAL
            </div>
          </div>

          {/* Quick Links - সংশোধিত */}
          <div>
            <h4 className="text-white font-semibold mb-6">Explore</h4>
            <ul className="space-y-4 text-sm">
              <li>
                <Link href="/" className="hover:text-emerald-400 transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/all-facilities" className="hover:text-emerald-400 transition-colors">All Facilities</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-6">Contact</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex gap-2"><CiLocationOn className="text-emerald-500 mt-1" /> BK 10001, Dhaka</li>
              <li className="flex gap-2"><MdOutlineMail className="text-emerald-500 mt-1" /> hello@courtify.com</li>
            </ul>
          </div>

          {/* Quote Card */}
          <div className="bg-gradient-to-br from-white/5 to-transparent p-6 rounded-2xl border border-white/5 hover:border-emerald-500/30 transition-all duration-500 group">
            <FaQuoteLeft className="text-emerald-600 mb-3 opacity-30 group-hover:opacity-100 transition-opacity" />
            <p className="text-xs italic text-gray-300">"Success is no accident. It is hard work, perseverance, learning, sacrifice."</p>
            <p className="text-[10px] mt-4 text-emerald-500 font-bold">— PELÉ</p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 border-t border-white/10 pt-8 text-xs">
          <p>© {new Date().getFullYear()} COURTIFY. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white transition">Privacy</Link>
            <Link href="#" className="hover:text-white transition">Terms</Link>
            <div className="flex gap-4">
              <FaFacebook className="hover:text-emerald-500 cursor-pointer" />
              <FaTwitter className="hover:text-emerald-500 cursor-pointer" />
              <IoLogoInstagram className="hover:text-emerald-500 cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
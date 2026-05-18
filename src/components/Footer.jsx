import Link from "next/link";
import Image from "next/image";
import { IoHomeOutline } from "react-icons/io5";
import { IoMdBook } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineMail } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { FaFacebook, FaLinkedinIn, FaQuoteLeft, FaTwitter } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="relative bg-slate-900">
      <div className="mt-12 h-px w-full bg-linear-to-r from-transparent via-gray-300 to-transparent dark:via-white/10" />

      {/* Background Layer */}
      <div className="absolute inset-0 -z-10 bg-white dark:bg-[#0a0a0b]" />

      {/* Subtle Gradient Glow */}
      <div
        className="absolute inset-0 -z-10 bg-linear-to-tr 
        from-purple-500/5 via-transparent to-blue-500/5 
        dark:from-purple-500/10 dark:to-blue-500/10 blur-3xl"
      />

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Image
                src="/logo.png"
                alt="book-borro-logo"
                width={200}
                height={200}
              />

            </div>

            <p className="text-sm leading-relaxed text-white max-w-xs">
              Sports bring energy, passion, and competition together.
              They connect people and build strong communities.
              Courtify helps you book the perfect game anytime, anywhere.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm text-white">
              <li>
                <Link
                  href="/"
                  className="flex gap-2 items-center hover:text-emerald-600 text-white transition"
                >
                  <IoHomeOutline />
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/all-books"
                  className="flex gap-2 items-center hover:text-emerald-600ext-white transition"
                >
                  <IoMdBook />
                  All Books
                </Link>
              </li>
              <li>
                <Link
                  href="/profile"
                  className="flex gap-2 items-center hover:text-emerald-600 text-white transition"
                >
                  <CgProfile />
                  My Profile
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Contact Us
            </h3>
            <ul className="space-y-3 text-sm text-white">
              <li>
                <Link
                  href="#"
                  className="flex gap-2 hover:text-emerald-600 text-white transition"
                >
                  <CiLocationOn />
                  Courtify Headquarters <br />
                  Sports Innovation Hub, BK 10001
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="flex items-center gap-2 hover:text-emerald-600 text-white transition"
                >
                  <MdOutlineMail />
                  hello@courtify.com
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="flex items-center gap-2 hover:text-emerald-600 text-white transition"
                >
                  <FiPhone />
                  +880123-567890
                </Link>
              </li>
            </ul>
          </div>

          {/* Follow Us */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">
              Follow Us
            </h3>

            <div className="flex gap-5">
              <span className="p-2 rounded-full bg-gray-600 hover:bg-orange-100  hover:text-emerald-600 text-white transition">
                <FaFacebook />
              </span>
              <span className="p-2 rounded-full bg-gray-600 hover:bg-orange-100  hover:text-emerald-600 text-white transition">
                <FaTwitter />
              </span>
              <span className="p-2 rounded-full bg-gray-600 hover:bg-orange-100  hover:text-emerald-600 text-white transition">
                <RiInstagramFill />
              </span>
              <span className="p-2 rounded-full bg-gray-600 hover:bg-orange-100  hover:text-emerald-600 text-white transition">
                <FaLinkedinIn />
              </span>
            </div>

            {/* ""  */}
            <div className="bg-gray-700 p-5 rounded-2xl shadow-md hover:shadow-xl transition duration-300">

              <FaQuoteLeft className="text-emerald-600 text-4xl mb-3" />

              <p className="text-sm md:text-base text-gray-200 leading-relaxed mb-4 font-medium">
                Success is no accident. It is hard work, perseverance, learning, studying, sacrifice.
              </p>

              <p className="text-xs md:text-sm text-gray-400 font-medium">
                — Pelé
              </p>

            </div>

          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 h-px w-full bg-linear-to-r from-transparent via-gray-300 to-transparent dark:via-white/10" />

        {/* Bottom */}
        <div className="mt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 dark:text-gray-400">
          <p>© {new Date().getFullYear()} COURTIFY. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <Link
              href="#"
              className=" hover:text-emerald-600 text-white transition"
            >
              Privacy
            </Link>
            <Link
              href="#"
              className=" hover:text-emerald-600 text-white transition"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
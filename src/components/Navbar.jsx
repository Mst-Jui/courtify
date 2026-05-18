import Image from 'next/image';
import React from 'react';
import NavLink from './NavLink';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              <li>
                <NavLink href={"/"}>Home</NavLink>
              </li>
              <li>
                <NavLink href={"/all-facilities"}>All Facilities</NavLink>
              </li>
              <li>
                <NavLink href={"/my-bookings"}>My Bookings</NavLink>
              </li>
              <li>
                <NavLink href={"/add-facility"}>Add Facility</NavLink>
              </li>
              <li>
                <NavLink href={"/manage-my-facilities"}>Manage My Facilities</NavLink>
              </li>
            </ul>
          </div>


          {/* logo  */}
          <Link href={'/'}>
            <Image
              src="/logo.png"
              alt="Courtify Logo"
              width={80}
              height={80}
            />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink href={"/"}>Home</NavLink>
            </li>
            <li>
              <NavLink href={"/all-facilities"}>All Facilities</NavLink>
            </li>
            <li>
              <NavLink href={"/my-bookings"}>My Bookings</NavLink>
            </li>
            <li>
              <NavLink href={"/add-facility"}>Add Facility</NavLink>
            </li>
            <li>
              <NavLink href={"/manage-my-facilities"}>Manage My Facilities</NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          {/* Register  */}

          <Link href={"/register"}>
            <button
              className="px-8 py-4 bg-gradient-to-r from-emerald-600 to-emerald-400 hover:from-emerald-800 hover:to-emerald-500 text-neutral-950 font-bold rounded-xl shadow-lg shadow-emerald-500/20 transform hover:-translate-y-0.5 transition-all duration-200 focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 "
            >
              Sign Up
            </button>
          </Link>

          {/* dropdown  */}
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <Image
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  width={20}
                  height={20}
                />
              </div>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow font-semibold">
              <li>
                <a className="justify-between">
                  Profile
                  {/* <span className="badge">New</span> */}
                </a>
              </li>
              <li>
                <NavLink href={"/my-bookings"}>My Bookings</NavLink>
              </li>
              <li>
                <NavLink href={"/add-facility"}>Add Facility</NavLink>
              </li>
              <li>
                <NavLink href={"/manage-my-facilities"}>Manage My Facilities</NavLink>
              </li>
              <li className='text-red-500'><a>Logout</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
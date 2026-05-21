'use client'
import Image from 'next/image';
import React from 'react';
import NavLink from './NavLink';
import Link from 'next/link';
import { authClient } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';
import { IoIosFootball } from 'react-icons/io';

const Navbar = () => {
  const router = useRouter();
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  if (isPending) return <div className="h-14" />;

  const handleSignOut = async () => {
    await authClient.signOut();
    router.push('/')
  }

  return (
    
    <div className="sticky top-0 z-50 w-full bg-neutral-950/80 backdrop-blur-xl border-b border-white/10 shadow-lg">

      <div className="navbar min-h-[56px] container mx-auto px-4">

        {/* Navbar Start: Mobile Dropdown & Logo */}
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden text-white p-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 w-52 p-4 shadow-2xl bg-neutral-900 rounded-box text-white font-medium z-[100]">
              <li><NavLink href={"/"}>Home</NavLink></li>
              <li><NavLink href={"/all-facilities"}>All Facilities</NavLink></li>
              {user && (
                <>
                  <li><NavLink href={"/my-bookings"}>My Bookings</NavLink></li>
                  <li><NavLink href={"/add-facility"}>Add Facility</NavLink></li>
                  <li><NavLink href={"/manage-my-facilities"}>Manage My Facilities</NavLink></li>
                </>
              )}
            </ul>
          </div>
          <Link href={'/'} className="flex flex-col items-center justify-center">
            <span className='text-emerald-500 text-5xl'>
              <IoIosFootball />
            </span>
            <span>
              <span className='font-bold text-emerald-500'>COUR</span>
              <span className='text-white'>TIFY</span>
            </span>
          </Link>
        </div>

        {/* Navbar Center: Desktop Menu */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-1 text-white font-medium">
            <li><NavLink href={"/"}>Home</NavLink></li>
            <li><NavLink href={"/all-facilities"}>All Facilities</NavLink></li>
            {user && (
              <>
                <li><NavLink href={"/my-bookings"}>My Bookings</NavLink></li>
                <li><NavLink href={"/add-facility"}>Add Facility</NavLink></li>
                <li><NavLink href={"/manage-my-facilities"}>Manage My Facilities</NavLink></li>
              </>
            )}
          </ul>
        </div>

        {/* Navbar End: Auth */}
        <div className="navbar-end">
          {user ? (
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar border border-white/20">
                <div className="w-9 rounded-full overflow-hidden">
                  {user?.image ? (
                    <Image referrerPolicy="no-referrer" alt="User" width={36} height={36} src={user.image} />
                  ) : (
                    <div className="w-full h-full bg-emerald-600 flex items-center justify-center font-bold text-white">
                      {user?.name?.charAt(0).toUpperCase()}
                    </div>
                  )}
                </div>
              </div>
              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 w-40 p-2 shadow-2xl bg-neutral-900 rounded-box text-white z-[100]">
                <li><NavLink href={"/my-bookings"}>My Bookings</NavLink></li>
                <li><NavLink href={"/add-facility"}>Add Facility</NavLink></li>
                <li><NavLink href={"/manage-my-facilities"}>Manage My Facilities</NavLink></li>
                <li><button onClick={handleSignOut} className="text-red-400 font-semibold">Signout</button></li>
              </ul>
            </div>
          ) : (
            <Link href={"/register"}>
              <button className="px-5 py-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-full transition-all duration-300 text-sm shadow-lg shadow-emerald-600/20">
                Sign Up
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
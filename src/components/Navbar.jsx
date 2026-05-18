'use client'
import Image from 'next/image';
import React from 'react';
import NavLink from './NavLink';
import Link from 'next/link';
import { authClient } from '@/lib/auth-client';
import { Avatar, Button } from '@heroui/react';
import { useRouter } from 'next/navigation';

const Navbar = () => {
  const router = useRouter();
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  if (isPending) {
    return <p>Loading...</p>;
    // toast('Ops!')
  }
  console.log("user from nav", user);

  const handleSignOut = async () => {
    await authClient.signOut();
    router.push('/')
  }

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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-100 mt-3 w-52 p-2 shadow">

              {
                user ?
                  <>
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
                  </>
                  :
                  <>
                    <li>
                      <NavLink href={"/"}>Home</NavLink>
                    </li>
                    <li>
                      <NavLink href={"/all-facilities"}>All Facilities</NavLink>
                    </li>
                  </>
              }

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
            {
              user ?
                <>
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
                </>
                :
                <>
                  <li>
                    <NavLink href={"/"}>Home</NavLink>
                  </li>
                  <li>
                    <NavLink href={"/all-facilities"}>All Facilities</NavLink>
                  </li>
                </>
            }

          </ul>
        </div>
        <div className="navbar-end">
          {/* Register  */}

          {
            user ?
              <>
                <div className="dropdown dropdown-end">
                  <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full overflow-hidden">
                      {
                        user?.image ? (
                          <Image
                            referrerPolicy="no-referrer"
                            alt={user?.name || "User"}
                            width={40}
                            height={40}
                            className="w-full h-full object-cover"
                            src={user.image}
                          />
                        ) : (
                          <div className="w-full h-full bg-emerald-600 text-white flex items-center justify-center font-bold">
                            {user?.name?.charAt(0).toUpperCase()}
                          </div>
                        )
                      }
                    </div>
                  </div>

                  <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[100] mt-3 w-52 p-2 shadow font-semibold"
                  >
                    <li>
                      <a className="justify-between">
                        Profile
                      </a>
                    </li>

                    <li>
                      <NavLink href={"/my-bookings"}>My Bookings</NavLink>
                    </li>

                    <li>
                      <NavLink href={"/add-facility"}>Add Facility</NavLink>
                    </li>

                    <li>
                      <NavLink href={"/manage-my-facilities"}>
                        Manage My Facilities
                      </NavLink>
                    </li>

                    <li>
                      <Button
                        size="sm"
                        onClick={handleSignOut}
                        className="rounded-none text-red-500"
                        variant="danger"
                      >
                        Signout
                      </Button>
                    </li>
                  </ul>
                </div>
              </>
              :
              <>
                <Link href={"/register"}>
                  <button
                    className="px-8 py-4 bg-gradient-to-r from-emerald-600 to-emerald-400 hover:from-emerald-800 hover:to-emerald-500 text-neutral-950 font-bold rounded-xl shadow-lg shadow-emerald-500/20 transform hover:-translate-y-0.5 transition-all duration-200 focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 "
                  >
                    Sign Up
                  </button>
                </Link>
              </>
          }

        </div>
      </div>
    </div>
  );
};

export default Navbar;
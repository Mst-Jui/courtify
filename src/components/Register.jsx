'use client'
import { authClient } from '@/lib/auth-client';
import { Button, Card } from '@heroui/react';
import Link from 'next/link';
import { useRouter } from "next/navigation";
import React from 'react';
import {
  FaUser,
  FaEnvelope,
  FaImage,
  FaLock,
  FaGoogle,
  FaFutbol
} from 'react-icons/fa6';

const Register = () => {
  const router = useRouter();
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget)
    const user = Object.fromEntries(formData.entries())

    console.log("USER", user);
    
    const { data, error } = await authClient.signUp.email({
      email: user.email,
      password: user.password,
      name: user.name,
      image: user?.image
    })
    if (data) {
      router.push('/')
      // redirect('/')
    }
    if (error) {
      alert('Error')
    }

  }
  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-md w-full space-y-8 bg-slate-900 p-8 rounded-2xl shadow-xl border border-slate-800">

        {/* Logo & Header */}
        <div className="text-center">
          <div className="flex justify-center items-center gap-2 text-emerald-500 text-3xl font-bold mb-2">
            <FaFutbol className="animate-spin" style={{ animationDuration: '3s' }} />
            <span>Courtify</span>
          </div>

          <h2 className="text-2xl font-bold text-slate-100 tracking-tight">
            Create your account
          </h2>

          <p className="mt-2 text-sm text-slate-400">
            Join us to book your favorite sports facilities
          </p>
        </div>

        {/* Form */}
        <Card className="bg-transparent border-0 shadow-none">
          <form
            onSubmit={onSubmit}
            className="mt-8 space-y-5">

            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-1">
                Your Name
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-500">
                  <FaUser size={16} />
                </div>
                <input
                  name="name"
                  required
                  type="text"
                  placeholder="Enter your name"
                  className="w-full pl-10 pr-4 py-2.5 bg-slate-800/50 border border-slate-700 rounded-xl text-slate-100 placeholder-slate-500 focus:outline-none focus:border-emerald-500 focus:bg-slate-800 transition-all text-sm"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-1">
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-500">
                  <FaEnvelope size={16} />
                </div>
                <input
                  name="email"
                  required
                  type="email"
                  placeholder="Enter your email"
                  className="w-full pl-10 pr-4 py-2.5 bg-slate-800/50 border border-slate-700 rounded-xl text-slate-100 placeholder-slate-500 focus:outline-none focus:border-emerald-500 focus:bg-slate-800 transition-all text-sm"
                />
              </div>
            </div>

            {/* Photo */}
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-1">
                Photo URL
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-500">
                  <FaImage size={16} />
                </div>
                <input
                  name="image"
                  type="url"
                  placeholder="Image URL"
                  className="w-full pl-10 pr-4 py-2.5 bg-slate-800/50 border border-slate-700 rounded-xl text-slate-100 placeholder-slate-500 focus:outline-none focus:border-emerald-500 focus:bg-slate-800 transition-all text-sm"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-1">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-500">
                  <FaLock size={16} />
                </div>
                <input
                  name="password"
                  required
                  type="password"
                  placeholder="••••••••"
                  minLength={6}
                  pattern="(?=.*[a-z])(?=.*[A-Z]).{6,}"
                  title="Must be at least 6 characters, include 1 uppercase and 1 lowercase letter"
                  className="w-full pl-10 pr-4 py-2.5 bg-slate-800/50 border border-slate-700 rounded-xl text-slate-100 placeholder-slate-500 focus:outline-none focus:border-emerald-500 focus:bg-slate-800 transition-all text-sm"
                />
              </div>
            </div>

            {/* Button */}
            <Button
              type="submit"
              className="w-full py-3 px-4 bg-emerald-600 hover:bg-emerald-500 text-white font-medium rounded-xl transition-colors shadow-lg shadow-emerald-900/20"
            >
              Sign Up
            </Button>

          </form>
        </Card>

        {/* Divider */}
        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-slate-800"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-slate-900 text-slate-500">Or continue with</span>
          </div>
        </div>

        {/* Google */}
        <button
          type="button"
          className="w-full py-2.5 px-4 border border-slate-700 hover:bg-slate-800 text-slate-300 font-medium rounded-xl flex items-center justify-center gap-2 transition-colors"
        >
          <FaGoogle className="text-red-400" />
          Sign up with Google
        </button>

        {/* Login */}
        <p className="text-center text-sm text-slate-400 mt-6">
          Already have an account?{' '}
          <Link href="/signin" className="font-medium text-emerald-400 hover:text-emerald-300 transition-colors">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
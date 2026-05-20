import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-950 p-6">
      {/* Glassmorphism Card */}
      <div className="relative w-full max-w-lg p-10 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl text-center">
        
        {/* Decorative Background Glow - Using your Green theme */}
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#00A86B]/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#00A86B]/20 rounded-full blur-3xl"></div>
        
        {/* 404 Text */}
        <h1 className="text-9xl font-extrabold text-[#00A86B]">
          404
        </h1>
        
        <h2 className="mt-4 text-3xl font-bold text-white tracking-tight">
          Page Not Found
        </h2>
        
        <p className="mt-4 text-gray-400 mb-8 max-w-sm mx-auto">
          Oops! We seem to be off-pitch. The page you are looking for is currently out of bounds.
        </p>

        {/* Button with your brand color */}
        <Link
          href="/"
          className="inline-block px-8 py-3 text-sm font-semibold text-white transition-all duration-300 bg-[#00A86B] rounded-full hover:bg-[#008f5a] hover:shadow-[0_0_20px_rgba(0,168,107,0.5)] active:scale-95"
        >
          BACK HOME
        </Link>
      </div>
    </div>
  );
}
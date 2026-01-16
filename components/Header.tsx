
import React from 'react';
import Link from 'next/link';
import { Shield, Menu } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-950/95 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
        <div className="flex items-center justify-between gap-4 sm:gap-6">
          {/* Left: Logo + Title & Subtitle */}
          <Link href="/" className="flex items-center gap-3 sm:gap-4 lg:gap-6 flex-1 min-w-0 hover:opacity-80 transition-opacity">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-teal-500 rounded-lg flex items-center justify-center text-white flex-shrink-0">
              <Shield size={18} className="sm:w-5 sm:h-5" />
            </div>
            <div className="flex flex-col min-w-0">
              <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-heading font-bold tracking-tight text-white leading-tight">
                Precision Skin <span className="text-teal-500">Diagnostics.</span>
              </h1>
              <p className="text-[10px] sm:text-xs md:text-sm text-slate-400 leading-tight font-light hidden sm:block truncate">
                Clinical-grade AI diagnostics powered by 3D volumetric scanning
              </p>
            </div>
          </Link>

          {/* Right: Navigation + CTA */}
          <div className="flex items-center gap-3 sm:gap-4 lg:gap-6 flex-shrink-0">
            <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
              <Link href="/" className="text-sm font-medium text-slate-400 hover:text-teal-400 transition-colors">Home</Link>
              <Link href="/about" className="text-sm font-medium text-slate-400 hover:text-teal-400 transition-colors">About</Link>
              <Link href="/contact" className="text-sm font-medium text-slate-400 hover:text-teal-400 transition-colors">Contact us</Link>
            </nav>

            <button className="hidden sm:block px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold bg-teal-500 text-white hover:bg-teal-600 transition-all shadow-lg shadow-teal-500/20">
              Request Demo
            </button>
            <button className="p-2 lg:hidden text-slate-400 hover:text-teal-400 transition-colors">
              <Menu size={20} className="sm:w-6 sm:h-6" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

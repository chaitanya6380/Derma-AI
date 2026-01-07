
import React from 'react';
import { Shield, LayoutGrid, Menu } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-md border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 sm:w-8 sm:h-8 bg-teal-600 rounded-lg flex items-center justify-center text-white">
            <Shield size={18} className="sm:w-5 sm:h-5" />
          </div>
          <span className="text-lg sm:text-xl font-bold tracking-tighter text-slate-900">
            DERM<span className="text-teal-600">AI</span>
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          <a href="#" className="text-sm font-medium text-slate-600 hover:text-teal-600 transition-colors">Technology</a>
          <a href="#" className="text-sm font-medium text-slate-600 hover:text-teal-600 transition-colors">Clinical Studies</a>
          <a href="#" className="text-sm font-medium text-slate-600 hover:text-teal-600 transition-colors">Enterprise</a>
          <a href="#" className="text-sm font-medium text-slate-600 hover:text-teal-600 transition-colors">Company</a>
        </nav>

        <div className="flex items-center gap-2 sm:gap-4">
          <button className="hidden sm:block px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold bg-slate-900 text-white hover:bg-teal-700 transition-all shadow-lg shadow-slate-900/10">
            Request Demo
          </button>
          <button className="p-2 md:hidden text-slate-600 hover:text-teal-600 transition-colors">
            <Menu size={20} className="sm:w-6 sm:h-6" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

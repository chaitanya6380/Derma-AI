'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl border-b border-slate-200">
        <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
          <div className="flex items-center justify-between gap-4 sm:gap-6">
            {/* Left: Logo + Title & Subtitle */}
            <Link href="/" className="flex items-center gap-3 sm:gap-4 lg:gap-6 flex-1 min-w-0 hover:opacity-80 transition-opacity">
              <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-lg flex items-center justify-center flex-shrink-0 overflow-hidden">
                <img
                  src="https://storage.googleapis.com/new_client_files/Derm%20-%20AI/xscade-creative-studio%20(13).jpeg"
                  alt="Skinapse Labs Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col min-w-0">
                <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-heading font-bold tracking-tight text-slate-900 leading-tight">
                  Skinapse <span className="text-teal-600">Labs</span>
                </h1>
                <p className="text-[10px] sm:text-xs md:text-sm text-slate-500 leading-tight font-light hidden sm:block truncate">
                  Holistic Skin Diagnosis Powered By Multilayered Image Analysis and Patient Context
                </p>
              </div>
            </Link>

            {/* Right: Navigation + CTA */}
            <div className="flex items-center gap-3 sm:gap-4 lg:gap-6 flex-shrink-0">
              <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
                <Link href="/" className="text-sm font-medium text-slate-500 hover:text-teal-600 transition-colors">Home</Link>
                <Link href="/solution" className="text-sm font-medium text-slate-500 hover:text-teal-600 transition-colors">Solution</Link>
              </nav>

              <Link 
                href="/contact" 
                className="hidden sm:block px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold bg-teal-600 text-white hover:bg-teal-700 transition-all shadow-lg shadow-teal-500/20"
              >
                Contact Us
              </Link>
              <button 
                onClick={toggleMenu}
                className="p-2 lg:hidden text-slate-500 hover:text-teal-600 transition-colors"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? (
                  <X size={24} className="sm:w-6 sm:h-6" />
                ) : (
                  <Menu size={24} className="sm:w-6 sm:h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={closeMenu}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
            />
            
            {/* Menu Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed top-0 right-0 bottom-0 w-80 max-w-[85vw] bg-white shadow-2xl z-50 lg:hidden overflow-y-auto"
            >
              <div className="flex flex-col h-full">
                {/* Menu Header */}
                <div className="flex items-center justify-between p-6 border-b border-slate-200">
                  <span className="text-lg font-heading font-bold text-slate-900">Menu</span>
                  <button
                    onClick={closeMenu}
                    className="p-2 text-slate-500 hover:text-teal-600 transition-colors"
                    aria-label="Close menu"
                  >
                    <X size={24} />
                  </button>
                </div>

                {/* Menu Items */}
                <nav className="flex-1 p-6 space-y-4">
                  <Link
                    href="/"
                    onClick={closeMenu}
                    className="block px-4 py-3 text-base font-medium text-slate-700 hover:text-teal-600 hover:bg-teal-50 rounded-lg transition-colors"
                  >
                    Home
                  </Link>
                  <Link
                    href="/solution"
                    onClick={closeMenu}
                    className="block px-4 py-3 text-base font-medium text-slate-700 hover:text-teal-600 hover:bg-teal-50 rounded-lg transition-colors"
                  >
                    Solution
                  </Link>
                  <Link
                    href="/contact"
                    onClick={closeMenu}
                    className="block px-4 py-3 text-base font-semibold text-white bg-teal-600 hover:bg-teal-700 rounded-lg transition-colors text-center mt-6"
                  >
                    Contact Us
                  </Link>
                </nav>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;

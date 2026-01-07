
import React from 'react';
import { Shield, Twitter, Linkedin, Github } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white pt-12 sm:pt-16 md:pt-20 lg:pt-24 pb-8 sm:pb-10 md:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-12 mb-12 sm:mb-16 md:mb-20">
          <div className="col-span-1 sm:col-span-2 lg:col-span-2">
            <div className="flex items-center gap-2 mb-6 sm:mb-8">
              <div className="w-7 h-7 sm:w-8 sm:h-8 bg-teal-500 rounded-lg flex items-center justify-center text-white">
                <Shield size={18} className="sm:w-5 sm:h-5" />
              </div>
              <span className="text-xl sm:text-2xl font-bold tracking-tighter">
                DERM<span className="text-teal-500">AI</span>
              </span>
            </div>
            <p className="text-slate-400 max-w-sm mb-6 sm:mb-8 text-sm sm:text-base md:text-lg leading-relaxed">
              Empowering clinicians and individuals with the world's most advanced AI-driven dermatological diagnostic platform.
            </p>
            <div className="flex gap-3 sm:gap-4">
              <a href="#" className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-slate-800 flex items-center justify-center hover:bg-teal-500 hover:border-teal-500 transition-all text-slate-400 hover:text-white">
                <Twitter size={16} className="sm:w-[18px] sm:h-[18px]" />
              </a>
              <a href="#" className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-slate-800 flex items-center justify-center hover:bg-teal-500 hover:border-teal-500 transition-all text-slate-400 hover:text-white">
                <Linkedin size={16} className="sm:w-[18px] sm:h-[18px]" />
              </a>
              <a href="#" className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-slate-800 flex items-center justify-center hover:bg-teal-500 hover:border-teal-500 transition-all text-slate-400 hover:text-white">
                <Github size={16} className="sm:w-[18px] sm:h-[18px]" />
              </a>
            </div>
          </div>

          <div>
            <h5 className="font-bold mb-4 sm:mb-6 text-teal-500 uppercase text-xs tracking-widest">Platform</h5>
            <ul className="space-y-3 sm:space-y-4">
              <li><a href="#" className="text-sm sm:text-base text-slate-400 hover:text-white transition-colors">Core Engine</a></li>
              <li><a href="#" className="text-sm sm:text-base text-slate-400 hover:text-white transition-colors">Spectral Analysis</a></li>
              <li><a href="#" className="text-sm sm:text-base text-slate-400 hover:text-white transition-colors">Enterprise API</a></li>
              <li><a href="#" className="text-sm sm:text-base text-slate-400 hover:text-white transition-colors">Mobile SDK</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold mb-4 sm:mb-6 text-teal-500 uppercase text-xs tracking-widest">Resources</h5>
            <ul className="space-y-3 sm:space-y-4">
              <li><a href="#" className="text-sm sm:text-base text-slate-400 hover:text-white transition-colors">Documentation</a></li>
              <li><a href="#" className="text-sm sm:text-base text-slate-400 hover:text-white transition-colors">Whitepapers</a></li>
              <li><a href="#" className="text-sm sm:text-base text-slate-400 hover:text-white transition-colors">Case Studies</a></li>
              <li><a href="#" className="text-sm sm:text-base text-slate-400 hover:text-white transition-colors">Security</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-6 sm:pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 sm:gap-6">
          <p className="text-slate-500 text-xs sm:text-sm text-center md:text-left">
            © 2024 DermAI Technologies Inc. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center md:justify-end gap-4 sm:gap-6 md:gap-8">
            <a href="#" className="text-xs sm:text-sm text-slate-500 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-xs sm:text-sm text-slate-500 hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="text-xs sm:text-sm text-slate-500 hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

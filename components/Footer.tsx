
import React from 'react';
import { Shield, Twitter, Linkedin, Github } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-8">
              <div className="w-8 h-8 bg-teal-500 rounded-lg flex items-center justify-center text-white">
                <Shield size={20} />
              </div>
              <span className="text-2xl font-bold tracking-tighter">
                DERM<span className="text-teal-500">AI</span>
              </span>
            </div>
            <p className="text-slate-400 max-w-sm mb-8 text-lg leading-relaxed">
              Empowering clinicians and individuals with the world's most advanced AI-driven dermatological diagnostic platform.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-slate-800 flex items-center justify-center hover:bg-teal-500 hover:border-teal-500 transition-all text-slate-400 hover:text-white">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-slate-800 flex items-center justify-center hover:bg-teal-500 hover:border-teal-500 transition-all text-slate-400 hover:text-white">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-slate-800 flex items-center justify-center hover:bg-teal-500 hover:border-teal-500 transition-all text-slate-400 hover:text-white">
                <Github size={18} />
              </a>
            </div>
          </div>

          <div>
            <h5 className="font-bold mb-6 text-teal-500 uppercase text-xs tracking-widest">Platform</h5>
            <ul className="space-y-4">
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Core Engine</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Spectral Analysis</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Enterprise API</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Mobile SDK</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold mb-6 text-teal-500 uppercase text-xs tracking-widest">Resources</h5>
            <ul className="space-y-4">
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Documentation</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Whitepapers</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Case Studies</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Security</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-sm">
            © 2024 DermAI Technologies Inc. All rights reserved.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-slate-500 hover:text-white text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-slate-500 hover:text-white text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-slate-500 hover:text-white text-sm transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

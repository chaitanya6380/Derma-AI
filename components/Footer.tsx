'use client';

import React from 'react';
import Link from 'next/link';
import { Shield, Twitter, Linkedin, Github, Mail, MapPin, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '/about' },
    { name: 'Solution', href: '/solution' },
    { name: 'Contact Us', href: '/contact' },
  ];
/*
  const platformLinks = [
    { name: 'Technology', href: '#' },
    { name: 'Clinical Studies', href: '#' },
    { name: 'Enterprise', href: '#' },
    { name: 'API Documentation', href: '#' },
  ];

  const resourcesLinks = [
    { name: 'Whitepapers', href: '#' },
    { name: 'Case Studies', href: '#' },
    { name: 'Security', href: '#' },
    { name: 'Support', href: '#' },
  ];
*/
  const socialLinks = [
    //{ icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: 'https://www.linkedin.com/company/skinapse-labs/', label: 'LinkedIn' },
    //{ icon: Github, href: '#', label: 'GitHub' },
  ];

  return (
    <footer className="relative bg-white border-t border-slate-200 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 md:pt-24 lg:pt-32 pb-8 sm:pb-10 md:pb-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-12 mb-12 sm:mb-16 md:mb-20">
          {/* Brand Column */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Link href="/" className="flex items-center gap-3 mb-6 sm:mb-8 group">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform shadow-lg shadow-teal-500/20">
                  <Shield size={20} className="sm:w-6 sm:h-6" />
                </div>
                <span className="text-2xl sm:text-3xl font-heading font-bold tracking-tighter text-slate-900">
                  Skinapse<span className="text-teal-500">Labs</span>
                </span>
              </Link>
              
              <p className="text-slate-600 mb-6 sm:mb-8 text-sm sm:text-base leading-relaxed max-w-sm">
                Holistic Skin Diagnosis Powered By Multilayered Image Analysis and Patient Context.
              </p>

              {/* Contact Info */}
              <div className="space-y-3 mb-6 sm:mb-8">
                <a href="mailto:contact@dermai.com" className="flex items-center gap-3 text-sm text-slate-600 hover:text-teal-600 transition-colors group">
                  <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  <span>info@skinapse.ai</span>
                </a>
                <a href="tel:+15551234567" className="flex items-center gap-3 text-sm text-slate-600 hover:text-teal-600 transition-colors group">
                  <Phone className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  <span>+1 (713) 585-9624</span>
                </a>
                <div className="flex items-center gap-3 text-sm text-slate-600">
                  <MapPin className="w-4 h-4" />
                  <span>39 Hemenway St, Boston, MA</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-3">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <motion.a
                      key={index}
                      href={social.href}
                      aria-label={social.label}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-white border border-slate-200 flex items-center justify-center hover:border-teal-500/50 hover:bg-teal-50 transition-all group"
                    >
                      <div className="absolute inset-0 bg-teal-500/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                      <IconComponent className="relative w-5 h-5 text-slate-500 group-hover:text-teal-600 transition-colors" />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>
          </div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h5 className="font-heading font-bold mb-6 text-teal-600 uppercase text-xs tracking-[0.2em] mb-6">Quick Links</h5>
            <ul className="space-y-4">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-600 hover:text-teal-600 transition-colors inline-flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-500/0 group-hover:bg-teal-500 transition-all" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Platform */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h5 className="font-heading font-bold mb-6 text-teal-600 uppercase text-xs tracking-[0.2em] mb-6">Platform</h5>
            <ul className="space-y-4">
              {platformLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-600 hover:text-teal-600 transition-colors inline-flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-500/0 group-hover:bg-teal-500 transition-all" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Resources */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h5 className="font-heading font-bold mb-6 text-teal-600 uppercase text-xs tracking-[0.2em] mb-6">Resources</h5>
            <ul className="space-y-4">
              {resourcesLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-600 hover:text-teal-600 transition-colors inline-flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-500/0 group-hover:bg-teal-500 transition-all" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="pt-8 sm:pt-10 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4 sm:gap-6"
        >
          <p className="text-xs sm:text-sm text-slate-500 text-center md:text-left">
            © {currentYear} Skinapse Labs. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center md:justify-end gap-4 sm:gap-6 md:gap-8">
            <a href="#" className="text-xs sm:text-sm text-slate-500 hover:text-teal-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-xs sm:text-sm text-slate-500 hover:text-teal-400 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-xs sm:text-sm text-slate-500 hover:text-teal-400 transition-colors">
              Cookie Policy
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;

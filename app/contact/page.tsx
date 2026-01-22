'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageSquare, User, Building, Linkedin } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // You can add API call or form handling logic here
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      content: 'info@skinapse.ai',
      link: 'mailto:info@skinapse.ai'
    },
    {
      icon: Phone,
      title: 'Phone',
      content: '+1 (703) 585-9624',
      link: 'tel:+17035859624'
    },
    {
      icon: MapPin,
      title: 'Address',
      content: '39 Hemenway St, Boston, MA',
      link: '#'
    },
    {
      icon: Linkedin,
      title: 'LinkedIn',
      content: 'Connect with us on LinkedIn',
      link: 'https://www.linkedin.com/company/skinapse-labs/'
    }
  ];

  return (
    <div className="min-h-screen bg-white overflow-x-hidden selection:bg-teal-500 selection:text-white">
      <Header />

      <main className="pt-20 sm:pt-24">
        {/* Hero Section */}
        <section className="relative py-20 sm:py-24 md:py-32 lg:py-40 px-4 sm:px-6 overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white">
          {/* Background Effects */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
          </div>

          <div className="relative max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-slate-900 tracking-tight mb-6 sm:mb-8">
                Get in <span className="text-teal-600">Touch</span>
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-slate-600 leading-relaxed font-light max-w-3xl mx-auto">
                Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-12">
              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-1"
              >
                <div className="space-y-6 sm:space-y-8">
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-heading font-bold text-slate-900 mb-4 tracking-tight">
                      Contact <span className="text-teal-600">Information</span>
                    </h2>
                    <p className="text-slate-600 leading-relaxed">
                      Reach out to us through any of these channels. We're here to help.
                    </p>
                  </div>

                  <div className="space-y-6">
                    {contactInfo.map((info, index) => {
                      const IconComponent = info.icon;
                      return (
                        <motion.a
                          key={index}
                          href={info.link}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          className="group block p-6 bg-white rounded-2xl border border-slate-200 hover:border-teal-500/40 transition-all duration-500 hover:shadow-xl hover:shadow-teal-500/10"
                        >
                          <div className="flex items-start gap-4">
                            <div className="relative flex-shrink-0">
                              <div className="absolute inset-0 bg-teal-500/10 rounded-xl blur-lg group-hover:bg-teal-500/20 transition-all" />
                              <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-teal-500/20 to-cyan-500/10 border border-teal-500/40 flex items-center justify-center group-hover:scale-110 transition-transform">
                                <IconComponent className="w-6 h-6 text-teal-500" />
                              </div>
                            </div>
                            <div className="flex-1 min-w-0">
                              <h3 className="text-sm font-mono uppercase tracking-wider text-teal-600 mb-1">
                                {info.title}
                              </h3>
                              <p className="text-base text-slate-900 group-hover:text-teal-700 transition-colors">
                                {info.content}
                              </p>
                            </div>
                          </div>
                        </motion.a>
                      );
                    })}
                  </div>
                </div>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-2"
              >
                <div className="relative p-8 sm:p-10 lg:p-12 bg-white rounded-3xl border border-slate-200 shadow-xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 via-cyan-500/5 to-transparent rounded-3xl pointer-events-none" />
                  
                  <div className="relative z-10">
                    <h2 className="text-2xl sm:text-3xl font-heading font-bold text-slate-900 mb-6 tracking-tight">
                      Send us a <span className="text-teal-600">Message</span>
                    </h2>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {/* Name Field */}
                        <div className="relative group">
                          <label htmlFor="name" className="block text-sm font-medium text-slate-600 mb-2">
                            Name <span className="text-teal-600">*</span>
                          </label>
                          <div className="relative">
                            <div className="absolute inset-0 bg-teal-500/10 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity" />
                            <div className="relative flex items-center">
                              <User className="absolute left-4 w-5 h-5 text-slate-400" />
                              <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full pl-12 pr-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:border-teal-500/50 focus:ring-2 focus:ring-teal-500/20 transition-all"
                                placeholder="Your name"
                              />
                            </div>
                          </div>
                        </div>

                        {/* Email Field */}
                        <div className="relative group">
                          <label htmlFor="email" className="block text-sm font-medium text-slate-600 mb-2">
                            Email <span className="text-teal-600">*</span>
                          </label>
                          <div className="relative">
                            <div className="absolute inset-0 bg-teal-500/10 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity" />
                            <div className="relative flex items-center">
                              <Mail className="absolute left-4 w-5 h-5 text-slate-400" />
                              <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full pl-12 pr-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:border-teal-500/50 focus:ring-2 focus:ring-teal-500/20 transition-all"
                                placeholder="your.email@example.com"
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Company Field */}
                      <div className="relative group">
                        <label htmlFor="company" className="block text-sm font-medium text-slate-600 mb-2">
                          Company
                        </label>
                        <div className="relative">
                          <div className="absolute inset-0 bg-teal-500/10 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity" />
                          <div className="relative flex items-center">
                            <Building className="absolute left-4 w-5 h-5 text-slate-400" />
                            <input
                              type="text"
                              id="company"
                              name="company"
                              value={formData.company}
                              onChange={handleChange}
                              className="w-full pl-12 pr-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:border-teal-500/50 focus:ring-2 focus:ring-teal-500/20 transition-all"
                              placeholder="Your company (optional)"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Message Field */}
                      <div className="relative group">
                        <label htmlFor="message" className="block text-sm font-medium text-slate-600 mb-2">
                          Message <span className="text-teal-600">*</span>
                        </label>
                        <div className="relative">
                          <div className="absolute inset-0 bg-teal-500/10 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity" />
                          <div className="relative flex items-start">
                            <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-slate-400" />
                            <textarea
                              id="message"
                              name="message"
                              value={formData.message}
                              onChange={handleChange}
                              required
                              rows={6}
                              className="w-full pl-12 pr-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:border-teal-500/50 focus:ring-2 focus:ring-teal-500/20 transition-all resize-none"
                              placeholder="Tell us about your inquiry..."
                            />
                          </div>
                        </div>
                      </div>

                      {/* Submit Button */}
                      <motion.button
                        type="submit"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-semibold rounded-xl hover:from-teal-600 hover:to-cyan-600 transition-all shadow-lg shadow-teal-500/20 hover:shadow-xl hover:shadow-teal-500/30 flex items-center justify-center gap-2 group"
                      >
                        <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        Send Message
                      </motion.button>
                    </form>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

'use client';

import React, { useEffect } from 'react';
import Header from '@/components/Header';
import HeroScanner from '@/components/HeroScanner';
import Timeline from '@/components/Timeline';
import Features from '@/components/Features';
import Link from 'next/link';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

export default function Solution() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'auto';
    return () => {
      document.documentElement.style.scrollBehavior = 'smooth';
    };
  }, []);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden selection:bg-teal-500 selection:text-white">
      <Header />

      <main>
        {/* Hero Scanner Section (Main 3D Interaction) */}
        <HeroScanner />

        {/* Model Explanation Section */}
        <section className="relative py-20 sm:py-24 md:py-32 lg:py-40 px-4 sm:px-6 bg-gradient-to-b from-white via-slate-50/30 to-white overflow-hidden">
          {/* Background Effects */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/4 left-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
          </div>

          <div className="relative max-w-7xl mx-auto">
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16 sm:mb-20"
            >
              <h2 className="text-xs sm:text-sm font-mono uppercase tracking-[0.3em] text-teal-600 mb-4 sm:mb-6">
                Our Technology
              </h2>
              <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-slate-900 tracking-tight mb-6">
                Our <span className="text-teal-600">Model</span>
              </h3>
              <p className="text-lg sm:text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
                Combining CNN-based image analysis with algorithmic skin detection and personalized patient history to generate effective, compatible skincare routines.
              </p>
            </motion.div>

            {/* Main Content: Video First, Then Features */}
            <div className="mb-16">
              {/* Video Section - Full Width */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="max-w-5xl mx-auto mb-16"
              >
                <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border-2 border-slate-700 shadow-2xl group">
                  {/* Video Container */}
                  <div className="relative aspect-video bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
                    {/* Placeholder for video */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <button className="group/play relative">
                        <div className="absolute inset-0 rounded-full bg-teal-500/20 blur-2xl group-hover/play:bg-teal-500/30 transition-all duration-300" />
                        <div className="relative w-24 h-24 rounded-full bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center transition-all group-hover/play:scale-110 shadow-lg shadow-teal-500/50">
                          <svg
                            className="w-12 h-12 text-white ml-1"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                      </button>
                    </div>
                    
                    {/* Optional: Add actual video embed here */}
                    {/* <iframe
                      className="absolute inset-0 w-full h-full"
                      src="YOUR_VIDEO_URL"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    /> */}
                  </div>
                  
                  {/* Video Label */}
                  <div className="p-6 bg-slate-800/80 backdrop-blur-sm border-t border-slate-700">
                    <p className="text-base font-semibold text-white mb-1">Watch Demo</p>
                    <p className="text-sm text-slate-400">See our model analyze skin and generate personalized routines</p>
                  </div>
                </div>
              </motion.div>

              {/* Three Column Feature Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Feature 1 */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="relative p-8 bg-white rounded-2xl border border-slate-200 shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-teal-500/5 via-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative z-10">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h4 className="text-xl font-heading font-bold text-slate-900 mb-3">Image Analysis</h4>
                    <p className="text-slate-600 leading-relaxed">
                      We analyze user photos to quantify visible features like acne type and severity, redness, texture, scarring patterns, and oiliness.
                    </p>
                  </div>
                </motion.div>

                {/* Feature 2 */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="relative p-8 bg-white rounded-2xl border border-slate-200 shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-teal-500/5 via-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative z-10">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <h4 className="text-xl font-heading font-bold text-slate-900 mb-3">Patient Context</h4>
                    <p className="text-slate-600 leading-relaxed">
                      We connect visual signals with patient intake context such as sensitivity, medications, treatment history, lifestyle triggers, and existing products.
                    </p>
                  </div>
                </motion.div>

                {/* Feature 3 */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="relative p-8 bg-white rounded-2xl border border-slate-200 shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-teal-500/5 via-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative z-10">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h4 className="text-xl font-heading font-bold text-slate-900 mb-3">Smart Routines</h4>
                    <p className="text-slate-600 leading-relaxed">
                      The system builds routines where products work together, avoiding conflicts and irritation, with clear explanations for every recommendation.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Detailed Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto"
            >
              <div className="relative p-8 sm:p-12 bg-white rounded-3xl border border-slate-200 shadow-lg">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-teal-500/5 via-cyan-500/5 to-transparent" />
                <div className="relative z-10 space-y-6">
                  <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                    Our model at Skinapse Labs combines CNN based image analysis with algorithmic skin characteristic detection and a personalized patient history intake to generate routines that are both effective and compatible.
                  </p>
                  <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                    From there, the system builds a routine where products work well together, avoiding conflicting activities and unnecessary irritation, while also ensuring the plan fits the user's medication context and skin characteristics. Every recommendation includes a clear explanation of why it was chosen and how to use it safely within a cohesive regimen.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Solution page footer CTA */}
        <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-slate-50 border-t border-slate-200">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-heading font-bold text-slate-900 mb-4">
              Ready to talk about implementation?
            </h3>
            <p className="text-sm sm:text-base text-slate-600 mb-6 max-w-2xl mx-auto">
              Share your current workflow and we&apos;ll show you how Skinapse Labs can fit into your clinic or platform.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-teal-600 text-white text-sm sm:text-base font-semibold shadow-lg shadow-teal-500/30 hover:bg-teal-700 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}


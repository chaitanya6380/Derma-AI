'use client';

import React, { useEffect } from 'react';
import Header from '@/components/Header';
import HeroScanner from '@/components/HeroScanner';
import Timeline from '@/components/Timeline';
import Features from '@/components/Features';
import Link from 'next/link';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Layers, Activity, Brain } from 'lucide-react';

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
        <section className="py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 bg-white">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left: Copy */}
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4 tracking-tight">
                The DermAI <span className="text-teal-600">Model</span>
              </h2>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-4">
                Our volumetric head model interprets skin data across multiple layers – from surface-level sebum and
                melanin to deeper inflammatory markers and structural changes.
              </p>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                Rather than scoring a single lesion, DermAI builds a holistic map of the entire face, so clinicians can
                understand how acne, inflammation, and scarring interact across regions over time.
              </p>
            </div>

            {/* Right: Three-step diagram */}
            <div className="space-y-6">
              {[
                {
                  icon: Layers,
                  label: 'Layered Capture',
                  desc: 'Multi-channel imaging captures texture, color, and depth to separate epidermal from dermal signals.',
                },
                {
                  icon: Brain,
                  label: 'Neural Interpretation',
                  desc: 'A dermatology-tuned model quantifies sebum, melanin, inflammation, and scarring across facial zones.',
                },
                {
                  icon: Activity,
                  label: 'Actionable Output',
                  desc: 'The output is translated into clear risk signals and treatment flags that plug directly into your workflow.',
                },
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="relative flex gap-4 p-5 sm:p-6 bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:border-teal-500/40 transition-all"
                  >
                    <div className="relative flex-shrink-0">
                      <div className="absolute inset-0 rounded-2xl bg-teal-500/15 blur-lg" />
                      <div className="relative w-11 h-11 rounded-2xl bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center text-white">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>
                    <div>
                      <p className="text-xs font-mono uppercase tracking-[0.2em] text-teal-600 mb-1">
                        Step {index + 1}
                      </p>
                      <h3 className="text-sm sm:text-base font-heading font-semibold text-slate-900 mb-1.5">
                        {item.label}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Solution page footer CTA */}
        <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-slate-50 border-t border-slate-200">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-heading font-bold text-slate-900 mb-4">
              Ready to talk about implementation?
            </h3>
            <p className="text-sm sm:text-base text-slate-600 mb-6 max-w-2xl mx-auto">
              Share your current workflow and we&apos;ll show you how DermAI can fit into your clinic or platform.
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


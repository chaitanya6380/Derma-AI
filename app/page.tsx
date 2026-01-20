'use client';

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Features from '@/components/Features';
import Timeline from '@/components/Timeline';
import { motion } from 'framer-motion';
import { Target, Users, Award, Heart } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  const values = [
    {
      icon: Target,
      title: 'Precision',
      description: 'Delivering clinical-grade accuracy through advanced AI diagnostics.',
    },
    {
      icon: Users,
      title: 'Accessibility',
      description: 'Making advanced healthcare technology available to everyone.',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Maintaining the highest standards in medical AI innovation.',
    },
    {
      icon: Heart,
      title: 'Care',
      description: 'Putting patient well-being at the center of everything we do.',
    },
  ];

  const teamMembers = [
    { name: 'Dr. Maya Chen', role: 'Chief Medical Officer' },
    { name: 'Alex Rivera', role: 'Head of AI Research' },
    { name: 'Jordan Patel', role: 'VP of Engineering' },
    { name: 'Sara Nguyen', role: 'Clinical Partnerships Lead' },
  ];

  return (
    <div className="min-h-screen bg-white overflow-x-hidden selection:bg-teal-500 selection:text-white">
      <Header />

      <main className="pt-20 sm:pt-24">
        {/* Hero Section */}
        <section className="relative py-16 sm:py-20 md:py-28 lg:py-32 px-4 sm:px-6 overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-24 left-1/3 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
          </div>

          <div className="relative max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-slate-900 tracking-tight mb-6 sm:mb-8">
                About <span className="text-teal-600">DermAI</span>
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-slate-600 leading-relaxed font-light max-w-3xl mx-auto">
                Revolutionizing dermatological diagnostics through cutting-edge AI technology and clinical expertise.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-slate-900 mb-6 tracking-tight">
                  Our <span className="text-teal-600">Mission</span>
                </h2>
                <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-6">
                  At DermAI, we're dedicated to transforming the landscape of dermatological care by making advanced
                  diagnostic capabilities accessible to healthcare providers and patients worldwide.
                </p>
                <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                  Our mission is to bridge the gap between cutting-edge AI technology and clinical practice, ensuring
                  that every patient receives accurate, timely, and accessible skin health assessments.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <div className="relative p-8 sm:p-12 bg-white rounded-3xl border border-slate-200 shadow-xl">
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-teal-500/5 via-cyan-500/5 to-transparent" />
                  <div className="relative z-10">
                    <div className="grid grid-cols-2 gap-6">
                      <div className="text-center">
                        <div className="text-4xl sm:text-5xl font-heading font-bold text-teal-600 mb-2">99.2%</div>
                        <div className="text-sm sm:text-base text-slate-500">Accuracy Rate</div>
                      </div>
                      <div className="text-center">
                        <div className="text-4xl sm:text-5xl font-heading font-bold text-teal-600 mb-2">50M+</div>
                        <div className="text-sm sm:text-base text-slate-500">Samples Trained</div>
                      </div>
                      <div className="text-center">
                        <div className="text-4xl sm:text-5xl font-heading font-bold text-teal-600 mb-2">150+</div>
                        <div className="text-sm sm:text-base text-slate-500">Medical Centers</div>
                      </div>
                      <div className="text-center">
                        <div className="text-4xl sm:text-5xl font-heading font-bold text-teal-600 mb-2">12</div>
                        <div className="text-sm sm:text-base text-slate-500">Countries</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Advanced Diagnostic Technology (moved Features) */}
        <Features />

        {/* Our Team Section (replaces Our Story) */}
        <section className="py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 bg-slate-50">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12 sm:mb-16"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-slate-900 tracking-tight mb-4">
                Our <span className="text-teal-600">Team</span>
              </h2>
              <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
                A cross-disciplinary group of clinicians, researchers, and engineers dedicated to elevating skin health
                worldwide.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
                {teamMembers.map((member, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col items-center text-center p-6 rounded-2xl bg-white border border-slate-200 shadow-sm"
                  >
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-teal-500 to-cyan-500 mb-4 flex items-center justify-center text-white font-heading font-bold text-xl">
                      {member.name.charAt(0)}
                    </div>
                    <h3 className="text-base sm:text-lg font-heading font-semibold text-slate-900 mb-1">
                      {member.name}
                    </h3>
                    <p className="text-sm text-slate-600">{member.role}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Our Journey Timeline */}
        <Timeline />

        {/* Solution CTA at bottom */}
        <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4">
                Explore the <span className="text-teal-600">Solution</span>
              </h2>
              <p className="text-base sm:text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
                Dive into the full DermAI platform experience and see how our technology integrates into real clinical
                workflows.
              </p>
              <Link
                href="/solution"
                className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-teal-600 text-white text-sm sm:text-base font-semibold shadow-lg shadow-teal-500/30 hover:bg-teal-700 transition-colors"
              >
                View Solution
              </Link>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}


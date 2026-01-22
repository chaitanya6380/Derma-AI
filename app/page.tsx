'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Features from '@/components/Features';
import Timeline from '@/components/Timeline';
import { motion } from 'framer-motion';
import { Target, Users, Award, Heart } from 'lucide-react';
import Link from 'next/link';

// Team Member Image Component with Fallback
const TeamMemberImage = ({ member }: { member: { name: string; image: string } }) => {
  const [imageError, setImageError] = useState(false);

  if (imageError) {
    return (
      <div className="w-full h-full flex items-center justify-center text-white font-heading font-bold text-3xl sm:text-4xl md:text-5xl">
        {member.name.charAt(0)}
      </div>
    );
  }

  return (
    <img
      src={member.image}
      alt={member.name}
      className="w-full h-full object-cover"
      onError={() => setImageError(true)}
    />
  );
};

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
    { name: 'John Nguyen', role: 'Chief Executive Officer', image: '/team/john-nguyen.jpg' },
    { name: 'Sai Vishnu Chitra', role: 'Chief Operating Officer', image: '/team/sai-vishnu-chitra.jpg' },
    { name: 'Ishaan Buddharaju', role: 'Chief Technical Officer', image: '/team/ishaan-buddharaju.jpg' },
    { name: 'Michael Lamiman', role: 'Chief Engineer', image: '/team/michael-lamiman.jpg' },
    { name: 'Dr. Josephine Nguyen', role: 'Chief Medical Officer', image: '/team/josephine-nguyen.jpg' },
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
                  At Skinapse Labs, our mission is to help skincare businesses deliver acne care that feels genuinely personalized and easy to understand. We empower brands to show customers what their acne looks like, what may be driving it, and what steps to take to treat it safely using routines that work well together.
                </p>
                <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                  By pairing personalization with clear education, we build user trust and retention because customers understand why each product is recommended and how to use it confidently without needing a dermatologist for every decision.
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
                        <div className="text-4xl sm:text-5xl font-heading font-bold text-teal-600 mb-2">95%</div>
                        <div className="text-sm sm:text-base text-slate-500">Accuracy Rate</div>
                      </div>
                      <div className="text-center">
                        <div className="text-4xl sm:text-5xl font-heading font-bold text-teal-600 mb-2">10,000+</div>
                        <div className="text-sm sm:text-base text-slate-500">Samples Trained</div>
                      </div>
                      <div className="text-center">
                        <div className="text-4xl sm:text-5xl font-heading font-bold text-teal-600 mb-2">10</div>
                        <div className="text-sm sm:text-base text-slate-500">Practical Trials</div>
                      </div>
                      <div className="text-center">
                        <div className="text-4xl sm:text-5xl font-heading font-bold text-teal-600 mb-2">2</div>
                        <div className="text-sm sm:text-base text-slate-500">Operating Countries</div>
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
        <section className="relative py-20 sm:py-24 md:py-32 lg:py-40 px-4 sm:px-6 bg-white overflow-hidden">
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
              className="text-center mb-16 sm:mb-20 md:mb-24"
            >
              <h2 className="text-xs sm:text-sm font-mono uppercase tracking-[0.3em] text-teal-600 mb-4 sm:mb-6">
                Our Team
              </h2>
              <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-slate-900 tracking-tight mb-6">
                Meet the <span className="text-teal-600">Leadership</span>
              </h3>
              <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
                A cross-disciplinary group of clinicians, researchers, engineers and dedicated to elevating skin health
                worldwide.
              </p>
            </motion.div>

            {/* Team Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8">
              {teamMembers.map((member, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="group relative"
                >
                  {/* Card */}
                  <div className="relative h-full p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden">
                    {/* Gradient Overlay on Hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 via-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Border Glow Effect */}
                    <div className="absolute inset-0 rounded-3xl border-2 border-teal-500/0 group-hover:border-teal-500/30 transition-all duration-300" />

                    <div className="relative z-10 flex flex-col items-center text-center">
                      {/* Avatar Image */}
                      <div className="relative mb-6">
                        <div className="relative w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 rounded-full overflow-hidden bg-gradient-to-br from-teal-500 via-cyan-500 to-teal-600 shadow-lg shadow-teal-500/30 group-hover:scale-110 transition-transform duration-300">
                          <TeamMemberImage member={member} />
                        </div>
                        {/* Pulsing Ring Effect */}
                        <div className="absolute inset-0 rounded-full border-2 border-teal-500/30 animate-ping opacity-0 group-hover:opacity-100 pointer-events-none" />
                      </div>

                      {/* Name */}
                      <h3 className="text-lg sm:text-xl font-heading font-bold text-slate-900 mb-2 group-hover:text-teal-600 transition-colors">
                        {member.name}
                      </h3>

                      {/* Role */}
                      <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed">
                        {member.role}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
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
                Dive into the full Skinapse Labs platform experience and see how our technology integrates into real clinical
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


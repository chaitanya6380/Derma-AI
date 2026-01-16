'use client';

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Target, Users, Award, Heart } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: Target,
      title: "Precision",
      description: "Delivering clinical-grade accuracy through advanced AI diagnostics."
    },
    {
      icon: Users,
      title: "Accessibility",
      description: "Making advanced healthcare technology available to everyone."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Maintaining the highest standards in medical AI innovation."
    },
    {
      icon: Heart,
      title: "Care",
      description: "Putting patient well-being at the center of everything we do."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 overflow-x-hidden selection:bg-teal-500 selection:text-white">
      <Header />

      <main className="pt-20 sm:pt-24">
        {/* Hero Section */}
        <section className="relative py-20 sm:py-24 md:py-32 lg:py-40 px-4 sm:px-6 overflow-hidden">
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
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-white tracking-tight mb-6 sm:mb-8">
                About <span className="text-teal-500">DermAI</span>
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-slate-400 leading-relaxed font-light max-w-3xl mx-auto">
                Revolutionizing dermatological diagnostics through cutting-edge AI technology and clinical expertise.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-white mb-6 tracking-tight">
                  Our <span className="text-teal-500">Mission</span>
                </h2>
                <p className="text-base sm:text-lg text-slate-400 leading-relaxed mb-6">
                  At DermAI, we're dedicated to transforming the landscape of dermatological care by making advanced diagnostic capabilities accessible to healthcare providers and patients worldwide.
                </p>
                <p className="text-base sm:text-lg text-slate-400 leading-relaxed">
                  Our mission is to bridge the gap between cutting-edge AI technology and clinical practice, ensuring that every patient receives accurate, timely, and accessible skin health assessments.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <div className="relative p-8 sm:p-12 bg-gradient-to-br from-slate-900/80 to-slate-950/80 backdrop-blur-sm rounded-3xl border border-white/5">
                  <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 via-cyan-500/5 to-transparent rounded-3xl" />
                  <div className="relative z-10">
                    <div className="grid grid-cols-2 gap-6">
                      <div className="text-center">
                        <div className="text-4xl sm:text-5xl font-heading font-bold text-teal-400 mb-2">99.2%</div>
                        <div className="text-sm sm:text-base text-slate-400">Accuracy Rate</div>
                      </div>
                      <div className="text-center">
                        <div className="text-4xl sm:text-5xl font-heading font-bold text-teal-400 mb-2">50M+</div>
                        <div className="text-sm sm:text-base text-slate-400">Samples Trained</div>
                      </div>
                      <div className="text-center">
                        <div className="text-4xl sm:text-5xl font-heading font-bold text-teal-400 mb-2">150+</div>
                        <div className="text-sm sm:text-base text-slate-400">Medical Centers</div>
                      </div>
                      <div className="text-center">
                        <div className="text-4xl sm:text-5xl font-heading font-bold text-teal-400 mb-2">12</div>
                        <div className="text-sm sm:text-base text-slate-400">Countries</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 bg-slate-900/50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16 sm:mb-20"
            >
              <h2 className="text-xs sm:text-sm font-mono uppercase tracking-[0.3em] text-teal-400 mb-4 sm:mb-6">Our Values</h2>
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-white tracking-tight">
                What Drives <span className="text-teal-500">Us</span>
              </h3>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {values.map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group relative"
                  >
                    <div className="relative h-full p-6 sm:p-8 bg-gradient-to-br from-slate-900/80 to-slate-950/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl border border-white/5 hover:border-teal-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-teal-500/10">
                      <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 via-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl sm:rounded-3xl" />
                      
                      <div className="relative z-10">
                        <div className="relative mb-6">
                          <div className="absolute inset-0 bg-teal-500/20 rounded-2xl blur-xl group-hover:blur-2xl group-hover:bg-teal-500/30 transition-all duration-500" />
                          <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-teal-500/20 to-cyan-500/10 border border-teal-500/30 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                            <IconComponent className="w-7 h-7 sm:w-8 sm:h-8 text-teal-400 group-hover:text-teal-300 transition-colors" />
                          </div>
                        </div>

                        <h4 className="text-xl sm:text-2xl font-heading font-bold text-white mb-3 tracking-tight group-hover:text-teal-50 transition-colors">
                          {value.title}
                        </h4>

                        <p className="text-sm sm:text-base text-slate-400 leading-relaxed font-light group-hover:text-slate-300 transition-colors">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12 sm:mb-16"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-white tracking-tight mb-6">
                Our <span className="text-teal-500">Story</span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="prose prose-invert max-w-none"
            >
              <div className="space-y-6 text-base sm:text-lg text-slate-400 leading-relaxed">
                <p>
                  Founded by a team of MIT researchers and clinical dermatologists, DermAI emerged from a shared vision: to democratize access to advanced dermatological diagnostics through artificial intelligence.
                </p>
                <p>
                  What started as a research project focused on neural network visual diagnostics has evolved into a comprehensive platform trusted by medical centers across 12 countries. Our journey has been marked by rigorous clinical validation, achieving 99.2% accuracy across diverse skin types.
                </p>
                <p>
                  Today, we continue to push the boundaries of what's possible in medical AI, combining deep learning expertise with clinical insights to deliver solutions that make a real difference in patient care.
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

'use client';

import React from 'react';
import { Microscope, Brain, Zap, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

const Features: React.FC = () => {
  const features = [
    {
      icon: Microscope,
      title: "Molecular Scan",
      desc: "Deep skin layer penetration via synthetic aperture spectral imaging.",
      gradient: "from-teal-500/20 via-cyan-500/10 to-transparent"
    },
    {
      icon: Brain,
      title: "Neural Diagnostic",
      desc: "Transformer-based analysis trained on 50M+ clinical pathological samples.",
      gradient: "from-cyan-500/20 via-teal-500/10 to-transparent"
    },
    {
      icon: Zap,
      title: "Instant Results",
      desc: "Real-time edge computing providing clinical insights in under 3 seconds.",
      gradient: "from-teal-500/20 via-emerald-500/10 to-transparent"
    },
    {
      icon: Globe,
      title: "Global Compliance",
      desc: "Fully HIPAA, GDPR, and SOC2 Type II compliant enterprise architecture.",
      gradient: "from-cyan-500/20 via-blue-500/10 to-transparent"
    }
  ];

  return (
    <section className="relative py-20 sm:py-24 md:py-32 lg:py-40 bg-slate-950 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 sm:mb-20 md:mb-24"
        >
          <h2 className="text-xs sm:text-sm font-mono uppercase tracking-[0.3em] text-teal-400 mb-4 sm:mb-6">
            Core Capabilities
          </h2>
          <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white tracking-tight max-w-3xl mx-auto">
            Advanced Diagnostic <span className="text-teal-500">Technology</span>
          </h3>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-6">
          {features.map((feature, i) => {
            const IconComponent = feature.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative"
              >
                {/* Card */}
                <div className="relative h-full p-6 sm:p-8 lg:p-6 xl:p-8 bg-gradient-to-br from-slate-900/80 to-slate-950/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl border border-white/5 hover:border-teal-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-teal-500/10 overflow-hidden">
                  {/* Gradient Overlay on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />
                  
                  {/* Animated Border Glow */}
                  <div className="absolute inset-0 rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-teal-500/0 via-teal-500/50 to-teal-500/0 blur-xl" />
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon Container */}
                    <div className="relative mb-6 sm:mb-8">
                      <div className="absolute inset-0 bg-teal-500/20 rounded-2xl blur-xl group-hover:blur-2xl group-hover:bg-teal-500/30 transition-all duration-500" />
                      <div className="relative w-14 h-14 sm:w-16 sm:h-16 lg:w-14 lg:h-14 xl:w-16 xl:h-16 rounded-2xl bg-gradient-to-br from-teal-500/20 to-cyan-500/10 border border-teal-500/30 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                        <IconComponent className="w-7 h-7 sm:w-8 sm:h-8 lg:w-7 lg:h-7 xl:w-8 xl:h-8 text-teal-400 group-hover:text-teal-300 transition-colors" />
                      </div>
                    </div>

                    {/* Title */}
                    <h4 className="text-lg sm:text-xl lg:text-lg xl:text-xl font-heading font-bold text-white mb-3 sm:mb-4 tracking-tight group-hover:text-teal-50 transition-colors">
                      {feature.title}
                    </h4>

                    {/* Description */}
                    <p className="text-sm sm:text-base lg:text-sm xl:text-base text-slate-400 leading-relaxed font-light group-hover:text-slate-300 transition-colors">
                      {feature.desc}
                    </p>

                    {/* Decorative Line */}
                    <div className="mt-6 sm:mt-8 w-12 h-px bg-gradient-to-r from-teal-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;

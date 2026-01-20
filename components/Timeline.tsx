'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MILESTONES } from '../constants';
import { motion } from 'framer-motion';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const Timeline: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !progressRef.current) return;

    // Line filling animation
    gsap.to(progressRef.current, {
      height: '100%',
      ease: 'none',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top center',
        end: 'bottom center',
        scrub: 1,
      },
    });

    // Milestone animations
    const items = sectionRef.current.querySelectorAll('.milestone-item');
    items.forEach((item, index) => {
      gsap.fromTo(item,
        { opacity: 0, y: 60, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: item,
            start: 'top 80%',
            end: 'top 50%',
            toggleActions: 'play none none reverse',
          }
        }
      );
    });
  }, []);

  return (
    <section ref={sectionRef} className="relative py-20 sm:py-24 md:py-32 lg:py-40 px-4 sm:px-6 bg-white overflow-hidden">
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
          <h2 className="text-xs sm:text-sm font-mono uppercase tracking-[0.3em] text-teal-400 mb-4 sm:mb-6">Our Journey</h2>
          <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-slate-900 tracking-tight">
            Evolving <span className="text-teal-600">Healthcare AI</span>
          </h3>
        </motion.div>

        {/* Timeline Container */}
        <div className="max-w-6xl mx-auto relative">
          {/* Enhanced Central Vertical Line */}
          <div ref={lineRef} className="absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2 hidden md:block">
            {/* Background line */}
            <div className="absolute inset-0 bg-slate-200" />
            {/* Progress line with glow */}
            <div ref={progressRef} className="absolute top-0 left-0 w-full h-0 bg-gradient-to-b from-teal-500 via-cyan-500 to-teal-500">
              <div className="absolute inset-0 bg-teal-500 blur-sm opacity-50" />
            </div>
          </div>

          {/* Milestones */}
          <div className="flex flex-col gap-20 sm:gap-24 md:gap-28 lg:gap-32">
            {MILESTONES.map((m, idx) => (
              <div
                key={m.id}
                className={`milestone-item relative flex flex-col md:flex-row items-center gap-8 sm:gap-10 md:gap-12 w-full ${
                  idx % 2 !== 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Content Card */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className={`w-full md:w-5/12 relative group ${
                    idx % 2 === 0 ? 'md:text-right' : 'md:text-left'
                  } text-center md:text-left`}
                >
                  <div className="relative p-6 sm:p-8 lg:p-10 bg-white rounded-2xl sm:rounded-3xl border border-slate-200 hover:border-teal-500/40 transition-all duration-500 hover:shadow-2xl hover:shadow-teal-500/10">
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 via-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl sm:rounded-3xl" />
                    
                    <div className="relative z-10">
                      {/* Year */}
                      <div className="mb-4 sm:mb-6">
                        <span className="text-5xl sm:text-6xl md:text-7xl font-heading font-black bg-gradient-to-r from-teal-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
                          {m.year}
                        </span>
                      </div>

                      {/* Title */}
                      <h4 className="text-xl sm:text-2xl md:text-3xl font-heading font-bold text-slate-900 mb-3 sm:mb-4 tracking-tight group-hover:text-teal-700 transition-colors">
                        {m.title}
                      </h4>

                      {/* Description */}
                      <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-light group-hover:text-slate-700 transition-colors">
                        {m.description}
                      </p>

                      {/* Decorative Line */}
                      <div className="mt-6 sm:mt-8 w-16 h-px bg-gradient-to-r from-teal-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                  </div>
                </motion.div>

                {/* Timeline Marker - Centered on the line */}
                <div className="absolute left-1/2 -translate-x-1/2 z-20 flex-shrink-0 hidden md:flex items-center justify-center">
                  <div className="relative flex items-center justify-center">
                    {/* Outer Glow */}
                    <div className="absolute w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-teal-500/30 blur-md animate-pulse" />
                    {/* Middle Ring */}
                    <div className="absolute w-5 h-5 sm:w-7 sm:h-7 rounded-full border-2 border-teal-500/50" />
                    {/* Inner Dot */}
                    <div className="relative w-4 h-4 sm:w-6 sm:h-6 rounded-full bg-gradient-to-br from-teal-400 to-cyan-500 border-2 border-slate-950 shadow-lg">
                      <div className="absolute inset-0 rounded-full bg-teal-400/50 blur-sm" />
                    </div>
                  </div>
                </div>
                
                {/* Mobile Timeline Marker */}
                <div className="relative z-20 flex-shrink-0 md:hidden flex items-center justify-center my-4">
                  <div className="relative flex items-center justify-center">
                    {/* Outer Glow */}
                    <div className="absolute w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-teal-500/30 blur-md animate-pulse" />
                    {/* Middle Ring */}
                    <div className="absolute w-5 h-5 sm:w-7 sm:h-7 rounded-full border-2 border-teal-500/50" />
                    {/* Inner Dot */}
                    <div className="relative w-4 h-4 sm:w-6 sm:h-6 rounded-full bg-gradient-to-br from-teal-400 to-cyan-500 border-2 border-slate-950 shadow-lg">
                      <div className="absolute inset-0 rounded-full bg-teal-400/50 blur-sm" />
                    </div>
                  </div>
                </div>

                {/* Image Card */}
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                  className="w-full md:w-5/12 relative group/image"
                >
                  <div className="relative aspect-[4/3] rounded-2xl sm:rounded-3xl overflow-hidden bg-white border border-slate-200 hover:border-teal-500/40 transition-all duration-500">
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-0 group-hover/image:opacity-100 transition-opacity duration-500 z-10" />
                    
                    {/* Image */}
                    <img
                      src={m.imageUrl}
                      alt={m.title}
                      className="w-full h-full object-cover grayscale group-hover/image:grayscale-0 transition-all duration-700 scale-105 group-hover/image:scale-100"
                    />
                    
                    {/* Shine Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover/image:translate-x-full transition-transform duration-1000 z-20" />
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;

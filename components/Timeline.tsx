'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MILESTONES } from '../constants';

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
        scrub: true,
      },
    });

    // Milestone animations
    const items = sectionRef.current.querySelectorAll('.milestone-item');
    items.forEach((item) => {
      gsap.fromTo(item,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: item,
            start: 'top 85%',
            end: 'top 60%',
            toggleActions: 'play none none reverse',
          }
        }
      );
    });
  }, []);

  return (
    <section ref={sectionRef} className="py-32 px-6 bg-white relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center mb-24">
        <h2 className="text-sm font-mono uppercase tracking-widest text-teal-600 mb-4">Our Journey</h2>
        <h3 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">Evolving Healthcare AI</h3>
      </div>

      <div className="max-w-6xl mx-auto relative flex flex-col gap-32">
        {/* Central Vertical Line */}
        <div ref={lineRef} className="absolute left-1/2 top-0 bottom-0 w-px bg-slate-100 -translate-x-1/2">
          <div ref={progressRef} className="absolute top-0 left-0 w-full h-0 bg-teal-500" />
        </div>

        {MILESTONES.map((m, idx) => (
          <div
            key={m.id}
            className={`milestone-item flex flex-col md:flex-row items-center gap-12 w-full ${idx % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
          >
            <div className={`w-full md:w-1/2 ${idx % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
              <span className="text-6xl font-black text-slate-100 block mb-2">{m.year}</span>
              <h4 className="text-2xl font-bold text-slate-900 mb-4">{m.title}</h4>
              <p className="text-slate-500 leading-relaxed max-w-sm mx-auto md:mx-0 inline-block">
                {m.description}
              </p>
            </div>

            <div className="relative z-10">
              <div className="w-4 h-4 rounded-full bg-teal-500 border-4 border-white shadow-lg ring-4 ring-teal-50" />
            </div>

            <div className="w-full md:w-1/2">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden bg-slate-100 shadow-2xl shadow-slate-200">
                <img
                  src={m.imageUrl}
                  alt={m.title}
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Timeline;

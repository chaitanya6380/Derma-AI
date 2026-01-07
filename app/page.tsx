'use client';

import React, { useEffect } from 'react';
import Header from '@/components/Header';
import HeroScanner from '@/components/HeroScanner';
import Timeline from '@/components/Timeline';
import Features from '@/components/Features';
import Footer from '@/components/Footer';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

export default function Home() {
    useEffect(() => {
        // Smoothen internal scroll transitions
        document.documentElement.style.scrollBehavior = 'auto';
        return () => {
            document.documentElement.style.scrollBehavior = 'smooth';
        };
    }, []);

    return (
        <div className="min-h-screen bg-slate-950 overflow-x-hidden selection:bg-teal-500 selection:text-white">
            <Header />

            <main>
                {/* Intro Padding - Darkened for Medical aesthetic */}
                <section className="min-h-[40vh] flex flex-col items-center justify-end pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6 bg-slate-950 pt-20 sm:pt-24">
                    <div className="max-w-4xl text-center">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-white mb-4 sm:mb-6">
                            Precision Skin <span className="text-teal-500">Diagnostics.</span>
                        </h1>
                        <p className="text-base sm:text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed font-light px-4">
                            Clinical-grade AI diagnostics powered by 3D volumetric scanning and deep spectral analysis.
                        </p>
                    </div>
                </section>

                {/* Hero Scanner Section (Main 3D Interaction) */}
                <HeroScanner />

                {/* Features / Stats */}
                <Features />

                {/* Company Journey */}
                <Timeline />
            </main>

            <Footer />
        </div>
    );
}

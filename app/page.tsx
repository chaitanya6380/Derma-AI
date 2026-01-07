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
                <section className="h-[40vh] flex flex-col items-center justify-end pb-20 px-6 bg-slate-950 pt-24">
                    <div className="max-w-4xl text-center">
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6">
                            Precision Skin <span className="text-teal-500">Diagnostics.</span>
                        </h1>
                        <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed font-light">
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

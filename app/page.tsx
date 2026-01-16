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

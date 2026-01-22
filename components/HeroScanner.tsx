'use client';

import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { motion } from 'framer-motion';

const HeroScanner: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const clockRef = useRef(new THREE.Clock());
  const [scrollProgress, setScrollProgress] = useState(0);

  const clamp01 = (v: number) => Math.max(0, Math.min(1, v));

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (!canvasRef.current || !containerRef.current) return;

    // --- Three.js Setup (scanner + particles only) ---
    const scene = new THREE.Scene();
    const width = window.innerWidth;
    const height = window.innerHeight;

    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000);
    camera.position.z = 4;

    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
      antialias: true,
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Circular scanner ring
    const circleRadius = 2.4;
    const circleGeom = new THREE.RingGeometry(circleRadius - 0.12, circleRadius + 0.12, 96);
    const circleMat = new THREE.MeshBasicMaterial({
      color: 0x14b8a6,
      transparent: true,
      opacity: 0.85,
      side: THREE.DoubleSide,
      blending: THREE.AdditiveBlending,
    });
    const scanCircle = new THREE.Mesh(circleGeom, circleMat);
    scanCircle.rotation.x = Math.PI / 2;
    scene.add(scanCircle);

    // Particles around head
    const pCount = 3500;
    const pPos = new Float32Array(pCount * 3);
    const sphereRadius = 2.6;
    const innerRadius = 1.0;

    for (let i = 0; i < pCount * 3; i += 3) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = innerRadius + Math.random() * (sphereRadius - innerRadius);

      pPos[i] = r * Math.sin(phi) * Math.cos(theta);
      pPos[i + 1] = r * Math.sin(phi) * Math.sin(theta);
      pPos[i + 2] = r * Math.cos(phi);
    }

    const pGeom = new THREE.BufferGeometry();
    pGeom.setAttribute('position', new THREE.BufferAttribute(pPos, 3));
    const pMat = new THREE.PointsMaterial({
      size: 0.008,
      color: 0x22c1c3,
      transparent: true,
      opacity: 0.22,
      blending: THREE.AdditiveBlending,
    });
    const particles = new THREE.Points(pGeom, pMat);
    scene.add(particles);

    let frameId: number;

    const animate = () => {
      frameId = requestAnimationFrame(animate);
      const time = clockRef.current.getElapsedTime();

      // Slow orbital motion for particles
      particles.rotation.y += 0.0004;

      // Gentle up-down scan motion
      const scanOffset = Math.sin(time * 0.8) * 1.2;
      scanCircle.position.y = scanOffset;

      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(frameId);
      renderer.dispose();
      circleGeom.dispose();
      circleMat.dispose();
      pGeom.dispose();
      pMat.dispose();
    };
  }, []);

  // Track how far the user has scrolled while the hero is in view (0–1)
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight || 1;

      // When the top of the hero hits the top of the viewport = 0,
      // when the bottom of the hero leaves the bottom of the viewport = 1
      const total = rect.height + viewportHeight;
      const offset = viewportHeight - rect.top;
      const progress = clamp01(offset / total);
      setScrollProgress(progress);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full overflow-hidden bg-slate-950"
      style={{ aspectRatio: '16/9', maxHeight: '90vh' }}
    >
      {/* Background Ambience */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_#2dd4bf26_0%,_transparent_70%)]" />
      </div>

      <canvas ref={canvasRef} className="absolute inset-0 z-10 block" />

      {/* Centered 3D head overlay image */}
      <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none px-4">
        <motion.img
          src="/3d-face.svg.png"
          alt="DermAI 3D head diagnostic model"
          className="max-h-[60vh] max-w-[80vw] md:max-w-[45vw] w-auto h-auto object-contain transition-transform duration-500"
          style={{
            transform: `translateX(${scrollProgress * 40 - 20}px) rotateY(${scrollProgress * 18}deg)`,
          }}
          onError={(e) => {
            console.error('Image failed to load:', e);
          }}
        />
      </div>

      {/* Simple overlay copy */}
      <div className="absolute inset-x-0 bottom-10 z-30 px-4 sm:px-8 flex justify-center pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="pointer-events-auto bg-slate-950/70 border border-teal-500/40 rounded-2xl px-5 py-3 sm:px-7 sm:py-4 shadow-xl flex items-center gap-3"
        >
          <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
          <p className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.3em] text-slate-200">
            Real-time texture analysis facial scan
          </p>
        </motion.div>
      </div>

      {/* End-of-scan summary popup beside the face */}
      {scrollProgress > 0.95 && (
        <div className="absolute inset-0 z-30 flex items-center justify-center pointer-events-none px-4">
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="pointer-events-auto ml-auto mr-[8%] max-w-xs sm:max-w-sm bg-white/95 border border-slate-200 rounded-2xl shadow-2xl px-5 py-4 sm:px-6 sm:py-5 flex flex-col gap-3"
          >
            <p className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.25em] text-teal-600">
              Scan Complete
            </p>
            <h3 className="text-base sm:text-lg font-heading font-semibold text-slate-900">
              DermAI Diagnostic Summary
            </h3>
            <p className="text-xs sm:text-sm text-slate-600">
              Review a full demo of the DermAI analysis workflow, then connect with our team to tailor it to your
              clinic.
            </p>
            <div className="flex flex-col gap-2 mt-1">
              <a
                href="#"
                className="inline-flex items-center justify-center px-3 py-2 rounded-full bg-slate-900 text-white text-xs sm:text-sm font-semibold hover:bg-slate-800 transition-colors"
              >
                Watch Demo (video)
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-3 py-2 rounded-full border border-teal-600 text-xs sm:text-sm font-semibold text-teal-700 hover:bg-teal-50 transition-colors"
              >
                Contact Us
              </a>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default HeroScanner;


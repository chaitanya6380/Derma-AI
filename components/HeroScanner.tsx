'use client';

import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SCAN_POINTS } from '../constants';
import { motion, AnimatePresence } from 'framer-motion';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const HeroScanner: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMounted, setIsMounted] = useState(false);
  const [debugValues, setDebugValues] = useState({
    uptime: 0,
    bufferState: '0x0',
    threadId: 0
  });
  const progressRef = useRef(0);

  const clockRef = useRef(new THREE.Clock());

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (!canvasRef.current || !containerRef.current) return;
    if (!isMounted) return;

    // --- Three.js Setup (scanner + particles only) ---
    const scene = new THREE.Scene();
    const width = window.innerWidth;
    const height = window.innerHeight;
    
    // Optimize for 16:9 aspect ratio - ensure face always fits
    const targetAspect = 16 / 9;
    const currentAspect = width / height;
    let camera: THREE.PerspectiveCamera;
    
    if (currentAspect > targetAspect) {
      // Wider than 16:9, adjust FOV
      const fov = 75 * (targetAspect / currentAspect);
      camera = new THREE.PerspectiveCamera(fov, width / height, 0.1, 1000);
    } else {
      camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    }
    
    // Adjust camera position to ensure face fits within viewport
    camera.position.z = 3.8;

    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
      antialias: true
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Pulsing Circle Scanner (replaces square bar)
    const circleRadius = 2.5;
    const circleGeom = new THREE.RingGeometry(circleRadius - 0.15, circleRadius + 0.15, 64);
    const circleMat = new THREE.MeshBasicMaterial({
      color: 0x2dd4bf,
      transparent: true,
      opacity: 0.85,
      side: THREE.DoubleSide,
      blending: THREE.AdditiveBlending
    });
    const scanCircle = new THREE.Mesh(circleGeom, circleMat);
    scanCircle.rotation.x = Math.PI / 2; // Rotate to be horizontal
    scene.add(scanCircle);

    // Dense Particles concentrated in sphere around face
    const pCount = 4000; // Increased from 1500
    const pPos = new Float32Array(pCount * 3);
    const faceCenter = new THREE.Vector3(0, 0, 0);
    const sphereRadius = 2.5; // Concentrate particles in sphere around face
    const innerRadius = 1.0; // Inner radius to avoid blocking face
    
    for (let i = 0; i < pCount * 3; i += 3) {
      // Generate points in spherical coordinates, concentrated around face
      const theta = Math.random() * Math.PI * 2; // Azimuth
      const phi = Math.acos(2 * Math.random() - 1); // Elevation
      const r = innerRadius + Math.random() * (sphereRadius - innerRadius);
      
      pPos[i] = r * Math.sin(phi) * Math.cos(theta); // x
      pPos[i + 1] = r * Math.sin(phi) * Math.sin(theta); // y
      pPos[i + 2] = r * Math.cos(phi); // z
    }
    
    const pGeom = new THREE.BufferGeometry();
    pGeom.setAttribute('position', new THREE.BufferAttribute(pPos, 3));
    const pMat = new THREE.PointsMaterial({
      size: 0.008, // Slightly larger for better visibility
      color: 0x2dd4bf,
      transparent: true,
      opacity: 0.25,
      blending: THREE.AdditiveBlending
    });
    const particles = new THREE.Points(pGeom, pMat);
    scene.add(particles);

    let frameId: number;

    const animate = () => {
      frameId = requestAnimationFrame(animate);
      const time = clockRef.current.getElapsedTime();
      const p = progressRef.current;

      // Rotate particles slowly
      particles.rotation.y += 0.0002;

      // Move circle scanner with scroll
      scanCircle.position.y = 2.2 - (p * 5.5);
      
      // Static opacity and scale (no flash effect)
      scanCircle.material.opacity = 0.85;
      scanCircle.scale.set(1, 1, 1);

      renderer.render(scene, camera);
    };
    animate();

    // Scroll Trigger Setup
    const st = ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top top",
      end: "+=250%",
      pin: true,
      scrub: 1,
      pinSpacing: true,
      onUpdate: (self) => {
        progressRef.current = self.progress;
        setScrollProgress(self.progress);
      }
    });

    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const currentAspect = width / height;
      const targetAspect = 16 / 9;
      
      if (currentAspect > targetAspect) {
        const fov = 75 * (targetAspect / currentAspect);
        camera.fov = fov;
      } else {
        camera.fov = 75;
      }
      
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(frameId);
      st.kill();
      renderer.dispose();
      circleGeom.dispose();
      circleMat.dispose();
      pGeom.dispose();
      pMat.dispose();
    };
  }, [isMounted]);

  // Update debug values after mount to avoid hydration errors
  useEffect(() => {
    if (!isMounted) return;

    // Generate threadId once
    const threadId = Math.floor(Math.random() * 1000);
    setDebugValues(prev => ({ ...prev, threadId }));

    // Update uptime and buffer state periodically
    const interval = setInterval(() => {
      setDebugValues(prev => ({
        uptime: Math.round(clockRef.current.getElapsedTime() * 1000),
        bufferState: `0x${Math.round(scrollProgress * 65535).toString(16).toUpperCase()}`,
        threadId: prev.threadId
      }));
    }, 100);

    return () => clearInterval(interval);
  }, [isMounted, scrollProgress]);

  return (
    <section ref={containerRef} className="relative w-full overflow-hidden bg-slate-950" style={{ aspectRatio: '16/9', height: '100vh', maxHeight: '100vh' }}>
      {/* Background Ambience */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_#2dd4bf10_0%,_transparent_70%)]" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.04] mix-blend-screen" />
      </div>

      <canvas ref={canvasRef} className="absolute inset-0 z-10 block" />

      {/* Centered 3D face overlay (HTML image, avoids WebGL texture/CORS issues) */}
      {/* Sized to fit within 16:9 viewport */}
      <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none px-4">
        <img
          src="https://storage.googleapis.com/new_client_files/Derm%20-%20AI/3d%20face.png"
          alt="3D facial wireframe"
          className="max-h-[55vh] sm:max-h-[60vh] md:max-h-[65vh] max-w-[85vw] sm:max-w-[60vw] md:max-w-[45vw] w-auto h-auto object-contain opacity-90"
        />
      </div>

      {/* Interactive HUD Overlay */}
      <div className="absolute inset-0 z-30 flex items-center justify-between px-4 sm:px-6 md:px-10 lg:px-24 pointer-events-none">
        {/* Left Stats Panel */}
        <div className="w-1/3 hidden lg:block">
          <div className="p-6 lg:p-8 border-l-2 border-teal-500/50 bg-black/40 backdrop-blur-2xl rounded-r-[2.5rem] mb-8 shadow-2xl border border-white/5">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-2 h-2 rounded-full bg-teal-500 animate-pulse" />
              <p className="text-[10px] font-mono uppercase tracking-[0.4em] text-teal-400">Analysis Pipeline</p>
            </div>
            <p className="text-2xl lg:text-3xl font-bold text-white tracking-tighter mb-4">Biometric Scan</p>
            <div className="h-1 bg-slate-800/50 overflow-hidden rounded-full relative">
              <motion.div
                className="absolute h-full bg-teal-500 shadow-[0_0_20px_rgba(45,212,191,0.9)]"
                animate={{ width: `${scrollProgress * 100}%` }}
                transition={{ duration: 0.1 }}
              />
            </div>
            <div className="mt-6 lg:mt-8 grid grid-cols-2 gap-4 lg:gap-6 font-mono text-[9px]">
              <div className="flex flex-col gap-1">
                <span className="text-slate-500">FIDELITY</span>
                <span className="text-white font-bold tracking-widest">TRUE_SENS 8K</span>
              </div>
              <div className="flex flex-col gap-1 text-right">
                <span className="text-slate-500">PKT_LOSS</span>
                <span className="text-teal-400 font-bold">0.0001%</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-slate-500">MESH_DENSITY</span>
                <span className="text-white font-bold">32,768 POLY</span>
              </div>
              <div className="flex flex-col gap-1 text-right">
                <span className="text-slate-500">GPU_ACCEL</span>
                <span className="text-teal-400 font-bold">ACTIVE</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Content Panel (Scroll Revel) */}
        <div className="w-full lg:w-1/3 h-auto min-h-[300px] sm:min-h-[400px] md:h-[500px] flex flex-col justify-center gap-6 sm:gap-8 md:gap-12 text-left px-2 sm:px-4">
          {SCAN_POINTS.map((point) => {
            const isActive = scrollProgress > (point.progress - 0.12) && scrollProgress < (point.progress + 0.12);
            return (
              <AnimatePresence key={point.id}>
                {isActive && (
                  <motion.div
                    initial={{ opacity: 0, x: 60, scale: 0.95, filter: 'blur(20px)' }}
                    animate={{ opacity: 1, x: 0, scale: 1, filter: 'blur(0px)' }}
                    exit={{ opacity: 0, x: -60, scale: 0.95, filter: 'blur(20px)' }}
                    className="flex flex-col gap-4 sm:gap-5 p-6 sm:p-8 md:p-10 bg-slate-900/50 backdrop-blur-3xl border border-white/10 rounded-2xl sm:rounded-[3rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] pointer-events-auto"
                  >
                    <div className="flex items-center gap-4 sm:gap-6">
                      <div className="relative group">
                        <div className="absolute inset-0 bg-teal-500/20 blur-2xl rounded-full group-hover:bg-teal-500/40 transition-colors" />
                        <span className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-black text-teal-400 flex items-center justify-center text-base sm:text-lg font-mono font-bold border border-teal-500/40 shadow-inner">
                          {point.id}
                        </span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">{point.label}</h3>
                    </div>
                    <p className="text-slate-400 leading-relaxed text-sm sm:text-base font-light font-mono">
                      {point.content}
                    </p>
                    <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 border-t border-white/5">
                      <div className="flex gap-2">
                        <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse" />
                        <span className="text-[10px] font-mono text-teal-500 uppercase tracking-widest font-bold">Verified</span>
                      </div>
                      <span className="text-[10px] font-mono text-slate-600">OFFSET: {point.progress.toFixed(3)}s</span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            );
          })}
        </div>
      </div>

      {/* Secondary HUD - Debug Logs */}
      <div className="absolute top-20 sm:top-24 left-4 sm:left-6 md:left-10 lg:left-24 font-mono text-[9px] text-teal-500/30 uppercase tracking-[0.4em] space-y-6 pointer-events-none hidden md:block">
        <div className="p-4 sm:p-5 border border-white/5 rounded-2xl sm:rounded-3xl bg-black/30 backdrop-blur-md">
          <p className="text-white/60 font-bold mb-3 sm:mb-4 border-b border-white/10 pb-2 text-[8px] sm:text-[9px]">CORE.ENVIRONMENT</p>
          <div className="space-y-2 text-[8px]">
            <p className="flex justify-between gap-6 sm:gap-12">SYS_UPTIME: <span>{isMounted ? `${debugValues.uptime}ms` : '0ms'}</span></p>
            <p className="flex justify-between gap-6 sm:gap-12">BUFFER_STATE: <span>{isMounted ? debugValues.bufferState : '0x0'}</span></p>
            <p className="flex justify-between gap-6 sm:gap-12">THREAD_ID: <span>{isMounted ? debugValues.threadId : '0'}</span></p>
            <p className="flex justify-between gap-6 sm:gap-12">REACH: <span>4.2 UNIT</span></p>
          </div>
        </div>
      </div>

      {/* Scroll Call to Action */}
      <div className="absolute bottom-6 sm:bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 text-center pointer-events-none px-4">
        <div className="mb-4 sm:mb-6 h-12 sm:h-16 flex flex-col items-center gap-2">
          <div className="w-px flex-1 bg-gradient-to-b from-teal-500 to-transparent relative">
            <motion.div
              className="absolute top-0 left-0 w-full bg-white h-3 sm:h-4 shadow-[0_0_10px_#fff]"
              animate={{ y: [0, 48] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
            />
          </div>
        </div>
        <p className="text-[8px] sm:text-[10px] uppercase font-mono font-bold tracking-[0.4em] sm:tracking-[0.6em] text-slate-600">Scroll to Navigate Data Layers</p>
      </div>
    </section>
  );
};

export default HeroScanner;

"use client";
import React, { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { MoveRight, Zap, Target, Star, Dumbbell, MapPin, Calculator, Brain, Scale, FlaskConical, Quote } from "lucide-react";
import Image from "next/image";

// Pre-loading state component
const PreLoader = () => (
  <motion.div initial={{ opacity: 1 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1 }} className="fixed inset-0 z-[100] bg-neutral-950 flex flex-col items-center justify-center p-10">
    <Dumbbell className="w-20 h-20 text-white mb-6 animate-pulse" />
    <motion.h1 animate={{ opacity: [0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: 1 }} className="text-4xl font-extrabold text-white tracking-tighter">BUILDING EMPIRE V7...</motion.h1>
  </motion.div>
);

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = useState(false);
  const [showPassForm, setShowPassForm] = useState(false);
  const [formName, setFormName] = useState("");
  const [formPhone, setFormPhone] = useState("");

  useEffect(() => {
    setIsMounted(true);
    // Dynamic import for smooth scroll
    const initSmoothScroll = async () => {
        const mod = await import('smooth-scroller');
        const SmoothScroller = mod.default;
        if(containerRef.current) {
            new SmoothScroller({
                wrapper: containerRef.current,
                smooth: true,
                smoothTouch: true,
                inertia: 0.8
            });
        }
    };
    initSmoothScroll();
  }, []);

  const stats = [
    { title: "Personalised Nutrition", value: "Elite" },
    { title: "Transformation Rate", value: "93%" },
    { title: "Expert Coaching", value: "Premium" },
    { title: "Client Satisfaction", value: "97%" }
  ];

  const corePillars = [
    { name: "Mindset", icon: Brain, desc: "evidence-based systems for core mindset" },
    { name: "Metabolic", icon: FlaskConical, desc: "physiological and metabolic architecture" },
    { name: "Muscle", icon: Dumbbell, desc: "integrated systems for elite transformations" }
  ];

  const { scrollYProgress } = useScroll();
  const scale = useSpring(scrollYProgress, { stiffness: 100, damping: 20 });

  return (
    <div ref={containerRef} className="overflow-hidden bg-neutral-950">
      <AnimatePresence>
        {!isMounted && <PreLoader />}
      </AnimatePresence>

      {/* 🚀 Premium Navigation Bar (Figma style) */}
      <motion.header initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1, duration: 1 }} className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-6 glass-card mt-4 mx-6 rounded-full">
        <div className="flex items-center gap-2">
          <Dumbbell className="w-8 h-8 text-white" />
          <h1 className="text-2xl font-extrabold text-white tracking-tighter text-glow">IceBug <span className="text-neutral-500 font-medium">Estate</span></h1>
        </div>
        <nav className="flex items-center gap-6">
          {["Home", "About", "Contact"].map((link) => (
            <a key={link} href="#" className="text-white text-sm font-medium hover:text-neutral-400 transition-colors tracking-tight">{link}</a>
          ))}
          <motion.button onClick={() => setShowPassForm(true)} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-white text-neutral-950 px-6 py-2.5 rounded-full text-sm font-bold flex items-center gap-2">
            Claim Pass <MoveRight className="w-4 h-4" />
          </motion.button>
        </nav>
      </motion.header>

      {/* 🚀 Parallax Video Hero Section (Exact fit for the vibe) */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video autoPlay loop muted playsInline className="w-full h-full object-cover">
            <source src="/gym-hero.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-neutral-950/60" />
        </div>
        
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1.2, duration: 1.5 }} className="relative z-10 text-center px-6">
          <div className="border border-white/10 rounded-full px-4 py-1.5 inline-flex items-center gap-2 mb-6 bg-white/5 backdrop-blur-sm">
            <Zap className="w-4 h-4 text-white" />
            <span className="text-sm font-semibold tracking-tight text-white/90">BEYOND GOD MODE V7: AGENCY REDESIGN</span>
          </div>
          
          <h2 className="text-7xl md:text-[140px] font-extrabold text-white tracking-tighter leading-[0.85] text-glow mb-6">
            Fitness care <br /> for your body <br /> & <span className="text-neutral-500">mind</span>
          </h2 >

          <p className="text-neutral-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">The only place in Kanpur that architecturally designed elite performance for modern clients.</p>

          <motion.button onClick={() => setShowPassForm(true)} whileHover={{ scale: 1.05 }} className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-10 py-5 rounded-full text-lg font-bold flex items-center gap-3 mx-auto">
            Get Your Pass <MoveRight className="w-6 h-6" />
          </motion.button>
        </motion.div>
      </section>

      {/* 🚀 About Section (Upgraded layout with premium stats) */}
      <section className="relative z-10 px-6 py-32 bg-neutral-950">
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="grid grid-cols-1 lg:grid-cols-5 gap-16 max-w-7xl mx-auto items-center">
          <div className="lg:col-span-3">
            <div className="border border-white/10 rounded-full px-4 py-1 inline-block mb-6">
                <span className="text-sm font-semibold text-neutral-500 uppercase tracking-widest">ABOUT US</span>
            </div>
            <h3 className="text-6xl md:text-7xl font-extrabold text-white tracking-tighter mb-6 leading-[0.9]">Your Space to <span className="italic">Move, Improve,</span> and <span className="italic text-neutral-500">Thrive</span></h3>
            <p className="text-neutral-300 text-xl leading-relaxed max-w-2xl">A private boutique fitness architecture designed for exclusive performance enhancement, beyond standard gyms.</p>
          </div>
          <div className="lg:col-span-2 grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
                <motion.div key={stat.title} initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.1 }} className="glass-card p-8 rounded-3xl text-center">
                    <h4 className="text-neutral-500 text-sm font-semibold tracking-wide uppercase mb-3">{stat.title}</h4>
                    <p className="text-5xl font-extrabold tracking-tighter text-glow">{stat.value}</p>
                </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* 🚀 Services Section (Clean Grid Layout from Photos) */}
      <section className="px-6 py-32 bg-black border-t border-white/5">
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} className="text-center max-w-4xl mx-auto mb-20">
            <h3 className="text-6xl font-extrabold text-white tracking-tighter mb-6 leading-none">The Core <span className="text-neutral-500">Pillars</span> of <br /> Our Architecture</h3>
            <p className="text-neutral-300 text-lg leading-relaxed">Integrated evidence-based systems to re-engineer core performance.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {corePillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <motion.div key={pillar.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.2 }} className="glass-card p-10 rounded-3xl flex flex-col gap-6 items-center text-center">
                <Icon className="w-16 h-16 text-white p-4 bg-white/5 rounded-full" />
                <h4 className="text-3xl font-bold tracking-tight text-white">{pillar.name} Architecture</h4>
                <p className="text-neutral-400 text-base leading-relaxed">{pillar.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* 🚀 Testimonial - Pacquiao Quote style */}
      <section className="px-6 py-32 bg-neutral-950 flex items-center justify-center border-b border-white/5">
        <motion.div initial={{ scale: 0.9, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} className="glass-card p-12 rounded-3xl max-w-4xl flex flex-col md:flex-row items-center gap-10">
          <Image src="/user1.jpg" alt="Client" width={150} height={150} className="rounded-full border-4 border-white/10" />
          <div>
            <Quote className="w-12 h-12 text-white opacity-20 mb-4" />
            <p className="text-3xl font-extrabold text-white tracking-tighter leading-tight mb-6">"Elite Architecture is the only way to transform. Period. Beyond God Mode."</p>
            <div className="flex items-center gap-3">
                <div>
                    <p className="text-white font-bold text-lg">Manny Pacquiao</p>
                    <p className="text-neutral-500 text-sm">Professional Athlete</p>
                </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 🚀 Footer (Premium Agency Look) */}
      <footer className="relative z-10 px-6 py-20 bg-black text-center border-t border-white/5">
        <Dumbbell className="w-16 h-16 text-white mx-auto mb-8 opacity-50" />
        <h3 className="text-3xl md:text-4xl font-extrabold tracking-tighter text-glow mb-6">Find the perfect fitness journey for <br /> you and unlock <span className="text-neutral-500 tracking-tight">your strongest self with us!</span></h3>
        <p className="text-neutral-500 text-sm mt-16 tracking-widest uppercase">&copy; 2026 IceBug Estate Elite Fitness Agency. Lucknow-Kanpur Zone.</p>
      </footer>
    </div>
  );
}
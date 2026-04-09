"use client";
import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence, useSpring } from "framer-motion";
import { MoveRight, Zap, Target, Star, Dumbbell, MapPin, Calculator, Brain, Scale, FlaskConical, Quote } from "lucide-react";
import Image from "next/image";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = useState(false);
  const [showPassForm, setShowPassForm] = useState(false);
  const [formName, setFormName] = useState("");
  const [formPhone, setFormPhone] = useState("");

  useEffect(() => {
    setIsMounted(true);
    // Smooth Scrolling init
    const scroller = () => import('smooth-scroller').then((mod) => new mod.default({
        wrapper: containerRef.current,
        smooth: true,
        smoothTouch: true,
      }));
    scroller();
  }, []);

  const { scrollYProgress } = useScroll({ target: containerRef });
  const scale = useSpring(scrollYProgress, { stiffness: 100, damping: 20 });

  // Parallax offsets for hero elements
  const heroTextY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const heroVideoOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.2]);

  const stats = [
    { title: "Transformation Rate", value: "93%" },
    { title: "Expert Coaching", value: "Premium" },
    { title: "Personalized Nutrition", value: "Elite" },
    { title: "Client Satisfaction", value: "97%" }
  ];

  const corePillars = [
    { name: "Mindset", icon: Brain },
    { name: "Metabolic", icon: FlaskConical },
    { name: "Muscle", icon: Dumbbell }
  ];

  return (
    <div ref={containerRef} className="overflow-hidden">
      <AnimatePresence>
        {!isMounted && (
          <motion.div exit={{ opacity: 0 }} className="fixed inset-0 z-[100] bg-black flex items-center justify-center">
            <motion.h1 animate={{ opacity: [0.5, 1, 0.5] }} transition={{ repeat: Infinity }} className="text-4xl font-extrabold text-white tracking-tighter">BUILDING EMPIRE...</motion.h1>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Header - Upgraded Figma style */}
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-6 glass-card mt-4 mx-6 rounded-full">
        <div className="flex items-center gap-2">
          <Dumbbell className="w-8 h-8 text-white" />
          <h1 className="text-2xl font-extrabold text-white tracking-tighter text-glow">IceBug <span className="text-gray-400 font-medium">Estate</span></h1>
        </div>
        <nav className="flex items-center gap-6">
          {["Home", "About", "Contact"].map((link) => (
            <a key={link} href="#" className="text-white text-sm font-medium hover:text-gray-400 transition-colors tracking-tight">{link}</a>
          ))}
          <motion.button onClick={() => setShowPassForm(true)} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-white text-black px-6 py-2.5 rounded-full text-sm font-bold flex items-center gap-2">
            Claim Pass <MoveRight className="w-4 h-4" />
          </motion.button>
        </nav>
      </header>

      {/* Hero Section - Parallax video background */}
      <section className="relative h-screen flex items-center justify-center">
        <motion.div style={{ opacity: heroVideoOpacity }} className="absolute inset-0 z-0">
          <video autoPlay loop muted className="w-full h-full object-cover">
            <source src="/gym-hero.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/60" />
        </motion.div>
        
        <motion.div style={{ y: heroTextY }} className="relative z-10 text-center px-6">
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 1 }} className="border border-white/10 rounded-full px-4 py-1 inline-flex items-center gap-2 mb-6 bg-white/5 backdrop-blur-sm">
            <Zap className="w-4 h-4 text-white" />
            <span className="text-sm font-semibold tracking-tight text-white/90">Beyond God Mode V6: Digital Empire</span>
          </motion.div>
          
          <motion.h2 initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.8, duration: 1 }} className="text-7xl md:text-9xl font-extrabold text-white tracking-tighter leading-none text-glow">
            Fitness care <br /> for your body <br /> & mind
          </motion.h2>

          <motion.button onClick={() => setShowPassForm(true)} initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2 }} whileHover={{ scale: 1.05 }} className="bg-white/10 backdrop-blur-md border border-white/20 text-white mt-12 px-10 py-5 rounded-full text-lg font-bold flex items-center gap-3 mx-auto">
            Start Your Journey <MoveRight className="w-6 h-6" />
          </motion.button>
        </motion.div>
      </section>

      {/* About Section - Modernized Layout */}
      <section className="relative z-10 px-6 py-24 bg-black">
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-4xl mx-auto mb-16">
          <div className="border border-white/10 rounded-full px-4 py-1 inline-block mb-4">
            <span className="text-sm font-semibold text-gray-400">About Us</span>
          </div>
          <h3 className="text-6xl font-extrabold text-white tracking-tighter mb-4 leading-none">Your Space to <span className="italic">Move, Improve,</span> and <span className="italic text-gray-500">Thrive</span></h3>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">Kanpur’s first private fitness boutique architecture designed for those who demand elite transformations.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div key={stat.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }} className="glass-card p-8 rounded-3xl text-center">
              <h4 className="text-gray-400 text-sm font-semibold tracking-wide uppercase mb-2">{stat.title}</h4>
              <p className="text-5xl font-extrabold tracking-tighter text-glow">{stat.value}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Services Section - Modern Grid */}
      <section className="px-6 py-24 bg-black/80">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
          {corePillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <motion.div key={pillar.name} initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.2 }} className="flex gap-6 items-start glass-card p-8 rounded-3xl">
                <Icon className="w-16 h-16 text-white p-4 bg-white/5 rounded-full" />
                <div>
                  <h4 className="text-2xl font-bold tracking-tight text-white mb-2">{pillar.name} Architecture</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">Integrated, evidence-based systems to re-engineer your core physiology and mindset.</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Testimonial - Premium Quote style */}
      <section className="px-6 py-24 bg-black flex items-center justify-center">
        <motion.div initial={{ scale: 0.9, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} className="glass-card p-12 rounded-3xl max-w-4xl flex items-center gap-10">
          <Image src="/user1.jpg" alt="Client" width={150} height={150} className="rounded-full border-4 border-white/10" />
          <div>
            <Quote className="w-12 h-12 text-white opacity-20 mb-4" />
            <p className="text-3xl font-extrabold text-white tracking-tighter leading-tight mb-6">"Elite Architecture is the only way to transform. Period. Beyond God Mode."</p>
            <p className="text-white font-bold">Manny Pacquiao</p>
            <p className="text-gray-400 text-sm">Professional Athlete</p>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 px-6 py-16 bg-[#050505] border-t border-white/5 mt-16 text-center">
        <Dumbbell className="w-12 h-12 text-white mx-auto mb-6" />
        <p className="text-2xl font-extrabold tracking-tighter text-glow mb-4">Find the perfect fitness journey for <br /> you and unlock <span className="text-gray-500">your strongest self with us!</span></p>
        <p className="text-gray-500 text-sm mt-12">&copy; 2026 IceBug Estate Elite Fitness Agency. Lucknow-Kanpur Zone.</p>
      </footer>
    </div>
  );
}
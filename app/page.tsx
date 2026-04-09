"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { MoveRight, Zap, Dumbbell, Brain, FlaskConical, Quote, CheckCircle2 } from "lucide-react";

export default function Home() {
  const [showPass, setShowPass] = useState(false);

  return (
    <main className="bg-black text-white selection:bg-white selection:text-black">
      
      {/* 🧭 PREMIUM NAV (Photo Style) */}
      <nav className="fixed top-0 w-full z-50 flex justify-between items-center px-6 md:px-12 py-8 bg-gradient-to-b from-black/80 to-transparent">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
            <Dumbbell className="text-black w-6 h-6" />
          </div>
          <span className="text-2xl font-[900] tracking-tighter uppercase italic">ICEBUG ESTATE</span>
        </div>
        <div className="hidden md:flex gap-10 items-center text-sm font-bold uppercase tracking-widest">
          <a href="#" className="hover:text-gray-400 transition">Home</a>
          <a href="#" className="hover:text-gray-400 transition">About</a>
          <a href="#" className="hover:text-gray-400 transition">Contact</a>
          <button onClick={() => setShowPass(true)} className="bg-white text-black px-8 py-3 rounded-full hover:invert transition duration-300">
            CLAIM PASS
          </button>
        </div>
      </nav>

      {/* 🎥 HERO SECTION (Exact FitEon Layout) */}
      <section className="relative h-screen w-full flex flex-col justify-center items-center overflow-hidden">
        <video autoPlay loop muted playsInline className="absolute w-full h-full object-cover z-0 brightness-[0.4]">
          <source src="/gym-hero.mp4" type="video/mp4" />
        </video>
        
        <div className="relative z-10 text-center px-4">
          <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="mb-6 inline-block px-4 py-1 border border-white/20 rounded-full text-[10px] tracking-[0.3em] uppercase bg-white/5 backdrop-blur-md">
            EST. 2026 • KANPUR • ELITE PERFORMANCE
          </motion.div>
          
          <motion.h1 initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }} className="text-[12vw] md:text-[8vw] font-[950] leading-[0.85] tracking-tighter uppercase italic mb-8">
            FITNESS CARE <br /> <span className="text-outline italic">FOR YOUR</span> <br /> BODY & MIND
          </motion.h1>

          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="text-gray-400 max-w-xl mx-auto mb-10 text-lg md:text-xl font-medium tracking-tight">
            Kanpur's exclusive boutique gym architecture designed for high-performance individuals.
          </motion.p>

          <motion.button whileHover={{ scale: 1.05 }} className="group relative px-12 py-6 bg-white text-black font-black text-xl rounded-full overflow-hidden transition-all">
            <span className="relative z-10 flex items-center gap-3 uppercase">START TRANSFORMATION <MoveRight /></span>
          </motion.button>
        </div>
      </section>

      {/* 📊 STATS (As per photo 1000254402) */}
      <section className="grid grid-cols-2 md:grid-cols-4 border-y border-white/10 bg-black">
        {[
          { label: "Transformation", val: "93%" },
          { label: "Elite Coaching", val: "Expert" },
          { label: "Nutrition", val: "Elite" },
          { label: "Success Rate", val: "97%" }
        ].map((s, i) => (
          <div key={i} className="p-10 border-r border-white/10 flex flex-col items-center justify-center">
            <span className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-2">{s.label}</span>
            <span className="text-4xl md:text-5xl font-black italic tracking-tighter">{s.val}</span>
          </div>
        ))}
      </section>

      {/* 🧬 THE PILLARS (Photo 1000254404 Style) */}
      <section className="py-32 px-6 md:px-24">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-10">
          <h2 className="text-6xl md:text-8xl font-black tracking-tighter uppercase italic leading-none">
            CORE <br /> <span className="text-gray-600">ARCHITECTURE</span>
          </h2>
          <p className="text-gray-400 max-w-sm text-right text-lg">
            We don't just train; we re-engineer your physiology through our three-pillar system.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
          {[
            { title: "MINDSET", icon: Brain, desc: "Building the psychological resilience of a champion." },
            { title: "METABOLIC", icon: FlaskConical, desc: "Science-backed nutrition and recovery architecture." },
            { title: "MUSCLE", icon: Dumbbell, desc: "High-intensity hypertrophy and strength engineering." }
          ].map((p, i) => (
            <div key={i} className="glass p-16 flex flex-col items-center text-center group hover:bg-white hover:text-black transition-all duration-500 cursor-pointer">
              <p.icon className="w-16 h-16 mb-8 stroke-[1]" />
              <h3 className="text-3xl font-black tracking-tighter italic mb-4 uppercase">{p.title}</h3>
              <p className="text-sm opacity-60 font-medium leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 🏆 TESTIMONIAL (Photo Style) */}
      <section className="py-32 bg-white text-black px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="w-64 h-64 bg-gray-200 rounded-2xl rotate-3 overflow-hidden shadow-2xl">
             <img src="/user1.jpg" alt="Client" className="w-full h-full object-cover" />
          </div>
          <div className="flex-1">
            <Quote className="w-20 h-20 opacity-10 mb-6" />
            <p className="text-4xl md:text-6xl font-black tracking-tighter italic leading-[0.9] mb-8 uppercase">
              "This is not a gym. <br /> It's a lab for <br /> <span className="text-gray-400">greatness."</span>
            </p>
            <div>
              <p className="text-2xl font-black italic uppercase">Manny Pacquiao</p>
              <p className="font-bold text-gray-500 uppercase tracking-widest">Professional Athlete</p>
            </div>
          </div>
        </div>
      </section>

      {/* 🏁 FOOTER */}
      <footer className="py-20 px-6 text-center border-t border-white/10">
        <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase italic mb-10">
          UNLOCK YOUR <br /> STRONGEST SELF
        </h2>
        <div className="flex justify-center gap-4 mb-12">
            <button onClick={() => setShowPass(true)} className="bg-white text-black px-12 py-5 rounded-full font-black text-lg hover:scale-105 transition">GET TRIAL PASS</button>
        </div>
        <p className="text-gray-600 text-xs font-bold tracking-[0.5em] uppercase">© 2026 ICEBUG ESTATE • LUCKNOW-KANPUR ZONE</p>
      </footer>

    </main>
  );
}
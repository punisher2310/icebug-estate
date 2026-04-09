"use client";
import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, useSpring, AnimatePresence, useMotionValue } from "framer-motion";
import { 
  MoveRight, CheckCircle2, Mail, ArrowUpRight, MapPin, 
  Clock, Zap, Star, Menu, X, Phone, Quote, ShieldCheck, Trophy, 
  FlaskConical, Dna, Dumbbell, HeartPulse, Brain, Calculator
} from "lucide-react";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = useState(false);
  const [showPassForm, setShowPassForm] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [sliderPos, setSliderPos] = useState(50);
  const [formName, setFormName] = useState("");
  const [formPhone, setFormPhone] = useState("");

  // Liquid Cursor Logic
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => { 
    setIsMounted(true); 
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const { scrollYProgress } = useScroll({
    target: isMounted ? containerRef : undefined,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 40, damping: 15 });
  const heroScale = useTransform(smoothProgress, [0, 0.1], [1, 1.4]);
  const heroOpacity = useTransform(smoothProgress, [0, 0.1], [1, 0]);

  const handlePassClaim = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hi Utkarsh! I'm ${formName}. I want to claim my trial pass. Contact: ${formPhone}`;
    window.open(`https://wa.me/91999000XXXX?text=${encodeURIComponent(message)}`, '_blank');
    setShowPassForm(false);
  };

  if (!isMounted) return <div className="bg-[#020203] h-screen w-full flex items-center justify-center text-purple-600 font-black italic tracking-[1em] uppercase animate-pulse">DNA LOADING...</div>;

  return (
    <main ref={containerRef} className="bg-[#020203] text-white overflow-x-hidden font-syne relative selection:bg-purple-600 cursor-none">
      
      {/* 1. LIQUID CURSOR & LIVE TICKER */}
      <motion.div style={{ x: mouseX, y: mouseY, translateX: "-50%", translateY: "-50%" }} className="fixed top-0 left-0 w-8 h-8 bg-purple-600 rounded-full pointer-events-none z-[1000] mix-blend-difference hidden md:block" />
      <div className="fixed bottom-8 left-8 z-[500] hidden md:block">
        <motion.div initial={{ y: 100 }} animate={{ y: 0 }} className="bg-white/5 backdrop-blur-3xl border border-purple-500/20 p-4 rounded-2xl flex items-center gap-4">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-ping" />
          <p className="text-[9px] font-black uppercase tracking-widest italic"><span className="text-purple-500">LIVE:</span> 14 Elite Members in the Forge</p>
        </motion.div>
      </div>

      {/* 2. TOP LEFT SIDEBAR */}
      <div className="fixed top-12 left-12 z-[500]">
        <button onClick={() => setIsSidebarOpen(true)} className="p-4 bg-purple-600 rounded-full shadow-[0_0_30px_rgba(147,51,234,0.5)] hover:scale-110 transition-transform"><Menu size={24} /></button>
      </div>
      <AnimatePresence>
        {isSidebarOpen && (
          <motion.div initial={{ x: "-100%" }} animate={{ x: 0 }} exit={{ x: "-100%" }} transition={{ type: "spring", damping: 25 }} className="fixed inset-0 z-[600] bg-black/98 backdrop-blur-3xl w-full md:w-[450px] border-r border-white/10 p-12 overflow-y-auto">
            <button onClick={() => setIsSidebarOpen(false)} className="absolute top-12 right-12 p-3 hover:bg-white/10 rounded-full"><X size={32}/></button>
            <div className="mt-20 space-y-10">
              <h2 className="text-purple-600 font-black text-[10px] tracking-[0.8em] uppercase">Estate Index</h2>
              {["Iron Forge", "Biology Lab", "Member Heatmap", "Vault Pricing", "Lab Logs"].map((item) => (
                <h3 key={item} className="text-4xl font-black italic hover:text-purple-600 transition-all uppercase tracking-tighter cursor-pointer">{item}</h3>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 3. HERO (THE HOOK) */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden sticky top-0">
        <motion.div style={{ scale: heroScale, opacity: heroOpacity }} className="absolute inset-0">
          <video autoPlay loop muted playsInline className="w-full h-full object-cover opacity-60 brightness-50">
             <source src="/gym-video.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-[#020203] via-transparent to-[#020203]" />
        </motion.div>
        <motion.div style={{ opacity: heroOpacity }} className="relative z-10 text-center px-6">
           <h1 className="text-[18vw] md:text-[14vw] font-black italic tracking-tighter leading-none uppercase mb-6 drop-shadow-2xl">ICEBUG</h1>
           <p className="text-white/20 font-black tracking-[1.5em] text-[10px] uppercase mb-16 underline decoration-purple-600 underline-offset-8">Bio-Performance Sanctuary</p>
           <button onClick={() => setShowPassForm(true)} className="bg-purple-600 px-16 py-6 rounded-full font-black text-xs uppercase tracking-[0.4em] shadow-3xl hover:bg-white hover:text-black transition-all">Get Trial Access</button>
        </motion.div>
      </section>

      {/* 4. TRUST GRID */}
      <section className="relative z-10 bg-[#020203] py-40 border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="col-span-1 md:col-span-2 space-y-12 bg-white/5 p-16 rounded-[4rem] border border-white/5 hover:border-purple-600/30 transition-all">
              <h2 className="text-7xl font-black italic uppercase leading-none tracking-tighter">WHY TRUST <br/>THE ESTATE?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {[
                  { t: "Biological Scholar", d: "Designed by a B.Sc Biology scholar for precise muscle hypertrophy." },
                  { t: "US-Tech DNA", d: "6 months of US Tech Support excellence applied to service logistics." },
                  { t: "Facial Vault", d: "Authorized-only biometric access 24/7." },
                  { t: "Hammer Strength", d: "US-imported precision iron for elite biomechanics." }
                ].map((item, i) => (
                  <div key={i} className="space-y-4"><h4 className="text-xl font-black italic uppercase text-purple-600">{item.t}</h4><p className="text-white/40 text-sm italic">{item.d}</p></div>
                ))}
              </div>
            </div>
            <div className="bg-purple-600 p-12 rounded-[4rem] flex flex-col justify-between relative overflow-hidden group">
               <ShieldCheck className="absolute -right-10 -bottom-10 opacity-10 w-64 h-64 group-hover:scale-110 transition-transform" />
               <h3 className="text-5xl font-black italic uppercase text-black leading-none tracking-tight">The <br/> Expert <br/> Faculty</h3>
               <p className="text-black font-bold italic opacity-80 text-xl leading-relaxed">ACE/NASM certified trainers with anatomical expertise.</p>
               <button className="flex items-center gap-4 text-[10px] font-black uppercase tracking-widest text-black border-b border-black w-fit pb-2">Verify Certs <ArrowUpRight size={16}/></button>
            </div>
          </div>
        </div>
      </section>

      {/* 5. BIO-CALCULATOR (ACTIVE CURIOSITY) */}
      <section className="relative z-10 py-40 bg-[#050507]">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
           <div>
              <h2 className="text-7xl font-black italic uppercase mb-8 leading-none tracking-tighter">POTENTIAL <span className="text-purple-600">CALC</span></h2>
              <div className="bg-white/5 p-12 rounded-[3.5rem] border border-white/10 space-y-6">
                 <input type="number" placeholder="WEIGHT (KG)" className="w-full bg-black/50 border border-white/10 p-6 rounded-2xl outline-none focus:border-purple-600 font-bold tracking-widest text-[10px] uppercase" />
                 <button className="w-full bg-purple-600 py-6 rounded-2xl font-black uppercase tracking-widest text-xs">Analyze DNA</button>
              </div>
           </div>
           <div className="space-y-6">
              {[ { l: "Biological Potential", v: "Authorized" }, { l: "Recovery Rate", v: "High" }].map((item, i) => (
                <div key={i} className="p-8 bg-white/5 border border-white/5 rounded-3xl flex justify-between items-center">
                   <p className="text-[10px] uppercase font-bold opacity-30 tracking-widest">{item.l}</p>
                   <p className="text-2xl font-black italic text-purple-500 uppercase">{item.v}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* 6. BEFORE/AFTER SLIDER */}
      <section className="relative z-10 py-40 bg-[#020203]">
        <div className="container mx-auto px-6 max-w-4xl relative h-[600px] rounded-[4rem] overflow-hidden border border-white/10">
           <div className="absolute inset-0 grayscale scale-110"><img src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1000" className="w-full h-full object-cover" /></div>
           <div className="absolute inset-0 transition-none" style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}>
              <img src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1000" className="w-full h-full object-cover" />
           </div>
           <input type="range" min="0" max="100" value={sliderPos} onChange={(e) => setSliderPos(Number(e.target.value))} className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-50" />
           <div className="absolute h-full w-1 bg-purple-600 z-10" style={{ left: `${sliderPos}%` }}><div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-purple-600 rounded-full border-2 border-black flex items-center justify-center"><MoveRight size={14}/></div></div>
        </div>
      </section>

      {/* 7. OWNER AUTHORITY (UTKARSH TIWARI) */}
      <section className="relative z-10 py-40 bg-[#08080a]">
        <div className="container mx-auto px-6">
           <div className="flex flex-col md:flex-row items-center gap-20 bg-white/5 p-12 md:p-24 rounded-[4rem] border border-white/5">
              <div className="w-full md:w-1/3 relative">
                 <img src="/trainer.jpg" className="w-full aspect-square object-cover rounded-[3rem] border-4 border-purple-600 grayscale hover:grayscale-0 transition-all duration-1000" alt="Utkarsh Tiwari"/>
              </div>
              <div className="w-full md:w-2/3">
                 <h2 className="text-7xl font-black italic uppercase mb-8 tracking-tighter">UTKARSH TIWARI</h2>
                 <p className="text-2xl italic text-white/60 leading-relaxed mb-10">"Science is the only shortcut to high performance. We engineer results through biological precision."</p>
                 <div className="flex gap-12"><div><h5 className="text-4xl font-black italic text-purple-600 tracking-tighter">B.Sc</h5><p className="text-[10px] opacity-30 uppercase tracking-[0.4em] font-black">Biology</p></div><div><h5 className="text-4xl font-black italic text-purple-600 tracking-tighter">600+</h5><p className="text-[10px] opacity-30 uppercase tracking-[0.4em] font-black">Successes</p></div></div>
              </div>
           </div>
        </div>
      </section>

      {/* 8. ELITE HEATMAP (KANPUR) */}
      <section className="relative z-10 py-40 bg-[#050507]">
        <div className="container mx-auto px-6">
           <div className="bg-white/5 border border-white/5 p-16 rounded-[4rem] flex flex-col md:flex-row justify-between items-center relative group overflow-hidden">
              <div className="w-full md:w-1/2 relative z-10">
                 <h2 className="text-7xl font-black italic uppercase mb-8 leading-none tracking-tighter uppercase">ELITE <span className="text-purple-600">HEATMAP</span></h2>
                 <div className="space-y-6">
                    {["Civil Lines", "Swaroop Nagar", "Azad Nagar", "Kidwai Nagar"].map((hub) => (
                      <div key={hub} className="flex items-center gap-4 text-xl font-bold italic opacity-40 hover:opacity-100 transition-opacity"><div className="w-3 h-3 bg-purple-600 rounded-full animate-pulse" /> {hub} // Active Profile</div>
                    ))}
                 </div>
              </div>
              <div className="w-[300px] h-[300px] bg-zinc-900 rounded-full border border-purple-600/20 flex flex-col items-center justify-center p-10 text-center"><MapPin className="text-purple-600 mb-6" size={50} /><h4 className="text-lg font-black italic uppercase">Sanctuary Hub</h4></div>
           </div>
        </div>
      </section>

      {/* 9. LAB LOGS (BLOG SECTION) */}
      <section className="relative z-10 py-40 container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        {[
          { t: "Hypertrophy Protocol", d: "Science: Training to 0-2 RIR is the only biological signal for growth.", icon: <Dumbbell/> },
          { t: "Sauna Vault Reset", d: "Science: Post-iron infrared sessions reset the CNS 40% faster.", icon: <HeartPulse/> },
          { t: "Neural Baseline", d: "Science: Stabilize insulin 2 hours prior to training for peak adrenaline.", icon: <Brain/> }
        ].map((blog, i) => (
          <div key={i} className="p-12 bg-white/5 rounded-[4rem] border border-white/10 hover:border-purple-600/30 transition-all cursor-pointer">
             <div className="text-purple-600 mb-8">{blog.icon}</div>
             <h3 className="text-3xl font-black italic uppercase mb-6 leading-tight uppercase">{blog.t}</h3>
             <p className="text-white/30 italic text-sm leading-relaxed mb-8">{blog.d}</p>
             <button className="text-[10px] font-black uppercase tracking-widest text-purple-600 flex items-center gap-2">Lab Report <ArrowUpRight size={14}/></button>
          </div>
        ))}
      </section>

      {/* 10. MOVING REVIEWS */}
      <section className="relative z-10 py-24 bg-[#050507] overflow-hidden border-y border-white/5">
        <div className="flex gap-12 animate-infinite-scroll w-fit">
          {[1,2,3,4,5,6].map((i) => (
            <div key={i} className="w-[400px] bg-white/5 p-12 border border-white/5 rounded-[3rem] shrink-0">
               <div className="flex text-purple-500 mb-6 gap-2">{[1,2,3,4,5].map(s => <Star key={s} size={14} fill="currentColor"/>)}</div>
               <Quote className="text-purple-600 mb-6" size={40}/>
               <p className="text-xl italic opacity-70 mb-8 leading-relaxed">"The estate is a Masterclass in Biology. Utkarsh's guidance is incomparable."</p>
               <p className="text-[10px] font-black uppercase tracking-widest opacity-40 italic">Member #00{i}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 11. THE VAULT PRICING */}
      <section className="relative z-10 py-40 container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        {[
          { n: "Silver Vault", p: "2,500", f: ["Forge Access", "Biometric entry"] },
          { n: "Estate Gold", p: "4,500", f: ["24/7 Access", "Sauna Hub", "Neon Zumba"] },
          { n: "Elite Private", p: "9,999", f: ["Private Suite", "Expert Coach", "Recovery Spa"] }
        ].map((plan, i) => (
          <div key={i} className={`p-14 rounded-[4rem] border border-white/10 flex flex-col justify-between transition-all ${i === 1 ? 'bg-purple-600 border-none scale-105 shadow-2xl' : 'bg-white/5'}`}>
            <div>
              <h3 className="text-4xl font-black italic uppercase mb-4 tracking-tighter">{plan.n}</h3>
              <div className="text-5xl font-black italic mb-12 uppercase tracking-tighter">₹{plan.p}<span className="text-xs opacity-40 uppercase not-italic">/mo</span></div>
              <ul className="space-y-6 mb-16">
                 {plan.f.map(f => <li key={f} className="flex items-center gap-4 text-[11px] font-black italic opacity-70 uppercase tracking-tight"><CheckCircle2 size={16}/> {f}</li>)}
              </ul>
            </div>
            <button onClick={() => setShowPassForm(true)} className={`w-full py-6 rounded-full font-black text-[10px] uppercase tracking-widest ${i === 1 ? 'bg-black text-white hover:bg-white hover:text-black' : 'bg-purple-600 text-white hover:bg-white hover:text-black'} transition-all`}>Select Tier</button>
          </div>
        ))}
      </section>

      {/* 12. FOOTER (ZERO BUILD ERROR) */}
      <footer className="relative z-10 bg-black pt-40 pb-16 border-t border-white/5">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-24">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-5xl font-black italic tracking-tighter mb-10 uppercase">ICEBUG<span className="text-purple-600">.</span>ESTATE</h2>
            <p className="text-white/20 italic text-xl leading-relaxed mb-12 max-w-sm">Kanpur's private performance sanctuary for the elite.</p>
            <div className="flex gap-10">
               {/* RAW SVG INSTAGRAM */}
               <a href="#" className="opacity-40 hover:opacity-100 hover:text-purple-600 transition-all">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
               </a>
               <a href="#" className="opacity-40 hover:opacity-100 hover:text-purple-600 transition-all"><Mail size={32}/></a>
            </div>
          </div>
          <div>
            <h4 className="text-purple-600 font-black text-[10px] tracking-[0.5em] mb-12 italic uppercase">Coordinate</h4>
            <ul className="space-y-8 text-xs font-bold italic opacity-40 uppercase">
              <li className="flex items-center gap-4"><MapPin size={20} className="text-purple-600"/> Civil Lines, Kanpur</li>
              <li className="flex items-center gap-4">+91 999 000 XXXX</li>
            </ul>
          </div>
          <div>
            <h4 className="text-purple-600 font-black text-[10px] tracking-[0.5em] mb-12 italic uppercase">Legal</h4>
            <ul className="space-y-8 text-[11px] font-black italic opacity-20 uppercase">
              <li>Privacy Vault</li>
              <li>Terms of Access</li>
            </ul>
          </div>
        </div>
        <div className="pt-20 border-t border-white/10 mt-24 text-[10px] font-black uppercase tracking-[0.5em] opacity-10 text-center">© 2026 ICEBUG STUDIOS // DESIGNED BY UTKARSH TIWARI</div>
      </footer>

      {/* LEAD CAPTURE POPUP */}
      <AnimatePresence>
        {showPassForm && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[600] flex items-center justify-center p-6 bg-black/95 backdrop-blur-2xl">
            <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} className="bg-[#050507] border border-purple-600/30 p-12 md:p-20 rounded-[4rem] max-w-xl w-full relative text-center">
              <button onClick={() => setShowPassForm(false)} className="absolute top-10 right-10 text-white/30 hover:text-white transition-colors font-black">CLOSE</button>
              <h2 className="text-5xl font-black italic uppercase mb-10 tracking-tighter uppercase leading-none">CLAIM <br/><span className="text-purple-600">PROTOCOL PASS</span></h2>
              <form className="space-y-6" onSubmit={handlePassClaim}>
                <input required value={formName} onChange={(e) => setFormName(e.target.value)} type="text" placeholder="NAME" className="w-full bg-white/5 border border-white/10 p-6 rounded-2xl outline-none focus:border-purple-600 transition-all font-bold tracking-widest text-[10px] uppercase" />
                <input required value={formPhone} onChange={(e) => setFormPhone(e.target.value)} type="tel" placeholder="WHATSAPP NUMBER" className="w-full bg-white/5 border border-white/10 p-6 rounded-2xl outline-none focus:border-purple-600 transition-all font-bold tracking-widest text-[10px] uppercase" />
                <button type="submit" className="w-full bg-purple-600 py-7 rounded-2xl font-black uppercase tracking-[0.5em] text-xs">Initialize Pass</button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx global>{`
        body { cursor: none; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-thumb { background: #9333ea; border-radius: 10px; }
        @keyframes scroll { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        .animate-infinite-scroll { display: flex; animation: scroll 40s linear infinite; }
      `}</style>
    </main>
  );
}
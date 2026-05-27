'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Terminal, Github, Linkedin, Mail, Cpu, HardDrive, Wifi, Activity } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
  // Terminal Typewriter Logic
  const [text, setText] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [delta, setDelta] = useState(90);

  const [typedHeadline, setTypedHeadline] = useState('');
  const [headlineDone, setHeadlineDone] = useState(false);


  const phrases = [
    "Architecting High-Performance Ecosystems",
    "Integrating Enterprise LLMs",
  ];


  const headlineFull = "I'm a Full Stack Software Developer";



  useEffect(() => {
    const ticker = setInterval(() => {
      if (!headlineDone) return;

      const fullText = phrases[phraseIndex];
      const nextText = isDeleting
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1);

      setText(nextText);

      if (isDeleting) {
        setDelta(50);
      }

      if (!isDeleting && nextText === fullText) {
        setIsDeleting(true);
        setDelta(2500); // Hold phrase
      } else if (isDeleting && nextText === '') {
        setIsDeleting(false);
        setPhraseIndex((prev) => (prev + 1) % phrases.length);
        setDelta(100);
      }
    }, delta);

    return () => clearInterval(ticker);
  }, [headlineDone, phraseIndex, isDeleting, text.length, delta]);



  useEffect(() => {
    if (headlineDone) return;
    let raf: number;
    const start = performance.now();
    const stepMs = 24;

    const loop = (now: number) => {
      const elapsed = now - start;
      const nextLen = Math.min(headlineFull.length, Math.floor(elapsed / stepMs));
      const next = headlineFull.slice(0, nextLen);
      setTypedHeadline(next);

      if (nextLen >= headlineFull.length) {
        setHeadlineDone(true);
        return;
      }
      raf = requestAnimationFrame(loop);
    };

    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, [headlineDone, headlineFull]);





  // Live Stats Logic (Dev M9a7eb killer feature)
  const [cpu, setCpu] = useState(12.4);
  const [memory, setMemory] = useState(64.2);
  const [latency, setLatency] = useState(24);

  useEffect(() => {
    const statsInterval = setInterval(() => {
      setCpu(prev => {
        const next = prev + (Math.random() * 4 - 2);
        return +(Math.max(5, Math.min(45, next))).toFixed(1);
      });
      setMemory(prev => {
        const next = prev + (Math.random() * 1 - 0.5);
        return +(Math.max(50, Math.min(85, next))).toFixed(1);
      });
      setLatency(prev => {
        const next = prev + Math.floor(Math.random() * 6 - 3);
        return Math.max(10, Math.min(50, next));
      });
    }, 3000);

    return () => clearInterval(statsInterval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden transition-colors duration-500 bg-bg-dark">

      {/* Deep Space Background Grids */}
      <div className="absolute inset-0 bg-cyber-grid opacity-25 pointer-events-none z-0" />
      
      {/* Dynamic Glowing Radial Fog */}
      <div className="absolute top-1/4 -left-64 w-[600px] h-[600px] bg-neon-orange/10 dark:bg-neon-orange/10 rounded-full mix-blend-screen filter blur-[130px] animate-pulse-slow pointer-events-none" />
      <div className="absolute bottom-1/4 -right-64 w-[600px] h-[600px] bg-neon-violet/10 dark:bg-neon-violet/15 rounded-full mix-blend-screen filter blur-[150px] animate-pulse-slow pointer-events-none" style={{ animationDelay: '4s' }} />
      <div className="absolute top-1/2 left-1/3 w-[300px] h-[300px] bg-neon-amber/5 rounded-full mix-blend-screen filter blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Headline and manifesto */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 flex flex-col items-start"
          >
           
            
            <div className="flex items-start gap-5">
              <div className="flex-1">
                <h1 className="text-5xl md:text-7xl font-display font-black leading-[1.05] mb-4 text-text-primary uppercase tracking-tight">
                  Nadhem <br />
                  <span className="text-gradient-cyber">Soumri</span>
                </h1>

                <h2 className="text-2xl md:text-3xl font-display font-black text-text-primary tracking-tight">
                  <span className="text-gradient-cyber">{typedHeadline}</span>
                  <span className="inline-block w-[2px] h-7 md:h-8 ml-1 align-middle bg-neon-orange/90 animate-pulse" aria-hidden />
                </h2>
              </div>

              {/* Smart Avatar Display (glass + neon ring) */}
              <div className="relative w-28 h-28 md:w-36 md:h-36 flex-shrink-0">
                <div className="absolute inset-0 rounded-full bg-neon-orange/10 blur-[18px] opacity-60 animate-pulse-slow" />
                <div className="absolute -inset-3 rounded-full border border-neon-orange/30 shadow-[0_0_30px_var(--color-neon-orange)] opacity-70" />

                <div className="absolute inset-0 rounded-full glass-card border-neon-violet/30 border-2 p-[6px]">
                  <div className="relative w-full h-full rounded-full overflow-hidden">
                    <img
                      src="/images/nadhem.jpg"
                      alt="Nadhem Soumri"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-neon-violet/15 via-transparent to-neon-orange/10" />
                  </div>
                </div>

                <div className="absolute -bottom-2 -right-2 w-6 h-6 rounded-full bg-neon-amber/20 border border-neon-amber/40 shadow-[0_0_20px_var(--color-glow)]" />
              </div>
            </div>

            
            {/* Terminal typewriter area */}
            <div className="h-16 md:h-12 w-full mb-8">
              <h2 className="text-lg md:text-2xl text-text-secondary font-semibold flex items-center gap-2 font-mono">
                <Terminal className="text-neon-violet w-6 h-6 flex-shrink-0" />
                <span>
                  &gt; <span className="text-text-primary">{text}</span>
                  <span className="animate-pulse text-neon-orange font-black">|</span>
                </span>
              </h2>
            </div>
            
            <p className="text-lg text-text-secondary mb-10 max-w-xl leading-relaxed font-light border-l-2 border-neon-orange/50 pl-4">
              Architecting high-performance digital ecosystems, enterprise AI tools, and robust backend integrations. I engineer clean, secure, N-tier web structures.
            </p>
            
            <div className="flex flex-wrap items-center gap-6">
              <Link href="#projects" className="btn-cyber px-8 py-4 text-base font-mono tracking-wider">
                [ INIT_PROJECTS ] <ArrowRight className="inline-block ml-2 w-5 h-5" />
              </Link>
              
              <div className="flex items-center gap-3">
                <Link href="https://github.com/nadhemDev" target="_blank" className="p-3.5 rounded-xl bg-white/5 dark:bg-black/30 border border-border-dark text-text-secondary hover:border-neon-orange hover:text-neon-orange hover:shadow-[0_0_15px_var(--color-glow)] transition-all">
                  <Github className="w-5 h-5" />
                </Link>
                <Link href="https://www.linkedin.com/in/nadhem-soumri/" target="_blank" className="p-3.5 rounded-xl bg-white/5 dark:bg-black/30 border border-border-dark text-text-secondary hover:border-neon-amber hover:text-neon-amber hover:shadow-[0_0_15px_var(--color-glow)] transition-all">
                  <Linkedin className="w-5 h-5" />
                </Link>
                <Link href="mailto:nadhemsoumri2@gmail.com" className="p-3.5 rounded-xl bg-white/5 dark:bg-black/30 border border-border-dark text-text-secondary hover:border-neon-violet hover:text-neon-violet hover:shadow-[0_0_15px_var(--color-glow)] transition-all">
                  <Mail className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </motion.div>
          
          {/* Cybernetic HUD & Floating Dev M9a7eb Terminal Dashboard */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative flex justify-center items-center w-full"
          >
            {/* Background Circular HUD rings */}
            <div className="absolute w-80 h-80 md:w-[420px] md:h-[420px] pointer-events-none z-0">
              <div className="absolute inset-0 rounded-full border border-border-dark border-l-neon-orange animate-spin-slow" style={{ animationDuration: '25s' }}></div>
              <div className="absolute -inset-4 rounded-full border border-border-dark border-r-neon-violet animate-spin-slow opacity-60" style={{ animationDuration: '35s', animationDirection: 'reverse' }}></div>
              <div className="absolute -inset-8 rounded-full border border-border-dark border-t-neon-amber opacity-40 animate-spin-slow" style={{ animationDuration: '45s' }}></div>
            </div>

            {/* Dev M9a7eb Floating Dashboard Container */}
            <div className="w-full max-w-sm glass-card p-0 relative overflow-hidden z-10 border-neon-violet/30 shadow-2xl animate-float-cyber">
              {/* Terminal Title Bar */}
              <div className="bg-white/10 dark:bg-black/40 border-b border-border-dark px-4 py-3 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-rose-500 block"></span>
                  <span className="w-3 h-3 rounded-full bg-amber-500 block"></span>
                  <span className="w-3 h-3 rounded-full bg-emerald-500 block"></span>
                </div>
                <div className="text-[10px] md:text-xs font-mono text-text-secondary tracking-widest uppercase font-bold flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5 text-neon-violet" />
                  <span>terminal // dev_m9a7eb</span>
                </div>
                <div className="w-10"></div>
              </div>

              {/* Terminal Content */}
              <div className="p-6 font-mono text-xs space-y-4 bg-white/20 dark:bg-zinc-950/80">
                {/* Live Uptime Section */}
                <div className="flex items-center justify-between pb-3 border-b border-border-dark">
                  <span className="text-text-secondary uppercase">system_uptime:</span>
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping"></span>
                    <span className="text-emerald-500 dark:text-emerald-400 font-bold">99.999%</span>
                  </div>
                </div>

                {/* Primary Stack */}
                <div className="flex items-center justify-between pb-3 border-b border-border-dark">
                  <span className="text-text-secondary uppercase">primary_stack:</span>
                  <span className="text-neon-orange font-bold">Next.js + Laravel</span>
                </div>

                {/* AI Tuning */}
                <div className="flex items-center justify-between pb-3 border-b border-border-dark">
                  <span className="text-text-secondary uppercase">ai_agents:</span>
                  <span className="text-neon-violet font-bold">OPTIMIZED</span>
                </div>

                {/* Real-time fluctuates */}
                <div className="grid grid-cols-3 gap-2 pt-2">
                  <div className="p-2.5 rounded-lg bg-white/10 dark:bg-black/30 border border-border-dark flex flex-col items-center">
                    <Activity className="w-4 h-4 text-neon-orange mb-1" />
                    <span className="text-[9px] text-text-secondary uppercase block mb-0.5">cpu_load</span>
                    <span className="text-[11px] text-text-primary font-bold">{cpu}%</span>
                  </div>
                  
                  <div className="p-2.5 rounded-lg bg-white/10 dark:bg-black/30 border border-border-dark flex flex-col items-center">
                    <HardDrive className="w-4 h-4 text-neon-violet mb-1" />
                    <span className="text-[9px] text-text-secondary uppercase block mb-0.5">ram_use</span>
                    <span className="text-[11px] text-text-primary font-bold">{memory}%</span>
                  </div>

                  <div className="p-2.5 rounded-lg bg-white/10 dark:bg-black/30 border border-border-dark flex flex-col items-center">
                    <Wifi className="w-4 h-4 text-neon-amber mb-1" />
                    <span className="text-[9px] text-text-secondary uppercase block mb-0.5">latency</span>
                    <span className="text-[11px] text-text-primary font-bold">{latency}ms</span>
                  </div>
                </div>

                {/* Shell Execution Command */}
                <div className="pt-2 text-text-secondary leading-normal flex items-start gap-1">
                  <span className="text-neon-amber font-bold">&gt;</span>
                  <span className="text-text-secondary">ready_for_deployment: true</span>
                </div>
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
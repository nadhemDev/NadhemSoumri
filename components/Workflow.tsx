'use client';

import { motion } from 'framer-motion';
import { Compass, Code2, Sparkles, Rocket, Hexagon, ArrowRight } from 'lucide-react';

const steps = [
  {
    num: "01",
    title: "Architecture & BDD",
    subtitle: "System Design",
    icon: <Compass className="w-6 h-6 text-neon-orange" />,
    details: [
      "Conception UML & Dictionnaire de données",
      "Robust N-tier backend topologies",
      "Relational & Document database schemas"
    ],
    tag: "SPEED: 250ms/arch",
    borderColor: "group-hover:border-neon-orange/40",
    glowColor: "rgba(255, 87, 34, 0.12)"
  },
  {
    num: "02",
    title: "High-Performance Dev",
    subtitle: "Code Forging",
    icon: <Code2 className="w-6 h-6 text-neon-violet" />,
    details: [
      "Rigorous TypeScript & Clean Code standards",
      "Ultra-secure, REST & GraphQL routes",
      "Predictable state management & reactivity"
    ],
    tag: "TPS: 2.5k/routes",
    borderColor: "group-hover:border-neon-violet/40",
    glowColor: "rgba(217, 70, 239, 0.12)"
  },
  {
    num: "03",
    title: "AI & Optimization",
    subtitle: "Ecosystem Tuning",
    icon: <Sparkles className="w-6 h-6 text-neon-amber" />,
    details: [
      "Advanced LLM & Prompt engineering integrations",
      "Vector embeddings & semantic queries",
      "Deep SQL indexing achieving 40% faster KPIs"
    ],
    tag: "LATENCY: -40% speed",
    borderColor: "group-hover:border-neon-amber/40",
    glowColor: "rgba(255, 152, 0, 0.12)"
  },
  {
    num: "04",
    title: "Bulletproof Deploy",
    subtitle: "Cloud Ignition",
    icon: <Rocket className="w-6 h-6 text-emerald-500" />,
    details: [
      "Dockerized container clustering",
      "CI/CD workflow orchestration",
      "Secure AWS server infrastructure"
    ],
    tag: "UPTIME: 99.999%",
    borderColor: "group-hover:border-emerald-500/40",
    glowColor: "rgba(16, 185, 129, 0.12)"
  }
];

export default function Workflow() {
  return (
    <section id="workflow" className="py-24 relative overflow-hidden bg-bg-dark border-t border-border-dark transition-colors duration-500">
      <div className="absolute inset-0 bg-cyber-grid opacity-15 pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-neon-orange/5 rounded-full filter blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-neon-violet/5 rounded-full filter blur-[150px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center gap-3 mb-4 text-neon-violet font-mono text-sm tracking-widest uppercase">
            <Hexagon className="w-4 h-4" /> 04 // Workflow Pipeline
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-black mb-4 uppercase tracking-tight text-text-primary">
            Processus de <span className="text-gradient-cyber">Travail</span>
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto font-light leading-relaxed">
            A high-end, sleek workflow pipeline showcasing how I deliver applications from concept to cloud production at extreme speeds.
          </p>
        </motion.div>

        {/* Speedway Interactive Pipeline */}
        <div className="relative">
          {/* Connecting Pipeline Line (Desktop) */}
          <div className="absolute top-36 left-0 right-0 h-0.5 bg-gradient-to-r from-neon-orange via-neon-violet to-emerald-500 hidden lg:block opacity-40 z-0">
            {/* Animated signal pulse */}
            <motion.div
              animate={{ left: ["0%", "100%"] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              className="absolute top-1/2 -translate-y-1/2 w-24 h-[3px] bg-white rounded-full shadow-[0_0_12px_#ffffff] z-10"
            />
          </div>

          <div className="grid lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="group flex flex-col items-center"
              >
                {/* Node Orb (Speedway connection node) */}
                <div className="relative mb-8 flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full bg-white/5 dark:bg-black/50 border-2 border-border-dark group-hover:border-text-primary flex items-center justify-center relative z-10 transition-all duration-500 shadow-xl group-hover:shadow-[0_0_25px_var(--color-glow)] bg-bg-dark">
                    <span className="text-2xl font-display font-black text-text-primary group-hover:text-neon-orange transition-colors">
                      {step.num}
                    </span>
                  </div>
                  {/* Outer breathing halo */}
                  <div className="absolute inset-[-10px] rounded-full border border-dashed border-border-dark group-hover:border-neon-violet group-hover:spin-slow animate-spin-slow opacity-0 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none" style={{ animationDuration: '40s' }} />
                </div>

                {/* Step Card */}
                <div className={`glass-card p-6 w-full flex-1 flex flex-col border border-border-dark transition-all duration-500 relative overflow-hidden text-center items-center ${step.borderColor}`}>
                  <div 
                    className="absolute -top-10 -right-10 w-24 h-24 rounded-full blur-[30px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ backgroundColor: step.glowColor }}
                  ></div>

                  {/* Speedway Metadata Badge */}
                  <span className="px-2.5 py-1 text-[9px] font-mono font-bold tracking-wider bg-white/10 dark:bg-black/80 text-text-secondary border border-border-dark rounded-md mb-4 self-center uppercase">
                    {step.tag}
                  </span>

                  {/* Icon */}
                  <div className="p-3 bg-white/5 dark:bg-black/40 border border-border-dark rounded-xl mb-4 group-hover:border-neon-violet/30 transition-colors">
                    {step.icon}
                  </div>

                  <h3 className="text-xl font-bold text-text-primary uppercase tracking-tight font-display mb-1 group-hover:text-text-primary transition-colors">
                    {step.title}
                  </h3>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-neon-orange font-bold mb-4 block">
                    {step.subtitle}
                  </span>

                  {/* List details */}
                  <ul className="text-xs text-text-secondary space-y-3 font-light leading-relaxed text-center w-full mt-auto">
                    {step.details.map((detail, idx) => (
                      <li key={idx} className="pb-2 border-b border-border-dark/30 last:border-0 last:pb-0">
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

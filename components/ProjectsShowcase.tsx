'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Layers, Hexagon, Eye, Server, RefreshCw, BarChart2 } from 'lucide-react';
import Link from 'next/link';

const projects = [
  {
    title: "Xcode Tracker (IA)",
    description: "Built for Segula Technologies / Stellantis. Full Laravel/React architecture for real-time DTC monitoring. Integrated OpenAI API for automated failure classification (30% analysis time reduction, 500+ req/day).",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    tags: ["Laravel", "React.js", "OpenAI API", "Real-time"],
    url: "https://xcodetracker.vercel.app/",
    type: "ENTERPRISE.AI",
    category: "AI & LLM",
    metrics: {
      "tps": "500+ req/day",
      "latency": "-30% speedup",
      "role": "Tech Lead"
    }
  },
  {
    title: "Bien Vie Assurance",
    description: "High-performance web platform tailored for premium insurance services with a flawless UX, SEO optimization, and clean architectural design.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800",
    tags: ["Next.js", "Tailwind CSS", "Clean Architecture"],
    url: "https://bienvieassurance.netlify.app/",
    type: "FINTECH.UX",
    category: "ENTERPRISE & SAAS",
    metrics: {
      "tps": "Production",
      "latency": "Fast Render",
      "role": "Architect"
    }
  },
  {
    title: "Chat_Boot-IA",
    description: "Advanced context-aware AI Chatbot integration leveraging LLMs for automated interactions and hyper-fast streaming responses.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
    tags: ["Python", "OpenAI API", "Next.js"],
    repo: "https://github.com/nadhemDev/Chat_Boot-IA-",
    type: "AI.INTEGRATION",
    category: "AI & LLM",
    metrics: {
      "tps": "Real-time stream",
      "latency": "<150ms prompt",
      "role": "AI Engineer"
    }
  },
  {
    title: "QR-Resto SaaS",
    description: "Full-stack real-time digital restaurant system. Features instant QR ordering, custom kitchen terminals, and hyper-fast microservice routes.",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=800",
    tags: ["Next.js 14", "FastAPI", "WebSockets", "Go Microservices"],
    type: "SAAS.REALTIME",
    category: "ENTERPRISE & SAAS",
    metrics: {
      "tps": "WebSocket Flow",
      "latency": "Real-time sync",
      "role": "Lead Architect"
    }
  }
];

export default function ProjectsShowcase() {
  const [activeFilter, setActiveFilter] = useState("ALL SYSTEMS");
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const filters = ["ALL SYSTEMS", "AI & LLM", "ENTERPRISE & SAAS"];

  const filteredProjects = activeFilter === "ALL SYSTEMS"
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="py-24 relative bg-bg-dark border-t border-border-dark transition-colors duration-500">
      <div className="absolute inset-0 bg-cyber-grid opacity-10 pointer-events-none" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-neon-amber/5 rounded-full filter blur-[150px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Dashboard Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-4 text-neon-orange font-mono text-sm tracking-widest uppercase">
              <Hexagon className="w-4 h-4" /> 03 // Active Modules
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-black uppercase tracking-tight text-text-primary">
              Innovations <span className="text-gradient-cyber">Technologiques</span>
            </h2>
          </motion.div>

          {/* Web3 Dashboard System Stats */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex items-center gap-6 p-4 rounded-2xl bg-white/5 dark:bg-black/40 border border-border-dark font-mono text-xs text-text-secondary"
          >
            <div className="flex items-center gap-2">
              <Server className="w-4 h-4 text-neon-violet" />
              <span>ACTIVE_MODULES: <strong className="text-text-primary">4</strong></span>
            </div>
            <div className="w-px h-6 bg-border-dark"></div>
            <div className="flex items-center gap-2">
              <RefreshCw className="w-4 h-4 text-neon-orange animate-spin-slow" />
              <span>INTEGRITY_CHECK: <strong className="text-emerald-500">PASS</strong></span>
            </div>
          </motion.div>
        </div>

        {/* Dashboard Filter Tabs */}
        <div className="flex flex-wrap gap-3 mb-10 border-b border-border-dark pb-6">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`relative px-6 py-3 font-mono text-xs font-bold uppercase tracking-wider rounded-xl border transition-all cursor-pointer ${
                activeFilter === filter
                  ? 'border-neon-orange text-neon-orange bg-neon-orange/5 shadow-[0_0_15px_var(--color-glow)]'
                  : 'border-border-dark text-text-secondary hover:text-text-primary hover:border-border-dark'
              }`}
            >
              {filter}
              {activeFilter === filter && (
                <motion.span 
                  layoutId="activeFilterGlow"
                  className="absolute inset-0 rounded-xl border border-neon-orange pointer-events-none"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Dynamic Project Grid */}
        <motion.div 
          layout
          className="grid md:grid-cols-2 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => {
              const overallIndex = projects.findIndex(p => p.title === project.title);
              const isHovered = hoveredIndex === overallIndex;

              return (
                <motion.div
                  key={project.title}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  onMouseEnter={() => setHoveredIndex(overallIndex)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className="group glass-card glass-card-hover overflow-hidden flex flex-col border border-border-dark hover:border-neon-orange/40"
                >
                  {/* Card Media Area */}
                  <div className="relative h-64 overflow-hidden border-b border-border-dark">
                    <div className="absolute inset-0 bg-gradient-to-t from-bg-dark via-bg-dark/40 to-transparent z-10" />
                    <div className="absolute inset-0 bg-neon-violet/10 dark:bg-neon-violet/20 mix-blend-overlay group-hover:bg-transparent transition-all duration-500 z-10"></div>
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-103"
                    />
                    
                    {/* Premium Cyber Scanline animation */}
                    <AnimatePresence>
                      {isHovered && (
                        <motion.div 
                          initial={{ top: '0%' }}
                          animate={{ top: '100%' }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 1.6, repeat: Infinity, ease: 'linear' }}
                          className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-neon-orange to-transparent shadow-[0_0_12px_var(--color-neon-orange)] z-20 pointer-events-none"
                        />
                      )}
                    </AnimatePresence>
                    
                    {/* Badge */}
                    <div className="absolute top-4 right-4 z-20">
                      <span className="px-3 py-1.5 text-[10px] font-mono font-bold tracking-wider bg-bg-dark/90 backdrop-blur-md text-neon-orange border border-neon-orange/30 rounded-lg shadow-sm">
                        [{project.type}]
                      </span>
                    </div>
                  </div>
                  
                  {/* Card Content Area */}
                  <div className="p-8 flex-1 flex flex-col bg-gradient-to-b from-transparent to-bg-dark/40">
                    <h3 className="text-2xl font-bold text-text-primary mb-3 font-display uppercase tracking-tight group-hover:text-neon-amber transition-colors flex items-center gap-2.5">
                      <Layers className="w-5 h-5 text-neon-violet" />
                      {project.title}
                    </h3>
                    
                    <p className="text-text-secondary mb-6 flex-1 text-sm leading-relaxed font-light">
                      {project.description}
                    </p>

                    {/* Dashboard Telemetry Metrics */}
                    <div className="grid grid-cols-3 gap-2 p-3.5 rounded-xl bg-white/5 dark:bg-black/40 border border-border-dark mb-6 text-[10px] font-mono">
                      <div>
                        <span className="text-text-secondary uppercase block mb-0.5">impact_stat</span>
                        <span className="font-bold text-text-primary flex items-center gap-1">
                          <BarChart2 className="w-3.5 h-3.5 text-neon-orange" />
                          {project.metrics.latency}
                        </span>
                      </div>
                      <div className="border-l border-border-dark pl-3">
                        <span className="text-text-secondary uppercase block mb-0.5">throughput</span>
                        <span className="font-bold text-text-primary">{project.metrics.tps}</span>
                      </div>
                      <div className="border-l border-border-dark pl-3">
                        <span className="text-text-secondary uppercase block mb-0.5">project_role</span>
                        <span className="font-bold text-neon-violet">{project.metrics.role}</span>
                      </div>
                    </div>
                    
                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.tags.map((tag, i) => (
                        <span key={i} className="px-3 py-1 text-[10px] font-mono bg-white/5 dark:bg-black/30 text-text-secondary border border-border-dark rounded-md group-hover:border-neon-violet/30 transition-colors">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    {/* Action Nodes */}
                    <div className="flex items-center gap-6 mt-auto pt-6 border-t border-border-dark">
                      {project.url && (
                        <Link href={project.url} target="_blank" className="flex items-center gap-2 text-xs font-mono font-bold text-neon-orange hover:text-neon-amber transition-colors hover:shadow-[0_0_10px_var(--color-glow)]">
                          [EXECUTE_SYSTEM] <ExternalLink className="w-4 h-4" />
                        </Link>
                      )}
                      {project.repo && (
                        <Link href={project.repo} target="_blank" className="flex items-center gap-2 text-xs font-mono font-bold text-text-secondary hover:text-text-primary transition-colors">
                          [INSPECT_SOURCE] <Github className="w-4 h-4" />
                        </Link>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
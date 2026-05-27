'use client';

import { motion } from 'framer-motion';
import { Download, GraduationCap, Briefcase, ChevronRight, Hexagon, Calendar } from 'lucide-react';
import Link from 'next/link';

export default function CVSection() {
  const experiences = [
    {
      role: "Lead Full Stack Developer",
      company: "Segula Technologies (Client: Stellantis)",
      date: "2024 - Present",
      type: "work",
      desc: "Managing feature teams, orchestrating complex code reviews, and integrating advanced OpenAI classification workflows (Xcode Tracker) into enterprise Stellantis environments. Leading architectural decisions for high-availability systems."
    },
    {
      role: "Senior Developer",
      company: "Sandlist",
      date: "2022 - 2024",
      type: "work",
      desc: "Architected a high-traffic marketplace platform serving 10k+ active listings. Focused relentlessly on extreme performance optimization, achieving a 95+ Lighthouse SEO score."
    },
    {
      role: "Full Stack Consultant",
      company: "Premier Consulting",
      date: "2020 - 2022",
      type: "work",
      desc: "Designed and built highly robust web applications, enterprise portal systems, and custom API microservices tailored for global operations."
    },
    {
      role: "Engineering Degree",
      company: "iTeam University",
      date: "2017 - 2020",
      type: "edu",
      desc: "Rigorous academic engineering path focusing on software architecture, advanced algorithmic problem solving, and modern distributed systems design."
    }
  ];

  return (
    <section id="cv" className="py-24 relative overflow-hidden bg-bg-dark border-t border-border-dark transition-colors duration-500">
      {/* Cyberpunk Fog & Grids */}
      <div className="absolute inset-0 bg-cyber-grid opacity-20 pointer-events-none" />
      <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-neon-violet/5 rounded-full filter blur-[150px] animate-pulse-slow pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <div className="flex items-center gap-3 mb-4 text-neon-orange font-mono text-sm tracking-widest uppercase">
              <Hexagon className="w-4 h-4" /> 05 // Professional Blueprint
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-black mb-4 uppercase tracking-tight text-text-primary">
              Curriculum <span className="text-gradient-cyber">Vitae</span>
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl font-light leading-relaxed">
              A comprehensive timeline of my technical leadership, high-impact engineering roles, and academic foundations.
            </p>
          </motion.div>

          {/* Hyper-styled Télécharger le CV Button */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Link 
              href="images/Nadhem_Soumri_Resume_v2.pdf" 
              target="_blank" 
              className="btn-cyber px-8 py-4 text-base font-mono font-bold tracking-wider group flex items-center gap-3 shadow-[0_0_20px_var(--color-glow)]"
            >
              <Download className="w-5 h-5 group-hover:animate-bounce" />
              Télécharger le CV
            </Link>
          </motion.div>
        </div>

        {/* Timeline Path */}
        <div className="relative">
          {/* Vertical Timeline Track Line */}
          <div className="absolute left-4 md:left-1/2 top-4 bottom-4 w-[2px] bg-gradient-to-b from-neon-orange via-neon-violet to-border-dark hidden md:block"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                className={`flex flex-col md:flex-row items-center justify-between w-full relative ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Spacer */}
                <div className="w-full md:w-[46%] mb-8 md:mb-0"></div>
                
                {/* Center Node Icon */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full glass-card border-2 border-border-dark items-center justify-center z-20 transition-all duration-300 hover:border-neon-violet shadow-lg bg-bg-dark">
                  {exp.type === 'work' ? (
                    <Briefcase className="w-5 h-5 text-neon-orange" />
                  ) : (
                    <GraduationCap className="w-5 h-5 text-neon-violet" />
                  )}
                </div>

                {/* Content Card */}
                <div className="w-full md:w-[46%] relative z-10">
                  <div className="glass-card glass-card-hover p-8 relative overflow-hidden group hover:border-neon-violet/40">
                    <div className="absolute -top-10 -right-10 w-24 h-24 rounded-full blur-[30px] opacity-0 group-hover:opacity-100 bg-neon-violet/5 transition-opacity duration-500"></div>
                    
                    {/* Date Tag */}
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/5 dark:bg-black/50 border border-border-dark rounded-lg text-[10px] font-mono font-bold text-neon-orange mb-4">
                      <Calendar className="w-3.5 h-3.5 text-neon-orange" />
                      {exp.date}
                    </span>
                    
                    <h3 className="text-2xl font-bold text-text-primary mb-1 group-hover:text-neon-amber transition-colors font-display tracking-tight uppercase">
                      {exp.role}
                    </h3>
                    
                    <h4 className="text-base text-neon-violet mb-4 flex items-center gap-1.5 font-mono font-bold uppercase">
                      <ChevronRight className="w-4 h-4 text-neon-violet" />
                      {exp.company}
                    </h4>
                    
                    <p className="text-text-secondary text-sm leading-relaxed font-light">
                      {exp.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

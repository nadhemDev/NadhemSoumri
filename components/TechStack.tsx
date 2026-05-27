'use client';

import { motion } from 'framer-motion';
import { Cpu, Terminal, Database, Hexagon, Github, Linkedin, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

const skills = {
  "Frontend Matrix": {
    items: ["Next.js", "React.js", "TypeScript", "JavaScript", "Redux Toolkit", "Tailwind CSS"],
    icon: <Terminal className="w-6 h-6 text-neon-orange" />,
    glowColor: "rgba(234, 88, 12, 0.15)",
    borderColor: "hover:border-neon-orange/40"
  },
  "Backend & AI Matrix": {
    items: ["Laravel", "Symfony", "FastAPI", "Node.js", "PHP", "OpenAI API", "Python", "Go (Golang)"],
    icon: <Cpu className="w-6 h-6 text-neon-violet" />,
    glowColor: "rgba(217, 70, 239, 0.15)",
    borderColor: "hover:border-neon-violet/40"
  },
  "Infra & Architecture": {
    items: ["AWS (EC2/S3/RDS)", "Docker", "CI/CD", "Microservices", "WebSockets", "REST/GraphQL", "PostgreSQL", "MySQL", "MongoDB", "Redis"],
    icon: <Database className="w-6 h-6 text-neon-amber" />,
    glowColor: "rgba(217, 152, 0, 0.15)",
    borderColor: "hover:border-neon-amber/40"
  }
};

export default function TechStack() {
  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-bg-dark border-t border-border-dark transition-colors duration-500">
      <div className="absolute inset-0 bg-cyber-grid opacity-20 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-neon-violet/5 rounded-full filter blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4 text-neon-amber font-mono text-sm tracking-widest uppercase">
            <Hexagon className="w-4 h-4" /> 02 // Core Matrix
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-black mb-4 uppercase tracking-tight text-text-primary">
            Compétences <span className="text-gradient-cyber">Techniques</span>
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto font-light leading-relaxed">
            My primary technical arsenal for architecting extreme-performance digital ecosystems and AI integrations.
          </p>
        </motion.div>

        {/* 3 Columns Tech Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {Object.entries(skills).map(([category, data], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`glass-card p-8 group transition-all duration-500 relative overflow-hidden ${data.borderColor}`}
              style={{
                // Custom CSS variable glow on hover
                zIndex: 10
              }}
            >
              <div 
                className="absolute -top-10 -right-10 w-32 h-32 rounded-full blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ backgroundColor: data.glowColor }}
              ></div>
              
              <div className="flex items-center gap-4 mb-6 relative z-10 border-b border-border-dark pb-4">
                <div className="p-3 bg-white/5 dark:bg-black/50 border border-border-dark rounded-xl transition-all duration-300">
                  {data.icon}
                </div>
                <h3 className="text-xl font-bold text-text-primary uppercase tracking-wider font-display group-hover:text-text-primary transition-colors">
                  {category}
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-2.5 relative z-10">
                {data.items.map((skill, i) => (
                  <span 
                    key={i} 
                    className="px-3.5 py-1.5 bg-white/5 dark:bg-black/40 border border-border-dark rounded-lg text-xs font-mono text-text-secondary hover:!border-neon-orange hover:text-neon-orange hover:shadow-[0_0_10px_var(--color-glow)] transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Profiles Injection / Integrated Channels Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="glass-card p-8 border-neon-violet/30 hover:border-neon-violet/50 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-[400px] h-[200px] bg-neon-violet/5 rounded-bl-[200px] blur-[50px] pointer-events-none" />
          
          <div className="grid md:grid-cols-12 gap-8 items-center relative z-10">
            <div className="md:col-span-6">
              <div className="inline-flex items-center gap-1.5 text-neon-violet font-mono text-xs uppercase mb-3 font-bold tracking-wider">
                <span className="w-2 h-2 rounded-full bg-neon-violet block animate-pulse"></span>
                Integrated Channels
              </div>
              <h3 className="text-2xl font-display font-black text-text-primary uppercase mb-3">
                Secure Professional Networks
              </h3>
              <p className="text-sm text-text-secondary font-light max-w-md leading-relaxed">
                Connect directly through secure git hubs or career nodes to initiate collaboration, review repositories, or inspect technical credentials.
              </p>
            </div>

            <div className="md:col-span-6 flex flex-wrap gap-4 justify-start md:justify-end">
              {/* GitHub Node */}
              <Link 
                href="https://github.com/nadhemDev/" 
                target="_blank"
                className="group/btn relative px-6 py-4 rounded-2xl bg-white/5 dark:bg-black/40 border border-border-dark hover:border-neon-orange/50 hover:shadow-[0_0_20px_rgba(255,87,34,0.15)] flex items-center gap-4 transition-all duration-300 min-w-[200px]"
              >
                <div className="w-12 h-12 rounded-xl bg-white/5 dark:bg-black/50 border border-border-dark flex items-center justify-center text-text-secondary group-hover/btn:text-neon-orange group-hover/btn:border-neon-orange/40 transition-colors">
                  <Github className="w-6 h-6" />
                </div>
                <div className="text-left font-mono">
                  <span className="text-[10px] text-text-secondary block uppercase">source_node</span>
                  <span className="text-sm font-bold text-text-primary group-hover/btn:text-neon-orange transition-colors">github/nadhemDev</span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-text-secondary group-hover/btn:text-neon-orange absolute top-4 right-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
              </Link>

              {/* LinkedIn Node */}
              <Link 
                href="https://www.linkedin.com/in/nadhem-soumri-621bb3213/" 
                target="_blank"
                className="group/btn relative px-6 py-4 rounded-2xl bg-white/5 dark:bg-black/40 border border-border-dark hover:border-neon-violet/50 hover:shadow-[0_0_20px_rgba(217,70,239,0.15)] flex items-center gap-4 transition-all duration-300 min-w-[200px]"
              >
                <div className="w-12 h-12 rounded-xl bg-white/5 dark:bg-black/50 border border-border-dark flex items-center justify-center text-text-secondary group-hover/btn:text-neon-violet group-hover/btn:border-neon-violet/40 transition-colors">
                  <Linkedin className="w-6 h-6" />
                </div>
                <div className="text-left font-mono">
                  <span className="text-[10px] text-text-secondary block uppercase">career_node</span>
                  <span className="text-sm font-bold text-text-primary group-hover/btn:text-neon-violet transition-colors">linkedin/in/nadhem</span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-text-secondary group-hover/btn:text-neon-violet absolute top-4 right-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

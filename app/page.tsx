// app/page.tsx
import Hero from '@/components/Hero';
import CVSection from '@/components/CVSection';
import TechStack from '@/components/TechStack';
import ProjectsShowcase from '@/components/ProjectsShowcase';
import Workflow from '@/components/Workflow';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import { Hexagon } from 'lucide-react';

export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-bg-dark selection:bg-neon-violet/30 selection:text-neon-amber transition-colors duration-500">
        
        {/* Section 01 // Hero */}
        <Hero />
        
        {/* Section 02 // Core Matrix */}
        <TechStack />
        
        {/* Section 03 // Active Modules */}
        <ProjectsShowcase />
        
        {/* Section 04 // Processus de Travail */}
        <Workflow />
        
        {/* Section 05 // Curriculum Vitae */}
        <CVSection />
        
        {/* Section 06 // Fast Contact */}
        <section id="contact" className="relative py-24 overflow-hidden border-t border-border-dark bg-bg-dark">
          {/* Cyber Fog Background */}
          <div className="absolute inset-0 bg-cyber-grid opacity-20 pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-neon-orange/5 rounded-[100%] mix-blend-screen filter blur-[150px] pointer-events-none" />

          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center relative z-10">
            <div>
              <div className="flex items-center gap-3 mb-4 text-neon-violet font-mono text-sm tracking-widest uppercase">
                <Hexagon className="w-4 h-4" /> 06 // Transmission
              </div>
              <h2 className="text-5xl font-display font-black mb-6 text-gradient-cyber leading-tight">
                Secure Connection
              </h2>
              <p className="text-xl text-text-secondary mb-8 font-light leading-relaxed">
                Ready to architect next-gen enterprise solutions or AI integrations? Open a channel and let's deploy your vision into reality.
              </p>
              
              <div className="space-y-4 text-text-primary font-mono">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/5 dark:bg-black/50 flex items-center justify-center border border-neon-violet/30 shadow-[0_0_15px_rgba(217,70,239,0.2)]">
                    <svg className="w-5 h-5 text-neon-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <span className="text-neon-amber font-bold hover:text-neon-orange transition-colors">nadhemsoumri2@gmail.com</span>
                </div>
              </div>
            </div>
            
            <div className="glass-card p-1.5 relative border-neon-orange/20">
              {/* Animated borders */}
              <div className="absolute inset-0 bg-gradient-to-b from-neon-orange/20 via-transparent to-neon-violet/20 rounded-3xl animate-pulse-slow pointer-events-none" />
              <div className="bg-bg-dark/95 dark:bg-zinc-950 rounded-[22px] p-8 relative z-10">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
import Link from 'next/link';
import { Code2, Github, Linkedin, Mail, Twitter } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-bg-dark border-t border-white/5 pt-16 pb-8 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-neon-violet/50 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 group mb-6 inline-flex">
              <div className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-neon-orange to-neon-amber text-white overflow-hidden">
                <Code2 className="w-5 h-5 relative z-10" />
              </div>
              <span className="text-xl font-display font-bold tracking-tight text-white">
                N.Soumri
              </span>
            </Link>
            <p className="text-slate-400 max-w-sm mb-6 text-sm leading-relaxed">
              Senior Full Stack Developer & Tech Lead specializing in building robust web applications, AI integrations, and scalable architectures.
            </p>
            <div className="flex items-center gap-4">
              <Link href="https://github.com/nadhemDev" target="_blank" className="text-slate-400 hover:text-neon-orange transition-colors">
                <Github className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-slate-400 hover:text-neon-amber transition-colors">
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link href="mailto:nadhemsoumri2@gmail.com" className="text-slate-400 hover:text-neon-violet transition-colors">
                <Mail className="w-5 h-5" />
              </Link>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li><Link href="#about" className="hover:text-neon-orange transition-colors">About Me</Link></li>
              <li><Link href="#skills" className="hover:text-neon-orange transition-colors">Tech Stack</Link></li>
              <li><Link href="#projects" className="hover:text-neon-orange transition-colors">Projects</Link></li>
              <li><Link href="#contact" className="hover:text-neon-orange transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">Contact Info</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li>Paris, France / Remote</li>
              <li>nadhemsoumri2@gmail.com</li>
            </ul>
          </div>
          
        </div>
        
        <div className="pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>&copy; {currentYear} Nadhem Soumri. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <span>Designed & Built with</span>
            <span className="text-neon-orange">❤</span>
            <span>in Next.js</span>
          </div>
        </div>
      </div>
    </footer >
  );
}
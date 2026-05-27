'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Code2, Sun, Moon } from 'lucide-react';
import Link from 'next/link';
import { useTheme } from '@/components/ThemeProvider';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Workflow', href: '#workflow' },
    { name: 'CV', href: '#cv' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-3 bg-bg-dark/80 backdrop-blur-lg border-b border-border-dark shadow-lg'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-neon-orange to-neon-amber text-white overflow-hidden shadow-[0_0_15px_var(--color-glow)]">
              <Code2 className="w-6 h-6 relative z-10" />
            </div>
            <span className="text-xl font-display font-black tracking-tight text-text-primary group-hover:text-neon-amber transition-colors">
              N.Soumri
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            <ul className="flex items-center gap-8">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm font-semibold text-text-secondary hover:text-neon-orange transition-colors relative group py-1"
                  >
                    {link.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-neon-orange transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
              ))}
            </ul>
            
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-xl bg-white/5 dark:bg-black/20 border border-border-dark text-text-secondary hover:text-neon-orange transition-all cursor-pointer flex items-center justify-center shadow-sm hover:shadow-[0_0_15px_var(--color-glow)]"
              aria-label="Toggle Theme"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={theme}
                  initial={{ y: -10, opacity: 0, rotate: -45 }}
                  animate={{ y: 0, opacity: 1, rotate: 0 }}
                  exit={{ y: 10, opacity: 0, rotate: 45 }}
                  transition={{ duration: 0.2 }}
                >
                  {theme === 'dark' ? (
                    <Sun className="w-5 h-5 text-neon-orange" />
                  ) : (
                    <Moon className="w-5 h-5 text-neon-violet" />
                  )}
                </motion.div>
              </AnimatePresence>
            </button>

            <Link
              href="#contact"
              className="btn-cyber px-6 py-2 text-sm font-mono tracking-wider"
            >
              [ HIRE_ME ]
            </Link>
          </div>

          {/* Mobile Actions Container */}
          <div className="flex items-center gap-4 md:hidden">
            {/* Theme Toggle Button Mobile */}
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-xl bg-white/5 dark:bg-black/20 border border-border-dark text-text-secondary hover:text-neon-orange transition-all cursor-pointer flex items-center justify-center"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5 text-neon-orange" />
              ) : (
                <Moon className="w-5 h-5 text-neon-violet" />
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              className="text-text-secondary hover:text-text-primary p-1"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-bg-dark/95 backdrop-blur-xl border-b border-border-dark"
          >
            <ul className="px-6 py-6 space-y-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block font-medium text-text-secondary hover:text-neon-orange transition-colors text-lg font-display"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <li className="pt-4 border-t border-border-dark">
                <Link
                  href="#contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block btn-cyber px-6 py-3 w-full text-center font-mono text-base"
                >
                  [ CONNECT ]
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
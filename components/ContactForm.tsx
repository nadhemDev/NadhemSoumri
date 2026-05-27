'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle2, Loader2 } from 'lucide-react';

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formsubmit.co/ajax/nadhemsoumri2@gmail.com", {
        method: "POST",
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            message: formData.message,
            _subject: `New Portfolio Contact from ${formData.name}`,
            _template: "table"
        })
      });

      if (response.ok) {
        setIsSuccess(true);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setIsSuccess(false), 6000);
      }
    } catch (error) {
      console.error("Submission failed", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative">
      <AnimatePresence>
        {isSuccess && (
          <motion.div 
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="absolute -top-28 left-0 right-0 p-4 rounded-2xl bg-bg-dark/95 border border-neon-violet/50 backdrop-blur-xl flex items-center gap-3.5 text-text-primary shadow-[0_0_30px_var(--color-glow)] z-50"
          >
            <div className="w-10 h-10 rounded-xl bg-neon-violet/10 border border-neon-violet/30 flex items-center justify-center flex-shrink-0 animate-pulse">
              <CheckCircle2 className="w-5 h-5 text-neon-violet" />
            </div>
            <div className="font-mono text-left">
              <span className="text-[9px] text-text-secondary block uppercase tracking-wider font-bold">transmission_status</span>
              <span className="text-xs font-bold text-text-primary uppercase tracking-wide">Secure Packet Delivered // Awaiting Handshake</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <form onSubmit={handleSubmit} className="space-y-6">
        <input type="text" name="_honey" style={{ display: 'none' }} />
        <input type="hidden" name="_captcha" value="false" />

        <div className="group">
          <label htmlFor="name" className="block text-xs font-mono font-bold tracking-widest text-text-secondary uppercase mb-2 group-focus-within:text-neon-orange transition-colors">
            Identity [Name]
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full bg-white/5 dark:bg-black/50 border border-border-dark rounded-xl px-4 py-3 text-text-primary font-mono focus:outline-none focus:ring-1 focus:ring-neon-orange focus:border-neon-orange transition-all placeholder:text-text-secondary/35 text-sm"
            placeholder="John_Doe"
          />
        </div>

        <div className="group">
          <label htmlFor="email" className="block text-xs font-mono font-bold tracking-widest text-text-secondary uppercase mb-2 group-focus-within:text-neon-violet transition-colors">
            Node [Email]
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full bg-white/5 dark:bg-black/50 border border-border-dark rounded-xl px-4 py-3 text-text-primary font-mono focus:outline-none focus:ring-1 focus:ring-neon-violet focus:border-neon-violet transition-all placeholder:text-text-secondary/35 text-sm"
            placeholder="john@network.com"
          />
        </div>

        <div className="group">
          <label htmlFor="message" className="block text-xs font-mono font-bold tracking-widest text-text-secondary uppercase mb-2 group-focus-within:text-neon-amber transition-colors">
            Payload [Message]
          </label>
          <textarea
            id="message"
            name="message"
            required
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="w-full bg-white/5 dark:bg-black/50 border border-border-dark rounded-xl px-4 py-3 text-text-primary font-mono focus:outline-none focus:ring-1 focus:ring-neon-amber focus:border-neon-amber transition-all resize-none placeholder:text-text-secondary/35 text-sm"
            placeholder="Initialize connection protocols..."
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full btn-cyber py-4 flex items-center justify-center gap-3 font-mono text-base tracking-widest uppercase disabled:opacity-50 cursor-pointer shadow-md"
        >
          {isSubmitting ? (
            <Loader2 className="w-5 h-5 animate-spin text-white" />
          ) : (
            <>
              [ EXECUTE_SEND ]
              <Send className="w-5 h-5" />
            </>
          )}
        </button>
      </form>
    </div>
  );
}
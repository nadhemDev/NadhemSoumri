'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

export default function AIWelcomeModal() {
  const [isOpen, setIsOpen] = useState(true);
  const [projectType, setProjectType] = useState('Dashboard / ERP');
  const [primaryColor, setPrimaryColor] = useState('#10b981'); // Forest Green accent
  const [details, setDetails] = useState('');
  const [loading, setLoading] = useState(false);
  const [maquette, setMaquette] = useState<any>(null);

  const [clientInfo, setClientInfo] = useState({ name: '', contact: '' });
  const [submitted, setSubmitted] = useState(false);

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const generateCanvas = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/generate-maquette', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ projectType, primaryColor, requirementDetails: details }),
      });
      const data = await res.json();
      if (data.success) {
        setMaquette(data.maquette);
      } else {
        alert('Erreur lors de la génération : ' + data.error);
      }
    } catch (error) {
      console.error(error);
      alert('Erreur de connexion.');
    }
    setLoading(false);
  };

  const handleBookProject = async () => {
    if (!clientInfo.contact || !clientInfo.name) {
      return alert("S'il vous plaît mettez votre nom et contact!");
    }
    try {
      const res = await fetch('/api/send-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ clientInfo, maquette }),
      });
      const data = await res.json();
      if (data.success) {
        setSubmitted(true);
        setTimeout(() => setIsOpen(false), 3000); // Close after 3 seconds on success
      } else {
        alert("Erreur lors de l'envoi : " + data.error);
      }
    } catch (error) {
      console.error(error);
      alert('Erreur de connexion.');
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-bg-dark/80 backdrop-blur-md"
        >
          <motion.div
            initial={{ scale: 0.9, y: 20, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.9, y: 20, opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-6xl max-h-[90vh] overflow-y-auto rounded-3xl bg-slate-950 border border-emerald-900/40 shadow-2xl text-slate-100 flex flex-col custom-scrollbar"
          >
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 p-2 rounded-full bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 transition z-10"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="p-6 md:p-10 flex-1">
              {/* Header */}
              <div className="flex items-center justify-between pb-6 border-b border-emerald-900/30">
                <div className="pr-12">
                  <span className="px-3 py-1 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono rounded-full">
                    🚀 AI Simulator Active
                  </span>
                  <h2 className="text-3xl md:text-4xl font-extrabold mt-3 text-white leading-tight">
                    Welcome! Simulate Your Future Project
                  </h2>
                  <p className="text-slate-400 mt-2 text-sm">
                    Configure your needs below and my AI will instantly generate an interactive architecture for your project. Or you can close this window to explore my portfolio.
                  </p>
                </div>
              </div>

              {/* Control Panel */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
                <div>
                  <label className="text-xs font-semibold text-slate-400">Type de Solution</label>
                  <select 
                    value={projectType} 
                    onChange={(e) => setProjectType(e.target.value)}
                    className="w-full mt-1 bg-slate-900 border border-slate-800 p-3 rounded-xl text-sm focus:border-emerald-500 outline-none text-white"
                  >
                    <option value="Dashboard / ERP">Forest Enterprise Dashboard / ERP</option>
                    <option value="E-commerce">E-commerce High-Converting Store</option>
                    <option value="Real Estate">Real Estate Property Showcase</option>
                    <option value="SaaS Landing">SaaS Modern Product Landing</option>
                    <option value="AI Automation">AI Workflow & Automation Platform</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-400">Couleur Accent (Theme)</label>
                  <input 
                    type="color" 
                    value={primaryColor} 
                    onChange={(e) => setPrimaryColor(e.target.value)}
                    className="w-full h-11 mt-1 bg-slate-900 border border-slate-800 p-1 rounded-xl cursor-pointer"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-400">Besoins Spécifiques</label>
                  <input 
                    type="text" 
                    placeholder="Ex: Gestion de stock, AI Chatbot, Analytics..."
                    value={details} 
                    onChange={(e) => setDetails(e.target.value)}
                    className="w-full mt-1 bg-slate-900 border border-slate-800 p-3 rounded-xl text-sm focus:border-emerald-500 outline-none text-white"
                  />
                </div>
              </div>

              <button 
                onClick={generateCanvas}
                disabled={loading}
                className="w-full py-4 bg-emerald-600 hover:bg-emerald-500 text-slate-950 font-bold rounded-xl transition flex items-center justify-center gap-2 shadow-lg shadow-emerald-950 disabled:opacity-50"
              >
                {loading ? '🧠 Construction du Canvas AI en cours...' : '🚀 Générer le Prototype / UI Canvas'}
              </button>

              {/* Live Canvas Mockup Engine */}
              {maquette && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-10 border border-slate-800 rounded-2xl overflow-hidden bg-slate-900/50 backdrop-blur-md"
                >
                  {/* Top Mockup Bar */}
                  <div className="bg-slate-950 px-4 py-3 border-b border-slate-800 flex items-center justify-between">
                    <div className="flex gap-2">
                      <span className="w-3 h-3 rounded-full bg-red-500/80"></span>
                      <span className="w-3 h-3 rounded-full bg-yellow-500/80"></span>
                      <span className="w-3 h-3 rounded-full bg-green-500/80"></span>
                    </div>
                    <span className="text-xs text-slate-400 font-mono">{maquette?.layout?.topBarTitle || 'Dashboard'}</span>
                    <span className="text-xs px-2 py-0.5 bg-emerald-950 text-emerald-400 border border-emerald-800 rounded">
                      LIVE PREVIEW
                    </span>
                  </div>

                  {/* Interactive UI Mockup */}
                  <div className="flex flex-col min-h-[400px]">
                    {maquette?.layoutType === 'ecommerce' && (
                      <div className={`flex flex-col flex-1 ${maquette?.theme?.bgStyle}`}>
                        {/* Top Nav */}
                        <div className="flex items-center gap-4 px-6 py-4 border-b border-slate-800">
                          <span className="font-bold text-white tracking-widest uppercase">STORE</span>
                          {maquette?.layout?.topNavItems?.map((item: string, i: number) => (
                            <span key={i} className="text-xs text-slate-400 cursor-pointer hover:text-white transition">{item}</span>
                          ))}
                        </div>
                        {/* Hero */}
                        <div className="px-6 py-12 text-center border-b border-slate-800 bg-slate-900/40">
                          <h2 className="text-3xl font-extrabold text-white mb-2">{maquette?.layout?.heroBanner?.title}</h2>
                          <p className="text-sm text-slate-400">{maquette?.layout?.heroBanner?.subtitle}</p>
                          <button className="mt-6 px-6 py-2 rounded-full font-bold text-slate-950" style={{ backgroundColor: primaryColor }}>Shop Now</button>
                        </div>
                        {/* Products */}
                        <div className="p-6 grid grid-cols-2 md:grid-cols-4 gap-4">
                          {maquette?.layout?.products?.map((p: any, i: number) => (
                            <div key={i} className="bg-slate-900 border border-slate-800 rounded-xl p-4 flex flex-col items-center text-center">
                              <div className="w-full h-24 bg-slate-800 rounded-lg mb-3"></div>
                              <span className="text-xs text-slate-300 font-medium">{p.name}</span>
                              <span className="text-sm font-bold mt-1" style={{ color: primaryColor }}>{p.price}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {maquette?.layoutType === 'landing' && (
                      <div className={`flex flex-col flex-1 ${maquette?.theme?.bgStyle}`}>
                        {/* Top Nav */}
                        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800">
                          <span className="font-bold text-white tracking-widest uppercase" style={{ color: primaryColor }}>Brand</span>
                          <div className="flex gap-4">
                            {maquette?.layout?.navItems?.map((item: string, i: number) => (
                              <span key={i} className="text-xs text-slate-400">{item}</span>
                            ))}
                          </div>
                        </div>
                        {/* Hero */}
                        <div className="px-6 py-16 text-center">
                          <h2 className="text-4xl font-extrabold text-white mb-4">{maquette?.layout?.heroBanner?.title || maquette?.layout?.hero?.title}</h2>
                          <p className="text-sm text-slate-400 max-w-lg mx-auto">{maquette?.layout?.heroBanner?.subtitle || maquette?.layout?.hero?.subtitle}</p>
                          <div className="mt-8 flex gap-4 justify-center">
                            <button className="px-6 py-2.5 rounded-lg font-bold text-slate-950" style={{ backgroundColor: primaryColor }}>Get Started</button>
                            <button className="px-6 py-2.5 rounded-lg font-bold text-white border border-slate-700 hover:bg-slate-800">Learn More</button>
                          </div>
                        </div>
                        {/* Features */}
                        <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6 bg-slate-900/50 border-t border-slate-800">
                          {maquette?.layout?.features?.map((f: any, i: number) => (
                            <div key={i} className="text-center p-4">
                              <div className="w-10 h-10 mx-auto rounded-full bg-slate-800 mb-3 flex items-center justify-center" style={{ color: primaryColor }}>✨</div>
                              <h3 className="text-sm font-bold text-white mb-2">{f.title}</h3>
                              <p className="text-xs text-slate-400">{f.description}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {(!maquette?.layoutType || maquette?.layoutType === 'dashboard') && (
                      <div className="flex flex-col md:flex-row flex-1">
                        {/* Sidebar */}
                        <div className={`w-full md:w-64 p-4 border-r border-slate-800 ${maquette?.theme?.secondaryBg || 'bg-slate-900'}`}>
                          <div className="font-bold text-sm tracking-wider uppercase mb-6 flex items-center gap-2" style={{ color: primaryColor }}>
                             🌲 UI
                          </div>
                          <ul className="space-y-2">
                            {maquette?.layout?.sidebarItems?.map((item: string, i: number) => (
                              <li key={i} className="px-3 py-2 rounded-lg text-xs font-medium text-slate-300 hover:bg-slate-800 cursor-pointer flex items-center gap-2 transition-colors">
                                <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: primaryColor }}></span>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                        {/* Main Content Area */}
                        <div className={`flex-1 p-6 ${maquette?.theme?.bgStyle || 'bg-slate-950 text-slate-100'}`}>
                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {maquette?.layout?.widgets?.map((w: any, idx: number) => (
                              <div key={idx} className="p-4 rounded-xl bg-slate-900 border border-slate-800 shadow-sm hover:border-slate-700 transition">
                                <span className="text-xs text-slate-400 font-medium">{w.title}</span>
                                {w.value && <h3 className="text-xl font-bold mt-1 text-white">{w.value}</h3>}
                                {w.change && <span className="text-xs font-bold mt-2 block" style={{ color: primaryColor }}>{w.change}</span>}
                                {w.details && (
                                  <ul className="mt-2 space-y-1">
                                    {w.details.map((d: string, k: number) => (
                                      <li key={k} className="text-[11px] text-slate-400">• {d}</li>
                                    ))}
                                  </ul>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Tech Stack & Estimate */}
                    <div className="px-6 py-4 border-t border-slate-800 bg-slate-950 flex flex-wrap justify-between items-center text-xs text-slate-400">
                      <div>🛠 Tech Recommended: <span className="text-white font-medium">{maquette?.techStack?.join(', ')}</span></div>
                      <div>⏱ Estimation: <span className="font-bold" style={{ color: primaryColor }}>{maquette?.estimatedPrice} ({maquette?.deliveryTime})</span></div>
                    </div>
                  </div>

                  {/* Call To Action & Lead Form */}
                  <div className="p-6 bg-emerald-950/30 border-t border-emerald-900/50">
                    {!submitted ? (
                      <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                        <div>
                          <h4 className="font-bold text-white text-base">Ready to build this?</h4>
                          <p className="text-xs text-slate-400">Lock in your specs and let's get started.</p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto">
                          <input 
                            type="text" 
                            placeholder="Your Name"
                            value={clientInfo.name}
                            onChange={(e) => setClientInfo({ ...clientInfo, name: e.target.value })}
                            className="bg-slate-900 border border-slate-800 p-2.5 text-xs rounded-lg text-white outline-none focus:border-emerald-500"
                          />
                          <input 
                            type="text" 
                            placeholder="Email / Phone"
                            value={clientInfo.contact}
                            onChange={(e) => setClientInfo({ ...clientInfo, contact: e.target.value })}
                            className="bg-slate-900 border border-slate-800 p-2.5 text-xs rounded-lg text-white outline-none focus:border-emerald-500"
                          />
                          <button 
                            onClick={handleBookProject}
                            className="px-5 py-2.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-bold rounded-lg transition whitespace-nowrap"
                          >
                            Send to Nadhem
                          </button>
                        </div>
                      </div>
                    ) : (
                      <div className="p-4 bg-emerald-900/40 border border-emerald-700 text-emerald-200 text-center rounded-xl text-xs font-bold">
                        🎉 Lead Sent! I will contact you shortly. Closing window...
                      </div>
                    )}
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

'use client';
import { useState } from 'react';

export default function UizardForestCanvas() {
  const [projectType, setProjectType] = useState('Dashboard / ERP');
  const [primaryColor, setPrimaryColor] = useState('#10b981'); // Forest Green accent
  const [details, setDetails] = useState('');
  const [loading, setLoading] = useState(false);
  const [maquette, setMaquette] = useState<any>(null);

  const [clientInfo, setClientInfo] = useState({ name: '', contact: '' });
  const [submitted, setSubmitted] = useState(false);

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
      } else {
        alert("Erreur lors de l'envoi : " + data.error);
      }
    } catch (error) {
      console.error(error);
      alert('Erreur de connexion.');
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto my-10 p-6 bg-slate-950 border border-emerald-900/40 rounded-3xl shadow-2xl text-slate-100">
      
      {/* Header */}
      <div className="flex items-center justify-between pb-6 border-b border-emerald-900/30">
        <div>
          <span className="px-3 py-1 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono rounded-full">
            🌲 Forest & Uizard AI Design Engine
          </span>
          <h2 className="text-3xl font-extrabold mt-2 text-white">
            Générez votre Maquette & Dashboard en Temps Réel
          </h2>
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
        <div className="mt-10 border border-slate-800 rounded-2xl overflow-hidden bg-slate-900/50 backdrop-blur-md">
          
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

          {/* Interactive UI Mockup (Forest Dashboard Style) */}
          <div className="flex flex-col md:flex-row min-h-[400px]">
            
            {/* Sidebar */}
            <div className={`w-full md:w-64 p-4 border-r border-slate-800 ${maquette?.theme?.sidebarBg || 'bg-slate-900'}`}>
              <div className="font-bold text-sm tracking-wider uppercase text-emerald-400 mb-6 flex items-center gap-2">
                 <span style={{ color: primaryColor }}>🌲</span> UI
              </div>
              <ul className="space-y-2">
                {maquette?.layout?.sidebarItems?.map((item: string, i: number) => (
                  <li key={i} className="px-3 py-2 rounded-lg text-xs font-medium text-slate-300 hover:bg-emerald-900/30 cursor-pointer flex items-center gap-2 transition-colors">
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

              {/* Tech Stack & Estimate */}
              <div className="mt-6 pt-4 border-t border-slate-800 flex flex-wrap justify-between items-center text-xs text-slate-400">
                <div>🛠 Tech Recommended: <span className="text-white font-medium">{maquette?.techStack?.join(', ')}</span></div>
                <div>⏱ Estimation: <span className="font-bold" style={{ color: primaryColor }}>{maquette?.estimatedPrice} ({maquette?.deliveryTime})</span></div>
              </div>
            </div>
          </div>

          {/* Call To Action & Lead Form */}
          <div className="p-6 bg-emerald-950/30 border-t border-emerald-900/50">
            {!submitted ? (
              <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                <div>
                  <h4 className="font-bold text-white text-base">Vous aimez cette maquette ?</h4>
                  <p className="text-xs text-slate-400">Reservez votre projet maintenant pour lancer le développement.</p>
                </div>
                <div className="flex gap-2 w-full md:w-auto">
                  <input 
                    type="text" 
                    placeholder="Nom"
                    value={clientInfo.name}
                    onChange={(e) => setClientInfo({ ...clientInfo, name: e.target.value })}
                    className="bg-slate-900 border border-slate-800 p-2.5 text-xs rounded-lg text-white outline-none focus:border-emerald-500"
                  />
                  <input 
                    type="text" 
                    placeholder="Email / Téléphone"
                    value={clientInfo.contact}
                    onChange={(e) => setClientInfo({ ...clientInfo, contact: e.target.value })}
                    className="bg-slate-900 border border-slate-800 p-2.5 text-xs rounded-lg text-white outline-none focus:border-emerald-500"
                  />
                  <button 
                    onClick={handleBookProject}
                    className="px-5 py-2.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-bold rounded-lg transition whitespace-nowrap"
                  >
                    Valider & Commander
                  </button>
                </div>
              </div>
            ) : (
              <div className="p-4 bg-emerald-900/40 border border-emerald-700 text-emerald-200 text-center rounded-xl text-xs font-bold">
                🎉 Demande envoyée avec succès à Nadhem ! Un récapitulatif a été transmis.
              </div>
            )}
          </div>

        </div>
      )}

    </div>
  );
}

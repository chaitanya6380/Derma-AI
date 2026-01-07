
import React from 'react';
import { Microscope, Brain, Zap, Globe } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: <Microscope className="text-teal-400" />,
      title: "Molecular Scan",
      desc: "Deep skin layer penetration via synthetic aperture spectral imaging."
    },
    {
      icon: <Brain className="text-teal-400" />,
      title: "Neural Diagnostic",
      desc: "Transformer-based analysis trained on 50M+ clinical pathological samples."
    },
    {
      icon: <Zap className="text-teal-400" />,
      title: "Instant Results",
      desc: "Real-time edge computing providing clinical insights in under 3 seconds."
    },
    {
      icon: <Globe className="text-teal-400" />,
      title: "Global Compliance",
      desc: "Fully HIPAA, GDPR, and SOC2 Type II compliant enterprise architecture."
    }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-slate-900 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {features.map((f, i) => (
            <div key={i} className="p-6 sm:p-8 bg-slate-950 rounded-2xl sm:rounded-3xl border border-white/5 hover:border-teal-500/30 transition-all hover:shadow-2xl hover:shadow-teal-500/5 group">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-teal-500/10 flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
                {f.icon}
              </div>
              <h4 className="text-base sm:text-lg font-bold text-white mb-2 sm:mb-3 tracking-tight">{f.title}</h4>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-light">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

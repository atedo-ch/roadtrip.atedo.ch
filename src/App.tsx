import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Download, Compass, LayoutTemplate, ShieldCheck, CheckCircle2, Coffee, ArrowRight, X } from 'lucide-react';

const clientLogos = [
  "https://raw.githubusercontent.com/atedo-ch/Brand-Assets/main/ducati-logo-negativ.png",
  "https://raw.githubusercontent.com/atedo-ch/Brand-Assets/main/astag-logo-negativ.png",
  "https://raw.githubusercontent.com/atedo-ch/Brand-Assets/main/axpo-logo-negativ.png",
  "https://raw.githubusercontent.com/atedo-ch/Brand-Assets/main/barto-logo-negativ.png",
  "https://raw.githubusercontent.com/atedo-ch/Brand-Assets/main/bithawk-logo-negativ.png",
  "https://raw.githubusercontent.com/atedo-ch/Brand-Assets/main/bmw-logo-negativ-2.png",
  "https://raw.githubusercontent.com/atedo-ch/Brand-Assets/main/casper-logo-negativ.png",
  "https://raw.githubusercontent.com/atedo-ch/Brand-Assets/main/convotis-logo-negativ.png",
  "https://raw.githubusercontent.com/atedo-ch/Brand-Assets/main/cwa-logo-negativ.png",
  "https://raw.githubusercontent.com/atedo-ch/Brand-Assets/main/diwisa-logo-negativ.png",
  "https://raw.githubusercontent.com/atedo-ch/Brand-Assets/main/dorean-logo-negativ.png",
  "https://raw.githubusercontent.com/atedo-ch/Brand-Assets/main/fenaco-logo-negativ.png",
  "https://raw.githubusercontent.com/atedo-ch/Brand-Assets/main/grand-casino-luzern-logo-negativ.png",
  "https://raw.githubusercontent.com/atedo-ch/Brand-Assets/main/implenia-logo-negativ.png",
  "https://raw.githubusercontent.com/atedo-ch/Brand-Assets/main/jugenddorf-logo-negativ.png",
  "https://raw.githubusercontent.com/atedo-ch/Brand-Assets/main/kohler-logo-negativ.png",
  "https://raw.githubusercontent.com/atedo-ch/Brand-Assets/main/kunz-logo-negativ.png",
  "https://raw.githubusercontent.com/atedo-ch/Brand-Assets/main/logus-logo-negativ.png",
  "https://raw.githubusercontent.com/atedo-ch/Brand-Assets/main/regazzi-logo-negativ.png",
  "https://raw.githubusercontent.com/atedo-ch/Brand-Assets/main/renova-roll-logo-negativ.png",
  "https://raw.githubusercontent.com/atedo-ch/Brand-Assets/main/schweizerische-eidgenossenschaft-logo-negativ.png",
  "https://raw.githubusercontent.com/atedo-ch/Brand-Assets/main/swiss-supply-logo-negativ.png",
  "https://raw.githubusercontent.com/atedo-ch/Brand-Assets/main/swisscom-logo-negativ.png",
  "https://raw.githubusercontent.com/atedo-ch/Brand-Assets/main/talsee-logo-negativ.png",
  "https://raw.githubusercontent.com/atedo-ch/Brand-Assets/main/treuhand-suisse-logo-negativ.png",
  "https://raw.githubusercontent.com/atedo-ch/Brand-Assets/main/universal-logo-negativ.png",
  "https://raw.githubusercontent.com/atedo-ch/Brand-Assets/main/vivendra-logo-negativ.png",
  "https://raw.githubusercontent.com/atedo-ch/Brand-Assets/main/widenmoos-logo-negativ.png"
];

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (isModalOpen) {
      if (!document.querySelector('script[src="//js.hsforms.net/forms/embed/v2.js"]')) {
        const script = document.createElement('script');
        script.src = '//js.hsforms.net/forms/embed/v2.js';
        script.charset = 'utf-8';
        script.type = 'text/javascript';
        document.body.appendChild(script);

        script.addEventListener('load', () => {
          if ((window as any).hbspt) {
            (window as any).hbspt.forms.create({
              portalId: "2738159",
              formId: "471b7737-a163-45fe-aa5e-28f1396fb181",
              region: "na1",
              target: '#hubspotForm'
            });
          }
        });
      } else {
        setTimeout(() => {
          if ((window as any).hbspt) {
            const target = document.getElementById('hubspotForm');
            if (target) target.innerHTML = '';
            (window as any).hbspt.forms.create({
              portalId: "2738159",
              formId: "471b7737-a163-45fe-aa5e-28f1396fb181",
              region: "na1",
              target: '#hubspotForm'
            });
          }
        }, 100);
      }
    }
  }, [isModalOpen]);

  return (
    <div className="min-h-screen bg-atedo-bg text-atedo-text font-soho selection:bg-atedo-accent selection:text-white">
      
      {/* HEADER */}
      <header className="absolute top-0 left-0 w-full z-50 py-8">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <img 
            src="https://raw.githubusercontent.com/atedo-ch/atedo-kiroadtrip-assets/main/atedo_Logo_unendlichkeit_RGB.svg" 
            alt="atedo Logo" 
            className="h-10 md:h-12" 
            referrerPolicy="no-referrer"
          />
        </div>
      </header>

      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold italic leading-tight mb-6">
                Ihr KI-Roadtrip: Der praxisnahe Leitfaden für Schweizer KMU-Führungskräfte
              </h1>
              <p className="text-lg md:text-xl text-white/80 mb-8 leading-relaxed">
                Ein praxisorientierter KI-Leitfaden für Führungskräfte: konkrete Tools, Checklisten und eine priorisierte Roadmap — sofort zum Download.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="inline-flex items-center justify-center gap-2 bg-atedo-accent hover:bg-[#ff4f5c] text-white px-8 py-4 rounded-lg font-bold italic transition-colors shadow-lg shadow-atedo-accent/20"
                >
                  <Download size={20} />
                  Leitfaden sofort herunterladen
                </button>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative cursor-pointer group"
              onClick={() => setIsModalOpen(true)}
            >
              <img 
                src="https://raw.githubusercontent.com/atedo-ch/atedo-kiroadtrip-assets/main/KI-Canvas-Whitepaper_The-Roadtrip_560x823-v2.png" 
                alt="KI-Roadtrip Leitfaden Mockup" 
                className="w-full max-w-md mx-auto rounded-2xl shadow-2xl object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* LOGO SLIDER */}
      <section className="py-12 border-y border-white/10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-8 text-center">
          <p className="text-sm font-bold italic text-white/50 uppercase tracking-wider">Vertrauen von führenden Unternehmen</p>
        </div>
        <div 
          className="flex w-full overflow-hidden"
          style={{ 
            maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)', 
            WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' 
          }}
        >
          <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
            {[...clientLogos, ...clientLogos].map((logo, idx) => (
              <div key={idx} className="flex items-center justify-center w-72 mx-10 shrink-0">
                <img 
                  src={logo} 
                  alt="Kundenlogo" 
                  className="max-h-[94px] w-auto object-contain opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
                  referrerPolicy="no-referrer"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. PROBLEM AWARENESS */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold italic mb-8 text-atedo-accent">Die KI-Herausforderung</h2>
            <p className="text-lg md:text-xl leading-relaxed text-white/90 mb-8">
              Viele KMU sehen das Potenzial von KI — aber oft fehlt die Verbindung zwischen Technologie, Strategie und Kultur. Projekte veröden, Entscheidungen verzögern sich, oder Lösungen liefern nicht den erwarteten Nutzen.
            </p>
            <blockquote className="border-l-4 border-atedo-accent pl-6 text-left my-12">
              <p className="text-2xl md:text-3xl font-extrabold italic text-white mb-6">
                "Die Frage ist nicht, ob KI möglich ist, sondern wie sie zuverlässig, sicher und nachhaltig in Ihr Geschäft kommt."
              </p>
              <footer className="flex items-center gap-4 mt-6">
                <img 
                  src="https://raw.githubusercontent.com/atedo-ch/atedo-kiroadtrip-assets/main/david-naef.jpg" 
                  alt="David Naef" 
                  className="w-16 h-16 rounded-full object-cover border-2 border-white/10"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <div className="text-lg font-bold not-italic text-white">David Naef</div>
                  <div className="text-sm font-normal text-white/70 not-italic">Executive Partner, AI-Transformation & Digital Strategist</div>
                </div>
              </footer>
            </blockquote>
          </motion.div>
        </div>
      </section>

      {/* 3. THE SOLUTION / PROCESS */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold italic mb-6">Der atedo-KI-Roadtrip</h2>
            <p className="text-lg text-white/80">
              atedo begleitet Führungspersonen Schritt für Schritt zu einer klaren, wirksamen KI-Strategie. Unser Fahrplan kombiniert Strategiearbeit, Technologieverständnis und Organisationsentwicklung zu einem pragmatischen Prozess:
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Compass className="w-10 h-10 text-atedo-accent" />,
                title: "Data Performance Navigator",
                desc: "Wir identifizieren datengetriebene Potenziale und priorisieren Handlungsfelder."
              },
              {
                icon: <LayoutTemplate className="w-10 h-10 text-atedo-accent" />,
                title: "KI-Canvas",
                desc: "Projekte werden strukturiert geplant (Ziel, Nutzen, Verantwortlichkeiten, Erfolgskriterien)."
              },
              {
                icon: <ShieldCheck className="w-10 h-10 text-atedo-accent" />,
                title: "KI-Governance Framework",
                desc: "Leitplanken für Daten, Verantwortung und Compliance schaffen Vertrauen."
              }
            ].map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="border border-white/10 rounded-2xl p-8 transition-colors"
              >
                <div className="mb-6 bg-atedo-bg w-16 h-16 rounded-xl flex items-center justify-center border border-white/10 shadow-inner">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold italic mb-4">{step.title}</h3>
                <p className="text-white/70 leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. BENEFITS & RESULTS */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold italic mb-6">Warum es wirkt</h2>
              <p className="text-lg text-white/80 mb-8 leading-relaxed">
                Die atedo-Methodik vereint Strategie, Technologieverständnis und Organisationsentwicklung. Statt weiterer Einzelprojekte bekommen Sie eine priorisierte Roadmap, die das Führungsteam mitträgt — und damit echte Umsetzungsfähigkeit (Management Summary, Whitepaper).
              </p>
              
              <img 
                src="https://raw.githubusercontent.com/atedo-ch/atedo-kiroadtrip-assets/main/DSCF9165.jpeg" 
                alt="Warum es wirkt - atedo Methodik" 
                className="w-full rounded-xl shadow-2xl object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-atedo-bg border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl"
            >
              <h3 className="text-2xl font-bold italic mb-8 text-atedo-accent">Was Sie erwarten können:</h3>
              <ul className="space-y-6 mb-12">
                {[
                  "Klarheit über die 2–3 wichtigsten Anwendungsfälle mit hohem Nutzen",
                  "Eine priorisierte Roadmap mit konkreten nächsten Schritten",
                  "Ein gemeinsames Commitment im Führungsteam",
                  "Konkrete Templates, KPIs und Governance-Vorgaben"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-atedo-accent shrink-0 mt-1" />
                    <span className="text-lg text-white/90">{item}</span>
                  </li>
                ))}
              </ul>
              
              <button 
                onClick={() => setIsModalOpen(true)}
                className="w-full flex items-center justify-center gap-2 bg-atedo-accent hover:bg-[#ff4f5c] text-white px-8 py-4 rounded-lg font-bold italic transition-colors shadow-lg shadow-atedo-accent/20"
              >
                <Download size={20} />
                Jetzt Leitfaden herunterladen
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. TRUST & PERSONAL CLOSING */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <blockquote className="text-2xl md:text-3xl font-bold italic leading-relaxed mb-12">
              "Eine erfolgreiche KI-Strategie beginnt nicht mit Technologie, sondern mit Führung. Wer Orientierung schafft, schafft Vertrauen – und genau daraus entsteht Wirkung."
            </blockquote>
            
            <div className="flex flex-col items-center justify-center mb-12">
              <img 
                src="https://raw.githubusercontent.com/atedo-ch/atedo-kiroadtrip-assets/main/daniel-koelle.jpg" 
                alt="Daniel Kölle" 
                className="w-24 h-24 rounded-full object-cover mb-6 shadow-xl border-2 border-white/10"
                referrerPolicy="no-referrer"
              />
              <h4 className="text-xl font-bold italic">Daniel Kölle</h4>
              <p className="text-white/60">Executive Partner, Change & Digital Transformation for Growth</p>
            </div>

            <a 
              href="https://meetings.hubspot.com/daniel-koelle"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-atedo-accent text-atedo-accent hover:bg-atedo-accent hover:text-white px-8 py-4 rounded-lg font-bold italic transition-all"
            >
              <Coffee size={20} />
              Let's have coffee and chat!
            </a>
          </motion.div>
        </div>
      </section>

      {/* 6. FOOTER */}
      <footer className="border-t border-white/10 py-8 text-center text-white/40 text-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>&copy; {new Date().getFullYear()} atedo. Alle Rechte vorbehalten.</p>
          <div className="flex gap-6">
            <a href="https://www.atedo.ch/de/impressum" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Impressum</a>
            <a href="https://www.atedo.ch/de/datenschutz" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Datenschutz</a>
          </div>
        </div>
      </footer>

      {/* HUBSPOT MODAL */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
              onClick={() => setIsModalOpen(false)}
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-5xl bg-atedo-bg rounded-2xl shadow-2xl overflow-hidden border border-white/10 flex flex-col md:flex-row max-h-[90vh]"
            >
              <button 
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 z-10 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
              >
                <X size={24} />
              </button>
              
              {/* Left side: Mockup */}
              <div className="w-full md:w-1/2 bg-white/5 p-8 items-center justify-center border-b md:border-b-0 md:border-r border-white/10 hidden md:flex">
                <img 
                  src="https://raw.githubusercontent.com/atedo-ch/atedo-kiroadtrip-assets/main/KI-Canvas-Whitepaper_The-Roadtrip_560x823-v2.png" 
                  alt="KI-Roadtrip Leitfaden Mockup" 
                  className="w-full max-w-sm object-contain drop-shadow-2xl"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Right side: Form */}
              <div className="w-full md:w-1/2 p-8 md:p-12 overflow-y-auto">
                <h3 className="text-2xl md:text-3xl font-bold italic mb-2">Leitfaden herunterladen</h3>
                <p className="text-white/70 mb-8">Füllen Sie das Formular aus, um direkten Zugriff auf den Leitfaden und die Roadmap zu erhalten.</p>
                <div id="hubspotForm" className="min-h-[300px]"></div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}

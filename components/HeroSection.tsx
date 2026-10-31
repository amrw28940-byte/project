'use client';

import Link from 'next/link';

interface HeroProps {
  lang?: 'ar' | 'en';
}

export default function Hero({ lang = 'ar' }: HeroProps) {
  const t = lang === 'ar' ? {
    title: "تصميم مواقع احترافية وتحسين محركات بحث SEO",
    subtitle: "نحول رؤيتك الرقمية إلى واقع ملموس بتصميم استثنائي وأداء فائق السرعة يضمن ظهورك في قمة محركات البحث.",
    ctaExplore: "استكشف أعمالي السابقة",
    ctaContact: "ابدأ مشروعك معنا"
  } : {
    title: "Professional Web Design & SEO Services",
    subtitle: "Transforming your digital vision into reality with exceptional design and lightning-fast performance.",
    ctaExplore: "Explore My Work",
    ctaContact: "Start Your Project"
  };

  const whatsappNumber = "201020347946";
  const whatsappMessage = encodeURIComponent(
    lang === 'ar' 
      ? "مرحباً عمرو، أرغب في مناقشة مشروع جديد معك." 
      : "Hello Amr, I would like to discuss a new project with you."
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-[#f5f7f5] py-16 px-4 text-slate-900">
      
      <div className="absolute inset-0 bg-gradient-to-b from-[#f5f7f5] via-[#eaf4ee] to-[#f5f7f5]" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-200/30 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto w-full flex flex-col items-center text-center">
        
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100/90 border border-emerald-300 text-emerald-800 text-sm mb-6 shadow-sm backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
          AMR SALEM DIGITAL STUDIO
        </div>

        <div className="relative w-full rounded-3xl p-3 bg-white/60 backdrop-blur-xl border-2 border-emerald-400/60 shadow-[0_0_90px_15px_rgba(16,185,129,0.2)] group overflow-hidden">
          
          <div className="flex items-center justify-between px-4 py-2 mb-2">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-slate-300" />
              <span className="w-3 h-3 rounded-full bg-slate-300" />
              <span className="w-3 h-3 rounded-full bg-emerald-500" />
            </div>
            <div className="text-xs text-slate-500 font-mono tracking-widest font-semibold">
              hero.mp4 — preview
            </div>
            <div className="w-12" />
          </div>

          <div className="relative w-full min-h-[550px] sm:min-h-[600px] rounded-2xl overflow-hidden shadow-2xl bg-slate-950 flex flex-col items-center justify-between p-6 sm:p-12">
            
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            >
              <source src="/hero.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            <div className="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/40 to-slate-950/80 pointer-events-none" />

            <div className="relative z-20 flex flex-col items-center text-center max-w-3xl mt-4">
              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4 leading-tight">
                {t.title}
              </h1>
              
              <p className="text-base sm:text-lg text-slate-200 max-w-xl leading-relaxed">
                {t.subtitle}
              </p>
            </div>

            <div className="relative z-20 flex flex-col sm:flex-row items-center justify-center gap-4 w-full mt-8">
              <Link
                href="/projects"
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-semibold transition-all shadow-lg shadow-teal-900/50 text-center tracking-wide backdrop-blur-md border border-teal-400/30"
              >
                {t.ctaExplore}
              </Link>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold transition-all shadow-lg shadow-emerald-900/50 text-center tracking-wide backdrop-blur-md border border-emerald-400/30 flex items-center justify-center gap-2"
              >
                <span>{t.ctaContact}</span>
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
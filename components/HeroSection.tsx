'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  FaWhatsapp,
  FaRocket,
  FaBolt,
  FaSearchDollar,
  FaCheckCircle,
  FaShieldAlt,
  FaArrowLeft,
  FaArrowRight,
  FaCode,
  FaShoppingCart,
  FaGlobe,
  FaStar,
  FaAward,
  FaPlayCircle
} from 'react-icons/fa';

interface HeroProps {
  lang?: 'ar' | 'en';
}

export default function Hero({ lang = 'ar' }: HeroProps) {
  const isAr = lang === 'ar';

  const t = isAr
    ? {
        badge: "استوديو عمرو سالم الرقمي — هندسة الويب والـ SEO",
        statusTag: "متاح لاستقبال مشاريع جديدة",
        titleStart: "نبتكر مواقع إلكترونية خارقة السرعة",
        titleHighlight: "تتصدر نتائج جوجل SEO",
        titleEnd: "وتضاعف مبيعاتك",
        subtitle:
          "نحول رؤيتك التجارية إلى منصات رقمية ومتاجر إلكترونية فائقة الأداء بأحدث تقنيات Next.js 15 و WordPress و Shopify، مصممة خصيصاً لاكتساح المنافسين في مصر، السعودية، الإمارات، والكويت.",
        ctaContact: "ابدأ مشروعك عبر واتساب",
        ctaExplore: "استكشف سابقة أعمالي",
        browserUrl: "https://amrsalem-studio.com/next-gen-web",
        livePreview: "معاينة حية للأداء — 4K Studio",
        trustBadges: [
          "سرعة أداء 99% (Core Web Vitals)",
          "تأسيس هندسي شامل للـ SEO",
          "ربط الدفع والشحن في مصر والخليج",
          "ملكية كاملة 100% ودعم فني مباشر"
        ],
        quickServicesLabel: "أبرز خدماتنا التخصصية:",
        quickServices: [
          { name: "تطوير مواقع Next.js", href: "/services/nextjs" },
          { name: "تصدر نتائج جوجل SEO", href: "/services/seo" },
          { name: "متاجر شوبيفاي Shopify", href: "/services/shopify" },
          { name: "مواقع ووردبريس", href: "/services/wordpress" },
          { name: "صفحات الهبوط CRO", href: "/services/landing-pages" },
          { name: "فيديوهات الذكاء الاصطناعي AI", href: "/services/vidioai" }
        ],
        stats: [
          { value: "+350", label: "مشروع ناجح في مصر والخليج" },
          { value: "99.9%", label: "مؤشر سرعة Google PageSpeed" },
          { value: "#1", label: "صدارة الكلمات الشرائية في جوجل" },
          { value: "4.5X", label: "نمو في معدل التحويل والمبيعات" }
        ],
        floatingCard1Title: "أداء قياسي 99/100",
        floatingCard1Sub: "Next.js 15 & Clean Code",
        floatingCard2Title: "تصدر الصفحة الأولى #1",
        floatingCard2Sub: "Technical & Semantic SEO"
      }
    : {
        badge: "AMR SALEM DIGITAL STUDIO — WEB ENGINEERING & SEO",
        statusTag: "Available for New Projects",
        titleStart: "Building Lightning-Fast Websites That",
        titleHighlight: "Dominate Google SEO",
        titleEnd: "& Multiply Your Sales",
        subtitle:
          "Transforming your business vision into high-converting digital platforms and e-commerce stores powered by Next.js 15, WordPress, and Shopify across Egypt, Saudi Arabia, UAE, and Kuwait.",
        ctaContact: "Start Project on WhatsApp",
        ctaExplore: "Explore My Portfolio",
        browserUrl: "https://amrsalem-studio.com/next-gen-web",
        livePreview: "Live Performance Preview — 4K",
        trustBadges: [
          "99% Google Core Web Vitals",
          "Advanced Technical & Local SEO",
          "Full MENA Payment & Shipping Sync",
          "100% Ownership & Direct Support"
        ],
        quickServicesLabel: "Core Specialized Services:",
        quickServices: [
          { name: "Next.js Development", href: "/services/nextjs" },
          { name: "Search Engine Optimization (SEO)", href: "/services/seo" },
          { name: "Shopify Stores", href: "/services/shopify" },
          { name: "WordPress & WooCommerce", href: "/services/wordpress" },
          { name: "High-CRO Landing Pages", href: "/services/landing-pages" },
          { name: "AI Commercial Videos", href: "/services/vidioai" }
        ],
        stats: [
          { value: "+350", label: "Successful Projects in MENA" },
          { value: "99.9%", label: "Google PageSpeed Score" },
          { value: "#1", label: "Top Google SERP Rankings" },
          { value: "4.5X", label: "Conversion Rate Growth" }
        ],
        floatingCard1Title: "99/100 Speed Score",
        floatingCard1Sub: "Next.js 15 & Clean Code",
        floatingCard2Title: "#1 Google Ranking",
        floatingCard2Sub: "Technical & Semantic SEO"
      };

  const whatsappNumber = "201020347946";
  const displayPhone = "01020347946";
  const whatsappMessage = encodeURIComponent(
    isAr
      ? "مرحباً م. عمرو، أرغب في مناقشة مشروع جديد وطلب استشارة مجانية."
      : "Hello Eng. Amr, I would like to discuss a new project with you."
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <section
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-[#f5f7f5] pt-28 pb-20 md:pt-36 md:pb-28 px-4 sm:px-6 lg:px-10 text-slate-900 border-b-4 border-emerald-500"
      dir={isAr ? 'rtl' : 'ltr'}
    >
      {/* 1. الخلفية الهندسية المتقدمة والتوهج الزمردي */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#f5f7f5] via-[#eaf4ee] to-[#f5f7f5] z-0" />
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(16, 185, 129, 0.08) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(16, 185, 129, 0.08) 1px, transparent 1px)
          `,
          backgroundSize: '55px 55px'
        }}
      />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[500px] bg-emerald-300/25 rounded-full blur-[110px] pointer-events-none z-0" />

      <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col items-center">
        
        {/* 2. الشارة العلوية المزدوجة (Studio Badge & Live Status) */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-7"
        >
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-900 border-2 border-emerald-500 text-white text-xs sm:text-sm font-black shadow-md">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
            <span className="tracking-wide">{t.badge}</span>
          </div>

          <div className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-100 border border-emerald-400 text-emerald-900 text-xs font-black shadow-sm">
            <FaBolt className="text-emerald-600 w-3.5 h-3.5" />
            <span>{t.statusTag}</span>
          </div>
        </motion.div>

        {/* 3. إطار الاستوديو الزجاجي العملاق الذي يحتضن الفيديو والمحتوى */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative w-full rounded-[2rem] p-2.5 sm:p-4 bg-white/80 backdrop-blur-2xl border-4 border-emerald-500 shadow-[0_25px_90px_-15px_rgba(16,185,129,0.28)] group overflow-hidden"
        >
          {/* شريط نافذة الاستوديو العلوي (Browser Top Bar) */}
          <div
            className="flex items-center justify-between px-4 py-3 mb-2.5 bg-slate-900 rounded-2xl border border-emerald-500/40 text-white"
            dir="ltr"
          >
            {/* نقاط النافذة (بدون لون أحمر نهائياً) */}
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-emerald-400 inline-block shadow-[0_0_8px_#34d399]" />
              <span className="w-3 h-3 rounded-full bg-teal-500 inline-block" />
              <span className="w-3 h-3 rounded-full bg-slate-600 inline-block" />
            </div>

            {/* شريط الرابط الآمن وسط المتصفح */}
            <div className="hidden md:flex items-center gap-2 bg-slate-950/90 border border-slate-700 px-4 py-1 rounded-xl text-xs font-mono text-emerald-300">
              <FaShieldAlt className="text-emerald-400 w-3.5 h-3.5" />
              <span>{t.browserUrl}</span>
            </div>

            {/* مؤشر المعاينة */}
            <div className="flex items-center gap-2 text-xs font-mono text-slate-300 font-bold">
              <FaPlayCircle className="text-emerald-400 w-4 h-4 animate-pulse" />
              <span className="hidden sm:inline">{t.livePreview}</span>
              <span className="sm:hidden">hero.mp4</span>
            </div>
          </div>

          {/* 4. منطقة الفيديو الرئيسية والطبقة التفاعلية فوقه */}
          <div className="relative w-full min-h-[580px] sm:min-h-[640px] lg:min-h-[680px] rounded-2xl overflow-hidden shadow-2xl bg-slate-950 flex flex-col items-center justify-between p-6 sm:p-10 md:p-14 border-2 border-emerald-500/30">
            
            {/* الفيديو الخلفي */}
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 opacity-85"
            >
              <source src="/hero.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* طبقات التدرج اللوني الداكن لضمان وضوح النص 100% فوق الفيديو */}
            <div className="absolute inset-0 bg-gradient-to-b from-slate-950/85 via-slate-950/65 to-slate-950/95 pointer-events-none" />
            <div
              className="absolute inset-0 pointer-events-none opacity-25"
              style={{
                backgroundImage:
                  'radial-gradient(circle at center, rgba(16, 185, 129, 0.35) 0%, transparent 70%)'
              }}
            />

            {/* البطاقات الزجاجية العائمة على الجانبين للشاشات الكبيرة (Floating Trust Widgets) */}
            <div className="hidden xl:flex items-center gap-3 absolute top-8 right-8 z-20 bg-slate-900/85 backdrop-blur-md border-2 border-emerald-400/80 px-4 py-2.5 rounded-2xl shadow-xl">
              <div className="bg-emerald-500/20 p-2 rounded-xl text-emerald-400">
                <FaBolt className="w-5 h-5" />
              </div>
              <div className="text-right">
                <div className="text-xs font-black text-white">{t.floatingCard1Title}</div>
                <div className="text-[10px] font-mono text-emerald-300 font-bold">{t.floatingCard1Sub}</div>
              </div>
            </div>

            <div className="hidden xl:flex items-center gap-3 absolute top-8 left-8 z-20 bg-slate-900/85 backdrop-blur-md border-2 border-emerald-400/80 px-4 py-2.5 rounded-2xl shadow-xl">
              <div className="bg-emerald-500/20 p-2 rounded-xl text-emerald-400">
                <FaSearchDollar className="w-5 h-5" />
              </div>
              <div className="text-right">
                <div className="text-xs font-black text-white">{t.floatingCard2Title}</div>
                <div className="text-[10px] font-mono text-emerald-300 font-bold">{t.floatingCard2Sub}</div>
              </div>
            </div>

            {/* شريط النجوم والأسواق المستهدفة أعلى العنوان */}
            <div className="relative z-20 flex flex-wrap items-center justify-center gap-2 bg-slate-900/80 backdrop-blur-md border border-emerald-400/50 px-4 py-1.5 rounded-full text-xs font-black text-emerald-300 mt-2">
              <div className="flex items-center gap-0.5 text-amber-400">
                <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
              </div>
              <span className="text-white">|</span>
              <span>🇪🇬 مصر • 🇸🇦 السعودية • 🇦🇪 الإمارات • 🇰🇼 الكويت</span>
            </div>

            {/* المحتوى الوسطي: العنوان الرئيسي، الوصف، نقاط الثقة، وأزرار الـ CTA */}
            <div className="relative z-20 flex flex-col items-center text-center max-w-4xl my-auto py-6">
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white mb-6 leading-[1.22] drop-shadow-lg">
                {t.titleStart}{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-emerald-400 to-teal-300 underline decoration-emerald-500/80 decoration-4 underline-offset-8">
                  {t.titleHighlight}
                </span>{" "}
                {t.titleEnd}
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-slate-200 font-bold max-w-3xl leading-relaxed mb-8 drop-shadow">
                {t.subtitle}
              </p>

              {/* 4 شارات مميزات سريعة داخل الهيرو */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 w-full max-w-4xl mb-9">
                {t.trustBadges.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-center sm:justify-start gap-2 bg-slate-900/80 hover:bg-slate-900 backdrop-blur-md border border-emerald-500/50 px-3.5 py-2.5 rounded-xl text-xs font-black text-slate-100 transition-colors"
                  >
                    <FaCheckCircle className="text-emerald-400 w-4 h-4 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* أزرار الـ Call To Action الرئيسية */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={t.ctaContact}
                  className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-base md:text-lg transition-all shadow-[0_12px_30px_-5px_rgba(16,185,129,0.6)] border-2 border-white/80 flex items-center justify-center gap-3 transform hover:-translate-y-1"
                >
                  <FaWhatsapp className="w-6 h-6 text-slate-950" />
                  <span>{t.ctaContact}</span>
                  <span className="text-xs font-mono bg-slate-950 text-emerald-400 px-2.5 py-1 rounded-lg" dir="ltr">
                    {displayPhone}
                  </span>
                </a>

                <Link
                  href="/projects"
                  title={t.ctaExplore}
                  className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-slate-900/90 hover:bg-slate-800 text-white font-black text-base md:text-lg transition-all shadow-lg backdrop-blur-md border-2 border-emerald-400 flex items-center justify-center gap-2.5 transform hover:-translate-y-1"
                >
                  <span>{t.ctaExplore}</span>
                  {isAr ? (
                    <FaArrowLeft className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <FaArrowRight className="w-4 h-4 text-emerald-400" />
                  )}
                </Link>
              </div>
            </div>

            {/* شريط الروابط السريعة للخدمات أسفل الفيديو مباشرة */}
            <div className="relative z-20 w-full pt-5 border-t border-slate-800/90 flex flex-col lg:flex-row items-center justify-between gap-3">
              <span className="text-xs font-black text-emerald-400 whitespace-nowrap">
                ⚡ {t.quickServicesLabel}
              </span>
              <div className="flex flex-wrap items-center justify-center gap-2">
                {t.quickServices.map((srv, idx) => (
                  <Link
                    key={idx}
                    href={srv.href}
                    title={srv.name}
                    className="px-3 py-1.5 rounded-xl bg-slate-900/90 hover:bg-emerald-500 text-slate-200 hover:text-slate-950 border border-emerald-500/40 hover:border-white text-xs font-black transition-all"
                  >
                    {srv.name}
                  </Link>
                ))}
              </div>
            </div>

          </div>

          {/* 5. شريط الإحصائيات المدمج أسفل إطار الفيديو (Bottom Studio Metrics) */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mt-3 pt-1">
            {t.stats.map((st, idx) => (
              <div
                key={idx}
                className="bg-slate-900 text-white rounded-2xl p-4 border-2 border-emerald-500/60 flex flex-col items-center justify-center text-center shadow-md"
              >
                <span className="text-2xl sm:text-3xl font-black text-emerald-400 mb-0.5">
                  {st.value}
                </span>
                <span className="text-xs sm:text-sm font-bold text-slate-200">
                  {st.label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaExternalLinkAlt,
  FaWhatsapp,
  FaRocket,
  FaCheckCircle,
  FaShieldAlt,
  FaPause,
  FaPlay
} from "react-icons/fa";

interface PortfolioProps {
  lang?: "ar" | "en";
}

export default function PortfolioSection({ lang = "ar" }: PortfolioProps) {
  const isAr = lang === "ar";
  const [isPaused, setIsPaused] = useState<boolean>(false);

  const whatsappNumber = "201020347946";
  const displayPhone = "01020347946";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    isAr
      ? "مرحباً م. عمرو، شاهدت سابقة أعمالك المميزة وأرغب في تصميم موقع لمشروعي."
      : "Hello Eng. Amr, I saw your portfolio and would like to build a website for my project."
  )}`;

  // مصفوفة المشاريع الـ 12 مع ضبط الـ ALT والـ TITLE لكل صورة ورابط لأقوى SEO
  const projects = [
    {
      name: "Unique Web Solutions",
      domain: "uniquee-ws.com",
      image: "/uniquee-ws.com.webp",
      url: "https://www.uniquee-ws.com/",
      tagAr: "وكالة رقمية وبرمجيات",
      tagEn: "Digital Agency",
      altAr: "تصميم موقع شركة يونيك للحلول الرقمية وبرمجة المواقع - Unique Web Solutions",
      titleAr: "معاينة تصميم وتطوير موقع شركة Unique Web Solutions لتصميم المواقع والسيو",
      altEn: "Unique Web Solutions Digital Agency Website Design & SEO",
      titleEn: "Unique Web Solutions - Web Design & SEO Portfolio by Amr Salem"
    },
    {
      name: "Ads Agency Marketing",
      domain: "adsagencymarketing.com",
      image: "/adsagencymarketing.com.jpg",
      url: "https://www.adsagencymarketing.com/",
      tagAr: "تسويق رقمي وإعلانات",
      tagEn: "Marketing Agency",
      altAr: "تصميم موقع شركة تسويق إلكتروني وإعلانات - Ads Agency Marketing",
      titleAr: "تصميم وتطوير موقع وكالة Ads Agency Marketing للتسويق الرقمي",
      altEn: "Ads Agency Marketing Website Design & Development",
      titleEn: "Ads Agency Marketing - Digital Marketing Website by Amr Salem"
    },
    {
      name: "AHMT Egypt Travel",
      domain: "ahmtegypttravel.com",
      image: "/ahmtegypttravel.com.webp",
      url: "https://www.ahmtegypttravel.com/",
      tagAr: "سياحة وسفر وحجوزات",
      tagEn: "Tourism & Travel",
      altAr: "تصميم موقع شركة سياحة وسفر في مصر - AHMT Egypt Travel",
      titleAr: "تصميم وبرمجة موقع شركة AHMT Egypt Travel للسياحة والرحلات",
      altEn: "AHMT Egypt Travel Tourism Website Design & Booking System",
      titleEn: "AHMT Egypt Travel - Tourism Website Portfolio by Amr Salem"
    },
    {
      name: "Amn Khaligi",
      domain: "amnkhaligi.com",
      image: "/amnkhaligi.com.webp",
      url: "https://www.amnkhaligi.com/",
      tagAr: "أنظمة أمنية وخليجية",
      tagEn: "Security Solutions",
      altAr: "تصميم موقع شركة أمن خليجي للأنظمة الأمنية - Amn Khaligi",
      titleAr: "تصميم وتطوير موقع أمن خليجي Amn Khaligi للخدمات والأنظمة الأمنية",
      altEn: "Amn Khaligi Security Systems Website Design",
      titleEn: "Amn Khaligi - Corporate Website Design by Amr Salem"
    },
    {
      name: "Cobra Plast",
      domain: "cobra-plast.com",
      image: "/cobra-plast.com.webp",
      url: "https://cobra-plast.com/",
      tagAr: "مصنع وصناعات بلاستيكية",
      tagEn: "Industrial & Factory",
      altAr: "تصميم موقع مصنع كوبرا بلاست للصناعات البلاستيكية - Cobra Plast",
      titleAr: "تصميم وتطوير موقع مصنع Cobra Plast وتأسيس السيو الصناعي",
      altEn: "Cobra Plast Factory & Industrial Website Design",
      titleEn: "Cobra Plast - Industrial B2B Website by Amr Salem"
    },
    {
      name: "El Subaie",
      domain: "elsubaie.com",
      image: "/elsubaie.com.webp",
      url: "https://elsubaie.com/",
      tagAr: "شركة أعمال وتجارة",
      tagEn: "Corporate Business",
      altAr: "تصميم موقع شركة السبيعي للتجارة والأعمال - El Subaie",
      titleAr: "تصميم وبرمجة موقع شركة السبيعي El Subaie الرسمي",
      altEn: "El Subaie Corporate Business Website Design",
      titleEn: "El Subaie - Corporate Web Development by Amr Salem"
    },
    {
      name: "Hala Selim",
      domain: "halaselim.com",
      image: "/halaselim.com.webp",
      url: "https://www.halaselim.com/",
      tagAr: "منصة شخصية واستشارية",
      tagEn: "Personal Brand",
      altAr: "تصميم موقع ومنصة هالة سليم الاستشارية - Hala Selim",
      titleAr: "تصميم وتطوير موقع د. هالة سليم Hala Selim وحجز الاستشارات",
      altEn: "Hala Selim Personal Brand & Consulting Website Design",
      titleEn: "Hala Selim - Personal Brand Website by Amr Salem"
    },
    {
      name: "Mdadak",
      domain: "mdadak.com",
      image: "/mdadak.com.webp",
      url: "https://mdadak.com/",
      tagAr: "منصة خدمات وحلول",
      tagEn: "Services Platform",
      altAr: "تصميم موقع منصة مدادك للخدمات الرقمية - Mdadak",
      titleAr: "تصميم وبرمجة منصة مدادك Mdadak وتصدر محركات البحث",
      altEn: "Mdadak Digital Services Platform Website Design",
      titleEn: "Mdadak - Web Platform Development by Amr Salem"
    },
    {
      name: "Pest Control SA",
      domain: "pest-control-sa.vercel.app",
      image: "/pest-control-sa.vercel.app.webp",
      url: "https://pest-control-sa.vercel.app/",
      tagAr: "خدمات منزلية بالسعودية (Next.js)",
      tagEn: "Saudi Services (Next.js)",
      altAr: "تصميم موقع شركة مكافحة حشرات وخدمات منزلية في السعودية بـ Next.js",
      titleAr: "برمجة موقع خدمات منزلية في السعودية بتقنية Next.js فائق السرعة",
      altEn: "Pest Control Saudi Arabia Next.js Website Design",
      titleEn: "Pest Control SA - Next.js High-Speed Website by Amr Salem"
    },
    {
      name: "Pure Husk Gold",
      domain: "purehuskgold.myeasyorders.com",
      image: "/purehuskgold.myeasyorders.com.jpg",
      url: "https://purehuskgold.myeasyorders.com/",
      tagAr: "متجر إلكتروني وصفحة هبوط",
      tagEn: "E-Commerce & Funnel",
      altAr: "تصميم متجر وصفحة هبوط Pure Husk Gold عالية التحويل",
      titleAr: "تصميم متجر وصفحة بيع مباشر Pure Husk Gold لمضاعفة المبيعات",
      altEn: "Pure Husk Gold E-Commerce Store & Sales Funnel Design",
      titleEn: "Pure Husk Gold - High Converting Store by Amr Salem"
    },
    {
      name: "The Light House",
      domain: "thelighthousee.com",
      image: "/the-light-house-kappa.vercel.appen.jpg",
      url: "https://www.thelighthousee.com/en",
      tagAr: "منصة سياحة وغوص (Next.js)",
      tagEn: "Diving & Tourism (Next.js)",
      altAr: "تصميم موقع ذا لايت هاوس للسياحة والغوص بـ Next.js - The Light House",
      titleAr: "تصميم وبرمجة منصة The Light House العالمية بتقنية Next.js",
      altEn: "The Light House Diving & Tourism Next.js Website Design",
      titleEn: "The Light House - Next.js Web Application by Amr Salem"
    },
    {
      name: "Travel Friend AG",
      domain: "travelfriend-ag.com",
      image: "/travelfriend-ag.com.webp",
      url: "https://www.travelfriend-ag.com/",
      tagAr: "برامج سياحية دولية",
      tagEn: "International Tourism",
      altAr: "تصميم موقع شركة ترافل فريند للسياحة الدولية - Travel Friend AG",
      titleAr: "تصميم وتطوير موقع شركة Travel Friend AG للبرامج السياحية والرحلات",
      altEn: "Travel Friend AG International Tourism Website Design",
      titleEn: "Travel Friend AG - Travel Website Design by Amr Salem"
    }
  ];

  // دالة مساعدة لرسم الكارت حتى نحافظ على نظافة الكود والـ SEO
  const renderProjectCard = (proj: (typeof projects)[0], index: number, isDuplicate = false) => {
    const imgAlt = isAr ? proj.altAr : proj.altEn;
    const imgTitle = isAr ? proj.titleAr : proj.titleEn;

    return (
      <div
        key={`${proj.domain}-${isDuplicate ? "dup" : "main"}-${index}`}
        className="flex-shrink-0 group bg-white rounded-3xl border-4 border-emerald-500 shadow-[0_25px_55px_-15px_rgba(0,0,0,0.16)] hover:shadow-[0_30px_65px_-10px_rgba(16,185,129,0.4)] transition-all duration-300 hover:-translate-y-2 overflow-hidden flex flex-col justify-between"
      >
        {/* الشريط العلوي لكارت الموقع (Browser Header) */}
        <div className="bg-slate-900 px-4 py-3 border-b-2 border-emerald-500 flex items-center justify-between gap-4">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-teal-500 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-slate-600 inline-block" />
          </div>

          <div className="flex items-center gap-1.5 bg-slate-950 border border-slate-700 px-3 py-1 rounded-lg text-xs font-mono text-emerald-300 truncate max-w-[230px]">
            <FaShieldAlt className="text-emerald-400 w-3 h-3 flex-shrink-0" />
            <span className="truncate">{proj.domain}</span>
          </div>

          <span className="bg-emerald-500/20 text-emerald-300 border border-emerald-400/50 text-[10px] font-black px-2.5 py-0.5 rounded-full whitespace-nowrap">
            {isAr ? proj.tagAr : proj.tagEn}
          </span>
        </div>

        {/* حاوية الصورة: تعرض الصورة بالطول والعرض الكاملين مع ALT و TITLE كاملين للـ SEO */}
        <a
          href={proj.url}
          target="_blank"
          rel="noopener noreferrer"
          title={imgTitle}
          className="relative bg-slate-100 flex items-center justify-center p-2 overflow-hidden"
        >
          <img
            src={proj.image}
            alt={isDuplicate ? `${imgAlt} - عرض إضافي` : imgAlt}
            title={imgTitle}
            width={340}
            height={440}
            loading="lazy"
            className="h-[360px] sm:h-[440px] w-auto max-w-none object-contain rounded-xl transition-transform duration-500 group-hover:scale-[1.02]"
          />

          {/* طبقة شفافة تظهر عند تمرير الماوس لفتح الموقع */}
          <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
            <div className="bg-emerald-500 text-slate-950 font-black text-sm sm:text-base px-6 py-3 rounded-2xl shadow-xl flex items-center gap-2 transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300 border-2 border-white">
              <span>{isAr ? "تصفح الموقع الحي الآن" : "Visit Live Website"}</span>
              <FaExternalLinkAlt className="w-4 h-4" />
            </div>
          </div>
        </a>

        {/* الشريط السفلي لكارت المشروع */}
        <div
          className="p-4 bg-white border-t-2 border-emerald-100 flex items-center justify-between gap-4"
          dir={isAr ? "rtl" : "ltr"}
        >
          <div>
            <h3 className="font-black text-slate-900 text-base sm:text-lg leading-tight">
              {proj.name}
            </h3>
            <span className="text-xs font-bold text-emerald-700 flex items-center gap-1 mt-0.5">
              <FaCheckCircle className="w-3 h-3" />
              <span>{isAr ? "تصميم وتطوير وتأسيس SEO" : "Web Design & SEO"}</span>
            </span>
          </div>

          <a
            href={proj.url}
            target="_blank"
            rel="noopener noreferrer"
            title={imgTitle}
            className="bg-slate-900 hover:bg-emerald-600 text-white font-black text-xs px-4 py-2.5 rounded-xl flex items-center gap-2 transition-colors shadow-sm"
          >
            <span>{isAr ? "زيارة الموقع" : "Live Site"}</span>
            <FaExternalLinkAlt className="w-3 h-3 text-emerald-400 group-hover:text-white" />
          </a>
        </div>
      </div>
    );
  };

  return (
    <section
      id="projects"
      className="relative w-full overflow-hidden bg-[#f5f7f5] py-24 border-b-4 border-emerald-500 text-slate-900"
      dir={isAr ? "rtl" : "ltr"}
    >
      {/* ستايل أنيميشن شريط الأخبار المستمر مع التوقف عند تمرير الماوس */}
      <style>{`
        @keyframes portfolioMarquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-portfolio-ticker {
          display: flex;
          width: max-content;
          animation: portfolioMarquee 55s linear infinite;
        }
        .animate-portfolio-ticker:hover,
        .animate-portfolio-ticker.paused {
          animation-play-state: paused;
        }
      `}</style>

      {/* خلفية الشبكة الهندسية */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(16, 185, 129, 0.08) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(16, 185, 129, 0.08) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px"
        }}
      />

      {/* هالة خضراء خلفية */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[450px] pointer-events-none z-0"
        style={{
          background: "radial-gradient(circle, rgba(16, 185, 129, 0.12) 0%, transparent 70%)",
          filter: "blur(90px)"
        }}
      />

      {/* 1. عنوان السكشن العلوي */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10 mb-14 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 bg-emerald-100 border-2 border-emerald-500 text-emerald-900 px-4 py-1.5 rounded-full font-black text-xs sm:text-sm mb-4 shadow-sm">
            <FaRocket className="text-emerald-600 w-4 h-4" />
            <span>
              {isAr
                ? "معرض أعمالنا الحية — اضغط على أي مشروع لمعاينته مباشرة"
                : "LIVE PORTFOLIO — CLICK ANY PROJECT TO VISIT"}
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 mb-4 leading-tight">
            {isAr ? "نماذج حقيقية من " : "Real Projects From "}
            <span className="text-emerald-600 underline decoration-emerald-400 decoration-4 underline-offset-8">
              {isAr ? "سابقة أعمالنا المتصدرة" : "Our Top-Ranked Work"}
            </span>
          </h2>

          <p className="text-slate-700 font-bold text-base sm:text-lg max-w-3xl mx-auto leading-relaxed mb-6">
            {isAr
              ? "مواقع شركات، منصات سياحية، مصانع، ومتاجر إلكترونية قمنا بتصميمها وبرمجتها وتهيئتها لمحركات البحث. مرر الماوس لإيقاف الشريط واضغط لفتح الموقع الحي:"
              : "Corporate websites, tourism platforms, factories, and e-commerce stores engineered for speed and SEO. Hover to pause and click to visit the live site:"}
          </p>

          {/* زر تحكم يدوي لإيقاف أو تشغيل حركة الشريط */}
          <div className="flex items-center justify-center gap-3">
            <button
              type="button"
              onClick={() => setIsPaused(!isPaused)}
              title={isAr ? "إيقاف أو تشغيل شريط الأعمال" : "Pause or Resume Portfolio Ticker"}
              className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-emerald-400 border-2 border-emerald-500 px-4 py-2 rounded-xl text-xs font-black transition-all shadow-sm cursor-pointer"
            >
              {isPaused ? (
                <>
                  <FaPlay className="w-3 h-3" />
                  <span>{isAr ? "تشغيل حركة الشريط" : "Resume Ticker"}</span>
                </>
              ) : (
                <>
                  <FaPause className="w-3 h-3" />
                  <span>{isAr ? "إيقاف مؤقت للتصفح" : "Pause Ticker"}</span>
                </>
              )}
            </button>
          </div>
        </motion.div>
      </div>

      {/* 2. شريط البورتفوليو المتحرك اللانهائي */}
      <div className="relative w-full z-10 py-4" dir="ltr">
        <div className="hidden md:block absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#f5f7f5] to-transparent z-20 pointer-events-none" />
        <div className="hidden md:block absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#f5f7f5] to-transparent z-20 pointer-events-none" />

        <div className={`animate-portfolio-ticker gap-8 px-4 ${isPaused ? "paused" : ""}`}>
          {/* المجموعة الأساسية لـ 12 مشروع */}
          {projects.map((proj, index) => renderProjectCard(proj, index, false))}
          {/* المجموعة المكملة لاستمرارية الشريط مع تمييز الـ ALT والـ Title */}
          {projects.map((proj, index) => renderProjectCard(proj, index, true))}
        </div>
      </div>

      {/* 3. شريط الـ Call To Action السفلي تحت السلايدر */}
      <div className="max-w-5xl mx-auto px-4 sm:px-8 relative z-10 mt-14">
        <div className="bg-slate-900 text-white border-4 border-emerald-500 rounded-3xl p-6 sm:p-8 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-right">
            <h3 className="text-xl sm:text-2xl font-black text-white mb-1">
              {isAr
                ? "هل تريد موقعاً إلكترونياً بنفس القوة والاحترافية لمشروعك؟"
                : "Want a High-Performance Website Like These for Your Business?"}
            </h3>
            <p className="text-slate-300 font-bold text-xs sm:text-sm">
              {isAr
                ? "تواصل معنا الآن عبر الواتساب للحصول على استشارة مجانية وعرض سعر مخصص لمجالك."
                : "Contact us now on WhatsApp for a free consultation and custom quote."}
            </p>
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            title={isAr ? "تواصل عبر واتساب لتصميم موقعك الإلكتروني" : "Contact on WhatsApp for Web Design"}
            className="w-full md:w-auto bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-sm sm:text-base px-8 py-4 rounded-2xl shadow-lg flex items-center justify-center gap-2.5 whitespace-nowrap transition-transform hover:-translate-y-0.5"
          >
            <FaWhatsapp className="w-6 h-6" />
            <span>{isAr ? "صمم موقعك الآن:" : "Start Now:"}</span>
            <span className="font-mono text-xs bg-slate-950 text-emerald-400 px-2 py-0.5 rounded-md" dir="ltr">
              {displayPhone}
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
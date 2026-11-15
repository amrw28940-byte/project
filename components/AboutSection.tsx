"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaWhatsapp,
  FaCode,
  FaSearchDollar,
  FaRocket,
  FaCheckCircle,
  FaShieldAlt,
  FaBolt,
  FaAward,
  FaGlobe,
  FaLaptopCode,
  FaShoppingCart,
  FaUserCheck,
  FaHandshake,
  FaArrowLeft,
  FaArrowRight,
  FaServer,
  FaChartLine
} from "react-icons/fa";

interface AboutProps {
  lang?: "ar" | "en";
}

export default function AboutSection({ lang = "ar" }: AboutProps) {
  const isAr = lang === "ar";
  const [activeTab, setActiveTab] = useState<number>(0);

  const whatsappNumber = "201020347946";
  const displayPhone = "01020347946";
  const whatsappMessage = encodeURIComponent(
    isAr
      ? "مرحباً م. عمرو، قرأت نبذتك التعريفية وأرغب في التعاون معك في مشروع جديد."
      : "Hello Eng. Amr, I read your bio and would like to collaborate with you on a new project."
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  const content = isAr
    ? {
        badge: "الهندسة البرمجية تلتقي بذكاء التسويق والـ SEO",
        titleStart: "من أنا؟",
        titleHighlight: "م. عمرو سالم",
        roleTitle: "مطور Full-Stack & خبير تحسين محركات البحث (SEO)",
        mainBio:
          "أنا عمرو سالم، مطور وباحث تقني متخصص في تصميم وتطوير المواقع وتطبيقات الويب المتقدمة (Next.js 15 & WordPress) وهندسة حلول المتاجر الإلكترونية (Shopify & WooCommerce)، بالإضافة إلى تحسين محركات البحث التقني والدلالي (SEO). أمتلك خبرة تتجاوز العقد من العمل التقني الاحترافي، حيث أكرس خبرتي وشغفي لتحويل التحديات البرمجية المعقدة إلى منصات رقمية فائقة السرعة، جذابة، وعالية العائد الاستثماري.",
        tabs: [
          {
            tabLabel: "رؤيتي ومنهجيتي",
            heading: "شراكة تقنية حقيقية تصنع الصدارة لمشروعك",
            description:
              "هدفي ليس مجرد تسليمك كوداً برمجياً أو موقعاً تقليدياً؛ بل بناء أصل رقمي مستدام يتصدر الصفحة الأولى في جوجل، يفتح في أجزاء من الثانية على الجوال، ويحول الزوار إلى عملاء ومبيعات فعلية في أسواق مصر، السعودية، الإمارات، والكويت.",
            points: [
              "تعامل مباشر مع المطور بدون وسطاء لضمان أعلى دقة وسرعة",
              "دمج معايير الـ SEO ومعدل التحويل (CRO) في كل سطر كود",
              "ملكية كاملة 100% للعميل مع تدريب شامل ودعم فني مستمر",
              "حلول مخصصة تناسب طبيعة السوق المصري والخليجي"
            ]
          },
          {
            tabLabel: "الترسانة التقنية",
            heading: "أحدث تقنيات الويب العالمية تحت سقف واحد",
            description:
              "أختار لكل مشروع التقنية الهندسية التي تخدم أهدافه التجارية وتضمن له التفوق الكاسح على المنافسين في السرعة والأمان والأرشفة:",
            points: [
              "Next.js 15, React 19, TypeScript & Tailwind CSS",
              "Custom WordPress, PHP Shortcodes & High-Speed WooCommerce",
              "Shopify Liquid OS 2.0, Storefront API & Headless Commerce",
              "Technical SEO, JSON-LD Schema, Core Web Vitals & CAPI Tracking"
            ]
          },
          {
            tabLabel: "لماذا تعمل معي؟",
            heading: "التزام صارم بالجودة، الأمان، والعائد البيعي",
            description:
              "على مدار أكثر من 10 سنوات و +150 مشروعاً ناجحاً، بنيت سمعتي على الجمع بين الكود النقي الخالي من الأخطاء وبين الفهم العميق لسلوك المشتري العربي:",
            points: [
              "سرعة أداء قياسية (96% - 99%) على مؤشرات Google PageSpeed",
              "ربط متكامل لبوابات الدفع (مدى، تابي، تمارا، Paymob، KNET) والشحن",
              "حماية سيبرانية مشددة واستقرار تام أثناء الحملات الإعلانية الكبرى",
              "التزام تام بالمواعيد المتفق عليها وشفافية مطلقة في العمل"
            ]
          }
        ],
        quickHighlights: [
          { number: "+10", label: "سنوات خبرة تقنية" },
          { number: "+150", label: "مشروع متصدر وناجح" },
          { number: "99%", label: "كفاءة سرعة الكود" },
          { number: "4 دول", label: "مصر والخليج العربي" }
        ],
        ctaWhatsapp: "تحدث معي مباشرة عبر واتساب",
        ctaContactPage: "طلب استشارة وعرض سعر",
        videoWindowTitle: "amr-salem-profile.mp4 — studio",
        videoBadgeTop: "مطور معتمد & خبير SEO",
        videoBadgeBottom: "تغطية شاملة: 🇪🇬 مصر • 🇸🇦 السعودية • 🇦🇪 الإمارات • 🇰🇼 الكويت"
      }
    : {
        badge: "WHERE WEB ENGINEERING MEETS SEO & CRO",
        titleStart: "About Me —",
        titleHighlight: "Amr Salem",
        roleTitle: "Full-Stack Web Developer & Technical SEO Architect",
        mainBio:
          "I am Amr Salem, a web developer and technical researcher specialized in building high-performance web applications (Next.js 15 & WordPress), scalable e-commerce stores (Shopify & WooCommerce), and advanced Search Engine Optimization (SEO). With over a decade of professional experience, I transform complex programming challenges into fast, secure, and high-converting digital platforms.",
        tabs: [
          {
            tabLabel: "Vision & Approach",
            heading: "A True Technical Partnership Driving Your Growth",
            description:
              "My goal is not just delivering code, but engineering a sustainable digital asset that ranks #1 on Google, loads in sub-seconds, and turns visitors into loyal customers across Egypt, Saudi Arabia, UAE, and Kuwait.",
            points: [
              "Direct communication with the lead developer for maximum precision",
              "SEO and Conversion Rate Optimization (CRO) baked into every line of code",
              "100% client ownership with comprehensive training and ongoing support",
              "Tailored localization for Egyptian and GCC markets"
            ]
          },
          {
            tabLabel: "Tech Stack",
            heading: "Cutting-Edge Web Technologies Under One Roof",
            description:
              "I select the optimal architecture for each project to ensure superior speed, security, and search engine dominance:",
            points: [
              "Next.js 15, React 19, TypeScript & Tailwind CSS",
              "Custom WordPress, PHP Shortcodes & High-Speed WooCommerce",
              "Shopify Liquid OS 2.0, Storefront API & Headless Commerce",
              "Technical SEO, JSON-LD Schema, Core Web Vitals & CAPI Tracking"
            ]
          },
          {
            tabLabel: "Why Work With Me?",
            heading: "Uncompromising Quality, Security & Business ROI",
            description:
              "Across 10+ years and 150+ successful projects, my work combines clean software engineering with deep market psychology:",
            points: [
              "96% - 99% Google PageSpeed Insights performance scores",
              "Full integration with Mada, Tabby, Tamara, Paymob, KNET & shipping APIs",
              "Enterprise-grade cybersecurity and stability during peak ad campaigns",
              "Strict adherence to deadlines and transparent project milestones"
            ]
          }
        ],
        quickHighlights: [
          { number: "+10", label: "Years Experience" },
          { number: "+150", label: "Ranked Projects" },
          { number: "99%", label: "Code Speed Score" },
          { number: "4 Markets", label: "Egypt & GCC Focus" }
        ],
        ctaWhatsapp: "Chat With Me on WhatsApp",
        ctaContactPage: "Request Free Consultation",
        videoWindowTitle: "amr-salem-profile.mp4 — studio",
        videoBadgeTop: "Full-Stack & SEO Expert",
        videoBadgeBottom: "Serving: 🇪🇬 Egypt • 🇸🇦 KSA • 🇦🇪 UAE • 🇰🇼 Kuwait"
      };

  return (
    <section
      className="relative w-full overflow-hidden bg-[#f5f7f5] py-24 px-4 sm:px-8 md:px-16 border-b-4 border-emerald-500 text-slate-900"
      dir={isAr ? "rtl" : "ltr"}
    >
      {/* 1. شبكة المربعات الهندسية الخلفية باللون الأخضر الهادئ */}
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

      {/* 2. هالة خضراء للتوهج الخلفي */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[480px] pointer-events-none z-0"
        style={{
          background: "radial-gradient(circle, rgba(16, 185, 129, 0.12) 0%, transparent 75%)",
          filter: "blur(90px)"
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* =================================================================
              العمود الأول (الأيمن في العربية): النص التعريفي والتبويبات التفاعلية
          ================================================================= */}
          <motion.div
            initial={{ opacity: 0, x: isAr ? 40 : -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col items-start text-right"
          >
            {/* الشارة العلوية */}
            <div className="inline-flex items-center gap-2 bg-emerald-100 border-2 border-emerald-500 text-emerald-900 px-4 py-1.5 rounded-full font-black text-xs sm:text-sm mb-5 shadow-sm">
              <FaUserCheck className="text-emerald-600 w-4 h-4" />
              <span>{content.badge}</span>
            </div>

            {/* العنوان الرئيسي */}
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 mb-2 leading-tight">
              {content.titleStart}{" "}
              <span className="text-emerald-600 underline decoration-emerald-400 decoration-4 underline-offset-8">
                {content.titleHighlight}
              </span>
            </h2>

            <p className="text-base sm:text-lg font-black text-emerald-800 mb-6">
              {content.roleTitle}
            </p>

            {/* الفقرة التعريفية الأساسية */}
            <p className="text-slate-700 text-base sm:text-lg md:text-xl leading-relaxed font-extrabold mb-8 bg-white/90 backdrop-blur-md p-6 rounded-3xl border-2 border-emerald-400 shadow-sm">
              {content.mainBio}
            </p>

            {/* أزرار التبويبات الثلاثة (Interactive Profile Tabs) */}
            <div className="grid grid-cols-3 gap-2.5 w-full mb-5">
              {content.tabs.map((tab, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActiveTab(idx)}
                  className={`py-3 px-3 rounded-2xl font-black text-xs sm:text-sm transition-all border-2 cursor-pointer ${
                    activeTab === idx
                      ? "bg-slate-900 text-emerald-400 border-emerald-500 shadow-md scale-[1.02]"
                      : "bg-white text-slate-800 border-emerald-200 hover:border-emerald-400"
                  }`}
                >
                  {tab.tabLabel}
                </button>
              ))}
            </div>

            {/* محتوى التبويب المختار */}
            <div className="w-full bg-white border-4 border-emerald-500 rounded-3xl p-6 sm:p-7 shadow-lg mb-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                >
                  <h3 className="text-lg sm:text-xl font-black text-slate-900 mb-2">
                    {content.tabs[activeTab].heading}
                  </h3>
                  <p className="text-slate-600 font-bold text-xs sm:text-sm leading-relaxed mb-4">
                    {content.tabs[activeTab].description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {content.tabs[activeTab].points.map((pt, pIdx) => (
                      <div
                        key={pIdx}
                        className="bg-[#f5f7f5] p-3 rounded-xl border border-emerald-300 flex items-start gap-2"
                      >
                        <FaCheckCircle className="text-emerald-600 w-4 h-4 mt-0.5 flex-shrink-0" />
                        <span className="text-xs sm:text-sm font-black text-slate-800">{pt}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* أزرار الـ Call To Action */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                title={content.ctaWhatsapp}
                className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white font-black text-sm sm:text-base px-8 py-4 rounded-2xl shadow-[0_12px_25px_-5px_rgba(16,185,129,0.45)] border-2 border-emerald-800 flex items-center justify-center gap-3 transition-transform hover:-translate-y-0.5"
              >
                <FaWhatsapp className="w-6 h-6" />
                <span>{content.ctaWhatsapp}</span>
                <span
                  className="font-mono text-xs bg-slate-900 text-emerald-400 px-2.5 py-0.5 rounded-lg"
                  dir="ltr"
                >
                  {displayPhone}
                </span>
              </a>

              <Link
                href="/contact"
                title={content.ctaContactPage}
                className="w-full sm:w-auto bg-slate-900 hover:bg-slate-800 text-white font-black text-sm sm:text-base px-7 py-4 rounded-2xl border-2 border-emerald-500 flex items-center justify-center gap-2 transition-colors shadow-md"
              >
                <span>{content.ctaContactPage}</span>
                {isAr ? (
                  <FaArrowLeft className="w-4 h-4 text-emerald-400" />
                ) : (
                  <FaArrowRight className="w-4 h-4 text-emerald-400" />
                )}
              </Link>
            </div>
          </motion.div>

          {/* =================================================================
              العمود الثاني (الأيسر في العربية): كارت الفيديو الإبداعي والإحصائيات
          ================================================================= */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-5 flex flex-col items-center"
          >
            {/* حاوية استوديو الفيديو المحاطة بالبرواز الزمردي */}
            <div className="w-full bg-white rounded-3xl border-4 border-emerald-500 shadow-[0_30px_65px_-15px_rgba(0,0,0,0.2)] overflow-hidden transition-transform duration-300 hover:scale-[1.01]">
              {/* شريط علوي لنافذة الفيديو (بدون لون أحمر) */}
              <div
                className="bg-slate-900 px-4 py-3 border-b-2 border-emerald-500 flex items-center justify-between"
                dir="ltr"
              >
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-emerald-400 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-teal-500 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-slate-600 inline-block" />
                </div>
                <span className="text-xs font-mono text-emerald-300 font-bold tracking-wider">
                  {content.videoWindowTitle}
                </span>
              </div>

              {/* الفيديو مع شارات عائمة فوقه */}
              <div className="relative w-full bg-slate-950">
                <video
                  src="/hero.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-[380px] sm:h-[430px] object-cover opacity-95"
                />

                {/* تدرج سفلي خفيف فوق الفيديو */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-slate-950/30 pointer-events-none" />

                {/* شارة عائمة علوية */}
                <div className="absolute top-4 right-4 bg-slate-900/90 backdrop-blur-md border-2 border-emerald-400 text-white px-3.5 py-1.5 rounded-xl flex items-center gap-2 shadow-lg">
                  <FaCode className="text-emerald-400 w-4 h-4" />
                  <span className="text-xs font-black">{content.videoBadgeTop}</span>
                </div>

                {/* شبكة الأرقام الرباعية المدمجة أسفل الفيديو */}
                <div className="absolute bottom-4 inset-x-4 grid grid-cols-4 gap-2">
                  {content.quickHighlights.map((hl, idx) => (
                    <div
                      key={idx}
                      className="bg-slate-900/90 backdrop-blur-md border border-emerald-500/60 rounded-xl p-2.5 text-center shadow-md"
                    >
                      <div className="text-base sm:text-lg font-black text-emerald-400 leading-none mb-1">
                        {hl.number}
                      </div>
                      <div className="text-[10px] sm:text-[11px] font-bold text-slate-200 leading-tight">
                        {hl.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* الشريط السفلي لكارت الفيديو */}
              <div className="p-4 bg-slate-900 text-white border-t-2 border-emerald-500 flex items-center justify-center text-center">
                <span className="text-xs sm:text-sm font-black text-emerald-300">
                  {content.videoBadgeBottom}
                </span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaAward,
  FaRocket,
  FaBolt,
  FaCheckCircle,
  FaWhatsapp,
  FaCode,
  FaSearchDollar,
  FaGlobe,
  FaShieldAlt,
  FaChartLine,
  FaLaptopCode,
  FaArrowLeft,
  FaArrowRight
} from "react-icons/fa";

interface ExperienceProps {
  lang?: "ar" | "en";
}

export default function ExperienceSection({ lang = "ar" }: ExperienceProps) {
  const isAr = lang === "ar";

  const whatsappNumber = "201020347946";
  const displayPhone = "01020347946";
  const whatsappMessage = encodeURIComponent(
    isAr
      ? "مرحباً م. عمرو، قرأت عن خبراتكم وسابقة أعمالكم وأرغب في مناقشة مشروعي."
      : "Hello Eng. Amr, I saw your experience section and would like to discuss my project."
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  const content = isAr
    ? {
        sectionBadge: "لماذا يثق بنا رواد الأعمال والشركات؟",
        sectionTitleStart: "أرقام حقيقية تصنع",
        sectionTitleHighlight: "الفارق التقني والتسويقي",
        sectionSubtitle:
          "نحن لا نبني مجرد صفحات ويب عادية؛ بل نصمم أصولاً رقمية عالية العائد تجمع بين الهندسة البرمجية الحديثة واستراتيجيات التصدر في محركات البحث.",
        cards: [
          {
            badge: "ريادة واحترافية منذ 2016",
            number: "خبرة 10 سنين",
            subLabel: "في هندسة الويب والحلول الرقمية",
            desc: "عقد كامل من الخبرة التقنية المتخصصة، قمنا خلاله بتحويل أعقد التحديات البرمجية والتسويقية إلى منصات رقمية مبتكرة تقود الأسواق.",
            highlights: [
              "معمارية كود نظيفة قابلة للتوسع (Clean Architecture)",
              "تطوير أنظمة مخصصة بـ Next.js 15 & React",
              "استشارات تقنية وحلول برمجية للشركات الكبرى"
            ],
            icon: <FaAward className="w-8 h-8 text-emerald-600" />,
            featured: false
          },
          {
            badge: "سجل أعمال موثق وناجح",
            number: "+150 موقع",
            subLabel: "ومنصة ومتجر إلكتروني متصدر",
            desc: "أكثر من 150 موقعاً ومتجراً إلكترونياً تم بناؤها وتهيئة محركات البحث لها (SEO) من الصفر لضمان تصدر النتائج الأولى ومضاعفة المبيعات.",
            highlights: [
              "تصدر الصفحة الأولى في جوجل للكلمات الشرائية",
              "تصميم يركز على رفع معدل التحويل (High CRO)",
              "ربط متكامل لبوابات الدفع والشحن في مصر والخليج"
            ],
            icon: <FaRocket className="w-8 h-8 text-emerald-400" />,
            featured: true
          },
          {
            badge: "معايير الأداء العالمية",
            number: "99.9% سرعة",
            subLabel: "تقييم أداء وأمان سيبراني",
            desc: "نلتزم بأعلى معايير Google Core Web Vitals لضمان فتح موقعك في أجزاء من الثانية على الجوال، مع حماية سيبرانية مطلقة واستقرار تام.",
            highlights: [
              "اجتياز اختبارات Google PageSpeed بامتياز",
              "تغطية إقليمية (مصر، السعودية، الإمارات، الكويت)",
              "ملكية كاملة 100% للعميل ودعم فني مباشر"
            ],
            icon: <FaBolt className="w-8 h-8 text-emerald-600" />,
            featured: false
          }
        ],
        bottomBarTitle: "منظومة تقنية متكاملة تحت سقف واحد لخدمة مشروعك:",
        techBadges: [
          "Next.js 15 & React",
          "Technical & Local SEO",
          "Shopify Liquid & Headless",
          "Custom WordPress & WooCommerce",
          "High-CRO Landing Pages",
          "AI Video Production"
        ],
        ctaButton: "ناقش مشروعك معنا الآن",
        portfolioButton: "تصفح سابقة الأعمال"
      }
    : {
        sectionBadge: "WHY BUSINESS LEADERS TRUST US?",
        sectionTitleStart: "Proven Numbers That Drive",
        sectionTitleHighlight: "Technical & SEO Excellence",
        sectionSubtitle:
          "We don't just build ordinary websites; we engineer high-ROI digital assets combining modern web architecture with top Google rankings.",
        cards: [
          {
            badge: "Excellence Since 2016",
            number: "10+ Years",
            subLabel: "Of Web Engineering Experience",
            desc: "A full decade of specialized technical expertise, transforming complex programming and marketing challenges into innovative digital solutions.",
            highlights: [
              "Scalable & Clean Code Architecture",
              "Custom Next.js 15 & React Web Apps",
              "Enterprise Technical Consulting"
            ],
            icon: <FaAward className="w-8 h-8 text-emerald-600" />,
            featured: false
          },
          {
            badge: "Verified Track Record",
            number: "150+ Websites",
            subLabel: "Built & Ranked on Google",
            desc: "Over 150 websites and e-commerce stores engineered and optimized for Search Engines (SEO) to dominate top rankings and multiply revenue.",
            highlights: [
              "#1 Google Rankings for Buyer Keywords",
              "Conversion Rate Optimization (High CRO)",
              "Full MENA Payment & Shipping Integration"
            ],
            icon: <FaRocket className="w-8 h-8 text-emerald-400" />,
            featured: true
          },
          {
            badge: "Global Performance Standards",
            number: "99.9% Speed",
            subLabel: "Core Web Vitals & Security",
            desc: "We adhere to strict Google Core Web Vitals standards ensuring sub-second mobile load times, maximum cybersecurity, and zero downtime.",
            highlights: [
              "Top Google PageSpeed Insights Scores",
              "Serving Egypt, Saudi Arabia, UAE & Kuwait",
              "100% Client Ownership & Direct Support"
            ],
            icon: <FaBolt className="w-8 h-8 text-emerald-600" />,
            featured: false
          }
        ],
        bottomBarTitle: "Full-Stack Digital Ecosystem Powering Your Growth:",
        techBadges: [
          "Next.js 15 & React",
          "Technical & Local SEO",
          "Shopify Liquid & Headless",
          "Custom WordPress & WooCommerce",
          "High-CRO Landing Pages",
          "AI Video Production"
        ],
        ctaButton: "Discuss Your Project Now",
        portfolioButton: "View Portfolio"
      };

  return (
    <section
      className="relative w-full overflow-hidden bg-[#f5f7f5] py-24 px-4 sm:px-8 md:px-16 border-b-4 border-emerald-500"
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
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[450px] pointer-events-none z-0"
        style={{
          background: "radial-gradient(circle, rgba(16, 185, 129, 0.12) 0%, transparent 75%)",
          filter: "blur(90px)"
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* 3. العنوان الرئيسي للسكشن */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-emerald-100 border-2 border-emerald-500 text-emerald-900 px-4 py-1.5 rounded-full font-black text-xs sm:text-sm mb-4 shadow-sm">
            <FaShieldAlt className="text-emerald-600 w-4 h-4" />
            <span>{content.sectionBadge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 mb-5 leading-tight">
            {content.sectionTitleStart}{" "}
            <span className="text-emerald-600 underline decoration-emerald-400 decoration-4 underline-offset-8">
              {content.sectionTitleHighlight}
            </span>
          </h2>

          <p className="text-slate-700 font-bold text-base sm:text-lg leading-relaxed">
            {content.sectionSubtitle}
          </p>
        </motion.div>

        {/* 4. شبكة الكروت الثلاثة الاحترافية */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-14">
          {content.cards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              whileHover={{ y: -8, scale: 1.01 }}
              className={`rounded-3xl p-8 md:p-10 flex flex-col justify-between border-4 border-emerald-500 transition-all ${
                card.featured
                  ? "bg-slate-900 text-white shadow-[0_30px_65px_-15px_rgba(16,185,129,0.35)] lg:-translate-y-3"
                  : "bg-white/95 backdrop-blur-md text-slate-900 shadow-[0_25px_55px_-15px_rgba(0,0,0,0.12)]"
              }`}
            >
              <div>
                {/* رأس الكارت: الأيقونة والشارة */}
                <div className="flex items-center justify-between gap-3 mb-6">
                  <div
                    className={`p-4 rounded-2xl border-2 ${
                      card.featured
                        ? "bg-slate-800 border-emerald-400"
                        : "bg-emerald-50 border-emerald-500"
                    }`}
                  >
                    {card.icon}
                  </div>
                  <span
                    className={`text-xs font-black px-3.5 py-1.5 rounded-full border ${
                      card.featured
                        ? "bg-emerald-500 text-slate-950 border-white"
                        : "bg-slate-900 text-emerald-400 border-emerald-500"
                    }`}
                  >
                    {card.badge}
                  </span>
                </div>

                {/* الرقم الرئيسي والوصف الفرعي */}
                <h3
                  className={`text-4xl sm:text-5xl font-black mb-2 tracking-wide ${
                    card.featured ? "text-emerald-400" : "text-slate-900"
                  }`}
                >
                  {card.number}
                </h3>
                <div
                  className={`text-sm sm:text-base font-black mb-4 ${
                    card.featured ? "text-white" : "text-emerald-700"
                  }`}
                >
                  {card.subLabel}
                </div>

                {/* الخط الزمردي المتحرك */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, delay: 0.25 }}
                  className={`w-full h-1.5 rounded-full mb-5 ${
                    card.featured ? "bg-emerald-400" : "bg-emerald-600"
                  }`}
                />

                {/* الفقرة التوضيحية */}
                <p
                  className={`text-base sm:text-lg font-extrabold leading-relaxed mb-6 ${
                    card.featured ? "text-slate-200" : "text-slate-700"
                  }`}
                >
                  {card.desc}
                </p>
              </div>

              {/* قائمة النقاط البارزة أسفل كل كارت */}
              <div
                className={`pt-5 border-t space-y-2.5 ${
                  card.featured ? "border-slate-800" : "border-emerald-100"
                }`}
              >
                {card.highlights.map((item, hIdx) => (
                  <div key={hIdx} className="flex items-center gap-2.5 text-xs sm:text-sm font-black">
                    <FaCheckCircle
                      className={`w-4 h-4 flex-shrink-0 ${
                        card.featured ? "text-emerald-400" : "text-emerald-600"
                      }`}
                    />
                    <span className={card.featured ? "text-slate-100" : "text-slate-800"}>
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* 5. شريط التقنيات والـ Call To Action السفلي المدمج */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-slate-900 text-white border-4 border-emerald-500 rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8"
        >
          <div className="text-center lg:text-right max-w-2xl">
            <div className="flex items-center justify-center lg:justify-start gap-2 text-emerald-400 font-black text-sm mb-2">
              <FaLaptopCode className="w-5 h-5" />
              <span>{content.bottomBarTitle}</span>
            </div>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 mt-3">
              {content.techBadges.map((tech, tIdx) => (
                <span
                  key={tIdx}
                  className="bg-slate-800 border border-emerald-500/50 text-emerald-300 px-3.5 py-1.5 rounded-xl text-xs font-black"
                >
                  ✓ {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3.5 w-full lg:w-auto flex-shrink-0">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              title={content.ctaButton}
              className="w-full sm:w-auto bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-sm sm:text-base px-7 py-4 rounded-2xl shadow-lg flex items-center justify-center gap-2.5 transition-transform hover:-translate-y-0.5"
            >
              <FaWhatsapp className="w-5 h-5" />
              <span>{content.ctaButton}</span>
              <span className="font-mono text-xs bg-slate-950 text-emerald-400 px-2 py-0.5 rounded-md" dir="ltr">
                {displayPhone}
              </span>
            </a>

            <Link
              href="/projects"
              title={content.portfolioButton}
              className="w-full sm:w-auto bg-slate-800 hover:bg-slate-700 text-white font-black text-sm sm:text-base px-6 py-4 rounded-2xl border-2 border-emerald-500/60 flex items-center justify-center gap-2 transition-colors"
            >
              <span>{content.portfolioButton}</span>
              {isAr ? (
                <FaArrowLeft className="w-4 h-4 text-emerald-400" />
              ) : (
                <FaArrowRight className="w-4 h-4 text-emerald-400" />
              )}
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
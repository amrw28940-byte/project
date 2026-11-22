"use client";

import React, { useState, useMemo, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaExternalLinkAlt,
  FaWhatsapp,
  FaRocket,
  FaCheckCircle,
  FaShieldAlt,
  FaDesktop,
  FaMobileAlt,
  FaSearch,
  FaLayerGroup,
  FaArrowRight,
  FaEye,
  FaCode,
  FaBolt,
} from "react-icons/fa";

type CategoryKey = "all" | "nextjs" | "corporate" | "tourism" | "ecommerce";

interface ProjectItem {
  id: string;
  name: string;
  domain: string;
  image: string;
  url: string;
  tagAr: string;
  category: Exclude<CategoryKey, "all">;
  stack: string[];
  summaryAr: string;
  highlights: string[];
  altAr: string;
  titleAr: string;
}

const PROJECTS: ProjectItem[] = [
  {
    id: "pest-control-sa",
    name: "Pest Control SA",
    domain: "pest-control-sa.vercel.app",
    image: "/pest-control-sa.vercel.app.webp",
    url: "https://pest-control-sa.vercel.app/",
    tagAr: "خدمات منزلية بالسعودية (Next.js)",
    category: "nextjs",
    stack: ["Next.js", "Tailwind CSS", "Local SEO"],
    summaryAr:
      "موقع خدمات منزلية ومكافحة حشرات في السوق السعودي مبني بـ Next.js لتحقيق أعلى سرعة واستجابة فورية للعملاء.",
    highlights: ["أداء 99+ على الهواتف", "أزرار اتصال وواتساب ذكية", "تصميم عالي التحويل"],
    altAr: "تصميم موقع شركة مكافحة حشرات وخدمات منزلية في السعودية بـ Next.js - م. عمرو سالم",
    titleAr: "برمجة موقع خدمات منزلية في السعودية بتقنية Next.js فائق السرعة",
  },
  {
    id: "the-light-house",
    name: "The Light House",
    domain: "thelighthousee.com",
    image: "/the-light-house-kappa.vercel.appen.jpg",
    url: "https://www.thelighthousee.com/en",
    tagAr: "منصة سياحة وغوص (Next.js)",
    category: "tourism",
    stack: ["Next.js", "Multilingual", "High-Speed UI"],
    summaryAr:
      "منصة سياحية عالمية لرحلات الغوص والأنشطة البحرية بواجهة بصرية جذابة وتجربة تصفح سلسة للسياح الدوليين.",
    highlights: ["تجربة مستخدم عالمية", "عرض تفاعلي للرحلات", "توافق تام مع الجوال"],
    altAr: "تصميم موقع ذا لايت هاوس للسياحة والغوص بـ Next.js - م. عمرو سالم",
    titleAr: "تصميم وبرمجة منصة The Light House العالمية بتقنية Next.js",
  },
  {
    id: "ads-agency",
    name: "Ads Agency Marketing",
    domain: "adsagencymarketing.com",
    image: "/adsagencymarketing.com.jpg",
    url: "https://www.adsagencymarketing.com/",
    tagAr: "تسويق رقمي وإعلانات",
    category: "corporate",
    stack: ["Web Design", "CRO", "SEO"],
    summaryAr:
      "موقع تعريفي وتجاري لوكالة تسويق إلكتروني وإدارة حملات إعلانية، مصمم لإبراز الخدمات وبناء الثقة الفورية.",
    highlights: ["هوية بصرية احترافية", "مسار تحويل واضح للعملاء", "تهيئة كاملة لمحركات البحث"],
    altAr: "تصميم موقع شركة تسويق إلكتروني وإعلانات - Ads Agency Marketing",
    titleAr: "تصميم وتطوير موقع وكالة Ads Agency Marketing للتسويق الرقمي",
  },
  {
    id: "ahmt-travel",
    name: "AHMT Egypt Travel",
    domain: "ahmtegypttravel.com",
    image: "/ahmtegypttravel.com.webp",
    url: "https://www.ahmtegypttravel.com/",
    tagAr: "سياحة وسفر وحجوزات",
    category: "tourism",
    stack: ["Tourism Portal", "Booking UX", "SEO"],
    summaryAr:
      "بوابة سياحية متكاملة لعرض البرامج والرحلات داخل مصر مع تنظيم واضح للباقات وتسهيل طلبات الحجز المباشر.",
    highlights: ["تنظيم احترافي للبرامج السياحية", "تصفح سريع للصور", "استهداف كلمات السياحة"],
    altAr: "تصميم موقع شركة سياحة وسفر في مصر - AHMT Egypt Travel",
    titleAr: "تصميم وبرمجة موقع شركة AHMT Egypt Travel للسياحة والرحلات",
  },
  {
    id: "amn-khaligi",
    name: "Amn Khaligi",
    domain: "amnkhaligi.com",
    image: "/amnkhaligi.com.webp",
    url: "https://www.amnkhaligi.com/",
    tagAr: "أنظمة أمنية وخليجية",
    category: "corporate",
    stack: ["Corporate Web", "Security UI", "SEO"],
    summaryAr:
      "موقع رسمي لشركة أنظمة أمنية وحراسة يستهدف السوق الخليجي بتصميم يعكس الثقة والانضباط وسهولة طلب عروض الأسعار.",
    highlights: ["تصميم مؤسسي رصين", "عرض منظم للأنظمة الأمنية", "سرعة وأمان عالٍ"],
    altAr: "تصميم موقع شركة أمن خليجي للأنظمة الأمنية - Amn Khaligi",
    titleAr: "تصميم وتطوير موقع أمن خليجي Amn Khaligi للخدمات والأنظمة الأمنية",
  },
  {
    id: "cobra-plast",
    name: "Cobra Plast",
    domain: "cobra-plast.com",
    image: "/cobra-plast.com.webp",
    url: "https://cobra-plast.com/",
    tagAr: "مصنع وصناعات بلاستيكية",
    category: "corporate",
    stack: ["Industrial B2B", "Catalog", "SEO"],
    summaryAr:
      "موقع صناعي متكامل لمصنع كوبرا بلاست لعرض خطوط الإنتاج والمواصفات الفنية واستقطاب عملاء الجملة والتصدير.",
    highlights: ["كتالوج منتجات صناعي", "تأسيس سيو للقطاع الصناعي", "تواصل مباشر للمبيعات B2B"],
    altAr: "تصميم موقع مصنع كوبرا بلاست للصناعات البلاستيكية - Cobra Plast",
    titleAr: "تصميم وتطوير موقع مصنع Cobra Plast وتأسيس السيو الصناعي",
  },
  {
    id: "el-subaie",
    name: "El Subaie",
    domain: "elsubaie.com",
    image: "/elsubaie.com.webp",
    url: "https://elsubaie.com/",
    tagAr: "شركة أعمال وتجارة",
    category: "corporate",
    stack: ["Corporate Web", "Brand Identity", "SEO"],
    summaryAr:
      "واجهة رقمية احترافية لمؤسسة السبيعي للتجارة والأعمال تبرز سابقة المشاريع والخدمات بأسلوب منظم وموثوق.",
    highlights: ["واجهة عربية رسمية", "هيكلة واضحة للخدمات", "أداء مستقر وسريع"],
    altAr: "تصميم موقع شركة السبيعي للتجارة والأعمال - El Subaie",
    titleAr: "تصميم وبرمجة موقع شركة السبيعي El Subaie الرسمي",
  },
  {
    id: "hala-selim",
    name: "Hala Selim",
    domain: "halaselim.com",
    image: "/halaselim.com.webp",
    url: "https://www.halaselim.com/",
    tagAr: "منصة شخصية واستشارية",
    category: "ecommerce",
    stack: ["Personal Brand", "Booking", "UX"],
    summaryAr:
      "منصة شخصية متكاملة لبناء العلامة التجارية الشخصية وحجز الجلسات الاستشارية بسهولة وتجربة مستخدم راقية.",
    highlights: ["تصميم يعكس الهوية الشخصية", "نظام حجز استشارات سلس", "توافق كامل مع الجوال"],
    altAr: "تصميم موقع ومنصة هالة سليم الاستشارية - Hala Selim",
    titleAr: "تصميم وتطوير موقع د. هالة سليم Hala Selim وحجز الاستشارات",
  },
  {
    id: "mdadak",
    name: "Mdadak",
    domain: "mdadak.com",
    image: "/mdadak.com.webp",
    url: "https://mdadak.com/",
    tagAr: "منصة خدمات وحلول",
    category: "ecommerce",
    stack: ["Web Platform", "SEO", "Conversion UX"],
    summaryAr:
      "منصة رقمية متخصصة في تقديم الخدمات والحلول للأعمال بتصميم عملي يسهل استكشاف الخدمات وطلبها فوراً.",
    highlights: ["هيكلة صفحات سيو قوية", "تجربة تصفح مباشرة", "تصميم متجاوب بالكامل"],
    altAr: "تصميم موقع منصة مدادك للخدمات الرقمية - Mdadak",
    titleAr: "تصميم وبرمجة منصة مدادك Mdadak وتصدر محركات البحث",
  },
  {
    id: "pure-husk-gold",
    name: "Pure Husk Gold",
    domain: "purehuskgold.myeasyorders.com",
    image: "/purehuskgold.myeasyorders.com.jpg",
    url: "https://purehuskgold.myeasyorders.com/",
    tagAr: "متجر إلكتروني وصفحة هبوط",
    category: "ecommerce",
    stack: ["E-Commerce", "Sales Funnel", "CRO"],
    summaryAr:
      "متجر إلكتروني وصفحة بيع مباشر (Sales Funnel) مصممة بعناية لرفع معدل إتمام الطلبات ومضاعفة عائد الإعلانات.",
    highlights: ["صفحة هبوط عالية التحويل", "مسار شراء سريع في خطوة واحدة", "تصميم مخصص لإعلانات الموبايل"],
    altAr: "تصميم متجر وصفحة هبوط Pure Husk Gold عالية التحويل",
    titleAr: "تصميم متجر وصفحة بيع مباشر Pure Husk Gold لمضاعفة المبيعات",
  },
  {
    id: "travel-friend",
    name: "Travel Friend AG",
    domain: "travelfriend-ag.com",
    image: "/travelfriend-ag.com.webp",
    url: "https://www.travelfriend-ag.com/",
    tagAr: "برامج سياحية دولية",
    category: "tourism",
    stack: ["International Tourism", "Multilingual", "SEO"],
    summaryAr:
      "موقع سياحي دولي لعرض الرحلات والباقات السياحية بتجربة تصفح جذابة وسرعة تحميل عالية للزوار من مختلف الدول.",
    highlights: ["عرض احترافي للوجهات", "مهيأ للسيو السياحي", "سهولة التواصل والحجز"],
    altAr: "تصميم موقع شركة ترافل فريند للسياحة الدولية - Travel Friend AG",
    titleAr: "تصميم وتطوير موقع شركة Travel Friend AG للبرامج السياحية والرحلات",
  },
];

const CATEGORIES: { key: CategoryKey; label: string }[] = [
  { key: "all", label: "الكل (11)" },
  { key: "nextjs", label: "تطبيقات Next.js" },
  { key: "corporate", label: "شركات ومصانع" },
  { key: "tourism", label: "سياحة وسفر" },
  { key: "ecommerce", label: "متاجر ومنصات" },
];

export default function ProjectsShowcaseClient() {
  const [activeCategory, setActiveCategory] = useState<CategoryKey>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProject, setSelectedProject] = useState<ProjectItem>(PROJECTS[0]);
  const [previewDevice, setPreviewDevice] = useState<"desktop" | "mobile">("desktop");

  const stageRef = useRef<HTMLDivElement>(null);

  const whatsappNumber = "201020347946";
  const displayPhone = "01020347946";

  const buildWhatsappLink = (projectName?: string) => {
    const msg = projectName
      ? `مرحباً م. عمرو، أعجبني مشروع (${projectName}) في سابقة أعمالك وأرغب في تصميم موقع مشابه لمشروعي.`
      : "مرحباً م. عمرو، شاهدت معرض أعمالك التفاعلي وأرغب في استشارة لتصميم موقع إلكتروني.";
    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(msg)}`;
  };

  const filteredProjects = useMemo(() => {
    return PROJECTS.filter((p) => {
      const matchesCategory =
        activeCategory === "all" || p.category === activeCategory;
      const q = searchQuery.trim().toLowerCase();
      const matchesSearch =
        !q ||
        p.name.toLowerCase().includes(q) ||
        p.tagAr.toLowerCase().includes(q) ||
        p.domain.toLowerCase().includes(q) ||
        p.stack.some((s) => s.toLowerCase().includes(q));
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const handleInspectProject = (project: ProjectItem) => {
    setSelectedProject(project);
    stageRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div
      className="min-h-screen bg-[#f5f7f5] pt-32 pb-24 text-slate-900 relative z-10"
      dir="rtl"
    >
      {/* 1. الترويسة العلوية باسم م. عمرو سالم */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 mb-12">
        <div className="mb-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-white hover:bg-emerald-800 text-slate-900 hover:text-white border-2 border-emerald-500 px-4 py-2 rounded-xl font-black text-xs sm:text-sm transition-colors shadow-sm"
          >
            <FaArrowRight className="w-3.5 h-3.5" />
            <span>العودة للرئيسية</span>
          </Link>
        </div>

        <div className="bg-slate-950 text-white rounded-3xl border-4 border-emerald-500 p-7 sm:p-12 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.28)] relative overflow-hidden">
          <div className="absolute -top-24 -left-24 w-72 h-72 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-teal-500/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 bg-emerald-500/15 border border-emerald-400/50 text-emerald-300 px-4 py-1.5 rounded-full font-black text-xs sm:text-sm mb-4">
                <FaRocket className="w-3.5 h-3.5" />
                <span>معرض أعمال م. عمرو سالم — AMR SALEM</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-black leading-tight mb-4">
                سابقة أعمال{" "}
                <span className="text-emerald-400">م. عمرو سالم</span>:{" "}
                مواقع مصممة لتتصدر وتبيع
              </h1>

              <p className="text-slate-300 font-bold text-sm sm:text-lg leading-relaxed max-w-2xl">
                نماذج حقيقية وحية من تصميمي وتطويري لمواقع الشركات، المتاجر الإلكترونية، وتطبيقات Next.js. جرّب معاينة كل مشروع على شاشة الكمبيوتر أو الجوال وتصفح الموقع الحي مباشرة.
              </p>
            </div>

            <div className="lg:col-span-4 grid grid-cols-2 gap-3.5">
              <div className="bg-slate-900 border-2 border-emerald-500/60 rounded-2xl p-4 text-center">
                <span className="block text-2xl sm:text-3xl font-black text-emerald-400">
                  11+
                </span>
                <span className="text-xs font-bold text-slate-300">
                  مشروع حي للعرض
                </span>
              </div>
              <div className="bg-slate-900 border-2 border-emerald-500/60 rounded-2xl p-4 text-center">
                <span className="block text-2xl sm:text-3xl font-black text-emerald-400">
                  99%
                </span>
                <span className="text-xs font-bold text-slate-300">
                  سرعة وأداء Core Web
                </span>
              </div>
              <div className="bg-slate-900 border-2 border-emerald-500/60 rounded-2xl p-4 text-center">
                <span className="block text-2xl sm:text-3xl font-black text-emerald-400">
                  4+
                </span>
                <span className="text-xs font-bold text-slate-300">
                  أسواق (مصر والخليج)
                </span>
              </div>
              <div className="bg-slate-900 border-2 border-emerald-500/60 rounded-2xl p-4 text-center">
                <span className="block text-2xl sm:text-3xl font-black text-emerald-400">
                  SEO
                </span>
                <span className="text-xs font-bold text-slate-300">
                  مهيأة لجوجل والـ AI
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. منصة المعاينة التفاعلية */}
      <section
        ref={stageRef}
        className="max-w-7xl mx-auto px-4 sm:px-8 mb-16 scroll-mt-28"
      >
        <div className="bg-white rounded-3xl border-4 border-emerald-500 shadow-[0_25px_55px_-15px_rgba(0,0,0,0.14)] overflow-hidden">
          <div className="bg-slate-900 px-5 py-4 border-b-4 border-emerald-500 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-emerald-400 inline-block" />
                <span className="w-3 h-3 rounded-full bg-teal-500 inline-block" />
                <span className="w-3 h-3 rounded-full bg-slate-600 inline-block" />
              </div>
              <span className="text-emerald-400 font-black text-xs sm:text-sm flex items-center gap-1.5">
                <FaBolt className="w-3.5 h-3.5" />
                <span>منصة معاينة م. عمرو سالم: {selectedProject.name}</span>
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <div
                dir="ltr"
                className="flex items-center gap-2 bg-slate-950 border border-slate-700 px-3.5 py-1.5 rounded-xl text-xs font-mono text-emerald-300"
              >
                <FaShieldAlt className="text-emerald-400 w-3 h-3" />
                <span>https://{selectedProject.domain}</span>
              </div>

              <div className="inline-flex bg-slate-950 p-1 rounded-xl border border-slate-700">
                <button
                  type="button"
                  onClick={() => setPreviewDevice("desktop")}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-black transition-all cursor-pointer ${
                    previewDevice === "desktop"
                      ? "bg-emerald-500 text-slate-950 shadow"
                      : "text-slate-300 hover:text-white"
                  }`}
                >
                  <FaDesktop className="w-3.5 h-3.5" />
                  <span>كمبيوتر</span>
                </button>
                <button
                  type="button"
                  onClick={() => setPreviewDevice("mobile")}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-black transition-all cursor-pointer ${
                    previewDevice === "mobile"
                      ? "bg-emerald-500 text-slate-950 shadow"
                      : "text-slate-300 hover:text-white"
                  }`}
                >
                  <FaMobileAlt className="w-3.5 h-3.5" />
                  <span>موبايل</span>
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12">
            <div className="lg:col-span-5 p-6 sm:p-9 bg-[#f9fbf9] border-b-4 lg:border-b-0 lg:border-l-4 border-emerald-500 flex flex-col justify-between">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedProject.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.25 }}
                >
                  <span className="inline-block bg-emerald-100 border border-emerald-500 text-emerald-900 text-xs font-black px-3 py-1 rounded-full mb-4">
                    {selectedProject.tagAr}
                  </span>

                  <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-3">
                    {selectedProject.name}
                  </h2>

                  <p className="text-slate-700 font-bold text-sm sm:text-base leading-relaxed mb-6">
                    {selectedProject.summaryAr}
                  </p>

                  <div className="mb-6">
                    <span className="text-xs font-black text-slate-500 flex items-center gap-1.5 mb-2.5">
                      <FaCode className="text-emerald-700 w-3.5 h-3.5" />
                      <span>التقنيات والحلول المطبقة:</span>
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.stack.map((tech) => (
                        <span
                          key={tech}
                          className="bg-slate-900 text-emerald-300 border border-emerald-500/60 px-3 py-1 rounded-lg text-xs font-black"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <ul className="space-y-2.5 mb-8 list-none pr-0">
                    {selectedProject.highlights.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-2.5 text-sm font-black text-slate-800"
                      >
                        <FaCheckCircle className="text-emerald-600 w-4 h-4 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </AnimatePresence>

              <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t-2 border-emerald-100">
                <a
                  href={selectedProject.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={selectedProject.titleAr}
                  className="flex-1 bg-slate-900 hover:bg-emerald-800 text-white font-black text-xs sm:text-sm py-3.5 px-5 rounded-xl flex items-center justify-center gap-2 transition-colors shadow-md"
                >
                  <span>فتح الموقع الحي</span>
                  <FaExternalLinkAlt className="w-3.5 h-3.5 text-emerald-400" />
                </a>

                <a
                  href={buildWhatsappLink(selectedProject.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs sm:text-sm py-3.5 px-5 rounded-xl flex items-center justify-center gap-2 transition-colors shadow-md"
                >
                  <FaWhatsapp className="w-4 h-4" />
                  <span>اطلب موقعاً مشابهاً</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-7 bg-slate-100 p-6 sm:p-10 flex items-center justify-center min-h-[420px] sm:min-h-[500px] relative">
              <motion.div
                layout
                transition={{ type: "spring", stiffness: 260, damping: 26 }}
                className={`relative bg-white overflow-hidden shadow-2xl border-4 border-slate-900 transition-all ${
                  previewDevice === "mobile"
                    ? "w-[260px] sm:w-[290px] h-[460px] rounded-[2.5rem] border-[8px]"
                    : "w-full max-w-[640px] h-[420px] sm:h-[460px] rounded-2xl"
                }`}
              >
                {previewDevice === "mobile" && (
                  <div className="w-24 h-4 bg-slate-900 rounded-b-xl mx-auto absolute top-0 left-1/2 -translate-x-1/2 z-20" />
                )}

                <AnimatePresence mode="wait">
                  <motion.div
                    key={`${selectedProject.id}-${previewDevice}`}
                    initial={{ opacity: 0, scale: 0.97 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.97 }}
                    transition={{ duration: 0.25 }}
                    className="relative w-full h-full bg-slate-50"
                  >
                    <Image
                      src={selectedProject.image}
                      alt={selectedProject.altAr}
                      title={selectedProject.titleAr}
                      fill
                      priority
                      sizes="(max-width: 1024px) 100vw, 640px"
                      className="object-contain p-2"
                    />
                  </motion.div>
                </AnimatePresence>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. شريط الفلترة والبحث */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 mb-10">
        <div className="bg-white rounded-3xl border-4 border-emerald-500 p-5 sm:p-6 shadow-md flex flex-col lg:flex-row items-center justify-between gap-5">
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.key;
              return (
                <button
                  key={cat.key}
                  type="button"
                  onClick={() => setActiveCategory(cat.key)}
                  className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-black transition-all cursor-pointer border-2 ${
                    isActive
                      ? "bg-slate-900 text-emerald-400 border-emerald-500 shadow-md"
                      : "bg-[#f3f7f4] text-slate-800 border-emerald-200 hover:border-emerald-500"
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          <div className="relative w-full lg:w-80">
            <FaSearch className="absolute right-4 top-1/2 -translate-y-1/2 text-emerald-700 w-4 h-4" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="ابحث باسم المشروع أو التقنية (Next.js)..."
              className="w-full bg-[#f3f7f4] border-2 border-emerald-400 focus:border-emerald-600 rounded-xl py-2.5 pr-11 pl-4 text-xs sm:text-sm font-bold text-slate-900 placeholder:text-slate-500 focus:outline-none"
            />
          </div>
        </div>
      </section>

      {/* 4. الشبكة التفاعلية للمشاريع */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 mb-16">
        <div className="flex items-center gap-2.5 mb-6">
          <FaLayerGroup className="text-emerald-700 w-5 h-5" />
          <h2 className="text-xl sm:text-2xl font-black text-slate-900">
            تصفح كافة مشاريع م. عمرو سالم ({filteredProjects.length})
          </h2>
        </div>

        {filteredProjects.length === 0 ? (
          <div className="bg-white rounded-3xl border-4 border-emerald-500 p-12 text-center">
            <p className="text-slate-700 font-black text-lg mb-3">
              لا توجد مشاريع مطابقة للبحث الحالي.
            </p>
            <button
              type="button"
              onClick={() => {
                setActiveCategory("all");
                setSearchQuery("");
              }}
              className="bg-emerald-600 text-white font-black text-sm px-6 py-2.5 rounded-xl cursor-pointer"
            >
              عرض جميع المشاريع
            </button>
          </div>
        ) : (
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7"
          >
            <AnimatePresence>
              {filteredProjects.map((proj) => {
                const isSelected = selectedProject.id === proj.id;
                return (
                  <motion.div
                    layout
                    key={proj.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.25 }}
                    className={`group bg-white rounded-3xl border-4 overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 ${
                      isSelected
                        ? "border-slate-900 ring-4 ring-emerald-400/60 shadow-2xl"
                        : "border-emerald-500 shadow-[0_20px_45px_-15px_rgba(0,0,0,0.12)] hover:shadow-[0_25px_55px_-10px_rgba(16,185,129,0.35)]"
                    }`}
                  >
                    <div className="bg-slate-900 px-4 py-3 border-b-2 border-emerald-500 flex items-center justify-between gap-2">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 inline-block" />
                        <span className="w-2.5 h-2.5 rounded-full bg-teal-500 inline-block" />
                        <span className="w-2.5 h-2.5 rounded-full bg-slate-600 inline-block" />
                      </div>
                      <span
                        dir="ltr"
                        className="text-[11px] font-mono text-emerald-300 truncate max-w-[160px]"
                      >
                        {proj.domain}
                      </span>
                      <span className="bg-emerald-500/20 text-emerald-300 border border-emerald-400/40 text-[10px] font-black px-2 py-0.5 rounded-full whitespace-nowrap">
                        {proj.stack[0]}
                      </span>
                    </div>

                    <div className="relative h-64 w-full bg-slate-100 overflow-hidden p-2">
                      <Image
                        src={proj.image}
                        alt={proj.altAr}
                        title={proj.titleAr}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        loading="lazy"
                        className="object-contain p-2 transition-transform duration-500 group-hover:scale-[1.03]"
                      />

                      {isSelected && (
                        <span className="absolute top-3 right-3 bg-slate-950 text-emerald-400 border border-emerald-400 text-[11px] font-black px-3 py-1 rounded-full shadow-lg">
                          قيد المعاينة بالأعلى
                        </span>
                      )}
                    </div>

                    <div className="p-5 border-t-2 border-emerald-100 flex-1 flex flex-col justify-between">
                      <div>
                        <span className="text-[11px] font-black text-emerald-800 bg-emerald-100 px-2.5 py-0.5 rounded-md inline-block mb-2">
                          {proj.tagAr}
                        </span>
                        <h3 className="text-lg font-black text-slate-900 mb-2">
                          {proj.name}
                        </h3>
                        <p className="text-slate-600 font-bold text-xs sm:text-sm line-clamp-2 mb-4 leading-relaxed">
                          {proj.summaryAr}
                        </p>
                      </div>

                      <div className="grid grid-cols-2 gap-2.5 pt-3 border-t border-emerald-100">
                        <button
                          type="button"
                          onClick={() => handleInspectProject(proj)}
                          className="bg-[#f3f7f4] hover:bg-emerald-100 text-emerald-900 border-2 border-emerald-400 font-black text-xs py-2.5 px-3 rounded-xl flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                        >
                          <FaEye className="w-3.5 h-3.5" />
                          <span>معاينة بالمنصة</span>
                        </button>

                        <a
                          href={proj.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          title={proj.titleAr}
                          className="bg-slate-900 hover:bg-emerald-800 text-white font-black text-xs py-2.5 px-3 rounded-xl flex items-center justify-center gap-1.5 transition-colors"
                        >
                          <span>الموقع الحي</span>
                          <FaExternalLinkAlt className="w-3 h-3 text-emerald-400" />
                        </a>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
        )}
      </section>

      {/* 5. صندوق التواصل الختامي */}
      <section className="max-w-5xl mx-auto px-4 sm:px-8">
        <div className="bg-slate-900 text-white border-4 border-emerald-500 rounded-3xl p-7 sm:p-10 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-right">
            <h2 className="text-2xl sm:text-3xl font-black text-white mb-2">
              مشروعك القادم يستحق أن يكون هنا!
            </h2>
            <p className="text-slate-300 font-bold text-sm sm:text-base">
              تواصل مباشرة مع م. عمرو سالم عبر واتساب لمناقشة فكرة موقعك أو متجرك وخطة تصدر محركات البحث.
            </p>
          </div>

          <a
            href={buildWhatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-sm sm:text-base px-8 py-4 rounded-2xl shadow-lg flex items-center justify-center gap-2.5 whitespace-nowrap transition-transform hover:-translate-y-0.5"
          >
            <FaWhatsapp className="w-6 h-6" />
            <span>ابدأ مشروعك مع م. عمرو سالم:</span>
            <span
              className="font-mono text-xs bg-slate-950 text-emerald-400 px-2 py-0.5 rounded-md"
              dir="ltr"
            >
              {displayPhone}
            </span>
          </a>
        </div>
      </section>
    </div>
  );
}
"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowLeft, 
  MousePointerClick, 
  Play,
  Sparkles,
  Zap,
  Target,
  TrendingUp,
  ExternalLink,
  Eye,
  ChevronRight,
  ChevronLeft,
  Image as ImageIcon,
  Laptop,
  Smartphone,
  BookOpen,
  CheckCircle2,
  ChevronDown,
  HelpCircle
} from "lucide-react";

export default function LandingPageServiceHero() {
  // رابط الواتساب الرسمي لوكالة Giotec لطلب خدمة صفحات الهبوط
  const whatsappUrl = "https://wa.me/201020347946?text=مرحباً%20Giotec،%20أريد%20الاستفسار%20عن%20خدمة%20تصميم%20وتطوير%20صفحات%20الهبوط%20الاحترافية";

  // بيانات عينات صفحات الهبوط مع الحفاظ على الألوان الأصلية لكل مشروع
  const portfolioItems = [
    {
      title: "سيروم الشفاه",
      englishTitle: "Puvograbi-Lip-Serum",
      category: "صحة وتجميل / E-Commerce",
      description: "صفحة هبوط مخصصة لمنتج تجميل فاخر، تركز على إبراز الفوائد المرئية وتسهيل عملية الشراء الفوري بنقرة واحدة.",
      link: "https://artistic-touch1.myeasyorders.com/products/Puvograbi-Lip-Serum",
      stats: "معدل تحويل مرتفع",
      bgColor: "bg-[#ec4899]" // لون الوردي الأصلي للمشروع
    },
    {
      title: "كريم محيط العين",
      englishTitle: "Eye-Contour-Cream",
      category: "عناية شخصية / E-Commerce",
      description: "تصميم أنيق ومريح يعتمد على الثقة وإظهار النتائج قبل وبعد، متكاملة مع سلة شراء سريعة لضمان عدم تشتت العميل.",
      link: "https://artistic-touch1.myeasyorders.com/products/Eye-Contour-Cream",
      stats: "تجربة مستخدم سلسة",
      bgColor: "bg-[#10b981]" // لون الأخضر الأصلي للمشروع
    },
    {
      title: "خدمات تحسين محركات البحث",
      englishTitle: "SEO Saudi Arabia",
      category: "خدمات شركات / Lead Gen",
      description: "صفحة هبوط لخدمات شركات الـ SEO مصممة لجمع بيانات العملاء المهتمين ببنية تبرز سابقة الأعمال والنتائج التقنية الفورية.",
      link: "https://www.uniquee-ws.com/SEOCompanySaudiArabia",
      stats: "أداء وسرعة فائقة",
      bgColor: "bg-[#3b82f6]" // لون الأزرق الأصلي للمشروع
    }
  ];

  // بيانات عارض الصور مع استعادة الألوان الطبيعية
  const galleryImages = [
    {
      url: "https://static.vecteezy.com/system/resources/previews/018/815/469/non_2x/landing-page-design-modern-landing-page-templates-landing-page-design-templates-free-free-vector.jpg",
      tag: "الشركات التقنية",
      title: "تصميم واجهات تقنية عصرية تزيد من اشتراكات العملاء",
      desc: "هيكلية بصرية تركز على شرح المميزات الفنية المعقدة بأسلوب مبسط وممتع للمستخدم."
    },
    {
      url: "https://cdn.dribbble.com/userupload/47526303/file/9b7510707ac51e0f7d9a9ff92a14f2c4.png?resize=1600x1200",
      tag: "متاجر التجارة الإلكترونية",
      title: "صفحات بيع المنتجات الفردية الفاخرة وسريعة التحضير",
      desc: "نهتم بدمج جماليات التصميم الجرافيكي مع أسرار تجربة المستخدم لتقليل معدل التخلي عن سلة المشتريات."
    },
    {
      url: "https://img.magnific.com/free-vector/flat-design-travel-landing-page_23-2149170185.jpg?semt=ais_hybrid&w=740",
      tag: "السياحة والخدمات الترفيهية",
      title: "رحلات بصرية متكاملة تلهم زوارك لاتخاذ القرار الفوري",
      desc: "تخطيط ذكي ينقل العميل في تجربة افتراضية سريعة لحجز خدمتك التالية."
    }
  ];

  // بيانات الأسئلة الشائعة
  const faqItems = [
    {
      question: "ما هي صفحة الهبوط (Landing Page) وكيف تختلف عن الموقع الكامل؟",
      answer: "صفحة الهبوط هي صفحة واحدة مركزة تماماً على منتج أو خدمة محددة بهدف دفع الزائر لاتخاذ إجراء واحد فقط (مثل الشراء أو تعبئة نموذج طلب استشارة). على عكس الموقع الكامل الذي يحتوي على صفحات وروابط متعددة قد تشتت العميل وتنسيه هدف زيارته الأساسي."
    },
    {
      question: "هل صفحات الهبوط التي تصممها Giotec متجاوبة مع الهواتف الذكية؟",
      answer: "بكل تأكيد! أكثر من 85% من زوار الإعلانات يتصفحون عبر الجوال. لذلك نصمم صفحات الهبوط في Giotec برمجياً بشكل متوافق وسريع وخفيف تماماً ليعمل بأعلى كفاءة على شاشات الهواتف بجميع مقاساتها بلمسات تفاعلية مريحة لليد."
    },
    {
      question: "ما هي المدة المستغرقة لتصميم وبرمجة صفحة الهبوط؟",
      answer: "يستغرق العمل عادةً من 3 إلى 5 أيام عمل، شاملاً ذلك دراسة العرض، هيكلة تجربة المستخدم، كتابة النصوص البيعية الجذابة، التصميم البصري الـ 3D المخصص، والبرمجة ورفعها على الاستضافة."
    },
    {
      question: "هل تقومون بربط صفحة الهبوط بنظام الواتساب أو أنظمة إدارة العملاء؟",
      answer: "نعم، نقوم بربط مباشر مع زر الواتساب برسائل مخصصة وتلقائية لتسهيل تواصل العميل معك، بجانب ربط بكسل المنصات الإعلانية (مثل تيك توك، فيسبوك، جوجل) لتتبع التحويلات بدقة."
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4500);
    return () => clearInterval(interval);
  }, [currentSlide]);

  // إعداد الـ Schema لـ جوجل لتظهر في محركات البحث
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqItems.map((item) => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  return (
    <div dir="rtl" className="relative min-h-screen bg-white text-black overflow-x-hidden font-sans antialiased selection:bg-red-600 selection:text-white text-right">
      
      {/* سكيما الأسئلة الشائعة المدمجة لـ SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      {/* خلفية شبكة المربعات الحمراء الرسمية لوكالة Giotec */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.16] bg-[linear-gradient(to_right,#dc2626_1px,transparent_1px),linear-gradient(to_bottom,#dc2626_1px,transparent_1px)] bg-[size:40px_40px]" />
      
      {/* إضاءات ناعمة باللون الأحمر خلف العناصر */}
      <div className="absolute top-[-5%] left-[-5%] w-[500px] h-[500px] rounded-full bg-red-600/5 blur-[120px] pointer-events-none z-0" />
      <div className="absolute top-[40%] right-[-5%] w-[600px] h-[600px] rounded-full bg-red-600/5 blur-[150px] pointer-events-none z-0" />

      {/* الحاوية الرئيسية المحاذية لليمين */}
      <div className="relative z-10 container mx-auto px-6 pt-32 pb-24 max-w-7xl">
        
        {/* ==================== 1. الشريط العلوي التفاعلي (Top Banner) ==================== */}
        <motion.div 
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative w-full min-h-[90px] bg-white text-black border-3 border-black rounded-3xl p-5 md:p-6 shadow-[6px_6px_0px_#dc2626] flex flex-col lg:flex-row items-center justify-between gap-6 overflow-hidden z-20 mb-16"
        >
          <div className="flex flex-col md:flex-row items-center gap-4 text-center md:text-right relative z-10">
            <span className="bg-red-600 text-white font-black text-xs px-4 py-2 rounded-xl border-2 border-black shadow-[2px_2px_0px_#000] shrink-0">
              عرض لفترة محدودة
            </span>
            <div className="text-black">
              <span className="text-xs font-bold block opacity-80">// من نقرة الإعلان إلى إتمام المبيعات:</span>
              <h4 className="text-base md:text-lg font-black">أسرار بناء صفحات هبوط تحقق أعلى معدل تحويل لشركتك</h4>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-4 relative z-10 w-full lg:w-auto justify-end">
            <p className="text-xs text-black/80 font-bold max-w-xs text-center lg:text-right leading-relaxed hidden xl:block">
              اكتشف كيف نصمم صفحات هبوط تفاعلية تضاعف مبيعاتك وتقلل تكلفة الإعلانات المهدرة.
            </p>
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black hover:bg-red-600 text-white px-6 py-3 rounded-xl font-black text-sm transition-all border-2 border-white shadow-[4px_4px_0px_#dc2626] flex items-center gap-2 shrink-0 active:translate-y-1"
            >
              <span>احصل على دراسة حالة مجاناً</span>
              <Play className="w-4 h-4 text-red-600 fill-red-600 transform rotate-180" />
            </a>
          </div>
        </motion.div>


        {/* ==================== 2. القسم الرئيسي للخدمة (Hero Section) ==================== */}
        <section className="relative pt-6 flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16 mb-24">
          <div className="flex-1 text-right relative z-10">
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-3 bg-red-50 border-2 border-red-600 p-3 rounded-full mb-8"
            >
              <div className="w-12 h-12 rounded-full bg-red-600 text-white flex items-center justify-center border-2 border-black shadow-[3px_3px_0px_#000] shrink-0">
                <MousePointerClick className="w-6 h-6 animate-pulse" />
              </div>
              <div className="pl-4 pr-1">
                <span className="text-red-600 font-black text-xs block">// صفحات الهبوط الخارقة (<bdi>Landing Pages</bdi>)</span>
                <span className="text-black text-sm font-black">أداة تسويقية رشيقة تصنع فارق الأرباح الفوري</span>
              </div>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-6xl font-black text-black leading-tight mb-6"
            >
              حوّل نقرات إعلاناتك <br />
              إلى <span className="text-red-600 underline decoration-black decoration-wavy underline-offset-8">مبيعات وأرباح فعلية</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-slate-600 max-w-2xl leading-relaxed mb-8 font-bold"
            >
              توقف عن توجيه زوار إعلانات وسائل التواصل والمحركات إلى موقعك الرئيسي المشتت! نحن في وكالة <bdi className="text-red-600 font-extrabold">Giotec</bdi> نصمم لك صفحات هبوط فائقة السرعة، مركزة على هدف واحد: إقناع الزائر بالشراء أو تسجيل بياناته فوراً.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-5 justify-start items-center"
            >
              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-600 hover:bg-black text-white px-8 py-4.5 rounded-xl font-black text-lg transition-all shadow-[6px_6px_0px_#000] border-3 border-black flex items-center gap-3 active:translate-y-1"
              >
                <span>احجز عرضك التوضيحي</span>
                <ArrowLeft className="w-5 h-5 text-white" />
              </a>
              <a 
                href="/portfolio" 
                className="text-black hover:text-red-600 font-black text-base underline decoration-red-600 underline-offset-4 transition-all"
              >
                ابدأ تجربتك المجانية لتصميم صفحتك مع <bdi>Giotec</bdi>
              </a>
            </motion.div>
          </div>

          <div className="flex-1 w-full relative z-10 flex justify-center items-center py-6">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, rotate: 1 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.6 }}
              className="relative w-full max-w-lg"
            >
              <div className="absolute inset-0 bg-red-600/10 rounded-full scale-110 filter blur-3xl opacity-40 -z-10" />
              <div className="w-11/12 bg-black border-3 border-black rounded-2xl p-4 shadow-[15px_15px_0px_rgba(0,0,0,0.15)] pb-24">
                <div className="flex gap-1.5 justify-start mb-4">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-600" />
                  <span className="w-2.5 h-2.5 rounded-full bg-white" />
                  <span className="w-2.5 h-2.5 rounded-full bg-black border border-white" />
                </div>
                <div className="h-40 bg-zinc-900 rounded-xl flex items-center justify-center border-2 border-dashed border-red-600/45" dir="ltr">
                  <span className="text-slate-400 text-xs font-mono font-bold">// giotec_high_converting_architecture.json</span>
                </div>
              </div>

              <motion.div 
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                className="absolute -bottom-6 left-8 w-11/12 bg-white text-black border-3 border-black rounded-2xl p-5 shadow-[12px_12px_0px_#dc2626]"
              >
                <div className="flex justify-between items-center mb-5 pb-3 border-b border-slate-100" dir="ltr">
                  <span className="text-xs font-black text-slate-500">giotec.com/landing-page</span>
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                    <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                    <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                  </div>
                </div>
                <div className="space-y-3 text-right">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center font-black text-xs text-white">UI</div>
                    <div>
                      <div className="h-3 w-28 bg-black rounded" />
                      <div className="h-2 w-16 bg-slate-300 rounded mt-1.5" />
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-2 pt-2">
                    {[
                      { color: "bg-red-600", text: "صحة وجمال" },
                      { color: "bg-black", text: "العقارات" },
                      { color: "bg-red-900", text: "متاجر السلة" }
                    ].map((card, i) => (
                      <div key={i} className="border border-slate-200 p-2 rounded-lg text-center hover:border-black transition-colors">
                        <div className={`h-8 w-full ${card.color} rounded-md mb-1.5`} />
                        <span className="text-[9px] font-black text-slate-700">{card.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>


        {/* ==================== 3. كارت الفلسفة والمميزات العائم (Floating 3D Card Section) ==================== */}
        <section className="relative py-12 flex justify-center items-center mb-28">
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            className="w-full max-w-4xl bg-white text-black border-3 border-black rounded-3xl p-8 md:p-14 shadow-[15px_15px_0px_#dc2626] relative z-10 text-center"
          >
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-red-600 border-3 border-black rounded-full w-12 h-12 flex items-center justify-center shadow-[3px_3px_0px_#000]">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <span className="text-red-600 font-black text-sm tracking-wider uppercase block mb-4">// صفحات الهبوط التفاعلية</span>
            <h2 className="text-3xl md:text-5xl font-black text-black leading-tight mb-6">
              صفحات هبوط مصممة خصيصاً لتسليط الضوء على <br />
              <span className="text-red-600 relative inline-block">
                ميزتك التنافسية وأعظم قصة نجاح
                <span className="absolute left-0 bottom-0 w-full h-[6px] bg-black -z-10 rounded" />
              </span> لعلامتك التجارية
            </h2>
            <p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed mb-10 font-medium">
              لا ينبغي أن تكون رحلة عميلك عبر الإعلانات مصدر تشتيت وإرهاق بمحتويات غير منظمة. في <bdi className="font-extrabold text-black">Giotec</bdi>، نقدم لك ثلاثة معايير حاسمة لضمان تفاعل فوري واستجابة استثنائية لمنتجاتك وخدماتك:
            </p>
            <div className="max-w-xl mx-auto text-right space-y-6">
              <div className="flex gap-4 items-start p-4 bg-slate-50 border-2 border-black rounded-2xl shadow-[4px_4px_0px_#000] hover:translate-x-1 transition-transform">
                <div className="bg-red-50 text-red-600 p-2 rounded-lg border-2 border-black shrink-0">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-black text-black">هل تعاني من بطء التصفح؟ نبرمج صفحاتنا بأكواد فائقة السرعة</h4>
                  <p className="text-xs text-slate-500 font-bold mt-1">تفتح صفحتك في أقل من جزء من الثانية لضمان عدم هروب الزائر قبل رؤية العرض.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start p-4 bg-slate-50 border-2 border-black rounded-2xl shadow-[4px_4px_0px_#000] hover:translate-x-1 transition-transform">
                <div className="bg-red-50 text-red-600 p-2 rounded-lg border-2 border-black shrink-0">
                  <Target className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-black text-black">
                    هل تجد صعوبة بالإقناع؟ نطبق هندسة واجهات تركز على الهدف (<bdi>CTA</bdi>)
                  </h4>
                  <p className="text-xs text-slate-500 font-bold mt-1">رحلة مستخدم ذكية ومباشرة تقود العميل مباشرة لزر الشراء أو الاستفسار دون لف أو دوران.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start p-4 bg-slate-50 border-2 border-black rounded-2xl shadow-[4px_4px_0px_#000] hover:translate-x-1 transition-transform">
                <div className="bg-red-50 text-red-600 p-2 rounded-lg border-2 border-black shrink-0">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-black text-black">ليس لديك وقت؟ سنقوم بإنشاء وهيكلة واجهتك بالكامل وتهيئتها للحملات</h4>
                  <p className="text-xs text-slate-500 font-bold mt-1">نهتم بالتفاصيل المعقدة، التجاوب مع الهواتف، وربط التحليلات لتركز أنت فقط على المبيعات والأرباح.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </section>


        {/* ==================== 4. معرض نماذج صفحات الهبوط (Portfolio Section) ==================== */}
        <section className="relative py-12 mb-28">
          <div className="text-center mb-16">
            <span className="text-red-600 font-black text-sm uppercase tracking-widest block mb-3">// سابقة أعمال فريدة</span>
            <h2 className="text-3xl md:text-5xl font-black text-black">
              عينات حية من صفحات هبوط <bdi className="text-red-600">Giotec</bdi> الخارقة
            </h2>
            <p className="text-slate-600 font-bold mt-4 max-w-xl mx-auto text-base">
              تصفح النماذج الفعلية التي تم تصميمها وتطويرها بأحدث المعايير البرمجية لضمان سرعة التحميل والتحويل الخارق.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {portfolioItems.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -8 }}
                className="bg-white border-3 border-black rounded-3xl p-6 md:p-8 shadow-[12px_12px_0px_#dc2626] flex flex-col justify-between relative z-10 min-h-[390px] text-right"
              >
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-[11px] font-black bg-black text-white px-3 py-1.5 rounded-lg border border-red-600 shadow-[2px_2px_0px_#000]">
                      <bdi>{item.category}</bdi>
                    </span>
                    <span className="text-[10px] font-black text-red-600 flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-red-600 animate-ping" />
                      {item.stats}
                    </span>
                  </div>
                  {/* الصور بألوانها الحقيقية والطبيعية دون أي فلاتر برمجية تشوهها */}
                  <div className={`h-32 w-full rounded-2xl border-2 border-black mb-6 overflow-hidden relative group ${item.bgColor}`}>
                    <div className="absolute top-0 inset-x-0 h-6 bg-black text-white flex items-center justify-between px-3" dir="ltr">
                      <div className="flex gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-600" />
                        <span className="w-1.5 h-1.5 rounded-full bg-white" />
                        <span className="w-1.5 h-1.5 rounded-full bg-white border border-slate-350" />
                      </div>
                      <span className="text-[8px] text-white font-mono font-bold">{item.englishTitle}.html</span>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center pt-6">
                      <Eye className="w-10 h-10 text-white drop-shadow-[2px_2px_0px_#000]" />
                    </div>
                  </div>
                  <h3 className="text-xl font-black text-black mb-3 leading-tight">
                    {item.title} <br />
                    <span className="text-xs text-slate-500 font-mono block mt-1" dir="ltr">
                      (<bdi>{item.englishTitle}</bdi>)
                    </span>
                  </h3>
                  <p className="text-xs text-slate-600 font-bold leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <a 
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-black text-black hover:text-red-600 flex items-center gap-1.5 transition-colors underline decoration-2 decoration-red-600 underline-offset-4"
                  >
                    <span>معاينة الصفحة الحية</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                  {/* جعل النص بداخل الزر الدائري بالأسفل أسود وواضح تماماً ومقروء */}
                  <a 
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-black hover:bg-red-600 hover:text-white text-xs font-black px-4 py-2 rounded-xl border-2 border-black shadow-[3px_3px_0px_#000] active:translate-y-1 transition-transform"
                  >
                    اطلب مثلها
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </section>


        {/* ==================== 5. عارض الصور التلقائي الخارق (Auto-Playing Gallery) ==================== */}
        <section className="relative py-12 mb-28">
          <div className="text-center mb-16">
            <span className="text-red-600 font-black text-sm uppercase tracking-widest block mb-3">// معرض الأفكار والملهمات</span>
            <h2 className="text-3xl md:text-5xl font-black text-black">
              عارض تصاميم <bdi className="text-red-600">Giotec</bdi> الاحترافي التلقائي
            </h2>
            <p className="text-slate-600 font-bold mt-4 max-w-xl mx-auto text-base">
              تشكيلة فريدة من القوالب التفاعلية وتصميمات صفحات الهبوط الرشيقة التي تتحرك تلقائياً لتستعرض جماليات واجهتنا.
            </p>
          </div>

          <motion.div 
            animate={{ y: [0, -6, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            className="w-full max-w-5xl mx-auto bg-white border-3 border-black rounded-3xl overflow-hidden shadow-[15px_15px_0px_#dc2626] relative z-10"
          >
            <div className="relative h-[300px] md:h-[500px] w-full bg-white overflow-hidden border-b-3 border-black">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, scale: 1.02 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 w-full h-full"
                >
                  {/* تم إزالة فلتر الـ grayscale لتعود الصور إلى ألوانها الحية الطبيعية */}
                  <img 
                    src={galleryImages[currentSlide].url} 
                    alt={galleryImages[currentSlide].title} 
                    className="w-full h-full object-cover object-center transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent" />
                  <div className="absolute bottom-0 inset-x-0 p-6 md:p-10 text-right text-black">
                    {/* جعل التاغات واضحة جداً بكتابة سوداء على تظليل أبيض بارز */}
                    <span className="inline-block bg-white text-black text-xs font-black px-3.5 py-1.5 rounded-xl border-2 border-black shadow-[2px_2px_0px_#000] mb-4">
                      <bdi>{galleryImages[currentSlide].tag}</bdi>
                    </span>
                    <h3 className="text-xl md:text-3xl font-black text-black leading-tight drop-shadow-[2px_2px_0px_rgba(255,255,255,0.85)] mb-2">
                      {galleryImages[currentSlide].title}
                    </h3>
                    <p className="text-xs md:text-sm text-slate-800 font-bold max-w-2xl leading-relaxed drop-shadow-[1px_1px_0px_rgba(255,255,255,0.85)]">
                      {galleryImages[currentSlide].desc}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>

              <div className="absolute inset-y-0 left-4 flex items-center justify-center z-20">
                <button 
                  onClick={prevSlide}
                  className="w-12 h-12 rounded-full bg-white text-black hover:bg-red-600 hover:text-white flex items-center justify-center border-2 border-black shadow-[3px_3px_0px_#000] transition-colors active:translate-y-0.5"
                  aria-label="الصورة السابقة"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
              </div>

              <div className="absolute inset-y-0 right-4 flex items-center justify-center z-20">
                <button 
                  onClick={nextSlide}
                  className="w-12 h-12 rounded-full bg-white text-black hover:bg-red-600 hover:text-white flex items-center justify-center border-2 border-black shadow-[3px_3px_0px_#000] transition-colors active:translate-y-0.5"
                  aria-label="الصورة التالية"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
            </div>

            <div className="bg-slate-50 p-4 md:p-6 flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex gap-2">
                {galleryImages.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentSlide(i)}
                    className={`h-3 rounded-full transition-all border-1.5 border-black ${
                      currentSlide === i ? "w-8 bg-red-600" : "w-3 bg-zinc-350 hover:bg-zinc-400"
                    }`}
                    aria-label={`الذهاب إلى شريحة ${i + 1}`}
                  />
                ))}
              </div>
              <div className="flex items-center gap-4">
                <span className="text-xs font-black text-slate-400 font-mono" dir="ltr">
                  ({currentSlide + 1} / {galleryImages.length})
                </span>
                {/* تم تعديل لون كتابة الزر ليصبح باللون الأسود الواضح والمقروء على الخلفية البيضاء */}
                <a 
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-black hover:bg-black hover:text-white text-xs md:text-sm font-black px-6 py-3 rounded-xl border-2 border-black shadow-[4px_4px_0px_#000] flex items-center gap-2 active:translate-y-1 transition-transform"
                >
                  <span>اطلب تصميمًا مخصصًا لعلامتك التجارية</span>
                  <ImageIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        </section>


        {/* ==================== 6. معرض المحاكاة الشامل (Immersive 3D Device Mockup Showcase) ==================== */}
        <section className="relative py-20 px-6 md:px-12 bg-white text-black rounded-3xl border-3 border-black shadow-[15px_15px_0px_#dc2626] overflow-hidden mb-28 z-10">
          
          <div className="absolute inset-0 bg-gradient-to-br from-red-600/5 via-transparent to-transparent pointer-events-none" />
          <div className="absolute -bottom-48 -right-48 w-96 h-96 rounded-full bg-red-600/5 blur-[150px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
            
            <div className="lg:col-span-5 text-right space-y-6">
              <span className="inline-flex items-center gap-2 bg-red-600/10 text-red-600 text-xs font-black px-4 py-2 rounded-full border border-red-600/30">
                <Sparkles className="w-4 h-4" />
                <span>هندسة التفاصيل بأسلوب Giotec</span>
              </span>
              
              <h2 className="text-3xl md:text-5xl font-extrabold text-black leading-tight">
                التصميم الإبداعي <br />
                هو <span className="text-red-600">أقوى محرك لمبيعاتك</span>
              </h2>
              
              <p className="text-sm md:text-base text-slate-650 leading-relaxed font-medium">
                نحن لا نصمم مجرد صفحات ثابتة، بل نبني بيئات تفاعلية متكاملة تجعل من تصفح منتجاتك على الهواتف والأجهزة اللوحية واللابتوب متعة بصرية تدفع الزائر لاتخاذ قرار فوري.
              </p>

              <div className="space-y-4 pt-4 border-t border-zinc-200">
                <div className="flex items-center gap-3 justify-start">
                  <CheckCircle2 className="w-5 h-5 text-red-600 shrink-0" />
                  <span className="text-sm text-slate-800 font-bold">متوافقة بنسبة 100% مع جميع شاشات الجوال والتأثيرات اللمسية.</span>
                </div>
                <div className="flex items-center gap-3 justify-start">
                  <CheckCircle2 className="w-5 h-5 text-red-600 shrink-0" />
                  <span className="text-sm text-slate-800 font-bold">بنية أكواد نظيفة ترفع ترتيبك على محركات البحث بشكل طبيعي.</span>
                </div>
                <div className="flex items-center gap-3 justify-start">
                  <CheckCircle2 className="w-5 h-5 text-red-600 shrink-0" />
                  <span className="text-sm text-slate-800 font-bold">تأثيرات 3D مميزة تجعل هويتك البصرية فريدة وغير قابلة للنسيان.</span>
                </div>
              </div>

              <div className="pt-6">
                <a 
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-red-600 hover:bg-black text-white font-black text-sm px-6 py-3.5 rounded-xl border-2 border-black shadow-[4px_4px_0px_rgba(0,0,0,0.15)] transition-transform hover:translate-y-[-2px] active:translate-y-0 flex items-center gap-2 inline-flex"
                >
                  <span>أريد تصفح النماذج التفاعلية</span>
                  <ArrowLeft className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-7 relative min-h-[450px] md:min-h-[550px] w-full flex items-center justify-center">
              
              {/* 1. الكتيب العائم الخلفي */}
              <motion.div 
                animate={{ y: [0, -10, 0], rotate: [-4, -2, -4] }}
                transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
                className="absolute top-4 right-2 md:right-10 w-[240px] md:w-[320px] bg-white border-2 border-zinc-800 rounded-xl p-5 shadow-[12px_12px_24px_rgba(0,0,0,0.15)] z-10"
              >
                <div className="h-44 bg-slate-50 rounded-lg flex flex-col justify-between p-4 border border-zinc-200 overflow-hidden relative">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-red-600/5 rounded-full blur-xl" />
                  <span className="text-[10px] font-mono text-red-600 uppercase tracking-widest block font-extrabold">// GIOTEC STYLEGUIDE</span>
                  <BookOpen className="w-8 h-8 text-red-600" />
                  <div className="space-y-1">
                    <h4 className="text-xs font-black text-black">دليل الهوية البصرية والماركة</h4>
                    <p className="text-[9px] text-slate-500">تنسيق الألوان وتوزيع العناصر الجرافيكية لجذب انتباه العميل.</p>
                  </div>
                </div>
                <div className="mt-4 space-y-2" dir="ltr">
                  <div className="h-1.5 w-1/3 bg-red-600 rounded" />
                  <div className="h-1 w-full bg-zinc-200 rounded" />
                  <div className="h-1 w-5/6 bg-zinc-200 rounded" />
                </div>
              </motion.div>

              {/* 2. الهاتف الذكي العائم في المنتصف */}
              <motion.div 
                animate={{ y: [-5, 8, -5], rotate: [2, 5, 2] }}
                transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
                className="absolute top-20 left-12 md:left-24 w-[160px] md:w-[200px] bg-white border-4 border-zinc-900 rounded-[32px] p-2.5 shadow-[15px_15px_30px_rgba(0,0,0,0.15)] z-20 overflow-hidden"
              >
                <div className="w-16 h-4 bg-zinc-200 absolute top-0 left-1/2 -translate-x-1/2 rounded-b-xl z-30" />
                <div className="h-[250px] md:h-[320px] bg-red-600/5 rounded-[24px] overflow-hidden border border-zinc-200 relative flex flex-col justify-between p-4">
                  <Smartphone className="w-6 h-6 text-red-600" />
                  <div className="space-y-1.5 text-right">
                    <div className="h-1 w-1/2 bg-red-600 rounded inline-block" />
                    <h5 className="text-[10px] font-extrabold text-black">أسرع عرض هاتفي متاح</h5>
                    <p className="text-[8px] text-slate-500 leading-normal">نهتم بجعل واجهة الجوال انسيابية جداً لضمان تفاعل مستخدمي السوشيال ميديا.</p>
                  </div>
                </div>
              </motion.div>

              {/* 3. شاشة التابلت الضخمة في الواجهة الأمامية بالأسفل */}
              <motion.div 
                animate={{ y: [0, -5, 0] }}
                transition={{ repeat: Infinity, duration: 9, ease: "easeInOut" }}
                className="absolute -bottom-6 md:-bottom-10 left-1/2 -translate-x-1/2 w-[320px] sm:w-[450px] md:w-[580px] bg-white border-4 border-zinc-900 rounded-t-3xl p-3 shadow-[0px_-15px_40px_rgba(0,0,0,0.1)] z-30"
              >
                <div className="flex justify-between items-center mb-3 px-2" dir="ltr">
                  <div className="flex gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-red-600" />
                    <span className="w-2 h-2 rounded-full bg-black" />
                    <span className="w-2 h-2 rounded-full bg-white border border-zinc-300" />
                  </div>
                  <span className="text-[9px] text-slate-400 font-mono">https://giotec.com/creative-showcase</span>
                </div>

                <div className="h-[160px] md:h-[220px] bg-slate-50 rounded-xl overflow-hidden border border-zinc-200 relative p-6 flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <Laptop className="w-8 h-8 text-red-600" />
                    <span className="bg-red-600/10 text-red-600 border border-red-600/20 font-mono text-[8px] px-2.5 py-1 rounded">ACTIVE SITE</span>
                  </div>
                  
                  <div className="space-y-2 text-right">
                    <h4 className="text-sm md:text-lg font-black text-black">العرض الحقيقي لصفحة الهبوط التفاعلية</h4>
                    <p className="text-xs text-slate-500 max-w-sm">تصاميم متكاملة تبرز هوية شركتك، تتوافق مع محركات البحث وتضمن تجربة مستخدم رشيقة ومريحة.</p>
                  </div>
                </div>
              </motion.div>

            </div>

          </div>
        </section>


        {/* ==================== 7. الأسئلة الشائعة الفاخر بالتصميم النظيف (FAQs Section) ==================== */}
        <section className="relative py-12 mb-24 max-w-4xl mx-auto z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-red-600/10 text-red-600 border border-red-600/30 px-4 py-2 rounded-full mb-4">
              <HelpCircle className="w-4 h-4" />
              <span className="text-xs font-black">// الإجابات والحلول السريعة</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-black">
              الأسئلة الشائعة والمكررة
            </h2>
            <p className="text-slate-500 font-bold mt-4 text-base max-w-lg mx-auto">
              كل ما تود معرفته عن خدمة تصميم صفحات الهبوط وتطويرها الاحترافي مع وكالة <bdi className="text-red-600 font-black">Giotec</bdi>.
            </p>
          </div>

          <div className="space-y-5 text-right">
            {faqItems.map((item, index) => {
              const isOpen = activeFaq === index;
              return (
                <div 
                  key={index}
                  className="bg-white border-3 border-black rounded-2xl overflow-hidden shadow-[6px_6px_0px_#dc2626] transition-all duration-350"
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : index)}
                    className="w-full p-6 flex justify-between items-center text-right font-black text-black hover:text-red-600 gap-4 transition-colors focus:outline-none"
                  >
                    <span className="text-base md:text-lg leading-tight">{item.question}</span>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="shrink-0 w-8 h-8 rounded-full border-2 border-black flex items-center justify-center bg-white text-black"
                    >
                      <ChevronDown className="w-4 h-4" />
                    </motion.div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="border-t border-zinc-200 bg-zinc-50"
                      >
                        <div className="p-6 text-sm md:text-base text-slate-700 leading-relaxed font-bold">
                          {item.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </section>


        {/* زر سفلي نهائي يدعو لبدء العمل الفوري */}
        <div className="text-center mt-8 relative z-10">
          <a 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-red-600 hover:bg-black text-white px-8 py-4.5 rounded-2xl font-black text-lg transition-all shadow-[6px_6px_0px_#000] border-3 border-black active:translate-y-1"
          >
            <span>ابدأ مشروع صفحة هبوطك مع <bdi>Giotec</bdi> الآن</span>
            <ArrowLeft className="w-5 h-5 text-white" />
          </a>
        </div>

      </div>
    </div>
  );
}
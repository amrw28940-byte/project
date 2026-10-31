"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Globe, 
  Layers, 
  Zap, 
  Search, 
  Lock, 
  ArrowUpRight, 
  Code2, 
  Sliders, 
  Gauge, 
  Check, 
  HelpCircle,
  Sparkles,
  MousePointerClick,
  Smartphone,
  Terminal,
  Cpu,
  Fingerprint
} from "lucide-react";

const wpFaqSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "name": "تصميم وتطوير مواقع ووردبريس الاحترافية - Giotec",
      "provider": {
        "@type": "LocalBusiness",
        "name": "Giotec Web Services",
        "url": "https://giotec.com"
      },
      "serviceType": "WordPress Website Design and Development",
      "description": "نطور مواقع ووردبريس مخصصة وخارقة السرعة، آمنة بالكامل، ومهيأة للسيو لزيادة مبيعات الشركات والخدمات وتصدر محركات البحث."
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "هل تقومون بتصميم مواقع ووردبريس من خلال قوالب جاهزة؟",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "إطلاقاً، نحن في Giotec نتجنب القوالب الجاهزة المليئة بالأخطاء البرمجية والبطيئة. نقوم ببناء موقعك وتطويره بشكل مخصص بالكامل (Custom Coding / Lightweight Builders) لضمان الأداء الفائق والسرعة والأمان والتفرد البصري الهوياتي لعلامتك التجارية."
          }
        },
        {
          "@type": "Question",
          "name": "هل الموقع سيكون متوافقاً مع محركات البحث وسيو جوجل؟",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "نعم، السيو التقني (Technical SEO) هو صميم عملنا. نقوم بضبط كود الموقع بالكامل، تهيئة السكيما المخصصة، تسريع الكاش، وتجهيز بنية العناوين والروابط لتكون صديقة تماماً لخوارزميات جوجل وتصدر كلماتك المستهدفة."
          }
        },
        {
          "@type": "Question",
          "name": "كيف تحمون موقع الووردبريس من الاختراق والملفات الضارة؟",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "نطبق جدار حماية (Firewall) صارم، مع تغيير مسارات لوحة التحكم الافتراضية، وربط شهادات الأمان SSL، وإغلاق الثغرات البرمجية وحظر هجمات الـ Brute Force، بالإضافة لجدولة نسخ احتياطي دوري تلقائي للموقع."
          }
        },
        {
          "@type": "Question",
          "name": "هل يمكنني تعديل وإضافة محتوى للموقع بنفسي مستقبلاً؟",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "نعم بالتأكيد! ووردبريس يتميز بلوحة تحكم سهلة للغاية. سنقوم بتدريبك أنت أو فريقك عبر فيديوهات مسجلة خصيصاً لموقعك لنشرح لك كيفية تعديل النصوص، الصور، إضافة صفحات، أو مقالات في دقيقة واحدة ودون الحاجة لأي مهارة برمجية."
          }
        }
      ]
    }
  ]
};

export default function WordPressDesignPage() {
  // رابط الواتساب الرسمي لوكالة Giotec مع رسالة مخصصة لطلب موقع ووردبريس
  const whatsappUrl = "https://wa.me/201020347946?text=مرحباً%20وكالة%20Giotec،%20أريد%20الاستفسار%20عن%20خدمة%20تصميم%20وتطوير%20موقع%20ووردبريس%20احترافي";

  return (
    <main className="relative min-h-screen bg-white text-slate-900 overflow-x-hidden font-sans antialiased selection:bg-red-600 selection:text-white">
      
      {/* سكيما السيو الاحترافية لموقع Giotec */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(wpFaqSchema) }}
      />

      {/* 1. خلفية شبكة المربعات الحمراء المميزة للوكالة */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.22] bg-[linear-gradient(to_right,#dc2626_1px,transparent_1px),linear-gradient(to_bottom,#dc2626_1px,transparent_1px)] bg-[size:50px_50px]" />
      
      <div className="fixed top-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-red-500/5 blur-[140px] pointer-events-none z-0" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full bg-red-500/5 blur-[140px] pointer-events-none z-0" />

      {/* SECTION 1: HERO SECTION (بروز قوي وتصميم غير متناظر) */}
      <section className="relative z-10 container mx-auto px-6 pt-40 pb-24 flex flex-col lg:flex-row items-center gap-16">
        <div className="flex-1 text-right">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-red-50 border-2 border-red-600 px-4 py-2 rounded-xl text-red-600 text-sm mb-8 font-black shadow-[4px_4px_0px_#dc2626]"
          >
            <Sparkles className="w-4 h-4 text-red-600" />
            وكالة Giotec لتطوير المواقع المخصصة الخالية من التكرار والبطء
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl font-black mb-8 leading-tight tracking-tight text-slate-900"
          >
            لا تكتفِ بقالب جاهز! <br />
            ابنِ تحفتك البرمجية بـ <span className="text-red-600 drop-shadow-[0_4px_10px_rgba(220,38,38,0.25)]">ووردبريس مخصص</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-slate-600 max-w-2xl leading-relaxed mb-10 font-bold"
          >
            نحن في **Giotec** لا نثبت قوالب مشحونة بأكواد بطيئة تقتل تجربة العميل وتدمر السيو. نقوم بهندسة موقعك ليكون سريعاً كالبرق، بأكواد برمجية نظيفة، وحماية مطلقة تضمن لك صدارة محركات البحث.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-5 justify-start"
          >
            {/* زر الانتقال لواتساب جيو تيك */}
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-xl font-black text-lg transition-all transform hover:-translate-y-1 active:translate-y-0 shadow-[6px_6px_0px_#000] border-2 border-black flex items-center gap-2"
            >
              ابدأ موقعك الآن
              <ArrowUpRight className="w-5 h-5" />
            </a>
            
            {/* زر الانتقال للمشاريع */}
            <a 
              href="/projects" 
              className="bg-white hover:bg-slate-50 text-slate-900 px-8 py-4 rounded-xl font-black text-lg transition-all border-2 border-red-600 shadow-[6px_6px_0px_rgba(220,38,38,1)] flex items-center justify-center"
            >
              رؤية مشاريعنا السابقة
            </a>
          </motion.div>
        </div>

        <div className="flex-1 w-full relative">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative bg-white border-4 border-slate-900 p-3 rounded-2xl shadow-[15px_15px_0px_#dc2626] overflow-hidden group"
          >
            {/* الصورة المعدلة: صورة تعبر بدقة عن ووردبريس على شاشة لابتوب برمجية */}
            <img 
              src="https://miro.medium.com/v2/resize:fit:1200/1*O3ZtsYZyWIUyZkDQjaoacQ.png" 
              alt="WordPress Code Development on Laptop Screen - Giotec" 
              className="w-full h-[400px] object-cover rounded-xl contrast-110 group-hover:scale-102 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-75" />
            <div className="absolute bottom-6 right-6 left-6 bg-white border-2 border-black p-5 rounded-xl backdrop-blur-md shadow-[4px_4px_0px_#dc2626]">
              <p className="text-red-600 font-black flex items-center gap-2 mb-1 text-sm">
                <span className="w-2.5 h-2.5 rounded-full bg-red-600 animate-pulse" />
                تطوير ووردبريس مخصص
              </p>
              <h3 className="text-lg font-black text-slate-900">أكواد نظيفة مخصصة تقتل البطء وتصدر محركات البحث</h3>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: DIGITAL TERMINAL STATS (تصميم يحاكي التيرمنال الرقمي لكسر الملل) */}
      <section className="relative z-10 container mx-auto px-6 py-12">
        <div className="bg-slate-900 border-4 border-black p-8 rounded-3xl shadow-[10px_10px_0px_#dc2626] text-white">
          <div className="flex items-center gap-2 mb-6 border-b border-slate-800 pb-4">
            <div className="w-3.5 h-3.5 rounded-full bg-red-600" />
            <div className="w-3.5 h-3.5 rounded-full bg-yellow-500" />
            <div className="w-3.5 h-3.5 rounded-full bg-green-500" />
            <span className="text-xs text-slate-500 font-mono ml-4">giotec_performance_logs.sh</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { label: "سرعة استجابة الخادم", val: "99/100", details: "حسب مقاييس أداء جوجل" },
              { label: "تأمين جدار الحماية", val: "ACTIVE", details: "حظر كامل للثغرات الأمنية" },
              { label: "بنية السيو المخصصة", val: "100%", details: "دعم فني وتوزيع وسوم دقيق" },
              { label: "معدل التحميل الفعلي", val: "0.8s", details: "تحميل فوري لحظي لجميع الصفحات" }
            ].map((stat, idx) => (
              <div key={idx} className="border-r-2 border-dashed border-red-600/30 pr-6">
                <p className="text-xs text-slate-400 font-mono mb-2">// {stat.label}</p>
                <h3 className="text-3xl font-black text-red-500 mb-1 font-mono">{stat.val}</h3>
                <p className="text-xs text-slate-500 font-bold">{stat.details}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: DARK MODE CORE SERVICES (تغيير كلي للوضع المظلم لكسر نمط الصفحة الأبيض!) */}
      <section className="relative z-10 bg-slate-950 text-white py-24 border-y-4 border-slate-900 overflow-hidden">
        {/* خلفية خاصة بالقسم المظلم */}
        <div className="absolute inset-0 opacity-[0.08] bg-[linear-gradient(to_right,#dc2626_1px,transparent_1px),linear-gradient(to_bottom,#dc2626_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <span className="text-red-500 font-black text-sm tracking-widest uppercase bg-red-950/50 border border-red-500/30 px-4 py-2 rounded-lg">خدمات GIOTEC الفائقة</span>
            <h2 className="text-3xl md:text-5xl font-black mt-6 mb-4">هندسة وبناء مواقع ووردبريس <span className="text-red-500">من الصفر</span></h2>
            <p className="text-slate-400 max-w-xl mx-auto font-medium text-sm">نحن لا نقوم بالتثبيت السهل؛ نحن نطور برمجيات مصممة خصيصاً لتفجير المبيعات.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Terminal className="w-8 h-8 text-red-500" />,
                title: "تطوير الثيمات يدويًا (Liquid/PHP)",
                desc: "تطوير وبناء ثيمات ووردبريس حصرية خفيفة تماماً بدون استخدام إضافات بصرية ثقيلة تؤثر على محرك البحث وتجربة المستخدم."
              },
              {
                icon: <Cpu className="w-8 h-8 text-red-500" />,
                title: "تكامل الأنظمة البرمجية (API)",
                desc: "ربط موقعك بأنظمة المحاسبة، الـ CRM، بوابات الدفع المحلية والخليجية، وشركات الشحن بسلاسة برمجية تامة ومحكمة الحماية."
              },
              {
                icon: <Fingerprint className="w-8 h-8 text-red-500" />,
                title: "أمن فائق وحماية بروتوكولية",
                desc: "تشفير كامل لملفات الموقع وقواعد البيانات مع فحص ذاتي لمنع القرصنة وهجمات حقن الأكواد الخبيثة للحفاظ على ثقة عملائك."
              }
            ].map((srv, index) => (
              <div 
                key={index}
                className="group bg-slate-900 border-2 border-slate-800 p-8 rounded-3xl transition-all duration-300 hover:border-red-500 shadow-[8px_8px_0px_#000] hover:shadow-[8px_8px_0px_#dc2626]"
              >
                <div className="bg-slate-950 border border-slate-800 p-4 rounded-2xl w-fit mb-6 shadow-[3px_3px_0px_#dc2626]">
                  {srv.icon}
                </div>
                <h3 className="text-xl font-black mb-4 text-white group-hover:text-red-500 transition-colors">{srv.title}</h3>
                <p className="text-slate-400 leading-relaxed text-sm font-medium">{srv.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: FOLDER TABS DESIGN - DESIGN PHILOSOPHY (كروت على شكل ملفات لكسر الشكل التقليدي) */}
      <section className="relative z-10 container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black mb-4 text-slate-900">فلسفة بناء فريدة تمنحك <span className="text-red-600">السيطرة الكاملة</span></h2>
          <p className="text-slate-600 max-w-xl mx-auto font-bold">لماذا نقضي مئات الساعات في تطوير التفاصيل الصغيرة لموقعك؟</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { step: "01", category: "البناء الهيكلي", title: "توزيع تجربة المستخدم (UX)", desc: "نهتم بتبسيط عملية الشراء وطلب الخدمات لتتم بأقل من 3 نقرات لضمان تحقيق أعلى تحويل للمبيعات." },
            { step: "02", category: "الأكواد الرشيقة", title: "أكواد نظيفة وسرعة مطلقة", desc: "ضغط وتصفية ملفات الأنماط والـ JS مع جدولة الملفات لفتح الموقع بشكل فوري على الهواتف الضعيفة." },
            { step: "03", category: "الاستقرار التام", title: "تحديثات سهلة بدون مشاكل", desc: "نطور موقعك ليكون جاهزاً للمستقبل؛ يمكنك التحديث دون خوف من تعطل الموقع أو توقف العناصر البصرية." }
          ].map((tab, idx) => (
            <div key={idx} className="relative pt-6">
              {/* تبويب فولدر ورقي */}
              <div className="absolute top-0 right-6 bg-slate-900 text-white border-t-2 border-x-2 border-black font-black text-xs px-4 py-1.5 rounded-t-xl z-20 shadow-[2px_0px_0px_rgba(0,0,0,1)]">
                {tab.category}
              </div>
              <div className="bg-white border-3 border-slate-900 p-8 rounded-2xl rounded-tr-none shadow-[8px_8px_0px_#dc2626] relative z-10">
                <span className="text-5xl font-black text-red-600/10 absolute top-4 left-4">{tab.step}</span>
                <h3 className="text-lg font-black text-slate-900 mb-3 relative z-10">{tab.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed font-bold relative z-10">{tab.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 5: WORDPRESS SEO & SPEED (شكل تصميم منقط ومتقطع لكسر رتابة التكرار) */}
      <section className="relative z-10 container mx-auto px-6 py-20 bg-red-50/50 border-3 border-dashed border-red-600 rounded-3xl p-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-right">
            <h2 className="text-3xl md:text-5xl font-black mb-6 text-slate-900">سيو ووردبريس المتقدم: <span className="text-red-600">تصدر البحث بجدارة</span></h2>
            <p className="text-slate-600 leading-relaxed mb-6 font-bold">
              تطوير موقع جميل لا يزوره أحد هو خسارة لمالك. نحن في **Giotec** خبراء سيو تقني؛ نقوم بتهيئة الكود الداخلي ليتوافق مع أحدث خوارزميات الذكاء الاصطناعي وجوجل لعام 2026.
            </p>
            <div className="space-y-4 font-bold text-slate-800">
              <div className="flex gap-3 justify-end items-center">
                <span>كتابة وهندسة الـ Product Schema يدوياً لظهور الأسعار والتقييمات بجوجل.</span>
                <span className="bg-red-600 text-white rounded-full p-1.5 border border-black shadow-[2px_2px_0px_#000]"><Check className="w-4 h-4" /></span>
              </div>
              <div className="flex gap-3 justify-end items-center">
                <span>توليد خرائط أرشفة تلقائية وتحديث ملفات الروبوت لضمان فهرسة فورية.</span>
                <span className="bg-red-600 text-white rounded-full p-1.5 border border-black shadow-[2px_2px_0px_#000]"><Check className="w-4 h-4" /></span>
              </div>
              <div className="flex gap-3 justify-end items-center">
                <span>بنية خفيفة تمنح موقعك تقييماً أخضر بالكامل في اختبارات أداء جوجل وسرعة الهواتف.</span>
                <span className="bg-red-600 text-white rounded-full p-1.5 border border-black shadow-[2px_2px_0px_#000]"><Check className="w-4 h-4" /></span>
              </div>
            </div>
          </div>
          <div className="bg-white border-4 border-slate-900 p-8 rounded-2xl shadow-[12px_12px_0px_#dc2626]">
            <h3 className="text-xl font-black mb-6 text-slate-900 text-center">أدوات تحسين الترتيب المدمجة بموقعك</h3>
            <div className="space-y-3 font-mono text-sm">
              <div className="flex justify-between items-center bg-slate-50 border-2 border-black p-3 rounded-lg">
                <span className="text-green-600 font-black">✔ مفعلة ونشطة</span>
                <span className="text-slate-800 font-black">Google Search Console Setup</span>
              </div>
              <div className="flex justify-between items-center bg-slate-50 border-2 border-black p-3 rounded-lg">
                <span className="text-green-600 font-black">✔ 100 / 100</span>
                <span className="text-slate-800 font-black">Mobile UX Speed Index</span>
              </div>
              <div className="flex justify-between items-center bg-slate-50 border-2 border-black p-3 rounded-lg">
                <span className="text-red-600 font-black">✔ يدوي متطور</span>
                <span className="text-slate-800 font-black">Clean URL Redirection Code</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: VERTICAL TIMELINE ROADMAP (تغيير خارطة الطريق من كروت إلى خط زمني عمودي تفاعلي) */}
      <section className="relative z-10 container mx-auto px-6 py-20">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-black mb-4 text-slate-900">مراحل بناء موقعك في <span className="text-red-600">Giotec</span></h2>
          <p className="text-slate-600 max-w-xl mx-auto font-bold">خطوات مدروسة لتسليمك موقعاً يفوق طموحاتك وبكفاءة برمجية قصوى.</p>
        </div>

        <div className="relative border-r-4 border-slate-900 max-w-3xl mx-auto pr-8 space-y-12">
          {[
            { num: "01", title: "جلسة العصف الذهني ودراسة السوق", desc: "نقوم معاً بدراسة ومناقشة أهداف موقعك، تحليل المنافسين ومواقعهم لاكتشاف نقاط القوة والضعف لنتفوق عليها بالكامل." },
            { num: "02", title: "تصميم نموذج الواجهة والهيكل", desc: "نرسم لك شكل وتدفق صفحات الموقع المبدئية لترى رحلة العميل بنفسك قبل كتابة أي كود برمجي." },
            { num: "03", title: "كتابة الأكواد والبرمجة والتأمين", desc: "تطوير الثيم الخاص بك وتثبيت أنظمة الأمان المتطورة وشهادات الحماية وتكامل الأنظمة." },
            { num: "04", title: "فحص السرعة والتسليم والتدريب", desc: "نجري اختبارات جودة وفحوصات سرعة دقيقة، ثم نسلمك لوحة التحكم مع فيديوهات تدريب مسجلة خاصة بك لإدارة موقعك بسهولة." }
          ].map((item, idx) => (
            <div key={idx} className="relative">
              {/* النقطة الدائرية للجدول الزمني بالخارج */}
              <div className="absolute top-1 -right-[43px] bg-red-600 border-3 border-slate-900 text-white font-black text-xs w-7 h-7 rounded-full flex items-center justify-center shadow-[2px_2px_0px_#000]" />
              <div className="bg-white border-3 border-slate-900 p-6 rounded-2xl shadow-[6px_6px_0px_#dc2626] transform hover:-translate-y-1 transition-all">
                <span className="text-red-600 font-mono font-black text-xs block mb-1">// المرحلة {item.num}</span>
                <h3 className="text-lg font-black text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed font-bold">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 7: WHY CHOOSE GIOTEC (تنوع جديد في الكروت: كروت مائلة ومتقاطعة ثلاثية الأبعاد) */}
      <section className="relative z-10 container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black mb-4 text-slate-900">ميزات حصرية تحصل عليها مع <span className="text-red-600">Giotec</span></h2>
          <p className="text-slate-600 max-w-xl mx-auto font-bold">لماذا نعتبر الخيار الأول لأصحاب المشاريع والشركات الطموحة؟</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { title: "حرية التعديل والتخصيص", desc: "موقعك لن يشبه أي موقع آخر بالويب، هويتك فريدة وتخصيصك كود نقي خفيف تماماً." },
            { title: "أكواد نظيفة 100%", desc: "تودع البطء الناتج عن الإضافات التجارية الثقيلة والمنشآت المعقدة." },
            { title: "حماية وحصانة عسكرية", desc: "جدار ناري لحجب الثغرات ومنع الوصول لملفات قواعد البيانات الحساسة." },
            { title: "فريق دعم فني متواجد", desc: "نحن بجانبك دائماً لحل أي تساؤل وتحديث موقعك بمرونة تامة مستقبلاً." }
          ].map((why, idx) => (
            <div 
              key={idx} 
              className="bg-white border-3 border-slate-900 p-6 rounded-3xl hover:border-red-600 transition-all hover:-rotate-1 shadow-[10px_10px_0px_#dc2626]"
            >
              <div className="text-5xl font-black text-red-600/30 mb-4 font-mono">#0{idx+1}</div>
              <h3 className="text-lg font-black text-slate-900 mb-3">{why.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed font-bold">{why.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 8: CALL TO ACTION (منطقة اتخاذ إجراء موجهة للواتساب برقم giotec) */}
      <section className="relative z-10 container mx-auto px-6 py-16 text-center">
        <div className="bg-red-50 border-4 border-red-600 p-12 rounded-3xl max-w-4xl mx-auto shadow-[15px_15px_0px_#000] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/10 rounded-full blur-xl pointer-events-none" />
          <h2 className="text-3xl md:text-5xl font-black mb-6 text-slate-900">اصنع موقعاً يليق <span className="text-red-600">بمكانتك التجارية!</span></h2>
          <p className="text-slate-600 max-w-xl mx-auto mb-10 text-lg leading-relaxed font-bold">
            احجز استشارتك المجانية اليوم مع مطوري **Giotec** لبناء موقع ووردبريس مخصص، آمن وسريع كالمستقبل وخالٍ من مشكلات البطء وقوالب الويب المكررة.
          </p>
          {/* زر الاستشارة والبدء لفتح الواتساب مباشرة */}
          <a 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-600 hover:bg-red-700 text-white px-10 py-5 rounded-xl font-black text-xl transition-all hover:scale-105 shadow-[6px_6px_0px_#000] border-2 border-black flex items-center gap-2 mx-auto w-fit"
          >
            احصل على استشارة لتصميم موقعك
            <MousePointerClick className="w-5 h-5 text-white animate-bounce" />
          </a>
        </div>
      </section>

      {/* SECTION 9: SERVICE COMPARISON MATRIX (الجدول برسم حدود سميكة وتأثير بروز قوي) */}
      <section className="relative z-10 container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black mb-4 text-slate-900">قارن بين جودة <span className="text-red-600">كود Giotec</span> والبدائل الأخرى</h2>
          <p className="text-slate-600 max-w-xl mx-auto font-bold">اكتشف الفرق قبل أن تضع استثمارك في موقع قد يتعطل غداً.</p>
        </div>

        <div className="overflow-x-auto border-4 border-slate-900 rounded-3xl shadow-[12px_12px_0px_#dc2626]">
          <table className="w-full text-right bg-white border-collapse">
            <thead>
              <tr className="bg-slate-900 border-b-3 border-slate-900 text-white">
                <th className="p-5 font-black text-lg">معيار بناء موقعك</th>
                <th className="p-5 font-black text-lg text-center bg-red-600 border-x-2 border-slate-900">وكالة Giotec</th>
                <th className="p-5 font-black text-lg text-center">الوكالات والمستقلين العاديين</th>
              </tr>
            </thead>
            <tbody className="divide-y-2 divide-slate-200 font-bold">
              {[
                { feat: "بناء ثيم ووردبريس مخصص (Custom Development)", uni: "مطور كود كلياً وبدون تكرار وبسلاسة تامة", other: "تركيب قوالب جاهزة وبطيئة وتصميم مكرر" },
                { feat: "سرعة تحميل المتصفحات وهواتف الجوال", uni: "مضمونة في أقل من 1.2 ثانية (فائق الخفة)", other: "تفوق الـ 4 ثواني لكثرة الملفات المهملة والبطيئة" },
                { feat: "مستوى الأمان وحماية الموقع والملفات والبيانات", uni: "أنظمة حماية متقدمة ومسارات دخول مشفرة ومخفية", other: "تركيب عشوائي لإضافات أمان مجانية وتجاهل الثغرات" },
                { feat: "تهيئة محركات البحث المتقدمة وكود الـ Schema", uni: "مهيأ ومكتوب برمجياً يدوياً لتصدر كلمات البحث", other: "الاعتماد الكامل على نسخ وإلصاق البيانات تلقائياً" },
                { feat: "التعليم والتدريب على إدارة محتوى الموقع", uni: "دليل فيديوهات مخصص ومسجل خصيصاً لموقعك", other: "تسليم ملف الموقع ورحيل المطور دون توجيه فني" }
              ].map((row, i) => (
                <tr key={i} className="hover:bg-slate-50 transition-colors">
                  <td className="p-5 text-slate-800 border-l-2 border-slate-200">{row.feat}</td>
                  <td className="p-5 text-center text-red-600 bg-red-50/30 border-x-2 border-slate-200 font-black">{row.uni}</td>
                  <td className="p-5 text-center text-slate-400">{row.other}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* SECTION 10: FAQ SECTION WITH SCHEMA (الأسئلة الشائعة مع بروز قوي وظلال حمراء لافتة) */}
      <section className="relative z-10 container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black mb-4 text-slate-900">الأسئلة الشائعة حول <span className="text-red-600">تصميم مواقع ووردبريس</span></h2>
          <p className="text-slate-600 max-w-xl mx-auto font-bold">إجابات برمجية دقيقة وحاسمة لتبديد مخاوف وتأكيد رغبة عملائك المباشرة.</p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {[
            {
              q: "هل تقومون بتصميم مواقع ووردبريس من خلال قوالب جاهزة؟",
              a: "إطلاقاً، نحن نتجنب القوالب الجاهزة المليئة بالأخطاء البرمجية والبطيئة. نقوم ببناء موقعك وتطويره بشكل مخصص بالكامل لضمان الأداء الفائق والسرعة والأمان والتفرد البصري الهوياتي لعلامتك التجارية."
            },
            {
              q: "هل الموقع سيكون متوافقاً مع محركات البحث وسيو جوجل؟",
              a: "نعم، السيو التقني هو صميم عملنا. نقوم بضبط كود الموقع بالكامل، تهيئة السكيما المخصصة، تسريع الكاش، وتجهيز بنية العناوين والروابط لتكون صديقة تماماً لخوارزميات جوجل وتصدر كلماتك المستهدفة."
            },
            {
              q: "كيف تحمون موقع الووردبريس من الاختراق والملفات الضارة؟",
              a: "نطبق جدار حماية صارم، مع تغيير مسارات لوحة التحكم الافتراضية، وربط شهادات الأمان SSL، وإغلاق الثغرات البرمجية وحظر هجمات الـ Brute Force، بالإضافة لجدولة نسخ احتياطي دوري تلقائي للموقع."
            },
            {
              q: "هل يمكنني تعديل وإضافة محتوى للموقع بنفسي مستقبلاً؟",
              a: "نعم بالتأكيد! ووردبريس يتميز بلوحة تحكم سهلة للغاية. سنقوم بتدريبك أنت أو فريقك عبر فيديوهات مسجلة خصيصاً لموقعك لنشرح لك كيفية تعديل النصوص، الصور، إضافة صفحات، أو مقالات في دقيقة واحدة ودون الحاجة لأي مهارة برمجية."
            }
          ].map((faq, idx) => (
            <div 
              key={idx}
              className="bg-white border-3 border-slate-900 p-6 rounded-2xl shadow-[8px_8px_0px_#dc2626] hover:shadow-[4px_4px_0px_#dc2626] transition-all"
            >
              <h3 className="text-xl font-black mb-3 text-red-600 flex items-center gap-3 justify-end text-right">
                {faq.q}
                <HelpCircle className="w-5 h-5 flex-shrink-0 text-slate-900" />
              </h3>
              <p className="text-slate-600 leading-relaxed text-sm text-right pr-8 font-bold">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

    </main>
  );
}
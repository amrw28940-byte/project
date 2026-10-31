"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  ShoppingBag, 
  Zap, 
  Smartphone, 
  Search, 
  ShieldCheck, 
  ArrowUpRight, 
  Code, 
  Settings, 
  TrendingUp, 
  Check, 
  HelpCircle,
  Sparkles,
  MousePointerClick
} from "lucide-react";

const faqSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "name": "تصميم وتطوير متاجر شوبيفاي الاحترافية - Unique",
      "provider": {
        "@type": "LocalBusiness",
        "name": "Unique Web Services",
        "url": "https://uniquee-ws.com"
      },
      "serviceType": "Shopify Store Design and Development",
      "description": "نقدم خدمة تصميم وتطوير متاجر شوبيفاي متكاملة، سريعة، ومتوافقة تماماً مع معايير السيو لزيادة مبيعاتك وتصدر محركات البحث."
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "كم يستغرق تصميم متجر شوبيفاي بالكامل؟",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "يستغرق تصميم وتجهيز المتجر بالكامل مابين 5 إلى 10 أيام عمل، ويشمل ذلك تهيئة الهوية البصرية، رفع المنتجات، وربط بوابات الدفع والشحن."
          }
        },
        {
          "@type": "Question",
          "name": "هل المتجر سيكون مهيأ لمحركات البحث (SEO)？",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "نعم، جميع المتاجر التي نقوم بتصميمها تمر بمرحلة تحسين السيو الداخلي الكامل (On-Page SEO) وتجهيز السكيما والسرعة الفائقة لضمان تصدر نتائج بحث جوجل للكلمات المستهدفة."
          }
        },
        {
          "@type": "Question",
          "name": "هل أحتاج لمعرفة برمجية لإدارة متجر شوبيفاي بعد استلامه؟",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "إطلاقاً، شوبيفاي يوفر لوحة تحكم عربية وسهلة للغاية، كما نوفر لك تدريباً مجانياً بالفيديو يشرح لك كيفية إدارة المنتجات، تتبع الطلبات، وتعديل الأسعار بكل سلاسة."
          }
        },
        {
          "@type": "Question",
          "name": "هل تدعم المتاجر اللغتين العربية والإنجليزية؟",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "نعم، نوفر دعم كامل للمتاجر متعددة اللغات مع ضبط اتجاهات الصفحة RTL و LTR وتجربة مستخدم ممتازة لكل لغة على حدة."
          }
        }
      ]
    }
  ]
};

export default function ShopifyDesignPage() {
  // رابط الواتساب الموحد مع رسالة مخصصة
  const whatsappUrl = "https://wa.me/201020347946?text=مرحباً%20وكالة%20Unique،%20أريد%20الاستفسار%20عن%20خدمة%20تصميم%20متجر%20شوبيفاي";

  return (
    <main className="relative min-h-screen bg-white text-slate-900 overflow-x-hidden font-sans antialiased selection:bg-red-600 selection:text-white">
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* خلفية شبكة المربعات الحمراء */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.25] bg-[linear-gradient(to_right,#dc2626_1px,transparent_1px),linear-gradient(to_bottom,#dc2626_1px,transparent_1px)] bg-[size:50px_50px]" />
      
      <div className="fixed top-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-red-500/5 blur-[130px] pointer-events-none z-0" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full bg-red-500/5 blur-[130px] pointer-events-none z-0" />

      {/* 1. HERO SECTION */}
      <section className="relative z-10 container mx-auto px-6 pt-40 pb-24 flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1 text-right">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-red-50 border-2 border-red-600 px-4 py-2 rounded-xl text-red-600 text-sm mb-8 font-black shadow-[4px_4px_0px_#dc2626]"
          >
            <Sparkles className="w-4 h-4 text-red-600" />
            شريك شوبيفاي الرسمي للتصميم والتطوير
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl font-black mb-8 leading-tight tracking-tight text-slate-900"
          >
            حوّل فكرتك التجريبية إلى <br />
            <span className="text-red-600 drop-shadow-[0_4px_10px_rgba(220,38,38,0.2)]">إمبراطورية مبيعات</span> على شوبيفاي
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-slate-600 max-w-2xl leading-relaxed mb-10 font-medium"
          >
            لا نصمم مجرد واجهات؛ نحن نبني تجربة تسوق متكاملة فائقة السرعة تدفع الزائر للشراء فوراً. متاجر شوبيفاي ثلاثية الأبعاد ببروز مخصص يحقق أعلى معدلات التحويل ومحسنة كلياً لمحركات البحث.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-5 justify-start"
          >
            {/* زر الانتقال لواتساب */}
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-xl font-black text-lg transition-all transform hover:-translate-y-1 active:translate-y-0 shadow-[6px_6px_0px_#000] border-2 border-black flex items-center gap-2"
            >
              ابدأ متجرك الآن
              <ArrowUpRight className="w-5 h-5" />
            </a>
            
            {/* زر الانتقال لصفحة المشاريع السابقة */}
            <a 
              href="/projects" 
              className="bg-white hover:bg-slate-50 text-slate-900 px-8 py-4 rounded-xl font-black text-lg transition-all border-2 border-red-600 shadow-[6px_6px_0px_rgba(220,38,38,1)] flex items-center justify-center"
            >
              رؤية أعمالنا السابقة
            </a>
          </motion.div>
        </div>

        <div className="flex-1 w-full relative">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative bg-white border-4 border-red-600 p-3 rounded-2xl shadow-[15px_15px_0px_rgba(0,0,0,1)] overflow-hidden group"
          >
            <img 
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80" 
              alt="Shopify Professional E-commerce Store UI Design" 
              className="w-full h-[400px] object-cover rounded-xl contrast-110 group-hover:contrast-125 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
            <div className="absolute bottom-6 right-6 left-6 bg-white/95 border-2 border-red-600 p-4 rounded-xl backdrop-blur-md shadow-[4px_4px_0px_#000]">
              <p className="text-red-600 font-black flex items-center gap-2 mb-1 text-sm">
                <span className="w-2.5 h-2.5 rounded-full bg-red-600 animate-pulse" />
                متجر شوبيفاي ببروز مخصص (UI/UX)
              </p>
              <h3 className="text-lg font-black text-slate-900">واجهات سريعة مصممة خصيصاً للتفوق على منافسيك</h3>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. STATS SECTION */}
      <section className="relative z-10 container mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: "+120", label: "متجر تم إطلاقه", desc: "بنجاح تام للعملاء" },
            { value: "3x", label: "معدل تحويل أعلى", desc: "بفضل تصميم الـ UX" },
            { value: "100%", label: "جاهزية للسيو", desc: "صديق لمحركات البحث" },
            { value: "0.8s", label: "سرعة تصفح المتجر", desc: "أداء فائق على الهاتف" }
          ].map((stat, index) => (
            <div 
              key={index}
              className="bg-white border-3 border-slate-900 p-6 rounded-2xl text-center shadow-[6px_6px_0px_#dc2626] transform hover:-rotate-1 hover:scale-105 transition-all duration-300"
            >
              <h3 className="text-4xl md:text-5xl font-black text-red-600 mb-2">{stat.value}</h3>
              <h4 className="text-lg font-black text-slate-900 mb-1">{stat.label}</h4>
              <p className="text-xs text-slate-500 font-bold">{stat.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. CORE SERVICES */}
      <section className="relative z-10 container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black mb-4 text-slate-900">خدمات تصميم شوبيفاي التي <span className="text-red-600">تضمن لك الصدارة</span></h2>
          <p className="text-slate-600 max-w-xl mx-auto font-semibold">من التخصيص الكامل حتى تهيئة السيو؛ نغطي كافة احتياجات تجارتك الإلكترونية.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <Code className="w-8 h-8 text-white" />,
              title: "تطوير ثيمات مخصصة (Custom Theme)",
              desc: "لا نستخدم قوالب مستهلكة. نبني متجرك بأكواد نظيفة مخصصة تمنحك تفرداً كاملاً وهوية بصرية خارقة للعادة."
            },
            {
              icon: <Search className="w-8 h-8 text-white" />,
              title: "تحسين السيو التقني للمتجر",
              desc: "نكتب الـ Schema يدوياً ونحسن الروابط وسرعة الصور ليتصدر متجرك نتائج محركات البحث لمنتجاتك بكفاءة."
            },
            {
              icon: <Smartphone className="w-8 h-8 text-white" />,
              title: "تجربة مستخدم مخصصة للجوال",
              desc: "أكثر من 80% من الشراء يتم عبر الهواتف، لذلك نركز على واجهة مستخدم للجوال تجعل الشراء يتم بلمستين فقط."
            }
          ].map((srv, index) => (
            <div 
              key={index}
              className="group bg-white border-3 border-slate-900 p-8 rounded-2xl transition-all duration-300 hover:-translate-y-2 shadow-[10px_10px_0px_#dc2626]"
            >
              <div className="bg-red-600 border-2 border-slate-900 p-3 rounded-xl w-fit mb-6 shadow-[3px_3px_0px_#000]">
                {srv.icon}
              </div>
              <h3 className="text-xl font-black mb-4 text-slate-900 group-hover:text-red-600 transition-colors">{srv.title}</h3>
              <p className="text-slate-600 leading-relaxed text-sm font-semibold">{srv.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. DESIGN PHILOSOPHY */}
      <section className="relative z-10 container mx-auto px-6 py-20 bg-slate-50 border-y-4 border-red-600">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 w-full">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white border-2 border-slate-900 p-6 rounded-xl shadow-[6px_6px_0px_#dc2626]">
                <h4 className="text-xl font-black mb-2 text-red-600">01. البناء البصري</h4>
                <p className="text-xs text-slate-500 font-bold">تحليل الألوان والهوية لإنشاء واجهة تثير رغبة العميل بالشراء.</p>
              </div>
              <div className="bg-white border-2 border-red-600 p-6 rounded-xl shadow-[6px_6px_0px_#000] mt-8">
                <h4 className="text-xl font-black mb-2 text-slate-900">02. سرعة الاستجابة</h4>
                <p className="text-xs text-slate-500 font-bold">تقليل حجم الأكواد لضمان تحميل صفحات المنتجات في أقل من ثانية.</p>
              </div>
              <div className="bg-white border-2 border-red-600 p-6 rounded-xl shadow-[6px_6px_0px_#000]">
                <h4 className="text-xl font-black mb-2 text-slate-900">03. تحسين التحويل</h4>
                <p className="text-xs text-slate-500 font-bold">ترتيب مدروس لأزرار الشراء السريع ونموذج الدفع لتجنب سلات التسوق المتروكة.</p>
              </div>
              <div className="bg-white border-2 border-slate-900 p-6 rounded-xl shadow-[6px_6px_0px_#dc2626] mt-8">
                <h4 className="text-xl font-black mb-2 text-red-600">04. الأمان والثقة</h4>
                <p className="text-xs text-slate-500 font-bold">دمج مراجعات العملاء الحقيقية وبادجات الثقة لزيادة مبيعاتك.</p>
              </div>
            </div>
          </div>
          <div className="flex-1 text-right">
            <h2 className="text-3xl md:text-5xl font-black mb-6 text-slate-900">فلسفة تصميم فريدة تضمن <span className="text-red-600">تجربة تسوق ثورية</span></h2>
            <p className="text-slate-600 leading-relaxed mb-6 font-semibold">
              نحن نؤمن في وكالة **Unique** أن جمالية المتجر البرمجية لا فائدة منها إن لم تنعكس على مبيعاتك وأرباحك. تصاميمنا تدمج بسلاسة بين علم النفس الشرائي، الأكواد النظيفة السريعة، وأحدث معايير تجربة المستخدم لعام 2026 لضمان بقاء العميل أطول فترة وتسهيل رحلته من التصفح للدفع.
            </p>
            <ul className="space-y-3 font-black text-slate-800">
              <li className="flex items-center gap-2 justify-end"><span className="text-red-600">✓</span> تصميم هيكلي قائم على علم نفس الألوان</li>
              <li className="flex items-center gap-2 justify-end"><span className="text-red-600">✓</span> توافق كامل مع خوارزميات جوجل للتجارة الإلكترونية</li>
              <li className="flex items-center gap-2 justify-end"><span className="text-red-600">✓</span> مرونة برمجية فائقة تتيح لك التعديل لاحقاً</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 5. ROADMAP */}
      <section className="relative z-10 container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black mb-4 text-slate-900">رحلة بناء متجرك <span className="text-red-600">خطوة بخطوة</span></h2>
          <p className="text-slate-600 max-w-xl mx-auto font-semibold">كيف ننتقل بمتجرك من مجرد لوحة تخطيطية فارغة إلى آلة بيع حية على الويب؟</p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {[
            { step: "01", title: "دراسة السوق والبدائل", desc: "نقوم بتحليل منافسيك المباشرين لابتكار نقاط تميز تمنح متجرك أفضلية تنافسية كبرى." },
            { step: "02", title: "بناء الهيكل والنموذج", desc: "نرسم الواجهات المبدئية وتجربة العميل في التنقل بين الأقسام وسلة المشتريات." },
            { step: "03", title: "التصميم والتكويد", desc: "نطور ثيم شوبيفاي بأكواد مخصصة مع مؤثرات الـ 3D الحية والظلال المطلوبة." },
            { step: "04", title: "السيو والتدشين الإعلاني", desc: "نضبط السيو الداخلي، الكلمات المفتاحية، والسكيما لتبدأ بالظهور فوراً للجمهور المستهدف." }
          ].map((st, index) => (
            <div 
              key={index} 
              className="relative bg-white border-3 border-slate-900 p-6 rounded-2xl shadow-[8px_8px_0px_#dc2626] hover:-translate-y-1 transition-all"
            >
              <span className="absolute top-4 left-4 text-6xl font-black text-red-600/10">{st.step}</span>
              <h3 className="text-xl font-black mb-3 relative z-10 text-red-600">{st.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed relative z-10 font-semibold">{st.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. ADVANCED SHOPIFY SEO FEATURES */}
      <section className="relative z-10 container mx-auto px-6 py-20 bg-white border-4 border-red-600 rounded-3xl shadow-[15px_15px_0px_#000]">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-right">
            <h2 className="text-3xl md:text-5xl font-black mb-6 text-slate-900">سر متجرك المتصدر: <span className="text-red-600">محركات البحث تعشق أكوادنا</span></h2>
            <p className="text-slate-600 leading-relaxed mb-6 font-semibold">
              تصميم المتجر الجذاب عديم القيمة إذا لم يزره أحد. نحن متخصصون في السيو التقني لمتجر شوبيفاي، حيث نهيئ متجرك ليكون سريعاً كالمستقبل وخفيفاً على خوارزميات جوجل.
            </p>
            <div className="space-y-4">
              {[
                "بناء سكيما مخصصة للمنتجات والمراجعات (Product Schema Markup) لظهور النجوم والسعر في بحث جوجل.",
                "تقليل أكواد الـ JavaScript والـ CSS لضمان تقييم أخضر كامل في أداة Google PageSpeed Insights.",
                "بنية URLs نظيفة تماماً وهيكلة أقسام (Silo Structure) لسهولة فهرسة وتمرير القوة للمنتجات."
              ].map((feat, i) => (
                <div key={i} className="flex gap-3 justify-end items-start text-right">
                  <span className="text-slate-700 text-sm font-black">{feat}</span>
                  <div className="bg-red-600 p-1 rounded-md text-white mt-1 border border-black shadow-[2px_2px_0px_#000]">
                    <Check className="w-4 h-4" />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-slate-50 border-3 border-slate-900 p-8 rounded-2xl shadow-[8px_8px_0px_#dc2626]">
            <h3 className="text-2xl font-black mb-6 text-slate-900 text-center">أدوات تحسين الترتيب المجانية المدمجة</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center bg-white p-4 rounded-xl border-2 border-slate-900 shadow-[3px_3px_0px_#dc2626]">
                <span className="text-red-600 font-black">نشط ومفعل</span>
                <span className="font-black text-slate-900 text-sm">Google Rich Snippets (Schema)</span>
              </div>
              <div className="flex justify-between items-center bg-white p-4 rounded-xl border-2 border-slate-900 shadow-[3px_3px_0px_#dc2626]">
                <span className="text-red-600 font-black">100 / 100</span>
                <span className="font-black text-slate-900 text-sm">سرعة الجوال الفائقة</span>
              </div>
              <div className="flex justify-between items-center bg-white p-4 rounded-xl border-2 border-slate-900 shadow-[3px_3px_0px_#dc2626]">
                <span className="text-red-600 font-black">مهيأة تلقائياً</span>
                <span className="font-black text-slate-900 text-sm">ملفات Robots.txt & Sitemap</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. WHY CHOOSE UNIQUE */}
      <section className="relative z-10 container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black mb-4 text-slate-900">لماذا يختار التجار المحترفون <span className="text-red-600">وكالة Unique؟</span></h2>
          <p className="text-slate-600 max-w-xl mx-auto font-semibold">لأننا لا نبني عملاً تقليدياً؛ نحن نحدث ثورة في هويتك الرقمية ومستقبل مبيعاتك.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { title: "التخصيص البرمجي", desc: "نكتب الـ Liquid و HTML/CSS يدوياً لنحررك من قيود وتكرار ثيمات شوبيفاي العامة." },
            { title: "دعم مابعد البيع", desc: "دعم فني وتدريب مجاني مدته 30 يوماً للتأكد من قدرتك على إدارة مبيعاتك بكفاءة." },
            { title: "سرعة استجابة خارقة", desc: "تحميل فوري للمتجر يزيد من نسبة بقاء العملاء وتجربة الشراء السريعة." },
            { title: "تحليل سيو متقدم", desc: "تحليل دوري للمنافسين قبل التصميم لضمان استهداف أفضل كلمات ومسارات تحويل." }
          ].map((why, idx) => (
            <div 
              key={idx} 
              className="bg-white border-3 border-slate-900 p-6 rounded-3xl hover:border-red-600 transition-colors shadow-[10px_10px_0px_#dc2626]"
            >
              <div className="text-6xl font-black text-red-600/30 mb-4">0{idx+1}</div>
              <h3 className="text-lg font-black text-slate-900 mb-3">{why.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed font-semibold">{why.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 8. CALL TO ACTION */}
      <section className="relative z-10 container mx-auto px-6 py-16 text-center">
        <div className="bg-red-50 border-4 border-red-600 p-12 rounded-3xl max-w-4xl mx-auto shadow-[15px_15px_0px_#000] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/10 rounded-full blur-xl pointer-events-none" />
          <h2 className="text-3xl md:text-5xl font-black mb-6 text-slate-900">هل أنت جاهز لتجاوز منافسيك <span className="text-red-600">اليوم؟</span></h2>
          <p className="text-slate-600 max-w-xl mx-auto mb-10 text-lg leading-relaxed font-semibold">
            لا تترك عملائك لخيارات منافسيك البصرية الضعيفة. احجز جلستك الاستشارية المجانية الآن لبناء متجر أحلامك وحساب التكلفة المبدئية لمتجرك المخصص.
          </p>
          {/* تحويل زر الاستشارة المجانية إلى رابط واتساب مباشر */}
          <a 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-600 hover:bg-red-700 text-white px-10 py-5 rounded-xl font-black text-xl transition-all hover:scale-105 shadow-[6px_6px_0px_#000] border-2 border-black flex items-center gap-2 mx-auto w-fit"
          >
            احصل على استشارة لتصميم متجرك
            <MousePointerClick className="w-5 h-5 text-white" />
          </a>
        </div>
      </section>

      {/* 9. SERVICE COMPARISON MATRIX */}
      <section className="relative z-10 container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black mb-4 text-slate-900">قارن تفاصيل <span className="text-red-600">الجودة والتميز</span> بنفسك</h2>
          <p className="text-slate-600 max-w-xl mx-auto font-semibold">لماذا تعد خدمات تصميم المتاجر في Unique الاستثمار الأذكى لعلامتك التجارية؟</p>
        </div>

        <div className="overflow-x-auto border-4 border-slate-900 rounded-3xl shadow-[12px_12px_0px_#dc2626]">
          <table className="w-full text-right bg-white border-collapse">
            <thead>
              <tr className="bg-slate-900 border-b-3 border-slate-900 text-white">
                <th className="p-5 font-black text-lg">مزايا تصميم المتجر</th>
                <th className="p-5 font-black text-lg text-center bg-red-600 border-x-2 border-slate-900">وكالة Unique</th>
                <th className="p-5 font-black text-lg text-center">الوكالات والمستقلين العاديين</th>
              </tr>
            </thead>
            <tbody className="divide-y-2 divide-slate-200 font-bold">
              {[
                { feat: "تصميم واجهات وثيم مخصص (Custom Coding)", uni: "كامل وحصري بترميز نقي", other: "قوالب وثيمات جاهزة ومكررة" },
                { feat: "سرعة تحميل المتجر (Page Load Speed)", uni: "أقل من 1.2 ثانية (فائق الخفة)", other: "من 3.5 إلى 6 ثواني (ثقيل ومتكرر الكاش)" },
                { feat: "سيو المتاجر المتقدم وسكيما المنتجات يدوياً", uni: "مشمول بالكامل ومضمّن برمجياً", other: "يعتمد على إضافات تلقائية تخمن البيانات" },
                { feat: "دعم مبيعات ومسارات التحويل (CRO Layout)", uni: "هيكل مدروس لتقليل السلات المتروكة", other: "تركيب عشوائي للعناصر دون دراسة سلوك العميل" },
                { feat: "التدريب المجاني على إدارة المبيعات والمنتجات", uni: "فيديوهات مسجلة خاصة بك وبأعضاء فريقك", other: "تسليم المتجر والرحيل دون توجيه مالي أو عملي" }
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

      {/* 10. FAQ SECTION WITH SCHEMA */}
      <section className="relative z-10 container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black mb-4 text-slate-900">الأسئلة الشائعة حول <span className="text-red-600">تصميم متاجر شوبيفاي</span></h2>
          <p className="text-slate-600 max-w-xl mx-auto font-semibold">إجابات دقيقة لتبديد كافة الشكوك وتهيئة ثقة عملائك.</p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {[
            {
              q: "كم يستغرق تصميم متجر شوبيفاي بالكامل؟",
              a: "يستغرق تصميم وتجهيز المتجر بالكامل مابين 5 إلى 10 أيام عمل، ويشمل ذلك تهيئة الهوية البصرية، رفع المنتجات، وربط بوابات الدفع والشحن."
            },
            {
              q: "هل المتجر سيكون مهيأ لمحركات البحث (SEO)؟",
              a: "نعم، جميع المتاجر التي نقوم بتصميمها تمر بمرحلة تحسين السيو الداخلي الكامل (On-Page SEO) وتجهيز السكيما والسرعة الفائقة لضمان تصدر نتائج بحث جوجل للكلمات المستهدفة."
            },
            {
              q: "هل أحتاج لمعرفة برمجية لإدارة متجر شوبيفاي بعد استلامه؟",
              a: "إطلاقاً، شوبيفاي يوفر لوحة تحكم عربية وسهلة للغاية، كما نوفر لك تدريباً مجانياً بالفيديو يشرح لك كيفية إدارة المنتجات، تتبع الطلبات، وتعديل الأسعار بكل سلاسة."
            },
            {
              q: "هل تدعم المتاجر اللغتين العربية والإنجليزية؟",
              a: "نعم، نوفر دعم كامل للمتاجر متعددة اللغات مع ضبط اتجاهات الصفحة RTL و LTR وتجربة مستخدم ممتازة لكل لغة على حدة."
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
              <p className="text-slate-600 leading-relaxed text-sm text-right pr-8 font-semibold">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

    </main>
  );
}
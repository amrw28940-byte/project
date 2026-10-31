'use client';

import React, { useEffect, useState } from 'react';
import { 
  FaWhatsapp, FaBolt, FaSearch, FaMobileAlt, FaShieldAlt, 
  FaCode, FaChartLine, FaServer, FaCogs, FaRocket, 
  FaPaintBrush, FaBullhorn, FaHeadset, FaLightbulb, 
  FaSitemap, FaVials, FaCloudUploadAlt, FaEye,
  FaProjectDiagram, FaUsers, FaClock, FaTrophy,
  FaGoogle, FaLink, FaShareAlt, FaMapSigns
} from 'react-icons/fa';

// مكون مخصص للعداد التصاعدي الانسيابي والمضمون 100%
function CountingNumber({ value, suffix = "" }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number | null = null;
    const duration = 2000; // مدة الأنميشن (ثانيتين)

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      
      // حساب النسبة المئوية لمرور الوقت
      const progressRatio = Math.min(progress / duration, 1);
      
      // تحديث الرقم بناءً على النسبة
      setCount(Math.floor(progressRatio * value));

      if (progress < duration) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [value]);

  return (
    <span className="text-4xl md:text-5xl font-black text-[#ff001e] tracking-tight">
      {suffix === "+" ? `${count}+` : count}
    </span>
  );
}

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const whatsappNumber = "201020347946"; 
  const whatsappMessage = encodeURIComponent("مرحباً، أود الاستفسار عن خدمات شركة Giotec لتطوير المواقع والحلول الرقمية.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  // سكشن مميزات تقنية Next.js العامة
  const features = [
    { title: "سرعة تحميل خارقة", description: "بفضل تقنيات الـ SSR والـ Static Generation، موقعك يفتح في أجزاء من الثانية مما يقلل ارتداد الزوار.", icon: <FaBolt className="text-3xl text-red-600" /> },
    { title: "صداقة مطلقة للـ SEO", description: "توليد الصفحات من السيرفر يضمن أرشفة مثالية لروابط موقعك وظهوره في النتائج الأولى لجوجل.", icon: <FaSearch className="text-3xl text-red-600" /> },
    { title: "تجربة مستخدم متجاوبة", description: "أداء سلس وثبات بصري كامل على الهواتف والشاشات بمختلف أحجامها بدون أي بطء.", icon: <FaMobileAlt className="text-3xl text-red-600" /> },
    { title: "أمان وحماية قصوى", description: "بنية Next.js تفصل الكود المصدري وقواعد البيانات تماماً عن واجهة المستخدم، مما يحميك من الاختراقات.", icon: <FaShieldAlt className="text-3xl text-red-600" /> },
    { title: "تحديث البيانات اللحظي", description: "تقنية Incremental Static Regeneration لتحديث محتوى موقعك فوراً دون الحاجة لإعادة بناء الموقع.", icon: <FaServer className="text-3xl text-red-600" /> },
    { title: "تطوير مرن وقابل للتوسع", description: "كود منظم ونظيف يتيح إضافة ميزات جديدة لموقعك مستقبلاً بكل سهولة وبدون قيود برمجية.", icon: <FaCode className="text-3xl text-red-600" /> },
    { title: "تحسين نسب التحويل", description: "المواقع السريعة تزيد من مبيعاتك وتفاعلك؛ كل جزء من الثانية توفره يعني عملاء أكثر لمشروعك.", icon: <FaChartLine className="text-3xl text-red-600" /> },
    { title: "بيئة عمل متكاملة", description: "دعم مدمج للـ API Routes، الصور المحسنة تلقائياً، والخطوط الذكية لتقديم أفضل جودة ويب ممكنة.", icon: <FaCogs className="text-3xl text-red-600" /> }
  ];

  // سكشن خدمات شركة Giotec
  const giotecServices = [
    { title: "برمجة خاصّة متكاملة", description: "نكتب كود موقعك من الصفر بـ Next.js و React لضمان أعلى كفاءة وأداء مخصص تماماً لطبيعة عملك بدون قوالب جاهزة وبطيئة.", icon: <FaCode className="text-3xl text-red-600" /> },
    { title: "تصميم واجهات UI/UX فاخرة", description: "نبتكر تصاميم عصرية، جذابة، وسهلة الاستخدام تعكس قوة هويتك التجارية وتضمن بقاء الزائر أطول فترة ممكنة داخل الموقع.", icon: <FaPaintBrush className="text-3xl text-red-600" /> },
    { title: "تهيئة شاملة لمحركات البحث (SEO)", description: "لا نكتفي ببناء الموقع بل نضمن تجهيزه تقنياً وهيكلياً بأحدث معايير جوجل ليتصدر الكلمات المفتاحية لمجالك بشكل طبيعي وسريع.", icon: <FaRocket className="text-3xl text-red-600" /> },
    { title: "ربط الأنظمة وتحليل البيانات", description: "دمج كامل لبوابات الدفع، أنظمة الـ CRM، أدوات التحليل مثل Google Analytics، وبكسل منصات التواصل لتتبع المبيعات بدقة.", icon: <FaChartLine className="text-3xl text-red-600" /> },
    { title: "استشارات وحلول تسويقية", description: "نساعدك في وضع خطة الإطلاق والانتشار التقني والتسويقي للموقع لضمان تحويل الزوار العاديين إلى عملاء دائمين.", icon: <FaBullhorn className="text-3xl text-red-600" /> },
    { title: "دعم فني وصيانة مستمرة", description: "نحن معك خطوة بخطوة؛ نوفر حماية مستمرة، نسخ احتياطي دوري، وتحديثات دورية تضمن استقرار موقعك وأمانه على مدار الساعة.", icon: <FaHeadset className="text-3xl text-red-600" /> }
  ];

  // سكشن الـ 10 خطوات
  const nextSteps = [
    { step: "01", title: "دراسة الفكرة والتخطيط", description: "جلسة عصف ذهني لتحديد أهداف الموقع، دراسة المنافسين، وتحديد الهيكل البرمجي والوظائف المطلوبة للمشروع.", icon: <FaLightbulb className="text-3xl text-red-600" /> },
    { step: "02", title: "تخطيط تجربة المستخدم UX", description: "بناء الهيكل السلكي (Wireframes) وتوزيع العناصر الأساسية لضمان رحلة تصفح سهلة ومنطقية لكل زائر.", icon: <FaSitemap className="text-3xl text-red-600" /> },
    { step: "03", title: "تصميم واجهات الـ UI", description: "ابتكار التصميم البصري الكامل والألوان العصرية بدقة عالية باستخدام Figma لتعكس هويتك الفاخرة.", icon: <FaPaintBrush className="text-3xl text-red-600" /> },
    { step: "04", title: "إعداد بيئة العمل البرمجية", description: "تنصيب إطار عمل Next.js وتجهيز بيئة التطوير مع مكاتب التنسيق الفائقة مثل Tailwind CSS والـ TypeScript.", icon: <FaCogs className="text-3xl text-red-600" /> },
    { step: "05", title: "برمجة الواجهات والتجاوب", description: "تكويد الواجهات وتحويل التصميم البصري إلى كود تفاعلي متجاوب بسلاسة مذهلة مع كافة الشاشات والهواتف.", icon: <FaCode className="text-3xl text-red-600" /> },
    { step: "06", title: "تكامل البيانات والسيرفر", description: "بناء قواعد البيانات وربط الـ APIs مع تفعيل ميزات الـ Server-Side Rendering لضمان السرعة الخارقة.", icon: <FaServer className="text-3xl text-red-600" /> },
    { step: "07", title: "التجهيز التقني للـ SEO", description: "حقن الميتاداتاتا الذكية والمخططات (Schemas) وتوليد خريطة الموقع تلقائياً لتهيئته للأرشفة في جوجل.", icon: <FaSearch className="text-3xl text-red-600" /> },
    { step: "08", title: "الاختبار الشامل للموقع", description: "فحص جودة الأكواد، الأمان، وسرعة التحميل عبر Google Lighthouse، ومعالجة أي أخطاء برمجية فوراً.", icon: <FaVials className="text-3xl text-red-600" /> },
    { step: "09", title: "الرفع والتشغيل على السيرفر", description: "إطلاق الموقع رسمياً على خوادم سحابية عالمية مثل Vercel أو AWS لضمان استقرار العمل بنسبة 100%.", icon: <FaCloudUploadAlt className="text-3xl text-red-600" /> },
    { step: "10", title: "المراقبة والتطوير المستمر", description: "تتبع سلوك الزوار عبر أدوات التحليل، وتقديم التحديثات الدورية لضمان بقاء الموقع في القمة تقنياً وتسويقياً.", icon: <FaEye className="text-3xl text-red-600" /> }
  ];

  // سكشن لماذا Next.js صديق لمحركات البحث (SEO)
  const seoFeatures = [
    { title: "التوليد البرمجي على السيرفر (SSR)", description: "جوجل يرى محتوى موقعك جاهزاً ومكتوباً بالكامل فور دخوله، مما يسهل زحف العناكب وأرشفة النصوص اللحظية بدقة متناهية.", icon: <FaGoogle className="text-3xl text-red-600" /> },
    { title: "الميتاداتا الذكية والديناميكية", description: "نظام مدمج وقوي لإدارة الكلمات المفتاحية، العناوين، والأوصاف المتغيرة تلقائياً لكل صفحة لضمان أفضل ظهور في نتائج البحث.", icon: <FaMapSigns className="text-3xl text-red-600" /> },
    { title: "روابط نظيفة وصديقة للـ SEO", description: "توليد تلقائي للمسارات وروابط صديقة للمستخدم ومحركات البحث (Clean URLs) دون رموز معقدة، مما يرفع رتبة ثقة موقعك.", icon: <FaLink className="text-3xl text-red-600" /> },
    { title: "دعم كروت السوشيال ميديا (Open Graph)", description: "تحسين كامل لظهور روابط موقعك بصور وعناوين جذابة وأنيقة عند مشاركتها على فيسبوك، إكس، أو واتساب لزيادة الزيارات.", icon: <FaShareAlt className="text-3xl text-red-600" /> }
  ];

  // سكشن الإنجازات الرقمية (العدادات)
  const stats = [
    { value: 120, suffix: "+", title: "مشروع رقمي ناجح", description: "مواقع وتطبيقات تم تسليمها بأعلى كفاءة واستقرار تقني.", icon: <FaProjectDiagram className="text-3xl text-red-600" /> },
    { value: 85, suffix: "+", title: "عميل يثق بنا", description: "شراكات استراتيجية ممتدة مع شركات وأفراد في مختلف المجالات.", icon: <FaUsers className="text-3xl text-red-600" /> },
    { value: 5, suffix: "", title: "سنوات من الخبرة", description: "من التطوير المستمر ومواكبة أحدث التقنيات البرمجية العالمية.", icon: <FaClock className="text-3xl text-red-600" /> },
    { value: 18, suffix: "+", title: "جائزة وشهادة تقدير", description: "تميز في جودة الأكواد وتصميم واجهات المستخدم المبتكرة.", icon: <FaTrophy className="text-3xl text-red-600" /> }
  ];

  return (
    <main 
      style={{ 
        position: "relative",
        minHeight: "100vh",
        width: "100%",
        backgroundColor: "#ffffff", 
        color: "#111827", 
        overflowX: "hidden",
        direction: "rtl"
      }}
    >
      
      {/* شبكة المربعات الهندسية الخلفية */}
      <div 
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 1,
          pointerEvents: "none",
          backgroundImage: `
            linear-gradient(to right, rgba(255, 0, 30, 0.14) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 0, 30, 0.14) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          maskImage: `radial-gradient(100% 100% at 50% 30%, black 75%, rgba(0, 0, 0, 0.15) 100%)`,
          WebkitMaskImage: `radial-gradient(100% 100% at 50% 30%, black 75%, rgba(0, 0, 0, 0.15) 100%)`,
        }}
      />

      {/* هالة حمراء للتوهج الخلفي */}
      <div 
        style={{
          position: "fixed",
          top: "30%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "900px",
          height: "600px",
          background: "radial-gradient(circle, rgba(255, 0, 30, 0.08) 0%, transparent 75%)",
          zIndex: 0,
          pointerEvents: "none",
          filter: "blur(100px)",
        }}
      />

      {/* ================= 1. سكشن الهيرو (Hero Section) ================= */}
      <section className="relative min-h-screen flex items-center justify-center z-10 px-6 pt-24">
        <div className="container mx-auto text-center flex flex-col items-center select-none">
          
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-red-500 text-red-600 text-sm mb-8 shadow-sm font-medium">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
            </span>
            نطور أفكارك بأحدث التقنيات العالمية
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight leading-tight mb-8 max-w-5xl text-gray-900">
            نطور لك موقع <span className="text-[#ff001e] drop-shadow-[0_2px_10px_rgba(255,0,30,0.2)]">Next.js</span> فائق السرعة ومتصدر لنتائج البحث
          </h1>
          
          <p className="text-gray-600 text-lg md:text-xl mb-12 max-w-2xl leading-relaxed font-medium">
            احصل على تجربة مستخدم استثنائية وأداء برميوم. واجهات ذكية، متجاوبة، وقابلة للتوسع لتناسب وتدعم نمو مشروعك الرقمي.
          </p>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3.5 px-10 py-5 rounded-2xl bg-[#ff001e] text-white font-bold text-xl hover:bg-red-500 transition-all duration-300 shadow-[0_10px_25px_rgba(255,0,30,0.35)] hover:shadow-[0_15px_35px_rgba(255,0,30,0.55)] transform hover:-translate-y-1 group"
          >
            <FaWhatsapp className="text-3xl text-white group-hover:scale-110 transition-transform" />
            <span>ابدأ مشروعك الآن عبر الواتساب</span>
          </a>

        </div>
      </section>

      {/* ================= 2. سكشن مميزات تقنية Next.js ================= */}
      <section className="relative py-24 z-10 px-6 bg-transparent">
        <div className="container mx-auto px-4 md:px-12">
          
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-6 leading-tight text-gray-950">
              لماذا نعتمد على <span className="text-[#ff001e]">Next.js</span> لبناء مشروعك؟
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed font-medium">
              الويب التقليدي لم يعد كافياً للمنافسة. إليك كيف تمنح تقنية Next.js مشروعك الصدارة التقنية والتسويقية المطلقة:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative p-8 rounded-2xl select-none transition-all duration-300 transform hover:-translate-y-3
                           bg-white text-gray-900 border-4 border-[#ff001e]
                           shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] 
                           hover:shadow-[0_40px_70px_-10px_rgba(0,0,0,0.65),0_0_25px_rgba(255,0,30,0.25)]"
              >
                <div className="relative z-10 flex flex-col h-full justify-between">
                  <div>
                    <div className="w-14 h-14 rounded-xl bg-red-50 border-2 border-[#ff001e] flex items-center justify-center mb-6 shadow-inner group-hover:scale-105 transition-transform">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-black mb-4 text-gray-950 tracking-wide">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed font-semibold">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= 3. سكشن خدمات شركة Giotec ================= */}
      <section className="relative py-24 z-10 px-6 bg-transparent border-t border-gray-100">
        <div className="container mx-auto px-4 md:px-12">
          
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-6 leading-tight text-gray-950">
              ماذا ستقديم لك شركة <span className="text-[#ff001e]">Giotec</span>؟
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed font-medium">
              نحن لا نبني مجرد صفحات ويب عادية، بل نصنع حلولاً رقمية ذكية ومتكاملة تضمن لشركتك التميز والنمو السريع في السوق الرقمي:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {giotecServices.map((service, index) => (
              <div
                key={index}
                className="group relative p-10 rounded-3xl select-none transition-all duration-300 transform hover:-translate-y-4
                           bg-white text-gray-900 border-4 border-[#ff001e]
                           shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] 
                           hover:shadow-[0_40px_70px_-10px_rgba(0,0,0,0.65),0_0_30px_rgba(255,0,30,0.3)]"
              >
                <div className="relative z-10 flex flex-col h-full justify-between">
                  <div>
                    <div className="w-16 h-16 rounded-2xl bg-red-50 border-2 border-[#ff001e] flex items-center justify-center mb-6 shadow-inner group-hover:scale-105 transition-transform">
                      {service.icon}
                    </div>
                    
                    <h3 className="text-2xl font-black mb-4 text-gray-950 tracking-wide">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-600 text-base leading-relaxed font-semibold">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= 4. سكشن الـ 10 خطوات ================= */}
      <section className="relative py-24 z-10 px-6 bg-transparent border-t border-gray-100">
        <div className="container mx-auto px-4 md:px-12">
          
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-6 leading-tight text-gray-950">
              خطوات عمل مواقع <span className="text-[#ff001e]">Next.js</span> الاحترافية
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed font-medium">
              من الفكرة إلى الإطلاق؛ نتبع في Giotec منهجية علمية وصارمة من 10 خطوات لإنشاء موقعك بأعلى جودة منافسة عالمياً:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {nextSteps.map((stepItem, index) => (
              <div
                key={index}
                className="group relative p-10 rounded-3xl select-none transition-all duration-300 transform hover:-translate-y-4
                           bg-white text-gray-900 border-4 border-[#ff001e]
                           shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] 
                           hover:shadow-[0_40px_70px_-10px_rgba(0,0,0,0.65),0_0_30px_rgba(255,0,30,0.3)]"
              >
                
                <div className="absolute top-5 left-5 text-xs font-black tracking-widest text-white bg-[#ff001e] px-3.5 py-1.5 rounded-full shadow-sm">
                  STEP {stepItem.step}
                </div>

                <div className="flex flex-col h-full justify-between">
                  <div>
                    <div className="w-16 h-16 rounded-2xl bg-red-50 border-2 border-[#ff001e] flex items-center justify-center mb-8 shadow-inner group-hover:scale-105 transition-transform">
                      {stepItem.icon}
                    </div>
                    
                    <h3 className="text-2xl font-black mb-4 text-gray-950 tracking-wide">
                      {stepItem.title}
                    </h3>
                    
                    <p className="text-gray-600 text-base leading-relaxed font-semibold">
                      {stepItem.description}
                    </p>
                  </div>
                </div>

              </div>
            ))}
          </div>

          {/* زر الواتساب السفلي */}
          <div className="text-center mt-20">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-4 px-12 py-6 rounded-2xl bg-[#ff001e] text-white font-black text-2xl hover:bg-red-500 transition-all duration-300 shadow-[0_10px_30px_rgba(255,0,30,0.3)] hover:shadow-[0_15px_40px_rgba(255,0,30,0.5)] transform hover:-translate-y-1 group"
            >
              <FaWhatsapp className="text-4xl text-white group-hover:scale-110 transition-transform" />
              <span>ابدأ رحلة تطوير موقعك الآن</span>
            </a>
          </div>

        </div>
      </section>

      {/* ================= 5. سكشن لماذا Next.js صديق لمحركات البحث (SEO) ================= */}
      <section className="relative py-24 z-10 px-6 bg-transparent border-t border-gray-100">
        <div className="container mx-auto px-4 md:px-12">
          
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-6 leading-tight text-gray-950">
              لماذا تعتبر تقنية <span className="text-[#ff001e]">Next.js</span> الصديق الأول لجوجل؟
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed font-medium">
              تصدر نتائج البحث ليس صدفة، بل هو بنية برمجية ذكية. إليك كيف تفرص مواقع Next.js سيطرتها الكاملة على محركات البحث:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {seoFeatures.map((seo, index) => (
              <div
                key={index}
                className="group relative p-10 rounded-3xl select-none transition-all duration-300 transform hover:-translate-y-3
                           bg-white text-gray-900 border-4 border-[#ff001e]
                           shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] 
                           hover:shadow-[0_40px_70px_-10px_rgba(0,0,0,0.65),0_0_30px_rgba(255,0,30,0.3)]"
              >
                <div className="relative z-10 flex flex-col h-full justify-between">
                  <div>
                    <div className="w-16 h-16 rounded-2xl bg-red-50 border-2 border-[#ff001e] flex items-center justify-center mb-6 shadow-inner group-hover:scale-105 transition-transform">
                      {seo.icon}
                    </div>
                    <h3 className="text-2xl font-black mb-4 text-gray-950 tracking-wide">
                      {seo.title}
                    </h3>
                    <p className="text-gray-600 text-base leading-relaxed font-semibold">
                      {seo.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= 6. الختام النهائي: سكشن كوانتر الإنجازات الأخير المحدث والأنيق ================= */}
      <section className="relative py-24 z-10 px-6 bg-transparent border-t border-gray-100">
        <div className="container mx-auto px-4 md:px-12">
          
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-4 leading-tight text-gray-950">
              إنجازاتنا بالأرقام تعكس <span className="text-[#ff001e]">قوتنا</span>
            </h2>
            <p className="text-gray-600 text-base max-w-xl mx-auto font-medium">
              نحن فخورون بما حققناه من نجاحات تقنية بالتعاون مع شركائنا في النجاح حول العالم:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="group relative p-8 rounded-3xl select-none text-center transition-all duration-300 transform hover:-translate-y-2
                           bg-white text-gray-900 border-4 border-[#ff001e]
                           shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] 
                           hover:shadow-[0_40px_70px_-10px_rgba(0,0,0,0.65),0_0_30px_rgba(255,0,30,0.3)]"
              >
                <div className="relative z-10 flex flex-col items-center justify-center">
                  <div className="w-14 h-14 rounded-2xl bg-red-50 border-2 border-[#ff001e] flex items-center justify-center mb-5 shadow-inner group-hover:scale-105 transition-transform">
                    {stat.icon}
                  </div>
                  
                  {/* تشغيل العداد التصاعدي التفاعلي بالأنميشن الانسيابي السلس */}
                  <div className="mb-2">
                    <CountingNumber value={stat.value} suffix={stat.suffix} />
                  </div>
                  
                  <h3 className="text-lg font-black text-gray-950 mb-2 tracking-wide">
                    {stat.title}
                  </h3>
                  
                  <p className="text-gray-500 text-xs md:text-sm leading-relaxed font-medium">
                    {stat.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

    </main>
  );
}
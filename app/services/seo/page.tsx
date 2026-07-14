"use client";
import Header from '@/components/Header';
import FloatingSocials from '@/components/FloatingSocials'; 
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function SeoServicePage() {
  const whatsappNumber = "201020347946"; 
  const whatsappMessage = encodeURIComponent("مرحباً Giotec، أريد استشارة مجانية بخصوص تحسين محركات البحث ومراجعة موقعي ليتصدر نتائج البحث.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  const scrollRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: scrollRef,
  });

  const xTransform = useTransform(scrollYProgress, [0, 1], ["0vw", "500vw"]);

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    
    try {
      formData.append("access_key", "YOUR_WEB3FORMS_ACCESS_KEY"); 
      
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      
      if (response.ok) {
        setIsSubmitted(true);
        (e.target as HTMLFormElement).reset();
      }
    } catch (error) {
      console.error("Error submitting form", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const seoSteps = [
    {
      num: "01",
      title: "التدقيق الفني الشامل ومراجعة الأكواد (Technical SEO Audit)",
      desc: "نبدأ بفحص شامل لـ Core Web Vitals، وإصلاح أخطاء الزحف، وبنية الأكواد، وسرعة الموقع لضمان توافقه الكامل مع عناكب بحث جوجل.",
      bg: "bg-slate-900 border-blue-500/20"
    },
    {
      num: "02",
      title: "هندسة الكلمات المفتاحية ودراسة نية الباحث (Keyword Research & Search Intent)",
      desc: "نحلل الكلمات الأكثر ربحية ومبيعات لشركتك بدقة، وندرس سايكولوجية العميل المستهدف لضمان استقطاب زوار مستعدين للشراء فوراً.",
      bg: "bg-slate-950 border-amber-500/20"
    },
    {
      num: "03",
      title: "هيكلة المحتوى التحريري والتحسين الداخلي (On-Page SEO Optimization)",
      desc: "نصنع محتوى طويلاً غنياً ومنسقاً بأسلوب سردي احترافي، ونوزع الكلمات المفتاحية وعلامات العناوين والـ Schema بدقة برمجية متناهية.",
      bg: "bg-blue-950/80 border-cyan-500/20"
    },
    {
      num: "04",
      title: "بناء السلطة الرقمية والروابط الخلفية الآمنة (High-Authority Link Building)",
      desc: "نطلق حملات بناء باك لينكس (Backlinks) قوية وذات موثوقية عالية ترفع من Domain Authority لموقعك وتجعله جديراً بثقة محركات البحث.",
      bg: "bg-slate-900 border-orange-500/20"
    },
    {
      num: "05",
      title: "التهيئة لمحركات توليد الذكاء الاصطناعي (AI Search & SGE Readiness)",
      desc: "نهيئ بيانات موقعك ومحتواك ليكون المصدر الأساسي المقتبس والإجابة الحاضرة داخل أنظمة بحث جوجل الذكية القادمة والأدوات المتطورة.",
      bg: "bg-slate-950 border-emerald-500/20"
    },
    {
      num: "06",
      title: "التحليلات والمراقبة المستمرة وتقارير الأداء (Continuous Analytics & ROI Monitoring)",
      desc: "نتابع رانك الكلمات وتطور الزيارات وحجم التحويلات لحظة بلحظة عبر لوحات تحكم متطورة، لنضمن لك عائداً مستداماً ومتصاعداً على الاستثمار.",
      bg: "bg-purple-950/70 border-purple-500/20"
    }
  ];

  const globalReach = [
    { location: "القاهرة والجيزة", country: "مصر", projects: "المقر الرئيسي وإدارة كبرى متاجر التجارة الإلكترونية والشركات الخدمية", top: "45%", left: "30%", color: "from-blue-400 to-cyan-500" },
    { location: "الإسكندرية", country: "مصر", projects: "تطوير استراتيجيات الأرشفة لشركات الشحن والخدمات والمنصات التعليمية", top: "38%", left: "27%", color: "from-blue-400 to-cyan-500" },
    { location: "الرياض", country: "المملكة العربية السعودية", projects: "تغطية شاملة لقطاعات التمويل، الشركات التقنية، والمؤسسات الطبية الكبرى", top: "52%", left: "48%", color: "from-emerald-400 to-green-500" },
    { location: "جدة", country: "المملكة العربية السعودية", projects: "سيو محلي ومكثف لخدمات المقاولات، صيانة السيارات، والمنصات العقارية", top: "58%", left: "42%", color: "from-emerald-400 to-green-500" },
    { location: "المنطقة الشرقية", country: "المملكة العربية السعودية", projects: "تحسين محركات البحث للمواقع اللوجستية ومؤسسات التوريد والتجارة", top: "50%", left: "53%", color: "from-emerald-400 to-green-500" },
    { location: "الفروانية", country: "الكويت", projects: "أرشفة وتصدر خدمات اللاندسكيب، المقاولات، وإدارة المواقع الخدمية", top: "42%", left: "56%", color: "from-purple-400 to-pink-500" },
    { location: "الفحيحيل والأحمدي", country: "الكويت", projects: "استهداف دقيق للكلمات المفتاحية التجارية في قطاعات الصيانة والخدمات المنزلية", top: "45%", left: "57%", color: "from-purple-400 to-pink-500" },
    { location: "العاصمة والجهراء", country: "الكويت", projects: "تهيئة محركات البحث للعيادات الطبية، الشركات الاستشارية، ومتاجر التجزئة", top: "39%", left: "54%", color: "from-purple-400 to-pink-500" },
    { location: "دبي", country: "الإمارات العربية المتحدة", projects: "استراتيجيات متقدمة ومعقدة للغاية لشركات العقارات العالمية والسياحة الفاخرة", top: "48%", left: "68%", color: "from-amber-400 to-orange-500" },
    { location: "أبوظبي", country: "الإمارات العربية المتحدة", projects: "تحسين الأرشفة الفنية وبناء السلطة الرقمية للمؤسسات الكبرى والشركات الخدمية", top: "51%", left: "66%", color: "from-amber-400 to-orange-500" },
    { location: "الدوحة", country: "قطر", projects: "تهيئة المواقع الخدمية والمتاجر الإلكترونية الكبرى للظهور المتصدر في السوق القطري", top: "47%", left: "61%", color: "from-cyan-400 to-blue-600" },
    { location: "المنامة", country: "البحرين", projects: "تحسين محركات البحث للشركات المحلية المتخصصة والمؤسسات الناشئة الواعدة", top: "44%", left: "59%", color: "from-red-400 to-orange-600" },
    { location: "عمان", country: "الأردن", projects: "تطوير الهويات الرقمية والأرشفة الفنية المتقدمة لشركات التكنولوجيا والتعليم والتدريب", top: "35%", left: "38%", color: "from-indigo-400 to-purple-600" }
  ];

  return (
    <>
      <div className="relative z-50">
        <Header />
      </div>

      <FloatingSocials />

      <main className="bg-slate-950 text-white min-h-screen font-sans pt-28" dir="rtl">
        
        {/* 1. قسم الهيرو سكشن (Hero Section) */}
        <section className="relative w-full min-h-[calc(100vh-7rem)] flex items-center justify-center px-6 py-12 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/40 via-slate-950 to-slate-950">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10 w-full">
            <div className="text-right flex flex-col justify-center order-2 lg:order-1">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 text-amber-400 px-4 py-1.5 rounded-full text-sm font-bold mb-6 w-fit"
              >
                🚀 استراتيجيات تصدر نتائج البحث الأولى
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-4xl md:text-6xl font-black leading-tight mb-6"
              >
                تخطَّ منافسيك واجعل <br />
                <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                  عملائك المستهدفين يصلون إليك أولاً
                </span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
                className="text-lg text-slate-400 max-w-xl mb-10 leading-relaxed font-medium"
              >
                نحن في Giotec لا نمنحك مجرد زيارات عابرة، بل نبني لك نظام أرشفة قوي ومستدام يحول محركات البحث إلى مصدر دائم ومجاني لتدفق العملاء والمبيعات لشركتك على مدار الساعة.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link 
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-emerald-500 to-green-600 text-white font-black px-10 py-4 rounded-2xl text-xl hover:from-emerald-600 hover:to-green-700 transition-all shadow-[0_0_30px_rgba(16,185,129,0.3)] w-full sm:w-auto text-center"
                >
                  <span>تواصل معنا عبر واتساب الآن</span>
                  <span className="text-2xl">💬</span>
                </Link>
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: 50 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative h-[250px] sm:h-[350px] md:h-[450px] w-full overflow-hidden order-1 lg:order-2 flex items-center justify-center"
            >
              <Image 
                src="/seoo.webp" 
                alt="خدمات تحسين محركات البحث تصدر نتائج جوجل لزيادة المبيعات من Giotec"
                fill
                priority 
                quality={85} 
                sizes="(max-w-[768px]) 100vw, (max-w-[1200px]) 50vw, 33vw" 
                className="object-contain" 
              />
            </motion.div>
          </div>
        </section>

        {/* الحاوية الكامبو المحدثة: تجمع سكشن الفيديو وسكشن الصورة وتداخل العمود بدقة */}
        <div className="relative w-full overflow-visible">
          
          {/* 🎬 2. قسم سكشن الفيديو المعدل بملء الشاشة الفعلي وبدون تمدد زائف */}
          <section className="relative w-full pt-12 pb-20 bg-slate-950 border-t border-slate-900 overflow-hidden z-10">
            <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] px-0">
              <div className="relative w-full aspect-video md:h-[70vh] min-h-[300px] overflow-hidden border-t border-b border-blue-500/30 shadow-[0_0_40px_rgba(59,130,246,0.15)] bg-slate-950">
                <div className="absolute inset-0 w-full h-full pointer-events-none select-none">
                  <iframe
                    src="https://www.youtube.com/embed/MYE6T_gd7H0?autoplay=1&mute=1&loop=1&playlist=MYE6T_gd7H0&controls=0&rel=0&showinfo=0&iv_load_policy=3&modestbranding=1"
                    title="SEO Cinematic Full-Width Video"
                    className="w-full h-full object-cover pointer-events-none scale-[1.02]"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-slate-950/90 via-transparent to-slate-950/90 opacity-75 pointer-events-none" />
                
                <div className="absolute inset-0 z-20 flex items-center justify-center lg:justify-start text-center lg:text-right px-6 md:px-20 pointer-events-none pb-12">
                  <motion.h2 
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-xl sm:text-3xl md:text-5xl font-black max-w-2xl leading-tight text-white drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)]"
                  >
                    نوظف أدق معايير الأرشفة العالمية لنقل بيزنس عملائك للصدارة
                  </motion.h2>
                </div>
              </div>
            </div>
          </section>

          {/* 🖼️ 3. قسم الصورة الخلفية الواضحة تماماً seoseo.webp */}
          <section className="relative w-full min-h-[110vh] flex items-center justify-center px-4 py-32 border-t border-slate-900 overflow-hidden z-10">
            <div className="absolute inset-0 w-full h-full z-0">
              <Image
                src="/seoseo.webp"
                alt="خرائط تفصيلية واستراتيجيات متكاملة لتحسين محركات البحث لمواقع الويب"
                fill
                quality={100}
                sizes="100vw"
                className="object-cover opacity-100"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-slate-950/50 via-transparent to-slate-950/50" />
            </div>
          </section>

          {/* 💎 4. العامود الطولي النحيف */}
          <div className="absolute inset-x-0 top-[15%] bottom-[15%] z-30 flex items-center justify-end px-4 pr-4 md:pr-32 pointer-events-none">
            <motion.article 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="pointer-events-auto w-full max-w-md bg-slate-950/90 backdrop-blur-2xl border border-slate-800/80 rounded-[2.5rem] shadow-[0_0_60px_rgba(0,0,0,0.95)] h-full flex flex-col overflow-hidden relative"
            >
              <div className="absolute top-12 inset-x-0 h-10 bg-gradient-to-b from-slate-950 via-slate-950/40 to-transparent z-40 pointer-events-none" />
              <div className="absolute bottom-0 inset-x-0 h-14 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent z-40 pointer-events-none" />

              <div className="mb-2 pb-3 pt-4 border-b border-slate-800 text-center z-50 bg-slate-950/40 backdrop-blur-sm px-4">
                <span className="text-amber-400 font-bold uppercase tracking-widest text-xs md:text-sm block">
                  ⚡ Giotec SEO Engine
                </span>
              </div>

              <div className="flex-1 overflow-y-auto pr-2 pl-1 py-6 space-y-10 dir-rtl text-right scrollbar-none md:scrollbar-thin scrollbar-thumb-amber-500/20 scrollbar-track-transparent relative z-30">
                <div className="space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-lg md:text-xl font-black text-amber-400 leading-snug">
                      لماذا تختار Giotec لقيادة استراتيجية السيو الخاصة بك؟
                    </h3>
                    <p className="text-slate-200 leading-relaxed font-medium text-xs md:text-sm">
                      في Giotec، نحن لا ننظر إلى تحسين محركات البحث (SEO) كمجرد كلمات دلالية يتم حشوها داخل الصفحات؛ بل نعتبره هندسة تسويقية متكاملة تهدف إلى بناء سلطة موقعك رقمياً (Domain Authority) وجعله الخيار الأول والأكثر موثوقية في عيون خوارزميات جوجل والذكاء الاصطناعي على حد سواء.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h4 className="text-sm font-bold text-orange-400">✦ تحليل المنافسين وهندسة الكلمات:</h4>
                    <p className="text-slate-300 leading-relaxed text-xs md:text-sm">
                      استراتيجيتنا تعتمد على تحليل عميق للمنافسين، ومعالجة شاملة لكافة الأخطاء التقنية (Technical SEO) لضمان سرعة تصفح فائقة وتجربة مستخدم مثالية. نحن ندرس نية الباحث (Search Intent) بدقة لنصنع محتوى غنياً ومقنعاً يجيب على تساؤلات عملائك ويقودهم مباشرة إلى اتخاذ قرار الشراء.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h4 className="text-sm font-bold text-orange-400">✦ بناء الروابط والسلطة الرقمية:</h4>
                    <p className="text-slate-300 leading-relaxed text-xs md:text-sm">
                      نقوم بإنشاء روابط خلفية قوية (Backlinks) من مواقع ذات موثوقية عالية لتأكيد جدارة موقعك، بالإضافة إلى ضبط الأرشفة الداخلية وهيكلة البيانات (Schema Markup) لتفهم برمجيات الزحف تخصص موقعك بدقة متناهية تفصلك عن كافة المنافسين في السوق المحلي والدولي.
                    </p>
                  </div>

                  <p className="text-slate-300 text-xs leading-relaxed bg-slate-900/90 p-4 rounded-xl border border-slate-800">
                    ✦ نضمن لك أرشفة مستدامة مع Giotec؛ مما يعني أن صدارتك لنتائج البحث لن تختفي بانتهاء الميزانية كما يحدث في الإعلانات المدفوعة، بل ستستمر في حصد أرباح وزيارات مجانية لسنوات قادمة.
                  </p>

                  <div className="space-y-2">
                    <h4 className="text-sm font-bold text-orange-400">✦ التوافق مع محركات التوليد الذكي (SGE):</h4>
                    <p className="text-slate-300 leading-relaxed text-xs md:text-sm">
                      مع التطور الهائل في آليات البحث المدعومة بالذكاء الاصطناعي، نضمن إعداد محتواك البرمجي والتحريري ليكون المصدر الأساسي المقتبس داخل إجابات جوجل الذكية الجديدة، مما يعزز الثقة والانتشار لعلامتك التجارية.
                    </p>
                  </div>
                </div>

                <div className="border-t border-slate-800 my-4" />

                <div className="space-y-6 text-left" dir="ltr">
                  <div className="space-y-2">
                    <h3 className="text-base md:text-lg font-black text-orange-400 font-sans leading-snug">
                      Empower Your Business With Data-Driven SEO Tactics
                    </h3>
                    <p className="text-slate-300 leading-relaxed font-medium text-[11px] md:text-xs">
                      At Giotec, our search engine optimization strategies are crafted to secure long-term organic growth. We seamlessly bridge the gap between technical excellence and consumer psychology to put your brand right where your buyers are searching.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h4 className="text-xs font-bold text-amber-400 font-sans">✦ Advanced Technical SEO Audits:</h4>
                    <p className="text-slate-400 leading-relaxed text-[11px] md:text-xs">
                      Our comprehensive approach covers state-of-the-art Technical SEO audits, meticulous Keyword Research, and bulletproof On-Page architecture. We ensure your Core Web Vitals are flawless, loading pages instantly to maximize retention.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h4 className="text-xs font-bold text-amber-400 font-sans">✦ Contextual Link Building & Trust:</h4>
                    <p className="text-slate-400 leading-relaxed text-[11px] md:text-xs">
                      We build high-quality contextual backlinks that signal trust, integrity, and dominance to major search engine crawlers. Your platform stays immune to penalty loops by prioritizing absolute programmatic white-hat deployment.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h4 className="text-xs font-bold text-amber-400 font-sans">✦ ROI-Focused Content Architecture:</h4>
                    <p className="text-slate-400 leading-relaxed text-[11px] md:text-xs">
                      We don’t just target high-volume phrases; we target high-intent transactions. By mapping long-tail clusters to your funnel stages, we elevate transformation conversion thresholds and lower dependency on paid acquisition.
                    </p>
                  </div>
                </div>
              </div>
            </motion.article>
          </div>

        </div>

        {/* 5. قسم الستائر الحركية الأفقية بالكامل (Horizontal Curtain Rail Section) */}
        <section ref={scrollRef} className="relative w-full h-[500vh] bg-slate-950">
          <div className="sticky top-0 h-screen w-full flex flex-col justify-center overflow-hidden">
            
            <div className="w-full text-center px-4 pt-8 pb-4 z-20">
              <h2 className="text-2xl md:text-5xl font-black mb-2">
                منظومة العمل المتكاملة في <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">Giotec</span>
              </h2>
              <p className="text-slate-400 max-w-2xl mx-auto text-xs md:text-sm font-medium">
                تحرك لأسفل لتشاهد الخطوات وهي تفتح وتنزلق **بالعرض** كستارة سينمائية متتابعة فخمة
              </p>
            </div>

            <motion.div 
              style={{ x: xTransform }} 
              className="flex w-[600vw] h-[70vh] items-center relative z-10"
            >
              {seoSteps.map((step, index) => (
                <div 
                  key={index} 
                  className="w-screen h-full flex items-center justify-center px-4 md:px-20 select-none"
                >
                  <div className={`w-full max-w-6xl h-full ${step.bg} border rounded-[3rem] p-8 md:p-16 flex flex-col justify-center relative shadow-[0_0_50px_rgba(0,0,0,0.8)]`}>
                    <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-500/10 blur-[50px] rounded-full pointer-events-none" />
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-12 items-center">
                      <div className="col-span-1 flex items-center md:justify-center">
                        <span className="text-7xl md:text-9xl font-black bg-gradient-to-b from-slate-700/30 to-transparent bg-clip-text text-transparent block">
                          {step.num}
                        </span>
                      </div>
                      <div className="col-span-3 space-y-4 md:space-y-6 text-right">
                        <div className="inline-block bg-amber-500/10 border border-amber-500/20 text-amber-400 px-4 py-1 rounded-full text-xs font-bold">
                          المرحلة التنفيذية {step.num}
                        </div>
                        <h3 className="text-xl md:text-3xl font-black text-white leading-tight">
                          {step.title}
                        </h3>
                        <p className="text-slate-300 text-sm md:text-lg leading-relaxed max-w-3xl font-medium">
                          {step.desc}
                        </p>
                      </div>
                    </div>
                    <div className="absolute bottom-0 inset-x-0 h-1.5 bg-slate-800 overflow-hidden rounded-b-[3rem]">
                      <div 
                        className="h-full bg-gradient-to-r from-amber-400 to-orange-500" 
                        style={{ width: `${((index + 1) / 6) * 100}%` }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>

          </div>
        </section>

        {/* 6. سكشن خارطة الانتشار الإقليمي الموسع (Interactive Reach Map Section) */}
        <section className="relative w-full py-24 bg-slate-950 border-t border-slate-900 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 blur-[150px] rounded-full pointer-events-none" />

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            
            <div className="text-center mb-16 space-y-4">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="inline-block bg-blue-500/10 border border-blue-500/30 text-blue-400 px-5 py-2 rounded-full text-xs font-bold"
              >
                🌍 نفوذ جغرافي ممتد ونفوذ رقمي واسع في تفاصيل المحافظات والمدن
              </motion.div>
              <h2 className="text-3xl md:text-5xl font-black">
                نصنع الصدارة عبر <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">أقوى المدن والمحافظات العربية</span>
              </h2>
              <p className="text-slate-400 max-w-2xl mx-auto text-sm md:text-base font-medium leading-relaxed">
                تغطيتنا الحية تشمل المدن التجارية الأكثر نشاطاً؛ قمنا بتهيئة وتصدر مئات المواقع في تفاصيل هذه المحافظات ليتربع عملاؤنا على قمة الاستحواذ المحلي.
              </p>
            </div>

            <div className="relative w-full h-[650px] md:h-[750px] bg-slate-900/40 border border-slate-800/80 rounded-[3rem] p-4 overflow-hidden backdrop-blur-sm shadow-[0_0_50px_rgba(0,0,0,0.5)]">
              
              <div className="absolute inset-0 opacity-25 pointer-events-none mix-blend-screen bg-[url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center" style={{ maskImage: 'radial-gradient(circle, black 60%, transparent 100%)', WebkitMaskImage: 'radial-gradient(circle, black 60%, transparent 100%)' }} />
              
              <div className="absolute inset-0 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:24px_24px] opacity-15 pointer-events-none" />

              <div className="absolute inset-0 w-full h-full">
                {globalReach.map((item, idx) => (
                  <motion.div
                    key={idx}
                    className="absolute pointer-events-auto group"
                    style={{ top: item.top, left: item.left }}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05, duration: 0.5 }}
                  >
                    <div className="relative w-4 h-4 flex items-center justify-center cursor-pointer">
                      <span className="absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75 animate-ping" />
                      <span className={`relative inline-flex rounded-full h-3 w-3 bg-gradient-to-r ${item.color} shadow-[0_0_15px_rgba(56,189,248,0.7)]`} />
                    </div>

                    <div className="absolute bottom-6 right-1/2 translate-x-1/2 w-52 md:w-64 bg-slate-950/95 backdrop-blur-xl border border-slate-800 p-4 rounded-2xl opacity-80 md:opacity-0 md:group-hover:opacity-100 transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.8)] z-30 pointer-events-none transform translate-y-2 group-hover:translate-y-0">
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className={`w-2 h-2 rounded-full bg-gradient-to-r ${item.color}`} />
                        <h4 className="text-sm font-black text-white">{item.location}</h4>
                        <span className="text-[10px] text-slate-400 font-medium">({item.country})</span>
                      </div>
                      <p className="text-slate-400 text-[11px] md:text-xs leading-relaxed font-medium">
                        {item.projects}
                      </p>
                    </div>

                    <span className="absolute top-5 right-1/2 translate-x-1/2 whitespace-nowrap text-[10px] md:text-xs font-bold text-slate-400 bg-slate-950/50 px-2 py-0.5 rounded-md border border-slate-900 pointer-events-none group-hover:text-white group-hover:border-slate-700 transition-colors">
                      {item.location}
                    </span>
                  </motion.div>
                ))}
              </div>

              <div className="absolute bottom-6 left-6 bg-slate-950/80 backdrop-blur-md border border-slate-800/60 p-4 md:p-6 rounded-2xl hidden sm:block text-right max-w-xs z-20">
                <div className="text-xs font-bold text-blue-400 uppercase tracking-wider mb-2">⚡ Giotec Regional Impact</div>
                <div className="space-y-2">
                  <div className="flex justify-between gap-8 items-center border-b border-slate-800/50 pb-1.5">
                    <span className="text-slate-400 text-xs">المدن والمحافظات النشطة:</span>
                    <span className="text-white font-black text-sm">13 مدينة رئيسية</span>
                  </div>
                  <div className="flex justify-between gap-8 items-center border-b border-slate-800/50 pb-1.5">
                    <span className="text-slate-400 text-xs">متوسط الكلمات المتصدرة:</span>
                    <span className="text-amber-400 font-black text-sm">+35,000 كلمة</span>
                  </div>
                  <div className="flex justify-between gap-8 items-center">
                    <span className="text-slate-400 text-xs">نسبة نجاح السيو المحلي:</span>
                    <span className="text-emerald-400 font-black text-sm">98.4% في الصدارة</span>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* ✉️ 7. قسم تواصل معنا المنسق كاملاً (Contact Us Form Section) */}
        <section className="relative w-full py-24 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-blue-950/30 via-slate-950 to-slate-950 border-t border-slate-900 overflow-hidden">
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-orange-500/5 blur-[130px] rounded-full pointer-events-none" />
          
          <div className="max-w-4xl mx-auto px-6 relative z-10">
            <div className="text-center mb-12 space-y-4">
              <div className="inline-block bg-orange-500/10 border border-orange-500/30 text-orange-400 px-5 py-2 rounded-full text-xs font-bold">
                📥 استشارة مجانية لمراجعة وتدقيق موقعك
              </div>
              <h2 className="text-3xl md:text-5xl font-black">
                ابدأ رحلة <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">السيطرة الرقمية</span> الآن
              </h2>
              <p className="text-slate-400 max-w-xl mx-auto text-sm md:text-base font-medium leading-relaxed">
                املأ بياناتك البرمجية والتسويقية بالأسفل، وسيقوم مهندسو الأرشفة لدينا بفحص موقعك وإرسال خطة تصدر شاملة إلى بريدك الإلكتروني.
              </p>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-slate-900/60 backdrop-blur-xl border border-slate-800/80 rounded-[2.5rem] p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.4)]"
            >
              {isSubmitted ? (
                <motion.div 
                  initial={{ scale: 0.95 }} 
                  animate={{ scale: 1 }} 
                  className="text-center py-12 space-y-4"
                >
                  <div className="text-5xl">🎉</div>
                  <h3 className="text-2xl font-black text-emerald-400">تم إرسال استراتيجيتك بنجاح!</h3>
                  <p className="text-slate-400 text-sm max-w-sm mx-auto">
                    وصلت البيانات مباشرة إلى مهندسي Giotec على الإيميل المعتمد، وجاري بدء الفحص الفني والرد عليك خلال ساعات.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <input type="hidden" name="to_email" value="amrsalm300@gmail.com" />
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* 1. مستطيل الاسم */}
                    <div className="space-y-2 text-right">
                      <label className="text-xs font-bold text-slate-300 mr-2">الاسم الكريم :</label>
                      <input 
                        type="text" 
                        name="name" 
                        required 
                        placeholder="أحمد محمد"
                        className="w-full bg-slate-950/80 border border-slate-800 focus:border-amber-500/60 rounded-2xl px-5 py-4 text-sm text-white placeholder-slate-600 outline-none transition-all focus:shadow-[0_0_15px_rgba(245,158,11,0.1)] font-medium"
                      />
                    </div>

                    {/* 2. مستطيل الإيميل */}
                    <div className="space-y-2 text-right">
                      <label className="text-xs font-bold text-slate-300 mr-2">البريد الإلكتروني :</label>
                      <input 
                        type="email" 
                        name="email" 
                        required 
                        placeholder="name@company.com"
                        className="w-full bg-slate-950/80 border border-slate-800 focus:border-amber-500/60 rounded-2xl px-5 py-4 text-sm text-white placeholder-slate-600 outline-none transition-all focus:shadow-[0_0_15px_rgba(245,158,11,0.1)] font-medium text-left"
                        dir="ltr"
                      />
                    </div>

                    {/* 3. مستطيل لينك الموقع */}
                    <div className="space-y-2 text-right">
                      <label className="text-xs font-bold text-slate-300 mr-2">رابط الموقع الإلكتروني :</label>
                      <input 
                        type="url" 
                        name="website_url" 
                        required 
                        placeholder="https://example.com"
                        className="w-full bg-slate-950/80 border border-slate-800 focus:border-amber-500/60 rounded-2xl px-5 py-4 text-sm text-white placeholder-slate-600 outline-none transition-all focus:shadow-[0_0_15px_rgba(245,158,11,0.1)] font-medium text-left"
                        dir="ltr"
                      />
                    </div>
                  </div>

                  {/* 4. مستطيل الخدمة المطلوبة */}
                  <div className="space-y-2 text-right">
                    <label className="text-xs font-bold text-slate-300 mr-2">الخدمة المطلوبة وتفاصيل البيزنس :</label>
                    <textarea 
                      name="service_details" 
                      required 
                      rows={4}
                      placeholder="اشرح لنا طبيعة عملك، المدن أو الدول التي تستهدفها، وما هي أهم الكلمات أو الخدمات التي تريد تصدر نتائج البحث فيها فوراً..."
                      className="w-full bg-slate-950/80 border border-slate-800 focus:border-amber-500/60 rounded-2xl px-5 py-4 text-sm text-white placeholder-slate-600 outline-none transition-all focus:shadow-[0_0_15px_rgba(245,158,11,0.1)] font-medium resize-none leading-relaxed"
                    />
                  </div>

                  <div className="pt-4 flex justify-center">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto px-12 py-4 bg-gradient-to-r from-amber-500 to-orange-600 text-slate-950 font-black text-lg rounded-2xl hover:from-amber-600 hover:to-orange-700 transition-all shadow-[0_10px_30px_rgba(245,158,11,0.2)] disabled:opacity-50 text-center cursor-pointer"
                    >
                      {isSubmitting ? "جاري تشفير وإرسال البيانات..." : "تأكيد طلب مراجعة الأرشفة الآن 🚀"}
                    </motion.button>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        </section>

      </main>
    </>
  );
}
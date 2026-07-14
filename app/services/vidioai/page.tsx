"use client";
import Header from '@/components/Header';
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

interface VideoProject {
  id: number;
  title: string;
  category: string;
  embedUrl: string;
  gridClass: string;
  thumbnail: string;
  description: string;
}

export default function AiVideoProductionPage() {
  const whatsappNumber = "201020347946"; 
  const whatsappMessage = encodeURIComponent("مرحباً Giotec، أريد استشارة بخصوص خدمات إنتاج وتصميم فيديوهات الذكاء الاصطناعي الاحترافية لشركتي.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  const [selectedVideo, setSelectedVideo] = useState<VideoProject | null>(null);

  const services = [
    {
      title: "فيديوهات إعلانية سينمائية للمنتجات",
      description: "تحويل صور منتجاتك الثابتة أو أفكارك إلى مشاهد فيديو متحركة ثلاثية الأبعاد بدقة فائقة وعناصر بصرية مذهلة، تبرز تفاصيل المنتج وتدفع العميل للشراء الفوري.",
      icon: "🛍️",
      slug: "product-commercials"
    },
    {
      title: "إنتاج محتوى ترويجي لمنصات التواصل",
      description: "صناعة ريلز (Reels) وشورتس (Shorts) وتيك توك سريعة الانتشار ومصممة بخوارزميات بصرية تجذب انتباه المشاهد في أول 3 ثوانٍ وتضمن تفاعلًا استثنائيًا.",
      icon: "📱",
      slug: "social-media-content"
    },
    {
      title: "أفاتار ومذيعين افتراضيين بالذكاء الاصطناعي",
      description: "توليد شخصيات رقمية ومذيعين يتحدثون بلغة جسد طبيعية ونطق سليم بـ 40 لغة مختلفة، لتقديم شروحات المنتجات، الكورسات، أو الفيديوهات التعريفية بشركتك.",
      icon: "🤖",
      slug: "ai-avatars"
    },
    {
      title: "توليد تعليق صوتي وهندسة صوتية احترافية",
      description: "دمج نصوصك بأصوات ذكاء اصطناعي تفاعلية وبشرية النبرة تماماً (مؤثرة، إخبارية، أو حماسية)، مع تركيب تراك موسيقي ومؤثرات صوتية محيطية تخدم فكرة الفيديو.",
      icon: "🎙️",
      slug: "voiceover-audio-engineering"
    },
    {
      title: "فيديوهات موشن جرافيك وتوضيحية متطورة",
      description: "تبسيط الأفكار والخدمات المعقدة لشركتك من خلال رسوم متحركة ذكية ومقاطع توضيحية مبتكرة تسهل على العميل فهم قيمة ما تقدمه في ثوانٍ معدودة.",
      icon: "📊",
      slug: "motion-graphics"
    },
    {
      title: "تطوير وإخراج وتعديل الفيديو بالكامل",
      description: "كتابة السيناريو البيعي وتوليد المشاهد وتعديل الألوان وتركيب اللوجو ووسائل التواصل الخاصة بك لنوفر لك فيديو متكامل وجاهز للحملات الإعلانية مباشرة.",
      icon: "🎬",
      slug: "full-video-editing"
    }
  ];

  const videoProjects: VideoProject[] = [
    {
      id: 1,
      title: "أول فيديو خيالي مصمم بالكامل بتقنيات الذكاء الاصطناعي السينمائي",
      category: "إنتاج خيالي وسينمائي بالـ AI",
      embedUrl: "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1283272729828415%2F&show_text=false",
      gridClass: "md:col-span-2 md:row-span-2 min-h-[380px] md:min-h-[480px]",
      thumbnail: "🔮",
      description: "العمل الرئيسي المستعرض لأعلى قدرات دمج الخيال البصري، وتوليد المشاهد والتحركات الاحترافية المذهلة من خلال نماذج الذكاء الاصطناعي المتطورة."
    },
    {
      id: 2,
      title: "فيديو إعلاني احترافي عن طريقة تصميم الفيديوهات بالذكاء الاصطناعي",
      category: "صناعة محتوى بالذكاء الاصطناعي",
      embedUrl: "https://drive.google.com/file/d/1F8rs8-6mAaV5KVCByGNTTkzFgld3_u70/preview",
      gridClass: "md:col-span-1 md:row-span-2 min-h-[350px]",
      thumbnail: "🤖",
      description: "فيديو إعلاني يستعرض آليات دمج تقنيات التوليد البصري والذكاء الاصطناعي لإخراج مقاطع إعلانية سينمائية بأقل تكلفة وأعلى كفاءة تسويقية."
    },
    {
      id: 3,
      title: "فيديو ترويجي متكامل ومنشور إعلاني لمنصة كفيل للخدمات المصغرة",
      category: "فيديوهات إعلانية وترويجية",
      embedUrl: "https://drive.google.com/file/d/1lFcVy1uD7kqRm9nfXraWKaytU2UlMUuL/preview",
      gridClass: "md:col-span-1 md:row-span-1 min-h-[220px]",
      thumbnail: "💼",
      description: "إنتاج مرئي ترويجي يسلط الضوء على مميزات العمل الحر ومنصة كفيل، مصمم بجاذبية بصرية تحفز المشاهدين على اتخاذ إجراء."
    },
    {
      id: 4,
      title: "فيديو وثائقي تفصيلي عن نشأة وتاريخ شركة جوجل العالمية",
      category: "أفلام وثائقية وقصصية",
      embedUrl: "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F874438095381112%2F&show_text=false",
      gridClass: "md:col-span-1 md:row-span-1 min-h-[220px]",
      thumbnail: "🌐",
      description: "سرد سينمائي وتاريخي مشوق يستعرض البدايات الأولى لمحرك البحث الأشهر عالمياً وكيف غير وجه التكنولوجيا الرقمية."
    },
    {
      id: 5,
      title: "وثائقي نشأة جوجل - الجزء الثاني والأسرار التقنية",
      category: "أفلام وثائقية وقصصية",
      embedUrl: "https://www.facebook.com/plugins/video.php?height=317&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F839435782037938%2F&show_text=false",
      gridClass: "md:col-span-1 md:row-span-1 min-h-[220px]",
      thumbnail: "📈",
      description: "متابعة وثائقية شيقة تسلط الضوء على قفزات شركة جوجل ومراحل تطور خوارزمياتها وبنيتها التحتية العملاقة."
    },
    {
      id: 6,
      title: "وثائقي نشأة جوجل - الجزء الثالث والتأثير العالمي",
      category: "أفلام وثائقية وقصصية",
      embedUrl: "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1132209208931953%2F&show_text=false",
      gridClass: "md:col-span-1 md:row-span-1 min-h-[220px]",
      thumbnail: "🚀",
      description: "خاتمة السلسلة الوثائقية عن الإمبراطورية الرقمية لجوجل واستراتيجيات الهيمنة على سوق البيانات والذكاء الاصطناعي."
    },
    {
      id: 7,
      title: "تحقيق بصري غامض عن أسرار وخفايا العالم الرقمي المظلم والدارك ويب",
      category: "تحقيقات ومحتوى معرفي",
      embedUrl: "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1339074467519916%2F&show_text=false",
      gridClass: "md:col-span-1 md:row-span-1 min-h-[220px]",
      thumbnail: "🕵️‍♂️",
      description: "فيديو ترويجي يستعرض الجوانب الخفية لشبكة الإنترنت المظلم بأسلوب إخراجي غامض يشد الانتباه ويرفع معدلات الاحتفاظ بالمشاهد."
    },
    {
      id: 8,
      title: "وثائقي سينمائي إبداعي يتناول ظاهرة الزومبي من منظور علمي وتاريخي",
      category: "أفلام وثائقية وقصصية",
      embedUrl: "https://www.facebook.com/plugins/video.php?height=416&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1451334533222164%2F&show_text=false",
      gridClass: "md:col-span-2 md:row-span-1 min-h-[240px]",
      thumbnail: "🧟",
      description: "موناجه متطور ومؤثرات بصرية وصوتية قوية تشرح تاريخ الأساطير والظواهر السينمائية بطريقة ترفيهية ومثيرة."
    },
    {
      id: 9,
      title: "فيلم وثائقي يروي تاريخ ونشأة النادي الأهلي العريق وصناعة المجد",
      category: "وثائقيات رياضية",
      embedUrl: "https://www.facebook.com/plugins/video.php?height=312&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F876732714766185%2F&show_text=false",
      gridClass: "md:col-span-1 md:row-span-1 min-h-[220px]",
      thumbnail: "🦅",
      description: "توثيق رياضي رائع يستعرض الجذور التاريخية لتأسيس القلعة الحمراء والمحطات المفصلية في تاريخ الرياضة العربية والإفريقية."
    },
    {
      id: 10,
      title: "سيرة ووثائقي ديني عن حياة الإمام البخاري ورحلته في جمع الحديث",
      category: "وثائقيات تاريخية ودينية",
      embedUrl: "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F901114159339286%2F&show_text=false",
      gridClass: "md:col-span-1 md:row-span-1 min-h-[220px]",
      thumbnail: "📚",
      description: "إنتاج مرئي وقور بروح فنية عالية يروي أدق التفاصيل عن رحلة الإمام البخاري المباركة في خدمة السنة النبوية الشريفة."
    },
    {
      id: 11,
      title: "وثائقي تاريخي ممتع ومميز عن نشأة وبدايات بطولة كأس العالم",
      category: "وثائقيات رياضية",
      embedUrl: "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F673016585803021%2F&show_text=false",
      gridClass: "md:col-span-1 md:row-span-1 min-h-[220px]",
      thumbnail: "🏆",
      description: "رحلة شيقة عبر الزمن لاستكشاف كيف تحولت فكرة بسيطة إلى الحدث الرياضي والملتقى الكروي الأكبر والأكثر جماهيرية على كوكب الأرض."
    },
    {
      id: 12,
      title: "قصة نجاح سينمائية تلخص رحلة والت ديزني وصناعة عالم الخيال",
      category: "أفلام وثائقية وقصصية",
      embedUrl: "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F845147871854900%2F&show_text=false",
      gridClass: "md:col-span-2 md:row-span-1 min-h-[240px]",
      thumbnail: "🏰",
      description: "وثائقي ملهم يوضح كيف تحول الإصرار والشغف برسم الرسوم المتحركة إلى أكبر إمبراطورية ترفيهية وإنتاجية حول العالم."
    },
    {
      id: 13,
      title: "محتوى كوميدي ترفيهي هادف يستعرض ظاهرة الفيديوهات المبتكرة",
      category: "محتوى ترفيهي وكوميدي",
      embedUrl: "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F2550930995303923%2F&show_text=false",
      gridClass: "md:col-span-1 md:row-span-1 min-h-[220px]",
      thumbnail: "🥔",
      description: "نموذج لصناعة المحتوى الكوميدي التفاعلي الخفيف المصمم بذكاء للمحافظة على جاذبية المنصات وزيادة أعداد المتابعين تلقائياً."
    }
  ];

  return (
    <>
      <div className="relative z-50">
        <Header />
      </div>

      <main className="bg-slate-950 text-white min-h-screen" dir="rtl">
        
        {/* 🎬 السكشن الأول: الهيرو */}
        <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-slate-950 pt-32 md:pt-40 pb-16">
          <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
            <video
              src="/vidio ai.mp4"
              autoPlay
              muted
              loop
              playsInline
              controls={false}
              className="w-full h-full object-cover opacity-75 scale-[1.01]" 
            />
            <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/20 to-slate-950/60" />
          </div>

          <div className="max-w-5xl mx-auto text-center px-6 relative z-10 space-y-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-purple-500/20 border border-purple-500/40 text-purple-300 backdrop-blur-md px-4 py-1.5 rounded-full text-sm font-bold mx-auto"
            >
              🎬 الجيل القادم من صناعة المحتوى المرئي السينمائي
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-7xl font-black leading-tight tracking-tight text-white"
            >
              صمم فيديوهات <br />
              <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent">
                ذكاء اصطناعي احترافية
              </span> <br />
              تأسر جمهورك وتضاعف مبيعاتك
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-lg md:text-xl text-slate-100 max-w-3xl mx-auto leading-relaxed font-medium"
            >
              في Giotec ندمج أحدث تقنيات الإخراج السينمائي بالذكاء الاصطناعي لتوليد فيديوهات إعلانية وتسويقية مذهلة وبدقة متناهية، تمنح براند عملك الهيبة الفنية وتوفر 90% من تكاليف الإنتاج التقليدي.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="pt-4"
            >
              <Link 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-black px-12 py-5 rounded-2xl text-xl hover:from-purple-700 hover:to-indigo-700 transition-all shadow-[0_0_40px_rgba(147,51,234,0.35)] w-full sm:w-auto text-center"
              >
                <span>ابدأ إنتاج video الذكاء الاصطناعي الخاص بك</span>
                <span className="text-2xl">⚡</span>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* 📦 السكشن الثاني: الخدمات */}
        <section className="relative w-full bg-slate-950 py-24 px-6 overflow-hidden border-t border-slate-900">
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
              <motion.span className="text-purple-400 font-bold tracking-wider uppercase text-sm bg-purple-500/10 border border-purple-500/20 px-4 py-1 rounded-full">
                حلول إنتاج متكاملة
              </motion.span>
              <motion.h2 className="text-3xl md:text-5xl font-black text-white leading-tight">
                إيه اللي هنقدمهولك في خدمة <br className="hidden md:block"/>
                <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">فيديوهات الذكاء الاصطناعي؟</span>
              </motion.h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -6 }}
                  className="group relative bg-slate-900/40 border border-slate-800 hover:border-purple-500/40 rounded-2xl backdrop-blur-sm transition-all shadow-xl overflow-hidden"
                >
                  <Link href={`/services/vidioai/${service.slug}`} className="block p-8 h-full w-full">
                    <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-slate-800 text-3xl mb-6 group-hover:bg-purple-600 transition-colors">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4 group-hover:text-purple-300">
                      {service.title}
                    </h3>
                    <p className="text-slate-400 leading-relaxed font-medium text-base">
                      {service.description}
                    </p>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 🎞️ السكشن الثالث: معرض الأعمال المطور والـ Bento Grid */}
        <section className="relative w-full bg-slate-950 py-24 px-6 overflow-hidden border-t border-slate-900">
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <motion.span className="text-cyan-400 font-bold tracking-wider uppercase text-sm bg-cyan-500/10 border border-cyan-500/20 px-4 py-1 rounded-full">
                روائع الإخراج المرئي
              </motion.span>
              <motion.h2 className="text-3xl md:text-5xl font-black text-white">
                شاهد كفاءة الإنتاج والتصميم <br />
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">بتقنيات Giotec الرقمية</span>
              </motion.h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-fr">
              {videoProjects.map((project) => (
                <motion.div
                  key={project.id}
                  onClick={() => setSelectedVideo(project)}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                  className={`group relative bg-slate-900/50 border border-slate-800/80 hover:border-cyan-500/50 rounded-3xl overflow-hidden cursor-pointer flex flex-col justify-end p-6 ${project.gridClass} shadow-2xl transition-all duration-300`}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent z-10" />
                  <div className="absolute inset-0 flex items-center justify-center z-20">
                    <div className="w-14 h-14 rounded-full bg-slate-950/80 border border-cyan-500/30 flex items-center justify-center text-xl text-cyan-400 group-hover:bg-cyan-500 group-hover:text-black transition-all duration-300">
                      ▶
                    </div>
                  </div>
                  <div className="absolute top-6 left-6 text-7xl opacity-5 group-hover:opacity-15 transition-all z-0">
                    {project.thumbnail}
                  </div>
                  <div className="relative z-20 space-y-2">
                    <span className="text-[11px] font-black text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20">
                      {project.category}
                    </span>
                    <h3 className="text-base md:text-lg font-black text-white pt-2 group-hover:text-cyan-200 line-clamp-2">
                      {project.title}
                    </h3>
                    <p className="text-xs text-slate-400 line-clamp-2">
                      {project.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

      </main>

      {/* 🎬 تأثير الـ Cinema Focus والمشغل المتطور الذكي */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedVideo(null)}
            className="fixed inset-0 bg-slate-950/95 backdrop-blur-2xl z-[999] flex items-center justify-center p-4 md:p-8"
          >
            <motion.div
              initial={{ scale: 0.93, y: 15, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.93, y: 15, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-5xl bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-[0_0_80px_rgba(34,211,238,0.2)] grid grid-cols-1 lg:grid-cols-3"
            >
              
              <button 
                onClick={() => setSelectedVideo(null)}
                className="absolute top-4 right-4 z-50 w-10 h-10 rounded-full bg-slate-950/80 border border-slate-800 text-slate-400 hover:text-white flex items-center justify-center font-bold"
              >
                ✕
              </button>

              {/* مشغل الفيديو المزود بصلاحيات أمان معززة لضمان تشغيل تضمين فيسبوك وجوجل درايف */}
              <div className="lg:col-span-2 bg-black aspect-video lg:aspect-auto lg:h-[550px] relative">
                <iframe
                  src={selectedVideo.embedUrl}
                  className="w-full h-full border-0 absolute inset-0"
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>

              <div className="p-8 flex flex-col justify-between space-y-6 bg-slate-900 border-t lg:border-t-0 lg:border-r border-slate-800/80">
                <div className="space-y-4">
                  <span className="inline-block text-xs font-bold text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20">
                    {selectedVideo.category}
                  </span>
                  <h3 className="text-xl font-black text-white leading-tight">
                    {selectedVideo.title}
                  </h3>
                  <div className="h-[2px] w-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full" />
                  <p className="text-slate-300 text-sm font-medium">
                    {selectedVideo.description}
                  </p>
                </div>

                <div className="space-y-3 pt-6 border-t border-slate-800/60">
                  <div className="flex items-center justify-between text-xs text-slate-500">
                    <span>تقنيات المونتاج</span>
                    <span className="text-slate-300">Giotec Advanced Studio</span>
                  </div>
                  
                  <Link
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-indigo-600 text-black font-black py-3.5 px-4 rounded-xl text-sm hover:from-cyan-600 hover:to-indigo-700 hover:text-white transition-all text-center shadow-lg"
                  >
                    <span>اطلب إنتاج فيديو احترافي لشركتك</span>
                    <span>⚡</span>
                  </Link>
                </div>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
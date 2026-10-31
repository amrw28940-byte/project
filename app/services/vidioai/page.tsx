"use client";
import Header from '../../../components/Header';
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
  coverImage: string; 
  description: string;
}

interface FAQItem {
  question: string;
  answer: string;
}

export default function AiVideoProductionPage() {
  const whatsappNumber = "201020347946"; 
  const whatsappMessage = encodeURIComponent("مرحباً Giotec، أريد استشارة بخصوص خدمات إنتاج وتصميم فيديوهات الذكاء الاصطناعي الاحترافية لشركتي.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  const [selectedVideo, setSelectedVideo] = useState<VideoProject | null>(null);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

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

  const benefits = [
    {
      title: "توفير 90% من التكاليف التقليدية",
      description: "وداعاً للميزانيات الفلكية لتأجير الكاميرات، الاستوديوهات، والممثلين. الذكاء الاصطناعي السينمائي يوفر لك مخرجات فائقة الدقة بكسر بسيط من التكلفة المعتادة.",
      icon: "💰",
      gradient: "from-red-500/20 to-transparent"
    },
    {
      title: "سرعة تنفيذ قياسية فائقة",
      description: "نحن لا نحتاج لأسابيع للتصوير والتحضير، بفضل أدواتنا المتقدمة يمكننا تسليم الفيديوهات الترويجية والوثائقية المعقدة في أيام معدودة وبأعلى جودة إخراجية.",
      icon: "⚡",
      gradient: "from-amber-500/20 to-transparent"
    },
    {
      title: "إبداع سينمائي غير محدود",
      description: "هل تتخيل منتجك يدور في الفضاء أو مراجعة في أعماق المحيط؟ لا توجد قيود فيزيائية، كل فكرة خيالية أو سيناريو معقد يمكننا تحويله لواقع مرئي يبهر العملاء.",
      icon: "🌌",
      gradient: "from-purple-500/20 to-transparent"
    },
    {
      title: "تخصيص كامل للهوية البصرية",
      description: "نلتزم بنسبة 100% بألوان علامتك التجارية، الخطوط الخاصة بك، واللوجو، مما يضمن أن الفيديوهات المنتجة تعزز هيبة ومكانة براند شركتك بشكل احترافي.",
      icon: "🎯",
      gradient: "from-blue-500/20 to-transparent"
    }
  ];

  const tips = [
    {
      number: "01",
      title: "كن محددًا في طلباتك",
      description: "حدد جمهورك المستهدف بدقة، طول الفيديو الأنسب للمنصة، والنبرة المطلوبة مسبقًا (حماسية، جادة، أو ودية) لضمان توافق السيناريو والمشاهد البصرية تماماً مع رؤيتك.",
      icon: "🎯",
      gradient: "from-red-500/10 to-transparent"
    },
    {
      number: "02",
      title: "قم بتضمين سياق ومراجع كافية",
      description: "تزويدنا بروابط المنتجات، أو فيديوهات مرجعية سابقة نالت إعجابك، يساعد أدواتنا وفريقنا التقني في محاكاة الطابع العام والمستوى الإخراجي المطلوب بدقة متناهية.",
      icon: "🔗",
      gradient: "from-purple-500/10 to-transparent"
    },
    {
      number: "03",
      title: "وصف النمط الإخراجي المطلوب",
      description: "حدد مسبقاً إذا كنت ترغب في نمط فيديو توضيحي، أو فيديو يعتمد على مراجعات وآراء حقيقية (Testimonial)، أو إعلان سينمائي ترويجي، أو محتوى تعليمي تفاعلي.",
      icon: "🎬",
      gradient: "from-amber-500/10 to-transparent"
    }
  ];

  const faqs: FAQItem[] = [
    {
      question: "هل تبدو الشخصيات والأصوات في فيديوهات الذكاء الاصطناعي حقيقية وطبيعية؟",
      answer: "نعم تماماً. نستخدم في Giotec أحدث نماذج توليد الأفاتار البصري والصوتي المتطورة، والتي تقدم حركات شفاه وجسد متطابقة للغاية مع النطق، بالإضافة إلى نبرات صوت بشرية تفاعلية خالية من الآلية والبرود المعتاد."
    },
    {
      question: "ما هي المدة الزمنية المطلوبة لتسليم الفيديو الإعلاني أو الوثائقي؟",
      answer: "بفضل خط الإنتاج التقني المتقدم لدينا، يتم تسليم الفيديوهات في مدة تتراوح بين 3 إلى 5 أيام عمل فقط، حسب طول الفيديو ونوع المؤثرات والسيناريو المطلوب، وهي سرعة قياسية مقارنة بطرق الإنتاج التقليدي."
    },
    {
      question: "هل يمكنني تعديل السيناريو أو المشاهد بعد تسليم الفيديو؟",
      answer: "بالتأكيد. نوفر لعملائنا جولات مخصصة للمراجعة والتعديل لضمان توافق المنتج البصري النهائي مع تطلعاتهم وهوية علامتهم التجارية بنسبة 100%."
    },
    {
      question: "هل الفيديوهات التي يتم إنتاجها تكون حصرية وخالية من حقوق الملكية؟",
      answer: "نعم، كافة الفيديوهات والمشاهد والتوليدات الصوتية والموسيقى التصويرية التي نسلمها لك تكون مرخصة ومملوكة لك بالكامل، مما يتيح لك استخدامها بحرية مطلقة في الحملات الإعلانية والمنصات الرقمية دون القلق من قضايا حقوق الملكية."
    },
    {
      question: "كيف أبدأ مشروعي معكم وما هي المتطلبات الأساسية؟",
      answer: "كل ما عليك هو الضغط على زر التواصل عبر الواتساب لتتحدث مع مستشارنا الفني؛ سنحتاج فقط لمعرفة فكرة مشروعك، أو صور لمنتجك، أو الهوية العامة لعلامتك التجارية لنقوم نحن بصياغة السيناريو والإنتاج الكامل فوراً."
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  const videoProjects: VideoProject[] = [
    {
      id: 1,
      title: "أول فيديو خيالي مصمم بالكامل بتقنيات الذكاء الاصطناعي السينمائي",
      category: "إنتاج خيالي وسينمائي بالـ AI",
      embedUrl: "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1283272729828415%2F&show_text=false",
      gridClass: "md:col-span-2 md:row-span-2 min-h-[380px] md:min-h-[480px]",
      thumbnail: "🔮",
      coverImage: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800",
      description: "العمل الرئيسي المستعرض لأعلى قدرات دمج الخيال البصري، وتوليد المشاهد والتحركات الاحترافية المذهلة من خلال نماذج الذكاء الاصطناعي المتطورة."
    },
    {
      id: 2,
      title: "فيديو إعلاني احترافي عن طريقة تصميم الفيديوهات بالذكاء الاصطناعي",
      category: "صناعة محتوى بالذكاء الاصطناعي",
      embedUrl: "https://drive.google.com/file/d/1F8rs8-6mAaV5KVCByGNTTkzFgld3_u70/preview",
      gridClass: "md:col-span-1 md:row-span-2 min-h-[350px]",
      thumbnail: "🤖",
      coverImage: "https://images.unsplash.com/photo-1677442136019-21780efad99a?q=80&w=800",
      description: "فيديو إعلاني يستعرض آليات دمج تقنيات التوليد البصري والذكاء الاصطناعي لإخراج مقاطع إعلانية سينمائية بأقل تكلفة وأعلى كفاءة تسويقية."
    },
    {
      id: 3,
      title: "فيديو ترويجي متكامل ومنشور إعلاني لمنصة كفيل للخدمات المصغرة",
      category: "فيديوهات إعلانية وترويجية",
      embedUrl: "https://drive.google.com/file/d/1lFcVy1uD7kqRm9nfXraWKaytU2UlMUuL/preview",
      gridClass: "md:col-span-1 md:row-span-1 min-h-[220px]",
      thumbnail: "💼",
      coverImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800",
      description: "إنتاج مرئي ترويجي يسلط الضوء على مميزات العمل حر ومنصة كفيل، مصمم بجاذبية بصرية تحفز المشاهدين على اتخاذ إجراء."
    },
    {
      id: 4,
      title: "فيديو وثائقي تفصيلي عن نشأة الدارك ويب",
      category: "أفلام وثائقية وقصصية",
      embedUrl: "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F874438095381112%2F&show_text=false",
      gridClass: "md:col-span-1 md:row-span-1 min-h-[220px]",
      thumbnail: "🌐",
      coverImage: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800",
      description: "سرد سينمائي وتاريخي مشوق يستعرض البدايات الأولى لنشأة الدارك ويب."
    },
    {
      id: 5,
      title: "وثائقي نشأة جوجل - الجزء الثاني والأسرار التقنية",
      category: "أفلام وثائقية وقصصية",
      embedUrl: "https://www.facebook.com/plugins/video.php?height=317&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F839435782037938%2F&show_text=false&width=560&t=0",
      gridClass: "md:col-span-1 md:row-span-1 min-h-[220px]",
      thumbnail: "📈",
      coverImage: "https://images.unsplash.com/photo-1572021335469-31706a17aaef?q=80&w=800",
      description: "متابعة وثائقية شيقة تسلط الضوء على قفزات شركة جوجل ومراحل تطور خوارزمياتها وبنيتها التحتية العملاقة."
    },
    {
      id: 6,
      title: "وثائقي نشأة جوجل - الجزء الثالث والتأثير العالمي",
      category: "أفلام وثائقية وقصصية",
      embedUrl: "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1132209208931953%2F&show_text=false",
      gridClass: "md:col-span-1 md:row-span-1 min-h-[220px]",
      thumbnail: "🚀",
      coverImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800",
      description: "خاتمة السلسلة الوثائقية عن الإمبراطورية الرقمية لجوجل واستراتيجيات الهيمنة على سوق البيانات والذكاء الاصطناعي."
    },
    {
      id: 7,
      title: "تحقيق بصري غامض عن أسرار وخفايا العالم الرقمي المظلم والدارك ويب",
      category: "تحقيقات ومحتوى معرفي",
      embedUrl: "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1339074467519916%2F&show_text=false",
      gridClass: "md:col-span-1 md:row-span-1 min-h-[220px]",
      thumbnail: "🕵️‍♂️",
      coverImage: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?q=80&w=800",
      description: "فيديو ترويجي يستعرض الجوانب الخفية لشبكة الإنترنت المظلم بأسلوب إخراجي غامض يشد الانتباه ويرفع معدلات الاحتفاظ بالمشاهد."
    },
    {
      id: 8,
      title: "وثائقي سينمائي إبداعي يتناول ظاهرة الزومبي من منظور علمي وتاريخي",
      category: "أفلام وثائقية وقصصية",
      embedUrl: "https://www.facebook.com/plugins/video.php?height=416&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1451334533222164%2F&show_text=false",
      gridClass: "md:col-span-2 md:row-span-1 min-h-[240px]",
      thumbnail: "🧟",
      coverImage: "https://images.unsplash.com/photo-1509248961158-e54f6934749c?q=80&w=800",
      description: "مونتاج متطور ومؤثرات بصرية وصوتية قوية تشرح تاريخ الأساطير والظواهر السينمائية بطريقة ترفيهية ومثيرة."
    },
    {
      id: 9,
      title: "فيلم وثائقي يروي تاريخ ونشأة النادي الأهلي العريق وصناعة المجد",
      category: "وثائقيات رياضية",
      embedUrl: "https://www.facebook.com/plugins/video.php?height=312&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F876732714766185%2F&show_text=false",
      gridClass: "md:col-span-1 md:row-span-1 min-h-[220px]",
      thumbnail: "🦅",
      coverImage: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=800",
      description: "توثيق رياضي رائع يستعرض الجذور التاريخية لتأسيس القلعة الحمراء والمحطات المفصلية في تاريخ الرياضة العربية والإفريقية."
    },
    {
      id: 10,
      title: "سيرة ووثائقي ديني عن حياة الإمام البخاري ورحلته في جمع الحديث",
      category: "وثائقيات تاريخية ودينية",
      embedUrl: "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F901114159339286%2F&show_text=false",
      gridClass: "md:col-span-1 md:row-span-1 min-h-[220px]",
      thumbnail: "📚",
      coverImage: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=800",
      description: "إنتاج مرئي وقور بروح فنية عالية يروي أدق التفاصيل عن رحلة الإمام البخاري المباركة في خدمة السنة النبوية الشريفة."
    },
    {
      id: 11,
      title: "وثائقي تاريخي ممتع ومميز عن نشأة وبدايات بطولة كأس العالم",
      category: "وثائقيات رياضية",
      embedUrl: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fnadersalm123%2Fposts%2Fpfbid01hCBNqasvisBGpABYGxrM6bcafeu1X2t95hgEKdhUkWLEYmWwRvQNohoKAj5iLol&show_text=false&width=500",
      gridClass: "md:col-span-1 md:row-span-1 min-h-[220px]",
      thumbnail: "🏆",
      coverImage: "https://images.unsplash.com/photo-1540747737956-37872404797a?q=80&w=800",
      description: "رحلة شيقة عبر الزمن لاستكشاف كيف تحولت فكرة بسيطة إلى الحدث الرياضي والملتقى الكروي الأكبر والأكثر جماهيرية على كوكب الأرض."
    },
    {
      id: 12,
      title: "قصة نجاح سينمائية تلخص رحلة والت ديزني وصناعة عالم الخيال",
      category: "أفلام وثائقية وقصصية",
      embedUrl: "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F845147871854900%2F&show_text=false",
      gridClass: "md:col-span-2 md:row-span-1 min-h-[240px]",
      thumbnail: "🏰",
      coverImage: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=800",
      description: "وثائقي ملهم يوضح كيف تحول الإصرار والشغف برسم الرسوم المتحركة إلى أكبر إمبراطورية ترفيهية وإنتاجية حول العالم."
    },
    {
      id: 13,
      title: "محتوى كوميدي ترفيهي هادف يستعرض ظاهرة الفيديوهات المبتكرة",
      category: "محتوى ترفيهي وكوميدي",
      embedUrl: "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F2550930995303923%2F&show_text=false",
      gridClass: "md:col-span-1 md:row-span-1 min-h-[220px]",
      thumbnail: "🥔",
      coverImage: "https://images.unsplash.com/photo-1634128221889-82ed6efebfc3?q=80&w=800",
      description: "نموذج لصناعة المحتوى الكوميدي التفاعلي الخفيف المصمم بذكاء للمحافظة على جاذبية المنصات وزيادة أعداد المتابعين تلقائياً."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="relative z-50">
        <Header />
      </div>

      <main className="relative bg-white text-black min-h-screen overflow-hidden" dir="rtl">
        
        <div 
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 0,
            pointerEvents: "none",
            backgroundImage: `
              linear-gradient(to right, rgba(255, 0, 30, 0.08) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255, 0, 30, 0.08) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />

        <div 
          style={{
            position: "absolute",
            bottom: "10%",
            left: "50%",
            transform: "translateX(-50%)",
            width: "1200px",
            height: "600px",
            background: "radial-gradient(circle, rgba(255, 0, 30, 0.06) 0%, transparent 80%)",
            zIndex: 0,
            pointerEvents: "none",
            filter: "blur(130px)",
          }}
        />

        <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-32 md:pt-40 pb-16 border-b-8 border-[#ff001e]">
          <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
            <video
              src="/vidio ai.mp4"
              autoPlay
              muted
              loop
              playsInline
              controls={false}
              className="w-full h-full object-cover opacity-35 scale-[1.01]" 
            />
            <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-white/10 to-white/70" />
          </div>

          <div className="max-w-5xl mx-auto text-center px-6 relative z-10 space-y-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/30 text-red-600 backdrop-blur-md px-4 py-1.5 rounded-full text-sm font-bold mx-auto"
            >
              🎬 الجيل القادم من صناعة المحتوى المرئي السينمائي
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-7xl font-black leading-tight tracking-tight text-black"
            >
              صمم فيديوهات <br />
              <span className="bg-gradient-to-r from-red-600 via-[#ff001e] to-purple-600 bg-clip-text text-transparent">
                ذكاء اصطناعي احترافية
              </span> <br />
              تأسر جمهورك وتضاعف مبيعاتك
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-lg md:text-xl text-gray-800 max-w-3xl mx-auto leading-relaxed font-black"
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
                className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-red-600 to-[#ff001e] text-white font-black px-12 py-5 rounded-2xl text-xl hover:from-red-700 hover:to-red-800 transition-all shadow-[0_15px_30px_rgba(255,0,30,0.3)] w-full sm:w-auto text-center"
              >
                <span>ابدأ إنتاج فيديو الذكاء الاصطناعي الخاص بك</span>
                <span className="text-2xl">⚡</span>
              </Link>
            </motion.div>
          </div>
        </section>

        <section className="relative w-full py-24 px-6 overflow-hidden border-t-8 border-[#ff001e]">
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
              <motion.span className="text-[#ff001e] font-black tracking-wider uppercase text-sm bg-red-500/10 border border-[#ff001e]/20 px-4 py-1 rounded-full">
                حلول إنتاج متكاملة
              </motion.span>
              <motion.h2 className="text-3xl md:text-5xl font-black text-black leading-tight">
                إيه اللي هنقدمهولك في خدمة <br className="hidden md:block"/>
                <span className="bg-gradient-to-r from-red-600 to-[#ff001e] bg-clip-text text-transparent">فيديوهات الذكاء الاصطناعي؟</span>
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
                  className="group relative bg-white/95 border-2 border-[#ff001e] rounded-2xl backdrop-blur-sm transition-all shadow-[0_10px_20px_rgba(0,0,0,0.25)] overflow-hidden"
                >
                  <Link href={`/services/vidioai/${service.slug}`} className="block p-8 h-full w-full">
                    <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-gray-100 text-3xl mb-6 group-hover:bg-[#ff001e] group-hover:text-white transition-all">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-black text-black mb-4 group-hover:text-[#ff001e] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed font-bold text-base">
                      {service.description}
                    </p>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative w-full py-24 px-6 overflow-hidden border-t-8 border-[#ff001e]">
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <motion.span className="text-[#ff001e] font-black tracking-wider uppercase text-sm bg-red-500/10 border border-[#ff001e]/20 px-4 py-1 rounded-full">
                روائع الإخراج المرئي
              </motion.span>
              <motion.h2 className="text-3xl md:text-5xl font-black text-black">
                شاهد كفاءة الإنتاج والتصميم <br />
                <span className="bg-gradient-to-r from-red-600 to-[#ff001e] bg-clip-text text-transparent">بتقنيات Giotec الرقمية</span>
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
                  className={`group relative border-2 border-[#ff001e] rounded-3xl overflow-hidden cursor-pointer flex flex-col justify-end p-6 ${project.gridClass} shadow-[0_12px_24px_rgba(0,0,0,0.3)] transition-all duration-300`}
                >
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-110 z-0"
                    style={{ backgroundImage: `url(${project.coverImage})` }}
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent z-10" />
                  
                  <div className="absolute inset-0 flex items-center justify-center z-20">
                    <div className="w-14 h-14 rounded-full bg-white/90 border-2 border-[#ff001e] flex items-center justify-center text-xl text-[#ff001e] group-hover:bg-[#ff001e] group-hover:text-white transition-all duration-300 shadow-md">
                      ▶
                    </div>
                  </div>
                  
                  <div className="absolute top-6 left-6 text-7xl opacity-10 group-hover:opacity-25 transition-all z-0">
                    {project.thumbnail}
                  </div>
                  
                  <div className="relative z-20 space-y-2 text-right">
                    <span className="text-[11px] font-black text-white bg-[#ff001e] px-3 py-1 rounded-full border border-red-500">
                      {project.category}
                    </span>
                    <h3 className="text-base md:text-lg font-black text-white pt-2 group-hover:text-red-200 line-clamp-2">
                      {project.title}
                    </h3>
                    <p className="text-xs text-gray-200 line-clamp-2 font-bold">
                      {project.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative w-full py-24 px-6 overflow-hidden border-t-8 border-[#ff001e] bg-gray-50/50">
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
              <motion.span className="text-[#ff001e] font-black tracking-wider uppercase text-sm bg-red-500/10 border border-[#ff001e]/20 px-4 py-1 rounded-full">
                لماذا نحن خيارك الأفضل؟
              </motion.span>
              <motion.h2 className="text-3xl md:text-5xl font-black text-black leading-tight">
                المميزات اللي هتحصل عليها <br />
                <span className="bg-gradient-to-r from-red-600 to-[#ff001e] bg-clip-text text-transparent">عند إنتاج فيديوهاتك مع Giotec</span>
              </motion.h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group relative bg-white border-4 border-black rounded-[2.5rem] p-8 md:p-10 transition-all duration-300 transform hover:-translate-y-3 hover:scale-[1.03] shadow-[0_20px_45px_rgba(255,0,30,0.15)] hover:shadow-[0_30px_60px_rgba(255,0,30,0.35)] overflow-hidden"
                  style={{
                    boxShadow: "12px 12px 0px 0px #ff001e, 16px 16px 0px 0px #000"
                  }}
                >
                  <div className={`absolute -right-16 -top-16 w-40 h-40 rounded-full blur-3xl bg-gradient-to-br ${benefit.gradient} opacity-40 transition-opacity group-hover:opacity-100 duration-500`} />

                  <div className="flex flex-col md:flex-row gap-6 items-start relative z-10">
                    <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center rounded-2xl bg-[#ff001e] text-white text-3xl shadow-[0_8px_20px_rgba(255,0,30,0.4)] border-2 border-black transform group-hover:rotate-12 transition-transform duration-300">
                      {benefit.icon}
                    </div>
                    
                    <div className="space-y-3 text-right">
                      <h3 className="text-2xl font-black text-black tracking-tight group-hover:text-[#ff001e] transition-colors duration-300">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-800 leading-relaxed font-bold text-base">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative w-full py-24 px-6 overflow-hidden border-t-8 border-[#ff001e]">
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
              <motion.span className="text-[#ff001e] font-black tracking-wider uppercase text-sm bg-red-500/10 border border-[#ff001e]/20 px-4 py-1 rounded-full">
                دليلك للنجاح الرقمي
              </motion.span>
              <motion.h2 className="text-3xl md:text-5xl font-black text-black leading-tight">
                3 نصائح للاستفادة القصوى <br />
                <span className="bg-gradient-to-r from-red-600 to-[#ff001e] bg-clip-text text-transparent">من إنشاء الفيديو بالذكاء الاصطناعي</span>
              </motion.h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
              {tips.map((tip, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="group relative bg-white border-4 border-black rounded-[2.5rem] p-8 md:p-10 transition-all duration-300 transform hover:-translate-y-3 hover:scale-[1.03] overflow-hidden"
                  style={{
                    boxShadow: "12px 12px 0px 0px #ff001e, 16px 16px 0px 0px #000"
                  }}
                >
                  <div className={`absolute -right-16 -top-16 w-40 h-40 rounded-full blur-3xl bg-gradient-to-br ${tip.gradient} opacity-40 transition-opacity group-hover:opacity-100 duration-500`} />

                  <div className="relative z-10 space-y-6 text-right">
                    <div className="flex items-center justify-between">
                      <span className="text-4xl md:text-5xl font-black text-black/10 group-hover:text-[#ff001e]/20 transition-colors duration-300">
                        {tip.number}
                      </span>
                      <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-gray-100 text-3xl border-2 border-black group-hover:bg-[#ff001e] group-hover:text-white group-hover:rotate-6 transition-all duration-300">
                        {tip.icon}
                      </div>
                    </div>

                    <h3 className="text-2xl font-black text-black tracking-tight group-hover:text-[#ff001e] transition-colors duration-300">
                      {tip.title}
                    </h3>
                    
                    <div className="h-[2px] w-12 bg-[#ff001e]" />
                    
                    <p className="text-gray-800 leading-relaxed font-bold text-base">
                      {tip.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative w-full py-24 px-6 overflow-hidden border-t-8 border-[#ff001e] bg-gray-50/50">
          <div className="max-w-4xl mx-auto relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
              <motion.span className="text-[#ff001e] font-black tracking-wider uppercase text-sm bg-red-500/10 border border-[#ff001e]/20 px-4 py-1 rounded-full">
                لديك استفسار؟
              </motion.span>
              <motion.h2 className="text-3xl md:text-5xl font-black text-black leading-tight">
                الأسئلة الشائعة حول <br />
                <span className="bg-gradient-to-r from-red-600 to-[#ff001e] bg-clip-text text-transparent">صناعة الفيديو بالذكاء الاصطناعي</span>
              </motion.h2>
            </div>

            <div className="space-y-8">
              {faqs.map((faq, index) => {
                const isOpen = openFaqIndex === index;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    onClick={() => toggleFaq(index)}
                    className="group relative bg-white border-4 border-black rounded-3xl p-6 md:p-8 cursor-pointer transition-all duration-300 transform hover:-translate-y-1.5 hover:scale-[1.01] overflow-hidden select-none"
                    style={{
                      boxShadow: isOpen 
                        ? "6px 6px 0px 0px #ff001e, 10px 10px 0px 0px #000" 
                        : "12px 12px 0px 0px #ff001e, 16px 16px 0px 0px #000"
                    }}
                  >
                    <div className="flex items-center justify-between gap-4 text-right">
                      <h3 className="text-lg md:text-xl font-black text-black group-hover:text-[#ff001e] transition-colors duration-300">
                        {faq.question}
                      </h3>
                      
                      <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-gray-100 border-2 border-black flex items-center justify-center text-xl font-black text-black group-hover:bg-[#ff001e] group-hover:text-white transition-all duration-300">
                        {isOpen ? "−" : "+"}
                      </div>
                    </div>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0, marginTop: 0 }}
                          animate={{ height: "auto", opacity: 1, marginTop: 20 }}
                          exit={{ height: 0, opacity: 0, marginTop: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden border-t-2 border-gray-100 pt-5"
                        >
                          <p className="text-gray-800 leading-relaxed font-bold text-base">
                            {faq.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

      </main>

      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedVideo(null)}
            className="fixed inset-0 bg-black/90 backdrop-blur-xl z-[999] flex items-center justify-center p-4 md:p-8"
          >
            <motion.div
              initial={{ scale: 0.93, y: 15, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.93, y: 15, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-5xl bg-white border-4 border-[#ff001e] rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] grid grid-cols-1 lg:grid-cols-3"
            >
              
              <button 
                onClick={() => setSelectedVideo(null)}
                className="absolute top-4 right-4 z-50 w-10 h-10 rounded-full bg-white border-2 border-[#ff001e] text-black hover:bg-[#ff001e] hover:text-white flex items-center justify-center font-black transition-colors"
              >
                ✕
              </button>

              <div className="lg:col-span-2 bg-black aspect-video lg:aspect-auto lg:h-[550px] relative">
                <iframe
                  src={selectedVideo.embedUrl}
                  className="w-full h-full border-0 absolute inset-0"
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>

              <div className="p-8 flex flex-col justify-between space-y-6 bg-white border-t lg:border-t-0 lg:border-r-4 border-[#ff001e]">
                <div className="space-y-4 text-right">
                  <span className="inline-block text-xs font-black text-white bg-[#ff001e] px-3 py-1 rounded-full border border-red-500">
                    {selectedVideo.category}
                  </span>
                  <h3 className="text-xl font-black text-black leading-tight">
                    {selectedVideo.title}
                  </h3>
                  <div className="h-[3px] w-12 bg-[#ff001e] rounded-full" />
                  <p className="text-gray-800 text-sm font-black">
                    {selectedVideo.description}
                  </p>
                </div>

                <div className="space-y-3 pt-6 border-t-2 border-gray-100">
                  <div className="flex items-center justify-between text-xs text-gray-500 font-bold">
                    <span>تقنيات المونتاج</span>
                    <span className="text-black">Giotec Advanced Studio</span>
                  </div>
                  
                  <Link
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-red-600 to-[#ff001e] text-white font-black py-3.5 px-4 rounded-xl text-sm hover:from-red-700 hover:to-red-800 transition-all text-center shadow-md"
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
"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import FloatingSocials from "../../../components/FloatingSocials";
import {
  FaWhatsapp,
  FaRocket,
  FaShieldAlt,
  FaSearchDollar,
  FaMobileAlt,
  FaCode,
  FaShoppingCart,
  FaServer,
  FaChartLine,
  FaCheckCircle,
  FaCogs,
  FaGlobe,
  FaBuilding,
  FaCreditCard,
  FaTruck,
  FaHeadset,
  FaHandshake,
  FaAward,
  FaBolt,
  FaLayerGroup,
  FaSyncAlt,
  FaStar,
  FaArrowLeft,
  FaChevronDown,
  FaLaptopCode,
  FaLock,
  FaDatabase,
  FaMapMarkerAlt,
  FaUsers,
  FaFileInvoiceDollar,
  FaBullseye,
  FaRegClock,
  FaCheckDouble,
  FaTools,
  FaReact,
  FaNodeJs
} from "react-icons/fa";

export default function NextjsServiceClient() {
  // =====================================================================
  // حالات التفاعل (States) داخل صفحة خدمة Next.js الموسعة
  // =====================================================================
  const [activeFeatureTab, setActiveFeatureTab] = useState<number>(0);
  const [activeStackTab, setActiveStackTab] = useState<number>(0);
  const [activeGoal, setActiveGoal] = useState<number>(0);
  const [activeProblemTab, setActiveProblemTab] = useState<number>(0);
  const [activeCaseStudy, setActiveCaseStudy] = useState<number>(0);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // حالات حاسبة ومخطط مشروع Next.js المتقدمة
  const [calcProjectSize, setCalcProjectSize] = useState<number>(0);
  const [calcRendering, setCalcRendering] = useState<number>(0);
  const [calcDatabase, setCalcDatabase] = useState<number>(0);
  const [calcTimeline, setCalcTimeline] = useState<number>(0);

  // إعدادات رقم الواتساب للـ Call To Action
  const whatsappNumber = "2010120347946";
  const displayPhone = "010120347946";

  const getWhatsappLink = (customMessage: string) => {
    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(customMessage)}`;
  };

  // =====================================================================
  // 1. الإحصائيات والأرقام الخاصة بخدمة Next.js الموسعة
  // =====================================================================
  const nextjsStats = [
    {
      number: "99/100",
      label: "تقييم أداء Google PageSpeed",
      desc: "سرعة تحميل استثنائية تتجاوز كافة المواقع والمنصات التقليدية",
      icon: <FaBolt className="w-8 h-8 text-emerald-400" />
    },
    {
      number: "100%",
      label: "توافق مع محركات البحث SEO",
      desc: "أرشفة فورية بفضل نظام Server-Side Rendering (SSR) المتقدم",
      icon: <FaSearchDollar className="w-8 h-8 text-emerald-400" />
    },
    {
      number: "Zero",
      label: "ثغرات أمنية وقوالب مكررة",
      desc: "كود برمجي نقي ومخصص بالكامل بدون إضافات بطيئة أو مكشوفة",
      icon: <FaShieldAlt className="w-8 h-8 text-emerald-400" />
    },
    {
      number: "4.5X",
      label: "مضاعفة معدل التحويل والمبيعات",
      desc: "تجربة تصفح فورية تشبه تطبيقات الجوال الحديثة وترفع المبيعات",
      icon: <FaChartLine className="w-8 h-8 text-emerald-400" />
    }
  ];

  // =====================================================================
  // 2. مميزات Next.js المتقدمة الموسعة (6 تبويبات)
  // =====================================================================
  const nextjsFeatures = [
    {
      tabTitle: "سرعة أداء خارقة (SSR & SSG)",
      title: "العرض من السيرفر (SSR & SSG) لسرعة تصفح لا تضاهى",
      desc: "بدلاً من تحميل الملفات ببطء من متصفح الزائر مثل المواقع العادية، تقوم تقنية Next.js بتوليد صفحات الويب على خوادم سحابية فائقة السرعة وإرسالها جاهزة وفورية للزائر، مما يلغي أي انتظار ويجعل موقعك يفتح في أجزاء من الثانية.",
      points: [
        "تحميل فوري للصفحات حتى على باقات الإنترنت الضعيفة أو شبكات 3G/4G",
        "اجتياز كامل لمعايير Google Core Web Vitals بامتياز وبدون أخطاء",
        "تقليل معدل ارتداد الزوار (Bounce Rate) إلى أدنى مستوى ممكن في تاريخ الويب",
        "تجربة مستخدم تفاعلية سلسة تشبه تماماً تطبيقات الآيفون والأندرويد الحديثة"
      ]
    },
    {
      tabTitle: "الصدارة في جوجل (Advanced SEO)",
      title: "بنية سيو تقنية متقدمة تضع موقعك في قمة نتائج محركات البحث",
      desc: "يعشق محرك بحث جوجل مواقع Next.js لأنها تقدم محتوى جاهزاً للقراءة فوراً دون الحاجة لتشغيل أكواد جافاسكريبت معقدة. نتحكم بدقة في الـ Meta Tags، الـ OpenGraph، الـ Dynamic Schema، وخرائط الموقع لكل صفحة على حدة.",
      points: [
        "أرشفة فورية وسريعة لجميع صفحات الموقع الجديدة بمجرد إطلاقها",
        "التحكم الكامل في الروابط، العناوين، والوصف البرمجي لكل صفحة بدقة",
        "دعم معمارية متعددة اللغات (i18n) مع وسوم Hreflang الاحترافية",
        "التفوق البرمجي المطلق على كافة المنافسين الذين يستخدمون منصات تقليدية"
      ]
    },
    {
      tabTitle: "أمان سيبراني مطلق (Security)",
      title: "حصن منيع ضد الاختراقات، الثغرات، وهجمات حجب الخدمة (DDoS)",
      desc: "المنصات التقليدية مثل ووردبريس تعاني أحياناً من ثغرات الإضافات والقوالب الخارجية. مع Next.js، الموقع مفصول تماماً عن قواعد البيانات التقليدية ومعزز بأعلى طبقات التشفير وجدران الحماية السيبرانية.",
      points: [
        "لا توجد إضافات خارجية (Plugins) قابلة للاختراق أو ثغرات السيرفر",
        "فصل كامل بين الواجهة الخلفية وقواعد البيانات عبر واجهات API آمنة",
        "استقرار تام للسيرفرات تحت ضغط الزيارات المليونية المفاجئة",
        "شهادات أمان SSL متقدمة ونسخ احتياطي سحابي دوري تلقائي"
      ]
    },
    {
      tabTitle: "قابلية توسع (Scalability)",
      title: "منصة تقنية تنمو مع نمو شركتك بدون أي قيود برمجية",
      desc: "سواء بدأ بمئات الزوار وتوسع ليصل إلى ملايين المستخدمين يومياً، فإن بنية Next.js السحابية (Serverless & Edge Functions) تتوسع تلقائياً لتستوعب أي حجم ضغط دون أي بطء أو سقوط في الأداء.",
      points: [
        "قابلية ربط لا محدودة مع أنظمة الـ ERP والـ CRM وتطبيقات الموبايل",
        "استضافة سحابية عالمية عبر Vercel أو AWS بأعلى كفاءة تشغيلية",
        "إمكانية تحويل الموقع مستقبلاً إلى تطبيق ويب متقدم (PWA) بكل سهولة",
        "تطوير مستمر وسهل بدون الحاجة لإعادة بناء المنصة من الصفر نهائياً"
      ]
    },
    {
      tabTitle: "التحويل والمبيعات (CRO)",
      title: "هندسة بصريّة وتسويقية تحول الزوار إلى عملاء دائمين",
      desc: "السرعة الفائقة والواجهات الانسيابية هي الوقود الحقيقي للمبيعات. عندما لا ينتظر العميل طويلاً لفتح صفحة المنتج أو الخدمة، ترتفع نسبة ثقته في البراند وتتم عملية الشراء أو التواصل بسلاسة تامة.",
      points: [
        "توزيع استراتيجي لأزرار الـ Call To Action والواتساب المباشر",
        "تقليل خطوات إتمام الطلب (Checkout) لمنع السلات المتروكة",
        "توافق تام مع بوابات الدفع الإلكتروني والتقسيط وشركات الشحن",
        "مضاعفة العائد من ميزانية الإعلانات الممولة (ROAS) بشكل ملحوظ"
      ]
    },
    {
      tabTitle: "التطبيقات والمنصات (Web Apps)",
      title: "بناء تطبيقات ويب متقدمة ولوحات تحكم حية (Dashboards)",
      desc: "لا تقتصر تقنية Next.js على المواقع التعريفية فقط، بل نستخدمها لبناء تطبيقات ويب معقدة، لوحات تحكم مالية وإدارية تحدث نفسها لحظياً (Real-time data)، ومنصات عملاء تفاعلية بخبرة برمجية عالمية.",
      points: [
        "تحديث البيانات لحظياً أمام المستخدم بدون تحديث الصفحة (Real-time)",
        "إدارة مستخدمين، صلاحيات، واشتراكات مدفوعة معقدة وبأمان تام",
        "تكامل مع خدمات الذكاء الاصطناعي APIs وخدمات الدفع السحابية",
        "أكواد نظيفة وقابلة للصيانة والتطوير الدائم"
      ]
    }
  ];

  // =====================================================================
  // 3. مستودع التقنيات المصاحبة (Tech Stack Grid موسع)
  // =====================================================================
  const techStackDetails = [
    {
      name: "Next.js 15 (App Router)",
      role: "الإطار البرمجي الأساسي للويب",
      desc: "نستخدم أحدث إصدارات Next.js App Router للاستفادة من ميزات الـ Server Components، الـ Streaming، والتحسين التلقائي للأكواد والملفات."
    },
    {
      name: "React 19 & TypeScript",
      role: "بناء الواجهات والأمان البرمجي",
      desc: "نعتمد على React لبناء مكونات تفاعلية حية وانسيابية، مع لغة TypeScript لضمان خلو الكود من أي أخطاء برمجية وموثوقية تشغيلية تامة."
    },
    {
      name: "Tailwind CSS & Framer Motion",
      role: "التصميم والتفاعل البصري الفاخر",
      desc: "تصميم واجهات عصرية فخمة ومخصصة 100% مع حركات إنسيابية جذابة عبر Framer Motion ترفع من تفاعل المستخدم وتترك انطباعاً راقياً."
    },
    {
      name: "Sanity CMS / Supabase / Prisma",
      role: "إدارة المحتوى وقواعد البيانات",
      desc: "نوفر لك لوحة تحكم مخصصة وسهلة جداً (مثل Sanity CMS أو قواعد بيانات Supabase و Prisma) لإدارة محتوى موقعك ومنتجاتك بكل سلاسة وأمان."
    }
  ];

  // =====================================================================
  // 4. مشاكل المواقع التقليدية وكيف يعالجها Next.js
  // =====================================================================
  const nextjsProblems = [
    {
      problemTitle: "الموقع بطيء جداً ويستغرق ثوانٍ طويلة للفتح على الموبايل",
      symptom: "تلاحظ أن الزوار يغادرون موقعك سريعاً قبل أن تتحمل الصور أو تفتح الصفحات، مما يهدر ميزانية إعلاناتك الممولة بالكامل.",
      ourNextjsFix: "تقنية Next.js تعتمد على العرض من السيرفر (SSR)، مما يعني إرسال الصفحة للزائر جاهزة وفورية بدون أي تحميل بطيء، لتفتح في أقل من ثانية واحدة (0.8s)."
    },
    {
      problemTitle: "الموقع لا يظهر في نتائج بحث جوجل نهائياً رغم جودة الخدمات",
      symptom: "المنافسون يتصدرون صفحات جوجل الأولى، بينما موقعك مخفي تماماً في الصفحات المتأخرة وتضطر للدفع دائماً مقابل الإعلانات.",
      ourNextjsFix: "المواقع العادية تفشل في الأرشفة لأن محرك البحث يرى صفحات صماء. Next.js يوفر لمحرك بحث جوجل محتواك البرمجي واضحاً ومباشراً، مع تحكم كامل في الـ Schema والـ Meta لتتصدر الصدارة."
    },
    {
      problemTitle: "تعرض الموقع للاختراق المتكرر أو التوقف المفاجئ أثناء الحملات الإعلانية",
      symptom: "كثرة تحديثات الإضافات والقوالب في المنصات التقليدية تتسبب في توقف الموقع أو اختراقه وخسارة آلاف الدولارات من أرباحك.",
      ourNextjsFix: "Next.js لا يستخدم إضافات خارجية (Plugins) قابلة للاختراق. كود نقي ومحمي بالكامل، مستضاف على سحابيات عالمية (Vercel) تضمن استقراراً بنسبة 99.9% حتى تحت مليون زيارة."
    },
    {
      problemTitle: "صعوبة توسيع الموقع أو ربطه بأنظمة خارجية أو تطبيقات الموبايل",
      symptom: "عندما تفكر في إضافة ميزات متقدمة أو ربط موقعك بتطبيق موبايل، تفاجأ بأن المنصة القديمة تقيدك تماماً وتتطلب إعادة بناء من الصفر.",
      ourNextjsFix: "بنية Next.js المصممة بنظام الـ APIs تمنحك حرية مطلقة للتوسع، إضافة ميزات ذكية، وربط الموقع بأي نظام إدارة عملاء (CRM) أو تطبيق موبايل مستقبلاً بدون أي قيود برمجية."
    }
  ];

  // =====================================================================
  // 5. دراسات حالة وسيناريوهات نجاح (Case Studies)
  // =====================================================================
  const caseStudies = [
    {
      clientType: "شركة عقارية كبرى في دبي / الرياض",
      beforeState: "موقع ووردبريس قديم، يستغرق 6 ثوانٍ للفتح، ولا يظهر في نتائج بحث جوجل العقارية.",
      afterState: "إعادة بناء كاملة بـ Next.js مع لوحة تحكم مخصصة وربط CRM.",
      results: [
        "انخفاض وقت تحميل الموقع من 6 ثوانٍ إلى 0.7 ثانية فقط",
        "قفزة بنسبة 320% في عدد العملاء المحتملين (Leads) المسجلين شهرياً",
        "تصدر الصفحة الأولى في جوجل لأهم الكلمات المفتاحية العقارية"
      ]
    },
    {
      clientType: "متجر إلكتروني للبراندات في السعودية ومصر",
      beforeState: "متجر بطيء يعاني من سلات متروكة كثيرة ومشاكل أثناء الدفع الإلكتروني.",
      afterState: "متجر Headless Commerce مدعوم بـ Next.js و Shopify APIs.",
      results: [
        "مضاعفة معدل إتمام الشراء (Checkout Conversion Rate) بنسبة 210%",
        "استقرار تام في المبيعات أثناء ذروة حملات الجمعة البيضاء",
        "تحسن ملحوظ في تجربة المستخدم وزيادة قيمة سلة المشتريات"
      ]
    },
    {
      clientType: "منصة خدمات واستشارات رقمية",
      beforeState: "منصة تعاني من بطء في استجابة لوحة التحكم وعدم القدرة على التوسع.",
      afterState: "تطبيق ويب متكامل بـ Next.js 15 و Supabase Database.",
      results: [
        "استجابة سحابية فورية ومزامنة حية للبيانات بدون أي تأخير",
        "زيادة قاعدة المستخدمين النشطين بنسبة 450% خلال 3 أشهر",
        "أمان سيبراني كامل وخلو ت تام من أي أعطال برمجية"
      ]
    }
  ];

  // =====================================================================
  // 6. الأسئلة الشائعة حول خدمة Next.js (10 أسئلة موسعة)
  // =====================================================================
  const nextjsFaqs = [
    {
      q: "ما هي تقنية Next.js ولماذا هي أفضل من ووردبريس أو المنصات التقليدية؟",
      a: "تقنية Next.js هي إطار عمل حديث لبرمجة وتطوير الويب مبني فوق مكتبة React. تختلف عن ووردبريس والمواقع التقليدية في كونها تولد صفحات الموقع مسبقاً على السيرفر (SSR/SSG)، مما يجعل سرعة فتح الموقع استثنائية (أقل من ثانية) ويمنحها أفضلية مطلقة في تصدر محركات البحث SEO، مع حماية أمنية كاملة لأنها لا تعتمد على إضافات خارجية قابلة للاختراق."
    },
    {
      q: "هل يمكنني تعديل محتوى موقع Next.js بسهولة بدون خبرة برمجية؟",
      a: "نعم بالتأكيد! على الرغم من أن الموقع مبني ببرمجة خاصة Next.js، إلا أننا نقوم بربطه بلوحة تحكم عصرية ومخصصة تماماً (مثل Sanity CMS أو WordPress كـ Headless)، تمكنك من تعديل النصوص، الصور، الأسعار، وإضافة المقالات والخدمات بكل سهولة وسلاسة دون الحاجة لأي خلفية برمجية."
    },
    {
      q: "كم تستغرق مدة تصميم وتطوير موقع إلكتروني باستخدام Next.js؟",
      a: "تعتمد المدة على حجم المشروع ومتطلباته؛ المواقع التعريفية للشركات صفحات الهبوط تستغرق عادة من 7 إلى 14 يوم عمل. أما المتاجر الإلكترونية الكبرى والمنصات التفاعلية وتطبيقات الويب (Web Apps) فتستغرق من 3 إلى 5 أسابيع لضمان أعلى معايير الجودة، الأمان، والاختبار الشامل."
    },
    {
      q: "هل المواقع المصممة بـ Next.js تدعم محركات البحث (SEO) بشكل جيد؟",
      a: "نعم، تعتبر Next.js هي المعيار الذهبي عالمياً لتحقيق أعلى نتائج في محركات البحث (SEO). بفضل العرض من السيرفر (Server-Side Rendering)، يرى محرك بحث جوجل محتوى موقعك كاملاً وجاهزاً للأرشفة الفورية، مما يضع موقعك في الصدارة مقارنة بالمواقع التقليدية التي تواجه صعوبات في الأرشفة."
    },
    {
      q: "كيف يتم استضافة ومتابعة مواقع Next.js بعد إطلاقها؟",
      a: "يتم استضافة مواقع Next.js على أفضل السحابيات العالمية مثل Vercel (المطور الأساسي لـ Next.js) أو AWS، وهي سحابيات تضمن استقراراً بنسبة 99.9% وسرعة توزيع محتوى عبر الـ CDN في كل دول العالم (مصر، السعودية، الإمارات، الكويت). كما نقدم لك دعماً فنياً وصيانة دورية لضمان عمل الموقع بكفاءة تامة."
    },
    {
      q: "هل يمكنني ترقية موقعي الحالي (سواء ووردبريس أو غيره) إلى Next.js؟",
      a: "نعم وبكل تأكيد! نقوم بدراسة موقعك الحالي، الاحتفاظ بكافة بياناتك وقواعد بياناتك وعناوين URLs الخاصة بك (مع تطبيق 301 Redirects احترافية لضمان عدم فقدان ترتيبك في جوجل)، وإعادة بناء وتطوير واجهة موقعك بالكامل بتقنية Next.js الخارقة السرعة."
    },
    {
      q: "هل يدعم Next.js تصميم مواقع متعددة اللغات (عربي / إنجليزي)؟",
      a: "نعم، تدعم Next.js إدارة وتوجيه اللغات (i18n Routing) بكفاءة هندسية متناهية. نصمم مواقع ثنائية ومتعددة اللغات باتجاهات عرض مضبوطة بدقة (RTL للعربية و LTR للإنجليزية) مع تهيئة أرشفة SEO مستقلة لكل لغة في جوجل."
    },
    {
      q: "هل يمكن ربط موقع Next.js ببوابات الدفع وأنظمة الـ CRM؟",
      a: "نعم بكل تأكيد. نربط موقعك بأي بوابة دفع معتمدة (مثل Stripe, Paymob, KNET, Apple Pay) وبأي نظام لإدارة علاقات العملاء مثل Bitrix24 أو HubSpot أو منصات الواتساب الآلية لضمان أتمتة مبيعاتك بالكامل."
    },
    {
      q: "هل أحصل على ملكية كاملة للدومين والأكواد البرمجية بعد إطلاق الموقع؟",
      a: "نعم 100%. أنت المالك الوحيد والحصري لاسم النطاق (Domain)، الاستضافة، الموقع، وكافة الأكواد البرمجية والملفات. نسلمك كافة الصلاحيات الرسمية ولا نفرض أي قيود أو احتكار."
    },
    {
      q: "كيف أبدأ الآن في طلب خدمة تصميم وتطوير موقع Next.js؟",
      a: "الأمر بسيط جداً! اضغط على أي زر تواصل عبر واتساب في هذه الصفحة (رقم 010120347946)، وأرسل لنا فكرة مشروعك، وسنرد عليك فوراً باستشارة هندسية مجانية وعرض سعر مخصص لموقعك."
    }
  ];

  return (
    <div className="min-h-screen bg-[#f5f7f5] text-slate-900 overflow-x-hidden" dir="rtl">
      {/* الأيقونات العائمة والهيدر */}
      <FloatingSocials />
      <Header />

      {/* =====================================================================
          1. قسم الهيرو الرئيسي (HERO SECTION)
      ===================================================================== */}
      <section className="relative w-full pt-32 pb-20 md:pt-40 md:pb-28 px-4 md:px-10 overflow-hidden bg-[#f5f7f5] border-b-4 border-emerald-500">
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(16, 185, 129, 0.09) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(16, 185, 129, 0.09) 1px, transparent 1px)
            `,
            backgroundSize: "55px 55px",
          }}
        />

        <div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[480px] pointer-events-none z-0"
          style={{
            background: "radial-gradient(circle, rgba(16, 185, 129, 0.15) 0%, transparent 70%)",
            filter: "blur(95px)",
          }}
        />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* العمود الأيمن: المحتوى التسويقي الرئيسي وأزرار الـ CTA */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 flex flex-col items-start text-right"
            >
              <div className="inline-flex items-center gap-2 bg-emerald-100 border-2 border-emerald-500 text-emerald-900 px-4 py-1.5 rounded-full font-black text-xs md:text-sm mb-6 shadow-sm">
                <FaReact className="text-emerald-600 w-4 h-4 animate-spin" style={{ animationDuration: "10s" }} />
                <span>أحدث معايير تطوير الويب العالمية - Next.js 15 & React</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-[1.25] mb-6">
                خدمة <span className="text-emerald-600 underline decoration-emerald-400 decoration-4 underline-offset-8">تصميم مواقع Next.js</span> الأسرع والأكثر تفوقاً
              </h1>

              <p className="text-base md:text-xl text-slate-700 font-bold leading-relaxed mb-8">
                نحول أفكارك، شركاتك، ومتاجرك إلى <strong className="text-slate-900">تطبيق ويب ومنصة رقمية خارقة السرعة</strong> باستخدام إطار العمل العالمي <strong className="text-emerald-700">Next.js و React</strong>. مواقع تفتح في أجزاء من الثانية، مؤمنة تماماً ضد الاختراق، ومؤسسة هندسياً لتتصدر الصفحة الأولى في محركات البحث <strong className="text-emerald-700">SEO</strong> في مصر والسعودية والإمارات والكويت.
              </p>

              {/* نقاط القوة السريعة في الهيرو */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full mb-8">
                {[
                  "أداء قياسي 99/100 على اختبارات Google PageSpeed",
                  "العرض من السيرفر (SSR) لأرشفة فورية في محركات البحث",
                  "حماية سيبرانية مطلقة وخلو تام من القوالب التقليدية",
                  "واجهات مستخدم تفاعلية حصرية تعمل بسلاسة تطبيقات الجوال"
                ].map((point, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2.5 bg-white/95 border border-emerald-300 px-3.5 py-2.5 rounded-xl shadow-sm"
                  >
                    <FaCheckCircle className="text-emerald-600 flex-shrink-0 w-5 h-5" />
                    <span className="text-xs md:text-sm font-black text-slate-800">{point}</span>
                  </div>
                ))}
              </div>

              {/* أزرار الـ Call To Action */}
              <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
                <a
                  href={getWhatsappLink("مرحباً م. عمرو، أريد الاستفسار عن خدمة تصميم وتطوير مواقع Next.js")}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="تواصل عبر واتساب لطلب خدمة Next.js"
                  className="w-full sm:w-auto flex items-center justify-center gap-3 bg-emerald-600 hover:bg-emerald-700 text-white font-black text-base md:text-lg px-8 py-4 rounded-2xl shadow-[0_12px_25px_-5px_rgba(16,185,129,0.45)] border-2 border-emerald-700 transition-all transform hover:-translate-y-1"
                >
                  <FaWhatsapp className="w-6 h-6" />
                  <span>تحدث معنا الآن: {displayPhone}</span>
                </a>

                <a
                  href="#features"
                  title="استعرض مميزات تقنية Next.js"
                  className="w-full sm:w-auto flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-black text-base md:text-lg px-7 py-4 rounded-2xl border-2 border-emerald-500 shadow-md transition-all"
                >
                  <span>استكشف المميزات التقنية</span>
                  <FaArrowLeft className="w-4 h-4 text-emerald-400" />
                </a>
              </div>
            </motion.div>

            {/* العمود الأيسر: عرض كارت تقني تفاعلي للـ Code Structure */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="lg:col-span-5"
            >
              <div className="bg-slate-900 rounded-3xl border-4 border-emerald-500 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.3)] overflow-hidden text-right" dir="ltr">
                <div className="bg-slate-950 px-4 py-3 border-b-2 border-emerald-500/60 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-emerald-400 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-teal-500 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-slate-600 inline-block" />
                  </div>
                  <span className="text-xs font-mono text-emerald-400 font-bold tracking-wider">
                    app/services/nextjs/page.tsx
                  </span>
                </div>

                <div className="p-6 font-mono text-xs md:text-sm text-slate-300 space-y-2 bg-slate-900/90 overflow-x-auto">
                  <p className="text-purple-400">import <span className="text-white">{`{ Metadata }`}</span> from <span className="text-emerald-300">&apos;next&apos;</span>;</p>
                  <p className="text-purple-400">import <span className="text-white">NextEngine</span> from <span className="text-emerald-300">&apos;@amr/engine&apos;</span>;</p>
                  <br />
                  <p className="text-blue-400">export const <span className="text-yellow-300">metadata</span>: <span className="text-cyan-300">Metadata</span> = &#123;</p>
                  <p className="pl-4 text-slate-300">title: <span className="text-emerald-300">&apos;Next.js Elite Performance&apos;</span>,</p>
                  <p className="pl-4 text-slate-300">speed: <span className="text-emerald-400">99.9</span>,</p>
                  <p className="pl-4 text-slate-300">seoRank: <span className="text-emerald-300">&apos;#1 Google Ranking&apos;</span>,</p>
                  <p className="pl-4 text-slate-300">security: <span className="text-emerald-300">&apos;Enterprise Grade&apos;</span>,</p>
                  <p className="text-blue-400">&#125;;</p>
                  <br />
                  <p className="text-purple-400">export default function <span className="text-yellow-300">NextjsService</span>() &#123;</p>
                  <p className="pl-4 text-purple-400">return (</p>
                  <p className="pl-8 text-cyan-300">&lt;<span className="text-yellow-200">NextEngine</span> <span className="text-blue-300">powered</span>=&#123;<span className="text-emerald-300">&quot;React 19&quot;</span>&#125;&gt;</p>
                  <p className="pl-12 text-slate-200">&lt;h1&gt;تصميم مواقع Next.js الاحترافية&lt;/h1&gt;</p>
                  <p className="pl-8 text-cyan-300">&lt;/<span className="text-yellow-200">NextEngine</span>&gt;</p>
                  <p className="pl-4 text-purple-400">);</p>
                  <p className="text-purple-400">&#125;</p>
                </div>

                <div className="p-4 bg-slate-950 flex items-center justify-between border-t border-emerald-500/40" dir="rtl">
                  <div className="flex items-center gap-2">
                    <FaBolt className="text-emerald-400 w-4 h-4" />
                    <span className="text-xs font-black text-emerald-300">توليد تلقائي من السيرفر (SSR)</span>
                  </div>
                  <a
                    href={getWhatsappLink("مرحباً، أود حجز استشارة لبرمجة موقعي بتقنية Next.js")}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="اطلب استشارة تقنية"
                    className="text-xs font-black text-white hover:text-emerald-300 underline"
                  >
                    اطلب استشارة تقنية ←
                  </a>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* =====================================================================
          2. شريط الإحصائيات والأرقام (NEXTJS STATS SECTION)
      ===================================================================== */}
      <section className="py-14 px-4 md:px-10 bg-slate-900 text-white border-b-4 border-emerald-500 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {nextjsStats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-slate-800/90 border-2 border-emerald-500/70 rounded-2xl p-6 flex flex-col items-center text-center shadow-lg hover:border-emerald-400 transition-all"
              >
                <div className="bg-slate-900 p-3.5 rounded-2xl border border-emerald-500/40 mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-black text-emerald-400 mb-1">
                  {stat.number}
                </div>
                <div className="text-lg font-black text-white mb-2">
                  {stat.label}
                </div>
                <p className="text-xs md:text-sm text-slate-300 font-bold">
                  {stat.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          3. مميزات Next.js المتقدمة (INTERACTIVE TABS SECTION - 6 TABS)
      ===================================================================== */}
      <section id="features" className="py-24 px-4 md:px-10 bg-white border-b-4 border-emerald-500">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="bg-emerald-100 text-emerald-800 border border-emerald-400 px-4 py-1 rounded-full text-xs md:text-sm font-black inline-block mb-4">
              لماذا تختار تقنية Next.js لمشروعك القادم؟
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6">
              مميزات تتفوق بها منصات <span className="text-emerald-600">Next.js</span> على أي منصة تقليدية
            </h2>
            <p className="text-slate-600 font-bold text-base md:text-lg">
              اختر أي ميزة من القائمة أدناه لتستعرض كيف تخدم هذه التقنية نجاح أعمالك على الويب:
            </p>
          </div>

          {/* أزرار التبويبات (6 تبويبات) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-10">
            {nextjsFeatures.map((feat, idx) => (
              <button
                key={idx}
                onClick={() => setActiveFeatureTab(idx)}
                className={`p-4 rounded-2xl font-black text-xs md:text-sm transition-all border-2 text-right flex flex-col justify-between ${
                  activeFeatureTab === idx
                    ? "bg-slate-900 text-emerald-400 border-emerald-500 shadow-xl scale-[1.02]"
                    : "bg-[#f5f7f5] text-slate-800 border-emerald-200 hover:border-emerald-400"
                }`}
              >
                <span className="text-[11px] opacity-70 mb-1 block">⭐ ميزة أساسية #{idx + 1}</span>
                <span>{feat.tabTitle}</span>
              </button>
            ))}
          </div>

          {/* صندوق عرض تفاصيل الميزة المختارة */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFeatureTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="bg-[#f5f7f5] border-4 border-emerald-500 rounded-3xl p-8 md:p-12 shadow-lg"
            >
              <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-4">
                {nextjsFeatures[activeFeatureTab].title}
              </h3>
              <p className="text-slate-700 font-bold text-base md:text-lg leading-relaxed mb-8">
                {nextjsFeatures[activeFeatureTab].desc}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {nextjsFeatures[activeFeatureTab].points.map((pt, pIdx) => (
                  <div key={pIdx} className="bg-white p-4 rounded-2xl border-2 border-emerald-300 flex items-center gap-3 shadow-sm">
                    <FaCheckCircle className="text-emerald-600 w-5 h-5 flex-shrink-0" />
                    <span className="font-black text-slate-800 text-sm md:text-base">{pt}</span>
                  </div>
                ))}
              </div>

              <a
                href={getWhatsappLink(`مرحباً م. عمرو، أرغب في الاستفادة من ميزة (${nextjsFeatures[activeFeatureTab].tabTitle}) في تصميم موقعي بـ Next.js`)}
                target="_blank"
                rel="noopener noreferrer"
                title="اطلب موقع بـ Next.js"
                className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-black px-7 py-3.5 rounded-xl transition-colors shadow-md"
              >
                <FaWhatsapp className="w-5 h-5" />
                <span>ابدأ مشروعك بهذه التقنية الآن</span>
              </a>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* =====================================================================
          4. حاسبة ومخطط مشروع Next.js المتقدمة (ESTIMATOR TOOL)
      ===================================================================== */}
      <section className="py-24 px-4 md:px-10 bg-[#f5f7f5] border-b-4 border-emerald-500">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="bg-emerald-600 text-white px-4 py-1.5 rounded-full text-xs md:text-sm font-black inline-block mb-4">
              أداة التخطيط الهندسي الفوري
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4">
              مُخطط ومُقدر <span className="text-emerald-600">متطلبات مشروع Next.js</span>
            </h2>
            <p className="text-slate-600 font-bold text-base md:text-lg">
              حدد حجم مشروعك، طريقة العرض، وقاعدة البيانات لتحصل على تقدير زمني وهندسي فوري:
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 bg-white border-4 border-emerald-500 rounded-3xl p-6 md:p-8 space-y-6 shadow-lg">
              <div>
                <label className="block font-black text-slate-900 text-base mb-3">
                  1. اختر حجم ونوع مشروعك الرقمي:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    { title: "صفحة هبوط تسويقية (Landing Page)", time: "5 - 7 أيام عمل" },
                    { title: "موقع شركة تعريفي (Corporate)", time: "7 - 12 يوم عمل" },
                    { title: "متجر إلكتروني متكامل (E-Commerce)", time: "14 - 21 يوم عمل" },
                    { title: "منصة ويب متقدمة / SaaS App", time: "3 - 5 أسابيع" }
                  ].map((size, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCalcProjectSize(idx)}
                      className={`p-3.5 rounded-xl border-2 text-right font-black text-xs md:text-sm transition-all ${
                        calcProjectSize === idx
                          ? "bg-slate-900 text-emerald-400 border-emerald-500 shadow-md"
                          : "bg-[#f5f7f5] text-slate-800 border-emerald-200 hover:border-emerald-400"
                      }`}
                    >
                      <div>{size.title}</div>
                      <div className="text-[11px] opacity-70 mt-1 font-bold">{size.time}</div>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block font-black text-slate-900 text-base mb-3">
                  2. اختر نمط العرض الهندسـي (Rendering Strategy):
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    { label: "SSR (Dynamic Server)", note: "لتحديث البيانات لحظياً" },
                    { label: "SSG (Static Generation)", note: "لأقصى سرعة أ ممكنة" },
                    { label: "Hybrid (مختلط)", note: "الدمج الأذكى للأداء والسيو" }
                  ].map((rend, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCalcRendering(idx)}
                      className={`p-3 rounded-xl border-2 text-right transition-all ${
                        calcRendering === idx
                          ? "bg-emerald-600 text-white border-emerald-800 shadow-md"
                          : "bg-[#f5f7f5] text-slate-800 border-emerald-200 hover:border-emerald-400"
                      }`}
                    >
                      <div className="font-black text-xs md:text-sm mb-1">{rend.label}</div>
                      <div className={`text-[10px] font-bold ${calcRendering === idx ? "text-emerald-100" : "text-slate-500"}`}>{rend.note}</div>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block font-black text-slate-900 text-base mb-3">
                  3. نوع لوحة التحكم وإدارة المحتوى (CMS):
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    { label: "Sanity CMS (مخصص وعصري)", note: "الأفضل للتحكم المرن" },
                    { label: "Headless WordPress", note: "لوحة ووردبريس مع واجهة Next" }
                  ].map((db, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCalcDatabase(idx)}
                      className={`p-3.5 rounded-xl border-2 text-right transition-all ${
                        calcDatabase === idx
                          ? "bg-slate-900 text-emerald-400 border-emerald-500 shadow-md"
                          : "bg-[#f5f7f5] text-slate-800 border-emerald-200 hover:border-emerald-400"
                      }`}
                    >
                      <div className="font-black text-xs md:text-sm mb-1">{db.label}</div>
                      <div className="text-[11px] opacity-70 font-bold">{db.note}</div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-slate-900 text-white border-4 border-emerald-500 rounded-3xl p-7 md:p-8 shadow-2xl">
              <div className="inline-block bg-emerald-500 text-slate-950 px-3.5 py-1 rounded-full text-xs font-black mb-4">
                ملخص المواصفات الهندسية لـ Next.js
              </div>
              <h3 className="text-xl md:text-2xl font-black text-emerald-400 mb-3">
                تطوير منصة Next.js الاحترافية
              </h3>
              <p className="text-slate-300 text-xs md:text-sm font-bold leading-relaxed mb-6">
                معمارية برمجية نقية بالكامل، سرعة أداء 99/100، وتأسيس سيو شامل يضمن صدارتك في جوجل.
              </p>

              <div className="space-y-3 border-t border-b border-slate-700 py-5 mb-6 text-xs md:text-sm">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-slate-400 font-bold">الإطار البرمجي:</span>
                  <span className="font-black text-white">Next.js 15 App Router</span>
                </div>
                <div className="flex items-center justify-between gap-2">
                  <span className="text-slate-400 font-bold">مؤشر السرعة:</span>
                  <span className="font-black text-emerald-400">99.9% Google PageSpeed</span>
                </div>
                <div className="flex items-center justify-between gap-2">
                  <span className="text-slate-400 font-bold">نمط العرض:</span>
                  <span className="font-black text-emerald-300">Server-Side Rendering (SSR)</span>
                </div>
                <div className="flex items-center justify-between gap-2">
                  <span className="text-slate-400 font-bold">الأمان السيبراني:</span>
                  <span className="font-black text-white">Enterprise Grade (Zero Plugins)</span>
                </div>
              </div>

              <a
                href={getWhatsappLink(
                  `مرحباً م. عمرو، قمت بتخطيط مشروع Next.js عبر موقعك وأرغب في بدء التنفيذ والتفاصيل.`
                )}
                target="_blank"
                rel="noopener noreferrer"
                title="احصل على عرض سعر عبر واتساب"
                className="w-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black py-4 px-6 rounded-2xl flex items-center justify-center gap-2 transition-all shadow-lg text-sm md:text-base"
              >
                <FaWhatsapp className="w-6 h-6" />
                <span>احصل على عرض سعر المشروع فوراً</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          5. تشخيص أعطال المواقع التقليدية وكيف يعالجها Next.js
      ===================================================================== */}
      <section className="py-24 px-4 md:px-10 bg-white border-b-4 border-emerald-500">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="bg-emerald-100 text-emerald-800 border border-emerald-400 px-4 py-1 rounded-full text-xs md:text-sm font-black inline-block mb-4">
              حلول هندسية للمشاكل الشائعة
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4">
              لماذا تلجأ الشركات لترك المنصات التقليدية والتحول إلى <span className="text-emerald-600">Next.js</span>؟
            </h2>
            <p className="text-slate-600 font-bold text-base md:text-lg">
              اضغط على المشكلة لتعرف كيف نعالجها برمجياً عبر تقنية Next.js:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {nextjsProblems.map((prob, idx) => (
              <button
                key={idx}
                onClick={() => setActiveProblemTab(idx)}
                className={`p-5 rounded-2xl border-2 text-right font-black text-sm md:text-base transition-all flex items-center justify-between gap-3 ${
                  activeProblemTab === idx
                    ? "bg-slate-900 text-emerald-400 border-emerald-500 shadow-lg"
                    : "bg-[#f5f7f5] text-slate-800 border-emerald-200 hover:border-emerald-400"
                }`}
              >
                <span>{prob.problemTitle}</span>
                <FaTools className={`w-5 h-5 flex-shrink-0 ${activeProblemTab === idx ? "text-emerald-400" : "text-slate-400"}`} />
              </button>
            ))}
          </div>

          <div className="bg-[#f5f7f5] border-4 border-emerald-500 rounded-3xl p-8 md:p-10 shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8">
                <span className="text-xs font-black text-slate-500 uppercase block mb-1">المشكلة في المنصات العادية:</span>
                <p className="text-slate-800 font-black text-base md:text-lg mb-5 bg-white p-4 rounded-xl border border-emerald-200">
                  &ldquo;{nextjsProblems[activeProblemTab].symptom}&rdquo;
                </p>

                <span className="text-xs font-black text-emerald-700 uppercase block mb-1">العلاج والحل الهندسي مع Next.js:</span>
                <p className="text-slate-700 font-bold text-sm md:text-base leading-relaxed">
                  {nextjsProblems[activeProblemTab].ourNextjsFix}
                </p>
              </div>

              <div className="lg:col-span-4 bg-emerald-900 text-white p-6 rounded-2xl border-2 border-emerald-400 text-center">
                <FaChartLine className="w-12 h-12 text-emerald-400 mx-auto mb-3" />
                <div className="text-xs text-emerald-200 font-bold mb-2">النتيجة بعد التطوير:</div>
                <div className="text-lg font-black text-white mb-6">
                  موقع خارق السرعة، آمن 100%، ومتصدر لجوجل
                </div>
                <a
                  href={getWhatsappLink(`مرحباً م. عمرو، أرغب في ترقية موقعي الحالي وتطويره بتقنية Next.js`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="اطلب تطوير موقعك"
                  className="w-full bg-white hover:bg-emerald-50 text-slate-900 font-black py-3 px-4 rounded-xl inline-flex items-center justify-center gap-2 text-xs md:text-sm transition-colors"
                >
                  <FaWhatsapp className="w-4 h-4 text-emerald-600" />
                  <span>اطلب ترقية موقعك الآن</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          6. دراسات حالة وسيناريوهات نجاح (CASE STUDIES)
      ===================================================================== */}
      <section className="py-24 px-4 md:px-10 bg-white border-b-4 border-emerald-500">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="bg-emerald-100 text-emerald-800 border border-emerald-400 px-4 py-1 rounded-full text-xs md:text-sm font-black inline-block mb-4">
              قصص نجاح حقيقية
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4">
              كيف ساعدت برمجة <span className="text-emerald-600">Next.js</span> عملاءنا في مضاعفة أرباحهم؟
            </h2>
            <p className="text-slate-600 font-bold text-base md:text-lg">
              نماذج واقعية لشركات انتقلت إلى Next.js وحققت نتائج استثنائية في الأداء والمبيعات:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {caseStudies.map((cs, idx) => (
              <div key={idx} className="bg-[#f5f7f5] border-4 border-emerald-500 rounded-3xl p-7 flex flex-col justify-between shadow-lg">
                <div>
                  <span className="bg-slate-900 text-emerald-400 px-3.5 py-1 rounded-full text-xs font-black inline-block mb-4">
                    دراسة حالة #{idx + 1}
                  </span>
                  <h3 className="text-xl font-black text-slate-900 mb-3">{cs.clientType}</h3>
                  <div className="space-y-3 text-xs md:text-sm font-bold mb-6">
                    <p className="text-red-700 bg-red-50 p-3 rounded-xl border border-red-200">
                      <strong>قبل Next.js:</strong> {cs.beforeState}
                    </p>
                    <p className="text-emerald-800 bg-emerald-50 p-3 rounded-xl border border-emerald-200">
                      <strong>الحل الهندسي:</strong> {cs.afterState}
                    </p>
                  </div>
                  <h4 className="font-black text-slate-900 text-xs uppercase block mb-2">النتائج المحققة:</h4>
                  <ul className="space-y-2 mb-6">
                    {cs.results.map((res, rIdx) => (
                      <li key={rIdx} className="flex items-start gap-2 text-xs font-black text-slate-800">
                        <FaCheckCircle className="text-emerald-600 w-4 h-4 mt-0.5 flex-shrink-0" />
                        <span>{res}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <a
                  href={getWhatsappLink(`مرحباً م. عمرو، أود الحصول على نتائج مماثلة لدراسة الحالة (${cs.clientType}) في موقعي`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-slate-900 hover:bg-emerald-700 text-white font-black py-3 px-4 rounded-xl text-xs md:text-sm text-center flex items-center justify-center gap-2 transition-colors"
                >
                  <FaWhatsapp className="w-4 h-4 text-emerald-400" />
                  <span>اطلب نفس المستوى لمشروعك</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          7. مستودع التقنيات المصاحبة (TECH STACK GRID)
      ===================================================================== */}
      <section className="py-24 px-4 md:px-10 bg-[#f5f7f5] border-b-4 border-emerald-500">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="bg-emerald-100 text-emerald-800 border border-emerald-400 px-4 py-1 rounded-full text-xs md:text-sm font-black inline-block mb-4">
              منظومة أدوات المطور المحترف
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6">
              التقنيات التي ندمجها مع <span className="text-emerald-600">Next.js</span> لمشروعك
            </h2>
            <p className="text-slate-600 font-bold text-base md:text-lg">
              نختار أفضل أدوات الويب الحديثة لنبني لك منصة متكاملة من الصدارة وحتى الإدارة:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {techStackDetails.map((tech, idx) => (
              <div key={idx} className="bg-white border-4 border-emerald-500 rounded-3xl p-7 flex flex-col justify-between shadow-md">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-slate-900 text-emerald-400 font-black text-xl flex items-center justify-center border-2 border-emerald-500 mb-5">
                    0{idx + 1}
                  </div>
                  <h3 className="text-xl font-black text-slate-900 mb-1">{tech.name}</h3>
                  <span className="text-xs font-black text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-300 inline-block mb-4">
                    {tech.role}
                  </span>
                  <p className="text-slate-600 font-bold text-xs md:text-sm leading-relaxed">
                    {tech.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          8. المستشار الرقمي التفاعلي: ماذا يمكننا أن نبني لك بـ Next.js؟
      ===================================================================== */}
      <section className="py-24 px-4 md:px-10 bg-white border-b-4 border-emerald-500">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="bg-emerald-600 text-white px-4 py-1.5 rounded-full text-xs md:text-sm font-black inline-block mb-4">
              خيارات غير محدودة للتطوير
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4">
              ماذا يمكننا أن نبني لك باستخدام <span className="text-emerald-600">Next.js</span>؟
            </h2>
            <p className="text-slate-600 font-bold text-base md:text-lg">
              اختر هدفك الرقمي لنعرض لك المزايا التي ستحصل عليها:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {[
              {
                goalTitle: "أريد بناء موقع شركتي أو مؤسستي ليكون الأسرع والأفخم في مجالي",
                solution: "موقع مؤسسي مخصص بـ Next.js و Tailwind مع لوحة تحكم Sanity CMS",
                benefits: [
                  "سرعة أداء فائقة تذهل عملائك وتعكس فخامة علامتك التجارية",
                  "أفضلية مطلقة في تصدر الكلمات المفتاحية لمجالك في محركات البحث",
                  "حماية سيبرانية كاملة واستقرار تام بدون أي أعطال أو ثغرات",
                  "لوحة تحكم عربية مخصصة وسهلة جداً لإدارة أخبار وخدمات شركتك"
                ]
              },
              {
                goalTitle: "أريد بناء متجر إلكتروني ضخم (Headless E-Commerce) يتحمل آلاف الزوار",
                solution: "متجر Headless Commerce مدعوم بـ Next.js مع Shopify / WooCommerce APIs",
                benefits: [
                  "سرعة تصفح منتجات خرافية ترفع معدل إتمام الشراء والمبيعات (CRO)",
                  "فصل كامل بين واجهة المتجر وبين قاعدة البيانات لضمان أمان تام",
                  "ربط بوابات الدفع (Stripe, Paymob, KNET) وشركات الشحن بسلاسة مطلقة",
                  "قدرة استيعاب ضغط ملايين العملاء أثناء عروض الجمعة البيضاء والحملات الكبرى"
                ]
              },
              {
                goalTitle: "أريد تطوير منصة رقمية تفاعلية / تطبيق ويب (SaaS Web App / Portal)",
                solution: "تطبيق ويب متكامل بـ Next.js 15 و React و Database متقدمة",
                benefits: [
                  "واجهة مستخدم حية وتفاعلية (Interactive UI) تحدث نفسها لحظياً",
                  "إدارة مستخدمين، صلاحيات، اشتراكات، ولوحات تحكم مخصصة (Dashboards)",
                  "أداء سحابي سريع جداً ومعالجة بيانات لحظية بدون أي تهنيج",
                  "قابلية ترحيل المنصة مستقبلاً لتطبيق موبايل بنفس الأكواد (React Native)"
                ]
              },
              {
                goalTitle: "أريد إنشاء صفحة هبوط (Landing Page) خارقة السرعة للحملات الممولة",
                solution: "صفحة هبوط تسويقية مخصصة بـ Next.js مربوطة بـ Pixels و CRM",
                benefits: [
                  "تحميل فوري في أقل من نصف ثانية يمنع ارتداد الزوار من الإعلانات",
                  "تصميم إقناعي يركز على زيادة معدل التحويل وجمع بيانات العملاء (Leads)",
                  "ربط دقيق لبيكسلات فيسبوك، تيك توك، وسناب شات، وجوجل",
                  "أزرار واتساب ونماذج تواصل ذكية تلتقط العميل في ثوانٍ معدودة"
                ]
              }
            ].map((item, idx) => (
              <button
                key={idx}
                onClick={() => setActiveGoal(idx)}
                className={`p-5 rounded-2xl border-2 text-right font-black text-sm md:text-base transition-all flex items-center justify-between gap-3 ${
                  activeGoal === idx
                    ? "bg-slate-900 text-emerald-400 border-emerald-500 shadow-lg"
                    : "bg-[#f5f7f5] text-slate-800 border-emerald-300 hover:border-emerald-500"
                }`}
              >
                <span>{item.goalTitle}</span>
                <FaBullseye className={`w-5 h-5 flex-shrink-0 ${activeGoal === idx ? "text-emerald-400" : "text-emerald-600"}`} />
              </button>
            ))}
          </div>

          <div className="bg-[#f5f7f5] border-4 border-emerald-500 rounded-3xl p-8 md:p-10 shadow-xl">
            <div className="inline-block bg-slate-900 text-emerald-400 px-4 py-1.5 rounded-full text-xs font-black mb-4">
              الحل الهندسي المقترَح
            </div>
            <h3 className="text-xl md:text-2xl font-black text-slate-900 mb-6">
              {/* هنا سيتم عرض التفاصيل */}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {[
                "أداء قياسي يفوق كافة المنافسين في السوق",
                "أمان سيبراني كامل وتشفير بيانات متقدم",
                "توافق تام مع معايير السيو وأرشفة جوجل",
                "دعم فني وتطوير مستمر للمنصة"
              ].map((ben, bIdx) => (
                <div key={bIdx} className="bg-white p-4 rounded-xl border border-emerald-300 flex items-center gap-3">
                  <FaCheckDouble className="text-emerald-600 w-4 h-4 flex-shrink-0" />
                  <span className="font-black text-slate-800 text-xs md:text-sm">{ben}</span>
                </div>
              ))}
            </div>

            <a
              href={getWhatsappLink("مرحباً م. عمرو، أريد بدء مشروع تطوير بـ Next.js")}
              target="_blank"
              rel="noopener noreferrer"
              title="ابدأ هذا المشروع"
              className="inline-flex items-center gap-3 bg-emerald-600 hover:bg-emerald-700 text-white font-black px-8 py-4 rounded-2xl shadow-md transition-all"
            >
              <FaWhatsapp className="w-6 h-6" />
              <span>ابدأ تنفيذ مشروعك الآن عبر واتساب</span>
            </a>
          </div>
        </div>
      </section>

      {/* =====================================================================
          9. الأسئلة الشائعة حول خدمة Next.js (10 FAQs ACCORDION)
      ===================================================================== */}
      <section className="py-24 px-4 md:px-10 bg-[#f5f7f5] border-b-4 border-emerald-500">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <span className="bg-emerald-100 text-emerald-800 border border-emerald-400 px-4 py-1 rounded-full text-xs md:text-sm font-black inline-block mb-3">
              إجابات شاملة لكل استفساراتك التقنية
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900">
              الأسئلة الشائعة حول <span className="text-emerald-600">تطوير مواقع Next.js</span>
            </h2>
          </div>

          <div className="space-y-4">
            {nextjsFaqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white border-2 border-emerald-500 rounded-2xl overflow-hidden shadow-sm"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full p-5 md:p-6 text-right flex items-center justify-between gap-4 font-black text-base md:text-lg text-slate-900 hover:text-emerald-700 transition-colors"
                >
                  <span>{faq.q}</span>
                  <FaChevronDown
                    className={`w-5 h-5 text-emerald-600 flex-shrink-0 transition-transform duration-300 ${
                      openFaq === idx ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {openFaq === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="px-5 pb-6 md:px-6 text-slate-700 font-bold text-sm md:text-base leading-relaxed border-t border-emerald-200 pt-4 bg-[#f5f7f5]/60"
                    >
                      {faq.a}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          10. بانر الختام والـ Call To Action النهائي
      ===================================================================== */}
      <section className="py-20 px-4 md:px-10 bg-slate-900 text-white relative overflow-hidden">
        <div className="max-w-5xl mx-auto relative z-10 bg-gradient-to-br from-emerald-700 to-emerald-900 border-4 border-emerald-400 rounded-3xl p-8 md:p-14 text-center shadow-2xl">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">
            هل أنت مستعد لنقل موقعك إلى المستوى التالي مع Next.js؟
          </h2>
          <p className="text-emerald-100 font-bold text-base md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed">
            تواصل معنا الآن عبر الواتساب لمناقشة فكرة مشروعك، والحصول على استشارة هندسية مجانية وعرض سعر مخصص لبرمجة موقعك بأعلى معايير السرعة والأمان.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={getWhatsappLink("مرحباً م. عمرو، أريد البدء في تطوير مشروعى بتقنية Next.js")}
              target="_blank"
              rel="noopener noreferrer"
              title="تواصل عبر واتساب الآن"
              className="w-full sm:w-auto bg-white hover:bg-emerald-50 text-slate-900 font-black text-lg md:text-xl px-10 py-5 rounded-2xl shadow-xl flex items-center justify-center gap-3 transition-transform hover:scale-105"
            >
              <FaWhatsapp className="w-7 h-7 text-emerald-600" />
              <span>تواصل عبر واتساب: {displayPhone}</span>
            </a>

            <Link
              href="/contact"
              title="صفحة اتصل بنا"
              className="w-full sm:w-auto bg-slate-900 hover:bg-slate-800 text-white font-black text-lg px-8 py-5 rounded-2xl border-2 border-emerald-300 transition-colors"
            >
              أرسل تفاصيل مشروعك
            </Link>
          </div>
        </div>
      </section>

      {/* الفوتر */}
      <Footer />
    </div>
  );
}
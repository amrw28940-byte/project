"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import FloatingSocials from "../../components/FloatingSocials";
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
  FaDatabase
} from "react-icons/fa";

export default function SaudiDesignClient() {
  const [activeTab, setActiveTab] = useState<string>("nextjs");
  const [activeCity, setActiveCity] = useState<number>(0);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [selectedIndustry, setSelectedIndustry] = useState<number>(0);

  // رقم الواتساب المطلوب مع كود الدولة لضمان عمل الرابط دولياً ومحلياً
  const whatsappNumber = "2010120347946";
  const displayPhone = "010120347946";

  const getWhatsappLink = (customMessage: string) => {
    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(customMessage)}`;
  };

  // بيانات الإحصائيات الخاصة بالسوق السعودي
  const stats = [
    {
      number: "+180",
      label: "مشروع ناجح في المملكة",
      desc: "مواقع شركات ومتاجر إلكترونية تتصدر السوق السعودي",
      icon: <FaAward className="w-8 h-8 text-emerald-500" />
    },
    {
      number: "99.9%",
      label: "سرعة وأداء قياسي",
      desc: "اجتياز كامل لاختبارات Google Core Web Vitals",
      icon: <FaBolt className="w-8 h-8 text-emerald-500" />
    },
    {
      number: "100%",
      label: "توافق مع أنظمة المملكة",
      desc: "ربط مدى، تمارا، تابي، سمسا، والفوترة الإلكترونية",
      icon: <FaShieldAlt className="w-8 h-8 text-emerald-500" />
    },
    {
      number: "3X",
      label: "مضاعفة معدل التحويل (CRO)",
      desc: "تصميم تجربة مستخدم تدفع الزائر السعودي لاتخاذ قرار الشراء",
      icon: <FaChartLine className="w-8 h-8 text-emerald-500" />
    }
  ];

  // بيانات المدن السعودية المستهدفة في السيو المحلي (Local SEO)
  const saudiCities = [
    {
      name: "الرياض",
      title: "شركة تصميم مواقع الكترونية في الرياض - قلب الأعمال",
      description: "بصفتها العاصمة والمركز المالي والإداري الأول في المملكة، تتطلب الشركات في الرياض واجهات رقمية تعكس الفخامة والموثوقية المؤسسية. نصمم مواقع للشركات القابضة، مكاتب الاستشارات، شركات المقاولات، والجهات الخدمية في الرياض بأحدث تقنيات الويب التي تضمن التفوق على المنافسين في أرقى أحياء ومناطق الأعمال بالرياض.",
      keywords: ["تصميم مواقع الرياض", "برمجة مواقع شركات بالرياض", "تطوير متاجر الرياض", "سيو الرياض"],
      projectsType: "المقرات الرئيسية، الشركات القابضة، المجمعات الطبية، وشركات التقنية المالية (Fintech)."
    },
    {
      name: "جدة",
      title: "شركة تصميم مواقع الكترونية في جدة - بوابة التجارة والسياحة",
      description: "تتميز جدة بنشاطها التجاري والسياحي الواسع وحركة الاستيراد والتصدير والترفيه. نبتكر للشركات في جدة مواقع تفاعلية حيوية ومتاجر إلكترونية عالية التحويل تناسب قطاع التجزئة، الفنادق، السياحة البحرية، المطاعم الفاخرة، وشركات الشحن والخدمات اللوجستية في عروس البحر الأحمر.",
      keywords: ["تصميم مواقع جدة", "شركة برمجة في جدة", "تصميم متجر الكتروني جدة", "تطوير مواقع سياحية جدة"],
      projectsType: "قطاع السياحة والضيافة، المتاجر الإلكترونية، الاستيراد والتصدير، والعقارات الساحلية."
    },
    {
      name: "الدمام والخبر",
      title: "شركة تصميم مواقع الكترونية في الدمام والمنطقة الشرقية",
      description: "المنطقة الشرقية (الدمام، الخبر، الظهران، الجبيل) هي عاصمة الصناعة والطاقة والخدمات اللوجستية في السعودية. نطور مواقع إلكترونية هندسية وصناعية احترافية لشركات البترول، المصانع، شركات التوريد، والمقاولات الصناعية مع دعم كامل للغتين العربية والإنجليزية للتعامل مع الشركاء الدوليين.",
      keywords: ["تصميم مواقع الدمام", "شركة تصميم مواقع الخبر", "مواقع شركات صناعية الجبيل", "برمجة مواقع الشرقية"],
      projectsType: "المصانع الكبرى، شركات النفط والطاقة، الخدمات اللوجستية، والتوريدات الصناعية."
    },
    {
      name: "مكة المكرمة والمدينة",
      title: "تصميم مواقع الكترونية في مكة المكرمة والمدينة المنورة",
      description: "نقدم حلولاً رقمية متخصصة لقطاع الحج والعمرة، الفنادق، شركات النقل، والخدمات العقارية والأوقاف في مكة المكرمة والمدينة المنورة. مواقع تدعم تعدد اللغات، أنظمة الحجز المباشر الفوري، وتتحمل ضغط الزيارات العالي من كافة أنحاء العالم على مدار الساعة.",
      keywords: ["تصميم مواقع مكة", "تصميم مواقع المدينة المنورة", "برمجة مواقع حج وعمرة", "تصميم مواقع فنادق"],
      projectsType: "حملات الحج والعمرة، الفنادق والضيافة، منصات الحجز، والاستثمار العقاري."
    },
    {
      name: "نيوم وكافة مناطق المملكة",
      title: "خدمات رقمية تغطي نيوم، القصيم، أبها، تبوك وكافة مدن المملكة",
      description: "تمتد خدماتنا الرقمية لتشمل كل مدينة ومحافظة في المملكة العربية السعودية من القصيم وحائل إلى أبها وجازان وتبوك ومشاريع المستقبل في نيوم والبحر الأحمر. نعمل معك عن بُعد بكفاءة تفوق التواجد الفعلي عبر اجتماعات دورية، تقارير أداء لحظية، ودعم فني لا يتوقف.",
      keywords: ["تصميم مواقع السعودية", "تصميم مواقع القصيم", "تصميم مواقع أبها", "مشاريع رؤية 2030 الرقمية"],
      projectsType: "المشاريع السياحية، المتاجر المحلية، العيادات، والمؤسسات الخدمية الناشئة."
    }
  ];

  // خدمات تصميم المواقع المفصلة
  const coreServices = [
    {
      icon: <FaCode className="w-10 h-10" />,
      title: "برمجة وتطوير مواقع Next.js المخصصة",
      badge: "الأقوى للأداء والـ SEO",
      description: "نستخدم تقنية Next.js و React لبناء مواقع إلكترونية خارقة السرعة تفتح في أجزاء من الثانية. هذا النوع من المواقع يمنحك أفضلية مطلقة في تصدر نتائج بحث جوجل في السعودية، وحماية برمجية يستحيل اختراقها مقارنة بالمنصات التقليدية.",
      features: [
        "سرعة تحميل فائقة (أقل من ثانية واحدة)",
        "توافق 100% مع معايير Google Core Web Vitals",
        "بنية برمجية آمنة تماماً وخالية من الثغرات",
        "قابلية توسع غير محدودة لنمو أعمالك مستقبلاً"
      ]
    },
    {
      icon: <FaBuilding className="w-10 h-10" />,
      title: "تصميم مواقع الشركات والمؤسسات (Corporate)",
      badge: "هوية مؤسسية فاخرة",
      description: "نصمم واجهات رقمية احترافية للشركات السعودية، مكاتب المحاماة، شركات المقاولات، والمؤسسات الحكومية والخاصة. نركز على إبراز سابقة الأعمال، الشهادات، والخدمات بأسلوب بصري يعزز ثقة العملاء والشركاء في علامتك التجارية.",
      features: [
        "تصميم UI/UX مخصص يعكس هوية شركتك البصرية",
        "عرض احترافي لسابقة الأعمال والمشاريع (Portfolio)",
        "دعم ثنائي اللغة (عربي / إنجليزي) بدقة عالية",
        "لوحة تحكم سهلة لإدارة المحتوى والأخبار والصفحات"
      ]
    },
    {
      icon: <FaShoppingCart className="w-10 h-10" />,
      title: "تصميم وتطوير المتاجر الإلكترونية المتكاملة",
      badge: "مبيعات وتحويل عالي",
      description: "نبني متاجر إلكترونية احترافية (شوبيفاي، ووكومرس، أو برمجة خاصة Headless Commerce) مصممة خصيصاً للمستهلك السعودي. تجربة تسوق سلسة من لحظة دخول الزائر وحتى إتمام الدفع واستلام الفاتورة.",
      features: [
        "ربط مباشر مع مدى، Apple Pay، STC Pay، والبطاقات الائتمانية",
        "تفعيل أنظمة التقسيط (تابي Tabby وتمارا Tamara)",
        "ربط شركات الشحن (سمسا، أرامكس، سبل، فاستلو، برق)",
        "تحسين مسار الشراء لتقليل السلات المتروكة وزيادة المبيعات"
      ]
    },
    {
      icon: <FaLaptopCode className="w-10 h-10" />,
      title: "تصميم مواقع ووردبريس الاحترافية والمعدلة",
      badge: "مرونة وسهولة إدارة",
      description: "نقدم خدمة تصميم مواقع ووردبريس في السعودية بمعايير هندسية مختلفة تماماً عن القوالب الجاهزة البطيئة. نبرمج قوالب مخصصة خفيفة، مؤمنة بالكامل، ومضبوطة بأعلى إعدادات الكاش والسرعة لتعطيك سهولة الإدارة مع قوة الأداء.",
      features: [
        "تهيئة كاملة للسرعة والأداء (WP Rocket & CDN)",
        "تخصيص كامل للواجهة بدون كود معقد للعميل",
        "حماية متقدمة ضد الهجمات والسبام",
        "تهيئة داخلية شاملة لمحركات البحث (On-Page SEO)"
      ]
    },
    {
      icon: <FaRocket className="w-10 h-10" />,
      title: "تطوير صفحات الهبوط التسويقية (Landing Pages)",
      badge: "مضاعفة عائد الإعلانات ROAS",
      description: "إذا كنت تطلق حملات إعلانية ممولة على سناب شات، تيك توك، إنستجرام، أو جوجل في السوق السعودي، فنحن نصمم لك صفحات هبوط بيعية فائقة الإقناع ترفع معدل التحويل وتخفض تكلفة الاستحواذ على العميل.",
      features: [
        "كتابة محتوى تسويقي بيعي (Copywriting) يستهدف العميل السعودي",
        "ربط دقيق للبيكسل و Google Tag Manager و Conversion API",
        "تصميم سريع جداً على الجوال لمنع تسرب الزوار",
        "أزرار تواصل واتساب ونماذج طلب سريعة ومباشرة"
      ]
    },
    {
      icon: <FaSearchDollar className="w-10 h-10" />,
      title: "تأسيس الـ SEO وتصدر نتائج البحث في السعودية",
      badge: "زيارات مجانية مستدامة",
      description: "لا نكتفي بتصميم موقع جميل فقط، بل نبني كل سطر برمجي وفق خوارزميات جوجل الحديثة. نؤسس لموقعك بنية سيو تقنية (Technical SEO) وهيكل محتوى يجعلك تتصدر الكلمات المفتاحية الشرائية في مجالك داخل المملكة.",
      features: [
        "دراسة شاملة للمنافسين والكلمات المفتاحية في السوق السعودي",
        "إعداد الـ Schema Markup وخرائط الموقع XML Sitemaps",
        "تحسين العناوين، الميتا ديسكربشن، والروابط الداخلية",
        "ربط وتجهيز Google Search Console و Google Analytics 4"
      ]
    }
  ];

  // القطاعات التي نخدمها في المملكة
  const industries = [
    {
      title: "شركات المقاولات والتطوير العقاري",
      desc: "تصميم مواقع تستعرض المشاريع العقارية، المخططات الهندسية، مراحل التنفيذ، ونماذج حجز الوحدات السكنية والتجارية بما يواكب النهضة العمرانية في المملكة.",
      points: ["معرض مشاريع تفاعلي بالصور والفيديو", "نماذج طلب تسعير واستشارة هندسية", "خرائط تفاعلية لمواقع المشاريع", "ملف تعريفي قابل للتحميل (Company Profile PDF)"]
    },
    {
      title: "العيادات والمجمعات الطبية والتجميل",
      desc: "مواقع طبية موثوقة للعيادات والمراكز الصحية ومراكز الأسنان والجلدية في الرياض وجدة، تتيح للمريض التعرف على الأطباء وحجز المواعيد بسهولة.",
      points: ["نظام حجز مواعيد إلكتروني مرتبط بالواتساب", "صفحات مخصصة لكل طبيب وتخصص طبي", "عرض حالات قبل وبعد والخدمات العلاجية", "مدونة طبية مهيأة لتصدر نتائج البحث"]
    },
    {
      title: "المتاجر الإلكترونية والعلامات التجارية (E-Commerce)",
      desc: "بناء متاجر إلكترونية للعطور، الأزياء، العبايات، القهوة المختصة، الإلكترونيات، والمنتجات الرقمية بتصميم فاخر ينافس كبرى البراندات في الخليج.",
      points: ["فلترة متقدمة للمنتجات وسلة تسوق ذكية", "دعم كوبونات الخصم والعروض الترويجية", "حساب تلقائي لضريبة القيمة المضافة (15%)", "ربط المخزون وشركات التوصيل السريع"]
    },
    {
      title: "شركات السياحة والسفر والحج والعمرة",
      desc: "منصات رقمية متطورة لعرض الباقات السياحية، برامج العمرة، تأجير السيارات، والرحلات الترفيهية داخل وخارج المملكة مع أنظمة حجز ودفع فورية.",
      points: ["عرض الباقات السياحية بالأسعار والتفاصيل اليومية", "نماذج حجز سريعة وتكامل مع الدفع الإلكتروني", "دعم تعدد اللغات والعملات للزوار الدوليين", "سرعة عالية واستقرار تام في المواسم"]
    },
    {
      title: "مكاتب المحاماة والاستشارات المالية والإدارية",
      desc: "واجهات رسمية رصينة تعكس المكانة القانونية والمهنية لمكاتب المحاماة والاستشارات الزكوية والمحاسبية في المملكة.",
      points: ["تصميم رسمي يعكس الثقة والاحترافية", "نظام حجز استشارات قانونية ومالية", "قسم خاص بالأنظمة واللوائح والمقالات المهنية", "حماية عالية لبيانات العملاء والمراسلات"]
    }
  ];

  // مقارنة التقنيات
  const techDetails: Record<string, { title: string; subtitle: string; desc: string; pros: string[]; bestFor: string }> = {
    nextjs: {
      title: "تقنية Next.js & React (برمجة خاصة حديثة)",
      subtitle: "الخيار رقم #1 للشركات الطموحة التي تبحث عن السرعة القصوى وتصدر جوجل",
      desc: "تعتمد كبرى الشركات العالمية اليوم على Next.js لأنها تجمع بين قوة الأداء الفائق، الأمان المطلق، والتوافق الكامل مع محركات البحث بفضل تقنية Server-Side Rendering (SSR). موقعك سيعمل كأنه تطبيق جوال فوري الاستجابة.",
      pros: [
        "سرعة تحميل 99/100 على مؤشرات جوجل PageSpeed",
        "أمان برمجي كامل ضد الاختراقات الشائعة في القوالب الجاهزة",
        "أفضلية كبيرة في أرشفة وتصدر نتائج البحث SEO في السعودية",
        "تصميم مخصص 100% بدون أي قيود في الشكل أو الوظائف"
      ],
      bestFor: "الشركات الكبرى والمتوسطة، المنصات الخدمية، المواقع التي تستهدف صدارة جوجل، والمتاجر ذات الزيارات العالية."
    },
    wordpress: {
      title: "منصة WordPress الاحترافية المطورة",
      subtitle: "الحل العملي والمرن لإدارة المحتوى والمقالات بسهولة",
      desc: "نقدم لك ووردبريس بمعايير خاصة؛ حيث نبني واجهات نظيفة الكود ومسرّعة بالكامل مع لوحة تحكم عربية سهلة تمكن فريقك من إضافة الخدمات والمقالات والصفحات في دقائق دون الحاجة لخبرة برمجية.",
      pros: [
        "لوحة تحكم عربية سهلة ومرنة للغاية",
        "مثالي للمواقع التعريفية والمدونات الغنية بالمحتوى",
        "تكلفة تطوير مناسبة ووقت تنفيذ سريع",
        "إعدادات حماية وكاش متقدمة لضمان استقرار الموقع"
      ],
      bestFor: "المواقع التعريفية للشركات الناشئة، المدونات، المواقع الإخبارية، والشركات التي تحدث محتواها يومياً."
    },
    shopify: {
      title: "منصات التجارة الإلكترونية (Shopify / WooCommerce)",
      subtitle: "بيئة متكاملة للبيع أونلاين وإدارة الطلبات والمخزون في المملكة",
      desc: "سواء كنت تفضل قوة واستقرار شوبيفاي العالمي أو مرونة ووكومرس، نقوم بتصميم وتخصيص متجرك بالكامل مع ربط كافة حلول الدفع والشحن في السعودية لتبدأ البيع فوراً باحترافية.",
      pros: [
        "إدارة شاملة للمنتجات، المخزون، الطلبات، والعملاء",
        "ربط جاهز ومباشر مع مدى، تابي، تمارا، وأبل باي",
        "تكامل تام مع شركات الشحن السعودية والربط اللوجستي",
        "تقارير مبيعات وتحليلات دقيقة لأداء المتجر"
      ],
      bestFor: "المتاجر الإلكترونية، البراندات التجارية، متاجر التجزئة والجملة في السوق السعودي."
    }
  };

  // خطوات العمل
  const workflowSteps = [
    {
      step: "01",
      title: "دراسة المشروع وتحليل المنافسين في السعودية",
      desc: "نبدأ بفهم دقيق لنشاطك التجاري، جمهورك المستهدف في المملكة، وتحليل نقاط القوة والضعف لدى أبرز منافسيك في السوق السعودي لوضع استراتيجية تتفوق عليهم."
    },
    {
      step: "02",
      title: "هيكلة الموقع وتصميم تجربة المستخدم (UI/UX)",
      desc: "نرسم خريطة الموقع (Sitemap) ونصمم واجهات عصرية فاخرة تراعي ذوق المستخدم السعودي وتسهل وصوله للخدمة أو المنتج في أقل عدد ممكن من النقرات."
    },
    {
      step: "03",
      title: "التكويد والبرمجة بأحدث التقنيات",
      desc: "نحول التصميم إلى كود برمجي نظيف، سريع، ومتجاوب بنسبة 100% مع كافة شاشات الجوال والتابلت والكمبيوتر، مع تطبيق أعلى معايير الأمان."
    },
    {
      step: "04",
      title: "تهيئة الـ SEO والربط التقني المتكامل",
      desc: "نضبط كافة إعدادات السيو التقني والداخلي، ونربط بوابات الدفع، شركات الشحن، أزرار الواتساب، وأدوات التحليل والتتبع (GA4 & Pixels)."
    },
    {
      step: "05",
      title: "الفحص الشامل، الإطلاق، والتدريب",
      desc: "نختبر سرعة الموقع وأمانه وتوافقه على كافة المتصفحات، ثم نطلقه رسمياً على الدومين الخاص بك مع تدريبك الكامل وتقديم دعم فني مستمر."
    }
  ];

  // باقات الأسعار التقديرية والمرنة
  const packages = [
    {
      name: "باقة انطلاقة الأعمال (Corporate)",
      badge: "مثالية للشركات والمؤسسات",
      desc: "موقع تعريفي احترافي متكامل يبرز قوة شركتك وخدماتك في السوق السعودي ويجذب العملاء المحتملين.",
      features: [
        "تصميم عصري مخصص متوافق مع الجوال 100%",
        "حتى 7 صفحات رئيسية وفرعية احترافية",
        "تهيئة أولية شاملة لمحركات البحث (SEO Ready)",
        "ربط مباشر مع الواتساب ونماذج تواصل ذكية",
        "خريطة موقع جوجل وربط حسابات التواصل الاجتماعي",
        "شهادة أمان SSL مجانية وحماية عالية",
        "سرعة تحميل فائقة وتجربة مستخدم سلسة",
        "دعم فني مجاني وتدريب كامل على لوحة التحكم"
      ],
      ctaText: "اطلب باقة الشركات عبر واتساب"
    },
    {
      name: "باقة المتاجر المتكاملة (E-Commerce Pro)",
      badge: "الأكثر طلباً في المملكة",
      featured: true,
      desc: "متجر إلكتروني احترافي متكامل الأركان مهيأ للبيع الفوري في السعودية مع ربط الدفع والشحن.",
      features: [
        "تصميم واجهة متجر فاخرة ترفع معدل المبيعات (CRO)",
        "إضافة الأقسام والمنتجات مع خيارات الفلترة والبحث الذكي",
        "ربط بوابات الدفع (مدى، فيزا، ماستركارد، Apple Pay)",
        "تفعيل خدمات التقسيط (تابي Tabby وتمارا Tamara)",
        "ربط شركات الشحن السعودية (سمسا، أرامكس، سبل، وغيرها)",
        "تهيئة سيو متقدمة للمنتجات والأقسام لتصدر جوجل",
        "ربط بيكسل سناب شات، تيك توك، ميتا، وجوجل أناليتكس",
        "دعم فني متواصل واستشارات تقنية لنمو المتجر"
      ],
      ctaText: "ابدأ متجرك الآن عبر واتساب"
    },
    {
      name: "باقة البرمجة الخاصة والـ SEO (Next.js Elite)",
      badge: "للصدارة والأداء الخارق",
      desc: "حل هندسي متكامل للشركات الطموحة التي تريد موقعاً خارق السرعة بـ Next.js مع خطة تصدر نتائج البحث.",
      features: [
        "برمجة خاصة بالكامل باستخدام Next.js & Tailwind CSS",
        "أداء قياسي 99% على Google PageSpeed Insights",
        "بنية سيو تقنية متقدمة (Schema, SSR, Dynamic Metadata)",
        "حماية قصوى ضد أي اختراقات واستقرار تام تحت الضغط",
        "تصميم UI/UX حصري ومبتكر يفوق كافة المنافسين",
        "دعم تعدد اللغات (عربي / إنجليزي) باحترافية",
        "كتابة محتوى تسويقي متوافق مع السيو للصفحات الأساسية",
        "أولوية قصوى في الدعم الفني والتطوير المستقبلي"
      ],
      ctaText: "احجز استشارة البرمجة الخاصة"
    }
  ];

  // الأسئلة الشائعة (FAQ) الغنية بالكلمات المفتاحية
  const faqs = [
    {
      q: "ما الذي يميزكم كأفضل شركة تصميم مواقع الكترونية في السعودية؟",
      a: "نحن لا نستخدم قوالب جاهزة مكررة أو بطيئة، بل نجمع بين الهندسة البرمجية الحديثة (مثل Next.js وووردبريس المطور) وبين الخبرة العميقة في تحسين محركات البحث (SEO) وفهم سلوك المستهلك السعودي. النتيجة هي موقع إلكتروني سريع جداً، آمن، متوافق مع أنظمة المملكة، ومصمم خصيصاً ليحول الزوار إلى عملاء حقيقيين."
    },
    {
      q: "كم تستغرق مدة تصميم وتطوير الموقع الإلكتروني؟",
      a: "تعتمد المدة على حجم المشروع وتفاصيله؛ المواقع التعريفية للشركات وصفحات الهبوط تستغرق عادة من 7 إلى 14 يوم عمل، بينما المتاجر الإلكترونية المتكاملة والمنصات المخصصة تستغرق من 2 إلى 4 أسابيع لضمان أعلى جودة في البرمجة، الفحص، والربط التقني."
    },
    {
      q: "هل المواقع التي تصممونها متوافقة مع الجوال وشاشات الهواتف الذكية؟",
      a: "بالتأكيد 100%. أكثر من 85% من مستخدمي الإنترنت في المملكة العربية السعودية يتصفحون ويشتروون عبر الجوال. لذلك نتبع منهجية (Mobile-First Design) لضمان أن يكون موقعك فائق السرعة وسهل التصفح على جميع أجهزة الآيفون والأندرويد والتابلت."
    },
    {
      q: "هل تساعدونني في ربط بوابات الدفع مثل مدى وتابي وتمارا وشركات الشحن؟",
      a: "نعم، نتولى عنك كافة الإجراءات التقنية لربط بوابات الدفع المعتمدة في السعودية (مدى، فيزا، ماستركارد، Apple Pay، STC Pay) عبر مزودين موثوقين مثل Paymob و Moyasar و HyperPay و Tap، بالإضافة إلى تفعيل تابي وتمارا وربط شركات الشحن مثل أرامكس وسمسا وسبل."
    },
    {
      q: "هل سيكون الموقع مهيأً للظهور في الصفحة الأولى في جوجل (SEO)؟",
      a: "نعم، كل موقع نقوم ببرمجته يتم تأسيسه وفق معايير السيو التقني والداخلي (On-Page & Technical SEO)؛ من سرعة التحميل، هيكلة العناوين H1-H3، الروابط الصديقة لمحركات البحث، الصور المضغوطة بصيغة WebP، وصولاً إلى أكواد الـ Schema Markup لتسهيل أرشفة موقعك وتصدره في جوجل السعودية."
    },
    {
      q: "هل أحصل على ملكية كاملة للموقع والدومين ولوحة التحكم؟",
      a: "نعم بالتأكيد، أنت المالك الوحيد والحصري للموقع والدومين والاستضافة وكافة الأكواد والبيانات بنسبة 100%. كما نقوم بتسليمك كافة بيانات الدخول وتدريبك بشكل كامل على إدارة موقعك بسهولة."
    },
    {
      q: "كيف يتم التواصل ومتابعة العمل أثناء تنفيذ المشروع؟",
      a: "يتم التواصل بشكل مباشر ومستمر عبر الواتساب على الرقم 010120347946 واجتماعات الفيديو الدورية. نطلعك على كل مرحلة (التصميم، البرمجة، المعاينة الحية على رابط تجريبي) لتبدي ملاحظاتك أولاً بأول حتى نصل للنتيجة المثالية التي ترضيك تماماً."
    }
  ];

  return (
    <div className="min-h-screen bg-[#f5f7f5] text-slate-900 overflow-x-hidden" dir="rtl">
      {/* الأيقونات العائمة والهيدر */}
      <FloatingSocials />
      <Header />

      {/* =====================================================================
          1. قسم الهيرو (HERO SECTION) - مع فيديو websitedesigncompanysaudiarabia.mp4
      ===================================================================== */}
      <section className="relative w-full pt-32 pb-20 md:pt-40 md:pb-28 px-4 md:px-10 overflow-hidden bg-[#f5f7f5] border-b-4 border-emerald-500">
        {/* خلفية الشبكة الهندسية الخضراء */}
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

        {/* توهج زمردي خلفي */}
        <div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] pointer-events-none z-0"
          style={{
            background: "radial-gradient(circle, rgba(16, 185, 129, 0.14) 0%, transparent 70%)",
            filter: "blur(90px)",
          }}
        />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* العمود الأيمن: النصوص التسويقية القوية والـ CTA */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 flex flex-col items-start text-right"
            >
              <div className="inline-flex items-center gap-2 bg-emerald-100 border-2 border-emerald-500 text-emerald-900 px-4 py-1.5 rounded-full font-black text-xs md:text-sm mb-6 shadow-sm">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 animate-ping" />
                <span>حلول رقمية تواكب رؤية المملكة 2030</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-[1.25] mb-6">
                أفضل <span className="text-emerald-600 underline decoration-emerald-400 decoration-4 underline-offset-8">شركة تصميم مواقع الكترونية</span> في السعودية تصنع لك الصدارة
              </h1>

              <p className="text-base md:text-xl text-slate-700 font-bold leading-relaxed mb-8">
                نحول علامتك التجارية في <strong className="text-slate-900">الرياض، جدة، الدمام، وكافة مدن المملكة</strong> إلى منصة رقمية فائقة السرعة والأمان. نصمم ونبرمج مواقع شركات ومتاجر إلكترونية بأحدث تقنيات <strong className="text-emerald-700">Next.js و WordPress</strong>، متكاملة مع بوابات الدفع السعودية (<strong className="text-slate-900">مدى، تابي، تمارا</strong>) ومهيأة بالكامل لتصدر النتائج الأولى في محركات البحث <strong className="text-emerald-700">SEO</strong>.
              </p>

              {/* نقاط سريعة مطمئنة للعميل السعودي */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full mb-8">
                {[
                  "سرعة تحميل فائقة (99% على Google PageSpeed)",
                  "ربط بوابات الدفع السعودية (مدى، تابي، تمارا، Apple Pay)",
                  "تأسيس SEO تقني متكامل لتصدر جوجل السعودية",
                  "تصميم UI/UX مخصص يعكس فخامة هويتك التجارية"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 bg-white/90 border border-emerald-300 px-3.5 py-2.5 rounded-xl shadow-sm">
                    <FaCheckCircle className="text-emerald-600 flex-shrink-0 w-5 h-5" />
                    <span className="text-xs md:text-sm font-black text-slate-800">{item}</span>
                  </div>
                ))}
              </div>

              {/* أزرار الـ Call To Action */}
              <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
                <a
                  href={getWhatsappLink("مرحباً م. عمرو، أريد الاستفسار عن تصميم موقع إلكتروني في السعودية")}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="تواصل عبر واتساب لتصميم موقعك في السعودية"
                  className="w-full sm:w-auto flex items-center justify-center gap-3 bg-emerald-600 hover:bg-emerald-700 text-white font-black text-base md:text-lg px-8 py-4 rounded-2xl shadow-[0_12px_25px_-5px_rgba(16,185,129,0.45)] border-2 border-emerald-700 transition-all transform hover:-translate-y-1"
                >
                  <FaWhatsapp className="w-6 h-6" />
                  <span>تحدث معنا الآن: {displayPhone}</span>
                </a>

                <a
                  href="#packages"
                  title="استعرض باقات تصميم المواقع في السعودية"
                  className="w-full sm:w-auto flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-black text-base md:text-lg px-7 py-4 rounded-2xl border-2 border-emerald-500 shadow-md transition-all"
                >
                  <span>استكشف الباقات والمميزات</span>
                  <FaArrowLeft className="w-4 h-4 text-emerald-400" />
                </a>
              </div>
            </motion.div>

            {/* العمود الأيسر: عرض فيديو الهيرو websitedesigncompanysaudiarabia.mp4 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="lg:col-span-5"
            >
              <div className="bg-white rounded-3xl border-4 border-emerald-500 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.18)] overflow-hidden">
                {/* شريط نافذة المتصفح الأنيق */}
                <div className="bg-slate-900 px-4 py-3 border-b-2 border-emerald-500 flex items-center justify-between" dir="ltr">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-emerald-400 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-teal-500 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-slate-600 inline-block" />
                  </div>
                  <span className="text-xs font-mono text-emerald-300 font-bold tracking-wider">
                    websitedesigncompanysaudiarabia.mp4
                  </span>
                </div>

                {/* مشغل الفيديو الأول */}
                <div className="relative w-full aspect-video bg-slate-950">
                  <video
                    src="/websitedesigncompanysaudiarabia.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                    title="شركة تصميم مواقع الكترونية في السعودية"
                  />
                </div>

                {/* شريط سفلي تحت الفيديو */}
                <div className="p-4 bg-white flex items-center justify-between border-t border-emerald-100">
                  <div className="flex items-center gap-2">
                    <FaShieldAlt className="text-emerald-600 w-5 h-5" />
                    <span className="text-xs md:text-sm font-black text-slate-800">ضمان سرعة وأمان وحماية 100%</span>
                  </div>
                  <a
                    href={getWhatsappLink("مرحباً، شاهدت عرض تصميم المواقع في السعودية وأرغب في عرض سعر")}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="اطلب عرض سعر فوري"
                    className="text-xs md:text-sm font-black text-emerald-700 hover:text-emerald-900 underline"
                  >
                    اطلب عرض سعر فوري ←
                  </a>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* =====================================================================
          2. شريط الإحصائيات والأرقام (TRUST & STATS)
      ===================================================================== */}
      <section className="py-14 px-4 md:px-10 bg-slate-900 text-white border-b-4 border-emerald-500 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, idx) => (
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
          3. لماذا السوق السعودي يحتاج موقعاً بمواصفات خاصة؟ + الفيديو الثاني websitedesign.mp4
      ===================================================================== */}
      <section className="py-20 px-4 md:px-10 bg-white border-b-4 border-emerald-500">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="bg-emerald-100 text-emerald-800 border border-emerald-400 px-4 py-1 rounded-full text-sm font-black inline-block mb-4">
              تحليل عميق للسوق السعودي
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
              لماذا تختارنا كأفضل <span className="text-emerald-600">شركة تصميم مواقع في السعودية</span>؟
            </h2>
            <p className="text-slate-600 font-bold text-base md:text-lg leading-relaxed">
              المستهلك السعودي من أكثر المستخدمين وعياً وتطلباً للسرعة والجودة الرقمية. الموقع التقليدي البطيء يفقدك أكثر من 70% من عملائك المحتملين في الثواني الأولى. إليك كيف نصنع الفارق الحقيقي لمشروعك:
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* الفيديو الثاني websitedesign.mp4 */}
            <motion.div
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-6"
            >
              <div className="bg-[#f5f7f5] p-3 md:p-5 rounded-3xl border-4 border-emerald-500 shadow-xl">
                <div className="relative rounded-2xl overflow-hidden border-2 border-slate-900 aspect-video bg-slate-950">
                  <video
                    src="/websitedesign.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                    title="مراحل تصميم وتطوير المواقع الإلكترونية الاحترافية"
                  />
                </div>
                <div className="mt-4 flex flex-col sm:flex-row items-center justify-between gap-4 bg-white p-4 rounded-2xl border border-emerald-200">
                  <div>
                    <h3 className="font-black text-slate-900 text-base md:text-lg">هندسة برمجية تركز على المبيعات</h3>
                    <p className="text-xs md:text-sm text-slate-600 font-bold">نجمع بين جمال الواجهة وقوة الكود البرمجي وسهولة التصفح.</p>
                  </div>
                  <a
                    href={getWhatsappLink("مرحباً، أرغب في استشارة مجانية لتصميم موقع شركتي في السعودية")}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="استشارة مجانية عبر واتساب"
                    className="bg-emerald-600 hover:bg-emerald-700 text-white font-black text-xs md:text-sm px-5 py-3 rounded-xl whitespace-nowrap transition-colors flex items-center gap-2"
                  >
                    <FaWhatsapp className="w-4 h-4" />
                    <span>استشارة مجانية</span>
                  </a>
                </div>
              </div>
            </motion.div>

            {/* نقاط القوة التنافسية */}
            <div className="lg:col-span-6 space-y-5">
              {[
                {
                  icon: <FaBolt className="w-6 h-6 text-emerald-600" />,
                  title: "سرعة فائقة تمنع ارتداد الزوار (Zero Bounce Rate)",
                  desc: "نعتمد على خوادم سحابية سريعة وتقنيات تقديم محتوى عبر شبكة Cloudflare CDN القريبة من مدن المملكة، مما يضمن فتح موقعك فوراً على شبكات الجيل الخامس 5G في السعودية."
                },
                {
                  icon: <FaCreditCard className="w-6 h-6 text-emerald-600" />,
                  title: "تكامل شامل مع المنظومة المالية واللوجستية السعودية",
                  desc: "ربط برمجي مباشر عبر الـ API مع بوابات الدفع (مدى، تابي، تمارا، STC Pay، Apple Pay) وشركات الشحن المعتمدة وإصدار الفواتير الضريبية المتوافقة."
                },
                {
                  icon: <FaSearchDollar className="w-6 h-6 text-emerald-600" />,
                  title: "بنية برمجية صديقة لمحركات البحث منذ اليوم الأول",
                  desc: "بدلاً من دفع مبالغ طائلة على الإعلانات للأبد، نؤسس موقعك بهيكلة عناوين، سكيما، وسرعة تجعله يتصدر نتائج البحث المجانية في جوجل السعودية."
                },
                {
                  icon: <FaLock className="w-6 h-6 text-emerald-600" />,
                  title: "أمان سيبراني وحماية مشددة للبيانات",
                  desc: "تأمين شامل للموقع ضد هجمات حجب الخدمة (DDoS) والثغرات البرمجية، مع تشفير كامل لبيانات العملاء والطلبات ونسخ احتياطي دوري."
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-[#f5f7f5] border-2 border-emerald-500/80 hover:border-emerald-600 rounded-2xl p-5 flex items-start gap-4 shadow-sm transition-all"
                >
                  <div className="bg-white p-3 rounded-xl border-2 border-emerald-400 shadow-sm flex-shrink-0 mt-1">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-black text-slate-900 mb-1.5">
                      {feature.title}
                    </h3>
                    <p className="text-slate-700 font-bold text-sm md:text-base leading-relaxed">
                      {feature.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          4. خدمات تصميم وتطوير المواقع التفصيلية (SERVICES GRID)
      ===================================================================== */}
      <section className="py-24 px-4 md:px-10 bg-[#f5f7f5] border-b-4 border-emerald-500 relative">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="bg-emerald-600 text-white px-4 py-1.5 rounded-full text-xs md:text-sm font-black inline-block mb-4">
              حلول برمجية وتصميمية متكاملة
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6">
              خدماتنا في <span className="text-emerald-600">تصميم وتطوير المواقع</span> بالمملكة
            </h2>
            <p className="text-slate-700 font-bold text-base md:text-lg">
              نغطي كافة الاحتياجات الرقمية للشركات والمؤسسات والأفراد في السعودية، من المواقع التعريفية البسيطة وحتى المنصات والمتاجر العملاقة:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreServices.map((srv, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-3xl border-4 border-emerald-500 shadow-[0_20px_45px_-15px_rgba(0,0,0,0.1)] p-7 flex flex-col justify-between transition-all"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-6">
                    <div className="bg-emerald-50 border-2 border-emerald-500 text-emerald-700 p-4 rounded-2xl">
                      {srv.icon}
                    </div>
                    <span className="bg-slate-900 text-emerald-400 border border-emerald-500 text-xs font-black px-3 py-1.5 rounded-full">
                      {srv.badge}
                    </span>
                  </div>

                  <h3 className="text-2xl font-black text-slate-900 mb-3">
                    {srv.title}
                  </h3>

                  <p className="text-slate-600 font-bold text-sm md:text-base leading-relaxed mb-6">
                    {srv.description}
                  </p>

                  <ul className="space-y-2.5 mb-8 border-t border-emerald-100 pt-5">
                    {srv.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2 text-xs md:text-sm font-black text-slate-800">
                        <FaCheckCircle className="text-emerald-600 w-4 h-4 mt-0.5 flex-shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href={getWhatsappLink(`مرحباً م. عمرو، أرغب في طلب خدمة: ${srv.title} في السعودية`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={`اطلب خدمة ${srv.title}`}
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-black text-sm md:text-base py-3.5 px-4 rounded-xl flex items-center justify-center gap-2 shadow-md transition-colors"
                >
                  <FaWhatsapp className="w-5 h-5" />
                  <span>اطلب الخدمة الآن</span>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          5. التغطية الجغرافية في مدن المملكة (LOCAL SEO CITIES TABS)
      ===================================================================== */}
      <section className="py-24 px-4 md:px-10 bg-slate-900 text-white border-b-4 border-emerald-500">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="bg-emerald-500/20 text-emerald-300 border border-emerald-400 px-4 py-1 rounded-full text-xs md:text-sm font-black inline-block mb-4">
              تغطية شاملة لجميع مناطق المملكة
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
              نخدم عملاءنا في <span className="text-emerald-400">الرياض، جدة، الدمام</span> وكافة المدن
            </h2>
            <p className="text-slate-300 font-bold text-base md:text-lg">
              نمتلك خبرة واسعة في طبيعة الأنشطة التجارية في كل منطقة داخل المملكة العربية السعودية، ونصمم موقعك ليتصدر البحث المحلي في مدينتك:
            </p>
          </div>

          {/* أزرار اختيار المدينة */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
            {saudiCities.map((city, idx) => (
              <button
                key={idx}
                onClick={() => setActiveCity(idx)}
                className={`px-6 py-3 rounded-2xl font-black text-sm md:text-base transition-all border-2 ${
                  activeCity === idx
                    ? "bg-emerald-500 text-slate-950 border-white shadow-[0_0_20px_rgba(16,185,129,0.5)] scale-105"
                    : "bg-slate-800 text-slate-200 border-emerald-500/40 hover:border-emerald-400"
                }`}
              >
                📍 {city.name}
              </button>
            ))}
          </div>

          {/* محتوى المدينة المختارة */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCity}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="bg-slate-800 border-4 border-emerald-500 rounded-3xl p-8 md:p-12 shadow-2xl"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-8">
                  <h3 className="text-2xl md:text-3xl font-black text-emerald-400 mb-4">
                    {saudiCities[activeCity].title}
                  </h3>
                  <p className="text-slate-200 font-bold text-base md:text-lg leading-relaxed mb-6">
                    {saudiCities[activeCity].description}
                  </p>
                  <div className="bg-slate-900/90 border border-emerald-500/40 p-4 rounded-2xl mb-6">
                    <span className="text-emerald-400 font-black text-sm block mb-1">
                      أبرز القطاعات التي نطورها في {saudiCities[activeCity].name}:
                    </span>
                    <p className="text-slate-300 font-bold text-sm md:text-base">
                      {saudiCities[activeCity].projectsType}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {saudiCities[activeCity].keywords.map((kw, kIdx) => (
                      <span
                        key={kIdx}
                        className="bg-slate-900 text-emerald-300 border border-emerald-500/50 px-3 py-1 rounded-xl text-xs font-black"
                      >
                        # {kw}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-4 bg-slate-900 border-2 border-emerald-500 rounded-2xl p-6 text-center flex flex-col items-center justify-center">
                  <FaGlobe className="w-14 h-14 text-emerald-400 mb-4" />
                  <h4 className="text-xl font-black text-white mb-2">
                    هل مشروعك في {saudiCities[activeCity].name}؟
                  </h4>
                  <p className="text-slate-300 text-sm font-bold mb-6">
                    احصل على خطة عمل مجانية وعرض سعر مخصص لتصميم موقعك وتصدر المنافسين في {saudiCities[activeCity].name}.
                  </p>
                  <a
                    href={getWhatsappLink(`مرحباً م. عمرو، أريد تصميم موقع إلكتروني لنشاطي في ${saudiCities[activeCity].name}`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={`تصميم موقع في ${saudiCities[activeCity].name}`}
                    className="w-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black py-3.5 px-6 rounded-xl flex items-center justify-center gap-2 transition-colors shadow-lg"
                  >
                    <FaWhatsapp className="w-5 h-5" />
                    <span>تواصل معنا الآن</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* =====================================================================
          6. مقارنة التقنيات (Next.js vs WordPress vs Shopify)
      ===================================================================== */}
      <section className="py-24 px-4 md:px-10 bg-white border-b-4 border-emerald-500">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="bg-emerald-100 text-emerald-800 border border-emerald-400 px-4 py-1 rounded-full text-xs md:text-sm font-black inline-block mb-4">
              اختر التقنية الأنسب لمشروعك
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6">
              بأي تقنية نبرمج موقعك في <span className="text-emerald-600">السعودية</span>؟
            </h2>
            <p className="text-slate-600 font-bold text-base md:text-lg">
              نحن لا نفرض عليك منصة واحدة، بل ندرس احتياج مشروعك وميزانيتك لنرشح لك التقنية التي تحقق لك أعلى عائد على الاستثمار:
            </p>
          </div>

          {/* أزرار التبويبات التقنية */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
            {[
              { id: "nextjs", label: "برمجة خاصة Next.js", sub: "سرعة خارقة وسيو قياسي" },
              { id: "wordpress", label: "ووردبريس مطور WordPress", sub: "مرونة وسهولة إدارة" },
              { id: "shopify", label: "شوبيفاي / ووكومرس", sub: "متاجر إلكترونية متكاملة" }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`p-5 rounded-2xl border-4 text-right transition-all ${
                  activeTab === tab.id
                    ? "bg-slate-900 text-white border-emerald-500 shadow-xl"
                    : "bg-[#f5f7f5] text-slate-800 border-emerald-200 hover:border-emerald-400"
                }`}
              >
                <div className="font-black text-lg md:text-xl mb-1 flex items-center justify-between">
                  <span>{tab.label}</span>
                  <span className={`w-3 h-3 rounded-full ${activeTab === tab.id ? "bg-emerald-400" : "bg-slate-400"}`} />
                </div>
                <div className={`text-xs md:text-sm font-bold ${activeTab === tab.id ? "text-emerald-300" : "text-slate-500"}`}>
                  {tab.sub}
                </div>
              </button>
            ))}
          </div>

          {/* تفاصيل التقنية المختارة */}
          <div className="bg-[#f5f7f5] border-4 border-emerald-500 rounded-3xl p-8 md:p-12 shadow-lg">
            <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-2">
              {techDetails[activeTab].title}
            </h3>
            <p className="text-emerald-700 font-black text-base md:text-lg mb-6">
              {techDetails[activeTab].subtitle}
            </p>
            <p className="text-slate-700 font-bold text-base leading-relaxed mb-8">
              {techDetails[activeTab].desc}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {techDetails[activeTab].pros.map((pro, idx) => (
                <div key={idx} className="bg-white p-4 rounded-2xl border-2 border-emerald-400 flex items-center gap-3 shadow-sm">
                  <FaCheckCircle className="text-emerald-600 w-5 h-5 flex-shrink-0" />
                  <span className="font-black text-slate-800 text-sm md:text-base">{pro}</span>
                </div>
              ))}
            </div>

            <div className="bg-emerald-900 text-white p-5 rounded-2xl border-2 border-emerald-400 flex flex-col md:flex-row items-center justify-between gap-4">
              <div>
                <span className="text-emerald-300 font-black text-xs uppercase block mb-1">أنسب استخدام لهذه التقنية:</span>
                <p className="font-bold text-sm md:text-base">{techDetails[activeTab].bestFor}</p>
              </div>
              <a
                href={getWhatsappLink(`مرحباً م. عمرو، أريد استشارة حول تصميم موقع بتقنية ${techDetails[activeTab].title}`)}
                target="_blank"
                rel="noopener noreferrer"
                title="استشرنا عبر واتساب"
                className="bg-white text-slate-900 hover:bg-emerald-100 font-black px-6 py-3 rounded-xl text-sm whitespace-nowrap transition-colors"
              >
                اطلب هذه التقنية لموقعك ←
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          7. التكامل مع المنظومة الرقمية السعودية (SAUDI ECOSYSTEM INTEGRATIONS)
      ===================================================================== */}
      <section className="py-20 px-4 md:px-10 bg-[#f5f7f5] border-b-4 border-emerald-500">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">
              ربط تقني شامل مع <span className="text-emerald-600">بوابات الدفع والشحن في المملكة</span>
            </h2>
            <p className="text-slate-700 font-bold text-base md:text-lg">
              نسلمك موقعك أو متجرك الإلكتروني جاهزاً للعمل الفوري ومرتبطاً بكافة الأنظمة التي يثق بها العميل السعودي:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-7 rounded-3xl border-4 border-emerald-500 shadow-md">
              <div className="bg-emerald-100 w-14 h-14 rounded-2xl flex items-center justify-center border-2 border-emerald-500 mb-5">
                <FaCreditCard className="w-7 h-7 text-emerald-700" />
              </div>
              <h3 className="text-xl font-black text-slate-900 mb-3">بوابات الدفع المعتمدة</h3>
              <p className="text-slate-600 font-bold text-sm leading-relaxed mb-4">
                تفعيل الدفع المباشر والآمن عبر البطاقات البنكية والمحافظ الرقمية في السعودية:
              </p>
              <div className="flex flex-wrap gap-2">
                {["مدى Mada", "Apple Pay", "STC Pay", "Visa / MasterCard", "Paymob", "Moyasar", "HyperPay", "Tap Payments"].map((item, i) => (
                  <span key={i} className="bg-[#f5f7f5] border border-emerald-400 text-slate-800 px-3 py-1 rounded-lg text-xs font-black">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white p-7 rounded-3xl border-4 border-emerald-500 shadow-md">
              <div className="bg-emerald-100 w-14 h-14 rounded-2xl flex items-center justify-center border-2 border-emerald-500 mb-5">
                <FaHandshake className="w-7 h-7 text-emerald-700" />
              </div>
              <h3 className="text-xl font-black text-slate-900 mb-3">أنظمة التقسيط (اشتر الآن وادفع لاحقاً)</h3>
              <p className="text-slate-600 font-bold text-sm leading-relaxed mb-4">
                ارفع مبيعات متجرك بنسبة تصل إلى 45% عبر تفعيل الدفع بالتقسيط بدون فوائد لعملائك:
              </p>
              <div className="flex flex-wrap gap-2">
                {["تابي Tabby", "تمارا Tamara", "تقسيط 4 دفعات", "موافقة فورية", "حاسبة الأقساط في صفحة المنتج"].map((item, i) => (
                  <span key={i} className="bg-[#f5f7f5] border border-emerald-400 text-slate-800 px-3 py-1 rounded-lg text-xs font-black">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white p-7 rounded-3xl border-4 border-emerald-500 shadow-md">
              <div className="bg-emerald-100 w-14 h-14 rounded-2xl flex items-center justify-center border-2 border-emerald-500 mb-5">
                <FaTruck className="w-7 h-7 text-emerald-700" />
              </div>
              <h3 className="text-xl font-black text-slate-900 mb-3">شركات الشحن والربط اللوجستي</h3>
              <p className="text-slate-600 font-bold text-sm leading-relaxed mb-4">
                إصدار بوالص الشحن تلقائياً وتتبع الشحنات لحظياً مع كبرى شركات التوصيل في المملكة:
              </p>
              <div className="flex flex-wrap gap-2">
                {["سمسا SMSA", "أرامكس Aramex", "سبل SPL", "DHL", "أوتو OTO", "برق Barq", "أينما كنت"].map((item, i) => (
                  <span key={i} className="bg-[#f5f7f5] border border-emerald-400 text-slate-800 px-3 py-1 rounded-lg text-xs font-black">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          8. القطاعات التجارية التي نخدمها (INDUSTRIES SECTION)
      ===================================================================== */}
      <section className="py-24 px-4 md:px-10 bg-white border-b-4 border-emerald-500">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4">
              حلول مخصصة لكل <span className="text-emerald-600">قطاع تجاري في السعودية</span>
            </h2>
            <p className="text-slate-600 font-bold text-base md:text-lg">
              كل مجال عمل له طبيعة خاصة في العرض والإقناع؛ اختر قطاعك لتعرف كيف نصمم موقعك:
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-5 space-y-3">
              {industries.map((ind, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedIndustry(idx)}
                  className={`w-full text-right p-4 rounded-2xl font-black text-base transition-all border-2 flex items-center justify-between ${
                    selectedIndustry === idx
                      ? "bg-emerald-600 text-white border-emerald-700 shadow-md"
                      : "bg-[#f5f7f5] text-slate-800 border-emerald-200 hover:border-emerald-400"
                  }`}
                >
                  <span>{ind.title}</span>
                  <span>←</span>
                </button>
              ))}
            </div>

            <div className="lg:col-span-7 bg-[#f5f7f5] border-4 border-emerald-500 rounded-3xl p-8 md:p-10 shadow-lg">
              <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-4">
                {industries[selectedIndustry].title}
              </h3>
              <p className="text-slate-700 font-bold text-base md:text-lg leading-relaxed mb-6">
                {industries[selectedIndustry].desc}
              </p>
              <h4 className="font-black text-emerald-700 text-base mb-4">
                أهم المميزات التي نوفرها لهذا القطاع:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {industries[selectedIndustry].points.map((pt, i) => (
                  <div key={i} className="bg-white p-3.5 rounded-xl border border-emerald-300 flex items-center gap-2.5">
                    <FaCheckCircle className="text-emerald-600 w-4 h-4 flex-shrink-0" />
                    <span className="font-black text-slate-800 text-xs md:text-sm">{pt}</span>
                  </div>
                ))}
              </div>
              <a
                href={getWhatsappLink(`مرحباً م. عمرو، أعمل في قطاع (${industries[selectedIndustry].title}) في السعودية وأريد تصميم موقع احترافي`)}
                target="_blank"
                rel="noopener noreferrer"
                title="اطلب تصميم موقع لقطاعك"
                className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-black px-7 py-3.5 rounded-xl border-2 border-emerald-500 transition-all"
              >
                <FaWhatsapp className="w-5 h-5 text-emerald-400" />
                <span>احصل على نموذج وعرض سعر لقطاعك</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          9. خطوات العمل (WORKFLOW TIMELINE)
      ===================================================================== */}
      <section className="py-24 px-4 md:px-10 bg-[#f5f7f5] border-b-4 border-emerald-500">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="bg-emerald-100 text-emerald-800 border border-emerald-400 px-4 py-1 rounded-full text-xs md:text-sm font-black inline-block mb-4">
              منهجية عمل احترافية وواضحة
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4">
              رحلة بناء موقعك من <span className="text-emerald-600">الفكرة إلى الصدارة</span>
            </h2>
            <p className="text-slate-700 font-bold text-base md:text-lg">
              نلتزم بخطوات هندسية مرتبة تضمن تسليم مشروعك في الموعد المحدد وبأعلى جودة ممكنة:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {workflowSteps.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white border-4 border-emerald-500 rounded-3xl p-6 flex flex-col justify-between shadow-md relative"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-slate-900 text-emerald-400 font-black text-xl flex items-center justify-center border-2 border-emerald-500 mb-5">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-black text-slate-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 font-bold text-xs md:text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          10. الباقات والعروض (PACKAGES SECTION)
      ===================================================================== */}
      <section id="packages" className="py-24 px-4 md:px-10 bg-white border-b-4 border-emerald-500">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="bg-emerald-600 text-white px-4 py-1.5 rounded-full text-xs md:text-sm font-black inline-block mb-4">
              استثمار ذكي لنمو أعمالك
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4">
              باقات <span className="text-emerald-600">تصميم المواقع في السعودية</span>
            </h2>
            <p className="text-slate-600 font-bold text-base md:text-lg">
              باقات مرنة وشاملة مصممة لتلبي تطلعات الشركات الناشئة، المؤسسات المتوسطة، والمتاجر الكبرى في المملكة:
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {packages.map((pkg, idx) => (
              <div
                key={idx}
                className={`rounded-3xl p-8 flex flex-col justify-between border-4 transition-all ${
                  pkg.featured
                    ? "bg-slate-900 text-white border-emerald-500 shadow-[0_25px_60px_-15px_rgba(16,185,129,0.35)] lg:-translate-y-4"
                    : "bg-[#f5f7f5] text-slate-900 border-emerald-500 shadow-lg"
                }`}
              >
                <div>
                  <span
                    className={`inline-block px-4 py-1 rounded-full text-xs font-black mb-4 ${
                      pkg.featured
                        ? "bg-emerald-500 text-slate-950"
                        : "bg-emerald-100 text-emerald-900 border border-emerald-400"
                    }`}
                  >
                    {pkg.badge}
                  </span>

                  <h3 className="text-2xl font-black mb-3">{pkg.name}</h3>
                  <p className={`text-sm font-bold mb-6 leading-relaxed ${pkg.featured ? "text-slate-300" : "text-slate-600"}`}>
                    {pkg.desc}
                  </p>

                  <div className={`border-t pt-6 mb-8 space-y-3 ${pkg.featured ? "border-slate-700" : "border-emerald-200"}`}>
                    {pkg.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 text-xs md:text-sm font-black">
                        <FaCheckCircle className={`w-4 h-4 mt-0.5 flex-shrink-0 ${pkg.featured ? "text-emerald-400" : "text-emerald-600"}`} />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <a
                  href={getWhatsappLink(`مرحباً م. عمرو، أرغب في الاستفسار عن (${pkg.name}) لتصميم موقع في السعودية`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={pkg.ctaText}
                  className={`w-full py-4 px-6 rounded-2xl font-black text-center flex items-center justify-center gap-2 transition-all shadow-md ${
                    pkg.featured
                      ? "bg-emerald-500 hover:bg-emerald-400 text-slate-950"
                      : "bg-emerald-600 hover:bg-emerald-700 text-white"
                  }`}
                >
                  <FaWhatsapp className="w-5 h-5" />
                  <span>{pkg.ctaText}</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          11. الدليل الشامل والـ SEO Content (مقال تفصيلي داخل الصفحة لتصدر جوجل)
      ===================================================================== */}
      <section className="py-20 px-4 md:px-10 bg-[#f5f7f5] border-b-4 border-emerald-500">
        <div className="max-w-5xl mx-auto bg-white border-4 border-emerald-500 rounded-3xl p-8 md:p-12 shadow-lg">
          <h2 className="text-2xl md:text-4xl font-black text-slate-900 mb-6 border-r-4 border-emerald-500 pr-4">
            دليلك لاختيار أفضل شركة تصميم مواقع الكترونية في السعودية (2026)
          </h2>

          <div className="space-y-6 text-slate-700 font-bold text-base leading-relaxed">
            <p>
              تشهد المملكة العربية السعودية طفرة رقمية غير مسبوقة في ظل <strong className="text-slate-900">رؤية السعودية 2030</strong>، حيث أصبح التواجد الرقمي الاحترافي هو العمود الفقري لنجاح أي شركة أو مؤسسة أو متجر إلكتروني. عندما يبحث عملاؤك المحتملون في جوجل عن خدماتك في الرياض أو جدة أو الدمام، فإن انطباعهم الأول يتشكل خلال أقل من 3 ثوانٍ من دخولهم إلى موقعك الإلكتروني.
            </p>

            <h3 className="text-xl md:text-2xl font-black text-emerald-700 pt-2">
              1. أهمية السرعة وتجربة المستخدم (UX) في السوق السعودي
            </h3>
            <p>
              تشير الإحصائيات إلى أن المستخدم في المملكة يتمتع باتصال إنترنت فائق السرعة ويتوقع استجابة لحظية من المواقع التي يزورها. لذلك، فإن الاعتماد على <strong className="text-slate-900">شركة تصميم مواقع الكترونية في السعودية</strong> تتقن تقنيات الجيل الحديث مثل <strong className="text-emerald-700">Next.js</strong> وتحسين الصور بصيغ WebP وضبط خوادم الـ CDN يضمن لك عدم خسارة أي عميل بسبب بطء التحميل، ويرفع من تقييم موقعك لدى خوارزميات جوجل.
            </p>

            <h3 className="text-xl md:text-2xl font-black text-emerald-700 pt-2">
              2. التكامل بين تصميم الموقع وتحسين محركات البحث (SEO)
            </h3>
            <p>
              الخطأ الشائع الذي تقع فيه الكثير من الشركات هو الفصل بين مرحلة تصميم الموقع ومرحلة الـ SEO. نحن نبني موقعك منذ اللحظة الأولى بهندسة معلومات (Information Architecture) مدروسة؛ حيث يتم توزيع الكلمات المفتاحية الاستهدافية، وضبط وسوم العناوين (H1, H2, H3)، وتوليد البيانات المنظمة (Schema Markup) بحيث يفهم محرك البحث جوجل تخصص موقعك ويرشحه في النتائج الأولى للباحثين في السعودية.
            </p>

            <h3 className="text-xl md:text-2xl font-black text-emerald-700 pt-2">
              3. معدل التحويل (CRO) وتحويل الزوار إلى مبيعات فعلية
            </h3>
            <p>
              الهدف النهائي من أي موقع إلكتروني ليس مجرد التواجد الشكلي، بل زيادة المبيعات وطلبات التواصل. من خلال توزيع أزرار الـ Call To Action بذكاء، وتسهيل التواصل المباشر عبر الواتساب، وإبراز عناصر الثقة كآراء العملاء وسابقة الأعمال وشهادات الأمان، نحول موقعك إلى مندوب مبيعات نشط يعمل لصالحك على مدار 24 ساعة طوال أيام الأسبوع.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================================
          12. الأسئلة الشائعة (FAQ ACCORDION)
      ===================================================================== */}
      <section className="py-24 px-4 md:px-10 bg-white border-b-4 border-emerald-500">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <span className="bg-emerald-100 text-emerald-800 border border-emerald-400 px-4 py-1 rounded-full text-xs md:text-sm font-black inline-block mb-3">
              إجابات وافية لكل استفساراتك
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900">
              الأسئلة الشائعة حول <span className="text-emerald-600">تصميم المواقع في السعودية</span>
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-[#f5f7f5] border-2 border-emerald-500 rounded-2xl overflow-hidden shadow-sm"
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
                      className="px-5 pb-6 md:px-6 text-slate-700 font-bold text-sm md:text-base leading-relaxed border-t border-emerald-200 pt-4 bg-white"
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
          13. بانر الختام والـ Call To Action النهائي القوي
      ===================================================================== */}
      <section className="py-20 px-4 md:px-10 bg-slate-900 text-white relative overflow-hidden">
        <div className="max-w-5xl mx-auto relative z-10 bg-gradient-to-br from-emerald-700 to-emerald-900 border-4 border-emerald-400 rounded-3xl p-8 md:p-14 text-center shadow-2xl">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">
            هل أنت جاهز لإطلاق موقعك الإلكتروني وتصدر السوق السعودي؟
          </h2>
          <p className="text-emerald-100 font-bold text-base md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed">
            لا تترك الفرصة لمنافسيك! تواصل معنا الآن عبر الواتساب للحصول على استشارة مجانية شاملة وخطة عمل واضحة لتصميم موقعك أو متجرك الإلكتروني بأعلى معايير الجودة والـ SEO.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={getWhatsappLink("مرحباً م. عمرو، أريد البدء في تصميم موقعي الإلكتروني في السعودية")}
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
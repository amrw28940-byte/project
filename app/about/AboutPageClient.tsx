"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
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
  FaDatabase,
  FaMapMarkerAlt,
  FaUsers,
  FaUser,
  FaUserCheck,
  FaFileInvoiceDollar,
  FaBullseye,
  FaRegClock,
  FaCheckDouble,
  FaTools,
  FaStore,
  FaLanguage,
  FaEnvelope,
  FaPhoneAlt,
  FaPaperPlane,
  FaClipboardCheck,
  FaSlidersH,
  FaCubes,
  FaWordpress,
  FaReact,
  FaBrain,
  FaCompass,
  FaExternalLinkAlt,
  FaVideo,
  FaHistory,
  FaLightbulb,
  FaMedal,
  FaProjectDiagram
} from "react-icons/fa";

export default function AboutPageClient() {
  // =====================================================================
  // حالات التفاعل (States) داخل صفحة "من نحن" الشاملة
  // =====================================================================
  const [activeTimelineEra, setActiveTimelineEra] = useState<number>(3);
  const [activeTechDomain, setActiveTechDomain] = useState<number>(0);
  const [activePhilosophyTab, setActivePhilosophyTab] = useState<number>(0);
  const [activeMarketHub, setActiveMarketHub] = useState<number>(0);
  const [activeMethodologyStep, setActiveMethodologyStep] = useState<number>(0);
  const [activeValuePillar, setActiveValuePillar] = useState<number>(0);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // حالات أداة مستشار اختيار الخدمة والتقنية مع م. عمرو محمد السيد
  const [advisorBusinessType, setAdvisorBusinessType] = useState<number>(0);
  const [advisorPrimaryGoal, setAdvisorPrimaryGoal] = useState<number>(0);
  const [advisorTargetRegion, setAdvisorTargetRegion] = useState<number>(0);

  // حالات نموذج التواصل المباشر في صفحة من نحن (Direct to WhatsApp)
  const [contactName, setContactName] = useState<string>("");
  const [contactPhone, setContactPhone] = useState<string>("");
  const [contactEmail, setContactEmail] = useState<string>("");
  const [contactService, setContactService] = useState<string>("تصميم وتطوير موقع Next.js فائق السرعة");
  const [contactNotes, setContactNotes] = useState<string>("");
  const [formError, setFormError] = useState<string>("");

  // إعدادات رقم الواتساب الرسمي المعتمد
  const whatsappNumber = "201020347946";
  const displayPhone = "01020347946";

  const getWhatsappLink = (customMessage: string) => {
    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(customMessage)}`;
  };

  // دالة إرسال نموذج التعاون المباشر إلى الواتساب
  const handleDirectCollaborationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactName.trim() || !contactPhone.trim()) {
      setFormError("يرجى إدخال الاسم ورقم الجوال (الواتساب) لبدء التواصل المباشر.");
      return;
    }
    setFormError("");

    const message = `مرحباً م. عمرو محمد السيد، تصفحت صفحة (من نحن) وأرغب في التعاون معك في مشروع جديد:
----------------------------------
👤 *الاسم / الشركة:* ${contactName}
📱 *رقم الجوال:* ${contactPhone}
📧 *البريد الإلكتروني:* ${contactEmail || "غير محدد"}
🚀 *الخدمة المطلوبة:* ${contactService}
📝 *نبذة عن المشروع:* ${contactNotes.trim() ? contactNotes : "أرغب في استشارة لتحديد خطة العمل"}
----------------------------------
أرجو التواصل معي لمناقشة التفاصيل وعرض السعر.`;

    window.open(getWhatsappLink(message), "_blank", "noopener,noreferrer");
  };

  // =====================================================================
  // 1. الإحصائيات والأرقام الموثقة لمسيرة 11 عاماً (2015 - 2026)
  // =====================================================================
  const careerStats = [
    {
      number: "11+ سنة",
      label: "خبرة تقنية متواصلة (منذ 2015)",
      desc: "مسيرة احترافية في هندسة البرمجيات وتطوير الويب وتصدر محركات البحث",
      icon: <FaHistory className="w-8 h-8 text-emerald-400" />
    },
    {
      number: "+180",
      label: "مشروع ومنصة رقمية ناجحة",
      desc: "مواقع شركات، مصانع، منصات سياحية، ومتاجر إلكترونية في مصر والخليج",
      icon: <FaAward className="w-8 h-8 text-emerald-400" />
    },
    {
      number: "99.9%",
      label: "كفاءة أداء وسرعة برمجية",
      desc: "التزام صارم بمعايير Google Core Web Vitals والكود النقي الخالي من الأخطاء",
      icon: <FaBolt className="w-8 h-8 text-emerald-400" />
    },
    {
      number: "4 أسواق",
      label: "حضور إقليمي في مصر والخليج",
      desc: "حلول مفصلة لأسواق مصر، السعودية، الإمارات، ودولة الكويت",
      icon: <FaGlobe className="w-8 h-8 text-emerald-400" />
    }
  ];

  // =====================================================================
  // 2. الخط الزمني التفاعلي لمسيرة 11 عاماً (Interactive 11-Year Timeline: 2015 - 2026)
  // =====================================================================
  const timelineEras = [
    {
      period: "2015 — 2017",
      eraBadge: "البدايات وتأسيس القاعدة الهندسية",
      title: "الانطلاق في عالم برمجة الويب وهندسة الأكواد الأساسية",
      description:
        "بدأت رحلة م. عمرو محمد السيد في عام 2015 بشغف عميق لفهم كيف تعمل شبكة الويب من الجذور. خلال هذه المرحلة، تم التركيز على إتقان لغات الويب الأساسية (HTML5, CSS3, JavaScript, PHP & MySQL) وبناء القوالب المخصصة من الصفر، مع دراسة معمارية خوادم الاستضافة وقواعد البيانات.",
      milestones: [
        "برمجة وتطوير أول 25 موقعاً إلكترونياً للشركات المحلية والأنشطة التجارية",
        "التخصص المبكر في تطوير وتطويع نظام WordPress وبناء قوالب PHP مخصصة",
        "دراسة خوارزميات محرك بحث جوجل وبدايات التخصص في الـ On-Page & Technical SEO",
        "التركيز على كتابة كود برمجي نظيف وسريع يتفوق على القوالب الجاهزة"
      ],
      techFocus: "HTML5 • CSS3 • JavaScript • PHP • MySQL • Custom WordPress"
    },
    {
      period: "2018 — 2020",
      eraBadge: "ثورة التجارة الإلكترونية والتوسع الإقليمي",
      title: "هندسة المتاجر الإلكترونية والانطلاق نحو أسواق الخليج العربي",
      description:
        "مع الطفرة الكبيرة في التسوق عبر الإنترنت، توسع العمل ليشمل هندسة المتاجر الإلكترونية المتكاملة على منصتي WooCommerce و Shopify، والبدء في خدمة الشركات والبراندات في المملكة العربية السعودية والإمارات والكويت، مع إتقان ربط بوابات الدفع الإلكتروني وشركات الشحن.",
      milestones: [
        "إطلاق عشرات المتاجر الإلكترونية عالية المبيعات في مصر والسعودية والكويت",
        "إتقان لغة Shopify Liquid وتعريب القوالب العالمية باتجاه RTL أصيل",
        "تحقيق نتائج قياسية للعملاء في تصدر الصفحة الأولى لجوجل (SEO) بدون إعلانات",
        "إدارة وتأمين السيرفرات السحابية وحل مشاكل الأداء للمواقع ذات الزيارات العالية"
      ],
      techFocus: "WooCommerce • Shopify Liquid • Technical SEO • Payment & Shipping APIs"
    },
    {
      period: "2021 — 2023",
      eraBadge: "الجيل الحديث للويب والبرمجة التفاعلية",
      title: "تبني معمارية React & Next.js وهندسة التحويل (CRO)",
      description:
        "لمواكبة التطور العالمي في سرعة الويب، انتقل الاستوديو إلى اعتماد تقنيات الجيل الحديث (React.js, Next.js, TypeScript, Tailwind CSS) ونظام المحتوى المرن (Sanity CMS & Headless Architecture)، مع دمج علم النفس البيعي وتحسين معدل التحويل (CRO) في تصميم صفحات الهبوط.",
      milestones: [
        "تطوير منصات ويب فائقة السرعة بتقنية Next.js SSR تفتح في أقل من ثانية",
        "بناء أنظمة Headless E-Commerce تربط بين واجهة Next.js ومحرك Shopify/WP",
        "تصميم صفحات هبوط تسويقية حققت مضاعفة في عائد الحملات الإعلانية (ROAS)",
        "تجاوز حاجز الـ 120 مشروعاً ناجحاً في قطاعات السياحة، العقارات، المصانع، والطب"
      ],
      techFocus: "Next.js • React • TypeScript • Tailwind CSS • Sanity CMS • CRO Funnels"
    },
    {
      period: "2024 — 2026",
      eraBadge: "الريادة الرقمية، الذكاء الاصطناعي، والـ GEO",
      title: "التكامل الشامل: Next.js 15، محركات البحث الذكية، وإنتاج الـ AI",
      description:
        "اليوم، بعد مرور 11 عاماً من الخبرة المتراكمة، يقود م. عمرو محمد السيد (عمرو سالم) استوديو رقمياً متكاملاً يجمع بين أقصى درجات الأداء البرمجي (Next.js 15 App Router)، والتهيئة لمحركات بحث الجيل الجديد والذكاء الاصطناعي (SEO & GEO)، وإنتاج الإعلانات السينمائية بالذكاء الاصطناعي.",
      milestones: [
        "تطوير معماريات ويب متقدمة تحقق 99.9% على مؤشرات Google Core Web Vitals",
        "تهيئة مواقع العملاء للظهور في Google AI Overviews و ChatGPT و Perplexity",
        "إطلاق قسم إنتاج الفيديوهات الإعلانية السينمائية بالذكاء الاصطناعي (AI Video Studio)",
        "بناء شراكات استراتيجية طويلة الأمد مع كبرى الشركات والبراندات في مصر والخليج"
      ],
      techFocus: "Next.js 15 • Headless Commerce • Semantic SEO & GEO • AI Video Production"
    }
  ];

  // =====================================================================
  // 3. الترسانة التقنية والهندسية لمؤسس الاستوديو (6 تخصصات عميقة)
  // =====================================================================
  const engineeringDomains = [
    {
      domainTitle: "1. هندسة تطبيقات الويب الحديثة (Next.js 15 & React Architecture)",
      badge: "الأداء الخارق 99.9%",
      summary:
        "بناء مواقع ومنصات رقمية تعمل بسرعة البرق باستخدام أحدث تقنيات العرض من السيرفر (SSR) والتوليد الثابت (SSG)، مما يضمن تجربة مستخدم تشبه تطبيقات الجوال وأفضلية مطلقة في أرشفة جوجل.",
      skills: [
        "Next.js 15 (App Router & Server Actions)",
        "React 19 & TypeScript (Type-Safe Code)",
        "Tailwind CSS & Framer Motion Animations",
        "Sanity CMS v3 & Headless Content Modeling",
        "Vercel Cloud Deployment & Edge Caching",
        "RESTful & GraphQL APIs Integration"
      ]
    },
    {
      domainTitle: "2. هندسة المتاجر الإلكترونية (Shopify & WooCommerce Engineering)",
      badge: "ماكينات بيع أونلاين",
      summary:
        "تطوير متاجر إلكترونية متكاملة ومصممة لرفع معدل إتمام الشراء (Checkout Conversion)، سواء عبر برمجة قوالب Shopify Liquid المخصصة أو بناء متاجر Headless أو تطوير WooCommerce فائق السرعة.",
      skills: [
        "Shopify Liquid OS 2.0 Custom Theme Development",
        "Shopify Storefront API (Headless Next.js Stores)",
        "High-Performance WooCommerce (HPOS Database)",
        "True RTL Arabic Localization & Multi-Currency",
        "Paymob, Fawry, ValU, Mada, Tabby, Tamara & KNET Sync",
        "Bosta, Mylerz, SMSA, Aramex & OTO Shipping Automation"
      ]
    },
    {
      domainTitle: "3. تطوير وتطويع ووردبريس المتقدم (Custom WordPress & PHP)",
      badge: "كود نقي بدون بطء",
      summary:
        "تحويل نظام ووردبريس إلى منصة مؤسسية صلبة وسريعة جداً عبر كتابة أكواد PHP Shortcodes مخصصة، وبناء أنواع منشورات وحقول ديناميكية تغني عن الإضافات الثقيلة وتحمي الموقع من الاختراق.",
      skills: [
        "Custom PHP Shortcodes & Functions Engineering",
        "Astra & Hello Theme Deep Customization",
        "Custom Post Types (CPT) & ACF Pro Architecture",
        "WordPress Database Cleanup & Query Optimization",
        "Cloudflare WAF & Cybersecurity Hardening",
        "Multilingual Architecture (WPML / Polylang RTL/LTR)"
      ]
    },
    {
      domainTitle: "4. هندسة السيو التقني والدلالي (Technical, Local & Semantic SEO)",
      badge: "صدارة الصفحة الأولى #1",
      summary:
        "دمج خبرة المبرمج مع عقلية خبير السيو للسيطرة على نتائج البحث الأولى في جوجل ومحركات الذكاء الاصطناعي، عبر بناء السلطة الموضوعية (Topical Authority) والبيانات المنظمة المتقدمة.",
      skills: [
        "Advanced JSON-LD Schema Graph Engineering",
        "Core Web Vitals Optimization (LCP, INP, CLS)",
        "Buyer-Intent Keyword Research & Silo Architecture",
        "Local SEO & Google Maps 3-Pack Dominance",
        "Semantic Content & NLP Entities Optimization",
        "Generative Engine Optimization (GEO for AI Search)"
      ]
    },
    {
      domainTitle: "5. هندسة صفحات الهبوط والتتبع الإعلاني (CRO & Server-Side Tracking)",
      badge: "مضاعفة عائد الإعلانات ROAS",
      summary:
        "تصميم وبرمجة أقماع بيعية وصفحات هبوط إقناعية تلتقط بيانات العملاء بأعلى معدل تحويل، مع إعداد التتبع عبر السيرفر لتدريب خوارزميات المنصات الإعلانية بدقة 100%.",
      skills: [
        "High-Converting Sales Funnels & Copywriting",
        "Meta Conversion API (CAPI) & TikTok Events API",
        "Snapchat Pixel & Google Ads Enhanced Conversions",
        "Google Tag Manager (Web & Server Containers)",
        "Direct WhatsApp & CRM Automation (Bitrix24 / HubSpot)",
        "One-Step COD Forms & Frictionless Checkouts"
      ]
    }
  ];

  // =====================================================================
  // 4. المبادئ الهندسية والأخلاقية التي تحكم عملنا (The Studio Manifesto)
  // =====================================================================
  const studioPrinciples = [
    {
      icon: <FaUserCheck className="w-8 h-8 text-emerald-600" />,
      title: "1. تعامل مباشر مع المؤسس والمطور (Zero Middlemen)",
      desc: "في الشركات التقليدية، تتحدث مع مندوب مبيعات لا يفهم البرمجة، ثم تضيع طلباتك بين الموظفين. هنا تتعامل مباشرة مع م. عمرو محمد السيد؛ من يفهم رؤيتك هو نفسه من يهندس الكود ويضمن الجودة."
    },
    {
      icon: <FaBolt className="w-8 h-8 text-emerald-600" />,
      title: "2. الكود النظيف والسرعة عقيدة لا تقبل المساومة",
      desc: "نرفض تماماً استخدام القوالب المقرصنة أو الإضافات العشوائية التي تبطئ المواقع. كل مشروع يُبنى بمعايير هندسية صارمة ليحقق أقصى سرعة تحميل على الهواتف الذكية."
    },
    {
      icon: <FaChartLine className="w-8 h-8 text-emerald-600" />,
      title: "3. الموقع أداة استثمارية لجلب الأرباح وليس مجرد ديكور",
      desc: "الجمال البصري وحده لا يكفي إذا لم يرن هاتفك بطلبات العملاء! لذلك نصمم كل صفحة بزر واتساب واضح، مسار بيعي مدروس، وتهيئة سيو تجلب لك مشترين حقيقيين."
    },
    {
      icon: <FaLock className="w-8 h-8 text-emerald-600" />,
      title: "4. ملكية كاملة 100% للعميل وشفافية مطلقة",
      desc: "أنت المالك الوحيد والحصري للدومين، الاستضافة، حسابات المتجر، وكافة الأكواد البرمجية. نسلمك كل الصلاحيات الرسمية مع تدريب عملي شامل لتدير مشروعك بحرية وأمان."
    },
    {
      icon: <FaSearchDollar className="w-8 h-8 text-emerald-600" />,
      title: "5. السيو مدمج في الحمض النووي للموقع منذ اليوم الأول",
      desc: "لا نبني الموقع ثم نفكر في السيو لاحقاً؛ بل نضع هيكلة الكلمات المفتاحية، ترويسات العناوين، والـ Schema Markup قبل كتابة أول سطر كود ليولد موقعك جاهزاً للتصدر."
    },
    {
      icon: <FaHandshake className="w-8 h-8 text-emerald-600" />,
      title: "6. شراكة نجاح طويلة الأمد ودعم فني حقيقي",
      desc: "علاقتنا بك لا تنتهي عند تسليم الموقع واستلام الدفعة الأخيرة؛ بل نعتبر أنفسنا الشريك التقني المسؤول عن استقرار موقعك وتطويره ونمو مبيعاتك شهرًا بعد شهر."
    }
  ];

  // =====================================================================
  // 5. التغطية الإقليمية وخبرة الأسواق (مصر، السعودية، الإمارات، الكويت)
  // =====================================================================
  const regionalExperience = [
    {
      country: "جمهورية مصر العربية (القاهرة، الإسكندرية، وكافة المحافظات)",
      flag: "🇪🇬",
      role: "المقر الرئيسي ومركز البحث والتطوير الهندسي",
      desc: "على مدار 11 عاماً، ساهمنا في التحول الرقمي لعشرات الشركات، المصانع، شركات السياحة، العيادات، والبراندات في الإسكندرية والقاهرة الكبرى والمدن الصناعية، مع فهم عميق لآليات السوق المصري.",
      capabilities: [
        "ربط متكامل مع منظومة الدفع المصرية (Paymob, فوري، فودافون كاش، انستا باي، وفاليو)",
        "أتمتة الشحن والتوصيل مع شركات (بوسطة Bosta، مايلرز Mylerz، وأرامكس)",
        "تأسيس سيو محلي قوي للشركات والعيادات والعقارات في القاهرة والإسكندرية",
        "بناء منصات تصدير وسياحة متعددة اللغات لجذب العملة الصعبة والعملاء الدوليين"
      ],
      links: [
        { title: "تصميم مواقع في مصر", href: "/websitedesigncompanyegypt" },
        { title: "تصميم مواقع في القاهرة", href: "/websitedesigncompanycairo" },
        { title: "تصميم مواقع في الإسكندرية", href: "/websitedesigncompanyalexandria" }
      ]
    },
    {
      country: "المملكة العربية السعودية (الرياض، جدة، الدمام، وكافة المناطق)",
      flag: "🇸🇦",
      role: "شريك تقني للشركات والمتاجر المواكبة لرؤية 2030",
      desc: "نفخر بخدمة قاعدة واسعة من الشركات، المؤسسات الخدمية، المطورين العقاريين، والمتاجر الإلكترونية في الرياض وجدة والمنطقة الشرقية، بتصاميم تواكب الفخامة والتطور التقني في المملكة.",
      capabilities: [
        "ربط رسمي مع بوابات الدفع السعودية (مدى Mada، Apple Pay، STC Pay، ميسر، و PayTabs)",
        "تفعيل أنظمة التقسيط الأكثر طلباً في السعودية (تابي Tabby وتمارا Tamara)",
        "ربط شركات الشحن واللوجستيات (سمسا SMSA، أرامكس، سبل، برق، وبوابة أوتو OTO)",
        "تهيئة سيو محلي متقدم لتصدر البحث وخرائط جوجل في أحياء الرياض وجدة والدمام"
      ],
      links: [
        { title: "تصميم مواقع في السعودية", href: "/websitedesigncompanysaudiarabia" },
        { title: "تصميم مواقع في الرياض", href: "/websitedesigncompanyriyadh" },
        { title: "تصميم مواقع في جدة", href: "/websitedesigncompanyjeddah" }
      ]
    },
    {
      country: "دولة الإمارات العربية المتحدة (دبي، أبوظبي، الشارقة)",
      flag: "🇦🇪",
      role: "هندسة منصات عالمية ثنائية ومتعددة اللغات",
      desc: "في سوق عالمي فائق التنافسية مثل دبي وأبوظبي والشارقة، نطور منصات عقارية، سياحية، تجارية، وخدمية بمعايير عالمية (Bilingual AR/EN) تخاطب المستثمرين والمقيمين من كافة الجنسيات.",
      capabilities: [
        "ربط بوابات الدفع المعتمدة في الإمارات (Stripe UAE, Network International, Telr, PayTabs)",
        "تفعيل الدفع السريع عبر Apple Pay وتقسيط المشتريات عبر تابي وتمارا بالدرهم (AED)",
        "ربط أنظمة إدارة علاقات العملاء العقارية والشركات (Bitrix24, HubSpot, Zoho CRM)",
        "تأسيس سيو مزدوج اللغة (Arabic & English SEO) لاقتناص العملاء بدون تكلفة إعلانات باهظة"
      ],
      links: [
        { title: "تصميم مواقع في الإمارات", href: "/websitedesigncompanyuae" },
        { title: "تصميم مواقع في دبي", href: "/websitedesigncompanydubai" },
        { title: "تصميم مواقع في الشارقة", href: "/websitedesigncompanysharjah" }
      ]
    },
    {
      country: "دولة الكويت (العاصمة، حولي، السالمية، وكافة المحافظات)",
      flag: "🇰🇼",
      role: "تطوير مواقع ومتاجر متكاملة مع منظومة KNET",
      desc: "نقدم للمبادرين، الشركات، العيادات الطبية، والبراندات في دولة الكويت حلول ويب ومتاجر إلكترونية فائقة السرعة والأناقة، مصممة خصيصاً لتلبية ذوق وتطلعات المستهلك الكويتي.",
      capabilities: [
        "ربط رسمي ومباشر مع بوابة كي نت (KNET) عبر ماي فاتورة أو تاب أو Upayments",
        "ضبط العملة بالدينار الكويتي (KWD) وتقسيم مناطق ومحافظات الكويت الستة للتوصيل",
        "ربط شركات التوصيل السريع في الكويت (مشكور Mashkor، أرمادا، وبوستا بلس)",
        "تحسين محركات البحث المحلي (Kuwait SEO) لتصدر نتائج جوجل الكويت"
      ],
      links: [
        { title: "تصميم مواقع في الكويت", href: "/websitedesigncompanykuwait" }
      ]
    }
  ];

  // =====================================================================
  // 6. نماذج حية من المشاريع التي قمنا بهندستها وتطويرها (Live Portfolio Showcase)
  // =====================================================================
  const featuredLiveProjects = [
    {
      name: "Unique Web Solutions",
      domain: "uniquee-ws.com",
      url: "https://www.uniquee-ws.com/",
      category: "وكالة حلول رقمية وبرمجيات",
      tech: "Custom Architecture & Advanced SEO"
    },
    {
      name: "The Light House",
      domain: "thelighthousee.com",
      url: "https://www.thelighthousee.com/en",
      category: "منصة سياحة وغوص عالمية",
      tech: "Next.js App Router & Multilingual"
    },
    {
      name: "Pest Control SA",
      domain: "pest-control-sa.vercel.app",
      url: "https://pest-control-sa.vercel.app/",
      category: "منصة خدمات منزلية بالسعودية",
      tech: "Next.js 99% Speed & Local SEO"
    },
    {
      name: "Cobra Plast Factory",
      domain: "cobra-plast.com",
      url: "https://cobra-plast.com/",
      category: "مصنع وصناعات بلاستيكية B2B",
      tech: "Corporate Catalog & Industrial SEO"
    },
    {
      name: "AHMT Egypt Travel",
      domain: "ahmtegypttravel.com",
      url: "https://www.ahmtegypttravel.com/",
      category: "شركة سياحة وحجوزات دولية",
      tech: "Dynamic Tour Booking & International SEO"
    },
    {
      name: "Amn Khaligi",
      domain: "amnkhaligi.com",
      url: "https://www.amnkhaligi.com/",
      category: "أنظمة وحلول أمنية خليجية",
      tech: "Corporate Identity & High Performance"
    },
    {
      name: "Ads Agency Marketing",
      domain: "adsagencymarketing.com",
      url: "https://www.adsagencymarketing.com/",
      category: "وكالة تسويق وإعلانات رقمية",
      tech: "Lead Generation & CRO Design"
    },
    {
      name: "Travel Friend AG",
      domain: "travelfriend-ag.com",
      url: "https://www.travelfriend-ag.com/",
      category: "برامج سياحية أوروبية وعالمية",
      tech: "Multi-Language Tourism Platform"
    }
  ];

  // =====================================================================
  // 7. بيانات أداة المستشار التفاعلي (Interactive Tech & Service Advisor)
  // =====================================================================
  const advisorBusinesses = [
    {
      label: "شركة / مصنع / مقاولات / عيادة أو مؤسسة خدمية",
      recService: "موقع مؤسسي فائق السرعة (Next.js أو Custom WordPress) + تأسيس SEO شامل",
      recLink: "/services/nextjs",
      whyText: "لأنك تحتاج إلى واجهة رسمية تبني الثقة الفورية، تستعرض سابقة أعمالك وخدماتك، وتتصدر بحث جوجل لتجلب لك عقوداً واتصالات يومية."
    },
    {
      label: "براند تجاري / محل ملابس أو عطور / تجارة إلكترونية",
      recService: "متجر إلكتروني متكامل عالي التحويل (Shopify Custom Liquid أو WooCommerce)",
      recLink: "/services/shopify",
      whyText: "لأنك تحتاج إلى ماكينة بيع أونلاين مربوطة ببوابات الدفع (Paymob / مدى / تابي / تمارا / KNET) وشركات الشحن مع تجربة شراء سريعة على الجوال."
    },
    {
      label: "لدي حملة إعلانية ممولة قريباً لمنتج أو مشروع عقاري/طبي",
      recService: "صفحة هبوط بيعية خارقة السرعة (Landing Page) + فيديو إعلاني بالـ AI",
      recLink: "/services/landing-pages",
      whyText: "لأن توجيه الإعلانات لصفحة هبوط مخصصة تفتح في 0.6 ثانية مع فيديو AI خاطف يضاعف معدل التحويل (CRO) ويمنع حرق ميزانيتك الإعلانية."
    },
    {
      label: "لدي موقع أو متجر حالي ولكنه بطيء أو لا يظهر في جوجل",
      recService: "خطة تحسين محركات البحث (Technical & Semantic SEO) وتطوير الأداء",
      recLink: "/services/seo",
      whyText: "لأننا سنقوم بفحص الكود البرمجي لموقعك، إصلاح مشاكل السرعة والأرشفة، وبناء خطة كلمات مفتاحية شرائية تضعك في الصفحة الأولى لجوجل."
    }
  ];

  const advisorGoals = [
    "الحصول على عملاء ومبيعات سريعة من الإعلانات والواتساب",
    "السيطرة المستدامة على الصفحة الأولى في محرك بحث جوجل (SEO)",
    "بناء هوية رقمية عالمية والتوسع في أسواق الخليج والتصدير"
  ];

  const advisorRegions = [
    "السوق المصري (القاهرة، الإسكندرية، وكافة المحافظات)",
    "السوق السعودي (الرياض، جدة، الدمام، وكافة المدن)",
    "السوق الإماراتي أو الكويتي (دبي، أبوظبي، الشارقة، الكويت)",
    "استهداف دولي متعدد الدول واللغات (عربي / إنجليزي)"
  ];

  // =====================================================================
  // 8. جدول المقارنة: العمل مع م. عمرو محمد السيد vs الشركات التقليدية vs المستقلين الهواة
  // =====================================================================
  const comparisonMatrix = [
    {
      criteria: "مستوى الخبرة ومن ينفذ مشروعك",
      withAmr: "خبرة 11 عاماً (منذ 2015)؛ يشرف على هندسة وتنفيذ مشروعك م. عمرو محمد السيد مباشرة",
      traditionalAgencies: "تتعاقد مع الشركة بمبلغ ضخم ثم يُسند مشروعك لمتدربين أو موظفين مبتدئين",
      amateurFreelancers: "خبرة محدودة في جانب واحد (تصميم فقط أو تركيب قالب فقط) بدون رؤية شاملة"
    },
    {
      criteria: "الجمع بين البرمجة والـ SEO والـ CRO",
      withAmr: "تكامل نادر تحت سقف واحد: كود برمجي سريع + تأسيس سيو متقدم + هندسة إقناع بيعي",
      traditionalAgencies: "انفصال بين قسم البرمجة وقسم التسويق مما يخرج موقعاً غير مهيأ لمحركات البحث",
      amateurFreelancers: "تسليم الموقع بدون أي تهيئة للـ SEO أو تتبع البيكسلات الإعلانية"
    },
    {
      criteria: "جودة الكود وسرعة الموقع على الجوال",
      withAmr: "برمجة حديثة بـ Next.js 15 أو ووردبريس/شوبيفاي مخصص الكود بسرعة 96% إلى 99.9%",
      traditionalAgencies: "اعتماد على قوالب تجارية ثقيلة ومستهلكة تبطئ الموقع وتضعف تجربة المستخدم",
      amateurFreelancers: "استخدام قوالب وإضافات مقرصنة (Nulled) تعرض الموقع للاختراق والتوقف"
    },
    {
      criteria: "الالتزام بالمواعيد والدعم الفني",
      withAmr: "جدول زمني صارم، تواصل مباشر عبر واتساب، ودعم فني حقيقي بعد إطلاق المشروع",
      traditionalAgencies: "بيروقراطية بطيئة وتأخير لشهور في التعديلات البسيطة والرد على التذاكر",
      amateurFreelancers: "احتمالية اختفاء المنفذ بعد التسليم وعدم القدرة على الوصول إليه عند حدوث مشكلة"
    },
    {
      criteria: "الملكية الكاملة للمشروع والأكواد",
      withAmr: "ملكية 100% للعميل للدومين، الاستضافة، المتجر، وكافة الأكواد البرمجية منذ اليوم الأول",
      traditionalAgencies: "احتكار بيانات الاستضافة أو الكود لربط العميل بعقود تجديد سنوية مبالغ فيها",
      amateurFreelancers: "إعدادات حسابات غير منظمة قد تفقد العميل صلاحية الوصول لدومينه لاحقاً"
    }
  ];

  // =====================================================================
  // 9. الأسئلة الشائعة الموسعة في صفحة "من نحن" (12 سؤالاً شاملاً)
  // =====================================================================
  const aboutFaqs = [
    {
      q: "من هو م. عمرو محمد السيد (عمرو سالم)؟ وما هي قصته في مجال تطوير الويب؟",
      a: "أنا عمرو محمد السيد (المعروف في الوسط التقني بـ عمرو سالم)، مطور مواقع Full-Stack، باحث تقني، مهندس متاجر إلكترونية، وخبير تحسين محركات البحث (SEO). بدأت رحلتي المهنية منذ عام 2015 (أكثر من 11 عاماً من العمل المتواصل)، قمت خلالها بتصميم وبرمجة وتصدر أكثر من 180 موقعاً ومنصة رقمية لشركات ومصانع وعيادات وبراندات في مصر، السعودية، الإمارات، والكويت."
    },
    {
      q: "لماذا يجمع اسم الاستوديو بين (عمرو محمد السيد) و (عمرو سالم)؟",
      a: "اسمي الكامل هو عمرو محمد السيد، واشتهرت مهنياً وعبر منصات التواصل والبرمجة بلقب العائلة والعمل (عمرو سالم - Amr Salem). كلا الاسمين يمثلان نفس الكيان الهندسي والخبرة الممتدة لأكثر من 11 عاماً في تقديم أرقى خدمات تصميم المواقع والـ SEO."
    },
    {
      q: "ما هي أبرز الخدمات التي يقدمها استوديو م. عمرو محمد السيد الرقمي؟",
      a: "نقدم منظومة رقمية متكاملة تشمل: 1) تطوير المواقع والمنصات فائقة السرعة بتقنية Next.js 15 & React. 2) تصميم وبرمجة مواقع ووردبريس ومتاجر ووكومرس المخصصة. 3) تصميم وتطوير متاجر شوبيفاي (Shopify Liquid & Headless). 4) تحسين محركات البحث وتصدر نتائج جوجل (Technical, Local & Semantic SEO). 5) تصميم صفحات الهبوط عالية التحويل (CRO Landing Pages). 6) إنتاج الفيديوهات الإعلانية السينمائية بالذكاء الاصطناعي (AI Video Production)."
    },
    {
      q: "هل أتعامل معك شخصياً عند طلب مشروع أم مع مندوبي مبيعات؟",
      a: "تتعامل معي شخصياً ومباشرة! هذه إحدى أهم نقاط القوة التي يفضلها عملائي؛ فلا يوجد وسطاء أو مندوبي مبيعات ينقلون الكلام بشكل خاطئ. أنا أستمع لفكرتك، أضع لك الاستراتيجية الهندسية والتسويقية، وأشرف على كل سطر كود حتى تسليم المشروع وإطلاقه بنجاح."
    },
    {
      q: "كيف ساعدتكم خبرة الـ 11 سنة في التفوق على شركات البرمجة والتسويق الأخرى؟",
      a: "الخبرة الطويلة منذ 2015 جعلتني أعاصر كافة تطورات الويب وتحديثات خوارزميات جوجل. معظم المبرمجين يبنون كوداً لا يراعي قواعد السيو والتسويق، ومعظم المسوقين لا يفهمون البرمجة. خبرتي المزدوجة على مدار 11 عاماً كمطور كود وخبير سيو تمنحك موقعاً يجمع بين السرعة البرمجية القصوى وبين القدرة العالية على تصدر جوجل وتحقيق المبيعات."
    },
    {
      q: "هل تخدمون العملاء خارج مصر (في السعودية والإمارات والكويت)؟",
      a: "نعم بكل تأكيد! نسبة كبيرة من مشاريعنا على مدار السنوات الماضية هي لشركات ومتاجر في المملكة العربية السعودية (الرياض، جدة، الدمام)، دولة الإمارات (دبي، أبوظبي، الشارقة)، ودولة الكويت. ولدينا خبرة كاملة في ربط بوابات الدفع الخليجية (مدى، تابي، تمارا، Stripe، كي نت KNET) وشركات الشحن واللوجستيات في كل دولة."
    },
    {
      q: "ما هي التقنية التي تنصحني بها لمشروعي: Next.js أم ووردبريس أم شوبيفاي؟",
      a: "لا توجد تقنية واحدة تناسب الجميع، بل نختار التقنية حسب هدفك: إذا كنت تريد أقصى سرعة في العالم (99.9%) وأماناً مطلقاً وتصدراً كاسحاً في جوجل فإن Next.js 15 هو الخيار الأول. وإذا كنت تريد موقع شركة أو محتوى أو متجراً بملكية كاملة وسهولة إدارة فإن WordPress المطور هندسياً ممتاز لك. أما إذا كنت تطلق براند تجارة إلكترونية وتريد استقراراً سحابياً وتجربة دفع سريعة فإن Shopify هو الأفضل."
    },
    {
      q: "هل أحصل على عقد رسمي وضمان وملكية كاملة لموقعي؟",
      a: "نعم 100%. نلتزم بأعلى معايير الأمانة المهنية؛ تحصل على اتفاق واضح المعالم والمراحل، وتكون ملكية الدومين والاستضافة والمتجر والأكواد البرمجية مسجلة باسمك بالكامل، مع فترة ضمان ودعم فني مجاني بعد الإطلاق."
    },
    {
      q: "كيف تضمنون أن الموقع سيحقق مبيعات وعائداً استثمارياً (ROI)؟",
      a: "نحن نبني كل موقع بمنهجية تحسين معدل التحويل (CRO)؛ ندرس سلوك عميلك المستهدف، نكتب محتوى تسويقياً مقنعاً، نصمم واجهة سريعة تفتح في أجزاء من الثانية على الجوال، نوزع أزرار الواتساب ونماذج الطلب بذكاء، ونربط بيكسلات الإعلانات (Server-Side CAPI) وأدوات السيو بدقة متناهية."
    },
    {
      q: "هل تقدمون تدريباً على إدارة الموقع أو المتجر بعد تسليمه؟",
      a: "بالتأكيد! بعد الانتهاء من برمجة الموقع وفحصه، نقدم لك شرحاً عملياً وافياً (مباشراً ومسجلاً بالفيديو خاصاً بموقعك) يوضح لك أو لفريق عملك كيفية تعديل النصوص، إضافة المنتجات أو المقالات، ومتابعة طلبات العملاء بكل سهولة."
    },
    {
      q: "هل يمكنكم استلام موقع قديم أو متوقف وإعادة تطويره وهندسته؟",
      a: "نعم، لدينا خبرة واسعة في عمليات الإنقاذ والتطوير التقني (Website Rescue & Refactoring)؛ سواء كان موقعك يعاني من بطء شديد، أو مشاكل في السيرفر، أو تراجع في ترتيب جوجل، نقوم بإعادة هيكلته أو ترقيته إلى Next.js / WordPress الحديث مع الحفاظ على أرشفتك عبر تحويلات 301 Redirects."
    },
    {
      q: "كيف أتواصل مع م. عمرو محمد السيد لبدء مشروعي الآن؟",
      a: "يمكنك التواصل معي فوراً وبكل سهولة عبر الضغط على أي زر واتساب في هذه الصفحة (رقم 01020347946) أو ملء نموذج التعاون بالأسفل، وسأرد عليك شخصياً لمناقشة مشروعك وتقديم استشارة مجانية وعرض سعر مفصل."
    }
  ];

  return (
    <div className="min-h-screen bg-[#f5f7f5] text-slate-900 overflow-x-hidden" dir="rtl">
      <FloatingSocials />
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
          className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[780px] h-[480px] pointer-events-none z-0"
          style={{
            background: "radial-gradient(circle, rgba(16, 185, 129, 0.16) 0%, transparent 70%)",
            filter: "blur(95px)",
          }}
        />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                        <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 flex flex-col items-start text-right"
            >
              <div className="inline-flex items-center gap-2 bg-emerald-100 border-2 border-emerald-500 text-emerald-900 px-4 py-1.5 rounded-full font-black text-xs md:text-sm mb-6 shadow-sm">
                <FaMedal className="text-emerald-600 w-4 h-4" />
                <span>من نحن — 11 عاماً من الريادة في هندسة الويب والـ SEO (2015 - 2026)</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-[1.22] mb-6">
                أنا <span className="text-emerald-600 underline decoration-emerald-400 decoration-4 underline-offset-8">عمرو محمد السيد</span>، أحول رؤيتك التجارية إلى منصة رقمية تقود السوق وتتصدّر جوجل
              </h1>

              <p className="text-base md:text-xl text-slate-700 font-bold leading-relaxed mb-8">
                مرحباً بك في <strong className="text-slate-900">استوديو م. عمرو محمد السيد (عمرو سالم) الرقمي</strong>. منذ أكثر من <strong className="text-emerald-700">11 عاماً</strong>، بدأت رحلتي كمطور وباحث تقني شغوف بهندسة البرمجيات وتطوير المواقع. على مدار عقد كامل، قمت ببناء وتطوير وتصدر أكثر من <strong className="text-slate-900">180 موقعاً ومتجراً إلكترونياً ومنصة رقمية</strong> باستخدام أحدث التقنيات العالمية <strong className="text-emerald-700">(Next.js 15, WordPress, Shopify & Technical SEO)</strong> لخدمة كبرى الشركات والبراندات في مصر، السعودية، الإمارات، والكويت.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full mb-8">
                {[
                  "خبرة عملية متواصلة لمدة 11 عاماً في البرمجة والـ SEO",
                  "تطوير Full-Stack بـ Next.js 15 و WordPress و Shopify",
                  "تعامل مباشر مع المؤسس والمطور لضمان أعلى دقة وسرعة",
                  "سجل أعمال موثق (+180 مشروعاً) في مصر والخليج العربي"
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
              <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
                <a
                  href={getWhatsappLink("مرحباً م. عمرو محمد السيد، تصفحت صفحة من نحن وأرغب في مناقشة مشروع جديد معك")}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="تواصل مباشرة مع م. عمرو محمد السيد عبر واتساب"
                  className="w-full sm:w-auto flex items-center justify-center gap-3 bg-emerald-600 hover:bg-emerald-700 text-white font-black text-base md:text-lg px-8 py-4 rounded-2xl shadow-[0_12px_25px_-5px_rgba(16,185,129,0.45)] border-2 border-emerald-700 transition-all transform hover:-translate-y-1"
                >
                  <FaWhatsapp className="w-6 h-6" />
                  <span>تحدث معي مباشرة: {displayPhone}</span>
                </a>

                <a
                  href="#journey-timeline"
                  title="استكشف مسيرة الـ 11 عاماً"
                  className="w-full sm:w-auto flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-black text-base md:text-lg px-7 py-4 rounded-2xl border-2 border-emerald-500 shadow-md transition-all"
                >
                  <span>مسيرة الـ 11 عاماً</span>
                  <FaArrowLeft className="w-4 h-4 text-emerald-400" />
                </a>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="lg:col-span-5"
            >
              <div className="bg-white rounded-3xl border-4 border-emerald-500 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.2)] overflow-hidden">
                <div className="bg-slate-900 px-4 py-3 border-b-2 border-emerald-500 flex items-center justify-between" dir="ltr">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-emerald-400 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-teal-500 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-slate-600 inline-block" />
                  </div>
                  <span className="text-xs font-mono text-emerald-300 font-bold tracking-wider">
                    founder-profile — amr-el-sayed.tsx
                  </span>
                </div>
                <div className="relative w-full aspect-video bg-slate-950">
                  <video
                    src="/hero.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover opacity-90"
                    title="م. عمرو محمد السيد - مطور مواقع وخبير سيو"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-slate-950/30 pointer-events-none" />

                  <div className="absolute bottom-3 right-3 left-3 bg-slate-900/90 backdrop-blur-md border border-emerald-500/60 rounded-2xl p-3.5 flex items-center justify-between">
                    <div>
                      <div className="text-sm md:text-base font-black text-white">
                        م. عمرو محمد السيد (عمرو سالم)
                      </div>
                      <div className="text-xs font-bold text-emerald-400">
                        Full-Stack Web Architect & Senior SEO Specialist
                      </div>
                    </div>
                    <span className="bg-emerald-500 text-slate-950 font-black text-xs px-3 py-1 rounded-xl whitespace-nowrap">
                      11+ سنة خبرة
                    </span>
                  </div>
                </div>
                <div className="p-5 bg-slate-900 text-white space-y-2.5 text-xs md:text-sm border-t-2 border-emerald-500">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                    <span className="text-slate-400 font-bold">بداية المسيرة المهنية:</span>
                    <span className="font-black text-emerald-400">منذ عام 2015 (11 عاماً)</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                    <span className="text-slate-400 font-bold">التخصص الهندسي الدقيق:</span>
                    <span className="font-black text-white" dir="ltr">Next.js 15 • WP • Shopify • SEO</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400 font-bold">نطاق الأسواق المخدومة:</span>
                    <span className="font-black text-emerald-300">🇪🇬 مصر • 🇸🇦 السعودية • 🇦🇪 الإمارات • 🇰🇼 الكويت</span>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>
      <section className="py-14 px-4 md:px-10 bg-slate-900 text-white border-b-4 border-emerald-500 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {careerStats.map((stat, idx) => (
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
      <section className="py-24 px-4 md:px-10 bg-white border-b-4 border-emerald-500">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="bg-emerald-100 text-emerald-800 border border-emerald-400 px-4 py-1 rounded-full text-sm font-black inline-block mb-4">
              قصتنا وفلسفتنا في بناء النجاح الرقمي
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
              لماذا أسست هذا الاستوديو؟ وكيف نضع <span className="text-emerald-600">مشروعك في المقدمة</span>؟
            </h2>
            <p className="text-slate-600 font-bold text-base md:text-lg leading-relaxed">
              منذ اليوم الأول في مجالي قبل 11 عاماً، لاحظت فجوة خطيرة في سوق تصميم المواقع في العالم العربي:
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-6 space-y-6"
            >
              <div className="bg-[#f5f7f5] p-6 md:p-8 rounded-3xl border-4 border-emerald-500 shadow-lg">
                <h3 className="text-xl md:text-2xl font-black text-slate-900 mb-4 flex items-center gap-2.5">
                  <FaLightbulb className="text-emerald-600 w-7 h-7 flex-shrink-0" />
                  <span>سد الفجوة بين البرمجة الصماء والتسويق العشوائي</span>
                </h3>
                <p className="text-slate-700 font-bold text-sm md:text-base leading-relaxed mb-4">
                  عندما يذهب صاحب شركة أو متجر إلى مبرمج تقليدي، فإنه يحصل على موقع قد يبدو جيداً، لكنه لا يظهر في محرك بحث جوجل ولا يراعي نفسية المشتري! وعندما يذهب إلى شركة تسويق عادية، يعطونه خططاً نظرية لكنهم يفشلون في إصلاح بطء الكود البرمجي أو بناء بنية تحتية صلبة.
                </p>
                <p className="text-slate-900 font-black text-sm md:text-base leading-relaxed bg-white p-4 rounded-2xl border-2 border-emerald-400">
                  لهذا السبب كرست الـ 11 سنة الماضية للجمع بين التخصصين معاً: <span className="text-emerald-700">مهندس برمجيات Full-Stack</span> يتقن أحدث تقنيات الكود (Next.js, WordPress, Shopify)، و<span className="text-emerald-700">خبير SEO & CRO</span> يعرف بدقة كيف يتصدر الموقع الصفحة الأولى في جوجل ويحول الزائر إلى عميل يدفع!
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-slate-900 text-white p-5 rounded-2xl border-2 border-emerald-500">
                  <div className="text-emerald-400 font-black text-base mb-1">رسالتنا (Our Mission)</div>
                  <p className="text-xs md:text-sm text-slate-300 font-bold leading-relaxed">
                    تمكين الشركات والبراندات في مصر والخليج من امتلاك منصات رقمية عالمية المستوى تضاعف أرباحها وتغنيها عن الاستنزاف الإعلاني المستمر.
                  </p>
                </div>
                <div className="bg-slate-900 text-white p-5 rounded-2xl border-2 border-emerald-500">
                  <div className="text-emerald-400 font-black text-base mb-1">رؤيتنا (Our Vision)</div>
                  <p className="text-xs md:text-sm text-slate-300 font-bold leading-relaxed">
                    أن نكون الشريك التقني والتسويقي الأول لكل رائد أعمال يبحث عن الصدارة الحقيقية في عصر الذكاء الاصطناعي والويب الحديث.
                  </p>
                </div>
              </div>
            </motion.div>
            <div className="lg:col-span-6">
              <div className="bg-slate-900 text-white p-7 md:p-10 rounded-3xl border-4 border-emerald-500 shadow-2xl">
                <div className="flex items-center justify-between border-b border-slate-700 pb-5 mb-6">
                  <div>
                    <span className="text-xs font-black text-emerald-400 block mb-1">
                      البطاقة التعريفية للمؤسس (Founder Bio Card)
                    </span>
                    <h3 className="text-2xl md:text-3xl font-black text-white">
                      م. عمرو محمد السيد
                    </h3>
                  </div>
                  <div className="bg-emerald-500/20 border-2 border-emerald-400 p-3.5 rounded-2xl text-emerald-400">
                    <FaCode className="w-8 h-8" />
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  {[
                    {
                      label: "الاسم المهني والشهرة:",
                      val: "عمرو محمد السيد (عمرو سالم — Amr Salem)"
                    },
                    {
                      label: "سنوات الخبرة العملية:",
                      val: "11+ عاماً من التطوير المستمر (2015 — 2026)"
                    },
                    {
                      label: "التخصصات الأساسية:",
                      val: "تطوير المواقع، هندسة المتاجر الإلكترونية، والـ SEO"
                    },
                    {
                      label: "تقنيات البرمجة المعتمدة:",
                      val: "Next.js 15, React, TypeScript, WordPress, Shopify Liquid"
                    },
                    {
                      label: "منهجية العمل:",
                      val: "الأداء أولاً (Speed-First) + التصميم للبيع (CRO) + تصدر جوجل"
                    }
                  ].map((row, rIdx) => (
                    <div
                      key={rIdx}
                      className="bg-slate-800/90 p-3.5 rounded-xl border border-emerald-500/30 flex flex-col sm:flex-row sm:items-center justify-between gap-1"
                    >
                      <span className="text-xs font-bold text-slate-400">{row.label}</span>
                      <span className="text-xs md:text-sm font-black text-emerald-300">{row.val}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-3">
                  <a
                    href={getWhatsappLink("مرحباً م. عمرو محمد السيد، أتشرف بالتواصل معك لمناقشة مشروع رقمي جديد")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto flex-1 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black py-3.5 px-6 rounded-xl flex items-center justify-center gap-2 transition-colors shadow-lg text-sm"
                  >
                    <FaWhatsapp className="w-5 h-5" />
                    <span>تواصل مع م. عمرو الآن</span>
                  </a>
                  <Link
                    href="/contact"
                    className="w-full sm:w-auto bg-slate-800 hover:bg-slate-700 text-white font-black py-3.5 px-6 rounded-xl border border-emerald-400/60 text-center text-sm transition-colors"
                  >
                    صفحة اتصل بنا ←
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="journey-timeline"
        className="py-24 px-4 md:px-10 bg-[#f5f7f5] border-b-4 border-emerald-500"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="bg-emerald-600 text-white px-4 py-1.5 rounded-full text-xs md:text-sm font-black inline-block mb-4">
              رحلة التطور المستمر (2015 — 2026)
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4">
              مسيرة <span className="text-emerald-600">11 عاماً من الخبرة التقنية</span> والنجاحات
            </h2>
            <p className="text-slate-700 font-bold text-base md:text-lg">
              اضغط على أي مرحلة زمنية لتستعرض كيف تطورت تقنياتنا وخبراتنا لخدمة عملائنا عبر السنين:
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            {timelineEras.map((era, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTimelineEra(idx)}
                className={`p-5 rounded-2xl border-4 text-right transition-all cursor-pointer ${
                  activeTimelineEra === idx
                    ? "bg-slate-900 text-white border-emerald-500 shadow-xl scale-[1.02]"
                    : "bg-white text-slate-800 border-emerald-200 hover:border-emerald-400"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span
                    className={`font-mono font-black text-base md:text-lg ${
                      activeTimelineEra === idx ? "text-emerald-400" : "text-emerald-700"
                    }`}
                    dir="ltr"
                  >
                    {era.period}
                  </span>
                  <FaHistory
                    className={`w-4 h-4 ${
                      activeTimelineEra === idx ? "text-emerald-400" : "text-slate-400"
                    }`}
                  />
                </div>
                <div className="font-black text-xs md:text-sm leading-snug">
                  {era.eraBadge}
                </div>
              </button>
            ))}
          </div>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTimelineEra}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="bg-white border-4 border-emerald-500 rounded-3xl p-8 md:p-12 shadow-xl"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-emerald-100 pb-6 mb-6">
                <div>
                  <span className="bg-emerald-100 text-emerald-900 border border-emerald-400 px-3.5 py-1 rounded-full text-xs font-black inline-block mb-2">
                    المرحلة الزمنية: {timelineEras[activeTimelineEra].period}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-black text-slate-900">
                    {timelineEras[activeTimelineEra].title}
                  </h3>
                </div>
                <div className="bg-slate-900 text-emerald-400 font-mono text-xs font-bold px-4 py-2.5 rounded-xl border border-emerald-500" dir="ltr">
                  {timelineEras[activeTimelineEra].techFocus}
                </div>
              </div>

              <p className="text-slate-700 font-bold text-base md:text-lg leading-relaxed mb-8">
                {timelineEras[activeTimelineEra].description}
              </p>

              <h4 className="font-black text-emerald-800 text-sm md:text-base mb-4">
                أبرز الإنجازات والمحطات في هذه الفترة:
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {timelineEras[activeTimelineEra].milestones.map((ms, mIdx) => (
                  <div
                    key={mIdx}
                    className="bg-[#f5f7f5] p-4 rounded-2xl border-2 border-emerald-300 flex items-start gap-3"
                  >
                    <FaCheckDouble className="text-emerald-600 w-4 h-4 mt-1 flex-shrink-0" />
                    <span className="font-black text-slate-800 text-xs md:text-sm leading-relaxed">
                      {ms}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
      <section className="py-24 px-4 md:px-10 bg-slate-900 text-white border-b-4 border-emerald-500">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="bg-emerald-500/20 text-emerald-300 border border-emerald-400 px-4 py-1 rounded-full text-xs md:text-sm font-black inline-block mb-4">
              القدرات البرمجية والتسويقية للاستوديو
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
              الترسانة التقنية التي نوظفها <span className="text-emerald-400">لصناعة تفوقك</span>
            </h2>
            <p className="text-slate-300 font-bold text-base md:text-lg">
              نمتلك خبرة عميقة في 5 مجالات تقنية وتسويقية متكاملة تغنيك عن التعامل مع عدة جهات متفرقة:
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-5 space-y-3">
              {engineeringDomains.map((dom, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTechDomain(idx)}
                  className={`w-full p-4.5 rounded-2xl border-2 text-right font-black text-xs md:text-sm transition-all flex items-center justify-between gap-3 cursor-pointer ${
                    activeTechDomain === idx
                      ? "bg-emerald-500 text-slate-950 border-white shadow-[0_0_25px_rgba(16,185,129,0.4)]"
                      : "bg-slate-800 text-slate-200 border-emerald-500/40 hover:border-emerald-400"
                  }`}
                >
                  <span>{dom.domainTitle}</span>
                  <span
                    className={`text-[10px] px-2.5 py-1 rounded-full whitespace-nowrap ${
                      activeTechDomain === idx
                        ? "bg-slate-950 text-emerald-400"
                        : "bg-slate-900 text-emerald-300"
                    }`}
                  >
                    {dom.badge}
                  </span>
                </button>
              ))}
            </div>

            <div className="lg:col-span-7 bg-slate-800 border-4 border-emerald-500 rounded-3xl p-8 md:p-10 shadow-2xl">
              <span className="inline-block bg-emerald-500/20 text-emerald-300 border border-emerald-400 px-3.5 py-1 rounded-full text-xs font-black mb-4">
                {engineeringDomains[activeTechDomain].badge}
              </span>
              <h3 className="text-2xl md:text-3xl font-black text-emerald-400 mb-4">
                {engineeringDomains[activeTechDomain].domainTitle}
              </h3>
              <p className="text-slate-200 font-bold text-base leading-relaxed mb-8">
                {engineeringDomains[activeTechDomain].summary}
              </p>

              <h4 className="text-xs font-black text-slate-400 uppercase mb-3">
                المهارات والأدوات الهندسية المتقنة في هذا القسم:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8" dir="ltr">
                {engineeringDomains[activeTechDomain].skills.map((sk, sIdx) => (
                  <div
                    key={sIdx}
                    className="bg-slate-900 p-3.5 rounded-xl border border-emerald-500/40 flex items-center gap-2.5"
                  >
                    <FaCheckCircle className="text-emerald-400 w-4 h-4 flex-shrink-0" />
                    <span className="font-mono font-bold text-white text-xs">{sk}</span>
                  </div>
                ))}
              </div>

              <a
                href={getWhatsappLink(`مرحباً م. عمرو، أرغب في الاستفادة من خبرتكم في (${engineeringDomains[activeTechDomain].domainTitle}) لمشروعي`)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black px-7 py-3.5 rounded-xl transition-colors shadow-lg text-sm"
              >
                <FaWhatsapp className="w-5 h-5" />
                <span>اطلب استشارة في هذا التخصص الآن</span>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="py-24 px-4 md:px-10 bg-white border-b-4 border-emerald-500">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="bg-emerald-100 text-emerald-800 border border-emerald-400 px-4 py-1 rounded-full text-xs md:text-sm font-black inline-block mb-4">
              قيمنا ومبادئنا المهنية الراسخة
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6">
              دستور العمل في <span className="text-emerald-600">استوديو م. عمرو محمد السيد</span>
            </h2>
            <p className="text-slate-600 font-bold text-base md:text-lg">
              6 مبادئ أساسية نلتزم بها في كل مشروع لنضمن لعميلنا تجربة تطوير مريحة ونتائج تفوق التوقعات:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {studioPrinciples.map((prin, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                whileHover={{ y: -6 }}
                className="bg-[#f5f7f5] border-4 border-emerald-500 rounded-3xl p-7 flex flex-col justify-between shadow-md hover:shadow-xl transition-all"
              >
                <div>
                  <div className="bg-white border-2 border-emerald-400 w-16 h-16 rounded-2xl flex items-center justify-center mb-5 shadow-sm">
                    {prin.icon}
                  </div>
                  <h3 className="text-xl font-black text-slate-900 mb-3 leading-snug">
                    {prin.title}
                  </h3>
                  <p className="text-slate-700 font-bold text-sm leading-relaxed">
                    {prin.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-24 px-4 md:px-10 bg-[#f5f7f5] border-b-4 border-emerald-500">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="bg-emerald-600 text-white px-4 py-1.5 rounded-full text-xs md:text-sm font-black inline-block mb-4">
              أداة التوجيه التقني الذكي
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4">
              اعرف الحل الأنسب لمشروعك من <span className="text-emerald-600">م. عمرو محمد السيد</span>
            </h2>
            <p className="text-slate-600 font-bold text-base md:text-lg">
              حدد طبيعة نشاطك وهدفك الحالي لتحصل على توصية هندسية فورية بأفضل تقنية وخدمة تناسبك:
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 bg-white border-4 border-emerald-500 rounded-3xl p-6 md:p-8 space-y-6 shadow-lg">
              <div>
                <label className="block font-black text-slate-900 text-base mb-3">
                  1. ما هي طبيعة مشروعك أو احتياجك الحالي؟
                </label>
                <div className="grid grid-cols-1 gap-2.5">
                  {advisorBusinesses.map((biz, idx) => (
                    <button
                      key={idx}
                      onClick={() => setAdvisorBusinessType(idx)}
                      className={`p-3.5 rounded-xl border-2 text-right font-black text-xs md:text-sm transition-all cursor-pointer ${
                        advisorBusinessType === idx
                          ? "bg-slate-900 text-emerald-400 border-emerald-500 shadow-md"
                          : "bg-[#f5f7f5] text-slate-800 border-emerald-200 hover:border-emerald-400"
                      }`}
                    >
                      {biz.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block font-black text-slate-900 text-base mb-3">
                  2. ما هو هدفك التجاري الأهم خلال الأشهر القادمة؟
                </label>
                <div className="grid grid-cols-1 gap-2.5">
                  {advisorGoals.map((gl, idx) => (
                    <button
                      key={idx}
                      onClick={() => setAdvisorPrimaryGoal(idx)}
                      className={`p-3.5 rounded-xl border-2 text-right font-black text-xs md:text-sm transition-all cursor-pointer ${
                        advisorPrimaryGoal === idx
                          ? "bg-emerald-600 text-white border-emerald-800 shadow-md"
                          : "bg-[#f5f7f5] text-slate-800 border-emerald-200 hover:border-emerald-400"
                      }`}
                    >
                      {gl}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block font-black text-slate-900 text-base mb-3">
                  3. ما هو السوق الجغرافي المستهدف؟
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {advisorRegions.map((reg, idx) => (
                    <button
                      key={idx}
                      onClick={() => setAdvisorTargetRegion(idx)}
                      className={`p-3 rounded-xl border-2 text-right font-black text-xs transition-all cursor-pointer ${
                        advisorTargetRegion === idx
                          ? "bg-slate-900 text-emerald-400 border-emerald-500 shadow-md"
                          : "bg-[#f5f7f5] text-slate-800 border-emerald-200 hover:border-emerald-400"
                      }`}
                    >
                      {reg}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <div className="lg:col-span-5 bg-slate-900 text-white border-4 border-emerald-500 rounded-3xl p-7 md:p-8 shadow-2xl">
              <div className="inline-block bg-emerald-500 text-slate-950 px-3.5 py-1 rounded-full text-xs font-black mb-4">
                توصية م. عمرو محمد السيد لمشروعك
              </div>
              <h3 className="text-xl md:text-2xl font-black text-emerald-400 mb-3 leading-snug">
                {advisorBusinesses[advisorBusinessType].recService}
              </h3>
              <p className="text-slate-300 text-xs md:text-sm font-bold leading-relaxed mb-6">
                {advisorBusinesses[advisorBusinessType].whyText}
              </p>

              <div className="space-y-2.5 border-t border-b border-slate-700 py-4 mb-6 text-xs">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-slate-400 font-bold">الهدف المختار:</span>
                  <span className="font-black text-white">{advisorGoals[advisorPrimaryGoal]}</span>
                </div>
                <div className="flex items-center justify-between gap-2">
                  <span className="text-slate-400 font-bold">السوق المستهدف:</span>
                  <span className="font-black text-emerald-300">{advisorRegions[advisorTargetRegion]}</span>
                </div>
              </div>

              <div className="space-y-3">
                <a
                  href={getWhatsappLink(
                    `مرحباً م. عمرو محمد السيد، استخدمت مستشار الموقع:\n- نشاطي: ${advisorBusinesses[advisorBusinessType].label}\n- التوصية: ${advisorBusinesses[advisorBusinessType].recService}\n- السوق: ${advisorRegions[advisorTargetRegion]}\nأرغب في معرفة التفاصيل وعرض السعر.`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black py-4 px-6 rounded-2xl flex items-center justify-center gap-2 transition-all shadow-lg text-sm"
                >
                  <FaWhatsapp className="w-5 h-5" />
                  <span>اعتمد هذه الخطة وتواصل معي الآن</span>
                </a>

                <Link
                  href={advisorBusinesses[advisorBusinessType].recLink}
                  className="w-full bg-slate-800 hover:bg-slate-700 text-white font-black py-3 px-6 rounded-xl border border-emerald-500/50 flex items-center justify-center gap-2 text-xs transition-colors"
                >
                  <span>تصفح تفاصيل هذه الخدمة</span>
                  <FaArrowLeft className="w-3 h-3 text-emerald-400" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-24 px-4 md:px-10 bg-white border-b-4 border-emerald-500">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="bg-emerald-100 text-emerald-800 border border-emerald-400 px-4 py-1 rounded-full text-xs md:text-sm font-black inline-block mb-4">
              خبرة محلية وإقليمية ممتدة منذ 2015
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4">
              الأسواق التي نخدمها في <span className="text-emerald-600">مصر، السعودية، الإمارات، والكويت</span>
            </h2>
            <p className="text-slate-600 font-bold text-base md:text-lg">
              اختر دولتك لتتعرف على خبرتنا في ربط منظومات الدفع والشحن وتصدر نتائج البحث المحلية:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
            {regionalExperience.map((hub, idx) => (
              <button
                key={idx}
                onClick={() => setActiveMarketHub(idx)}
                className={`p-4 rounded-2xl border-2 text-right font-black text-xs md:text-sm transition-all flex flex-col justify-between cursor-pointer ${
                  activeMarketHub === idx
                    ? "bg-slate-900 text-emerald-400 border-emerald-500 shadow-lg scale-[1.02]"
                    : "bg-[#f5f7f5] text-slate-800 border-emerald-200 hover:border-emerald-400"
                }`}
              >
                <span className="text-2xl mb-1 block">{hub.flag}</span>
                <span>{hub.country}</span>
              </button>
            ))}
          </div>

          <div className="bg-[#f5f7f5] border-4 border-emerald-500 rounded-3xl p-8 md:p-10 shadow-xl">
            <span className="inline-block bg-emerald-600 text-white px-3.5 py-1 rounded-full text-xs font-black mb-3">
              {regionalExperience[activeMarketHub].role}
            </span>
            <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-4">
              {regionalExperience[activeMarketHub].country}
            </h3>
            <p className="text-slate-700 font-bold text-base leading-relaxed mb-6">
              {regionalExperience[activeMarketHub].desc}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-8">
              {regionalExperience[activeMarketHub].capabilities.map((cap, cIdx) => (
                <div key={cIdx} className="bg-white p-4 rounded-xl border border-emerald-300 flex items-start gap-2.5 shadow-sm">
                  <FaCheckCircle className="text-emerald-600 w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span className="font-black text-slate-800 text-xs md:text-sm">{cap}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-2.5 pt-4 border-t border-emerald-200">
              <span className="text-xs font-black text-slate-600 ml-2">استكشف صفحاتنا المخصصة لهذا السوق:</span>
              {regionalExperience[activeMarketHub].links.map((lnk, lIdx) => (
                <Link
                  key={lIdx}
                  href={lnk.href}
                  className="bg-slate-900 hover:bg-emerald-600 text-white font-black text-xs px-4 py-2.5 rounded-xl flex items-center gap-1.5 transition-colors"
                >
                  <span>{lnk.title}</span>
                  <FaArrowLeft className="w-3 h-3 text-emerald-400" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="py-24 px-4 md:px-10 bg-[#f5f7f5] border-b-4 border-emerald-500">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="bg-emerald-100 text-emerald-800 border border-emerald-400 px-4 py-1 rounded-full text-xs md:text-sm font-black inline-block mb-4">
              أعمالنا تتحدث عن خبرتنا
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4">
              نماذج حية من المواقع التي <span className="text-emerald-600">قمنا ببنائها وتطويرها</span>
            </h2>
            <p className="text-slate-600 font-bold text-base md:text-lg">
              نؤمن بأن أفضل دليل على الكفاءة هو العمل الحي؛ اضغط على أي مشروع لزيارته ومعاينة سرعته وجودته بنفسك:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {featuredLiveProjects.map((proj, idx) => (
              <a
                key={idx}
                href={proj.url}
                target="_blank"
                rel="noopener noreferrer"
                title={`معاينة موقع ${proj.name}`}
                className="group bg-white hover:bg-slate-900 border-3 border-emerald-500 rounded-2xl p-5 shadow-md hover:shadow-xl transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[11px] font-black bg-emerald-100 group-hover:bg-emerald-500/20 text-emerald-900 group-hover:text-emerald-300 px-2.5 py-1 rounded-lg border border-emerald-400/50">
                      {proj.category}
                    </span>
                    <FaExternalLinkAlt className="w-3.5 h-3.5 text-slate-400 group-hover:text-emerald-400" />
                  </div>
                  <h3 className="text-lg font-black text-slate-900 group-hover:text-white mb-1 transition-colors">
                    {proj.name}
                  </h3>
                  <p className="text-xs font-mono text-emerald-700 group-hover:text-emerald-400 font-bold mb-4" dir="ltr">
                    {proj.domain}
                  </p>
                </div>

                <div className="pt-3 border-t border-emerald-100 group-hover:border-slate-800 flex items-center justify-between text-[11px] font-black text-slate-500 group-hover:text-slate-300">
                  <span dir="ltr">{proj.tech}</span>
                  <span className="text-emerald-600 group-hover:text-emerald-400">زيارة ←</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 px-4 md:px-10 bg-white border-b-4 border-emerald-500">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4">
              الفرق بين التعاون مع <span className="text-emerald-600">م. عمرو محمد السيد</span> والخيارات الأخرى
            </h2>
            <p className="text-slate-700 font-bold text-base md:text-lg">
              لماذا يفضل أصحاب الشركات والبراندات الطموحة التعامل المباشر مع استوديو هندسي متخصص؟
            </p>
          </div>

          <div className="bg-white border-4 border-emerald-500 rounded-3xl overflow-hidden shadow-xl">
            <div className="overflow-x-auto">
              <table className="w-full text-right border-collapse">
                <thead>
                  <tr className="bg-slate-900 text-white border-b-4 border-emerald-500">
                    <th className="p-4 md:p-6 font-black text-sm md:text-base">معيار المقارنة</th>
                    <th className="p-4 md:p-6 font-black text-sm md:text-base text-emerald-400 bg-slate-800">
                      مع م. عمرو محمد السيد (خبرة 11 عاماً)
                    </th>
                    <th className="p-4 md:p-6 font-black text-sm md:text-base text-slate-300">
                      شركات التسويق التقليدية
                    </th>
                    <th className="p-4 md:p-6 font-black text-sm md:text-base text-slate-400">
                      المستقلون الهواة (قوالب جاهزة)
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-emerald-100">
                  {comparisonMatrix.map((row, idx) => (
                    <tr key={idx} className="hover:bg-emerald-50/40 transition-colors">
                      <td className="p-4 md:p-5 font-black text-slate-900 text-xs md:text-sm bg-[#f5f7f5]">
                        {row.criteria}
                      </td>
                      <td className="p-4 md:p-5 font-black text-emerald-800 text-xs md:text-sm bg-emerald-50/30">
                        <div className="flex items-start gap-2">
                          <FaCheckCircle className="text-emerald-600 flex-shrink-0 w-4 h-4 mt-0.5" />
                          <span>{row.withAmr}</span>
                        </div>
                      </td>
                      <td className="p-4 md:p-5 font-bold text-slate-600 text-xs md:text-sm">
                        {row.traditionalAgencies}
                      </td>
                      <td className="p-4 md:p-5 font-bold text-slate-500 text-xs md:text-sm">
                        {row.amateurFreelancers}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
      <section className="py-24 px-4 md:px-10 bg-slate-900 text-white border-b-4 border-emerald-500 relative overflow-hidden">
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="bg-white text-slate-900 rounded-3xl border-4 border-emerald-500 p-6 sm:p-10 md:p-12 shadow-2xl">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="bg-emerald-100 text-emerald-900 border border-emerald-400 px-4 py-1 rounded-full text-xs font-black inline-block mb-3">
                تواصل مباشر بدون وسطاء
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-slate-900 mb-3">
                ابدأ مشروعك اليوم مع <span className="text-emerald-600">م. عمرو محمد السيد</span>
              </h2>
              <p className="text-slate-600 font-bold text-sm md:text-base">
                املأ بياناتك واختر الخدمة المطلوبة، وستنتقل رسالتك مباشرة إلى الواتساب الشخصي للرد عليك فوراً باستشارة مجانية وعرض سعر:
              </p>
            </div>

            <form onSubmit={handleDirectCollaborationSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <div>
                  <label className="block font-black text-slate-900 text-xs md:text-sm mb-2">
                    الاسم الكامل / اسم الشركة <span className="text-emerald-600">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      required
                      value={contactName}
                      onChange={(e) => setContactName(e.target.value)}
                      placeholder="اكتب اسمك الكريم..."
                      className="w-full bg-[#f5f7f5] border-2 border-emerald-300 focus:border-emerald-600 rounded-2xl py-3.5 pr-10 pl-4 text-sm font-black text-slate-900 outline-none"
                    />
                    <FaUser className="absolute right-3.5 top-1/2 -translate-y-1/2 text-emerald-600 w-4 h-4" />
                  </div>
                </div>

                <div>
                  <label className="block font-black text-slate-900 text-xs md:text-sm mb-2">
                    رقم الجوال (واتساب) <span className="text-emerald-600">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="tel"
                      required
                      value={contactPhone}
                      onChange={(e) => setContactPhone(e.target.value)}
                      placeholder="010xxxxxxx / +9665xxxxxxx"
                      className="w-full bg-[#f5f7f5] border-2 border-emerald-300 focus:border-emerald-600 rounded-2xl py-3.5 pr-10 pl-4 text-sm font-black text-slate-900 outline-none"
                      dir="ltr"
                      style={{ textAlign: "right" }}
                    />
                    <FaPhoneAlt className="absolute right-3.5 top-1/2 -translate-y-1/2 text-emerald-600 w-4 h-4" />
                  </div>
                </div>

                <div>
                  <label className="block font-black text-slate-900 text-xs md:text-sm mb-2">
                    البريد الإلكتروني (اختياري)
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      value={contactEmail}
                      onChange={(e) => setContactEmail(e.target.value)}
                      placeholder="name@company.com"
                      className="w-full bg-[#f5f7f5] border-2 border-emerald-300 focus:border-emerald-600 rounded-2xl py-3.5 pr-10 pl-4 text-sm font-black text-slate-900 outline-none"
                      dir="ltr"
                      style={{ textAlign: "right" }}
                    />
                    <FaEnvelope className="absolute right-3.5 top-1/2 -translate-y-1/2 text-emerald-600 w-4 h-4" />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block font-black text-slate-900 text-xs md:text-sm mb-2">
                    اختر الخدمة المطلوبة
                  </label>
                  <select
                    value={contactService}
                    onChange={(e) => setContactService(e.target.value)}
                    className="w-full bg-[#f5f7f5] border-2 border-emerald-300 focus:border-emerald-600 rounded-2xl py-3.5 px-4 text-sm font-black text-slate-900 outline-none cursor-pointer"
                  >
                    <option value="تصميم وتطوير موقع Next.js فائق السرعة">تصميم وتطوير موقع Next.js فائق السرعة</option>
                    <option value="تصميم وتطوير موقع ووردبريس / متجر ووكومرس">تصميم وتطوير موقع ووردبريس / متجر ووكومرس</option>
                    <option value="تصميم وبرمجة متجر شوبيفاي (Shopify)">تصميم وبرمجة متجر شوبيفاي (Shopify)</option>
                    <option value="تحسين محركات البحث وتصدر جوجل (SEO)">تحسين محركات البحث وتصدر جوجل (SEO)</option>
                    <option value="تصميم صفحة هبوط إعلانية عالية التحويل (CRO)">تصميم صفحة هبوط إعلانية عالية التحويل (CRO)</option>
                    <option value="إنتاج فيديو إعلاني بالذكاء الاصطناعي (AI Video)">إنتاج فيديو إعلاني بالذكاء الاصطناعي (AI Video)</option>
                    <option value="استشارة شاملة لمشروع جديد">استشارة شاملة لمشروع جديد</option>
                  </select>
                </div>

                <div>
                  <label className="block font-black text-slate-900 text-xs md:text-sm mb-2">
                    ملاحظات سريعة عن مشروعك (اختياري)
                  </label>
                  <input
                    type="text"
                    value={contactNotes}
                    onChange={(e) => setContactNotes(e.target.value)}
                    placeholder="اكتب مجال عملك أو أي تفاصيل إضافية..."
                    className="w-full bg-[#f5f7f5] border-2 border-emerald-300 focus:border-emerald-600 rounded-2xl py-3.5 px-4 text-sm font-black text-slate-900 outline-none"
                  />
                </div>
              </div>

              {formError && (
                <div className="bg-amber-50 border-2 border-amber-500 text-amber-900 px-4 py-3 rounded-xl text-xs md:text-sm font-black">
                  ⚠️ {formError}
                </div>
              )}

              <button
                type="submit"
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-black text-base md:text-lg py-4 px-8 rounded-2xl shadow-lg border-2 border-emerald-800 transition-all flex items-center justify-center gap-3 cursor-pointer"
              >
                <FaWhatsapp className="w-6 h-6" />
                <span>إرسال البيانات والتحدث مع م. عمرو عبر واتساب</span>
                <FaPaperPlane className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </section>
      <section className="py-20 px-4 md:px-10 bg-white border-b-4 border-emerald-500">
        <div className="max-w-5xl mx-auto bg-[#f5f7f5] border-4 border-emerald-500 rounded-3xl p-8 md:p-12 shadow-lg">
          <h2 className="text-2xl md:text-4xl font-black text-slate-900 mb-6 border-r-4 border-emerald-500 pr-4">
            م. عمرو محمد السيد (عمرو سالم): 11 عاماً من هندسة المواقع المتصدرة في مصر والخليج
          </h2>

          <div className="space-y-6 text-slate-700 font-bold text-base leading-relaxed">
            <p>
              عندما تبحث عن <strong className="text-slate-900">أفضل شركة تصميم مواقع إلكترونية أو خبير سيو (SEO)</strong> لبناء مشروعك، فإن العامل الحاسم بين النجاح والفشل هو <strong className="text-emerald-700">الخبرة العملية الموثقة (Experience & Authority)</strong> لمن يقف خلف الكود البرمجي. على مدار أكثر من 11 سنة (منذ عام 2015)، عمل <strong className="text-slate-900">م. عمرو محمد السيد</strong> على هندسة وتطوير مئات المنصات الرقمية التي لم تكتفِ بالظهور بمظهر عصري، بل سيطرت على المراكز الأولى في محرك بحث جوجل وحققت نمواً مضاعفاً في المبيعات.
            </p>

            <h3 className="text-xl md:text-2xl font-black text-emerald-700 pt-2">
              1. لماذا نركز على الأداء البرمجي (Next.js 15 & Clean Code)؟
            </h3>
            <p>
              في عام 2026، أصبحت سرعة تصفح الموقع على الهاتف المحمول هي المعيار الأول لبقاء العميل وإتمام الشراء. من خلال إتقان أطر العمل الحديثة مثل <strong className="text-slate-900">Next.js 15 و React و TypeScript</strong>، إلى جانب تطوير قوالب <strong className="text-emerald-700">WordPress و Shopify Liquid</strong> النظيفة والخالية من الإضافات المرهقة، نضمن لعملائنا مواقع تفتح في أقل من ثانية واحدة وتجتاز اختبارات Google Core Web Vitals بدرجة 99/100.
            </p>

            <h3 className="text-xl md:text-2xl font-black text-emerald-700 pt-2">
              2. ريادة السيو التقني والدلالي والتهيئة لمحركات الذكاء الاصطناعي (SEO & GEO)
            </h3>
            <p>
              لا تقتصر مهمتنا على تسليمك موقعاً جميلاً؛ بل نقوم ببناء البنية التحتية للسيو (Technical SEO، هيكلة السيلو، وأكواد JSON-LD Schema) بالتوازي مع كتابة المحتوى الدلالي الذي يلبي نية الباحث الشرائية. هذا النهج يضمن ظهور شركتك في صدارة نتائج بحث جوجل التقليدية، وخرائط جوجل (Local Pack)، وداخل إجابات محركات الذكاء الاصطناعي الحديثة.
            </p>
          </div>
        </div>
      </section>
      <section className="py-24 px-4 md:px-10 bg-[#f5f7f5] border-b-4 border-emerald-500">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <span className="bg-emerald-100 text-emerald-800 border border-emerald-400 px-4 py-1 rounded-full text-xs md:text-sm font-black inline-block mb-3">
              إجابات شاملة وواضحة عن مسيرتنا وخدماتنا
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900">
              الأسئلة الشائعة حول <span className="text-emerald-600">م. عمرو محمد السيد واستوديو العمل</span>
            </h2>
          </div>

          <div className="space-y-4">
            {aboutFaqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white border-2 border-emerald-500 rounded-2xl overflow-hidden shadow-sm"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full p-5 md:p-6 text-right flex items-center justify-between gap-4 font-black text-base md:text-lg text-slate-900 hover:text-emerald-700 transition-colors cursor-pointer"
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
      <section className="py-20 px-4 md:px-10 bg-slate-900 text-white relative overflow-hidden">
        <div className="max-w-5xl mx-auto relative z-10 bg-gradient-to-br from-emerald-700 to-emerald-900 border-4 border-emerald-400 rounded-3xl p-8 md:p-14 text-center shadow-2xl">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">
            ضع خبرة 11 عاماً في خدمة نجاح مشروعك القادم!
          </h2>
          <p className="text-emerald-100 font-bold text-base md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed">
            تواصل الآن مباشرة مع م. عمرو محمد السيد عبر الواتساب للحصول على استشارة تقنية وتسويقية مجانية وخطة عمل تضع شركتك في الصدارة.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={getWhatsappLink("مرحباً م. عمرو محمد السيد، أرغب في بدء مشروع جديد معك")}
              target="_blank"
              rel="noopener noreferrer"
              title="تواصل عبر واتساب الآن"
              className="w-full sm:w-auto bg-white hover:bg-emerald-50 text-slate-900 font-black text-lg md:text-xl px-10 py-5 rounded-2xl shadow-xl flex items-center justify-center gap-3 transition-transform hover:scale-105"
            >
              <FaWhatsapp className="w-7 h-7 text-emerald-600" />
              <span>واتساب مباشر: {displayPhone}</span>
            </a>

            <Link
              href="/contact"
              title="صفحة اتصل بنا"
              className="w-full sm:w-auto bg-slate-900 hover:bg-slate-800 text-white font-black text-lg px-8 py-5 rounded-2xl border-2 border-emerald-300 transition-colors"
            >
              صفحة اتصل بنا
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
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
  FaFileInvoiceDollar,
  FaBullseye,
  FaRegClock,
  FaCheckDouble
} from "react-icons/fa";

export default function RiyadhDesignClient() {
  const [activeZone, setActiveZone] = useState<number>(0);
  const [activeTech, setActiveTech] = useState<string>("nextjs");
  const [activeSector, setActiveSector] = useState<number>(0);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const whatsappNumber = "2010120347946";
  const displayPhone = "010120347946";

  const getWhatsappLink = (customMessage: string) => {
    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(customMessage)}`;
  };
  const riyadhStats = [
    {
      number: "+135",
      label: "مشروع ناجح في العاصمة الرياض",
      desc: "شركات قابضة، مكاتب استشارية، عيادات، ومتاجر إلكترونية متصدرة",
      icon: <FaAward className="w-8 h-8 text-emerald-400" />
    },
    {
      number: "99.9%",
      label: "سرعة تحميل فائقة (PageSpeed)",
      desc: "فتح فوري للموقع على شبكات 5G في الرياض بدون أي بطء",
      icon: <FaBolt className="w-8 h-8 text-emerald-400" />
    },
    {
      number: "100%",
      label: "ربط متكامل مع أنظمة المملكة",
      desc: "تكامل رسمي مع مدى، تابي، تمارا، سمسا، أرامكس، وسبل",
      icon: <FaShieldAlt className="w-8 h-8 text-emerald-400" />
    },
    {
      number: "3.5X",
      label: "زيادة في معدل التحويل (CRO)",
      desc: "واجهات مستخدم مصممة خصيصاً لإقناع العميل في الرياض بالشراء",
      icon: <FaChartLine className="w-8 h-8 text-emerald-400" />
    }
  ];
  const riyadhZones = [
    {
      zoneName: "شمال الرياض والمحور التجاري الحديث",
      badge: "الأكثر نمواً للشركات والبراندات",
      title: "تصميم مواقع للشركات والعيادات في شمال الرياض (الملقا، الياسمين، النرجس، الصحافة)",
      description:
        "يشهد شمال الرياض نهضة عمرانية وتجارية هائلة على امتداد طريق الملك فهد وطريق أنس بن مالك وطريق الثمامة. تتمركز هنا أحدث المقرات الإدارية، العيادات التخصصية الفاخرة، شركات التطوير العقاري، والكافيهات والبراندات العصرية. نصمم لشركات شمال الرياض مواقع إلكترونية فائقة الفخامة تعكس الحداثة والرقي وتستقطب الشريحة ذات القوة الشرائية العالية.",
      districts: [
        "حي الملقا",
        "حي الياسمين",
        "حي النرجس",
        "حي الصحافة",
        "حي العقيق",
        "حي حطين",
        "حي القيروان",
        "حي الندى"
      ],
      focusSectors: "شركات التطوير العقاري، المجمعات الطبية والتجميل، المطاعم الفاخرة، وشركات التقنية الناشئة."
    },
    {
      zoneName: "وسط الرياض والمركز المالي (KAFD & العليا)",
      badge: "قلب المال والأعمال والاستشارات",
      title: "تطوير منصات ومواقع المؤسسات الكبرى في العليا والمركز المالي KAFD والملز",
      description:
        "في قلب العاصمة حيث مركز الملك عبدالله المالي (KAFD)، أبراج العليا، التحلية، والملز، تتواجد الشركات القابضة، البنوك، شركات الاستشارات الإدارية والمالية، ومكاتب المحاماة الدولية. نبتكر لهذه الجهات مواقع مؤسسية رصينة ثنائية اللغة (عربي/إنجليزي) بأعلى معايير الأمان السيبراني والسرعة البرمجية بـ Next.js.",
      districts: [
        "المركز المالي KAFD",
        "حي العليا",
        "شارع التحلية",
        "حي السليمانية",
        "حي الملز",
        "حي الورود",
        "حي المربع",
        "حي الوزارات"
      ],
      focusSectors: "الشركات القابضة، مكاتب المحاماة والاستشارات، شركات الاستثمار، والقطاع الفندقي والسياحي."
    },
    {
      zoneName: "شرق الرياض والمراكز الخدمية والتجارية",
      badge: "كثافة سكانية وحركة تجارية نشطة",
      title: "تصميم مواقع ومتاجر إلكترونية في شرق الرياض (الروضة، الريان، الرمال، قرطبة)",
      description:
        "يتميز شرق الرياض بالكثافة السكانية العالية والنشاط التجاري والخدمي الواسع على طريق خريص وطريق الدمام. نساعد المتاجر، المراكز التعليمية، شركات الخدمات المنزلية، المعارض، والمؤسسات التجارية في شرق الرياض على بناء مواقع ومتاجر إلكترونية تضاعف مبيعاتها وتتصدر البحث المحلي في جوجل.",
      districts: [
        "حي الروضة",
        "حي الريان",
        "حي قرطبة",
        "حي الرمال",
        "حي المونسية",
        "حي النسيم",
        "حي الربوة",
        "حي الحمراء"
      ],
      focusSectors: "قطاع التجزئة والمتاجر الإلكترونية، المدارس والمراكز التدريبية، معارض السيارات، والخدمات اللوجستية."
    },
    {
      zoneName: "غرب وجنوب الرياض والمدن الصناعية",
      badge: "المصانع، التوريدات، والمشاريع الكبرى",
      title: "تصميم مواقع المصانع وشركات التوريد والسياحة في الدرعية، لبن، والمدن الصناعية",
      description:
        "من المشاريع التراثية والسياحية العالمية في الدرعية وغرب الرياض، إلى القلاع الصناعية والمستودعات الضخمة في المدينة الصناعية الثانية والسلي وجنوب الرياض؛ نقدم حلول ويب متكاملة للمصانع، شركات المقاولات، شركات الشحن والتخزين، والمنشآت السياحية مع كتالوجات منتجات رقمية وأنظمة طلب تسعير B2B.",
      districts: [
        "الدرعية التاريخية",
        "حي ظهرة لبن",
        "حي السويدي",
        "حي الشفا",
        "المدينة الصناعية",
        "حي السلي",
        "حي العزيزية",
        "حي نمار"
      ],
      focusSectors: "المصانع الوطنية، شركات التوريد والجملة (B2B)، شركات المقاولات، والمشاريع السياحية والترفيهية."
    }
  ];
  const riyadhServices = [
    {
      icon: <FaCode className="w-9 h-9" />,
      title: "برمجة مواقع خاصة بتقنية Next.js في الرياض",
      badge: "الأسرع والأقوى للـ SEO",
      description:
        "نبرمج مواقع إلكترونية مخصصة بالكامل باستخدام إطار العمل العالمي Next.js و React. تمنحك هذه التقنية سرعة استثنائية (تفتح في أجزاء من الثانية) وأماناً برمجياً مطلقاً، مع أفضلية كاسحة في تصدر نتائج بحث جوجل في الرياض.",
      features: [
        "سرعة أداء 99% على مؤشرات Google Core Web Vitals",
        "نظام Server-Side Rendering لأرشفة فورية في جوجل",
        "حماية كاملة ضد الثغرات الشائعة في القوالب التقليدية",
        "قابلية توسع عالية لربط الموقع بتطبيقات الجوال مستقبلاً"
      ]
    },
    {
      icon: <FaBuilding className="w-9 h-9" />,
      title: "تصميم مواقع الشركات والمؤسسات (Corporate Websites)",
      badge: "واجهة تليق بمكانتك",
      description:
        "نصمم مواقع تعريفية فاخرة للشركات القابضة، شركات المقاولات، المكاتب الهندسية، والجهات الخدمية في الرياض. نركز على إبراز الهوية المؤسسية، سابقة الأعمال، الشهادات، والملف التعريفي بأسلوب يبني الثقة الفورية لدى عملائك.",
      features: [
        "تصميم UI/UX حصري يعكس فخامة علامتك التجارية بالرياض",
        "قسم متطور لعرض المشاريع وسابقة الأعمال بالصور والفيديو",
        "دعم كامل للغتين العربية والإنجليزية بدقة احترافية",
        "نماذج طلب عروض أسعار واستشارات مرتبطة بالبريد والواتساب"
      ]
    },
    {
      icon: <FaShoppingCart className="w-9 h-9" />,
      title: "تصميم المتاجر الإلكترونية في الرياض (E-Commerce)",
      badge: "مبيعات على مدار الساعة",
      description:
        "نبني متاجر إلكترونية احترافية عالية التحويل (على منصة شوبيفاي، ووكومرس، أو برمجة خاصة) مهيأة تماماً لمتطلبات المتسوق في الرياض والمملكة، مع تجربة شراء سلسة من اختيار المنتج وحتى الدفع والتوصيل.",
      features: [
        "ربط فوري مع بوابات الدفع (مدى، Apple Pay، STC Pay، فيزا)",
        "تفعيل خدمات التقسيط الذكية (تابي Tabby وتمارا Tamara)",
        "ربط شركات الشحن والتوصيل بالرياض (سمسا، أرامكس، برق، أوتو)",
        "إصدار فواتير إلكترونية متوافقة مع ضريبة القيمة المضافة 15%"
      ]
    },
    {
      icon: <FaLaptopCode className="w-9 h-9" />,
      title: "تصميم وتطوير مواقع ووردبريس الاحترافية",
      badge: "لوحة تحكم عربية سهلة",
      description:
        "نطور مواقع ووردبريس في الرياض بمعايير هندسية خاصة بعيداً عن القوالب البطيئة. نبني واجهات خفيفة الكود، مؤمنة بالكامل، ومزودة بلوحة تحكم عربية سلسة تمكن فريقك من إدارة الصفحات والمقالات بكل سهولة.",
      features: [
        "ضبط متقدم للسرعة والكاش وتقليل حجم الملفات والصور",
        "تصميم متجاوب 100% مع كافة شاشات الجوال والتابلت",
        "إعدادات أمان وحماية جدار ناري ضد محاولات الاختراق",
        "تهيئة سيو داخلية شاملة لكافة الصفحات والأقسام"
      ]
    },
    {
      icon: <FaRocket className="w-9 h-9" />,
      title: "تصميم صفحات الهبوط الإعلانية (Landing Pages)",
      badge: "مضاعفة عائد الإعلانات ROAS",
      description:
        "إذا كنت تطلق حملات ممولة على سناب شات، تيك توك، جوجل، أو إنستجرام لاستهداف عملاء الرياض، فنحن نصمم لك صفحات هبوط بيعية تركز على هدف واحد: تحويل الزائر إلى عميل متفاعل بأقل تكلفة إعلانية.",
      features: [
        "صياغة محتوى تسويقي بيعي يخاطب جمهور الرياض مباشرة",
        "ربط دقيق لـ Snap Pixel و TikTok Pixel و Google Tag Manager",
        "تحميل لحظي على الجوال لمنع تسرب الزوار من الإعلان",
        "أزرار تواصل واتساب عائمة ونماذج حجز مختصرة وسريعة"
      ]
    },
    {
      icon: <FaSearchDollar className="w-9 h-9" />,
      title: "تحسين محركات البحث والسيو المحلي بالرياض (Local SEO)",
      badge: "تصدر نتائج جوجل مجاناً",
      description:
        "نجعل شركتك تظهر في النتيجة الأولى عندما يبحث العملاء في الرياض عن خدماتك على جوجل وخرائط جوجل (Google Maps). خطة سيو تقنية ومحتوى متكامل يجلب لك عملاء جاهزين للشراء يومياً بدون إعلانات.",
      features: [
        "استهداف الكلمات المفتاحية الشرائية الأكثر بحثاً في الرياض",
        "بناء أكواد Schema Markup الخاصة بالأنشطة التجارية المحلية",
        "تحسين البنية التقنية والروابط الداخلية وسرعة الأرشفة",
        "تهيئة وربط الموقع مع Google Search Console و Analytics 4"
      ]
    }
  ];
  const techStackDetails: Record<
    string,
    {
      title: string;
      subtitle: string;
      description: string;
      advantages: string[];
      idealFor: string;
      performanceScore: string;
    }
  > = {
    nextjs: {
      title: "برمجة خاصة بتقنية Next.js & React",
      subtitle: "التقنية الأولى عالمياً للشركات الطموحة في الرياض الباحثة عن السرعة القصوى والـ SEO",
      description:
        "تعتمد المنصات الكبرى والشركات الرائدة في الرياض على Next.js لأنها تقدم أداءً يفوق المواقع التقليدية بعشرات المرات. يتم توليد الصفحات من السيرفر مباشرة (SSR) مما يجعل جوجل يؤرشف موقعك بسرعة البرق، ويمنح المستخدم في الرياض تجربة تصفح فورية تشبه تطبيقات الهواتف الذكية.",
      advantages: [
        "سرعة تحميل قياسية (99/100) على Google PageSpeed Insights",
        "أمان سيبراني فائق لأنه مفصول عن قواعد البيانات التقليدية المعرضة للاختراق",
        "تحكم كامل في السيو التقني والميتا تاج والـ Schema لكل صفحة",
        "واجهة مستخدم مخصصة 100% بحركات انسيابية حديثة"
      ],
      idealFor: "الشركات الكبرى والمتوسطة في الرياض، المنصات الخدمية، والمواقع التي تستهدف صدارة جوجل.",
      performanceScore: "99.9%"
    },
    wordpress: {
      title: "نظام WordPress المطور هندسياً",
      subtitle: "المرونة العالية وسهولة إدارة المحتوى والمقالات لفريق عملك",
      description:
        "نقدم تجربة ووردبريس مختلفة تماماً عن السوق؛ حيث نقوم ببناء وتخصيص الموقع بكود نظيف ومسرع عبر شبكات CDN مع الاستغناء عن الإضافات الثقيلة، لتحصل على موقع سريع جداً مع لوحة تحكم عربية بديهية لإضافة الخدمات والأخبار والمقالات التسويقية.",
      advantages: [
        "لوحة تحكم عربية سهلة لا تتطلب أي خبرة برمجية لإدارة الموقع",
        "بيئة ممتازة لإدارة المدونات والمحتوى التسويقي وتقوية الـ SEO",
        "إمكانية التعديل والإضافة السريعة للأقسام والصفحات الفرعية",
        "تكلفة تطوير اقتصادية مع الحفاظ على المظهر المؤسسي الفخم"
      ],
      idealFor: "المواقع التعريفية للشركات، العيادات، مكاتب الاستشارات، والمواقع الغنية بالمقالات.",
      performanceScore: "95%"
    },
    ecommerce: {
      title: "منصات التجارة الإلكترونية (Shopify / WooCommerce / Custom)",
      subtitle: "بنية تحتية متكاملة للبيع أونلاين وإدارة المخزون والطلبات في الرياض",
      description:
        "نختار ونطور لك منصة التجارة الإلكترونية الأنسب لحجم مبيعاتك في الرياض. نقوم بتصميم واجهة متجر فريدة تعكس قوة البراند، مع إنجاز كافة عمليات الربط التقني مع بوابات الدفع السعودية، شركات التقسيط، وشركات التوصيل المحلية.",
      advantages: [
        "لوحة إدارة متكاملة للمنتجات، المخزون، الطلبات، وتقارير المبيعات",
        "تكامل رسمي وسلس مع مدى، Apple Pay، تابي، وتمارا",
        "ربط أوتوماتيكي مع سمسا، أرامكس، سبل، وأوتو لإصدار بوالص الشحن",
        "تهيئة سيو خاصة بصفحات المنتجات والتصنيفات لتصدر بحث المتسوقين"
      ],
      idealFor: "البراندات السعودية، متاجر العطور والأزياء والقهوة، ومتاجر التجزئة والجملة بالرياض.",
      performanceScore: "97%"
    }
  };
  const riyadhSectors = [
    {
      name: "المقاولات والتطوير العقاري",
      title: "تصميم مواقع شركات المقاولات والتطوير العقاري والمكاتب الهندسية بالرياض",
      desc: "مع الطفرة العمرانية الكبرى في الرياض ومشاريع الإسكان والتطوير التجاري، نبتكر مواقع إلكترونية فخمة تستعرض مشاريعك العقارية، المخططات، نسب الإنجاز، والضمانات، مع أنظمة حجز وحدات وطلب عروض أسعار هندسية.",
      deliverables: [
        "استعراض تفاعلي للمشاريع العقارية السكنية والتجارية بالصور والفيديو",
        "خرائط تفاعلية توضح مواقع المشاريع في أحياء الرياض المختلفة",
        "نماذج مخصصة لطلب تسعير مقاولات أو حجز معاينة ميدانية",
        "تحميل مباشر لملف سابقة الأعمال والبروفايل (Company Profile PDF)"
      ]
    },
    {
      name: "العيادات والمجمعات الطبية",
      title: "تصميم مواقع العيادات، المراكز الطبية، ومراكز التجميل والأسنان بالرياض",
      desc: "نصمم مواقع طبية تبني الثقة مع المريض في الرياض منذ اللحظة الأولى. عرض متميز للكادر الطبي، التخصصات، الأجهزة الحديثة، العروض الموسمية، ونظام حجز مواعيد سريع مرتبط بالواتساب ومكتب الاستقبال.",
      deliverables: [
        "صفحة مستقلة لكل عيادة ولكل طبيب مع جدول المواعيد المتاحة",
        "معرض نتائج (قبل وبعد) منظم واحترافي يعزز قرار المريض",
        "نظام حجز مواعيد وعروض ترويجية فوري عبر الموقع والواتساب",
        "مدونة طبية متوافقة مع السيو لتصدر أسئلة المرضى في جوجل الرياض"
      ]
    },
    {
      name: "المتاجر والبراندات السعودية",
      title: "تصميم متاجر العطور، العبايات، القهوة المختصة، والإلكترونيات في الرياض",
      desc: "نساعد العلامات التجارية في الرياض على الانتقال من البيع المحدود إلى الانتشار الواسع عبر متجر إلكتروني فاخر الهوية، سريع التصفح على الجوال، ويدعم كافة وسائل الدفع السريع والتقسيط والتوصيل الفوري داخل الرياض.",
      deliverables: [
        "تجربة تسوق سريعة جداً (Quick Add to Cart & One-Page Checkout)",
        "تفعيل تابي وتمارا وأبل باي ومدى لرفع قيمة سلة المشتريات",
        "نظام كوبونات خصم، باقات التوفير، وبرامج ولاء العملاء",
        "ربط مع شركات التوصيل السريع في نفس اليوم داخل مدينة الرياض"
      ]
    },
    {
      name: "مكاتب المحاماة والاستشارات",
      title: "تصميم مواقع مكاتب المحاماة، المحاسبة، والاستشارات الإدارية والمالية",
      desc: "نقدم للمكاتب الاستشارية والقانونية في الرياض واجهة رقمية رسمية رصينة تعكس الخبرة والاعتماد المهني، وتسهل على الشركات ورواد الأعمال طلب الاستشارات أو التعاقد السنوي.",
      deliverables: [
        "تصميم رسمي فخم يبرز التراخيص والاعتمادات والخبرات القانونية والمالية",
        "نظام حجز استشارات (حضورية أو أونلاين) مع إمكانية الدفع المسبق",
        "قسم مخصص لنشر الأنظمة واللوائح التجارية والزكوية في المملكة",
        "حماية عالية وخصوصية تامة لبيانات ومراسلات العملاء والشركات"
      ]
    },
    {
      name: "المطاعم والكافيهات والضيافة",
      title: "تصميم مواقع ومنيو إلكتروني للمطاعم، الكافيهات، وشركات الإعاشة بالرياض",
      desc: "في مدينة تعشق التميز في قطاع المطاعم والقهوة مثل الرياض، نصمم لك موقعاً تفاعلياً ومنيو رقمي ذكي يتيح لعملائك الطلب المباشر من فروعك دون تحمل عمولات تطبيقات التوصيل المرتفعة.",
      deliverables: [
        "منيو إلكتروني تفاعلي بالصور والأسعار والسعرات الحرارية (QR Menu)",
        "نظام طلب مباشر للاستلام من الفرع أو التوصيل عبر أسطولك الخاص",
        "استعراض فروع المطعم أو الكافيه في أحياء الرياض مع خرائط الوصول",
        "قسم خاص لطلبات الحفلات، التموين، والإعاشة للشركات والمناسبات"
      ]
    }
  ];
  const comparisonData = [
    {
      feature: "جودة الكود والتقنية المستخدمة",
      us: "برمجة حديثة (Next.js / React) أو ووردبريس مخصص الكود فائق النظافة",
      others: "قوالب جاهزة مكررة وثقيلة تبطئ الموقع وتعرضه للأعطال"
    },
    {
      feature: "السرعة على الجوال (Mobile Speed)",
      us: "سرعة استثنائية (95% - 100%) مصممة لمستخدمي الجوال في الرياض",
      others: "تحميل بطيء يستغرق أكثر من 5 ثوانٍ ويؤدي لخسارة الزبائن"
    },
    {
      feature: "التأسيس لمحركات البحث (SEO)",
      us: "تهيئة سيو تقني ومحلي كامل لمدينة الرياض مع Schema Markup",
      others: "تسليم الموقع كصفحات صماء غير مهيأة للظهور في بحث جوجل"
    },
    {
      feature: "التركيز على المبيعات والتحويل (CRO)",
      us: "توزيع مدروس لأزرار الواتساب والـ CTA بناءً على سلوك العميل السعودي",
      others: "تصميم تقليدي جامد لا يحفز الزائر على التواصل أو الشراء"
    },
    {
      feature: "ربط الدفع والشحن في الرياض",
      us: "تكامل شامل ومختبر مع مدى، تابي، تمارا، أبل باي، وسمسا وأرامكس",
      others: "ترك العميل يواجه تعقيدات الربط التقني بمفرده بعد التسليم"
    },
    {
      feature: "الملكية والدعم الفني",
      us: "ملكية كاملة 100% للدومين والموقع مع دعم فني مباشر وتدريب شامل",
      others: "قيود على نقل الموقع وتأخر في الرد على طلبات الدعم الفني"
    }
  ];
  const processSteps = [
    {
      num: "01",
      title: "جلسة التحليل ودراسة منافسيك في الرياض",
      desc: "ندرس نشاطك التجاري، الفئة المستهدفة في الرياض، ونحلل مواقع أبرز منافسيك في السوق المحلي لنحدد نقاط التفوق التي سنبني عليها موقعك."
    },
    {
      num: "02",
      title: "رسم الهيكلة وتصميم تجربة المستخدم UI/UX",
      desc: "نصمم مخطط الصفحات والواجهة البصرية بألوان وهوية شركتك، مع التركيز على سهولة التصفح عبر الجوال والوصول السريع لطلب الخدمة."
    },
    {
      num: "03",
      title: "البرمجة والتطوير بأعلى المعايير",
      desc: "نكتب أكواد الموقع باستخدام Next.js أو WordPress المطور، مع ضغط الصور والملفات وتأمين القواعد البرمجية لضمان سرعة وأمان لا يضاهى."
    },
    {
      num: "04",
      title: "كتابة المحتوى وتهيئة السيو المحلي للرياض",
      desc: "نصيغ محتوى تسويقي مقنع غني بالكلمات المفتاحية المستهدفة في الرياض، ونضبط العناوين، الميتا ديسكربشن، وخرائط الموقع والـ Schema."
    },
    {
      num: "05",
      title: "ربط بوابات الدفع، الشحن، وأدوات التتبع",
      desc: "نفعل وسائل الدفع (مدى، تابي، تمارا)، شركات الشحن، أزرار الواتساب، ونربط Google Analytics 4 وبيكسلات المنصات الإعلانية بدقة."
    },
    {
      num: "06",
      title: "الاختبار الشامل، الإطلاق، والتدريب",
      desc: "نفحص الموقع على كافة الأجهزة والمتصفحات، نطلقه رسمياً على الدومين الخاص بك، وندرب فريقك بالكامل مع تقديم دعم فني متواصل."
    }
  ];
  const riyadhPackages = [
    {
      name: "باقة شركات الرياض الاحترافية (Corporate)",
      badge: "مثالية للشركات والمؤسسات والعيادات",
      featured: false,
      desc: "موقع تعريفي متكامل يعكس قوة ومكانة شركتك في الرياض ويحول الزوار إلى اتصالات وطلبات عروض أسعار يومية.",
      features: [
        "تصميم UI/UX مخصص بالكامل متوافق 100% مع الجوال",
        "حتى 8 صفحات أساسية وفرعية (الرئيسية، من نحن، خدماتنا، مشاريعنا، المدونة، اتصل بنا)",
        "تهيئة سيو محلي (Local SEO) لاستهداف عملاء مدينة الرياض",
        "ربط مباشر مع الواتساب ونماذج طلب خدمة ذكية",
        "إدراج خريطة مقر الشركة بالرياض وحسابات التواصل الاجتماعي",
        "شهادة أمان SSL مجانية وحماية متقدمة ضد الاختراق",
        "سرعة تحميل عالية جداً وتجربة تصفح سلسة",
        "تدريب كامل على لوحة التحكم + دعم فني مجاني"
      ],
      cta: "اطلب باقة الشركات بالرياض"
    },
    {
      name: "باقة المتاجر المتكاملة بالرياض (E-Commerce Pro)",
      badge: "الأكثر طلباً للبراندات والمتاجر",
      featured: true,
      desc: "متجر إلكتروني متكامل الأركان جاهز للبيع الفوري في الرياض وكافة مدن المملكة مع ربط الدفع والتقسيط والشحن.",
      features: [
        "تصميم متجر إلكتروني فاخر يضاعف معدل التحويل والمبيعات",
        "إضافة الأقسام والمنتجات مع خيارات الفلترة والبحث الذكي السريع",
        "ربط بوابات الدفع المعتمدة (مدى، Apple Pay، STC Pay، فيزا، ماستركارد)",
        "تفعيل أنظمة التقسيط (تابي Tabby وتمارا Tamara) لرفع المبيعات",
        "ربط شركات الشحن والتوصيل في الرياض (سمسا، أرامكس، سبل، برق)",
        "تهيئة سيو شاملة لصفحات المنتجات والأقسام لتصدر بحث جوجل",
        "ربط بيكسل سناب شات، تيك توك، إنستجرام، وجوجل أناليتكس 4",
        "فواتير ضريبية متوافقة + دعم فني واستشارات تقنية مستمرة"
      ],
      cta: "ابدأ متجرك في الرياض الآن"
    },
    {
      name: "باقة البرمجة الخاصة والـ SEO (Next.js Riyadh Elite)",
      badge: "للصدارة المطلقة والأداء الخارق",
      featured: false,
      desc: "الحل الهندسي الأقوى للشركات الطموحة في الرياض التي تبحث عن موقع خارق السرعة بـ Next.js مع خطة تصدر جوجل.",
      features: [
        "برمجة خاصة بالكامل باستخدام Next.js 15 & Tailwind CSS",
        "سرعة أداء قياسية (99/100) على اختبارات Google PageSpeed",
        "تأسيس سيو تقني متقدم (SSR, Dynamic Schema, XML Sitemaps)",
        "أمان سيبراني مطلق واستقرار تام تحت ضغط الزيارات العالي",
        "تصميم واجهات حصرية تفاعلية تتفوق على كافة المنافسين بالرياض",
        "دعم ثنائي اللغة (عربي / إنجليزي) ببنية برمجية احترافية",
        "كتابة محتوى تسويقي متوافق مع السيو للصفحات الرئيسية",
        "أولوية قصوى في الدعم الفني والتطوير المستقبلي للمنصة"
      ],
      cta: "احجز استشارة البرمجة الخاصة"
    }
  ];

  // =====================================================================
  // 9. الأسئلة الشائعة الموسعة (10 أسئلة شائعة حول تصميم المواقع في الرياض)
  // =====================================================================
  const riyadhFaqs = [
    {
      q: "ما الذي يجعل وكالتكم أفضل شركة تصميم مواقع الكترونية في الرياض؟",
      a: "نحن نجمع بين الهندسة البرمجية المتقدمة (Next.js وووردبريس المطور) وبين الخبرة العملية العميقة في السوق السعودي وتحديداً مدينة الرياض. لا نسلمك مجرد موقع شكلي، بل نبني منصة سريعة جداً، آمنة، مربوطة بأنظمة الدفع والشحن السعودية، ومهيأة بالكامل لتصدر نتائج بحث جوجل وجلب عملاء حقيقيين لشركتك."
    },
    {
      q: "كم تستغرق مدة تصميم وبرمجة موقع إلكتروني لشركة في الرياض؟",
      a: "تستغرق المواقع التعريفية للشركات والعيادات وصفحات الهبوط ما بين 7 إلى 14 يوم عمل. أما المتاجر الإلكترونية المتكاملة والمنصات المبرمجة خصيصاً بـ Next.js فتستغرق من 2 إلى 4 أسابيع لضمان جودة الكود، دقة الربط التقني، والفحص الشامل قبل الإطلاق."
    },
    {
      q: "هل الموقع سيكون متوافقاً مع الجوال وشبكات الإنترنت في السعودية؟",
      a: "نعم بنسبة 100%. أكثر من 85% من العملاء في الرياض يتصفحون المواقع ويطلبون الخدمات عبر الهواتف الذكية. لذلك نصمم الموقع بمنهجية (Mobile-First) ليكون فائق السرعة وسهل الاستخدام على كافة أجهزة الآيفون والأندرويد والتابلت."
    },
    {
      q: "هل تقومون بربط بوابات الدفع مثل مدى، أبل باي، تابي، وتمارا؟",
      a: "بالتأكيد، نتولى عنك كافة عمليات الربط البرمجي والتقني مع بوابات الدفع المعتمدة في المملكة العربية السعودية (مدى، فيزا، ماستركارد، Apple Pay، STC Pay) بالإضافة إلى تفعيل خدمات التقسيط (تابي Tabby وتمارا Tamara) التي تزيد من مبيعات المتاجر في الرياض بشكل ملحوظ."
    },
    {
      q: "كيف تساعدون موقعي على الظهور في الصفحة الأولى في جوجل بالرياض (SEO)؟",
      a: "نطبق كافة معايير السيو التقني والداخلي والمحلي (Local SEO) أثناء بناء الموقع؛ بداية من سرعة التحميل الفائقة، هيكلة العناوين H1-H3، كتابة الميتا تاج التسويقية، ضغط الصور بصيغة WebP، وصولاً إلى زراعة أكواد JSON-LD Schema التي تعرف محرك البحث جوجل بنشاطك التجاري في الرياض."
    },
    {
      q: "هل أستطيع تعديل محتوى الموقع وإضافة خدمات أو منتجات بنفسي لاحقاً؟",
      a: "نعم بكل سهولة. نوفر لك لوحة تحكم عربية واضحة وسهلة الاستخدام تمكنك أنت أو فريق عملك من تعديل النصوص، الصور، إضافة مقالات أو منتجات جديدة، ومتابعة الطلبات دون الحاجة لأي خبرة برمجية، كما نقدم لك شرحاً تدريبياً كاملاً."
    },
    {
      q: "هل أحصل على ملكية كاملة للدومين والموقع والأكواد البرمجية؟",
      a: "نعم 100%، أنت المالك الوحيد والحصري للدومين والاستضافة والموقع وكافة الأكواد والملفات. نسلمك كافة بيانات الدخول الرسمية ولا نفرض أي قيود أو احتكار على موقعك."
    },
    {
      q: "هل تقدمون خدمة كتابة المحتوى التسويقي للموقع؟",
      a: "نعم، نساعدك في صياغة وترتيب المحتوى التسويقي والبيعي لصفحات موقعك بأسلوب احترافي يخاطب العميل في الرياض ويبرز نقاط قوتك التنافسية، مع مراعاة الكلمات المفتاحية التي يبحث بها عملاؤك في جوجل."
    },
    {
      q: "هل يوجد دعم فني وصيانة بعد تسليم الموقع وإطلاقه؟",
      a: "نعم بالتأكيد، نقدم فترة دعم فني مجاني شامل بعد الإطلاق للتأكد من عمل كافة خصائص الموقع بكفاءة تامة، كما نوفر باقات صيانة وتطوير وحملات SEO شهرية للشركات الراغبة في نمو مستمر في سوق الرياض."
    },
    {
      q: "كيف يمكنني البدء وطلب تصميم موقعي الإلكتروني في الرياض الآن؟",
      a: "الأمر بسيط جداً! اضغط على أي زر تواصل عبر واتساب في هذه الصفحة (رقم 010120347946)، وأرسل لنا فكرة مشروعك أو نشاط شركتك في الرياض، وسنقوم بالرد عليك فوراً باستشارة مجانية وخطة عمل وعرض سعر مفصل."
    }
  ];

  return (
    <div className="min-h-screen bg-[#f5f7f5] text-slate-900 overflow-x-hidden" dir="rtl">
      {/* الأيقونات العائمة والهيدر */}
      <FloatingSocials />
      {/* =====================================================================
          1. قسم الهيرو الرئيسي (HERO SECTION) + فيديو websitedesigncompanyriyadh.mp4
      ===================================================================== */}
      <section className="relative w-full pt-32 pb-20 md:pt-40 md:pb-28 px-4 md:px-10 overflow-hidden bg-[#f5f7f5] border-b-4 border-emerald-500">
        {/* خلفية الشبكة الهندسية */}
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
                <FaMapMarkerAlt className="text-emerald-600 w-4 h-4" />
                <span>المركز المالي وعاصمة الأعمال - الرياض</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-[1.25] mb-6">
                أفضل <span className="text-emerald-600 underline decoration-emerald-400 decoration-4 underline-offset-8">شركة تصميم مواقع الكترونية في الرياض</span> تقودك للصدارة
              </h1>

              <p className="text-base md:text-xl text-slate-700 font-bold leading-relaxed mb-8">
                نبتكر للشركات، المؤسسات، والبراندات في <strong className="text-slate-900">الرياض (الملقا، العليا، الياسمين، النرجس، KAFD وكافة الأحياء)</strong> منصات رقمية ومتاجر إلكترونية فائقة السرعة والأمان بأحدث تقنيات <strong className="text-emerald-700">Next.js و WordPress</strong>. مواقع متكاملة مع <strong className="text-slate-900">مدى، تابي، تمارا</strong> ومؤسسة هندسياً لتصدر الصفحة الأولى في محركات البحث <strong className="text-emerald-700">SEO</strong>.
              </p>

              {/* نقاط القوة السريعة في الهيرو */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full mb-8">
                {[
                  "سرعة تحميل فائقة 99% على الجوال وشبكات 5G بالرياض",
                  "ربط رسمي مع مدى، Apple Pay، تابي، تمارا، وسمسا",
                  "تأسيس سيو محلي (Local SEO) لتصدر بحث جوجل الرياض",
                  "تصميم UI/UX مؤسسي فاخر يضاعف المبيعات والتحويل"
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
                  href={getWhatsappLink("مرحباً م. عمرو، أريد الاستفسار عن تصميم موقع إلكتروني في الرياض")}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="تواصل عبر واتساب لتصميم موقعك في الرياض"
                  className="w-full sm:w-auto flex items-center justify-center gap-3 bg-emerald-600 hover:bg-emerald-700 text-white font-black text-base md:text-lg px-8 py-4 rounded-2xl shadow-[0_12px_25px_-5px_rgba(16,185,129,0.45)] border-2 border-emerald-700 transition-all transform hover:-translate-y-1"
                >
                  <FaWhatsapp className="w-6 h-6" />
                  <span>تحدث معنا الآن: {displayPhone}</span>
                </a>

                <a
                  href="#packages"
                  title="استعرض باقات تصميم المواقع في الرياض"
                  className="w-full sm:w-auto flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-black text-base md:text-lg px-7 py-4 rounded-2xl border-2 border-emerald-500 shadow-md transition-all"
                >
                  <span>استكشف باقات الرياض</span>
                  <FaArrowLeft className="w-4 h-4 text-emerald-400" />
                </a>
              </div>
            </motion.div>

            {/* العمود الأيسر: عرض فيديو الهيرو websitedesigncompanyriyadh.mp4 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="lg:col-span-5"
            >
              <div className="bg-white rounded-3xl border-4 border-emerald-500 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.18)] overflow-hidden">
                {/* شريط علوي أنيق */}
                <div className="bg-slate-900 px-4 py-3 border-b-2 border-emerald-500 flex items-center justify-between" dir="ltr">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-emerald-400 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-teal-500 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-slate-600 inline-block" />
                  </div>
                  <span className="text-xs font-mono text-emerald-300 font-bold tracking-wider">
                    websitedesigncompanyriyadh.mp4
                  </span>
                </div>

                {/* مشغل الفيديو الرئيسي لصفحة الرياض */}
                <div className="relative w-full aspect-video bg-slate-950">
                  <video
                    src="/websitedesigncompanyriyadh.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                    title="شركة تصميم مواقع الكترونية في الرياض"
                  />
                </div>

                {/* شريط سفلي تحت الفيديو */}
                <div className="p-4 bg-white flex items-center justify-between border-t border-emerald-100">
                  <div className="flex items-center gap-2">
                    <FaShieldAlt className="text-emerald-600 w-5 h-5" />
                    <span className="text-xs md:text-sm font-black text-slate-800">
                      حلول رقمية معتمدة لشركات الرياض
                    </span>
                  </div>
                  <a
                    href={getWhatsappLink("مرحباً، شاهدت فيديو تصميم المواقع في الرياض وأرغب في عرض سعر")}
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
          2. شريط الإحصائيات والأرقام (RIYADH STATS SECTION)
      ===================================================================== */}
      <section className="py-14 px-4 md:px-10 bg-slate-900 text-white border-b-4 border-emerald-500 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {riyadhStats.map((stat, idx) => (
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
          3. لماذا الشركات في الرياض تختارنا؟ + الفيديو الثاني websitedesign.mp4
      ===================================================================== */}
      <section className="py-20 px-4 md:px-10 bg-white border-b-4 border-emerald-500">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="bg-emerald-100 text-emerald-800 border border-emerald-400 px-4 py-1 rounded-full text-sm font-black inline-block mb-4">
              تفوق تنافسي في سوق العاصمة
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
              لماذا نحن الخيار الأول كأفضل <span className="text-emerald-600">شركة تصميم مواقع في الرياض</span>؟
            </h2>
            <p className="text-slate-600 font-bold text-base md:text-lg leading-relaxed">
              الرياض هي المركز الاقتصادي الأسرع نمواً في المنطقة، والمنافسة فيها تتطلب موقعاً إلكترونياً لا يكتفي بالمظهر الجميل، بل يتفوق في السرعة، الأمان، وإقناع العميل باتخاذ قرار الشراء الفوري:
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* عرض الفيديو الثاني websitedesign.mp4 */}
            <motion.div
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-6"
            >
              <div className="bg-[#f5f7f5] p-3 md:p-5 rounded-3xl border-4 border-emerald-500 shadow-xl">
                <div className="bg-slate-900 px-4 py-2.5 rounded-t-2xl border-b-2 border-emerald-500 flex items-center justify-between mb-2" dir="ltr">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-teal-400 inline-block" />
                  </div>
                  <span className="text-xs font-mono text-emerald-300 font-bold">websitedesign.mp4</span>
                </div>
                <div className="relative rounded-2xl overflow-hidden border-2 border-slate-900 aspect-video bg-slate-950">
                  <video
                    src="/websitedesign.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                    title="تصميم وتطوير مواقع إلكترونية احترافية في الرياض"
                  />
                </div>
                <div className="mt-4 flex flex-col sm:flex-row items-center justify-between gap-4 bg-white p-4 rounded-2xl border border-emerald-200">
                  <div>
                    <h3 className="font-black text-slate-900 text-base md:text-lg">
                      واجهات رقمية تليق بشركات الرياض
                    </h3>
                    <p className="text-xs md:text-sm text-slate-600 font-bold">
                      هندسة برمجية حديثة تحول زوار موقعك إلى عملاء دائمين.
                    </p>
                  </div>
                  <a
                    href={getWhatsappLink("مرحباً م. عمرو، أرغب في استشارة مجانية لتصميم موقع شركتي في الرياض")}
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

            {/* المزايا التنافسية الأربعة */}
            <div className="lg:col-span-6 space-y-5">
              {[
                {
                  icon: <FaBolt className="w-6 h-6 text-emerald-600" />,
                  title: "سرعة استجابة لحظية تواكب مستخدمي الرياض",
                  desc: "نربط موقعك بشبكات توصيل محتوى (Cloudflare CDN) ذات نقاط تواجد قريبة في الرياض والخليج، مما يضمن فتح صفحات موقعك في أقل من ثانية واحدة دون أي انتظار."
                },
                {
                  icon: <FaSearchDollar className="w-6 h-6 text-emerald-600" />,
                  title: "سيو محلي (Local SEO) يجعلك تتصدر البحث في الرياض",
                  desc: "نهيئ الموقع برمجياً وتسويقياً ليتصدر الكلمات المفتاحية المرتبطة بالرياض وأحيائها، مما يجلب لك زيارات مستهدفة مجانية من عملاء يبحثون عن خدماتك الآن."
                },
                {
                  icon: <FaCreditCard className="w-6 h-6 text-emerald-600" />,
                  title: "جاهزية كاملة للتجارة الإلكترونية والدفع بالسعودية",
                  desc: "ربط متكامل ومؤمن مع مدى، Apple Pay، STC Pay، تابي، تمارا، وشركات الشحن والتوصيل السريع داخل الرياض وكافة مناطق المملكة."
                },
                {
                  icon: <FaLock className="w-6 h-6 text-emerald-600" />,
                  title: "حماية سيبرانية مشددة واستقرار تام للسيرفرات",
                  desc: "نؤمن موقعك بشهادات التشفير المتقدمة وجدران الحماية لمنع أي هجمات أو توقف مفاجئ، خاصة أثناء إطلاق الحملات الإعلانية الكبرى في الرياض."
                }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-[#f5f7f5] border-2 border-emerald-500/80 hover:border-emerald-600 rounded-2xl p-5 flex items-start gap-4 shadow-sm transition-all"
                >
                  <div className="bg-white p-3 rounded-xl border-2 border-emerald-400 shadow-sm flex-shrink-0 mt-1">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-black text-slate-900 mb-1.5">
                      {item.title}
                    </h3>
                    <p className="text-slate-700 font-bold text-sm md:text-base leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          4. خدمات تصميم وتطوير المواقع في الرياض (6 كروت تفصيلية)
      ===================================================================== */}
      <section className="py-24 px-4 md:px-10 bg-[#f5f7f5] border-b-4 border-emerald-500">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="bg-emerald-600 text-white px-4 py-1.5 rounded-full text-xs md:text-sm font-black inline-block mb-4">
              حلول رقمية متكاملة تحت سقف واحد
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6">
              خدماتنا في <span className="text-emerald-600">تصميم وبرمجة المواقع بالرياض</span>
            </h2>
            <p className="text-slate-700 font-bold text-base md:text-lg">
              نقدم مجموعة متكاملة من الخدمات البرمجية والتسويقية المصممة خصيصاً لتلبية طموحات الشركات والمؤسسات والمتاجر في العاصمة الرياض:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {riyadhServices.map((srv, idx) => (
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
                      <li
                        key={fIdx}
                        className="flex items-start gap-2 text-xs md:text-sm font-black text-slate-800"
                      >
                        <FaCheckCircle className="text-emerald-600 w-4 h-4 mt-0.5 flex-shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href={getWhatsappLink(`مرحباً م. عمرو، أرغب في طلب خدمة (${srv.title}) لشركتي في الرياض`)}
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
          5. التغطية الجغرافية التفاعلية لأحياء ومناطق الرياض (RIYADH ZONES TABS)
      ===================================================================== */}
      <section className="py-24 px-4 md:px-10 bg-slate-900 text-white border-b-4 border-emerald-500">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="bg-emerald-500/20 text-emerald-300 border border-emerald-400 px-4 py-1 rounded-full text-xs md:text-sm font-black inline-block mb-4">
              تغطية شاملة لكافة أحياء ومناطق العاصمة
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
              خدماتنا تغطي <span className="text-emerald-400">شمال، وسط، شرق، وغرب الرياض</span>
            </h2>
            <p className="text-slate-300 font-bold text-base md:text-lg">
              نعي تماماً طبيعة الأنشطة التجارية في كل منطقة من مناطق الرياض، ونهيئ موقعك ليتصدر البحث المحلي في الأحياء التي تستهدفها:
            </p>
          </div>

          {/* أزرار التبديل بين مناطق الرياض */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-10">
            {riyadhZones.map((zone, idx) => (
              <button
                key={idx}
                onClick={() => setActiveZone(idx)}
                className={`p-4 rounded-2xl font-black text-sm md:text-base transition-all border-2 text-right flex flex-col justify-between ${
                  activeZone === idx
                    ? "bg-emerald-500 text-slate-950 border-white shadow-[0_0_25px_rgba(16,185,129,0.5)]"
                    : "bg-slate-800 text-slate-200 border-emerald-500/40 hover:border-emerald-400"
                }`}
              >
                <span className="text-xs opacity-80 mb-1 block">📍 منطقة الأعمال</span>
                <span>{zone.zoneName}</span>
              </button>
            ))}
          </div>

          {/* عرض تفاصيل المنطقة المختارة */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeZone}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="bg-slate-800 border-4 border-emerald-500 rounded-3xl p-8 md:p-12 shadow-2xl"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-8">
                  <span className="inline-block bg-emerald-500/20 text-emerald-300 border border-emerald-400 px-3.5 py-1 rounded-full text-xs font-black mb-4">
                    {riyadhZones[activeZone].badge}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-black text-emerald-400 mb-4">
                    {riyadhZones[activeZone].title}
                  </h3>
                  <p className="text-slate-200 font-bold text-base md:text-lg leading-relaxed mb-6">
                    {riyadhZones[activeZone].description}
                  </p>

                  <div className="bg-slate-900/90 border border-emerald-500/40 p-4 rounded-2xl mb-6">
                    <span className="text-emerald-400 font-black text-sm block mb-1">
                      أبرز القطاعات المستفيدة في هذه المنطقة:
                    </span>
                    <p className="text-slate-300 font-bold text-sm md:text-base">
                      {riyadhZones[activeZone].focusSectors}
                    </p>
                  </div>

                  {/* الأحياء المشمولة */}
                  <div>
                    <span className="text-xs font-black text-slate-400 block mb-2">
                      أبرز الأحياء التي نستهدفها في السيو المحلي:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {riyadhZones[activeZone].districts.map((dist, dIdx) => (
                        <span
                          key={dIdx}
                          className="bg-slate-900 text-emerald-300 border border-emerald-500/50 px-3 py-1.5 rounded-xl text-xs font-black"
                        >
                          📍 {dist}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-4 bg-slate-900 border-2 border-emerald-500 rounded-2xl p-6 text-center flex flex-col items-center justify-center">
                  <FaMapMarkerAlt className="w-14 h-14 text-emerald-400 mb-4" />
                  <h4 className="text-xl font-black text-white mb-2">
                    هل مقر شركتك في {riyadhZones[activeZone].zoneName}؟
                  </h4>
                  <p className="text-slate-300 text-sm font-bold mb-6 leading-relaxed">
                    تواصل معنا الآن للحصول على خطة تصميم موقع وسيو محلي مخصصة لتصدر نتائج البحث في منطقتك بالرياض.
                  </p>
                  <a
                    href={getWhatsappLink(`مرحباً م. عمرو، شركتي في (${riyadhZones[activeZone].zoneName}) بالرياض وأريد تصميم موقع إلكتروني احترافي`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="اطلب استشارة لمنطقتك في الرياض"
                    className="w-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black py-3.5 px-6 rounded-xl flex items-center justify-center gap-2 transition-colors shadow-lg"
                  >
                    <FaWhatsapp className="w-5 h-5" />
                    <span>اطلب عرض سعر الآن</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* =====================================================================
          6. مقارنة التقنيات البرمجية (TECH STACK TABS)
      ===================================================================== */}
      <section className="py-24 px-4 md:px-10 bg-white border-b-4 border-emerald-500">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="bg-emerald-100 text-emerald-800 border border-emerald-400 px-4 py-1 rounded-full text-xs md:text-sm font-black inline-block mb-4">
              أحدث تقنيات الويب العالمية
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6">
              بأي تقنية نبرمج موقعك في <span className="text-emerald-600">الرياض</span>؟
            </h2>
            <p className="text-slate-600 font-bold text-base md:text-lg">
              نرشح لك التقنية البرمجية الأنسب لطبيعة مشروعك وميزانيتك وأهدافك التسويقية في السوق السعودي:
            </p>
          </div>

          {/* أزرار اختيار التقنية */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
            {[
              { id: "nextjs", label: "برمجة خاصة Next.js", sub: "سرعة خارقة وصدارة SEO" },
              { id: "wordpress", label: "ووردبريس مطور WordPress", sub: "مرونة وسهولة إدارة" },
              { id: "ecommerce", label: "شوبيفاي / ووكومرس", sub: "متاجر إلكترونية متكاملة" }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTech(tab.id)}
                className={`p-5 rounded-2xl border-4 text-right transition-all ${
                  activeTech === tab.id
                    ? "bg-slate-900 text-white border-emerald-500 shadow-xl"
                    : "bg-[#f5f7f5] text-slate-800 border-emerald-200 hover:border-emerald-400"
                }`}
              >
                <div className="font-black text-lg md:text-xl mb-1 flex items-center justify-between">
                  <span>{tab.label}</span>
                  <span
                    className={`w-3 h-3 rounded-full ${
                      activeTech === tab.id ? "bg-emerald-400" : "bg-slate-400"
                    }`}
                  />
                </div>
                <div
                  className={`text-xs md:text-sm font-bold ${
                    activeTech === tab.id ? "text-emerald-300" : "text-slate-500"
                  }`}
                >
                  {tab.sub}
                </div>
              </button>
            ))}
          </div>

          {/* صندوق عرض تفاصيل التقنية المختارة */}
          <div className="bg-[#f5f7f5] border-4 border-emerald-500 rounded-3xl p-8 md:p-12 shadow-lg">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 border-b border-emerald-200 pb-6">
              <div>
                <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-2">
                  {techStackDetails[activeTech].title}
                </h3>
                <p className="text-emerald-700 font-black text-base md:text-lg">
                  {techStackDetails[activeTech].subtitle}
                </p>
              </div>
              <div className="bg-slate-900 text-white px-5 py-3 rounded-2xl border-2 border-emerald-500 text-center flex-shrink-0">
                <span className="text-xs text-slate-300 font-bold block">مؤشر الأداء والسرعة</span>
                <span className="text-2xl font-black text-emerald-400">
                  {techStackDetails[activeTech].performanceScore}
                </span>
              </div>
            </div>

            <p className="text-slate-700 font-bold text-base leading-relaxed mb-8">
              {techStackDetails[activeTech].description}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {techStackDetails[activeTech].advantages.map((adv, idx) => (
                <div
                  key={idx}
                  className="bg-white p-4 rounded-2xl border-2 border-emerald-400 flex items-center gap-3 shadow-sm"
                >
                  <FaCheckCircle className="text-emerald-600 w-5 h-5 flex-shrink-0" />
                  <span className="font-black text-slate-800 text-sm md:text-base">{adv}</span>
                </div>
              ))}
            </div>

            <div className="bg-emerald-900 text-white p-5 rounded-2xl border-2 border-emerald-400 flex flex-col md:flex-row items-center justify-between gap-4">
              <div>
                <span className="text-emerald-300 font-black text-xs uppercase block mb-1">
                  المشاريع الأنسب لهذه التقنية في الرياض:
                </span>
                <p className="font-bold text-sm md:text-base">
                  {techStackDetails[activeTech].idealFor}
                </p>
              </div>
              <a
                href={getWhatsappLink(`مرحباً م. عمرو، أريد تصميم موقع في الرياض باستخدام (${techStackDetails[activeTech].title})`)}
                target="_blank"
                rel="noopener noreferrer"
                title="اطلب هذه التقنية لموقعك"
                className="bg-white text-slate-900 hover:bg-emerald-100 font-black px-6 py-3 rounded-xl text-sm whitespace-nowrap transition-colors"
              >
                اطلب هذه التقنية الآن ←
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          7. جدول المقارنة مع الشركات التقليدية في الرياض
      ===================================================================== */}
      <section className="py-20 px-4 md:px-10 bg-[#f5f7f5] border-b-4 border-emerald-500">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4">
              مقارنة توضح الفارق بيننا وبين <span className="text-emerald-600">الشركات التقليدية</span>
            </h2>
            <p className="text-slate-700 font-bold text-base md:text-lg">
              لماذا تنتقل الشركات الطموحة في الرياض للعمل معنا وتترك القوالب التقليدية البطيئة؟
            </p>
          </div>

          <div className="bg-white border-4 border-emerald-500 rounded-3xl overflow-hidden shadow-xl">
            <div className="overflow-x-auto">
              <table className="w-full text-right border-collapse">
                <thead>
                  <tr className="bg-slate-900 text-white border-b-4 border-emerald-500">
                    <th className="p-4 md:p-6 font-black text-sm md:text-lg">معيار المقارنة</th>
                    <th className="p-4 md:p-6 font-black text-sm md:text-lg text-emerald-400 bg-slate-800">
                      مع م. عمرو سالم (جودة هندسية وسيو)
                    </th>
                    <th className="p-4 md:p-6 font-black text-sm md:text-lg text-slate-300">
                      الشركات والقوالب التقليدية
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-emerald-100">
                  {comparisonData.map((row, idx) => (
                    <tr key={idx} className="hover:bg-emerald-50/40 transition-colors">
                      <td className="p-4 md:p-5 font-black text-slate-900 text-xs md:text-base bg-[#f5f7f5]">
                        {row.feature}
                      </td>
                      <td className="p-4 md:p-5 font-black text-emerald-800 text-xs md:text-base bg-emerald-50/30">
                        <div className="flex items-center gap-2">
                          <FaCheckCircle className="text-emerald-600 flex-shrink-0 w-4 h-4" />
                          <span>{row.us}</span>
                        </div>
                      </td>
                      <td className="p-4 md:p-5 font-bold text-slate-500 text-xs md:text-base">
                        {row.others}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          8. القطاعات التجارية في الرياض (SECTORS INTERACTIVE SECTION)
      ===================================================================== */}
      <section className="py-24 px-4 md:px-10 bg-white border-b-4 border-emerald-500">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="bg-emerald-100 text-emerald-800 border border-emerald-400 px-4 py-1 rounded-full text-xs md:text-sm font-black inline-block mb-4">
              خبرة ممتدة في قطاعات الأعمال بالعاصمة
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4">
              حلول ويب مخصصة لكل <span className="text-emerald-600">قطاع تجاري في الرياض</span>
            </h2>
            <p className="text-slate-600 font-bold text-base md:text-lg">
              اختر مجال عمل شركتك في الرياض لتتعرف على المميزات الخاصة التي نوفرها لمشروعك:
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* قائمة القطاعات */}
            <div className="lg:col-span-4 space-y-3">
              {riyadhSectors.map((sec, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveSector(idx)}
                  className={`w-full text-right p-4 rounded-2xl font-black text-base transition-all border-2 flex items-center justify-between ${
                    activeSector === idx
                      ? "bg-emerald-600 text-white border-emerald-700 shadow-md"
                      : "bg-[#f5f7f5] text-slate-800 border-emerald-200 hover:border-emerald-400"
                  }`}
                >
                  <span>{sec.name}</span>
                  <span>←</span>
                </button>
              ))}
            </div>

            {/* تفاصيل القطاع المختار */}
            <div className="lg:col-span-8 bg-[#f5f7f5] border-4 border-emerald-500 rounded-3xl p-8 md:p-10 shadow-lg">
              <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-4">
                {riyadhSectors[activeSector].title}
              </h3>
              <p className="text-slate-700 font-bold text-base md:text-lg leading-relaxed mb-6">
                {riyadhSectors[activeSector].desc}
              </p>

              <h4 className="font-black text-emerald-700 text-base mb-4">
                أبرز الخصائص التي نبرمجها لهذا القطاع في الرياض:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {riyadhSectors[activeSector].deliverables.map((del, i) => (
                  <div
                    key={i}
                    className="bg-white p-3.5 rounded-xl border border-emerald-300 flex items-start gap-2.5 shadow-sm"
                  >
                    <FaCheckCircle className="text-emerald-600 w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span className="font-black text-slate-800 text-xs md:text-sm">{del}</span>
                  </div>
                ))}
              </div>

              <a
                href={getWhatsappLink(`مرحباً م. عمرو، أعمل في قطاع (${riyadhSectors[activeSector].name}) بالرياض وأريد تصميم موقع احترافي`)}
                target="_blank"
                rel="noopener noreferrer"
                title="اطلب عرض سعر لقطاعك في الرياض"
                className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-black px-7 py-4 rounded-xl border-2 border-emerald-500 transition-all shadow-md"
              >
                <FaWhatsapp className="w-5 h-5 text-emerald-400" />
                <span>اطلب نموذجاً وعرض سعر لقطاعك بالرياض</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          9. خطوات العمل الهندسية (6 STEPS TIMELINE)
      ===================================================================== */}
      <section className="py-24 px-4 md:px-10 bg-[#f5f7f5] border-b-4 border-emerald-500">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="bg-emerald-100 text-emerald-800 border border-emerald-400 px-4 py-1 rounded-full text-xs md:text-sm font-black inline-block mb-4">
              منهجية واضحة والتزام تام بالمواعيد
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4">
              خطوات تنفيذ موقعك في <span className="text-emerald-600">الرياض</span>
            </h2>
            <p className="text-slate-700 font-bold text-base md:text-lg">
              نرافقك خطوة بخطوة في رحلة هندسية منظمة من الفكرة وحتى إطلاق الموقع وتصدر المنافسين:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.map((step, idx) => (
              <div
                key={idx}
                className="bg-white border-4 border-emerald-500 rounded-3xl p-7 flex flex-col justify-between shadow-md hover:shadow-xl transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="w-12 h-12 rounded-2xl bg-slate-900 text-emerald-400 font-black text-xl flex items-center justify-center border-2 border-emerald-500">
                      {step.num}
                    </span>
                    <span className="text-xs font-black text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-300">
                      مرحلة أساسية
                    </span>
                  </div>
                  <h3 className="text-xl font-black text-slate-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 font-bold text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          10. الباقات والعروض (3 PACKAGES SECTION)
      ===================================================================== */}
      <section id="packages" className="py-24 px-4 md:px-10 bg-white border-b-4 border-emerald-500">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="bg-emerald-600 text-white px-4 py-1.5 rounded-full text-xs md:text-sm font-black inline-block mb-4">
              باقات مدروسة تحقق أعلى عائد استثماري
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4">
              باقات <span className="text-emerald-600">تصميم المواقع الإلكترونية في الرياض</span>
            </h2>
            <p className="text-slate-600 font-bold text-base md:text-lg">
              اختر الباقة التي تناسب حجم أعمالك في الرياض، مع إمكانية تخصيص أي باقة بالكامل حسب متطلباتك:
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {riyadhPackages.map((pkg, idx) => (
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
                  <p
                    className={`text-sm font-bold mb-6 leading-relaxed ${
                      pkg.featured ? "text-slate-300" : "text-slate-600"
                    }`}
                  >
                    {pkg.desc}
                  </p>

                  <div
                    className={`border-t pt-6 mb-8 space-y-3 ${
                      pkg.featured ? "border-slate-700" : "border-emerald-200"
                    }`}
                  >
                    {pkg.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 text-xs md:text-sm font-black">
                        <FaCheckCircle
                          className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
                            pkg.featured ? "text-emerald-400" : "text-emerald-600"
                          }`}
                        />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <a
                  href={getWhatsappLink(`مرحباً م. عمرو، أرغب في طلب (${pkg.name}) في الرياض`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={pkg.cta}
                  className={`w-full py-4 px-6 rounded-2xl font-black text-center flex items-center justify-center gap-2 transition-all shadow-md ${
                    pkg.featured
                      ? "bg-emerald-500 hover:bg-emerald-400 text-slate-950"
                      : "bg-emerald-600 hover:bg-emerald-700 text-white"
                  }`}
                >
                  <FaWhatsapp className="w-5 h-5" />
                  <span>{pkg.cta}</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          11. الدليل الشامل والـ SEO Content المعمق لمدينة الرياض
      ===================================================================== */}
      <section className="py-20 px-4 md:px-10 bg-[#f5f7f5] border-b-4 border-emerald-500">
        <div className="max-w-5xl mx-auto bg-white border-4 border-emerald-500 rounded-3xl p-8 md:p-12 shadow-lg">
          <h2 className="text-2xl md:text-4xl font-black text-slate-900 mb-6 border-r-4 border-emerald-500 pr-4">
            دليلك الشامل لاختيار أفضل شركة تصميم مواقع الكترونية في الرياض (2026)
          </h2>

          <div className="space-y-6 text-slate-700 font-bold text-base leading-relaxed">
            <p>
              تُعد مدينة <strong className="text-slate-900">الرياض</strong> اليوم واحدة من أهم العواصم الاقتصادية والرقمية في الشرق الأوسط والعالم، ومع التوسع الهائل للشركات والمشاريع الكبرى واستقطاب المقرات الإقليمية، لم يعد امتلاك موقع إلكتروني عادي كافياً للمنافسة. إن البحث عن <strong className="text-emerald-700">شركة تصميم مواقع الكترونية في الرياض</strong> يعني البحث عن شريك تقني وتسويقي يفهم كيف يحول الزائر المحلي إلى عميل دائم.
            </p>

            <h3 className="text-xl md:text-2xl font-black text-emerald-700 pt-2">
              1. لماذا تحتاج شركات الرياض إلى تقنية Next.js والبرمجة الحديثة؟
            </h3>
            <p>
              عندما تطلق حملة إعلانية على سناب شات أو جوجل تستهدف سكان الرياض، فإن سرعة فتح الموقع هي العامل الحاسم بين نجاح الحملة أو خسارة الميزانية الإعلانية. المواقع المبنية بتقنية <strong className="text-slate-900">Next.js</strong> أو ووردبريس المسرّع هندسياً تضمن تحميل الصفحة في أجزاء من الثانية، مما يرفع من معدل بقاء الزائر ويضاعف فرص تواصله معك عبر الواتساب أو إتمام الشراء المباشر.
            </p>

            <h3 className="text-xl md:text-2xl font-black text-emerald-700 pt-2">
              2. دور السيو المحلي (Local SEO) في السيطرة على سوق الرياض
            </h3>
            <p>
              يبحث الآلاف من العملاء يومياً في جوجل بعبارات مثل (شركة مقاولات في الرياض، أفضل عيادة أسنان شمال الرياض، مكتب استشارات في العليا). من خلال تأسيس البنية التقنية للـ SEO، وضبط الـ Schema الجغرافية، وهيكلة الصفحات الخدمية، نضمن لموقعك الظهور في الصفوف الأولى أمام هؤلاء العملاء الباحثين عن خدماتك دون الحاجة لدفع تكاليف إعلانية مستمرة.
            </p>

            <h3 className="text-xl md:text-2xl font-black text-emerald-700 pt-2">
              3. التكامل مع وسائل الدفع والتقسيط والشحن المعتمدة في المملكة
            </h3>
            <p>
              المستهلك في الرياض يفضل السرعة والموثوقية عند الدفع؛ لذلك نوفر ربطاً برمجياً متكاملاً مع بطاقات <strong className="text-slate-900">مدى، Apple Pay، STC Pay</strong>، بالإضافة إلى حلول الشراء الآن والدفع لاحقاً عبر <strong className="text-emerald-700">تابي (Tabby) وتمارا (Tamara)</strong>، مع الربط المباشر بشركات التوصيل والشحن مثل سمسا وأرامكس وسبل لضمان دورة مبيعات آلية وسلسة تماماً.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================================
          12. الأسئلة الشائعة التفاعلية (10 FAQs ACCORDION)
      ===================================================================== */}
      <section className="py-24 px-4 md:px-10 bg-white border-b-4 border-emerald-500">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <span className="bg-emerald-100 text-emerald-800 border border-emerald-400 px-4 py-1 rounded-full text-xs md:text-sm font-black inline-block mb-3">
              إجابات شاملة وواضحة
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900">
              الأسئلة الشائعة حول <span className="text-emerald-600">تصميم المواقع في الرياض</span>
            </h2>
          </div>

          <div className="space-y-4">
            {riyadhFaqs.map((faq, idx) => (
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
          13. بانر الختام والـ Call To Action النهائي لصفحة الرياض
      ===================================================================== */}
      <section className="py-20 px-4 md:px-10 bg-slate-900 text-white relative overflow-hidden">
        <div className="max-w-5xl mx-auto relative z-10 bg-gradient-to-br from-emerald-700 to-emerald-900 border-4 border-emerald-400 rounded-3xl p-8 md:p-14 text-center shadow-2xl">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">
            هل أنت مستعد لإطلاق موقعك الإلكتروني وتصدر سوق الرياض؟
          </h2>
          <p className="text-emerald-100 font-bold text-base md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed">
            تواصل معنا الآن عبر الواتساب للحصول على استشارة مجانية شاملة وعرض سعر مخصص لتصميم وبرمجة موقعك أو متجرك الإلكتروني في الرياض بأعلى معايير الجودة والـ SEO.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={getWhatsappLink("مرحباً م. عمرو، أريد البدء في تصميم موقعي الإلكتروني في الرياض")}
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

    </div>
  );
}
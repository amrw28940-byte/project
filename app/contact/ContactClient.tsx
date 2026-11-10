"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import FloatingSocials from "../../components/FloatingSocials";
import {
  FaWhatsapp,
  FaUser,
  FaPhoneAlt,
  FaEnvelope,
  FaCogs,
  FaCheckCircle,
  FaCommentDots,
  FaPaperPlane,
  FaShieldAlt,
  FaBolt,
  FaClock,
  FaGlobe,
  FaMapMarkerAlt,
  FaRocket,
  FaHandshake,
  FaHeadset,
  FaFileInvoiceDollar,
  FaChevronDown,
  FaArrowLeft,
  FaLaptopCode,
  FaShoppingCart,
  FaSearchDollar,
  FaVideo,
  FaBuilding,
  FaCheckDouble,
  FaAward,
  FaLock
} from "react-icons/fa";

export default function ContactClient() {
  const [fullName, setFullName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [country, setCountry] = useState<string>("مصر");
  const [selectedService, setSelectedService] = useState<string>("تصميم وتطوير موقع Next.js");
  const [budgetRange, setBudgetRange] = useState<string>("أرغب في معرفة أفضل عرض سعر مناسب");
  const [startTimeline, setStartTimeline] = useState<string>("جاهز للبدء فوراً");
  const [projectNotes, setProjectNotes] = useState<string>("");
  const [formError, setFormError] = useState<string>("");
  const [activeRegionTab, setActiveRegionTab] = useState<number>(0);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const whatsappNumber = "201020347946";
  const displayPhone = "01020347946";
  const getDirectWhatsappLink = (customMessage: string) => {
    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(customMessage)}`;
  };

  // قائمة الخدمات المتاحة للاختيار السريع
  const servicesList = [
    "تصميم وتطوير موقع Next.js",
    "تصميم موقع شركة تعريفي (Corporate)",
    "تصميم متجر إلكتروني متكامل (E-Commerce)",
    "تصميم صفحة هبوط إعلانية (Landing Page)",
    "تصميم وإنتاج فيديو بالذكاء الاصطناعي (AI Video)",
    "تصميم وتطوير متجر شوبيفاي (Shopify)",
    "تصميم وتطوير موقع ووردبريس (WordPress)",
    "تحسين محركات البحث وتصدر جوجل (SEO)",
    "استشارة تقنية أو مشروع برمجة خاصة"
  ];

  const countriesList = [
    "مصر",
    "المملكة العربية السعودية",
    "الإمارات العربية المتحدة",
    "دولة الكويت",
    "قطر / البحرين / عمان",
    "دولة أخرى"
  ];

  const timelineOptions = [
    "جاهز للبدء فوراً",
    "خلال أسبوع",
    "خلال شهر",
    "أجمع عروض أسعار حالياً"
  ];

  const budgetOptions = [
    "أرغب في معرفة أفضل عرض سعر مناسب",
    "باقة اقتصادية لمشروع ناشئ",
    "باقة متقدمة لشركة أو متجر متكامل",
    "مشروع برمجة خاصة (Enterprise)"
  ];

  // =====================================================================
  // دالة إرسال البيانات تلقائياً في رسالة منسقة إلى الواتساب
  // =====================================================================
  const handleWhatsappSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!fullName.trim() || !phone.trim() || !email.trim()) {
      setFormError("يرجى إدخال الاسم، رقم الهاتف، والبريد الإلكتروني لإتمام إرسال الطلب.");
      return;
    }

    setFormError("");

    const formattedMessage = `مرحباً م. عمرو، لدي طلب مشروع جديد عبر صفحة تواصل معنا:
----------------------------------
👤 *الاسم الكامل:* ${fullName}
📱 *رقم الهاتف:* ${phone}
📧 *البريد الإلكتروني:* ${email}
🌍 *الدولة / السوق:* ${country}
🚀 *الخدمة المطلوبة:* ${selectedService}
⏱ *موعد البدء:* ${startTimeline}
💼 *الفئة المطلوبة:* ${budgetRange}
📝 *تفاصيل إضافية:* ${projectNotes.trim() ? projectNotes : "لا توجد ملاحظات إضافية"}
----------------------------------
أرجو التواصل معي لمناقشة خطة العمل وعرض السعر.`;

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      formattedMessage
    )}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  // =====================================================================
  // 1. قنوات التواصل السريع حسب القسم المختص
  // =====================================================================
  const contactDepartments = [
    {
      icon: <FaRocket className="w-8 h-8 text-emerald-600" />,
      badge: "رد فوري خلال دقائق",
      title: "قسم المبيعات والمشاريع الجديدة",
      desc: "لطلب عروض الأسعار، مناقشة أفكار المواقع والمتاجر الجديدة، واختيار الباقة والتقنية الأنسب لميزانيتك وأهدافك.",
      actionText: "تحدث مع المبيعات عبر واتساب",
      waMessage: "مرحباً م. عمرو، أرغب في الاستفسار عن مشروع جديد وطلب عرض سعر"
    },
    {
      icon: <FaSearchDollar className="w-8 h-8 text-emerald-600" />,
      badge: "فحص مجاني لموقعك",
      title: "قسم استشارات الـ SEO والنمو الرقمي",
      desc: "لطلب فحص شامل لموقعك الحالي، دراسة الكلمات المفتاحية لمنافسيك، ووضع خطة تصدر نتائج بحث جوجل في دولتك.",
      actionText: "اطلب استشارة سيو الآن",
      waMessage: "مرحباً م. عمرو، أرغب في استشارة حول تحسين محركات البحث SEO لموقعي"
    },
    {
      icon: <FaHeadset className="w-8 h-8 text-emerald-600" />,
      badge: "دعم تقني متواصل",
      title: "قسم الدعم الفني وتطوير المواقع القائمة",
      desc: "لعملائنا الحاليين أو الشركات الراغبة في تطوير وتسريع مواقعها الحالية، ربط بوابات الدفع والشحن، أو حل المشاكل التقنية.",
      actionText: "تواصل مع الدعم الفني",
      waMessage: "مرحباً م. عمرو، أحتاج إلى دعم تقني / تطوير لموقعي الإلكتروني الحالي"
    },
    {
      icon: <FaHandshake className="w-8 h-8 text-emerald-600" />,
      badge: "تعاون طويل الأمد",
      title: "قسم الشراكات وعقود الشركات والوكالات",
      desc: "للتعاقدات السنوية، شراكات الوكالات التسويقية (White-Label Development)، وإدارة المنصات الرقمية للشركات الكبرى.",
      actionText: "ناقش فرص الشراكة معنا",
      waMessage: "مرحباً م. عمرو، أرغب في مناقشة شراكة عمل / عقد تطوير طويل الأمد"
    }
  ];

  // =====================================================================
  // 2. بيانات الأسواق الإقليمية التي نخدمها (Regional Hubs)
  // =====================================================================
  const regionalHubs = [
    {
      countryName: "جمهورية مصر العربية (القاهرة، الإسكندرية، وكافة المحافظات)",
      flag: "🇪🇬",
      badge: "المركز الرئيسي والتطوير الهندسي",
      title: "حلول رقمية متكاملة للشركات، المصانع، والبراندات في السوق المصري",
      desc: "نقدم للشركات المصرية في القاهرة الكبرى، الإسكندرية، الدلتا، والمدن الصناعية والسياحية مواقع ومنصات رقمية فائقة السرعة، مع تكامل برمجي شامل مع منظومة الدفع والشحن المصرية.",
      localIntegrations: [
        "ربط بوابات Paymob, Fawry, Kashier, فودافون كاش، وانستا باي",
        "تفعيل التقسيط عبر فاليو (ValU)، سهولة، وسيمبل",
        "ربط أوتوماتيكي مع شركات الشحن (Bosta بوسطة، Mylerz مايلرز)",
        "تأسيس سيو محلي ودولي للمصانع وشركات السياحة والعقارات"
      ],
      quickLinks: [
        { label: "تصميم مواقع في مصر", href: "/websitedesigncompanyegypt" },
        { label: "تصميم مواقع في القاهرة", href: "/websitedesigncompanycairo" },
        { label: "تصميم مواقع في الإسكندرية", href: "/websitedesigncompanyalexandria" }
      ]
    },
    {
      countryName: "المملكة العربية السعودية (الرياض، جدة، الدمام، وكافة المدن)",
      flag: "🇸🇦",
      badge: "تغطية شاملة للسوق السعودي",
      title: "منصات ومواقع ومتاجر معتمدة تواكب رؤية المملكة 2030",
      desc: "نخدم الشركات، المؤسسات، والبراندات في الرياض وجدة وكافة مناطق المملكة بمواقع إلكترونية فائقة الفخامة والأمان، متوافقة مع الفوترة الإلكترونية وبوابات الدفع والشحن السعودية.",
      localIntegrations: [
        "ربط رسمي مع مدى (Mada)، Apple Pay، و STC Pay",
        "تفعيل خدمات التقسيط الذكية تابي (Tabby) وتمارا (Tamara)",
        "ربط شركات الشحن السعودية (سمسا SMSA، أرامكس، سبل، برق)",
        "تهيئة سيو محلي قوي لتصدر البحث في الرياض وجدة والمنطقة الشرقية"
      ],
      quickLinks: [
        { label: "تصميم مواقع في السعودية", href: "/websitedesigncompanysaudiarabia" },
        { label: "تصميم مواقع في الرياض", href: "/websitedesigncompanyriyadh" },
        { label: "تصميم مواقع في جدة", href: "/websitedesigncompanyjeddah" }
      ]
    },
    {
      countryName: "دولة الإمارات العربية المتحدة (دبي، أبوظبي، الشارقة، وكافة الإمارات)",
      flag: "🇦🇪",
      badge: "معايير عالمية متعددة اللغات",
      title: "هندسة برمجية لشركات البر الرئيسي والمناطق الحرة في الإمارات",
      desc: "نصمم للشركات العقارية، السياحية، التجارية، والصناعية في دبي وأبوظبي والشارقة منصات رقمية ثنائية ومتعددة اللغات (عربي / إنجليزي / روسي) مربوطة بأحدث أنظمة الدفع والـ CRM.",
      localIntegrations: [
        "ربط مباشر مع Stripe UAE, Network International, PayTabs, Telr",
        "تفعيل Apple Pay وتقسيط المشتريات عبر تابي وتمارا بالدرهم (AED)",
        "ربط أنظمة إدارة العملاء العقارية والخدمية (Bitrix24 & HubSpot)",
        "ضبط ضريبة القيمة المضافة الإماراتية (5% VAT) وشركات التوصيل"
      ],
      quickLinks: [
        { label: "تصميم مواقع في الإمارات", href: "/websitedesigncompanyuae" },
        { label: "تصميم مواقع في دبي", href: "/websitedesigncompanydubai" },
        { label: "تصميم مواقع في الشارقة", href: "/websitedesigncompanysharjah" }
      ]
    },
    {
      countryName: "دولة الكويت (العاصمة، حولي، السالمية، الفروانية، وكافة المحافظات)",
      flag: "🇰🇼",
      badge: "تكامل كامل مع كي نت KNET",
      title: "مواقع ومتاجر إلكترونية مصممة لذوق وتطلعات السوق الكويتي",
      desc: "نساعد الشركات، العيادات الطبية، المطاعم، والمبادرين في دولة الكويت على إطلاق مواقع ومتاجر إلكترونية فائقة السرعة تعمل بالدينار الكويتي وتدعم الدفع الفوري عبر كي نت.",
      localIntegrations: [
        "ربط رسمي مع كي نت (KNET) و Apple Pay عبر ماي فاتورة وتاب و Upayments",
        "تقسيم آلي لمحافظات ومناطق الكويت الستة لحساب التوصيل تلقائياً",
        "ربط شركات التوصيل في الكويت (مشكور، أرمادا، بوستا بلس)",
        "تأسيس سيو محلي (Kuwait SEO) لتصدر نتائج بحث جوجل الكويت"
      ],
      quickLinks: [
        { label: "تصميم مواقع في الكويت", href: "/websitedesigncompanykuwait" }
      ]
    }
  ];

  // =====================================================================
  // 3. خطوات ما بعد التواصل معنا (Onboarding Journey)
  // =====================================================================
  const onboardingSteps = [
    {
      stepNum: "01",
      timeTag: "خلال 15 دقيقة",
      title: "استلام طلبك والرد الاستشاري الفوري",
      desc: "بمجرد إرسالك لرسالة الواتساب، يتواصل معك م. عمرو سالم شخصياً لفهم فكرة مشروعك، الإجابة على استفساراتك، وتحديد المتطلبات الأساسية."
    },
    {
      stepNum: "02",
      timeTag: "خلال نفس اليوم",
      title: "تقديم خطة العمل وعرض السعر المفصل",
      desc: "نرسل لك تصوراً فنياً واضحاً يشمل التقنية المرشحة (Next.js / WordPress / Shopify)، قائمة المميزات، الجدول الزمني للتسليم، والتكلفة الدقيقة بدون أي رسوم خفية."
    },
    {
      stepNum: "03",
      timeTag: "بدء التنفيذ",
      title: "تصميم الواجهة البصرية والبرمجة المتقدمة",
      desc: "نبدأ فوراً في تصميم واجهة المستخدم (UI/UX) بهوية شركتك، وبناء الكود البرمجي فائق السرعة، مع إطلاعك على رابط معاينة حي لمتابعة تقدم العمل خطوة بخطوة."
    },
    {
      stepNum: "04",
      timeTag: "الإطلاق والنجاح",
      title: "الفحص الشامل، التسليم، والتدريب والدعم",
      desc: "نربط الدومين، بوابات الدفع، والـ SEO، ونطلق موقعك رسمياً مع تسليمك كافة الصلاحيات وتدريبك الكامل على لوحة التحكم وتقديم دعم فني مجاني متواصل."
    }
  ];

  // =====================================================================
  // 4. الأسئلة الشائعة قبل التعاقد (Pre-Contract FAQs)
  // =====================================================================
  const contactFaqs = [
    {
      q: "هل الاستشارة الأولية وطلب عرض السعر مجاني بالكامل؟",
      a: "نعم 100%. يمكنك التواصل معنا عبر الواتساب في أي وقت لمناقشة فكرة مشروعك أو إرسال رابط موقعك الحالي لفحصه، وسنقدم لك استشارة تقنية وتسويقية أمينة مع عرض سعر مفصل مجاناً تماماً ودون أي التزام."
    },
    {
      q: "ما هي طريقة الدفع المتاحة عند الاتفاق على بدء المشروع؟",
      a: "نوفر طرق دفع مرنة وميسرة على دفعات مرتبطة بمراحل إنجاز العمل لضمان راحتك ورضاك التام. ونقبل التحويلات البنكية المحلية والدولية، انستا باي (InstaPay)، المحافظ الإلكترونية، ووسائل الدفع المعتمدة في مصر والسعودية والإمارات والكويت."
    },
    {
      q: "هل أحصل على ملكية كاملة للدومين والموقع والأكواد بعد التسليم؟",
      a: "بالتأكيد! أنت المالك الوحيد والحصري بنسبة 100% لاسم النطاق (Domain)، حساب الاستضافة، لوحة التحكم، وكافة الأكواد البرمجية والملفات. لا نفرض أي قيود أو احتكار على مشروعك."
    },
    {
      q: "ماذا لو لم يكن لدي محتوى جاهز أو تصور كامل لشكل الموقع؟",
      a: "لا تقلق إطلاقاً؛ هذه مهمتنا! بمجرد أن تخبرنا بمجال عملك، نقوم نحن بدراسة منافسيك، اقتراح الهيكلة والأقسام المثالية للموقع، ومساعدتك في صياغة المحتوى التسويقي والبيعي (Copywriting) وتصميم الهوية البصرية المناسبة."
    },
    {
      q: "هل تلتزمون بموعد التسليم المتفق عليه؟ وهل يوجد دعم بعد التسليم؟",
      a: "الالتزام الدقيق بالمواعيد هو أساس عملنا. يتم تحديد جدول زمني واضح لكل مرحلة من مراحل المشروع، وبعد الإطلاق الرسمي نقدم لك فترة دعم فني مجاني شامل مع شرح تدريبي مسجل ومباشر لكيفية إدارة موقعك بسهولة."
    },
    {
      q: "هل يمكنني طلب خدمة كتابة مقالات سيو أو تصميم فيديوهات AI مع الموقع؟",
      a: "نعم بالتأكيد، نحن استوديو رقمي متكامل؛ يمكنك طلب باقة شاملة تضم تصميم وبرمجة الموقع، تأسيس السيو (SEO)، تصميم صفحات الهبوط، وإنتاج الفيديوهات الإعلانية بالذكاء الاصطناعي لتنطلق في السوق بقوة كاملة."
    }
  ];

  return (
    <div className="min-h-screen bg-[#f5f7f5] text-slate-900 overflow-x-hidden" dir="rtl">
      <FloatingSocials />
      <section className="relative w-full pt-32 pb-16 md:pt-40 md:pb-24 px-4 md:px-10 overflow-hidden bg-[#f5f7f5] border-b-4 border-emerald-500">
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
          className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[450px] pointer-events-none z-0"
          style={{
            background: "radial-gradient(circle, rgba(16, 185, 129, 0.15) 0%, transparent 70%)",
            filter: "blur(95px)",
          }}
        />

        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 bg-emerald-100 border-2 border-emerald-500 text-emerald-900 px-4 py-1.5 rounded-full font-black text-xs md:text-sm mb-6 shadow-sm">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 animate-ping inline-block" />
              <span>متاحون الآن للرد الفوري على استفساراتكم ومشاريعكم</span>
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-slate-900 leading-[1.2] mb-6">
              تواصل معنا وابدأ بناء <span className="text-emerald-600 underline decoration-emerald-400 decoration-4 underline-offset-8">مشروعك الرقمي المتصدر</span> اليوم
            </h1>

            <p className="text-base md:text-xl text-slate-700 font-bold leading-relaxed mb-10 max-w-3xl mx-auto">
              سواء كنت تخطط لإطلاق موقع إلكتروني خارق السرعة بـ <strong className="text-emerald-700">Next.js أو WordPress</strong>، أو بناء متجر إلكتروني متكامل، أو صفحة هبوط، أو فيديو إعلاني بالـ <strong className="text-emerald-700">AI</strong>؛ املأ النموذج بالأسفل أو تواصل معنا مباشرة عبر الواتساب للحصول على <strong className="text-slate-900">استشارة مجانية وعرض سعر مفصل خلال دقائق</strong>.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto">
              <a
                href={getDirectWhatsappLink("مرحباً م. عمرو، أريد الاستفسار عن تصميم وتطوير مشروع رقمي")}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-600 hover:bg-emerald-700 text-white border-2 border-emerald-800 rounded-2xl p-4 flex items-center justify-center gap-3 shadow-lg transition-transform hover:-translate-y-1"
              >
                <FaWhatsapp className="w-8 h-8 flex-shrink-0" />
                <div className="text-right">
                  <span className="text-xs text-emerald-100 font-bold block">واتساب مباشر (رد فوري)</span>
                  <span className="text-lg font-black tracking-wide" dir="ltr">{displayPhone}</span>
                </div>
              </a>

              <a
                href={`tel:+${whatsappNumber}`}
                className="bg-slate-900 hover:bg-slate-800 text-white border-2 border-emerald-500 rounded-2xl p-4 flex items-center justify-center gap-3 shadow-lg transition-transform hover:-translate-y-1"
              >
                <FaPhoneAlt className="w-6 h-6 text-emerald-400 flex-shrink-0" />
                <div className="text-right">
                  <span className="text-xs text-slate-300 font-bold block">اتصال هاتفي مباشر</span>
                  <span className="text-lg font-black tracking-wide" dir="ltr">{displayPhone}</span>
                </div>
              </a>

              <div className="bg-white border-2 border-emerald-500 rounded-2xl p-4 flex items-center justify-center gap-3 shadow-sm">
                <FaGlobe className="w-7 h-7 text-emerald-600 flex-shrink-0" />
                <div className="text-right">
                  <span className="text-xs text-slate-500 font-bold block">نطاق خدماتنا الإقليمي</span>
                  <span className="text-sm md:text-base font-black text-slate-900">مصر • السعودية • الإمارات • الكويت</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      <section className="py-20 px-4 md:px-10 bg-slate-900 text-white border-b-4 border-emerald-500 relative overflow-hidden">
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(16, 185, 129, 0.05) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(16, 185, 129, 0.05) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                        <motion.div
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-8 bg-white text-slate-900 rounded-3xl border-4 border-emerald-500 p-6 sm:p-8 md:p-10 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.45)]"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b-2 border-emerald-100 pb-6 mb-8">
                <div>
                  <span className="bg-emerald-100 text-emerald-800 border border-emerald-400 px-3 py-1 rounded-full text-xs font-black inline-block mb-2">
                    تحويل ذكي وتلقائي إلى الواتساب
                  </span>
                  <h2 className="text-2xl md:text-3xl font-black text-slate-900">
                    سجل بياناتك واختر خدمتك الآن
                  </h2>
                  <p className="text-xs md:text-sm text-slate-600 font-bold mt-1">
                    بمجرد الضغط على زر الإرسال، ستنتقل كافة اختياراتك تلقائياً إلى محادثة الواتساب المباشرة معنا.
                  </p>
                </div>
                <div className="bg-emerald-600 text-white p-4 rounded-2xl shadow-md self-start sm:self-center">
                  <FaWhatsapp className="w-8 h-8" />
                </div>
              </div>

              <form onSubmit={handleWhatsappSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-black text-slate-900 text-sm mb-2">
                      1. الاسم الكامل أو اسم الشركة <span className="text-emerald-600">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="اكتب اسمك أو اسم شركتك..."
                        className="w-full bg-[#f5f7f5] border-2 border-emerald-300 focus:border-emerald-600 focus:bg-white rounded-2xl py-3.5 pr-11 pl-4 text-sm font-black text-slate-900 outline-none transition-all"
                      />
                      <FaUser className="absolute right-4 top-1/2 -translate-y-1/2 text-emerald-600 w-4 h-4" />
                    </div>
                  </div>

                  <div>
                    <label className="block font-black text-slate-900 text-sm mb-2">
                      2. رقم الهاتف / الجوال <span className="text-emerald-600">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="مثال: 010xxxxxxx أو +9665xxxxxxx"
                        className="w-full bg-[#f5f7f5] border-2 border-emerald-300 focus:border-emerald-600 focus:bg-white rounded-2xl py-3.5 pr-11 pl-4 text-sm font-black text-slate-900 outline-none transition-all"
                        dir="ltr"
                        style={{ textAlign: "right" }}
                      />
                      <FaPhoneAlt className="absolute right-4 top-1/2 -translate-y-1/2 text-emerald-600 w-4 h-4" />
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-black text-slate-900 text-sm mb-2">
                      3. البريد الإلكتروني (Email) <span className="text-emerald-600">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="name@example.com"
                        className="w-full bg-[#f5f7f5] border-2 border-emerald-300 focus:border-emerald-600 focus:bg-white rounded-2xl py-3.5 pr-11 pl-4 text-sm font-black text-slate-900 outline-none transition-all"
                        dir="ltr"
                        style={{ textAlign: "right" }}
                      />
                      <FaEnvelope className="absolute right-4 top-1/2 -translate-y-1/2 text-emerald-600 w-4 h-4" />
                    </div>
                  </div>

                  <div>
                    <label className="block font-black text-slate-900 text-sm mb-2">
                      4. الدولة / السوق المستهدف
                    </label>
                    <div className="relative">
                      <select
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                        className="w-full bg-[#f5f7f5] border-2 border-emerald-300 focus:border-emerald-600 focus:bg-white rounded-2xl py-3.5 pr-11 pl-4 text-sm font-black text-slate-900 outline-none transition-all cursor-pointer"
                      >
                        {countriesList.map((cnt, idx) => (
                          <option key={idx} value={cnt} className="font-bold text-slate-900">
                            {cnt}
                          </option>
                        ))}
                      </select>
                      <FaMapMarkerAlt className="absolute right-4 top-1/2 -translate-y-1/2 text-emerald-600 w-4 h-4 pointer-events-none" />
                    </div>
                  </div>
                </div>
                <div className="bg-[#f5f7f5] p-5 rounded-2xl border-2 border-emerald-200">
                  <label className="block font-black text-slate-900 text-sm mb-3">
                    5. اختر الخدمة المطلوبة لمشروعك <span className="text-emerald-600">*</span>
                  </label>

                  <div className="relative mb-4">
                    <select
                      value={selectedService}
                      onChange={(e) => setSelectedService(e.target.value)}
                      className="w-full bg-white border-2 border-emerald-400 focus:border-emerald-600 rounded-xl py-3 pr-10 pl-4 text-sm font-black text-slate-900 outline-none transition-all cursor-pointer"
                    >
                      {servicesList.map((srv, idx) => (
                        <option key={idx} value={srv} className="font-bold text-slate-900">
                          {srv}
                        </option>
                      ))}
                    </select>
                    <FaCogs className="absolute right-3.5 top-1/2 -translate-y-1/2 text-emerald-600 w-4 h-4 pointer-events-none" />
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {servicesList.map((srv, idx) => (
                      <button
                        type="button"
                        key={idx}
                        onClick={() => setSelectedService(srv)}
                        className={`px-3 py-2 rounded-xl text-xs font-black transition-all border-2 flex items-center gap-1.5 ${
                          selectedService === srv
                            ? "bg-slate-900 text-emerald-400 border-emerald-500 shadow-md"
                            : "bg-white text-slate-700 border-emerald-200 hover:border-emerald-400"
                        }`}
                      >
                        <FaCheckCircle
                          className={`w-3.5 h-3.5 ${
                            selectedService === srv ? "text-emerald-400" : "text-slate-300"
                          }`}
                        />
                        <span>{srv}</span>
                      </button>
                    ))}
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-black text-slate-900 text-sm mb-2">
                      6. متى ترغب في بدء المشروع؟
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {timelineOptions.map((tl, idx) => (
                        <button
                          type="button"
                          key={idx}
                          onClick={() => setStartTimeline(tl)}
                          className={`p-2.5 rounded-xl text-xs font-black border-2 transition-all ${
                            startTimeline === tl
                              ? "bg-emerald-600 text-white border-emerald-800 shadow-sm"
                              : "bg-[#f5f7f5] text-slate-700 border-emerald-200 hover:border-emerald-400"
                          }`}
                        >
                          {tl}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block font-black text-slate-900 text-sm mb-2">
                      7. فئة الباقة أو الميزانية:
                    </label>
                    <select
                      value={budgetRange}
                      onChange={(e) => setBudgetRange(e.target.value)}
                      className="w-full bg-[#f5f7f5] border-2 border-emerald-300 focus:border-emerald-600 rounded-2xl py-3.5 px-4 text-xs md:text-sm font-black text-slate-900 outline-none transition-all cursor-pointer"
                    >
                      {budgetOptions.map((bo, idx) => (
                        <option key={idx} value={bo} className="font-bold text-slate-900">
                          {bo}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block font-black text-slate-900 text-sm mb-2">
                    8. نبذة عن فكرة مشروعك أو رابط موقعك الحالي (اختياري)
                  </label>
                  <div className="relative">
                    <textarea
                      rows={3}
                      value={projectNotes}
                      onChange={(e) => setProjectNotes(e.target.value)}
                      placeholder="اكتب أي تفاصيل تود مشاركتها معنا (مثال: طبيعة النشاط، عدد الصفحات، أمثلة لمواقع تعجبك...)"
                      className="w-full bg-[#f5f7f5] border-2 border-emerald-300 focus:border-emerald-600 focus:bg-white rounded-2xl py-3.5 pr-11 pl-4 text-sm font-black text-slate-900 outline-none transition-all resize-none"
                    />
                    <FaCommentDots className="absolute right-4 top-4 text-emerald-600 w-4 h-4" />
                  </div>
                </div>
                {formError && (
                  <div className="bg-amber-50 border-2 border-amber-500 text-amber-900 px-4 py-3 rounded-xl text-xs md:text-sm font-black">
                    ⚠️ {formError}
                  </div>
                )}
                <button
                  type="submit"
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-black text-base md:text-xl py-4.5 px-8 rounded-2xl shadow-[0_15px_30px_-5px_rgba(16,185,129,0.5)] border-2 border-emerald-800 transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-3 cursor-pointer"
                >
                  <FaWhatsapp className="w-7 h-7" />
                  <span>إرسال البيانات وفتح الواتساب تلقائياً</span>
                  <FaPaperPlane className="w-4 h-4 mr-1" />
                </button>
              </form>
            </motion.div>

            {/* العمود الأيسر: شاشة المعاينة الحية للرسالة + ضمانات العمل */}
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="lg:col-span-4 space-y-6"
            >
              <div className="bg-slate-800 border-4 border-emerald-500 rounded-3xl p-6 shadow-2xl">
                <div className="flex items-center justify-between border-b border-slate-700 pb-3 mb-4">
                  <span className="text-xs font-black text-emerald-400 flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping inline-block" />
                    معاينة رسالتك الجاهزة للإرسال
                  </span>
                  <span className="text-xs font-mono text-slate-300 font-bold" dir="ltr">
                    {displayPhone}
                  </span>
                </div>

                <div className="bg-slate-900 rounded-2xl p-4 border border-emerald-500/40 text-xs md:text-sm space-y-2.5 font-bold text-slate-200">
                  <p className="text-emerald-300 font-black border-b border-slate-800 pb-2">
                    مرحباً م. عمرو، لدي طلب مشروع جديد:
                  </p>
                  <p>
                    👤 <span className="text-slate-400">الاسم:</span>{" "}
                    <span className="text-white font-black">{fullName || "يظهر هنا تلقائياً..."}</span>
                  </p>
                  <p>
                    📱 <span className="text-slate-400">الهاتف:</span>{" "}
                    <span className="text-white font-black" dir="ltr">{phone || "---"}</span>
                  </p>
                  <p>
                    📧 <span className="text-slate-400">الإيميل:</span>{" "}
                    <span className="text-white font-black" dir="ltr">{email || "---"}</span>
                  </p>
                  <p>
                    🌍 <span className="text-slate-400">الدولة:</span>{" "}
                    <span className="text-white font-black">{country}</span>
                  </p>
                  <p>
                    🚀 <span className="text-slate-400">الخدمة:</span>{" "}
                    <span className="text-emerald-400 font-black">{selectedService}</span>
                  </p>
                  <p>
                    ⏱ <span className="text-slate-400">البدء:</span>{" "}
                    <span className="text-white font-black">{startTimeline}</span>
                  </p>
                  {projectNotes && (
                    <p className="border-t border-slate-800 pt-2">
                      📝 <span className="text-slate-400">ملاحظات:</span>{" "}
                      <span className="text-emerald-200">{projectNotes}</span>
                    </p>
                  )}
                </div>
              </div>
              <div className="bg-slate-800 border-2 border-emerald-500/70 rounded-3xl p-6 space-y-5 shadow-xl">
                <h3 className="text-lg font-black text-emerald-400 border-b border-slate-700 pb-3">
                  لماذا تبدأ مشروعك مع م. عمرو سالم؟
                </h3>

                <div className="flex items-start gap-3">
                  <div className="bg-slate-900 p-3 rounded-xl border border-emerald-500/40 text-emerald-400 mt-0.5">
                    <FaBolt className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-black text-white text-sm md:text-base">تواصل مباشر مع المطور</h4>
                    <p className="text-xs text-slate-300 font-bold leading-relaxed mt-1">
                      تتعامل مباشرة مع م. عمرو سالم دون وسطاء، مما يضمن فهماً دقيقاً لمتطلباتك وسرعة في التنفيذ.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-slate-900 p-3 rounded-xl border border-emerald-500/40 text-emerald-400 mt-0.5">
                    <FaAward className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-black text-white text-sm md:text-base">جودة برمجية وتأسيس SEO</h4>
                    <p className="text-xs text-slate-300 font-bold leading-relaxed mt-1">
                      كل موقع نسلمه يكون مهيأً بالكامل لتصدر نتائج بحث جوجل وبسرعة تحميل قياسية 99%.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-slate-900 p-3 rounded-xl border border-emerald-500/40 text-emerald-400 mt-0.5">
                    <FaLock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-black text-white text-sm md:text-base">ملكية كاملة 100% ودعم فني</h4>
                    <p className="text-xs text-slate-300 font-bold leading-relaxed mt-1">
                      تستلم ملكية كاملة للدومين والأكواد ولوحة التحكم، مع تدريب شامل ودعم فني مجاني بعد الإطلاق.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>
      <section className="py-24 px-4 md:px-10 bg-white border-b-4 border-emerald-500">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="bg-emerald-100 text-emerald-800 border border-emerald-400 px-4 py-1 rounded-full text-xs md:text-sm font-black inline-block mb-4">
              قنوات مخصصة لخدمتك بسرعة
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4">
              اختر القسم المختص بـ <span className="text-emerald-600">استفسارك المباشر</span>
            </h2>
            <p className="text-slate-600 font-bold text-base md:text-lg">
              يمكنك أيضاً الضغط مباشرة على القسم الذي تود التحدث معه لفتح محادثة فورية:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactDepartments.map((dept, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                whileHover={{ y: -6 }}
                className="bg-[#f5f7f5] border-4 border-emerald-500 rounded-3xl p-6 flex flex-col justify-between shadow-lg transition-all"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-5">
                    <div className="bg-white border-2 border-emerald-400 p-3.5 rounded-2xl shadow-sm">
                      {dept.icon}
                    </div>
                    <span className="bg-slate-900 text-emerald-400 text-[11px] font-black px-3 py-1 rounded-full border border-emerald-500">
                      {dept.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-black text-slate-900 mb-3">
                    {dept.title}
                  </h3>
                  <p className="text-slate-600 font-bold text-xs md:text-sm leading-relaxed mb-6">
                    {dept.desc}
                  </p>
                </div>

                <a
                  href={getDirectWhatsappLink(dept.waMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-black text-xs md:text-sm py-3.5 px-4 rounded-xl flex items-center justify-center gap-2 transition-colors shadow-md"
                >
                  <FaWhatsapp className="w-4 h-4" />
                  <span>{dept.actionText}</span>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-24 px-4 md:px-10 bg-[#f5f7f5] border-b-4 border-emerald-500">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="bg-emerald-600 text-white px-4 py-1.5 rounded-full text-xs md:text-sm font-black inline-block mb-4">
              خبرة محلية وإقليمية واسعة
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4">
              نخدم الشركات والمتاجر في <span className="text-emerald-600">مصر، السعودية، الإمارات، والكويت</span>
            </h2>
            <p className="text-slate-600 font-bold text-base md:text-lg">
              اختر دولتك لتتعرف على خدمات الربط المالي واللوجستي والصفحات المخصصة لسوقك المحلي:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
            {regionalHubs.map((hub, idx) => (
              <button
                key={idx}
                onClick={() => setActiveRegionTab(idx)}
                className={`p-4 rounded-2xl border-2 text-right font-black text-xs md:text-sm transition-all flex flex-col justify-between ${
                  activeRegionTab === idx
                    ? "bg-slate-900 text-emerald-400 border-emerald-500 shadow-xl scale-[1.02]"
                    : "bg-white text-slate-800 border-emerald-200 hover:border-emerald-400"
                }`}
              >
                <span className="text-lg mb-1 block">{hub.flag}</span>
                <span>{hub.countryName}</span>
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeRegionTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="bg-white border-4 border-emerald-500 rounded-3xl p-8 md:p-12 shadow-xl"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-8">
                  <span className="inline-block bg-emerald-100 text-emerald-900 border border-emerald-400 px-3.5 py-1 rounded-full text-xs font-black mb-4">
                    {regionalHubs[activeRegionTab].badge}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-4">
                    {regionalHubs[activeRegionTab].title}
                  </h3>
                  <p className="text-slate-700 font-bold text-base leading-relaxed mb-6">
                    {regionalHubs[activeRegionTab].desc}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                    {regionalHubs[activeRegionTab].localIntegrations.map((integ, iIdx) => (
                      <div key={iIdx} className="bg-[#f5f7f5] p-3.5 rounded-xl border border-emerald-300 flex items-start gap-2.5">
                        <FaCheckDouble className="text-emerald-600 w-4 h-4 mt-0.5 flex-shrink-0" />
                        <span className="text-xs md:text-sm font-black text-slate-800">{integ}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-wrap items-center gap-2 pt-2">
                    <span className="text-xs font-black text-slate-500 ml-2">صفحات الخدمة المخصصة:</span>
                    {regionalHubs[activeRegionTab].quickLinks.map((ql, qIdx) => (
                      <Link
                        key={qIdx}
                        href={ql.href}
                        className="bg-slate-900 hover:bg-emerald-700 text-emerald-300 hover:text-white text-xs font-black px-3.5 py-2 rounded-xl transition-colors flex items-center gap-1.5"
                      >
                        <span>{ql.label}</span>
                        <FaArrowLeft className="w-3 h-3" />
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-4 bg-slate-900 text-white border-2 border-emerald-500 rounded-2xl p-6 text-center flex flex-col items-center justify-center">
                  <div className="text-5xl mb-3">{regionalHubs[activeRegionTab].flag}</div>
                  <h4 className="text-xl font-black text-white mb-2">
                    اطلب عرض سعر لمشروعك
                  </h4>
                  <p className="text-slate-300 text-xs md:text-sm font-bold mb-6 leading-relaxed">
                    تواصل معنا عبر الواتساب للحصول على استشارة مجانية وعرض سعر مخصص لسوقك المحلي.
                  </p>
                  <a
                    href={getDirectWhatsappLink(`مرحباً م. عمرو، أتواصل معك من (${regionalHubs[activeRegionTab].countryName}) وأرغب في تصميم مشروع رقمي`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black py-3.5 px-6 rounded-xl flex items-center justify-center gap-2 transition-colors shadow-lg text-sm"
                  >
                    <FaWhatsapp className="w-5 h-5" />
                    <span>تواصل عبر واتساب الآن</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
      <section className="py-24 px-4 md:px-10 bg-white border-b-4 border-emerald-500">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="bg-emerald-100 text-emerald-800 border border-emerald-400 px-4 py-1 rounded-full text-xs md:text-sm font-black inline-block mb-4">
              رحلة عمل واضحة ومنظمة
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4">
              ماذا يحدث بعد <span className="text-emerald-600">تواصلك معنا اليوم</span>؟
            </h2>
            <p className="text-slate-600 font-bold text-base md:text-lg">
              نختصر عليك الوقت والجهد في 4 خطوات احترافية من أول رسالة وحتى إطلاق موقعك:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {onboardingSteps.map((step, idx) => (
              <div
                key={idx}
                className="bg-[#f5f7f5] border-4 border-emerald-500 rounded-3xl p-7 flex flex-col justify-between shadow-md hover:shadow-xl transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="w-12 h-12 rounded-2xl bg-slate-900 text-emerald-400 font-black text-xl flex items-center justify-center border-2 border-emerald-500">
                      {step.stepNum}
                    </span>
                    <span className="text-xs font-black text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full border border-emerald-400">
                      ⏱ {step.timeTag}
                    </span>
                  </div>
                  <h3 className="text-xl font-black text-slate-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 font-bold text-xs md:text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-24 px-4 md:px-10 bg-[#f5f7f5] border-b-4 border-emerald-500">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <span className="bg-emerald-100 text-emerald-800 border border-emerald-400 px-4 py-1 rounded-full text-xs md:text-sm font-black inline-block mb-3">
              شفافية ووضوح تام قبل البدء
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900">
              الأسئلة الشائعة حول <span className="text-emerald-600">التعاقد وبدء العمل</span>
            </h2>
          </div>

          <div className="space-y-4">
            {contactFaqs.map((faq, idx) => (
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
      <section className="py-20 px-4 md:px-10 bg-slate-900 text-white relative overflow-hidden">
        <div className="max-w-5xl mx-auto relative z-10 bg-gradient-to-br from-emerald-700 to-emerald-900 border-4 border-emerald-400 rounded-3xl p-8 md:p-14 text-center shadow-2xl">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">
            تفضل التحدث المباشر بدون ملء نماذج؟
          </h2>
          <p className="text-emerald-100 font-bold text-base md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed">
            اضغط على الزر بالأسفل لفتح محادثة واتساب فورية مع م. عمرو سالم ومناقشة كافة تفاصيل مشروعك الآن.
          </p>

          <a
            href={getDirectWhatsappLink("مرحباً م. عمرو، أريد التحدث معك بخصوص تصميم وتطوير مشروع جديد")}
            target="_blank"
            rel="noopener noreferrer"
            title="تواصل عبر واتساب الآن"
            className="inline-flex items-center justify-center gap-3 bg-white hover:bg-emerald-50 text-slate-900 font-black text-lg md:text-2xl px-10 py-5 rounded-2xl shadow-xl transition-transform hover:scale-105"
          >
            <FaWhatsapp className="w-8 h-8 text-emerald-600" />
            <span dir="ltr">{displayPhone}</span>
            <span>- تحدث معنا الآن</span>
          </a>
        </div>
      </section>
    </div>
  );
}
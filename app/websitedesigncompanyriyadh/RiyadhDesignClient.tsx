"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import FloatingSocials from '../../components/FloatingSocials';
import { 
  FaWhatsapp, 
  FaShieldAlt, 
  FaCode, 
  FaShoppingCart, 
  FaChartLine, 
  FaCheckCircle, 
  FaBuilding, 
  FaAward, 
  FaBolt, 
  FaArrowLeft,
  FaLaptopCode,
  FaMapMarkerAlt,
  FaChevronDown
} from 'react-icons/fa';

export default function RiyadhDesignClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const whatsappNumber = "2010120347946";
  const displayPhone = "010120347946";

  const getWhatsappLink = (customMessage: string) => {
    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(customMessage)}`;
  };

  const stats = [
    {
      number: "+120",
      label: "مشروع ناجح في الرياض",
      desc: "مقرات رئيسية، شركات كبرى، ومتاجر إلكترونية تتصدر العاصمة",
      icon: <FaAward className="w-8 h-8 text-emerald-400" />
    },
    {
      number: "99.9%",
      label: "سرعة وأداء قياسي",
      desc: "تحسين كامل لمؤشرات الأداء على كافة الأجهزة الذكية بالرياض",
      icon: <FaBolt className="w-8 h-8 text-emerald-400" />
    },
    {
      number: "100%",
      label: "جاهزية تامة للـ SEO",
      desc: "تصدر الكلمات المفتاحية الأكثر بحثاً في أسواق الرياض",
      icon: <FaShieldAlt className="w-8 h-8 text-emerald-400" />
    },
    {
      number: "3X",
      label: "مضاعفة التحويلات والمبيعات",
      desc: "تجربة مستخدم صُممت خصيصاً لزيادة تفاعل عملاء الرياض",
      icon: <FaChartLine className="w-8 h-8 text-emerald-400" />
    }
  ];

  const coreServices = [
    {
      icon: <FaCode className="w-10 h-10" />,
      title: "تطوير مواقع Next.js المخصصة في الرياض",
      badge: "الأداء الخارق والسرعة",
      description: "نبرمج مواقع الشركات الكبرى في الرياض بأحدث إطارات العمل Next.js لضمان فتح الموقع في أقل من ثانية، مع حماية برمجية تامة وتفوق مطلق في خوارزميات جوجل.",
      features: [
        "سرعة فائقة تواجه ضغط الزيارات العالي بالرياض",
        "بنية برمجية متوافقة مع أحدث معايير الويب العالمية",
        "أمان مطلق ضد الثغرات والاختراقات الشائعة",
        "سهولة التطوير المستقبلي ونمو المنصة"
      ]
    },
    {
      icon: <FaBuilding className="w-10 h-10" />,
      title: "تصميم مواقع الشركات والمؤسسات بالرياض",
      badge: "هوية مؤسسية راقية",
      description: "نبتكر واجهات رقمية تعكس فخامة وموثوقية الشركات العاملة في العاصمة، سواء في قطاع المقاولات، الاستشارات، المكاتب الهندسية، أو الشركات القابضة.",
      features: [
        "تصميم UI/UX يعكس الهوية البصرية لشركتك",
        "عرض احترافي لسابقة الأعمال والمشاريع",
        "دعم كامل للغة العربية والإنجليزية",
        "لوحة تحكم مرنة وسهلة لإدارة المحتوى"
      ]
    },
    {
      icon: <FaShoppingCart className="w-10 h-10" />,
      title: "تصميم المتاجر الإلكترونية في الرياض",
      badge: "مبيعات متنامية",
      description: "نبني متاجر إلكترونية متكاملة للبراندات في الرياض، مزودة بأحدث وسائل الدفع (مدى، تابي، تمارا) وأنظمة إدارة المخزون والشحن السريع.",
      features: [
        "ربط بوابات الدفع السعودية بكل مرونة",
        "تفعيل خدمات التقسيط الذكية (تابي وتمارا)",
        "ربط شركات الشحن المحلية والعالمية",
        "تصميم يحفز الزائر على إتمام الشراء"
      ]
    }
  ];

  const riyadhDistricts = [
    "الولايات والأحياء المالية (الملقا، الياسمين، النرجس)",
    "وسط العاصمة ومنطقة الأعمال (العليا، المربع، الملز)",
    "المشاريع الكبرى وغرب الرياض (الدرعية، النخيل، لبن)",
    "المناطق الصناعية والشرقية (الخالدية، الروابي، النسيم)"
  ];

  const packages = [
    {
      name: "باقة شركات الرياض التعريفية",
      badge: "مناسبة للمؤسسات الناشئة",
      desc: "موقع تعريفي فاخر يبرز خدمات شركتك في الرياض ويؤسس لك تواجداً رقمياً قوياً.",
      features: [
        "تصميم مخصص يتوافق مع الجوال والكمبيوتر",
        "حتى 7 صفحات أساسية واحترافية",
        "تهيئة أولية لمحركات البحث SEO",
        "ربط مباشر بالواتساب وحسابات التواصل",
        "حماية SSL وسرعة تحميل ممتازة"
      ],
      ctaText: "اطلب باقة الشركات عبر واتساب"
    },
    {
      name: "باقة المتاجر المتقدمة بالرياض",
      badge: "الأكثر طلباً في العاصمة",
      featured: true,
      desc: "متجر إلكتروني متكامل للبيع أونلاين في الرياض مع ربط الدفع والتقسيط والشحن.",
      features: [
        "تصميم متجر يرفع معدل تحويل المبيعات",
        "إضافة الأقسام والمنتجات غير المحدودة",
        "ربط مدى، Apple Pay، تابي، وتمارا",
        "ربط شركات الشحن وإصدار البوالص",
        "تهيئة سيو متقدمة لمنتجات المتجر"
      ],
      ctaText: "ابدأ متجرك الآن عبر واتساب"
    }
  ];

  const faqs = [
    {
      q: "لماذا نحن الخيار الأفضل لتصميم موقعك في الرياض؟",
      a: "لأننا نجمع بين الاحترافية البرمجية العالية (Next.js) وبين الفهم العميق لطبيعة السوق التجاري في مدينة الرياض، مما يضمن لك موقعاً سريعاً، آمناً، ويتصدر نتائج البحث."
    },
    {
      q: "كم تستغرق مدة إنجاز الموقع للشركات في الرياض؟",
      a: "تتراوح المدة عادة بين 7 إلى 14 يوم عمل للمواقع التعريفية، ومن 2 إلى 4 أسابيع للمتاجر الإلكترونية والمنصات المعقدة."
    },
    {
      q: "هل يتم ربط الموقع ببوابات الدفع المحلية مثل مدى وتابي؟",
      a: "نعم بالتأكيد، نقوم بربط كافة وسائل الدفع والتقسيط المعتمدة في المملكة لتتمكن من استقبال مدفوعات عملائك في الرياض بكل سهولة وأمان."
    }
  ];

  return (
    <div className="min-h-screen bg-[#f5f7f5] text-slate-900 overflow-x-hidden" dir="rtl">
      <FloatingSocials />
      <Header />

      {/* الهيرو مع فيديو websitedesigncompanyriyadh.mp4 */}
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

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 flex flex-col items-start text-right">
              <div className="inline-flex items-center gap-2 bg-emerald-100 border-2 border-emerald-500 text-emerald-900 px-4 py-1.5 rounded-full font-black text-xs md:text-sm mb-6 shadow-sm">
                <FaMapMarkerAlt className="text-emerald-600" />
                <span>المركز المالي وعاصمة الأعمال - الرياض</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-[1.25] mb-6">
                أفضل <span className="text-emerald-600 underline decoration-emerald-400 decoration-4 underline-offset-8">شركة تصميم مواقع الكترونية في الرياض</span>
              </h1>

              <p className="text-base md:text-xl text-slate-700 font-bold leading-relaxed mb-8">
                نبتكر للشركات والمؤسسات في <strong className="text-slate-900">الرياض</strong> واجهات رقمية ومتاجر إلكترونية فائقة السرعة والأمان بـ <strong className="text-emerald-700">Next.js و WordPress</strong>، متكاملة مع بوابات الدفع السعودية ومهيأة لتصدر نتائج جوجل.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
                <a
                  href={getWhatsappLink("مرحباً م. عمرو، أريد الاستفسار عن تصميم موقع إلكتروني في الرياض")}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="تواصل عبر واتساب"
                  className="w-full sm:w-auto flex items-center justify-center gap-3 bg-emerald-600 hover:bg-emerald-700 text-white font-black text-base md:text-lg px-8 py-4 rounded-2xl shadow-lg border-2 border-emerald-700 transition-all"
                >
                  <FaWhatsapp className="w-6 h-6" />
                  <span>تحدث معنا الآن: {displayPhone}</span>
                </a>

                <a
                  href="#packages"
                  title="استعرض الباقات"
                  className="w-full sm:w-auto flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-black text-base md:text-lg px-7 py-4 rounded-2xl border-2 border-emerald-500 transition-all"
                >
                  <span>استكشف الباقات</span>
                  <FaArrowLeft className="w-4 h-4 text-emerald-400" />
                </a>
              </div>
            </div>

            {/* فيديو الهيرو websitedesigncompanyriyadh.mp4 */}
            <div className="lg:col-span-5">
              <div className="bg-white rounded-3xl border-4 border-emerald-500 shadow-xl overflow-hidden">
                <div className="bg-slate-900 px-4 py-3 border-b-2 border-emerald-500 flex items-center justify-between" dir="ltr">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-emerald-400 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-teal-500 inline-block" />
                  </div>
                  <span className="text-xs font-mono text-emerald-300 font-bold">
                    websitedesigncompanyriyadh.mp4
                  </span>
                </div>
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
                <div className="p-4 bg-white flex items-center justify-between border-t border-emerald-100">
                  <span className="text-xs md:text-sm font-black text-slate-800">ريادة رقمية للشركات في الرياض</span>
                  <a
                    href={getWhatsappLink("مرحباً، شاهدت فيديو الرياض وأرغب في عرض سعر")}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="اطلب عرض سعر"
                    className="text-xs md:text-sm font-black text-emerald-700 underline"
                  >
                    اطلب عرض سعر ←
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* الإحصائيات والأرقام */}
      <section className="py-14 px-4 md:px-10 bg-slate-900 text-white border-b-4 border-emerald-500">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, idx) => (
              <div key={idx} className="bg-slate-800 border-2 border-emerald-500/70 rounded-2xl p-6 flex flex-col items-center text-center shadow-lg">
                <div className="bg-slate-900 p-3.5 rounded-2xl border border-emerald-500/40 mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-black text-emerald-400 mb-1">{stat.number}</div>
                <div className="text-lg font-black text-white mb-2">{stat.label}</div>
                <p className="text-xs md:text-sm text-slate-300 font-bold">{stat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* الخدمات */}
      <section className="py-24 px-4 md:px-10 bg-[#f5f7f5] border-b-4 border-emerald-500">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6">
              خدمات <span className="text-emerald-600">تصميم وبرمجة المواقع</span> في الرياض
            </h2>
            <p className="text-slate-700 font-bold text-base md:text-lg">
              نلبي احتياجات الشركات الكبرى والمؤسسات الناشئة في كافة أحياء العاصمة:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coreServices.map((srv, idx) => (
              <div key={idx} className="bg-white rounded-3xl border-4 border-emerald-500 p-7 flex flex-col justify-between shadow-lg">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="bg-emerald-50 border-2 border-emerald-500 text-emerald-700 p-4 rounded-2xl">
                      {srv.icon}
                    </div>
                    <span className="bg-slate-900 text-emerald-400 text-xs font-black px-3 py-1.5 rounded-full">
                      {srv.badge}
                    </span>
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 mb-3">{srv.title}</h3>
                  <p className="text-slate-600 font-bold text-sm md:text-base leading-relaxed mb-6">{srv.description}</p>
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
                  href={getWhatsappLink(`مرحباً م. عمرو، أرغب في طلب خدمة: ${srv.title} بالرياض`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-black py-3.5 px-4 rounded-xl flex items-center justify-center gap-2 transition-colors"
                >
                  <FaWhatsapp className="w-5 h-5" />
                  <span>اطلب الخدمة الآن</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* أحياء الرياض */}
      <section className="py-20 px-4 md:px-10 bg-white border-b-4 border-emerald-500">
        <div className="max-w-5xl mx-auto bg-[#f5f7f5] border-4 border-emerald-500 rounded-3xl p-8 md:p-12 shadow-lg">
          <h2 className="text-2xl md:text-4xl font-black text-slate-900 mb-6 border-r-4 border-emerald-500 pr-4">
            تغطية شاملة لكافة أحياء ومناطق الأعمال في الرياض
          </h2>
          <p className="text-slate-700 font-bold text-base leading-relaxed mb-6">
            سواء كان مقر شركتك في شمال الرياض (الملقا، الياسمين)، أو في وسط العاصمة (العليا)، نصلك أينما كنت ونقدم لك استشارات تقنية متخصصة ترفع من كفاءة حضورك الرقمي.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {riyadhDistricts.map((dist, i) => (
              <div key={i} className="bg-white p-4 rounded-2xl border-2 border-emerald-300 flex items-center gap-3">
                <FaMapMarkerAlt className="text-emerald-600 w-5 h-5 flex-shrink-0" />
                <span className="font-black text-slate-800 text-sm">{dist}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* الباقات */}
      <section id="packages" className="py-24 px-4 md:px-10 bg-[#f5f7f5] border-b-4 border-emerald-500">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4">
              باقات <span className="text-emerald-600">تصميم المواقع في الرياض</span>
            </h2>
            <p className="text-slate-600 font-bold text-base md:text-lg">
              استثمار ذكي مصمم خصيصاً لتلبية طموحات الشركات والمتاجر في العاصمة:
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {packages.map((pkg, idx) => (
              <div key={idx} className={`rounded-3xl p-8 flex flex-col justify-between border-4 ${pkg.featured ? "bg-slate-900 text-white border-emerald-500 shadow-2xl" : "bg-white text-slate-900 border-emerald-500 shadow-lg"}`}>
                <div>
                  <span className={`inline-block px-4 py-1 rounded-full text-xs font-black mb-4 ${pkg.featured ? "bg-emerald-500 text-slate-950" : "bg-emerald-100 text-emerald-900"}`}>
                    {pkg.badge}
                  </span>
                  <h3 className="text-2xl font-black mb-3">{pkg.name}</h3>
                  <p className={`text-sm font-bold mb-6 ${pkg.featured ? "text-slate-300" : "text-slate-600"}`}>{pkg.desc}</p>
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
                  href={getWhatsappLink(`مرحباً م. عمرو، أرغب في الاستفسار عن (${pkg.name}) بالرياض`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-4 px-6 rounded-2xl font-black text-center flex items-center justify-center gap-2 shadow-md transition-all ${pkg.featured ? "bg-emerald-500 hover:bg-emerald-400 text-slate-950" : "bg-emerald-600 hover:bg-emerald-700 text-white"}`}
                >
                  <FaWhatsapp className="w-5 h-5" />
                  <span>{pkg.ctaText}</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* الأسئلة الشائعة */}
      <section className="py-24 px-4 md:px-10 bg-white border-b-4 border-emerald-500">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900">
              الأسئلة الشائعة حول <span className="text-emerald-600">تصميم المواقع في الرياض</span>
            </h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <details key={idx} className="group bg-[#f5f7f5] border-2 border-emerald-500 rounded-2xl overflow-hidden shadow-sm" open={idx === 0}>
                <summary className="cursor-pointer p-5 md:p-6 text-right flex items-center justify-between gap-4 font-black text-base md:text-lg text-slate-900 list-none">
                  <span>{faq.q}</span>
                  <span className="text-emerald-600 font-black text-xl group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="px-5 pb-6 md:px-6 text-slate-700 font-bold text-sm md:text-base leading-relaxed border-t border-emerald-200 pt-4 bg-white">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* بانر الختام */}
      <section className="py-20 px-4 md:px-10 bg-slate-900 text-white relative overflow-hidden">
        <div className="max-w-5xl mx-auto relative z-10 bg-gradient-to-br from-emerald-700 to-emerald-900 border-4 border-emerald-400 rounded-3xl p-8 md:p-14 text-center shadow-2xl">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
            هل أنت جاهز لتطوير موقع شركتك في الرياض؟
          </h2>
          <p className="text-emerald-100 font-bold text-base md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed">
            تواصل معنا الآن عبر الواتساب للحصول على استشارة فورية وعرض سعر مخصص لمشروعك في العاصمة.
          </p>
          <a
            href={getWhatsappLink("مرحباً م. عمرو، أريد البدء في تصميم موقعي الإلكتروني في الرياض")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white text-slate-900 font-black text-lg md:text-xl px-10 py-5 rounded-2xl shadow-xl transition-transform hover:scale-105"
          >
            <FaWhatsapp className="w-7 h-7 text-emerald-600" />
            <span>تواصل عبر واتساب: {displayPhone}</span>
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
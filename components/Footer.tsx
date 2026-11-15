"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaWhatsapp, FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa";

export default function Footer() {
  const designLinks = [
    { title: "شركة تصميم مواقع الكترونية في السعودية", slug: "websitedesigncompanysaudiarabia" },
    { title: "شركة تصميم مواقع الكترونية في الرياض", slug: "websitedesigncompanyriyadh" },
    { title: "شركة تصميم مواقع الكترونية في جدة", slug: "websitedesigncompanyjeddah" },
    { title: "شركة تصميم مواقع الكترونية في الكويت", slug: "websitedesigncompanykuwait" },
    { title: "شركة تصميم مواقع الكترونية في الامارات", slug: "websitedesigncompanyuae" },
    { title: "شركة تصميم مواقع الكترونية في الشارقة", slug: "websitedesigncompanysharjah" },
    { title: "شركة تصميم مواقع الكترونية في دبي", slug: "websitedesigncompanydubai" },
    { title: "شركة تصميم مواقع الكترونية في مصر", slug: "websitedesigncompanyegypt" },
    { title: "شركة تصميم مواقع الكترونية في اسكندرية", slug: "websitedesigncompanyalexandria" },
    { title: "شركة تصميم مواقع الكترونية في القاهرة", slug: "websitedesigncompanycairo" },
  ];
  const coreServicesLinks = [
    { title: "تطوير مواقع Next.js فائقة السرعة", slug: "services/nextjs" },
    { title: "تصميم مواقع ووردبريس وووكومرس", slug: "services/wordpress" },
    { title: "تصميم متاجر شوبيفاي Shopify", slug: "services/shopify" },
    { title: "تحسين محركات البحث وتصدر جوجل SEO", slug: "services/seo" },
    { title: "تصميم صفحات الهبوط التسويقية CRO", slug: "services/landing-pages" },
    { title: "تصميم فيديوهات بالذكاء الاصطناعي AI", slug: "services/vidioai" },
    { title: "من نحن — م. عمرو محمد السيد", slug: "about" },
    { title: "اتصل بنا واطلب عرض سعر", slug: "contact" },
  ];

  const socialIcons = [
    { 
      icon: <FaWhatsapp size={24} />, 
      link: "https://wa.me/201020347946", 
      label: "تواصل معنا عبر واتساب" 
    }, 
    { 
      icon: <FaFacebook size={24} />, 
      link: "https://www.facebook.com/nadersalm123", 
      label: "تابعنا على فيسبوك" 
    }, 
    { 
      icon: <FaLinkedin size={24} />, 
      link: "https://www.linkedin.com/in/amr-salem-5765b0401/", 
      label: "تابعنا على لينكد إن" 
    }, 
    { 
      icon: <FaYoutube size={24} />, 
      link: "https://wa.me/201020347946", 
      label: "قناتنا على يوتيوب" 
    },  
  ];

  return (
    <footer 
      aria-label="تذييل الموقع والروابط الهامة"
      className="relative w-full pt-20 pb-12 px-6 overflow-hidden bg-[#f3f7f4] border-t-8 border-emerald-500 shadow-[0_-25px_50px_rgba(0,0,0,0.1)]" 
      dir="rtl"
    >
            <div 
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          pointerEvents: "none",
          backgroundImage: `
            linear-gradient(to right, rgba(4, 120, 87, 0.26) 1.5px, transparent 1.5px),
            linear-gradient(to bottom, rgba(4, 120, 87, 0.26) 1.5px, transparent 1.5px)
          `,
          backgroundSize: "50px 50px",
          filter: "drop-shadow(0 0 5px rgba(16, 185, 129, 0.3))",
        }}
      />
      <div 
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: "0",
          left: "50%",
          transform: "translateX(-50%)",
          width: "1000px",
          height: "400px",
          background: "radial-gradient(circle, rgba(16, 185, 129, 0.14) 0%, transparent 75%)",
          zIndex: 0,
          pointerEvents: "none",
          filter: "blur(100px)",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center">
                <div className="w-full mb-12">
          <h2 className="text-2xl font-black text-slate-900 mb-6 border-r-4 border-emerald-600 pr-3">
            أقسام وخدمات الاستوديو التخصصية
          </h2>
          <div className="flex flex-wrap gap-3.5">
            {coreServicesLinks.map((srv, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.03, y: -2 }}
                className="bg-slate-900 border-2 border-emerald-500 px-4 py-2.5 rounded-2xl shadow-sm transition-all"
              >
                <Link 
                  href={`/${srv.slug}`} 
                  title={srv.title} 
                  className="text-white font-black text-xs sm:text-sm hover:text-emerald-300 transition-colors block"
                >
                  {srv.title}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="w-full mb-16">
          <h2 className="text-2xl font-black text-slate-900 mb-6 border-r-4 border-emerald-600 pr-3">
            خدمات تصميم المواقع الإلكترونية في مصر والخليج
          </h2>
          <div className="flex flex-wrap gap-4">
            {designLinks.map((link, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.04, y: -3 }}
                className="bg-white/95 backdrop-blur-sm border-2 border-emerald-500 px-4 py-3 rounded-2xl shadow-[0_10px_20px_rgba(0,0,0,0.06)] transition-all"
              >
                <Link 
                  href={`/${link.slug}`} 
                  title={link.title} 
                  className="text-slate-900 font-black text-sm hover:text-emerald-800 transition-colors block"
                >
                  {link.title}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="w-full h-1 bg-emerald-600 rounded-full opacity-90 mb-8 shadow-[0_0_10px_rgba(16,185,129,0.3)]" />

        <div className="flex flex-col md:flex-row items-center justify-between w-full gap-6">
          <div className="text-center md:text-right">
            <p className="text-slate-900 font-black text-lg">
              جميع الحقوق محفوظة © {new Date().getFullYear()} — استوديو م. عمرو محمد السيد (عمرو سالم)
            </p>
            <p className="text-slate-700 font-bold text-xs sm:text-sm mt-1">
              تصميم وتطوير مواقع احترافية وتحسين محركات البحث SEO | واتساب:{" "}
              <a 
                href="https://wa.me/201020347946" 
                target="_blank" 
                rel="noopener noreferrer"
                title="تواصل عبر واتساب مباشر"
                className="text-emerald-800 font-black underline" 
                dir="ltr"
              >
                01020347946
              </a>
            </p>
          </div>

          <div className="flex gap-4">
            {socialIcons.map((social, index) => (
              <motion.a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                title={social.label}
                whileHover={{ scale: 1.15, y: -4 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white border-2 border-emerald-600 p-3 rounded-xl text-emerald-800 shadow-[0_8px_16px_rgba(0,0,0,0.08)] hover:bg-emerald-800 hover:text-white transition-all flex items-center justify-center"
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}
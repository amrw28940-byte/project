"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaWhatsapp, FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa";

export default function Footer() {
  // مصفوفة روابط تصميم المواقع (بأحرف صغيرة بالكامل للـ slug)
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

  const socialIcons = [
    { icon: <FaWhatsapp size={24} />, link: "#", label: "تواصل معنا عبر واتساب" }, 
    { icon: <FaFacebook size={24} />, link: "https://www.facebook.com/nadersalm123", label: "تابعنا على فيسبوك" }, 
    { icon: <FaLinkedin size={24} />, link: "https://www.linkedin.com/in/amr-salem-5765b0401/", label: "تابعنا على لينكد إن" }, 
    { icon: <FaYoutube size={24} />, link: "#", label: "قناتنا على يوتيوب" },  
  ];

  return (
    /* الفوتر بالكامل ببرواز علوي أخضر عريض، توهج هادئ، وظل عميق */
    <footer className="relative w-full pt-20 pb-12 px-6 overflow-hidden bg-[#f5f7f5] border-t-8 border-emerald-500 shadow-[0_-25px_50px_rgba(0,0,0,0.1)]" dir="rtl">
      
      {/* شبكة المربعات الهندسية الخلفية للفوتر */}
      <div 
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          pointerEvents: "none",
          backgroundImage: `
            linear-gradient(to right, rgba(16, 185, 129, 0.08) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(16, 185, 129, 0.08) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* هالة خضراء خلفية للتوهج */}
      <div 
        style={{
          position: "absolute",
          bottom: "0",
          left: "50%",
          transform: "translateX(-50%)",
          width: "1000px",
          height: "400px",
          background: "radial-gradient(circle, rgba(16, 185, 129, 0.06) 0%, transparent 75%)",
          zIndex: 0,
          pointerEvents: "none",
          filter: "blur(120px)",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center">
        
        {/* قسم خدمات تصميم المواقع الإلكترونية (يغطي العرض بالكامل بشكل مرتب) */}
        <div className="w-full mb-16">
          <h3 className="text-2xl font-black text-slate-900 mb-8 border-r-4 border-emerald-500 pr-3">
            خدمات تصميم المواقع الإلكترونية
          </h3>
          <div className="flex flex-wrap gap-4">
            {designLinks.map((link, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.04, y: -3 }}
                className="bg-white/95 backdrop-blur-sm border-2 border-emerald-300 px-4 py-3 rounded-2xl shadow-[0_10px_20px_rgba(0,0,0,0.06)] transition-all"
              >
                <Link href={`/${link.slug}`} title={link.title} className="text-slate-900 font-black text-sm hover:text-emerald-600 transition-colors block">
                  {link.title}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        {/* خط فاصل سفلي أخضر عريض */}
        <div className="w-full h-1 bg-emerald-500 rounded-full opacity-80 mb-8 shadow-[0_0_10px_rgba(16,185,129,0.3)]" />

        {/* الجزء السفلي: السوشيال ميديا وحقوق الملكية */}
        <div className="flex flex-col md:flex-row items-center justify-between w-full gap-6">
          <p className="text-slate-900 font-black text-lg">
            جميع الحقوق محفوظة © {new Date().getFullYear()}
          </p>

          {/* أزرار السوشيال ميديا باللون الأخضر المتناسق */}
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
                className="bg-white border-2 border-emerald-500 p-3 rounded-xl text-emerald-600 shadow-[0_8px_16px_rgba(0,0,0,0.08)] hover:bg-emerald-600 hover:text-white transition-all flex items-center justify-center"
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
"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaWhatsapp, FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa";

export default function Footer() {
  // مصفوفة روابط السيو
  const seoLinks = [
    { title: "شركة سيو في السعودية", slug: "SEOCompanySaudiArabia" },
    { title: "شركة سيو في الرياض", slug: "SEOcompanyinRiyadh" },
    { title: "شركة سيو في جدة", slug: "seocompanyjeddah" },
    { title: "شركة سيو في الامارات", slug: "SEOCompanyUAE" },
    { title: "شركة سيو في الشارقة", slug: "SEOCompanySharjah" },
    { title: "شركة سيو في دبي", slug: "SEOCompanyDubai" },
    { title: "شركة سيو في الكويت", slug: "SEOCompanyKuwait" },
    { title: "شركة سيو في مصر", slug: "SEOCompanyEgypt" },
    { title: "شركة سيو في اسكندرية", slug: "SEOCompanyAlexandria" },
    { title: "شركة سيو في القاهرة", slug: "SEOCompanyCairo" },
  ];

  // مصفوفة روابط تصميم المواقع
  const designLinks = [
    { title: "شركة تصميم مواقع الكترونية في السعودية", slug: "WebsiteDesignCompanySaudiArabia" },
    { title: "شركة تصميم مواقع الكترونية في الرياض", slug: "WebsiteDesignCompanyRiyadh" },
    { title: "شركة تصميم مواقع الكترونية في جدة", slug: "WebsiteDesignCompanyJeddah" },
    { title: "شركة تصميم مواقع الكترونية في الكويت", slug: "WebsiteDesignCompanyKuwait" },
    { title: "شركة تصميم مواقع الكترونية في الامارات", slug: "WebsiteDesignCompanyUAE" },
    { title: "شركة تصميم مواقع الكترونية في الشارقة", slug: "WebsiteDesignCompanySharjah" },
    { title: "شركة تصميم مواقع الكترونية في دبي", slug: "WebsiteDesignCompanyDubai" },
    { title: "شركة تصميم مواقع الكترونية في مصر", slug: "WebsiteDesignCompanyEgypt" },
    { title: "شركة تصميم مواقع الكترونية في اسكندرية", slug: "WebsiteDesignCompanyAlexandria" },
    { title: "شركة تصميم مواقع الكترونية في القاهرة", slug: "WebsiteDesignCompanyCairo" },
  ];

  const socialIcons = [
    { icon: <FaWhatsapp size={24} />, link: "#" }, // ضع رابط الواتساب هنا لاحقاً
    { icon: <FaFacebook size={24} />, link: "#" }, // ضع رابط الفيسبوك هنا لاحقاً
    { icon: <FaLinkedin size={24} />, link: "#" }, // ضع رابط لينكد إن هنا لاحقاً
    { icon: <FaYoutube size={24} />, link: "#" },  // ضع رابط اليوتيوب هنا لاحقاً
  ];

  return (
    /* الفوتر بالكامل ببرواز علوي أحمر عريض، توهج نيون، وظل أسود ضخم */
    <footer className="relative w-full pt-20 pb-12 px-6 overflow-hidden bg-white border-t-8 border-[#ff001e] shadow-[0_-25px_50px_rgba(0,0,0,0.5)]" dir="rtl">
      
      {/* شبكة المربعات الهندسية الخلفية للفوتر */}
      <div 
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          pointerEvents: "none",
          backgroundImage: `
            linear-gradient(to right, rgba(255, 0, 30, 0.12) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 0, 30, 0.12) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* هالة حمراء خلفية للتوهج */}
      <div 
        style={{
          position: "absolute",
          bottom: "0",
          left: "50%",
          transform: "translateX(-50%)",
          width: "1000px",
          height: "400px",
          background: "radial-gradient(circle, rgba(255, 0, 30, 0.05) 0%, transparent 75%)",
          zIndex: 0,
          pointerEvents: "none",
          filter: "blur(120px)",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center">
        
        {/* شبكة توزيع الأقسام */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 w-full mb-16">
          
          {/* قسم خدمات السيو */}
          <div>
            <h3 className="text-2xl font-black text-black mb-8 border-r-4 border-[#ff001e] pr-3">
              خدمات الأرشفة والـ SEO
            </h3>
            <div className="flex flex-wrap gap-4">
              {seoLinks.map((link, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.04, y: -3 }}
                  /* مستطيل أبيض، برواز أحمر، حواف دائرية، بروز وظل أسود قوي جداً */
                  className="bg-white/95 backdrop-blur-sm border-2 border-[#ff001e] px-4 py-3 rounded-2xl shadow-[0_10px_20px_rgba(0,0,0,0.4)] transition-all"
                >
                  <Link href={`/${link.slug}`} className="text-black font-black text-sm hover:text-[#ff001e] transition-colors block">
                    {link.title}
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {/* قسم خدمات تصميم المواقع */}
          <div>
            <h3 className="text-2xl font-black text-black mb-8 border-r-4 border-[#ff001e] pr-3">
              خدمات تصميم المواقع الإلكترونية
            </h3>
            <div className="flex flex-wrap gap-4">
              {designLinks.map((link, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.04, y: -3 }}
                  /* مستطيل أبيض، برواز أحمر، حواف دائرية، بروز وظل أسود قوي جداً */
                  className="bg-white/95 backdrop-blur-sm border-2 border-[#ff001e] px-4 py-3 rounded-2xl shadow-[0_10px_20px_rgba(0,0,0,0.4)] transition-all"
                >
                  <Link href={`/${link.slug}`} className="text-black font-black text-sm hover:text-[#ff001e] transition-colors block">
                    {link.title}
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

        </div>

        {/* خط فاصل سفلي أحمر عريض */}
        <div className="w-full h-1 bg-[#ff001e] rounded-full opacity-80 mb-8 shadow-[0_0_10px_rgba(255,0,30,0.5)]" />

        {/* الجزء السفلي: السوشيال ميديا وحقوق الملكية */}
        <div className="flex flex-col md:flex-row items-center justify-between w-full gap-6">
          <p className="text-black font-black text-lg">
            جميع الحقوق محفوظة © {new Date().getFullYear()}
          </p>

          {/* أزرار السوشيال ميديا باللون الأحمر النيون المتناسق */}
          <div className="flex gap-4">
            {socialIcons.map((social, index) => (
              <motion.a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15, y: -4 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white border-2 border-[#ff001e] p-3 rounded-xl text-[#ff001e] shadow-[0_8px_16px_rgba(0,0,0,0.3)] hover:bg-[#ff001e] hover:text-white transition-all flex items-center justify-center"
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
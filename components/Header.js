"use client";
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa";

export default function Header() {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = [
    { name: 'اتصل بنا', color: 'text-slate-900', slug: '/contact' },
    { name: 'المدونة', color: 'text-slate-900', slug: '/blog' },
    { name: 'من نحن', color: 'text-slate-900', slug: '/about' },
    { 
      name: 'الخدمات', 
      color: 'text-slate-900', 
      slug: '#', 
      isDropdown: true,
      subItems: [
        { name: 'تصميم مواقع الكترونية ووردبريس', slug: '/services/wordpress' },
        { name: 'تصميم مواقع الكترونية next js', slug: '/services/nextjs' },
        { name: 'تصميم متاجر شوبيفاي', slug: '/services/shopify' },
        { name: 'تصميم متاجر ايزي اوردر', slug: '/services/easy-order' },
        { name: 'تحسين محركات البحث', slug: '/services/seo' },
        { name: 'باقات صيانة المواقع الدورية', slug: '/services/maintenance' },
        { name: 'تحسين سرعة وأداء المواقع', slug: '/services/speed' },
        { name: 'إعداد تتبع وتحليل البيانات', slug: '/services/analytics' },
        { name: 'ربط أنظمة الدفع والشحن', slug: '/services/payments' },
        { name: 'نقل المواقع بين المنصات', slug: '/services/migration' },
        { name: 'تحسين معدل تحويل العملاء', slug: '/services/cro' },
        { name: 'فحص وتدقيق الأمان التقني', slug: '/services/security' },
        { name: 'تطوير صفحات الهبوط التسويقية', slug: '/services/landing-pages' },
      ]
    },
    { name: 'الرئيسية', color: 'text-slate-900', slug: '/' },
  ];

  const socialIcons = [
    { icon: <FaWhatsapp className="w-4 h-4 md:w-6 md:h-6" />, link: "#", label: "واتساب" },
    { icon: <FaFacebook className="w-4 h-4 md:w-6 md:h-6" />, link: "https://www.facebook.com/nadersalm123", label: "فيسبوك" },
    { icon: <FaLinkedin className="w-4 h-4 md:w-6 md:h-6" />, link: "https://www.linkedin.com/in/amr-salem-5765b0401/", label: "لينكد إن" },
    { icon: <FaYoutube className="w-4 h-4 md:w-6 md:h-6" />, link: "#", label: "يوتيوب" },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-[#f5f7f5] border-b-[6px] border-emerald-500 h-24 md:h-32 px-3 md:px-10 flex items-center justify-between shadow-md overflow-visible">
      
      <button 
        className="md:hidden text-slate-900 z-50 p-2 bg-white/80 rounded-xl border border-emerald-300 shadow-sm" 
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="القائمة الرئيسية"
        title="القائمة الرئيسية"
      >
        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* الأزرار والسوشيال ميديا */}
      <div className="flex flex-col gap-1 z-30">
        <div className="flex items-center gap-1.5 md:gap-4">
          <a href="https://wa.me/201020347946" target="_blank" rel="noopener noreferrer" title="ابدأ الآن" className="bg-emerald-600 text-white px-2.5 py-1 md:px-5 md:py-1.5 rounded-full font-black text-[11px] md:text-sm hover:bg-emerald-500 transition-transform hover:scale-105 shadow-sm">ابدأ الآن</a>
        </div>

        <div className="flex gap-1">
          {socialIcons.map((social, index) => (
            <motion.a
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              title={social.label}
              whileHover={{ scale: 1.15, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white border border-emerald-500 p-1 rounded-lg text-emerald-600 shadow-sm hover:bg-emerald-600 hover:text-white transition-all flex items-center justify-center text-xs"
            >
              {social.icon}
            </motion.a>
          ))}
        </div>
      </div>

      {/* القائمة الرئيسية والمنسدلة */}
      <nav className={`${isMobileMenuOpen ? 'flex' : 'hidden'} md:flex absolute top-24 right-0 w-full bg-[#f5f7f5] flex-col items-center gap-3 p-6 z-50 border-b-4 border-emerald-500 md:static md:w-auto md:flex-row md:border-none shadow-lg md:shadow-none overflow-visible`}>
        {menuItems.map((item, index) => (
          <div 
            key={index} 
            className="relative group w-full md:w-auto text-center overflow-visible" 
            onMouseEnter={() => item.isDropdown && setIsServicesOpen(true)} 
            onMouseLeave={() => item.isDropdown && setIsServicesOpen(false)}
          >
            {item.isDropdown ? (
              <div onClick={() => setIsServicesOpen(!isServicesOpen)} className={`font-black text-base md:text-lg ${item.color} cursor-pointer hover:text-emerald-600 transition-colors py-1`}>
                {item.name} ▾
              </div>
            ) : (
              <Link href={item.slug} title={item.name} className={`font-black text-base md:text-lg ${item.color} hover:text-emerald-600 transition-colors block py-1`}>{item.name}</Link>
            )}

            {/* القائمة المنسدلة للخدمات بـ z-index مرتفع جداً لتظهر فوق أي محتوى */}
            {item.isDropdown && isServicesOpen && (
              <div className="md:absolute top-full right-0 bg-slate-900 border-2 border-emerald-500 p-3 w-full md:w-72 z-[9999] rounded-2xl shadow-2xl text-right">
                {item.subItems?.map((sub, i) => (
                  <Link href={sub.slug} title={sub.name} key={i} className="block text-white hover:text-emerald-400 py-2 text-xs md:text-sm font-black transition-colors border-b border-slate-800 last:border-none">↳ {sub.name}</Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>

      {/* اللوجو */}
      <Link href="/" title="الرئيسية" className="flex-shrink-0 cursor-pointer transition-transform duration-200 hover:scale-105 flex items-center z-30">
        <div className="relative w-32 h-16 md:w-80 md:h-40 bg-[#f5f7f5] rounded-b-2xl p-0.5 shadow-sm">
          <Image 
            src="/logo.webp" 
            alt="شعار الشركة - Logo" 
            title="الرئيسية" 
            fill 
            priority
            className="object-contain" 
          />
        </div>
      </Link>

    </header>
  );
}
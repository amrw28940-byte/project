"use client";
import { useState } from 'react';
import Link from 'next/link';
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
    { icon: <FaWhatsapp className="w-5 h-5 md:w-6 md:h-6" />, link: "#" },
    { icon: <FaFacebook className="w-5 h-5 md:w-6 md:h-6" />, link: "https://www.facebook.com/nadersalm123" },
    { icon: <FaLinkedin className="w-5 h-5 md:w-6 md:h-6" />, link: "https://www.linkedin.com/in/amr-salem-5765b0401/" },
    { icon: <FaYoutube className="w-5 h-5 md:w-6 md:h-6" />, link: "#" },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-[#f5f7f5] border-b-[6px] border-emerald-500 p-4 flex items-center justify-between px-4 md:px-10 shadow-sm">
            <button className="md:hidden text-slate-900" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
        {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-2 md:gap-4">
          <a href="https://wa.me/014020347946" target="_blank" className="bg-emerald-600 text-white px-3 py-2 md:px-6 md:py-2 rounded-full font-black text-sm md:text-lg hover:bg-emerald-500 transition-transform hover:scale-105 shadow-sm">ابدأ الآن</a>
          <div className="hidden md:flex items-center bg-white rounded-xl overflow-hidden border-2 border-emerald-300">
            <input type="text" placeholder="addr..." className="px-2 py-2 text-slate-700 outline-none w-24 md:w-40 bg-transparent" />
            <button className="bg-emerald-600 p-2 md:p-3 text-white hover:bg-emerald-500 transition-colors">🔍</button>
          </div>
        </div>

        <div className="flex gap-2 md:gap-3">
          {socialIcons.map((social, index) => (
            <motion.a
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white border-2 border-emerald-500 p-2 md:p-2.5 rounded-xl text-emerald-600 shadow-[0_4px_10px_rgba(0,0,0,0.06)] hover:bg-emerald-600 hover:text-white transition-all flex items-center justify-center"
            >
              {social.icon}
            </motion.a>
          ))}
        </div>
      </div>

      <nav className={`${isMobileMenuOpen ? 'flex' : 'hidden'} md:flex absolute top-20 right-0 w-full bg-[#f5f7f5] flex-col items-center gap-4 p-6 z-50 border-b-4 border-emerald-500 md:static md:w-auto md:flex-row md:border-none shadow-md md:shadow-none`}>
        {menuItems.map((item, index) => (
          <div key={index} className="relative group" onMouseEnter={() => item.isDropdown && setIsServicesOpen(true)} onMouseLeave={() => item.isDropdown && setIsServicesOpen(false)}>
            {item.isDropdown ? (
              <span className={`font-black text-lg ${item.color} cursor-pointer hover:text-emerald-600 transition-colors`}>{item.name}</span>
            ) : (
              <Link href={item.slug} className={`font-black text-lg ${item.color} hover:text-emerald-600 transition-colors`}>{item.name}</Link>
            )}

            {item.isDropdown && isServicesOpen && (
              <div className="absolute top-8 right-0 bg-slate-900 border-2 border-emerald-500 p-4 w-64 z-50 rounded-2xl shadow-xl">
                {item.subItems?.map((sub, i) => (
                  <Link href={sub.slug} key={i} className="block text-white hover:text-emerald-400 py-2 text-sm font-black transition-colors">↳ {sub.name}</Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>

      <Link href="/" className="flex-shrink-0 cursor-pointer transition-transform duration-200 hover:scale-105">
        <img src="/logo.webp" alt="Logo" className="h-10 md:h-16 w-auto" />
      </Link>

    </header>
  );
}
"use client";
import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = [
    { name: 'اتصل بنا', color: 'text-blue-500', slug: '/contact' },
    { name: 'المدونة', color: 'text-yellow-400', slug: '/blog' },
    { name: 'من نحن', color: 'text-green-500', slug: '/about' },
    { 
      name: 'الخدمات', 
      color: 'text-red-500', 
      slug: '#', 
      isDropdown: true,
      subItems: [
        { name: 'تصميم مواقع الكترونية ووردبريس', slug: '/wordpress' },
        { name: 'تصميم مواقع الكترونية next js', slug: '/nextjs' },
        { name: 'تصميم متاجر شوبيفاي', slug: '/shopify' },
        { name: 'تصميم متاجر ايزي اوردر', slug: '/easy-order' },
        { name: 'تحسين محركات البحث', slug: '/seo' },
        { name: 'باقات صيانة المواقع الدورية', slug: '/maintenance' },
        { name: 'تحسين سرعة وأداء المواقع', slug: '/speed' },
        { name: 'إعداد تتبع وتحليل البيانات', slug: '/analytics' },
        { name: 'ربط أنظمة الدفع والشحن', slug: '/payments' },
        { name: 'نقل المواقع بين المنصات', slug: '/migration' },
        { name: 'تحسين معدل تحويل العملاء', slug: '/cro' },
        { name: 'فحص وتدقيق الأمان التقني', slug: '/security' },
        { name: 'تطوير صفحات الهبوط التسويقية', slug: '/landing-pages' },
      ]
    },
    { name: 'الرئيسية', color: 'text-white', slug: '/' },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-black border-b-[6px] border-yellow-500 p-4 flex items-center justify-between px-4 md:px-10">
      
      {/* أيقونة القائمة للموبايل */}
      <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
        {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* 1. الزر والبحث (اليمين) */}
      <div className="flex items-center gap-2 md:gap-4">
        <a href="https://wa.me/014020347946" target="_blank" className="bg-yellow-600 text-black px-3 py-2 md:px-6 md:py-2 rounded-full font-black text-sm md:text-lg hover:bg-yellow-400 transition-transform hover:scale-105">ابدأ الآن</a>
        <div className="hidden md:flex items-center bg-white rounded-xl overflow-hidden border-2 border-yellow-500">
          <input type="text" placeholder="addr..." className="px-2 py-2 text-gray-500 outline-none w-24 md:w-40" />
          <button className="bg-red-600 p-2 md:p-3 text-white">🔍</button>
        </div>
      </div>

      {/* 2. القائمة (تم تغيير الخط إلى font-black) */}
      <nav className={`${isMobileMenuOpen ? 'flex' : 'hidden'} md:flex absolute top-20 right-0 w-full bg-black flex-col items-center gap-4 p-6 z-50 border-b-4 border-yellow-500 md:static md:w-auto md:flex-row md:border-none`}>
        {menuItems.map((item, index) => (
          <div key={index} className="relative group" onMouseEnter={() => item.isDropdown && setIsServicesOpen(true)} onMouseLeave={() => item.isDropdown && setIsServicesOpen(false)}>
            {item.isDropdown ? (
              <span className={`font-black text-lg ${item.color} cursor-pointer`}>{item.name}</span>
            ) : (
              <Link href={item.slug} className={`font-black text-lg ${item.color}`}>{item.name}</Link>
            )}

            {item.isDropdown && isServicesOpen && (
              <div className="absolute top-8 right-0 bg-black border-2 border-yellow-600 p-4 w-64 z-50">
                {item.subItems?.map((sub, i) => (
                  <Link href={sub.slug} key={i} className="block text-white hover:text-yellow-500 py-2 text-sm font-black">↳ {sub.name}</Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>

      {/* 3. اللوجو (اليسار) */}
      <div className="flex-shrink-0">
        <img src="/logo.png" alt="Logo" className="h-10 md:h-16 w-auto" />
      </div>

    </header>
  );
}
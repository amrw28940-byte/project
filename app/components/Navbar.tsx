"use client";
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "الرئيسية", href: "/" },
  { name: "الخدمات", href: "/services" },
  { name: "مشاريعنا", href: "/projects" },
  { name: "المدونة", href: "/blog" },
  { name: "اتصل بنا", href: "/contact" },
  { name: "من نحن ", href: "/aboutus" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // مراقبة عملية التمرير لتغيير لون الهيدر
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 py-4 px-6 md:px-10 flex items-center justify-between transition-all duration-300 border-b ${
        isScrolled 
          ? "bg-sky-950/70 backdrop-blur-md border-white/10" 
          : "bg-white border-gray-200"
      }`} 
      style={{ direction: "rtl" }}
    >
      {/* الشعار */}
      <div className="w-12 h-12">
        <img src="/imge.png" alt="Logo" className="w-full h-full object-contain" />
      </div>

      {/* الروابط للشاشات الكبيرة */}
      <div className="hidden md:flex items-center gap-8">
        {navLinks.map((link, index) => (
          <a 
            key={index} 
            href={link.href} 
            className={`${isScrolled ? "text-white" : "text-sky-950"} font-bold text-sm hover:text-yellow-400 transition-colors`}
          >
            {link.name}
          </a>
        ))}
      </div>

      {/* زر الواتساب (أصفر مع نص أزرق غامق) */}
      <div className="flex items-center gap-4">
        <a 
          href="https://wa.me/201505388060" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hidden md:block px-6 py-2 rounded-lg text-sm font-bold text-sky-950 bg-yellow-400 hover:bg-yellow-500 transition-all shadow-md"
        >
          ابدأ الآن
        </a>
        
        {/* زر القائمة للموبايل */}
        <button 
          className={`md:hidden ${isScrolled ? "text-white" : "text-sky-950"}`} 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* قائمة الموبايل عند الفتح */}
      {isOpen && (
        <div className="absolute top-full right-0 w-full bg-white text-sky-950 p-6 flex flex-col items-center gap-6 md:hidden shadow-xl border-b border-gray-200">
          {navLinks.map((link, index) => (
            <a key={index} href={link.href} className="font-bold text-lg hover:text-yellow-500" onClick={() => setIsOpen(false)}>
              {link.name}
            </a>
          ))}
          <a 
            href="https://wa.me/201505388060" 
            className="px-6 py-2 rounded-lg font-bold text-sky-950 bg-yellow-400 hover:bg-yellow-500 transition-all"
          >
            ابدأ الآن
          </a>
        </div>
      )}
    </nav>
  );
}
"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function ServicesSection() {
  const services = [
    { title: "تصميم فيديوهات AI", img: "/AI video design.webp", slug: "/services/vidioai" },
    { title: "تطوير صفحات الهبوط", img: "/Developing marketing pages.webp", slug: "/services/landing-pages" },
    { title: "تطوير مواقع Next.js", img: "/Next.js Website Development.webp", slug: "/services/nextjs" },
    { title: "تحسين محركات البحث (SEO)", img: "/Search Engine Optimization (SEO).webp", slug: "/services/seo" },
    { title: "تصميم متاجر شوبيفاي", img: "/Shopify Store Design.webp", slug: "/services/shopify" },
    { title: "تصميم مواقع ووردبريس", img: "/WordPress Website Design.webp", slug: "/services/wordpress" },
  ];

  return (
    <section className="relative w-full py-28 px-4 md:px-12 overflow-hidden bg-[#f5f7f5]" dir="rtl">
      
      {/* شبكة المربعات الهندسية الخلفية باللون الأخضر الهادئ */}
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

      {/* هالة خضراء للتوهج الخلفي */}
      <div 
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "900px",
          height: "600px",
          background: "radial-gradient(circle, rgba(16, 185, 129, 0.06) 0%, transparent 75%)",
          zIndex: 0,
          pointerEvents: "none",
          filter: "blur(120px)",
        }}
      />

      {/* تم زيادة العرض الأقصى للسكشن ليصبح أوسع */}
      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl font-black text-slate-900 text-center mb-16 tracking-wide">
          خدماتنا الاحترافية
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              whileHover={{ y: -12, scale: 1.02 }}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white/95 backdrop-blur-sm rounded-3xl overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.12)] border-4 border-emerald-500 flex flex-col justify-between transition-all group"
            >
              <Link 
                href={service.slug} 
                title={`انتقل إلى خدمة ${service.title}`}
                className="flex flex-col justify-between h-full w-full cursor-pointer"
              >
                {/* تم تكبير ارتفاع حاوية الصورة (h-[420px]) لتأخذ الصورة راحتها الكاملة وتظهر بكبر حجمها */}
                <div className="relative h-[420px] w-full bg-white p-6 border-b-4 border-emerald-500 flex items-center justify-center">
                  <Image 
                    src={service.img} 
                    alt={service.title} 
                    title={service.title}
                    fill 
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-contain p-3 group-hover:scale-105 transition-transform duration-500" 
                  />
                </div>

                {/* اسم الخدمة تحت الصورة بخط عريض وواضح */}
                <div className="p-6 text-center bg-white flex-grow flex items-center justify-center">
                  <h3 className="text-2xl font-black text-slate-900 group-hover:text-emerald-600 transition-colors">
                    {service.title}
                  </h3>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
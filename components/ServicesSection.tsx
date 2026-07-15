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
    <section className="relative w-full py-24 px-6 overflow-hidden bg-white" dir="rtl">
      
      {/* شبكة المربعات الهندسية الخلفية */}
      <div 
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          pointerEvents: "none",
          backgroundImage: `
            linear-gradient(to right, rgba(255, 0, 30, 0.14) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 0, 30, 0.14) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* هالة حمراء للتوهج الخلفي */}
      <div 
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "800px",
          height: "500px",
          background: "radial-gradient(circle, rgba(255, 0, 30, 0.04) 0%, transparent 75%)",
          zIndex: 0,
          pointerEvents: "none",
          filter: "blur(100px)",
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl font-black text-black text-center mb-16 tracking-wide">
          خدماتنا الاحترافية
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              whileHover={{ y: -12, scale: 1.02 }}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white/90 backdrop-blur-sm rounded-3xl overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)] border-4 border-[#ff001e] flex flex-col justify-between transition-all group"
            >
              <div className="relative h-64 bg-gray-50 border-b-4 border-[#ff001e]">
                <Image 
                  src={service.img} 
                  alt={service.title} 
                  fill 
                  /* إضافة خاصية sizes هنا لحل التحذير تماماً وتحسين أداء السيو */
                  sizes="(max-w-768px) 100vw, (max-w-1200px) 50vw, 33vw"
                  className="object-contain p-6 group-hover:scale-105 transition-transform duration-500" 
                />
                <Link href={service.slug} className="absolute top-4 left-4 bg-[#ff001e] text-white px-5 py-2 rounded-xl text-sm font-black shadow-md hover:bg-red-700 transition-colors">
                  اعرف المزيد ←
                </Link>
              </div>

              <div className="p-8 text-center bg-white">
                <h3 className="text-2xl font-black text-black group-hover:text-[#ff001e] transition-colors">
                  {service.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

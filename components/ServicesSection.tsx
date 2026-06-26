"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function ServicesSection() {
  const services = [
    { title: "تصميم تطبيقات أندرويد", img: "/Android Application Design.webp", slug: "/services/android" },
    { title: "تطوير صفحات الهبوط", img: "/Developing marketing pages.webp", slug: "/services/landing-pages" },
    { title: "تطوير مواقع Next.js", img: "/Next.js Website Development.webp", slug: "/services/nextjs" },
    { title: "تحسين محركات البحث (SEO)", img: "/Search Engine Optimization (SEO).webp", slug: "/services/seo" },
    { title: "تصميم متاجر شوبيفاي", img: "/Shopify Store Design.webp", slug: "/services/shopify" },
    { title: "تصميم مواقع ووردبريس", img: "/WordPress Website Design.webp", slug: "/services/wordpress" },
  ];

  return (
    <section className="bg-[#F4B400] py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-black text-black text-center mb-16">خدماتنا الاحترافية</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              whileHover={{ y: -10 }}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-xl"
            >
              {/* تم تغيير object-cover إلى object-contain هنا */}
              <div className="relative h-64 bg-gray-50">
                <Image 
                  src={service.img} 
                  alt={service.title} 
                  fill 
                  className="object-contain p-4" 
                />
                <Link href={service.slug} className="absolute top-4 left-4 bg-black text-white px-4 py-2 rounded-lg text-sm font-bold">
                  اعرف المزيد
                </Link>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-black text-black">{service.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
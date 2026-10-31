"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function ProjectsSection() {
  const projects = [
    { title: "Ads Agency Marketing", link: "https://www.adsagencymarketing.com/" },
    { title: "Pure Husk Gold", link: "https://purehuskgold.myeasyorders.com/" },
    { title: "The Light House", link: "https://the-light-house-kappa.vercel.app/en" },
    { title: "Al Subaie", link: "https://elsubaie.com/" },
    { title: "AHMT Egypt Travel", link: "https://www.ahmtegypttravel.com/" },
    { title: "Cobra Plast", link: "https://cobra-plast.com/" },
  ];

  return (
    <section className="relative w-full py-24 px-6 overflow-hidden bg-[#f5f7f5]" dir="rtl">
      
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
          width: "800px",
          height: "500px",
          background: "radial-gradient(circle, rgba(16, 185, 129, 0.06) 0%, transparent 75%)",
          zIndex: 0,
          pointerEvents: "none",
          filter: "blur(100px)",
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl font-black text-slate-900 text-center mb-16 tracking-wide">
          أهم مشاريعنا
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            // استخدام رابط معاينة موثوق وسريع يجلب لقطة شاشة حقيقية لكل موقع أوتوماتيكياً
            const liveScreenshot = `https://image.thum.io/get/width/600/crop/800/${project.link}`;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -12, scale: 1.02 }}
                className="bg-white/90 backdrop-blur-sm rounded-3xl overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.12)] flex flex-col justify-between cursor-pointer border-4 border-emerald-500 transition-all group"
              >
                <Link href={project.link} target="_blank" className="block w-full h-full">
                  
                  {/* حاوية تعكس صورة الموقع الحقيقية أوتوماتيكياً */}
                  <div className="relative w-full h-48 bg-gray-100 overflow-hidden border-b-4 border-emerald-500">
                    <Image
                      src={liveScreenshot}
                      alt={`موقع ${project.title}`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors" />
                  </div>

                  <div className="p-8 text-center flex flex-col items-center">
                    <h3 className="text-2xl font-black text-slate-900 mb-6 group-hover:text-emerald-600 transition-colors">
                      {project.title}
                    </h3>
                    
                    <span className="inline-block bg-emerald-600 text-white px-10 py-3 rounded-xl font-black hover:bg-emerald-500 transition-colors w-full text-center shadow-md">
                      زيارة الموقع ←
                    </span>
                  </div>

                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
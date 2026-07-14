"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function ProjectsSection() {
  const projects = [
    { title: "Cobra Plast", link: "https://cobra-plast.com/", img: "/cobra-plast.webp" },
    { title: "Travel Friend", link: "https://travelfriend-ag.com/", img: "/travelfriend.webp" },
    { title: "Artistic Touch", link: "https://artistic-touch1.myeasyorders.com/", img: "/artistic-touch.webp" },
    { title: "RiseUp BH", link: "https://www.riseupbh.com/", img: "/riseupbh.webp" },
    { title: "Munzilike", link: "https://munzilike.com/", img: "/munzilike.webp" },
    { title: "Slife Home", link: "https://slifehome.com/", img: "/slifehome.webp" },
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
        {/* عنوان السيكشن باللون الأسود الداكن الواضح */}
        <h2 className="text-4xl md:text-5xl font-black text-black text-center mb-16 tracking-wide">
          أهم مشاريعنا
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -12, scale: 1.02 }}
              /* كروت محاطة ببرواز أحمر، حواف منحنية، وظل أسود عميق وقوي */
              className="bg-white/90 backdrop-blur-sm rounded-3xl overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)] flex flex-col justify-between cursor-pointer border-4 border-[#ff001e] transition-all group"
            >
              {/* الكارت بالكامل داخل رابط لسهولة التصفح */}
              <Link href={project.link} target="_blank" className="block w-full h-full">
                
                {/* حاوية الصورة */}
                <div className="relative w-full h-48 bg-gray-50 overflow-hidden border-b-4 border-[#ff001e]">
                  <Image
                    src={project.img}
                    alt={`تصميم وموقع شركة ${project.title}`}
                    fill
                    sizes="(max-w-768px) 100vw, (max-w-1200px) 50vw, 33vw"
                    priority={index < 3}
                    loading={index >= 3 ? "lazy" : undefined}
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors" />
                </div>

                {/* تفاصيل الكارت بالأسفل - نصوص سوداء عريضة وزر أحمر متناسق */}
                <div className="p-8 text-center flex flex-col items-center">
                  <h3 className="text-2xl font-black text-black mb-6 group-hover:text-[#ff001e] transition-colors">
                    {project.title}
                  </h3>
                  
                  <span className="inline-block bg-[#ff001e] text-white px-10 py-3 rounded-xl font-black hover:bg-red-700 transition-colors w-full text-center shadow-md">
                    زيارة الموقع ←
                  </span>
                </div>

              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
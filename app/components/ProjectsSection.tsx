"use client";
import Link from "next/link";
import { motion } from "framer-motion";

const projects = [
  { title: "Quraaany", url: "https://quraaany.com/" },
  { title: "Riyadh Gateway", url: "https://riyadhgateway.com/" },
  { title: "Taatim", url: "https://taatim.com/" },
  { title: "Almustaemal", url: "https://almustaemal.com/" },
  { title: "Saudi Car Buy", url: "https://saudicarbuy.com/" },
  { title: "Taxi 24 KW", url: "https://taxi24-kw.com/" },
];

export default function ProjectsSection() {
  return (
    <section className="py-24 px-6 bg-sky-950" id="projects">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-4xl md:text-5xl font-black text-center text-white mb-16">
          مشاريعنا المميزة
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const isCentered = index === 2 || index === 5;
            // نستخدم خدمة API لجلب صورة الموقع تلقائياً بناءً على الرابط
            const imageUrl = `https://api.microlink.io?url=${encodeURIComponent(project.url)}&screenshot=true&embed=screenshot.url`;
            
            return (
              <motion.div
                key={index}
                className={isCentered ? "md:col-span-2 md:px-32" : ""}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link 
                  href={project.url} 
                  target="_blank"
                  className="group block overflow-hidden rounded-2xl shadow-xl border border-white/10 hover:border-yellow-400 transition-all duration-300"
                >
                  <div className="relative h-72 overflow-hidden bg-sky-900">
                    <motion.img 
                      whileHover={{ scale: 1.1 }}
                      src={imageUrl} 
                      alt={project.title} 
                      className="w-full h-full object-cover" 
                    />
                    <div className="absolute inset-0 bg-sky-950/40 group-hover:bg-transparent transition-colors" />
                  </div>
                  <div className="p-6 text-center bg-sky-900/50">
                    <h3 className="text-xl font-bold text-white group-hover:text-yellow-400 transition-colors">
                      {project.title}
                    </h3>
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
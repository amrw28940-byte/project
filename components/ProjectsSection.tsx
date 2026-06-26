"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function ProjectsSection() {
  const projects = [
    { title: "Cobra Plast", link: "https://cobra-plast.com/" },
    { title: "Travel Friend", link: "https://travelfriend-ag.com/" },
    { title: "Unique WS", link: "https://unique-ws.com/" },
    { title: "RiseUp BH", link: "https://www.riseupbh.com/" },
    { title: "Munzilike", link: "https://munzilike.com/" },
    { title: "Slife Home", link: "https://slifehome.com/" },
  ];

  return (
    <section className="bg-blue-900 py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-black text-white text-center mb-16">أهم مشاريعنا</h2>
        
        {/* تغيير التنسيق ليناسب 6 كروت (2 في الموبايل، 3 في الكمبيوتر) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -15, scale: 1.03 }}
              className="bg-white rounded-3xl p-10 shadow-2xl flex flex-col items-center justify-center text-center cursor-pointer border-b-8 border-blue-500 hover:border-white transition-colors"
            >
              <h3 className="text-2xl font-black text-blue-900 mb-8">{project.title}</h3>
              <Link 
                href={project.link} 
                target="_blank"
                className="bg-blue-600 text-white px-10 py-4 rounded-xl font-black hover:bg-blue-700 transition-colors w-full"
              >
                زيارة الموقع
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
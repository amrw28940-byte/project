"use client";
import { motion } from "framer-motion";

export default function ExperienceSection() {
  const transition = { duration: 1.2, ease: "easeInOut" };

  return (
    <section className="flex flex-col md:flex-row w-full overflow-hidden">
      
      {/* النصف الأسود */}
      <div className="bg-black w-full md:w-1/2 p-24 flex flex-col items-center justify-center text-center">
        <div className="max-w-md w-full flex flex-col items-center">
          
          {/* العنوان يظهر من فوق الخط */}
          <motion.h2 
            initial={{ opacity: 0, y: -30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            transition={transition}
            className="text-white text-6xl font-black mb-6"
          >10 سنين خبرة</motion.h2>

          {/* الخط */}
          <motion.div 
            initial={{ scaleX: 0, originX: 0 }} 
            whileInView={{ scaleX: 1 }} 
            viewport={{ once: true }}
            transition={{ ...transition, delay: 0.3 }}
            className="w-full h-1.5 bg-white mb-6"
          ></motion.div>

          {/* الفقرة تظهر من تحت الخط */}
          <motion.p 
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            transition={{ ...transition, delay: 0.6 }}
            className="text-gray-300 text-xl font-bold leading-relaxed"
          >
            عقد كامل من الخبرة التقنية المتخصصة، حيث قمنا بتحويل التحديات البرمجية إلى حلول رقمية مبتكرة تخدم أهداف عملائنا.
          </motion.p>
        </div>
      </div>

      {/* النصف الأحمر */}
      <div className="bg-red-600 w-full md:w-1/2 p-24 flex flex-col items-center justify-center text-center">
        <div className="max-w-md w-full flex flex-col items-center">
          
          {/* العنوان يظهر من فوق الخط */}
          <motion.h2 
            initial={{ opacity: 0, y: -30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            transition={transition}
            className="text-white text-6xl font-black mb-6"
          >150+ موقع</motion.h2>

          {/* الخط */}
          <motion.div 
            initial={{ scaleX: 0, originX: 1 }} 
            whileInView={{ scaleX: 1 }} 
            viewport={{ once: true }}
            transition={{ ...transition, delay: 0.3 }}
            className="w-full h-1.5 bg-white mb-6"
          ></motion.div>

          {/* الفقرة تظهر من تحت الخط */}
          <motion.p 
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            transition={{ ...transition, delay: 0.6 }}
            className="text-white text-xl font-bold leading-relaxed"
          >
            أكثر من 150 موقعاً إلكترونياً تم إنشاؤها وتحسين محركات البحث لها (SEO) لضمان تصدر النتائج وزيادة معدلات التحويل.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
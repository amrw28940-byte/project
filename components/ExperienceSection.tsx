"use client";
import { motion } from "framer-motion";

export default function ExperienceSection() {
  return (
    <section className="flex flex-col md:flex-row w-full overflow-hidden">
      
      {/* النصف الأسود */}
      <div className="bg-black w-full md:w-1/2 p-8 md:p-24 flex flex-col items-center justify-center text-center">
        <div className="max-w-md w-full flex flex-col items-center">
          
          <motion.h2 
            initial={{ opacity: 0, y: -30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="text-white text-4xl md:text-6xl font-black mb-4 md:mb-6"
          >
            10 سنين خبرة
          </motion.h2>

          <motion.div 
            initial={{ scaleX: 0, originX: 0 }} 
            whileInView={{ scaleX: 1 }} 
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="w-full h-1.5 bg-white mb-4 md:mb-6"
          ></motion.div>

          <motion.p 
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.6 }}
            className="text-gray-300 text-lg md:text-xl font-bold leading-relaxed"
          >
            عقد كامل من الخبرة التقنية المتخصصة، حيث قمنا بتحويل التحديات البرمجية إلى حلول رقمية مبتكرة.
          </motion.p>
        </div>
      </div>

      {/* النصف الأحمر */}
      <div className="bg-red-600 w-full md:w-1/2 p-8 md:p-24 flex flex-col items-center justify-center text-center">
        <div className="max-w-md w-full flex flex-col items-center">
          
          <motion.h2 
            initial={{ opacity: 0, y: -30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="text-white text-4xl md:text-6xl font-black mb-4 md:mb-6"
          >
            150+ موقع
          </motion.h2>

          <motion.div 
            initial={{ scaleX: 0, originX: 1 }} 
            whileInView={{ scaleX: 1 }} 
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="w-full h-1.5 bg-white mb-4 md:mb-6"
          ></motion.div>

          <motion.p 
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.6 }}
            className="text-white text-lg md:text-xl font-bold leading-relaxed"
          >
            أكثر من 150 موقعاً إلكترونياً تم إنشاؤها وتحسين محركات البحث لها (SEO) لضمان تصدر النتائج.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
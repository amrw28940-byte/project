"use client";
import { motion } from "framer-motion";

export default function ExperienceSection() {
  return (
    <section className="relative flex flex-col md:flex-row w-full overflow-hidden bg-white min-h-[500px] gap-8 p-8 md:p-16 items-center justify-center">
      
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
          width: "600px",
          height: "400px",
          background: "radial-gradient(circle, rgba(255, 0, 30, 0.05) 0%, transparent 75%)",
          zIndex: 0,
          pointerEvents: "none",
          filter: "blur(80px)",
        }}
      />

      {/* الجزء الأول: خبرة 10 سنين محاط ببرواز أحمر وظل قوي جداً */}
      <div className="w-full md:w-1/2 max-w-md z-10">
        <div className="bg-white/80 backdrop-blur-sm border-4 border-[#ff001e] rounded-3xl p-8 md:p-12 flex flex-col items-center justify-center text-center shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)] transition-transform duration-300 hover:scale-[1.02]">
          
          <motion.h2 
            initial={{ opacity: 0, y: -30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="text-black text-4xl md:text-5xl font-black mb-4 md:mb-6 tracking-wide"
          >
             خبرة 10 سنين
          </motion.h2>

          <motion.div 
            initial={{ scaleX: 0, originX: 0 }} 
            whileInView={{ scaleX: 1 }} 
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="w-full h-1.5 bg-[#ff001e] mb-4 md:mb-6 rounded-full"
          ></motion.div>

          <motion.p 
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.6 }}
            className="text-gray-900 text-xl font-extrabold leading-relaxed"
          >
            عقد كامل من الخبرة التقنية المتخصصة، حيث قمنا بتحويل التحديات البرمجية إلى حلول رقمية مبتكرة.
          </motion.p>
        </div>
      </div>

      {/* الجزء الثاني: +150 موقع محاط ببرواز أحمر وظل قوي جداً */}
      <div className="w-full md:w-1/2 max-w-md z-10">
        <div className="bg-white/80 backdrop-blur-sm border-4 border-[#ff001e] rounded-3xl p-8 md:p-12 flex flex-col items-center justify-center text-center shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)] transition-transform duration-300 hover:scale-[1.02]">
          
          <motion.h2 
            initial={{ opacity: 0, y: -30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="text-black text-4xl md:text-5xl font-black mb-4 md:mb-6 tracking-wide"
          >
            150+ موقع
          </motion.h2>

          <motion.div 
            initial={{ scaleX: 0, originX: 1 }} 
            whileInView={{ scaleX: 1 }} 
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="w-full h-1.5 bg-[#ff001e] mb-4 md:mb-6 rounded-full"
          ></motion.div>

          <motion.p 
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.6 }}
            className="text-gray-900 text-xl font-extrabold leading-relaxed"
          >
            أكثر من 150 موقعاً إلكترونياً تم إنشاؤها وتحسين محركات البحث لها (SEO) لضمان تصدر النتائج.
          </motion.p>
        </div>
      </div>
      
    </section>
  );
}

"use client";
import { motion } from "framer-motion";

export default function ContactSection() {
  return (
    <section className="relative w-full py-24 px-6 overflow-hidden bg-white">
      
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

      <div className="max-w-3xl mx-auto flex flex-col items-center relative z-10" dir="rtl">
        
        {/* العنوان باللون الأسود الواضح والعريض */}
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-black text-black mb-12 text-center tracking-wide"
        >
          تواصل معنا
        </motion.h2>
        
        {/* نموذج التواصل - محاط ببرواز أحمر عريض وحواف دائرية 3xl وظل أسود عميق وقوي جداً */}
        <motion.form 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="w-full bg-white/90 backdrop-blur-sm border-4 border-[#ff001e] rounded-3xl p-8 md:p-12 space-y-6 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)]" 
          onSubmit={(e) => e.preventDefault()}
        >
          <input 
            type="text" 
            placeholder="الاسم" 
            className="w-full p-5 rounded-2xl bg-white border-2 border-gray-300 text-black placeholder-gray-500 focus:outline-none focus:border-[#ff001e] transition-all text-lg font-extrabold shadow-sm" 
          />
          <input 
            type="email" 
            placeholder="الايميل" 
            className="w-full p-5 rounded-2xl bg-white border-2 border-gray-300 text-black placeholder-gray-500 focus:outline-none focus:border-[#ff001e] transition-all text-lg font-extrabold shadow-sm" 
          />
          <textarea 
            placeholder="الخدمة المطلوبة" 
            rows={5}
            className="w-full p-5 rounded-2xl bg-white border-2 border-gray-300 text-black placeholder-gray-500 focus:outline-none focus:border-[#ff001e] transition-all text-lg font-extrabold shadow-sm" 
          ></textarea>
          
          {/* زر إرسال باللون الأحمر النيون المتناسق مع الهوية */}
          <button className="w-full bg-[#ff001e] text-white font-black py-5 rounded-2xl text-xl hover:bg-red-700 hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 shadow-md">
            أرسل الطلب ←
          </button>
        </motion.form>
      </div>
    </section>
  );
}

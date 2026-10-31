"use client";
import { motion } from "framer-motion";

export default function ContactSection() {
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

      <div className="max-w-3xl mx-auto flex flex-col items-center relative z-10" dir="rtl">
        
        {/* العنوان باللون الأسود الواضح والعريض */}
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-black text-slate-900 mb-12 text-center tracking-wide"
        >
          تواصل معنا
        </motion.h2>
        
        {/* نموذج التواصل - محاط ببرواز أخضر عريض وحواف دائرية 3xl وظل عميق وقوي جداً */}
        <motion.form 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="w-full bg-white/90 backdrop-blur-sm border-4 border-emerald-500 rounded-3xl p-8 md:p-12 space-y-6 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)]" 
          onSubmit={(e) => e.preventDefault()}
        >
          <input 
            type="text" 
            placeholder="الاسم" 
            className="w-full p-5 rounded-2xl bg-white border-2 border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-emerald-600 transition-all text-lg font-extrabold shadow-sm" 
          />
          <input 
            type="email" 
            placeholder="الايميل" 
            className="w-full p-5 rounded-2xl bg-white border-2 border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-emerald-600 transition-all text-lg font-extrabold shadow-sm" 
          />
          <textarea 
            placeholder="الخدمة المطلوبة" 
            rows={5}
            className="w-full p-5 rounded-2xl bg-white border-2 border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-emerald-600 transition-all text-lg font-extrabold shadow-sm" 
          ></textarea>
          
          {/* زر إرسال باللون الأخضر المتناسق مع الهوية */}
          <button className="w-full bg-emerald-600 text-white font-black py-5 rounded-2xl text-xl hover:bg-emerald-500 hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 shadow-md">
            أرسل الطلب ←
          </button>
        </motion.form>
      </div>
    </section>
  );
}
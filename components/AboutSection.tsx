"use client";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section className="relative flex flex-col md:flex-row w-full min-h-[500px] overflow-hidden bg-[#f5f7f5]" dir="rtl">
      
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

      {/* هالة خضراء خفيفة جداً للتوهج الخلفي */}
      <div 
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "600px",
          height: "400px",
          background: "radial-gradient(circle, rgba(16, 185, 129, 0.08) 0%, transparent 75%)",
          zIndex: 0,
          pointerEvents: "none",
          filter: "blur(80px)",
        }}
      />

      {/* النصف الأيمن: النص الشخصي (من أنا) مع ضبط الاتجاه لليمين */}
      <div className="w-full md:w-1/2 p-16 md:p-24 flex flex-col justify-center items-end text-right z-10" dir="rtl">
        <motion.div 
          initial={{ opacity: 0, x: 50 }} 
          whileInView={{ opacity: 1, x: 0 }}
          className="flex flex-col items-end w-full"
        >
          <h2 className="text-slate-900 text-5xl font-black mb-8 tracking-wide text-right w-full">من أنا؟</h2>
          
          <p className="text-slate-700 text-xl leading-relaxed font-extrabold max-w-lg text-right w-full" dir="rtl">
            أنا عمرو سالم، مطور وباحث تقني متخصص في تصميم وتطوير المواقع وتطبيقات الويب المتقدمة (<span dir="ltr" className="inline-block">Next.js & WordPress</span>) وهندسة حلول المتاجر الإلكترونية، بالإضافة إلى تحسين محركات البحث (<span dir="ltr" className="inline-block">SEO</span>). أمتلك خبرة تتجاوز العقد من العمل التقني الاحترافي، حيث أكرس خبرتي وشغفي لتحويل التحديات البرمجية المعقدة إلى منصات رقمية سريعة، جذابة، وعالية الأداء. هدفي دائماً هو بناء شراكات حقيقية مع عملائي ومساعدتهم على تصدر النتائج وتحقيق أهدافهم الرقمية بأعلى معايير الدقة والاحترافية.
          </p>
        </motion.div>
      </div>

      {/* النصف الأيسر: الفيديو (hero.mp4) مع برواز أخضر/زمردي، زوايا منحنية، وظل قوي */}
      <div className="w-full md:w-1/2 relative flex items-center justify-center p-8 z-10">
        <div className="relative border-4 border-emerald-500 rounded-3xl overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.2)] transition-transform duration-300 hover:scale-[1.02] bg-white/60 backdrop-blur-md w-full max-w-[500px]">
          <video 
            src="/hero.mp4" 
            autoPlay 
            loop 
            muted 
            playsInline
            className="w-full h-auto max-h-[450px] object-cover" 
          />
        </div>
      </div>

    </section>
  );
}
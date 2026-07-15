"use client";
import { motion } from "framer-motion";

export default function TestimonialsSection() {
  const testimonials = [
    { name: "أحمد علي", role: "صاحب متجر إلكتروني", text: "تجربة رائعة! فريق محترف جداً، التصميم كان مذهلاً والنتائج تجاوزت توقعاتي." },
    { name: "سارة محمود", role: "مديرة تسويق", text: "احترافية في التعامل، سرعة في التنفيذ، ونتائج ملموسة في تحسين ترتيب موقعنا بـ SEO." },
    { name: "خالد إبراهيم", role: "مؤسس شركة ناشئة", text: "أفضل استثمار قمنا به لمشروعنا التقني، فريق لا يتوقف عن تقديم الأفكار المبتكرة." },
    { name: "نور يوسف", role: "مصممة أزياء", text: "المتجر الذي صمموه لنا زاد من مبيعاتنا بشكل ملحوظ في وقت قياسي جداً." },
    { name: "عمر كمال", role: "استشاري أعمال", text: "بساطة في التصميم وقوة في الأداء. Next.js جعلت موقعي سريعاً جداً." },
    { name: "ليلى حسن", role: "مدونة", text: "خدمة ما بعد البيع ممتازة، دائماً موجودين للمساعدة في أي استفسار أو تطوير." },
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

      <div className="max-w-7xl mx-auto relative z-10">
        {/* عنوان السيكشن باللون الأسود الواضح والعريض */}
        <h2 className="text-4xl md:text-5xl font-black text-black text-center mb-16 tracking-wide">
          آراء عملائنا
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.03, y: -5 }}
              /* كروت ببرواز أحمر عريض وحواف دائرية 3xl وظل أسود عميق وقوي جداً */
              className="bg-white/90 backdrop-blur-sm p-8 rounded-3xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)] border-4 border-[#ff001e] flex flex-col justify-between transition-all"
            >
              <div>
                {/* النجوم باللون الأحمر المتناسق مع الهوية */}
                <div className="text-[#ff001e] mb-6 text-xl">★★★★★</div>
                <p className="text-gray-900 text-lg font-extrabold mb-8 italic">"{t.text}"</p>
              </div>
              
              <div className="border-t-2 border-gray-200 pt-6">
                <h4 className="text-black font-black text-xl">{t.name}</h4>
                <p className="text-[#ff001e] font-black mt-1">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

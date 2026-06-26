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
    <section className="bg-orange-500 py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-black text-white text-center mb-16">آراء عملائنا</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div 
              key={index}
              // تأثير الظهور التدريجي عند الوصول للسكشن
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              // تأثير الزوم عند الوقوف بالماوس
              whileHover={{ scale: 1.05, rotate: 1 }}
              className="bg-blue-950 p-8 rounded-3xl shadow-2xl border border-blue-800"
            >
              <div className="flex text-yellow-400 mb-6 text-xl">★★★★★</div>
              <p className="text-gray-200 text-lg mb-8 italic">"{t.text}"</p>
              <div className="border-t border-blue-800 pt-6">
                <h4 className="text-white font-black text-xl">{t.name}</h4>
                <p className="text-orange-400 font-bold">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
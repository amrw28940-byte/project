"use client";
import { motion } from "framer-motion";

export default function LocationSection() {
  return (
    <section className="py-24 px-6 bg-[#0D2B42] text-white">
      <div className="container mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* الجزء اليمين: معلومات المقر */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h2 className="text-4xl font-black mb-8">مقر الوكالة الرئيسي</h2>
          
          {/* هنا تم وضع المعلومات داخل مستطيل لونه أغمق قليلاً */}
          <div className="bg-[#0B2538] p-8 rounded-3xl border border-white/5 shadow-inner space-y-4 text-lg">
            <p className="flex items-start gap-3">
              <span>📍</span>
              <span>١٣ش الشهيد محمود جمعه متفرع من جمال عبد الناصر العصافره بحري اعلى كافيه الفيروز الدور الرابع, Alexandria, Egypt، الإسكندرية، مصر.</span>
            </p>
            <p className="flex items-center gap-3">
              <span>⏰</span>
              <span>العمل: من 9:00 صباحاً وحتى 6:00 مساءً</span>
            </p>
            <p className="flex items-center gap-3">
              <span>🎧</span>
              <span>دعم العملاء (الخليج ومصر): متوفر 24 ساعة</span>
            </p>
          </div>

          <a 
            href="#" 
            target="_blank"
            className="inline-block mt-6 bg-[#0096e6] text-white font-bold py-3 px-8 rounded-full hover:bg-yellow-400 transition-all"
          >
            افتح الاتجاهات في Google Maps
          </a>
        </motion.div>

        {/* الجزء الشمال: خريطة جوجل */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full h-96 rounded-3xl overflow-hidden border-4 border-white/10 shadow-2xl"
        >
          <iframe 
            src="https://www.google.com/maps/embed?pb=..." // تأكد من استبدال هذا الرابط
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={true} 
            loading="lazy"
            title="Google Maps Location"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
}
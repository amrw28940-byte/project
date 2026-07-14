"use client"; // ضروري لاستخدام framer-motion
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="relative w-full h-[80vh] overflow-hidden">
      <video
        autoPlay muted loop playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/dddd.mp4" type="video/mp4" />
      </video>
      
      <div className="absolute top-0 left-0 w-full h-full bg-black/60 z-10" />
      
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4">
        
        {/* إضافة dir="rtl" لتجبر المتصفح على قراءة السطر بالاتجاه الصحيح في البرودكشن */}
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          dir="rtl"
          className="text-3xl md:text-6xl font-black text-white mb-6 leading-tight whitespace-pre-line"
        >
          نصمم مستقبلك الرقمي بـ <span className="text-red-500 inline-block" dir="ltr">Next.js</span> و <span className="text-red-500 inline-block" dir="ltr">WordPress</span>
          <br />
          <span className="text-2xl md:text-4xl text-gray-200 font-bold mt-4 block">
            مع استراتيجيات احترافية لتصدر نتائج البحث (SEO)
          </span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          dir="rtl"
          className="text-white text-lg md:text-xl mb-10 max-w-2xl"
        >
          نحن نحول أفكارك إلى منصات رقمية سريعة ⚡، آمنة 🛡️، ومتوافقة تماماً مع محركات البحث.
        </motion.p>

        <motion.a 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="/calculate" 
          className="bg-red-500 text-black px-10 py-4 rounded-full font-black text-xl hover:bg-red-400 transition-all shadow-[0_0_20px_rgba(234,179,8,0.5)]"
        >
          احسب تكلفة خدمتك الآن 💰
        </motion.a>
      </div>
    </section>
  );
}
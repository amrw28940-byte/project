"use client";
import { motion } from "framer-motion";

export default function ContactSection() {
  return (
    <section className="bg-green-600 w-full min-h-[500px] flex flex-col md:flex-row">
      
      {/* القسم الأول: الخريطة (على اليسار) */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        className="w-full md:w-1/2 h-[500px] md:h-auto"
      >
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3417.842365287679!2d29.771239975765046!3d31.1348877!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f5cf73a5a8a641%3A0x6b803f260195e790!2z2KfZhNij2YjZgtin2K_YqSDYp9mE2YXZhNiy2KfZhQ!5e0!3m2!1sar!2seg!4v1716300000000!5m2!1sar!2seg" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy"
          className="grayscale hover:grayscale-0 transition-all duration-500"
        ></iframe>
      </motion.div>

      {/* القسم الثاني: معلومات التواصل (على اليمين) */}
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="w-full md:w-1/2 p-16 md:p-24 flex flex-col justify-center items-end text-right text-white"
      >
        <h2 className="text-6xl font-black mb-8">giotec</h2>
        <div className="space-y-6 text-xl">
          <p className="font-bold"> العنوان: العجمي، الهانوفيل، الإسكندرية 📍</p>
          <div className="space-y-2">
            <p className="font-bold"> :للتواصل 📞</p>
            <a href="tel:01020347946" className="block hover:text-black transition-colors font-black text-2xl">01020347946</a>
            <a href="tel:01017741283" className="block hover:text-black transition-colors font-black text-2xl">01017741283</a>
          </div>
        </div>
      </motion.div>

    </section>
  );
}
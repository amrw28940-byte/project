"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="flex flex-col md:flex-row w-full min-h-[500px]">
      
      {/* النصف الأيسر: الصورة (مساحة أكبر) */}
      <div className="bg-black w-full md:w-1/2 relative flex items-center justify-center p-8">
        <Image 
          src="/seo.webp" 
          alt="About Us" 
          width={600} 
          height={600}
          className="object-contain w-full h-auto max-h-[450px]" 
        />
      </div>

      {/* النصف الأيمن: النص في المستوى */}
      <div className="bg-black w-full md:w-1/2 p-16 md:p-24 flex flex-col justify-center items-end text-right">
        
        {/* العنوان والفقرة ككتلة واحدة متوازنة */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }} 
          whileInView={{ opacity: 1, x: 0 }}
          className="flex flex-col items-end"
        >
          <h2 className="text-white text-5xl font-black mb-8">من نحن؟</h2>
          
          <p className="text-gray-300 text-lg leading-relaxed font-bold max-w-lg">
            نحن فريق من المبدعين والتقنيين نكرس خبرتنا لتقديم حلول رقمية مبتكرة بدأت رحلتنا بشغف كبير تجاه التكنولوجيا، لنصبح كياناً يهدف لتمكين الشركات من تحقيق حضور رقمي قوي، نحن شركاء نجاحكم، نركز على دراسة أهدافكم بدقة وتقديم استراتيجيات تجمع بين الجودة التقنية والتصميم الجذاب. سواء كنت تبحث عن تطوير تطبيق متطور، متجر إلكتروني، أو تحسين محركات البحث  خبرتنا التي تتجاوز العقد تضمن لك نتائج ملموسة وفعالة، مع التزام تام بأعلى معايير الدقة والاحترافية
          </p>
        </motion.div>
        
      </div>
    </section>
  );
}
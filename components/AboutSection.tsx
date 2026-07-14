"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="relative flex flex-col md:flex-row w-full min-h-[500px] overflow-hidden bg-white">
      
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

      {/* هالة حمراء خفيفة جداً للتوهج الخلفي متناسقة مع الخلفية الفاتحة */}
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

      {/* النصف الأيسر: الصورة مع برواز أحمر، زوايا منحنية، وظل أسود ضخم قوي جداً */}
      <div className="w-full md:w-1/2 relative flex items-center justify-center p-8 z-10">
        <div className="relative border-4 border-[#ff001e] rounded-3xl overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)] transition-transform duration-300 hover:scale-[1.02]">
          <Image 
            src="/seo.webp" 
            alt="About Us" 
            width={600} 
            height={600}
            className="object-contain w-full h-auto max-h-[450px]" 
          />
        </div>
      </div>

      {/* النصف الأيمن: النص بلون أسود واضح جداً وحجم أكبر وبولد */}
      <div className="w-full md:w-1/2 p-16 md:p-24 flex flex-col justify-center items-end text-right z-10">
        
        {/* العنوان والفقرة ككتلة واحدة متوازنة */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }} 
          whileInView={{ opacity: 1, x: 0 }}
          className="flex flex-col items-end"
        >
          <h2 className="text-black text-5xl font-black mb-8 tracking-wide">من نحن؟</h2>
          
          <p className="text-gray-900 text-xl leading-relaxed font-extrabold max-w-lg">
            نحن فريق من المبدعين والتقنيين نكرس خبرتنا لتقديم حلول رقمية مبتكرة بدأت رحلتنا بشغف كبير تجاه التكنولوجيا، لنصبح كياناً يهدف لتمكين الشركات من تحقيق حضور رقمي قوي، نحن شركاء نجاحكم، نركز على دراسة أهدافكم بدقة وتقديم استراتيجيات تجمع بين الجودة التقنية والتصميم الجذاب. سواء كنت تبحث عن تطوير تطبيق متطور، متجر إلكتروني، أو تحسين محركات البحث  خبرتنا التي تتجاوز العقد تضمن لك نتائج ملموسة وفعالة، مع التزام تام بأعلى معايير الدقة والاحترافية
          </p>
        </motion.div>
        
      </div>
    </section>
  );
}
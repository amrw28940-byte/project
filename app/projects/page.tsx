"use client";
import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Globe, BookOpen, Truck, Landmark, ShoppingBag, Plane, BarChart3, Layout, Home, Scissors, PawPrint, MonitorPlay } from "lucide-react";

// مصفوفة البيانات المحدثة
const projectCategories = [
  {
    title: "نماذج مواقع قرآن",
    icon: <BookOpen className="w-6 h-6 text-amber-200" />,
    projects: [
      { name: "موقع قرآني", url: "https://quraaany.com/", desc: "منصة تعليمية للقرآن الكريم" }
    ]
  },
  {
    title: "خدمات سعودية وعقارية",
    icon: <Landmark className="w-6 h-6 text-amber-200" />,
    projects: [
      { name: "بوابة الرياض", url: "https://riyadhgateway.com/", desc: "خدمات عامة بالمملكة" },
      { name: "موقع تعتيم", url: "https://taatim.com/", desc: "خدمات متخصصة" },
      { name: "المستعمل", url: "https://almustaemal.com/", desc: "حراج وإعلانات" },
      { name: "سعودي كار باي", url: "https://saudicarbuy.com/", desc: "بيع وشراء السيارات" },
      { name: "رياض جيكس", url: "https://riyadhgeeks.com/", desc: "حلول تقنية" },
      { name: "جولد شيلد", url: "https://goldshield-sa.com/", desc: "خدمات أمنية" },
      { name: "البدر العقارية", url: "https://elbadrelakarya.org/", desc: "تسويق عقاري" },
      { name: "البدر للخدمات العقارية", url: "https://www.elbadrrealestate.com/", desc: "استثمار عقاري" },
    ]
  },
  {
    title: "مواقع تاكسي ونقل أثاث",
    icon: <Truck className="w-6 h-6 text-amber-200" />,
    projects: [
      { name: "تاكسي VIP الكويت", url: "https://taxivipkuwait.com/", desc: "حجز تاكسي بالكويت" },
      { name: "تاكسي 24", url: "https://taxi24-kw.com/", desc: "خدمات توصيل" },
      { name: "حفل لوري", url: "https://haflorry.com/", desc: "نقل أثاث محترف" },
      { name: "فاست موف الكويت", url: "https://fastmovekw.com/", desc: "خدمات النقل السريع" },
      { name: "المملكة للنقل", url: "https://www.elmamlaka.com/", desc: "نقل عفش وتخزين" },
    ]
  },
  {
    title: "مواقع سياحية",
    icon: <Plane className="w-6 h-6 text-amber-200" />,
    projects: [
      { name: "AHM Egypt Travel", url: "https://ahmegypttravel.com/", desc: "سياحة داخلية بمصر" },
      { name: "Egy Travel Lux", url: "https://egytravellux.com/", desc: "سياحة فاخرة" },
      { name: "جنان للسياحة", url: "https://jinantravels.com/", desc: "رحلات سياحية" },
      { name: "ترافيل فريند", url: "https://travelfriend-ag.com/", desc: "خدمات سياحية" },
      { name: "رحال", url: "https://rahalar.com/", desc: "رحلات وجولات" },
    ]
  },
  {
    title: "متاجر إلكترونية وديكور",
    icon: <ShoppingBag className="w-6 h-6 text-amber-200" />,
    projects: [
      { name: "رنين", url: "https://www.raneen.com/ar/", desc: "متجر أدوات منزلية" },
      { name: "لمسات للديكور", url: "https://lmsatt.com/", desc: "تصميم وتنفيذ ديكور" },
      { name: "كويت مارت", url: "https://blog-ar.kuwaitmart.com/", desc: "متجر إلكتروني" },
      { name: "MK Furniture", url: "https://mkfurniture.org/", desc: "متجر أثاث" },
      { name: "إيجي جولدن تك", url: "https://egygoldentech.com/", desc: "تقنيات ذهبية" },
      { name: "تكييف دوت كوم", url: "https://takyf.com/", desc: "أجهزة تبريد" },
      { name: "متجر الدبيسي", url: "https://eldbesy.org/", desc: "تجارة عامة" },
      { name: "سكاي لايت", url: "https://skyllight.com/", desc: "أنظمة إضاءة" },
    ]
  },
  {
    title: "مشاريع متنوعة وخدمات",
    icon: <MonitorPlay className="w-6 h-6 text-amber-200" />,
    projects: [
      { name: "عشاء العربية", url: "https://3shal3arabia.com/", desc: "مجلة ثقافية" },
      { name: "أرب نيوز", url: "https://arbnews.net/", desc: "بوابة إخبارية" },
      { name: "نجوم المملكة", url: "https://njomelmamlkh.com/", desc: "أخبار السعودية" },
      { name: "الأخبار الكويت", url: "https://alkhabarkw.com/", desc: "بث ومتابعة مباريات" },
      { name: "بيت ويذ ات", url: "https://www.petwithit.com/", desc: "تربية حيوانات أليفة" },
      { name: "دكانك", url: "https://dokansa.com/", desc: "مستلزمات حيوانات" },
      { name: "خدمات تنظيف", url: "https://cleanservicee.com/", desc: "حلول تنظيف شاملة" },
      { name: "CAD Consult", url: "https://cadconsult.net/", desc: "استشارات هندسية" },
    ]
  },
  {
    title: "تسويق إلكتروني",
    icon: <BarChart3 className="w-6 h-6 text-amber-200" />,
    projects: [
      { name: "يونيك للخدمات", url: "https://unique-ws.com/", desc: "حلول تسويقية" },
      { name: "خدمات الشريف", url: "https://alshref-services.com/", desc: "إدارة منصات" },
      { name: "Designary BH", url: "https://designarybh.com/", desc: "تصميم وهوية" },
    ]
  }
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-tr from-[#06b6d4] via-[#0ea5e9] to-[#38bdf8] py-24 px-6 font-cairo overflow-x-hidden" style={{ direction: "rtl" }}>
      
      <div className="max-w-7xl mx-auto text-center mb-24">
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="inline-block px-4 py-2 mb-6 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm">
          معرض أعمالنا الفخورين به
        </motion.div>
        <h1 className="text-5xl md:text-7xl font-black text-white mb-6 drop-shadow-xl">مشاريعنا</h1>
        <p className="text-white/80 text-lg md:text-xl max-w-3xl mx-auto font-medium">
          نستعرض معكم مجموعة من المواقع التي قمنا بتطويرها، محققين بها نتائج استثنائية لشركائنا حول العالم.
        </p>
      </div>

      <div className="max-w-7xl mx-auto space-y-32">
        {projectCategories.map((category, catIndex) => (
          <section key={catIndex}>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex items-center gap-4 mb-12">
              <div className="p-4 bg-sky-950/50 backdrop-blur-xl border border-white/20 rounded-2xl shadow-xl">{category.icon}</div>
              <h2 className="text-3xl md:text-4xl font-black text-white">{category.title}</h2>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.projects.map((project, pIndex) => (
                <motion.div key={pIndex} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: pIndex * 0.05 }} className="group relative bg-sky-950/40 backdrop-blur-2xl border border-white/10 hover:border-amber-200/50 rounded-[2rem] p-4 transition-all duration-500 hover:-translate-y-2 overflow-hidden shadow-2xl">
                  <div className="relative w-full h-52 rounded-2xl overflow-hidden mb-6 bg-sky-900/50">
                    <img src={`https://s.wordpress.com/mshots/v1/${encodeURIComponent(project.url)}?w=600&h=450`} alt={project.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-sky-950/80 via-transparent to-transparent opacity-60"></div>
                  </div>
                  <div className="px-2 pb-2">
                    <h3 className="text-xl font-black text-white mb-2 group-hover:text-amber-200 transition-colors">{project.name}</h3>
                    <p className="text-white/60 text-sm mb-6 h-10 line-clamp-2">{project.desc}</p>
                    <a href={project.url} target="_blank" rel="noopener noreferrer" className="w-full py-3 rounded-xl bg-white/10 border border-white/10 text-white font-bold text-sm flex items-center justify-center gap-2 hover:bg-white hover:text-sky-950 transition-all duration-300">
                      زيارة الموقع <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        ))}
      </div>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;900&display=swap');
        .font-cairo { font-family: 'Cairo', sans-serif; }
      `}</style>
    </main>
  );
}
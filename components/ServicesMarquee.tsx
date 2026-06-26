"use client";

export default function ServicesMarquee() {
  const services = [
    "تصميم مواقع الكترونية ووردبريس",
    "تصميم مواقع الكترونية next js",
    "تصميم متاجر شوبيفاي",
    "تصميم متاجر ايزي اوردر",
    "تحسين محركات البحث",
    "باقات صيانة المواقع الدورية",
    "تحسين سرعة وأداء المواقع",
    "إعداد تتبع وتحليل البيانات",
    "ربط أنظمة الدفع والشحن",
    "نقل المواقع بين المنصات",
    "تحسين معدل تحويل العملاء",
    "فحص وتدقيق الأمان التقني",
    "تطوير صفحات الهبوط التسويقية"
  ];

  return (
    <div className="bg-yellow-500 py-3 overflow-hidden border-b-4 border-black relative">
      {/* الشريط المتحرك */}
      <div className="flex animate-marquee whitespace-nowrap">
        {[...services, ...services].map((service, index) => (
          <span key={index} className="mx-8 font-black text-black text-lg">
            ✦ {service}
          </span>
        ))}
      </div>
    </div>
  );
}
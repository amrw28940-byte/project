"use client";

export default function ServicesMarqueeReverse() {
  const services = [
    "WordPress Website Development",
    "Next.js Website Development",
    "Shopify Store Setup & Design",
    "EasyOrder Store Development",
    "Search Engine Optimization (SEO)",
    "Monthly Website Maintenance Plans",
    "Website Speed & Performance Optimization",
    "Analytics & Conversion Tracking Setup",
    "Payment & Shipping Gateway Integration",
    "Website Migration & Platform Transfer",
    "Conversion Rate Optimization (CRO)",
    "Technical Website Security Audit",
    "High-Converting Landing Page Design"
  ];

  return (
    <div className="bg-green-600 py-3 overflow-hidden border-b-4 border-black relative">
      {/* استخدمنا كلاس animate-marquee-reverse للحركة العكسية */}
      <div className="flex animate-marquee-reverse whitespace-nowrap">
        {[...services, ...services].map((service, index) => (
          <span key={index} className="mx-8 font-black text-white text-lg">
            ✦ {service}
          </span>
        ))}
      </div>
    </div>
  );
}
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
    <div
      className="bg-emerald-800 py-4 overflow-hidden border-b-4 border-emerald-950 relative"
      dir="ltr"
    >
      <div className="flex animate-marquee-reverse whitespace-nowrap">
        {[...services, ...services].map((service, index) => (
          <span
            key={index}
            className="mx-6 font-black text-white text-lg flex items-center gap-4"
          >
            <span className="text-emerald-300" aria-hidden="true">✦</span> {service}
          </span>
        ))}
      </div>
    </div>
  );
}
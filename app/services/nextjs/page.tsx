import type { Metadata } from 'next';
import NextjsServiceClient from './NextjsServiceClient';

export const metadata: Metadata = {
  title: 'تصميم مواقع الكترونية Next.js | برمجة وتطوير تطبيقات الويب السريعة | عمرو سالم',
  description: 'خدمة تصميم وبرمجة وتطوير مواقع Next.js 15 و React المتطورة. نصمم مواقع شركات، منصات عقارية وسياحية، ومتاجر Headless E-Commerce فائقة السرعة (99% PageSpeed) ومهيأة لتصدر نتائج جوجل SEO في مصر والسعودية والإمارات والكويت.',
  keywords: [
    'تصميم مواقع الكترونية next js',
    'تصميم مواقع next js',
    'تطوير مواقع next.js',
    'برمجة مواقع next.js',
    'شركة برمجة next.js في مصر والسعودية',
    'تطوير تطبيقات الويب react next.js',
    'تصميم متجر الكتروني headless commerce',
    'تحويل موقع ووردبريس الى next.js',
    'برمجة مواقع خاصة سريعة',
    'تحسين سرعة المواقع core web vitals',
    'تصميم مواقع شركات next js',
    'عمرو سالم مطور next.js'
  ],
  authors: [{ name: 'Amr Salem' }],
  alternates: {
    canonical: 'https://yourwebsite.com/services/nextjs',
  },
  openGraph: {
    title: 'خدمة تصميم وبرمجة مواقع Next.js | سرعة خارقة وصدارة مطلقة في جوجل',
    description: 'نحول أفكارك وشركتك إلى منصة رقمية خارقة السرعة باستخدام أحدث معمارية Next.js 15 App Router و React و Tailwind CSS مع تأسيس SEO تقني متكامل.',
    url: 'https://yourwebsite.com/services/nextjs',
    siteName: 'Amr Salem Digital Studio',
    locale: 'ar_EG',
    type: 'website',
  },
};

export default function NextjsServicePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "name": "خدمة تصميم وبرمجة مواقع الكترونية Next.js - عمرو سالم",
        "description": "تصميم وتطوير المواقع الإلكترونية والمنصات المخصصة والمتاجر الرقمية فائقة السرعة باستخدام إطار العمل العالمي Next.js 15 و React و TypeScript و Tailwind CSS مع تهيئة شاملة لمحركات البحث SEO.",
        "provider": {
          "@type": "ProfessionalService",
          "name": "Amr Salem Digital Studio",
          "telephone": "+2010120347946",
          "url": "https://yourwebsite.com"
        },
        "areaServed": [
          { "@type": "Country", "name": "Egypt" },
          { "@type": "Country", "name": "Saudi Arabia" },
          { "@type": "Country", "name": "United Arab Emirates" },
          { "@type": "Country", "name": "Kuwait" }
        ],
        "serviceType": "Next.js Custom Web Development & SEO Architecture",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "باقات وخدمات تطوير Next.js",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "تصميم وتطوير مواقع الشركات بـ Next.js & Sanity CMS"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "بناء المتاجر الإلكترونية الفائقة السرعة Headless E-Commerce"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "نقل وترحيل المواقع من ووردبريس إلى Next.js مع حفظ الأرشفة 301"
              }
            }
          ]
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "لماذا تعتبر تقنية Next.js الأفضل عالمياً لتصميم المواقع وتصدر جوجل SEO؟",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "تتفوق تقنية Next.js لأنها تولد صفحات الموقع على السيرفر مباشرة (Server-Side Rendering & Static Generation)، مما يجعل الموقع يفتح في أقل من ثانية واحدة (99% على Google PageSpeed)، ويقدم لعناكب بحث جوجل كود HTML كاملاً وجاهزاً للأرشفة الفورية بدون أي تأخير."
            }
          },
          {
            "@type": "Question",
            "name": "هل سأحصل على لوحة تحكم سهلة لإدارة موقع Next.js بدون خبرة برمجية؟",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "نعم بالتأكيد، نربط موقع Next.js بلوحة تحكم عربية وإنجليزية مرنة جداً مثل Sanity CMS أو Headless WordPress أو لوحة مخصصة، تتيح لك تعديل النصوص والصور وإضافة الخدمات والمقالات والمنتجات في ثوانٍ."
            }
          },
          {
            "@type": "Question",
            "name": "هل يمكن نقل موقعي الحالي من ووردبريس إلى Next.js دون خسارة ترتيبي في جوجل؟",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "نعم 100%، نقوم بهندسة عملية الترحيل مع الحفاظ على هيكلة الروابط أو تطبيق تحويلات دائمة (301 Permanent Redirects) داخل ملف next.config.ts لضمان نقل كامل قوة الأرشفة والباك لينكس إلى موقعك الجديد الأسرع."
            }
          }
        ]
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <NextjsServiceClient />
    </>
  );
}
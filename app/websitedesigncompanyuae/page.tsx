import type { Metadata } from 'next';
import UAEDesignClient from './UAEDesignClient';

export const metadata: Metadata = {
  title: 'شركة تصميم مواقع الكترونية في الامارات | برمجة مواقع ومتاجر متصدرة | عمرو سالم',
  description: 'أفضل شركة تصميم مواقع الكترونية في الامارات (دبي، أبوظبي، الشارقة، عجمان، رأس الخيمة، الفجيرة). نصمم مواقع شركات وعقارات ومتاجر إلكترونية فائقة السرعة بـ Next.js وووردبريس مع ربط Stripe، تابي، تمارا، وتصدر جوجل SEO.',
  keywords: [
    'شركة تصميم مواقع الكترونية في الامارات',
    'تصميم مواقع الامارات',
    'أفضل شركة تصميم مواقع في الامارات',
    'شركة تصميم مواقع في دبي وابوظبي',
    'تصميم متجر الكتروني الامارات',
    'برمجة مواقع خاصة الامارات',
    'تطوير مواقع Next.js الامارات',
    'تصميم مواقع ووردبريس الامارات',
    'تصميم مواقع عقارية في الامارات',
    'تصميم مواقع سياحية وتأجير سيارات دبي',
    'شركة سيو في الامارات',
    'ربط بوابات الدفع تابي وتمارا وسترايب الامارات',
    'عمرو سالم لتصميم المواقع الامارات'
  ],
  authors: [{ name: 'Amr Salem' }],
  alternates: {
    canonical: 'https://yourwebsite.com/websitedesigncompanyuae',
  },
  openGraph: {
    title: 'شركة تصميم مواقع الكترونية في الامارات | هندسة رقمية بمعايير عالمية',
    description: 'نحول رؤيتك الاستثمارية في دولة الإمارات إلى منصة رقمية فائقة السرعة والأمان، ثنائية اللغة (عربي/إنجليزي)، متوافقة مع بوابات الدفع الإماراتية ومعايير تصدر جوجل SEO.',
    url: 'https://yourwebsite.com/websitedesigncompanyuae',
    siteName: 'Amr Salem Digital Studio',
    locale: 'ar_AE',
    type: 'website',
  },
};

export default function WebsiteDesignUAEPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "name": "شركة تصميم مواقع الكترونية في الامارات - عمرو سالم",
        "description": "تصميم وبرمجة المواقع الإلكترونية والمتاجر الرقمية والمنصات العقارية والسياحية للشركات في دولة الإمارات العربية المتحدة بأحدث تقنيات الويب Next.js و WordPress مع تهيئة كاملة لمحركات البحث SEO.",
        "telephone": "+2010120347946",
        "url": "https://yourwebsite.com/websitedesigncompanyuae",
        "areaServed": [
          { "@type": "Country", "name": "United Arab Emirates" },
          { "@type": "City", "name": "Dubai" },
          { "@type": "City", "name": "Abu Dhabi" },
          { "@type": "City", "name": "Sharjah" },
          { "@type": "City", "name": "Ajman" },
          { "@type": "City", "name": "Ras Al Khaimah" },
          { "@type": "City", "name": "Fujairah" },
          { "@type": "City", "name": "Umm Al Quwain" },
          { "@type": "City", "name": "Al Ain" }
        ],
        "priceRange": "$$$",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "خدمات تصميم وتطوير المواقع في الإمارات",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "تصميم مواقع الشركات والمناطق الحرة والتطوير العقاري في الإمارات"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "برمجة مواقع ومنصات خاصة فائقة السرعة بتقنية Next.js في الإمارات"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "تصميم المتاجر الإلكترونية وربط Stripe وتابي وتمارا في الإمارات"
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
            "name": "ما هي أفضل شركة تصميم مواقع الكترونية في الإمارات؟",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "تعد وكالة م. عمرو سالم الخيار الأول لتصميم وتطوير المواقع الإلكترونية في الإمارات؛ لجمعها بين الهندسة البرمجية الحديثة (Next.js & WordPress) والخبرة التسويقية في أسواق دبي وأبوظبي والشارقة، مع بناء مواقع ثنائية اللغة (عربي/إنجليزي) مربوطة ببوابات الدفع الإماراتية ومؤسسة لتصدر نتائج جوجل."
            }
          },
          {
            "@type": "Question",
            "name": "هل تدعم المواقع بوابات الدفع في الإمارات مثل Stripe وتابي وتمارا و Network؟",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "نعم 100%، نقوم بربط وتفعيل كافة بوابات الدفع المعتمدة في دولة الإمارات بالدرهم الإماراتي (AED) وعملات العالم، مثل Stripe UAE، Network International، PayTabs، Telr، Apple Pay، بالإضافة إلى خدمات التقسيط تابي (Tabby) وتمارا (Tamara)."
            }
          },
          {
            "@type": "Question",
            "name": "هل تصممون مواقع باللغتين العربية والإنجليزية للشركات في الإمارات؟",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "بالتأكيد، نظراً لأن الإمارات بيئة أعمال عالمية تضم أكثر من 200 جنسية، نصمم ونبرمج مواقع احترافية ثنائية اللغة (عربي RTL / إنجليزي LTR) مع تهيئة السيو (SEO) لكلا اللغتين لاستقطاب العملاء الناطقين بالعربية والإنجليزية على حد سواء."
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
      <UAEDesignClient />
    </>
  );
}
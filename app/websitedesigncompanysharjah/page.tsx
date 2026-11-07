import type { Metadata } from 'next';
import SharjahDesignClient from './SharjahDesignClient';

export const metadata: Metadata = {
  title: 'شركة تصميم مواقع الكترونية في الشارقة | برمجة مواقع ومتاجر متصدرة | عمرو سالم',
  description: 'أفضل شركة تصميم مواقع الكترونية في الشارقة (المجاز، مويلح، الخان، النهدة، الصناعية، SAIF Zone، الحمرية). نصمم مواقع شركات ومصانع وعقارات ومتاجر إلكترونية فائقة السرعة بـ Next.js وووردبريس مع ربط Stripe، تابي، تمارا، وتصدر جوجل SEO.',
  keywords: [
    'شركة تصميم مواقع الكترونية في الشارقة',
    'تصميم مواقع الكترونية في الشارقة',
    'تصميم مواقع الشارقة',
    'أفضل شركة تصميم مواقع في الشارقة',
    'تصميم متجر الكتروني الشارقة',
    'برمجة مواقع خاصة الشارقة',
    'تطوير مواقع Next.js الشارقة',
    'تصميم مواقع ووردبريس الشارقة',
    'تصميم مواقع مصانع وشركات صناعية الشارقة',
    'تصميم مواقع معارض سيارات الشارقة',
    'تصميم مواقع عقارية في الشارقة ومويلح',
    'شركة سيو في الشارقة',
    'ربط بوابات الدفع تابي وتمارا وسترايب الشارقة',
    'عمرو سالم لتصميم المواقع الشارقة'
  ],
  authors: [{ name: 'Amr Salem' }],
  alternates: {
    canonical: 'https://yourwebsite.com/websitedesigncompanysharjah',
  },
  openGraph: {
    title: 'شركة تصميم مواقع الكترونية في الشارقة | حلول رقمية للصناعة والتجارة والأعمال',
    description: 'نبتكر للشركات، المصانع، المعارض، والمتاجر في إمارة الشارقة منصات رقمية فائقة السرعة والأمان، ثنائية اللغة (عربي/إنجليزي)، متوافقة مع بوابات الدفع الإماراتية ومعايير تصدر جوجل SEO.',
    url: 'https://yourwebsite.com/websitedesigncompanysharjah',
    siteName: 'Amr Salem Digital Studio',
    locale: 'ar_AE',
    type: 'website',
  },
};

export default function WebsiteDesignSharjahPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "name": "شركة تصميم مواقع الكترونية في الشارقة - عمرو سالم",
        "description": "تصميم وبرمجة المواقع الإلكترونية والمتاجر الرقمية والمنصات الصناعية والعقارية والتعليمية للشركات والمؤسسات في إمارة الشارقة بأحدث تقنيات الويب Next.js و WordPress مع تهيئة كاملة لمحركات البحث SEO.",
        "telephone": "+2010120347946",
        "url": "https://yourwebsite.com/websitedesigncompanysharjah",
        "areaServed": [
          { "@type": "City", "name": "Sharjah" },
          { "@type": "AdministrativeArea", "name": "Al Majaz, Sharjah" },
          { "@type": "AdministrativeArea", "name": "Muwaileh, Sharjah" },
          { "@type": "AdministrativeArea", "name": "Al Nahda, Sharjah" },
          { "@type": "AdministrativeArea", "name": "Al Khan, Sharjah" },
          { "@type": "AdministrativeArea", "name": "Sharjah Industrial Area" },
          { "@type": "AdministrativeArea", "name": "SAIF Zone, Sharjah" },
          { "@type": "AdministrativeArea", "name": "Hamriyah Free Zone, Sharjah" },
          { "@type": "City", "name": "Khor Fakkan" },
          { "@type": "City", "name": "Kalba" }
        ],
        "priceRange": "$$$",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "خدمات تصميم وتطوير المواقع في الشارقة",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "تصميم مواقع الشركات والمصانع والمناطق الحرة في الشارقة"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "برمجة مواقع ومنصات خاصة فائقة السرعة بتقنية Next.js في الشارقة"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "تصميم المتاجر الإلكترونية وربط Stripe وتابي وتمارا في الشارقة"
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
            "name": "ما هي أفضل شركة تصميم مواقع الكترونية في الشارقة؟",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "تعد وكالة م. عمرو سالم الخيار الأمثل لتصميم وتطوير المواقع الإلكترونية في إمارة الشارقة؛ لجمعها بين الهندسة البرمجية الحديثة (Next.js & WordPress) والخبرة العميقة في قطاعات الشارقة الصناعية والتجارية والتعليمية والعقارية، مع بناء مواقع ثنائية اللغة (عربي/إنجليزي) مربوطة ببوابات الدفع الإماراتية ومؤسسة لتصدر نتائج جوجل."
            }
          },
          {
            "@type": "Question",
            "name": "هل تصممون مواقع للمصانع والشركات في المناطق الصناعية والحرة بالشارقة؟",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "نعم بالتأكيد، نمتلك خبرة واسعة في تصميم مواقع ومنصات B2B للمصانع والشركات في صناعية الشارقة (1-18)، المنطقة الحرة بمطار الشارقة (SAIF Zone)، والمنطقة الحرة بالحمرية (HFZA)، مع كتالوجات منتجات رقمية، ملفات مواصفات فنية PDF، ونماذج طلب عروض أسعار دولية ومحلية."
            }
          },
          {
            "@type": "Question",
            "name": "هل تدعم المتاجر الإلكترونية في الشارقة الدفع عبر تابي وتمارا و Stripe؟",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "نعم 100%، نقوم بربط وتفعيل كافة بوابات الدفع المعتمدة في دولة الإمارات بالدرهم الإماراتي (AED) مثل Stripe UAE، Network International، PayTabs، Telr، Apple Pay، بالإضافة إلى تفعيل خدمات التقسيط تابي (Tabby) وتمارا (Tamara) وشركات التوصيل في الشارقة وكافة الإمارات."
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
      <SharjahDesignClient />
    </>
  );
}
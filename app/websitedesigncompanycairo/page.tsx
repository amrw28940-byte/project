import type { Metadata } from 'next';
import CairoDesignClient from './CairoDesignClient';

export const metadata: Metadata = {
  title: 'شركة تصميم مواقع الكترونية في القاهرة | برمجة مواقع ومتاجر متصدرة | عمرو سالم',
  description: 'أفضل شركة تصميم مواقع الكترونية في القاهرة (مدينة نصر، مصر الجديدة، التجمع الخامس، المعادي، وسط البلد، العاصمة الإدارية). نصمم مواقع شركات وعقارات ومتاجر إلكترونية فائقة السرعة بـ Next.js وووردبريس مع ربط Paymob، فوري، بوسطة، وتصدر جوجل SEO.',
  keywords: [
    'شركة تصميم مواقع الكترونية في القاهرة',
    'تصميم مواقع القاهرة',
    'أفضل شركة تصميم مواقع في القاهرة',
    'شركة برمجة مواقع في القاهرة',
    'تصميم متجر الكتروني القاهرة',
    'تطوير مواقع Next.js القاهرة',
    'تصميم مواقع ووردبريس القاهرة',
    'تصميم مواقع مدينة نصر ومصر الجديدة',
    'تصميم مواقع التجمع الخامس والعاصمة الإدارية',
    'شركة سيو في القاهرة',
    'تحسين محركات البحث القاهرة',
    'ربط بوابات الدفع باي موب وفوري القاهرة',
    'عمرو سالم لتصميم المواقع القاهرة'
  ],
  authors: [{ name: 'Amr Salem' }],
  alternates: {
    canonical: 'https://yourwebsite.com/websitedesigncompanycairo',
  },
  openGraph: {
    title: 'شركة تصميم مواقع الكترونية في القاهرة | هندسة رقمية لعاصمة المال والأعمال',
    description: 'نبتكر للشركات، المتاجر، والمنشآت التجارية في القاهرة الكبرى منصات رقمية فائقة السرعة والأمان، متوافقة مع بوابات الدفع والشحن ومعايير تصدر جوجل SEO.',
    url: 'https://yourwebsite.com/websitedesigncompanycairo',
    siteName: 'Amr Salem Digital Studio',
    locale: 'ar_EG',
    type: 'website',
  },
};

export default function WebsiteDesignCairoPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "name": "شركة تصميم مواقع الكترونية في القاهرة - عمرو سالم",
        "description": "تصميم وبرمجة المواقع الإلكترونية والمتاجر الرقمية للشركات والمؤسسات التجارية والعقارية والخدمية في القاهرة الكبرى بأحدث تقنيات الويب Next.js و WordPress مع تهيئة كاملة لمحركات البحث SEO.",
        "telephone": "+2010120347946",
        "url": "https://yourwebsite.com/websitedesigncompanycairo",
        "areaServed": [
          { "@type": "City", "name": "Cairo" },
          { "@type": "AdministrativeArea", "name": "Nasr City, Cairo" },
          { "@type": "AdministrativeArea", "name": "Heliopolis, Cairo" },
          { "@type": "AdministrativeArea", "name": "New Cairo, Cairo" },
          { "@type": "AdministrativeArea", "name": "Fifth Settlement, Cairo" },
          { "@type": "AdministrativeArea", "name": "Maadi, Cairo" },
          { "@type": "AdministrativeArea", "name": "Downtown Cairo" }
        ],
        "priceRange": "$$",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "خدمات تصميم وتطوير المواقع في القاهرة",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "تصميم مواقع الشركات والمؤسسات والعقارات في القاهرة"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "برمجة مواقع ومنصات خاصة فائقة السرعة بتقنية Next.js في القاهرة"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "تصميم المتاجر الإلكترونية وربط Paymob وفوري وبوسطة في القاهرة"
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
            "name": "ما هي أفضل شركة تصميم مواقع الكترونية في القاهرة؟",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "تعد وكالة م. عمرو سالم الخيار الأول لتصميم وتطوير المواقع الإلكترونية في القاهرة؛ لجمعها بين الهندسة البرمجية الحديثة (Next.js & WordPress) والخبرة العميقة في قطاعات القاهرة التجاريّة والعقارية والخدمية، مع ربط كامل ببوابات الدفع Paymob وفوري وشركات الشحن مثل بوسطة."
            }
          },
          {
            "@type": "Question",
            "name": "هل تصممون مواقع للمتاجر والشركات في مدينة نصر ومصر الجديدة والتجمع؟",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "نعم بالتأكيد، نخدم الشركات والمتاجر والعيادات في كافة أحياء القاهرة الكبرى (مدينة نصر، مصر الجديدة، التجمع الخامس، المعادي، وسط البلد، العاصمة الإدارية) بمواقع فائقة السرعة ومتاجر إلكترونية متكاملة مهيأة لتصدر محرك بحث جوجل."
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
      <CairoDesignClient />
    </>
  );
}
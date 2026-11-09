import type { Metadata } from 'next';
import AlexandriaDesignClient from './AlexandriaDesignClient';

export const metadata: Metadata = {
  title: 'شركة تصميم مواقع الكترونية في الإسكندرية | برمجة مواقع ومتاجر متصدرة | عمرو سالم',
  description: 'أفضل شركة تصميم مواقع الكترونية في الإسكندرية (سموحة، سيدي جابر، رشدي، لوران، ميامي، برج العرب، الساحل الشمالي). نصمم مواقع شركات ومتاجر إلكترونية فائقة السرعة بـ Next.js وووردبريس مع ربط Paymob، فوري، بوسطة، وتصدر جوجل SEO.',
  keywords: [
    'شركة تصميم مواقع الكترونية في الإسكندرية',
    'تصميم مواقع الإسكندرية',
    'أفضل شركة تصميم مواقع في الإسكندرية',
    'شركة برمجة مواقع في الإسكندرية',
    'تصميم متجر الكتروني الإسكندرية',
    'تطوير مواقع Next.js الإسكندرية',
    'تصميم مواقع ووردبريس الإسكندرية',
    'تصميم مواقع سموحة وسيدي جابر ورشدي',
    'شركة سيو في الإسكندرية',
    'تحسين محركات البحث الإسكندرية',
    'ربط بوابات الدفع باي موب وفوري الإسكندرية',
    'عمرو سالم لتصميم المواقع الإسكندرية'
  ],
  authors: [{ name: 'Amr Salem' }],
  alternates: {
    canonical: 'https://yourwebsite.com/websitedesigncompanyalexandria',
  },
  openGraph: {
    title: 'شركة تصميم مواقع الكترونية في الإسكندرية | هندسة رقمية لعروس المتوسط',
    description: 'نبتكر للشركات، المتاجر، والمنشآت التجارية والسياحية في الإسكندرية منصات رقمية فائقة السرعة والأمان، متوافقة مع بوابات الدفع والشحن ومعايير تصدر جوجل SEO.',
    url: 'https://yourwebsite.com/websitedesigncompanyalexandria',
    siteName: 'Amr Salem Digital Studio',
    locale: 'ar_EG',
    type: 'website',
  },
};

export default function WebsiteDesignAlexandriaPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "name": "شركة تصميم مواقع الكترونية في الإسكندرية - عمرو سالم",
        "description": "تصميم وبرمجة المواقع الإلكترونية والمتاجر الرقمية للشركات والمؤسسات التجارية والسياحية في محافظة الإسكندرية بأحدث تقنيات الويب Next.js و WordPress مع تهيئة كاملة لمحركات البحث SEO.",
        "telephone": "+2010120347946",
        "url": "https://yourwebsite.com/websitedesigncompanyalexandria",
        "areaServed": [
          { "@type": "City", "name": "Alexandria" },
          { "@type": "AdministrativeArea", "name": "Smouha, Alexandria" },
          { "@type": "AdministrativeArea", "name": "Sidi Gaber, Alexandria" },
          { "@type": "AdministrativeArea", "name": "Roushdy, Alexandria" },
          { "@type": "AdministrativeArea", "name": "Borg El Arab, Alexandria" },
          { "@type": "AdministrativeArea", "name": "North Coast, Egypt" }
        ],
        "priceRange": "$$",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "خدمات تصميم وتطوير المواقع في الإسكندرية",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "تصميم مواقع الشركات والمصانع والتجارة البحرية في الإسكندرية"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "برمجة مواقع ومنصات خاصة فائقة السرعة بتقنية Next.js في الإسكندرية"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "تصميم المتاجر الإلكترونية وربط Paymob وفوري وبوسطة في الإسكندرية"
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
            "name": "ما هي أفضل شركة تصميم مواقع الكترونية في الإسكندرية؟",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "تعد وكالة م. عمرو سالم الخيار الأول لتصميم وتطوير المواقع الإلكترونية في الإسكندرية؛ لجمعها بين الهندسة البرمجية الحديثة (Next.js & WordPress) والخبرة العميقة في قطاعات الإسكندرية التجاريّة والبحرية والسياحية، مع ربط كامل ببوابات الدفع Paymob وفوري وشركات الشحن مثل بوسطة."
            }
          },
          {
            "@type": "Question",
            "name": "هل تصممون مواقع للمتاجر والشركات في سموحة وسيدي جابر وبرج العرب؟",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "نعم بالتأكيد، نخدم الشركات والمتاجر والعيادات في كافة أحياء الإسكندرية (سموحة، سيدي جابر، رشدي، لوران، ميامي، برج العرب، والعجمي) بمواقع فائقة السرعة ومتاجر إلكترونية متكاملة مهيأة لتصدر محرك بحث جوجل."
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
      <AlexandriaDesignClient />
    </>
  );
}
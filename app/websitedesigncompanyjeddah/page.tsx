import type { Metadata } from 'next';
import JeddahDesignClient from './JeddahDesignClient';

export const metadata: Metadata = {
  title: 'شركة تصميم مواقع الكترونية في جدة | برمجة مواقع ومتاجر متصدرة | عمرو سالم',
  description: 'أفضل شركة تصميم مواقع الكترونية في جدة (طريق الملك، التحلية، الروضة، أبحر، الشاطئ، السلامة). نصمم مواقع شركات، سياحة، استيراد، ومتاجر إلكترونية فائقة السرعة بـ Next.js وووردبريس مع ربط مدى، تمارا، تابي، وتصدر جوجل SEO.',
  keywords: [
    'شركة تصميم مواقع الكترونية في جدة',
    'تصميم مواقع جدة',
    'أفضل شركة تصميم مواقع في جدة',
    'شركة برمجة مواقع بجدة',
    'تصميم متجر الكتروني جدة',
    'تصميم مواقع شركات جدة',
    'تطوير مواقع Next.js جدة',
    'تصميم مواقع ووردبريس جدة',
    'شركة سيو في جدة',
    'تحسين محركات البحث جدة',
    'تصميم مواقع سياحية وفنادق جدة',
    'تصميم مواقع شركات شحن واستيراد جدة',
    'ربط بوابات الدفع مدى وتابي وتمارا جدة',
    'عمرو سالم لتصميم المواقع جدة'
  ],
  authors: [{ name: 'Amr Salem' }],
  alternates: {
    canonical: 'https://yourwebsite.com/websitedesigncompanyjeddah',
  },
  openGraph: {
    title: 'شركة تصميم مواقع الكترونية في جدة | واجهات رقمية لعروس البحر الأحمر',
    description: 'نبتكر للشركات، المتاجر، والمنشآت السياحية والتجارية في جدة منصات رقمية فائقة السرعة والأمان، متوافقة مع أنظمة الدفع والشحن السعودية ومعايير السيو القياسية.',
    url: 'https://yourwebsite.com/websitedesigncompanyjeddah',
    siteName: 'Amr Salem Digital Studio',
    locale: 'ar_SA',
    type: 'website',
  },
};

export default function WebsiteDesignJeddahPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "name": "شركة تصميم مواقع الكترونية في جدة - عمرو سالم",
        "description": "تصميم وبرمجة المواقع الإلكترونية والمتاجر الرقمية للشركات والمؤسسات والقطاع السياحي واللوجستي في مدينة جدة بأحدث تقنيات الويب Next.js و WordPress مع تهيئة كاملة لمحركات البحث SEO.",
        "telephone": "+2010120347946",
        "url": "https://yourwebsite.com/websitedesigncompanyjeddah",
        "areaServed": [
          { "@type": "City", "name": "Jeddah" },
          { "@type": "AdministrativeArea", "name": "Al Rawdah, Jeddah" },
          { "@type": "AdministrativeArea", "name": "Al Shati, Jeddah" },
          { "@type": "AdministrativeArea", "name": "Obhur, Jeddah" },
          { "@type": "AdministrativeArea", "name": "Al Salamah, Jeddah" },
          { "@type": "AdministrativeArea", "name": "Al Zahra, Jeddah" }
        ],
        "priceRange": "$$$",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "خدمات تصميم وتطوير المواقع في جدة",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "تصميم مواقع الشركات التجارية والاستيراد واللوجستيات في جدة"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "برمجة مواقع ومنصات سياحية وفندقية بتقنية Next.js في جدة"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "تصميم المتاجر الإلكترونية وربط مدى وتابي وتمارا في جدة"
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
            "name": "ما هي أفضل شركة تصميم مواقع الكترونية في جدة؟",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "تعد وكالة م. عمرو سالم الخيار الأول لتصميم وتطوير المواقع الإلكترونية في جدة؛ بفضل الجمع بين البرمجة الحديثة فائقة السرعة (Next.js & WordPress) والفهم العميق لطبيعة السوق التجاري والسياحي في جدة، مع تأسيس كامل للسيو المحلي وربط بوابات الدفع والشحن السعودية."
            }
          },
          {
            "@type": "Question",
            "name": "كم تكلفة تصميم موقع إلكتروني أو متجر في جدة؟",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "تعتمد تكلفة تصميم الموقع في جدة على طبيعة النشاط (موقع تعريفي لشركة، منصة حجز سياحي وفندقي، أو متجر إلكتروني متكامل) والخصائص البرمجية المطلوبة. نقدم باقات مرنة ومخصصة تناسب الشركات الناشئة والمؤسسات الكبرى في جدة."
            }
          },
          {
            "@type": "Question",
            "name": "هل تدعم المواقع أنظمة الحجز والدفع الإلكتروني مثل مدى وتابي وتمارا؟",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "نعم بالتأكيد، نقوم بربط وتفعيل كافة بوابات الدفع المعتمدة في المملكة (مدى، Apple Pay، STC Pay، فيزا، ماستركارد) وأنظمة التقسيط (تابي وتمارا)، بالإضافة إلى أنظمة الحجز الفوري للفنادق والعيادات والأنشطة البحرية في جدة."
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
      <JeddahDesignClient />
    </>
  );
}
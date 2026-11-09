import type { Metadata } from 'next';
import EgyptDesignClient from './EgyptDesignClient';

export const metadata: Metadata = {
  title: 'شركة تصميم مواقع الكترونية في مصر | برمجة مواقع ومتاجر متصدرة | عمرو سالم',
  description: 'أفضل شركة تصميم مواقع الكترونية في مصر (القاهرة، الإسكندرية، التجمع الخامس، الشيخ زايد، 6 أكتوبر، المنصورة). نصمم مواقع شركات وعقارات وسياحة ومتاجر إلكترونية فائقة السرعة بـ Next.js وووردبريس مع ربط Paymob، فوري، فاليو، وبوسطة وتصدر جوجل SEO.',
  keywords: [
    'شركة تصميم مواقع الكترونية في مصر',
    'شركة تصميم مواقع في مصر',
    'تصميم مواقع مصر',
    'أفضل شركة تصميم مواقع في مصر',
    'تصميم متجر الكتروني في مصر',
    'شركة برمجة مواقع في مصر',
    'اسعار تصميم المواقع في مصر',
    'تطوير مواقع Next.js مصر',
    'تصميم مواقع ووردبريس في مصر',
    'تصميم مواقع عقارية في مصر',
    'تصميم مواقع شركات سياحة في مصر',
    'شركة سيو في مصر',
    'ربط بوابات الدفع باي موب وفوري وفاليو',
    'عمرو سالم لتصميم المواقع في مصر'
  ],
  authors: [{ name: 'Amr Salem' }],
  alternates: {
    canonical: 'https://yourwebsite.com/websitedesigncompanyegypt',
  },
  openGraph: {
    title: 'شركة تصميم مواقع الكترونية في مصر | هندسة رقمية تضاعف مبيعاتك',
    description: 'نبتكر للشركات، المصانع، المطورين العقاريين، والبراندات في مصر منصات رقمية فائقة السرعة والأمان، متكاملة مع Paymob وفوري وفودافون كاش وبوسطة ومهيأة لتصدر نتائج جوجل SEO.',
    url: 'https://yourwebsite.com/websitedesigncompanyegypt',
    siteName: 'Amr Salem Digital Studio',
    locale: 'ar_EG',
    type: 'website',
  },
};

export default function WebsiteDesignEgyptPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "name": "شركة تصميم مواقع الكترونية في مصر - عمرو سالم",
        "description": "تصميم وبرمجة المواقع الإلكترونية والمتاجر الرقمية والمنصات العقارية والسياحية والتعليمية للشركات والمؤسسات في جمهورية مصر العربية بأحدث تقنيات الويب Next.js و WordPress مع تهيئة كاملة لمحركات البحث SEO.",
        "telephone": "+2010120347946",
        "url": "https://yourwebsite.com/websitedesigncompanyegypt",
        "areaServed": [
          { "@type": "Country", "name": "Egypt" },
          { "@type": "City", "name": "Cairo" },
          { "@type": "City", "name": "Alexandria" },
          { "@type": "City", "name": "Giza" },
          { "@type": "City", "name": "New Cairo" },
          { "@type": "City", "name": "6th of October City" },
          { "@type": "City", "name": "Sheikh Zayed City" },
          { "@type": "City", "name": "Mansoura" },
          { "@type": "City", "name": "Tanta" },
          { "@type": "City", "name": "Hurghada" },
          { "@type": "City", "name": "Sharm El Sheikh" }
        ],
        "priceRange": "$$",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "خدمات تصميم وتطوير المواقع في مصر",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "تصميم مواقع الشركات والمصانع والتطوير العقاري في مصر"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "برمجة مواقع ومنصات خاصة فائقة السرعة بتقنية Next.js في مصر"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "تصميم المتاجر الإلكترونية وربط Paymob وفوري وفاليو وبوسطة في مصر"
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
            "name": "ما هي أفضل شركة تصميم مواقع الكترونية في مصر؟",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "تعد وكالة م. عمرو سالم الخيار الأول لتصميم وتطوير المواقع الإلكترونية في مصر؛ لجمعها بين الهندسة البرمجية الحديثة فائقة السرعة (Next.js & WordPress) والخبرة العميقة في السوق المصري، مع ربط كامل لبوابات الدفع مثل باي موب وفوري وفودافون كاش وفاليو وشركات الشحن مثل بوسطة ومايلرز، وتأسيس شامل للسيو لتصدر جوجل."
            }
          },
          {
            "@type": "Question",
            "name": "كم تكلفة وأسعار تصميم موقع إلكتروني أو متجر في مصر؟",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "تتحدد تكلفة تصميم الموقع في مصر بناءً على طبيعة المشروع (موقع تعريفي لشركة، متجر إلكتروني لبراند، منصة سياحية أو عقارية، أو منصة تعليمية) والخصائص المطلوبة. نوفر باقات مرنة ومناسبة جداً للشركات المصرية الناشئة والكبرى تحقق أعلى عائد على الاستثمار."
            }
          },
          {
            "@type": "Question",
            "name": "هل تدعم المتاجر الإلكترونية في مصر الدفع عبر فودافون كاش وفوري وفاليو ValU؟",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "نعم 100%، نقوم بربط وتفعيل كافة وسائل الدفع المعتمدة في مصر مثل البطاقات البنكية وميزة، المحافظ الإلكترونية (فودافون كاش، اتصالات كاش، أورانج كاش)، الدفع المرجعي عبر فوري، بالإضافة إلى تفعيل التقسيط عبر فاليو (ValU) وسهولة وسيمبل عبر مزودين مثل Paymob و Kashier."
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
      <EgyptDesignClient />
    </>
  );
}
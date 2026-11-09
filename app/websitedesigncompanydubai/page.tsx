import type { Metadata } from 'next';
import DubaiDesignClient from './DubaiDesignClient';

export const metadata: Metadata = {
  title: 'شركة تصميم مواقع الكترونية في دبي | برمجة مواقع ومتاجر متصدرة | عمرو سالم',
  description: 'أفضل شركة تصميم مواقع الكترونية في دبي (الخليج التجاري، دبي مارينا، DIFC، جميرا، JLT، جبل علي). نصمم مواقع عقارية، سياحية، شركات، ومتاجر إلكترونية فائقة السرعة بـ Next.js وووردبريس مع ربط Stripe، تابي، تمارا، وتصدر جوجل SEO.',
  keywords: [
    'شركة تصميم مواقع الكترونية في دبي',
    'تصميم مواقع الكترونية في دبي',
    'تصميم مواقع دبي',
    'أفضل شركة تصميم مواقع في دبي',
    'شركة برمجة مواقع في دبي',
    'تصميم متجر الكتروني في دبي',
    'تصميم مواقع عقارية في دبي',
    'تصميم مواقع تاجير سيارات في دبي',
    'تطوير مواقع Next.js دبي',
    'تصميم مواقع ووردبريس دبي',
    'شركة سيو في دبي',
    'تحسين محركات البحث دبي',
    'ربط بوابات الدفع تابي وتمارا وسترايب دبي',
    'عمرو سالم لتصميم المواقع دبي'
  ],
  authors: [{ name: 'Amr Salem' }],
  alternates: {
    canonical: 'https://yourwebsite.com/websitedesigncompanydubai',
  },
  openGraph: {
    title: 'شركة تصميم مواقع الكترونية في دبي | واجهات رقمية عالمية المستوى',
    description: 'نبتكر للشركات، المطورين العقاريين، العيادات، والمتاجر في دبي منصات رقمية فائقة السرعة والأمان، ثنائية ومتعددة اللغات (AR/EN/RU)، متوافقة مع بوابات الدفع في دبي ومعايير تصدر جوجل SEO.',
    url: 'https://yourwebsite.com/websitedesigncompanydubai',
    siteName: 'Amr Salem Digital Studio',
    locale: 'ar_AE',
    type: 'website',
  },
};

export default function WebsiteDesignDubaiPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "name": "شركة تصميم مواقع الكترونية في دبي - عمرو سالم",
        "description": "تصميم وبرمجة المواقع الإلكترونية والمتاجر الرقمية والمنصات العقارية والسياحية والطبية للشركات في إمارة دبي بأحدث تقنيات الويب Next.js و WordPress مع تهيئة كاملة لمحركات البحث SEO.",
        "telephone": "+2010120347946",
        "url": "https://yourwebsite.com/websitedesigncompanydubai",
        "areaServed": [
          { "@type": "City", "name": "Dubai" },
          { "@type": "AdministrativeArea", "name": "Business Bay, Dubai" },
          { "@type": "AdministrativeArea", "name": "Downtown Dubai" },
          { "@type": "AdministrativeArea", "name": "Dubai Marina" },
          { "@type": "AdministrativeArea", "name": "DIFC, Dubai" },
          { "@type": "AdministrativeArea", "name": "Jumeirah Lake Towers (JLT), Dubai" },
          { "@type": "AdministrativeArea", "name": "Dubai Internet City (DIC)" },
          { "@type": "AdministrativeArea", "name": "Jebel Ali Free Zone (JAFZA), Dubai" },
          { "@type": "AdministrativeArea", "name": "Jumeirah & Al Barsha, Dubai" }
        ],
        "priceRange": "$$$",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "خدمات تصميم وتطوير المواقع في دبي",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "تصميم مواقع الشركات العقارية والمطورين في دبي"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "برمجة مواقع ومنصات خاصة فائقة السرعة بتقنية Next.js في دبي"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "تصميم المتاجر الإلكترونية وربط Stripe وتابي وتمارا في دبي"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "تصميم مواقع تأجير السيارات واليخوت والسياحة في دبي"
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
            "name": "ما هي أفضل شركة تصميم مواقع الكترونية في دبي؟",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "تعد وكالة م. عمرو سالم الخيار الأول لتصميم وتطوير المواقع الإلكترونية في دبي؛ بفضل الجمع بين الهندسة البرمجية الحديثة (Next.js & WordPress) والفهم العميق لقطاعات دبي العقارية والسياحية والتجارية والطبية، مع بناء مواقع ثنائية ومتعددة اللغات مربوطة ببوابات الدفع في الإمارات وأنظمة الـ CRM ومؤسسة لتصدر نتائج جوجل."
            }
          },
          {
            "@type": "Question",
            "name": "هل تصممون مواقع عقارية ومنصات تأجير سيارات ويخوت في دبي؟",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "نعم بالتأكيد، نمتلك خبرة متخصصة في بناء منصات العقارات (Off-Plan & Ready Properties) ومواقع تأجير السيارات الفارهة واليخوت في دبي، مع فلاتر بحث متقدمة، دعم تعدد اللغات والعملات، حجز مباشر عبر الموقع والواتساب، وربط فوري مع أنظمة إدارة المبيعات مثل Bitrix24 و HubSpot."
            }
          },
          {
            "@type": "Question",
            "name": "هل تدعم المتاجر الإلكترونية في دبي الدفع عبر Stripe وتابي وتمارا و Apple Pay؟",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "نعم 100%، نقوم بربط وتفعيل كافة بوابات الدفع المعتمدة في دبي والإمارات بالدرهم الإماراتي (AED) وعملات العالم مثل Stripe UAE، Network International، PayTabs، Telr، Apple Pay، بالإضافة إلى تفعيل خدمات التقسيط تابي (Tabby) وتمارا (Tamara) وشركات التوصيل السريع في دبي."
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
      <DubaiDesignClient />
    </>
  );
}
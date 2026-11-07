import type { Metadata } from 'next';
import RiyadhDesignClient from './RiyadhDesignClient';

export const metadata: Metadata = {
  title: 'شركة تصميم مواقع الكترونية في الرياض | برمجة مواقع ومتاجر متصدرة | عمرو سالم',
  description: 'أفضل شركة تصميم مواقع الكترونية في الرياض (الملقا، العليا، الياسمين، النرجس، KAFD). نصمم مواقع شركات ومتاجر إلكترونية فائقة السرعة بـ Next.js وووردبريس مع ربط مدى، تمارا، تابي، وتصدر جوجل SEO.',
  keywords: [
    'شركة تصميم مواقع الكترونية في الرياض',
    'تصميم مواقع الرياض',
    'أفضل شركة تصميم مواقع في الرياض',
    'شركة برمجة مواقع بالرياض',
    'تصميم متجر الكتروني الرياض',
    'تصميم مواقع شركات الرياض',
    'تطوير مواقع Next.js الرياض',
    'تصميم مواقع ووردبريس الرياض',
    'شركة سيو في الرياض',
    'تحسين محركات البحث الرياض',
    'تصميم صفحات هبوط الرياض',
    'ربط بوابات الدفع مدى وتابي وتمارا الرياض',
    'عمرو سالم لتصميم المواقع الرياض'
  ],
  authors: [{ name: 'Amr Salem' }],
  alternates: {
    canonical: 'https://yourwebsite.com/websitedesigncompanyriyadh',
  },
  openGraph: {
    title: 'شركة تصميم مواقع الكترونية في الرياض | واجهات رقمية تليق بالعاصمة',
    description: 'نبتكر للشركات والمؤسسات والمتاجر في الرياض منصات رقمية فائقة السرعة والأمان، متوافقة مع أنظمة الدفع والشحن السعودية ومعايير السيو القياسية.',
    url: 'https://yourwebsite.com/websitedesigncompanyriyadh',
    siteName: 'Amr Salem Digital Studio',
    locale: 'ar_SA',
    type: 'website',
  },
};

export default function WebsiteDesignRiyadhPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "name": "شركة تصميم مواقع الكترونية في الرياض - عمرو سالم",
        "description": "تصميم وبرمجة المواقع الإلكترونية والمتاجر الرقمية للشركات والمؤسسات في مدينة الرياض بأحدث تقنيات الويب Next.js و WordPress مع تهيئة كاملة لمحركات البحث SEO.",
        "telephone": "+2010120347946",
        "url": "https://yourwebsite.com/websitedesigncompanyriyadh",
        "areaServed": [
          { "@type": "City", "name": "Riyadh" },
          { "@type": "AdministrativeArea", "name": "Al Malqa, Riyadh" },
          { "@type": "AdministrativeArea", "name": "Al Olaya, Riyadh" },
          { "@type": "AdministrativeArea", "name": "Al Yasmin, Riyadh" },
          { "@type": "AdministrativeArea", "name": "Al Narjis, Riyadh" }
        ],
        "priceRange": "$$$",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "خدمات تصميم وتطوير المواقع في الرياض",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "تصميم مواقع الشركات القابضة والمؤسسات في الرياض"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "برمجة مواقع خاصة بتقنية Next.js في الرياض"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "تصميم المتاجر الإلكترونية وربط مدى وتابي وتمارا في الرياض"
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
            "name": "ما هي أفضل شركة تصميم مواقع الكترونية في الرياض؟",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "تعد وكالة م. عمرو سالم من أفضل شركات تصميم المواقع الإلكترونية في الرياض لجمعها بين البرمجة الحديثة فائقة السرعة (Next.js & WordPress) وبين الخبرة العميقة في السيو المحلي للسوق السعودي وربط أنظمة الدفع والشحن المعتمدة."
            }
          },
          {
            "@type": "Question",
            "name": "كم تكلفة تصميم موقع إلكتروني لشركة أو متجر في الرياض؟",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "تتحدد التكلفة حسب نوع الموقع (تعريفي، متجر إلكتروني، أو منصة برمجة خاصة) وعدد الصفحات والخصائص المطلوبة. نوفر باقات مرنة تبدأ بأسعار تنافسية مع ضمان أعلى عائد على الاستثمار لشركتك في الرياض."
            }
          },
          {
            "@type": "Question",
            "name": "هل تدعم المواقع الفوترة الإلكترونية وبوابات الدفع السعودية؟",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "نعم 100%، نقوم بربط مدى، Apple Pay، STC Pay، فيزا، ماستركارد، وخدمات التقسيط تابي وتمارا، بالإضافة إلى توافق الفواتير مع متطلبات ضريبة القيمة المضافة في المملكة."
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
      <RiyadhDesignClient />
    </>
  );
}
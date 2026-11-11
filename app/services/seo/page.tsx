import type { Metadata } from 'next';
import SeoServiceClient from './SeoServiceClient';

export const metadata: Metadata = {
  title: 'شركة تحسين محركات البحث SEO | تصدر نتائج جوجل الأولى ومضاعفة المبيعات | عمرو سالم',
  description: 'أفضل خدمة تحسين محركات البحث (SEO) ومضاعفة الزيارات المجانية في مصر، السعودية، الإمارات، والكويت. نقدم السيو التقني (Technical SEO)، السيو المحلي (Local SEO)، بناء الروابط (Backlinks)، وتهيئة متاجر سلة وزد وشوبيفاي وووردبريس ومواقع Next.js لتصدر الصفحة الأولى في جوجل.',
  keywords: [
    'تحسين محركات البحث',
    'شركة سيو',
    'خبير سيو',
    'تطوير سيو المواقع',
    'تصدر نتائج جوجل',
    'مسك كلمات في جوجل',
    'شركة SEO في مصر والسعودية والامارات',
    'السيو التقني Technical SEO',
    'السيو المحلي Local SEO',
    'تحسين سيو المتاجر الالكترونية',
    'بناء باك لينك قوي',
    'فحص سيو الموقع مجانا',
    'تحسين سرعة الموقع Core Web Vitals',
    'عمرو سالم خبير سيو'
  ],
  authors: [{ name: 'Amr Salem' }],
  alternates: {
    canonical: 'https://yourwebsite.com/services/seo',
  },
  openGraph: {
    title: 'خدمة تحسين محركات البحث (SEO) | سيطر على الصفحة الأولى في جوجل',
    description: 'حول موقعك أو متجرك الإلكتروني إلى ماكينة مبيعات وزيارات مجانية مستدامة عبر استراتيجيات السيو التقني والتسويقي الحديثة والمتوافقة مع خوارزميات جوجل والذكاء الاصطناعي.',
    url: 'https://yourwebsite.com/services/seo',
    siteName: 'Amr Salem Digital Studio',
    locale: 'ar_EG',
    type: 'website',
  },
};

export default function SeoServicePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "name": "خدمة تحسين محركات البحث وتصدر نتائج جوجل (SEO Services) - عمرو سالم",
        "description": "خدمات متكاملة في تحسين محركات البحث (SEO) تشمل الفحص التقني الشامل، دراسة الكلمات المفتاحية الشرائية، تحسين المحتوى والـ On-Page SEO، بناء الروابط الخارجية (Backlinks)، والسيو المحلي (Google Maps SEO) للشركات والمتاجر في مصر والخليج.",
        "provider": {
          "@type": "ProfessionalService",
          "name": "Amr Salem Digital Studio",
          "telephone": "+201020347946",
          "url": "https://yourwebsite.com"
        },
        "areaServed": [
          { "@type": "Country", "name": "Egypt" },
          { "@type": "Country", "name": "Saudi Arabia" },
          { "@type": "Country", "name": "United Arab Emirates" },
          { "@type": "Country", "name": "Kuwait" }
        ],
        "serviceType": "Search Engine Optimization (SEO) & Organic Growth"
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "كم تستغرق مدة تحسين محركات البحث (SEO) للظهور في الصفحة الأولى في جوجل؟",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "تبدأ النتائج الأولية والتحسن في الأرشفة والظهور خلال الشهر الأول بعد إصلاح المشاكل التقنية وضبط الهيكلة (Technical & On-Page SEO)، بينما الوصول للصدارة المستقرة في الكلمات التنافسية يستغرق ما بين 3 إلى 6 أشهر حسب قوة المنافسة وعمر الدومين."
            }
          },
          {
            "@type": "Question",
            "name": "ما الفرق بين السيو (SEO) والإعلانات الممولة (Google Ads)؟",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "الإعلانات الممولة تمنحك زيارات مؤقتة تتوقف فور انتهاء ميزانيتك الإعلانية، بينما السيو (SEO) هو بناء أصل رقمي مستدام لموقعك يجعله يظهر مجاناً في النتائج الأولى لجوجل ويجلب لك عملاء ومبيعات على مدار الساعة لسنوات طويلة دون الدفع مقابل كل نقرة."
            }
          },
          {
            "@type": "Question",
            "name": "هل تقدمون خدمات السيو للمتاجر الإلكترونية (شوبيفاي، ووكومرس، سلة، زد) ومواقع Next.js؟",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "نعم 100%، نمتلك خبرة برمجية وتسويقية عميقة في تهيئة كافة المنصات، بداية من البرمجة الخاصة بـ Next.js وووردبريس، وصولاً إلى متاجر شوبيفاي ووكومرس وسلة وزد لمضاعفة مبيعات المنتجات من البحث المجاني."
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
      <SeoServiceClient />
    </>
  );
}
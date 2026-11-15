import type { Metadata } from 'next';
import AboutPageClient from './AboutPageClient';

export const metadata: Metadata = {
  title: 'من نحن | م. عمرو محمد السيد (عمرو سالم) | 11 عاماً في هندسة الويب والـ SEO',
  description: 'تعرف على م. عمرو محمد السيد (عمرو سالم)، مطور Full-Stack وباحث تقني وخبير تحسين محركات البحث (SEO) بخبرة تتجاوز 11 عاماً (منذ 2015). مؤسس استوديو عمرو سالم الرقمي لتطوير مواقع Next.js، ووردبريس، متاجر شوبيفاي، وحلول التجارة الإلكترونية في مصر، السعودية، الإمارات، والكويت.',
  keywords: [
    'عمرو محمد السيد',
    'عمرو سالم',
    'مطور مواقع عمرو محمد السيد',
    'خبير سيو عمرو سالم',
    'من نحن شركة تصميم مواقع',
    'أفضل مبرمج مواقع في مصر والسعودية والامارات',
    'مطور Next.js محترف',
    'خبير تحسين محركات البحث SEO',
    'شركة برمجة وتصميم متاجر الكترونية',
    'استوديو عمرو سالم الرقمي',
    'Amr Mohamed El-Sayed',
    'Amr Salem Web Developer'
  ],
  authors: [{ name: 'Amr Mohamed El-Sayed (Amr Salem)' }],
  alternates: {
    canonical: 'https://yourwebsite.com/about',
  },
  openGraph: {
    title: 'من نحن | م. عمرو محمد السيد — 11 عاماً من الريادة في هندسة الويب والـ SEO',
    description: 'قصة 11 عاماً من الخبرة التقنية وبناء أكثر من 180 مشروعاً رقمياً متصدراً في مصر، السعودية، الإمارات، والكويت بأحدث تقنيات Next.js و WordPress و Shopify.',
    url: 'https://yourwebsite.com/about',
    siteName: 'Amr Salem Digital Studio',
    locale: 'ar_EG',
    type: 'profile',
  },
};

export default function AboutPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfilePage",
        "@id": "https://yourwebsite.com/about#profilepage",
        "url": "https://yourwebsite.com/about",
        "name": "من نحن - م. عمرو محمد السيد (عمرو سالم) | استوديو هندسة الويب والـ SEO",
        "mainEntity": {
          "@type": "Person",
          "@id": "https://yourwebsite.com/#person",
          "name": "عمرو محمد السيد",
          "alternateName": ["عمرو سالم", "Amr Mohamed El-Sayed", "Amr Salem"],
          "jobTitle": "Full-Stack Web Architect, E-Commerce Engineer & Senior SEO Specialist",
          "description": "مطور ويب وباحث تقني وخبير تحسين محركات البحث (SEO) بخبرة تزيد عن 11 عاماً في بناء منصات Next.js، WordPress، ومتاجر Shopify في مصر والخليج العربي.",
          "telephone": "+201020347946",
          "url": "https://yourwebsite.com",
          "knowsAbout": [
            "Next.js 15 App Router",
            "React & TypeScript",
            "Technical SEO & Semantic SEO",
            "Shopify Liquid & Headless Storefront API",
            "WordPress & WooCommerce Engineering",
            "Conversion Rate Optimization (CRO)",
            "AI Video Production & Digital Marketing"
          ],
          "worksFor": {
            "@type": "ProfessionalService",
            "@id": "https://yourwebsite.com/#organization",
            "name": "Amr Salem Digital Studio - استوديو م. عمرو محمد السيد الرقمي",
            "foundingDate": "2015",
            "founder": {
              "@id": "https://yourwebsite.com/#person"
            },
            "telephone": "+201020347946",
            "areaServed": [
              { "@type": "Country", "name": "Egypt" },
              { "@type": "Country", "name": "Saudi Arabia" },
              { "@type": "Country", "name": "United Arab Emirates" },
              { "@type": "Country", "name": "Kuwait" }
            ]
          }
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "من هو م. عمرو محمد السيد (عمرو سالم) وما هي خبرته التقنية؟",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "م. عمرو محمد السيد (المعروف بـ عمرو سالم) هو مطور مواقع Full-Stack وباحث تقني ومهندس متاجر إلكترونية وخبير سيو (SEO) بدأ مسيرته الاحترافية منذ عام 2015 (أكثر من 11 عاماً من الخبرة)، قام خلالها بتطوير وتصدر أكثر من 180 موقعاً ومنصة رقمية في مصر والسعودية والإمارات والكويت."
            }
          },
          {
            "@type": "Question",
            "name": "ما الذي يميز التعامل المباشر مع استوديو م. عمرو محمد السيد عن الشركات التقليدية؟",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "تجمع خدماتنا بين الهندسة البرمجية النقية فائقة السرعة (Next.js 15 & Clean WordPress/Shopify) وبين الخبرة العميقة في تحسين محركات البحث (SEO) ورفع معدل التحويل (CRO)، مع التعامل المباشر مع المؤسس والمطور الرئيسي لضمان الدقة والالتزام والملكية الكاملة 100% للمشروع."
            }
          },
          {
            "@type": "Question",
            "name": "ما هي الدول والأسواق التي يخدمها استوديو عمرو محمد السيد الرقمي؟",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "نخدم الشركات، المؤسسات، المصانع، العيادات، والبراندات في جمهورية مصر العربية، المملكة العربية السعودية، دولة الإمارات العربية المتحدة، ودولة الكويت، مع توفير كافة عمليات الربط المالي واللوجستي المحلية في كل دولة."
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
      <AboutPageClient />
    </>
  );
}
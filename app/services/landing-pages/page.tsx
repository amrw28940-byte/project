import type { Metadata } from 'next';
import LandingPagesServiceClient from './LandingPagesServiceClient';

export const metadata: Metadata = {
  title: 'تصميم صفحات الهبوط التسويقية | مضاعفة التحويلات وعائد الإعلانات ROAS | عمرو سالم',
  description: 'خدمة تصميم وبرمجة صفحات هبوط بيعية وتسويقية (Landing Pages) فائقة السرعة والإقناع. نضاعف مبيعات حملات جوجل، سناب شات، تيك توك، وميتا مع ربط الـ Pixels و Server-Side Tracking وأنظمة الدفع والـ CRM.',
  keywords: [
    'تصميم صفحات الهبوط',
    'تصميم صفحة هبوط',
    'تطوير صفحات الهبوط التسويقية',
    'تصميم لاندنج بيدج',
    'شركة تصميم صفحات هبوط',
    'صفحات هبوط عالية التحويل',
    'تصميم صفحة هبوط اعلانية',
    'ربط بيكسل سناب وتيك توك وميتا',
    'تحسين معدل التحويل CRO',
    'تصميم صفحات هبوط عقارية وطبية وتجارية',
    'عمرو سالم لتصميم صفحات الهبوط'
  ],
  authors: [{ name: 'Amr Salem' }],
  alternates: {
    canonical: 'https://yourwebsite.com/services/landing-pages',
  },
  openGraph: {
    title: 'تصميم صفحات الهبوط التسويقية | حول نقرات إعلاناتك إلى مبيعات فورية',
    description: 'نصمم ونبرمج صفحات هبوط فائقة السرعة بـ Next.js وووردبريس مخصصة لمضاعفة عائد الحملات الإعلانية الممولة في مصر، السعودية، الإمارات، والكويت.',
    url: 'https://yourwebsite.com/services/landing-pages',
    siteName: 'Amr Salem Digital Studio',
    locale: 'ar_EG',
    type: 'website',
  },
};

export default function LandingPagesServicePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "name": "خدمة تصميم وتطوير صفحات الهبوط التسويقية (Landing Pages) - عمرو سالم",
        "description": "تصميم وبرمجة صفحات هبوط إعلانية عالية التحويل (CRO) مخصصة لحملات Google Ads و Meta و Snapchat و TikTok مع كتابة المحتوى البيعي وربط البيكسلات وبوابات الدفع وأنظمة الـ CRM.",
        "provider": {
          "@type": "ProfessionalService",
          "name": "Amr Salem Digital Studio",
          "telephone": "+2010120347946",
          "url": "https://yourwebsite.com"
        },
        "areaServed": [
          { "@type": "Country", "name": "Egypt" },
          { "@type": "Country", "name": "Saudi Arabia" },
          { "@type": "Country", "name": "United Arab Emirates" },
          { "@type": "Country", "name": "Kuwait" }
        ],
        "serviceType": "Landing Page Design & Conversion Rate Optimization"
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "لماذا أحتاج إلى صفحة هبوط مخصصة بدلاً من توجيه الإعلان للموقع الرئيسي؟",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "الموقع الرئيسي يحتوي على عشرات الروابط والقوائم التي تشتت الزائر القادم من الإعلان، بينما صفحة الهبوط (Landing Page) مصممة بهندسة نفسية وبيعية تركز على هدف واحد فقط (شراء منتج، حجز موعد، أو تسجيل بيانات) مما يضاعف معدل التحويل من 3 إلى 5 أضعاف."
            }
          },
          {
            "@type": "Question",
            "name": "هل تشمل الخدمة كتابة المحتوى البيعي (Copywriting) وربط البيكسلات؟",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "نعم 100%، نقوم بصياغة المحتوى البيعي والتسويقي المقنع لصفحة الهبوط، مع الربط البرمجي الكامل لـ Meta Pixel، TikTok Pixel، Snap Pixel، و Google Tag Manager لضمان تتبع دقيق لكافة التحويلات."
            }
          },
          {
            "@type": "Question",
            "name": "كم تستغرق مدة تصميم وبرمجة صفحة هبوط احترافية؟",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "تستغرق عملية تصميم، كتابة محتوى، برمجة، وربط صفحة الهبوط ما بين 3 إلى 7 أيام عمل لتكون جاهزة تماماً لإطلاق حملتك الإعلانية بأعلى كفاءة وسرعة."
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
      <LandingPagesServiceClient />
    </>
  );
}
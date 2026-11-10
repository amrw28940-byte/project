import type { Metadata } from 'next';
import ContactClient from './ContactClient';

export const metadata: Metadata = {
  title: 'اتصل بنا | اطلب عرض سعر واستشارة مجانية لمشروعك | عمرو سالم',
  description: 'تواصل الآن مع م. عمرو سالم لتصميم وتطوير المواقع الإلكترونية بـ Next.js وووردبريس، المتاجر الإلكترونية، صفحات الهبوط، وفيديوهات الـ AI، وخدمات الـ SEO في مصر، السعودية، الإمارات، والكويت. استشارة فورية عبر واتساب 01020347946.',
  keywords: [
    'اتصل بنا شركة تصميم مواقع',
    'تواصل مع مبرمج مواقع',
    'طلب عرض سعر تصميم موقع الكتروني',
    'استشارة مجانية تصميم متجر الكتروني',
    'رقم شركة تصميم مواقع الكترونية',
    'تواصل عبر واتساب لتصميم موقع',
    'عمرو سالم لتصميم وتطوير المواقع',
    'حجز استشارة سيو وتطوير ويب'
  ],
  authors: [{ name: 'Amr Salem' }],
  alternates: {
    canonical: 'https://yourwebsite.com/contact',
  },
  openGraph: {
    title: 'تواصل معنا | ابدأ مشروعك الرقمي اليوم مع م. عمرو سالم',
    description: 'احصل على استشارة تقنية وتسويقية مجانية وعرض سعر مفصل لموقعك أو متجرك الإلكتروني في مصر والخليج.',
    url: 'https://yourwebsite.com/contact',
    siteName: 'Amr Salem Digital Studio',
    locale: 'ar_EG',
    type: 'website',
  },
};

export default function ContactPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ContactPage",
        "name": "صفحة اتصل بنا - استوديو م. عمرو سالم الرقمي",
        "description": "تواصل معنا لطلب خدمات تصميم وبرمجة المواقع الإلكترونية والمتاجر الرقمية وتحسين محركات البحث SEO.",
        "url": "https://yourwebsite.com/contact",
        "mainEntity": {
          "@type": "ProfessionalService",
          "name": "Amr Salem Digital Studio",
          "telephone": "+201020347946",
          "contactPoint": [
            {
              "@type": "ContactPoint",
              "telephone": "+201020347946",
              "contactType": "sales",
              "areaServed": ["EG", "SA", "AE", "KW"],
              "availableLanguage": ["Arabic", "English"]
            },
            {
              "@type": "ContactPoint",
              "telephone": "+201020347946",
              "contactType": "customer support",
              "areaServed": ["EG", "SA", "AE", "KW"],
              "availableLanguage": ["Arabic", "English"]
            }
          ]
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "كم يستغرق الرد على طلب عرض السعر عبر الواتساب؟",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "يتم الرد على كافة الاستفسارات وطلبات عروض الأسعار عبر الواتساب (01020347946) خلال دقائق معدودة، مع تقديم استشارة أولية مجانية وخطة عمل واضحة لمشروعك."
            }
          },
          {
            "@type": "Question",
            "name": "هل تقدمون خدماتكم للعملاء في السعودية والإمارات والكويت ومصر؟",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "نعم بالتأكيد، نخدم الشركات، المؤسسات، والمتاجر في مصر، المملكة العربية السعودية، دولة الإمارات، ودولة الكويت مع توفير كافة عمليات الربط المحلي لبوابات الدفع والشحن في كل دولة."
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
      <ContactClient />
    </>
  );
}
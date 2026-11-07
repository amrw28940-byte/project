import type { Metadata } from 'next';
import SaudiDesignClient from './SaudiDesignClient';

export const metadata: Metadata = {
  title: 'شركة تصميم مواقع الكترونية في السعودية | حلول رقمية بمعايير عالمية | عمرو سالم',
  description: 'أفضل شركة تصميم مواقع الكترونية في السعودية (الرياض، جدة، الدمام). نصمم مواقع شركات ومتاجر إلكترونية فائقة السرعة بـ Next.js وووردبريس مع ربط مدى، تمارا، تابي، وتصدر نتائج جوجل SEO.',
  keywords: [
    'شركة تصميم مواقع الكترونية في السعودية',
    'تصميم مواقع الرياض',
    'شركة تصميم مواقع جدة',
    'تصميم مواقع الدمام',
    'تصميم متجر الكتروني السعودية',
    'برمجة مواقع خاصة السعودية',
    'تطوير مواقع Next.js السعودية',
    'شركة تصميم مواقع ووردبريس السعودية',
    'ربط بوابات الدفع مدى وتابي وتمارا',
    'تحسين محركات البحث في السعودية',
    'أفضل شركة برمجة مواقع في المملكة',
    'عمرو سالم لتصميم المواقع'
  ],
  authors: [{ name: 'Amr Salem' }],
  alternates: {
    canonical: 'https://yourwebsite.com/websitedesigncompanysaudiarabia',
  },
  openGraph: {
    title: 'شركة تصميم مواقع الكترونية في السعودية | تصدر السوق السعودي',
    description: 'نحول رؤيتك التجارية في المملكة إلى منصة رقمية فائقة السرعة والأمان، متوافقة مع أنظمة الدفع والشحن السعودية ومعايير السيو القياسية.',
    url: 'https://yourwebsite.com/websitedesigncompanysaudiarabia',
    siteName: 'Amr Salem Digital Studio',
    locale: 'ar_SA',
    type: 'website',
  },
};

export default function WebsiteDesignSaudiArabiaPage() {
  // بيانات الـ Schema المهيأة لمحركات البحث (Service + FAQ + LocalBusiness)
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "name": "شركة تصميم مواقع الكترونية في السعودية - عمرو سالم",
        "description": "تصميم وتطوير المواقع الإلكترونية والمتاجر الرقمية للشركات والمؤسسات في المملكة العربية السعودية بأحدث تقنيات الويب وNext.js.",
        "telephone": "+2010120347946",
        "url": "https://yourwebsite.com/websitedesigncompanysaudiarabia",
        "areaServed": [
          { "@type": "Country", "name": "Saudi Arabia" },
          { "@type": "City", "name": "Riyadh" },
          { "@type": "City", "name": "Jeddah" },
          { "@type": "City", "name": "Dammam" },
          { "@type": "City", "name": "Mecca" },
          { "@type": "City", "name": "Medina" },
          { "@type": "City", "name": "Khobar" }
        ],
        "priceRange": "$$$",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "خدمات تصميم وتطوير المواقع في السعودية",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "تصميم مواقع الشركات والمؤسسات في السعودية"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "تطوير المواقع المخصصة باستخدام Next.js"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "تصميم متاجر شوبيفاي وووردبريس في المملكة"
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
            "name": "كم تكلفة تصميم موقع إلكتروني في السعودية؟",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "تختلف تكلفة تصميم الموقع الإلكتروني في السعودية بناءً على حجم المشروع، نوع التقنية المستخدمة (ووردبريس أو برمجة خاصة Next.js)، والخصائص المطلوبة مثل اللغات وبوابات الدفع. نقدم باقات مرنة ومخصصة تناسب الشركات الناشئة والكبرى."
            }
          },
          {
            "@type": "Question",
            "name": "هل تدعم المواقع المتاجر الإلكترونية بوابات الدفع السعودية مثل مدى وتابي وتمارا؟",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "نعم بالتأكيد، نقوم بربط وتفعيل كافة بوابات الدفع المعتمدة في المملكة العربية السعودية مثل مدى، أبل باي، اس تي سي باي، بالإضافة إلى خدمات التقسيط الذكية مثل تابي وتمارا، مع شركات الشحن المحلية كأرامكس وسمسا وسبل."
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
      <SaudiDesignClient />
    </>
  );
}
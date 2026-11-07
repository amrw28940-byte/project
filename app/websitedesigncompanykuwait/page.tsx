import type { Metadata } from 'next';
import KuwaitDesignClient from './KuwaitDesignClient';

export const metadata: Metadata = {
  title: 'شركة تصميم مواقع الكترونية في الكويت | برمجة مواقع ومتاجر كي نت | عمرو سالم',
  description: 'أفضل شركة تصميم مواقع الكترونية في الكويت (العاصمة، حولي، السالمية، الفروانية، الجهراء، الأحمدي). نصمم مواقع شركات ومتاجر إلكترونية فائقة السرعة بـ Next.js وووردبريس مع ربط كي نت KNET، ماي فاتورة، وتصدر جوجل SEO.',
  keywords: [
    'شركة تصميم مواقع الكترونية في الكويت',
    'شركة تصميم مواقع بالكويت',
    'تصميم مواقع الكويت',
    'أفضل شركة تصميم مواقع في الكويت',
    'تصميم متجر الكتروني الكويت',
    'برمجة مواقع في الكويت',
    'ربط كي نت للمواقع الكويت',
    'تصميم مواقع شركات الكويت',
    'تطوير مواقع Next.js الكويت',
    'تصميم مواقع ووردبريس الكويت',
    'شركة سيو في الكويت',
    'تصميم مواقع حولي والسالمية',
    'تصميم مواقع الفروانية والجهراء',
    'عمرو سالم لتصميم المواقع الكويت'
  ],
  authors: [{ name: 'Amr Salem' }],
  alternates: {
    canonical: 'https://yourwebsite.com/websitedesigncompanykuwait',
  },
  openGraph: {
    title: 'شركة تصميم مواقع الكترونية في الكويت | حلول رقمية بمعايير عالمية',
    description: 'نبتكر للشركات، العيادات، والمتاجر في دولة الكويت منصات رقمية فائقة السرعة والأمان، متكاملة مع الدفع عبر KNET وماي فاتورة ومهيأة لتصدر نتائج جوجل.',
    url: 'https://yourwebsite.com/websitedesigncompanykuwait',
    siteName: 'Amr Salem Digital Studio',
    locale: 'ar_KW',
    type: 'website',
  },
};

export default function WebsiteDesignKuwaitPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "name": "شركة تصميم مواقع الكترونية في الكويت - عمرو سالم",
        "description": "تصميم وبرمجة المواقع الإلكترونية والمتاجر الرقمية للشركات والمؤسسات والعيادات في دولة الكويت بأحدث تقنيات الويب Next.js و WordPress مع ربط KNET وتهيئة كاملة لمحركات البحث SEO.",
        "telephone": "+2010120347946",
        "url": "https://yourwebsite.com/websitedesigncompanykuwait",
        "areaServed": [
          { "@type": "Country", "name": "Kuwait" },
          { "@type": "City", "name": "Kuwait City" },
          { "@type": "AdministrativeArea", "name": "Hawalli" },
          { "@type": "AdministrativeArea", "name": "Salmiya" },
          { "@type": "AdministrativeArea", "name": "Farwaniya" },
          { "@type": "AdministrativeArea", "name": "Al Jahra" },
          { "@type": "AdministrativeArea", "name": "Al Ahmadi" },
          { "@type": "AdministrativeArea", "name": "Mubarak Al-Kabeer" }
        ],
        "priceRange": "$$$",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "خدمات تصميم وتطوير المواقع في الكويت",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "تصميم مواقع الشركات والمؤسسات والعيادات في الكويت"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "برمجة مواقع خاصة فائقة السرعة بتقنية Next.js في الكويت"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "تصميم المتاجر الإلكترونية وربط كي نت KNET وماي فاتورة في الكويت"
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
            "name": "ما هي أفضل شركة تصميم مواقع الكترونية في الكويت؟",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "تعد وكالة م. عمرو سالم الخيار الأمثل لتصميم وتطوير المواقع الإلكترونية في الكويت؛ لأننا ندمج بين البرمجة الحديثة الخارقة السرعة (Next.js & WordPress) وبين التكامل الشامل مع بوابات الدفع الكويتية مثل كي نت (KNET) وماي فاتورة وتاب، مع تأسيس كامل للسيو المحلي لتصدر بحث جوجل الكويت."
            }
          },
          {
            "@type": "Question",
            "name": "هل تدعم المواقع والمتاجر الدفع عبر كي نت (KNET) وأبل باي في الكويت؟",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "نعم بالتأكيد 100%، نقوم بربط موقعك أو متجرك الإلكتروني ببوابة الدفع الأولى في الكويت كي نت (KNET) بالإضافة إلى Apple Pay والبطاقات الائتمانية عبر مزودين معتمدين في الكويت مثل MyFatoorah و Tap Payments و Upayments."
            }
          },
          {
            "@type": "Question",
            "name": "كم تكلفة تصميم موقع إلكتروني أو متجر في الكويت؟",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "تعتمد التكلفة على نوع الموقع (تعريفي لشركة أو عيادة، متجر إلكتروني متكامل، أو منصة مبرمجة خصيصاً) والخصائص المطلوبة. نوفر باقات تنافسية مدروسة تناسب المبادرين وأصحاب المشاريع الصغيرة والشركات الكبرى في الكويت."
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
      <KuwaitDesignClient />
    </>
  );
}
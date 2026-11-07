import type { Metadata } from 'next';
import RiyadhDesignClient from './RiyadhDesignClient';

// إعدادات الـ SEO والـ Metadata الخاصة بصفحة تصميم المواقع في الرياض
export const metadata: Metadata = {
  title: 'شركة تصميم مواقع الكترونية في الرياض | برمجة وتطوير مواقع الشركات | عمرو سالم',
  description: 'أفضل شركة تصميم مواقع الكترونية في الرياض. نصمم مواقع شركات ومتاجر إلكترونية فائقة السرعة بـ Next.js وووردبريس مع ربط مدى، تمارا، تابي، وتصدر نتائج جوجل SEO في الرياض.',
  keywords: [
    'شركة تصميم مواقع الكترونية في الرياض',
    'تصميم مواقع شركات الرياض',
    'شركة برمجة مواقع في الرياض',
    'تصميم متجر الكتروني الرياض',
    'تطوير مواقع Next.js الرياض',
    'شركة تصميم ووردبريس الرياض',
    'أفضل مصمم مواقع في الرياض',
    'ربط بوابات الدفع الرياض',
    'تحسين محركات البحث SEO الرياض',
    'عمرو سالم للتطوير الرقمي الرياض'
  ],
  authors: [{ name: 'Amr Salem' }],
  alternates: {
    canonical: 'https://yourwebsite.com/websitedesigncompanyriyadh',
  },
  openGraph: {
    title: 'شركة تصميم مواقع الكترونية في الرياض | قمة الأداء والريادة الرقمية',
    description: 'نبتكر للشركات والمؤسسات في الرياض منصات رقمية فائقة السرعة والأمان، متوافقة مع أنظمة الدفع والشحن ومعايير السيو القياسية.',
    url: 'https://yourwebsite.com/websitedesigncompanyriyadh',
    siteName: 'Amr Salem Digital Studio',
    locale: 'ar_SA',
    type: 'website',
  },
};

export default function WebsiteDesignRiyadhPage() {
  // بيانات الـ JSON-LD Schema لمحركات البحث (Service + FAQ + LocalBusiness)
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "name": "شركة تصميم مواقع الكترونية في الرياض - عمرو سالم",
        "description": "تصميم وتطوير المواقع الإلكترونية والمتاجر الرقمية للشركات والمؤسسات في الرياض بأحدث تقنيات الويب وNext.js.",
        "telephone": "+2010120347946",
        "url": "https://yourwebsite.com/websitedesigncompanyriyadh",
        "areaServed": {
          "@type": "City",
          "name": "Riyadh"
        },
        "priceRange": "$$$"
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "كم تكلفة تصميم موقع إلكتروني للشركات في الرياض؟",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "تختلف التكلفة بناءً على حجم ومميزات الموقع ونوع التقنية المستخدمة (برمجة خاصة Next.js أو ووردبريس). نقدم في الرياض باقات تنافسية مدروسة تضمن أعلى عائد على الاستثمار لشركتك."
            }
          },
          {
            "@type": "Question",
            "name": "هل تدعمون ربط بوابات الدفع الإلكتروني في الرياض مثل مدى وتابي؟",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "نعم، نقوم بالربط الفوري مع كافة بوابات الدفع المعتمدة في المملكة مثل مدى، أبل باي، تابي، وتمارا، لتوفير تجربة دفع سلسة وآمنة لعملائك في الرياض."
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
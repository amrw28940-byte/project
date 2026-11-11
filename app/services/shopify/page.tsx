import type { Metadata } from 'next';
import ShopifyServiceClient from './ShopifyServiceClient';

export const metadata: Metadata = {
  title: 'تصميم متاجر شوبيفاي احترافية | برمجة قوالب Liquid و Headless Shopify | عمرو سالم',
  description: 'أفضل شركة تصميم وتطوير متاجر شوبيفاي (Shopify & Shopify Plus) في مصر، السعودية، الإمارات، والكويت. نبرمج قوالب Liquid مخصصة فائقة السرعة، متاجر Headless بـ Next.js، مع ربط بوابات الدفع (مدى، تابي، تمارا، Paymob، فاليو، KNET) وشركات الشحن وتأسيس السيو.',
  keywords: [
    'تصميم متاجر شوبيفاي',
    'تصميم متجر شوبيفاي',
    'خبير شوبيفاي',
    'شركة تصميم متاجر شوبيفاي في مصر والسعودية والامارات',
    'تطوير متاجر Shopify',
    'برمجة قوالب شوبيفاي Liquid',
    'تعريب قوالب شوبيفاي RTL',
    'ربط بوابات الدفع في شوبيفاي Paymob و مدى و تابي وتمارا',
    'تصميم متجر الكتروني شوبيفاي',
    'تحسين سرعة متجر شوبيفاي',
    'سيو متاجر شوبيفاي Shopify SEO',
    'Headless Shopify Next.js',
    'عمرو سالم خبير شوبيفاي'
  ],
  authors: [{ name: 'Amr Salem' }],
  alternates: {
    canonical: 'https://yourwebsite.com/services/shopify',
  },
  openGraph: {
    title: 'خدمة تصميم وبرمجة متاجر شوبيفاي (Shopify) | أطلق براندك العالمي اليوم',
    description: 'نبني لبراندك متجراً إلكترونياً على منصة شوبيفاي العالمية بتصميم فاخر، سرعة خارقة، وربط متكامل للدفع والتقسيط والشحن والـ SEO في مصر والخليج.',
    url: 'https://yourwebsite.com/services/shopify',
    siteName: 'Amr Salem Digital Studio',
    locale: 'ar_EG',
    type: 'website',
  },
};

export default function ShopifyServicePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "name": "خدمة تصميم وبرمجة متاجر شوبيفاي الاحترافية (Shopify Development) - عمرو سالم",
        "description": "تصميم وتطوير وتخصيص متاجر شوبيفاي (Shopify & Headless Storefront API) للبراندات والشركات في مصر والسعودية والإمارات والكويت، شامل برمجة قوالب Liquid العربية RTL، ربط الدفع والشحن، وتهيئة محركات البحث SEO.",
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
        "serviceType": "Shopify E-Commerce Design & Development"
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "لماذا تعتبر منصة شوبيفاي (Shopify) الخيار الأول للبراندات والمتاجر الإلكترونية؟",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "تتميز منصة شوبيفاي بالاستقرار السحابي المطلق بنسبة 99.99%، والأمان البنكي المشفر، وأسرع صفحة إتمام دفع (Checkout) في العالم ترفع معدل التحويل، مع سهولة إدارة المخزون والطلبات والربط المباشر مع إعلانات فيسبوك وتيك توك وسناب شات وجوجل."
            }
          },
          {
            "@type": "Question",
            "name": "هل تدعم متاجر شوبيفاي بوابات الدفع في مصر والسعودية والإمارات والكويت؟",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "نعم 100%، نقوم بربط متجر شوبيفاي الخاص بك بكافة بوابات الدفع المحلية مثل (Paymob، فوري، فودافون كاش، وفاليو في مصر) و (مدى، تابي، تمارا، Apple Pay، و STC Pay في السعودية والإمارات) و (كي نت KNET عبر ماي فاتورة وتاب في الكويت)."
            }
          },
          {
            "@type": "Question",
            "name": "هل تقومون بتعريب وبرمجة قوالب شوبيفاي باللغة العربية (RTL)؟",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "نعم بالتأكيد، نحن متخصصون في برمجة وتعديل أكواد Shopify Liquid لتقديم متاجر عربية أصيلة (RTL) أو ثنائية اللغة (عربي / إنجليزي) بخطوط عربية أنيقة وسرعة أداء قياسية تتجاوز 95% على الجوال."
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
      <ShopifyServiceClient />
    </>
  );
}
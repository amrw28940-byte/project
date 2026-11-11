import type { Metadata } from 'next';
import WordpressServiceClient from './WordpressServiceClient';

export const metadata: Metadata = {
  title: 'تصميم مواقع ووردبريس احترافية | برمجة قوالب خاصة ومتاجر ووكومرس | عمرو سالم',
  description: 'أفضل شركة تصميم وتطوير مواقع ووردبريس (WordPress & WooCommerce) في مصر، السعودية، الإمارات، والكويت. نبرمج قوالب مخصصة خالية من البطء، متاجر إلكترونية متكاملة، ومواقع شركات وعيادات وعقارات فائقة السرعة ومؤمنة 100% ومؤسسة لتصدر نتائج جوجل SEO.',
  keywords: [
    'تصميم مواقع ووردبريس',
    'تصميم موقع ووردبريس',
    'شركة تصميم مواقع ووردبريس',
    'مطور ووردبريس محترف',
    'خبير ووردبريس',
    'تصميم متجر ووكومرس WooCommerce',
    'برمجة قوالب ووردبريس خاصة',
    'تسريع مواقع ووردبريس',
    'حماية وتأمين ووردبريس',
    'تصميم مواقع شركات بالووردبريس',
    'سيو ووردبريس WordPress SEO',
    'Headless WordPress Next.js',
    'عمرو سالم لتصميم مواقع ووردبريس'
  ],
  authors: [{ name: 'Amr Salem' }],
  alternates: {
    canonical: 'https://yourwebsite.com/services/wordpress',
  },
  openGraph: {
    title: 'خدمة تصميم وبرمجة مواقع ووردبريس (WordPress) | سرعة، أمان، وصدارة في جوجل',
    description: 'نحول نظام ووردبريس إلى منصة رقمية خارقة السرعة والأمان لشركتك أو متجرك الإلكتروني، مع لوحة تحكم عربية سهلة وتكامل شامل مع بوابات الدفع والشحن في مصر والخليج.',
    url: 'https://yourwebsite.com/services/wordpress',
    siteName: 'Amr Salem Digital Studio',
    locale: 'ar_EG',
    type: 'website',
  },
};

export default function WordpressServicePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "name": "خدمة تصميم وبرمجة مواقع ووردبريس ومتاجر ووكومرس (WordPress Development) - عمرو سالم",
        "description": "تصميم وتطوير وتخصيص مواقع ووردبريس ومتاجر ووكومرس للشركات والمؤسسات والعيادات والبراندات في مصر والسعودية والإمارات والكويت، شامل برمجة الأكواد المخصصة PHP، تسريع الأداء، الحماية السيبرانية، وتهيئة محركات البحث SEO.",
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
        "serviceType": "WordPress & WooCommerce Web Development"
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "ما الفرق بين تصميم ووردبريس الهندسي لديكم وبين القوالب الجاهزة التقليدية؟",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "القوالب الجاهزة التقليدية تكون محملة بآلاف الأسطر البرمجية غير الضرورية وعشرات الإضافات التي تبطئ الموقع وتعرضه للاختراق. نحن نبني مواقع ووردبريس بهندسة كود نظيفة (Custom PHP Shortcodes & Lightweight Architecture) تضمن سرعة تحميل فوق 95% على الجوال وأماناً سيبرانياً كاملاً."
            }
          },
          {
            "@type": "Question",
            "name": "هل تدعم متاجر ووكومرس (WooCommerce) بوابات الدفع والشحن في مصر والخليج؟",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "نعم 100%، نقوم بربط متاجر ووكومرس بكافة بوابات الدفع مثل (Paymob، فوري، فودافون كاش، وفاليو في مصر) و (مدى، تابي، تمارا، Apple Pay، و كي نت KNET في السعودية والإمارات والكويت) مع الربط التلقائي لشركات الشحن مثل بوسطة وسمسا وأرامكس."
            }
          },
          {
            "@type": "Question",
            "name": "هل أستطيع إدارة موقع ووردبريس وتعديل المحتوى والمنتجات بنفسي بسهولة؟",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "بالتأكيد، نجهز لك لوحة تحكم ووردبريس معربة بالكامل ومبسطة، تمكنك من إضافة الصفحات، المقالات، المشاريع، أو المنتجات وتعديل الأسعار والصور في دقائق دون الحاجة لأي خبرة برمجية، مع تقديم تدريب عملي مسجل ومباشر."
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
      <WordpressServiceClient />
    </>
  );
}
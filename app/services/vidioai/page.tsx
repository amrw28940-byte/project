import type { Metadata } from 'next';
import AiVideoServiceClient from './AiVideoServiceClient';

export const metadata: Metadata = {
  title: 'تصميم فيديوهات الذكاء الاصطناعي AI | إنتاج إعلانات وريلز احترافية | عمرو سالم',
  description: 'خدمة تصميم وإنتاج فيديوهات الذكاء الاصطناعي (AI Video Production) للشركات والمتاجر والعقارات. نبتكر إعلانات فيديو سينمائية، متحدثين افتراضيين (AI Avatars)، وفيديوهات ريلز وتيك توك وسناب شات تضاعف مبيعاتك بتكلفة أقل وسرعة قياسية.',
  keywords: [
    'تصميم فيديوهات بالذكاء الاصطناعي',
    'تصميم فيديوهات AI',
    'انتاج فيديو بالذكاء الاصطناعي',
    'عمل اعلان فيديو AI',
    'شركة تصميم فيديوهات اعلانية',
    'تصميم فيديوهات ريلز وتيك توك AI',
    'فيديوهات UGC بالذكاء الاصطناعي',
    'تصميم فيديو موشن جرافيك وسينمائي AI',
    'تعليق صوتي بالذكاء الاصطناعي لهجة سعودية ومصرية',
    'تصميم فيديوهات عقارية ومنتجات AI',
    'عمرو سالم لتصميم فيديوهات الذكاء الاصطناعي'
  ],
  authors: [{ name: 'Amr Salem' }],
  alternates: {
    canonical: 'https://yourwebsite.com/services/vidioai',
  },
  openGraph: {
    title: 'خدمة تصميم وإنتاج فيديوهات الذكاء الاصطناعي AI | ثورة الإعلانات المرئية',
    description: 'نحول أفكارك ومنتجاتك إلى إعلانات فيديو سينمائية خرافية ومقاطع Reels & TikTok عالية التحويل باستخدام أحدث محركات الذكاء الاصطناعي العالمية.',
    url: 'https://yourwebsite.com/services/vidioai',
    siteName: 'Amr Salem Digital Studio',
    locale: 'ar_EG',
    type: 'website',
  },
};

export default function AiVideoServicePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "name": "خدمة تصميم وإنتاج فيديوهات الذكاء الاصطناعي (AI Video Production) - عمرو سالم",
        "description": "إنتاج وتصميم الفيديوهات الإعلانية والتسويقية وفيديوهات المنتجات والعقارات والمتحدثين الافتراضيين باستخدام تقنيات الذكاء الاصطناعي المتقدمة مع التعليق الصوتي الاحترافي والمونتاج السينمائي.",
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
        "serviceType": "AI Video Production & Commercial Advertising"
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "ما هي مميزات تصميم الفيديوهات الإعلانية بالذكاء الاصطناعي (AI) مقارنة بالتصوير التقليدي؟",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "يوفر إنتاج الفيديو بالذكاء الاصطناعي أكثر من 70% من تكاليف استئجار الاستوديوهات والممثلين والمعدات، ويختصر وقت التنفيذ من أسابيع إلى أيام معدودة، مع إمكانية ابتكار مشاهد سينمائية وبصرية مستحيلة في التصوير العادي تجذب انتباه المشاهد خلال أول 3 ثوانٍ."
            }
          },
          {
            "@type": "Question",
            "name": "هل تدعم فيديوهات الذكاء الاصطناعي اللهجة السعودية والمصرية والخليجية والفصحى؟",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "نعم 100%، نستخدم أحدث تقنيات الهندسة الصوتية الذكية (مثل ElevenLabs Pro) مع ضبط النبرة والمشاعر لتقديم تعليق صوتي بشري طبيعي تماماً باللهجة السعودية، الإماراتية، الكويتية، المصرية، أو العربية الفصحى والإنجليزية."
            }
          },
          {
            "@type": "Question",
            "name": "هل يمكن وضع صورة المنتج الحقيقي أو شعار الشركة داخل فيديو الذكاء الاصطناعي؟",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "بالتأكيد، نقوم بدمج صور منتجاتك الحقيقية (عطور، أزياء، إلكترونيات، عقارات، أو واجهات تطبيقات) داخل بيئات ومشاهد سينمائية متحركة بالذكاء الاصطناعي مع الحفاظ التام على تفاصيل وهوية منتجك."
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
      <AiVideoServiceClient />
    </>
  );
}
import type { Metadata } from 'next';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import ServicesMarquee from '../components/ServicesMarquee';
import ServicesMarqueeReverse from '../components/ServicesMarqueeReverse';
import ExperienceSection from '../components/ExperienceSection';
import ServicesSection from '../components/ServicesSection';
import ProjectsSection from '../components/ProjectsSection';
import AboutSection from '../components/AboutSection';
import TestimonialsSection from '../components/TestimonialsSection';
import FloatingSocials from '../components/FloatingSocials'; 
import Contact from '../components/Contact'; 

// إعدادات الـ SEO الاحترافية والتسويقية للصفحة الرئيسية
export const metadata: Metadata = {
  title: 'شركة تصميم مواقع وتحسين محركات البحث SEO | عمرو سالم',
  description: 'احصل على تصميم مواقع احترافية وتطبيقات Next.js سريعة ومتاجر إلكترونية متكاملة مع خدمات تحسين محركات البحث SEO لضمان تصدر موقعك قمة نتائج جوجل.',
  keywords: ['تصميم مواقع', 'تحسين محركات البحث', 'SEO', 'Next.js', 'تطوير واجهات', 'عمرو سالم'],
  authors: [{ name: 'Amr Salem' }],
  openGraph: {
    title: 'شركة تصميم مواقع وتحسين محركات البحث SEO | عمرو سالم',
    description: 'نحول رؤيتك الرقمية إلى واقع ملموس بتصميم استثنائي وأداء فائق السرعة يضمن ظهورك في قمة محركات البحث.',
    url: 'https://yourwebsite.com',
    siteName: 'Amr Salem Digital Studio',
    locale: 'ar_AR',
    type: 'website',
  },
};

export default function HomePage() {
  return (
    /* pt-24: إضافة مساحة علوية لمنع تغطية المحتوى بواسطة الهيدر الثابت
       overflow-x-hidden: منع أي تحرك جانبي غير مرغوب فيه للشاشة 
    */
    <main className="min-h-screen relative pt-24 overflow-x-hidden">
      
      {/* الأيقونات الثابتة على اليمين */}
      <FloatingSocials />

      <Header />
      
      <HeroSection />
      
      <div className="w-full">
        <ServicesMarquee />
        <ServicesMarqueeReverse />
      </div>

      <ExperienceSection />
      <ServicesSection />
      <ProjectsSection />
      <AboutSection /> 
      <TestimonialsSection />


      {/* السكشن الثاني: النموذج بخلفية سوداء */}
      <Contact />
      
    </main>
  );
}
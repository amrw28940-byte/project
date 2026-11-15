import type { Metadata } from 'next';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import ServicesMarquee from '../components/ServicesMarquee';
import ServicesMarqueeReverse from '../components/ServicesMarqueeReverse';
import PortfolioSection from '../components/PortfolioSection';
import ExperienceSection from '../components/ExperienceSection';
import ServicesSection from '../components/ServicesSection';
import AboutSection from '../components/AboutSection';
import TestimonialsSection from '../components/TestimonialsSection';
import FloatingSocials from '../components/FloatingSocials'; 
import Contact from '../components/Contact'; 

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
    <main className="min-h-screen relative pt-24 overflow-x-hidden">
      
      <FloatingSocials />

      <Header />
      
      <HeroSection />
      
      <div className="w-full">
        <ServicesMarquee />
        <ServicesMarqueeReverse />
      </div>

      <PortfolioSection />

      <ExperienceSection />
      <ServicesSection />
      <AboutSection /> 
      <TestimonialsSection />
      <Contact />
      
    </main>
  );
}
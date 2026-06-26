import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ServicesMarquee from '@/components/ServicesMarquee';
import ServicesMarqueeReverse from '@/components/ServicesMarqueeReverse';
import ExperienceSection from '@/components/ExperienceSection';
import ServicesSection from '@/components/ServicesSection';
import ProjectsSection from '@/components/ProjectsSection';
import AboutSection from '@/components/AboutSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import FloatingSocials from '@/components/FloatingSocials'; // الأيقونات العائمة
import ContactSection from '@/components/ContactSection'; // (السكشن الأول - بالخريطة)
import Contact from '@/components/Contact';              // (السكشن الثاني - الخلفية السوداء)

export default function HomePage() {
  return (
    <main className="min-h-screen relative">
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

      {/* السكشن الأول: الخريطة */}
      <ContactSection />

      {/* السكشن الثاني: النموذج بخلفية سوداء */}
      <Contact />
      
    </main>
  );
}
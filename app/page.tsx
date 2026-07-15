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
import ContactSection from '../components/ContactSection'; 
import Contact from '../components/Contact'; 

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

      {/* السكشن الأول: الخريطة */}
      <ContactSection />

      {/* السكشن الثاني: النموذج بخلفية سوداء */}
      <Contact />
      
    </main>
  );
}
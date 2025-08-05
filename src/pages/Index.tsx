import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import InnovatorsSection from '@/components/InnovatorsSection';
import OurWorkSection from '@/components/OurWorkSection';
import Partners from '@/components/Partners';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <About />
      <InnovatorsSection />
      <OurWorkSection />
      <Partners />
      <Footer />
    </div>
  );
};

export default Index;
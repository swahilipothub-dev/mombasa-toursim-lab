import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Destinations from '@/components/Destinations';
import Events from '@/components/Events';
import Incubator from '@/components/Incubator';
import Contact from '@/components/Contact';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <About />
      <Destinations />
      <Events />
      <Incubator />
      <Contact />
      
      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-primary-foreground/80">
            © 2025 Mombasa Tourism Lab. Celebrating coastal heritage, fostering innovation.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;

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
      {/* <Events /> */}
      <Incubator />
      <Contact />

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">Our Partners</h2>
          {/* Animated Logos */}
          <div className="space-y-8">
            {/* Top Row - scroll left */}
            <div className="overflow-hidden">
              <div className="flex gap-12 animate-marquee-left items-center">
                <img src="/partners/kenya-tourism-board.png" alt="Kenya Tourism Board" className="h-20 object-contain" draggable="false" />
                <img src="/partners/mombasa-county-logo.png" alt="Mombasa County" className="h-20 object-contain" draggable="false" />
                <img src="/partners/STTA-logo.png" alt="STTA" className="h-20 object-contain" draggable="false" />
                <img src="/partners/swahilipothub.png" alt="Swahilipot Foundation" className="h-20 object-contain" draggable="false" />
                {/* Repeat for smooth loop */}
                <img src="/partners/kenya-tourism-board.png" alt="Kenya Tourism Board" className="h-20 object-contain" draggable="false" />
                <img src="/partners/mombasa-county-logo.png" alt="Mombasa County" className="h-20 object-contain" draggable="false" />
                <img src="/partners/STTA-logo.png" alt="STTA" className="h-20 object-contain" draggable="false" />
                <img src="/partners/swahilipothub.png" alt="Swahilipot Foundation" className="h-20 object-contain" draggable="false" />
              </div>
            </div>
            {/* Bottom Row - scroll right */}
            <div className="overflow-hidden">
              <div className="flex gap-12 animate-marquee-right items-center">
                <img src="/partners/STTA-logo.png" alt="STTA" className="h-20 object-contain" draggable="false" />
                <img src="/partners/mombasa-county-logo.png" alt="Mombasa County" className="h-20 object-contain" draggable="false" />
                <img src="/partners/kenya-tourism-board.png" alt="Kenya Tourism Board" className="h-20 object-contain" draggable="false" />
                <img src="/partners/swahilipothub.png" alt="Swahilipot Foundation" className="h-20 object-contain" draggable="false" />
                {/* Repeat for smooth loop */}
                <img src="/partners/STTA-logo.png" alt="STTA" className="h-20 object-contain" draggable="false" />
                <img src="/partners/mombasa-county-logo.png" alt="Mombasa County" className="h-20 object-contain" draggable="false" />
                <img src="/partners/kenya-tourism-board.png" alt="Kenya Tourism Board" className="h-20 object-contain" draggable="false" />
                <img src="/partners/swahilipothub.png" alt="Swahilipot Foundation" className="h-20 object-contain" draggable="false" />
              </div>
            </div>
          </div>
        </div>
        {/* Marquee Animations */}
        <style>{`
          @keyframes marquee-left {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          @keyframes marquee-right {
            0% { transform: translateX(0); }
            100% { transform: translateX(50%); }
          }
          .animate-marquee-left {
            animation: marquee-left 18s linear infinite;
            width: max-content;
          }
          .animate-marquee-right {
            animation: marquee-right 18s linear infinite;
            width: max-content;
          }
        `}</style>
      </section>

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

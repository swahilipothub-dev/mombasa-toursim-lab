import Navigation from '@/components/Navigation';
import InnovatorHero from '@/components/InnovatorHero';
import AnimatedBackground from '@/components/AnimatedBackground';
import Partners from '@/components/Partners';
import Footer from '@/components/Footer';

const Incubation = () => {
  return (
    <div className="min-h-screen bg-background">
      <AnimatedBackground />
      <Navigation />
      
      <InnovatorHero
        title="Incubation"
        subtitle="Nurturing tourism innovation through comprehensive business development"
        backgroundImage="/our-work/incubation1.jpg"
      />
      
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Comprehensive Business Development</h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                The Mombasa Tourism Innovation Lab's incubation process is a cornerstone of its strategy to rejuvenate and diversify the local tourism industry. By identifying promising new and existing businesses, the Lab assesses their potential for growth and onboards them into an intensive incubation program.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                This program includes comprehensive training on strategic areas essential for scaling, such as formalizing operations, distributing products, and developing niche tourism offerings. Through this structured support, businesses are equipped to expand their reach, enhance their services, and create more employment opportunities, particularly for the youth.
              </p>
            </div>
            <div className="relative">
              <img 
                src="/our-work/incubation2.jpg" 
                alt="Business incubation and startup development"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Innovation Focus</h3>
              <p className="text-muted-foreground">Fostering creative solutions for tourism challenges</p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM9 3a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Youth Employment</h3>
              <p className="text-muted-foreground">Creating opportunities for young entrepreneurs</p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Sustainable Growth</h3>
              <p className="text-muted-foreground">Building long-term economic prosperity</p>
            </div>
          </div>
        </div>
        
        <Partners />
        <Footer />
      </div>
    </div>
  );
};

export default Incubation;
import Navigation from '@/components/Navigation';
import InnovatorHero from '@/components/InnovatorHero';
import AnimatedBackground from '@/components/AnimatedBackground';
import Partners from '@/components/Partners';
import Footer from '@/components/Footer';

const Subgranting = () => {
  return (
    <div className="min-h-screen bg-background">
      <AnimatedBackground />
      <Navigation />
      
      <InnovatorHero
        title="Subgranting"
        subtitle="Empowering tourism ventures through strategic financial support"
        backgroundImage="https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=1920&h=1080&fit=crop&crop=center"
      />
      
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&h=400&fit=crop&crop=center" 
                alt="Financial planning and business investment"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Strategic Financial Support</h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Subgranting is a pivotal aspect of the Mombasa Tourism Innovation Lab's approach to fostering innovation and growth within the local tourism sector. Through this process, the Lab provides targeted financial support to selected businesses and initiatives that demonstrate strong potential for impact and scalability.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                The subgrants are awarded based on a rigorous selection process, which includes evaluating the applicants' capacity for job creation, innovation, and alignment with the Lab's goals of inclusivity and diversification.
              </p>
            </div>
          </div>

          <div className="bg-muted/30 rounded-lg p-8 mb-16">
            <h3 className="text-2xl font-bold text-foreground mb-6 text-center">Grant Focus Areas</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-foreground">Digitization</h4>
              </div>
              
              <div className="text-center">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-foreground">Marketing</h4>
              </div>
              
              <div className="text-center">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h4 className="font-semibold text-foreground">Operations</h4>
              </div>
              
              <div className="text-center">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                  </svg>
                </div>
                <h4 className="font-semibold text-foreground">Capacity Building</h4>
              </div>
            </div>
          </div>

          <div className="text-center">
            <p className="text-muted-foreground text-lg leading-relaxed max-w-4xl mx-auto">
              These grants empower grassroots organizations, SMEs, and youth and women-led groups to refine and expand their tourism products. By offering financial resources, the Lab enables these businesses to overcome initial barriers and enhance their operational capacities, contributing to the economic vitality and cultural richness of Mombasa.
            </p>
          </div>
        </div>
        
        <Partners />
        <Footer />
      </div>
    </div>
  );
};

export default Subgranting;
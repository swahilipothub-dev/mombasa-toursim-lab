import Navigation from '@/components/Navigation';
import InnovatorHero from '@/components/InnovatorHero';
import AnimatedBackground from '@/components/AnimatedBackground';
import Partners from '@/components/Partners';
import Footer from '@/components/Footer';

const Linkages = () => {
  return (
    <div className="min-h-screen bg-background">
      <AnimatedBackground />
      <Navigation />
      
      <InnovatorHero
        title="Strategic Linkages"
        subtitle="Building powerful partnerships for sustainable tourism development"
        backgroundImage="/linkages/linkages1.jpg"
      />
      
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Partnership Excellence</h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                The Mombasa Tourism Innovation Lab excels in creating strategic linkages that enhance the overall impact and sustainability of its initiatives. By fostering partnerships with key stakeholders, such as the Global Development Incubator and Swahilipot Foundation, the Lab has built a robust support network for local tourism innovators.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Additionally, collaboration with academic institutions like Muranga University provides rigorous training programs, equipping entrepreneurs with essential skills in product development and business acumen.
              </p>
            </div>
            <div className="relative">
              <img 
                src="/linkages/linkages3.jpg" 
                alt="Strategic partnerships and business networking"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-card p-6 rounded-lg shadow-lg">
              <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Academic Partnerships</h3>
              <p className="text-muted-foreground">Collaborating with universities for comprehensive training programs</p>
            </div>

            <div className="bg-card p-6 rounded-lg shadow-lg">
              <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 00-2 2H8a2 2 0 00-2-2V4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Travel Industry</h3>
              <p className="text-muted-foreground">Connecting local businesses with travel buyers and tour operators</p>
            </div>

            <div className="bg-card p-6 rounded-lg shadow-lg">
              <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM9 3a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Government Relations</h3>
              <p className="text-muted-foreground">Facilitating connections with county officials and policymakers</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">Impact Through Collaboration</h3>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-4xl mx-auto">
              These linkages extend beyond education and support, facilitating opportunities for local businesses to connect with travel buyers and county officials through initiatives like familiarization trips. Such interactions showcase innovative tourist experiences and integrate unique offerings into broader travel itineraries, enhancing Mombasa's appeal as a premier destination.
            </p>
          </div>
        </div>
        
        <Partners />
        <Footer />
      </div>
    </div>
  );
};

export default Linkages;
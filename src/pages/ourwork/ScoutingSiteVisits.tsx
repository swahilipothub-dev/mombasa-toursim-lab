import scouting1 from '@/assets/scoutingSitevisits/scouting1.jpg';
import scouting2 from '@/assets/scoutingSitevisits/scouting2.jpg';
import sitevisit1 from '@/assets/scoutingSitevisits/sitevisit1.jpg';
import Navigation from '@/components/Navigation';
import InnovatorHero from '@/components/InnovatorHero';
import AnimatedBackground from '@/components/AnimatedBackground';
import Partners from '@/components/Partners';
import Footer from '@/components/Footer';

const ScoutingSiteVisits = () => {
  return (
    <div className="min-h-screen bg-background">
      <AnimatedBackground />
      <Navigation />
      
      <InnovatorHero
        title="Scouting & Site Visits"
        subtitle="Discovering and evaluating tourism innovation opportunities across Mombasa"
        backgroundImage={scouting1}
      />
      
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-2 gap-16 mb-16">
            {/* Scouting Section */}
            <div>
              <div className="flex items-center mb-6">
                <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-foreground">Scouting</h2>
              </div>
              
              <img 
                src={scouting2} 
                alt="Business scouting and discovery process"
                className="rounded-lg shadow-lg mb-6"
              />
              
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Scouting is a critical component of the Mombasa Tourism Innovation Lab's strategy to rejuvenate the local tourism sector. The process involves actively seeking out new and existing businesses within Mombasa that show potential for innovation and growth in the tourism industry.
              </p>
              
              <div className="bg-card p-6 rounded-lg">
                <h4 className="font-semibold text-foreground mb-3">Key Focus Areas:</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-primary mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Youth and women-led initiatives
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-primary mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Scalable business models
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-primary mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Job creation potential
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-primary mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Digitization capacity
                  </li>
                </ul>
              </div>
            </div>

            {/* Site Visits Section */}
            <div>
              <div className="flex items-center mb-6">
                <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-foreground">Site Visits</h2>
              </div>
              
              <img 
                src={sitevisit1} 
                alt="On-site business evaluation and assessment"
                className="rounded-lg shadow-lg mb-6"
              />
              
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Site visits are an integral part of the Mombasa Tourism Innovation Lab's evaluation and support process. After shortlisting and interviewing potential candidates, the Lab conducts thorough site visits to gain a deeper understanding of each business's operations and potential.
              </p>
              
              <div className="bg-card p-6 rounded-lg">
                <h4 className="font-semibold text-foreground mb-3">Evaluation Process:</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-primary mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Infrastructure assessment
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-primary mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Team evaluation
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-primary mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Implementation observation
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-primary mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Growth potential analysis
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">Uncovering Hidden Gems</h3>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-4xl mx-auto">
              This hands-on approach ensures that selected businesses not only meet the Lab's rigorous criteria but also demonstrate genuine capacity for growth and innovation. Site visits provide valuable insights that inform the final selection of participants for the incubation program, supporting ventures well-positioned to contribute to Mombasa's sustainable tourism development.
            </p>
          </div>
        </div>
        
        <Partners />
        <Footer />
      </div>
    </div>
  );
};

export default ScoutingSiteVisits;
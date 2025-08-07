import training1 from '@/assets/training/training1.jpg';
import training2 from '@/assets/training/training2.jpg';
import Navigation from '@/components/Navigation';
import InnovatorHero from '@/components/InnovatorHero';
import AnimatedBackground from '@/components/AnimatedBackground';
import Partners from '@/components/Partners';
import Footer from '@/components/Footer';

const TrainingMentorship = () => {
  return (
    <div className="min-h-screen bg-background">
      <AnimatedBackground />
      <Navigation />
      
      <InnovatorHero
        title="Training & Mentorship"
        subtitle="Empowering entrepreneurs through comprehensive skill development and guidance"
        backgroundImage={training1}
      />
      
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative">
              <img 
                src={training2} 
                alt="Professional training and mentorship session"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Comprehensive Skill Development</h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Training and mentorship are cornerstone components of the Mombasa Tourism Innovation Lab's efforts to empower local tourism entrepreneurs. Recognizing the need for comprehensive skill development, the Lab partners with institutions like Muranga University to offer rigorous training programs.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                These programs cover essential areas such as product development, business acumen, digitization, and strategic marketing, equipping participants with the knowledge and tools needed to thrive in a competitive global market.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="bg-card p-8 rounded-lg shadow-lg">
              <div className="flex items-center mb-6">
                <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-foreground">Structured Training</h3>
              </div>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-primary mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Product Development
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-primary mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Business Acumen
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-primary mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Digital Transformation
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-primary mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Strategic Marketing
                </li>
              </ul>
            </div>

            <div className="bg-card p-8 rounded-lg shadow-lg">
              <div className="flex items-center mb-6">
                <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM9 3a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-foreground">Personal Mentorship</h3>
              </div>
              <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                Mentorship plays an equally vital role, providing personalized guidance and support from experienced industry professionals.
              </p>
              <p className="text-muted-foreground">
                Mentors help entrepreneurs navigate challenges, refine their business strategies, and leverage opportunities for growth through one-on-one sessions and ongoing support.
              </p>
            </div>
          </div>

          <div className="text-center bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">Continuous Learning Culture</h3>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-4xl mx-auto">
              This combination of structured training and one-on-one mentorship ensures that each participant can effectively develop and scale their tourism innovations. By fostering a culture of continuous learning and professional development, the Mombasa Tourism Innovation Lab enhances individual business capabilities and contributes to the overall resilience and dynamism of Mombasa's tourism sector.
            </p>
          </div>
        </div>
        
        <Partners />
        <Footer />
      </div>
    </div>
  );
};

export default TrainingMentorship;
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Partners from '@/components/Partners';
import { Users, Target, Heart, Globe, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const About = () => {
  const partners = [
    'Global Development Incubator',
    'Swahilipot Foundation', 
    'Muranga University',
    'Mombasa County Government'
  ];

  const achievements = [
    { number: '6', label: 'Selected Enterprises' },
    { number: '50+', label: 'Tourism Startups' },
    { number: '200+', label: 'Youth Trained' },
    { number: '15', label: 'Partner Organizations' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-ocean text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Mombasa Tourism Innovation Lab
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Rejuvenating and diversifying Kenya's largest coastal tourism destination through innovation and community engagement
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg mx-auto text-muted-foreground">
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-6">About Mombasa Tourism Innovation Lab</h2>
              <p className="text-lg leading-relaxed mb-6">
                The Mombasa Tourism Innovation Lab is an ambitious initiative designed to rejuvenate and diversify the tourism landscape of Mombasa, the largest coastal destination in Kenya. Recognizing the need for fresh and dynamic tourism products, this project aims to coordinate the incubation and refinement of innovative ideas within the sector. By engaging local businesses and fostering the development of niche tourism products, the Lab strives to create sustainable economic growth and employment opportunities, particularly for the youth. Through a meticulous selection process, the Lab identifies promising tourism enterprises and provides them with essential training in areas such as formalization, distribution, and niche product development.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-6">Driving Innovation and Inclusivity</h2>
              <p className="text-lg leading-relaxed mb-6">
                Central to the Lab's mission is the support of grassroots organizations and innovative business models that emphasize inclusivity and diversification. In a recent call for proposals, the Lab sought contributions from local tourism and cultural heritage organizations, with a focus on SME scalability and youth/women-led groups. This approach not only fosters diversity and entrepreneurship but also ensures that the tourism sector reflects the rich cultural heritage and innovative spirit of Mombasa. The rigorous selection process, which included interviews and site visits, culminated in the selection of six standout enterprises that exemplify the Lab's vision of sustainable and inclusive tourism.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-6">Empowering Local Innovators</h2>
              <p className="text-lg leading-relaxed mb-6">
                In partnership with the Global Development Incubator and Swahilipot Foundation, the Lab has established a robust framework for empowering local innovators. Strategic grants and partnerships, such as those with Muranga University, provide rigorous training programs in product development and business acumen. This educational support is crucial for equipping local entrepreneurs with the skills needed to thrive in a digitally-connected global tourism market. The Lab's initiatives, including familiarization trips for travel buyers and county officials, have successfully showcased the enhanced tourist experiences created by these innovators. This collaborative effort has not only boosted Mombasa's appeal as a premier destination but also set the stage for continued economic growth and cultural preservation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">Our Impact</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">{achievement.number}</div>
                <div className="text-muted-foreground">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Partners />
      <Footer />
    </div>
  );
};

export default About;
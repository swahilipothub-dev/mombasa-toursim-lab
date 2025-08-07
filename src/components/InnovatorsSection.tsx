
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Camera, Utensils, Waves, Palette, Globe, TreePine } from 'lucide-react';
import mombasaCultural1 from '@/assets/innovators/mombasa-cultural1.jpg';
import sitevisit1 from '@/assets/scoutingSitevisits/sitevisit1.jpg';
import umojaWaPwani1 from '@/assets/innovators/umoja-wa-pwani1.jpg';

const InnovatorsSection = () => {
  const innovators = [
    {
      id: 1,
      name: 'African Food Trail',
      description: 'Immerse yourself in the vibrant flavours and rich culture of Mombasa with comprehensive culinary experiences through four-hour street food tours and cooking classes.',
      icon: Utensils,
      slug: 'african-food-trail',
      highlight: 'All-female guided culinary tours'
    },
    {
      id: 2,
      name: 'Big Ship',
      description: 'Join transformative eco-tourism adventures in Mombasa\'s mangrove ecosystems with educational tours, mud baths, and conservation activities since 2010.',
      icon: Waves,
      slug: 'big-ship',
      highlight: 'Environmental education & conservation'
    },
    {
      id: 3,
      name: 'K-Lenses',
      description: 'Photography studio providing training and mentorship to young aspiring photographers while capturing the unique culture of Mombasa through food, clothing, and architecture.',
      icon: Camera,
      slug: 'k-lenses',
      highlight: 'Youth photography training'
    },
    {
      id: 4,
      name: 'Mombasa Cultural Village',
      description: 'Vibrant showcase of Kenya\'s diverse tribal heritage representing 11 tribes through traditional dances, artifacts, beadwork, and reconstructed tribal houses.',
      icon: Globe,
      image: mombasaCultural1,
      slug: 'mombasa-cultural-village',
      highlight: 'Cultural preservation & education'
    },
    {
      id: 5,
      name: 'Studio Bella Bella',
      description: 'Creative oasis in Bamburi offering artistic services including art classes, pottery, and photography under the innovative project \'Sanaa Kivulini.\'',
      icon: Palette,
      image: sitevisit1,
      slug: 'studio-bella-bella',
      highlight: 'Community art hub'
    },
    {
      id: 6,
      name: 'Umoja wa Pwani',
      description: 'Explore the rich cultural tapestry of the Swahili people with traditional houses, artifacts, cultural demonstrations, and unique noodle-making experiences.',
      icon: TreePine,
      image: umojaWaPwani1,
      slug: 'umoja-wa-pwani',
      highlight: 'Swahili cultural immersion'
    }
  ];

  return (
    <section id="innovators" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Our <span className="bg-gradient-ocean bg-clip-text text-transparent">Innovators</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Meet the six standout enterprises that exemplify our vision of sustainable and inclusive tourism, 
            each contributing to Mombasa's rich cultural heritage and innovative spirit.
          </p>
        </div>

        {/* Innovators Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {innovators.map((innovator) => {
            const Icon = innovator.icon;
            return (
              <Card key={innovator.id} className="group hover:shadow-ocean transition-all duration-300 hover:-translate-y-2 border-0 bg-white overflow-hidden">
                <CardContent className="p-0">
                  {innovator.image ? (
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={innovator.image} 
                        alt={innovator.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ) : (
                    <div className="h-48 bg-gradient-ocean flex items-center justify-center">
                      <Icon className="h-16 w-16 text-white" />
                    </div>
                  )}
                  
                  <div className="p-8">
                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {innovator.name}
                    </h3>
                    
                    <div className="mb-4">
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">
                        {innovator.highlight}
                      </span>
                    </div>
                    
                    <p className="text-muted-foreground mb-6 leading-relaxed line-clamp-4">
                      {innovator.description}
                    </p>

                    <Link to={`/innovators/${innovator.slug}`}>
                      <Button variant="ocean" className="w-full">
                        Learn More
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-ocean rounded-2xl p-8 lg:p-12 text-white">
          <h3 className="text-2xl lg:text-3xl font-bold mb-4">
            Supporting Local Innovation
          </h3>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Through our rigorous selection process, including interviews and site visits, we've identified these 
            exceptional enterprises that contribute to sustainable and inclusive tourism in Mombasa.
          </p>
          <Link to="/innovators">
            <Button variant="hero" size="lg" className="bg-white/20 hover:bg-white/30">
              View All Innovators
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default InnovatorsSection;
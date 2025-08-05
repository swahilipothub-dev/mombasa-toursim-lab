
import { Users, Target, Heart, Globe } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Driving Innovation and Inclusivity',
      description: 'Central to the Lab\'s mission is the support of grassroots organizations and innovative business models that emphasize inclusivity and diversification. We focus on SME scalability and youth/women-led groups.'
    },
    {
      icon: Heart,
      title: 'Cultural Heritage',
      description: 'Fostering diversity and entrepreneurship while ensuring that the tourism sector reflects the rich cultural heritage and innovative spirit of Mombasa through rigorous selection processes.'
    },
    {
      icon: Globe,
      title: 'Empowering Local Innovators',
      description: 'In partnership with the Global Development Incubator and Swahilipot Foundation, we provide training programs in product development and business acumen for the digital tourism market.'
    }
  ];


  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            About <span className="bg-gradient-ocean bg-clip-text text-transparent">Tourism Lab</span>
          </h2>
        </div>

        {/* Brief Description */}
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            The Mombasa Tourism Innovation Lab is an ambitious initiative designed to rejuvenate and diversify the tourism landscape of Mombasa, the largest coastal destination in Kenya. Recognizing the need for fresh and dynamic tourism products, this project aims to coordinate the incubation and refinement of innovative ideas within the sector.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            By engaging local businesses and fostering the development of niche tourism products, the Lab strives to create sustainable economic growth and employment opportunities, particularly for the youth. Through a meticulous selection process, the Lab identifies promising tourism enterprises and provides them with essential training in areas such as formalization, distribution, and niche product development.
          </p>
        </div>

        {/* Values Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <Card key={index} className="group hover:shadow-ocean transition-all duration-300 hover:-translate-y-2 border-0 bg-white">
                <CardContent className="p-8 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-ocean rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Impact Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-6">
              Our Impact
            </h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Strategic grants and partnerships, such as those with Muranga University, provide rigorous training programs in product development and business acumen. This educational support is crucial for equipping local entrepreneurs with the skills needed to thrive in a digitally-connected global tourism market.
              </p>
              <p>
                The Lab's initiatives, including familiarization trips for travel buyers and county officials, have successfully showcased the enhanced tourist experiences created by these innovators. This collaborative effort has not only boosted Mombasa's appeal as a premier destination but also set the stage for continued economic growth and cultural preservation.
              </p>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-[4/3] bg-gradient-ocean rounded-2xl p-8 text-white">
              <div className="text-center">
                <Users className="h-16 w-16 mx-auto mb-4 opacity-80" />
                <h4 className="text-2xl font-bold mb-2">6</h4>
                <p className="text-white/90">Selected Enterprises</p>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="text-center">
                  <div className="text-xl font-bold">100+</div>
                  <div className="text-sm text-white/80">Jobs Created</div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-bold">50+</div>
                  <div className="text-sm text-white/80">Businesses Supported</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

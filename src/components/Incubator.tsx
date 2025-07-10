import { Lightbulb, TrendingUp, Award, Rocket, ExternalLink, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Incubator = () => {
  const startups = [
    {
      id: 1,
      name: 'EcoTours Kenya',
      founder: 'Sarah Mwalimu',
      stage: 'Series A',
      description: 'Sustainable wildlife tours using solar-powered vehicles and local community guides.',
      category: 'Eco-Tourism',
      raised: '$250K',
      impact: '500+ sustainable tours'
    },
    {
      id: 2,
      name: 'SwahiliStay',
      founder: 'Ahmed Bakari',
      stage: 'Seed',
      description: 'Authentic homestay platform connecting travelers with Swahili families.',
      category: 'Accommodation',
      raised: '$120K',
      impact: '200+ host families'
    },
    {
      id: 3,
      name: 'Ocean Quest VR',
      founder: 'Priya Patel',
      stage: 'MVP',
      description: 'Virtual reality experiences of coral reef diving and marine conservation.',
      category: 'Technology',
      raised: '$75K',
      impact: '50+ VR installations'
    }
  ];

  const programs = [
    {
      title: 'Startup Accelerator',
      description: 'Intensive 3-month program for early-stage tourism startups with mentorship and funding opportunities.',
      duration: '3 months',
      funding: 'Up to $50K',
      icon: Rocket
    },
    {
      title: 'Innovation Workshops',
      description: 'Monthly workshops on design thinking, digital marketing, and sustainable tourism practices.',
      duration: 'Monthly',
      funding: 'Free',
      icon: Lightbulb
    },
    {
      title: 'Mentorship Network',
      description: 'Connect with experienced entrepreneurs, tourism industry experts, and international investors.',
      duration: 'Ongoing',
      funding: 'Free',
      icon: Users
    }
  ];

  const getStageColor = (stage: string) => {
    const colors = {
      'MVP': 'bg-muted text-muted-foreground',
      'Seed': 'bg-secondary text-secondary-foreground',
      'Series A': 'bg-primary text-primary-foreground'
    };
    return colors[stage as keyof typeof colors] || 'bg-muted text-muted-foreground';
  };

  return (
    <section id="incubator" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Startup <span className="bg-gradient-sunset bg-clip-text text-transparent">Incubator</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Empowering the next generation of tourism innovators. From idea to scale, 
            we provide the resources, mentorship, and community to turn your vision into reality.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">50+</div>
            <div className="text-muted-foreground">Startups Supported</div>
          </div>
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold text-secondary mb-2">$2M+</div>
            <div className="text-muted-foreground">Total Funding Raised</div>
          </div>
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold text-accent mb-2">85%</div>
            <div className="text-muted-foreground">Success Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">200+</div>
            <div className="text-muted-foreground">Jobs Created</div>
          </div>
        </div>

        {/* Featured Startups */}
        <div className="mb-16">
          <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-8 text-center">
            Success Stories
          </h3>
          <div className="grid lg:grid-cols-3 gap-8">
            {startups.map((startup) => (
              <Card key={startup.id} className="group hover:shadow-coral transition-all duration-300 hover:-translate-y-2 border-0 bg-white">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStageColor(startup.stage)}`}>
                      {startup.stage}
                    </span>
                    <span className="text-xs text-muted-foreground px-3 py-1 bg-muted rounded-full">
                      {startup.category}
                    </span>
                  </div>

                  <h4 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {startup.name}
                  </h4>
                  
                  <p className="text-sm text-muted-foreground mb-4">
                    Founded by {startup.founder}
                  </p>

                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {startup.description}
                  </p>

                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Funding Raised:</span>
                      <span className="font-semibold text-foreground">{startup.raised}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Impact:</span>
                      <span className="font-semibold text-foreground">{startup.impact}</span>
                    </div>
                  </div>

                  <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Programs */}
        <div className="mb-16">
          <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-8 text-center">
            Our Programs
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {programs.map((program, index) => {
              const Icon = program.icon;
              return (
                <Card key={index} className="group hover:shadow-ocean transition-all duration-300 hover:-translate-y-2 border-0 bg-white">
                  <CardContent className="p-8 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-ocean rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    
                    <h4 className="text-xl font-semibold text-foreground mb-4">
                      {program.title}
                    </h4>
                    
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {program.description}
                    </p>

                    <div className="space-y-2 mb-6">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">Duration:</span>
                        <span className="font-semibold text-foreground">{program.duration}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">Investment:</span>
                        <span className="font-semibold text-foreground">{program.funding}</span>
                      </div>
                    </div>

                    <Button variant="ocean" className="w-full">
                      Apply Now
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-sunset rounded-2xl p-8 lg:p-12 text-white">
          <Award className="h-16 w-16 mx-auto mb-6 opacity-90" />
          <h3 className="text-2xl lg:text-3xl font-bold mb-4">
            Ready to Launch Your Tourism Startup?
          </h3>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Join our community of innovators and turn your tourism idea into a thriving business. 
            Applications for our next accelerator cohort are now open.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" className="bg-white/20 hover:bg-white/30">
              <TrendingUp className="mr-2 h-5 w-5" />
              Apply to Accelerator
            </Button>
            <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
              Download Pitch Deck Template
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Incubator;
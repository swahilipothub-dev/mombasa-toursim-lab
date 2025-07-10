import { Users, Target, Heart, Globe } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To foster innovative tourism solutions that celebrate Mombasa\'s rich cultural heritage while creating sustainable economic opportunities for local communities.'
    },
    {
      icon: Heart,
      title: 'Our Vision',
      description: 'A thriving coastal tourism ecosystem where tradition meets innovation, empowering local entrepreneurs and enriching visitor experiences.'
    },
    {
      icon: Globe,
      title: 'Our Impact',
      description: 'Connecting global travelers with authentic Swahili culture while supporting local startups and preserving our coastal heritage.'
    }
  ];

  const team = [
    { name: 'Peter Kibe', role: 'Director & Cultural Heritage Expert', background: 'bg-primary' },
    { name: 'Omar Kimathi', role: 'Innovation Lead & Tech Strategist', background: 'bg-secondary' },
    { name: 'Fatuma Ali', role: 'Community Engagement Manager', background: 'bg-accent' },
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            About <span className="bg-gradient-ocean bg-clip-text text-transparent">Tourism Lab</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            The Mombasa Tourism Lab is where ancient Swahili wisdom meets modern innovation. 
            We're building bridges between our rich cultural heritage and cutting-edge tourism solutions.
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

        {/* Story Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-6">
              Our Story
            </h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Born from the vibrant streets of Old Town Mombasa, our Tourism Lab emerged from a simple 
                belief: that innovation and tradition can dance together like the dhows on the Indian Ocean.
              </p>
              <p>
                Founded in 2023, we began as a grassroots initiative to support local tourism entrepreneurs 
                while preserving the authentic Swahili culture that makes Mombasa magical. Today, we're a 
                thriving hub of creativity, sustainability, and cultural pride.
              </p>
              <p>
                From startups developing eco-friendly tour solutions to community projects celebrating our 
                maritime heritage, we're writing the next chapter of Mombasa's tourism story.
              </p>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-[4/3] bg-gradient-ocean rounded-2xl p-8 text-white">
              <div className="text-center">
                <Users className="h-16 w-16 mx-auto mb-4 opacity-80" />
                <h4 className="text-2xl font-bold mb-2">50+</h4>
                <p className="text-white/90">Startups Supported</p>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="text-center">
                  <div className="text-xl font-bold">200+</div>
                  <div className="text-sm text-white/80">Community Members</div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-bold">15</div>
                  <div className="text-sm text-white/80">Partner Organizations</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Team */}
        <div className="text-center">
          <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-12">Meet Our Team</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="group">
                <div className={`aspect-square ${member.background} rounded-full mb-4 mx-auto w-32 h-32 flex items-center justify-center group-hover:scale-105 transition-transform duration-300`}>
                  <Users className="h-16 w-16 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-foreground">{member.name}</h4>
                <p className="text-muted-foreground">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
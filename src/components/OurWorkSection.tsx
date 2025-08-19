import {
  Search,
  MapPin,
  GraduationCap,
  Rocket,
  Link as LinkIcon,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const OurWorkSection = () => {
  const workProcesses = [
    {
      id: 1,
      title: "Scouting",
      description:
        "Actively seeking out new and existing businesses within Mombasa that show potential for innovation and growth in the tourism industry, with emphasis on grassroots ideas and inclusive business models.",
      icon: Search,
      slug: "ourwork/scouting-site-visits",
      step: "01",
    },
    {
      id: 2,
      title: "Site Visits",
      description:
        "Conducting thorough site visits to gain deeper understanding of each business's operations, assessing practicality and impact of proposed tourism innovations in real-world settings.",
      icon: MapPin,
      slug: "ourwork/scouting-site-visits",
      step: "02",
    },
    {
      id: 3,
      title: "Training & Mentorship",
      description:
        "Partnering with institutions like Muranga University to offer rigorous training programs covering product development, business acumen, digitization, and strategic marketing.",
      icon: GraduationCap,
      slug: "ourwork/training-mentorship",
      step: "03",
    },
    {
      id: 4,
      title: "Incubation",
      description:
        "Intensive incubation program providing comprehensive training on strategic areas essential for scaling, such as formalizing operations and developing niche tourism offerings.",
      icon: Rocket,
      slug: "ourwork/incubation",
      step: "04",
    },
    {
      id: 5,
      title: "Linkages",
      description:
        "Creating strategic linkages and partnerships with key stakeholders, facilitating opportunities for local businesses to connect with travel buyers and county officials.",
      icon: LinkIcon,
      slug: "ourwork/linkages",
      step: "05",
    },
  ];

  return (
    <section id="our-work" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Our{" "}
            <span className="bg-gradient-sunset bg-clip-text text-transparent">
              Work Process
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From identifying promising ventures to scaling successful
            businesses, our comprehensive approach ensures sustainable growth
            and meaningful impact in Mombasa's tourism sector.
          </p>
        </div>

        {/* Work Process Flow */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {workProcesses.map((process, index) => {
            const Icon = process.icon;
            return (
              <Card
                key={process.id}
                className="group hover:shadow-coral transition-all duration-300 hover:-translate-y-2 border-0 bg-white relative overflow-hidden"
              >
                <CardContent className="p-8">
                  {/* Step Number */}
                  <div className="absolute top-4 right-4 text-6xl font-bold text-primary/10 leading-none">
                    {process.step}
                  </div>

                  <div className="relative z-10">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-sunset rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="h-8 w-8 text-white" />
                    </div>

                    <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                      {process.title}
                    </h3>

                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {process.description}
                    </p>

                    <Link to={`/${process.slug}`}>
                      <Button
                        variant="outline"
                        className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                      >
                        Learn More
                      </Button>
                    </Link>
                  </div>
                </CardContent>

                {/* Connector Line for larger screens */}
                {index < workProcesses.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-primary/30 transform -translate-y-1/2 z-20">
                    <div className="absolute right-0 top-1/2 transform translate-x-1 -translate-y-1/2 w-2 h-2 bg-primary/30 rounded-full"></div>
                  </div>
                )}
              </Card>
            );
          })}
        </div>

        {/* Additional Services */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="group hover:shadow-ocean transition-all duration-300 border-0 bg-gradient-ocean text-white">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Subgranting</h3>
              <p className="text-white/90 mb-6 leading-relaxed">
                Providing targeted financial support to selected businesses and
                initiatives that demonstrate strong potential for impact and
                scalability, empowering grassroots organizations and SMEs.
              </p>
              <Link to="/subgranting">
                <Button
                  variant="hero"
                  className="bg-white/20 hover:bg-white/30"
                >
                  Explore Subgranting
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-coral transition-all duration-300 border-0 bg-white">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Partnership Network
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Building robust support networks through partnerships with
                Global Development Incubator, Swahilipot Foundation, and
                academic institutions for comprehensive ecosystem development.
              </p>
              <Link to="/about">
                <Button variant="ocean" className="w-full">
                  Learn About Partnerships
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-white rounded-2xl p-8 lg:p-12 shadow-lg">
          <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
            Join Our Innovation Ecosystem
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Whether you're an emerging entrepreneur or an established business
            looking to innovate, our comprehensive support system is designed to
            help you succeed in Mombasa's tourism sector.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/impacts">
              <Button variant="coral" size="lg">
                View Our Impact
              </Button>
            </Link>
            <Link to="/about">
              <Button variant="outline" size="lg">
                Learn More About Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurWorkSection;

import { MapPin, Clock, Star, Camera } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import fortJesusWebP from '@/assets/fort-jesus.webp';
import fortJesusJPG from '@/assets/fort-jesus.jpg';
import oldTownWebP from '@/assets/old-town.webp';
import oldTownJPG from '@/assets/old-town.jpg';
import dianiBeachWebP from '@/assets/diani-beach.webp';
import dianiBeachJPG from '@/assets/diani-beach.jpg';

const Destinations = () => {
  const destinations = [
    {
      id: 1,
      name: 'Fort Jesus',
  image: { webp: fortJesusWebP, jpg: fortJesusJPG },
      description: 'A UNESCO World Heritage site, this 16th-century Portuguese fortress offers breathtaking views and rich history.',
      location: 'Mombasa Island',
      duration: '2-3 hours',
      rating: 4.8,
      highlights: ['Historical Architecture', 'Museum Collections', 'Ocean Views', 'Cultural Tours']
    },
    {
      id: 2,
      name: 'Old Town Mombasa',
  image: { webp: oldTownWebP, jpg: oldTownJPG },
      description: 'Wander through narrow streets lined with Swahili architecture, bustling markets, and authentic local cuisine.',
      location: 'Mombasa Island',
      duration: 'Half day',
      rating: 4.7,
      highlights: ['Swahili Architecture', 'Local Markets', 'Cultural Heritage', 'Street Food']
    },
    {
      id: 3,
      name: 'Diani Beach',
  image: { webp: dianiBeachWebP, jpg: dianiBeachJPG },
      description: 'Pristine white sands and crystal-clear turquoise waters make this one of the world\'s most beautiful beaches.',
      location: 'South Coast',
      duration: 'Full day',
      rating: 4.9,
      highlights: ['White Sand Beach', 'Water Sports', 'Coral Reefs', 'Sunset Views']
    }
  ];

  return (
    <section id="destinations" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Discover <span className="bg-gradient-sunset bg-clip-text text-transparent">Mombasa</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From ancient fortresses to pristine beaches, explore the diverse attractions that make 
            Mombasa a unique destination where history, culture, and natural beauty converge.
          </p>
        </div>

        {/* Destinations Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {destinations.map((destination) => (
            <Card key={destination.id} className="group overflow-hidden border-0 shadow-lg hover:shadow-coral transition-all duration-500 hover:-translate-y-3">
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img 
                  src={destination.image.webp}
                  srcSet={`${destination.image.webp} 1x, ${destination.image.jpg} 2x`}
                  alt={destination.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                
                {/* Rating Badge */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center">
                  <Star className="h-4 w-4 text-yellow-400 mr-1" />
                  <span className="text-sm font-semibold">{destination.rating}</span>
                </div>

                {/* Location */}
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="flex items-center mb-2">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span className="text-sm">{destination.location}</span>
                  </div>
                </div>
              </div>

              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {destination.name}
                </h3>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {destination.description}
                </p>

                {/* Duration */}
                <div className="flex items-center text-sm text-muted-foreground mb-4">
                  <Clock className="h-4 w-4 mr-2" />
                  <span>{destination.duration}</span>
                </div>

                {/* Highlights */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {destination.highlights.map((highlight, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>

                <Button variant="ocean" className="w-full group">
                  <Camera className="mr-2 h-4 w-4 group-hover:rotate-12 transition-transform" />
                  Explore Destination
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-ocean rounded-2xl p-8 lg:p-12 text-white">
          <h3 className="text-2xl lg:text-3xl font-bold mb-4">
            Ready to Explore More?
          </h3>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Join our guided tours and discover hidden gems that only locals know about. 
            Experience authentic Mombasa with our certified cultural guides.
          </p>
          <Button variant="hero" size="lg" className="bg-white/20 hover:bg-white/30">
            Book a Cultural Tour
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Destinations;
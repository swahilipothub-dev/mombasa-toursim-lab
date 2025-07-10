import { Calendar, MapPin, Users, ExternalLink } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Events = () => {
  const events = [
    {
      id: 1,
      title: 'Swahili Cultural Festival',
      date: '2024-08-15',
      time: '10:00 AM - 6:00 PM',
      location: 'Old Town Mombasa',
      attendees: 500,
      type: 'Cultural',
      description: 'Celebrate the rich Swahili heritage with traditional music, dance, cuisine, and artisan crafts.',
      featured: true
    },
    {
      id: 2,
      title: 'Tourism Innovation Summit',
      date: '2024-08-22',
      time: '9:00 AM - 5:00 PM',
      location: 'Sarova Whitesands',
      attendees: 200,
      type: 'Business',
      description: 'Connect with tourism innovators, investors, and startups shaping the future of coastal tourism.',
      featured: false
    },
    {
      id: 3,
      title: 'Dhow Building Workshop',
      date: '2024-08-28',
      time: '2:00 PM - 5:00 PM',
      location: 'Mombasa Marine National Park',
      attendees: 30,
      type: 'Workshop',
      description: 'Learn traditional dhow building techniques from master craftsmen and maritime heritage experts.',
      featured: false
    },
    {
      id: 4,
      title: 'Coastal Conservation Meetup',
      date: '2024-09-05',
      time: '6:00 PM - 8:00 PM',
      location: 'Bamburi Beach',
      attendees: 80,
      type: 'Community',
      description: 'Join environmentalists and community leaders discussing sustainable tourism and coral reef protection.',
      featured: false
    }
  ];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getEventTypeColor = (type: string) => {
    const colors = {
      'Cultural': 'bg-accent text-accent-foreground',
      'Business': 'bg-primary text-primary-foreground',
      'Workshop': 'bg-secondary text-secondary-foreground',
      'Community': 'bg-muted text-muted-foreground'
    };
    return colors[type as keyof typeof colors] || 'bg-muted text-muted-foreground';
  };

  const featuredEvent = events.find(event => event.featured);
  const upcomingEvents = events.filter(event => !event.featured);

  return (
    <section id="events" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Upcoming <span className="bg-gradient-ocean bg-clip-text text-transparent">Events</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Join our vibrant community at exciting events that celebrate culture, foster innovation, 
            and build connections in the tourism ecosystem.
          </p>
        </div>

        {/* Featured Event */}
        {featuredEvent && (
          <div className="mb-16">
            <Card className="overflow-hidden border-0 shadow-xl bg-gradient-ocean text-white">
              <CardContent className="p-8 lg:p-12">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="flex items-center mb-4">
                      <span className="px-3 py-1 bg-white/20 rounded-full text-sm font-medium backdrop-blur-sm">
                        Featured Event
                      </span>
                    </div>
                    
                    <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                      {featuredEvent.title}
                    </h3>
                    
                    <p className="text-white/90 mb-6 leading-relaxed">
                      {featuredEvent.description}
                    </p>

                    <div className="space-y-3 mb-8">
                      <div className="flex items-center text-white/90">
                        <Calendar className="h-5 w-5 mr-3" />
                        <span>{formatDate(featuredEvent.date)} • {featuredEvent.time}</span>
                      </div>
                      <div className="flex items-center text-white/90">
                        <MapPin className="h-5 w-5 mr-3" />
                        <span>{featuredEvent.location}</span>
                      </div>
                      <div className="flex items-center text-white/90">
                        <Users className="h-5 w-5 mr-3" />
                        <span>{featuredEvent.attendees} attendees expected</span>
                      </div>
                    </div>

                    <Button variant="hero" size="lg" className="bg-white/20 hover:bg-white/30">
                      Register Now
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </div>

                  <div className="relative">
                    <div className="aspect-square bg-white/10 rounded-2xl backdrop-blur-sm border border-white/20 flex items-center justify-center">
                      <Calendar className="h-24 w-24 text-white/60" />
                    </div>
                    <div className="absolute -top-4 -right-4 w-16 h-16 bg-accent rounded-full flex items-center justify-center animate-float">
                      <span className="text-sm font-bold text-white">
                        {new Date(featuredEvent.date).getDate()}
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Upcoming Events Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {upcomingEvents.map((event) => (
            <Card key={event.id} className="group hover:shadow-ocean transition-all duration-300 hover:-translate-y-2 border-0 bg-white">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getEventTypeColor(event.type)}`}>
                    {event.type}
                  </span>
                  <div className="text-right">
                    <div className="text-xl font-bold text-primary">
                      {new Date(event.date).getDate()}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {new Date(event.date).toLocaleDateString('en-US', { month: 'short' })}
                    </div>
                  </div>
                </div>

                <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {event.title}
                </h3>

                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {event.description}
                </p>

                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Users className="h-4 w-4 mr-2" />
                    <span>{event.attendees} expected</span>
                  </div>
                </div>

                <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="text-center bg-white rounded-2xl p-8 lg:p-12 shadow-lg">
          <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
            Never Miss an Event
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Subscribe to our newsletter and be the first to know about upcoming events, workshops, and community gatherings.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <Button variant="coral" className="whitespace-nowrap">
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;
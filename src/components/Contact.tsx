import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      value: 'info@mombasatourismlab.com',
      description: 'Get in touch for partnerships and inquiries'
    },
    {
      icon: Phone,
      title: 'Call Us',
      value: '+254 20 123 4567',
      description: 'Monday to Friday, 9AM - 6PM EAT'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      value: 'Old Town, Mombasa Island',
      description: 'Kenya, East Africa'
    }
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' }
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Get in <span className="bg-gradient-ocean bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to be part of Mombasa's tourism innovation story? Whether you're a traveler, entrepreneur, 
            or partner, we'd love to hear from you.
          </p>
        </div>

        <div className="space-y-8">
          {/* Contact Details */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <Card key={index} className="border-0 bg-white hover:shadow-ocean transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="flex items-center justify-center w-16 h-16 bg-gradient-ocean rounded-full mx-auto mb-4">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <h4 className="text-lg font-semibold text-foreground mb-2">
                      {info.title}
                    </h4>
                    <p className="text-primary font-medium mb-2">
                      {info.value}
                    </p>
                    <p className="text-muted-foreground text-sm">
                      {info.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Map and Social Media in Grid */}
          <div className="grid lg:grid-cols-2 gap-8">

            {/* Map Placeholder */}
            <Card className="border-0 shadow-lg bg-white overflow-hidden">
              <CardContent className="p-0">
                <div className="aspect-[4/3] relative">
                  <iframe
                    title="Find Us in Old Town"
                    src="https://www.google.com/maps?q=Old+Town,+Mombasa,+Kenya&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0, width: '100%', height: '100%', position: 'absolute', inset: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </CardContent>
            </Card>

            {/* Social Media */}
            <Card className="border-0 bg-white shadow-lg">
              <CardContent className="p-6 text-center">
                <h4 className="text-lg font-semibold text-foreground mb-4">
                  Follow Our Journey
                </h4>
                <div className="flex justify-center space-x-4">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={index}
                        href={social.href}
                        className="flex items-center justify-center w-12 h-12 bg-muted rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                        aria-label={social.label}
                      >
                        <Icon className="h-5 w-5" />
                      </a>
                    );
                  })}
                </div>
                <p className="text-muted-foreground text-sm mt-4">
                  Stay connected for updates, events, and inspiration
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
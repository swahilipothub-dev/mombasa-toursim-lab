import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import EbookDownload from '@/components/EbookDownload';
import { BookOpen, Download, Users, TrendingUp, Lightbulb, Target } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Resources = () => {
  const ebookFeatures = [
    {
      icon: Lightbulb,
      title: "50+ Business Ideas",
      description: "Comprehensive list of tourism business opportunities in Mombasa"
    },
    {
      icon: Target,
      title: "Market Analysis",
      description: "In-depth analysis of target markets and customer segments"
    },
    {
      icon: TrendingUp,
      title: "Growth Strategies",
      description: "Proven strategies for scaling your tourism business"
    },
    {
      icon: Users,
      title: "Case Studies",
      description: "Real success stories from local tourism entrepreneurs"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Mwangi",
      role: "Tourism Entrepreneur",
      quote: "This ebook gave me the confidence and knowledge to start my cultural tour business. The practical insights are invaluable."
    },
    {
      name: "James Ochieng",
      role: "Hotel Owner",
      quote: "The market analysis section helped me identify new opportunities I hadn't considered. Highly recommended!"
    },
    {
      name: "Fatima Hassan",
      role: "Tour Guide",
      quote: "As someone new to the industry, this ebook provided the perfect foundation to build my tourism business."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-16 pb-12 bg-gradient-ocean text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <BookOpen className="h-16 w-16 mb-6 opacity-90" />
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Tourism Business Ideas eBook
              </h1>
              <p className="text-lg md:text-xl opacity-90 mb-8">
                Unlock the potential of Mombasa's tourism industry with our comprehensive guide. 
                From startup ideas to scaling strategies, everything you need to succeed.
              </p>
              <div className="flex flex-wrap gap-4 text-sm opacity-90">
                <span className="flex items-center gap-2">
                  <Download className="h-4 w-4" />
                  Instant Download
                </span>
                <span className="flex items-center gap-2">
                  <BookOpen className="h-4 w-4" />
                  50+ Pages
                </span>
                <span className="flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  500+ Downloads
                </span>
              </div>
            </div>
            
            <div className="flex justify-center pt-12 lg:justify-end">
              <EbookDownload className="w-full max-w-md" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">What's Inside the eBook</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive insights and practical guidance for anyone looking to enter or expand in Mombasa's tourism sector.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ebookFeatures.map((feature, index) => (
              <Card key={index} className="text-center border-border hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-primary/10 rounded-full">
                      <feature.icon className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">What Our Readers Say</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Don't just take our word for it. Here's what tourism entrepreneurs are saying about our eBook.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-border">
                <CardContent className="pt-6">
                  <blockquote className="text-muted-foreground mb-4 italic">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="border-t border-border pt-4">
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Chapter Preview Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Chapter Overview</h2>
            <p className="text-muted-foreground">
              A sneak peek into what you'll discover in our comprehensive guide.
            </p>
          </div>
          
          <div className="space-y-4">
            {[
              "Chapter 1: Understanding Mombasa's Tourism Landscape",
              "Chapter 2: Identifying Your Niche Market",
              "Chapter 3: 50+ Proven Business Ideas",
              "Chapter 4: Building Your Business Plan", 
              "Chapter 5: Funding and Investment Strategies",
              "Chapter 6: Marketing Your Tourism Business",
              "Chapter 7: Scaling and Growth Tactics",
              "Chapter 8: Legal and Regulatory Requirements",
              "Chapter 9: Success Stories and Case Studies",
              "Chapter 10: Resources and Next Steps"
            ].map((chapter, index) => (
              <div key={index} className="flex items-center gap-4 p-4 bg-background border border-border rounded-lg">
                <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-semibold">
                  {index + 1}
                </div>
                <span className="text-foreground">{chapter}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Tourism Business?</h2>
          <p className="text-lg opacity-90 mb-8">
            Join hundreds of successful entrepreneurs who have used our guide to build thriving tourism businesses in Mombasa.
          </p>
          <EbookDownload 
            title="Get Your Free Copy Today"
            description="Enter your email below for instant access to the complete eBook"
            className="max-w-lg mx-auto bg-white"
          />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Resources;
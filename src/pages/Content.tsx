import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import InstagramEmbed from '@/components/InstagramEmbed';
import { Play, Instagram, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Content = () => {
  const instagramVideos = [
    "https://www.instagram.com/reel/DBMTTuStL4e/?igsh=Zm5tMXMzMm4xc3Iz",
    "https://www.instagram.com/reel/DBGgaCuI7DU/?igsh=MW8zNDdzMXJzbmE3ZQ==",
    "https://www.instagram.com/reel/DBCJajiOiPq/?igsh=MWh3eDhtbmpzaGMyNQ==",
    "https://www.instagram.com/reel/DAyeRK3tqum/?igsh=d3c4Y3Bvdmk2NjA1",
    "https://www.instagram.com/reel/DAxgyW-N4cP/?igsh=MWI3MTVqZ2lrYzF3aQ==",
    "https://www.instagram.com/reel/DAv4SV4N0mu/?igsh=MWs0ZTd3cDYxNnFzcg==",
    "https://www.instagram.com/reel/DAvJdvkNF-T/?igsh=MXg4OHdwZ2JuYWEwMw==",
    "https://www.instagram.com/reel/DAvAXSOILtk/?igsh=MW9ibzJsZHpiNjduZw==",
    "https://www.instagram.com/reel/DAu5rKkoQwM/?igsh=MWE1ZjBodWo5M3JseA==",
    "https://www.instagram.com/reel/DAs4_UJtqRU/?igsh=MXAxeXFwZDZwczRvYw==",
    "https://www.instagram.com/reel/DAswCY9teaF/?igsh=MW5zNnZwNmZjazQwMA==",
    "https://www.instagram.com/reel/DAskuVnicKG/?igsh=ODEzcWI4bnV3ZHc=",
    "https://www.instagram.com/reel/DAsU515NejD/?igsh=MXZwdnN1bWM1ZXZ0cQ==",
    "https://www.instagram.com/reel/DAqxHL7t5qk/?igsh=cTBraWg1OHVqdjEx",
    "https://www.instagram.com/reel/DApy0NGItFn/?igsh=MTU3M2NzbmxqaXRzcQ==",
    "https://www.instagram.com/reel/DApywPIi0Aq/?igsh=Nmowc3plcDdiMXA4",
    "https://www.instagram.com/reel/DAnvB1PNK6P/?igsh=NDV4MXRyYTBidWQ0",
    "https://www.instagram.com/reel/DAlj7jfCwH4/?igsh=MzBxeWt5am51c29o",
    "https://www.instagram.com/reel/DAlBSlNI1Eu/?igsh=MXE4MjdraGtzNHRnOA==",
    "https://www.instagram.com/reel/DAjY9gLAzzT/?igsh=MXMzeTZtdGU2Z3ZvaA=="
  ];

  const tiktokVideos = [
    "https://vm.tiktok.com/ZMhxmowgb/"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-16 pb-12 bg-gradient-ocean text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <Play className="mx-auto h-16 w-16 mb-6 opacity-90" />
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Content Creator Videos
            </h1>
            <p className="text-lg md:text-xl opacity-90 mb-8">
              Discover Mombasa's tourism innovation through the eyes of our content creators. 
              Watch inspiring stories, behind-the-scenes moments, and exciting developments from our lab.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" asChild>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <Instagram className="h-5 w-5" />
                  Follow on Instagram
                  <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Instagram Videos Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Latest Instagram Content</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Stay updated with our latest videos showcasing tourism innovations, 
              entrepreneur spotlights, and community impact stories.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {instagramVideos.map((url, index) => (
              <InstagramEmbed 
                key={index} 
                url={url} 
                className="h-full"
              />
            ))}
          </div>
        </div>
      </section>

      {/* TikTok Videos Section */}
      {tiktokVideos.length > 0 && (
        <section className="py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">TikTok Content</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Quick, engaging content showcasing the energy and creativity of our innovation lab.
              </p>
            </div>
            
            <div className="flex justify-center">
              <div className="bg-background rounded-lg border border-border p-6 text-center max-w-md">
                <Play className="mx-auto h-12 w-12 text-primary mb-4" />
                <h3 className="text-lg font-semibold mb-2">TikTok Content</h3>
                <p className="text-muted-foreground mb-4">
                  Check out our latest TikTok video for quick insights and fun content.
                </p>
                <Button variant="outline" asChild>
                  <a href={tiktokVideos[0]} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    View on TikTok
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Call to Action */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Create Content With Us</h2>
          <p className="text-lg opacity-90 mb-8">
            Are you a content creator interested in showcasing Mombasa's tourism innovation? 
            We'd love to collaborate with you.
          </p>
          <Button variant="secondary" size="lg">
            Get in Touch
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Content;
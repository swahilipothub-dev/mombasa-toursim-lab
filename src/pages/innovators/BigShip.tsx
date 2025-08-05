import Navigation from '@/components/Navigation';
import InnovatorHero from '@/components/InnovatorHero';
import AnimatedBackground from '@/components/AnimatedBackground';
import Partners from '@/components/Partners';
import Footer from '@/components/Footer';

const BigShip = () => {
  return (
    <div className="min-h-screen bg-background">
      <AnimatedBackground />
      <Navigation />
      
      <InnovatorHero
        title="Big Ship"
        subtitle="Transformative eco-tourism adventures in Mombasa's mangrove ecosystems"
        backgroundImage="https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=1920&h=1080&fit=crop&crop=center"
      />
      
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="prose prose-lg max-w-none">
            <div className="mb-8">
              <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                Join Big Ship for a transformative eco-tourism adventure in Mombasa's mangrove ecosystems. Since 2010, Big Ship has been at the forefront of environmental education and conservation, offering mangrove safaris that include educational tours, mud baths, and boat rides along Tudor Creek. Their programs emphasize sustainable interactions with the environment, highlighted by activities like tree planting to mitigate carbon emissions and preserve the natural beauty of the region.
              </p>
              
              <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                The Mombasa Tourism Innovation Lab has been instrumental in advancing Big Ship's initiatives, providing funding for marketing, website development, canoe construction, and educational materials. These resources have enhanced the quality and reach of their eco-tours, ensuring a more impactful and enlightening experience for all visitors. The trained local guides are equipped to share their knowledge and passion for conservation, making every tour both informative and enjoyable.
              </p>
              
              <p className="text-muted-foreground text-lg leading-relaxed">
                Big Ship's commitment to eco-tourism not only showcases the ecological importance of mangroves but also promotes active participation in environmental stewardship. Visitors to Big Ship leave with a lasting impression of the critical role they play in environmental conservation and the sustainable practices that can support it. For those dedicated to making a positive impact on the planet, Big Ship offers a unique and meaningful adventure that goes beyond typical tourism, into the heart of ecological preservation.
              </p>
            </div>
          </div>
        </div>
        
        <Partners />
        <Footer />
      </div>
    </div>
  );
};

export default BigShip;
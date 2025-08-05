import Navigation from "@/components/Navigation";
import InnovatorHero from "@/components/InnovatorHero";
import AnimatedBackground from "@/components/AnimatedBackground";
import Partners from "@/components/Partners";
import Footer from "@/components/Footer";

const AfricanFoodTrail = () => {
  return (
    <div className="min-h-screen bg-background">
      <AnimatedBackground />
      <Navigation />

      <InnovatorHero
        title="African Food Trail"
        subtitle="A culinary journey through Mombasa's vibrant food scene"
        backgroundImage="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&h=1080&fit=crop&crop=center"
      />

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="prose prose-lg max-w-none">
            <div className="mb-8">
              <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                Immerse yourself in the vibrant flavours and rich culture of
                Mombasa with The African Food Trail. This initiative offers a
                comprehensive culinary experience through its four-hour street
                food tours and cooking classes, where tourists can dive into the
                heart of Mombasa's food scene, supporting local businesses and
                exploring residential culinary practices.
              </p>

              <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                The journey extends to the lively Kongowea market, providing a
                genuine taste of local life and insights into the Muslim
                culture.
              </p>

              <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                The development and success of The African Food Trail have been
                propelled by the Mombasa Tourism Innovation Lab, which has
                provided essential resources for digital marketing and online
                presence enhancement. These improvements have helped solidify
                Mombasa's reputation as a top food destination and facilitated
                unique offerings such as the sunset cruises in Tudor Mangroves
                with Mombasa Dough, where tourists enjoy barbecued dinners
                amidst breathtaking views.
              </p>

              <p className="text-muted-foreground text-lg leading-relaxed">
                Guided by an all-female team, The African Food Trail offers a
                warm and personal introduction to Mombasa's culinary landscape.
                This tour is not just about food; it's a cultural immersion,
                offering participants a deeper connection with Mombasa's
                community and traditions. For food lovers and culturally curious
                tourists alike, The African Food Trail is a gateway to
                unforgettable experiences and flavours.
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

export default AfricanFoodTrail;

import umojaWaPwani1 from '@/assets/innovators/umoja-wa-pwani1.jpg';
import umojaWaPwani2 from '@/assets/innovators/umoja-wa-pwani2.jpg';
import umojaWaPwani3 from '@/assets/innovators/umoja-wa-pwani3.jpg';
import Navigation from "@/components/Navigation";
import InnovatorHero from "@/components/InnovatorHero";
import AnimatedBackground from "@/components/AnimatedBackground";
import Partners from "@/components/Partners";
import Footer from "@/components/Footer";

const UmojaWaPwani = () => {
  return (
    <div className="min-h-screen bg-background">
      <AnimatedBackground />
      <Navigation />

      <InnovatorHero
        title="Umoja wa Pwani"
        subtitle="Uniting coastal communities through sustainable tourism"
        backgroundImage={umojaWaPwani1}
      />

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="prose prose-lg max-w-none">
            <div className="mb-8">
              <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                Explore the rich cultural tapestry of the Swahili people with
                Umoja wa Pwani, located in the vibrant community of Changamwe.
                This cultural center showcases traditional Swahili houses filled
                with artifacts that illustrate the history and lifestyle of the
                Swahili people through captivating songs and cultural
                demonstrations. A standout feature for visitors is the unique
                experience of making traditional noodles using ancient tools
                such as the "Kinu cha thambi," a local noodle machine that
                exemplifies Swahili culinary traditions.
              </p>

              <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                Enhancements at Umoja wa Pwani have been significantly supported
                by the Mombasa Tourism Innovation Lab, which provided advanced
                machinery and digital marketing tools. These resources have
                allowed Umoja wa Pwani to preserve authentic cultural practices
                while improving efficiency and reaching a global audience
                through a newly launched website. This synergy of tradition and
                innovation offers visitors a deeper and more engaging
                exploration of Swahili culture.
              </p>

              <p className="text-muted-foreground text-lg leading-relaxed">
                Umoja wa Pwani invites cultural enthusiasts and curious
                travelers to immerse themselves in the Swahili way of life. The
                center not only serves as a bridge to the past but also as a
                beacon of cultural education, promoting understanding and
                appreciation of Kenya's coastal heritage. It is an essential
                visit for anyone eager to experience the profound cultural
                richness of the Swahili community.
              </p>
            </div>

            {/* Image Gallery */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
                Authentic Swahili Cultural Experiences
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                  <img
                    src={umojaWaPwani1}
                    alt="Traditional Swahili food preparation and culinary demonstrations"
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="p-4 bg-white">
                    <h3 className="font-semibold text-foreground">
                      Traditional Cuisine
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Authentic Swahili cooking using ancient tools
                    </p>
                  </div>
                </div>

                <div className="group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                  <img
                    src={umojaWaPwani2}
                    alt="Traditional textile weaving and cultural crafts demonstration"
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="p-4 bg-white">
                    <h3 className="font-semibold text-foreground">
                      Cultural Crafts
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Traditional weaving and textile making
                    </p>
                  </div>
                </div>

                <div className="group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 md:col-span-2 lg:col-span-1">
                  <img
                    src={umojaWaPwani3}
                    alt="Umoja wa Pwani community team and cultural ambassadors"
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="p-4 bg-white">
                    <h3 className="font-semibold text-foreground">
                      Community Team
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Dedicated cultural ambassadors and educators
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Partners />
        <Footer />
      </div>
    </div>
  );
};

export default UmojaWaPwani;

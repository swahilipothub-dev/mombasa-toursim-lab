import mombasaCultural1 from '@/assets/innovators/mombasa-cultural1.jpg';
import mombasaCultural2 from '@/assets/innovators/mombasa-cultural2.jpg';
import mombasaCultural3 from '@/assets/innovators/Mombasa-cultural3.png';
import Navigation from "@/components/Navigation";
import InnovatorHero from "@/components/InnovatorHero";
import AnimatedBackground from "@/components/AnimatedBackground";
import Partners from "@/components/Partners";
import Footer from "@/components/Footer";

const MombasaCulturalVillage = () => {
  return (
    <div className="min-h-screen bg-background">
      <AnimatedBackground />
      <Navigation />

      <InnovatorHero
        title="Mombasa Cultural Village"
        subtitle="Preserving and celebrating Mombasa's rich cultural heritage"
        backgroundImage={mombasaCultural1}
      />

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="prose prose-lg max-w-none">
            <div className="mb-12">
              <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                Established in 2022, the Mombasa Cultural Village is a vibrant
                showcase of Kenya's diverse tribal heritage, representing
                cultural elements from 11 tribes: Luo, Kamba, Maasai, Swahili,
                Kisii, Luhya, Kikuyu, Kalenjin, Taita, Turkana, and Mijikenda.
                Visitors can immerse themselves in Kenya's rich history through
                traditional dances, handmade artifacts, beadwork, and
                reconstructed tribal houses, which exemplify life in the
                precolonial era. This cultural centre not only celebrates the
                vibrant traditions of these tribes but also serves as a crucial
                educational platform, particularly for the youth.
              </p>

              <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                Thanks to the Mombasa Tourism Innovation Lab, the village has
                improved its infrastructure, including the repair of traditional
                thatched roofs, and enhanced its digital visibility through a
                new website. This partnership fosters cultural preservation and
                economic empowerment, especially among women, by providing
                numerous employment opportunities within the cultural sector.
              </p>

              <p className="text-muted-foreground text-lg leading-relaxed">
                The Mombasa Cultural Village invites global visitors to explore
                the rich tapestry of Kenya's tribal cultures. As the village
                plans expansions, including the introduction of native animals
                and additional furnishing of the huts, it promises a more
                dynamic and enriching cultural experience. Step into the vibrant
                world of Kenyan tribes at the Mombasa Cultural Village and
                celebrate the enduring spirit and heritage of its people.
              </p>
            </div>

            {/* Image Gallery */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
                Experience Our Cultural Heritage
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                  <img
                    src={mombasaCultural1}
                    alt="Traditional tribal huts and cultural artifacts at Mombasa Cultural Village"
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="p-4 bg-white">
                    <h3 className="font-semibold text-foreground">
                      Traditional Architecture
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Authentic tribal huts showcasing precolonial living
                    </p>
                  </div>
                </div>

                <div className="group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                  <img
                    src={mombasaCultural2}
                    alt="Women in traditional cultural dress with beadwork and jewelry"
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="p-4 bg-white">
                    <h3 className="font-semibold text-foreground">
                      Cultural Attire
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Traditional dress and handmade beadwork
                    </p>
                  </div>
                </div>

                <div className="group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 md:col-span-2 lg:col-span-1">
                  <img
                    src={mombasaCultural3}
                    alt="Traditional grain winnowing demonstration using woven baskets"
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="p-4 bg-white">
                    <h3 className="font-semibold text-foreground">
                      Traditional Practices
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Ancient farming and food preparation methods
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

export default MombasaCulturalVillage;

import sitevisit1 from '@/assets/scoutingSitevisits/sitevisit1.jpg';
import Navigation from "@/components/Navigation";
import InnovatorHero from "@/components/InnovatorHero";
import AnimatedBackground from "@/components/AnimatedBackground";
import Partners from "@/components/Partners";
import Footer from "@/components/Footer";

const StudioBellaBella = () => {
  return (
    <div className="min-h-screen bg-background">
      <AnimatedBackground />
      <Navigation />

      <InnovatorHero
        title="Studio Bella Bella"
        subtitle="Creative innovation in Mombasa's tourism landscape"
        backgroundImage={sitevisit1}
      />

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="prose prose-lg max-w-none">
            <div className="mb-8">
              <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                Studio BelaBela, nestled in the heart of Bamburi, stands as a
                beacon of creativity and artistic expression. This unique
                establishment offers a plethora of artistic services, including
                art classes, pottery, and photography, under the innovative
                project 'Sanaa Kivulini.' With the support of the Mombasa
                Tourism Innovation Lab, Studio BelaBela has enhanced its
                facilities with new equipment such as generators, tables,
                chairs, and pottery wheels, significantly enriching the creative
                experience offered.
              </p>

              <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                The studio not only fosters the creation of art but also serves
                as a showcase for local talent, providing a platform for artists
                to display and sell their work. The 'Sanaa Kivulini' project
                expands the studio's offerings to include regular art classes
                and private session rentals, establishing it as a vibrant
                community hub for creators and art lovers alike.
              </p>

              <p className="text-muted-foreground text-lg leading-relaxed">
                Visiting Studio BelaBela offers an unparalleled opportunity to
                delve into the world of art and design, where visitors can learn
                new skills or refine their techniques in a supportive
                environment. The studio's commitment to nurturing creativity
                makes it a must-visit destination for anyone looking to explore
                the artistic landscape of Bamburi. Discover the endless
                possibilities at Studio BelaBela, where each visit inspires and
                enriches your creative journey.
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

export default StudioBellaBella;

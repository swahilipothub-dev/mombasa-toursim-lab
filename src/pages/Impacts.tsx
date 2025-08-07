import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Partners from '@/components/Partners';
import InnovatorHero from '@/components/InnovatorHero';
import impactsHero from '@/assets/diani-beach.jpg';

const Impacts: React.FC = () => {

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <InnovatorHero
        title="Our Impact"
        subtitle="Transforming Mombasa's tourism landscape through innovation and community empowerment"
        backgroundImage={impactsHero}
      />



      {/* Content Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-foreground mb-8 text-center">Impact of Mombasa Tourism Innovation Lab</h1>
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              The Mombasa Tourism Innovation Lab has made a significant impact on the local tourism industry, driving economic revitalization and fostering job creation, particularly for the youth. By incubating and refining innovative tourism ideas, the Lab has breathed new life into Mombasa's tourism sector. This initiative has enabled businesses to scale up their operations, formalize their structures, and develop niche products that attract a diverse range of tourists. As a result, the Lab has contributed to the creation of numerous job opportunities, both directly and indirectly, within the hospitality and tourism industry.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Moreover, the Lab's emphasis on grassroots innovation and inclusivity has led to the empowerment of local communities. Organizations such as Big Ship and Umoja wa Pwani have expanded their eco-tourism and cultural preservation efforts, respectively, while ventures like the African Food Trail and Studio BelaBela have enriched Mombasa's culinary and artistic scenes. By supporting these and other innovative projects, the Lab has fostered a deeper appreciation of Mombasa's cultural heritage and diversified the tourism offerings available to visitors. The impact of these efforts is evident in the increased visitation to the region and the economic ripple effect benefiting the wider community.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              The collaboration with Muranga University has further amplified the Lab's impact by providing essential training to local tourism innovators. This educational support has equipped entrepreneurs with the skills needed to navigate the complexities of a global tourism market, ensuring their long-term success. The Lab's initiatives, such as familiarization trips for travel buyers and county officials, have effectively showcased the enhanced tourist experiences crafted by local innovators setting the stage for increased integration of these unique offerings into travel itineraries. As a result, Mombasa is now recognized not just for its natural beauty, but for its vibrant, innovative tourism experiences that honor both tradition and modernity. The Mombasa Tourism Innovation Lab continues to be a pivotal force in transforming the region into a premier destination, driving sustainable growth and celebrating the rich cultural tapestry of Mombasa.
            </p>
          </div>
        </div>
      </div>
      <Partners />
      <Footer />
    </div>
  );
};

export default Impacts;
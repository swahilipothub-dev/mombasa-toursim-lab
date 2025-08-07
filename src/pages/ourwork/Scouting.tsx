import Navigation from '@/components/Navigation';
import Partners from '../../components/Partners';
import Footer from '../../components/Footer';

export default function Scouting() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
        <Navigation />
      <section className="bg-gradient-to-r from-purple-50 to-purple-100 py-12 px-4 md:px-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-purple-900 mb-4">Scouting</h1>
          <p className="text-lg md:text-xl text-purple-800 mb-8">Discovering and nurturing innovative tourism businesses in Mombasa.</p>
        </div>
        <div className="max-w-3xl mx-auto text-gray-700 text-base md:text-lg space-y-6">
          <p>
            Scouting is a critical component of the Mombasa Tourism Innovation Lab's strategy to rejuvenate the local tourism sector. The process involves actively seeking out new and existing businesses within Mombasa that show potential for innovation and growth in the tourism industry. The Lab places a strong emphasis on identifying grassroots ideas and inclusive business models, particularly those led by youth and women.
          </p>
          <p>
            By evaluating these businesses on criteria such as their scalability, job creation potential, and capacity for digitization, the Lab ensures that the most promising ventures are selected for further development. This rigorous scouting process is designed to uncover hidden gems within the community, bringing diverse and innovative tourism products to the forefront and driving sustainable economic growth in Mombasa.
          </p>
        </div>
      </section>
      <div className="mt-12">
        <Partners />
      </div>
      <Footer />
    </div>
  );
}

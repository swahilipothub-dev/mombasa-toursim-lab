import Navigation from '@/components/Navigation';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface WorkCategoryTemplateProps {
  title: string;
  description: string;
  content: string;
  image: string;
  stats: { number: string; label: string }[];
}

const WorkCategoryTemplate = ({
  title,
  description,
  content,
  image,
  stats,
}: WorkCategoryTemplateProps) => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-ocean text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              {title}
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              {description}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="prose prose-lg text-muted-foreground">
                <div dangerouslySetInnerHTML={{ __html: content }} />
              </div>
            </div>
            <div className="relative rounded-xl overflow-hidden shadow-2xl">
              <img 
                src={image} 
                alt={title} 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">Our Impact</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-ocean text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Innovation Journey</h2>
          <p className="text-xl text-white/90 mb-8">
            Be part of Mombasa's tourism transformation. Connect with us to explore partnership opportunities.
          </p>
          <Link to="/contact">
            <Button variant="secondary" size="lg" className="group">
              Get Involved
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-primary-foreground/80">
            © 2024 Mombasa Tourism Lab. Celebrating coastal heritage, fostering innovation.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default WorkCategoryTemplate;
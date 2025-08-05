import Navigation from '@/components/Navigation';
import InnovatorHero from '@/components/InnovatorHero';
import AnimatedBackground from '@/components/AnimatedBackground';
import Partners from '@/components/Partners';
import Footer from '@/components/Footer';

const KLenses = () => {
  return (
    <div className="min-h-screen bg-background">
      <AnimatedBackground />
      <Navigation />
      
      <InnovatorHero
        title="K-Lenses"
        subtitle="Capturing Mombasa's culture through photography and empowering young photographers"
        backgroundImage="https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=1920&h=1080&fit=crop&crop=center"
      />
      
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="prose prose-lg max-w-none">
            <div className="mb-8">
              <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                K Lenses is a photography studio with a dual focus. They provide training and mentorship to young aspiring photographers, empowering them with the necessary skills to excel in the field.
              </p>
              
              <p className="text-muted-foreground text-lg leading-relaxed">
                Additionally, they capture the unique culture of Mombasa, showcasing its food, clothing, architecture, and cultural activities. K Lenses also engages in creating advertisements for roadside displays.
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

export default KLenses;
import { cn } from "@/lib/utils";

interface InnovatorHeroProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
  className?: string;
}

const InnovatorHero = ({ title, subtitle, backgroundImage, className }: InnovatorHeroProps) => {
  return (
    <section className={cn("relative h-[60vh] flex items-center justify-center overflow-hidden", className)}>
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />
      
      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 animate-fade-in">
          {title}
        </h1>
        <p className="text-xl md:text-2xl text-white/90 animate-fade-in">
          {subtitle}
        </p>
      </div>
    </section>
  );
};

export default InnovatorHero;
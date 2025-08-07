
import sttaLogo from '@/assets/partners/STTA-logo.png';
import ktbLogo from '@/assets/partners/kenya-tourism-board.png';
import swahilipothubLogo from '@/assets/partners/swahilipothub.png';
import mombasaCountyLogo from '@/assets/partners/mombasa-county-logo.png';

const Partners = () => {

  const partners = [
    {
      name: "Sustainable Travel and Tourism Africa - STTA",
      logo: sttaLogo,
    },
    {
      name: "Kenya Tourism Board - KTB", 
      logo: ktbLogo,
    },
    {
      name: "Swahilipothub Foundation",
      logo: swahilipothubLogo,
    },
    {
      name: "County Government of Mombasa",
      logo: mombasaCountyLogo,
    },
  ];

  return (
    <section className="py-16 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Our Partners</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We collaborate with leading organizations to drive innovation and sustainable tourism in Mombasa.
          </p>
        </div>

        <div className="overflow-hidden">
          <div className="flex animate-[slide-left_20s_linear_infinite] gap-12 items-center">
            {partners.concat(partners).map((partner, index) => (
              <div 
                key={index}
                className="flex items-center justify-center flex-shrink-0"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-h-16 w-auto transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
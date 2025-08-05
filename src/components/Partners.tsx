const Partners = () => {
  const partners = [
    {
      name: "Sustainable Travel and Tourism Africa - STTA",
      logo: "/partners/STTA-logo.png",
    },
    {
      name: "Kenya Tourism Board - KTB", 
      logo: "/partners/kenya-tourism-board.png",
    },
    {
      name: "Swahilipothub Foundation",
      logo: "/partners/swahilipothub.png",
    },
    {
      name: "County Government of Mombasa",
      logo: "/partners/mombasa-county-logo.png",
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
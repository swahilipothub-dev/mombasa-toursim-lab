import WorkCategoryTemplate from '@/components/WorkCategoryTemplate';
import incubationImage from '@/assets/diani-beach.jpg';

const Incubation = () => {
  const stats = [
    { number: '25+', label: 'Startups Incubated' },
    { number: '80%', label: 'Success Rate' },
    { number: '12', label: 'Mentors' },
    { number: '3', label: 'Incubation Cycles' }
  ];

  const content = `
    <h2 class="text-3xl font-bold text-foreground mb-6">Startup Incubation Program</h2>
    <p class="text-lg leading-relaxed mb-6">
      Our incubation program is designed to nurture and develop innovative tourism startups in Mombasa. 
      We provide a structured environment where entrepreneurs can transform their ideas into viable businesses.
    </p>
    
    <h3 class="text-2xl font-bold text-foreground mb-4 mt-8">What We Offer</h3>
    <ul class="list-disc pl-6 mb-6 space-y-2">
      <li>Dedicated workspace in our innovation hub</li>
      <li>Mentorship from industry experts</li>
      <li>Business development support</li>
      <li>Access to seed funding opportunities</li>
      <li>Networking with potential investors and partners</li>
      <li>Marketing and branding assistance</li>
    </ul>
    
    <h3 class="text-2xl font-bold text-foreground mb-4 mt-8">Incubation Process</h3>
    <p class="text-lg leading-relaxed mb-6">
      Our incubation process spans 6 months and includes three phases: ideation, development, and market entry. 
      Throughout this journey, startups receive personalized guidance, participate in workshops, and engage in 
      pitch sessions to refine their business models and prepare for market launch.
    </p>
    
    <h3 class="text-2xl font-bold text-foreground mb-4 mt-8">Success Stories</h3>
    <p class="text-lg leading-relaxed mb-6">
      Several startups have successfully graduated from our incubation program and are now thriving in the 
      tourism sector. These include eco-tourism ventures, cultural experience platforms, and innovative 
      hospitality services that showcase the unique charm of Mombasa while creating sustainable employment opportunities.
    </p>
  `;

  return (
    <WorkCategoryTemplate
      title="Incubation"
      description="Nurturing innovative tourism startups to transform Mombasa's tourism landscape"
      content={content}
      image={incubationImage}
      stats={stats}
    />
  );
};

export default Incubation;
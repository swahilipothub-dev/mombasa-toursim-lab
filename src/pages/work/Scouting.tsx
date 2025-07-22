import WorkCategoryTemplate from '@/components/WorkCategoryTemplate';
import scoutingImage from '@/assets/diani-beach.jpg';

const Scouting = () => {
  const stats = [
    { number: '120+', label: 'Ventures Scouted' },
    { number: '35', label: 'Communities Engaged' },
    { number: '18', label: 'Innovation Challenges' },
    { number: '40+', label: 'Hidden Gems Discovered' }
  ];

  const content = `
    <h2 class="text-3xl font-bold text-foreground mb-6">Talent & Innovation Scouting</h2>
    <p class="text-lg leading-relaxed mb-6">
      Our scouting initiatives identify promising tourism entrepreneurs, innovative ideas, and unique experiences 
      across Mombasa and the coastal region. We actively search for hidden gems and untapped potential that can 
      transform the tourism landscape and create authentic, memorable experiences for visitors.
    </p>
    
    <h3 class="text-2xl font-bold text-foreground mb-4 mt-8">Scouting Approaches</h3>
    <ul class="list-disc pl-6 mb-6 space-y-2">
      <li>Innovation challenges and competitions</li>
      <li>Community outreach programs</li>
      <li>Partnership with local associations</li>
      <li>Digital talent platforms</li>
      <li>University and vocational school collaborations</li>
      <li>Tourism sector mapping exercises</li>
    </ul>
    
    <h3 class="text-2xl font-bold text-foreground mb-4 mt-8">Selection Criteria</h3>
    <p class="text-lg leading-relaxed mb-6">
      We evaluate potential ventures based on innovation, sustainability, cultural authenticity, market potential, 
      and social impact. Our comprehensive assessment process ensures we identify entrepreneurs and ideas that not only 
      have commercial viability but also contribute positively to the local community and environment.
    </p>
    
    <h3 class="text-2xl font-bold text-foreground mb-4 mt-8">From Scouting to Support</h3>
    <p class="text-lg leading-relaxed mb-6">
      Once identified, promising ventures are connected to appropriate support mechanisms within our ecosystem, 
      including incubation, mentorship, funding opportunities, and market linkages. This creates a seamless pathway 
      from discovery to development, ensuring good ideas have the resources they need to flourish.
    </p>
  `;

  return (
    <WorkCategoryTemplate
      title="Scouting"
      description="Discovering and nurturing tourism talent and innovation across Mombasa"
      content={content}
      image={scoutingImage}
      stats={stats}
    />
  );
};

export default Scouting;
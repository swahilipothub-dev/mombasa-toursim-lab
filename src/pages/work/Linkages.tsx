import WorkCategoryTemplate from '@/components/WorkCategoryTemplate';
import linkagesImage from '@/assets/diani-beach.jpg';

const Linkages = () => {
  const stats = [
    { number: '30+', label: 'Partner Organizations' },
    { number: '45', label: 'Business Connections' },
    { number: '12', label: 'International Partners' },
    { number: '8', label: 'Industry Networks' }
  ];

  const content = `
    <h2 class="text-3xl font-bold text-foreground mb-6">Strategic Linkages & Partnerships</h2>
    <p class="text-lg leading-relaxed mb-6">
      Our linkages program connects local tourism entrepreneurs with strategic partners, markets, and resources. 
      We build bridges between startups, established businesses, government agencies, and international organizations 
      to create a robust ecosystem for tourism innovation in Mombasa.
    </p>
    
    <h3 class="text-2xl font-bold text-foreground mb-4 mt-8">Partnership Networks</h3>
    <ul class="list-disc pl-6 mb-6 space-y-2">
      <li>Local government collaborations for policy support</li>
      <li>International tourism boards for global exposure</li>
      <li>Financial institutions for funding access</li>
      <li>Educational institutions for research and talent</li>
      <li>Industry associations for market access</li>
      <li>Technology providers for digital transformation</li>
    </ul>
    
    <h3 class="text-2xl font-bold text-foreground mb-4 mt-8">Market Access Programs</h3>
    <p class="text-lg leading-relaxed mb-6">
      We facilitate connections to both local and international markets through trade shows, B2B matchmaking events, 
      and digital platforms. Our market access programs help tourism entrepreneurs showcase their offerings to the right 
      audience and establish valuable business relationships that drive growth.
    </p>
    
    <h3 class="text-2xl font-bold text-foreground mb-4 mt-8">Resource Mobilization</h3>
    <p class="text-lg leading-relaxed mb-6">
      Through our extensive network of partners, we help tourism entrepreneurs access essential resources including 
      funding, technology, expertise, and infrastructure. This support enables them to overcome barriers to growth 
      and scale their operations effectively in the competitive tourism market.
    </p>
  `;

  return (
    <WorkCategoryTemplate
      title="Linkages"
      description="Building strategic connections to strengthen Mombasa's tourism ecosystem"
      content={content}
      image={linkagesImage}
      stats={stats}
    />
  );
};

export default Linkages;
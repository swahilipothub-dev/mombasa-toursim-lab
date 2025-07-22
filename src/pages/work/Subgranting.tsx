import WorkCategoryTemplate from '@/components/WorkCategoryTemplate';
import subgrantingImage from '@/assets/subgranting.jpg';

const Subgranting = () => {
  const stats = [
    { number: '$250K+', label: 'Total Grants Awarded' },
    { number: '35', label: 'Beneficiary Ventures' },
    { number: '6', label: 'Grant Cycles' },
    { number: '80%', label: 'Implementation Rate' }
  ];

  const content = `
    <h2 class="text-3xl font-bold text-foreground mb-6">Subgranting Program</h2>
    <p class="text-lg leading-relaxed mb-6">
      Our subgranting initiative provides financial support to promising tourism ventures that demonstrate 
      innovation, sustainability, and potential for positive community impact. These strategic grants help 
      entrepreneurs overcome financial barriers and accelerate the development of their tourism products and services.
    </p>
    
    <h3 class="text-2xl font-bold text-foreground mb-4 mt-8">Grant Categories</h3>
    <ul class="list-disc pl-6 mb-6 space-y-2">
      <li>Startup grants for early-stage tourism ventures</li>
      <li>Innovation grants for new product development</li>
      <li>Digital transformation grants for technology adoption</li>
      <li>Sustainability grants for eco-friendly initiatives</li>
      <li>Community impact grants for inclusive tourism models</li>
      <li>Market access grants for expanding reach and visibility</li>
    </ul>
    
    <h3 class="text-2xl font-bold text-foreground mb-4 mt-8">Selection Process</h3>
    <p class="text-lg leading-relaxed mb-6">
      Our rigorous selection process evaluates applications based on innovation, feasibility, market potential, 
      sustainability, and social impact. Shortlisted candidates present their proposals to a panel of experts, 
      and final selections are made based on alignment with our strategic objectives and potential for transformative 
      impact on Mombasa's tourism landscape.
    </p>
    
    <h3 class="text-2xl font-bold text-foreground mb-4 mt-8">Beyond Funding</h3>
    <p class="text-lg leading-relaxed mb-6">
      Our subgranting program goes beyond financial support to include implementation assistance, monitoring, 
      and evaluation. We work closely with grant recipients to ensure effective utilization of funds, overcome 
      implementation challenges, and measure the impact of their initiatives, maximizing the return on investment 
      for both the entrepreneur and the broader tourism ecosystem.
    </p>
  `;

  return (
    <WorkCategoryTemplate
      title="Subgranting"
      description="Providing financial support to catalyze innovation in Mombasa's tourism sector"
      content={content}
      image={subgrantingImage}
      stats={stats}
    />
  );
};

export default Subgranting;
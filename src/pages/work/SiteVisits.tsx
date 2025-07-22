import WorkCategoryTemplate from '@/components/WorkCategoryTemplate';
import siteVisitsImage from '@/assets/diani-beach.jpg';

const SiteVisits = () => {
  const stats = [
    { number: '75+', label: 'Sites Visited' },
    { number: '25', label: 'Assessment Reports' },
    { number: '15', label: 'Counties Covered' },
    { number: '30+', label: 'Expert Evaluators' }
  ];

  const content = `
    <h2 class="text-3xl font-bold text-foreground mb-6">Site Visits & Assessments</h2>
    <p class="text-lg leading-relaxed mb-6">
      Our site visit program involves comprehensive on-ground assessments of tourism ventures, attractions, and 
      potential development areas. These visits enable us to understand the unique characteristics, challenges, 
      and opportunities of each location, informing our support strategies and investment decisions.
    </p>
    
    <h3 class="text-2xl font-bold text-foreground mb-4 mt-8">Assessment Framework</h3>
    <ul class="list-disc pl-6 mb-6 space-y-2">
      <li>Infrastructure and accessibility evaluation</li>
      <li>Service quality and visitor experience assessment</li>
      <li>Cultural and environmental sustainability analysis</li>
      <li>Community engagement and benefit-sharing review</li>
      <li>Digital readiness and technology integration</li>
      <li>Market positioning and competitive advantage</li>
    </ul>
    
    <h3 class="text-2xl font-bold text-foreground mb-4 mt-8">Expert Teams</h3>
    <p class="text-lg leading-relaxed mb-6">
      Our site visits are conducted by multidisciplinary teams including tourism experts, business advisors, 
      cultural specialists, and sustainability consultants. This diverse expertise ensures a holistic assessment 
      that considers all aspects of tourism development and innovation potential.
    </p>
    
    <h3 class="text-2xl font-bold text-foreground mb-4 mt-8">From Assessment to Action</h3>
    <p class="text-lg leading-relaxed mb-6">
      Following each site visit, we develop detailed reports with actionable recommendations for improvement and growth. 
      These insights form the basis for tailored support packages, including technical assistance, capacity building, 
      and targeted investments that address specific needs identified during the assessment process.
    </p>
  `;

  return (
    <WorkCategoryTemplate
      title="Site Visits"
      description="On-ground assessments to understand and enhance tourism experiences across Mombasa"
      content={content}
      image={siteVisitsImage}
      stats={stats}
    />
  );
};

export default SiteVisits;
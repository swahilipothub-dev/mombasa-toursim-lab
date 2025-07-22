import WorkCategoryTemplate from '@/components/WorkCategoryTemplate';
import trainingImage from '@/assets/training.jpg';

const TrainingMentorship = () => {
  const stats = [
    { number: '350+', label: 'Entrepreneurs Trained' },
    { number: '25', label: 'Training Programs' },
    { number: '40', label: 'Expert Mentors' },
    { number: '85%', label: 'Satisfaction Rate' }
  ];

  const content = `
    <h2 class="text-3xl font-bold text-foreground mb-6">Training & Mentorship</h2>
    <p class="text-lg leading-relaxed mb-6">
      Our comprehensive training and mentorship programs equip tourism entrepreneurs with the skills, knowledge, 
      and guidance needed to succeed in a competitive market. We offer a blend of structured learning experiences 
      and personalized mentorship to address the unique needs of each participant.
    </p>
    
    <h3 class="text-2xl font-bold text-foreground mb-4 mt-8">Training Programs</h3>
    <ul class="list-disc pl-6 mb-6 space-y-2">
      <li>Digital marketing and online presence development</li>
      <li>Sustainable tourism practices and certification</li>
      <li>Financial management and investment readiness</li>
      <li>Customer experience design and service excellence</li>
      <li>Product development and innovation</li>
      <li>Business model optimization</li>
    </ul>
    
    <h3 class="text-2xl font-bold text-foreground mb-4 mt-8">Mentorship Approach</h3>
    <p class="text-lg leading-relaxed mb-6">
      Our mentorship program pairs entrepreneurs with experienced industry professionals who provide guidance, 
      feedback, and support. These one-on-one relationships help entrepreneurs navigate challenges, identify 
      opportunities, and accelerate their growth journey with personalized insights from those who have 
      successfully traveled similar paths.
    </p>
    
    <h3 class="text-2xl font-bold text-foreground mb-4 mt-8">Learning Methodology</h3>
    <p class="text-lg leading-relaxed mb-6">
      We employ a practical, hands-on approach to learning that emphasizes real-world application. 
      Our training combines workshops, case studies, field visits, and project-based learning to ensure 
      participants not only acquire knowledge but also develop the ability to apply it effectively in 
      their businesses for immediate impact.
    </p>
  `;

  return (
    <WorkCategoryTemplate
      title="Training & Mentorship"
      description="Empowering tourism entrepreneurs with skills and guidance for sustainable success"
      content={content}
      image={trainingImage}
      stats={stats}
    />
  );
};

export default TrainingMentorship;
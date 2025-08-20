import React, { lazy, Suspense } from 'react';
const Navigation = lazy(() => import('@/components/Navigation'));
const Hero = lazy(() => import('@/components/Hero'));
const About = lazy(() => import('@/components/About'));
const InnovatorsSection = lazy(() => import('@/components/InnovatorsSection'));
const OurWorkSection = lazy(() => import('@/components/OurWorkSection'));
const Partners = lazy(() => import('@/components/Partners'));
const Footer = lazy(() => import('@/components/Footer'));

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Suspense fallback={<div>Loading...</div>}>
        <Navigation />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Hero />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <About />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <InnovatorsSection />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <OurWorkSection />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Partners />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default Index;
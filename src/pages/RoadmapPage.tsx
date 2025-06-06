import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Roadmap from '@/components/Roadmap';

const RoadmapPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Roadmap />
      <Footer />
    </div>
  );
};

export default RoadmapPage;

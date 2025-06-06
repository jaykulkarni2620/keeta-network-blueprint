import React from 'react';
import { motion } from 'framer-motion';

const roadmapData = [
  { quarter: 'Q1', milestone: 'Token launch and staking module deployment' },
  { quarter: 'Q2', milestone: 'Node onboarding and Resort planning' },
  { quarter: 'Q3', milestone: 'Start resort development' },
  { quarter: 'Q4', milestone: 'Beta test blockchain-based booking & loyalty systems' },
  { quarter: 'Next Year Q1', milestone: 'Launch private aviation MVP on key Indian routes' },
  { quarter: 'Next Year Q2', milestone: 'Scale another location for resort construction' },
  { quarter: 'Next Year Q3', milestone: 'DAO platform activation for community governance' },
];

const Roadmap = () => {
  return (
    <section className="bg-white py-16 px-4 sm:px-8 lg:px-16" id="roadmap">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12"> Project Roadmap</h2>
        <div className="relative border-l-2 border-gray-300">
          {roadmapData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="mb-10 ml-4"
            >
              <div className="absolute w-3 h-3 bg-blue-500 rounded-full -left-1.5 top-2.5"></div>
              <div className="bg-blue-50 p-4 rounded-md shadow-sm">
                <h3 className="text-lg font-semibold text-blue-600">{item.quarter}</h3>
                <p className="text-gray-700 mt-1">{item.milestone}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Roadmap;

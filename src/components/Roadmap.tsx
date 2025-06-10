// import React from 'react';
// import { motion } from 'framer-motion';

// const roadmapData = [
//   { quarter: 'Q1', milestone: 'Token launch and staking module deployment' },
//   { quarter: 'Q2', milestone: 'Node onboarding and Resort planning' },
//   { quarter: 'Q3', milestone: 'Start resort development' },
//   { quarter: 'Q4', milestone: 'Beta test blockchain-based booking & loyalty systems' },
//   { quarter: 'Next Year Q1', milestone: 'Launch private aviation MVP on key Indian routes' },
//   { quarter: 'Next Year Q2', milestone: 'Scale another location for resort construction' },
//   { quarter: 'Next Year Q3', milestone: 'DAO platform activation for community governance' },
// ];

// const Roadmap = () => {
//   return (
//     <section className="bg-white py-16 px-4 sm:px-8 lg:px-16" id="roadmap">
//       <div className="max-w-5xl mx-auto">
//         <h2 className="text-3xl font-bold text-center mb-12"> Project Roadmap</h2>
//         <div className="relative border-l-2 border-gray-300">
//           {roadmapData.map((item, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, x: -50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//               viewport={{ once: true }}
//               className="mb-10 ml-4"
//             >
//               <div className="absolute w-3 h-3 bg-blue-500 rounded-full -left-1.5 top-2.5"></div>
//               <div className="bg-blue-50 p-4 rounded-md shadow-sm">
//                 <h3 className="text-lg font-semibold text-blue-600">{item.quarter}</h3>
//                 <p className="text-gray-700 mt-1">{item.milestone}</p>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Roadmap;

import React from 'react';
import { FaCalendarAlt, FaBriefcase, FaLightbulb, FaUsers, FaRocket, FaStar } from 'react-icons/fa';

const roadmapData = [
  { year: 'Q1', title: 'Token launch and staking module deployment', icon: <FaCalendarAlt />, color: 'bg-cyan-500' },
  { year: 'Q2', title: 'Node onboarding and Resort planning', icon: <FaBriefcase />, color: 'bg-sky-500' },
  { year: 'Q3', title: 'Eiusmod Sed', icon: <FaLightbulb />, color: 'bg-cyan-700' },
  { year: 'Q4', title: 'Consequat', icon: <FaUsers />, color: 'bg-yellow-400' },
  { year: 'Next Year Q1', title: 'Totam Rem',  icon: <FaRocket />, color: 'bg-orange-500' },
  { year: 'Next Year Q2', title: 'Adipiscing', icon: <FaStar />, color: 'bg-rose-500' },
  { year: 'Next Year Q3', title: 'Adipiscing', icon: <FaStar />, color: 'bg-rose-500' },
];

const Roadmap = () => {
  return (
    <section className="bg-white py-16 px-4 sm:px-8 lg:px-16">
      <h2 className="text-3xl font-bold text-center mb-12">Roadmap Infographics</h2>
      <div className="relative flex items-center justify-between overflow-x-auto max-w-6xl mx-auto">
        <div className="absolute top-1/2 left-0 right-0 h-2 rounded-full z-0" />
        {roadmapData.map((item, index) => (
          <div key={index} className="relative flex flex-col items-center z-10 min-w-[100px]">
            {/* Icon */}
            <div className={`w-12 h-12 ${item.color} text-white rounded-full flex items-center justify-center shadow-md mb-4`}>
              {item.icon}
            </div>

            {/* Title */}
            <div className="text-center mb-2">
              <h3 className="text-sm font-semibold text-gray-800">{item.title}</h3>
              <p className="text-xs text-gray-500"></p>
            </div>

            {/* Year */}
            <div className={`mt-4 py-1 px-3 text-white text-sm font-semibold rounded-full ${item.color}`}>
              {item.year}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Roadmap;

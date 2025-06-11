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

// import React from 'react';
// import { FaCalendarAlt, FaBriefcase, FaLightbulb, FaUsers, FaRocket, FaStar } from 'react-icons/fa';

// const roadmapData = [
//   { year: 'Q1', title: 'Token launch and staking module deployment', icon: <FaCalendarAlt />, color: 'bg-[#D4AF37]' },
//   { year: 'Q2', title: 'Node onboarding and Resort planning', icon: <FaBriefcase />, color: 'bg-[#FFD700]' },
//   { year: 'Q3', title: 'Start resort development', icon: <FaLightbulb />, color: 'bg-[#D4AF37]' },
//   { year: 'Q4', title: 'Beta test blockchain-based booking & loyalty systems', icon: <FaUsers />, color: 'bg-[#FFD700]' },
//   { year: 'Next Year Q1', title: 'Launch private aviation MVP on key Indian routes', icon: <FaRocket />, color: 'bg-[#D4AF37]' },
//   { year: 'Next Year Q2', title: 'Scale another location for resort construction', icon: <FaStar />, color: 'bg-[#FFD700]' },
//   { year: 'Next Year Q3', title: 'DAO platform activation for community governance', icon: <FaStar />, color: 'bg-[#D4AF37]' },
// ];

// const Roadmap = () => {
//   return (
//     <section className="bg-white py-16 px-4 sm:px-8 lg:px-16" id="roadmap">
//       <h2 className="text-3xl font-bold text-center mb-12 text-[#D4AF37]">Roadmap Infographics</h2>
      
//       <div className="relative flex flex-wrap justify-center gap-8 max-w-6xl mx-auto">
//         {roadmapData.map((item, index) => (
//           <div key={index} className="w-56 flex flex-col items-center text-center">
//             {/* Icon */}
//             <div className={`w-14 h-14 ${item.color} text-white rounded-full flex items-center justify-center shadow-lg mb-4 text-lg`}>
//               {item.icon}
//             </div>

//             {/* Title */}
//             <div className="mb-2">
//               <h3 className="text-sm font-semibold text-gray-800 leading-snug">{item.title}</h3>
//             </div>

//             {/* Year Tag */}
//             <div className={`mt-2 py-1 px-3 text-white text-xs font-semibold rounded-full ${item.color}`}>
//               {item.year}
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Roadmap;

import React from 'react';
import { motion } from 'framer-motion';

const roadmapItems = [
  {
    id: 1,
    title: 'Token launch and staking module deployment',
    desc: 'Deploy secure token staking modules for early adopters.',
  },
  {
    id: 2,
    title: 'Node onboarding and Resort planning',
    desc: 'Start planning for the first flagship resort and onboard nodes.',
  },
  {
    id: 3,
    title: 'Start resort development',
    desc: 'Begin development of luxury eco-resorts at selected location.',
  },
  {
    id: 4,
    title: 'Beta test blockchain-based booking & loyalty systems',
    desc: 'Launch beta of blockchain loyalty & booking platform.',
  },
  {
    id: 5,
    title: 'Launch private aviation MVP on key Indian routes',
    desc: 'Enable private jet MVP bookings on major Indian hubs.',
  },
  {
    id: 6,
    title: 'DAO platform activation for community governance',
    desc: 'Launch DAO governance and voting modules.',
  },
];

const Roadmap = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-16">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#3b3b3b] mb-4">
          LuxePorts Roadmap
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto text-sm md:text-base">
          A Journey Through Innovation, Luxury & Decentralization. Track the strategic milestones shaping the future of LuxePorts — from blockchain deployment to eco-resort development and community-led governance.
        </p>
      </div>

      <div className="relative flex flex-col items-center mt-16">
        {/* Vertical Golden Line */}
        <div className="absolute w-1 bg-[#bf9b65] top-0 bottom-0 left-1/2 transform -translate-x-1/2 z-0"></div>

        {roadmapItems.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className={`w-full md:w-1/2 px-4 py-6 z-10 ${
              index % 2 === 0 ? 'self-start text-left' : 'self-end text-right'
            }`}
          >
            <div className="flex items-center">
              {index % 2 === 0 && (
                <div className="mr-4 hidden md:block w-1/2"></div>
              )}
              <div className="relative bg-white p-6 rounded-lg shadow-md border border-[#bf9b65] transition-all duration-300 hover:scale-105 hover:shadow-xl hover:border-[#d4af37] cursor-pointer">
                <div className="absolute top-1/2 -left-10 transform -translate-y-1/2 hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-[#bf9b65] text-white font-bold text-sm z-10 shadow-md">
                  {item.id}
                </div>
                <h3 className="text-lg font-semibold text-[#bf9b65] mb-2 transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-700 text-sm">{item.desc}</p>
              </div>
              {index % 2 !== 0 && (
                <div className="ml-4 hidden md:block w-1/2"></div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Roadmap;


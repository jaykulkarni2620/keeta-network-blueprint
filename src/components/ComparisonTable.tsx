
import { Check, X } from 'lucide-react';

const comparisonItems = [
  'Sub-second transactions',
  '0% network gas fees',
  '10M+ TPS transaction speed',
  'Native tokenization',
  'Built-in compliance'
];

const ComparisonTable = () => {
  return (
    <section className="py-32 px-6 bg-white">
      <div className="max-w-5xl mx-auto text-center">
        <div className="mb-20">
          <div className="w-16 h-16 bg-gray-900/10 rounded-full mx-auto mb-8 flex items-center justify-center">
            <div className="w-8 h-8 bg-gray-900 rounded-full"></div>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            The Future of Blockchain
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Compare LuxePorts with existing solutions and see why we're building the next generation of blockchain infrastructure.
          </p>
        </div>

        <div className="bg-keeta-dark rounded-3xl p-8 shadow-2xl">
          <div className="grid grid-cols-2 gap-8">
            {/* Keeta Column */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white mb-8">LuxePorts</h3>
              {comparisonItems.map((item, index) => (
                <div key={index} className="flex items-center space-x-4 p-4 bg-white rounded-2xl shadow-sm">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-gray-900 font-medium text-left">{item}</span>
                </div>
              ))}
            </div>

            {/* Competitors Column */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white mb-8">Competitors</h3>
              {comparisonItems.map((item, index) => (
                <div key={index} className="flex items-center space-x-4 p-4 bg-gray-800 rounded-2xl">
                  <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <X className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-gray-400 font-medium text-left">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;

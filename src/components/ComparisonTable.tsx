
import { Check, X } from 'lucide-react';

const comparisonItems = [
  'Sub-second transactions',
  'No gas fees',
  '10M+ TPS',
  'Native tokenization',
  'Built-in compliance'
];

const ComparisonTable = () => {
  return (
    <section className="py-20 px-6 bg-keeta-dark">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-16">
          The Future of Blockchain
        </h2>

        <div className="bg-gray-900 rounded-3xl p-8 overflow-hidden">
          <div className="grid grid-cols-2 gap-8">
            {/* Keeta Column */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white mb-8">Keeta</h3>
              {comparisonItems.map((item, index) => (
                <div key={index} className="flex items-center space-x-3 p-4 bg-white rounded-xl">
                  <Check className="w-6 h-6 text-keeta-success flex-shrink-0" />
                  <span className="text-gray-900 font-medium">{item}</span>
                </div>
              ))}
            </div>

            {/* Competitors Column */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white mb-8">Competitors</h3>
              {comparisonItems.map((item, index) => (
                <div key={index} className="flex items-center space-x-3 p-4 bg-gray-800 rounded-xl">
                  <X className="w-6 h-6 text-keeta-error flex-shrink-0" />
                  <span className="text-gray-300 font-medium">{item}</span>
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

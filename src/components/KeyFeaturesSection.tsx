
import { Zap, Scale, Building, Shield, Globe } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Move Assets',
    description: 'Seamlessly transfer assets across different networks with instant settlement.'
  },
  {
    icon: Scale,
    title: 'Scalable by Design',
    description: 'Built to handle millions of transactions per second without compromising security.'
  },
  {
    icon: Building,
    title: 'Trade Real-World Assets',
    description: 'Tokenize and trade physical assets with built-in regulatory compliance.'
  },
  {
    icon: Shield,
    title: 'Compliance When it Counts',
    description: 'Regulatory compliance built into the protocol from day one.'
  },
  {
    icon: Globe,
    title: 'Global Infrastructure',
    description: 'Decentralized network spanning across continents for maximum reliability.'
  }
];

const KeyFeaturesSection = () => {
  return (
    <section className="bg-keeta-dark py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-gradient-to-r from-keeta-orange to-keeta-orange-light text-white text-sm font-semibold px-4 py-2 rounded-full mb-4">
            KEY FEATURES
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            One Network, Ready for Anything
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.slice(0, 2).map((feature, index) => (
            <div key={index} className="bg-gray-900/50 rounded-2xl p-8 hover:bg-gray-900/70 transition-all duration-300 hover:scale-105 lg:col-span-1">
              <div className="w-12 h-12 bg-gradient-to-br from-keeta-orange to-keeta-orange-light rounded-xl flex items-center justify-center mb-6">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
              <p className="text-gray-300 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          {features.slice(2).map((feature, index) => (
            <div key={index} className="bg-gray-900/50 rounded-2xl p-8 hover:bg-gray-900/70 transition-all duration-300 hover:scale-105">
              <div className="w-12 h-12 bg-gradient-to-br from-keeta-orange to-keeta-orange-light rounded-xl flex items-center justify-center mb-6">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
              <p className="text-gray-300 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyFeaturesSection;


import { Zap, Scale, Building, Shield, Globe } from 'lucide-react';

const KeyFeaturesSection = () => {
  return (
    <section className="bg-keeta-dark py-24 px-6 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 right-20 w-48 h-48 rounded-full border border-keeta-orange/20"></div>
      <div className="absolute bottom-40 left-20 w-32 h-32 rounded-full border border-keeta-orange/10"></div>
      <div className="absolute top-1/2 right-1/3 w-2 h-2 bg-keeta-orange rounded-full"></div>
      <div className="absolute bottom-1/3 left-1/4 w-3 h-3 bg-keeta-orange/60 rounded-full"></div>
      
      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-block bg-keeta-orange/10 text-keeta-orange text-sm font-semibold px-6 py-3 rounded-full mb-6 border border-keeta-orange/20">
            KEY FEATURES
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
            One Network, Ready for Anything
          </h2>
        </div>

        {/* Main Feature Card */}
        <div className="bg-gray-900/80 backdrop-blur-sm rounded-3xl p-12 mb-12 border border-gray-800 relative overflow-hidden">
          {/* Decorative gradient */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-keeta-orange/10 to-transparent rounded-full -translate-y-1/2 translate-x-1/2"></div>
          
          <div className="relative z-10">
            <h3 className="text-3xl font-bold text-white mb-8">Move Assets Across Networks</h3>
            <p className="text-xl text-gray-300 mb-12 max-w-2xl leading-relaxed">
              Seamlessly transfer assets across different networks with instant settlement and zero gas fees. 
              Built for speed and efficiency.
            </p>
            
            {/* Feature icons */}
            <div className="flex items-center space-x-12">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-keeta-orange rounded-full flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div className="text-white font-medium">Instant</div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div className="text-white font-medium">Secure</div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                  <Scale className="w-6 h-6 text-white" />
                </div>
                <div className="text-white font-medium">Scalable</div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-900/60 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 hover:bg-gray-900/80 transition-all duration-300">
            <div className="w-14 h-14 bg-gradient-to-br from-keeta-orange to-keeta-orange-light rounded-xl flex items-center justify-center mb-6">
              <Building className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Trade Real-World Assets</h3>
            <p className="text-gray-400 leading-relaxed">Tokenize and trade physical assets with built-in regulatory compliance and instant settlement.</p>
          </div>

          <div className="bg-gray-900/60 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 hover:bg-gray-900/80 transition-all duration-300">
            <div className="w-14 h-14 bg-gradient-to-br from-green-400 to-green-600 rounded-xl flex items-center justify-center mb-6">
              <Shield className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Compliance When it Counts</h3>
            <p className="text-gray-400 leading-relaxed">Regulatory compliance built into the protocol from day one, ensuring seamless global operation.</p>
          </div>

          <div className="bg-gray-900/60 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 hover:bg-gray-900/80 transition-all duration-300">
            <div className="w-14 h-14 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center mb-6">
              <Scale className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Scalable by Design</h3>
            <p className="text-gray-400 leading-relaxed">Built to handle millions of transactions per second without compromising security or decentralization.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyFeaturesSection;

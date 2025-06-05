
import { Play } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden bg-white">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50/30 via-white to-white"></div>
      
      {/* Decorative circles */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 border border-orange-200/30 rounded-full"></div>
      <div className="absolute bottom-1/3 left-1/3 w-32 h-32 border border-orange-200/20 rounded-full"></div>
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto animate-fade-in">
        <h1 className="text-7xl md:text-8xl font-bold mb-8 leading-tight">
          Where Networks
          <br />
          <span className="text-keeta-orange">
            Connect
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
          Keeta serves as a common ground for all payment networks and assets.<br />
          One network, ready for anything.
        </p>

        {/* Play Button */}
        <div className="flex justify-center">
          <button className="group flex items-center justify-center w-20 h-20 bg-white rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 border border-gray-100">
            <Play className="w-8 h-8 text-keeta-orange ml-1 group-hover:text-keeta-orange-light transition-colors" fill="currentColor" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

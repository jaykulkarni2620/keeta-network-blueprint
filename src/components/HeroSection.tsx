
import { Play } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center px-6 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-radial from-keeta-orange/10 via-white to-white"></div>
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto animate-fade-in">
        <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
          Where Networks
          <br />
          <span className="bg-gradient-to-r from-keeta-orange to-keeta-orange-light bg-clip-text text-transparent">
            Connect
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Keeta serves as a common ground for all payment networks and assets.
        </p>

        {/* Play Button */}
        <div className="flex justify-center">
          <button className="group flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110">
            <Play className="w-6 h-6 text-keeta-orange ml-1 group-hover:text-keeta-orange-light transition-colors" />
          </button>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-keeta-orange/20 to-transparent"></div>
    </section>
  );
};

export default HeroSection;

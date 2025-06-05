
import { Button } from '@/components/ui/button';

const Footer = () => {
  return (
    <footer className="relative bg-keeta-dark py-32 px-6 overflow-hidden">
      {/* Large Keeta Text Background */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-[20rem] md:text-[30rem] font-black text-white/5 select-none leading-none">
          keeta
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start space-y-12 md:space-y-0">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="text-white font-medium text-lg mb-4">Get in touch</div>
            <div className="space-y-3">
              <div className="text-gray-300">
                <span className="text-white font-medium">General:</span>{' '}
                <a href="mailto:general@keeta.network" className="hover:text-keeta-orange transition-colors">
                  general@keeta.network
                </a>
              </div>
              <div className="text-gray-300">
                <span className="text-white font-medium">Press:</span>{' '}
                <a href="mailto:press@keeta.network" className="hover:text-keeta-orange transition-colors">
                  press@keeta.network
                </a>
              </div>
            </div>
            <div className="text-gray-500 text-sm pt-8">
              © 2025 keeta.io
            </div>
          </div>

          {/* Right Side Actions */}
          <div className="flex flex-col items-end space-y-6">
            <div className="flex items-center space-x-4">
              <Button 
                variant="outline" 
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-keeta-dark transition-all duration-300 px-8 py-3 text-lg font-medium"
              >
                Testnet
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="text-white hover:bg-white/10 p-3"
              >
                🌙
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

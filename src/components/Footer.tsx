
import { Button } from '@/components/ui/button';

const Footer = () => {
  return (
    <footer className="relative bg-keeta-dark py-20 px-6 overflow-hidden">
      {/* Large Keeta Text Background */}
      <div className="absolute bottom-0 left-0 right-0">
        <div className="text-[12rem] md:text-[20rem] font-bold text-white/5 text-center leading-none select-none">
          KEETA
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-8 md:space-y-0">
          {/* Contact Info */}
          <div className="space-y-4">
            <div className="text-gray-300">
              <div className="mb-2">
                <span className="text-white font-medium">General:</span>{' '}
                <a href="mailto:general@keeta.network" className="hover:text-keeta-orange transition-colors">
                  general@keeta.network
                </a>
              </div>
              <div>
                <span className="text-white font-medium">Press:</span>{' '}
                <a href="mailto:press@keeta.network" className="hover:text-keeta-orange transition-colors">
                  press@keeta.network
                </a>
              </div>
            </div>
            <div className="text-gray-500 text-sm">
              © 2025 keeta.io
            </div>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            <Button 
              variant="outline" 
              className="bg-transparent border-white text-white hover:bg-white hover:text-keeta-dark transition-all duration-300"
            >
              Testnet
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="text-white hover:bg-white/10"
            >
              🌙
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

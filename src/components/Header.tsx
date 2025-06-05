
import { useState } from 'react';
import { ChevronDown, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <header className="relative z-50 w-full px-6 py-4">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-br from-keeta-orange to-keeta-orange-light rounded-full"></div>
          <span className="text-xl font-bold">Keeta Network</span>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <div className="flex items-center space-x-1 cursor-pointer hover:text-keeta-orange transition-colors">
            <span>Resources</span>
            <ChevronDown className="w-4 h-4" />
          </div>
          <div className="flex items-center space-x-1 cursor-pointer hover:text-keeta-orange transition-colors">
            <span>Testnet</span>
            <ChevronDown className="w-4 h-4" />
          </div>
        </nav>

        {/* Right side */}
        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="hover:bg-gray-100"
          >
            {isDarkMode ? '☀️' : '🌙'}
          </Button>
          <Button variant="ghost" size="sm" className="hover:bg-gray-100">
            <X className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;

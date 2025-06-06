import { useState } from 'react';
import { ChevronDown, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <header className="relative z-50 w-full px-6 py-4">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          {/* <div className="w-8 h-8 bg-gradient-to-br from-keeta-orange to-keeta-orange-light rounded-full"></div> */}
          {/* <span className="text-xl font-bold"><img src="/images/logo.jpeg" alt="logo" /></span> */}
          <span className="text-xl font-bold"><img src='images/inline_logo.png' alt='inline_logo' /></span>

        </div>

        {/* Navigation - All 4 buttons */}
        <nav className="hidden md:flex items-center space-x-6">
          {/* Resources dropdown */}

        <DropdownMenu>
        <DropdownMenuTrigger className="flex items-center space-x-1 cursor-pointer hover:text-keeta-orange transition-colors outline-none">
          <span>Roadmap</span>
        </DropdownMenuTrigger>
        </DropdownMenu>


          <DropdownMenu>
  <DropdownMenuTrigger className="flex items-center space-x-1 cursor-pointer hover:text-keeta-orange transition-colors outline-none">
    <span>White paper</span>
    <ChevronDown className="w-4 h-4" />
  </DropdownMenuTrigger>
  <DropdownMenuContent className="bg-white border border-gray-200 shadow-lg rounded-md p-1 z-50">
    <DropdownMenuItem asChild>
      <a href="https://luxeports.com/whitepaper.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 px-3 py-2 hover:bg-gray-100">
        <span>Text</span>
      </a>
    </DropdownMenuItem>
    <DropdownMenuItem asChild>
      <a href="https://luxeports.com/whitepaper.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 px-3 py-2 hover:bg-gray-100">
        <span>Legal</span>
      </a>
    </DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>

{/* Docs Dropdown */}
<DropdownMenu>
  <DropdownMenuTrigger className="flex items-center space-x-1 cursor-pointer hover:text-keeta-orange transition-colors outline-none">
    <span>Docs</span>
    <ChevronDown className="w-4 h-4" />
  </DropdownMenuTrigger>
  <DropdownMenuContent className="bg-white border border-gray-200 shadow-lg rounded-md p-1 z-50">
    <DropdownMenuItem asChild>
      <a href="https://docs.luxeports.com" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 px-3 py-2 hover:bg-gray-100">
        <span>Docs</span>
      </a>
    </DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>

{/* Resources Dropdown */}
<DropdownMenu>
  <DropdownMenuTrigger className="flex items-center space-x-1 cursor-pointer hover:text-keeta-orange transition-colors outline-none">
    <span>Resources</span>
    <ChevronDown className="w-4 h-4" />
  </DropdownMenuTrigger>
  <DropdownMenuContent className="bg-white border border-gray-200 shadow-lg rounded-md p-1 z-50">
    <DropdownMenuItem asChild>
      <a href="https://luxeports.com/whitepaper.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 px-3 py-2 hover:bg-gray-100">
        <span>Whitepaper</span>
      </a>
    </DropdownMenuItem>
    <DropdownMenuItem asChild>
      <a href="https://docs.luxeports.com" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 px-3 py-2 hover:bg-gray-100">
        <span>Docs</span>
      </a>
    </DropdownMenuItem>
    <DropdownMenuItem asChild>
      <a href="https://luxeports.com/sdk" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 px-3 py-2 hover:bg-gray-100">
        <span>SDK Documentation</span>
      </a>
    </DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>

          {/* Testnet dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center space-x-1 cursor-pointer hover:text-keeta-orange transition-colors outline-none">
              <span>Testnet</span>
              <ChevronDown className="w-4 h-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-white border border-gray-200 shadow-lg rounded-md p-1 z-50">
              <DropdownMenuItem asChild>
                <a href="https://lxpscan.com" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 px-3 py-2 hover:bg-gray-100">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <span>Explorer</span>
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <a href="https://faucet.luxeports.com" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 px-3 py-2 hover:bg-gray-100">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                    <polyline points="3.27,6.96 12,12.01 20.73,6.96"></polyline>
                    <line x1="12" y1="22.08" x2="12" y2="12"></line>
                  </svg>
                  <span>Faucet</span>
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <a href="https://bridge.luxeports.com" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 px-3 py-2 hover:bg-gray-100">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 9 5.16.74 9-3.45 9-9V7l-10-5z"></path>
                  </svg>
                  <span>Bridge</span>
                </a>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Discord icon button */}
          <Button
            variant="ghost"
            size="sm"
            className="hover:bg-gray-100 p-2"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515..."/>
            </svg>
          </Button>

          {/* X icon button */}
          <Button
            variant="ghost"
            size="sm"
            className="hover:bg-gray-100 p-2"
          >
            <X className="w-5 h-5" />
          </Button>
        </nav>

        {/* Mobile menu button - only show on mobile */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="sm"
            className="hover:bg-gray-100"
          >
            <X className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;

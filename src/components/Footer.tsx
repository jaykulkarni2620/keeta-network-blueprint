
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';

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
          <div className="space-y-4">
            <div className="text-gray-400 text-sm">
              For general inquiries, email us at
            </div>
            <div className="text-white font-medium">
              general@keeta.com
            </div>
            <div className="text-gray-400 text-sm mt-6">
              For press inquiries, email us at
            </div>
            <div className="text-white font-medium">
              press@keeta.com
            </div>
          </div>

          {/* Right Side - Copyright, Icons, and Mediakit */}
          <div className="flex flex-col items-end space-y-6">
            <div className="text-gray-400 text-sm">
              Copyright 2025 Keeta Inc.
            </div>
            
            {/* Icons */}
            <div className="flex items-center space-x-4">
              {/* Discord icon */}
              <Button
                variant="ghost"
                size="sm"
                className="text-white hover:bg-white/10 p-3 rounded-full bg-gray-700"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.010c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
                </svg>
              </Button>
              
              {/* X icon */}
              <Button
                variant="ghost"
                size="sm"
                className="text-white hover:bg-white/10 p-3 rounded-full bg-gray-700"
              >
                <X className="w-5 h-5" />
              </Button>
            </div>
            
            {/* Mediakit */}
            <div className="text-blue-400 text-sm cursor-pointer hover:text-blue-300 transition-colors">
              Mediakit
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

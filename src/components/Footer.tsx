
// import { Button } from '@/components/ui/button';
// import { X } from 'lucide-react';

// const Footer = () => {
//   return (
//     <footer className="relative bg-keeta-dark py-32 px-6 overflow-hidden">
//       {/* Large Keeta Text Background */}
//       <div className="absolute inset-0 flex items-center justify-center">
//       {/* <div className="text-[6rem] md:text-[10rem] lg:text-[19rem] font-black text-white/5 select-none leading-none whitespace-nowrap">
//       LuxePorts
//         </div> */}
//         {/* <div className='footer_img className="text-[6rem] md:text-[10rem] lg:text-[19rem]'><img src="images/LuxePorts.png" alt="LuxePorts" /></div> */}
//       </div>

//       {/* Content */}
//       <div className="relative z-10 max-w-7xl mx-auto">
//         <div className="flex flex-col md:flex-row justify-between items-start space-y-12 md:space-y-0">
//           {/* Contact Info */}
//           <div className="space-y-4">
//             <div className="text-gray-400 text-sm">
//               For general inquiries, email us at
//             </div>
//             <div className="text-white font-medium">
//               general@LuxePorts.com
//             </div>
//             <div className="text-gray-400 text-sm mt-6">
//               For press inquiries, email us at
//             </div>
//             <div className="text-white font-medium">
//               press@LuxePorts.com
//             </div>
//           </div>

//           {/* Right Side - Copyright, Icons, and Mediakit */}
//           <div className="flex flex-col items-end space-y-6">
//             <div className="text-gray-400 text-sm">
//               Copyright 2025 LuxePorts Inc.
//             </div>
            
//             {/* Icons */}
//             <div className="flex items-center space-x-4">
//               {/* Discord icon */}
//               <Button
//                 variant="ghost"
//                 size="sm"
//                 className="text-white hover:bg-white/10 p-3 rounded-full bg-gray-700"
//               >
//                 <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
//                   <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.010c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
//                 </svg>
//               </Button>
              
//               {/* X icon */}
//               <Button
//                 variant="ghost"
//                 size="sm"
//                 className="text-white hover:bg-white/10 p-3 rounded-full bg-gray-700"
//               >
//                 <X className="w-5 h-5" />
//               </Button>
//             </div>
            
//             {/* Mediakit */}
//             <div className="text-blue-400 text-sm cursor-pointer hover:text-blue-300 transition-colors">
//               Mediakit
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="mt-16 flex justify-center">
//     <img src="images/LuxePorts.png" alt="LuxePorts Logo" className="w-full max-w-[1500px] h-auto" />
//   </div>
//     </footer>
//   );
// };

// export default Footer;
// import { X } from 'lucide-react';
// import { Button } from '@/components/ui/button';

// const Footer = () => {
//   return (
//     <footer className="bg-white border-t border-gray-200 py-10 px-4 text-sm text-gray-600">
//       <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 md:items-start">

//         {/* Left Section: Logo & Tagline */}
//         <div className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-4">
//           <img src="/images/main_logo.png" alt="LuxePorts Logo" className="w-40 h-40" /> |
//           <span className="text-base font-medium text-black">LuxePorts</span>
//           {/* <p className="text-sm text-gray-500 md:ml-4 max-w-xs">
//             The network for luxury travel experiences — decentralized, elevated, and curated for the global elite.
//           </p> */}
//         </div>

//         {/* Center Section: Links */}
//         <div className="flex flex-wrap items-center justify-center gap-4 text-gray-700">
//           <a href="#" className="hover:underline">Newsletter</a>
//           <a href="#" className="hover:underline">Contact</a>
//           <a href="#" className="hover:underline">Our Team</a>
//           <a href="#" className="hover:underline">Brand Assets</a>
//           <a href="#" className="hover:underline">Terms & Conditions</a>
//           <span>© LuxePorts 2025</span>
//         </div>

//         {/* Right Section: Dev Links + Social Icons */}
//         <div className="flex flex-col items-center md:items-end space-y-2">
//           <div className="flex flex-wrap justify-center gap-4">
//             <a href="#" className="hover:underline">LuxeScan</a>
//             <a href="#" className="hover:underline">Node Explorer</a>
//             <a href="#" className="hover:underline">DAO Dashboard</a>
//           </div>

//           <div className="flex space-x-3 mt-2">
//             <Button variant="ghost" size="icon" className="bg-gray-200 hover:bg-gray-300 rounded-full p-2">
//               <img src="/images/discord-icon.svg" alt="Discord" className="w-4 h-4" />
//             </Button>
//             <Button variant="ghost" size="icon" className="bg-gray-200 hover:bg-gray-300 rounded-full p-2">
//               <X className="w-4 h-4" />
//             </Button>
//             <Button variant="ghost" size="icon" className="bg-gray-200 hover:bg-gray-300 rounded-full p-2">
//               <img src="/images/linkedin-icon.svg" alt="LinkedIn" className="w-4 h-4" />
//             </Button>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


// import { Github, Youtube, Linkedin, MessageCircle, Globe, Send } from 'lucide-react';

// const Footer = () => {
//   return (
//     <footer className="bg-background border-t border-border py-12">
//       <div className="max-w-7xl mx-auto px-6">
//         {/* Main Footer Content */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
//           {/* Left Section - Logo, Tagline, and Navigation */}
//           <div className="lg:col-span-1">
//             <div className="flex items-center gap-2 mb-4">
//               {/* <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-red-500 rounded flex items-center justify-center"> */}
//                 <span className="text-white font-bold text-sm"> <img src="/images/main_logo.png" alt="logo" className="w-40 h-30"
//   /></span>
//               {/* </div> */}
//               <span className="text-2xl font-bold text-foreground">The blockchain for data</span>
//             </div>
//             {/* <p className="text-lg text-foreground mb-6">The blockchain for data</p> */}
            
//             {/* Navigation Links */}
//             <div className="flex flex-wrap gap-6 mb-6">
//               <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
//                 Newsletter
//               </a>
//               <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
//                 Contact
//               </a>
//               <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
//                 Our Team
//               </a>
//               <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
//                 Brand Assets
//               </a>
//               <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
//                 Terms & Conditions
//               </a>
//             </div>
//           </div>

//           {/* Right Section - Dev Links */}
//           <div className="lg:col-span-1">
//             <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">
//               DEV LINKS
//             </h3>
//             <div className="space-y-3">
//               <div>
//                 <a href="#" className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2">
//                   Luexports
//                   <span className="text-xs">↗</span>
//                 </a>
//               </div>
//               <div>
//                 <a href="#" className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2">
//                   Luexports P-Chain Explorer
//                   <span className="text-xs">↗</span>
//                 </a>
//               </div>
//               <div>
//                 <a href="#" className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2">
//                   Luexports Systems Explorer
//                   <span className="text-xs">↗</span>
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Bottom Section - Social Icons and Copyright */}
//         <div className="flex flex-col sm:flex-row justify-between items-center pt-8 border-t border-border">
//           {/* Social Icons */}
//           <div className="flex items-center gap-4 mb-4 sm:mb-0">
//             <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
//               <Github size={20} />
//             </a>
//             <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
//               <Youtube size={20} />
//             </a>
//             <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
//               <Linkedin size={20} />
//             </a>
//             <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
//               <MessageCircle size={20} />
//             </a>
//             <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
//               <Globe size={20} />
//             </a>
//             <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
//               <Send size={20} />
//             </a>
//           </div>

//           {/* Copyright */}
//           <div className="text-muted-foreground text-sm">
//             © Luxeports 2025
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import { Github, Youtube, Linkedin, MessageCircle, Globe, Send } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Footer Content */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 mb-8">
          {/* Left Section - Logo, Tagline, and Navigation */}
          <div className="flex-1">
            <div className="flex items-center gap-4 mb-4">
              <img src="/images/main_logo.png" alt="logo" className="w-28 h-auto" />
              <span className="text-2xl font-bold text-foreground">The blockchain for data</span>
            </div>
            <div className="flex flex-wrap gap-6">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Newsletter</a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Contact</a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Our Team</a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Brand Assets</a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Terms & Conditions</a>
            </div>
          </div>

          {/* Right Section - Dev Links */}
          <div className="flex-1">
            <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">DEV LINKS</h3>
            <div className="space-y-3">
              <div>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2">
                  Luxeports <span className="text-xs">↗</span>
                </a>
              </div>
              <div>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2">
                  Luxeports P-Chain Explorer <span className="text-xs">↗</span>
                </a>
              </div>
              <div>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2">
                  Luxeports Systems Explorer <span className="text-xs">↗</span>
                </a>
              </div>
            </div>
             
          </div>
          <div>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2">
                  Luxeports Systems Explorer <span className="text-xs">↗</span>
                </a>
              </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center pt-8 border-t border-border">
          <div className="flex items-center gap-4 mb-4 sm:mb-0">
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors"><Github size={20} /></a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors"><Youtube size={20} /></a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors"><Linkedin size={20} /></a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors"><MessageCircle size={20} /></a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors"><Globe size={20} /></a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors"><Send size={20} /></a>
          </div>

          <div className="text-muted-foreground text-sm">
            © Luxeports 2025
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

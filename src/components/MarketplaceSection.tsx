
const MarketplaceSection = () => {
  return (
    <section className="py-32 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center">
        <div className="mb-20">
          <div className="w-16 h-16 bg-blue-500/10 rounded-full mx-auto mb-8 flex items-center justify-center">
            <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">Decentralized Marketplace</h2>
          <p className="text-xl text-gray-600 mb-16 max-w-3xl mx-auto leading-relaxed">
            Leverage Luxports cross-chain protocol to access liquidity across all major networks
            with instant settlement and zero gas fees.
          </p>
        </div>

        {/* Trading Interface */}
        <div className="relative max-w-5xl mx-auto">
          <img src="/images/Market_chart.png" alt="market chart"/>
          {/* <div className="bg-keeta-dark rounded-3xl p-8 transform rotate-1 hover:rotate-0 transition-transform duration-500 shadow-2xl">
            <div className="bg-gray-900 rounded-2xl p-8">
              {/* Trading chart mockup *
              <div className="bg-black rounded-xl p-6 mb-6">
                <div className="flex justify-between items-center mb-4">
                  <div className="text-green-400 font-bold text-lg">BTC/USD</div>
                  <div className="text-white text-sm">Real-Time Trading</div>
                </div>
                <div className="h-64 relative">
                  {/* Chart lines *
                  <svg className="w-full h-full" viewBox="0 0 400 200">
                    <path 
                      d="M0,150 Q100,120 200,100 T400,80" 
                      stroke="#10b981" 
                      strokeWidth="2" 
                      fill="none"
                    />
                    <path 
                      d="M0,160 Q100,140 200,130 T400,110" 
                      stroke="#f59e0b" 
                      strokeWidth="1" 
                      fill="none" 
                      opacity="0.6"
                    />
                  </svg>
                </div>
              </div>
              
              {/* Trading pairs *
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-gray-800 rounded-xl p-4 text-white">
                  <div className="text-green-400 font-bold">ETH/USD</div>
                  <div className="text-2xl font-bold">$2,345.67</div>
                  <div className="text-green-400 text-sm">+2.34%</div>
                </div>
                <div className="bg-gray-800 rounded-xl p-4 text-white">
                  <div className="text-green-400 font-bold">BTC/USD</div>
                  <div className="text-2xl font-bold">$43,210.89</div>
                  <div className="text-green-400 text-sm">+1.85%</div>
                </div>
                <div className="bg-gray-800 rounded-xl p-4 text-white">
                  <div className="text-green-400 font-bold">SOL/USD</div>
                  <div className="text-2xl font-bold">$98.76</div>
                  <div className="text-green-400 text-sm">+5.67%</div>
                </div>
              </div>
            </div>
          </div>*/}
        </div> 
      </div>
    </section>
  );
};

export default MarketplaceSection;

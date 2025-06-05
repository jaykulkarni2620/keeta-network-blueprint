
const MarketplaceSection = () => {
  return (
    <section className="py-20 px-6 bg-gray-100">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Decentralized Marketplace</h2>
        <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
          Leverage Keeta's cross-chain protocol to access liquidity across all major networks
          with instant settlement and zero gas fees.
        </p>

        {/* Trading Interface Mockup */}
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl p-8 transform rotate-1 hover:rotate-0 transition-transform duration-500">
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <div className="h-32 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-blue-600 font-semibold">ETH/USD</span>
                  </div>
                  <div className="text-sm text-gray-600">$2,345.67</div>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <div className="h-32 bg-gradient-to-br from-green-100 to-green-200 rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-green-600 font-semibold">BTC/USD</span>
                  </div>
                  <div className="text-sm text-gray-600">$43,210.89</div>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <div className="h-32 bg-gradient-to-br from-purple-100 to-purple-200 rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-purple-600 font-semibold">SOL/USD</span>
                  </div>
                  <div className="text-sm text-gray-600">$98.76</div>
                </div>
              </div>
            </div>
          </div>

          {/* Callout Tooltips */}
          <div className="absolute -top-8 left-8 bg-white rounded-lg shadow-lg p-3 text-sm font-medium">
            Instant Cross Chain Swaps
            <div className="absolute bottom-0 left-4 transform translate-y-1/2 rotate-45 w-2 h-2 bg-white"></div>
          </div>

          <div className="absolute -bottom-8 right-8 bg-white rounded-lg shadow-lg p-3 text-sm font-medium">
            Real Time Liquidity Streaming
            <div className="absolute top-0 right-4 transform -translate-y-1/2 rotate-45 w-2 h-2 bg-white"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketplaceSection;

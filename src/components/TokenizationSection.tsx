
const TokenizationSection = () => {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Built-in Tokenization */}
          <div className="space-y-6">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-32 h-32 bg-gradient-to-br from-keeta-orange/20 to-transparent rounded-full"></div>
              <div className="relative bg-white rounded-2xl p-8 shadow-lg">
                <div className="w-16 h-16 bg-gradient-to-br from-keeta-orange to-keeta-orange-light rounded-full mx-auto mb-6 flex items-center justify-center">
                  <div className="w-8 h-8 border-2 border-white rounded-full"></div>
                </div>
                <h3 className="text-2xl font-bold text-center mb-4">Built-In Tokenization</h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  Native tokenization of real-world assets without the complexity of traditional blockchain implementations.
                </p>
              </div>
            </div>
          </div>

          {/* Built-in Compliance */}
          <div className="space-y-6">
            <div className="relative">
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-gradient-to-br from-green-400/20 to-transparent rounded-full"></div>
              <div className="relative bg-white rounded-2xl p-8 shadow-lg">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <div className="w-8 h-8 border-2 border-white rounded-full"></div>
                </div>
                <h3 className="text-2xl font-bold text-center mb-4">Built-In Compliance</h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  Regulatory compliance embedded at the protocol level, ensuring seamless operation across jurisdictions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TokenizationSection;

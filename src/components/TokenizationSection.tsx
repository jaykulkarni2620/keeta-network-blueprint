
const TokenizationSection = () => {
  return (
    <section className="py-32 px-6 bg-gray-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-1/4 w-64 h-64 border border-keeta-orange/20 rounded-full"></div>
      <div className="absolute bottom-20 right-20 w-4 h-4 bg-keeta-orange rounded-full"></div>
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="w-16 h-16 bg-keeta-orange/10 rounded-full mx-auto mb-8 flex items-center justify-center">
            <div className="w-8 h-8 bg-keeta-orange rounded-full"></div>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">Built-In Tokenization</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Native tokenization of real-world assets without the complexity of traditional blockchain 
            implementations. Simple, secure, and scalable.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TokenizationSection;

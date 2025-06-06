
const ComplianceSection = () => {
  return (
    <section className="py-32 px-6 bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-1/4 w-64 h-64 border border-green-200/30 rounded-full"></div>
      <div className="absolute bottom-20 left-20 w-4 h-4 bg-green-400 rounded-full"></div>
      
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image placeholder */}

          <div className="relative">
            
            {/* <div className="bg-gray-100 rounded-3xl p-8 aspect-square flex items-center justify-center">
              <div className="w-48 h-32 bg-white rounded-2xl shadow-lg flex items-center justify-center">
                 */}
                <div className="text-gray-400 font-medium"></div>
              {/* </div>
            </div> */}
           <img className="w-full h-full object-contain" src="/images/img-builtin-compliance.webp" alt=""/>
          <div className="absolute -top-8 -right-8 w-64 h-64 border border-green-200/20 rounded-full">
          </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div className="w-16 h-16 bg-green-400/10 rounded-full flex items-center justify-center">
              <div className="w-8 h-8 bg-green-400 rounded-full"></div>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold">Built-In Compliance</h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Regulatory compliance embedded at the protocol level, ensuring seamless operation across 
              all jurisdictions. Built for the real world, ready for tomorrow.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComplianceSection;

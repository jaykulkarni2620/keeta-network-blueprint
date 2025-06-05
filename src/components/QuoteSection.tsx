
const QuoteSection = () => {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <div className="text-6xl text-keeta-orange mb-8">"</div>
        <blockquote className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 leading-tight">
          Keeta is orders of magnitude more scalable and efficient than existing solutions.
        </blockquote>
        <div className="text-sm text-gray-600 uppercase tracking-wider">
          <div className="font-semibold">Eric Schmidt</div>
          <div>Former CEO of Google</div>
        </div>
      </div>
    </section>
  );
};

export default QuoteSection;

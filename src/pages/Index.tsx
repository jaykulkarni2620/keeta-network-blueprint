
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import KeyFeaturesSection from '@/components/KeyFeaturesSection';
import QuoteSection from '@/components/QuoteSection';
import TokenizationSection from '@/components/TokenizationSection';
import MarketplaceSection from '@/components/MarketplaceSection';
import ComparisonTable from '@/components/ComparisonTable';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <KeyFeaturesSection />
      <QuoteSection />
      <TokenizationSection />
      <MarketplaceSection />
      <ComparisonTable />
      <Footer />
    </div>
  );
};

export default Index;

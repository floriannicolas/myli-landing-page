import Header from '@/components/header';
import Footer from '@/components/footer';

import HeroSection from '@/components/home/hero-section';
import ComparisonSection from '@/components/home/comparison-section';
import ProductsSection from '@/components/home/products-section';
import SectorsSection from '@/components/home/sectors-section';
import StoresSection from '@/components/home/stores-section';
import TeamSection from '@/components/home/team-section';
import ToolsSection from '@/components/home/tools-section';
import ChatSection from '@/components/home/chat-section';
import TrialSection from '@/components/home/trial-section';

export default function Home() {
  return (
    <main className="relative min-h-screen pt-18 lg:pt-28">
      <Header />
      <HeroSection />
      <ComparisonSection />
      <StoresSection />
      <ToolsSection />
      <ProductsSection />
      <SectorsSection />
      <TeamSection />
      <ChatSection />
      <TrialSection />
      <Footer />
    </main>
  );
}

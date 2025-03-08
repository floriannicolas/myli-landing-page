import ChatSection from "@/components/chat-section";
import ComparisonSection from "@/components/comparison-section";
import Footer from "@/components/footer";
import HeroSection from "@/components/hero-section";
import NavBar from "@/components/navbar";
import ProductsSection from "@/components/products-section";
import SectorsSection from "@/components/sectors-section";
import StoresSection from "@/components/stores-section";
import TeamSection from "@/components/team-section";
import ToolsSection from "@/components/tools-section";
import TrialSection from "@/components/trial-section";

export default function Home() {
  return (
    <main className="min-h-screen">
      <NavBar />
      <div className="relative pt-[104px]">
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
      </div>
    </main>
  );
}

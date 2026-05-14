import ScrollingTicker from "@/components/ScrollingTicker";
import StickyHeader from "@/components/StickyHeader";
import HeroSection from "@/components/HeroSection";
import FeatureSlider from "@/components/FeatureSlider";
import StatsBento from "@/components/StatsBento";
import ScrollytellingSection from "@/components/ScrollytellingSection";
import FivePillarsBento from "@/components/FivePillarsBento";
import EmotionalCarousel from "@/components/EmotionalCarousel";
import FinalCTA from "@/components/FinalCTA";

export default function Home() {
  return (
    <main className="w-full">
      <ScrollingTicker />
      <StickyHeader />
      <HeroSection />
      <FeatureSlider />
      <StatsBento />
      <ScrollytellingSection />
      <FivePillarsBento />
      <EmotionalCarousel />
      <FinalCTA />
    </main>
  );
}

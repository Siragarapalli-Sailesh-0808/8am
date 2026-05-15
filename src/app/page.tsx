import ScrollingTicker from "@/components/ScrollingTicker";
import StickyHeader from "@/components/StickyHeader";
import HeroSection from "@/components/HeroSection";
import MobilityExperience from "@/components/MobilityExperience";
import StudentsArrive from "@/components/StudentsArrive";
import FamilyConfidence from "@/components/FamilyConfidence";
import DistrictEfficiency from "@/components/DistrictEfficiency";
import ParentAssurance from "@/components/ParentAssurance";
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
      <MobilityExperience />
      <StudentsArrive />
      <FamilyConfidence />
      <DistrictEfficiency />
      <ParentAssurance />
      <ScrollytellingSection />
      <FivePillarsBento />
      <EmotionalCarousel />
      <FinalCTA />
    </main>
  );
}

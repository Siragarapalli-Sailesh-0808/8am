import { Bell, ShieldCheck } from "lucide-react";
import FeatureSplit from "./FeatureSplit";

export default function FamilyConfidence() {
  return (
    <FeatureSplit
      bg="bg-[#F8F7F2]"
      imageFirst
      badge={{ label: "Transparency", className: "bg-[#E0B100]/15 text-[#7A5F00]" }}
      title={
        <>
          Families gain <span className="headline-italic text-[#E0B100]">trust</span> and{" "}
          <span className="headline-italic text-[#E0B100]">confidence</span>
        </>
      }
      paragraphs={[
        "Students and families get a consistent, transparent experience that keeps them informed on every ride.",
        "Parents and caregivers see where their children are in real time, and are told proactively about changes, delays and how issues were resolved.",
      ]}
      image={{ src: "/media/indian-mother.webp", alt: "A mother checking her child's bus on the 8AM app" }}
      cards={[
        {
          icon: <Bell size={22} className="text-[#B08A00]" />,
          iconBg: "bg-[#E0B100]/10",
          title: "Bus 04: Arrived",
          subtitle: <span className="text-green-700">Safe arrival confirmed</span>,
        },
        {
          icon: <ShieldCheck size={22} className="text-green-700" />,
          iconBg: "bg-green-50",
          title: "Live visibility",
          subtitle: <span className="text-gray-500">Only for verified parents</span>,
        },
      ]}
    />
  );
}

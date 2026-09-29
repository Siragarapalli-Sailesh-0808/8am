import { TrendingUp, BarChart3 } from "lucide-react";
import FeatureSplit from "./FeatureSplit";

export default function DistrictEfficiency() {
  return (
    <FeatureSplit
      badge={{ label: "Efficiency", className: "bg-blue-50 text-blue-800" }}
      title={
        <>
          Institutions do more <span className="headline-italic text-[#E0B100]">with less</span>
        </>
      }
      paragraphs={[
        "Schools run transport from one unified platform. Routes are designed and optimised so students spend less time on the bus.",
        "Right-sized vehicles and fewer overlapping routes mean lower running costs without losing coverage, with people, vehicles and data connected in real time.",
      ]}
      image={{ src: "/media/indian-admin.webp", alt: "School administrator managing bus routes on a dashboard" }}
      cards={[
        {
          icon: <TrendingUp size={22} className="text-blue-700" />,
          iconBg: "bg-blue-50",
          title: "Fuel-aware routing",
          subtitle: <span className="text-gray-500">Fewer wasted kilometres</span>,
        },
        {
          icon: <BarChart3 size={22} className="text-[#B08A00]" />,
          iconBg: "bg-[#FDF7E7]",
          title: "Unified command",
          subtitle: <span className="text-gray-500">One live dashboard</span>,
        },
      ]}
    />
  );
}

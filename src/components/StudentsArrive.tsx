import { CheckCircle2, Clock, UserRound, Bus } from "lucide-react";
import FeatureSplit from "./FeatureSplit";

export default function StudentsArrive() {
  return (
    <FeatureSplit
      badge={{ label: "Reliability", className: "bg-green-100 text-green-800" }}
      title={
        <>
          Students arrive on time and{" "}
          <span className="headline-italic text-[#E0B100]">ready to learn</span>
        </>
      }
      paragraphs={[
        "Drivers and transport teams get the right information and tools to focus on safe driving and the student experience.",
        "Coordinators can adjust routes and dispatch on the fly to prevent delays, so ride times are shorter and late arrivals to class become rare.",
      ]}
      image={{ src: "/media/indian-school-bus.webp", alt: "Students getting off a school bus at school" }}
      cards={[
        {
          icon: <UserRound size={22} className="text-green-700" />,
          iconBg: "bg-green-50",
          title: "Student boarded",
          subtitle: (
            <span className="flex items-center text-green-700">
              <CheckCircle2 size={10} className="mr-1" /> Picked up · Grade 5
            </span>
          ),
        },
        {
          icon: <Bus size={22} className="text-[#B08A00]" />,
          iconBg: "bg-[#FDF7E7]",
          title: "Bus 04",
          subtitle: (
            <span className="flex items-center text-[#B08A00]">
              <Clock size={10} className="mr-1" /> Arriving now
            </span>
          ),
        },
      ]}
    />
  );
}

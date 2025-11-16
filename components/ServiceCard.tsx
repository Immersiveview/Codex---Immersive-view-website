import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  points: string[];
  icon: LucideIcon;
}

export default function ServiceCard({ title, description, points, icon: Icon }: ServiceCardProps) {
  return (
    <div className="p-6 bg-white rounded-2xl border shadow-sm hover:shadow-xl hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300 cursor-pointer">
      <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gray-200 p-3 text-black shadow-sm">
        <Icon className="h-7 w-7" />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <ul className="space-y-1 text-sm text-gray-700">
        {points.map((point) => (
          <li key={point} className="flex items-start gap-2">
            <span className="text-green-600 mt-0.5">✓</span>
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

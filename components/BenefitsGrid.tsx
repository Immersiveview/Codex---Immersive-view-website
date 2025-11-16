import { LucideIcon } from "lucide-react";

export interface Benefit {
  title: string;
  text: string;
  icon: LucideIcon;
}

interface BenefitsGridProps {
  items: Benefit[];
}

export default function BenefitsGrid({ items }: BenefitsGridProps) {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-3 mt-12">
      {items.map((benefit) => {
        const Icon = benefit.icon;
        return (
          <div
            key={benefit.title}
            className="rounded-2xl border bg-white p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300 cursor-pointer"
          >
            <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gray-200 p-3 text-black shadow-sm">
              <Icon className="h-7 w-7" />
            </div>
            <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
            <p className="text-gray-600">{benefit.text}</p>
          </div>
        );
      })}
    </div>
  );
}


import { Check } from "lucide-react";
import { Button } from "./ui/button";

interface PricingCardProps {
  title: string;
  subtitle: string;
  price: string;
  features: string[];
  ctaText: string;
  isPopular?: boolean;
  onSelect: () => void;
}

export function PricingCard({
  title,
  subtitle,
  price,
  features,
  ctaText,
  isPopular = false,
  onSelect,
}: PricingCardProps) {
  return (
    <div
      className={`relative flex flex-col rounded-xl border-2 p-6 sm:p-8 transition-all hover:shadow-2xl ${
        isPopular
          ? "border-[#00D1C2] bg-gradient-to-b from-white to-[#00D1C2]/5 scale-105 shadow-xl"
          : "border-gray-200 bg-white hover:border-[#00D1C2]/50"
      }`}
    >
      {isPopular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#00D1C2] text-[#01253A] px-6 py-1.5 rounded-full font-condensed tracking-wide whitespace-nowrap">
          MOST POPULAR 🏆
        </div>
      )}
      
      <div className="mb-6">
        <h3 className="text-[#01253A] mb-2">{title}</h3>
        <p className="text-gray-600 font-condensed">{subtitle}</p>
      </div>

      <div className="mb-6">
        <div className="flex items-baseline gap-1">
          <span className="text-5xl font-bold text-[#01253A]">${price}</span>
        </div>
      </div>

      <ul className="space-y-3 mb-8 flex-1">
        {features.map((feature, index) => {
          const isSubItem = feature.startsWith('•');
          
          if (isSubItem) {
            return (
              <li key={index} className="flex items-start gap-3 pl-8">
                <span className="text-gray-600 text-sm leading-snug">{feature}</span>
              </li>
            );
          }
          
          return (
            <li key={index} className="flex items-start gap-3">
              <Check className="w-5 h-5 text-[#00D1C2] mt-0.5 flex-shrink-0" />
              <span className="text-gray-700 leading-relaxed">{feature}</span>
            </li>
          );
        })}
      </ul>

      <Button
        onClick={onSelect}
        className={`w-full py-6 transition-all ${
          isPopular
            ? "bg-[#01253A] hover:bg-[#01253A]/90 text-white"
            : "bg-[#00D1C2] hover:bg-[#00D1C2]/90 text-[#01253A]"
        }`}
      >
        {ctaText}
      </Button>
    </div>
  );
}

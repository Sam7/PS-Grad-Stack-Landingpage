import { TrendingDown } from "lucide-react";

export function InfographicPlaceholder() {
  const stages = [
    { label: "Stage 1: Applications", count: "10,000", percent: "100%" },
    { label: "Stage 2: ATS Filter", count: "6,000", percent: "60%", drop: "40% eliminated by robots" },
    { label: "Stage 3: Psychometric Test", count: "2,400", percent: "24%", drop: "30-60% fail here" },
    { label: "Stage 4: Video Interview", count: "1,440", percent: "14.4%", drop: "20-40% rejected by AI" },
    { label: "Stage 5: Assessment Centre", count: "600", percent: "6%", drop: "Final human stage" },
    { label: "Stage 6: Offers", count: "300", percent: "3%", drop: "Only 3% succeed" },
  ];

  return (
    <div className="bg-gradient-to-br from-[#01253A] to-[#01253A]/80 rounded-2xl p-8 sm:p-12 text-white my-12">
      <div className="text-center mb-10">
        <h3 className="text-3xl sm:text-4xl text-[#00D1C2] mb-4">
          Graduate Program Application Funnel
        </h3>
        <p className="text-gray-300 font-condensed">
          The brutal reality of 10,000 applicants competing for 300 positions
        </p>
      </div>

      <div className="space-y-4 max-w-3xl mx-auto">
        {stages.map((stage, index) => (
          <div key={index} className="relative">
            <div
              className="bg-white/10 backdrop-blur-sm rounded-lg p-4 sm:p-6 border border-white/20 transition-all hover:bg-white/15"
              style={{
                width: `${parseFloat(stage.percent)}%`,
                minWidth: "280px",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-condensed tracking-wide">{stage.label}</span>
                <span className="text-2xl sm:text-3xl font-bold text-[#00D1C2]">
                  {stage.count}
                </span>
              </div>
              {stage.drop && (
                <div className="flex items-center gap-2 text-sm text-[#F93A20]">
                  <TrendingDown className="w-4 h-4" />
                  <span className="font-condensed">{stage.drop}</span>
                </div>
              )}
            </div>
            {index < stages.length - 1 && (
              <div className="flex justify-center my-2">
                <div className="w-0.5 h-6 bg-gradient-to-b from-white/40 to-transparent" />
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-10 text-center">
        <p className="text-[#FCDC3F] font-condensed tracking-wide">
          94% of applicants are eliminated before they ever meet a human
        </p>
      </div>
    </div>
  );
}

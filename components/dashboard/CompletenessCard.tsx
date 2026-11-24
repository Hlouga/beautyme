import Link from "next/link";

type CompletenessProps = {
  hasBio: boolean;
  hasServices: boolean;
  hasPortfolio: boolean;
  hasHours: boolean;
};

export function CompletenessCard({ hasBio, hasServices, hasPortfolio, hasHours }: CompletenessProps) {
  // Calculate percentage (25% per section)
  const completedSteps = [hasBio, hasServices, hasPortfolio, hasHours].filter(Boolean).length;
  const percentage = completedSteps * 25;

  // If they are 100% complete, don't show this card anymore
  if (percentage === 100) return null;

  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#8600B3]/20 bg-gradient-to-br from-white to-[#8600B3]/5 mb-8">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className="text-lg font-bold text-[#1A1A2E]">Complete Your Profile</h2>
          <p className="text-sm text-gray-500">Providers with complete profiles get 4x more clients.</p>
        </div>
        <span className="text-2xl font-extrabold text-[#8600B3]">{percentage}%</span>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-gray-200 rounded-full h-3 mb-6">
        <div 
          className="bg-[#8600B3] h-3 rounded-full transition-all duration-500" 
          style={{ width: `${percentage}%` }}
        ></div>
      </div>

      {/* Checklist */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
        <div className="flex items-center gap-2">
          <span className={hasBio ? "text-green-500" : "text-gray-300"}>{hasBio ? "✓" : "○"}</span>
          <span className={hasBio ? "text-gray-500 line-through" : "text-[#1A1A2E] font-medium"}>Add a Bio</span>
        </div>
        <div className="flex items-center gap-2">
          <span className={hasServices ? "text-green-500" : "text-gray-300"}>{hasServices ? "✓" : "○"}</span>
          <span className={hasServices ? "text-gray-500 line-through" : "text-[#1A1A2E] font-medium"}>
            <Link href="/dashboard/services" className="hover:underline">List Services</Link>
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className={hasPortfolio ? "text-green-500" : "text-gray-300"}>{hasPortfolio ? "✓" : "○"}</span>
          <span className={hasPortfolio ? "text-gray-500 line-through" : "text-[#1A1A2E] font-medium"}>
            <Link href="/dashboard/portfolio" className="hover:underline">Upload Photos</Link>
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className={hasHours ? "text-green-500" : "text-gray-300"}>{hasHours ? "✓" : "○"}</span>
          <span className={hasHours ? "text-gray-500 line-through" : "text-[#1A1A2E] font-medium"}>
            <Link href="/dashboard/hours" className="hover:underline">Set Business Hours</Link>
          </span>
        </div>
      </div>
    </div>
  );
}
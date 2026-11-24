"use client";

import { useRouter, useSearchParams } from "next/navigation";

const categories = [
  { label: "All Categories", value: "all" },
  { label: "Hairdresser", value: "hairdresser" },
  { label: "Makeup Artist", value: "makeup_artist" },
  { label: "Nail Technician", value: "nail_technician" },
  { label: "Massage Therapist", value: "massage_therapist" },
  { label: "Other", value: "other" },
];

export function CategoryFilter() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentCategory = searchParams.get("category") || "all";

  const handleCategoryClick = (value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    
    if (value === "all") {
      params.delete("category");
    } else {
      params.set("category", value);
    }
    
    router.push(`/search?${params.toString()}`, { scroll: false });
  };

  return (
    <div className="flex flex-col gap-1 w-full">
      {categories.map((cat) => (
        <button
          key={cat.value}
          onClick={() => handleCategoryClick(cat.value)}
          className={`text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
            currentCategory === cat.value
              ? "bg-[#8600B3]/10 text-[#8600B3]"
              : "text-gray-600 hover:bg-gray-50 hover:text-[#1A1A2E]"
          }`}
        >
          {cat.label}
        </button>
      ))}
    </div>
  );
}
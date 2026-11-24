import Link from "next/link";

type ProviderCardProps = {
  provider: {
    slug: string;
    displayName: string;
    category: string;
    city: string;
    portfolioItems: { imageKey: string }[];
  };
};

export function ProviderCard({ provider }: ProviderCardProps) {
  const featuredImage = provider.portfolioItems?.[0]?.imageKey;
  const imageUrl = featuredImage 
    ? `${process.env.NEXT_PUBLIC_R2_PUBLIC_URL}/${featuredImage}`
    : null;

  return (
    // We add 'block' and 'cursor-pointer' to ensure the whole area is clickable
    <Link 
      href={`/providers/${provider.slug}`}
      className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer block"
    >
      <div className="relative aspect-[4/5] bg-[#8600B3]/5 overflow-hidden pointer-events-none">
        {imageUrl ? (
          <img 
            src={imageUrl} 
            alt={`${provider.displayName} portfolio`}
            className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-[#8600B3]/10 text-[#8600B3]">
            <span className="text-5xl font-extrabold opacity-20 uppercase">
              {provider.displayName.charAt(0)}
            </span>
          </div>
        )}
        
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] uppercase tracking-widest font-bold text-[#1A1A2E] shadow-sm">
          {provider.category.replace("_", " ")}
        </div>
      </div>

      <div className="p-5 border-t border-gray-50">
        <h3 className="font-bold text-lg text-[#1A1A2E] group-hover:text-[#8600B3] transition-colors line-clamp-1">
          {provider.displayName}
        </h3>
        <p className="text-sm text-gray-500 mt-1">{provider.city}</p>
      </div>
    </Link>
  );
}
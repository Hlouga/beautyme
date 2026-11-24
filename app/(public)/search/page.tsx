import { getPublishedProviders } from "@/db/queries/providers";
import { ProviderCard } from "@/components/discovery/ProviderCard";
import { CategoryFilter } from "@/components/discovery/CategoryFilter";
import { CityFilter } from "@/components/discovery/CityFilter";
import { Suspense } from "react";

export const instant = false;

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const resolvedParams = await searchParams;
  const query = typeof resolvedParams.q === "string" ? resolvedParams.q : undefined;
  const category = typeof resolvedParams.category === "string" ? resolvedParams.category : undefined;
  const city = typeof resolvedParams.city === "string" ? resolvedParams.city : undefined;

  const providers = await getPublishedProviders({ query, category, city });

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8 md:py-12 flex flex-col md:flex-row gap-8">
      
      {/* Sidebar Filters */}
      <aside className="w-full md:w-64 shrink-0">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 sticky top-24">
          <h2 className="font-bold text-xl text-[#1A1A2E] mb-6">Filters</h2>
          
          <div className="mb-8">
            <CityFilter />
          </div>
          
          <div>
             <label className="block text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wider">Category</label>
             <Suspense fallback={<div className="h-48 bg-gray-100 animate-pulse rounded-lg" />}>
               <CategoryFilter /> 
             </Suspense>
          </div>
        </div>
      </aside>

      {/* Results */}
      <div className="flex-1">
        <div className="mb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-[#1A1A2E]">
              {query ? `Search results for "${query}"` : "All Providers"}
            </h1>
            <p className="text-gray-500 mt-1">{providers.length} {providers.length === 1 ? 'provider' : 'providers'} found</p>
          </div>
        </div>

        {providers.length === 0 ? (
          <div className="bg-white p-12 rounded-3xl border border-gray-100 text-center shadow-sm">
            <h3 className="text-xl font-bold text-[#1A1A2E] mb-2">No providers found</h3>
            <p className="text-gray-500">Try adjusting your location or category filters.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {providers.map((provider) => (
              <ProviderCard key={provider.id} provider={provider} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
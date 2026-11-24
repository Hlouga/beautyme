import { getPublishedProviders } from "@/db/queries/providers";
import { ProviderCard } from "@/components/discovery/ProviderCard";
import { notFound } from "next/navigation";
import Link from "next/link";

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;

  // Fetch providers that match this category
  const providers = await getPublishedProviders({ category });

  // Capitalize the category name for the UI
  const categoryName = category.replace("_", " ");
  const formattedName = categoryName.charAt(0).toUpperCase() + categoryName.slice(1);

  if (providers.length === 0 && category !== "all") {
    // We don't want to 404 if a category is just empty, but we can show a nice empty state
  }

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-12 flex flex-col gap-8 min-h-[60vh]">
      
      {/* Header */}
      <div className="flex flex-col gap-2">
        <Link href="/" className="text-sm text-gray-500 hover:text-[#8600B3] w-fit mb-2">
          &larr; Back to Home
        </Link>
        <h1 className="text-4xl font-extrabold text-[#1A1A2E] capitalize">
          {formattedName} Providers
        </h1>
        <p className="text-gray-500">
          Discover top-rated {formattedName.toLowerCase()} professionals near you.
        </p>
      </div>

      {/* Results Grid */}
      {providers.length === 0 ? (
        <div className="bg-white p-12 rounded-3xl border border-gray-100 text-center shadow-sm mt-4">
          <h3 className="text-xl font-bold text-[#1A1A2E] mb-2">No providers found</h3>
          <p className="text-gray-500 mb-6">We couldn't find any {formattedName.toLowerCase()} professionals yet.</p>
          <Link href="/search" className="bg-[#8600B3] text-white px-6 py-2 rounded-lg font-medium hover:bg-[#6e0093] transition-colors">
            Browse all providers
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {providers.map((provider) => (
            <ProviderCard key={provider.id} provider={provider} />
          ))}
        </div>
      )}
    </div>
  );
}
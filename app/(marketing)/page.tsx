import { getPublishedProviders } from "@/db/queries/providers";
import { ProviderCard } from "@/components/discovery/ProviderCard";
import { SearchBar } from "@/components/discovery/SearchBar";
import { Suspense } from "react";
import Link from "next/link";
import Image from "next/image";

// Separate component for fetching database data
async function FeaturedProviders() {
  const providers = await getPublishedProviders({});
  
  if (providers.length === 0) {
    return (
      <div className="bg-white p-12 rounded-3xl border border-gray-100 text-center w-full shadow-sm">
        <p className="text-gray-500 mb-4">No providers found yet.</p>
        <Link href="/signup" className="text-[#8600B3] font-medium hover:underline">
          Be the first to join!
        </Link>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full">
      {providers.slice(0, 4).map((provider) => (
        <ProviderCard key={provider.id} provider={provider} />
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      
      {/* Hero Section with Background Image */}
      <section className="relative w-full min-h-[500px] pt-32 pb-24 flex flex-col items-center justify-center text-center px-4 overflow-hidden">
        
        {/* 1. The Background Image */}
        <Image
          src="/background.jpeg"
          alt="Beauty background"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* 2. The Dark Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>
        
        {/* 3. Content on top of image */}
        <div className="relative z-10 w-full flex flex-col items-center">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight max-w-3xl text-white leading-tight mb-6 drop-shadow-lg">
            Discover local <span className="text-[#D480FF]">creatives</span> and <span className="text-[#D480FF]">beauty pros</span>.
          </h1>
          
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mb-10 drop-shadow-md">
            The visual directory for independent hairdressers, nail technicians, massage therapists, and crafters.
          </p>

          {/* The working Search Bar component */}
          <div className="w-full max-w-2xl">
            <Suspense fallback={<div className="h-16 w-full bg-gray-100/20 backdrop-blur-sm rounded-full animate-pulse" />}>
              <SearchBar />
            </Suspense>
          </div>
        </div>
      </section>

      {/* Discovery Feed */}
      <section className="w-full max-w-7xl mx-auto px-4 py-16 pb-24">
        
                        {/* Browse by Category */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-[#1A1A2E] mb-6">Browse by category</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { 
                label: "Hairdresser", 
                value: "hairdresser",
                image: "https://images.unsplash.com/photo-1780504542368-0c5be0c95f86?q=80&w=600&auto=format&fit=crop"
              },
              { 
                label: "Massage", 
                value: "massage_therapist",
                image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=600&auto=format&fit=crop"
              },
              { 
                label: "Nails", 
                value: "nail_technician",
                image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=600&auto=format&fit=crop"
              },
              { 
                label: "Makeup", 
                value: "makeup_artist",
                image: "https://images.unsplash.com/photo-1764333746348-1df13b3a4aae?q=80&w=600&auto=format&fit=crop"
              },
            ].map((cat) => (
              <Link 
                key={cat.value}
                href={`/search?category=${cat.value}`}
                className="group relative h-48 rounded-2xl overflow-hidden cursor-pointer block border border-gray-200 hover:border-[#8600B3] hover:shadow-lg transition-all"
                style={{
                  backgroundImage: `url(${cat.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A2E]/90 via-[#1A1A2E]/20 to-transparent pointer-events-none"></div>
                
                {/* Label */}
                <div className="absolute bottom-4 left-4 right-4 pointer-events-none">
                  <span className="text-white font-bold text-lg drop-shadow-md">{cat.label}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Featured Providers Grid */}
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-2xl font-bold text-[#1A1A2E]">Featured Providers</h2>
          </div>
          <Link href="/search" className="text-[#8600B3] font-medium hover:underline text-sm">
            View all &rarr;
          </Link>
        </div>

        <Suspense fallback={
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-80 bg-gray-100 animate-pulse rounded-2xl"></div>
            ))}
          </div>
        }>
          <FeaturedProviders />
        </Suspense>
        
      </section>
    </div>
  );
}
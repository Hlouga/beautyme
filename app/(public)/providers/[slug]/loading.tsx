export default function Loading() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FAF8FC]">
      {/* Hero Skeleton */}
      <div className="w-full h-64 md:h-80 bg-gray-200 animate-pulse"></div>

      <div className="container mx-auto px-4 max-w-4xl -mt-20 relative z-10">
        {/* Profile Header Skeleton */}
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 flex flex-col items-center text-center animate-pulse">
          <div className="w-32 h-32 bg-gray-200 rounded-full border-4 border-white shadow-sm mb-4"></div>
          <div className="h-8 bg-gray-200 rounded w-1/2 mb-4"></div>
          <div className="h-4 bg-gray-200 rounded w-1/4 mb-6"></div>
          <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
          <div className="h-4 bg-gray-200 rounded w-2/3 mb-8"></div>
          <div className="h-12 bg-gray-200 rounded-full w-40"></div>
        </div>
        
        {/* Content Skeleton */}
        <div className="mt-12 mb-20 animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-1/4 mb-6"></div>
          <div className="bg-white p-12 rounded-3xl border border-gray-100 shadow-sm h-64"></div>
        </div>
      </div>
    </div>
  );
}
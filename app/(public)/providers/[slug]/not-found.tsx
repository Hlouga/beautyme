import Link from "next/link";

export default function ProviderNotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center bg-[#FAF8FC]">
      <h2 className="text-7xl font-extrabold text-[#8600B3] mb-4">404</h2>
      <h3 className="text-2xl font-bold text-[#1A1A2E] mb-2">Provider Not Found</h3>
      <p className="text-gray-600 mb-8 max-w-md">
        We couldn't find the provider you're looking for. They may have removed their profile or the link is incorrect.
      </p>
      <Link 
        href="/"
        className="bg-[#8600B3] hover:bg-[#6e0093] text-white px-6 py-3 rounded-full font-medium transition-colors"
      >
        Back to Discovery
      </Link>
    </div>
  );
}
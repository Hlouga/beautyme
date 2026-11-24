import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
      <h2 className="text-7xl font-extrabold text-[#8600B3] mb-4">404</h2>
      <h3 className="text-2xl font-bold text-[#1A1A2E] mb-2">Page Not Found</h3>
      <p className="text-gray-600 mb-8 max-w-md">
        Oops! We couldn't find the page you're looking for. It might have been moved or doesn't exist.
      </p>
      <Link 
        href="/"
        className="bg-[#8600B3] hover:bg-[#6e0093] text-white px-6 py-3 rounded-full font-medium transition-colors"
      >
        Back to Home
      </Link>
    </div>
  );
}
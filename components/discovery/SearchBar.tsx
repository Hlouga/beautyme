export function SearchBar() {
  return (
    <form 
      action="/search" 
      method="GET" 
      className="w-full flex items-center bg-white rounded-full shadow-2xl border border-gray-100 p-2"
    >
      <input
        type="text"
        name="q"
        placeholder="Search by service, name, or city..."
        className="flex-1 px-6 py-3 bg-transparent outline-none text-[#1A1A2E] placeholder-gray-400"
      />
      <button 
        type="submit" 
        className="bg-[#8600B3] hover:bg-[#6e0093] text-white px-8 py-3 rounded-full font-medium transition-colors cursor-pointer"
      >
        Search
      </button>
    </form>
  );
}
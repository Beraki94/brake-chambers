import React from 'react';
import { Search } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface DesktopSearchProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  showDropdown: boolean;
  setShowDropdown: (show: boolean) => void;
  searchResults: Array<{ type: string; item: any }>;
  handleSearch: (e: React.FormEvent) => void;
  searchContainerRef: React.RefObject<HTMLDivElement | null>;
}

export default function DesktopSearch({
  searchQuery,
  setSearchQuery,
  showDropdown,
  setShowDropdown,
  searchResults,
  handleSearch,
  searchContainerRef
}: DesktopSearchProps) {
  const router = useRouter();

  return (
    <div className="flex-1 w-full mx-auto hidden lg:block max-w-4xl" ref={searchContainerRef}>
      <div className="relative group">
        <form onSubmit={handleSearch} className="relative group flex items-center w-full bg-white rounded-full border border-transparent focus-within:border-slate-500 focus-within:bg-white focus-within:ring-4 focus-within:ring-slate-500/10 transition-all overflow-hidden shadow-sm">
          <Search className="h-5 w-5 text-navy-400 ml-4 group-focus-within:text-slate-600 transition-colors" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setShowDropdown(true);
            }}
            onFocus={() => setShowDropdown(true)}
            placeholder="Search BRC catalog or part numbers..."
            className="flex-1 bg-transparent py-3 px-3 text-sm text-navy-900 focus:outline-none"
          />
          <button type="submit" className="pr-5 pl-3 flex items-center justify-center hover:bg-slate-50 h-full transition-colors text-navy-600 font-medium text-sm">
            Search
          </button>
        </form>

        {/* Desktop Live Search Dropdown */}
        {showDropdown && searchResults.length > 0 && (
          <div className="absolute top-full mt-2 left-0 w-full bg-white rounded-xl shadow-xl border border-navy-100 overflow-hidden z-50">
            <ul className="py-2 max-h-[400px] overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:bg-navy-200 [&::-webkit-scrollbar-track]:bg-navy-50">
              {searchResults.map((result) => (
                <li key={`${result.type}-${result.item.slug}`}>
                  <button
                    type="button"
                    onClick={() => {
                      router.push(`/${result.type}/${result.item.slug}`);
                      setShowDropdown(false);
                      setSearchQuery('');
                    }}
                    className="w-full text-left flex items-center gap-3 px-4 py-2 hover:bg-navy-50 transition-colors"
                  >
                    <div className="w-10 h-10 bg-navy-50 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-xl">⚙️</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-bold text-navy-900 truncate">{result.item.name}</p>
                      <p className="text-xs text-navy-500 capitalize">{result.type.replace('-', ' ')} &bull; {result.item.brandSlug}</p>
                    </div>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
        {showDropdown && searchQuery.trim() !== '' && searchResults.length === 0 && (
          <div className="absolute top-full mt-2 left-0 w-full bg-white rounded-xl shadow-xl border border-navy-100 overflow-hidden z-50 p-6 text-center">
            <p className="text-sm text-navy-500">No products found matching "{searchQuery}".</p>
          </div>
        )}
      </div>
    </div>
  );
}

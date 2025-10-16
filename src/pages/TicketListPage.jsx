import { Filter } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import TicketCard from "./TicketCard";
import { useNavigate, useLocation } from "react-router-dom";
import { useInfiniteTickets } from "../hooks/useInfiniteTickets";

const TicketListPage = ({ category }) => {
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [sortBy, setSortBy] = useState("featured");
  const [priceFilter, setPriceFilter] = useState("all");
  const [showFilters, setShowFilters] = useState(false);
  const containerRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  const { tickets, loadMore, isLoading, hasMore } = useInfiniteTickets(category);

  const handleSelectTicket = (ticket) => {
    setSelectedTicket(ticket);
    navigate(`/details/${ticket.id}`, { state: { category } });
  };

  useEffect(() => {
    if (!containerRef.current || !hasMore) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isLoading) loadMore();
      },
      { threshold: 0.1 }
    );

    const sentinel = containerRef.current.querySelector("[data-sentinel]");
    if (sentinel) observer.observe(sentinel);
    return () => sentinel && observer.unobserve(sentinel);
  }, [loadMore, isLoading, hasMore]);

  const filteredTickets = tickets.filter((ticket) => {
    if (priceFilter === "budget") return ticket.price < 50;
    if (priceFilter === "mid") return ticket.price >= 50 && ticket.price < 150;
    if (priceFilter === "premium") return ticket.price >= 150;
    return true;
  });

  const sortedTickets = [...filteredTickets].sort((a, b) => {
    if (sortBy === "price-low") return a.price - b.price;
    if (sortBy === "price-high") return b.price - a.price;
    if (sortBy === "rating") return b.rating - a.rating;
    return 0;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-emerald-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="mb-10">
          <div className="mb-8">
            <div className="inline-block mb-3 px-4 py-2 bg-blue-100 rounded-full">
              <span className="text-xs sm:text-sm md:text-base font-bold text-blue-700">
                ✨ PREMIUM SELECTION
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-emerald-500 to-blue-600 bg-clip-text text-transparent capitalize mb-3 leading-tight">
              {category}
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 font-medium">
              Discover and book amazing tickets for unforgettable experiences
            </p>
          </div>

          {/* Controls Section */}
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="flex-1 relative group">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-5 py-3 border-2 border-blue-200 rounded-xl bg-white text-gray-700 font-semibold focus:outline-none focus:border-blue-600 focus:ring-3 focus:ring-blue-100 transition-all cursor-pointer hover:border-blue-300 pr-10 text-sm sm:text-base md:text-lg"
              >
                <option value="featured">⭐ Featured</option>
                <option value="price-low">💰 Price: Low to High</option>
                <option value="price-high">💎 Price: High to Low</option>
                <option value="rating">🏆 Top Rated</option>
              </select>
              <div className="pointer-events-none absolute right-4 top-1/2 transform -translate-y-1/2 text-blue-600">
                <svg className="w-4 sm:w-5 h-4 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
            </div>

            <button
              onClick={() => setShowFilters(!showFilters)}
              className={`flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-sm sm:text-base md:text-lg transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg ${
                showFilters
                  ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white ring-2 ring-blue-300 ring-offset-2"
                  : "bg-gradient-to-r from-blue-600 to-emerald-600 text-white hover:from-blue-700 hover:to-emerald-700"
              }`}
            >
              <Filter size={20} strokeWidth={2.5} />
              <span>Filters</span>
            </button>
          </div>

          {/* Filters Panel */}
          {showFilters && (
            <div className="mt-6 p-6 sm:p-8 bg-white rounded-2xl border-2 border-blue-200 shadow-xl space-y-6 animate-fadeIn">
              <h3 className="font-bold text-lg sm:text-xl md:text-2xl text-gray-900 mb-4">
                Price Range Filters
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { value: "all", label: "All Prices", emoji: "📊", desc: "Show all ticket prices" },
                  { value: "budget", label: "Budget Options", emoji: "🤑", desc: "Under $50" },
                  { value: "mid", label: "Mid-Range", emoji: "💰", desc: "$50-$150" },
                  { value: "premium", label: "Premium Tickets", emoji: "💎", desc: "$150+" },
                ].map((filter) => (
                  <label
                    key={filter.value}
                    className="flex items-start gap-3 cursor-pointer p-4 rounded-xl hover:bg-gradient-to-br hover:from-blue-50 hover:to-emerald-50 transition-all border-2 border-gray-100 hover:border-blue-300 group"
                  >
                    <input
                      type="radio"
                      name="price"
                      value={filter.value}
                      checked={priceFilter === filter.value}
                      onChange={(e) => setPriceFilter(e.target.value)}
                      className="w-5 h-5 mt-1 accent-blue-600 cursor-pointer flex-shrink-0"
                    />
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="text-base sm:text-lg">{filter.emoji}</span>
                        <span className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors text-sm sm:text-base md:text-lg">
                          {filter.label}
                        </span>
                      </div>
                      <span className="text-xs sm:text-sm text-gray-500 group-hover:text-gray-700 transition-colors ml-7">
                        {filter.desc}
                      </span>
                    </div>
                  </label>
                ))}
              </div>
            </div>
          )}

          {/* Results Count */}
          <div className="mt-6 flex items-center gap-2 text-gray-700 font-medium text-sm sm:text-base md:text-lg">
            <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-blue-600 text-white text-xs sm:text-sm font-bold">
              {sortedTickets.length}
            </span>
            <span>Results Found</span>
          </div>
        </div>

        {/* Tickets Grid */}
        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {tickets.length > 0 ? (
            tickets.map((ticket) => (
              <TicketCard
                key={ticket.id}
                ticket={ticket}
                onSelect={() => handleSelectTicket(ticket, ticket.id, category)}
              />
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500 py-16 text-base sm:text-lg md:text-xl">
              No tickets found.
            </p>
          )}

          {/* Loading Sentinel */}
          <div data-sentinel className="col-span-full py-16 text-center">
            {isLoading && (
              <div className="flex flex-col items-center gap-6">
                <div className="flex justify-center items-center gap-3">
                  {[0, 150, 300].map((delay) => (
                    <div
                      key={delay}
                      className="w-3 h-3 rounded-full animate-bounce"
                      style={{
                        background: "linear-gradient(135deg, #2563EB 0%, #10B981 100%)",
                        animationDelay: `${delay}ms`,
                      }}
                    ></div>
                  ))}
                </div>
                <div className="space-y-2">
                  <p className="text-gray-800 font-bold text-base sm:text-lg md:text-xl">
                    Loading more amazing tickets...
                  </p>
                  <p className="text-gray-500 text-xs sm:text-sm md:text-base">
                    Hang tight, we're fetching the best deals for you!
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketListPage;

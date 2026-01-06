import { Filter, X } from "lucide-react";
import { useState, useEffect } from "react";
import TicketCard from "./TicketCard";
import { useNavigate } from "react-router-dom";
import { useInfiniteTickets } from "../hooks/useInfiniteTickets";
import { useInView } from "react-intersection-observer";
import useWindowSize from "../hooks/useWindowSize";

const TicketListPage = ({ category }) => {
  const { isMobile } = useWindowSize();
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [sortBy, setSortBy] = useState("featured");
  const [priceFilter, setPriceFilter] = useState("all");
  const [showFilters, setShowFilters] = useState(false);

  const navigate = useNavigate();
  const { ref, inView } = useInView();
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteTickets(category, priceFilter);

  const tickets = data?.pages.flatMap((page) => page.tickets) || [];

  const handleSelectTicket = (ticket) => {
    setSelectedTicket(ticket);
    navigate(`/details/${ticket.id}`, { state: { category } });
  };

  const filteredTickets = [...tickets]; // already filtered in queryFn
  const sortedTickets = [...filteredTickets].sort((a, b) => {
    if (sortBy === "price-low") return a.price - b.price;
    if (sortBy === "price-high") return b.price - a.price;
    if (sortBy === "rating") return b.rating - a.rating;
    return 0;
  });

  useEffect(() => {
    if (inView && hasNextPage) fetchNextPage();
  }, [inView, hasNextPage, fetchNextPage]);

  const filters = [
    {
      value: "all",
      label: "All Prices",
      emoji: "📊",
      desc: "Show all ticket prices",
    },
    {
      value: "budget",
      label: "Budget Options",
      emoji: "🤑",
      desc: "Under $50",
    },
    { value: "mid", label: "Mid-Range", emoji: "💰", desc: "$50–$150" },
    { value: "premium", label: "Premium", emoji: "💎", desc: "$150+" },
  ];

  const options = [
    { value: "featured", label: "⭐ Featured" },
    { value: "price-low", label: "💰 Price: Low to High" },
    { value: "price-high", label: "💎 Price: High to Low" },
    { value: "rating", label: "🏆 Top Rated" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-emerald-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
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

          {/* Controls */}
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="flex-1 relative group">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-1 py-3 border-2 border-blue-200 rounded-xl bg-white text-gray-700 font-semibold focus:outline-none focus:border-blue-600 transition-all cursor-pointer hover:border-blue-300 text-sm sm:text-base md:text-lg"
              >
                {options.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Filter button (same for all) */}
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

          {/* ✅ Web Filter (Desktop only) */}
          {isMobile ? (
            <div>
              {/* ✅ Mobile Filter Drawer */}
              {showFilters && (
                <div className="fixed inset-0 z-50 flex flex-col justify-end">
                  {/* Overlay */}
                  <div
                    onClick={() => setShowFilters(false)}
                    className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity"
                  ></div>

                  {/* Drawer */}
                  <div className="relative bg-white rounded-t-3xl p-6 shadow-2xl animate-slideUp max-h-[80vh] overflow-y-auto">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="font-bold text-lg text-gray-900">
                        Filters
                      </h3>
                      <button onClick={() => setShowFilters(false)}>
                        <X size={24} className="text-gray-600" />
                      </button>
                    </div>

                    <h4 className="font-semibold text-gray-800 mb-3">
                      Price Range
                    </h4>
                    <div className="space-y-3">
                      {filters.map((filter) => (
                        <label
                          key={filter.value}
                          className="flex items-center gap-3 p-3 border rounded-xl hover:bg-blue-50"
                        >
                          <input
                            type="radio"
                            name="price-mobile"
                            value={filter.value}
                            checked={priceFilter === filter.value}
                            onChange={(e) => setPriceFilter(e.target.value)}
                            className="accent-blue-600 w-5 h-5"
                          />
                          <div className="flex flex-col">
                            <span className="font-semibold text-gray-900">
                              {filter.emoji} {filter.label}
                            </span>
                            <span className="text-xs text-gray-500">
                              {filter.desc}
                            </span>
                          </div>
                        </label>
                      ))}
                    </div>

                    <button
                      onClick={() => setShowFilters(false)}
                      className="mt-6 w-full py-3 bg-gradient-to-r from-blue-600 to-emerald-600 text-white font-bold rounded-xl shadow-md hover:shadow-lg active:scale-95 transition-all"
                    >
                      Apply Filters
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div>
              {showFilters && (
                <div className="mt-6 p-6 bg-white rounded-2xl border-2 border-blue-200 shadow-xl space-y-6 animate-fadeIn">
                  <h3 className="font-bold text-xl text-gray-900 mb-4">
                    Price Range Filters
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    {filters.map((filter) => (
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
                            <span>{filter.emoji}</span>
                            <span className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                              {filter.label}
                            </span>
                          </div>
                          <span className="text-xs text-gray-500 ml-7">
                            {filter.desc}
                          </span>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          <div className="mt-6 flex items-center gap-2 text-gray-700 font-medium text-sm sm:text-base md:text-lg">
            <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-blue-600 text-white text-xs font-bold">
              {sortedTickets.length}
            </span>
            <span>Results Found</span>
          </div>
        </div>

        {/* Ticket List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {sortedTickets.length > 0 ? (
            sortedTickets.map((ticket) => (
              <TicketCard
                key={ticket.id}
                category={category}
                ticket={ticket}
                onSelect={() => handleSelectTicket(ticket)}
              />
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500 py-16">
              No tickets found.
            </p>
          )}

          <div ref={ref} className="col-span-full py-16 text-center">
            {isFetchingNextPage && <p>Loading more tickets...</p>}
          </div>
        </div>
      </div>

      {/* Animation styles */}
      <style>{`
        @keyframes slideUp {
          from { transform: translateY(100%); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .animate-slideUp {
          animation: slideUp 0.35s ease-out;
        }
      `}</style>
    </div>
  );
};

export default TicketListPage;

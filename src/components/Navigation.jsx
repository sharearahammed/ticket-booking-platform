import { useState } from "react";
import { ShoppingCart, Menu, X, Search, User } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

const Navigation = ({ cartCount = 0 }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const currentPage = location.pathname;

  const navItems = [
    { page: "/", label: "Home", icon: "🏠" },
    { page: "/movies", label: "Movies", icon: "🎬" },
    { page: "/events", label: "Events", icon: "🎪" },
    { page: "/transportation", label: "Travel", icon: "🚌" },
  ];

  const handleNavigate = (page) => {
    navigate(page);
    setMobileMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-white via-blue-50 to-white border-b-2 border-blue-200 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo Section */}
          <div
            onClick={() => handleNavigate("/")}
            className="flex items-center gap-3 cursor-pointer group hover:opacity-90 transition-all duration-300"
          >
            <div className="relative">
              <div className="absolute -inset-1.5 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-lg blur opacity-40 group-hover:opacity-60 transition duration-300"></div>
              <div className="relative bg-white rounded-lg px-2.5 py-1.5 border-2 border-blue-200 group-hover:border-blue-300 transition-colors">
                <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
                  TH
                </span>
              </div>
            </div>
            <div className="hidden sm:block">
              <p className="font-bold text-lg text-gray-900">TicketHub</p>
              <p className="text-xs font-bold bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
                Book & Explore
              </p>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-2">
            {navItems.map((item) => {
              const isActive = currentPage === item.page;
              return (
                <button
                  key={item.page}
                  onClick={() => handleNavigate(item.page)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl font-semibold transition-all duration-300 relative group ${
                    isActive
                      ? "text-blue-600 bg-gradient-to-br from-blue-100 to-blue-50 border-2 border-blue-400 shadow-md"
                      : "text-gray-700 hover:text-blue-600 hover:bg-gradient-to-br hover:from-blue-50 hover:to-white border-2 border-transparent hover:border-blue-200"
                  }`}
                >
                  <span className="text-lg">{item.icon}</span>
                  <span>{item.label}</span>
                  {isActive && (
                    <div className="absolute bottom-0 left-4 right-4 h-1.5 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-t-full"></div>
                  )}
                </button>
              );
            })}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Search Button */}
            <button className="hidden sm:flex p-2.5 text-gray-600 hover:text-blue-600 transition-all hover:bg-gradient-to-br hover:from-blue-100 hover:to-blue-50 rounded-xl border-2 border-transparent hover:border-blue-300 group">
              <Search className="w-5 h-5" strokeWidth={2.5} />
            </button>

            {/* Cart Button */}
            <button
              onClick={() => handleNavigate("/cart")}
              className="relative p-2.5 text-gray-600 hover:text-blue-600 transition-all hover:bg-gradient-to-br hover:from-blue-100 hover:to-blue-50 rounded-xl border-2 border-transparent hover:border-blue-300 group"
            >
              <ShoppingCart className="w-5 h-5" strokeWidth={2.5} />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-gradient-to-br from-amber-400 to-amber-500 text-gray-900 text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center shadow-xl border-2 border-white group-hover:scale-110 transition-transform">
                  {cartCount > 9 ? "9+" : cartCount}
                </span>
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2.5 text-gray-600 hover:text-blue-600 transition-all hover:bg-gradient-to-br hover:from-blue-100 hover:to-blue-50 rounded-xl border-2 border-transparent hover:border-blue-300"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" strokeWidth={2.5} />
              ) : (
                <Menu className="w-6 h-6" strokeWidth={2.5} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 border-t-2 border-blue-200 bg-gradient-to-b from-blue-50/80 to-emerald-50/50 backdrop-blur-sm">
            <div className="space-y-2 py-3">
              {navItems.map((item) => {
                const isActive = currentPage === item.page;
                return (
                  <button
                    key={item.page}
                    onClick={() => handleNavigate(item.page)}
                    className={`w-full flex items-center gap-3 px-4 py-3 font-bold transition-all rounded-xl mx-2 ${
                      isActive
                        ? "text-blue-600 bg-gradient-to-r from-blue-100 to-blue-50 border-l-4 border-l-blue-600 shadow-md"
                        : "text-gray-700 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-emerald-50 border-l-4 border-l-transparent hover:border-l-blue-300"
                    }`}
                  >
                    <span className="text-xl">{item.icon}</span>
                    <span className="flex-1 text-left">{item.label}</span>
                    {isActive && (
                      <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-blue-600 to-emerald-600"></div>
                    )}
                  </button>
                );
              })}
            </div>

            <div className="h-px bg-gradient-to-r from-blue-200/0 via-blue-300 to-blue-200/0 my-3 mx-4"></div>

            <div className="space-y-2 px-2">
              <button className="w-full flex items-center gap-3 px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-emerald-50 transition-all rounded-xl font-semibold border-2 border-transparent hover:border-blue-200">
                <Search className="w-5 h-5" strokeWidth={2.5} />
                <span>Search</span>
              </button>
              <button className="w-full flex items-center gap-3 px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-emerald-50 transition-all rounded-xl font-semibold border-2 border-transparent hover:border-blue-200">
                <User className="w-5 h-5" strokeWidth={2.5} />
                <span>Profile</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
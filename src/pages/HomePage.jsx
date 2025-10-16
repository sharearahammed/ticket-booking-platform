import { useState } from "react";
import {
  ArrowRight,
  Zap,
  Shield,
  Gift,
  Users,
  TrendingUp,
  MapPin,
  Headphones,
  Sparkles,
} from "lucide-react";

export default function HomePage() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const categories = [
    {
      icon: "🎬",
      title: "Movies",
      desc: "Latest releases",
      path: "/movies",
      gradient: "from-blue-500 to-blue-600",
    },
    {
      icon: "🎪",
      title: "Events",
      desc: "Live experiences",
      path: "/events",
      gradient: "from-amber-500 to-amber-600",
    },
    {
      icon: "🚌",
      title: "Travel",
      desc: "Get around",
      path: "/transportation",
      gradient: "from-emerald-500 to-emerald-600",
    },
  ];

  const features = [
    {
      icon: Zap,
      title: "Instant Booking",
      desc: "Get your tickets in seconds",
      color: "text-amber-500",
      bg: "bg-amber-50",
    },
    {
      icon: Shield,
      title: "Secure Payment",
      desc: "Safe and encrypted transactions",
      color: "text-emerald-500",
      bg: "bg-emerald-50",
    },
    {
      icon: Gift,
      title: "Best Deals",
      desc: "Exclusive offers and discounts",
      color: "text-blue-500",
      bg: "bg-blue-50",
    },
  ];

  const stats = [
    { number: "50K+", label: "Happy Users", icon: Users },
    { number: "100K+", label: "Tickets Sold", icon: TrendingUp },
    { number: "15+", label: "Cities", icon: MapPin },
    { number: "24/7", label: "Support", icon: Headphones },
  ];

  return (
    <div className="bg-gradient-to-b from-slate-50 via-blue-50 to-slate-50 min-h-screen">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Background Animation */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-amber-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-2000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 py-10 md:py-16">
          {/* Hero Content */}
          <div className="mb-16 text-center md:text-left">
            <div className="inline-block mb-4 px-4 py-2 bg-blue-100 rounded-full">
              <span className="text-xs sm:text-sm md:text-base font-semibold text-blue-700 flex items-center gap-2">
                <Sparkles size={16} />
                Your Ultimate Ticket Destination
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Book Your Next
              <span className="block bg-gradient-to-r from-blue-600 via-emerald-500 to-amber-500 bg-clip-text text-transparent">
                Adventure
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto md:mx-0">
              Movies, Events, & Transportation - All in One Place. Experience seamless booking with unbeatable deals.
            </p>

            <button className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-sm sm:text-base transition-all transform hover:scale-105 shadow-lg hover:shadow-xl">
              Explore Now
              <ArrowRight size={18} />
            </button>
          </div>

          {/* Category Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {categories.map((cat, idx) => (
              <button
                key={cat.path}
                onMouseEnter={() => setHoveredCard(idx)}
                onMouseLeave={() => setHoveredCard(null)}
                onClick={() => (window.location.href = cat.path)}
                className="group relative overflow-hidden rounded-2xl p-6 sm:p-8 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${cat.gradient} opacity-90 group-hover:opacity-100 transition-opacity`}
                ></div>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-gradient-to-tr from-transparent via-white to-transparent transition-opacity"></div>

                <div className="relative z-10 text-white text-left">
                  <div className="text-4xl sm:text-5xl md:text-6xl mb-4 transform group-hover:scale-110 transition-transform">
                    {cat.icon}
                  </div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2">
                    {cat.title}
                  </h3>
                  <p className="text-white/80 text-sm sm:text-base flex items-center gap-2 group-hover:text-white transition-colors">
                    {cat.desc}
                    <ArrowRight
                      size={14}
                      className="transform group-hover:translate-x-2 transition-transform"
                    />
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-20">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Choose TicketHub?
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600">
            Experience the difference with our premium features
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={idx}
                className={`${feature.bg} rounded-2xl p-6 sm:p-8 border-2 border-transparent hover:border-blue-300 transition-all duration-300 transform hover:-translate-y-2 group`}
              >
                <div
                  className={`w-12 h-12 sm:w-14 sm:h-14 ${feature.bg} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                >
                  <Icon className={`${feature.color}`} size={24} />
                </div>
                <h3 className="font-bold text-lg sm:text-xl text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  {feature.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Stats Section */}
      <div className="relative my-16 md:my-24">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 rounded-3xl transform -skew-y-2"></div>

        <div className="relative max-w-7xl mx-auto px-4 py-14 md:py-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div key={idx} className="text-center text-white group">
                  <div className="flex justify-center mb-3 transform group-hover:scale-125 transition-transform">
                    <Icon size={28} className="text-amber-300" />
                  </div>
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
                    {stat.number}
                  </div>
                  <p className="text-blue-100 text-sm sm:text-base">
                    {stat.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-4 py-16 text-center">
        <div className="bg-gradient-to-r from-blue-600 to-emerald-600 rounded-3xl p-8 sm:p-12 text-white">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            Ready to Book?
          </h2>
          <p className="text-sm sm:text-base md:text-lg opacity-90 mb-8">
            Don't miss out on amazing deals and unforgettable experiences
          </p>
          <button className="bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-gray-900 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-sm sm:text-base transition-all transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-2 mx-auto">
            Start Booking Now
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}

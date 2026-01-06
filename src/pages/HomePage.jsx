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
  Star,
  CheckCircle,
  ChevronRight,
} from "lucide-react";
import { motion } from "framer-motion";
import "./HomePage.css";
import BgVideo from "/beach.mp4";
import useWindowSize from "../hooks/useWindowSize";

export default function HomePage() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const { isMobile } = useWindowSize();

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

  const testimonials = [
    {
      name: "Emma Wilson",
      role: "Movie Enthusiast",
      avatar: "👩‍🎬",
      text: "TicketHub made booking movie tickets so easy! The instant confirmation was amazing.",
      rating: 5,
    },
    {
      name: "James Chen",
      role: "Event Organizer",
      avatar: "👨‍💼",
      text: "Sold tickets for my concert in minutes. The platform is reliable and user-friendly.",
      rating: 5,
    },
    {
      name: "Sarah Ahmed",
      role: "Frequent Traveler",
      avatar: "👩‍🍳",
      text: "Great deals on travel bookings. Saved so much money with exclusive offers!",
      rating: 5,
    },
  ];

  const howItWorks = [
    {
      step: "01",
      title: "Browse",
      desc: "Explore movies, events, and travel options",
      icon: "🔍",
    },
    {
      step: "02",
      title: "Select",
      desc: "Choose your preferred dates and seats",
      icon: "✨",
    },
    {
      step: "03",
      title: "Pay",
      desc: "Secure payment with multiple options",
      icon: "💳",
    },
    {
      step: "04",
      title: "Enjoy",
      desc: "Get instant confirmation and enjoy!",
      icon: "🎉",
    },
  ];

  const pricingPlans = [
    {
      name: "Basic",
      price: "Free",
      desc: "Perfect for casual users",
      features: [
        "Standard booking",
        "Email support",
        "Basic discounts",
        "500 reward points/year",
      ],
      cta: "Get Started",
      popular: false,
    },
    {
      name: "Premium",
      price: "$9.99",
      period: "/month",
      desc: "Best for regular bookers",
      features: [
        "Priority support",
        "15% discount on all bookings",
        "Free cancellation",
        "3000 reward points/month",
      ],
      cta: "Upgrade Now",
      popular: true,
    },
    {
      name: "VIP",
      price: "$29.99",
      period: "/month",
      desc: "For the ultimate experience",
      features: [
        "24/7 VIP support",
        "25% discount on all bookings",
        "Priority access to new events",
        "10000 reward points/month",
      ],
      cta: "Become VIP",
      popular: false,
    },
  ];

  return (
    <div
      className={`z-40 landingpage max-w-7xl p-3.5 sm:p-0 sm:px-4 ${
        !isMobile ? "mt-20" : "mt-0"
      }`}
    >
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Background Animation */}
        <div className="absolute overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-amber-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-2000"></div>
        </div>

        <div className="sm:py-5 md:py-8">
          {/* Hero Content */}
          <div className="mb-16 text-center md:text-left">
            <div className="inline-block mb-4 px-4 py-2 bg-blue-100 rounded-full">
              <span className="text-[11px] sm:text-sm md:text-base font-semibold text-blue-700 flex items-center gap-2">
                <Sparkles size={15} />
                Your Ultimate Ticket Destination
              </span>
            </div>

            <h1 className="text-xl sm:text-4xl md:text-6xl font-bold text-blue-400 mb-6 leading-tight">
              Book Your Next
              <span className="block bg-gradient-to-r from-blue-600 via-emerald-500 to-amber-500 bg-clip-text text-transparent">
                Adventure
              </span>
            </h1>

            <p className="text-[10px] sm:text-lg md:text-xl text-gray-50 mb-6 sm:mb-8 max-w-2xl mx-auto md:mx-0">
              Movies, Events, & Transportation - All in One Place. Experience
              seamless booking with unbeatable deals.
            </p>

            <button className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-4 sm:px-8 py-2 sm:py-4 rounded-[6px] sm:rounded-xl font-semibold text-[11px] sm:text-base transition-all transform hover:scale-105 shadow-lg hover:shadow-xl">
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
                  <div className="text-4xl sm:text-5xl md:text-6xl mb-4 transform transition-transform">
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
      <div className="py-12 md:py-20">
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

      {/* Popular Destinations Section */}
      <div className="py-12 md:py-20">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Popular Destinations
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600">
            Explore our top-picked locations for movies, events, and travel
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[
            {
              name: "Paris",
              emoji: "🗼",
              gradient: "from-rose-400 to-pink-500",
            },
            {
              name: "New York",
              emoji: "🗽",
              gradient: "from-blue-500 to-blue-600",
            },
            {
              name: "Tokyo",
              emoji: "🗻",
              gradient: "from-green-400 to-emerald-500",
            },
            {
              name: "London",
              emoji: "🎡",
              gradient: "from-amber-400 to-amber-500",
            },
          ].map((dest, idx) => (
            <button
              key={idx}
              className={`group relative overflow-hidden rounded-2xl p-6 sm:p-8 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl`}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${dest.gradient} opacity-90 group-hover:opacity-100 transition-opacity`}
              ></div>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-gradient-to-tr from-transparent via-white to-transparent transition-opacity"></div>

              <div className="relative z-10 text-white text-left">
                <div className="text-4xl sm:text-5xl md:text-6xl mb-4 transform group-hover:scale-110 transition-transform">
                  {dest.emoji}
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2">
                  {dest.name}
                </h3>
                <p className="text-white/80 text-sm sm:text-base flex items-center gap-2 group-hover:text-white transition-colors">
                  Top Pick Destination
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

      {/* How It Works Section */}
      <div className="py-12 md:py-20 bg-white max-w-7xl mx-auto px-4 rounded-3xl my-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600">
            Simple steps to book your perfect experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {howItWorks.map((item, idx) => (
            <div key={idx} className="relative group">
              <div className="bg-gradient-to-br from-blue-50 to-emerald-50 rounded-2xl p-6 sm:p-8 border-2 border-blue-200 hover:border-blue-400 transition-all text-center">
                <div className="text-4xl mb-4">{item.icon}</div>
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  {item.step}
                </div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
              {idx < 3 && (
                <div className="hidden md:flex absolute right-3 top-1/2 z-10">
                  <ChevronRight className="text-blue-400" size={24} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <div className="relative my-16 md:my-24 max-w-7xl mx-auto px-4">
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

      {/* Testimonials Section */}
      <div className="py-12 md:py-20">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            What Our Users Say
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600">
            Join thousands of satisfied customers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 sm:p-8 border-2 border-blue-100 hover:border-blue-300 hover:shadow-lg transition-all"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="text-4xl">{testimonial.avatar}</div>
                <div>
                  <h4 className="font-bold text-gray-900">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="fill-amber-400 text-amber-400"
                  />
                ))}
              </div>
              <p className="text-gray-700 text-sm">{testimonial.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Pricing Section */}
      <div className="py-12 md:py-20">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Simple & Transparent Pricing
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600">
            Choose the plan that suits you best
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, idx) => (
            <div
              key={idx}
              className={`relative rounded-2xl p-6 sm:p-8 transition-all transform hover:scale-105 ${
                plan.popular
                  ? "border-2 border-blue-500 bg-gradient-to-br from-blue-50 to-emerald-50 shadow-xl md:scale-105"
                  : "border-2 border-blue-100 bg-white hover:border-blue-300"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-600 to-emerald-500 text-white px-4 py-1 rounded-full text-sm font-bold">
                  Most Popular
                </div>
              )}
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                {plan.name}
              </h3>
              <p className="text-gray-600 text-sm mb-4">{plan.desc}</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-gray-900">
                  {plan.price}
                </span>
                {plan.period && (
                  <span className="text-gray-600">{plan.period}</span>
                )}
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle
                      size={18}
                      className="text-emerald-500 flex-shrink-0"
                    />
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-3 rounded-xl font-semibold transition-all transform hover:scale-105 ${
                  plan.popular
                    ? "bg-gradient-to-r from-blue-600 to-emerald-500 text-white hover:from-blue-700 hover:to-emerald-600"
                    : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="lg:py-20 pb-26 text-center bg-[#F9FAFB]">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative overflow-hidden rounded-3xl p-10 sm:p-14 bg-gradient-to-r from-[#2563EB] via-[#10B981] to-[#2563EB] text-white shadow-2xl"
        >
          {/* Decorative Glow */}
          <div className="absolute inset-0 bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20" />

          {/* Content */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="relative text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-lg"
          >
            Ready to Book?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="relative text-sm sm:text-base md:text-lg text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Don't miss out on{" "}
            <span className="font-semibold text-amber-300">amazing deals</span>{" "}
            and
            <span className="font-semibold text-emerald-300">
              {" "}
              unforgettable experiences
            </span>{" "}
            — your next adventure awaits!
          </motion.p>

          <motion.button
            whileHover={{ scale: 1.08, y: -3 }}
            whileTap={{ scale: 0.97 }}
            className="relative bg-gradient-to-r from-[#FACC15] to-[#FBBF24] hover:from-[#FBBF24] hover:to-[#F59E0B] text-[#111827] px-8 sm:px-10 py-4 sm:py-5 rounded-2xl font-bold text-base sm:text-lg shadow-lg hover:shadow-amber-500/40 flex items-center justify-center gap-2 mx-auto transition-all"
          >
            Start Booking Now
            <ArrowRight size={22} />
          </motion.button>

          {/* Subtle Animated Rings */}
          <div className="absolute -top-24 -left-24 w-72 h-72 bg-amber-400/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-emerald-400/10 rounded-full blur-3xl animate-pulse" />
        </motion.div>
      </div>
    </div>
  );
}

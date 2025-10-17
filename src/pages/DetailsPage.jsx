import { useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useInfiniteTickets } from "../hooks/useInfiniteTickets";
import { addToCart } from "../store/cartSlice";
import { useDispatch } from "react-redux";
import { ChevronLeft, Star, Clock, Tag, Users, X } from "lucide-react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useWindowSize from "../hooks/useWindowSize";
import LoginPage from "./LoginPage"; // import your login page

const DetailsPage = ({ onNavigate }) => {
  const { isMobile } = useWindowSize();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const location = useLocation();
  const category = location.state?.category;
  const { data: tickets } = useInfiniteTickets(category);
  const [quantity, setQuantity] = useState(1);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [showLoginModal, setShowLoginModal] = useState(false);

  // Flatten paginated data
  const allTickets = tickets?.pages?.flatMap((page) => page.tickets) || [];
  const ticket = allTickets.find((t) => t.id === id);

  const toggleSeat = (seatId) => {
    setSelectedSeats((prev) =>
      prev.includes(seatId)
        ? prev.filter((s) => s !== seatId)
        : [...prev, seatId]
    );
  };

  const handleBooking = () => {
    // Check if user is logged in
    const userEmail = localStorage.getItem("userEmail");
    if (!userEmail) {
      setShowLoginModal(true); // show login modal
      return;
    }

    if (selectedSeats.length === 0) {
      toast.warning("Please select at least one seat", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
      });
      return;
    }

    dispatch(
      addToCart({
        ...ticket,
        quantity,
        selectedSeats,
      })
    );

    toast.success("Added to cart successfully!", {
      position: "top-right",
      autoClose: 1800,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      theme: "colored",
    });

    setTimeout(() => {
      navigate("/cart");
    }, 1000);
  };

  if (!tickets) {
    return <p className="text-center mt-10">Loading ticket details...</p>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-emerald-50">
      {/* Toast Container */}
      <ToastContainer position="top-right" />

      <div className="max-w-7xl mx-auto px-4 py-6 sm:py-8 md:py-10">
        {/* Back Button */}
        <button
          onClick={() => onNavigate("home")}
          className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold sm:font-bold mb-6 sm:mb-8 text-sm sm:text-base md:text-lg group transition-all hover:gap-3"
        >
          <ChevronLeft
            size={20}
            className="group-hover:-translate-x-1 transition-transform"
          />
          Back to {category}
        </button>

        {/* Main Content Card */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-blue-100">
          {/* Hero Image Section */}
          <div className="relative bg-gradient-to-br from-blue-500 to-emerald-600 h-44 sm:h-56 md:h-96 flex items-center justify-center overflow-hidden group">
            <div className="absolute inset-0 opacity-20 bg-grid-pattern"></div>
            <div className="text-7xl sm:text-8xl md:text-9xl group-hover:scale-110 transition-transform duration-300">
              {ticket?.image}
            </div>
          </div>

          <div className="p-5 sm:p-8 md:p-10">
            {/* Title */}
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-900 mb-2 leading-snug">
              {ticket?.title}
            </h1>
            <p className="text-gray-600 font-medium mb-6 sm:mb-8 text-sm sm:text-base md:text-lg">
              Premium Experience • Limited Availability
            </p>

            {/* Key Info Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
              {/* Rating */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 sm:p-5 rounded-xl border-2 border-blue-200 hover:shadow-lg transition-all hover:-translate-y-1">
                <div className="flex items-center gap-2 mb-2">
                  <Star className="text-blue-600" size={18} />
                  <p className="text-gray-600 text-xs sm:text-sm font-semibold">
                    Rating
                  </p>
                </div>
                <p className="text-2xl sm:text-3xl font-bold text-blue-600">
                  ⭐ {ticket?.rating}
                </p>
              </div>

              {/* Price */}
              <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-4 sm:p-5 rounded-xl border-2 border-amber-200 hover:shadow-lg transition-all hover:-translate-y-1">
                <div className="flex items-center gap-2 mb-2">
                  <Tag className="text-amber-600" size={18} />
                  <p className="text-gray-600 text-xs sm:text-sm font-semibold">
                    Price
                  </p>
                </div>
                <p className="text-2xl sm:text-3xl font-bold text-amber-600">
                  ${ticket?.price}
                </p>
              </div>

              {/* Duration */}
              {ticket?.duration && (
                <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 p-4 sm:p-5 rounded-xl border-2 border-emerald-200 hover:shadow-lg transition-all hover:-translate-y-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="text-emerald-600" size={18} />
                    <p className="text-gray-600 text-xs sm:text-sm font-semibold">
                      Duration
                    </p>
                  </div>
                  <p className="text-xl sm:text-2xl font-bold text-emerald-600">
                    {ticket?.duration}
                  </p>
                </div>
              )}

              {/* Genre */}
              {ticket?.genre && (
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 sm:p-5 rounded-xl border-2 border-blue-200 hover:shadow-lg transition-all hover:-translate-y-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Users className="text-blue-600" size={18} />
                    <p className="text-gray-600 text-xs sm:text-sm font-semibold">
                      Genre
                    </p>
                  </div>
                  <p className="text-xl sm:text-2xl font-bold text-blue-600">
                    {ticket?.genre}
                  </p>
                </div>
              )}
            </div>

            {/* Divider */}
            <div className="h-1 bg-gradient-to-r from-blue-200 via-emerald-200 to-blue-200 rounded-full mb-8 md:mb-10"></div>

            {/* Seat Selection */}
            <div className="mb-10 p-6 sm:p-8 bg-gradient-to-br from-blue-50 to-emerald-50 rounded-3xl border border-blue-100 shadow-md">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <span className="inline-flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-blue-600 text-white text-sm sm:text-base font-bold shadow-lg">
                  🎫
                </span>
                Select Your Seats
              </h2>

              {/* Seat Grid */}
              <div className="bg-white rounded-2xl p-4 mb-6 border border-blue-100 shadow-inner">
                <div className="grid grid-cols-6 md:grid-cols-8 gap-3">
                  {Array.from({ length: 24 }).map((_, idx) => {
                    const seatId = `A${idx + 1}`;
                    const isSelected = selectedSeats.includes(seatId);
                    return (
                      <button
                        key={seatId}
                        onClick={() => toggleSeat(seatId)}
                        className={`flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 text-sm font-bold rounded-xl transition-all duration-300 transform border-2 ${
                          isSelected
                            ? "bg-gradient-to-br from-emerald-500 to-emerald-600 text-white border-emerald-700 shadow-lg scale-105"
                            : "bg-gray-100 text-gray-700 border-gray-300 hover:bg-blue-100 hover:text-blue-700 hover:border-blue-400 hover:shadow-md"
                        }`}
                      >
                        {idx + 1}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Seat Summary */}
              <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded-xl shadow-sm">
                <p className="text-gray-800 text-sm sm:text-base font-semibold">
                  Selected seats:{" "}
                  <span className="text-blue-600 font-bold text-base sm:text-lg">
                    {selectedSeats.length > 0
                      ? selectedSeats.join(", ")
                      : "None selected yet"}
                  </span>
                </p>
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-10">
              <label className="block text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-6">
                📦 Number of Tickets
              </label>
              <div className="flex items-center gap-4 sm:gap-6 w-fit bg-blue-50 p-3 sm:p-4 rounded-xl border-2 border-blue-200">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-gradient-to-br from-blue-500 to-blue-600 text-white font-bold rounded-lg transition-all transform hover:scale-110 shadow-md text-xl sm:text-2xl"
                >
                  −
                </button>
                <span className="text-3xl sm:text-4xl font-bold text-gray-900 w-12 sm:w-16 text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-gradient-to-br from-emerald-500 to-emerald-600 text-white font-bold rounded-lg transition-all transform hover:scale-110 shadow-md text-xl sm:text-2xl"
                >
                  +
                </button>
              </div>
            </div>

            {/* Book Buttons */}
            <div className="space-y-3 sm:space-y-4">
              <button
                onClick={handleBooking}
                className="w-full bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-gray-900 font-bold py-4 sm:py-5 rounded-xl transition-all text-base sm:text-lg shadow-lg hover:shadow-2xl transform hover:-translate-y-1 flex items-center justify-center gap-2 group"
              >
                <span className="text-xl sm:text-2xl group-hover:scale-110 transition-transform">
                  🎟️
                </span>
                Book Now - ${(ticket?.price * quantity).toFixed(2)}
              </button>
              <button
                onClick={() => navigate(-1)}
                className="w-full bg-gray-200 hover:bg-gray-300 text-gray-900 font-semibold py-2.5 sm:py-3 rounded-xl transition-all text-sm sm:text-base"
              >
                Continue Shopping
              </button>
            </div>
          </div>
        </div>

        {/* Login Modal */}
        {showLoginModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/20 backdrop-blur-md">
            <div className="relative w-full max-w-md mx-auto mt-10">
              {/* Close Button */}
              <div
                className="z-100 cursor-pointer absolute top-6 right-3 bg-red-500 font-bold text-2xl rounded-full transition-all shadow-md w-[40px] h-[40px] flex items-center justify-center text-red-50"
                onClick={() => setShowLoginModal(false)}
              >
                <X />
              </div>

              {/* Modal Content */}
              <LoginPage />
            </div>
          </div>
        )}

        {/* Trust Badges */}
        <div className="mt-10 sm:mt-12 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {[
            {
              icon: "🛡️",
              title: "Secure Payment",
              desc: "256-bit SSL Encrypted",
            },
            {
              icon: "✅",
              title: "Instant Confirmation",
              desc: "Get your tickets instantly",
            },
            { icon: "📞", title: "24/7 Support", desc: "Always here to help" },
          ].map((b, i) => (
            <div
              key={i}
              className="bg-white p-4 sm:p-6 rounded-xl border-2 border-blue-200 text-center hover:shadow-lg transition-all"
            >
              <p className="text-2xl sm:text-3xl mb-2">{b.icon}</p>
              <p className="font-bold text-gray-900 text-base sm:text-lg">
                {b.title}
              </p>
              <p className="text-xs sm:text-sm text-gray-600 mt-1">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;

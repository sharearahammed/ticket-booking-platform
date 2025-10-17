import { ArrowRight, Calendar, Clock, Star, Heart } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { toggleWishlist } from "../store/wishlistSlice";

const TicketCard = ({ ticket, onSelect, category, isWishlistPage = false }) => {
  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.wishlist.items);

  const isWishlisted = wishlist.some((item) => item.id === ticket.id);

  const handleWishlist = (e) => {
    e.stopPropagation();

    if (isWishlistPage) {
      dispatch(toggleWishlist(ticket));
      toast.info("Removed from wishlist ❤️", { position: "top-right" });
      return;
    }

    dispatch(toggleWishlist(ticket));

    if (isWishlisted) {
      toast.info("Removed from wishlist ❤️", { position: "top-right" });
    } else {
      toast.success("Added to wishlist 💖", { position: "top-right" });
    }
  };

  return (
    <div
      onClick={onSelect}
      className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all hover:scale-[1.03] cursor-pointer group relative"
    >
      {/* Wishlist Heart Button */}
      <button
        onClick={handleWishlist}
        className="cursor-pointer absolute top-3 right-3 bg-white/80 backdrop-blur-sm p-2 rounded-full shadow hover:bg-white transition z-10"
      >
        <Heart
          size={20}
          className={`transition-all duration-300 ${
            isWishlisted
              ? "fill-red-500 text-red-500 scale-110"
              : "text-gray-400"
          }`}
        />
      </button>

      {/* Image Section */}
      <div className="relative w-full aspect-[16/9] overflow-hidden">
        <img
          src={ticket.image}
          alt={ticket.title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="font-semibold text-lg text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
          {ticket.title}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-3">
          <Star size={16} className="text-amber-400 fill-amber-400" />
          <span className="text-sm font-semibold text-gray-700">
            {ticket.rating}
          </span>
        </div>

        {/* Duration */}
        {ticket.duration && (
          <div className="flex items-center gap-1 text-sm text-gray-600 mb-2">
            <Clock size={14} />
            {ticket.duration}
          </div>
        )}

        {/* Date */}
        {ticket.date && (
          <div className="flex items-center gap-1 text-sm text-gray-600 mb-2">
            <Calendar size={14} />
            {ticket.date}
          </div>
        )}

        {/* Price + Arrow */}
        <div className="flex items-center justify-between pt-3 border-t border-gray-200 mt-3">
          <span className="text-2xl font-bold text-blue-600">
            ${ticket.price}
          </span>
          <ArrowRight
            size={20}
            className="text-amber-400 group-hover:translate-x-1 transition-transform"
          />
        </div>
      </div>
    </div>
  );
};

export default TicketCard;

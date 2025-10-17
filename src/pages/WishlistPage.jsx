import { useSelector } from "react-redux";
import { Heart } from "lucide-react";
import TicketCard from "./TicketCard";
import { useNavigate } from "react-router-dom";

const WishlistPage = () => {
  const navigate = useNavigate();
  const wishlist = useSelector((state) => state.wishlist.items);

  const handleSelectTicket = (ticket) => {
    navigate(`/details/${ticket.id}`, { state: { category: ticket.category } });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-2 mb-8">
          <Heart className="text-red-500 fill-red-500" size={28} />
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
            My Wishlist
          </h1>
        </div>

        {/* Empty State */}
        {wishlist.length === 0 ? (
          <div className="flex flex-col items-center justify-center mt-20 text-center">
            <Heart size={60} className="text-gray-300 mb-4" />
            <p className="text-gray-500 text-lg font-medium">
              Your wishlist is empty.
            </p>
            <p className="text-gray-400 text-sm">
              Add tickets by tapping the ❤️ icon on any card.
            </p>
          </div>
        ) : (
          // Wishlist Grid
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {wishlist.map((ticket) => (
              <TicketCard
                key={ticket.id}
                ticket={ticket}
                onSelect={() => handleSelectTicket(ticket)}
                isWishlistPage={true}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default WishlistPage;

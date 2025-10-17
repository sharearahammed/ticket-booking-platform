import { Home, Film, Bus, Ticket, Heart, User } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

const MobileBottomNav = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Home", icon: <Home size={22} /> },
    { path: "/movies", label: "Movies", icon: <Film size={22} /> },
    { path: "/events", label: "Events", icon: <Ticket size={22} /> },
    { path: "/transportation", label: "Travel", icon: <Bus size={22} /> },
    { path: "/wishlist", label: "Wishlist", icon: <Heart size={22} /> },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-blue-200 shadow-[0_-2px_8px_rgba(0,0,0,0.05)] flex justify-around py-2 z-50">
      {navItems.map((item) => {
        const isActive = location.pathname === item.path;
        return (
          <button
            key={item.path}
            onClick={() => navigate(item.path)}
            className={`flex flex-col items-center justify-center text-xs font-semibold transition-all ${
              isActive
                ? "text-blue-600 scale-110"
                : "text-gray-500 hover:text-blue-600"
            }`}
          >
            <div
              className={`p-2 rounded-full transition-all ${
                isActive
                  ? "bg-gradient-to-br from-blue-100 to-emerald-100 shadow-md"
                  : ""
              }`}
            >
              {item.icon}
            </div>
            <span className="text-[11px] mt-0.5">{item.label}</span>
          </button>
        );
      })}

      {/* Profile Shortcut */}
      <button
        onClick={() => navigate("/profile")}
        className={`flex flex-col items-center justify-center text-xs font-semibold transition-all ${
          location.pathname === "/profile"
            ? "text-blue-600 scale-110"
            : "text-gray-500 hover:text-blue-600"
        }`}
      >
        <div
          className={`p-2 rounded-full transition-all ${
            location.pathname === "/profile"
              ? "bg-gradient-to-br from-blue-100 to-emerald-100 shadow-md"
              : ""
          }`}
        >
          <User size={22} />
        </div>
        <span className="text-[11px] mt-0.5">Profile</span>
      </button>
    </div>
  );
};

export default MobileBottomNav;

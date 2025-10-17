import {
  User,
  Mail,
  Phone,
  MapPin,
  Edit3,
  LogOut,
  Heart,
  Ticket,
  Clock,
  Trophy,
  Settings,
  ChevronRight,
} from "lucide-react";
import { useState } from "react";

export default function ProfileSection() {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: "Sharear Ahammed Nihal",
    email: "sharearahammed@gmail.com",
    phone: "+880 1876523323",
    location: "Dhaka, Bangladesh",
    avatar: "👦",
  });

  const [formData, setFormData] = useState(profile);

  const handleSave = () => {
    setProfile(formData);
    setIsEditing(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-emerald-50 to-white px-4 py-12">
      {/* Background gradient elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-300/20 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-emerald-300/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="relative max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent mb-2">
            My Profile
          </h1>
          <p className="text-gray-600">Manage your account and preferences</p>
        </div>

        {/* Main Profile Card */}
        <div className="relative group mb-8">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-amber-500 to-emerald-600 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

          <div className="relative bg-gradient-to-br from-white to-blue-50 backdrop-blur-xl rounded-3xl p-8 sm:p-10 border border-blue-200 group-hover:border-blue-300 transition-all duration-500">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8 mb-8 pb-8 border-b border-blue-200">
              {/* Avatar */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-2xl blur-xl opacity-50 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-gradient-to-br from-blue-100 to-emerald-100 border-2 border-blue-300 flex items-center justify-center text-5xl sm:text-6xl">
                  {profile.avatar}
                </div>
              </div>

              {/* Profile Info */}
              <div className="flex-1">
                {isEditing ? (
                  <div className="space-y-4">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-white border-2 border-blue-200 text-gray-900 placeholder-gray-500 focus:border-blue-400 focus:outline-none transition-all"
                      placeholder="Full name"
                    />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-white border-2 border-blue-200 text-gray-900 placeholder-gray-500 focus:border-blue-400 focus:outline-none transition-all"
                      placeholder="Email"
                    />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-white border-2 border-blue-200 text-gray-900 placeholder-gray-500 focus:border-blue-400 focus:outline-none transition-all"
                      placeholder="Phone"
                    />
                    <input
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-white border-2 border-blue-200 text-gray-900 placeholder-gray-500 focus:border-blue-400 focus:outline-none transition-all"
                      placeholder="Location"
                    />
                  </div>
                ) : (
                  <>
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                      {profile.name}
                    </h2>
                    <div className="space-y-2 text-gray-700">
                      <div className="flex items-center gap-2">
                        <Mail size={16} className="text-blue-400" />
                        {profile.email}
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone size={16} className="text-emerald-400" />
                        {profile.phone}
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={16} className="text-amber-400" />
                        {profile.location}
                      </div>
                    </div>
                  </>
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 w-full sm:w-auto">
                {isEditing ? (
                  <>
                    <button
                      onClick={handleSave}
                      className="flex-1 sm:flex-none px-6 py-3 rounded-lg bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-semibold transition-all transform hover:scale-105 shadow-lg"
                    >
                      Save Changes
                    </button>
                    <button
                      onClick={() => {
                        setFormData(profile);
                        setIsEditing(false);
                      }}
                      className="flex-1 sm:flex-none px-6 py-3 rounded-lg bg-gray-700 hover:bg-gray-600 text-gray-100 font-semibold transition-all"
                    >
                      Cancel
                    </button>
                  </>
                ) : (
                  <button
                    onClick={() => setIsEditing(true)}
                    className="flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold transition-all transform hover:scale-105 shadow-lg"
                  >
                    <Edit3 size={18} />
                    Edit Profile
                  </button>
                )}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                {
                  icon: Ticket,
                  label: "Bookings",
                  value: "12",
                  color: "from-blue-500 to-blue-600",
                },
                {
                  icon: Heart,
                  label: "Favorites",
                  value: "24",
                  color: "from-rose-500 to-rose-600",
                },
                {
                  icon: Clock,
                  label: "Pending",
                  value: "3",
                  color: "from-amber-500 to-amber-600",
                },
                {
                  icon: Trophy,
                  label: "Rewards",
                  value: "450 pts",
                  color: "from-emerald-500 to-emerald-600",
                },
              ].map((stat, idx) => (
                <div key={idx} className="relative group/stat">
                  <div
                    className={`absolute -inset-px bg-gradient-to-br ${stat.color} rounded-lg blur opacity-0 group-hover/stat:opacity-100 transition-opacity`}
                  ></div>
                  <div className="relative bg-gradient-to-br from-blue-50 to-emerald-50 rounded-lg p-4 border border-blue-200 text-center hover:border-blue-300 transition-all">
                    <stat.icon className="w-6 h-6 mx-auto mb-2 text-blue-600" />
                    <p className="text-2xl font-bold text-gray-900 mb-1">
                      {stat.value}
                    </p>
                    <p className="text-xs text-gray-600">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Menu Options */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          {[
            {
              icon: Settings,
              label: "Account Settings",
              desc: "Manage your preferences",
            },
            {
              icon: Ticket,
              label: "My Bookings",
              desc: "View your tickets and reservations",
            },
            {
              icon: Heart,
              label: "Saved Items",
              desc: "Your favorite events and deals",
            },
            {
              icon: LogOut,
              label: "Logout",
              desc: "Sign out from your account",
            },
          ].map((item, idx) => (
            <button key={idx} className="group relative">
              <div className="absolute -inset-px bg-gradient-to-r from-blue-600 to-emerald-600 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative bg-gradient-to-br from-white to-emerald-50 backdrop-blur-sm rounded-xl p-5 border border-blue-200 hover:border-blue-300 transition-all text-left group-hover:bg-blue-50">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-100 to-emerald-100 border border-blue-200 flex items-center justify-center">
                      <item.icon className="text-blue-600" size={20} />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">
                        {item.label}
                      </p>
                      <p className="text-sm text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                  <ChevronRight
                    className="text-gray-400 group-hover:text-gray-600 transition-colors"
                    size={20}
                  />
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

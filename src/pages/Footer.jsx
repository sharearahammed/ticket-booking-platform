const Footer = () => (
  <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-gray-300 mt-16 border-t-4 border-gradient-to-r from-blue-600 to-emerald-600">
    <div className="max-w-7xl mx-auto px-4 py-16">
      {/* Main Footer Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
        {/* Brand Section */}
        <div className="space-y-4">
          <h3 className="text-white font-bold text-lg md:text-xl lg:text-2xl flex items-center gap-2 hover:gap-3 transition-all cursor-pointer group">
            <span className="text-2xl md:text-3xl group-hover:scale-110 transition-transform">🎟️</span>
            <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
              TicketHub
            </span>
          </h3>
          <p className="text-xs sm:text-sm md:text-base text-gray-400 leading-relaxed">
            Your one-stop booking platform for movies, events, and transportation. Trusted by thousands of happy travelers.
          </p>
          <div className="pt-2">
            <span className="inline-block px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs sm:text-sm font-semibold">
              🌟 Premium Service
            </span>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-bold mb-5 text-base md:text-lg flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-emerald-500"></span>
            Quick Links
          </h4>
          <ul className="space-y-3 text-sm md:text-base">
            {["About Us", "Contact", "Support", "Blog"].map((item, idx) => (
              <li key={idx}>
                <a
                  href="#"
                  className="text-gray-400 hover:text-blue-400 transition-all hover:translate-x-1 inline-flex items-center gap-1 group"
                >
                  {item}
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Policies */}
        <div>
          <h4 className="text-white font-bold mb-5 text-base md:text-lg flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-gradient-to-r from-emerald-500 to-blue-500"></span>
            Policies
          </h4>
          <ul className="space-y-3 text-sm md:text-base">
            {["Privacy Policy", "Terms of Service", "Refund Policy", "Cookie Policy"].map((item, idx) => (
              <li key={idx}>
                <a
                  href="#"
                  className="text-gray-400 hover:text-emerald-400 transition-all hover:translate-x-1 inline-flex items-center gap-1 group"
                >
                  {item}
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h4 className="text-white font-bold mb-5 text-base md:text-lg flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-emerald-500"></span>
            Follow Us
          </h4>
          <div className="flex gap-3 mb-6">
            {["📘", "🐦", "📷", "▶️"].map((icon, idx) => (
              <a
                key={idx}
                href="#"
                className="w-9 h-9 md:w-10 md:h-10 rounded-lg bg-blue-500/20 hover:bg-blue-500 text-blue-300 hover:text-white transition-all flex items-center justify-center transform hover:scale-110"
              >
                {icon}
              </a>
            ))}
          </div>
          <p className="text-xs sm:text-sm text-gray-500">Connect with us for latest updates</p>
        </div>
      </div>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-blue-600/20 via-emerald-600/20 to-blue-600/20 mb-8"></div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-8 border-b border-gray-800">
        <div className="flex items-center gap-3 text-sm md:text-base">
          <span className="text-xl md:text-2xl">🛡️</span>
          <span className="text-gray-400">Secure & Encrypted Transactions</span>
        </div>
        <div className="flex items-center gap-3 text-sm md:text-base text-center md:text-left">
          <span className="text-xl md:text-2xl">✅</span>
          <span className="text-gray-400">Instant Ticket Delivery</span>
        </div>
        <div className="flex items-center gap-3 text-sm md:text-base md:text-right">
          <span className="text-xl md:text-2xl">24/7</span>
          <span className="text-gray-400">Customer Support</span>
        </div>
      </div>

      {/* Copyright */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8 text-xs sm:text-sm md:text-base">
        <div className="text-center md:text-left">
          <p className="text-gray-400">
            © 2025 <span className="font-bold text-white">TicketHub</span>. All rights reserved.
          </p>
        </div>
        <div className="text-center">
          <p className="text-gray-400">
            Made with <span className="text-amber-400 animate-pulse">❤️</span> for travelers and event lovers
          </p>
        </div>
        <div className="text-center md:text-right">
          <p className="text-gray-500 text-[10px] sm:text-xs md:text-sm">v1.0 • Premium Edition</p>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;

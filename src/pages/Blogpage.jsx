import React from "react";
import { ArrowRight, Star, Zap, Globe } from "lucide-react";

const BlogPage = () => {
  const blogPosts = [
    {
      title: "How to Book Tickets in Seconds",
      author: "Sarah Johnson",
      date: "16 October 2025",
      category: "Guides",
      excerpt:
        "Learn how to quickly book your tickets without any hassle using TicketHub's optimized platform.",
      image: "https://source.unsplash.com/random/400x300?ticket",
    },
    {
      title: "Top 10 Events You Can’t Miss This Month",
      author: "Michael Chen",
      date: "10 October 2025",
      category: "Events",
      excerpt:
        "From concerts to sports, discover the hottest events happening this month.",
      image: "https://source.unsplash.com/random/400x300?event",
    },
    {
      title: "Maximizing Your Travel Experience",
      author: "Emma Williams",
      date: "5 October 2025",
      category: "Travel",
      excerpt:
        "Tips and tricks to get the best deals and enjoy a seamless travel experience.",
      image: "https://source.unsplash.com/random/400x300?travel",
    },
    {
      title: "Exclusive Offers for TicketHub Members",
      author: "David Kumar",
      date: "1 October 2025",
      category: "Offers",
      excerpt:
        "Learn how to take advantage of our exclusive discounts and promotions.",
      image: "https://source.unsplash.com/random/400x300?discount",
    },
  ];

  const categories = ["Guides", "Events", "Travel", "Offers", "News"];

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-emerald-600 text-white pt-32 pb-16 md:pb-24">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            TicketHub Blog
          </h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto mb-8">
            Insights, guides, and updates on events, movies, travel, and
            exclusive offers.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
            <div className="flex items-center gap-2 bg-white/20 backdrop-blur px-4 py-2 rounded-full">
              <Zap className="w-4 h-4" /> Latest Updates
            </div>
            <div className="flex items-center gap-2 bg-white/20 backdrop-blur px-4 py-2 rounded-full">
              <Globe className="w-4 h-4" /> Global Insights
            </div>
            <div className="flex items-center gap-2 bg-white/20 backdrop-blur px-4 py-2 rounded-full">
              <Star className="w-4 h-4" /> Expert Tips
            </div>
          </div>
        </div>
      </div>

      {/* Categories */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
          Categories
        </h2>
        <div className="flex flex-wrap gap-3">
          {categories.map((cat, idx) => (
            <span
              key={idx}
              className="px-4 py-2 rounded-full bg-blue-50 text-blue-600 font-semibold cursor-pointer hover:bg-blue-100 transition-all"
            >
              {cat}
            </span>
          ))}
        </div>
      </section>

      {/* Blog Grid */}
      <section className="max-w-6xl mx-auto px-4 py-12 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl overflow-hidden transition-shadow border border-gray-200"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <p className="text-sm text-gray-500 mb-1">{post.date}</p>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <button className="text-blue-600 font-bold flex items-center gap-1 hover:gap-2 transition-all">
                  Read More <ArrowRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-6xl mx-auto px-4 py-16 md:py-24">
        <div className="bg-gradient-to-r from-blue-600 to-emerald-600 rounded-3xl p-8 md:p-16 text-white text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Stay Updated with TicketHub
          </h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto text-lg">
            Subscribe to our newsletter for the latest updates, guides, and
            exclusive offers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-3 rounded-xl w-full sm:w-auto text-gray-900 font-semibold focus:outline-none"
            />
            <button className="bg-amber-400 hover:bg-amber-500 text-gray-900 px-8 py-3 rounded-xl font-bold transition-all transform hover:scale-105 shadow-lg">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;

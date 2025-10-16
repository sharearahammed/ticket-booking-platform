import React from "react";
import {
  Ticket,
  Users,
  Globe,
  Zap,
  Award,
  Heart,
  ArrowRight,
  Star,
  CheckCircle,
} from "lucide-react";

const AboutPage = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-emerald-600 text-white pt-32 pb-16 md:pb-24">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            About TicketHub
          </h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto mb-8">
            Revolutionizing the way you book tickets for movies, events, and
            transportation with a seamless, modern experience.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
            <div className="flex items-center gap-2 bg-white/20 backdrop-blur px-4 py-2 rounded-full">
              <Zap className="w-4 h-4" /> Fast & Easy
            </div>
            <div className="flex items-center gap-2 bg-white/20 backdrop-blur px-4 py-2 rounded-full">
              <Globe className="w-4 h-4" /> Global Reach
            </div>
            <div className="flex items-center gap-2 bg-white/20 backdrop-blur px-4 py-2 rounded-full">
              <Heart className="w-4 h-4" /> Customer First
            </div>
          </div>
        </div>
      </div>

      {/* Mission & Vision */}
      <section className="max-w-7xl mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-white rounded-2xl p-8 md:p-10 border border-gray-200 hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center mb-6">
              <Ticket className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Our Mission
            </h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              To make ticket booking simple, affordable, and accessible to
              everyone. We aim to eliminate the hassle of booking by providing a
              unified platform where users can find and book tickets for their
              favorite movies, events, and transportation options in seconds.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our mission is to connect millions of people with unforgettable
              experiences while supporting businesses in reaching their audience
              effectively.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 md:p-10 border border-gray-200 hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-lg flex items-center justify-center mb-6">
              <Star className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Our Vision
            </h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              To become the world's most trusted and innovative ticketing
              platform, revolutionizing how people discover and book
              entertainment experiences globally.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We envision a future where booking tickets is as natural as
              scrolling through social media, with personalized recommendations
              and seamless transactions across all devices.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
            Why Choose TicketHub?
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            We're committed to providing the best ticketing experience with
            innovative features and exceptional service.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: "Lightning Fast",
                description:
                  "Book tickets in seconds with our optimized platform designed for speed and performance.",
              },
              {
                icon: Globe,
                title: "Multi-Category",
                description:
                  "Movies, events, transportation, and more - everything in one place for your convenience.",
              },
              {
                icon: Award,
                title: "Secure Payments",
                description:
                  "Industry-leading encryption and fraud protection to keep your transactions safe and secure.",
              },
              {
                icon: Users,
                title: "24/7 Support",
                description:
                  "Our dedicated support team is always ready to help you with any questions or concerns.",
              },
              {
                icon: Heart,
                title: "Best Prices",
                description:
                  "Competitive pricing with exclusive deals and offers for our loyal customers.",
              },
              {
                icon: CheckCircle,
                title: "Instant Confirmation",
                description:
                  "Get immediate booking confirmation and digital tickets sent to your email instantly.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-gray-50 rounded-xl p-6 md:p-8 border border-gray-200 hover:border-blue-300 transition-colors group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-emerald-600 rounded-lg flex items-center justify-center mb-4 group-hover:shadow-lg transition-shadow">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-to-br from-blue-600 to-emerald-600 text-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Our Impact by Numbers
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "5M+", label: "Bookings Completed" },
              { number: "2.3M+", label: "Active Users" },
              { number: "50K+", label: "Events & Shows" },
              { number: "180+", label: "Countries Served" },
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2">
                  {stat.number}
                </div>
                <div className="text-blue-100 text-sm md:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="max-w-6xl mx-auto px-4 py-16 md:py-24">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
          Our Story
        </h2>

        <div className="bg-white rounded-2xl p-8 md:p-12 border border-gray-200">
          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p>
              TicketHub was founded in 2020 with a simple but powerful vision:
              to simplify ticket booking for everyone. Our founders, a team of
              passionate tech entrepreneurs and entertainment enthusiasts,
              recognized a gap in the market for a unified, user-friendly
              platform that could handle multiple ticketing categories
              seamlessly.
            </p>

            <p>
              What started as a small startup with a handful of employees has
              grown into a global phenomenon. Our platform now serves millions
              of users across the world, processing thousands of transactions
              daily while maintaining our commitment to quality, security, and
              customer satisfaction.
            </p>

            <p>
              Over the years, we've continuously innovated and expanded our
              offerings. From launching mobile apps to implementing AI-driven
              recommendations, we've consistently pushed the boundaries of
              what's possible in the ticketing industry. We've formed
              partnerships with major entertainment venues, transportation
              companies, and event organizers to bring the best selection of
              tickets to our platform.
            </p>

            <p>
              Today, TicketHub stands as one of the most trusted ticketing
              platforms globally, recognized for our reliability, innovation,
              and customer-centric approach. But this is just the beginning -
              we're committed to revolutionizing the entire ticketing experience
              for generations to come.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
            Meet Our Leadership Team
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Visionary leaders bringing decades of combined experience in
            technology, entertainment, and customer service.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Sarah Johnson", role: "CEO & Co-founder", emoji: "👩‍💼" },
              { name: "Michael Chen", role: "CTO & Co-founder", emoji: "👨‍💻" },
              { name: "Emma Williams", role: "COO", emoji: "👩‍🔬" },
              { name: "David Kumar", role: "Head of Product", emoji: "👨‍🎨" },
            ].map((member, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow text-center"
              >
                <div className="text-5xl mb-4">{member.emoji}</div>
                <h3 className="font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-sm text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="max-w-6xl mx-auto px-4 py-16 md:py-24">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
          Our Core Values
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              title: "Innovation",
              description:
                "We constantly innovate to bring cutting-edge solutions to the ticketing industry, staying ahead of trends and customer expectations.",
            },
            {
              title: "Transparency",
              description:
                "We believe in clear communication and honest practices. No hidden fees, no surprises - just straightforward ticketing.",
            },
            {
              title: "Excellence",
              description:
                "We strive for excellence in every aspect - from our user interface to our customer support. Quality is non-negotiable.",
            },
            {
              title: "Inclusivity",
              description:
                "We are committed to making ticketing accessible to everyone, regardless of background, location, or ability.",
            },
            {
              title: "Sustainability",
              description:
                "We're environmentally conscious and work towards reducing our carbon footprint through digital-first solutions.",
            },
            {
              title: "Trust",
              description:
                "Building and maintaining trust with our users and partners is fundamental to everything we do.",
            },
          ].map((value, idx) => (
            <div key={idx} className="border-l-4 border-blue-600 pl-6 py-4">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {value.title}
              </h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-6xl mx-auto px-4 py-16 md:py-24">
        <div className="bg-gradient-to-r from-blue-600 to-emerald-600 rounded-3xl p-8 md:p-16 text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Ready to Start Booking?
          </h2>
          <p className="text-center text-blue-100 mb-8 max-w-2xl mx-auto text-lg">
            Join millions of satisfied customers who trust TicketHub for their
            ticketing needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-amber-400 hover:bg-amber-500 text-gray-900 px-8 py-4 rounded-xl font-bold transition-all transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl">
              Start Booking Now
              <ArrowRight size={20} />
            </button>
            <button className="bg-white/20 hover:bg-white/30 backdrop-blur text-white px-8 py-4 rounded-xl font-bold border border-white/30 transition-all">
              Learn More
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default AboutPage;

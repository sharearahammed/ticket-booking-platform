import React from "react";
import {
  Mail,
  Phone,
  LifeBuoy,
  MessageCircle,
  CheckCircle,
  Zap,
  Users,
} from "lucide-react";

const SupportPage = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-emerald-600 text-white pt-32 pb-16 md:pb-24">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Support Center
          </h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto mb-8">
            We’re here to help! Get answers, find guidance, and contact our
            support team for any queries.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
            <div className="flex items-center gap-2 bg-white/20 backdrop-blur px-4 py-2 rounded-full">
              <Zap className="w-4 h-4" /> Fast Response
            </div>
            <div className="flex items-center gap-2 bg-white/20 backdrop-blur px-4 py-2 rounded-full">
              <CheckCircle className="w-4 h-4" /> Reliable Support
            </div>
            <div className="flex items-center gap-2 bg-white/20 backdrop-blur px-4 py-2 rounded-full">
              <Users className="w-4 h-4" /> Expert Team
            </div>
          </div>
        </div>
      </div>

      {/* Support Options */}
      <section className="max-w-6xl mx-auto px-4 py-16 md:py-24">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
          How Can We Help You?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: LifeBuoy,
              title: "FAQ",
              description:
                "Find answers to the most commonly asked questions quickly and easily.",
            },
            {
              icon: Mail,
              title: "Email Support",
              description:
                "Send us a message and our team will get back to you within 24 hours.",
            },
            {
              icon: Phone,
              title: "Call Us",
              description:
                "Reach our support team directly via phone for urgent inquiries.",
            },
            {
              icon: MessageCircle,
              title: "Live Chat",
              description:
                "Chat with our support agents in real-time for instant assistance.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl p-6 md:p-8 border border-gray-200 hover:border-blue-300 transition-colors group"
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
      </section>

      {/* Contact Info Section */}
      <section className="bg-gradient-to-br from-blue-50 to-emerald-50 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Contact Us Directly
          </h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            Reach out to our team via your preferred channel. We’re here to
            ensure you get the help you need.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              {
                icon: Mail,
                label: "support@tickethub.com",
                sub: "Email us anytime",
              },
              {
                icon: Phone,
                label: "+1 234 567 890",
                sub: "Available 9am - 6pm",
              },
              {
                icon: LifeBuoy,
                label: "Help Center",
                sub: "Explore FAQs & guides",
              },
              {
                icon: MessageCircle,
                label: "Live Chat",
                sub: "Chat with agents instantly",
              },
            ].map((contact, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow text-center"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-emerald-600 rounded-lg flex items-center justify-center mb-3 mx-auto">
                  <contact.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 mb-1">
                  {contact.label}
                </h3>
                <p className="text-gray-600 text-sm">{contact.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-6xl mx-auto px-4 py-16 md:py-24">
        <div className="bg-gradient-to-r from-blue-600 to-emerald-600 rounded-3xl p-8 md:p-16 text-white text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need Immediate Assistance?
          </h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto text-lg">
            Our support team is ready to help you with any issue you may face.
          </p>
          <button className="bg-amber-400 hover:bg-amber-500 text-gray-900 px-8 py-4 rounded-xl font-bold transition-all transform hover:scale-105 shadow-lg">
            Contact Support
          </button>
        </div>
      </section>
    </div>
  );
};

export default SupportPage;

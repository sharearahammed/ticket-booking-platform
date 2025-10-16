import React from "react";
import { Cookie } from "lucide-react";

const CookiePolicyPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-emerald-600 via-emerald-700 to-blue-600 text-white pt-32 pb-16 md:pb-24">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur rounded-full mx-auto mb-6">
            <Cookie className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Cookie Policy
          </h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto">
            Learn how TicketHub uses cookies to enhance your experience and
            provide a seamless, personalized service.
          </p>
        </div>
      </div>

      {/* Policy Content */}
      <section className="max-w-4xl mx-auto px-4 py-16 md:py-24 space-y-8">
        <div className="bg-white rounded-2xl p-8 md:p-12 border border-gray-200 shadow-sm">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            What Are Cookies?
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Cookies are small text files stored on your device that help us
            recognize you and provide a better browsing experience. They allow
            us to remember your preferences, login details, and analyze
            website traffic.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-8 md:p-12 border border-gray-200 shadow-sm">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            How We Use Cookies
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>To remember your login and preferences for a personalized experience.</li>
            <li>To analyze traffic and improve our website performance.</li>
            <li>To provide targeted content and marketing based on your interests.</li>
            <li>To ensure the security of your account and transactions.</li>
          </ul>
        </div>

        <div className="bg-white rounded-2xl p-8 md:p-12 border border-gray-200 shadow-sm">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Managing Cookies
          </h2>
          <p className="text-gray-700 leading-relaxed mb-2">
            You can manage or disable cookies through your browser settings. 
            Please note that disabling certain cookies may affect the functionality 
            of our website and your user experience.
          </p>
          <p className="text-gray-700 leading-relaxed">
            For more detailed instructions, refer to your browser’s help guide 
            on managing cookies.
          </p>
        </div>

        <div className="text-center mt-8">
          <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-xl font-bold transition-all transform hover:scale-105 shadow-lg">
            Back to Home
          </button>
        </div>
      </section>
    </div>
  );
};

export default CookiePolicyPage;

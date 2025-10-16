import React from "react";

const TermsOfServicePage = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-emerald-600 text-white pt-32 pb-16 md:pb-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Terms of Service
          </h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto">
            Please read these terms carefully before using our platform. By
            accessing or using TicketHub, you agree to be bound by these terms.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <section className="max-w-4xl mx-auto px-4 py-16 md:py-24 space-y-8">
        <div className="bg-white rounded-2xl p-8 md:p-12 border border-gray-200 shadow-sm hover:shadow-lg transition-shadow">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            1. Acceptance of Terms
          </h2>
          <p className="text-gray-600 leading-relaxed">
            By accessing or using TicketHub, you agree to comply with and be
            bound by these Terms of Service. If you do not agree, please do not
            use our services.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-8 md:p-12 border border-gray-200 shadow-sm hover:shadow-lg transition-shadow">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            2. User Accounts
          </h2>
          <p className="text-gray-600 leading-relaxed mb-2">
            You may need to create an account to access certain features. You
            are responsible for maintaining the confidentiality of your account
            and password.
          </p>
          <p className="text-gray-600 leading-relaxed">
            You agree to notify us immediately of any unauthorized use of your
            account.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-8 md:p-12 border border-gray-200 shadow-sm hover:shadow-lg transition-shadow">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            3. Booking and Payment
          </h2>
          <p className="text-gray-600 leading-relaxed mb-2">
            All ticket bookings are subject to availability. Payments are
            processed securely using industry-standard encryption.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Refunds, cancellations, or changes are governed by our Refund Policy.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-8 md:p-12 border border-gray-200 shadow-sm hover:shadow-lg transition-shadow">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            4. User Conduct
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Users must not misuse the platform by posting fraudulent information,
            violating laws, or interfering with the service.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-8 md:p-12 border border-gray-200 shadow-sm hover:shadow-lg transition-shadow">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            5. Limitation of Liability
          </h2>
          <p className="text-gray-600 leading-relaxed">
            TicketHub is not liable for any direct, indirect, incidental, or
            consequential damages arising from the use of our services.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-8 md:p-12 border border-gray-200 shadow-sm hover:shadow-lg transition-shadow">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            6. Changes to Terms
          </h2>
          <p className="text-gray-600 leading-relaxed">
            We may update these Terms of Service from time to time. Continued
            use of the platform constitutes acceptance of the updated terms.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto px-4 py-16 md:py-24">
        <div className="bg-gradient-to-r from-blue-600 to-emerald-600 rounded-3xl p-8 md:p-16 text-white text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Book Tickets?
          </h2>
          <p className="text-blue-100 mb-6">
            Start exploring events, movies, and transportation options today.
          </p>
          <button className="bg-amber-400 hover:bg-amber-500 text-gray-900 px-8 py-4 rounded-xl font-bold transition-all transform hover:scale-105 shadow-lg">
            Start Booking
          </button>
        </div>
      </section>
    </div>
  );
};

export default TermsOfServicePage;

import React from "react";

const PrivacyPolicyPage = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-emerald-600 text-white pt-32 pb-16 md:pb-24">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Privacy Policy
          </h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto">
            Your privacy is our priority. Learn how TicketHub collects, stores,
            and protects your information.
          </p>
        </div>
      </div>

      {/* Policy Content */}
      <section className="max-w-6xl mx-auto px-4 py-16 md:py-24">
        <div className="bg-white rounded-2xl p-8 md:p-12 border border-gray-200 shadow-lg">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Introduction
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            TicketHub values your privacy and is committed to protecting your personal
            information. This Privacy Policy explains how we collect, use, and safeguard
            your data when you use our services.
          </p>

          <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">
            Information We Collect
          </h3>
          <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
            <li>Personal details like name, email, and phone number.</li>
            <li>Booking history and transaction data.</li>
            <li>Device information and usage analytics.</li>
            <li>Payment information (securely processed via third-party providers).</li>
          </ul>

          <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">
            How We Use Your Information
          </h3>
          <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
            <li>To provide, maintain, and improve our services.</li>
            <li>To process transactions and send booking confirmations.</li>
            <li>To communicate important updates and promotional offers.</li>
            <li>To enhance user experience through analytics and personalization.</li>
          </ul>

          <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">
            Data Security
          </h3>
          <p className="text-gray-600 mb-6 leading-relaxed">
            We use industry-standard security measures including SSL encryption to
            protect your personal data. Your sensitive information, such as payment
            details, is never stored on our servers.
          </p>

          <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">
            Sharing Your Information
          </h3>
          <p className="text-gray-600 mb-6 leading-relaxed">
            TicketHub does not sell or rent your personal data to third parties. We
            may share information with trusted service providers to facilitate bookings
            or improve our services.
          </p>

          <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">
            Your Rights
          </h3>
          <p className="text-gray-600 mb-6 leading-relaxed">
            You have the right to access, correct, or delete your personal information.
            You may also opt-out of promotional communications at any time.
          </p>

          <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">
            Updates to this Policy
          </h3>
          <p className="text-gray-600 mb-6 leading-relaxed">
            TicketHub may update this Privacy Policy periodically. Any changes will
            be posted on this page with the revised effective date.
          </p>

          <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">
            Contact Us
          </h3>
          <p className="text-gray-600 leading-relaxed">
            If you have any questions about this Privacy Policy or our practices,
            please contact us at <span className="font-bold">support@tickethub.com</span>.
          </p>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicyPage;

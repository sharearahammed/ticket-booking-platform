import React from "react";

const RefundPolicyPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-emerald-600 via-emerald-700 to-blue-600 text-white pt-32 pb-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Refund Policy
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto text-blue-100">
          We value your trust and want to make sure you are satisfied with your experience. Read our refund policy for guidance.
        </p>
      </div>

      {/* Policy Content */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-gray-200 space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            General Refund Policy
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Refunds are available for tickets under specific conditions. Please review the terms below before requesting a refund.
          </p>

          <h3 className="text-xl md:text-2xl font-semibold text-gray-900">
            Eligible Refunds
          </h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Tickets canceled at least 24 hours before the event may be refunded.</li>
            <li>Duplicate or accidental bookings are eligible for a full refund.</li>
            <li>Events canceled or rescheduled by the organizer are fully refundable.</li>
          </ul>

          <h3 className="text-xl md:text-2xl font-semibold text-gray-900">
            Non-Eligible Refunds
          </h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Tickets for events attended or partially used are non-refundable.</li>
            <li>Late cancellations (less than 24 hours) may not be refunded.</li>
            <li>Refund requests made after 7 days of purchase will not be accepted.</li>
          </ul>

          <h3 className="text-xl md:text-2xl font-semibold text-gray-900">
            Refund Process
          </h3>
          <p className="text-gray-700 leading-relaxed">
            All refund requests must be submitted via our support page. Refunds are processed within 5–7 business days to the original payment method.
          </p>

          <h3 className="text-xl md:text-2xl font-semibold text-gray-900">
            Contact Support
          </h3>
          <p className="text-gray-700 leading-relaxed">
            If you have any questions regarding refunds, please contact our support team at <a href="mailto:support@tickethub.com" className="text-emerald-600 underline">support@tickethub.com</a>.
          </p>
        </div>
      </section>
    </div>
  );
};

export default RefundPolicyPage;

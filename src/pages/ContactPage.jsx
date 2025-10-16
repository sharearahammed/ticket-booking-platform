import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  AlertCircle,
  Globe,
  MessageSquare,
  Headphones,
  HelpCircle,
} from "lucide-react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    category: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate form submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        category: "",
        message: "",
      });

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitted(false), 5000);
    }, 1500);
  };

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-emerald-600 text-white pt-32 pb-16 md:pb-24">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Get In Touch
          </h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto">
            Have a question or feedback? We'd love to hear from you. Our team is
            here to help!
          </p>
        </div>
      </div>

      {/* Contact Info Cards */}
      <section className="max-w-6xl mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[
            {
              icon: Mail,
              title: "Email Us",
              content: "support@tickethub.com",
              subtext: "Response within 24 hours",
            },
            {
              icon: Phone,
              title: "Call Us",
              content: "+1 (800) 123-4567",
              subtext: "24/7 Customer Support",
            },
            {
              icon: MapPin,
              title: "Visit Us",
              content: "123 Tech Street",
              subtext: "San Francisco, CA 94102",
            },
            {
              icon: Clock,
              title: "Business Hours",
              content: "Mon - Fri: 9AM - 6PM",
              subtext: "EST (UTC-5)",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200 hover:shadow-xl hover:border-blue-300 transition-all group"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-emerald-600 rounded-lg flex items-center justify-center mb-4 group-hover:shadow-lg transition-shadow">
                <item.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {item.title}
              </h3>
              <p className="font-semibold text-blue-600 mb-1">{item.content}</p>
              <p className="text-sm text-gray-600">{item.subtext}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="max-w-6xl mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl p-8 md:p-10 border border-gray-200">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                Send Us a Message
              </h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and we'll get back to you as soon as
                possible.
              </p>

              {submitted && (
                <div className="mb-6 bg-emerald-50 border-2 border-emerald-500 rounded-xl p-4 flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-emerald-900">
                      Message Sent Successfully!
                    </h4>
                    <p className="text-sm text-emerald-800">
                      Thank you for reaching out. We'll respond within 24 hours.
                    </p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition outline-none"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition outline-none"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition outline-none"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Category *
                    </label>
                    <select
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition outline-none"
                    >
                      <option value="">Select a category</option>
                      <option value="booking">Booking Issue</option>
                      <option value="payment">Payment Problem</option>
                      <option value="refund">Refund Request</option>
                      <option value="technical">Technical Support</option>
                      <option value="feedback">Feedback</option>
                      <option value="business">Business Inquiry</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition outline-none"
                    placeholder="How can we help?"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition outline-none resize-none"
                    placeholder="Please describe your issue or inquiry in detail..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 text-white font-bold py-3 px-6 rounded-lg transition-all transform hover:scale-105 disabled:opacity-75 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* FAQ Card */}
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <HelpCircle className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Need Quick Answers?
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Check our FAQ section for common questions and solutions.
              </p>
              <button className="text-blue-600 hover:text-blue-700 font-semibold text-sm flex items-center gap-2">
                Visit FAQ <Send size={16} />
              </button>
            </div>

            {/* Help Center */}
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                <Headphones className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Help Center
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Browse our comprehensive guides and tutorials.
              </p>
              <button className="text-emerald-600 hover:text-emerald-700 font-semibold text-sm flex items-center gap-2">
                Explore Help <Send size={16} />
              </button>
            </div>

            {/* Response Time */}
            <div className="bg-gradient-to-br from-blue-50 to-emerald-50 rounded-2xl p-6 md:p-8 border border-blue-200">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Response Time
              </h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>✓ Email: Within 24 hours</li>
                <li>✓ Phone: Immediate</li>
                <li>✓ Chat: Within 5 minutes</li>
                <li>✓ Weekends/Holidays: 48 hours</li>
              </ul>
            </div>

            {/* Social Links */}
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                Follow Us
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: "📘", name: "Facebook" },
                  { icon: "𝕏", name: "Twitter" },
                  { icon: "📷", name: "Instagram" },
                  { icon: "💼", name: "LinkedIn" },
                ].map((social, idx) => (
                  <button
                    key={idx}
                    className="bg-gray-100 hover:bg-gray-200 text-gray-900 font-semibold py-2 rounded-lg transition text-sm flex items-center justify-center gap-2"
                  >
                    <span>{social.icon}</span>
                    {social.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Categories */}
      <section className="bg-white py-16 md:py-24 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
            How Can We Help?
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Select the category that best matches your inquiry to get the
            fastest response.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: AlertCircle,
                title: "Booking Issues",
                description:
                  "Problems with ticket booking, seat selection, or payment processing.",
              },
              {
                icon: Mail,
                title: "Account & Login",
                description:
                  "Password reset, account recovery, profile updates, and security concerns.",
              },
              {
                icon: MessageSquare,
                title: "Refunds & Cancellations",
                description:
                  "Request refunds, cancel bookings, or inquire about refund policies.",
              },
              {
                icon: Headphones,
                title: "Technical Support",
                description:
                  "App crashes, website issues, bugs, or technical glitches.",
              },
              {
                icon: Globe,
                title: "Business Partnerships",
                description:
                  "Vendor inquiries, partnerships, and enterprise solutions.",
              },
              {
                icon: CheckCircle,
                title: "Feedback & Suggestions",
                description:
                  "Share your ideas, suggestions, and feedback to improve TicketHub.",
              },
            ].map((category, idx) => (
              <div
                key={idx}
                className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all group cursor-pointer"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-emerald-600 rounded-lg flex items-center justify-center mb-4 group-hover:shadow-lg transition-shadow">
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {category.title}
                </h3>
                <p className="text-gray-600 text-sm">{category.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="max-w-6xl mx-auto px-4 py-16 md:py-24">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
          Visit Our Office
        </h2>
        <div className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-lg h-96">
          <iframe
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen=""
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0191488714937!2d-122.40140592345046!3d37.78994097180392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064c7da3de5%3A0x55e6a1e75ecc5e37!2s123%20Tech%20Street%2C%20San%20Francisco%2C%20CA%2094102!5e0!3m2!1sen!2sus!4v1697815423000"
          ></iframe>
        </div>
        <div className="mt-8 bg-gradient-to-r from-blue-50 to-emerald-50 rounded-2xl p-6 md:p-8 border border-blue-200">
          <p className="text-gray-700 text-center">
            <strong>TicketHub Headquarters</strong>
            <br />
            123 Tech Street, San Francisco, CA 94102, USA
            <br />
            <span className="text-gray-600">Mon - Fri: 9AM - 6PM EST</span>
          </p>
        </div>
      </section>

      {/* FAQ Section Preview */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {[
              {
                q: "How do I cancel my booking?",
                a: "You can cancel your booking within 24 hours of purchase from your account dashboard. Refunds are processed within 5-7 business days.",
              },
              {
                q: "What is your refund policy?",
                a: "We offer full refunds for cancellations made up to 48 hours before the event. Partial refunds may apply for cancellations closer to the event date.",
              },
              {
                q: "Is my payment information secure?",
                a: "Yes! We use industry-leading encryption and comply with PCI DSS standards to protect your payment information.",
              },
              {
                q: "How do I receive my tickets?",
                a: "Digital tickets are sent to your email immediately after booking. You can also access them in your account dashboard anytime.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg p-6 border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold flex-shrink-0 mt-1">
                    {idx + 1}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 mb-2">{item.q}</h3>
                    <p className="text-gray-600">{item.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-6xl mx-auto px-4 py-16 md:py-24">
        <div className="bg-gradient-to-r from-blue-600 to-emerald-600 rounded-3xl p-8 md:p-16 text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Still Have Questions?
          </h2>
          <p className="text-center text-blue-100 mb-8 max-w-2xl mx-auto text-lg">
            Our customer support team is available 24/7 to assist you with any
            inquiries.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-amber-400 hover:bg-amber-500 text-gray-900 px-8 py-4 rounded-xl font-bold transition-all transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl">
              Chat with Support
              <MessageSquare size={20} />
            </button>
            <button className="bg-white/20 hover:bg-white/30 backdrop-blur text-white px-8 py-4 rounded-xl font-bold border border-white/30 transition-all">
              Schedule a Call
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
export default ContactPage;

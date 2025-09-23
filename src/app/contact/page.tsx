'use client';

import { useState } from 'react';
import { EnvelopeIcon, PhoneIcon, MapPinIcon, ClockIcon, ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    category: 'general'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert('Thank you for your message! We\'ll get back to you within 24 hours.');
    setFormData({ name: '', email: '', subject: '', message: '', category: 'general' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-4">Contact Us</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We're here to help! Get in touch with our team for any questions, 
            support, or feedback about FAVCOM.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <h2 className="text-xl font-semibold text-white mb-4">Get in Touch</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <EnvelopeIcon className="h-6 w-6 text-blue-400 mt-1" />
                  <div>
                    <p className="text-gray-300 font-medium">Email</p>
                    <p className="text-gray-400">support@favcom.com</p>
                    <p className="text-gray-400">sales@favcom.com</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <PhoneIcon className="h-6 w-6 text-blue-400 mt-1" />
                  <div>
                    <p className="text-gray-300 font-medium">Phone</p>
                    <p className="text-gray-400">+1 (555) 123-4567</p>
                    <p className="text-gray-400">+1 (555) 123-4568</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPinIcon className="h-6 w-6 text-blue-400 mt-1" />
                  <div>
                    <p className="text-gray-300 font-medium">Address</p>
                    <p className="text-gray-400">123 E-commerce Street</p>
                    <p className="text-gray-400">Digital City, DC 12345</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <ClockIcon className="h-6 w-6 text-blue-400 mt-1" />
                  <div>
                    <p className="text-gray-300 font-medium">Business Hours</p>
                    <p className="text-gray-400">Mon-Fri: 9:00 AM - 6:00 PM</p>
                    <p className="text-gray-400">Sat-Sun: 10:00 AM - 4:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <h3 className="text-lg font-semibold text-white mb-4">Quick Support</h3>
              <div className="space-y-3">
                <button className="w-full flex items-center space-x-3 p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200">
                  <ChatBubbleLeftRightIcon className="h-5 w-5" />
                  <span>Live Chat</span>
                </button>
                <button className="w-full flex items-center space-x-3 p-3 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors duration-200">
                  <PhoneIcon className="h-5 w-5" />
                  <span>Call Now</span>
                </button>
                <button className="w-full flex items-center space-x-3 p-3 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors duration-200">
                  <EnvelopeIcon className="h-5 w-5" />
                  <span>Email Support</span>
                </button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-gray-800 rounded-lg p-8 border border-gray-700">
              <h2 className="text-2xl font-semibold text-white mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full input"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full input"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Category</label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className="w-full input"
                  >
                    <option value="general">General Inquiry</option>
                    <option value="support">Technical Support</option>
                    <option value="sales">Sales Question</option>
                    <option value="billing">Billing Issue</option>
                    <option value="feedback">Feedback</option>
                    <option value="partnership">Partnership</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Subject *</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full input"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full input"
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <h3 className="text-lg font-semibold text-white mb-3">How do I track my order?</h3>
              <p className="text-gray-400">
                You can track your order by logging into your account and visiting the "Order History" section. 
                You'll receive tracking updates via email as well.
              </p>
            </div>
            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <h3 className="text-lg font-semibold text-white mb-3">What is your return policy?</h3>
              <p className="text-gray-400">
                We offer a 30-day return policy for most items. Items must be in original condition 
                with tags attached. Visit our Returns page for more details.
              </p>
            </div>
            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <h3 className="text-lg font-semibold text-white mb-3">How does AI recommendation work?</h3>
              <p className="text-gray-400">
                Our AI analyzes your browsing history, purchase patterns, and preferences to suggest 
                products you're likely to love. The more you shop, the better our recommendations get.
              </p>
            </div>
            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <h3 className="text-lg font-semibold text-white mb-3">Is my payment information secure?</h3>
              <p className="text-gray-400">
                Yes, we use industry-standard encryption and security measures to protect your 
                payment information. We never store your full payment details on our servers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
